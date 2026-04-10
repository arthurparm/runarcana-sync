import { collection, query, where, getDocs } from 'firebase/firestore';

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function buildDraftLoadErrorMessage(err, firebaseClient) {
  const isPermissionError =
    err?.code === 'permission-denied' ||
    err?.message?.includes('Missing or insufficient permissions');

  if (!isPermissionError) {
    return `<p>Erro ao carregar fichas: ${escapeHtml(err?.message || 'Erro desconhecido.')}</p>`;
  }

  const projectId = firebaseClient?.app?.options?.projectId || 'desconhecido';
  const uid = firebaseClient?.auth?.currentUser?.uid || 'não disponível';

  return `
    <p>O login funcionou, mas o Firestore bloqueou a leitura das fichas.</p>
    <p><strong>Projeto:</strong> ${escapeHtml(projectId)}<br><strong>UID:</strong> ${escapeHtml(uid)}<br><strong>Coleção:</strong> character_drafts</p>
    <p>Verifique se as regras do Firestore permitem ler documentos de <code>character_drafts</code> quando o usuário autenticado for o dono do documento, por exemplo usando o campo <code>ownerId</code>.</p>
    <p>Se isso continuar mesmo com as regras corretas, confira se o módulo está apontando para o projeto Firebase certo.</p>
  `;
}

export class DraftSelectorDialog {
  constructor(firebaseClient, actor, syncManager) {
    this.firebaseClient = firebaseClient;
    this.actor = actor;
    this.syncManager = syncManager;
  }

  getDraftDisplayName(draft) {
    return draft?.concept?.name || draft?.title || 'Sem Nome';
  }

  getDraftClassLabel(draft) {
    return draft?.classBuild?.classId || draft?.classId || 'Sem Classe';
  }

  async loadDrafts() {
    const user = await this.firebaseClient.waitForAuthReady({ requireUser: true });
    const q = query(
      collection(this.firebaseClient.db, 'character_drafts'),
      where('ownerId', '==', user.uid)
    );
    const snap = await getDocs(q);

    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  }

  buildDialogContent(drafts) {
    let html = `<form><div class="form-group"><label>Ficha:</label><select name="draftId">`;
    if (drafts.length === 0) {
      html += `<option value="">Nenhuma ficha encontrada</option>`;
    } else {
      drafts.forEach(draft => {
        html += `<option value="${draft.id}">${escapeHtml(this.getDraftDisplayName(draft))} (${escapeHtml(this.getDraftClassLabel(draft))})</option>`;
      });
    }
    html += `</select></div>`;

    if (this.actor) {
      html += `<p class="notes">Selecione uma ficha para vincular ao actor atual ou crie uma nova ficha Foundry já conectada ao draft.</p>`;
    } else {
      html += `<p class="notes">Selecione uma ficha para criar um novo actor do Foundry já vinculado ao draft.</p>`;
    }

    html += `</form>`;
    return html;
  }

  getDialogElement(dialog) {
    if (dialog?.element instanceof HTMLElement) return dialog.element;
    if (dialog?.element?.[0] instanceof HTMLElement) return dialog.element[0];
    return null;
  }

  getSelectedDraft(dialog, drafts) {
    const root = this.getDialogElement(dialog);
    const select = root?.querySelector('[name="draftId"]');
    const draftId = select?.value;
    if (!draftId) return null;

    return drafts.find(draft => draft.id === draftId) ?? null;
  }

  async linkDraftToActor(draftId) {
    if (!this.actor) return;

    await this.actor.setFlag('runarcana-sync', 'draftId', draftId);
    ui.notifications.info(`Actor vinculado à ficha ${draftId}`);

    if (this.syncManager) {
      this.syncManager.startListening(this.actor);
    }
  }

  async createActorFromDraft(draft) {
    const actorName = this.getDraftDisplayName(draft);
    const actor = await Actor.create({
      name: actorName,
      type: 'character'
    });

    await actor.setFlag('runarcana-sync', 'draftId', draft.id);
    ui.notifications.info(`Ficha ${actorName} criada e vinculada ao draft ${draft.id}`);

    if (this.syncManager) {
      this.syncManager.startListening(actor);
    }

    actor.sheet?.render(true);
    return actor;
  }

  async render(force = true) {
    const { DialogV2 } = foundry.applications.api;

    try {
      const drafts = await this.loadDrafts();
      const html = this.buildDialogContent(drafts);
      const buttons = [];

      if (this.actor) {
        buttons.push({
          action: "link",
          label: "Vincular Atual",
          icon: "fas fa-link",
          callback: async (event, button, dialog) => {
            const draft = this.getSelectedDraft(dialog, drafts);
            if (!draft) {
              ui.notifications.warn('Selecione uma ficha válida para vincular.');
              return;
            }
            await this.linkDraftToActor(draft.id);
          }
        });
      }

      buttons.push({
        action: "create",
        label: "Criar Nova Ficha",
        icon: "fas fa-user-plus",
        callback: async (event, button, dialog) => {
          const draft = this.getSelectedDraft(dialog, drafts);
          if (!draft) {
            ui.notifications.warn('Selecione uma ficha válida para criar o actor.');
            return;
          }
          await this.createActorFromDraft(draft);
        }
      });

      return DialogV2.wait({
        window: { title: "Vincular Ficha Runarcana" },
        content: html,
        buttons
      });
    } catch(err) {
      return DialogV2.prompt({
        window: { title: "Erro" },
        content: buildDraftLoadErrorMessage(err, this.firebaseClient),
        ok: { label: "Fechar" }
      });
    }
  }
}
