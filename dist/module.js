//#region \0rolldown/runtime.js
var e = (e, t) => () => (e && (t = e(e = 0)), t), t = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), n, r = e((() => {
	n = class {
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
			if (!e.ok) throw Error(`Falha ao listar fichas (HTTP ${e.status}).`);
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
			let { assignedUserId: n, ...r } = t || {}, i = await fetch(`${this.baseUrl}/api/drafts/${e}`, {
				method: "PUT",
				headers: this._headers({
					"Content-Type": "application/json",
					"X-Client-Id": this.clientId
				}),
				body: JSON.stringify(r)
			});
			if (!i.ok) throw Error(`Falha ao salvar a ficha (HTTP ${i.status}).`);
			return i.json();
		}
		async openStream(e, t, n) {
			if (!this.mesaKey) throw Error("Chave da mesa não configurada.");
			let r = `${this.baseUrl}/api/drafts/${e}/stream?token=${encodeURIComponent(this.mesaKey)}`, i = new EventSource(r);
			return i.onmessage = (e) => {
				try {
					t(JSON.parse(e.data));
				} catch (e) {
					console.error("Runarcana Sync | Erro ao processar evento do stream:", e);
				}
			}, i.onerror = (e) => {
				n?.(e);
			}, { close() {
				i.close();
			} };
		}
	};
}));
//#endregion
//#region src/draft-selector.js
function i(e) {
	return String(e ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;");
}
function a(e) {
	return `${e?.concept?.name || e?.title || "Sem Nome"} (${e?.classBuild?.classId || "Sem Classe"})${e?.assignedUserId ? ` — ${e.assignedUserId}` : ""}`;
}
function o(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e ?? []) {
		if (r.id === t) continue;
		let e = r.getFlag("runarcana-sync", "draftId");
		e && n.add(e);
	}
	return n;
}
function s(e) {
	return `<p>Erro ao carregar fichas: ${i(e?.message || "Erro desconhecido.")}</p>
    <p>Verifique se a chave da mesa e a URL do backend estão configuradas corretamente nas configurações do módulo e
    se o servidor (runarcana-api) está no ar.</p>`;
}
var c, l = e((() => {
	c = class {
		constructor(e, t, n) {
			this.apiClient = e, this.actor = t, this.syncManager = n;
		}
		async render(e = !0) {
			let { DialogV2: t } = foundry.applications.api;
			try {
				let e = await this.apiClient.listDrafts(), n = o(game.actors, this.actor.id), r = "<form><div class=\"form-group\"><label>Ficha:</label><select name=\"draftId\">";
				return e.length === 0 ? r += "<option value=\"\">Nenhuma ficha encontrada</option>" : e.forEach((e) => {
					let t = n.has(e.id), o = t ? `${a(e)} (vinculado a outro Ator)` : a(e);
					r += `<option value="${i(e.id)}" ${t ? "disabled" : ""}>${i(o)}</option>`;
				}), r += "</select></div></form>", t.wait({
					window: { title: "Vincular Ficha Runarcana" },
					content: r,
					buttons: [{
						action: "link",
						label: "Vincular",
						icon: "fas fa-link",
						callback: async (e, t, n) => {
							let r = n.element.querySelector("[name=\"draftId\"]"), i = r.value, a = r.selectedOptions?.[0];
							!i || a?.disabled || (await this.actor.setFlag("runarcana-sync", "draftId", i), ui.notifications.info(`Actor vinculado à ficha ${i}`), this.syncManager && this.syncManager.startListening(this.actor));
						}
					}]
				});
			} catch (e) {
				return t.prompt({
					window: { title: "Erro" },
					content: s(e),
					ok: { label: "Fechar" }
				});
			}
		}
	};
}));
//#endregion
//#region src/compendium-sync.js
function u() {
	return game.packs.filter((e) => e.documentName === "Item");
}
async function d(e) {
	let t = new Set((e || []).filter(Boolean)), n = /* @__PURE__ */ new Map();
	if (t.size === 0) return n;
	for (let e of u()) {
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
function f(e) {
	if (!e) return e;
	try {
		return new URL(e, window.location.origin).href;
	} catch {
		return e;
	}
}
function p(e, t) {
	let n = [];
	for (let r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
	return n;
}
async function m(e, t, n) {
	let r = [], i = [];
	for (let e of t) {
		let t = game.packs.get(e);
		if (!t) continue;
		let n = (await t.getDocuments()).map((t) => ({
			packId: e,
			foundryId: t.id,
			name: t.name,
			img: f(t.img),
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
	let a = p(r, h);
	for (let t = 0; t < a.length; t++) await e.putCompendiumItemsBatch(a[t]), n?.(t + 1, a.length);
	return {
		totalSynced: r.length,
		packSummaries: i
	};
}
var h, g = e((() => {
	h = 50;
}));
//#endregion
//#region src/compendium-sync-dialog.js
function _(e) {
	return String(e ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;");
}
var v, y, b = e((() => {
	g(), v = "compendiumSyncSelection", y = class {
		constructor(e) {
			this.apiClient = e;
		}
		async render() {
			let { DialogV2: e } = foundry.applications.api, t = u();
			if (t.length === 0) return e.prompt({
				window: { title: "Sincronizar Compêndio de Itens" },
				content: "<p>Nenhum compêndio do tipo Item foi encontrado neste mundo.</p>",
				ok: { label: "Fechar" }
			});
			let n = [];
			try {
				n = game.settings.get("runarcana-sync", v) ?? [];
			} catch {
				n = [];
			}
			let r = new Set(n), i = "\n      <form>\n        <p>Escolha os compêndios de itens a sincronizar (ex: um compêndio próprio,\n        curado com os itens liberados na sua mesa):</p>\n        <div class=\"form-group\" style=\"max-height: 260px; overflow-y: auto;\">";
			for (let e of t) {
				let t = r.has(e.collection) ? "checked" : "";
				i += `
          <label style="display:block;margin:4px 0;">
            <input type="checkbox" name="pack" value="${_(e.collection)}" ${t} />
            ${_(e.metadata.label)}
            <small>(${_(e.metadata.packageName || e.metadata.system || "")})</small>
          </label>`;
			}
			i += "\n        </div>\n      </form>";
			let a = this.apiClient;
			return e.wait({
				window: { title: "Sincronizar Compêndio de Itens" },
				content: i,
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
						await game.settings.set("runarcana-sync", v, i);
						try {
							let e = await m(a, i, (e, t) => {
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
function x(e) {
	return e ? Array.isArray(e) ? e.filter(Boolean).map(String) : e instanceof Set ? [...e].filter(Boolean).map(String) : typeof e == "object" ? Object.keys(e).filter((t) => e[t]) : [] : [];
}
function S(e) {
	if (!e) return [];
	let t = x(e.value ?? (Array.isArray(e) || e instanceof Set ? e : null)), n = typeof e.custom == "string" ? e.custom.split(/[;,\n]/).map((e) => e.trim()).filter(Boolean) : [];
	return [...new Set([...t, ...n])];
}
function C(e) {
	let t = e.system?.attributes?.senses ?? {}, n = t.ranges ?? {}, r = {};
	for (let e of L) {
		let i = n[e] ?? t[e];
		typeof i == "number" && i > 0 && (r[e] = i);
	}
	return t.units && (r.units = t.units), typeof t.special == "string" && t.special.trim() && (r.special = t.special.trim()), r;
}
function w(e) {
	let t = e.system?.traits ?? {};
	return {
		senses: C(e),
		damageResistances: S(t.dr),
		damageImmunities: S(t.di),
		damageVulnerabilities: S(t.dv),
		armorProficiencies: S(t.armorProf),
		weaponProficiencies: S(t.weaponProf),
		languages: S(t.languages)
	};
}
function T(e) {
	return e ? Array.isArray(e) ? e : typeof e.length == "number" || typeof e[Symbol.iterator] == "function" ? [...e] : typeof e == "object" ? Object.values(e) : [] : [];
}
function E(e, t) {
	let n = T(e.itemTypes?.[t]);
	return n.length > 0 ? n : T(e.items?.contents ?? e.items).filter((e) => e?.type === t);
}
function D(e) {
	return e ? typeof e == "string" ? e : e.name || "" : "";
}
function O(e) {
	let t = e?.system?.hd?.denomination ?? e?.system?.hitDice ?? e?.system?.hitDie;
	if (typeof t == "number" && t > 0) return `d${t}`;
	if (typeof t == "string" && t.trim()) {
		let e = t.trim();
		return e.startsWith("d") ? e : `d${e}`;
	}
	return "";
}
function k(e) {
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
function A(e) {
	let t = E(e, "class"), n = T(e.classes), r = /* @__PURE__ */ new Set(), i = [];
	for (let e of [...t, ...n]) {
		let t = e?.id || e?.name;
		!t || r.has(t) || (r.add(t), i.push(e));
	}
	let a = E(e, "race")[0], o = E(e, "background")[0], s = E(e, "subclass")[0], c = k(e), l = e.system?.traits?.size || "";
	return {
		classes: i.map((e) => ({
			name: e.name || "",
			identifier: e.system?.identifier || e.identifier || "",
			levels: Number(e.system?.levels) || 0,
			hitDie: O(e)
		})),
		subclassName: s?.name || "",
		raceName: a?.name || D(e.system?.details?.race),
		backgroundName: o?.name || D(e.system?.details?.background),
		size: l,
		hitDie: i.map(O).find(Boolean) || "",
		hitDiceValue: c.value,
		hitDiceMax: c.max
	};
}
function j(e) {
	return typeof e == "string" ? e.trim() : "";
}
function M(e) {
	let t = e.system?.details ?? {}, n = {}, r = {}, i = j(t.appearance), a = j(t.age), o = j(t.gender), s = j(t.height), c = j(t.weight), l = j(t.eyes), u = j(t.hair), d = j(t.skin);
	i && (n.appearance = i), a && (n.age = a), o && (n.sex = o), s && (n.height = s), c && (n.weight = c), l && (n.eyes = l), u && (n.hair = u), d && (n.skin = d);
	let f = j(t.alignment), p = j(t.faith), m = j(t.ideal), h = j(t.bond), g = j(t.flaw), _ = j(t.trait), v = j(t.biography?.value);
	return f && (r.alignment = f), p && (r.faith = p), m && (r.ideal = m), h && (r.bond = h), g && (r.flaw = g), _ && (r.trait = _), v && (r.backstory = v), {
		identity: n,
		description: r
	};
}
function N(e) {
	return e >= 2 ? "expertise" : e >= 1;
}
function P(e) {
	return e === "expertise" ? 2 : +!!e;
}
var F, I, L, R, z, B = e((() => {
	F = {
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
	}, I = new Set(["system.attributes.hp.max"]), L = [
		"darkvision",
		"blindsight",
		"tremorsense",
		"truesight"
	], R = [
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
	], z = [
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
function V(e, t) {
	let n;
	return function(...r) {
		clearTimeout(n), n = setTimeout(() => e.apply(this, r), t);
	};
}
function H(e) {
	let t = foundry.utils.deepClone(e);
	return delete t._stats, delete t.sort, delete t.ownership, delete t.folder, t.flags && (delete t.flags.core, delete t.flags.exportSource), t;
}
function U(e) {
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
function W(e) {
	let t = f(e);
	return !t || String(t).includes("mystery-man") || String(t).includes("icons/svg/item-bag") ? "" : t;
}
function G(e) {
	let t = e.statuses;
	return t ? typeof t.size == "number" ? [...t].map(String) : Array.isArray(t) ? t.map(String) : typeof t == "object" ? Object.keys(t) : [] : [];
}
function K(e) {
	if (typeof e.allApplicableEffects == "function") return [...e.allApplicableEffects()];
	let t = e.effects;
	return t?.contents ?? (Array.isArray(t) ? t : []);
}
function q(e) {
	return e.type === "enchantment" || e.isAppliedEnchantment === !0;
}
function J(e) {
	let t = e.duration?.label;
	if (!t) return "";
	let n = String(t).trim();
	return !n || /^(none|nenhum|permanent|permanente|indefinid)/i.test(n) ? "" : n;
}
function Y(e, t) {
	let n = e.parent;
	return n && n !== t && n.name ? n.name : "";
}
function X(e, t) {
	let n = { name: e.name }, r = f(e.img || e.icon);
	r && (n.img = r), e.disabled && (n.disabled = !0), e.isSuppressed && (n.isSuppressed = !0), e.isTemporary && (n.isTemporary = !0);
	let i = G(e);
	i.length && (n.statuses = i);
	let a = J(e);
	a && (n.durationLabel = a);
	let o = Y(e, t);
	return o && (n.source = o), n;
}
function Z(e) {
	return K(e).filter((e) => !e.disabled && !e.isSuppressed && e.name && !q(e)).map((t) => X(t, e)).filter((e) => {
		let t = e.statuses ?? [];
		return t.length === 0 ? !1 : !t.every((e) => e === "exhaustion");
	}).map((e) => {
		let t = {
			name: e.name,
			statuses: e.statuses
		};
		return e.img && (t.img = e.img), t;
	});
}
function Q(e) {
	return K(e).filter((e) => e?.name && !q(e)).map((t) => X(t, e));
}
var $, ee = e((() => {
	B(), g(), $ = class {
		constructor(e) {
			this.apiClient = e, this.streams = /* @__PURE__ */ new Map(), this.activeSyncs = /* @__PURE__ */ new Set(), this.lastKnownDraft = /* @__PURE__ */ new Map(), this.debouncedActorUpdate = V(this._executeActorUpdate.bind(this), 1e3), this.debouncedItemUpdate = V(this._executeItemUpdate.bind(this), 1e3);
		}
		notifyApiError(e, t, n) {
			console.error(`Runarcana Sync | Falha ao ${e} a ficha ${n?.name || n?.id || "desconhecida"}:`, t), ui.notifications.error(`Runarcana Sync: erro ao ${e} a ficha ${n?.name || n?.id || ""}: ${t?.message || "erro desconhecido"}`);
		}
		async startListening(e) {
			let t = e.getFlag("runarcana-sync", "draftId");
			if (!(!t || this.streams.has(e.id))) {
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
			for (let [r, i] of Object.entries(F)) {
				if (r.startsWith("system.abilities") || I.has(r)) continue;
				let a = foundry.utils.getProperty(t, i), o = foundry.utils.getProperty(e, r);
				a != null && a !== o && (n[r] = a);
			}
			if (R.forEach(({ foundry: r, firebase: i }) => {
				let a = e.system.abilities?.[r]?.value || 0, o = (foundry.utils.getProperty(t, `attributes.scores.${i}`) || 10) + (foundry.utils.getProperty(t, `attributes.originBonuses.${i}`) || 0);
				a !== o && (n[`system.abilities.${r}.value`] = o);
			}), R.forEach(({ foundry: r, firebase: i }) => {
				let a = foundry.utils.getProperty(t, `proficiencies.savingThrows.${i}`);
				if (a === void 0) return;
				let o = +!!a;
				(e.system.abilities?.[r]?.proficient ?? 0) !== o && (n[`system.abilities.${r}.proficient`] = o);
			}), z.forEach(({ foundry: r, id: i }) => {
				let a = foundry.utils.getProperty(t, `proficiencies.skills.${i}`);
				if (a === void 0) return;
				let o = P(a);
				(e.system.skills?.[r]?.value ?? 0) !== o && (n[`system.skills.${r}.value`] = o);
			}), Object.keys(n).length > 0 && await e.update(n), t.items && Array.isArray(t.items)) {
				let n = t.items, r = e.items.contents, i = [], a = [], o = [];
				for (let e of n) {
					let t = r.find((t) => t.getFlag("runarcana-sync", "sourceId") === e._id || t.id === e._id), n = U(foundry.utils.deepClone(e));
					if (t) {
						let r = H(t.toObject()), i = H(n);
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
				r = await d(n);
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
		async _executeActorUpdate(e, t) {
			if (!this.lastKnownDraft.has(e.id)) {
				console.warn(`Runarcana Sync | Ignorando atualização de ${e.name}: ainda não temos uma cópia da ficha vinda do backend.`);
				return;
			}
			let n = foundry.utils.deepClone(this.lastKnownDraft.get(e.id));
			for (let [t, r] of Object.entries(F)) {
				if (t.startsWith("system.abilities")) continue;
				let i = foundry.utils.getProperty(e, t);
				i !== void 0 && foundry.utils.setProperty(n, r, i);
			}
			R.forEach(({ foundry: t, firebase: r }) => {
				let i = e.system.abilities?.[t]?.value;
				if (i === void 0) return;
				let a = foundry.utils.getProperty(n, `attributes.originBonuses.${r}`) || 0;
				foundry.utils.setProperty(n, `attributes.scores.${r}`, i - a);
			}), R.forEach(({ foundry: t, firebase: r }) => {
				let i = e.system.abilities?.[t]?.proficient;
				i !== void 0 && foundry.utils.setProperty(n, `proficiencies.savingThrows.${r}`, i >= 1);
			}), z.forEach(({ foundry: t, id: r }) => {
				let i = e.system.skills?.[t]?.value;
				i !== void 0 && foundry.utils.setProperty(n, `proficiencies.skills.${r}`, N(i));
			});
			let r = e.system.attributes?.spellcasting;
			if (r) {
				let e = R.find(({ foundry: e }) => e === r);
				e && foundry.utils.setProperty(n, "spellcasting.ability", e.firebase);
			}
			foundry.utils.setProperty(n, "concept.portraitUrl", W(e.img)), n.conditions = Z(e), n.effects = Q(e), n.traits = w(e), n.foundryIdentity = A(e);
			let i = M(e);
			n.identity = {
				...n.identity ?? {},
				...i.identity
			}, n.description = {
				...n.description ?? {},
				...i.description
			};
			try {
				let r = await this.apiClient.saveDraft(t, n);
				this.lastKnownDraft.set(e.id, r);
			} catch (t) {
				throw this.notifyApiError("salvar", t, e), t;
			}
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
			let n = [];
			for (let t of e.items) try {
				let e = t.toObject();
				e._id = t.getFlag("runarcana-sync", "sourceId") || e._id, e.img = f(e.img);
				let r = H(e);
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
					img: f(t.img),
					system: t.type === "class" ? { levels: t.system?.levels } : {}
				});
			}
			let r = foundry.utils.deepClone(this.lastKnownDraft.get(e.id));
			r.items = n, r.foundryIdentity = A(e), r.conditions = Z(e), r.effects = Q(e);
			try {
				let n = await this.apiClient.saveDraft(t, r);
				this.lastKnownDraft.set(e.id, n);
			} catch (t) {
				throw this.notifyApiError("salvar os itens de", t, e), t;
			}
		}
	};
})), te = /* @__PURE__ */ t((() => {
	r(), l(), b(), ee();
	var e = null, t = null;
	function i(e) {
		let t = game.settings.get("runarcana-sync", e);
		return typeof t == "string" ? t.trim() : "";
	}
	function a() {
		let e = i("compendiumSyncKey");
		if (!e) {
			ui.notifications.warn("Cole a chave de sincronização de compêndio nas configurações do módulo.");
			return;
		}
		let t = i("backendUrl");
		if (!t) {
			ui.notifications.warn("Configure a URL do backend nas configurações do módulo primeiro.");
			return;
		}
		new y(new n({
			mesaKey: i("mesaKey"),
			baseUrl: t,
			syncKey: e
		})).render();
	}
	async function o(e) {
		t?.stopListening(e), await e.unsetFlag("runarcana-sync", "draftId"), ui.notifications.info(`${e.name}: desvinculado da ficha.`);
	}
	async function s(n) {
		if (!i("mesaKey")) return ui.notifications.warn("Cole a chave da mesa nas configurações do módulo");
		if (!e) return ui.notifications.warn("Configure a URL do backend nas configurações do módulo primeiro.");
		let r = n.getFlag("runarcana-sync", "draftId");
		if (r) {
			let { DialogV2: e } = foundry.applications.api;
			if (!await e.confirm({
				window: { title: "Ator já vinculado" },
				content: `<p><strong>${n.name}</strong> já está vinculado à ficha <code>${r}</code>.</p>
        <p>Desvincular agora para escolher outra ficha? A sincronização com a ficha atual para.</p>`,
				yes: { label: "Desvincular" },
				no: { label: "Cancelar" }
			})) return;
			await o(n);
		}
		new c(e, n, t).render(!0);
	}
	var u = class extends FormApplication {
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
			type: u,
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
	}), Hooks.once("ready", () => {
		let r = game.modules.get("runarcana-sync");
		r && (r.api = { openCompendiumSync: a });
		let o = i("mesaKey"), s = i("backendUrl");
		if (!o) {
			console.warn("Runarcana Sync | Chave da mesa não configurada nas configurações do módulo.");
			return;
		}
		if (!s) {
			console.warn("Runarcana Sync | URL do backend não configurada nas configurações do módulo.");
			return;
		}
		e = new n({
			mesaKey: o,
			baseUrl: s,
			syncKey: i("compendiumSyncKey")
		}), t = new $(e), game.actors.forEach((e) => t.startListening(e)), console.log("Runarcana Sync | Backend configurado e ouvindo atores vinculados."), r && (r.api.apiClient = e, r.api.syncManager = t);
	}), Hooks.on("updateActor", (e, n, r, i) => {
		i !== game.user.id || !t || t.handleActorUpdate(e, n);
	}), Hooks.on("createItem", (e, n, r) => {
		r !== game.user.id || !t || !e.parent || t.handleItemUpdate(e.parent);
	}), Hooks.on("updateItem", (e, n, r, i) => {
		i !== game.user.id || !t || !e.parent || t.handleItemUpdate(e.parent);
	}), Hooks.on("deleteItem", (e, n, r) => {
		r !== game.user.id || !t || !e.parent || t.handleItemUpdate(e.parent);
	});
	function d(e) {
		let t = e?.parent;
		return t ? t.documentName === "Actor" ? t : t.documentName === "Item" && t.parent?.documentName === "Actor" ? t.parent : null : null;
	}
	Hooks.on("createActiveEffect", (e, n, r) => {
		if (r !== game.user.id || !t) return;
		let i = d(e);
		i && t.handleActorUpdate(i, {});
	}), Hooks.on("updateActiveEffect", (e, n, r, i) => {
		if (i !== game.user.id || !t) return;
		let a = d(e);
		a && t.handleActorUpdate(a, n);
	}), Hooks.on("deleteActiveEffect", (e, n, r) => {
		if (r !== game.user.id || !t) return;
		let i = d(e);
		i && t.handleActorUpdate(i, {});
	}), Hooks.on("getActorSheetHeaderButtons", (e, t) => {
		let n = e.object;
		if (!n || n.documentName !== "Actor") return;
		let r = !!n.getFlag("runarcana-sync", "draftId");
		t.unshift({
			class: "runarcana-sync-btn",
			icon: "fas fa-sync",
			label: r ? "Runarcana (Vinculado)" : "Runarcana Sync",
			onclick: () => s(n)
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
			onClick: () => s(n)
		});
	});
}));
//#endregion
export default te();
