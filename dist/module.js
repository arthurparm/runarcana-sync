//#region \0rolldown/runtime.js
var e = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, t = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports);
//#endregion
//#region src/api-client.js
function n(e, t) {
	let n = Error(e);
	return n.status = t, n;
}
var r, i = e((() => {
	r = class {
		constructor({ mesaKey: e, baseUrl: t, syncKey: n } = {}) {
			this.mesaKey = typeof e == "string" ? e.trim() : "", this.baseUrl = String(t || "").replace(/\/+$/, ""), this.syncKey = typeof n == "string" ? n.trim() : "", this.clientId = foundry.utils.randomID();
		}
		_headers(e = {}) {
			if (!this.mesaKey) throw Error("Chave da mesa não configurada.");
			return {
				"X-Mesa-Key": this.mesaKey,
				Authorization: `Bearer ${this.mesaKey}`,
				...e
			};
		}
		async listDrafts() {
			let e = await fetch(`${this.baseUrl}/api/drafts`, { headers: this._headers() });
			if (!e.ok) throw n(`Falha ao listar fichas (HTTP ${e.status}).`, e.status);
			return e.json();
		}
		async getDraft(e) {
			let t = await fetch(`${this.baseUrl}/api/drafts/${e}`, { headers: this._headers() });
			if (t.status === 404) return null;
			if (!t.ok) throw Error(`Falha ao buscar a ficha (HTTP ${t.status}).`);
			return t.json();
		}
		async putCompendiumItemsBatch(e) {
			if (!this.syncKey) throw Error("Chave de sincronização de compêndio não configurada.");
			let t = await fetch(`${this.baseUrl}/api/compendium/items`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					"X-Sync-Key": this.syncKey
				},
				body: JSON.stringify({ items: e })
			});
			if (!t.ok) throw Error(`Falha ao sincronizar itens de compêndio (HTTP ${t.status}).`);
			return t.json();
		}
		async saveDraft(e, t) {
			let { assignedUserId: r, ...i } = t || {}, a = typeof i.updatedAt == "string" ? i.updatedAt.trim() : "", o = await fetch(`${this.baseUrl}/api/drafts/${e}`, {
				method: "PUT",
				headers: this._headers({
					"Content-Type": "application/json",
					"X-Client-Id": this.clientId,
					...a ? { "If-Match": a } : {}
				}),
				body: JSON.stringify(i)
			});
			if (o.status === 409) {
				let e = null;
				try {
					e = await o.json();
				} catch {
					e = null;
				}
				let t = n(e?.error || "Ficha foi modificada por outra origem desde a última leitura.", 409);
				throw t.current = e?.current ?? null, t;
			}
			if (!o.ok) throw n(`Falha ao salvar a ficha (HTTP ${o.status}).`, o.status);
			return o.json();
		}
		async requestStreamTicket(e) {
			let t = await fetch(`${this.baseUrl}/api/drafts/${e}/stream-ticket`, {
				method: "POST",
				headers: this._headers()
			});
			if (!t.ok) throw n(`Falha ao obter ticket do stream (HTTP ${t.status}).`, t.status);
			let r = await t.json();
			if (!r?.ticket) throw n("Resposta do ticket do stream sem ticket.", t.status);
			return r.ticket;
		}
		async openStream(e, t, n) {
			if (!this.mesaKey) throw Error("Chave da mesa não configurada.");
			let r = {
				source: null,
				timer: null,
				closed: !1,
				attempts: 0
			}, i = () => {
				if (r.closed || r.timer) return;
				let e = Math.min(3e4, 2e3 * 2 ** Math.min(r.attempts, 4));
				r.attempts += 1, r.timer = setTimeout(() => {
					r.timer = null, o();
				}, e);
			}, a = (a) => {
				let o = `${this.baseUrl}/api/drafts/${e}/stream?ticket=${encodeURIComponent(a)}`, s = new EventSource(o);
				r.source = s, s.onopen = () => {
					r.attempts = 0;
				}, s.onmessage = (e) => {
					try {
						t(JSON.parse(e.data));
					} catch (e) {
						console.error("Runarcana Sync | Erro ao processar evento do stream:", e);
					}
				}, s.onerror = (e) => {
					n?.(e), s.readyState === EventSource.CLOSED && r.source === s && !r.closed && (s.close(), r.source = null, i());
				};
			}, o = async () => {
				if (r.closed) return;
				let t;
				try {
					t = await this.requestStreamTicket(e);
				} catch (e) {
					if (r.closed || (n?.(e), e?.status === 403 || e?.status === 404)) return;
					i();
					return;
				}
				r.closed || a(t);
			};
			return a(await this.requestStreamTicket(e)), { close() {
				r.closed = !0, r.timer &&= (clearTimeout(r.timer), null), r.source?.close(), r.source = null;
			} };
		}
	};
}));
//#endregion
//#region src/draft-selector.js
function a(e) {
	return String(e ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;");
}
function o(e) {
	return `${e?.concept?.name || e?.title || "Sem Nome"} (${e?.classBuild?.classId || "Sem Classe"})${e?.assignedUserId ? " — atribuída a um jogador" : ""}`;
}
function s(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e ?? []) {
		if (r.id === t) continue;
		let e = r.getFlag("runarcana-sync", "draftId");
		e && n.add(e);
	}
	return n;
}
function c(e) {
	return e?.status === 401 ? "<p>Chave da mesa inválida ou revogada.</p>\n      <p>Gere uma nova na página da mesa no site e cole em Configurações do módulo &rsaquo; Chave da mesa.</p>" : `<p>Erro ao carregar fichas: ${a(e?.message || "Erro desconhecido.")}</p>
    <p>Verifique se a chave da mesa e a URL do backend estão configuradas corretamente nas configurações do módulo e
    se o servidor (runarcana-api) está no ar.</p>`;
}
var l, u = e((() => {
	l = class {
		constructor(e, t, n) {
			this.apiClient = e, this.actor = t, this.syncManager = n;
		}
		async render(e = !0) {
			let { DialogV2: t } = foundry.applications.api;
			try {
				let e = await this.apiClient.listDrafts(), n = s(game.actors, this.actor.id), r = "<form><div class=\"form-group\"><label>Ficha:</label><select name=\"draftId\">";
				return e.length === 0 ? r += "<option value=\"\">Nenhuma ficha encontrada</option>" : e.forEach((e) => {
					let t = n.has(e.id), i = t ? `${o(e)} (vinculado a outro Ator)` : o(e);
					r += `<option value="${a(e.id)}" ${t ? "disabled" : ""}>${a(i)}</option>`;
				}), r += "</select></div></form>", t.wait({
					window: { title: "Vincular Ficha Runarcana" },
					content: r,
					buttons: [{
						action: "link",
						label: "Vincular",
						icon: "fas fa-link",
						callback: async (e, t, n) => {
							let r = n.element.querySelector("[name=\"draftId\"]"), i = r.value, a = r.selectedOptions?.[0];
							i && !a?.disabled && (await this.actor.setFlag("runarcana-sync", "draftId", i), ui.notifications.info(`Actor vinculado à ficha ${i}`), this.syncManager && this.syncManager.startListening(this.actor));
						}
					}]
				});
			} catch (e) {
				return t.prompt({
					window: { title: "Erro" },
					content: c(e),
					ok: { label: "Fechar" }
				});
			}
		}
	};
}));
//#endregion
//#region src/compendium-sync.js
function d() {
	return game.packs.filter((e) => e.documentName === "Item");
}
async function f(e) {
	let t = new Set((e || []).filter(Boolean)), n = /* @__PURE__ */ new Map();
	if (t.size === 0) return n;
	for (let e of d()) {
		let r;
		try {
			r = await e.getIndex({ fields: ["flags.runarcana-sync.catalogKey"] });
		} catch (t) {
			console.warn(`Runarcana Sync | Falha ao ler índice do compêndio ${e.collection}:`, t);
			continue;
		}
		for (let i of r) {
			let r = i.flags?.["runarcana-sync"]?.catalogKey;
			r && t.has(r) && !n.has(r) && n.set(r, {
				packId: e.collection,
				foundryId: i._id
			});
		}
	}
	return n;
}
function p(e) {
	if (!e) return e;
	try {
		return new URL(e, window.location.origin).href;
	} catch {
		return e;
	}
}
function m(e, t) {
	let n = [];
	for (let r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
	return n;
}
async function h(e, t, n) {
	let r = [], i = [];
	for (let e of t) {
		let t = game.packs.get(e);
		if (!t) continue;
		let n = (await t.getDocuments()).map((t) => ({
			packId: e,
			foundryId: t.id,
			name: t.name,
			img: p(t.img),
			itemType: t.type,
			catalogKey: t.getFlag("runarcana-sync", "catalogKey") ?? null,
			system: t.toObject().system
		}));
		r.push(...n), i.push({
			packId: e,
			label: t.metadata.label,
			count: n.length
		});
	}
	let a = m(r, g);
	for (let t = 0; t < a.length; t++) await e.putCompendiumItemsBatch(a[t]), n?.(t + 1, a.length);
	return {
		totalSynced: r.length,
		packSummaries: i
	};
}
var g, _ = e((() => {
	g = 50;
}));
//#endregion
//#region src/compendium-sync-dialog.js
function v(e) {
	return String(e ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;");
}
function y(e) {
	let t = e.metadata ?? {};
	if (t.packageType === "module") {
		let e = typeof game < "u" ? game.modules?.get(t.packageName) : void 0;
		return {
			id: `module:${t.packageName}`,
			label: e?.title || t.packageName || "Módulo"
		};
	}
	if (t.packageType === "system") {
		let e = (typeof game < "u" ? game.system?.title : void 0) || t.packageName || t.system || "Sistema", n = /\(SRD\)/i.test(t.label ?? "");
		return {
			id: `system:${t.packageName || t.system}${n ? ":srd" : ""}`,
			label: n ? `${e} (Legacy)` : e
		};
	}
	return {
		id: "world",
		label: "Compêndios do mundo"
	};
}
function b(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = y(n);
		t.has(e.id) || t.set(e.id, {
			id: e.id,
			label: e.label,
			packs: []
		}), t.get(e.id).packs.push(n);
	}
	return Array.from(t.values()).map((e) => ({
		...e,
		packs: e.packs.slice().sort((e, t) => (e.metadata.label ?? "").localeCompare(t.metadata.label ?? "", "pt-BR"))
	})).sort((e, t) => e.label.localeCompare(t.label, "pt-BR"));
}
function ee(e) {
	let t = e.querySelector("input[data-action=\"toggleGroup\"]");
	if (!t) return;
	let n = Array.from(e.querySelectorAll("input[data-action=\"toggleItem\"]")), r = n.filter((e) => e.checked).length;
	t.checked = r > 0 && r === n.length, t.indeterminate = r > 0 && r < n.length;
}
function x(e, t) {
	let n = t.closest("[data-pack-group]");
	if (!n) return;
	let r = t.checked;
	n.querySelectorAll("input[data-action=\"toggleItem\"]").forEach((e) => {
		e.disabled = !r, e.checked = r;
	}), t.indeterminate = !1;
}
function te(e, t) {
	let n = t.closest("[data-pack-group]");
	n && ee(n);
}
var S, C, w, T = e((() => {
	_(), S = "compendiumSyncSelection", C = "\n  .rs-compendium-sync .rs-group-toggle {\n    position: relative;\n    width: 16px;\n    height: 16px;\n    flex: 0 0 auto;\n    border: 1px solid var(--color-border-light-tertiary, #7a7971);\n    border-radius: 3px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .rs-compendium-sync .rs-group-toggle input[type=\"checkbox\"] {\n    position: absolute;\n    inset: 0;\n    margin: 0;\n    opacity: 0;\n    cursor: pointer;\n  }\n  .rs-compendium-sync .rs-group-toggle::after {\n    content: \"\";\n    font-weight: 900;\n    font-size: 12px;\n    line-height: 1;\n    color: #1b1a17;\n    pointer-events: none;\n  }\n  .rs-compendium-sync .rs-group-toggle:has(input:checked),\n  .rs-compendium-sync .rs-group-toggle:has(input:indeterminate) {\n    background: #c9a227;\n  }\n  .rs-compendium-sync .rs-group-toggle:has(input:checked)::after {\n    content: \"\\2713\";\n  }\n  .rs-compendium-sync .rs-group-toggle:has(input:indeterminate)::after {\n    content: \"\\2212\";\n  }\n", w = class {
		constructor(e) {
			this.apiClient = e;
		}
		async render() {
			let { DialogV2: e } = foundry.applications.api, t = d();
			if (t.length === 0) return e.prompt({
				window: { title: "Sincronizar Compêndio de Itens" },
				content: "<p>Nenhum compêndio do tipo Item foi encontrado neste mundo.</p>",
				ok: { label: "Fechar" }
			});
			let n = [];
			try {
				n = game.settings.get("runarcana-sync", S) ?? [];
			} catch {
				n = [];
			}
			let r = new Set(n), i = b(t), a = `
      <style>${C}</style>
      <form class="rs-compendium-sync">
        <p>Escolha os compêndios de itens a sincronizar (ex: um compêndio próprio,
        curado com os itens liberados na sua mesa):</p>
        <div style="max-height: 320px; overflow-y: auto; display: flex; flex-direction: column; column-count: 1; column-width: auto;">`;
			for (let e of i) {
				let t = e.packs.filter((e) => r.has(e.collection)).length, n = t > 0 && t === e.packs.length;
				a += `
          <fieldset data-pack-group style="border:0;margin:0 0 12px 0;padding:0;break-inside:avoid;-webkit-column-break-inside:avoid;">
            <label style="display:flex;align-items:center;gap:6px;font-weight:700;text-transform:uppercase;font-size:0.85em;letter-spacing:0.02em;border-bottom:1px solid var(--color-border-light-tertiary, #7a7971);padding-bottom:4px;margin-bottom:6px;cursor:pointer;">
              <span class="rs-group-toggle">
                <input type="checkbox" data-action="toggleGroup" ${n ? "checked" : ""} />
              </span>
              ${v(e.label)}
            </label>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px 16px;">`;
				for (let t of e.packs) {
					let e = r.has(t.collection) ? "checked" : "";
					a += `
              <label style="display:block;margin:2px 0;">
                <input type="checkbox" name="pack" data-action="toggleItem" value="${v(t.collection)}" ${e} />
                ${v(t.metadata.label)}
              </label>`;
				}
				a += "\n            </div>\n          </fieldset>";
			}
			a += "\n        </div>\n      </form>";
			let o = this.apiClient;
			return e.wait({
				window: { title: "Sincronizar Compêndio de Itens" },
				content: a,
				actions: {
					toggleGroup: x,
					toggleItem: te
				},
				buttons: [{
					action: "sync",
					label: "Sincronizar Selecionados",
					icon: "fas fa-sync",
					default: !0,
					callback: async (e, t, n) => {
						let r = n.element.querySelectorAll("input[name=\"pack\"]:checked"), i = Array.from(r).map((e) => e.value);
						if (i.length === 0) {
							ui.notifications.warn("Runarcana Sync: selecione ao menos um compêndio.");
							return;
						}
						await game.settings.set("runarcana-sync", S, i);
						try {
							let e = await h(o, i, (e, t) => {
								ui.notifications.info(`Runarcana Sync: sincronizando lote ${e} de ${t}...`);
							});
							ui.notifications.info(`Runarcana Sync: ${e.totalSynced} itens sincronizados de ${e.packSummaries.length} compêndio(s).`);
						} catch (e) {
							console.error("Runarcana Sync | Erro ao sincronizar compêndio:", e), ui.notifications.error(`Runarcana Sync: erro ao sincronizar compêndio: ${e.message}`);
						}
					}
				}, {
					action: "cancel",
					label: "Cancelar"
				}]
			});
		}
	};
}));
//#endregion
//#region src/data-mapper.js
function ne(e) {
	return e ? Array.isArray(e) ? e.filter(Boolean).map(String) : e instanceof Set ? [...e].filter(Boolean).map(String) : typeof e == "object" ? Object.keys(e).filter((t) => e[t]) : [] : [];
}
function E(e) {
	if (!e) return [];
	let t = ne(e.value ?? (Array.isArray(e) || e instanceof Set ? e : null)), n = typeof e.custom == "string" ? e.custom.split(/[;,\n]/).map((e) => e.trim()).filter(Boolean) : [];
	return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function D(e) {
	let t = e.system?.attributes?.senses ?? {}, n = t.ranges ?? {}, r = {};
	for (let e of z) {
		let i = n[e] ?? t[e];
		typeof i == "number" && i > 0 && (r[e] = i);
	}
	return t.units && (r.units = t.units), typeof t.special == "string" && t.special.trim() && (r.special = t.special.trim()), r;
}
function O(e) {
	let t = e.system?.traits ?? {};
	return {
		senses: D(e),
		damageResistances: E(t.dr),
		damageImmunities: E(t.di),
		damageVulnerabilities: E(t.dv),
		armorProficiencies: E(t.armorProf),
		weaponProficiencies: E(t.weaponProf),
		languages: E(t.languages)
	};
}
function k(e) {
	return e ? Array.isArray(e) ? e : typeof e.length == "number" || typeof e[Symbol.iterator] == "function" ? [...e] : typeof e == "object" ? Object.values(e) : [] : [];
}
function A(e, t) {
	let n = k(e.itemTypes?.[t]);
	return n.length > 0 ? n : k(e.items?.contents ?? e.items).filter((e) => e?.type === t);
}
function j(e) {
	return e ? typeof e == "string" ? e : e.name || "" : "";
}
function M(e) {
	let t = e?.system?.hd?.denomination ?? e?.system?.hitDice ?? e?.system?.hitDie;
	if (typeof t == "number" && t > 0) return `d${t}`;
	if (typeof t == "string" && t.trim()) {
		let e = t.trim();
		return e.startsWith("d") ? e : `d${e}`;
	}
	return "";
}
function N(e) {
	let t = e.system?.attributes?.hd;
	if (!t) return {
		value: 0,
		max: 0
	};
	let n = Number(t.value), r = Number(t.max);
	return {
		value: Number.isFinite(n) ? n : 0,
		max: Number.isFinite(r) ? r : 0
	};
}
function P(e) {
	let t = A(e, "class"), n = k(e.classes), r = /* @__PURE__ */ new Set(), i = [];
	for (let e of [...t, ...n]) {
		let t = e?.id || e?.name;
		t && !r.has(t) && (r.add(t), i.push(e));
	}
	let a = A(e, "race")[0], o = A(e, "background")[0], s = A(e, "subclass")[0], c = N(e), l = e.system?.traits?.size || "";
	return {
		classes: i.map((e) => ({
			name: e.name || "",
			identifier: e.system?.identifier || e.identifier || "",
			levels: Number(e.system?.levels) || 0,
			hitDie: M(e)
		})),
		subclassName: s?.name || "",
		raceName: a?.name || j(e.system?.details?.race),
		backgroundName: o?.name || j(e.system?.details?.background),
		size: l,
		hitDie: i.map(M).find(Boolean) || "",
		hitDiceValue: c.value,
		hitDiceMax: c.max
	};
}
function F(e) {
	return typeof e == "string" ? e.trim() : "";
}
function re(e) {
	let t = e.system?.details ?? {}, n = {}, r = {}, i = F(t.appearance), a = F(t.age), o = F(t.gender), s = F(t.height), c = F(t.weight), l = F(t.eyes), u = F(t.hair), d = F(t.skin);
	i && (n.appearance = i), a && (n.age = a), o && (n.sex = o), s && (n.height = s), c && (n.weight = c), l && (n.eyes = l), u && (n.hair = u), d && (n.skin = d);
	let f = F(t.alignment), p = F(t.faith), m = F(t.ideal), h = F(t.bond), g = F(t.flaw), _ = F(t.trait), v = F(t.biography?.value);
	return f && (r.alignment = f), p && (r.faith = p), m && (r.ideal = m), h && (r.bond = h), g && (r.flaw = g), _ && (r.trait = _), v && (r.backstory = v), {
		identity: n,
		description: r
	};
}
function ie(e) {
	return e >= 2 ? "expertise" : e >= 1;
}
function I(e) {
	return e === "expertise" ? 2 : +!!e;
}
var L, R, z, B, V, H = e((() => {
	L = {
		"system.abilities.str.value": "attributes.scores.strength",
		"system.abilities.dex.value": "attributes.scores.dexterity",
		"system.abilities.con.value": "attributes.scores.constitution",
		"system.abilities.int.value": "attributes.scores.intelligence",
		"system.abilities.wis.value": "attributes.scores.wisdom",
		"system.abilities.cha.value": "attributes.scores.charisma",
		"system.attributes.hp.max": "derivedStats.maxHp",
		"system.attributes.hp.value": "derivedStats.currentHp",
		"system.attributes.hp.temp": "derivedStats.tempHp",
		"system.attributes.ac.value": "derivedStats.ac",
		"system.currency.cp": "currency.cp",
		"system.currency.sp": "currency.sp",
		"system.currency.ep": "currency.ep",
		"system.currency.gp": "currency.gp",
		"system.currency.pp": "currency.pp",
		"system.spells.spell1.value": "spellSlots.level1.current",
		"system.spells.spell1.max": "spellSlots.level1.max",
		"system.spells.spell2.value": "spellSlots.level2.current",
		"system.spells.spell2.max": "spellSlots.level2.max",
		"system.spells.spell3.value": "spellSlots.level3.current",
		"system.spells.spell3.max": "spellSlots.level3.max",
		"system.spells.spell4.value": "spellSlots.level4.current",
		"system.spells.spell4.max": "spellSlots.level4.max",
		"system.spells.spell5.value": "spellSlots.level5.current",
		"system.spells.spell5.max": "spellSlots.level5.max",
		"system.spells.spell6.value": "spellSlots.level6.current",
		"system.spells.spell6.max": "spellSlots.level6.max",
		"system.spells.spell7.value": "spellSlots.level7.current",
		"system.spells.spell7.max": "spellSlots.level7.max",
		"system.spells.spell8.value": "spellSlots.level8.current",
		"system.spells.spell8.max": "spellSlots.level8.max",
		"system.spells.spell9.value": "spellSlots.level9.current",
		"system.spells.spell9.max": "spellSlots.level9.max",
		"system.spells.pact.value": "spellSlots.pact.current",
		"system.spells.pact.max": "spellSlots.pact.max",
		"system.resources.primary.value": "resources.primary.current",
		"system.resources.primary.max": "resources.primary.max",
		"system.resources.primary.label": "resources.primary.name",
		"system.resources.secondary.value": "resources.secondary.current",
		"system.resources.secondary.max": "resources.secondary.max",
		"system.resources.secondary.label": "resources.secondary.name",
		"system.resources.tertiary.value": "resources.tertiary.current",
		"system.resources.tertiary.max": "resources.tertiary.max",
		"system.resources.tertiary.label": "resources.tertiary.name",
		"system.attributes.death.success": "derivedStats.deathSaveSuccesses",
		"system.attributes.death.failure": "derivedStats.deathSaveFailures",
		"system.attributes.exhaustion": "derivedStats.exhaustion"
	}, R = /* @__PURE__ */ new Set(["system.attributes.hp.max"]), z = [
		"darkvision",
		"blindsight",
		"tremorsense",
		"truesight"
	], B = [
		{
			foundry: "str",
			firebase: "strength"
		},
		{
			foundry: "dex",
			firebase: "dexterity"
		},
		{
			foundry: "con",
			firebase: "constitution"
		},
		{
			foundry: "int",
			firebase: "intelligence"
		},
		{
			foundry: "wis",
			firebase: "wisdom"
		},
		{
			foundry: "cha",
			firebase: "charisma"
		}
	], V = [
		{
			foundry: "acr",
			id: "acrobatics"
		},
		{
			foundry: "ani",
			id: "animal-handling"
		},
		{
			foundry: "arc",
			id: "arcana"
		},
		{
			foundry: "ath",
			id: "athletics"
		},
		{
			foundry: "dec",
			id: "deception"
		},
		{
			foundry: "his",
			id: "history"
		},
		{
			foundry: "ins",
			id: "insight"
		},
		{
			foundry: "itm",
			id: "intimidation"
		},
		{
			foundry: "inv",
			id: "investigation"
		},
		{
			foundry: "med",
			id: "medicine"
		},
		{
			foundry: "nat",
			id: "nature"
		},
		{
			foundry: "prc",
			id: "perception"
		},
		{
			foundry: "prf",
			id: "performance"
		},
		{
			foundry: "per",
			id: "persuasion"
		},
		{
			foundry: "rel",
			id: "religion"
		},
		{
			foundry: "slt",
			id: "sleight-of-hand"
		},
		{
			foundry: "ste",
			id: "stealth"
		},
		{
			foundry: "sur",
			id: "survival"
		}
	];
}));
//#endregion
//#region src/sync-manager.js
function U(e, t) {
	let n;
	return function(...r) {
		clearTimeout(n), n = setTimeout(() => e.apply(this, r), t);
	};
}
function W(e) {
	let t = foundry.utils.deepClone(e);
	return delete t._stats, delete t.sort, delete t.ownership, delete t.folder, t.flags && (delete t.flags.core, delete t.flags.exportSource), t;
}
function G(e) {
	if (!e.system || !e.system.activities) return e;
	let t = e.system.activities;
	if (Array.isArray(t)) {
		let n = {};
		t.forEach((e, t) => {
			let r = e._id || foundry.utils.randomID();
			e._id = r, n[r] = e;
		}), e.system.activities = n;
	} else if (typeof t == "object") for (let [e, n] of Object.entries(t)) n._id ||= e;
	return e;
}
function K(e) {
	let t = p(e);
	return !t || String(t).includes("mystery-man") || String(t).includes("icons/svg/item-bag") ? "" : t;
}
function q(e) {
	let t = e.statuses;
	return t ? typeof t.size == "number" ? [...t].map(String) : Array.isArray(t) ? t.map(String) : typeof t == "object" ? Object.keys(t) : [] : [];
}
function J(e) {
	if (typeof e.allApplicableEffects == "function") return [...e.allApplicableEffects()];
	let t = e.effects;
	return t?.contents ?? (Array.isArray(t) ? t : []);
}
function Y(e) {
	return e.type === "enchantment" || e.isAppliedEnchantment === !0;
}
function ae(e) {
	let t = e.duration?.label;
	if (!t) return "";
	let n = String(t).trim();
	return !n || /^(none|nenhum|permanent|permanente|indefinid)/i.test(n) ? "" : n;
}
function oe(e, t) {
	let n = e.parent;
	return n && n !== t && n.name ? n.name : "";
}
function X(e, t) {
	let n = { name: e.name }, r = p(e.img || e.icon);
	r && (n.img = r), e.disabled && (n.disabled = !0), e.isSuppressed && (n.isSuppressed = !0), e.isTemporary && (n.isTemporary = !0);
	let i = q(e);
	i.length && (n.statuses = i);
	let a = ae(e);
	a && (n.durationLabel = a);
	let o = oe(e, t);
	return o && (n.source = o), n;
}
function Z(e) {
	return J(e).filter((e) => !e.disabled && !e.isSuppressed && e.name && !Y(e)).map((t) => X(t, e)).filter((e) => {
		let t = e.statuses ?? [];
		return t.length !== 0 && !t.every((e) => e === "exhaustion");
	}).map((e) => {
		let t = {
			name: e.name,
			statuses: e.statuses
		};
		return e.img && (t.img = e.img), t;
	});
}
function Q(e) {
	return J(e).filter((e) => e?.name && !Y(e)).map((t) => X(t, e));
}
var $, se = e((() => {
	H(), _(), $ = class {
		constructor(e) {
			this.apiClient = e, this.streams = /* @__PURE__ */ new Map(), this.activeSyncs = /* @__PURE__ */ new Set(), this.lastKnownDraft = /* @__PURE__ */ new Map(), this.debouncedActorUpdate = U(this._executeActorUpdate.bind(this), 1e3), this.debouncedItemUpdate = U(this._executeItemUpdate.bind(this), 1e3);
		}
		notifyApiError(e, t, n) {
			console.error(`Runarcana Sync | Falha ao ${e} a ficha ${n?.name || n?.id || "desconhecida"}:`, t), ui.notifications.error(`Runarcana Sync: erro ao ${e} a ficha ${n?.name || n?.id || ""}: ${t?.message || "erro desconhecido"}`);
		}
		async startListening(e) {
			let t = e.getFlag("runarcana-sync", "draftId");
			if (t && !this.streams.has(e.id)) {
				this.streams.set(e.id, { close() {} });
				try {
					try {
						let n = await this.apiClient.getDraft(t);
						n && (this.lastKnownDraft.set(e.id, n), await this._applyRemoteDraft(e, n), await this._executeActorUpdate(e, t), await this._executeItemUpdate(e, t));
					} catch (t) {
						this.notifyApiError("carregar", t, e);
					}
					let n = await this.apiClient.openStream(t, async (t) => {
						if (t.sourceClientId === this.apiClient.clientId) {
							this.lastKnownDraft.set(e.id, t.data);
							return;
						}
						this.lastKnownDraft.set(e.id, t.data), this.activeSyncs.add(e.id);
						try {
							await this._applyRemoteDraft(e, t.data);
						} finally {
							this.activeSyncs.delete(e.id);
						}
					}, (e) => {
						console.warn("Runarcana Sync | Stream desconectado, tentando reconectar automaticamente:", e);
					});
					this.streams.set(e.id, n);
				} catch (t) {
					this.streams.delete(e.id), this.notifyApiError("conectar ao stream de", t, e);
				}
			}
		}
		stopListening(e) {
			let t = this.streams.get(e.id);
			t && (t.close(), this.streams.delete(e.id)), this.lastKnownDraft.delete(e.id);
		}
		async _applyRemoteDraft(e, t) {
			let n = {};
			for (let [r, i] of Object.entries(L)) {
				if (r.startsWith("system.abilities") || R.has(r)) continue;
				let a = foundry.utils.getProperty(t, i), o = foundry.utils.getProperty(e, r);
				a != null && a !== o && (n[r] = a);
			}
			if (B.forEach(({ foundry: r, firebase: i }) => {
				let a = e.system.abilities?.[r]?.value || 0, o = (foundry.utils.getProperty(t, `attributes.scores.${i}`) || 10) + (foundry.utils.getProperty(t, `attributes.originBonuses.${i}`) || 0);
				a !== o && (n[`system.abilities.${r}.value`] = o);
			}), B.forEach(({ foundry: r, firebase: i }) => {
				let a = foundry.utils.getProperty(t, `proficiencies.savingThrows.${i}`);
				if (a === void 0) return;
				let o = +!!a;
				(e.system.abilities?.[r]?.proficient ?? 0) !== o && (n[`system.abilities.${r}.proficient`] = o);
			}), V.forEach(({ foundry: r, id: i }) => {
				let a = foundry.utils.getProperty(t, `proficiencies.skills.${i}`);
				if (a === void 0) return;
				let o = I(a);
				(e.system.skills?.[r]?.value ?? 0) !== o && (n[`system.skills.${r}.value`] = o);
			}), Object.keys(n).length > 0 && await e.update(n), t.items && Array.isArray(t.items)) {
				let n = t.items, r = e.items.contents, i = [], a = [], o = [];
				for (let e of n) {
					let t = r.find((t) => t.getFlag("runarcana-sync", "sourceId") === e._id || t.id === e._id), n = G(foundry.utils.deepClone(e));
					if (t) {
						let r = W(t.toObject()), i = W(n);
						if (i._id = r._id, r.flags?.["runarcana-sync"] && delete r.flags["runarcana-sync"], i.flags?.["runarcana-sync"] && delete i.flags["runarcana-sync"], JSON.stringify(r) !== JSON.stringify(i)) {
							let r = n;
							r._id = t.id, foundry.utils.setProperty(r, "flags.runarcana-sync.sourceId", e._id), a.push(r);
						}
					} else {
						let t = n;
						foundry.utils.setProperty(t, "flags.runarcana-sync.sourceId", e._id), delete t._id, i.push(t);
					}
				}
				for (let e of r) {
					let t = e.getFlag("runarcana-sync", "sourceId");
					t && (n.some((e) => e._id === t) || o.push(e.id));
				}
				o.length > 0 && await e.deleteEmbeddedDocuments("Item", o), i.length > 0 && await e.createEmbeddedDocuments("Item", i), a.length > 0 && await e.updateEmbeddedDocuments("Item", a);
			}
			t.equipment && await this._applyEquipmentFromCompendium(e, t.equipment);
		}
		async _applyEquipmentFromCompendium(e, t) {
			let n = [
				t.armorId,
				...t.weaponIds || [],
				...t.gearIds || []
			].filter(Boolean);
			if (n.length === 0) return;
			let r;
			try {
				r = await f(n);
			} catch (e) {
				console.warn("Runarcana Sync | Falha ao procurar itens de equipamento no compêndio:", e);
				return;
			}
			if (r.size === 0) return;
			let i = e.items.contents, a = [];
			for (let [e, t] of r) {
				if (i.some((t) => t.getFlag("runarcana-sync", "catalogKey") === e)) continue;
				let n = game.packs.get(t.packId), r = n ? await n.getDocument(t.foundryId) : null;
				if (!r) continue;
				let o = r.toObject();
				delete o._id, foundry.utils.setProperty(o, "flags.runarcana-sync.catalogKey", e), a.push(o);
			}
			a.length > 0 && await e.createEmbeddedDocuments("Item", a);
		}
		async handleActorUpdate(e, t) {
			if (this.activeSyncs.has(e.id)) return;
			let n = e.getFlag("runarcana-sync", "draftId");
			n && this.debouncedActorUpdate(e, n);
		}
		_overlayActorOntoDraft(e, t) {
			for (let [n, r] of Object.entries(L)) {
				if (n.startsWith("system.abilities")) continue;
				let i = foundry.utils.getProperty(e, n);
				i !== void 0 && foundry.utils.setProperty(t, r, i);
			}
			B.forEach(({ foundry: n, firebase: r }) => {
				let i = e.system.abilities?.[n]?.value;
				if (i === void 0) return;
				let a = foundry.utils.getProperty(t, `attributes.originBonuses.${r}`) || 0;
				foundry.utils.setProperty(t, `attributes.scores.${r}`, i - a);
			}), B.forEach(({ foundry: n, firebase: r }) => {
				let i = e.system.abilities?.[n]?.proficient;
				i !== void 0 && foundry.utils.setProperty(t, `proficiencies.savingThrows.${r}`, i >= 1);
			}), V.forEach(({ foundry: n, id: r }) => {
				let i = e.system.skills?.[n]?.value;
				i !== void 0 && foundry.utils.setProperty(t, `proficiencies.skills.${r}`, ie(i));
			});
			let n = e.system.attributes?.spellcasting;
			if (n) {
				let e = B.find(({ foundry: e }) => e === n);
				e && foundry.utils.setProperty(t, "spellcasting.ability", e.firebase);
			}
			foundry.utils.setProperty(t, "concept.portraitUrl", K(e.img)), t.conditions = Z(e), t.effects = Q(e), t.traits = O(e), t.foundryIdentity = P(e);
			let r = re(e);
			t.identity = {
				...t.identity ?? {},
				...r.identity
			}, t.description = {
				...t.description ?? {},
				...r.description
			};
		}
		_overlayItemsOntoDraft(e, t) {
			let n = [];
			for (let t of e.items) try {
				let e = t.toObject();
				e._id = t.getFlag("runarcana-sync", "sourceId") || e._id, e.img = p(e.img);
				let r = W(e);
				[
					"class",
					"subclass",
					"race",
					"background"
				].includes(r.type) && r.system && delete r.system.advancement, n.push(r);
			} catch (e) {
				console.warn(`Runarcana Sync | Não foi possível serializar ${t.name} (${t.type}):`, e), n.push({
					_id: t.getFlag("runarcana-sync", "sourceId") || t.id,
					name: t.name,
					type: t.type,
					img: p(t.img),
					system: t.type === "class" ? { levels: t.system?.levels } : {}
				});
			}
			t.items = n, t.foundryIdentity = P(e), t.conditions = Z(e), t.effects = Q(e);
		}
		async _saveDraftFromActor(e, t, n, r) {
			let i = async () => {
				if (!this.lastKnownDraft.has(e.id)) return console.warn(`Runarcana Sync | Ignorando atualização de ${e.name}: ainda não temos uma cópia da ficha vinda do backend.`), null;
				let r = foundry.utils.deepClone(this.lastKnownDraft.get(e.id));
				return n(e, r), this.apiClient.saveDraft(t, r);
			};
			try {
				let t = await i();
				t && this.lastKnownDraft.set(e.id, t);
			} catch (t) {
				if (t?.status === 409 && t.current) {
					this.lastKnownDraft.set(e.id, t.current);
					try {
						let t = await i();
						t && this.lastKnownDraft.set(e.id, t);
						return;
					} catch (t) {
						throw this.notifyApiError(r, t, e), t;
					}
				}
				throw this.notifyApiError(r, t, e), t;
			}
		}
		async _executeActorUpdate(e, t) {
			if (!this.lastKnownDraft.has(e.id)) {
				console.warn(`Runarcana Sync | Ignorando atualização de ${e.name}: ainda não temos uma cópia da ficha vinda do backend.`);
				return;
			}
			await this._saveDraftFromActor(e, t, (e, t) => {
				this._overlayActorOntoDraft(e, t);
			}, "salvar");
		}
		async handleItemUpdate(e) {
			if (this.activeSyncs.has(e.id)) return;
			let t = e.getFlag("runarcana-sync", "draftId");
			t && this.debouncedItemUpdate(e, t);
		}
		async _executeItemUpdate(e, t) {
			if (!this.lastKnownDraft.has(e.id)) {
				console.warn(`Runarcana Sync | Ignorando atualização de itens de ${e.name}: ainda não temos uma cópia da ficha vinda do backend.`);
				return;
			}
			await this._saveDraftFromActor(e, t, (e, t) => {
				this._overlayItemsOntoDraft(e, t);
			}, "salvar os itens de");
		}
	};
})), ce = /* @__PURE__ */ t((() => {
	i(), u(), T(), se();
	var e = null, t = null;
	function n(e) {
		let t = game.settings.get("runarcana-sync", e);
		return typeof t == "string" ? t.trim() : "";
	}
	function a() {
		let e = n("compendiumSyncKey");
		if (!e) {
			ui.notifications.warn("Cole a chave de sincronização de compêndio nas configurações do módulo.");
			return;
		}
		let t = n("backendUrl");
		if (!t) {
			ui.notifications.warn("Configure a URL do backend nas configurações do módulo primeiro.");
			return;
		}
		let i = new r({
			mesaKey: n("mesaKey"),
			baseUrl: t,
			syncKey: e
		});
		new w(i).render();
	}
	async function o(e, n) {
		t?.stopListening(e), await e.unsetFlag("runarcana-sync", "draftId"), ui.notifications.info(n ?? `${e.name}: desvinculado da ficha.`);
	}
	async function c() {
		if (!game.user.isGM) return;
		let e = /* @__PURE__ */ new Map();
		for (let t of game.actors) {
			let n = t.getFlag("runarcana-sync", "draftId");
			n && (e.has(n) || e.set(n, []), e.get(n).push(t));
		}
		for (let t of e.values()) {
			if (t.length <= 1) continue;
			let [e, ...n] = [...t].sort((e, t) => (e._stats?.createdTime ?? 0) - (t._stats?.createdTime ?? 0));
			for (let t of n) await o(t, `Runarcana Sync: ${t.name} estava vinculado à mesma ficha que ${e.name} — desvinculado automaticamente (limpeza de duplicata).`);
		}
	}
	async function d(r) {
		if (!n("mesaKey")) return ui.notifications.warn("Cole a chave da mesa nas configurações do módulo");
		if (!e) return ui.notifications.warn("Configure a URL do backend nas configurações do módulo primeiro.");
		let i = r.getFlag("runarcana-sync", "draftId");
		if (i) {
			let { DialogV2: e } = foundry.applications.api;
			if (!await e.confirm({
				window: { title: "Ator já vinculado" },
				content: `<p><strong>${r.name}</strong> já está vinculado à ficha <code>${i}</code>.</p>
        <p>Desvincular agora para escolher outra ficha? A sincronização com a ficha atual para.</p>`,
				yes: { label: "Desvincular" },
				no: { label: "Cancelar" }
			})) return;
			await o(r);
		}
		new l(e, r, t).render(!0);
	}
	var f = class extends FormApplication {
		constructor() {
			super({});
		}
		render() {
			return a(), this;
		}
		async _updateObject() {}
	};
	Hooks.once("init", () => {
		game.settings.register("runarcana-sync", "mesaKey", {
			name: "Chave da mesa",
			hint: "Gerada no site, na página da mesa. Cole aqui.",
			scope: "world",
			config: !0,
			type: String,
			default: "",
			requiresReload: !0
		}), game.settings.register("runarcana-sync", "compendiumSyncKey", {
			name: "Chave de Sincronização de Compêndio",
			hint: "Só para enviar itens ao catálogo compartilhado do site (COMPENDIUM_SYNC_KEY). Não é a chave da mesa nem login.",
			scope: "world",
			config: !0,
			type: String,
			default: ""
		}), game.settings.register("runarcana-sync", "compendiumSyncSelection", {
			scope: "world",
			config: !1,
			type: Array,
			default: []
		}), game.settings.registerMenu("runarcana-sync", "compendiumSyncMenu", {
			name: "Sincronizar Compêndio de Itens",
			label: "Abrir Sincronização",
			hint: "Escolhe quais compêndios de itens do mundo sincronizar com o backend, pra alimentar o seletor de equipamento do site.",
			icon: "fas fa-box-open",
			type: f,
			restricted: !0
		}), game.settings.register("runarcana-sync", "backendUrl", {
			name: "URL do Backend Runarcana",
			hint: "URL base do runarcana-api. Só altere se estiver hospedando o backend por conta própria.",
			scope: "world",
			config: !0,
			type: String,
			default: "https://api.runarcana.org",
			requiresReload: !0
		});
	}), Hooks.once("ready", async () => {
		let i = game.modules.get("runarcana-sync");
		i && (i.api = { openCompendiumSync: a });
		let o = n("mesaKey"), s = n("backendUrl");
		if (!o) {
			console.warn("Runarcana Sync | Chave da mesa não configurada nas configurações do módulo.");
			return;
		}
		if (!s) {
			console.warn("Runarcana Sync | URL do backend não configurada nas configurações do módulo.");
			return;
		}
		e = new r({
			mesaKey: o,
			baseUrl: s,
			syncKey: n("compendiumSyncKey")
		}), t = new $(e), await c(), game.actors.forEach((e) => t.startListening(e)), console.log("Runarcana Sync | Backend configurado e ouvindo atores vinculados."), i && (i.api.apiClient = e, i.api.syncManager = t);
	}), Hooks.on("updateActor", (e, n, r, i) => {
		i === game.user.id && t && t.handleActorUpdate(e, n);
	}), Hooks.on("createActor", (e, t, n) => {
		if (n !== game.user.id) return;
		let r = e.getFlag("runarcana-sync", "draftId");
		r && s(game.actors, e.id).has(r) && (e.unsetFlag("runarcana-sync", "draftId"), ui.notifications.warn(`Runarcana Sync: ${e.name} veio com um vínculo herdado (provavelmente de uma duplicação) de uma ficha já vinculada a outro Ator — desvinculado automaticamente.`));
	}), Hooks.on("deleteActor", (e, n, r) => {
		r === game.user.id && t && t.stopListening(e);
	}), Hooks.on("createItem", (e, n, r) => {
		r === game.user.id && t && e.parent && t.handleItemUpdate(e.parent);
	}), Hooks.on("updateItem", (e, n, r, i) => {
		i === game.user.id && t && e.parent && t.handleItemUpdate(e.parent);
	}), Hooks.on("deleteItem", (e, n, r) => {
		r === game.user.id && t && e.parent && t.handleItemUpdate(e.parent);
	});
	function p(e) {
		let t = e?.parent;
		return t ? t.documentName === "Actor" ? t : t.documentName === "Item" && t.parent?.documentName === "Actor" ? t.parent : null : null;
	}
	Hooks.on("createActiveEffect", (e, n, r) => {
		if (r !== game.user.id || !t) return;
		let i = p(e);
		i && t.handleActorUpdate(i, {});
	}), Hooks.on("updateActiveEffect", (e, n, r, i) => {
		if (i !== game.user.id || !t) return;
		let a = p(e);
		a && t.handleActorUpdate(a, n);
	}), Hooks.on("deleteActiveEffect", (e, n, r) => {
		if (r !== game.user.id || !t) return;
		let i = p(e);
		i && t.handleActorUpdate(i, {});
	}), Hooks.on("getActorSheetHeaderButtons", (e, t) => {
		let n = e.object;
		if (!n || n.documentName !== "Actor") return;
		let r = !!n.getFlag("runarcana-sync", "draftId");
		t.unshift({
			class: "runarcana-sync-btn",
			icon: "fas fa-sync",
			label: r ? "Runarcana (Vinculado)" : "Runarcana Sync",
			onclick: () => d(n)
		});
	}), Hooks.on("getHeaderControlsActorSheetV2", (e, t) => {
		let n = e.document;
		if (!n || n.documentName !== "Actor") return;
		let r = !!n.getFlag("runarcana-sync", "draftId");
		t.unshift({
			action: "runarcana-sync",
			icon: "fas fa-sync",
			label: r ? "Runarcana (Vinculado)" : "Runarcana Sync",
			class: "runarcana-sync-btn",
			onClick: () => d(n)
		});
	});
}));
//#endregion
export default ce();
