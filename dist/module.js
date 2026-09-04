//#region \0rolldown/runtime.js
var e = (e, t) => () => (e && (t = e(e = 0)), t), t = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), n, r = e((() => {
	n = () => void 0;
}));
//#endregion
//#region node_modules/@firebase/util/dist/index.esm.js
function i() {
	if (typeof self < "u") return self;
	if (typeof window < "u") return window;
	if (typeof global < "u") return global;
	throw Error("Unable to locate global object.");
}
function a() {
	return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function o() {
	return typeof window < "u" && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(a());
}
function s() {
	return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers";
}
function c() {
	let e = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
	return typeof e == "object" && e.id !== void 0;
}
function l() {
	return typeof navigator == "object" && navigator.product === "ReactNative";
}
function u() {
	let e = a();
	return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
}
function d() {
	try {
		return typeof indexedDB == "object";
	} catch {
		return !1;
	}
}
function f() {
	return new Promise((e, t) => {
		try {
			let n = !0, r = "validate-browser-context-for-indexeddb-analytics-module", i = self.indexedDB.open(r);
			i.onsuccess = () => {
				i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
			}, i.onupgradeneeded = () => {
				n = !1;
			}, i.onerror = () => {
				t(i.error?.message || "");
			};
		} catch (e) {
			t(e);
		}
	});
}
function ee(e, t) {
	return e.replace(Ee, (e, n) => {
		let r = t[n];
		return r == null ? `<${n}?>` : String(r);
	});
}
function te(e) {
	for (let t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
	return !0;
}
function p(e, t) {
	if (e === t) return !0;
	let n = Object.keys(e), r = Object.keys(t);
	for (let i of n) {
		if (!r.includes(i)) return !1;
		let n = e[i], a = t[i];
		if (ne(n) && ne(a)) {
			if (!p(n, a)) return !1;
		} else if (n !== a) return !1;
	}
	for (let e of r) if (!n.includes(e)) return !1;
	return !0;
}
function ne(e) {
	return typeof e == "object" && !!e;
}
function m(e) {
	let t = [];
	for (let [n, r] of Object.entries(e)) Array.isArray(r) ? r.forEach((e) => {
		t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e));
	}) : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
	return t.length ? "&" + t.join("&") : "";
}
function re(e) {
	let t = {};
	return e.replace(/^\?/, "").split("&").forEach((e) => {
		if (e) {
			let [n, r] = e.split("=");
			t[decodeURIComponent(n)] = decodeURIComponent(r);
		}
	}), t;
}
function ie(e) {
	let t = e.indexOf("?");
	if (!t) return "";
	let n = e.indexOf("#", t);
	return e.substring(t, n > 0 ? n : void 0);
}
function ae(e, t) {
	let n = new De(e, t);
	return n.subscribe.bind(n);
}
function oe(e, t) {
	if (typeof e != "object" || !e) return !1;
	for (let n of t) if (n in e && typeof e[n] == "function") return !0;
	return !1;
}
function se() {}
function h(e) {
	return e && e._delegate ? e._delegate : e;
}
function ce(e) {
	try {
		return (e.startsWith("http://") || e.startsWith("https://") ? new URL(e).hostname : e).endsWith(".cloudworkstations.dev");
	} catch {
		return !1;
	}
}
async function le(e) {
	return (await fetch(e, { credentials: "include" })).ok;
}
var ue, de, fe, pe, me, he, ge, _e, ve, ye, be, xe, Se, Ce, we, Te, g, _, Ee, De, Oe = e((() => {
	r(), ue = function(e) {
		let t = [], n = 0;
		for (let r = 0; r < e.length; r++) {
			let i = e.charCodeAt(r);
			i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192, t[n++] = i & 63 | 128) : (i & 64512) == 55296 && r + 1 < e.length && (e.charCodeAt(r + 1) & 64512) == 56320 ? (i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023), t[n++] = i >> 18 | 240, t[n++] = i >> 12 & 63 | 128, t[n++] = i >> 6 & 63 | 128, t[n++] = i & 63 | 128) : (t[n++] = i >> 12 | 224, t[n++] = i >> 6 & 63 | 128, t[n++] = i & 63 | 128);
		}
		return t;
	}, de = function(e) {
		let t = [], n = 0, r = 0;
		for (; n < e.length;) {
			let i = e[n++];
			if (i < 128) t[r++] = String.fromCharCode(i);
			else if (i > 191 && i < 224) {
				let a = e[n++];
				t[r++] = String.fromCharCode((i & 31) << 6 | a & 63);
			} else if (i > 239 && i < 365) {
				let a = e[n++], o = e[n++], s = e[n++], c = ((i & 7) << 18 | (a & 63) << 12 | (o & 63) << 6 | s & 63) - 65536;
				t[r++] = String.fromCharCode(55296 + (c >> 10)), t[r++] = String.fromCharCode(56320 + (c & 1023));
			} else {
				let a = e[n++], o = e[n++];
				t[r++] = String.fromCharCode((i & 15) << 12 | (a & 63) << 6 | o & 63);
			}
		}
		return t.join("");
	}, fe = {
		byteToCharMap_: null,
		charToByteMap_: null,
		byteToCharMapWebSafe_: null,
		charToByteMapWebSafe_: null,
		ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
		get ENCODED_VALS() {
			return this.ENCODED_VALS_BASE + "+/=";
		},
		get ENCODED_VALS_WEBSAFE() {
			return this.ENCODED_VALS_BASE + "-_.";
		},
		HAS_NATIVE_SUPPORT: typeof atob == "function",
		encodeByteArray(e, t) {
			if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
			this.init_();
			let n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [];
			for (let t = 0; t < e.length; t += 3) {
				let i = e[t], a = t + 1 < e.length, o = a ? e[t + 1] : 0, s = t + 2 < e.length, c = s ? e[t + 2] : 0, l = i >> 2, u = (i & 3) << 4 | o >> 4, d = (o & 15) << 2 | c >> 6, f = c & 63;
				s || (f = 64, a || (d = 64)), r.push(n[l], n[u], n[d], n[f]);
			}
			return r.join("");
		},
		encodeString(e, t) {
			return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(ue(e), t);
		},
		decodeString(e, t) {
			return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : de(this.decodeStringToByteArray(e, t));
		},
		decodeStringToByteArray(e, t) {
			this.init_();
			let n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [];
			for (let t = 0; t < e.length;) {
				let i = n[e.charAt(t++)], a = t < e.length ? n[e.charAt(t)] : 0;
				++t;
				let o = t < e.length ? n[e.charAt(t)] : 64;
				++t;
				let s = t < e.length ? n[e.charAt(t)] : 64;
				if (++t, i == null || a == null || o == null || s == null) throw new pe();
				let c = i << 2 | a >> 4;
				if (r.push(c), o !== 64) {
					let e = a << 4 & 240 | o >> 2;
					if (r.push(e), s !== 64) {
						let e = o << 6 & 192 | s;
						r.push(e);
					}
				}
			}
			return r;
		},
		init_() {
			if (!this.byteToCharMap_) {
				this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
				for (let e = 0; e < this.ENCODED_VALS.length; e++) this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e);
			}
		}
	}, pe = class extends Error {
		constructor() {
			super(...arguments), this.name = "DecodeBase64StringError";
		}
	}, me = function(e) {
		let t = ue(e);
		return fe.encodeByteArray(t, !0);
	}, he = function(e) {
		return me(e).replace(/\./g, "");
	}, ge = function(e) {
		try {
			return fe.decodeString(e, !0);
		} catch (e) {
			console.error("base64Decode failed: ", e);
		}
		return null;
	}, _e = () => i().__FIREBASE_DEFAULTS__, ve = () => {
		if (typeof process > "u" || process.env === void 0) return;
		let e = process.env.__FIREBASE_DEFAULTS__;
		if (e) return JSON.parse(e);
	}, ye = () => {
		if (typeof document > "u") return;
		let e;
		try {
			e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
		} catch {
			return;
		}
		let t = e && ge(e[1]);
		return t && JSON.parse(t);
	}, be = () => {
		try {
			return n() || _e() || ve() || ye();
		} catch (e) {
			console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
			return;
		}
	}, xe = (e) => be()?.emulatorHosts?.[e], Se = () => be()?.config, Ce = (e) => be()?.[`_${e}`], we = class {
		constructor() {
			this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise((e, t) => {
				this.resolve = e, this.reject = t;
			});
		}
		wrapCallback(e) {
			return (t, n) => {
				t ? this.reject(t) : this.resolve(n), typeof e == "function" && (this.promise.catch(() => {}), e.length === 1 ? e(t) : e(t, n));
			};
		}
	}, Te = "FirebaseError", g = class e extends Error {
		constructor(t, n, r) {
			super(n), this.code = t, this.customData = r, this.name = Te, Object.setPrototypeOf(this, e.prototype), Error.captureStackTrace && Error.captureStackTrace(this, _.prototype.create);
		}
	}, _ = class {
		constructor(e, t, n) {
			this.service = e, this.serviceName = t, this.errors = n;
		}
		create(e, ...t) {
			let n = t[0] || {}, r = `${this.service}/${e}`, i = this.errors[e], a = i ? ee(i, n) : "Error";
			return new g(r, `${this.serviceName}: ${a} (${r}).`, n);
		}
	}, Ee = /\{\$([^}]+)}/g, De = class {
		constructor(e, t) {
			this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then(() => {
				e(this);
			}).catch((e) => {
				this.error(e);
			});
		}
		next(e) {
			this.forEachObserver((t) => {
				t.next(e);
			});
		}
		error(e) {
			this.forEachObserver((t) => {
				t.error(e);
			}), this.close(e);
		}
		complete() {
			this.forEachObserver((e) => {
				e.complete();
			}), this.close();
		}
		subscribe(e, t, n) {
			let r;
			if (e === void 0 && t === void 0 && n === void 0) throw Error("Missing Observer.");
			r = oe(e, [
				"next",
				"error",
				"complete"
			]) ? e : {
				next: e,
				error: t,
				complete: n
			}, r.next === void 0 && (r.next = se), r.error === void 0 && (r.error = se), r.complete === void 0 && (r.complete = se);
			let i = this.unsubscribeOne.bind(this, this.observers.length);
			return this.finalized && this.task.then(() => {
				try {
					this.finalError ? r.error(this.finalError) : r.complete();
				} catch {}
			}), this.observers.push(r), i;
		}
		unsubscribeOne(e) {
			this.observers === void 0 || this.observers[e] === void 0 || (delete this.observers[e], --this.observerCount, this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this));
		}
		forEachObserver(e) {
			if (!this.finalized) for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e);
		}
		sendOne(e, t) {
			this.task.then(() => {
				if (this.observers !== void 0 && this.observers[e] !== void 0) try {
					t(this.observers[e]);
				} catch (e) {
					typeof console < "u" && console.error && console.error(e);
				}
			});
		}
		close(e) {
			this.finalized || (this.finalized = !0, e !== void 0 && (this.finalError = e), this.task.then(() => {
				this.observers = void 0, this.onNoObservers = void 0;
			}));
		}
	};
}));
//#endregion
//#region node_modules/@firebase/component/dist/esm/index.esm.js
function ke(e) {
	return e === y ? void 0 : e;
}
function Ae(e) {
	return e.instantiationMode === "EAGER";
}
var v, y, je, Me, Ne = e((() => {
	Oe(), v = class {
		constructor(e, t, n) {
			this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null;
		}
		setInstantiationMode(e) {
			return this.instantiationMode = e, this;
		}
		setMultipleInstances(e) {
			return this.multipleInstances = e, this;
		}
		setServiceProps(e) {
			return this.serviceProps = e, this;
		}
		setInstanceCreatedCallback(e) {
			return this.onInstanceCreated = e, this;
		}
	}, y = "[DEFAULT]", je = class {
		constructor(e, t) {
			this.name = e, this.container = t, this.component = null, this.instances = /* @__PURE__ */ new Map(), this.instancesDeferred = /* @__PURE__ */ new Map(), this.instancesOptions = /* @__PURE__ */ new Map(), this.onInitCallbacks = /* @__PURE__ */ new Map();
		}
		get(e) {
			let t = this.normalizeInstanceIdentifier(e);
			if (!this.instancesDeferred.has(t)) {
				let e = new we();
				if (this.instancesDeferred.set(t, e), this.isInitialized(t) || this.shouldAutoInitialize()) try {
					let n = this.getOrInitializeService({ instanceIdentifier: t });
					n && e.resolve(n);
				} catch {}
			}
			return this.instancesDeferred.get(t).promise;
		}
		getImmediate(e) {
			let t = this.normalizeInstanceIdentifier(e?.identifier), n = e?.optional ?? !1;
			if (this.isInitialized(t) || this.shouldAutoInitialize()) try {
				return this.getOrInitializeService({ instanceIdentifier: t });
			} catch (e) {
				if (n) return null;
				throw e;
			}
			else if (n) return null;
			else throw Error(`Service ${this.name} is not available`);
		}
		getComponent() {
			return this.component;
		}
		setComponent(e) {
			if (e.name !== this.name) throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
			if (this.component) throw Error(`Component for ${this.name} has already been provided`);
			if (this.component = e, this.shouldAutoInitialize()) {
				if (Ae(e)) try {
					this.getOrInitializeService({ instanceIdentifier: y });
				} catch {}
				for (let [e, t] of this.instancesDeferred.entries()) {
					let n = this.normalizeInstanceIdentifier(e);
					try {
						let e = this.getOrInitializeService({ instanceIdentifier: n });
						t.resolve(e);
					} catch {}
				}
			}
		}
		clearInstance(e = y) {
			this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e);
		}
		async delete() {
			let e = Array.from(this.instances.values());
			await Promise.all([...e.filter((e) => "INTERNAL" in e).map((e) => e.INTERNAL.delete()), ...e.filter((e) => "_delete" in e).map((e) => e._delete())]);
		}
		isComponentSet() {
			return this.component != null;
		}
		isInitialized(e = y) {
			return this.instances.has(e);
		}
		getOptions(e = y) {
			return this.instancesOptions.get(e) || {};
		}
		initialize(e = {}) {
			let { options: t = {} } = e, n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
			if (this.isInitialized(n)) throw Error(`${this.name}(${n}) has already been initialized`);
			if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
			let r = this.getOrInitializeService({
				instanceIdentifier: n,
				options: t
			});
			for (let [e, t] of this.instancesDeferred.entries()) n === this.normalizeInstanceIdentifier(e) && t.resolve(r);
			return r;
		}
		onInit(e, t) {
			let n = this.normalizeInstanceIdentifier(t), r = this.onInitCallbacks.get(n) ?? /* @__PURE__ */ new Set();
			r.add(e), this.onInitCallbacks.set(n, r);
			let i = this.instances.get(n);
			return i && e(i, n), () => {
				r.delete(e);
			};
		}
		invokeOnInitCallbacks(e, t) {
			let n = this.onInitCallbacks.get(t);
			if (n) for (let r of n) try {
				r(e, t);
			} catch {}
		}
		getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
			let n = this.instances.get(e);
			if (!n && this.component && (n = this.component.instanceFactory(this.container, {
				instanceIdentifier: ke(e),
				options: t
			}), this.instances.set(e, n), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(n, e), this.component.onInstanceCreated)) try {
				this.component.onInstanceCreated(this.container, e, n);
			} catch {}
			return n || null;
		}
		normalizeInstanceIdentifier(e = y) {
			return this.component ? this.component.multipleInstances ? e : y : e;
		}
		shouldAutoInitialize() {
			return !!this.component && this.component.instantiationMode !== "EXPLICIT";
		}
	}, Me = class {
		constructor(e) {
			this.name = e, this.providers = /* @__PURE__ */ new Map();
		}
		addComponent(e) {
			let t = this.getProvider(e.name);
			if (t.isComponentSet()) throw Error(`Component ${e.name} has already been registered with ${this.name}`);
			t.setComponent(e);
		}
		addOrOverwriteComponent(e) {
			this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e);
		}
		getProvider(e) {
			if (this.providers.has(e)) return this.providers.get(e);
			let t = new je(e, this);
			return this.providers.set(e, t), t;
		}
		getProviders() {
			return Array.from(this.providers.values());
		}
	};
})), Pe, b, Fe, Ie, Le, Re, ze, Be = e((() => {
	Pe = [], (function(e) {
		e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT";
	})(b ||= {}), Fe = {
		debug: b.DEBUG,
		verbose: b.VERBOSE,
		info: b.INFO,
		warn: b.WARN,
		error: b.ERROR,
		silent: b.SILENT
	}, Ie = b.INFO, Le = {
		[b.DEBUG]: "log",
		[b.VERBOSE]: "log",
		[b.INFO]: "info",
		[b.WARN]: "warn",
		[b.ERROR]: "error"
	}, Re = (e, t, ...n) => {
		if (t < e.logLevel) return;
		let r = (/* @__PURE__ */ new Date()).toISOString(), i = Le[t];
		if (i) console[i](`[${r}]  ${e.name}:`, ...n);
		else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`);
	}, ze = class {
		constructor(e) {
			this.name = e, this._logLevel = Ie, this._logHandler = Re, this._userLogHandler = null, Pe.push(this);
		}
		get logLevel() {
			return this._logLevel;
		}
		set logLevel(e) {
			if (!(e in b)) throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
			this._logLevel = e;
		}
		setLogLevel(e) {
			this._logLevel = typeof e == "string" ? Fe[e] : e;
		}
		get logHandler() {
			return this._logHandler;
		}
		set logHandler(e) {
			if (typeof e != "function") throw TypeError("Value assigned to `logHandler` must be a function");
			this._logHandler = e;
		}
		get userLogHandler() {
			return this._userLogHandler;
		}
		set userLogHandler(e) {
			this._userLogHandler = e;
		}
		debug(...e) {
			this._userLogHandler && this._userLogHandler(this, b.DEBUG, ...e), this._logHandler(this, b.DEBUG, ...e);
		}
		log(...e) {
			this._userLogHandler && this._userLogHandler(this, b.VERBOSE, ...e), this._logHandler(this, b.VERBOSE, ...e);
		}
		info(...e) {
			this._userLogHandler && this._userLogHandler(this, b.INFO, ...e), this._logHandler(this, b.INFO, ...e);
		}
		warn(...e) {
			this._userLogHandler && this._userLogHandler(this, b.WARN, ...e), this._logHandler(this, b.WARN, ...e);
		}
		error(...e) {
			this._userLogHandler && this._userLogHandler(this, b.ERROR, ...e), this._logHandler(this, b.ERROR, ...e);
		}
	};
}));
//#endregion
//#region node_modules/idb/build/wrap-idb-value.js
function Ve() {
	return Ye ||= [
		IDBDatabase,
		IDBObjectStore,
		IDBIndex,
		IDBCursor,
		IDBTransaction
	];
}
function He() {
	return Xe ||= [
		IDBCursor.prototype.advance,
		IDBCursor.prototype.continue,
		IDBCursor.prototype.continuePrimaryKey
	];
}
function Ue(e) {
	let t = new Promise((t, n) => {
		let r = () => {
			e.removeEventListener("success", i), e.removeEventListener("error", a);
		}, i = () => {
			t(x(e.result)), r();
		}, a = () => {
			n(e.error), r();
		};
		e.addEventListener("success", i), e.addEventListener("error", a);
	});
	return t.then((t) => {
		t instanceof IDBCursor && Ze.set(t, e);
	}).catch(() => {}), tt.set(t, e), t;
}
function We(e) {
	if (Qe.has(e)) return;
	let t = new Promise((t, n) => {
		let r = () => {
			e.removeEventListener("complete", i), e.removeEventListener("error", a), e.removeEventListener("abort", a);
		}, i = () => {
			t(), r();
		}, a = () => {
			n(e.error || new DOMException("AbortError", "AbortError")), r();
		};
		e.addEventListener("complete", i), e.addEventListener("error", a), e.addEventListener("abort", a);
	});
	Qe.set(e, t);
}
function Ge(e) {
	nt = e(nt);
}
function Ke(e) {
	return e === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(t, ...n) {
		let r = e.call(rt(this), t, ...n);
		return $e.set(r, t.sort ? t.sort() : [t]), x(r);
	} : He().includes(e) ? function(...t) {
		return e.apply(rt(this), t), x(Ze.get(this));
	} : function(...t) {
		return x(e.apply(rt(this), t));
	};
}
function qe(e) {
	return typeof e == "function" ? Ke(e) : (e instanceof IDBTransaction && We(e), Je(e, Ve()) ? new Proxy(e, nt) : e);
}
function x(e) {
	if (e instanceof IDBRequest) return Ue(e);
	if (et.has(e)) return et.get(e);
	let t = qe(e);
	return t !== e && (et.set(e, t), tt.set(t, e)), t;
}
var Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it = e((() => {
	Je = (e, t) => t.some((t) => e instanceof t), Ze = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakMap(), nt = {
		get(e, t, n) {
			if (e instanceof IDBTransaction) {
				if (t === "done") return Qe.get(e);
				if (t === "objectStoreNames") return e.objectStoreNames || $e.get(e);
				if (t === "store") return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
			}
			return x(e[t]);
		},
		set(e, t, n) {
			return e[t] = n, !0;
		},
		has(e, t) {
			return e instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in e;
		}
	}, rt = (e) => tt.get(e);
}));
//#endregion
//#region node_modules/idb/build/index.js
function at(e, t, { blocked: n, upgrade: r, blocking: i, terminated: a } = {}) {
	let o = indexedDB.open(e, t), s = x(o);
	return r && o.addEventListener("upgradeneeded", (e) => {
		r(x(o.result), e.oldVersion, e.newVersion, x(o.transaction), e);
	}), n && o.addEventListener("blocked", (e) => n(e.oldVersion, e.newVersion, e)), s.then((e) => {
		a && e.addEventListener("close", () => a()), i && e.addEventListener("versionchange", (e) => i(e.oldVersion, e.newVersion, e));
	}).catch(() => {}), s;
}
function ot(e, t) {
	if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
	if (lt.get(t)) return lt.get(t);
	let n = t.replace(/FromIndex$/, ""), r = t !== n, i = ct.includes(n);
	if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || st.includes(n))) return;
	let a = async function(e, ...t) {
		let a = this.transaction(e, i ? "readwrite" : "readonly"), o = a.store;
		return r && (o = o.index(t.shift())), (await Promise.all([o[n](...t), i && a.done]))[0];
	};
	return lt.set(t, a), a;
}
var st, ct, lt, ut = e((() => {
	it(), st = [
		"get",
		"getKey",
		"getAll",
		"getAllKeys",
		"count"
	], ct = [
		"put",
		"add",
		"delete",
		"clear"
	], lt = /* @__PURE__ */ new Map(), Ge((e) => ({
		...e,
		get: (t, n, r) => ot(t, n) || e.get(t, n, r),
		has: (t, n) => !!ot(t, n) || e.has(t, n)
	}));
}));
//#endregion
//#region node_modules/@firebase/app/dist/esm/index.esm.js
function dt(e) {
	return e.getComponent()?.type === "VERSION";
}
function ft(e, t) {
	try {
		e.container.addComponent(t);
	} catch (n) {
		w.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n);
	}
}
function pt(e) {
	let t = e.name;
	if (on.has(t)) return w.debug(`There were multiple attempts to register component ${t}.`), !1;
	on.set(t, e);
	for (let t of T.values()) ft(t, e);
	for (let t of an.values()) ft(t, e);
	return !0;
}
function mt(e, t) {
	let n = e.container.getProvider("heartbeat").getImmediate({ optional: !0 });
	return n && n.triggerHeartbeat(), e.container.getProvider(t);
}
function S(e) {
	return e == null ? !1 : e.settings !== void 0;
}
function ht(e, t = {}) {
	let n = e;
	typeof t != "object" && (t = { name: t });
	let r = {
		name: nn,
		automaticDataCollectionEnabled: !0,
		...t
	}, i = r.name;
	if (typeof i != "string" || !i) throw E.create("bad-app-name", { appName: String(i) });
	if (n ||= Se(), !n) throw E.create("no-options");
	let a = T.get(i);
	if (a) {
		if (p(n, a.options) && p(r, a.config)) return a;
		throw E.create("duplicate-app", { appName: i });
	}
	let o = new Me(i);
	for (let e of on.values()) o.addComponent(e);
	let s = new sn(n, r, o);
	return T.set(i, s), s;
}
function gt(e = nn) {
	let t = T.get(e);
	if (!t && e === "[DEFAULT]" && Se()) return ht();
	if (!t) throw E.create("no-app", { appName: e });
	return t;
}
function C(e, t, n) {
	let r = rn[e] ?? e;
	n && (r += `-${n}`);
	let i = r.match(/\s|\//), a = t.match(/\s|\//);
	if (i || a) {
		let e = [`Unable to register library "${r}" with version "${t}":`];
		i && e.push(`library name "${r}" contains illegal characters (whitespace or "/")`), i && a && e.push("and"), a && e.push(`version name "${t}" contains illegal characters (whitespace or "/")`), w.warn(e.join(" "));
		return;
	}
	pt(new v(`${r}-version`, () => ({
		library: r,
		version: t
	}), "VERSION"));
}
function _t() {
	return un ||= at(cn, ln, { upgrade: (e, t) => {
		switch (t) {
			case 0: try {
				e.createObjectStore(O);
			} catch (e) {
				console.warn(e);
			}
		}
	} }).catch((e) => {
		throw E.create("idb-open", { originalErrorMessage: e.message });
	}), un;
}
async function vt(e) {
	try {
		let t = (await _t()).transaction(O), n = await t.objectStore(O).get(bt(e));
		return await t.done, n;
	} catch (e) {
		if (e instanceof g) w.warn(e.message);
		else {
			let t = E.create("idb-get", { originalErrorMessage: e?.message });
			w.warn(t.message);
		}
	}
}
async function yt(e, t) {
	try {
		let n = (await _t()).transaction(O, "readwrite");
		await n.objectStore(O).put(t, bt(e)), await n.done;
	} catch (e) {
		if (e instanceof g) w.warn(e.message);
		else {
			let t = E.create("idb-set", { originalErrorMessage: e?.message });
			w.warn(t.message);
		}
	}
}
function bt(e) {
	return `${e.name}!${e.options.appId}`;
}
function xt() {
	return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function St(e, t = dn) {
	let n = [], r = e.slice();
	for (let i of e) {
		let e = n.find((e) => e.agent === i.agent);
		if (!e) {
			if (n.push({
				agent: i.agent,
				dates: [i.date]
			}), Ct(n) > t) {
				n.pop();
				break;
			}
		} else if (e.dates.push(i.date), Ct(n) > t) {
			e.dates.pop();
			break;
		}
		r = r.slice(1);
	}
	return {
		heartbeatsToSend: n,
		unsentEntries: r
	};
}
function Ct(e) {
	return he(JSON.stringify({
		version: 2,
		heartbeats: e
	})).length;
}
function wt(e) {
	if (e.length === 0) return -1;
	let t = 0, n = e[0].date;
	for (let r = 1; r < e.length; r++) e[r].date < n && (n = e[r].date, t = r);
	return t;
}
function Tt(e) {
	pt(new v("platform-logger", (e) => new Et(e), "PRIVATE")), pt(new v("heartbeat", (e) => new pn(e), "PRIVATE")), C(Dt, Ot, e), C(Dt, Ot, "esm2020"), C("fire-js", "");
}
var Et, Dt, Ot, w, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, T, an, on, E, sn, D, cn, ln, O, un, dn, fn, pn, mn, hn = e((() => {
	Ne(), Be(), Oe(), ut(), Et = class {
		constructor(e) {
			this.container = e;
		}
		getPlatformInfoString() {
			return this.container.getProviders().map((e) => {
				if (dt(e)) {
					let t = e.getImmediate();
					return `${t.library}/${t.version}`;
				} else return null;
			}).filter((e) => e).join(" ");
		}
	}, Dt = "@firebase/app", Ot = "0.14.10", w = new ze("@firebase/app"), kt = "@firebase/app-compat", At = "@firebase/analytics-compat", jt = "@firebase/analytics", Mt = "@firebase/app-check-compat", Nt = "@firebase/app-check", Pt = "@firebase/auth", Ft = "@firebase/auth-compat", It = "@firebase/database", Lt = "@firebase/data-connect", Rt = "@firebase/database-compat", zt = "@firebase/functions", Bt = "@firebase/functions-compat", Vt = "@firebase/installations", Ht = "@firebase/installations-compat", Ut = "@firebase/messaging", Wt = "@firebase/messaging-compat", Gt = "@firebase/performance", Kt = "@firebase/performance-compat", qt = "@firebase/remote-config", Jt = "@firebase/remote-config-compat", Yt = "@firebase/storage", Xt = "@firebase/storage-compat", Zt = "@firebase/firestore", Qt = "@firebase/ai", $t = "@firebase/firestore-compat", en = "firebase", tn = "12.11.0", nn = "[DEFAULT]", rn = {
		[Dt]: "fire-core",
		[kt]: "fire-core-compat",
		[jt]: "fire-analytics",
		[At]: "fire-analytics-compat",
		[Nt]: "fire-app-check",
		[Mt]: "fire-app-check-compat",
		[Pt]: "fire-auth",
		[Ft]: "fire-auth-compat",
		[It]: "fire-rtdb",
		[Lt]: "fire-data-connect",
		[Rt]: "fire-rtdb-compat",
		[zt]: "fire-fn",
		[Bt]: "fire-fn-compat",
		[Vt]: "fire-iid",
		[Ht]: "fire-iid-compat",
		[Ut]: "fire-fcm",
		[Wt]: "fire-fcm-compat",
		[Gt]: "fire-perf",
		[Kt]: "fire-perf-compat",
		[qt]: "fire-rc",
		[Jt]: "fire-rc-compat",
		[Yt]: "fire-gcs",
		[Xt]: "fire-gcs-compat",
		[Zt]: "fire-fst",
		[$t]: "fire-fst-compat",
		[Qt]: "fire-vertex",
		"fire-js": "fire-js",
		[en]: "fire-js-all"
	}, T = /* @__PURE__ */ new Map(), an = /* @__PURE__ */ new Map(), on = /* @__PURE__ */ new Map(), E = new _("app", "Firebase", {
		"no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
		"bad-app-name": "Illegal App name: '{$appName}'",
		"duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
		"app-deleted": "Firebase App named '{$appName}' already deleted",
		"server-app-deleted": "Firebase Server App has been deleted",
		"no-options": "Need to provide options, when not being deployed to hosting via source.",
		"invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
		"invalid-log-argument": "First argument to `onLog` must be null or a function.",
		"idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
		"idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
		"idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
		"idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
		"finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
		"invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments."
	}), sn = class {
		constructor(e, t, n) {
			this._isDeleted = !1, this._options = { ...e }, this._config = { ...t }, this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new v("app", () => this, "PUBLIC"));
		}
		get automaticDataCollectionEnabled() {
			return this.checkDestroyed(), this._automaticDataCollectionEnabled;
		}
		set automaticDataCollectionEnabled(e) {
			this.checkDestroyed(), this._automaticDataCollectionEnabled = e;
		}
		get name() {
			return this.checkDestroyed(), this._name;
		}
		get options() {
			return this.checkDestroyed(), this._options;
		}
		get config() {
			return this.checkDestroyed(), this._config;
		}
		get container() {
			return this._container;
		}
		get isDeleted() {
			return this._isDeleted;
		}
		set isDeleted(e) {
			this._isDeleted = e;
		}
		checkDestroyed() {
			if (this.isDeleted) throw E.create("app-deleted", { appName: this._name });
		}
	}, D = tn, cn = "firebase-heartbeat-database", ln = 1, O = "firebase-heartbeat-store", un = null, dn = 1024, fn = 30, pn = class {
		constructor(e) {
			this.container = e, this._heartbeatsCache = null, this._storage = new mn(this.container.getProvider("app").getImmediate()), this._heartbeatsCachePromise = this._storage.read().then((e) => (this._heartbeatsCache = e, e));
		}
		async triggerHeartbeat() {
			try {
				let e = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), t = xt();
				if (this._heartbeatsCache?.heartbeats == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, this._heartbeatsCache?.heartbeats == null) || this._heartbeatsCache.lastSentHeartbeatDate === t || this._heartbeatsCache.heartbeats.some((e) => e.date === t)) return;
				if (this._heartbeatsCache.heartbeats.push({
					date: t,
					agent: e
				}), this._heartbeatsCache.heartbeats.length > fn) {
					let e = wt(this._heartbeatsCache.heartbeats);
					this._heartbeatsCache.heartbeats.splice(e, 1);
				}
				return this._storage.overwrite(this._heartbeatsCache);
			} catch (e) {
				w.warn(e);
			}
		}
		async getHeartbeatsHeader() {
			try {
				if (this._heartbeatsCache === null && await this._heartbeatsCachePromise, this._heartbeatsCache?.heartbeats == null || this._heartbeatsCache.heartbeats.length === 0) return "";
				let e = xt(), { heartbeatsToSend: t, unsentEntries: n } = St(this._heartbeatsCache.heartbeats), r = he(JSON.stringify({
					version: 2,
					heartbeats: t
				}));
				return this._heartbeatsCache.lastSentHeartbeatDate = e, n.length > 0 ? (this._heartbeatsCache.heartbeats = n, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), r;
			} catch (e) {
				return w.warn(e), "";
			}
		}
	}, mn = class {
		constructor(e) {
			this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
		}
		async runIndexedDBEnvironmentCheck() {
			return d() ? f().then(() => !0).catch(() => !1) : !1;
		}
		async read() {
			if (await this._canUseIndexedDBPromise) {
				let e = await vt(this.app);
				return e?.heartbeats ? e : { heartbeats: [] };
			} else return { heartbeats: [] };
		}
		async overwrite(e) {
			if (await this._canUseIndexedDBPromise) {
				let t = await this.read();
				return yt(this.app, {
					lastSentHeartbeatDate: e.lastSentHeartbeatDate ?? t.lastSentHeartbeatDate,
					heartbeats: e.heartbeats
				});
			} else return;
		}
		async add(e) {
			if (await this._canUseIndexedDBPromise) {
				let t = await this.read();
				return yt(this.app, {
					lastSentHeartbeatDate: e.lastSentHeartbeatDate ?? t.lastSentHeartbeatDate,
					heartbeats: [...t.heartbeats, ...e.heartbeats]
				});
			} else return;
		}
	}, Tt("");
})), gn = e((() => {
	hn(), hn(), C("firebase", "12.11.0", "app");
}));
//#endregion
//#region node_modules/@firebase/auth/dist/esm/index-dfb5c973.js
function _n() {
	return { "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK." };
}
function vn(e, ...t) {
	G.logLevel <= b.WARN && G.warn(`Auth (${D}): ${e}`, ...t);
}
function yn(e, ...t) {
	G.logLevel <= b.ERROR && G.error(`Auth (${D}): ${e}`, ...t);
}
function k(e, ...t) {
	throw Sn(e, ...t);
}
function A(e, ...t) {
	return Sn(e, ...t);
}
function bn(e, t, n) {
	return new _("auth", "Firebase", {
		...Yi(),
		[t]: n
	}).create(t, { appName: e.name });
}
function j(e) {
	return bn(e, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
}
function xn(e, t, n) {
	let r = n;
	if (!(t instanceof r)) throw r.name !== t.constructor.name && k(e, "argument-error"), bn(e, "argument-error", `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`);
}
function Sn(e, ...t) {
	if (typeof e != "string") {
		let n = t[0], r = [...t.slice(1)];
		return r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r);
	}
	return Xi.create(e, ...t);
}
function M(e, t, ...n) {
	if (!e) throw Sn(t, ...n);
}
function N(e) {
	let t = "INTERNAL ASSERTION FAILED: " + e;
	throw yn(t), Error(t);
}
function P(e, t) {
	e || N(t);
}
function Cn() {
	return typeof self < "u" && self.location?.href || "";
}
function wn() {
	return Tn() === "http:" || Tn() === "https:";
}
function Tn() {
	return typeof self < "u" && self.location?.protocol || null;
}
function En() {
	return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && (wn() || c() || "connection" in navigator) ? navigator.onLine : !0;
}
function Dn() {
	if (typeof navigator > "u") return null;
	let e = navigator;
	return e.languages && e.languages[0] || e.language || null;
}
function On(e, t) {
	P(e.emulator, "Emulator should always be set here");
	let { url: n } = e.emulator;
	return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n;
}
function F(e, t) {
	return e.tenantId && !t.tenantId ? {
		...t,
		tenantId: e.tenantId
	} : t;
}
async function I(e, t, n, r, i = {}) {
	return kn(e, i, async () => {
		let i = {}, a = {};
		r && (t === "GET" ? a = r : i = { body: JSON.stringify(r) });
		let o = m({
			key: e.config.apiKey,
			...a
		}).slice(1), c = await e._getAdditionalHeaders();
		c["Content-Type"] = "application/json", e.languageCode && (c["X-Firebase-Locale"] = e.languageCode);
		let l = {
			method: t,
			headers: c,
			...i
		};
		return s() || (l.referrerPolicy = "no-referrer"), e.emulatorConfig && ce(e.emulatorConfig.host) && (l.credentials = "include"), Zi.fetch()(await An(e, e.config.apiHost, n, o), l);
	});
}
async function kn(e, t, n) {
	e._canInitEmulator = !1;
	let r = {
		...Qi,
		...t
	};
	try {
		let t = new ta(e), i = await Promise.race([n(), t.promise]);
		t.clearNetworkTimeout();
		let a = await i.json();
		if ("needConfirmation" in a) throw Mn(e, "account-exists-with-different-credential", a);
		if (i.ok && !("errorMessage" in a)) return a;
		{
			let [t, n] = (i.ok ? a.errorMessage : a.error.message).split(" : ");
			if (t === "FEDERATED_USER_ID_ALREADY_LINKED") throw Mn(e, "credential-already-in-use", a);
			if (t === "EMAIL_EXISTS") throw Mn(e, "email-already-in-use", a);
			if (t === "USER_DISABLED") throw Mn(e, "user-disabled", a);
			let o = r[t] || t.toLowerCase().replace(/[_\s]+/g, "-");
			if (n) throw bn(e, o, n);
			k(e, o);
		}
	} catch (t) {
		if (t instanceof g) throw t;
		k(e, "network-request-failed", { message: String(t) });
	}
}
async function L(e, t, n, r, i = {}) {
	let a = await I(e, t, n, r, i);
	return "mfaPendingCredential" in a && k(e, "multi-factor-auth-required", { _serverResponse: a }), a;
}
async function An(e, t, n, r) {
	let i = `${t}${n}?${r}`, a = e, o = a.config.emulator ? On(e.config, i) : `${e.config.apiScheme}://${i}`;
	return $i.includes(n) && (await a._persistenceManagerAvailable, a._getPersistenceType() === "COOKIE") ? a._getPersistence()._getFinalTarget(o).toString() : o;
}
function jn(e) {
	switch (e) {
		case "ENFORCE": return "ENFORCE";
		case "AUDIT": return "AUDIT";
		case "OFF": return "OFF";
		default: return "ENFORCEMENT_STATE_UNSPECIFIED";
	}
}
function Mn(e, t, n) {
	let r = { appName: e.name };
	n.email && (r.email = n.email), n.phoneNumber && (r.phoneNumber = n.phoneNumber);
	let i = A(e, t, r);
	return i.customData._tokenResponse = n, i;
}
function Nn(e) {
	return e !== void 0 && e.enterprise !== void 0;
}
async function Pn(e, t) {
	return I(e, "GET", "/v2/recaptchaConfig", F(e, t));
}
async function Fn(e, t) {
	return I(e, "POST", "/v1/accounts:delete", t);
}
async function In(e, t) {
	return I(e, "POST", "/v1/accounts:lookup", t);
}
function R(e) {
	if (e) try {
		let t = new Date(Number(e));
		if (!isNaN(t.getTime())) return t.toUTCString();
	} catch {}
}
async function Ln(e, t = !1) {
	let n = h(e), r = await n.getIdToken(t), i = zn(r);
	M(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
	let a = typeof i.firebase == "object" ? i.firebase : void 0, o = a?.sign_in_provider;
	return {
		claims: i,
		token: r,
		authTime: R(Rn(i.auth_time)),
		issuedAtTime: R(Rn(i.iat)),
		expirationTime: R(Rn(i.exp)),
		signInProvider: o || null,
		signInSecondFactor: a?.sign_in_second_factor || null
	};
}
function Rn(e) {
	return Number(e) * 1e3;
}
function zn(e) {
	let [t, n, r] = e.split(".");
	if (t === void 0 || n === void 0 || r === void 0) return yn("JWT malformed, contained fewer than 3 sections"), null;
	try {
		let e = ge(n);
		return e ? JSON.parse(e) : (yn("Failed to decode base64 JWT payload"), null);
	} catch (e) {
		return yn("Caught error parsing JWT payload as JSON", e?.toString()), null;
	}
}
function Bn(e) {
	let t = zn(e);
	return M(t, "internal-error"), M(t.exp !== void 0, "internal-error"), M(t.iat !== void 0, "internal-error"), Number(t.exp) - Number(t.iat);
}
async function z(e, t, n = !1) {
	if (n) return t;
	try {
		return await t;
	} catch (t) {
		throw t instanceof g && Vn(t) && e.auth.currentUser === e && await e.auth.signOut(), t;
	}
}
function Vn({ code: e }) {
	return e === "auth/user-disabled" || e === "auth/user-token-expired";
}
async function Hn(e) {
	let t = e.auth, n = await z(e, In(t, { idToken: await e.getIdToken() }));
	M(n?.users.length, t, "internal-error");
	let r = n.users[0];
	e._notifyReloadListener(r);
	let i = r.providerUserInfo?.length ? Gn(r.providerUserInfo) : [], a = Wn(e.providerData, i), o = e.isAnonymous, s = !(e.email && r.passwordHash) && !a?.length, c = o ? s : !1, l = {
		uid: r.localId,
		displayName: r.displayName || null,
		photoURL: r.photoUrl || null,
		email: r.email || null,
		emailVerified: r.emailVerified || !1,
		phoneNumber: r.phoneNumber || null,
		tenantId: r.tenantId || null,
		providerData: a,
		metadata: new ia(r.createdAt, r.lastLoginAt),
		isAnonymous: c
	};
	Object.assign(e, l);
}
async function Un(e) {
	let t = h(e);
	await Hn(t), await t.auth._persistUserIfCurrent(t), t.auth._notifyListenersIfCurrent(t);
}
function Wn(e, t) {
	return [...e.filter((e) => !t.some((t) => t.providerId === e.providerId)), ...t];
}
function Gn(e) {
	return e.map(({ providerId: e, ...t }) => ({
		providerId: e,
		uid: t.rawId || "",
		displayName: t.displayName || null,
		email: t.email || null,
		phoneNumber: t.phoneNumber || null,
		photoURL: t.photoUrl || null
	}));
}
async function Kn(e, t) {
	let n = await kn(e, {}, async () => {
		let n = m({
			grant_type: "refresh_token",
			refresh_token: t
		}).slice(1), { tokenApiHost: r, apiKey: i } = e.config, a = await An(e, r, "/v1/token", `key=${i}`), o = await e._getAdditionalHeaders();
		o["Content-Type"] = "application/x-www-form-urlencoded";
		let s = {
			method: "POST",
			headers: o,
			body: n
		};
		return e.emulatorConfig && ce(e.emulatorConfig.host) && (s.credentials = "include"), Zi.fetch()(a, s);
	});
	return {
		accessToken: n.access_token,
		expiresIn: n.expires_in,
		refreshToken: n.refresh_token
	};
}
async function qn(e, t) {
	return I(e, "POST", "/v2/accounts:revokeToken", F(e, t));
}
function B(e, t) {
	M(typeof e == "string" || e === void 0, "internal-error", { appName: t });
}
function V(e) {
	P(e instanceof Function, "Expected a class definition");
	let t = oa.get(e);
	return t ? (P(t instanceof e, "Instance stored in cache mismatched with class"), t) : (t = new e(), oa.set(e, t), t);
}
function Jn(e, t, n) {
	return `firebase:${e}:${t}:${n}`;
}
function Yn(e) {
	let t = e.toLowerCase();
	if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/")) return "Opera";
	if ($n(t)) return "IEMobile";
	if (t.includes("msie") || t.includes("trident/")) return "IE";
	if (t.includes("edge/")) return "Edge";
	if (Xn(t)) return "Firefox";
	if (t.includes("silk/")) return "Silk";
	if (tr(t)) return "Blackberry";
	if (nr(t)) return "Webos";
	if (Zn(t)) return "Safari";
	if ((t.includes("chrome/") || Qn(t)) && !t.includes("edge/")) return "Chrome";
	if (er(t)) return "Android";
	{
		let t = e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);
		if (t?.length === 2) return t[1];
	}
	return "Other";
}
function Xn(e = a()) {
	return /firefox\//i.test(e);
}
function Zn(e = a()) {
	let t = e.toLowerCase();
	return t.includes("safari/") && !t.includes("chrome/") && !t.includes("crios/") && !t.includes("android");
}
function Qn(e = a()) {
	return /crios\//i.test(e);
}
function $n(e = a()) {
	return /iemobile/i.test(e);
}
function er(e = a()) {
	return /android/i.test(e);
}
function tr(e = a()) {
	return /blackberry/i.test(e);
}
function nr(e = a()) {
	return /webos/i.test(e);
}
function rr(e = a()) {
	return /iphone|ipad|ipod/i.test(e) || /macintosh/i.test(e) && /mobile/i.test(e);
}
function ir(e = a()) {
	return rr(e) && !!window.navigator?.standalone;
}
function ar() {
	return u() && document.documentMode === 10;
}
function or(e = a()) {
	return rr(e) || er(e) || nr(e) || tr(e) || /windows phone/i.test(e) || $n(e);
}
function sr(e, t = []) {
	let n;
	switch (e) {
		case "Browser":
			n = Yn(a());
			break;
		case "Worker":
			n = `${Yn(a())}-${e}`;
			break;
		default: n = e;
	}
	let r = t.length ? t.join(",") : "FirebaseCore-web";
	return `${n}/JsCore/${D}/${r}`;
}
async function cr(e, t = {}) {
	return I(e, "GET", "/v2/passwordPolicy", F(e, t));
}
function H(e) {
	return h(e);
}
function lr(e) {
	J = e;
}
function ur(e) {
	return J.loadJS(e);
}
function dr() {
	return J.recaptchaEnterpriseScript;
}
function fr() {
	return J.gapiScript;
}
function pr(e) {
	return `__${e}${Math.floor(Math.random() * 1e6)}`;
}
async function mr(e, t, n, r = !1, i = !1) {
	let a = new va(e), o;
	if (i) o = Y;
	else try {
		o = await a.verify(n);
	} catch {
		o = await a.verify(n, !0);
	}
	let s = { ...t };
	if (n === "mfaSmsEnrollment" || n === "mfaSmsSignIn") {
		if ("phoneEnrollmentInfo" in s) {
			let e = s.phoneEnrollmentInfo.phoneNumber, t = s.phoneEnrollmentInfo.recaptchaToken;
			Object.assign(s, { phoneEnrollmentInfo: {
				phoneNumber: e,
				recaptchaToken: t,
				captchaResponse: o,
				clientType: "CLIENT_TYPE_WEB",
				recaptchaVersion: "RECAPTCHA_ENTERPRISE"
			} });
		} else if ("phoneSignInInfo" in s) {
			let e = s.phoneSignInInfo.recaptchaToken;
			Object.assign(s, { phoneSignInInfo: {
				recaptchaToken: e,
				captchaResponse: o,
				clientType: "CLIENT_TYPE_WEB",
				recaptchaVersion: "RECAPTCHA_ENTERPRISE"
			} });
		}
		return s;
	}
	return r ? Object.assign(s, { captchaResp: o }) : Object.assign(s, { captchaResponse: o }), Object.assign(s, { clientType: "CLIENT_TYPE_WEB" }), Object.assign(s, { recaptchaVersion: "RECAPTCHA_ENTERPRISE" }), s;
}
async function hr(e, t, n, r, i) {
	return i === "EMAIL_PASSWORD_PROVIDER" ? e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER") ? r(e, await mr(e, t, n, n === "getOobCode")) : r(e, t).catch(async (i) => i.code === "auth/missing-recaptcha-token" ? (console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`), r(e, await mr(e, t, n, n === "getOobCode"))) : Promise.reject(i)) : i === "PHONE_PROVIDER" ? e._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER") ? r(e, await mr(e, t, n)).catch(async (i) => e._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER") === "AUDIT" && (i.code === "auth/missing-recaptcha-token" || i.code === "auth/invalid-app-credential") ? (console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`), r(e, await mr(e, t, n, !1, !0))) : Promise.reject(i)) : r(e, await mr(e, t, n, !1, !0)) : Promise.reject(i + " provider is not supported.");
}
async function gr(e) {
	let t = H(e), n = new na(await Pn(t, {
		clientType: "CLIENT_TYPE_WEB",
		version: "RECAPTCHA_ENTERPRISE"
	}));
	t.tenantId == null ? t._agentRecaptchaConfig = n : t._tenantRecaptchaConfigs[t.tenantId] = n, n.isAnyProviderEnabled() && new va(t).verify();
}
function _r(e, t) {
	let n = mt(e, "auth");
	if (n.isInitialized()) {
		let e = n.getImmediate();
		if (p(n.getOptions(), t ?? {})) return e;
		k(e, "already-initialized");
	}
	return n.initialize({ options: t });
}
function vr(e, t) {
	let n = t?.persistence || [], r = (Array.isArray(n) ? n : [n]).map(V);
	t?.errorMap && e._updateErrorMap(t.errorMap), e._initializeWithPersistence(r, t?.popupRedirectResolver);
}
function yr(e, t, n) {
	let r = H(e);
	M(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
	let i = !!n?.disableWarnings, a = br(t), { host: o, port: s } = xr(t), c = s === null ? "" : `:${s}`, l = { url: `${a}//${o}${c}/` }, u = Object.freeze({
		host: o,
		port: s,
		protocol: a.replace(":", ""),
		options: Object.freeze({ disableWarnings: i })
	});
	if (!r._canInitEmulator) {
		M(r.config.emulator && r.emulatorConfig, r, "emulator-config-failed"), M(p(l, r.config.emulator) && p(u, r.emulatorConfig), r, "emulator-config-failed");
		return;
	}
	r.config.emulator = l, r.emulatorConfig = u, r.settings.appVerificationDisabledForTesting = !0, ce(o) ? le(`${a}//${o}${c}`) : i || Cr();
}
function br(e) {
	let t = e.indexOf(":");
	return t < 0 ? "" : e.substr(0, t + 1);
}
function xr(e) {
	let t = br(e), n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
	if (!n) return {
		host: "",
		port: null
	};
	let r = n[2].split("@").pop() || "", i = /^(\[[^\]]+\])(:|$)/.exec(r);
	if (i) {
		let e = i[1];
		return {
			host: e,
			port: Sr(r.substr(e.length + 1))
		};
	} else {
		let [e, t] = r.split(":");
		return {
			host: e,
			port: Sr(t)
		};
	}
}
function Sr(e) {
	if (!e) return null;
	let t = Number(e);
	return isNaN(t) ? null : t;
}
function Cr() {
	function e() {
		let e = document.createElement("p"), t = e.style;
		e.innerText = "Running in emulator mode. Do not use with production credentials.", t.position = "fixed", t.width = "100%", t.backgroundColor = "#ffffff", t.border = ".1em solid #000000", t.color = "#b50000", t.bottom = "0px", t.left = "0px", t.margin = "0px", t.zIndex = "10000", t.textAlign = "center", e.classList.add("firebase-emulator-warning"), document.body.appendChild(e);
	}
	typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", e) : e());
}
async function wr(e, t) {
	return I(e, "POST", "/v1/accounts:signUp", t);
}
async function Tr(e, t) {
	return L(e, "POST", "/v1/accounts:signInWithPassword", F(e, t));
}
async function Er(e, t) {
	return L(e, "POST", "/v1/accounts:signInWithEmailLink", F(e, t));
}
async function Dr(e, t) {
	return L(e, "POST", "/v1/accounts:signInWithEmailLink", F(e, t));
}
async function U(e, t) {
	return L(e, "POST", "/v1/accounts:signInWithIdp", F(e, t));
}
async function Or(e, t) {
	return I(e, "POST", "/v1/accounts:sendVerificationCode", F(e, t));
}
async function kr(e, t) {
	return L(e, "POST", "/v1/accounts:signInWithPhoneNumber", F(e, t));
}
async function Ar(e, t) {
	let n = await L(e, "POST", "/v1/accounts:signInWithPhoneNumber", F(e, t));
	if (n.temporaryProof) throw Mn(e, "account-exists-with-different-credential", n);
	return n;
}
async function jr(e, t) {
	return L(e, "POST", "/v1/accounts:signInWithPhoneNumber", F(e, {
		...t,
		operation: "REAUTH"
	}), Sa);
}
function Mr(e) {
	switch (e) {
		case "recoverEmail": return "RECOVER_EMAIL";
		case "resetPassword": return "PASSWORD_RESET";
		case "signIn": return "EMAIL_SIGNIN";
		case "verifyEmail": return "VERIFY_EMAIL";
		case "verifyAndChangeEmail": return "VERIFY_AND_CHANGE_EMAIL";
		case "revertSecondFactorAddition": return "REVERT_SECOND_FACTOR_ADDITION";
		default: return null;
	}
}
function Nr(e) {
	let t = re(ie(e)).link, n = t ? re(ie(t)).deep_link_id : null, r = re(ie(e)).deep_link_id;
	return (r ? re(ie(r)).link : null) || r || n || t || e;
}
function Pr(e) {
	return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null;
}
function Fr(e, t, n, r) {
	return (t === "reauthenticate" ? n._getReauthenticationResolver(e) : n._getIdTokenResponse(e)).catch((n) => {
		throw n.code === "auth/multi-factor-auth-required" ? ja._fromErrorAndOperation(e, n, t, r) : n;
	});
}
async function Ir(e, t, n = !1) {
	let r = await z(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
	return Aa._forOperation(e, "link", r);
}
async function Lr(e, t, n = !1) {
	let { auth: r } = e;
	if (S(r.app)) return Promise.reject(j(r));
	let i = "reauthenticate";
	try {
		let a = await z(e, Fr(r, i, t, e), n);
		M(a.idToken, r, "internal-error");
		let o = zn(a.idToken);
		M(o, r, "internal-error");
		let { sub: s } = o;
		return M(e.uid === s, r, "user-mismatch"), Aa._forOperation(e, i, a);
	} catch (e) {
		throw e?.code === "auth/user-not-found" && k(r, "user-mismatch"), e;
	}
}
async function Rr(e, t, n = !1) {
	if (S(e.app)) return Promise.reject(j(e));
	let r = "signIn", i = await Fr(e, r, t), a = await Aa._fromIdTokenResponse(e, r, i);
	return n || await e._updateCurrentUser(a.user), a;
}
async function zr(e, t) {
	return Rr(H(e), t);
}
async function Br(e) {
	let t = H(e);
	t._getPasswordPolicyInternal() && await t._updatePasswordPolicy();
}
function Vr(e, t, n) {
	return S(e.app) ? Promise.reject(j(e)) : zr(h(e), Ta.credential(t, n)).catch(async (t) => {
		throw t.code === "auth/password-does-not-meet-requirements" && Br(e), t;
	});
}
function Hr(e, t, n, r) {
	return h(e).onIdTokenChanged(t, n, r);
}
function Ur(e, t, n) {
	return h(e).beforeAuthStateChanged(t, n);
}
function Wr(e, t, n, r) {
	return h(e).onAuthStateChanged(t, n, r);
}
function Gr(e, t) {
	return I(e, "POST", "/v2/accounts/mfaEnrollment:start", F(e, t));
}
function Kr(e, t) {
	return I(e, "POST", "/v2/accounts/mfaEnrollment:finalize", F(e, t));
}
function qr(e, t) {
	return I(e, "POST", "/v2/accounts/mfaEnrollment:start", F(e, t));
}
function Jr(e, t) {
	return I(e, "POST", "/v2/accounts/mfaEnrollment:finalize", F(e, t));
}
function Yr(e) {
	let t = e.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"), n = RegExp(`${t}=([^;]+)`);
	return document.cookie.match(n)?.[1] ?? null;
}
function Xr(e) {
	return `${window.location.protocol === "http:" ? "__dev_" : "__HOST-"}FIREBASE_${e.split(":")[3]}`;
}
function Zr(e) {
	return Promise.all(e.map(async (e) => {
		try {
			return {
				fulfilled: !0,
				value: await e
			};
		} catch (e) {
			return {
				fulfilled: !1,
				reason: e
			};
		}
	}));
}
function Qr(e = "", t = 10) {
	let n = "";
	for (let e = 0; e < t; e++) n += Math.floor(Math.random() * 10);
	return e + n;
}
function W() {
	return window;
}
function $r(e) {
	W().location.href = e;
}
function ei() {
	return W().WorkerGlobalScope !== void 0 && typeof W().importScripts == "function";
}
async function ti() {
	if (!navigator?.serviceWorker) return null;
	try {
		return (await navigator.serviceWorker.ready).active;
	} catch {
		return null;
	}
}
function ni() {
	return navigator?.serviceWorker?.controller || null;
}
function ri() {
	return ei() ? self : null;
}
function ii(e, t) {
	return e.transaction([Ka], t ? "readwrite" : "readonly").objectStore(Ka);
}
function ai() {
	return new $(indexedDB.deleteDatabase(Wa)).toPromise();
}
function oi() {
	let e = indexedDB.open(Wa, Ga);
	return new Promise((t, n) => {
		e.addEventListener("error", () => {
			n(e.error);
		}), e.addEventListener("upgradeneeded", () => {
			let t = e.result;
			try {
				t.createObjectStore(Ka, { keyPath: qa });
			} catch (e) {
				n(e);
			}
		}), e.addEventListener("success", async () => {
			let n = e.result;
			n.objectStoreNames.contains(Ka) ? t(n) : (n.close(), await ai(), t(await oi()));
		});
	});
}
async function si(e, t, n) {
	return new $(ii(e, !0).put({
		[qa]: t,
		value: n
	})).toPromise();
}
async function ci(e, t) {
	let n = await new $(ii(e, !1).get(t)).toPromise();
	return n === void 0 ? null : n.value;
}
function li(e, t) {
	return new $(ii(e, !0).delete(t)).toPromise();
}
function di(e, t) {
	return I(e, "POST", "/v2/accounts/mfaSignIn:start", F(e, t));
}
function fi(e, t) {
	return I(e, "POST", "/v2/accounts/mfaSignIn:finalize", F(e, t));
}
function pi(e, t) {
	return I(e, "POST", "/v2/accounts/mfaSignIn:finalize", F(e, t));
}
async function mi(e, t, n) {
	if (!e._getRecaptchaConfig()) try {
		await gr(e);
	} catch {
		console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.");
	}
	try {
		let r;
		if (r = typeof t == "string" ? { phoneNumber: t } : t, "session" in r) {
			let t = r.session;
			if ("phoneNumber" in r) return M(t.type === "enroll", e, "internal-error"), (await hr(e, {
				idToken: t.credential,
				phoneEnrollmentInfo: {
					phoneNumber: r.phoneNumber,
					clientType: "CLIENT_TYPE_WEB"
				}
			}, "mfaSmsEnrollment", async (e, t) => t.phoneEnrollmentInfo.captchaResponse === Y ? (M(n?.type === Qa, e, "argument-error"), Gr(e, await hi(e, t, n))) : Gr(e, t), "PHONE_PROVIDER").catch((e) => Promise.reject(e))).phoneSessionInfo.sessionInfo;
			{
				M(t.type === "signin", e, "internal-error");
				let i = r.multiFactorHint?.uid || r.multiFactorUid;
				return M(i, e, "missing-multi-factor-info"), (await hr(e, {
					mfaPendingCredential: t.credential,
					mfaEnrollmentId: i,
					phoneSignInInfo: { clientType: "CLIENT_TYPE_WEB" }
				}, "mfaSmsSignIn", async (e, t) => t.phoneSignInInfo.captchaResponse === Y ? (M(n?.type === Qa, e, "argument-error"), di(e, await hi(e, t, n))) : di(e, t), "PHONE_PROVIDER").catch((e) => Promise.reject(e))).phoneResponseInfo.sessionInfo;
			}
		} else return (await hr(e, {
			phoneNumber: r.phoneNumber,
			clientType: "CLIENT_TYPE_WEB"
		}, "sendVerificationCode", async (e, t) => t.captchaResponse === Y ? (M(n?.type === Qa, e, "argument-error"), Or(e, await hi(e, t, n))) : Or(e, t), "PHONE_PROVIDER").catch((e) => Promise.reject(e))).sessionInfo;
	} finally {
		n?._reset();
	}
}
async function hi(e, t, n) {
	M(n.type === Qa, e, "argument-error");
	let r = await n.verify();
	M(typeof r == "string", e, "argument-error");
	let i = { ...t };
	if ("phoneEnrollmentInfo" in i) {
		let e = i.phoneEnrollmentInfo.phoneNumber, t = i.phoneEnrollmentInfo.captchaResponse, n = i.phoneEnrollmentInfo.clientType, a = i.phoneEnrollmentInfo.recaptchaVersion;
		return Object.assign(i, { phoneEnrollmentInfo: {
			phoneNumber: e,
			recaptchaToken: r,
			captchaResponse: t,
			clientType: n,
			recaptchaVersion: a
		} }), i;
	} else if ("phoneSignInInfo" in i) {
		let e = i.phoneSignInInfo.captchaResponse, t = i.phoneSignInInfo.clientType, n = i.phoneSignInInfo.recaptchaVersion;
		return Object.assign(i, { phoneSignInInfo: {
			recaptchaToken: r,
			captchaResponse: e,
			clientType: t,
			recaptchaVersion: n
		} }), i;
	} else return Object.assign(i, { recaptchaToken: r }), i;
}
function gi(e, t) {
	return t ? V(t) : (M(e._popupRedirectResolver, e, "argument-error"), e._popupRedirectResolver);
}
function _i(e) {
	return Rr(e.auth, new eo(e), e.bypassAuthState);
}
function vi(e) {
	let { auth: t, user: n } = e;
	return M(n, t, "internal-error"), Lr(n, new eo(e), e.bypassAuthState);
}
async function yi(e) {
	let { auth: t, user: n } = e;
	return M(n, t, "internal-error"), Ir(n, new eo(e), e.bypassAuthState);
}
async function bi(e, t, n) {
	if (S(e.app)) return Promise.reject(A(e, "operation-not-supported-in-this-environment"));
	let r = H(e);
	return xn(e, t, Z), new ro(r, "signInViaPopup", t, gi(r, n)).executeNotNull();
}
async function xi(e, t) {
	let n = Ti(t), r = wi(e);
	if (!await r._isAvailable()) return !1;
	let i = await r._get(n) === "true";
	return await r._remove(n), i;
}
async function Si(e, t) {
	return wi(e)._set(Ti(t), "true");
}
function Ci(e, t) {
	ao.set(e._key(), t);
}
function wi(e) {
	return V(e._redirectPersistence);
}
function Ti(e) {
	return Jn(io, e.config.apiKey, e.name);
}
function Ei(e, t, n) {
	return Di(e, t, n);
}
async function Di(e, t, n) {
	if (S(e.app)) return Promise.reject(j(e));
	let r = H(e);
	xn(e, t, Z), await r._initializationPromise;
	let i = gi(r, n);
	return await Si(i, r), i._openRedirect(r, t, "signInViaRedirect");
}
async function Oi(e, t, n = !1) {
	if (S(e.app)) return Promise.reject(j(e));
	let r = H(e), i = await new oo(r, gi(r, t), n).execute();
	return i && !n && (delete i.user._redirectEventId, await r._persistUserIfCurrent(i.user), await r._setRedirectUser(null, t)), i;
}
function ki(e) {
	return [
		e.type,
		e.eventId,
		e.sessionId,
		e.tenantId
	].filter((e) => e).join("-");
}
function Ai({ type: e, error: t }) {
	return e === "unknown" && t?.code === "auth/no-auth-event";
}
function ji(e) {
	switch (e.type) {
		case "signInViaRedirect":
		case "linkViaRedirect":
		case "reauthViaRedirect": return !0;
		case "unknown": return Ai(e);
		default: return !1;
	}
}
async function Mi(e, t = {}) {
	return I(e, "GET", "/v1/projects", t);
}
async function Ni(e) {
	if (e.config.emulator) return;
	let { authorizedDomains: t } = await Mi(e);
	for (let e of t) try {
		if (Pi(e)) return;
	} catch {}
	k(e, "unauthorized-domain");
}
function Pi(e) {
	let t = Cn(), { protocol: n, hostname: r } = new URL(t);
	if (e.startsWith("chrome-extension://")) {
		let i = new URL(e);
		return i.hostname === "" && r === "" ? n === "chrome-extension:" && e.replace("chrome-extension://", "") === t.replace("chrome-extension://", "") : n === "chrome-extension:" && i.hostname === r;
	}
	if (!uo.test(n)) return !1;
	if (lo.test(e)) return r === e;
	let i = e.replace(/\./g, "\\.");
	return RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
}
function Fi() {
	let e = W().___jsl;
	if (e?.H) {
		for (let t of Object.keys(e.H)) if (e.H[t].r = e.H[t].r || [], e.H[t].L = e.H[t].L || [], e.H[t].r = [...e.H[t].L], e.CP) for (let t = 0; t < e.CP.length; t++) e.CP[t] = null;
	}
}
function Ii(e) {
	return new Promise((t, n) => {
		function r() {
			Fi(), gapi.load("gapi.iframes", {
				callback: () => {
					t(gapi.iframes.getContext());
				},
				ontimeout: () => {
					Fi(), n(A(e, "network-request-failed"));
				},
				timeout: fo.get()
			});
		}
		if (W().gapi?.iframes?.Iframe) t(gapi.iframes.getContext());
		else if (W().gapi?.load) r();
		else {
			let t = pr("iframefcb");
			return W()[t] = () => {
				gapi.load ? r() : n(A(e, "network-request-failed"));
			}, ur(`${fr()}?onload=${t}`).catch((e) => n(e));
		}
	}).catch((e) => {
		throw po = null, e;
	});
}
function Li(e) {
	return po ||= Ii(e), po;
}
function Ri(e) {
	let t = e.config;
	M(t.authDomain, e, "auth-domain-config-required");
	let n = t.emulator ? On(t, go) : `https://${e.config.authDomain}/${ho}`, r = {
		apiKey: t.apiKey,
		appName: e.name,
		v: D
	}, i = vo.get(e.config.apiHost);
	i && (r.eid = i);
	let a = e._getFrameworks();
	return a.length && (r.fw = a.join(",")), `${n}?${m(r).slice(1)}`;
}
async function zi(e) {
	let t = await Li(e), n = W().gapi;
	return M(n, e, "internal-error"), t.open({
		where: document.body,
		url: Ri(e),
		messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
		attributes: _o,
		dontclear: !0
	}, (t) => new Promise(async (n, r) => {
		await t.restyle({ setHideOnLeave: !1 });
		let i = A(e, "network-request-failed"), a = W().setTimeout(() => {
			r(i);
		}, mo.get());
		function o() {
			W().clearTimeout(a), n(t);
		}
		t.ping(o).then(o, () => {
			r(i);
		});
	}));
}
function Bi(e, t, n, r = bo, i = xo) {
	let o = Math.max((window.screen.availHeight - i) / 2, 0).toString(), s = Math.max((window.screen.availWidth - r) / 2, 0).toString(), c = "", l = {
		...yo,
		width: r.toString(),
		height: i.toString(),
		top: o,
		left: s
	}, u = a().toLowerCase();
	n && (c = Qn(u) ? So : n), Xn(u) && (t ||= Co, l.scrollbars = "yes");
	let d = Object.entries(l).reduce((e, [t, n]) => `${e}${t}=${n},`, "");
	if (ir(u) && c !== "_self") return Vi(t || "", c), new wo(null);
	let f = window.open(t || "", c, d);
	M(f, e, "popup-blocked");
	try {
		f.focus();
	} catch {}
	return new wo(f);
}
function Vi(e, t) {
	let n = document.createElement("a");
	n.href = e, n.target = t;
	let r = document.createEvent("MouseEvent");
	r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), n.dispatchEvent(r);
}
async function Hi(e, t, n, r, i, a) {
	M(e.config.authDomain, e, "auth-domain-config-required"), M(e.config.apiKey, e, "invalid-api-key");
	let o = {
		apiKey: e.config.apiKey,
		appName: e.name,
		authType: n,
		redirectUrl: r,
		v: D,
		eventId: i
	};
	if (t instanceof Z) {
		t.setDefaultLanguage(e.languageCode), o.providerId = t.providerId || "", te(t.getCustomParameters()) || (o.customParameters = JSON.stringify(t.getCustomParameters()));
		for (let [e, t] of Object.entries(a || {})) o[e] = t;
	}
	if (t instanceof Q) {
		let e = t.getScopes().filter((e) => e !== "");
		e.length > 0 && (o.scopes = e.join(","));
	}
	e.tenantId && (o.tid = e.tenantId);
	let s = o;
	for (let e of Object.keys(s)) s[e] === void 0 && delete s[e];
	let c = await e._getAppCheckToken(), l = c ? `#${Do}=${encodeURIComponent(c)}` : "";
	return `${Ui(e)}?${m(s).slice(1)}${l}`;
}
function Ui({ config: e }) {
	return e.emulator ? On(e, Eo) : `https://${e.authDomain}/${To}`;
}
function Wi(e) {
	return e === void 0 || e?.length === 0;
}
function Gi(e) {
	switch (e) {
		case "Node": return "node";
		case "ReactNative": return "rn";
		case "Worker": return "webworker";
		case "Cordova": return "cordova";
		case "WebExtension": return "web-extension";
		default: return;
	}
}
function Ki(e) {
	pt(new v("auth", (t, { options: n }) => {
		let r = t.getProvider("app").getImmediate(), i = t.getProvider("heartbeat"), a = t.getProvider("app-check-internal"), { apiKey: o, authDomain: s } = r.options;
		M(o && !o.includes(":"), "invalid-api-key", { appName: r.name });
		let c = new pa(r, i, a, {
			apiKey: o,
			authDomain: s,
			clientPlatform: e,
			apiHost: "identitytoolkit.googleapis.com",
			tokenApiHost: "securetoken.googleapis.com",
			apiScheme: "https",
			sdkClientVersion: sr(e)
		});
		return vr(c, n), c;
	}, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e, t, n) => {
		e.getProvider("auth-internal").initialize();
	})), pt(new v("auth-internal", (e) => ((e) => new zo(e))(H(e.getProvider("auth").getImmediate())), "PRIVATE").setInstantiationMode("EXPLICIT")), C(Lo, Ro, Gi(e)), C(Lo, Ro, "esm2020");
}
function qi(e = gt()) {
	let t = mt(e, "auth");
	if (t.isInitialized()) return t.getImmediate();
	let n = _r(e, {
		popupRedirectResolver: Ao,
		persistence: [
			Za,
			La,
			Va
		]
	}), r = Ce("authTokenSyncURL");
	if (r && typeof isSecureContext == "boolean" && isSecureContext) {
		let e = new URL(r, location.origin);
		if (location.origin === e.origin) {
			let t = Ho(e.toString());
			Ur(n, t, () => t(n.currentUser)), Hr(n, (e) => t(e));
		}
	}
	let i = xe("auth");
	return i && yr(n, `http://${i}`), n;
}
function Ji() {
	return document.getElementsByTagName("head")?.[0] ?? document;
}
var Yi, Xi, G, K, Zi, Qi, $i, ea, ta, na, ra, ia, aa, q, oa, sa, ca, la, ua, da, fa, pa, ma, J, ha, ga, _a, Y, va, X, ya, ba, xa, Sa, Ca, wa, Ta, Z, Q, Ea, Da, Oa, ka, Aa, ja, Ma, Na, Pa, Fa, Ia, La, Ra, za, Ba, Va, Ha, Ua, Wa, Ga, Ka, qa, $, Ja, Ya, Xa, Za, Qa, $a, eo, to, no, ro, io, ao, oo, so, co, lo, uo, fo, po, mo, ho, go, _o, vo, yo, bo, xo, So, Co, wo, To, Eo, Do, Oo, ko, Ao, jo, Mo, No, Po, Fo, Io, Lo, Ro, zo, Bo, Vo, Ho, Uo = e((() => {
	hn(), Oe(), Be(), Ne(), Yi = _n, Xi = new _("auth", "Firebase", _n()), G = new ze("@firebase/auth"), K = class {
		constructor(e, t) {
			this.shortDelay = e, this.longDelay = t, P(t > e, "Short delay should be less than long delay!"), this.isMobile = o() || l();
		}
		get() {
			return En() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
		}
	}, Zi = class {
		static initialize(e, t, n) {
			this.fetchImpl = e, t && (this.headersImpl = t), n && (this.responseImpl = n);
		}
		static fetch() {
			if (this.fetchImpl) return this.fetchImpl;
			if (typeof self < "u" && "fetch" in self) return self.fetch;
			if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
			if (typeof fetch < "u") return fetch;
			N("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
		}
		static headers() {
			if (this.headersImpl) return this.headersImpl;
			if (typeof self < "u" && "Headers" in self) return self.Headers;
			if (typeof globalThis < "u" && globalThis.Headers) return globalThis.Headers;
			if (typeof Headers < "u") return Headers;
			N("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
		}
		static response() {
			if (this.responseImpl) return this.responseImpl;
			if (typeof self < "u" && "Response" in self) return self.Response;
			if (typeof globalThis < "u" && globalThis.Response) return globalThis.Response;
			if (typeof Response < "u") return Response;
			N("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
		}
	}, Qi = {
		CREDENTIAL_MISMATCH: "custom-token-mismatch",
		MISSING_CUSTOM_TOKEN: "internal-error",
		INVALID_IDENTIFIER: "invalid-email",
		MISSING_CONTINUE_URI: "internal-error",
		INVALID_PASSWORD: "wrong-password",
		MISSING_PASSWORD: "missing-password",
		INVALID_LOGIN_CREDENTIALS: "invalid-credential",
		EMAIL_EXISTS: "email-already-in-use",
		PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
		INVALID_IDP_RESPONSE: "invalid-credential",
		INVALID_PENDING_TOKEN: "invalid-credential",
		FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
		MISSING_REQ_TYPE: "internal-error",
		EMAIL_NOT_FOUND: "user-not-found",
		RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
		EXPIRED_OOB_CODE: "expired-action-code",
		INVALID_OOB_CODE: "invalid-action-code",
		MISSING_OOB_CODE: "internal-error",
		CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
		INVALID_ID_TOKEN: "invalid-user-token",
		TOKEN_EXPIRED: "user-token-expired",
		USER_NOT_FOUND: "user-token-expired",
		TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
		PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
		INVALID_CODE: "invalid-verification-code",
		INVALID_SESSION_INFO: "invalid-verification-id",
		INVALID_TEMPORARY_PROOF: "invalid-credential",
		MISSING_SESSION_INFO: "missing-verification-id",
		SESSION_EXPIRED: "code-expired",
		MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
		UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
		INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
		ADMIN_ONLY_OPERATION: "admin-restricted-operation",
		INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
		MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
		MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
		MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
		SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
		SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
		BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
		RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
		MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
		INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
		INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
		MISSING_CLIENT_TYPE: "missing-client-type",
		MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
		INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
		INVALID_REQ_TYPE: "invalid-req-type"
	}, $i = [
		"/v1/accounts:signInWithCustomToken",
		"/v1/accounts:signInWithEmailLink",
		"/v1/accounts:signInWithIdp",
		"/v1/accounts:signInWithPassword",
		"/v1/accounts:signInWithPhoneNumber",
		"/v1/token"
	], ea = new K(3e4, 6e4), ta = class {
		clearNetworkTimeout() {
			clearTimeout(this.timer);
		}
		constructor(e) {
			this.auth = e, this.timer = null, this.promise = new Promise((e, t) => {
				this.timer = setTimeout(() => t(A(this.auth, "network-request-failed")), ea.get());
			});
		}
	}, na = class {
		constructor(e) {
			if (this.siteKey = "", this.recaptchaEnforcementState = [], e.recaptchaKey === void 0) throw Error("recaptchaKey undefined");
			this.siteKey = e.recaptchaKey.split("/")[3], this.recaptchaEnforcementState = e.recaptchaEnforcementState;
		}
		getProviderEnforcementState(e) {
			if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0) return null;
			for (let t of this.recaptchaEnforcementState) if (t.provider && t.provider === e) return jn(t.enforcementState);
			return null;
		}
		isProviderEnabled(e) {
			return this.getProviderEnforcementState(e) === "ENFORCE" || this.getProviderEnforcementState(e) === "AUDIT";
		}
		isAnyProviderEnabled() {
			return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER") || this.isProviderEnabled("PHONE_PROVIDER");
		}
	}, ra = class {
		constructor(e) {
			this.user = e, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4;
		}
		_start() {
			this.isRunning || (this.isRunning = !0, this.schedule());
		}
		_stop() {
			this.isRunning && (this.isRunning = !1, this.timerId !== null && clearTimeout(this.timerId));
		}
		getInterval(e) {
			if (e) {
				let e = this.errorBackoff;
				return this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4), e;
			} else {
				this.errorBackoff = 3e4;
				let e = (this.user.stsTokenManager.expirationTime ?? 0) - Date.now() - 3e5;
				return Math.max(0, e);
			}
		}
		schedule(e = !1) {
			if (!this.isRunning) return;
			let t = this.getInterval(e);
			this.timerId = setTimeout(async () => {
				await this.iteration();
			}, t);
		}
		async iteration() {
			try {
				await this.user.getIdToken(!0);
			} catch (e) {
				e?.code === "auth/network-request-failed" && this.schedule(!0);
				return;
			}
			this.schedule();
		}
	}, ia = class {
		constructor(e, t) {
			this.createdAt = e, this.lastLoginAt = t, this._initializeTime();
		}
		_initializeTime() {
			this.lastSignInTime = R(this.lastLoginAt), this.creationTime = R(this.createdAt);
		}
		_copy(e) {
			this.createdAt = e.createdAt, this.lastLoginAt = e.lastLoginAt, this._initializeTime();
		}
		toJSON() {
			return {
				createdAt: this.createdAt,
				lastLoginAt: this.lastLoginAt
			};
		}
	}, aa = class e {
		constructor() {
			this.refreshToken = null, this.accessToken = null, this.expirationTime = null;
		}
		get isExpired() {
			return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
		}
		updateFromServerResponse(e) {
			M(e.idToken, "internal-error"), M(e.idToken !== void 0, "internal-error"), M(e.refreshToken !== void 0, "internal-error");
			let t = "expiresIn" in e && e.expiresIn !== void 0 ? Number(e.expiresIn) : Bn(e.idToken);
			this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
		}
		updateFromIdToken(e) {
			M(e.length !== 0, "internal-error");
			let t = Bn(e);
			this.updateTokensAndExpiration(e, null, t);
		}
		async getToken(e, t = !1) {
			return !t && this.accessToken && !this.isExpired ? this.accessToken : (M(this.refreshToken, e, "user-token-expired"), this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null);
		}
		clearRefreshToken() {
			this.refreshToken = null;
		}
		async refresh(e, t) {
			let { accessToken: n, refreshToken: r, expiresIn: i } = await Kn(e, t);
			this.updateTokensAndExpiration(n, r, Number(i));
		}
		updateTokensAndExpiration(e, t, n) {
			this.refreshToken = t || null, this.accessToken = e || null, this.expirationTime = Date.now() + n * 1e3;
		}
		static fromJSON(t, n) {
			let { refreshToken: r, accessToken: i, expirationTime: a } = n, o = new e();
			return r && (M(typeof r == "string", "internal-error", { appName: t }), o.refreshToken = r), i && (M(typeof i == "string", "internal-error", { appName: t }), o.accessToken = i), a && (M(typeof a == "number", "internal-error", { appName: t }), o.expirationTime = a), o;
		}
		toJSON() {
			return {
				refreshToken: this.refreshToken,
				accessToken: this.accessToken,
				expirationTime: this.expirationTime
			};
		}
		_assign(e) {
			this.accessToken = e.accessToken, this.refreshToken = e.refreshToken, this.expirationTime = e.expirationTime;
		}
		_clone() {
			return Object.assign(new e(), this.toJSON());
		}
		_performRefresh() {
			return N("not implemented");
		}
	}, q = class e {
		constructor({ uid: e, auth: t, stsTokenManager: n, ...r }) {
			this.providerId = "firebase", this.proactiveRefresh = new ra(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = e, this.auth = t, this.stsTokenManager = n, this.accessToken = n.accessToken, this.displayName = r.displayName || null, this.email = r.email || null, this.emailVerified = r.emailVerified || !1, this.phoneNumber = r.phoneNumber || null, this.photoURL = r.photoURL || null, this.isAnonymous = r.isAnonymous || !1, this.tenantId = r.tenantId || null, this.providerData = r.providerData ? [...r.providerData] : [], this.metadata = new ia(r.createdAt || void 0, r.lastLoginAt || void 0);
		}
		async getIdToken(e) {
			let t = await z(this, this.stsTokenManager.getToken(this.auth, e));
			return M(t, this.auth, "internal-error"), this.accessToken !== t && (this.accessToken = t, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), t;
		}
		getIdTokenResult(e) {
			return Ln(this, e);
		}
		reload() {
			return Un(this);
		}
		_assign(e) {
			this !== e && (M(this.uid === e.uid, this.auth, "internal-error"), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map((e) => ({ ...e })), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager));
		}
		_clone(t) {
			let n = new e({
				...this,
				auth: t,
				stsTokenManager: this.stsTokenManager._clone()
			});
			return n.metadata._copy(this.metadata), n;
		}
		_onReload(e) {
			M(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = e, this.reloadUserInfo &&= (this._notifyReloadListener(this.reloadUserInfo), null);
		}
		_notifyReloadListener(e) {
			this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e;
		}
		_startProactiveRefresh() {
			this.proactiveRefresh._start();
		}
		_stopProactiveRefresh() {
			this.proactiveRefresh._stop();
		}
		async _updateTokensIfNecessary(e, t = !1) {
			let n = !1;
			e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), n = !0), t && await Hn(this), await this.auth._persistUserIfCurrent(this), n && this.auth._notifyListenersIfCurrent(this);
		}
		async delete() {
			if (S(this.auth.app)) return Promise.reject(j(this.auth));
			let e = await this.getIdToken();
			return await z(this, Fn(this.auth, { idToken: e })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
		}
		toJSON() {
			return {
				uid: this.uid,
				email: this.email || void 0,
				emailVerified: this.emailVerified,
				displayName: this.displayName || void 0,
				isAnonymous: this.isAnonymous,
				photoURL: this.photoURL || void 0,
				phoneNumber: this.phoneNumber || void 0,
				tenantId: this.tenantId || void 0,
				providerData: this.providerData.map((e) => ({ ...e })),
				stsTokenManager: this.stsTokenManager.toJSON(),
				_redirectEventId: this._redirectEventId,
				...this.metadata.toJSON(),
				apiKey: this.auth.config.apiKey,
				appName: this.auth.name
			};
		}
		get refreshToken() {
			return this.stsTokenManager.refreshToken || "";
		}
		static _fromJSON(t, n) {
			let r = n.displayName ?? void 0, i = n.email ?? void 0, a = n.phoneNumber ?? void 0, o = n.photoURL ?? void 0, s = n.tenantId ?? void 0, c = n._redirectEventId ?? void 0, l = n.createdAt ?? void 0, u = n.lastLoginAt ?? void 0, { uid: d, emailVerified: f, isAnonymous: ee, providerData: te, stsTokenManager: p } = n;
			M(d && p, t, "internal-error");
			let ne = aa.fromJSON(this.name, p);
			M(typeof d == "string", t, "internal-error"), B(r, t.name), B(i, t.name), M(typeof f == "boolean", t, "internal-error"), M(typeof ee == "boolean", t, "internal-error"), B(a, t.name), B(o, t.name), B(s, t.name), B(c, t.name), B(l, t.name), B(u, t.name);
			let m = new e({
				uid: d,
				auth: t,
				email: i,
				emailVerified: f,
				displayName: r,
				isAnonymous: ee,
				photoURL: o,
				phoneNumber: a,
				tenantId: s,
				stsTokenManager: ne,
				createdAt: l,
				lastLoginAt: u
			});
			return te && Array.isArray(te) && (m.providerData = te.map((e) => ({ ...e }))), c && (m._redirectEventId = c), m;
		}
		static async _fromIdTokenResponse(t, n, r = !1) {
			let i = new aa();
			i.updateFromServerResponse(n);
			let a = new e({
				uid: n.localId,
				auth: t,
				stsTokenManager: i,
				isAnonymous: r
			});
			return await Hn(a), a;
		}
		static async _fromGetAccountInfoResponse(t, n, r) {
			let i = n.users[0];
			M(i.localId !== void 0, "internal-error");
			let a = i.providerUserInfo === void 0 ? [] : Gn(i.providerUserInfo), o = !(i.email && i.passwordHash) && !a?.length, s = new aa();
			s.updateFromIdToken(r);
			let c = new e({
				uid: i.localId,
				auth: t,
				stsTokenManager: s,
				isAnonymous: o
			}), l = {
				uid: i.localId,
				displayName: i.displayName || null,
				photoURL: i.photoUrl || null,
				email: i.email || null,
				emailVerified: i.emailVerified || !1,
				phoneNumber: i.phoneNumber || null,
				tenantId: i.tenantId || null,
				providerData: a,
				metadata: new ia(i.createdAt, i.lastLoginAt),
				isAnonymous: !(i.email && i.passwordHash) && !a?.length
			};
			return Object.assign(c, l), c;
		}
	}, oa = /* @__PURE__ */ new Map(), sa = class {
		constructor() {
			this.type = "NONE", this.storage = {};
		}
		async _isAvailable() {
			return !0;
		}
		async _set(e, t) {
			this.storage[e] = t;
		}
		async _get(e) {
			let t = this.storage[e];
			return t === void 0 ? null : t;
		}
		async _remove(e) {
			delete this.storage[e];
		}
		_addListener(e, t) {}
		_removeListener(e, t) {}
	}, sa.type = "NONE", ca = sa, la = class e {
		constructor(e, t, n) {
			this.persistence = e, this.auth = t, this.userKey = n;
			let { config: r, name: i } = this.auth;
			this.fullUserKey = Jn(this.userKey, r.apiKey, i), this.fullPersistenceKey = Jn("persistence", r.apiKey, i), this.boundEventHandler = t._onStorageEvent.bind(t), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
		}
		setCurrentUser(e) {
			return this.persistence._set(this.fullUserKey, e.toJSON());
		}
		async getCurrentUser() {
			let e = await this.persistence._get(this.fullUserKey);
			if (!e) return null;
			if (typeof e == "string") {
				let t = await In(this.auth, { idToken: e }).catch(() => void 0);
				return t ? q._fromGetAccountInfoResponse(this.auth, t, e) : null;
			}
			return q._fromJSON(this.auth, e);
		}
		removeCurrentUser() {
			return this.persistence._remove(this.fullUserKey);
		}
		savePersistenceForRedirect() {
			return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
		}
		async setPersistence(e) {
			if (this.persistence === e) return;
			let t = await this.getCurrentUser();
			if (await this.removeCurrentUser(), this.persistence = e, t) return this.setCurrentUser(t);
		}
		delete() {
			this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
		}
		static async create(t, n, r = "authUser") {
			if (!n.length) return new e(V(ca), t, r);
			let i = (await Promise.all(n.map(async (e) => {
				if (await e._isAvailable()) return e;
			}))).filter((e) => e), a = i[0] || V(ca), o = Jn(r, t.config.apiKey, t.name), s = null;
			for (let e of n) try {
				let n = await e._get(o);
				if (n) {
					let r;
					if (typeof n == "string") {
						let e = await In(t, { idToken: n }).catch(() => void 0);
						if (!e) break;
						r = await q._fromGetAccountInfoResponse(t, e, n);
					} else r = q._fromJSON(t, n);
					e !== a && (s = r), a = e;
					break;
				}
			} catch {}
			let c = i.filter((e) => e._shouldAllowMigration);
			return !a._shouldAllowMigration || !c.length ? new e(a, t, r) : (a = c[0], s && await a._set(o, s.toJSON()), await Promise.all(n.map(async (e) => {
				if (e !== a) try {
					await e._remove(o);
				} catch {}
			})), new e(a, t, r));
		}
	}, ua = class {
		constructor(e) {
			this.auth = e, this.queue = [];
		}
		pushCallback(e, t) {
			let n = (t) => new Promise((n, r) => {
				try {
					n(e(t));
				} catch (e) {
					r(e);
				}
			});
			n.onAbort = t, this.queue.push(n);
			let r = this.queue.length - 1;
			return () => {
				this.queue[r] = () => Promise.resolve();
			};
		}
		async runMiddleware(e) {
			if (this.auth.currentUser === e) return;
			let t = [];
			try {
				for (let n of this.queue) await n(e), n.onAbort && t.push(n.onAbort);
			} catch (e) {
				t.reverse();
				for (let e of t) try {
					e();
				} catch {}
				throw this.auth._errorFactory.create("login-blocked", { originalMessage: e?.message });
			}
		}
	}, da = 6, fa = class {
		constructor(e) {
			let t = e.customStrengthOptions;
			this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = t.minPasswordLength ?? da, t.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = t.maxPasswordLength), t.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = t.containsLowercaseCharacter), t.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = t.containsUppercaseCharacter), t.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = t.containsNumericCharacter), t.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = t.containsNonAlphanumericCharacter), this.enforcementState = e.enforcementState, this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = e.allowedNonAlphanumericCharacters?.join("") ?? "", this.forceUpgradeOnSignin = e.forceUpgradeOnSignin ?? !1, this.schemaVersion = e.schemaVersion;
		}
		validatePassword(e) {
			let t = {
				isValid: !0,
				passwordPolicy: this
			};
			return this.validatePasswordLengthOptions(e, t), this.validatePasswordCharacterOptions(e, t), t.isValid &&= t.meetsMinPasswordLength ?? !0, t.isValid &&= t.meetsMaxPasswordLength ?? !0, t.isValid &&= t.containsLowercaseLetter ?? !0, t.isValid &&= t.containsUppercaseLetter ?? !0, t.isValid &&= t.containsNumericCharacter ?? !0, t.isValid &&= t.containsNonAlphanumericCharacter ?? !0, t;
		}
		validatePasswordLengthOptions(e, t) {
			let n = this.customStrengthOptions.minPasswordLength, r = this.customStrengthOptions.maxPasswordLength;
			n && (t.meetsMinPasswordLength = e.length >= n), r && (t.meetsMaxPasswordLength = e.length <= r);
		}
		validatePasswordCharacterOptions(e, t) {
			this.updatePasswordCharacterOptionsStatuses(t, !1, !1, !1, !1);
			let n;
			for (let r = 0; r < e.length; r++) n = e.charAt(r), this.updatePasswordCharacterOptionsStatuses(t, n >= "a" && n <= "z", n >= "A" && n <= "Z", n >= "0" && n <= "9", this.allowedNonAlphanumericCharacters.includes(n));
		}
		updatePasswordCharacterOptionsStatuses(e, t, n, r, i) {
			this.customStrengthOptions.containsLowercaseLetter && (e.containsLowercaseLetter ||= t), this.customStrengthOptions.containsUppercaseLetter && (e.containsUppercaseLetter ||= n), this.customStrengthOptions.containsNumericCharacter && (e.containsNumericCharacter ||= r), this.customStrengthOptions.containsNonAlphanumericCharacter && (e.containsNonAlphanumericCharacter ||= i);
		}
	}, pa = class {
		constructor(e, t, n, r) {
			this.app = e, this.heartbeatServiceProvider = t, this.appCheckServiceProvider = n, this.config = r, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new ma(this), this.idTokenSubscription = new ma(this), this.beforeStateQueue = new ua(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = Xi, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this._resolvePersistenceManagerAvailable = void 0, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = r.sdkClientVersion, this._persistenceManagerAvailable = new Promise((e) => this._resolvePersistenceManagerAvailable = e);
		}
		_initializeWithPersistence(e, t) {
			return t && (this._popupRedirectResolver = V(t)), this._initializationPromise = this.queue(async () => {
				if (!this._deleted && (this.persistenceManager = await la.create(this, e), this._resolvePersistenceManagerAvailable?.(), !this._deleted)) {
					if (this._popupRedirectResolver?._shouldInitProactively) try {
						await this._popupRedirectResolver._initialize(this);
					} catch {}
					await this.initializeCurrentUser(t), this.lastNotifiedUid = this.currentUser?.uid || null, !this._deleted && (this._isInitialized = !0);
				}
			}), this._initializationPromise;
		}
		async _onStorageEvent() {
			if (this._deleted) return;
			let e = await this.assertedPersistence.getCurrentUser();
			if (!(!this.currentUser && !e)) {
				if (this.currentUser && e && this.currentUser.uid === e.uid) {
					this._currentUser._assign(e), await this.currentUser.getIdToken();
					return;
				}
				await this._updateCurrentUser(e, !0);
			}
		}
		async initializeCurrentUserFromIdToken(e) {
			try {
				let t = await In(this, { idToken: e }), n = await q._fromGetAccountInfoResponse(this, t, e);
				await this.directlySetCurrentUser(n);
			} catch (e) {
				console.warn("FirebaseServerApp could not login user with provided authIdToken: ", e), await this.directlySetCurrentUser(null);
			}
		}
		async initializeCurrentUser(e) {
			if (S(this.app)) {
				let e = this.app.settings.authIdToken;
				return e ? new Promise((t) => {
					setTimeout(() => this.initializeCurrentUserFromIdToken(e).then(t, t));
				}) : this.directlySetCurrentUser(null);
			}
			let t = await this.assertedPersistence.getCurrentUser(), n = t, r = !1;
			if (e && this.config.authDomain) {
				await this.getOrInitRedirectPersistenceManager();
				let t = this.redirectUser?._redirectEventId, i = n?._redirectEventId, a = await this.tryRedirectSignIn(e);
				(!t || t === i) && a?.user && (n = a.user, r = !0);
			}
			if (!n) return this.directlySetCurrentUser(null);
			if (!n._redirectEventId) {
				if (r) try {
					await this.beforeStateQueue.runMiddleware(n);
				} catch (e) {
					n = t, this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(e));
				}
				return n ? this.reloadAndSetCurrentUserOrClear(n) : this.directlySetCurrentUser(null);
			}
			return M(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === n._redirectEventId ? this.directlySetCurrentUser(n) : this.reloadAndSetCurrentUserOrClear(n);
		}
		async tryRedirectSignIn(e) {
			let t = null;
			try {
				t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
			} catch {
				await this._setRedirectUser(null);
			}
			return t;
		}
		async reloadAndSetCurrentUserOrClear(e) {
			try {
				await Hn(e);
			} catch (e) {
				if (e?.code !== "auth/network-request-failed") return this.directlySetCurrentUser(null);
			}
			return this.directlySetCurrentUser(e);
		}
		useDeviceLanguage() {
			this.languageCode = Dn();
		}
		async _delete() {
			this._deleted = !0;
		}
		async updateCurrentUser(e) {
			if (S(this.app)) return Promise.reject(j(this));
			let t = e ? h(e) : null;
			return t && M(t.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(t && t._clone(this));
		}
		async _updateCurrentUser(e, t = !1) {
			if (!this._deleted) return e && M(this.tenantId === e.tenantId, this, "tenant-id-mismatch"), t || await this.beforeStateQueue.runMiddleware(e), this.queue(async () => {
				await this.directlySetCurrentUser(e), this.notifyAuthListeners();
			});
		}
		async signOut() {
			return S(this.app) ? Promise.reject(j(this)) : (await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0));
		}
		setPersistence(e) {
			return S(this.app) ? Promise.reject(j(this)) : this.queue(async () => {
				await this.assertedPersistence.setPersistence(V(e));
			});
		}
		_getRecaptchaConfig() {
			return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId];
		}
		async validatePassword(e) {
			this._getPasswordPolicyInternal() || await this._updatePasswordPolicy();
			let t = this._getPasswordPolicyInternal();
			return t.schemaVersion === this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? t.validatePassword(e) : Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {}));
		}
		_getPasswordPolicyInternal() {
			return this.tenantId === null ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId];
		}
		async _updatePasswordPolicy() {
			let e = new fa(await cr(this));
			this.tenantId === null ? this._projectPasswordPolicy = e : this._tenantPasswordPolicies[this.tenantId] = e;
		}
		_getPersistenceType() {
			return this.assertedPersistence.persistence.type;
		}
		_getPersistence() {
			return this.assertedPersistence.persistence;
		}
		_updateErrorMap(e) {
			this._errorFactory = new _("auth", "Firebase", e());
		}
		onAuthStateChanged(e, t, n) {
			return this.registerStateListener(this.authStateSubscription, e, t, n);
		}
		beforeAuthStateChanged(e, t) {
			return this.beforeStateQueue.pushCallback(e, t);
		}
		onIdTokenChanged(e, t, n) {
			return this.registerStateListener(this.idTokenSubscription, e, t, n);
		}
		authStateReady() {
			return new Promise((e, t) => {
				if (this.currentUser) e();
				else {
					let n = this.onAuthStateChanged(() => {
						n(), e();
					}, t);
				}
			});
		}
		async revokeAccessToken(e) {
			if (this.currentUser) {
				let t = {
					providerId: "apple.com",
					tokenType: "ACCESS_TOKEN",
					token: e,
					idToken: await this.currentUser.getIdToken()
				};
				this.tenantId != null && (t.tenantId = this.tenantId), await qn(this, t);
			}
		}
		toJSON() {
			return {
				apiKey: this.config.apiKey,
				authDomain: this.config.authDomain,
				appName: this.name,
				currentUser: this._currentUser?.toJSON()
			};
		}
		async _setRedirectUser(e, t) {
			let n = await this.getOrInitRedirectPersistenceManager(t);
			return e === null ? n.removeCurrentUser() : n.setCurrentUser(e);
		}
		async getOrInitRedirectPersistenceManager(e) {
			if (!this.redirectPersistenceManager) {
				let t = e && V(e) || this._popupRedirectResolver;
				M(t, this, "argument-error"), this.redirectPersistenceManager = await la.create(this, [V(t._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
			}
			return this.redirectPersistenceManager;
		}
		async _redirectUserForId(e) {
			return this._isInitialized && await this.queue(async () => {}), this._currentUser?._redirectEventId === e ? this._currentUser : this.redirectUser?._redirectEventId === e ? this.redirectUser : null;
		}
		async _persistUserIfCurrent(e) {
			if (e === this.currentUser) return this.queue(async () => this.directlySetCurrentUser(e));
		}
		_notifyListenersIfCurrent(e) {
			e === this.currentUser && this.notifyAuthListeners();
		}
		_key() {
			return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
		}
		_startProactiveRefresh() {
			this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh();
		}
		_stopProactiveRefresh() {
			this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh();
		}
		get _currentUser() {
			return this.currentUser;
		}
		notifyAuthListeners() {
			if (!this._isInitialized) return;
			this.idTokenSubscription.next(this.currentUser);
			let e = this.currentUser?.uid ?? null;
			this.lastNotifiedUid !== e && (this.lastNotifiedUid = e, this.authStateSubscription.next(this.currentUser));
		}
		registerStateListener(e, t, n, r) {
			if (this._deleted) return () => {};
			let i = typeof t == "function" ? t : t.next.bind(t), a = !1, o = this._isInitialized ? Promise.resolve() : this._initializationPromise;
			if (M(o, this, "internal-error"), o.then(() => {
				a || i(this.currentUser);
			}), typeof t == "function") {
				let i = e.addObserver(t, n, r);
				return () => {
					a = !0, i();
				};
			} else {
				let n = e.addObserver(t);
				return () => {
					a = !0, n();
				};
			}
		}
		async directlySetCurrentUser(e) {
			this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(), e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(), this.currentUser = e, e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser();
		}
		queue(e) {
			return this.operations = this.operations.then(e, e), this.operations;
		}
		get assertedPersistence() {
			return M(this.persistenceManager, this, "internal-error"), this.persistenceManager;
		}
		_logFramework(e) {
			!e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = sr(this.config.clientPlatform, this._getFrameworks()));
		}
		_getFrameworks() {
			return this.frameworks;
		}
		async _getAdditionalHeaders() {
			let e = { "X-Client-Version": this.clientVersion };
			this.app.options.appId && (e["X-Firebase-gmpid"] = this.app.options.appId);
			let t = await this.heartbeatServiceProvider.getImmediate({ optional: !0 })?.getHeartbeatsHeader();
			t && (e["X-Firebase-Client"] = t);
			let n = await this._getAppCheckToken();
			return n && (e["X-Firebase-AppCheck"] = n), e;
		}
		async _getAppCheckToken() {
			if (S(this.app) && this.app.settings.appCheckToken) return this.app.settings.appCheckToken;
			let e = await this.appCheckServiceProvider.getImmediate({ optional: !0 })?.getToken();
			return e?.error && vn(`Error while retrieving App Check token: ${e.error}`), e?.token;
		}
	}, ma = class {
		constructor(e) {
			this.auth = e, this.observer = null, this.addObserver = ae((e) => this.observer = e);
		}
		get next() {
			return M(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer);
		}
	}, J = {
		async loadJS() {
			throw Error("Unable to load external scripts");
		},
		recaptchaV2Script: "",
		recaptchaEnterpriseScript: "",
		gapiScript: ""
	}, ha = class {
		constructor() {
			this.enterprise = new ga();
		}
		ready(e) {
			e();
		}
		execute(e, t) {
			return Promise.resolve("token");
		}
		render(e, t) {
			return "";
		}
	}, ga = class {
		ready(e) {
			e();
		}
		execute(e, t) {
			return Promise.resolve("token");
		}
		render(e, t) {
			return "";
		}
	}, _a = "recaptcha-enterprise", Y = "NO_RECAPTCHA", va = class {
		constructor(e) {
			this.type = _a, this.auth = H(e);
		}
		async verify(e = "verify", t = !1) {
			async function n(e) {
				if (!t) {
					if (e.tenantId == null && e._agentRecaptchaConfig != null) return e._agentRecaptchaConfig.siteKey;
					if (e.tenantId != null && e._tenantRecaptchaConfigs[e.tenantId] !== void 0) return e._tenantRecaptchaConfigs[e.tenantId].siteKey;
				}
				return new Promise(async (t, n) => {
					Pn(e, {
						clientType: "CLIENT_TYPE_WEB",
						version: "RECAPTCHA_ENTERPRISE"
					}).then((r) => {
						if (r.recaptchaKey === void 0) n(/* @__PURE__ */ Error("recaptcha Enterprise site key undefined"));
						else {
							let n = new na(r);
							return e.tenantId == null ? e._agentRecaptchaConfig = n : e._tenantRecaptchaConfigs[e.tenantId] = n, t(n.siteKey);
						}
					}).catch((e) => {
						n(e);
					});
				});
			}
			function r(t, n, r) {
				let i = window.grecaptcha;
				Nn(i) ? i.enterprise.ready(() => {
					i.enterprise.execute(t, { action: e }).then((e) => {
						n(e);
					}).catch(() => {
						n(Y);
					});
				}) : r(Error("No reCAPTCHA enterprise script loaded."));
			}
			return this.auth.settings.appVerificationDisabledForTesting ? new ha().execute("siteKey", { action: "verify" }) : new Promise((e, i) => {
				n(this.auth).then((n) => {
					if (!t && Nn(window.grecaptcha)) r(n, e, i);
					else {
						if (typeof window > "u") {
							i(/* @__PURE__ */ Error("RecaptchaVerifier is only supported in browser"));
							return;
						}
						let t = dr();
						t.length !== 0 && (t += n), ur(t).then(() => {
							r(n, e, i);
						}).catch((e) => {
							i(e);
						});
					}
				}).catch((e) => {
					i(e);
				});
			});
		}
	}, X = class {
		constructor(e, t) {
			this.providerId = e, this.signInMethod = t;
		}
		toJSON() {
			return N("not implemented");
		}
		_getIdTokenResponse(e) {
			return N("not implemented");
		}
		_linkToIdToken(e, t) {
			return N("not implemented");
		}
		_getReauthenticationResolver(e) {
			return N("not implemented");
		}
	}, ya = class e extends X {
		constructor(e, t, n, r = null) {
			super("password", n), this._email = e, this._password = t, this._tenantId = r;
		}
		static _fromEmailAndPassword(t, n) {
			return new e(t, n, "password");
		}
		static _fromEmailAndCode(t, n, r = null) {
			return new e(t, n, "emailLink", r);
		}
		toJSON() {
			return {
				email: this._email,
				password: this._password,
				signInMethod: this.signInMethod,
				tenantId: this._tenantId
			};
		}
		static fromJSON(e) {
			let t = typeof e == "string" ? JSON.parse(e) : e;
			if (t?.email && t?.password) {
				if (t.signInMethod === "password") return this._fromEmailAndPassword(t.email, t.password);
				if (t.signInMethod === "emailLink") return this._fromEmailAndCode(t.email, t.password, t.tenantId);
			}
			return null;
		}
		async _getIdTokenResponse(e) {
			switch (this.signInMethod) {
				case "password": return hr(e, {
					returnSecureToken: !0,
					email: this._email,
					password: this._password,
					clientType: "CLIENT_TYPE_WEB"
				}, "signInWithPassword", Tr, "EMAIL_PASSWORD_PROVIDER");
				case "emailLink": return Er(e, {
					email: this._email,
					oobCode: this._password
				});
				default: k(e, "internal-error");
			}
		}
		async _linkToIdToken(e, t) {
			switch (this.signInMethod) {
				case "password": return hr(e, {
					idToken: t,
					returnSecureToken: !0,
					email: this._email,
					password: this._password,
					clientType: "CLIENT_TYPE_WEB"
				}, "signUpPassword", wr, "EMAIL_PASSWORD_PROVIDER");
				case "emailLink": return Dr(e, {
					idToken: t,
					email: this._email,
					oobCode: this._password
				});
				default: k(e, "internal-error");
			}
		}
		_getReauthenticationResolver(e) {
			return this._getIdTokenResponse(e);
		}
	}, ba = "http://localhost", xa = class e extends X {
		constructor() {
			super(...arguments), this.pendingToken = null;
		}
		static _fromParams(t) {
			let n = new e(t.providerId, t.signInMethod);
			return t.idToken || t.accessToken ? (t.idToken && (n.idToken = t.idToken), t.accessToken && (n.accessToken = t.accessToken), t.nonce && !t.pendingToken && (n.nonce = t.nonce), t.pendingToken && (n.pendingToken = t.pendingToken)) : t.oauthToken && t.oauthTokenSecret ? (n.accessToken = t.oauthToken, n.secret = t.oauthTokenSecret) : k("argument-error"), n;
		}
		toJSON() {
			return {
				idToken: this.idToken,
				accessToken: this.accessToken,
				secret: this.secret,
				nonce: this.nonce,
				pendingToken: this.pendingToken,
				providerId: this.providerId,
				signInMethod: this.signInMethod
			};
		}
		static fromJSON(t) {
			let { providerId: n, signInMethod: r, ...i } = typeof t == "string" ? JSON.parse(t) : t;
			if (!n || !r) return null;
			let a = new e(n, r);
			return a.idToken = i.idToken || void 0, a.accessToken = i.accessToken || void 0, a.secret = i.secret, a.nonce = i.nonce, a.pendingToken = i.pendingToken || null, a;
		}
		_getIdTokenResponse(e) {
			return U(e, this.buildRequest());
		}
		_linkToIdToken(e, t) {
			let n = this.buildRequest();
			return n.idToken = t, U(e, n);
		}
		_getReauthenticationResolver(e) {
			let t = this.buildRequest();
			return t.autoCreate = !1, U(e, t);
		}
		buildRequest() {
			let e = {
				requestUri: ba,
				returnSecureToken: !0
			};
			if (this.pendingToken) e.pendingToken = this.pendingToken;
			else {
				let t = {};
				this.idToken && (t.id_token = this.idToken), this.accessToken && (t.access_token = this.accessToken), this.secret && (t.oauth_token_secret = this.secret), t.providerId = this.providerId, this.nonce && !this.pendingToken && (t.nonce = this.nonce), e.postBody = m(t);
			}
			return e;
		}
	}, Sa = { USER_NOT_FOUND: "user-not-found" }, Ca = class e extends X {
		constructor(e) {
			super("phone", "phone"), this.params = e;
		}
		static _fromVerification(t, n) {
			return new e({
				verificationId: t,
				verificationCode: n
			});
		}
		static _fromTokenResponse(t, n) {
			return new e({
				phoneNumber: t,
				temporaryProof: n
			});
		}
		_getIdTokenResponse(e) {
			return kr(e, this._makeVerificationRequest());
		}
		_linkToIdToken(e, t) {
			return Ar(e, {
				idToken: t,
				...this._makeVerificationRequest()
			});
		}
		_getReauthenticationResolver(e) {
			return jr(e, this._makeVerificationRequest());
		}
		_makeVerificationRequest() {
			let { temporaryProof: e, phoneNumber: t, verificationId: n, verificationCode: r } = this.params;
			return e && t ? {
				temporaryProof: e,
				phoneNumber: t
			} : {
				sessionInfo: n,
				code: r
			};
		}
		toJSON() {
			let e = { providerId: this.providerId };
			return this.params.phoneNumber && (e.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (e.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (e.verificationCode = this.params.verificationCode), this.params.verificationId && (e.verificationId = this.params.verificationId), e;
		}
		static fromJSON(t) {
			typeof t == "string" && (t = JSON.parse(t));
			let { verificationId: n, verificationCode: r, phoneNumber: i, temporaryProof: a } = t;
			return !r && !n && !i && !a ? null : new e({
				verificationId: n,
				verificationCode: r,
				phoneNumber: i,
				temporaryProof: a
			});
		}
	}, wa = class e {
		constructor(e) {
			let t = re(ie(e)), n = t.apiKey ?? null, r = t.oobCode ?? null, i = Mr(t.mode ?? null);
			M(n && r && i, "argument-error"), this.apiKey = n, this.operation = i, this.code = r, this.continueUrl = t.continueUrl ?? null, this.languageCode = t.lang ?? null, this.tenantId = t.tenantId ?? null;
		}
		static parseLink(t) {
			let n = Nr(t);
			try {
				return new e(n);
			} catch {
				return null;
			}
		}
	}, Ta = class e {
		constructor() {
			this.providerId = e.PROVIDER_ID;
		}
		static credential(e, t) {
			return ya._fromEmailAndPassword(e, t);
		}
		static credentialWithLink(e, t) {
			let n = wa.parseLink(t);
			return M(n, "argument-error"), ya._fromEmailAndCode(e, n.code, n.tenantId);
		}
	}, Ta.PROVIDER_ID = "password", Ta.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", Ta.EMAIL_LINK_SIGN_IN_METHOD = "emailLink", Z = class {
		constructor(e) {
			this.providerId = e, this.defaultLanguageCode = null, this.customParameters = {};
		}
		setDefaultLanguage(e) {
			this.defaultLanguageCode = e;
		}
		setCustomParameters(e) {
			return this.customParameters = e, this;
		}
		getCustomParameters() {
			return this.customParameters;
		}
	}, Q = class extends Z {
		constructor() {
			super(...arguments), this.scopes = [];
		}
		addScope(e) {
			return this.scopes.includes(e) || this.scopes.push(e), this;
		}
		getScopes() {
			return [...this.scopes];
		}
	}, Ea = class e extends Q {
		constructor() {
			super("facebook.com");
		}
		static credential(t) {
			return xa._fromParams({
				providerId: e.PROVIDER_ID,
				signInMethod: e.FACEBOOK_SIGN_IN_METHOD,
				accessToken: t
			});
		}
		static credentialFromResult(t) {
			return e.credentialFromTaggedObject(t);
		}
		static credentialFromError(t) {
			return e.credentialFromTaggedObject(t.customData || {});
		}
		static credentialFromTaggedObject({ _tokenResponse: t }) {
			if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
			try {
				return e.credential(t.oauthAccessToken);
			} catch {
				return null;
			}
		}
	}, Ea.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Ea.PROVIDER_ID = "facebook.com", Da = class e extends Q {
		constructor() {
			super("google.com"), this.addScope("profile");
		}
		static credential(t, n) {
			return xa._fromParams({
				providerId: e.PROVIDER_ID,
				signInMethod: e.GOOGLE_SIGN_IN_METHOD,
				idToken: t,
				accessToken: n
			});
		}
		static credentialFromResult(t) {
			return e.credentialFromTaggedObject(t);
		}
		static credentialFromError(t) {
			return e.credentialFromTaggedObject(t.customData || {});
		}
		static credentialFromTaggedObject({ _tokenResponse: t }) {
			if (!t) return null;
			let { oauthIdToken: n, oauthAccessToken: r } = t;
			if (!n && !r) return null;
			try {
				return e.credential(n, r);
			} catch {
				return null;
			}
		}
	}, Da.GOOGLE_SIGN_IN_METHOD = "google.com", Da.PROVIDER_ID = "google.com", Oa = class e extends Q {
		constructor() {
			super("github.com");
		}
		static credential(t) {
			return xa._fromParams({
				providerId: e.PROVIDER_ID,
				signInMethod: e.GITHUB_SIGN_IN_METHOD,
				accessToken: t
			});
		}
		static credentialFromResult(t) {
			return e.credentialFromTaggedObject(t);
		}
		static credentialFromError(t) {
			return e.credentialFromTaggedObject(t.customData || {});
		}
		static credentialFromTaggedObject({ _tokenResponse: t }) {
			if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
			try {
				return e.credential(t.oauthAccessToken);
			} catch {
				return null;
			}
		}
	}, Oa.GITHUB_SIGN_IN_METHOD = "github.com", Oa.PROVIDER_ID = "github.com", ka = class e extends Q {
		constructor() {
			super("twitter.com");
		}
		static credential(t, n) {
			return xa._fromParams({
				providerId: e.PROVIDER_ID,
				signInMethod: e.TWITTER_SIGN_IN_METHOD,
				oauthToken: t,
				oauthTokenSecret: n
			});
		}
		static credentialFromResult(t) {
			return e.credentialFromTaggedObject(t);
		}
		static credentialFromError(t) {
			return e.credentialFromTaggedObject(t.customData || {});
		}
		static credentialFromTaggedObject({ _tokenResponse: t }) {
			if (!t) return null;
			let { oauthAccessToken: n, oauthTokenSecret: r } = t;
			if (!n || !r) return null;
			try {
				return e.credential(n, r);
			} catch {
				return null;
			}
		}
	}, ka.TWITTER_SIGN_IN_METHOD = "twitter.com", ka.PROVIDER_ID = "twitter.com", Aa = class e {
		constructor(e) {
			this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType;
		}
		static async _fromIdTokenResponse(t, n, r, i = !1) {
			return new e({
				user: await q._fromIdTokenResponse(t, r, i),
				providerId: Pr(r),
				_tokenResponse: r,
				operationType: n
			});
		}
		static async _forOperation(t, n, r) {
			return await t._updateTokensIfNecessary(r, !0), new e({
				user: t,
				providerId: Pr(r),
				_tokenResponse: r,
				operationType: n
			});
		}
	}, ja = class e extends g {
		constructor(t, n, r, i) {
			super(n.code, n.message), this.operationType = r, this.user = i, Object.setPrototypeOf(this, e.prototype), this.customData = {
				appName: t.name,
				tenantId: t.tenantId ?? void 0,
				_serverResponse: n.customData._serverResponse,
				operationType: r
			};
		}
		static _fromErrorAndOperation(t, n, r, i) {
			return new e(t, n, r, i);
		}
	}, Ma = "__sak", Na = class {
		constructor(e, t) {
			this.storageRetriever = e, this.type = t;
		}
		_isAvailable() {
			try {
				return this.storage ? (this.storage.setItem(Ma, "1"), this.storage.removeItem(Ma), Promise.resolve(!0)) : Promise.resolve(!1);
			} catch {
				return Promise.resolve(!1);
			}
		}
		_set(e, t) {
			return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve();
		}
		_get(e) {
			let t = this.storage.getItem(e);
			return Promise.resolve(t ? JSON.parse(t) : null);
		}
		_remove(e) {
			return this.storage.removeItem(e), Promise.resolve();
		}
		get storage() {
			return this.storageRetriever();
		}
	}, Pa = 1e3, Fa = 10, Ia = class extends Na {
		constructor() {
			super(() => window.localStorage, "LOCAL"), this.boundEventHandler = (e, t) => this.onStorageEvent(e, t), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.fallbackToPolling = or(), this._shouldAllowMigration = !0;
		}
		forAllChangedKeys(e) {
			for (let t of Object.keys(this.listeners)) {
				let n = this.storage.getItem(t), r = this.localCache[t];
				n !== r && e(t, r, n);
			}
		}
		onStorageEvent(e, t = !1) {
			if (!e.key) {
				this.forAllChangedKeys((e, t, n) => {
					this.notifyListeners(e, n);
				});
				return;
			}
			let n = e.key;
			t ? this.detachListener() : this.stopPolling();
			let r = () => {
				let e = this.storage.getItem(n);
				!t && this.localCache[n] === e || this.notifyListeners(n, e);
			}, i = this.storage.getItem(n);
			ar() && i !== e.newValue && e.newValue !== e.oldValue ? setTimeout(r, Fa) : r();
		}
		notifyListeners(e, t) {
			this.localCache[e] = t;
			let n = this.listeners[e];
			if (n) for (let e of Array.from(n)) e(t && JSON.parse(t));
		}
		startPolling() {
			this.stopPolling(), this.pollTimer = setInterval(() => {
				this.forAllChangedKeys((e, t, n) => {
					this.onStorageEvent(new StorageEvent("storage", {
						key: e,
						oldValue: t,
						newValue: n
					}), !0);
				});
			}, Pa);
		}
		stopPolling() {
			this.pollTimer &&= (clearInterval(this.pollTimer), null);
		}
		attachListener() {
			window.addEventListener("storage", this.boundEventHandler);
		}
		detachListener() {
			window.removeEventListener("storage", this.boundEventHandler);
		}
		_addListener(e, t) {
			Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set(), this.localCache[e] = this.storage.getItem(e)), this.listeners[e].add(t);
		}
		_removeListener(e, t) {
			this.listeners[e] && (this.listeners[e].delete(t), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && (this.detachListener(), this.stopPolling());
		}
		async _set(e, t) {
			await super._set(e, t), this.localCache[e] = JSON.stringify(t);
		}
		async _get(e) {
			let t = await super._get(e);
			return this.localCache[e] = JSON.stringify(t), t;
		}
		async _remove(e) {
			await super._remove(e), delete this.localCache[e];
		}
	}, Ia.type = "LOCAL", La = Ia, Ra = 1e3, za = class {
		constructor() {
			this.type = "COOKIE", this.listenerUnsubscribes = /* @__PURE__ */ new Map();
		}
		_getFinalTarget(e) {
			let t = new URL(`${window.location.origin}/__cookies__`);
			return t.searchParams.set("finalTarget", e), t;
		}
		async _isAvailable() {
			return typeof isSecureContext == "boolean" && !isSecureContext || typeof navigator > "u" || typeof document > "u" ? !1 : navigator.cookieEnabled ?? !0;
		}
		async _set(e, t) {}
		async _get(e) {
			if (!this._isAvailable()) return null;
			let t = Xr(e);
			return window.cookieStore ? (await window.cookieStore.get(t))?.value : Yr(t);
		}
		async _remove(e) {
			if (!this._isAvailable() || !await this._get(e)) return;
			let t = Xr(e);
			document.cookie = `${t}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`, await fetch("/__cookies__", { method: "DELETE" }).catch(() => void 0);
		}
		_addListener(e, t) {
			if (!this._isAvailable()) return;
			let n = Xr(e);
			if (window.cookieStore) {
				let e = ((e) => {
					let r = e.changed.find((e) => e.name === n);
					r && t(r.value), e.deleted.find((e) => e.name === n) && t(null);
				});
				return this.listenerUnsubscribes.set(t, () => window.cookieStore.removeEventListener("change", e)), window.cookieStore.addEventListener("change", e);
			}
			let r = Yr(n), i = setInterval(() => {
				let e = Yr(n);
				e !== r && (t(e), r = e);
			}, Ra);
			this.listenerUnsubscribes.set(t, () => clearInterval(i));
		}
		_removeListener(e, t) {
			let n = this.listenerUnsubscribes.get(t);
			n && (n(), this.listenerUnsubscribes.delete(t));
		}
	}, za.type = "COOKIE", Ba = class extends Na {
		constructor() {
			super(() => window.sessionStorage, "SESSION");
		}
		_addListener(e, t) {}
		_removeListener(e, t) {}
	}, Ba.type = "SESSION", Va = Ba, Ha = class e {
		constructor(e) {
			this.eventTarget = e, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this);
		}
		static _getInstance(t) {
			let n = this.receivers.find((e) => e.isListeningto(t));
			if (n) return n;
			let r = new e(t);
			return this.receivers.push(r), r;
		}
		isListeningto(e) {
			return this.eventTarget === e;
		}
		async handleEvent(e) {
			let t = e, { eventId: n, eventType: r, data: i } = t.data, a = this.handlersMap[r];
			if (!a?.size) return;
			t.ports[0].postMessage({
				status: "ack",
				eventId: n,
				eventType: r
			});
			let o = await Zr(Array.from(a).map(async (e) => e(t.origin, i)));
			t.ports[0].postMessage({
				status: "done",
				eventId: n,
				eventType: r,
				response: o
			});
		}
		_subscribe(e, t) {
			Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[e] || (this.handlersMap[e] = /* @__PURE__ */ new Set()), this.handlersMap[e].add(t);
		}
		_unsubscribe(e, t) {
			this.handlersMap[e] && t && this.handlersMap[e].delete(t), (!t || this.handlersMap[e].size === 0) && delete this.handlersMap[e], Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler);
		}
	}, Ha.receivers = [], Ua = class {
		constructor(e) {
			this.target = e, this.handlers = /* @__PURE__ */ new Set();
		}
		removeMessageHandler(e) {
			e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1.close()), this.handlers.delete(e);
		}
		async _send(e, t, n = 50) {
			let r = typeof MessageChannel < "u" ? new MessageChannel() : null;
			if (!r) throw Error("connection_unavailable");
			let i, a;
			return new Promise((o, s) => {
				let c = Qr("", 20);
				r.port1.start();
				let l = setTimeout(() => {
					s(/* @__PURE__ */ Error("unsupported_event"));
				}, n);
				a = {
					messageChannel: r,
					onMessage(e) {
						let t = e;
						if (t.data.eventId === c) switch (t.data.status) {
							case "ack":
								clearTimeout(l), i = setTimeout(() => {
									s(/* @__PURE__ */ Error("timeout"));
								}, 3e3);
								break;
							case "done":
								clearTimeout(i), o(t.data.response);
								break;
							default:
								clearTimeout(l), clearTimeout(i), s(/* @__PURE__ */ Error("invalid_response"));
								break;
						}
					}
				}, this.handlers.add(a), r.port1.addEventListener("message", a.onMessage), this.target.postMessage({
					eventType: e,
					eventId: c,
					data: t
				}, [r.port2]);
			}).finally(() => {
				a && this.removeMessageHandler(a);
			});
		}
	}, Wa = "firebaseLocalStorageDb", Ga = 1, Ka = "firebaseLocalStorage", qa = "fbase_key", $ = class {
		constructor(e) {
			this.request = e;
		}
		toPromise() {
			return new Promise((e, t) => {
				this.request.addEventListener("success", () => {
					e(this.request.result);
				}), this.request.addEventListener("error", () => {
					t(this.request.error);
				});
			});
		}
	}, Ja = 800, Ya = 3, Xa = class {
		constructor() {
			this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {}, () => {});
		}
		async _openDb() {
			return this.db ||= await oi(), this.db;
		}
		async _withRetries(e) {
			let t = 0;
			for (;;) try {
				return await e(await this._openDb());
			} catch (e) {
				if (t++ > Ya) throw e;
				this.db &&= (this.db.close(), void 0);
			}
		}
		async initializeServiceWorkerMessaging() {
			return ei() ? this.initializeReceiver() : this.initializeSender();
		}
		async initializeReceiver() {
			this.receiver = Ha._getInstance(ri()), this.receiver._subscribe("keyChanged", async (e, t) => ({ keyProcessed: (await this._poll()).includes(t.key) })), this.receiver._subscribe("ping", async (e, t) => ["keyChanged"]);
		}
		async initializeSender() {
			if (this.activeServiceWorker = await ti(), !this.activeServiceWorker) return;
			this.sender = new Ua(this.activeServiceWorker);
			let e = await this.sender._send("ping", {}, 800);
			e && e[0]?.fulfilled && e[0]?.value.includes("keyChanged") && (this.serviceWorkerReceiverAvailable = !0);
		}
		async notifyServiceWorker(e) {
			if (!(!this.sender || !this.activeServiceWorker || ni() !== this.activeServiceWorker)) try {
				await this.sender._send("keyChanged", { key: e }, this.serviceWorkerReceiverAvailable ? 800 : 50);
			} catch {}
		}
		async _isAvailable() {
			try {
				if (!indexedDB) return !1;
				let e = await oi();
				return await si(e, Ma, "1"), await li(e, Ma), !0;
			} catch {}
			return !1;
		}
		async _withPendingWrite(e) {
			this.pendingWrites++;
			try {
				await e();
			} finally {
				this.pendingWrites--;
			}
		}
		async _set(e, t) {
			return this._withPendingWrite(async () => (await this._withRetries((n) => si(n, e, t)), this.localCache[e] = t, this.notifyServiceWorker(e)));
		}
		async _get(e) {
			let t = await this._withRetries((t) => ci(t, e));
			return this.localCache[e] = t, t;
		}
		async _remove(e) {
			return this._withPendingWrite(async () => (await this._withRetries((t) => li(t, e)), delete this.localCache[e], this.notifyServiceWorker(e)));
		}
		async _poll() {
			let e = await this._withRetries((e) => new $(ii(e, !1).getAll()).toPromise());
			if (!e || this.pendingWrites !== 0) return [];
			let t = [], n = /* @__PURE__ */ new Set();
			if (e.length !== 0) for (let { fbase_key: r, value: i } of e) n.add(r), JSON.stringify(this.localCache[r]) !== JSON.stringify(i) && (this.notifyListeners(r, i), t.push(r));
			for (let e of Object.keys(this.localCache)) this.localCache[e] && !n.has(e) && (this.notifyListeners(e, null), t.push(e));
			return t;
		}
		notifyListeners(e, t) {
			this.localCache[e] = t;
			let n = this.listeners[e];
			if (n) for (let e of Array.from(n)) e(t);
		}
		startPolling() {
			this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), Ja);
		}
		stopPolling() {
			this.pollTimer &&= (clearInterval(this.pollTimer), null);
		}
		_addListener(e, t) {
			Object.keys(this.listeners).length === 0 && this.startPolling(), this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set(), this._get(e)), this.listeners[e].add(t);
		}
		_removeListener(e, t) {
			this.listeners[e] && (this.listeners[e].delete(t), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && this.stopPolling();
		}
	}, Xa.type = "LOCAL", Za = Xa, pr("rcb"), new K(3e4, 6e4), Qa = "recaptcha", $a = class e {
		constructor(t) {
			this.providerId = e.PROVIDER_ID, this.auth = H(t);
		}
		verifyPhoneNumber(e, t) {
			return mi(this.auth, e, h(t));
		}
		static credential(e, t) {
			return Ca._fromVerification(e, t);
		}
		static credentialFromResult(t) {
			let n = t;
			return e.credentialFromTaggedObject(n);
		}
		static credentialFromError(t) {
			return e.credentialFromTaggedObject(t.customData || {});
		}
		static credentialFromTaggedObject({ _tokenResponse: e }) {
			if (!e) return null;
			let { phoneNumber: t, temporaryProof: n } = e;
			return t && n ? Ca._fromTokenResponse(t, n) : null;
		}
	}, $a.PROVIDER_ID = "phone", $a.PHONE_SIGN_IN_METHOD = "phone", eo = class extends X {
		constructor(e) {
			super("custom", "custom"), this.params = e;
		}
		_getIdTokenResponse(e) {
			return U(e, this._buildIdpRequest());
		}
		_linkToIdToken(e, t) {
			return U(e, this._buildIdpRequest(t));
		}
		_getReauthenticationResolver(e) {
			return U(e, this._buildIdpRequest());
		}
		_buildIdpRequest(e) {
			let t = {
				requestUri: this.params.requestUri,
				sessionId: this.params.sessionId,
				postBody: this.params.postBody,
				tenantId: this.params.tenantId,
				pendingToken: this.params.pendingToken,
				returnSecureToken: !0,
				returnIdpCredential: !0
			};
			return e && (t.idToken = e), t;
		}
	}, to = class {
		constructor(e, t, n, r, i = !1) {
			this.auth = e, this.resolver = n, this.user = r, this.bypassAuthState = i, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(t) ? t : [t];
		}
		execute() {
			return new Promise(async (e, t) => {
				this.pendingPromise = {
					resolve: e,
					reject: t
				};
				try {
					this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this);
				} catch (e) {
					this.reject(e);
				}
			});
		}
		async onAuthEvent(e) {
			let { urlResponse: t, sessionId: n, postBody: r, tenantId: i, error: a, type: o } = e;
			if (a) {
				this.reject(a);
				return;
			}
			let s = {
				auth: this.auth,
				requestUri: t,
				sessionId: n,
				tenantId: i || void 0,
				postBody: r || void 0,
				user: this.user,
				bypassAuthState: this.bypassAuthState
			};
			try {
				this.resolve(await this.getIdpTask(o)(s));
			} catch (e) {
				this.reject(e);
			}
		}
		onError(e) {
			this.reject(e);
		}
		getIdpTask(e) {
			switch (e) {
				case "signInViaPopup":
				case "signInViaRedirect": return _i;
				case "linkViaPopup":
				case "linkViaRedirect": return yi;
				case "reauthViaPopup":
				case "reauthViaRedirect": return vi;
				default: k(this.auth, "internal-error");
			}
		}
		resolve(e) {
			P(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp();
		}
		reject(e) {
			P(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp();
		}
		unregisterAndCleanUp() {
			this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp();
		}
	}, no = new K(2e3, 1e4), ro = class e extends to {
		constructor(t, n, r, i, a) {
			super(t, n, i, a), this.provider = r, this.authWindow = null, this.pollId = null, e.currentPopupAction && e.currentPopupAction.cancel(), e.currentPopupAction = this;
		}
		async executeNotNull() {
			let e = await this.execute();
			return M(e, this.auth, "internal-error"), e;
		}
		async onExecution() {
			P(this.filter.length === 1, "Popup operations only handle one event");
			let e = Qr();
			this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], e), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch((e) => {
				this.reject(e);
			}), this.resolver._isIframeWebStorageSupported(this.auth, (e) => {
				e || this.reject(A(this.auth, "web-storage-unsupported"));
			}), this.pollUserCancellation();
		}
		get eventId() {
			return this.authWindow?.associatedEvent || null;
		}
		cancel() {
			this.reject(A(this.auth, "cancelled-popup-request"));
		}
		cleanUp() {
			this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, e.currentPopupAction = null;
		}
		pollUserCancellation() {
			let e = () => {
				if (this.authWindow?.window?.closed) {
					this.pollId = window.setTimeout(() => {
						this.pollId = null, this.reject(A(this.auth, "popup-closed-by-user"));
					}, 8e3);
					return;
				}
				this.pollId = window.setTimeout(e, no.get());
			};
			e();
		}
	}, ro.currentPopupAction = null, io = "pendingRedirect", ao = /* @__PURE__ */ new Map(), oo = class extends to {
		constructor(e, t, n = !1) {
			super(e, [
				"signInViaRedirect",
				"linkViaRedirect",
				"reauthViaRedirect",
				"unknown"
			], t, void 0, n), this.eventId = null;
		}
		async execute() {
			let e = ao.get(this.auth._key());
			if (!e) {
				try {
					let t = await xi(this.resolver, this.auth) ? await super.execute() : null;
					e = () => Promise.resolve(t);
				} catch (t) {
					e = () => Promise.reject(t);
				}
				ao.set(this.auth._key(), e);
			}
			return this.bypassAuthState || ao.set(this.auth._key(), () => Promise.resolve(null)), e();
		}
		async onAuthEvent(e) {
			if (e.type === "signInViaRedirect") return super.onAuthEvent(e);
			if (e.type === "unknown") {
				this.resolve(null);
				return;
			}
			if (e.eventId) {
				let t = await this.auth._redirectUserForId(e.eventId);
				if (t) return this.user = t, super.onAuthEvent(e);
				this.resolve(null);
			}
		}
		async onExecution() {}
		cleanUp() {}
	}, so = 600 * 1e3, co = class {
		constructor(e) {
			this.auth = e, this.cachedEventUids = /* @__PURE__ */ new Set(), this.consumers = /* @__PURE__ */ new Set(), this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now();
		}
		registerConsumer(e) {
			this.consumers.add(e), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null);
		}
		unregisterConsumer(e) {
			this.consumers.delete(e);
		}
		onEvent(e) {
			if (this.hasEventBeenHandled(e)) return !1;
			let t = !1;
			return this.consumers.forEach((n) => {
				this.isEventForConsumer(e, n) && (t = !0, this.sendToConsumer(e, n), this.saveEventToCache(e));
			}), this.hasHandledPotentialRedirect || !ji(e) ? t : (this.hasHandledPotentialRedirect = !0, t ||= (this.queuedRedirectEvent = e, !0), t);
		}
		sendToConsumer(e, t) {
			if (e.error && !Ai(e)) {
				let n = e.error.code?.split("auth/")[1] || "internal-error";
				t.onError(A(this.auth, n));
			} else t.onAuthEvent(e);
		}
		isEventForConsumer(e, t) {
			let n = t.eventId === null || !!e.eventId && e.eventId === t.eventId;
			return t.filter.includes(e.type) && n;
		}
		hasEventBeenHandled(e) {
			return Date.now() - this.lastProcessedEventTime >= so && this.cachedEventUids.clear(), this.cachedEventUids.has(ki(e));
		}
		saveEventToCache(e) {
			this.cachedEventUids.add(ki(e)), this.lastProcessedEventTime = Date.now();
		}
	}, lo = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, uo = /^https?/, fo = new K(3e4, 6e4), po = null, mo = new K(5e3, 15e3), ho = "__/auth/iframe", go = "emulator/auth/iframe", _o = {
		style: {
			position: "absolute",
			top: "-100px",
			width: "1px",
			height: "1px"
		},
		"aria-hidden": "true",
		tabindex: "-1"
	}, vo = new Map([
		["identitytoolkit.googleapis.com", "p"],
		["staging-identitytoolkit.sandbox.googleapis.com", "s"],
		["test-identitytoolkit.sandbox.googleapis.com", "t"]
	]), yo = {
		location: "yes",
		resizable: "yes",
		statusbar: "yes",
		toolbar: "no"
	}, bo = 500, xo = 600, So = "_blank", Co = "http://localhost", wo = class {
		constructor(e) {
			this.window = e, this.associatedEvent = null;
		}
		close() {
			if (this.window) try {
				this.window.close();
			} catch {}
		}
	}, To = "__/auth/handler", Eo = "emulator/auth/handler", Do = "fac", Oo = "webStorageSupport", ko = class {
		constructor() {
			this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = Va, this._completeRedirectFn = Oi, this._overrideRedirectResult = Ci;
		}
		async _openPopup(e, t, n, r) {
			return P(this.eventManagers[e._key()]?.manager, "_initialize() not called before _openPopup()"), Bi(e, await Hi(e, t, n, Cn(), r), Qr());
		}
		async _openRedirect(e, t, n, r) {
			return await this._originValidation(e), $r(await Hi(e, t, n, Cn(), r)), new Promise(() => {});
		}
		_initialize(e) {
			let t = e._key();
			if (this.eventManagers[t]) {
				let { manager: e, promise: n } = this.eventManagers[t];
				return e ? Promise.resolve(e) : (P(n, "If manager is not set, promise should be"), n);
			}
			let n = this.initAndGetManager(e);
			return this.eventManagers[t] = { promise: n }, n.catch(() => {
				delete this.eventManagers[t];
			}), n;
		}
		async initAndGetManager(e) {
			let t = await zi(e), n = new co(e);
			return t.register("authEvent", (t) => (M(t?.authEvent, e, "invalid-auth-event"), { status: n.onEvent(t.authEvent) ? "ACK" : "ERROR" }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = { manager: n }, this.iframes[e._key()] = t, n;
		}
		_isIframeWebStorageSupported(e, t) {
			this.iframes[e._key()].send(Oo, { type: Oo }, (n) => {
				let r = n?.[0]?.[Oo];
				r !== void 0 && t(!!r), k(e, "internal-error");
			}, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
		}
		_originValidation(e) {
			let t = e._key();
			return this.originValidationPromises[t] || (this.originValidationPromises[t] = Ni(e)), this.originValidationPromises[t];
		}
		get _shouldInitProactively() {
			return or() || Zn() || rr();
		}
	}, Ao = ko, jo = class {
		constructor(e) {
			this.factorId = e;
		}
		_process(e, t, n) {
			switch (t.type) {
				case "enroll": return this._finalizeEnroll(e, t.credential, n);
				case "signin": return this._finalizeSignIn(e, t.credential);
				default: return N("unexpected MultiFactorSessionType");
			}
		}
	}, Mo = class e extends jo {
		constructor(e) {
			super("phone"), this.credential = e;
		}
		static _fromCredential(t) {
			return new e(t);
		}
		_finalizeEnroll(e, t, n) {
			return Kr(e, {
				idToken: t,
				displayName: n,
				phoneVerificationInfo: this.credential._makeVerificationRequest()
			});
		}
		_finalizeSignIn(e, t) {
			return fi(e, {
				mfaPendingCredential: t,
				phoneVerificationInfo: this.credential._makeVerificationRequest()
			});
		}
	}, No = class {
		constructor() {}
		static assertion(e) {
			return Mo._fromCredential(e);
		}
	}, No.FACTOR_ID = "phone", Po = class {
		static assertionForEnrollment(e, t) {
			return Fo._fromSecret(e, t);
		}
		static assertionForSignIn(e, t) {
			return Fo._fromEnrollmentId(e, t);
		}
		static async generateSecret(e) {
			let t = e;
			M(t.user?.auth !== void 0, "internal-error");
			let n = await qr(t.user.auth, {
				idToken: t.credential,
				totpEnrollmentInfo: {}
			});
			return Io._fromStartTotpMfaEnrollmentResponse(n, t.user.auth);
		}
	}, Po.FACTOR_ID = "totp", Fo = class e extends jo {
		constructor(e, t, n) {
			super("totp"), this.otp = e, this.enrollmentId = t, this.secret = n;
		}
		static _fromSecret(t, n) {
			return new e(n, void 0, t);
		}
		static _fromEnrollmentId(t, n) {
			return new e(n, t);
		}
		async _finalizeEnroll(e, t, n) {
			return M(this.secret !== void 0, e, "argument-error"), Jr(e, {
				idToken: t,
				displayName: n,
				totpVerificationInfo: this.secret._makeTotpVerificationInfo(this.otp)
			});
		}
		async _finalizeSignIn(e, t) {
			M(this.enrollmentId !== void 0 && this.otp !== void 0, e, "argument-error");
			let n = { verificationCode: this.otp };
			return pi(e, {
				mfaPendingCredential: t,
				mfaEnrollmentId: this.enrollmentId,
				totpVerificationInfo: n
			});
		}
	}, Io = class e {
		constructor(e, t, n, r, i, a, o) {
			this.sessionInfo = a, this.auth = o, this.secretKey = e, this.hashingAlgorithm = t, this.codeLength = n, this.codeIntervalSeconds = r, this.enrollmentCompletionDeadline = i;
		}
		static _fromStartTotpMfaEnrollmentResponse(t, n) {
			return new e(t.totpSessionInfo.sharedSecretKey, t.totpSessionInfo.hashingAlgorithm, t.totpSessionInfo.verificationCodeLength, t.totpSessionInfo.periodSec, new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(), t.totpSessionInfo.sessionInfo, n);
		}
		_makeTotpVerificationInfo(e) {
			return {
				sessionInfo: this.sessionInfo,
				verificationCode: e
			};
		}
		generateQrCodeUrl(e, t) {
			let n = !1;
			return (Wi(e) || Wi(t)) && (n = !0), n && (Wi(e) && (e = this.auth.currentUser?.email || "unknownuser"), Wi(t) && (t = this.auth.name)), `otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`;
		}
	}, Lo = "@firebase/auth", Ro = "1.12.2", zo = class {
		constructor(e) {
			this.auth = e, this.internalListeners = /* @__PURE__ */ new Map();
		}
		getUid() {
			return this.assertAuthConfigured(), this.auth.currentUser?.uid || null;
		}
		async getToken(e) {
			return this.assertAuthConfigured(), await this.auth._initializationPromise, this.auth.currentUser ? { accessToken: await this.auth.currentUser.getIdToken(e) } : null;
		}
		addAuthTokenListener(e) {
			if (this.assertAuthConfigured(), this.internalListeners.has(e)) return;
			let t = this.auth.onIdTokenChanged((t) => {
				e(t?.stsTokenManager.accessToken || null);
			});
			this.internalListeners.set(e, t), this.updateProactiveRefresh();
		}
		removeAuthTokenListener(e) {
			this.assertAuthConfigured();
			let t = this.internalListeners.get(e);
			t && (this.internalListeners.delete(e), t(), this.updateProactiveRefresh());
		}
		assertAuthConfigured() {
			M(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth");
		}
		updateProactiveRefresh() {
			this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh();
		}
	}, Bo = Ce("authIdTokenMaxAge") || 300, Vo = null, Ho = (e) => async (t) => {
		let n = t && await t.getIdTokenResult(), r = n && ((/* @__PURE__ */ new Date()).getTime() - Date.parse(n.issuedAtTime)) / 1e3;
		if (r && r > Bo) return;
		let i = n?.token;
		Vo !== i && (Vo = i, await fetch(e, {
			method: i ? "POST" : "DELETE",
			headers: i ? { Authorization: `Bearer ${i}` } : {}
		}));
	}, lr({
		loadJS(e) {
			return new Promise((t, n) => {
				let r = document.createElement("script");
				r.setAttribute("src", e), r.onload = t, r.onerror = (e) => {
					let t = A("internal-error");
					t.customData = e, n(t);
				}, r.type = "text/javascript", r.charset = "UTF-8", Ji().appendChild(r);
			});
		},
		gapiScript: "https://apis.google.com/js/api.js",
		recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
		recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
	}), Ki("Browser");
})), Wo = e((() => {
	Uo(), hn(), Be();
})), Go = e((() => {
	Wo();
})), Ko, qo = e((() => {
	gn(), Go(), Ko = class {
		constructor(e) {
			this.app = ht(e), this.auth = qi(this.app), this.googleProvider = new Da(), this.googleProvider.setCustomParameters({ prompt: "select_account" });
		}
		async waitForAuthReady({ requireUser: e = !1, timeoutMs: t = 1e4 } = {}) {
			if (typeof this.auth.authStateReady == "function" ? await this.auth.authStateReady() : await new Promise((e, n) => {
				let r = setTimeout(() => {
					i(), n(/* @__PURE__ */ Error("Tempo esgotado aguardando a autenticação do Firebase."));
				}, t), i = Wr(this.auth, () => {
					clearTimeout(r), i(), e();
				}, (e) => {
					clearTimeout(r), i(), n(e);
				});
			}), this.auth.currentUser && await this.auth.currentUser.getIdToken(), e && !this.auth.currentUser) throw Error("Usuário não autenticado no Firebase.");
			return this.auth.currentUser;
		}
		async login(e, t) {
			let n = await Vr(this.auth, e, t);
			return await this.waitForAuthReady({ requireUser: !0 }), n;
		}
		async loginWithGoogle() {
			let e = await bi(this.auth, this.googleProvider);
			return await this.waitForAuthReady({ requireUser: !0 }), e;
		}
		async loginWithGoogleRedirect() {
			return Ei(this.auth, this.googleProvider);
		}
		async loginWithGooglePopupOrRedirect() {
			try {
				return await this.loginWithGoogle(), "popup";
			} catch (e) {
				if (e?.code === "auth/popup-blocked") return await this.loginWithGoogleRedirect(), "redirect";
				throw e;
			}
		}
	};
})), Jo, Yo, Xo = e((() => {
	Jo = 2700 * 1e3, Yo = class {
		constructor(e, t) {
			this.firebaseClient = e, this.baseUrl = t.replace(/\/+$/, ""), this.clientId = foundry.utils.randomID();
		}
		async getIdToken() {
			let e = this.firebaseClient.auth?.currentUser;
			if (!e) throw Error("Usuário não autenticado no Firebase.");
			return e.getIdToken();
		}
		async listDrafts() {
			let e = await this.getIdToken(), t = await fetch(`${this.baseUrl}/api/drafts`, { headers: { Authorization: `Bearer ${e}` } });
			if (!t.ok) throw Error(`Falha ao listar fichas (HTTP ${t.status}).`);
			return t.json();
		}
		async getDraft(e) {
			let t = await this.getIdToken(), n = await fetch(`${this.baseUrl}/api/drafts/${e}`, { headers: { Authorization: `Bearer ${t}` } });
			if (n.status === 404) return null;
			if (!n.ok) throw Error(`Falha ao buscar a ficha (HTTP ${n.status}).`);
			return n.json();
		}
		async putCompendiumItemsBatch(e, t) {
			let n = await fetch(`${this.baseUrl}/api/compendium/items`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					"X-Sync-Key": t
				},
				body: JSON.stringify({ items: e })
			});
			if (!n.ok) throw Error(`Falha ao sincronizar itens de compêndio (HTTP ${n.status}).`);
			return n.json();
		}
		async saveDraft(e, t) {
			let n = await this.getIdToken(), r = await fetch(`${this.baseUrl}/api/drafts/${e}`, {
				method: "PUT",
				headers: {
					Authorization: `Bearer ${n}`,
					"Content-Type": "application/json",
					"X-Client-Id": this.clientId
				},
				body: JSON.stringify(t)
			});
			if (!r.ok) throw Error(`Falha ao salvar a ficha (HTTP ${r.status}).`);
			return r.json();
		}
		async openStream(e, t, n) {
			let r = null, i = null, a = !1, o = async () => {
				if (a) return;
				let i = await this.getIdToken(), o = `${this.baseUrl}/api/drafts/${e}/stream?token=${encodeURIComponent(i)}`;
				r = new EventSource(o), r.onmessage = (e) => {
					try {
						t(JSON.parse(e.data));
					} catch (e) {
						console.error("Runarcana Sync | Erro ao processar evento do stream:", e);
					}
				}, r.onerror = (e) => {
					n?.(e);
				};
			};
			return await o(), i = setInterval(() => {
				r?.close(), o();
			}, Jo), { close() {
				a = !0, clearInterval(i), r?.close();
			} };
		}
	};
})), Zo, Qo = e((() => {
	Zo = class {
		constructor(e) {
			this.firebaseClient = e;
		}
		async render(e = !0) {
			let { DialogV2: t } = foundry.applications.api;
			return t.wait({
				window: { title: "Runarcana Sync Login" },
				content: "\n        <form>\n          <p>Entre com email e senha ou use a conta Google habilitada no Firebase Authentication.</p>\n          <div class=\"form-group\">\n            <label>Email:</label>\n            <input type=\"text\" name=\"email\" autofocus />\n          </div>\n          <div class=\"form-group\">\n            <label>Senha:</label>\n            <input type=\"password\" name=\"password\" />\n          </div>\n        </form>\n      ",
				buttons: [{
					action: "google",
					label: "Google",
					icon: "fab fa-google",
					callback: async (e, t, n) => {
						try {
							await this.firebaseClient.loginWithGooglePopupOrRedirect() === "popup" ? ui.notifications.info("Runarcana Sync: Login com Google realizado com sucesso!") : ui.notifications.warn("Runarcana Sync: Popup bloqueado. Continuando o login com redirecionamento.");
						} catch (e) {
							ui.notifications.error("Erro no login com Google: " + e.message);
						}
					}
				}, {
					action: "login",
					label: "Login",
					icon: "fas fa-check",
					default: !0,
					callback: async (e, t, n) => {
						let r = n.element.querySelector("[name=\"email\"]").value, i = n.element.querySelector("[name=\"password\"]").value;
						try {
							await this.firebaseClient.login(r, i), ui.notifications.info("Runarcana Sync: Login realizado com sucesso!");
						} catch (e) {
							ui.notifications.error("Erro no login: " + e.message);
						}
					}
				}]
			});
		}
	};
}));
//#endregion
//#region src/draft-selector.js
function $o(e) {
	return String(e ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;");
}
function es(e) {
	return `<p>Erro ao carregar fichas: ${$o(e?.message || "Erro desconhecido.")}</p>
    <p>Verifique se a URL do backend está configurada corretamente nas configurações do módulo e
    se o servidor (runarcana-api) está no ar.</p>`;
}
var ts, ns = e((() => {
	ts = class {
		constructor(e, t, n) {
			this.apiClient = e, this.actor = t, this.syncManager = n;
		}
		async render(e = !0) {
			let { DialogV2: t } = foundry.applications.api;
			try {
				let e = await this.apiClient.listDrafts(), n = "<form><div class=\"form-group\"><label>Ficha:</label><select name=\"draftId\">";
				return e.length === 0 ? n += "<option value=\"\">Nenhuma ficha encontrada</option>" : e.forEach((e) => {
					n += `<option value="${e.id}">${$o(e.concept?.name || e.title || "Sem Nome")} (${$o(e.classBuild?.classId || "Sem Classe")})</option>`;
				}), n += "</select></div></form>", t.wait({
					window: { title: "Vincular Ficha Runarcana" },
					content: n,
					buttons: [{
						action: "link",
						label: "Vincular",
						icon: "fas fa-link",
						callback: async (e, t, n) => {
							let r = n.element.querySelector("[name=\"draftId\"]").value;
							r && (await this.actor.setFlag("runarcana-sync", "draftId", r), ui.notifications.info(`Actor vinculado à ficha ${r}`), this.syncManager && this.syncManager.startListening(this.actor));
						}
					}]
				});
			} catch (e) {
				return t.prompt({
					window: { title: "Erro" },
					content: es(e),
					ok: { label: "Fechar" }
				});
			}
		}
	};
}));
//#endregion
//#region src/compendium-sync.js
function rs() {
	return game.packs.filter((e) => e.documentName === "Item");
}
async function is(e) {
	let t = new Set((e || []).filter(Boolean)), n = /* @__PURE__ */ new Map();
	if (t.size === 0) return n;
	for (let e of rs()) {
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
function as(e, t) {
	let n = [];
	for (let r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
	return n;
}
async function os(e, t, n, r) {
	let i = [], a = [];
	for (let e of n) {
		let t = game.packs.get(e);
		if (!t) continue;
		let n = (await t.getDocuments()).map((t) => ({
			packId: e,
			foundryId: t.id,
			name: t.name,
			img: t.img,
			itemType: t.type,
			catalogKey: t.getFlag("runarcana-sync", "catalogKey") ?? null,
			system: t.toObject().system
		}));
		i.push(...n), a.push({
			packId: e,
			label: t.metadata.label,
			count: n.length
		});
	}
	let o = as(i, ss);
	for (let n = 0; n < o.length; n++) await e.putCompendiumItemsBatch(o[n], t), r?.(n + 1, o.length);
	return {
		totalSynced: i.length,
		packSummaries: a
	};
}
var ss, cs = e((() => {
	ss = 50;
}));
//#endregion
//#region src/compendium-sync-dialog.js
function ls(e) {
	return String(e ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;");
}
var us, ds, fs = e((() => {
	cs(), us = "compendiumSyncSelection", ds = class {
		constructor(e) {
			this.apiClient = e;
		}
		async render() {
			let { DialogV2: e } = foundry.applications.api, t = rs();
			if (t.length === 0) return e.prompt({
				window: { title: "Sincronizar Compêndio de Itens" },
				content: "<p>Nenhum compêndio do tipo Item foi encontrado neste mundo.</p>",
				ok: { label: "Fechar" }
			});
			let n = [];
			try {
				n = game.settings.get("runarcana-sync", us) ?? [];
			} catch {
				n = [];
			}
			let r = new Set(n), i = "\n      <form>\n        <p>Escolha os compêndios de itens a sincronizar (ex: um compêndio próprio,\n        curado com os itens liberados na sua mesa):</p>\n        <div class=\"form-group\" style=\"max-height: 260px; overflow-y: auto;\">";
			for (let e of t) {
				let t = r.has(e.collection) ? "checked" : "";
				i += `
          <label style="display:block;margin:4px 0;">
            <input type="checkbox" name="pack" value="${ls(e.collection)}" ${t} />
            ${ls(e.metadata.label)}
            <small>(${ls(e.metadata.packageName || e.metadata.system || "")})</small>
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
						let o = game.settings.get("runarcana-sync", "compendiumSyncKey");
						if (!o) {
							ui.notifications.error("Runarcana Sync: configure a Chave de Sincronização de Compêndio nas configurações do módulo primeiro.");
							return;
						}
						await game.settings.set("runarcana-sync", us, i);
						try {
							let e = await os(a, o, i, (e, t) => {
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
})), ps, ms, hs = e((() => {
	ps = {
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
		"system.resources.tertiary.label": "resources.tertiary.name"
	}, ms = [
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
	];
}));
//#endregion
//#region src/sync-manager.js
function gs(e, t) {
	let n;
	return function(...r) {
		clearTimeout(n), n = setTimeout(() => e.apply(this, r), t);
	};
}
function _s(e) {
	let t = foundry.utils.deepClone(e);
	return delete t._stats, delete t.sort, delete t.ownership, delete t.folder, t.flags && (delete t.flags.core, delete t.flags.exportSource), t;
}
function vs(e) {
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
var ys, bs = e((() => {
	hs(), cs(), ys = class {
		constructor(e) {
			this.apiClient = e, this.streams = /* @__PURE__ */ new Map(), this.activeSyncs = /* @__PURE__ */ new Set(), this.lastKnownDraft = /* @__PURE__ */ new Map(), this.debouncedActorUpdate = gs(this._executeActorUpdate.bind(this), 1e3), this.debouncedItemUpdate = gs(this._executeItemUpdate.bind(this), 1e3);
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
						n && (this.lastKnownDraft.set(e.id, n), await this._applyRemoteDraft(e, n));
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
			for (let [r, i] of Object.entries(ps)) {
				if (r.startsWith("system.abilities")) continue;
				let a = foundry.utils.getProperty(t, i), o = foundry.utils.getProperty(e, r);
				a != null && a !== o && (n[r] = a);
			}
			if (ms.forEach(({ foundry: r, firebase: i }) => {
				let a = e.system.abilities?.[r]?.value || 0, o = (foundry.utils.getProperty(t, `attributes.scores.${i}`) || 10) + (foundry.utils.getProperty(t, `attributes.originBonuses.${i}`) || 0);
				a !== o && (n[`system.abilities.${r}.value`] = o);
			}), Object.keys(n).length > 0 && await e.update(n), t.items && Array.isArray(t.items)) {
				let n = t.items, r = e.items.contents, i = [], a = [], o = [];
				for (let e of n) {
					let t = r.find((t) => t.getFlag("runarcana-sync", "sourceId") === e._id || t.id === e._id), n = vs(foundry.utils.deepClone(e));
					if (t) {
						let r = _s(t.toObject()), i = _s(n);
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
					let t = e.getFlag("runarcana-sync", "sourceId") || e.id;
					n.some((e) => e._id === t) || o.push(e.id);
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
				r = await is(n);
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
			for (let [t, r] of Object.entries(ps)) {
				if (t.startsWith("system.abilities")) continue;
				let i = foundry.utils.getProperty(e, t);
				i !== void 0 && foundry.utils.setProperty(n, r, i);
			}
			ms.forEach(({ foundry: t, firebase: r }) => {
				let i = e.system.abilities?.[t]?.value;
				if (i === void 0) return;
				let a = foundry.utils.getProperty(n, `attributes.originBonuses.${r}`) || 0;
				foundry.utils.setProperty(n, `attributes.scores.${r}`, i - a);
			});
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
			let n = e.items.map((e) => {
				let t = e.toObject();
				return t._id = e.getFlag("runarcana-sync", "sourceId") || t._id, _s(t);
			}), r = foundry.utils.deepClone(this.lastKnownDraft.get(e.id));
			r.items = n;
			try {
				let n = await this.apiClient.saveDraft(t, r);
				this.lastKnownDraft.set(e.id, n);
			} catch (t) {
				throw this.notifyApiError("salvar os itens de", t, e), t;
			}
		}
	};
})), xs = /* @__PURE__ */ t((() => {
	qo(), Xo(), Qo(), ns(), fs(), bs();
	var e = null, t = null, n = null;
	function r() {
		if (!t) {
			ui.notifications.warn("Configure a URL do backend nas configurações do módulo primeiro.");
			return;
		}
		new ds(t).render();
	}
	var i = class extends FormApplication {
		constructor() {
			super({});
		}
		render() {
			return r(), this;
		}
		async _updateObject() {}
	};
	function a(e) {
		let t = game.settings.get("runarcana-sync", e);
		return typeof t == "string" ? t.trim() : "";
	}
	function o() {
		let e = a("apiKey"), t = a("authDomain"), n = a("projectId"), r = a("appId"), i = [];
		if (e || i.push("apiKey"), t || i.push("authDomain"), n || i.push("projectId"), i.length > 0) return {
			config: {},
			missingFields: i
		};
		let o = {
			apiKey: e,
			authDomain: t,
			projectId: n
		};
		return r && (o.appId = r), {
			config: o,
			missingFields: []
		};
	}
	function s(e) {
		if (!e) return {
			config: {},
			missingFields: []
		};
		try {
			let t = JSON.parse(e), n = typeof t.apiKey == "string" ? t.apiKey.trim() : "", r = typeof t.authDomain == "string" ? t.authDomain.trim() : "", i = typeof t.projectId == "string" ? t.projectId.trim() : "", a = typeof t.appId == "string" ? t.appId.trim() : "", o = [];
			if (n || o.push("apiKey"), r || o.push("authDomain"), i || o.push("projectId"), o.length > 0) return {
				config: {},
				missingFields: o
			};
			let s = {
				...t,
				apiKey: n,
				authDomain: r,
				projectId: i
			};
			return a && (s.appId = a), {
				config: s,
				missingFields: []
			};
		} catch (t) {
			console.warn("Runarcana Sync | Erro ao interpretar JSON Avançado. Tentando extrair chaves via Regex.", t);
			let n = (t) => {
				let n = e.match(RegExp(`${t}['"\\s]*:['"\\s]*([^'",\\s]+)`));
				return n ? n[1].trim() : "";
			}, r = n("apiKey"), i = n("authDomain"), a = n("projectId"), o = n("appId"), s = n("storageBucket"), c = n("messagingSenderId"), l = [];
			if (r || l.push("apiKey"), i || l.push("authDomain"), a || l.push("projectId"), l.length > 0) return {
				config: {},
				missingFields: l
			};
			let u = {
				apiKey: r,
				authDomain: i,
				projectId: a
			};
			return o && (u.appId = o), s && (u.storageBucket = s), c && (u.messagingSenderId = c), {
				config: u,
				missingFields: []
			};
		}
	}
	var c = {
		apiKey: "AIzaSyBrsYNloHwMgf2x9QKFScMFZmWf6t2Yiak",
		authDomain: "rpg-fichas-centralizadas.firebaseapp.com",
		projectId: "rpg-fichas-centralizadas",
		appId: "1:233256160629:web:7a9a8e05edb429e407973c"
	};
	Hooks.once("init", () => {
		game.settings.register("runarcana-sync", "apiKey", {
			name: "Firebase API Key",
			hint: "Sua chave de API web do Firebase (apiKey). Já vem preenchida com o serviço central Runarcana.",
			scope: "world",
			config: !0,
			type: String,
			default: c.apiKey,
			requiresReload: !0
		}), game.settings.register("runarcana-sync", "authDomain", {
			name: "Firebase Auth Domain",
			hint: "Seu domínio de autenticação (authDomain). Já vem preenchida com o serviço central Runarcana.",
			scope: "world",
			config: !0,
			type: String,
			default: c.authDomain,
			requiresReload: !0
		}), game.settings.register("runarcana-sync", "projectId", {
			name: "Firebase Project ID",
			hint: "O ID do seu projeto no Firebase (projectId). Já vem preenchida com o serviço central Runarcana.",
			scope: "world",
			config: !0,
			type: String,
			default: c.projectId,
			requiresReload: !0
		}), game.settings.register("runarcana-sync", "appId", {
			name: "Firebase App ID",
			hint: "(Opcional) O ID do aplicativo (appId). Já vem preenchida com o serviço central Runarcana.",
			scope: "world",
			config: !0,
			type: String,
			default: c.appId,
			requiresReload: !0
		}), game.settings.register("runarcana-sync", "firebaseConfigJSON", {
			name: "Firebase Config (JSON Avançado)",
			hint: "(Opcional) Só preencha se for rodar seu próprio projeto Firebase em vez do serviço central Runarcana. Se preenchido, sobrepõe os campos individuais acima.",
			scope: "world",
			config: !0,
			type: String,
			default: "",
			requiresReload: !0
		}), game.settings.register("runarcana-sync", "backendUrl", {
			name: "URL do Backend Runarcana",
			hint: "URL base do servidor runarcana-api. Já vem preenchida com o serviço central Runarcana — só troque se for rodar sua própria instância. É ele quem guarda as fichas e distribui as mudanças ao vivo — o Firebase acima serve só para login.",
			scope: "world",
			config: !0,
			type: String,
			default: "https://api.runarcana.org",
			requiresReload: !0
		}), game.settings.register("runarcana-sync", "compendiumSyncKey", {
			name: "Chave de Sincronização de Compêndio",
			hint: "Chave usada só para sincronizar itens de compêndio (não é login). Peça a chave da sua assinatura, ou configure a sua própria se estiver rodando um backend próprio.",
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
			type: i,
			restricted: !0
		});
	}), Hooks.once("ready", () => {
		let i = game.modules.get("runarcana-sync");
		i && (i.api = { openCompendiumSync: r });
		let c = a("firebaseConfigJSON"), l = {}, u = [];
		try {
			if (c) {
				let e = s(c);
				l = e.config, u = e.missingFields, Object.keys(l).length === 0 && u.length > 0 && console.warn(`Runarcana Sync | JSON Avançado incompleto ou inválido. Campos ausentes: ${u.join(", ")}. Tentando usar campos individuais.`);
			}
			if (Object.keys(l).length === 0) {
				let e = o();
				l = e.config, u = e.missingFields;
			}
			if (Object.keys(l).length > 0) {
				e = new Ko(l);
				let r = a("backendUrl");
				r ? (t = new Yo(e, r), n = new ys(t), game.actors.forEach((e) => n.startListening(e)), console.log("Runarcana Sync | Firebase (login) e backend configurados e rodando."), i.api.firebaseClient = e, i.api.syncManager = n) : console.warn("Runarcana Sync | URL do backend não configurada nas configurações do módulo.");
			} else console.warn(`Runarcana Sync | Firebase não configurado. Campos ausentes: ${u.join(", ") || "desconhecidos"}.`);
		} catch (e) {
			console.error("Runarcana Sync | Erro ao iniciar o Firebase:", e), ui.notifications.error("Runarcana Sync: Configuração do Firebase inválida.");
		}
	}), Hooks.on("updateActor", (e, t, r, i) => {
		i !== game.user.id || !n || n.handleActorUpdate(e, t);
	}), Hooks.on("createItem", (e, t, r) => {
		r !== game.user.id || !n || !e.parent || n.handleItemUpdate(e.parent);
	}), Hooks.on("updateItem", (e, t, r, i) => {
		i !== game.user.id || !n || !e.parent || n.handleItemUpdate(e.parent);
	}), Hooks.on("deleteItem", (e, t, r) => {
		r !== game.user.id || !n || !e.parent || n.handleItemUpdate(e.parent);
	}), Hooks.on("getActorSheetHeaderButtons", (r, i) => {
		let a = r.object;
		if (!a || a.documentName !== "Actor") return;
		let o = !!a.getFlag("runarcana-sync", "draftId");
		i.unshift({
			class: "runarcana-sync-btn",
			icon: "fas fa-sync",
			label: o ? "Runarcana (Vinculado)" : "Runarcana Sync",
			onclick: () => {
				if (!e || !t) return ui.notifications.warn("Configure o Firebase e a URL do backend nas configurações do módulo primeiro.");
				e.auth.currentUser ? new ts(t, a, n).render(!0) : new Zo(e).render(!0);
			}
		});
	}), Hooks.on("getHeaderControlsActorSheetV2", (r, i) => {
		let a = r.document;
		if (!a || a.documentName !== "Actor") return;
		let o = !!a.getFlag("runarcana-sync", "draftId");
		i.unshift({
			action: "runarcana-sync",
			icon: "fas fa-sync",
			label: o ? "Runarcana (Vinculado)" : "Runarcana Sync",
			class: "runarcana-sync-btn",
			onClick: () => {
				if (!e || !t) return ui.notifications.warn("Configure o Firebase e a URL do backend nas configurações do módulo primeiro.");
				e.auth.currentUser ? new ts(t, a, n).render(!0) : new Zo(e).render(!0);
			}
		});
	});
}));
//#endregion
export default xs();
