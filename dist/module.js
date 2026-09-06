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
	return e.replace(we, (e, n) => {
		let r = t[n];
		return r == null ? `<${n}?>` : String(r);
	});
}
function p(e) {
	for (let t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
	return !0;
}
function m(e, t) {
	if (e === t) return !0;
	let n = Object.keys(e), r = Object.keys(t);
	for (let i of n) {
		if (!r.includes(i)) return !1;
		let n = e[i], a = t[i];
		if (te(n) && te(a)) {
			if (!m(n, a)) return !1;
		} else if (n !== a) return !1;
	}
	for (let e of r) if (!n.includes(e)) return !1;
	return !0;
}
function te(e) {
	return typeof e == "object" && !!e;
}
function h(e) {
	let t = [];
	for (let [n, r] of Object.entries(e)) Array.isArray(r) ? r.forEach((e) => {
		t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e));
	}) : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
	return t.length ? "&" + t.join("&") : "";
}
function g(e) {
	let t = {};
	return e.replace(/^\?/, "").split("&").forEach((e) => {
		if (e) {
			let [n, r] = e.split("=");
			t[decodeURIComponent(n)] = decodeURIComponent(r);
		}
	}), t;
}
function ne(e) {
	let t = e.indexOf("?");
	if (!t) return "";
	let n = e.indexOf("#", t);
	return e.substring(t, n > 0 ? n : void 0);
}
function re(e, t) {
	let n = new Te(e, t);
	return n.subscribe.bind(n);
}
function ie(e, t) {
	if (typeof e != "object" || !e) return !1;
	for (let n of t) if (n in e && typeof e[n] == "function") return !0;
	return !1;
}
function ae() {}
function _(e) {
	return e && e._delegate ? e._delegate : e;
}
function oe(e) {
	try {
		return (e.startsWith("http://") || e.startsWith("https://") ? new URL(e).hostname : e).endsWith(".cloudworkstations.dev");
	} catch {
		return !1;
	}
}
async function se(e) {
	return (await fetch(e, { credentials: "include" })).ok;
}
var ce, le, ue, de, fe, pe, me, he, ge, _e, ve, ye, be, xe, Se, Ce, v, y, we, Te, Ee = e((() => {
	r(), ce = function(e) {
		let t = [], n = 0;
		for (let r = 0; r < e.length; r++) {
			let i = e.charCodeAt(r);
			i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192, t[n++] = i & 63 | 128) : (i & 64512) == 55296 && r + 1 < e.length && (e.charCodeAt(r + 1) & 64512) == 56320 ? (i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023), t[n++] = i >> 18 | 240, t[n++] = i >> 12 & 63 | 128, t[n++] = i >> 6 & 63 | 128, t[n++] = i & 63 | 128) : (t[n++] = i >> 12 | 224, t[n++] = i >> 6 & 63 | 128, t[n++] = i & 63 | 128);
		}
		return t;
	}, le = function(e) {
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
	}, ue = {
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
			return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(ce(e), t);
		},
		decodeString(e, t) {
			return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : le(this.decodeStringToByteArray(e, t));
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
				if (++t, i == null || a == null || o == null || s == null) throw new de();
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
	}, de = class extends Error {
		constructor() {
			super(...arguments), this.name = "DecodeBase64StringError";
		}
	}, fe = function(e) {
		let t = ce(e);
		return ue.encodeByteArray(t, !0);
	}, pe = function(e) {
		return fe(e).replace(/\./g, "");
	}, me = function(e) {
		try {
			return ue.decodeString(e, !0);
		} catch (e) {
			console.error("base64Decode failed: ", e);
		}
		return null;
	}, he = () => i().__FIREBASE_DEFAULTS__, ge = () => {
		if (typeof process > "u" || process.env === void 0) return;
		let e = process.env.__FIREBASE_DEFAULTS__;
		if (e) return JSON.parse(e);
	}, _e = () => {
		if (typeof document > "u") return;
		let e;
		try {
			e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
		} catch {
			return;
		}
		let t = e && me(e[1]);
		return t && JSON.parse(t);
	}, ve = () => {
		try {
			return n() || he() || ge() || _e();
		} catch (e) {
			console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
			return;
		}
	}, ye = (e) => ve()?.emulatorHosts?.[e], be = () => ve()?.config, xe = (e) => ve()?.[`_${e}`], Se = class {
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
	}, Ce = "FirebaseError", v = class e extends Error {
		constructor(t, n, r) {
			super(n), this.code = t, this.customData = r, this.name = Ce, Object.setPrototypeOf(this, e.prototype), Error.captureStackTrace && Error.captureStackTrace(this, y.prototype.create);
		}
	}, y = class {
		constructor(e, t, n) {
			this.service = e, this.serviceName = t, this.errors = n;
		}
		create(e, ...t) {
			let n = t[0] || {}, r = `${this.service}/${e}`, i = this.errors[e], a = i ? ee(i, n) : "Error";
			return new v(r, `${this.serviceName}: ${a} (${r}).`, n);
		}
	}, we = /\{\$([^}]+)}/g, Te = class {
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
			r = ie(e, [
				"next",
				"error",
				"complete"
			]) ? e : {
				next: e,
				error: t,
				complete: n
			}, r.next === void 0 && (r.next = ae), r.error === void 0 && (r.error = ae), r.complete === void 0 && (r.complete = ae);
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
function De(e) {
	return e === x ? void 0 : e;
}
function Oe(e) {
	return e.instantiationMode === "EAGER";
}
var b, x, ke, Ae, je = e((() => {
	Ee(), b = class {
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
	}, x = "[DEFAULT]", ke = class {
		constructor(e, t) {
			this.name = e, this.container = t, this.component = null, this.instances = /* @__PURE__ */ new Map(), this.instancesDeferred = /* @__PURE__ */ new Map(), this.instancesOptions = /* @__PURE__ */ new Map(), this.onInitCallbacks = /* @__PURE__ */ new Map();
		}
		get(e) {
			let t = this.normalizeInstanceIdentifier(e);
			if (!this.instancesDeferred.has(t)) {
				let e = new Se();
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
				if (Oe(e)) try {
					this.getOrInitializeService({ instanceIdentifier: x });
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
		clearInstance(e = x) {
			this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e);
		}
		async delete() {
			let e = Array.from(this.instances.values());
			await Promise.all([...e.filter((e) => "INTERNAL" in e).map((e) => e.INTERNAL.delete()), ...e.filter((e) => "_delete" in e).map((e) => e._delete())]);
		}
		isComponentSet() {
			return this.component != null;
		}
		isInitialized(e = x) {
			return this.instances.has(e);
		}
		getOptions(e = x) {
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
				instanceIdentifier: De(e),
				options: t
			}), this.instances.set(e, n), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(n, e), this.component.onInstanceCreated)) try {
				this.component.onInstanceCreated(this.container, e, n);
			} catch {}
			return n || null;
		}
		normalizeInstanceIdentifier(e = x) {
			return this.component ? this.component.multipleInstances ? e : x : e;
		}
		shouldAutoInitialize() {
			return !!this.component && this.component.instantiationMode !== "EXPLICIT";
		}
	}, Ae = class {
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
			let t = new ke(e, this);
			return this.providers.set(e, t), t;
		}
		getProviders() {
			return Array.from(this.providers.values());
		}
	};
})), Me, S, Ne, Pe, Fe, Ie, Le, Re = e((() => {
	Me = [], (function(e) {
		e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT";
	})(S ||= {}), Ne = {
		debug: S.DEBUG,
		verbose: S.VERBOSE,
		info: S.INFO,
		warn: S.WARN,
		error: S.ERROR,
		silent: S.SILENT
	}, Pe = S.INFO, Fe = {
		[S.DEBUG]: "log",
		[S.VERBOSE]: "log",
		[S.INFO]: "info",
		[S.WARN]: "warn",
		[S.ERROR]: "error"
	}, Ie = (e, t, ...n) => {
		if (t < e.logLevel) return;
		let r = (/* @__PURE__ */ new Date()).toISOString(), i = Fe[t];
		if (i) console[i](`[${r}]  ${e.name}:`, ...n);
		else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`);
	}, Le = class {
		constructor(e) {
			this.name = e, this._logLevel = Pe, this._logHandler = Ie, this._userLogHandler = null, Me.push(this);
		}
		get logLevel() {
			return this._logLevel;
		}
		set logLevel(e) {
			if (!(e in S)) throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
			this._logLevel = e;
		}
		setLogLevel(e) {
			this._logLevel = typeof e == "string" ? Ne[e] : e;
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
			this._userLogHandler && this._userLogHandler(this, S.DEBUG, ...e), this._logHandler(this, S.DEBUG, ...e);
		}
		log(...e) {
			this._userLogHandler && this._userLogHandler(this, S.VERBOSE, ...e), this._logHandler(this, S.VERBOSE, ...e);
		}
		info(...e) {
			this._userLogHandler && this._userLogHandler(this, S.INFO, ...e), this._logHandler(this, S.INFO, ...e);
		}
		warn(...e) {
			this._userLogHandler && this._userLogHandler(this, S.WARN, ...e), this._logHandler(this, S.WARN, ...e);
		}
		error(...e) {
			this._userLogHandler && this._userLogHandler(this, S.ERROR, ...e), this._logHandler(this, S.ERROR, ...e);
		}
	};
}));
//#endregion
//#region node_modules/idb/build/wrap-idb-value.js
function ze() {
	return qe ||= [
		IDBDatabase,
		IDBObjectStore,
		IDBIndex,
		IDBCursor,
		IDBTransaction
	];
}
function Be() {
	return Je ||= [
		IDBCursor.prototype.advance,
		IDBCursor.prototype.continue,
		IDBCursor.prototype.continuePrimaryKey
	];
}
function Ve(e) {
	let t = new Promise((t, n) => {
		let r = () => {
			e.removeEventListener("success", i), e.removeEventListener("error", a);
		}, i = () => {
			t(C(e.result)), r();
		}, a = () => {
			n(e.error), r();
		};
		e.addEventListener("success", i), e.addEventListener("error", a);
	});
	return t.then((t) => {
		t instanceof IDBCursor && Ye.set(t, e);
	}).catch(() => {}), $e.set(t, e), t;
}
function He(e) {
	if (Xe.has(e)) return;
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
	Xe.set(e, t);
}
function Ue(e) {
	et = e(et);
}
function We(e) {
	return e === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(t, ...n) {
		let r = e.call(tt(this), t, ...n);
		return Ze.set(r, t.sort ? t.sort() : [t]), C(r);
	} : Be().includes(e) ? function(...t) {
		return e.apply(tt(this), t), C(Ye.get(this));
	} : function(...t) {
		return C(e.apply(tt(this), t));
	};
}
function Ge(e) {
	return typeof e == "function" ? We(e) : (e instanceof IDBTransaction && He(e), Ke(e, ze()) ? new Proxy(e, et) : e);
}
function C(e) {
	if (e instanceof IDBRequest) return Ve(e);
	if (Qe.has(e)) return Qe.get(e);
	let t = Ge(e);
	return t !== e && (Qe.set(e, t), $e.set(t, e)), t;
}
var Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt = e((() => {
	Ke = (e, t) => t.some((t) => e instanceof t), Ye = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakMap(), Ze = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), et = {
		get(e, t, n) {
			if (e instanceof IDBTransaction) {
				if (t === "done") return Xe.get(e);
				if (t === "objectStoreNames") return e.objectStoreNames || Ze.get(e);
				if (t === "store") return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
			}
			return C(e[t]);
		},
		set(e, t, n) {
			return e[t] = n, !0;
		},
		has(e, t) {
			return e instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in e;
		}
	}, tt = (e) => $e.get(e);
}));
//#endregion
//#region node_modules/idb/build/index.js
function rt(e, t, { blocked: n, upgrade: r, blocking: i, terminated: a } = {}) {
	let o = indexedDB.open(e, t), s = C(o);
	return r && o.addEventListener("upgradeneeded", (e) => {
		r(C(o.result), e.oldVersion, e.newVersion, C(o.transaction), e);
	}), n && o.addEventListener("blocked", (e) => n(e.oldVersion, e.newVersion, e)), s.then((e) => {
		a && e.addEventListener("close", () => a()), i && e.addEventListener("versionchange", (e) => i(e.oldVersion, e.newVersion, e));
	}).catch(() => {}), s;
}
function it(e, t) {
	if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
	if (st.get(t)) return st.get(t);
	let n = t.replace(/FromIndex$/, ""), r = t !== n, i = ot.includes(n);
	if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || at.includes(n))) return;
	let a = async function(e, ...t) {
		let a = this.transaction(e, i ? "readwrite" : "readonly"), o = a.store;
		return r && (o = o.index(t.shift())), (await Promise.all([o[n](...t), i && a.done]))[0];
	};
	return st.set(t, a), a;
}
var at, ot, st, ct = e((() => {
	nt(), at = [
		"get",
		"getKey",
		"getAll",
		"getAllKeys",
		"count"
	], ot = [
		"put",
		"add",
		"delete",
		"clear"
	], st = /* @__PURE__ */ new Map(), Ue((e) => ({
		...e,
		get: (t, n, r) => it(t, n) || e.get(t, n, r),
		has: (t, n) => !!it(t, n) || e.has(t, n)
	}));
}));
//#endregion
//#region node_modules/@firebase/app/dist/esm/index.esm.js
function lt(e) {
	return e.getComponent()?.type === "VERSION";
}
function ut(e, t) {
	try {
		e.container.addComponent(t);
	} catch (n) {
		E.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n);
	}
}
function dt(e) {
	let t = e.name;
	if (an.has(t)) return E.debug(`There were multiple attempts to register component ${t}.`), !1;
	an.set(t, e);
	for (let t of nn.values()) ut(t, e);
	for (let t of rn.values()) ut(t, e);
	return !0;
}
function ft(e, t) {
	let n = e.container.getProvider("heartbeat").getImmediate({ optional: !0 });
	return n && n.triggerHeartbeat(), e.container.getProvider(t);
}
function w(e) {
	return e == null ? !1 : e.settings !== void 0;
}
function pt(e, t = {}) {
	let n = e;
	typeof t != "object" && (t = { name: t });
	let r = {
		name: en,
		automaticDataCollectionEnabled: !0,
		...t
	}, i = r.name;
	if (typeof i != "string" || !i) throw D.create("bad-app-name", { appName: String(i) });
	if (n ||= be(), !n) throw D.create("no-options");
	let a = nn.get(i);
	if (a) {
		if (m(n, a.options) && m(r, a.config)) return a;
		throw D.create("duplicate-app", { appName: i });
	}
	let o = new Ae(i);
	for (let e of an.values()) o.addComponent(e);
	let s = new on(n, r, o);
	return nn.set(i, s), s;
}
function mt(e = en) {
	let t = nn.get(e);
	if (!t && e === "[DEFAULT]" && be()) return pt();
	if (!t) throw D.create("no-app", { appName: e });
	return t;
}
function T(e, t, n) {
	let r = tn[e] ?? e;
	n && (r += `-${n}`);
	let i = r.match(/\s|\//), a = t.match(/\s|\//);
	if (i || a) {
		let e = [`Unable to register library "${r}" with version "${t}":`];
		i && e.push(`library name "${r}" contains illegal characters (whitespace or "/")`), i && a && e.push("and"), a && e.push(`version name "${t}" contains illegal characters (whitespace or "/")`), E.warn(e.join(" "));
		return;
	}
	dt(new b(`${r}-version`, () => ({
		library: r,
		version: t
	}), "VERSION"));
}
function ht() {
	return ln ||= rt(sn, cn, { upgrade: (e, t) => {
		switch (t) {
			case 0: try {
				e.createObjectStore(k);
			} catch (e) {
				console.warn(e);
			}
		}
	} }).catch((e) => {
		throw D.create("idb-open", { originalErrorMessage: e.message });
	}), ln;
}
async function gt(e) {
	try {
		let t = (await ht()).transaction(k), n = await t.objectStore(k).get(vt(e));
		return await t.done, n;
	} catch (e) {
		if (e instanceof v) E.warn(e.message);
		else {
			let t = D.create("idb-get", { originalErrorMessage: e?.message });
			E.warn(t.message);
		}
	}
}
async function _t(e, t) {
	try {
		let n = (await ht()).transaction(k, "readwrite");
		await n.objectStore(k).put(t, vt(e)), await n.done;
	} catch (e) {
		if (e instanceof v) E.warn(e.message);
		else {
			let t = D.create("idb-set", { originalErrorMessage: e?.message });
			E.warn(t.message);
		}
	}
}
function vt(e) {
	return `${e.name}!${e.options.appId}`;
}
function yt() {
	return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function bt(e, t = un) {
	let n = [], r = e.slice();
	for (let i of e) {
		let e = n.find((e) => e.agent === i.agent);
		if (!e) {
			if (n.push({
				agent: i.agent,
				dates: [i.date]
			}), xt(n) > t) {
				n.pop();
				break;
			}
		} else if (e.dates.push(i.date), xt(n) > t) {
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
function xt(e) {
	return pe(JSON.stringify({
		version: 2,
		heartbeats: e
	})).length;
}
function St(e) {
	if (e.length === 0) return -1;
	let t = 0, n = e[0].date;
	for (let r = 1; r < e.length; r++) e[r].date < n && (n = e[r].date, t = r);
	return t;
}
function Ct(e) {
	dt(new b("platform-logger", (e) => new wt(e), "PRIVATE")), dt(new b("heartbeat", (e) => new fn(e), "PRIVATE")), T(Tt, Et, e), T(Tt, Et, "esm2020"), T("fire-js", "");
}
var wt, Tt, Et, E, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, D, on, O, sn, cn, k, ln, un, dn, fn, pn, mn = e((() => {
	je(), Re(), Ee(), ct(), wt = class {
		constructor(e) {
			this.container = e;
		}
		getPlatformInfoString() {
			return this.container.getProviders().map((e) => {
				if (lt(e)) {
					let t = e.getImmediate();
					return `${t.library}/${t.version}`;
				} else return null;
			}).filter((e) => e).join(" ");
		}
	}, Tt = "@firebase/app", Et = "0.14.10", E = new Le("@firebase/app"), Dt = "@firebase/app-compat", Ot = "@firebase/analytics-compat", kt = "@firebase/analytics", At = "@firebase/app-check-compat", jt = "@firebase/app-check", Mt = "@firebase/auth", Nt = "@firebase/auth-compat", Pt = "@firebase/database", Ft = "@firebase/data-connect", It = "@firebase/database-compat", Lt = "@firebase/functions", Rt = "@firebase/functions-compat", zt = "@firebase/installations", Bt = "@firebase/installations-compat", Vt = "@firebase/messaging", Ht = "@firebase/messaging-compat", Ut = "@firebase/performance", Wt = "@firebase/performance-compat", Gt = "@firebase/remote-config", Kt = "@firebase/remote-config-compat", qt = "@firebase/storage", Jt = "@firebase/storage-compat", Yt = "@firebase/firestore", Xt = "@firebase/ai", Zt = "@firebase/firestore-compat", Qt = "firebase", $t = "12.11.0", en = "[DEFAULT]", tn = {
		[Tt]: "fire-core",
		[Dt]: "fire-core-compat",
		[kt]: "fire-analytics",
		[Ot]: "fire-analytics-compat",
		[jt]: "fire-app-check",
		[At]: "fire-app-check-compat",
		[Mt]: "fire-auth",
		[Nt]: "fire-auth-compat",
		[Pt]: "fire-rtdb",
		[Ft]: "fire-data-connect",
		[It]: "fire-rtdb-compat",
		[Lt]: "fire-fn",
		[Rt]: "fire-fn-compat",
		[zt]: "fire-iid",
		[Bt]: "fire-iid-compat",
		[Vt]: "fire-fcm",
		[Ht]: "fire-fcm-compat",
		[Ut]: "fire-perf",
		[Wt]: "fire-perf-compat",
		[Gt]: "fire-rc",
		[Kt]: "fire-rc-compat",
		[qt]: "fire-gcs",
		[Jt]: "fire-gcs-compat",
		[Yt]: "fire-fst",
		[Zt]: "fire-fst-compat",
		[Xt]: "fire-vertex",
		"fire-js": "fire-js",
		[Qt]: "fire-js-all"
	}, nn = /* @__PURE__ */ new Map(), rn = /* @__PURE__ */ new Map(), an = /* @__PURE__ */ new Map(), D = new y("app", "Firebase", {
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
	}), on = class {
		constructor(e, t, n) {
			this._isDeleted = !1, this._options = { ...e }, this._config = { ...t }, this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new b("app", () => this, "PUBLIC"));
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
			if (this.isDeleted) throw D.create("app-deleted", { appName: this._name });
		}
	}, O = $t, sn = "firebase-heartbeat-database", cn = 1, k = "firebase-heartbeat-store", ln = null, un = 1024, dn = 30, fn = class {
		constructor(e) {
			this.container = e, this._heartbeatsCache = null, this._storage = new pn(this.container.getProvider("app").getImmediate()), this._heartbeatsCachePromise = this._storage.read().then((e) => (this._heartbeatsCache = e, e));
		}
		async triggerHeartbeat() {
			try {
				let e = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), t = yt();
				if (this._heartbeatsCache?.heartbeats == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, this._heartbeatsCache?.heartbeats == null) || this._heartbeatsCache.lastSentHeartbeatDate === t || this._heartbeatsCache.heartbeats.some((e) => e.date === t)) return;
				if (this._heartbeatsCache.heartbeats.push({
					date: t,
					agent: e
				}), this._heartbeatsCache.heartbeats.length > dn) {
					let e = St(this._heartbeatsCache.heartbeats);
					this._heartbeatsCache.heartbeats.splice(e, 1);
				}
				return this._storage.overwrite(this._heartbeatsCache);
			} catch (e) {
				E.warn(e);
			}
		}
		async getHeartbeatsHeader() {
			try {
				if (this._heartbeatsCache === null && await this._heartbeatsCachePromise, this._heartbeatsCache?.heartbeats == null || this._heartbeatsCache.heartbeats.length === 0) return "";
				let e = yt(), { heartbeatsToSend: t, unsentEntries: n } = bt(this._heartbeatsCache.heartbeats), r = pe(JSON.stringify({
					version: 2,
					heartbeats: t
				}));
				return this._heartbeatsCache.lastSentHeartbeatDate = e, n.length > 0 ? (this._heartbeatsCache.heartbeats = n, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), r;
			} catch (e) {
				return E.warn(e), "";
			}
		}
	}, pn = class {
		constructor(e) {
			this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
		}
		async runIndexedDBEnvironmentCheck() {
			return d() ? f().then(() => !0).catch(() => !1) : !1;
		}
		async read() {
			if (await this._canUseIndexedDBPromise) {
				let e = await gt(this.app);
				return e?.heartbeats ? e : { heartbeats: [] };
			} else return { heartbeats: [] };
		}
		async overwrite(e) {
			if (await this._canUseIndexedDBPromise) {
				let t = await this.read();
				return _t(this.app, {
					lastSentHeartbeatDate: e.lastSentHeartbeatDate ?? t.lastSentHeartbeatDate,
					heartbeats: e.heartbeats
				});
			} else return;
		}
		async add(e) {
			if (await this._canUseIndexedDBPromise) {
				let t = await this.read();
				return _t(this.app, {
					lastSentHeartbeatDate: e.lastSentHeartbeatDate ?? t.lastSentHeartbeatDate,
					heartbeats: [...t.heartbeats, ...e.heartbeats]
				});
			} else return;
		}
	}, Ct("");
})), hn = e((() => {
	mn(), mn(), T("firebase", "12.11.0", "app");
}));
//#endregion
//#region node_modules/@firebase/auth/dist/esm/index-dfb5c973.js
function gn() {
	return { "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK." };
}
function _n(e, ...t) {
	W.logLevel <= S.WARN && W.warn(`Auth (${O}): ${e}`, ...t);
}
function vn(e, ...t) {
	W.logLevel <= S.ERROR && W.error(`Auth (${O}): ${e}`, ...t);
}
function A(e, ...t) {
	throw xn(e, ...t);
}
function j(e, ...t) {
	return xn(e, ...t);
}
function yn(e, t, n) {
	return new y("auth", "Firebase", {
		...Xi(),
		[t]: n
	}).create(t, { appName: e.name });
}
function M(e) {
	return yn(e, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
}
function bn(e, t, n) {
	let r = n;
	if (!(t instanceof r)) throw r.name !== t.constructor.name && A(e, "argument-error"), yn(e, "argument-error", `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`);
}
function xn(e, ...t) {
	if (typeof e != "string") {
		let n = t[0], r = [...t.slice(1)];
		return r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r);
	}
	return Zi.create(e, ...t);
}
function N(e, t, ...n) {
	if (!e) throw xn(t, ...n);
}
function P(e) {
	let t = "INTERNAL ASSERTION FAILED: " + e;
	throw vn(t), Error(t);
}
function F(e, t) {
	e || P(t);
}
function Sn() {
	return typeof self < "u" && self.location?.href || "";
}
function Cn() {
	return wn() === "http:" || wn() === "https:";
}
function wn() {
	return typeof self < "u" && self.location?.protocol || null;
}
function Tn() {
	return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && (Cn() || c() || "connection" in navigator) ? navigator.onLine : !0;
}
function En() {
	if (typeof navigator > "u") return null;
	let e = navigator;
	return e.languages && e.languages[0] || e.language || null;
}
function Dn(e, t) {
	F(e.emulator, "Emulator should always be set here");
	let { url: n } = e.emulator;
	return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n;
}
function I(e, t) {
	return e.tenantId && !t.tenantId ? {
		...t,
		tenantId: e.tenantId
	} : t;
}
async function L(e, t, n, r, i = {}) {
	return On(e, i, async () => {
		let i = {}, a = {};
		r && (t === "GET" ? a = r : i = { body: JSON.stringify(r) });
		let o = h({
			key: e.config.apiKey,
			...a
		}).slice(1), c = await e._getAdditionalHeaders();
		c["Content-Type"] = "application/json", e.languageCode && (c["X-Firebase-Locale"] = e.languageCode);
		let l = {
			method: t,
			headers: c,
			...i
		};
		return s() || (l.referrerPolicy = "no-referrer"), e.emulatorConfig && oe(e.emulatorConfig.host) && (l.credentials = "include"), Qi.fetch()(await kn(e, e.config.apiHost, n, o), l);
	});
}
async function On(e, t, n) {
	e._canInitEmulator = !1;
	let r = {
		...$i,
		...t
	};
	try {
		let t = new na(e), i = await Promise.race([n(), t.promise]);
		t.clearNetworkTimeout();
		let a = await i.json();
		if ("needConfirmation" in a) throw jn(e, "account-exists-with-different-credential", a);
		if (i.ok && !("errorMessage" in a)) return a;
		{
			let [t, n] = (i.ok ? a.errorMessage : a.error.message).split(" : ");
			if (t === "FEDERATED_USER_ID_ALREADY_LINKED") throw jn(e, "credential-already-in-use", a);
			if (t === "EMAIL_EXISTS") throw jn(e, "email-already-in-use", a);
			if (t === "USER_DISABLED") throw jn(e, "user-disabled", a);
			let o = r[t] || t.toLowerCase().replace(/[_\s]+/g, "-");
			if (n) throw yn(e, o, n);
			A(e, o);
		}
	} catch (t) {
		if (t instanceof v) throw t;
		A(e, "network-request-failed", { message: String(t) });
	}
}
async function R(e, t, n, r, i = {}) {
	let a = await L(e, t, n, r, i);
	return "mfaPendingCredential" in a && A(e, "multi-factor-auth-required", { _serverResponse: a }), a;
}
async function kn(e, t, n, r) {
	let i = `${t}${n}?${r}`, a = e, o = a.config.emulator ? Dn(e.config, i) : `${e.config.apiScheme}://${i}`;
	return ea.includes(n) && (await a._persistenceManagerAvailable, a._getPersistenceType() === "COOKIE") ? a._getPersistence()._getFinalTarget(o).toString() : o;
}
function An(e) {
	switch (e) {
		case "ENFORCE": return "ENFORCE";
		case "AUDIT": return "AUDIT";
		case "OFF": return "OFF";
		default: return "ENFORCEMENT_STATE_UNSPECIFIED";
	}
}
function jn(e, t, n) {
	let r = { appName: e.name };
	n.email && (r.email = n.email), n.phoneNumber && (r.phoneNumber = n.phoneNumber);
	let i = j(e, t, r);
	return i.customData._tokenResponse = n, i;
}
function Mn(e) {
	return e !== void 0 && e.enterprise !== void 0;
}
async function Nn(e, t) {
	return L(e, "GET", "/v2/recaptchaConfig", I(e, t));
}
async function Pn(e, t) {
	return L(e, "POST", "/v1/accounts:delete", t);
}
async function Fn(e, t) {
	return L(e, "POST", "/v1/accounts:lookup", t);
}
function In(e) {
	if (e) try {
		let t = new Date(Number(e));
		if (!isNaN(t.getTime())) return t.toUTCString();
	} catch {}
}
async function Ln(e, t = !1) {
	let n = _(e), r = await n.getIdToken(t), i = zn(r);
	N(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
	let a = typeof i.firebase == "object" ? i.firebase : void 0, o = a?.sign_in_provider;
	return {
		claims: i,
		token: r,
		authTime: In(Rn(i.auth_time)),
		issuedAtTime: In(Rn(i.iat)),
		expirationTime: In(Rn(i.exp)),
		signInProvider: o || null,
		signInSecondFactor: a?.sign_in_second_factor || null
	};
}
function Rn(e) {
	return Number(e) * 1e3;
}
function zn(e) {
	let [t, n, r] = e.split(".");
	if (t === void 0 || n === void 0 || r === void 0) return vn("JWT malformed, contained fewer than 3 sections"), null;
	try {
		let e = me(n);
		return e ? JSON.parse(e) : (vn("Failed to decode base64 JWT payload"), null);
	} catch (e) {
		return vn("Caught error parsing JWT payload as JSON", e?.toString()), null;
	}
}
function Bn(e) {
	let t = zn(e);
	return N(t, "internal-error"), N(t.exp !== void 0, "internal-error"), N(t.iat !== void 0, "internal-error"), Number(t.exp) - Number(t.iat);
}
async function Vn(e, t, n = !1) {
	if (n) return t;
	try {
		return await t;
	} catch (t) {
		throw t instanceof v && Hn(t) && e.auth.currentUser === e && await e.auth.signOut(), t;
	}
}
function Hn({ code: e }) {
	return e === "auth/user-disabled" || e === "auth/user-token-expired";
}
async function Un(e) {
	let t = e.auth, n = await Vn(e, Fn(t, { idToken: await e.getIdToken() }));
	N(n?.users.length, t, "internal-error");
	let r = n.users[0];
	e._notifyReloadListener(r);
	let i = r.providerUserInfo?.length ? Kn(r.providerUserInfo) : [], a = Gn(e.providerData, i), o = e.isAnonymous, s = !(e.email && r.passwordHash) && !a?.length, c = o ? s : !1, l = {
		uid: r.localId,
		displayName: r.displayName || null,
		photoURL: r.photoUrl || null,
		email: r.email || null,
		emailVerified: r.emailVerified || !1,
		phoneNumber: r.phoneNumber || null,
		tenantId: r.tenantId || null,
		providerData: a,
		metadata: new aa(r.createdAt, r.lastLoginAt),
		isAnonymous: c
	};
	Object.assign(e, l);
}
async function Wn(e) {
	let t = _(e);
	await Un(t), await t.auth._persistUserIfCurrent(t), t.auth._notifyListenersIfCurrent(t);
}
function Gn(e, t) {
	return [...e.filter((e) => !t.some((t) => t.providerId === e.providerId)), ...t];
}
function Kn(e) {
	return e.map(({ providerId: e, ...t }) => ({
		providerId: e,
		uid: t.rawId || "",
		displayName: t.displayName || null,
		email: t.email || null,
		phoneNumber: t.phoneNumber || null,
		photoURL: t.photoUrl || null
	}));
}
async function qn(e, t) {
	let n = await On(e, {}, async () => {
		let n = h({
			grant_type: "refresh_token",
			refresh_token: t
		}).slice(1), { tokenApiHost: r, apiKey: i } = e.config, a = await kn(e, r, "/v1/token", `key=${i}`), o = await e._getAdditionalHeaders();
		o["Content-Type"] = "application/x-www-form-urlencoded";
		let s = {
			method: "POST",
			headers: o,
			body: n
		};
		return e.emulatorConfig && oe(e.emulatorConfig.host) && (s.credentials = "include"), Qi.fetch()(a, s);
	});
	return {
		accessToken: n.access_token,
		expiresIn: n.expires_in,
		refreshToken: n.refresh_token
	};
}
async function Jn(e, t) {
	return L(e, "POST", "/v2/accounts:revokeToken", I(e, t));
}
function z(e, t) {
	N(typeof e == "string" || e === void 0, "internal-error", { appName: t });
}
function B(e) {
	F(e instanceof Function, "Expected a class definition");
	let t = sa.get(e);
	return t ? (F(t instanceof e, "Instance stored in cache mismatched with class"), t) : (t = new e(), sa.set(e, t), t);
}
function Yn(e, t, n) {
	return `firebase:${e}:${t}:${n}`;
}
function Xn(e) {
	let t = e.toLowerCase();
	if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/")) return "Opera";
	if (er(t)) return "IEMobile";
	if (t.includes("msie") || t.includes("trident/")) return "IE";
	if (t.includes("edge/")) return "Edge";
	if (Zn(t)) return "Firefox";
	if (t.includes("silk/")) return "Silk";
	if (nr(t)) return "Blackberry";
	if (rr(t)) return "Webos";
	if (Qn(t)) return "Safari";
	if ((t.includes("chrome/") || $n(t)) && !t.includes("edge/")) return "Chrome";
	if (tr(t)) return "Android";
	{
		let t = e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);
		if (t?.length === 2) return t[1];
	}
	return "Other";
}
function Zn(e = a()) {
	return /firefox\//i.test(e);
}
function Qn(e = a()) {
	let t = e.toLowerCase();
	return t.includes("safari/") && !t.includes("chrome/") && !t.includes("crios/") && !t.includes("android");
}
function $n(e = a()) {
	return /crios\//i.test(e);
}
function er(e = a()) {
	return /iemobile/i.test(e);
}
function tr(e = a()) {
	return /android/i.test(e);
}
function nr(e = a()) {
	return /blackberry/i.test(e);
}
function rr(e = a()) {
	return /webos/i.test(e);
}
function ir(e = a()) {
	return /iphone|ipad|ipod/i.test(e) || /macintosh/i.test(e) && /mobile/i.test(e);
}
function ar(e = a()) {
	return ir(e) && !!window.navigator?.standalone;
}
function or() {
	return u() && document.documentMode === 10;
}
function sr(e = a()) {
	return ir(e) || tr(e) || rr(e) || nr(e) || /windows phone/i.test(e) || er(e);
}
function cr(e, t = []) {
	let n;
	switch (e) {
		case "Browser":
			n = Xn(a());
			break;
		case "Worker":
			n = `${Xn(a())}-${e}`;
			break;
		default: n = e;
	}
	let r = t.length ? t.join(",") : "FirebaseCore-web";
	return `${n}/JsCore/${O}/${r}`;
}
async function lr(e, t = {}) {
	return L(e, "GET", "/v2/passwordPolicy", I(e, t));
}
function V(e) {
	return _(e);
}
function ur(e) {
	ga = e;
}
function dr(e) {
	return ga.loadJS(e);
}
function fr() {
	return ga.recaptchaEnterpriseScript;
}
function pr() {
	return ga.gapiScript;
}
function mr(e) {
	return `__${e}${Math.floor(Math.random() * 1e6)}`;
}
async function hr(e, t, n, r = !1, i = !1) {
	let a = new ba(e), o;
	if (i) o = q;
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
async function gr(e, t, n, r, i) {
	return i === "EMAIL_PASSWORD_PROVIDER" ? e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER") ? r(e, await hr(e, t, n, n === "getOobCode")) : r(e, t).catch(async (i) => i.code === "auth/missing-recaptcha-token" ? (console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`), r(e, await hr(e, t, n, n === "getOobCode"))) : Promise.reject(i)) : i === "PHONE_PROVIDER" ? e._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER") ? r(e, await hr(e, t, n)).catch(async (i) => e._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER") === "AUDIT" && (i.code === "auth/missing-recaptcha-token" || i.code === "auth/invalid-app-credential") ? (console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`), r(e, await hr(e, t, n, !1, !0))) : Promise.reject(i)) : r(e, await hr(e, t, n, !1, !0)) : Promise.reject(i + " provider is not supported.");
}
async function _r(e) {
	let t = V(e), n = new ra(await Nn(t, {
		clientType: "CLIENT_TYPE_WEB",
		version: "RECAPTCHA_ENTERPRISE"
	}));
	t.tenantId == null ? t._agentRecaptchaConfig = n : t._tenantRecaptchaConfigs[t.tenantId] = n, n.isAnyProviderEnabled() && new ba(t).verify();
}
function vr(e, t) {
	let n = ft(e, "auth");
	if (n.isInitialized()) {
		let e = n.getImmediate();
		if (m(n.getOptions(), t ?? {})) return e;
		A(e, "already-initialized");
	}
	return n.initialize({ options: t });
}
function yr(e, t) {
	let n = t?.persistence || [], r = (Array.isArray(n) ? n : [n]).map(B);
	t?.errorMap && e._updateErrorMap(t.errorMap), e._initializeWithPersistence(r, t?.popupRedirectResolver);
}
function br(e, t, n) {
	let r = V(e);
	N(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
	let i = !!n?.disableWarnings, a = xr(t), { host: o, port: s } = Sr(t), c = s === null ? "" : `:${s}`, l = { url: `${a}//${o}${c}/` }, u = Object.freeze({
		host: o,
		port: s,
		protocol: a.replace(":", ""),
		options: Object.freeze({ disableWarnings: i })
	});
	if (!r._canInitEmulator) {
		N(r.config.emulator && r.emulatorConfig, r, "emulator-config-failed"), N(m(l, r.config.emulator) && m(u, r.emulatorConfig), r, "emulator-config-failed");
		return;
	}
	r.config.emulator = l, r.emulatorConfig = u, r.settings.appVerificationDisabledForTesting = !0, oe(o) ? se(`${a}//${o}${c}`) : i || wr();
}
function xr(e) {
	let t = e.indexOf(":");
	return t < 0 ? "" : e.substr(0, t + 1);
}
function Sr(e) {
	let t = xr(e), n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
	if (!n) return {
		host: "",
		port: null
	};
	let r = n[2].split("@").pop() || "", i = /^(\[[^\]]+\])(:|$)/.exec(r);
	if (i) {
		let e = i[1];
		return {
			host: e,
			port: Cr(r.substr(e.length + 1))
		};
	} else {
		let [e, t] = r.split(":");
		return {
			host: e,
			port: Cr(t)
		};
	}
}
function Cr(e) {
	if (!e) return null;
	let t = Number(e);
	return isNaN(t) ? null : t;
}
function wr() {
	function e() {
		let e = document.createElement("p"), t = e.style;
		e.innerText = "Running in emulator mode. Do not use with production credentials.", t.position = "fixed", t.width = "100%", t.backgroundColor = "#ffffff", t.border = ".1em solid #000000", t.color = "#b50000", t.bottom = "0px", t.left = "0px", t.margin = "0px", t.zIndex = "10000", t.textAlign = "center", e.classList.add("firebase-emulator-warning"), document.body.appendChild(e);
	}
	typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", e) : e());
}
async function Tr(e, t) {
	return L(e, "POST", "/v1/accounts:signUp", t);
}
async function Er(e, t) {
	return R(e, "POST", "/v1/accounts:signInWithPassword", I(e, t));
}
async function Dr(e, t) {
	return R(e, "POST", "/v1/accounts:signInWithEmailLink", I(e, t));
}
async function Or(e, t) {
	return R(e, "POST", "/v1/accounts:signInWithEmailLink", I(e, t));
}
async function H(e, t) {
	return R(e, "POST", "/v1/accounts:signInWithIdp", I(e, t));
}
async function kr(e, t) {
	return L(e, "POST", "/v1/accounts:sendVerificationCode", I(e, t));
}
async function Ar(e, t) {
	return R(e, "POST", "/v1/accounts:signInWithPhoneNumber", I(e, t));
}
async function jr(e, t) {
	let n = await R(e, "POST", "/v1/accounts:signInWithPhoneNumber", I(e, t));
	if (n.temporaryProof) throw jn(e, "account-exists-with-different-credential", n);
	return n;
}
async function Mr(e, t) {
	return R(e, "POST", "/v1/accounts:signInWithPhoneNumber", I(e, {
		...t,
		operation: "REAUTH"
	}), Ta);
}
function Nr(e) {
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
function Pr(e) {
	let t = g(ne(e)).link, n = t ? g(ne(t)).deep_link_id : null, r = g(ne(e)).deep_link_id;
	return (r ? g(ne(r)).link : null) || r || n || t || e;
}
function Fr(e) {
	return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null;
}
function Ir(e, t, n, r) {
	return (t === "reauthenticate" ? n._getReauthenticationResolver(e) : n._getIdTokenResponse(e)).catch((n) => {
		throw n.code === "auth/multi-factor-auth-required" ? Fa._fromErrorAndOperation(e, n, t, r) : n;
	});
}
async function Lr(e, t, n = !1) {
	let r = await Vn(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
	return Pa._forOperation(e, "link", r);
}
async function Rr(e, t, n = !1) {
	let { auth: r } = e;
	if (w(r.app)) return Promise.reject(M(r));
	let i = "reauthenticate";
	try {
		let a = await Vn(e, Ir(r, i, t, e), n);
		N(a.idToken, r, "internal-error");
		let o = zn(a.idToken);
		N(o, r, "internal-error");
		let { sub: s } = o;
		return N(e.uid === s, r, "user-mismatch"), Pa._forOperation(e, i, a);
	} catch (e) {
		throw e?.code === "auth/user-not-found" && A(r, "user-mismatch"), e;
	}
}
async function zr(e, t, n = !1) {
	if (w(e.app)) return Promise.reject(M(e));
	let r = "signIn", i = await Ir(e, r, t), a = await Pa._fromIdTokenResponse(e, r, i);
	return n || await e._updateCurrentUser(a.user), a;
}
async function Br(e, t) {
	return zr(V(e), t);
}
async function Vr(e) {
	let t = V(e);
	t._getPasswordPolicyInternal() && await t._updatePasswordPolicy();
}
function Hr(e, t, n) {
	return w(e.app) ? Promise.reject(M(e)) : Br(_(e), Oa.credential(t, n)).catch(async (t) => {
		throw t.code === "auth/password-does-not-meet-requirements" && Vr(e), t;
	});
}
function Ur(e, t, n, r) {
	return _(e).onIdTokenChanged(t, n, r);
}
function Wr(e, t, n) {
	return _(e).beforeAuthStateChanged(t, n);
}
function Gr(e, t, n, r) {
	return _(e).onAuthStateChanged(t, n, r);
}
function Kr(e, t) {
	return L(e, "POST", "/v2/accounts/mfaEnrollment:start", I(e, t));
}
function qr(e, t) {
	return L(e, "POST", "/v2/accounts/mfaEnrollment:finalize", I(e, t));
}
function Jr(e, t) {
	return L(e, "POST", "/v2/accounts/mfaEnrollment:start", I(e, t));
}
function Yr(e, t) {
	return L(e, "POST", "/v2/accounts/mfaEnrollment:finalize", I(e, t));
}
function Xr(e) {
	let t = e.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"), n = RegExp(`${t}=([^;]+)`);
	return document.cookie.match(n)?.[1] ?? null;
}
function Zr(e) {
	return `${window.location.protocol === "http:" ? "__dev_" : "__HOST-"}FIREBASE_${e.split(":")[3]}`;
}
function Qr(e) {
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
function $r(e = "", t = 10) {
	let n = "";
	for (let e = 0; e < t; e++) n += Math.floor(Math.random() * 10);
	return e + n;
}
function U() {
	return window;
}
function ei(e) {
	U().location.href = e;
}
function ti() {
	return U().WorkerGlobalScope !== void 0 && typeof U().importScripts == "function";
}
async function ni() {
	if (!navigator?.serviceWorker) return null;
	try {
		return (await navigator.serviceWorker.ready).active;
	} catch {
		return null;
	}
}
function ri() {
	return navigator?.serviceWorker?.controller || null;
}
function ii() {
	return ti() ? self : null;
}
function ai(e, t) {
	return e.transaction([Y], t ? "readwrite" : "readonly").objectStore(Y);
}
function oi() {
	return new X(indexedDB.deleteDatabase(Ja)).toPromise();
}
function si() {
	let e = indexedDB.open(Ja, Ya);
	return new Promise((t, n) => {
		e.addEventListener("error", () => {
			n(e.error);
		}), e.addEventListener("upgradeneeded", () => {
			let t = e.result;
			try {
				t.createObjectStore(Y, { keyPath: Xa });
			} catch (e) {
				n(e);
			}
		}), e.addEventListener("success", async () => {
			let n = e.result;
			n.objectStoreNames.contains(Y) ? t(n) : (n.close(), await oi(), t(await si()));
		});
	});
}
async function ci(e, t, n) {
	return new X(ai(e, !0).put({
		[Xa]: t,
		value: n
	})).toPromise();
}
async function li(e, t) {
	let n = await new X(ai(e, !1).get(t)).toPromise();
	return n === void 0 ? null : n.value;
}
function di(e, t) {
	return new X(ai(e, !0).delete(t)).toPromise();
}
function fi(e, t) {
	return L(e, "POST", "/v2/accounts/mfaSignIn:start", I(e, t));
}
function pi(e, t) {
	return L(e, "POST", "/v2/accounts/mfaSignIn:finalize", I(e, t));
}
function mi(e, t) {
	return L(e, "POST", "/v2/accounts/mfaSignIn:finalize", I(e, t));
}
async function hi(e, t, n) {
	if (!e._getRecaptchaConfig()) try {
		await _r(e);
	} catch {
		console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.");
	}
	try {
		let r;
		if (r = typeof t == "string" ? { phoneNumber: t } : t, "session" in r) {
			let t = r.session;
			if ("phoneNumber" in r) return N(t.type === "enroll", e, "internal-error"), (await gr(e, {
				idToken: t.credential,
				phoneEnrollmentInfo: {
					phoneNumber: r.phoneNumber,
					clientType: "CLIENT_TYPE_WEB"
				}
			}, "mfaSmsEnrollment", async (e, t) => t.phoneEnrollmentInfo.captchaResponse === q ? (N(n?.type === to, e, "argument-error"), Kr(e, await gi(e, t, n))) : Kr(e, t), "PHONE_PROVIDER").catch((e) => Promise.reject(e))).phoneSessionInfo.sessionInfo;
			{
				N(t.type === "signin", e, "internal-error");
				let i = r.multiFactorHint?.uid || r.multiFactorUid;
				return N(i, e, "missing-multi-factor-info"), (await gr(e, {
					mfaPendingCredential: t.credential,
					mfaEnrollmentId: i,
					phoneSignInInfo: { clientType: "CLIENT_TYPE_WEB" }
				}, "mfaSmsSignIn", async (e, t) => t.phoneSignInInfo.captchaResponse === q ? (N(n?.type === to, e, "argument-error"), fi(e, await gi(e, t, n))) : fi(e, t), "PHONE_PROVIDER").catch((e) => Promise.reject(e))).phoneResponseInfo.sessionInfo;
			}
		} else return (await gr(e, {
			phoneNumber: r.phoneNumber,
			clientType: "CLIENT_TYPE_WEB"
		}, "sendVerificationCode", async (e, t) => t.captchaResponse === q ? (N(n?.type === to, e, "argument-error"), kr(e, await gi(e, t, n))) : kr(e, t), "PHONE_PROVIDER").catch((e) => Promise.reject(e))).sessionInfo;
	} finally {
		n?._reset();
	}
}
async function gi(e, t, n) {
	N(n.type === to, e, "argument-error");
	let r = await n.verify();
	N(typeof r == "string", e, "argument-error");
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
function _i(e, t) {
	return t ? B(t) : (N(e._popupRedirectResolver, e, "argument-error"), e._popupRedirectResolver);
}
function vi(e) {
	return zr(e.auth, new ro(e), e.bypassAuthState);
}
function yi(e) {
	let { auth: t, user: n } = e;
	return N(n, t, "internal-error"), Rr(n, new ro(e), e.bypassAuthState);
}
async function bi(e) {
	let { auth: t, user: n } = e;
	return N(n, t, "internal-error"), Lr(n, new ro(e), e.bypassAuthState);
}
async function xi(e, t, n) {
	if (w(e.app)) return Promise.reject(j(e, "operation-not-supported-in-this-environment"));
	let r = V(e);
	return bn(e, t, ka), new oo(r, "signInViaPopup", t, _i(r, n)).executeNotNull();
}
async function Si(e, t) {
	let n = Ei(t), r = Ti(e);
	if (!await r._isAvailable()) return !1;
	let i = await r._get(n) === "true";
	return await r._remove(n), i;
}
async function Ci(e, t) {
	return Ti(e)._set(Ei(t), "true");
}
function wi(e, t) {
	co.set(e._key(), t);
}
function Ti(e) {
	return B(e._redirectPersistence);
}
function Ei(e) {
	return Yn(so, e.config.apiKey, e.name);
}
function Di(e, t, n) {
	return Oi(e, t, n);
}
async function Oi(e, t, n) {
	if (w(e.app)) return Promise.reject(M(e));
	let r = V(e);
	bn(e, t, ka), await r._initializationPromise;
	let i = _i(r, n);
	return await Ci(i, r), i._openRedirect(r, t, "signInViaRedirect");
}
async function ki(e, t, n = !1) {
	if (w(e.app)) return Promise.reject(M(e));
	let r = V(e), i = await new lo(r, _i(r, t), n).execute();
	return i && !n && (delete i.user._redirectEventId, await r._persistUserIfCurrent(i.user), await r._setRedirectUser(null, t)), i;
}
function Ai(e) {
	return [
		e.type,
		e.eventId,
		e.sessionId,
		e.tenantId
	].filter((e) => e).join("-");
}
function ji({ type: e, error: t }) {
	return e === "unknown" && t?.code === "auth/no-auth-event";
}
function Mi(e) {
	switch (e.type) {
		case "signInViaRedirect":
		case "linkViaRedirect":
		case "reauthViaRedirect": return !0;
		case "unknown": return ji(e);
		default: return !1;
	}
}
async function Ni(e, t = {}) {
	return L(e, "GET", "/v1/projects", t);
}
async function Pi(e) {
	if (e.config.emulator) return;
	let { authorizedDomains: t } = await Ni(e);
	for (let e of t) try {
		if (Fi(e)) return;
	} catch {}
	A(e, "unauthorized-domain");
}
function Fi(e) {
	let t = Sn(), { protocol: n, hostname: r } = new URL(t);
	if (e.startsWith("chrome-extension://")) {
		let i = new URL(e);
		return i.hostname === "" && r === "" ? n === "chrome-extension:" && e.replace("chrome-extension://", "") === t.replace("chrome-extension://", "") : n === "chrome-extension:" && i.hostname === r;
	}
	if (!mo.test(n)) return !1;
	if (po.test(e)) return r === e;
	let i = e.replace(/\./g, "\\.");
	return RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
}
function Ii() {
	let e = U().___jsl;
	if (e?.H) {
		for (let t of Object.keys(e.H)) if (e.H[t].r = e.H[t].r || [], e.H[t].L = e.H[t].L || [], e.H[t].r = [...e.H[t].L], e.CP) for (let t = 0; t < e.CP.length; t++) e.CP[t] = null;
	}
}
function Li(e) {
	return new Promise((t, n) => {
		function r() {
			Ii(), gapi.load("gapi.iframes", {
				callback: () => {
					t(gapi.iframes.getContext());
				},
				ontimeout: () => {
					Ii(), n(j(e, "network-request-failed"));
				},
				timeout: ho.get()
			});
		}
		if (U().gapi?.iframes?.Iframe) t(gapi.iframes.getContext());
		else if (U().gapi?.load) r();
		else {
			let t = mr("iframefcb");
			return U()[t] = () => {
				gapi.load ? r() : n(j(e, "network-request-failed"));
			}, dr(`${pr()}?onload=${t}`).catch((e) => n(e));
		}
	}).catch((e) => {
		throw go = null, e;
	});
}
function Ri(e) {
	return go ||= Li(e), go;
}
function zi(e) {
	let t = e.config;
	N(t.authDomain, e, "auth-domain-config-required");
	let n = t.emulator ? Dn(t, yo) : `https://${e.config.authDomain}/${vo}`, r = {
		apiKey: t.apiKey,
		appName: e.name,
		v: O
	}, i = xo.get(e.config.apiHost);
	i && (r.eid = i);
	let a = e._getFrameworks();
	return a.length && (r.fw = a.join(",")), `${n}?${h(r).slice(1)}`;
}
async function Bi(e) {
	let t = await Ri(e), n = U().gapi;
	return N(n, e, "internal-error"), t.open({
		where: document.body,
		url: zi(e),
		messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
		attributes: bo,
		dontclear: !0
	}, (t) => new Promise(async (n, r) => {
		await t.restyle({ setHideOnLeave: !1 });
		let i = j(e, "network-request-failed"), a = U().setTimeout(() => {
			r(i);
		}, _o.get());
		function o() {
			U().clearTimeout(a), n(t);
		}
		t.ping(o).then(o, () => {
			r(i);
		});
	}));
}
function Vi(e, t, n, r = Co, i = wo) {
	let o = Math.max((window.screen.availHeight - i) / 2, 0).toString(), s = Math.max((window.screen.availWidth - r) / 2, 0).toString(), c = "", l = {
		...So,
		width: r.toString(),
		height: i.toString(),
		top: o,
		left: s
	}, u = a().toLowerCase();
	n && (c = $n(u) ? To : n), Zn(u) && (t ||= Eo, l.scrollbars = "yes");
	let d = Object.entries(l).reduce((e, [t, n]) => `${e}${t}=${n},`, "");
	if (ar(u) && c !== "_self") return Hi(t || "", c), new Do(null);
	let f = window.open(t || "", c, d);
	N(f, e, "popup-blocked");
	try {
		f.focus();
	} catch {}
	return new Do(f);
}
function Hi(e, t) {
	let n = document.createElement("a");
	n.href = e, n.target = t;
	let r = document.createEvent("MouseEvent");
	r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), n.dispatchEvent(r);
}
async function Ui(e, t, n, r, i, a) {
	N(e.config.authDomain, e, "auth-domain-config-required"), N(e.config.apiKey, e, "invalid-api-key");
	let o = {
		apiKey: e.config.apiKey,
		appName: e.name,
		authType: n,
		redirectUrl: r,
		v: O,
		eventId: i
	};
	if (t instanceof ka) {
		t.setDefaultLanguage(e.languageCode), o.providerId = t.providerId || "", p(t.getCustomParameters()) || (o.customParameters = JSON.stringify(t.getCustomParameters()));
		for (let [e, t] of Object.entries(a || {})) o[e] = t;
	}
	if (t instanceof J) {
		let e = t.getScopes().filter((e) => e !== "");
		e.length > 0 && (o.scopes = e.join(","));
	}
	e.tenantId && (o.tid = e.tenantId);
	let s = o;
	for (let e of Object.keys(s)) s[e] === void 0 && delete s[e];
	let c = await e._getAppCheckToken(), l = c ? `#${Ao}=${encodeURIComponent(c)}` : "";
	return `${Wi(e)}?${h(s).slice(1)}${l}`;
}
function Wi({ config: e }) {
	return e.emulator ? Dn(e, ko) : `https://${e.authDomain}/${Oo}`;
}
function Gi(e) {
	return e === void 0 || e?.length === 0;
}
function Ki(e) {
	switch (e) {
		case "Node": return "node";
		case "ReactNative": return "rn";
		case "Worker": return "webworker";
		case "Cordova": return "cordova";
		case "WebExtension": return "web-extension";
		default: return;
	}
}
function qi(e) {
	dt(new b("auth", (t, { options: n }) => {
		let r = t.getProvider("app").getImmediate(), i = t.getProvider("heartbeat"), a = t.getProvider("app-check-internal"), { apiKey: o, authDomain: s } = r.options;
		N(o && !o.includes(":"), "invalid-api-key", { appName: r.name });
		let c = new ma(r, i, a, {
			apiKey: o,
			authDomain: s,
			clientPlatform: e,
			apiHost: "identitytoolkit.googleapis.com",
			tokenApiHost: "securetoken.googleapis.com",
			apiScheme: "https",
			sdkClientVersion: cr(e)
		});
		return yr(c, n), c;
	}, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e, t, n) => {
		e.getProvider("auth-internal").initialize();
	})), dt(new b("auth-internal", (e) => ((e) => new Ho(e))(V(e.getProvider("auth").getImmediate())), "PRIVATE").setInstantiationMode("EXPLICIT")), T(Bo, Vo, Ki(e)), T(Bo, Vo, "esm2020");
}
function Ji(e = mt()) {
	let t = ft(e, "auth");
	if (t.isInitialized()) return t.getImmediate();
	let n = vr(e, {
		popupRedirectResolver: No,
		persistence: [
			eo,
			Va,
			Ga
		]
	}), r = xe("authTokenSyncURL");
	if (r && typeof isSecureContext == "boolean" && isSecureContext) {
		let e = new URL(r, location.origin);
		if (location.origin === e.origin) {
			let t = Go(e.toString());
			Wr(n, t, () => t(n.currentUser)), Ur(n, (e) => t(e));
		}
	}
	let i = ye("auth");
	return i && br(n, `http://${i}`), n;
}
function Yi() {
	return document.getElementsByTagName("head")?.[0] ?? document;
}
var Xi, Zi, W, G, Qi, $i, ea, ta, na, ra, ia, aa, oa, K, sa, ca, la, ua, da, fa, pa, ma, ha, ga, _a, va, ya, q, ba, xa, Sa, Ca, wa, Ta, Ea, Da, Oa, ka, J, Aa, ja, Ma, Na, Pa, Fa, Ia, La, Ra, za, Ba, Va, Ha, Ua, Wa, Ga, Ka, qa, Ja, Ya, Y, Xa, X, Za, Qa, $a, eo, to, no, ro, io, ao, oo, so, co, lo, uo, fo, po, mo, ho, go, _o, vo, yo, bo, xo, So, Co, wo, To, Eo, Do, Oo, ko, Ao, jo, Mo, No, Po, Fo, Io, Lo, Ro, zo, Bo, Vo, Ho, Uo, Wo, Go, Ko = e((() => {
	mn(), Ee(), Re(), je(), Xi = gn, Zi = new y("auth", "Firebase", gn()), W = new Le("@firebase/auth"), G = class {
		constructor(e, t) {
			this.shortDelay = e, this.longDelay = t, F(t > e, "Short delay should be less than long delay!"), this.isMobile = o() || l();
		}
		get() {
			return Tn() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
		}
	}, Qi = class {
		static initialize(e, t, n) {
			this.fetchImpl = e, t && (this.headersImpl = t), n && (this.responseImpl = n);
		}
		static fetch() {
			if (this.fetchImpl) return this.fetchImpl;
			if (typeof self < "u" && "fetch" in self) return self.fetch;
			if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
			if (typeof fetch < "u") return fetch;
			P("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
		}
		static headers() {
			if (this.headersImpl) return this.headersImpl;
			if (typeof self < "u" && "Headers" in self) return self.Headers;
			if (typeof globalThis < "u" && globalThis.Headers) return globalThis.Headers;
			if (typeof Headers < "u") return Headers;
			P("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
		}
		static response() {
			if (this.responseImpl) return this.responseImpl;
			if (typeof self < "u" && "Response" in self) return self.Response;
			if (typeof globalThis < "u" && globalThis.Response) return globalThis.Response;
			if (typeof Response < "u") return Response;
			P("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
		}
	}, $i = {
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
	}, ea = [
		"/v1/accounts:signInWithCustomToken",
		"/v1/accounts:signInWithEmailLink",
		"/v1/accounts:signInWithIdp",
		"/v1/accounts:signInWithPassword",
		"/v1/accounts:signInWithPhoneNumber",
		"/v1/token"
	], ta = new G(3e4, 6e4), na = class {
		clearNetworkTimeout() {
			clearTimeout(this.timer);
		}
		constructor(e) {
			this.auth = e, this.timer = null, this.promise = new Promise((e, t) => {
				this.timer = setTimeout(() => t(j(this.auth, "network-request-failed")), ta.get());
			});
		}
	}, ra = class {
		constructor(e) {
			if (this.siteKey = "", this.recaptchaEnforcementState = [], e.recaptchaKey === void 0) throw Error("recaptchaKey undefined");
			this.siteKey = e.recaptchaKey.split("/")[3], this.recaptchaEnforcementState = e.recaptchaEnforcementState;
		}
		getProviderEnforcementState(e) {
			if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0) return null;
			for (let t of this.recaptchaEnforcementState) if (t.provider && t.provider === e) return An(t.enforcementState);
			return null;
		}
		isProviderEnabled(e) {
			return this.getProviderEnforcementState(e) === "ENFORCE" || this.getProviderEnforcementState(e) === "AUDIT";
		}
		isAnyProviderEnabled() {
			return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER") || this.isProviderEnabled("PHONE_PROVIDER");
		}
	}, ia = class {
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
	}, aa = class {
		constructor(e, t) {
			this.createdAt = e, this.lastLoginAt = t, this._initializeTime();
		}
		_initializeTime() {
			this.lastSignInTime = In(this.lastLoginAt), this.creationTime = In(this.createdAt);
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
	}, oa = class e {
		constructor() {
			this.refreshToken = null, this.accessToken = null, this.expirationTime = null;
		}
		get isExpired() {
			return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
		}
		updateFromServerResponse(e) {
			N(e.idToken, "internal-error"), N(e.idToken !== void 0, "internal-error"), N(e.refreshToken !== void 0, "internal-error");
			let t = "expiresIn" in e && e.expiresIn !== void 0 ? Number(e.expiresIn) : Bn(e.idToken);
			this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
		}
		updateFromIdToken(e) {
			N(e.length !== 0, "internal-error");
			let t = Bn(e);
			this.updateTokensAndExpiration(e, null, t);
		}
		async getToken(e, t = !1) {
			return !t && this.accessToken && !this.isExpired ? this.accessToken : (N(this.refreshToken, e, "user-token-expired"), this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null);
		}
		clearRefreshToken() {
			this.refreshToken = null;
		}
		async refresh(e, t) {
			let { accessToken: n, refreshToken: r, expiresIn: i } = await qn(e, t);
			this.updateTokensAndExpiration(n, r, Number(i));
		}
		updateTokensAndExpiration(e, t, n) {
			this.refreshToken = t || null, this.accessToken = e || null, this.expirationTime = Date.now() + n * 1e3;
		}
		static fromJSON(t, n) {
			let { refreshToken: r, accessToken: i, expirationTime: a } = n, o = new e();
			return r && (N(typeof r == "string", "internal-error", { appName: t }), o.refreshToken = r), i && (N(typeof i == "string", "internal-error", { appName: t }), o.accessToken = i), a && (N(typeof a == "number", "internal-error", { appName: t }), o.expirationTime = a), o;
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
			return P("not implemented");
		}
	}, K = class e {
		constructor({ uid: e, auth: t, stsTokenManager: n, ...r }) {
			this.providerId = "firebase", this.proactiveRefresh = new ia(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = e, this.auth = t, this.stsTokenManager = n, this.accessToken = n.accessToken, this.displayName = r.displayName || null, this.email = r.email || null, this.emailVerified = r.emailVerified || !1, this.phoneNumber = r.phoneNumber || null, this.photoURL = r.photoURL || null, this.isAnonymous = r.isAnonymous || !1, this.tenantId = r.tenantId || null, this.providerData = r.providerData ? [...r.providerData] : [], this.metadata = new aa(r.createdAt || void 0, r.lastLoginAt || void 0);
		}
		async getIdToken(e) {
			let t = await Vn(this, this.stsTokenManager.getToken(this.auth, e));
			return N(t, this.auth, "internal-error"), this.accessToken !== t && (this.accessToken = t, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), t;
		}
		getIdTokenResult(e) {
			return Ln(this, e);
		}
		reload() {
			return Wn(this);
		}
		_assign(e) {
			this !== e && (N(this.uid === e.uid, this.auth, "internal-error"), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map((e) => ({ ...e })), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager));
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
			N(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = e, this.reloadUserInfo &&= (this._notifyReloadListener(this.reloadUserInfo), null);
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
			e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), n = !0), t && await Un(this), await this.auth._persistUserIfCurrent(this), n && this.auth._notifyListenersIfCurrent(this);
		}
		async delete() {
			if (w(this.auth.app)) return Promise.reject(M(this.auth));
			let e = await this.getIdToken();
			return await Vn(this, Pn(this.auth, { idToken: e })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
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
			let r = n.displayName ?? void 0, i = n.email ?? void 0, a = n.phoneNumber ?? void 0, o = n.photoURL ?? void 0, s = n.tenantId ?? void 0, c = n._redirectEventId ?? void 0, l = n.createdAt ?? void 0, u = n.lastLoginAt ?? void 0, { uid: d, emailVerified: f, isAnonymous: ee, providerData: p, stsTokenManager: m } = n;
			N(d && m, t, "internal-error");
			let te = oa.fromJSON(this.name, m);
			N(typeof d == "string", t, "internal-error"), z(r, t.name), z(i, t.name), N(typeof f == "boolean", t, "internal-error"), N(typeof ee == "boolean", t, "internal-error"), z(a, t.name), z(o, t.name), z(s, t.name), z(c, t.name), z(l, t.name), z(u, t.name);
			let h = new e({
				uid: d,
				auth: t,
				email: i,
				emailVerified: f,
				displayName: r,
				isAnonymous: ee,
				photoURL: o,
				phoneNumber: a,
				tenantId: s,
				stsTokenManager: te,
				createdAt: l,
				lastLoginAt: u
			});
			return p && Array.isArray(p) && (h.providerData = p.map((e) => ({ ...e }))), c && (h._redirectEventId = c), h;
		}
		static async _fromIdTokenResponse(t, n, r = !1) {
			let i = new oa();
			i.updateFromServerResponse(n);
			let a = new e({
				uid: n.localId,
				auth: t,
				stsTokenManager: i,
				isAnonymous: r
			});
			return await Un(a), a;
		}
		static async _fromGetAccountInfoResponse(t, n, r) {
			let i = n.users[0];
			N(i.localId !== void 0, "internal-error");
			let a = i.providerUserInfo === void 0 ? [] : Kn(i.providerUserInfo), o = !(i.email && i.passwordHash) && !a?.length, s = new oa();
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
				metadata: new aa(i.createdAt, i.lastLoginAt),
				isAnonymous: !(i.email && i.passwordHash) && !a?.length
			};
			return Object.assign(c, l), c;
		}
	}, sa = /* @__PURE__ */ new Map(), ca = class {
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
	}, ca.type = "NONE", la = ca, ua = class e {
		constructor(e, t, n) {
			this.persistence = e, this.auth = t, this.userKey = n;
			let { config: r, name: i } = this.auth;
			this.fullUserKey = Yn(this.userKey, r.apiKey, i), this.fullPersistenceKey = Yn("persistence", r.apiKey, i), this.boundEventHandler = t._onStorageEvent.bind(t), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
		}
		setCurrentUser(e) {
			return this.persistence._set(this.fullUserKey, e.toJSON());
		}
		async getCurrentUser() {
			let e = await this.persistence._get(this.fullUserKey);
			if (!e) return null;
			if (typeof e == "string") {
				let t = await Fn(this.auth, { idToken: e }).catch(() => void 0);
				return t ? K._fromGetAccountInfoResponse(this.auth, t, e) : null;
			}
			return K._fromJSON(this.auth, e);
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
			if (!n.length) return new e(B(la), t, r);
			let i = (await Promise.all(n.map(async (e) => {
				if (await e._isAvailable()) return e;
			}))).filter((e) => e), a = i[0] || B(la), o = Yn(r, t.config.apiKey, t.name), s = null;
			for (let e of n) try {
				let n = await e._get(o);
				if (n) {
					let r;
					if (typeof n == "string") {
						let e = await Fn(t, { idToken: n }).catch(() => void 0);
						if (!e) break;
						r = await K._fromGetAccountInfoResponse(t, e, n);
					} else r = K._fromJSON(t, n);
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
	}, da = class {
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
	}, fa = 6, pa = class {
		constructor(e) {
			let t = e.customStrengthOptions;
			this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = t.minPasswordLength ?? fa, t.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = t.maxPasswordLength), t.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = t.containsLowercaseCharacter), t.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = t.containsUppercaseCharacter), t.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = t.containsNumericCharacter), t.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = t.containsNonAlphanumericCharacter), this.enforcementState = e.enforcementState, this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = e.allowedNonAlphanumericCharacters?.join("") ?? "", this.forceUpgradeOnSignin = e.forceUpgradeOnSignin ?? !1, this.schemaVersion = e.schemaVersion;
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
	}, ma = class {
		constructor(e, t, n, r) {
			this.app = e, this.heartbeatServiceProvider = t, this.appCheckServiceProvider = n, this.config = r, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new ha(this), this.idTokenSubscription = new ha(this), this.beforeStateQueue = new da(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = Zi, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this._resolvePersistenceManagerAvailable = void 0, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = r.sdkClientVersion, this._persistenceManagerAvailable = new Promise((e) => this._resolvePersistenceManagerAvailable = e);
		}
		_initializeWithPersistence(e, t) {
			return t && (this._popupRedirectResolver = B(t)), this._initializationPromise = this.queue(async () => {
				if (!this._deleted && (this.persistenceManager = await ua.create(this, e), this._resolvePersistenceManagerAvailable?.(), !this._deleted)) {
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
				let t = await Fn(this, { idToken: e }), n = await K._fromGetAccountInfoResponse(this, t, e);
				await this.directlySetCurrentUser(n);
			} catch (e) {
				console.warn("FirebaseServerApp could not login user with provided authIdToken: ", e), await this.directlySetCurrentUser(null);
			}
		}
		async initializeCurrentUser(e) {
			if (w(this.app)) {
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
			return N(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === n._redirectEventId ? this.directlySetCurrentUser(n) : this.reloadAndSetCurrentUserOrClear(n);
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
				await Un(e);
			} catch (e) {
				if (e?.code !== "auth/network-request-failed") return this.directlySetCurrentUser(null);
			}
			return this.directlySetCurrentUser(e);
		}
		useDeviceLanguage() {
			this.languageCode = En();
		}
		async _delete() {
			this._deleted = !0;
		}
		async updateCurrentUser(e) {
			if (w(this.app)) return Promise.reject(M(this));
			let t = e ? _(e) : null;
			return t && N(t.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(t && t._clone(this));
		}
		async _updateCurrentUser(e, t = !1) {
			if (!this._deleted) return e && N(this.tenantId === e.tenantId, this, "tenant-id-mismatch"), t || await this.beforeStateQueue.runMiddleware(e), this.queue(async () => {
				await this.directlySetCurrentUser(e), this.notifyAuthListeners();
			});
		}
		async signOut() {
			return w(this.app) ? Promise.reject(M(this)) : (await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0));
		}
		setPersistence(e) {
			return w(this.app) ? Promise.reject(M(this)) : this.queue(async () => {
				await this.assertedPersistence.setPersistence(B(e));
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
			let e = new pa(await lr(this));
			this.tenantId === null ? this._projectPasswordPolicy = e : this._tenantPasswordPolicies[this.tenantId] = e;
		}
		_getPersistenceType() {
			return this.assertedPersistence.persistence.type;
		}
		_getPersistence() {
			return this.assertedPersistence.persistence;
		}
		_updateErrorMap(e) {
			this._errorFactory = new y("auth", "Firebase", e());
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
				this.tenantId != null && (t.tenantId = this.tenantId), await Jn(this, t);
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
				let t = e && B(e) || this._popupRedirectResolver;
				N(t, this, "argument-error"), this.redirectPersistenceManager = await ua.create(this, [B(t._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
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
			if (N(o, this, "internal-error"), o.then(() => {
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
			return N(this.persistenceManager, this, "internal-error"), this.persistenceManager;
		}
		_logFramework(e) {
			!e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = cr(this.config.clientPlatform, this._getFrameworks()));
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
			if (w(this.app) && this.app.settings.appCheckToken) return this.app.settings.appCheckToken;
			let e = await this.appCheckServiceProvider.getImmediate({ optional: !0 })?.getToken();
			return e?.error && _n(`Error while retrieving App Check token: ${e.error}`), e?.token;
		}
	}, ha = class {
		constructor(e) {
			this.auth = e, this.observer = null, this.addObserver = re((e) => this.observer = e);
		}
		get next() {
			return N(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer);
		}
	}, ga = {
		async loadJS() {
			throw Error("Unable to load external scripts");
		},
		recaptchaV2Script: "",
		recaptchaEnterpriseScript: "",
		gapiScript: ""
	}, _a = class {
		constructor() {
			this.enterprise = new va();
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
	}, va = class {
		ready(e) {
			e();
		}
		execute(e, t) {
			return Promise.resolve("token");
		}
		render(e, t) {
			return "";
		}
	}, ya = "recaptcha-enterprise", q = "NO_RECAPTCHA", ba = class {
		constructor(e) {
			this.type = ya, this.auth = V(e);
		}
		async verify(e = "verify", t = !1) {
			async function n(e) {
				if (!t) {
					if (e.tenantId == null && e._agentRecaptchaConfig != null) return e._agentRecaptchaConfig.siteKey;
					if (e.tenantId != null && e._tenantRecaptchaConfigs[e.tenantId] !== void 0) return e._tenantRecaptchaConfigs[e.tenantId].siteKey;
				}
				return new Promise(async (t, n) => {
					Nn(e, {
						clientType: "CLIENT_TYPE_WEB",
						version: "RECAPTCHA_ENTERPRISE"
					}).then((r) => {
						if (r.recaptchaKey === void 0) n(/* @__PURE__ */ Error("recaptcha Enterprise site key undefined"));
						else {
							let n = new ra(r);
							return e.tenantId == null ? e._agentRecaptchaConfig = n : e._tenantRecaptchaConfigs[e.tenantId] = n, t(n.siteKey);
						}
					}).catch((e) => {
						n(e);
					});
				});
			}
			function r(t, n, r) {
				let i = window.grecaptcha;
				Mn(i) ? i.enterprise.ready(() => {
					i.enterprise.execute(t, { action: e }).then((e) => {
						n(e);
					}).catch(() => {
						n(q);
					});
				}) : r(Error("No reCAPTCHA enterprise script loaded."));
			}
			return this.auth.settings.appVerificationDisabledForTesting ? new _a().execute("siteKey", { action: "verify" }) : new Promise((e, i) => {
				n(this.auth).then((n) => {
					if (!t && Mn(window.grecaptcha)) r(n, e, i);
					else {
						if (typeof window > "u") {
							i(/* @__PURE__ */ Error("RecaptchaVerifier is only supported in browser"));
							return;
						}
						let t = fr();
						t.length !== 0 && (t += n), dr(t).then(() => {
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
	}, xa = class {
		constructor(e, t) {
			this.providerId = e, this.signInMethod = t;
		}
		toJSON() {
			return P("not implemented");
		}
		_getIdTokenResponse(e) {
			return P("not implemented");
		}
		_linkToIdToken(e, t) {
			return P("not implemented");
		}
		_getReauthenticationResolver(e) {
			return P("not implemented");
		}
	}, Sa = class e extends xa {
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
				case "password": return gr(e, {
					returnSecureToken: !0,
					email: this._email,
					password: this._password,
					clientType: "CLIENT_TYPE_WEB"
				}, "signInWithPassword", Er, "EMAIL_PASSWORD_PROVIDER");
				case "emailLink": return Dr(e, {
					email: this._email,
					oobCode: this._password
				});
				default: A(e, "internal-error");
			}
		}
		async _linkToIdToken(e, t) {
			switch (this.signInMethod) {
				case "password": return gr(e, {
					idToken: t,
					returnSecureToken: !0,
					email: this._email,
					password: this._password,
					clientType: "CLIENT_TYPE_WEB"
				}, "signUpPassword", Tr, "EMAIL_PASSWORD_PROVIDER");
				case "emailLink": return Or(e, {
					idToken: t,
					email: this._email,
					oobCode: this._password
				});
				default: A(e, "internal-error");
			}
		}
		_getReauthenticationResolver(e) {
			return this._getIdTokenResponse(e);
		}
	}, Ca = "http://localhost", wa = class e extends xa {
		constructor() {
			super(...arguments), this.pendingToken = null;
		}
		static _fromParams(t) {
			let n = new e(t.providerId, t.signInMethod);
			return t.idToken || t.accessToken ? (t.idToken && (n.idToken = t.idToken), t.accessToken && (n.accessToken = t.accessToken), t.nonce && !t.pendingToken && (n.nonce = t.nonce), t.pendingToken && (n.pendingToken = t.pendingToken)) : t.oauthToken && t.oauthTokenSecret ? (n.accessToken = t.oauthToken, n.secret = t.oauthTokenSecret) : A("argument-error"), n;
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
			return H(e, this.buildRequest());
		}
		_linkToIdToken(e, t) {
			let n = this.buildRequest();
			return n.idToken = t, H(e, n);
		}
		_getReauthenticationResolver(e) {
			let t = this.buildRequest();
			return t.autoCreate = !1, H(e, t);
		}
		buildRequest() {
			let e = {
				requestUri: Ca,
				returnSecureToken: !0
			};
			if (this.pendingToken) e.pendingToken = this.pendingToken;
			else {
				let t = {};
				this.idToken && (t.id_token = this.idToken), this.accessToken && (t.access_token = this.accessToken), this.secret && (t.oauth_token_secret = this.secret), t.providerId = this.providerId, this.nonce && !this.pendingToken && (t.nonce = this.nonce), e.postBody = h(t);
			}
			return e;
		}
	}, Ta = { USER_NOT_FOUND: "user-not-found" }, Ea = class e extends xa {
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
			return Ar(e, this._makeVerificationRequest());
		}
		_linkToIdToken(e, t) {
			return jr(e, {
				idToken: t,
				...this._makeVerificationRequest()
			});
		}
		_getReauthenticationResolver(e) {
			return Mr(e, this._makeVerificationRequest());
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
	}, Da = class e {
		constructor(e) {
			let t = g(ne(e)), n = t.apiKey ?? null, r = t.oobCode ?? null, i = Nr(t.mode ?? null);
			N(n && r && i, "argument-error"), this.apiKey = n, this.operation = i, this.code = r, this.continueUrl = t.continueUrl ?? null, this.languageCode = t.lang ?? null, this.tenantId = t.tenantId ?? null;
		}
		static parseLink(t) {
			let n = Pr(t);
			try {
				return new e(n);
			} catch {
				return null;
			}
		}
	}, Oa = class e {
		constructor() {
			this.providerId = e.PROVIDER_ID;
		}
		static credential(e, t) {
			return Sa._fromEmailAndPassword(e, t);
		}
		static credentialWithLink(e, t) {
			let n = Da.parseLink(t);
			return N(n, "argument-error"), Sa._fromEmailAndCode(e, n.code, n.tenantId);
		}
	}, Oa.PROVIDER_ID = "password", Oa.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", Oa.EMAIL_LINK_SIGN_IN_METHOD = "emailLink", ka = class {
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
	}, J = class extends ka {
		constructor() {
			super(...arguments), this.scopes = [];
		}
		addScope(e) {
			return this.scopes.includes(e) || this.scopes.push(e), this;
		}
		getScopes() {
			return [...this.scopes];
		}
	}, Aa = class e extends J {
		constructor() {
			super("facebook.com");
		}
		static credential(t) {
			return wa._fromParams({
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
	}, Aa.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Aa.PROVIDER_ID = "facebook.com", ja = class e extends J {
		constructor() {
			super("google.com"), this.addScope("profile");
		}
		static credential(t, n) {
			return wa._fromParams({
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
	}, ja.GOOGLE_SIGN_IN_METHOD = "google.com", ja.PROVIDER_ID = "google.com", Ma = class e extends J {
		constructor() {
			super("github.com");
		}
		static credential(t) {
			return wa._fromParams({
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
	}, Ma.GITHUB_SIGN_IN_METHOD = "github.com", Ma.PROVIDER_ID = "github.com", Na = class e extends J {
		constructor() {
			super("twitter.com");
		}
		static credential(t, n) {
			return wa._fromParams({
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
	}, Na.TWITTER_SIGN_IN_METHOD = "twitter.com", Na.PROVIDER_ID = "twitter.com", Pa = class e {
		constructor(e) {
			this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType;
		}
		static async _fromIdTokenResponse(t, n, r, i = !1) {
			return new e({
				user: await K._fromIdTokenResponse(t, r, i),
				providerId: Fr(r),
				_tokenResponse: r,
				operationType: n
			});
		}
		static async _forOperation(t, n, r) {
			return await t._updateTokensIfNecessary(r, !0), new e({
				user: t,
				providerId: Fr(r),
				_tokenResponse: r,
				operationType: n
			});
		}
	}, Fa = class e extends v {
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
	}, Ia = "__sak", La = class {
		constructor(e, t) {
			this.storageRetriever = e, this.type = t;
		}
		_isAvailable() {
			try {
				return this.storage ? (this.storage.setItem(Ia, "1"), this.storage.removeItem(Ia), Promise.resolve(!0)) : Promise.resolve(!1);
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
	}, Ra = 1e3, za = 10, Ba = class extends La {
		constructor() {
			super(() => window.localStorage, "LOCAL"), this.boundEventHandler = (e, t) => this.onStorageEvent(e, t), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.fallbackToPolling = sr(), this._shouldAllowMigration = !0;
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
			or() && i !== e.newValue && e.newValue !== e.oldValue ? setTimeout(r, za) : r();
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
			}, Ra);
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
	}, Ba.type = "LOCAL", Va = Ba, Ha = 1e3, Ua = class {
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
			let t = Zr(e);
			return window.cookieStore ? (await window.cookieStore.get(t))?.value : Xr(t);
		}
		async _remove(e) {
			if (!this._isAvailable() || !await this._get(e)) return;
			let t = Zr(e);
			document.cookie = `${t}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`, await fetch("/__cookies__", { method: "DELETE" }).catch(() => void 0);
		}
		_addListener(e, t) {
			if (!this._isAvailable()) return;
			let n = Zr(e);
			if (window.cookieStore) {
				let e = ((e) => {
					let r = e.changed.find((e) => e.name === n);
					r && t(r.value), e.deleted.find((e) => e.name === n) && t(null);
				});
				return this.listenerUnsubscribes.set(t, () => window.cookieStore.removeEventListener("change", e)), window.cookieStore.addEventListener("change", e);
			}
			let r = Xr(n), i = setInterval(() => {
				let e = Xr(n);
				e !== r && (t(e), r = e);
			}, Ha);
			this.listenerUnsubscribes.set(t, () => clearInterval(i));
		}
		_removeListener(e, t) {
			let n = this.listenerUnsubscribes.get(t);
			n && (n(), this.listenerUnsubscribes.delete(t));
		}
	}, Ua.type = "COOKIE", Wa = class extends La {
		constructor() {
			super(() => window.sessionStorage, "SESSION");
		}
		_addListener(e, t) {}
		_removeListener(e, t) {}
	}, Wa.type = "SESSION", Ga = Wa, Ka = class e {
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
			let o = await Qr(Array.from(a).map(async (e) => e(t.origin, i)));
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
	}, Ka.receivers = [], qa = class {
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
				let c = $r("", 20);
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
	}, Ja = "firebaseLocalStorageDb", Ya = 1, Y = "firebaseLocalStorage", Xa = "fbase_key", X = class {
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
	}, Za = 800, Qa = 3, $a = class {
		constructor() {
			this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {}, () => {});
		}
		async _openDb() {
			return this.db ||= await si(), this.db;
		}
		async _withRetries(e) {
			let t = 0;
			for (;;) try {
				return await e(await this._openDb());
			} catch (e) {
				if (t++ > Qa) throw e;
				this.db &&= (this.db.close(), void 0);
			}
		}
		async initializeServiceWorkerMessaging() {
			return ti() ? this.initializeReceiver() : this.initializeSender();
		}
		async initializeReceiver() {
			this.receiver = Ka._getInstance(ii()), this.receiver._subscribe("keyChanged", async (e, t) => ({ keyProcessed: (await this._poll()).includes(t.key) })), this.receiver._subscribe("ping", async (e, t) => ["keyChanged"]);
		}
		async initializeSender() {
			if (this.activeServiceWorker = await ni(), !this.activeServiceWorker) return;
			this.sender = new qa(this.activeServiceWorker);
			let e = await this.sender._send("ping", {}, 800);
			e && e[0]?.fulfilled && e[0]?.value.includes("keyChanged") && (this.serviceWorkerReceiverAvailable = !0);
		}
		async notifyServiceWorker(e) {
			if (!(!this.sender || !this.activeServiceWorker || ri() !== this.activeServiceWorker)) try {
				await this.sender._send("keyChanged", { key: e }, this.serviceWorkerReceiverAvailable ? 800 : 50);
			} catch {}
		}
		async _isAvailable() {
			try {
				if (!indexedDB) return !1;
				let e = await si();
				return await ci(e, Ia, "1"), await di(e, Ia), !0;
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
			return this._withPendingWrite(async () => (await this._withRetries((n) => ci(n, e, t)), this.localCache[e] = t, this.notifyServiceWorker(e)));
		}
		async _get(e) {
			let t = await this._withRetries((t) => li(t, e));
			return this.localCache[e] = t, t;
		}
		async _remove(e) {
			return this._withPendingWrite(async () => (await this._withRetries((t) => di(t, e)), delete this.localCache[e], this.notifyServiceWorker(e)));
		}
		async _poll() {
			let e = await this._withRetries((e) => new X(ai(e, !1).getAll()).toPromise());
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
			this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), Za);
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
	}, $a.type = "LOCAL", eo = $a, mr("rcb"), new G(3e4, 6e4), to = "recaptcha", no = class e {
		constructor(t) {
			this.providerId = e.PROVIDER_ID, this.auth = V(t);
		}
		verifyPhoneNumber(e, t) {
			return hi(this.auth, e, _(t));
		}
		static credential(e, t) {
			return Ea._fromVerification(e, t);
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
			return t && n ? Ea._fromTokenResponse(t, n) : null;
		}
	}, no.PROVIDER_ID = "phone", no.PHONE_SIGN_IN_METHOD = "phone", ro = class extends xa {
		constructor(e) {
			super("custom", "custom"), this.params = e;
		}
		_getIdTokenResponse(e) {
			return H(e, this._buildIdpRequest());
		}
		_linkToIdToken(e, t) {
			return H(e, this._buildIdpRequest(t));
		}
		_getReauthenticationResolver(e) {
			return H(e, this._buildIdpRequest());
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
	}, io = class {
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
				case "signInViaRedirect": return vi;
				case "linkViaPopup":
				case "linkViaRedirect": return bi;
				case "reauthViaPopup":
				case "reauthViaRedirect": return yi;
				default: A(this.auth, "internal-error");
			}
		}
		resolve(e) {
			F(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp();
		}
		reject(e) {
			F(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp();
		}
		unregisterAndCleanUp() {
			this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp();
		}
	}, ao = new G(2e3, 1e4), oo = class e extends io {
		constructor(t, n, r, i, a) {
			super(t, n, i, a), this.provider = r, this.authWindow = null, this.pollId = null, e.currentPopupAction && e.currentPopupAction.cancel(), e.currentPopupAction = this;
		}
		async executeNotNull() {
			let e = await this.execute();
			return N(e, this.auth, "internal-error"), e;
		}
		async onExecution() {
			F(this.filter.length === 1, "Popup operations only handle one event");
			let e = $r();
			this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], e), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch((e) => {
				this.reject(e);
			}), this.resolver._isIframeWebStorageSupported(this.auth, (e) => {
				e || this.reject(j(this.auth, "web-storage-unsupported"));
			}), this.pollUserCancellation();
		}
		get eventId() {
			return this.authWindow?.associatedEvent || null;
		}
		cancel() {
			this.reject(j(this.auth, "cancelled-popup-request"));
		}
		cleanUp() {
			this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, e.currentPopupAction = null;
		}
		pollUserCancellation() {
			let e = () => {
				if (this.authWindow?.window?.closed) {
					this.pollId = window.setTimeout(() => {
						this.pollId = null, this.reject(j(this.auth, "popup-closed-by-user"));
					}, 8e3);
					return;
				}
				this.pollId = window.setTimeout(e, ao.get());
			};
			e();
		}
	}, oo.currentPopupAction = null, so = "pendingRedirect", co = /* @__PURE__ */ new Map(), lo = class extends io {
		constructor(e, t, n = !1) {
			super(e, [
				"signInViaRedirect",
				"linkViaRedirect",
				"reauthViaRedirect",
				"unknown"
			], t, void 0, n), this.eventId = null;
		}
		async execute() {
			let e = co.get(this.auth._key());
			if (!e) {
				try {
					let t = await Si(this.resolver, this.auth) ? await super.execute() : null;
					e = () => Promise.resolve(t);
				} catch (t) {
					e = () => Promise.reject(t);
				}
				co.set(this.auth._key(), e);
			}
			return this.bypassAuthState || co.set(this.auth._key(), () => Promise.resolve(null)), e();
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
	}, uo = 600 * 1e3, fo = class {
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
			}), this.hasHandledPotentialRedirect || !Mi(e) ? t : (this.hasHandledPotentialRedirect = !0, t ||= (this.queuedRedirectEvent = e, !0), t);
		}
		sendToConsumer(e, t) {
			if (e.error && !ji(e)) {
				let n = e.error.code?.split("auth/")[1] || "internal-error";
				t.onError(j(this.auth, n));
			} else t.onAuthEvent(e);
		}
		isEventForConsumer(e, t) {
			let n = t.eventId === null || !!e.eventId && e.eventId === t.eventId;
			return t.filter.includes(e.type) && n;
		}
		hasEventBeenHandled(e) {
			return Date.now() - this.lastProcessedEventTime >= uo && this.cachedEventUids.clear(), this.cachedEventUids.has(Ai(e));
		}
		saveEventToCache(e) {
			this.cachedEventUids.add(Ai(e)), this.lastProcessedEventTime = Date.now();
		}
	}, po = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, mo = /^https?/, ho = new G(3e4, 6e4), go = null, _o = new G(5e3, 15e3), vo = "__/auth/iframe", yo = "emulator/auth/iframe", bo = {
		style: {
			position: "absolute",
			top: "-100px",
			width: "1px",
			height: "1px"
		},
		"aria-hidden": "true",
		tabindex: "-1"
	}, xo = new Map([
		["identitytoolkit.googleapis.com", "p"],
		["staging-identitytoolkit.sandbox.googleapis.com", "s"],
		["test-identitytoolkit.sandbox.googleapis.com", "t"]
	]), So = {
		location: "yes",
		resizable: "yes",
		statusbar: "yes",
		toolbar: "no"
	}, Co = 500, wo = 600, To = "_blank", Eo = "http://localhost", Do = class {
		constructor(e) {
			this.window = e, this.associatedEvent = null;
		}
		close() {
			if (this.window) try {
				this.window.close();
			} catch {}
		}
	}, Oo = "__/auth/handler", ko = "emulator/auth/handler", Ao = "fac", jo = "webStorageSupport", Mo = class {
		constructor() {
			this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = Ga, this._completeRedirectFn = ki, this._overrideRedirectResult = wi;
		}
		async _openPopup(e, t, n, r) {
			return F(this.eventManagers[e._key()]?.manager, "_initialize() not called before _openPopup()"), Vi(e, await Ui(e, t, n, Sn(), r), $r());
		}
		async _openRedirect(e, t, n, r) {
			return await this._originValidation(e), ei(await Ui(e, t, n, Sn(), r)), new Promise(() => {});
		}
		_initialize(e) {
			let t = e._key();
			if (this.eventManagers[t]) {
				let { manager: e, promise: n } = this.eventManagers[t];
				return e ? Promise.resolve(e) : (F(n, "If manager is not set, promise should be"), n);
			}
			let n = this.initAndGetManager(e);
			return this.eventManagers[t] = { promise: n }, n.catch(() => {
				delete this.eventManagers[t];
			}), n;
		}
		async initAndGetManager(e) {
			let t = await Bi(e), n = new fo(e);
			return t.register("authEvent", (t) => (N(t?.authEvent, e, "invalid-auth-event"), { status: n.onEvent(t.authEvent) ? "ACK" : "ERROR" }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = { manager: n }, this.iframes[e._key()] = t, n;
		}
		_isIframeWebStorageSupported(e, t) {
			this.iframes[e._key()].send(jo, { type: jo }, (n) => {
				let r = n?.[0]?.[jo];
				r !== void 0 && t(!!r), A(e, "internal-error");
			}, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
		}
		_originValidation(e) {
			let t = e._key();
			return this.originValidationPromises[t] || (this.originValidationPromises[t] = Pi(e)), this.originValidationPromises[t];
		}
		get _shouldInitProactively() {
			return sr() || Qn() || ir();
		}
	}, No = Mo, Po = class {
		constructor(e) {
			this.factorId = e;
		}
		_process(e, t, n) {
			switch (t.type) {
				case "enroll": return this._finalizeEnroll(e, t.credential, n);
				case "signin": return this._finalizeSignIn(e, t.credential);
				default: return P("unexpected MultiFactorSessionType");
			}
		}
	}, Fo = class e extends Po {
		constructor(e) {
			super("phone"), this.credential = e;
		}
		static _fromCredential(t) {
			return new e(t);
		}
		_finalizeEnroll(e, t, n) {
			return qr(e, {
				idToken: t,
				displayName: n,
				phoneVerificationInfo: this.credential._makeVerificationRequest()
			});
		}
		_finalizeSignIn(e, t) {
			return pi(e, {
				mfaPendingCredential: t,
				phoneVerificationInfo: this.credential._makeVerificationRequest()
			});
		}
	}, Io = class {
		constructor() {}
		static assertion(e) {
			return Fo._fromCredential(e);
		}
	}, Io.FACTOR_ID = "phone", Lo = class {
		static assertionForEnrollment(e, t) {
			return Ro._fromSecret(e, t);
		}
		static assertionForSignIn(e, t) {
			return Ro._fromEnrollmentId(e, t);
		}
		static async generateSecret(e) {
			let t = e;
			N(t.user?.auth !== void 0, "internal-error");
			let n = await Jr(t.user.auth, {
				idToken: t.credential,
				totpEnrollmentInfo: {}
			});
			return zo._fromStartTotpMfaEnrollmentResponse(n, t.user.auth);
		}
	}, Lo.FACTOR_ID = "totp", Ro = class e extends Po {
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
			return N(this.secret !== void 0, e, "argument-error"), Yr(e, {
				idToken: t,
				displayName: n,
				totpVerificationInfo: this.secret._makeTotpVerificationInfo(this.otp)
			});
		}
		async _finalizeSignIn(e, t) {
			N(this.enrollmentId !== void 0 && this.otp !== void 0, e, "argument-error");
			let n = { verificationCode: this.otp };
			return mi(e, {
				mfaPendingCredential: t,
				mfaEnrollmentId: this.enrollmentId,
				totpVerificationInfo: n
			});
		}
	}, zo = class e {
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
			return (Gi(e) || Gi(t)) && (n = !0), n && (Gi(e) && (e = this.auth.currentUser?.email || "unknownuser"), Gi(t) && (t = this.auth.name)), `otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`;
		}
	}, Bo = "@firebase/auth", Vo = "1.12.2", Ho = class {
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
			N(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth");
		}
		updateProactiveRefresh() {
			this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh();
		}
	}, Uo = xe("authIdTokenMaxAge") || 300, Wo = null, Go = (e) => async (t) => {
		let n = t && await t.getIdTokenResult(), r = n && ((/* @__PURE__ */ new Date()).getTime() - Date.parse(n.issuedAtTime)) / 1e3;
		if (r && r > Uo) return;
		let i = n?.token;
		Wo !== i && (Wo = i, await fetch(e, {
			method: i ? "POST" : "DELETE",
			headers: i ? { Authorization: `Bearer ${i}` } : {}
		}));
	}, ur({
		loadJS(e) {
			return new Promise((t, n) => {
				let r = document.createElement("script");
				r.setAttribute("src", e), r.onload = t, r.onerror = (e) => {
					let t = j("internal-error");
					t.customData = e, n(t);
				}, r.type = "text/javascript", r.charset = "UTF-8", Yi().appendChild(r);
			});
		},
		gapiScript: "https://apis.google.com/js/api.js",
		recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
		recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
	}), qi("Browser");
})), qo = e((() => {
	Ko(), mn(), Re();
})), Jo = e((() => {
	qo();
})), Yo, Xo = e((() => {
	hn(), Jo(), Yo = class {
		constructor(e) {
			this.app = pt(e), this.auth = Ji(this.app), this.googleProvider = new ja(), this.googleProvider.setCustomParameters({ prompt: "select_account" });
		}
		async waitForAuthReady({ requireUser: e = !1, timeoutMs: t = 1e4 } = {}) {
			if (typeof this.auth.authStateReady == "function" ? await this.auth.authStateReady() : await new Promise((e, n) => {
				let r = setTimeout(() => {
					i(), n(/* @__PURE__ */ Error("Tempo esgotado aguardando a autenticação do Firebase."));
				}, t), i = Gr(this.auth, () => {
					clearTimeout(r), i(), e();
				}, (e) => {
					clearTimeout(r), i(), n(e);
				});
			}), this.auth.currentUser && await this.auth.currentUser.getIdToken(), e && !this.auth.currentUser) throw Error("Usuário não autenticado no Firebase.");
			return this.auth.currentUser;
		}
		async login(e, t) {
			let n = await Hr(this.auth, e, t);
			return await this.waitForAuthReady({ requireUser: !0 }), n;
		}
		async loginWithGoogle() {
			let e = await xi(this.auth, this.googleProvider);
			return await this.waitForAuthReady({ requireUser: !0 }), e;
		}
		async loginWithGoogleRedirect() {
			return Di(this.auth, this.googleProvider);
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
})), Zo, Qo, $o = e((() => {
	Zo = 2700 * 1e3, Qo = class {
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
			}, Zo), { close() {
				a = !0, clearInterval(i), r?.close();
			} };
		}
	};
})), es, ts = e((() => {
	es = class {
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
function ns(e) {
	return String(e ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;");
}
function rs(e) {
	return `<p>Erro ao carregar fichas: ${ns(e?.message || "Erro desconhecido.")}</p>
    <p>Verifique se a URL do backend está configurada corretamente nas configurações do módulo e
    se o servidor (runarcana-api) está no ar.</p>`;
}
var is, as = e((() => {
	is = class {
		constructor(e, t, n) {
			this.apiClient = e, this.actor = t, this.syncManager = n;
		}
		async render(e = !0) {
			let { DialogV2: t } = foundry.applications.api;
			try {
				let e = await this.apiClient.listDrafts(), n = "<form><div class=\"form-group\"><label>Ficha:</label><select name=\"draftId\">";
				return e.length === 0 ? n += "<option value=\"\">Nenhuma ficha encontrada</option>" : e.forEach((e) => {
					n += `<option value="${e.id}">${ns(e.concept?.name || e.title || "Sem Nome")} (${ns(e.classBuild?.classId || "Sem Classe")})</option>`;
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
					content: rs(e),
					ok: { label: "Fechar" }
				});
			}
		}
	};
}));
//#endregion
//#region src/compendium-sync.js
function os() {
	return game.packs.filter((e) => e.documentName === "Item");
}
async function ss(e) {
	let t = new Set((e || []).filter(Boolean)), n = /* @__PURE__ */ new Map();
	if (t.size === 0) return n;
	for (let e of os()) {
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
function cs(e) {
	if (!e) return e;
	try {
		return new URL(e, window.location.origin).href;
	} catch {
		return e;
	}
}
function ls(e, t) {
	let n = [];
	for (let r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
	return n;
}
async function us(e, t, n, r) {
	let i = [], a = [];
	for (let e of n) {
		let t = game.packs.get(e);
		if (!t) continue;
		let n = (await t.getDocuments()).map((t) => ({
			packId: e,
			foundryId: t.id,
			name: t.name,
			img: cs(t.img),
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
	let o = ls(i, ds);
	for (let n = 0; n < o.length; n++) await e.putCompendiumItemsBatch(o[n], t), r?.(n + 1, o.length);
	return {
		totalSynced: i.length,
		packSummaries: a
	};
}
var ds, fs = e((() => {
	ds = 50;
}));
//#endregion
//#region src/compendium-sync-dialog.js
function ps(e) {
	return String(e ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;");
}
var ms, hs, gs = e((() => {
	fs(), ms = "compendiumSyncSelection", hs = class {
		constructor(e) {
			this.apiClient = e;
		}
		async render() {
			let { DialogV2: e } = foundry.applications.api, t = os();
			if (t.length === 0) return e.prompt({
				window: { title: "Sincronizar Compêndio de Itens" },
				content: "<p>Nenhum compêndio do tipo Item foi encontrado neste mundo.</p>",
				ok: { label: "Fechar" }
			});
			let n = [];
			try {
				n = game.settings.get("runarcana-sync", ms) ?? [];
			} catch {
				n = [];
			}
			let r = new Set(n), i = "\n      <form>\n        <p>Escolha os compêndios de itens a sincronizar (ex: um compêndio próprio,\n        curado com os itens liberados na sua mesa):</p>\n        <div class=\"form-group\" style=\"max-height: 260px; overflow-y: auto;\">";
			for (let e of t) {
				let t = r.has(e.collection) ? "checked" : "";
				i += `
          <label style="display:block;margin:4px 0;">
            <input type="checkbox" name="pack" value="${ps(e.collection)}" ${t} />
            ${ps(e.metadata.label)}
            <small>(${ps(e.metadata.packageName || e.metadata.system || "")})</small>
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
						await game.settings.set("runarcana-sync", ms, i);
						try {
							let e = await us(a, o, i, (e, t) => {
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
function _s(e) {
	return e ? Array.isArray(e) ? e.filter(Boolean).map(String) : e instanceof Set ? [...e].filter(Boolean).map(String) : typeof e == "object" ? Object.keys(e).filter((t) => e[t]) : [] : [];
}
function Z(e) {
	if (!e) return [];
	let t = _s(e.value ?? (Array.isArray(e) || e instanceof Set ? e : null)), n = typeof e.custom == "string" ? e.custom.split(/[;,\n]/).map((e) => e.trim()).filter(Boolean) : [];
	return [...new Set([...t, ...n])];
}
function vs(e) {
	let t = e.system?.attributes?.senses ?? {}, n = t.ranges ?? {}, r = {};
	for (let e of As) {
		let i = n[e] ?? t[e];
		typeof i == "number" && i > 0 && (r[e] = i);
	}
	return t.units && (r.units = t.units), typeof t.special == "string" && t.special.trim() && (r.special = t.special.trim()), r;
}
function ys(e) {
	let t = e.system?.traits ?? {};
	return {
		senses: vs(e),
		damageResistances: Z(t.dr),
		damageImmunities: Z(t.di),
		damageVulnerabilities: Z(t.dv),
		armorProficiencies: Z(t.armorProf),
		weaponProficiencies: Z(t.weaponProf),
		languages: Z(t.languages)
	};
}
function bs(e) {
	return e ? Array.isArray(e) ? e : typeof e.length == "number" || typeof e[Symbol.iterator] == "function" ? [...e] : typeof e == "object" ? Object.values(e) : [] : [];
}
function xs(e, t) {
	let n = bs(e.itemTypes?.[t]);
	return n.length > 0 ? n : bs(e.items?.contents ?? e.items).filter((e) => e?.type === t);
}
function Ss(e) {
	return e ? typeof e == "string" ? e : e.name || "" : "";
}
function Cs(e) {
	let t = e?.system?.hd?.denomination ?? e?.system?.hitDice ?? e?.system?.hitDie;
	if (typeof t == "number" && t > 0) return `d${t}`;
	if (typeof t == "string" && t.trim()) {
		let e = t.trim();
		return e.startsWith("d") ? e : `d${e}`;
	}
	return "";
}
function ws(e) {
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
function Ts(e) {
	let t = xs(e, "class"), n = bs(e.classes), r = /* @__PURE__ */ new Set(), i = [];
	for (let e of [...t, ...n]) {
		let t = e?.id || e?.name;
		!t || r.has(t) || (r.add(t), i.push(e));
	}
	let a = xs(e, "race")[0], o = xs(e, "background")[0], s = xs(e, "subclass")[0], c = ws(e), l = e.system?.traits?.size || "";
	return {
		classes: i.map((e) => ({
			name: e.name || "",
			identifier: e.system?.identifier || e.identifier || "",
			levels: Number(e.system?.levels) || 0,
			hitDie: Cs(e)
		})),
		subclassName: s?.name || "",
		raceName: a?.name || Ss(e.system?.details?.race),
		backgroundName: o?.name || Ss(e.system?.details?.background),
		size: l,
		hitDie: i.map(Cs).find(Boolean) || "",
		hitDiceValue: c.value,
		hitDiceMax: c.max
	};
}
function Q(e) {
	return typeof e == "string" ? e.trim() : "";
}
function Es(e) {
	let t = e.system?.details ?? {}, n = {}, r = {}, i = Q(t.appearance), a = Q(t.age), o = Q(t.gender), s = Q(t.height), c = Q(t.weight), l = Q(t.eyes), u = Q(t.hair), d = Q(t.skin);
	i && (n.appearance = i), a && (n.age = a), o && (n.sex = o), s && (n.height = s), c && (n.weight = c), l && (n.eyes = l), u && (n.hair = u), d && (n.skin = d);
	let f = Q(t.alignment), ee = Q(t.faith), p = Q(t.ideal), m = Q(t.bond), te = Q(t.flaw), h = Q(t.trait), g = Q(t.biography?.value);
	return f && (r.alignment = f), ee && (r.faith = ee), p && (r.ideal = p), m && (r.bond = m), te && (r.flaw = te), h && (r.trait = h), g && (r.backstory = g), {
		identity: n,
		description: r
	};
}
function Ds(e) {
	return e >= 2 ? "expertise" : e >= 1;
}
function Os(e) {
	return e === "expertise" ? 2 : +!!e;
}
var ks, As, $, js, Ms = e((() => {
	ks = {
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
	}, As = [
		"darkvision",
		"blindsight",
		"tremorsense",
		"truesight"
	], $ = [
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
	], js = [
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
function Ns(e, t) {
	let n;
	return function(...r) {
		clearTimeout(n), n = setTimeout(() => e.apply(this, r), t);
	};
}
function Ps(e) {
	let t = foundry.utils.deepClone(e);
	return delete t._stats, delete t.sort, delete t.ownership, delete t.folder, t.flags && (delete t.flags.core, delete t.flags.exportSource), t;
}
function Fs(e) {
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
function Is(e) {
	let t = cs(e);
	return !t || String(t).includes("mystery-man") || String(t).includes("icons/svg/item-bag") ? "" : t;
}
function Ls(e) {
	let t = e.statuses;
	return t ? typeof t.size == "number" ? [...t].map(String) : Array.isArray(t) ? t.map(String) : typeof t == "object" ? Object.keys(t) : [] : [];
}
function Rs(e) {
	if (typeof e.allApplicableEffects == "function") return [...e.allApplicableEffects()];
	let t = e.effects;
	return t?.contents ?? (Array.isArray(t) ? t : []);
}
function zs(e) {
	return e.type === "enchantment" || e.isAppliedEnchantment === !0;
}
function Bs(e) {
	let t = e.duration?.label;
	if (!t) return "";
	let n = String(t).trim();
	return !n || /^(none|nenhum|permanent|permanente|indefinid)/i.test(n) ? "" : n;
}
function Vs(e, t) {
	let n = e.parent;
	return n && n !== t && n.name ? n.name : "";
}
function Hs(e, t) {
	let n = { name: e.name }, r = cs(e.img || e.icon);
	r && (n.img = r), e.disabled && (n.disabled = !0), e.isSuppressed && (n.isSuppressed = !0), e.isTemporary && (n.isTemporary = !0);
	let i = Ls(e);
	i.length && (n.statuses = i);
	let a = Bs(e);
	a && (n.durationLabel = a);
	let o = Vs(e, t);
	return o && (n.source = o), n;
}
function Us(e) {
	return Rs(e).filter((e) => !e.disabled && !e.isSuppressed && e.name && !zs(e)).map((t) => Hs(t, e)).filter((e) => {
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
function Ws(e) {
	return Rs(e).filter((e) => e?.name && !zs(e)).map((t) => Hs(t, e));
}
var Gs, Ks = e((() => {
	Ms(), fs(), Gs = class {
		constructor(e) {
			this.apiClient = e, this.streams = /* @__PURE__ */ new Map(), this.activeSyncs = /* @__PURE__ */ new Set(), this.lastKnownDraft = /* @__PURE__ */ new Map(), this.debouncedActorUpdate = Ns(this._executeActorUpdate.bind(this), 1e3), this.debouncedItemUpdate = Ns(this._executeItemUpdate.bind(this), 1e3);
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
			for (let [r, i] of Object.entries(ks)) {
				if (r.startsWith("system.abilities")) continue;
				let a = foundry.utils.getProperty(t, i), o = foundry.utils.getProperty(e, r);
				a != null && a !== o && (n[r] = a);
			}
			if ($.forEach(({ foundry: r, firebase: i }) => {
				let a = e.system.abilities?.[r]?.value || 0, o = (foundry.utils.getProperty(t, `attributes.scores.${i}`) || 10) + (foundry.utils.getProperty(t, `attributes.originBonuses.${i}`) || 0);
				a !== o && (n[`system.abilities.${r}.value`] = o);
			}), $.forEach(({ foundry: r, firebase: i }) => {
				let a = foundry.utils.getProperty(t, `proficiencies.savingThrows.${i}`);
				if (a === void 0) return;
				let o = +!!a;
				(e.system.abilities?.[r]?.proficient ?? 0) !== o && (n[`system.abilities.${r}.proficient`] = o);
			}), js.forEach(({ foundry: r, id: i }) => {
				let a = foundry.utils.getProperty(t, `proficiencies.skills.${i}`);
				if (a === void 0) return;
				let o = Os(a);
				(e.system.skills?.[r]?.value ?? 0) !== o && (n[`system.skills.${r}.value`] = o);
			}), Object.keys(n).length > 0 && await e.update(n), t.items && Array.isArray(t.items)) {
				let n = t.items, r = e.items.contents, i = [], a = [], o = [];
				for (let e of n) {
					let t = r.find((t) => t.getFlag("runarcana-sync", "sourceId") === e._id || t.id === e._id), n = Fs(foundry.utils.deepClone(e));
					if (t) {
						let r = Ps(t.toObject()), i = Ps(n);
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
				r = await ss(n);
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
			for (let [t, r] of Object.entries(ks)) {
				if (t.startsWith("system.abilities")) continue;
				let i = foundry.utils.getProperty(e, t);
				i !== void 0 && foundry.utils.setProperty(n, r, i);
			}
			$.forEach(({ foundry: t, firebase: r }) => {
				let i = e.system.abilities?.[t]?.value;
				if (i === void 0) return;
				let a = foundry.utils.getProperty(n, `attributes.originBonuses.${r}`) || 0;
				foundry.utils.setProperty(n, `attributes.scores.${r}`, i - a);
			}), $.forEach(({ foundry: t, firebase: r }) => {
				let i = e.system.abilities?.[t]?.proficient;
				i !== void 0 && foundry.utils.setProperty(n, `proficiencies.savingThrows.${r}`, i >= 1);
			}), js.forEach(({ foundry: t, id: r }) => {
				let i = e.system.skills?.[t]?.value;
				i !== void 0 && foundry.utils.setProperty(n, `proficiencies.skills.${r}`, Ds(i));
			});
			let r = e.system.attributes?.spellcasting;
			if (r) {
				let e = $.find(({ foundry: e }) => e === r);
				e && foundry.utils.setProperty(n, "spellcasting.ability", e.firebase);
			}
			foundry.utils.setProperty(n, "concept.portraitUrl", Is(e.img)), n.conditions = Us(e), n.effects = Ws(e), n.traits = ys(e), n.foundryIdentity = Ts(e);
			let i = Es(e);
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
				e._id = t.getFlag("runarcana-sync", "sourceId") || e._id, e.img = cs(e.img);
				let r = Ps(e);
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
					img: cs(t.img),
					system: t.type === "class" ? { levels: t.system?.levels } : {}
				});
			}
			let r = foundry.utils.deepClone(this.lastKnownDraft.get(e.id));
			r.items = n, r.foundryIdentity = Ts(e), r.conditions = Us(e), r.effects = Ws(e);
			try {
				let n = await this.apiClient.saveDraft(t, r);
				this.lastKnownDraft.set(e.id, n);
			} catch (t) {
				throw this.notifyApiError("salvar os itens de", t, e), t;
			}
		}
	};
})), qs = /* @__PURE__ */ t((() => {
	Xo(), $o(), ts(), as(), gs(), Ks();
	var e = null, t = null, n = null;
	function r() {
		if (!t) {
			ui.notifications.warn("Configure a URL do backend nas configurações do módulo primeiro.");
			return;
		}
		new hs(t).render();
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
	}), Hooks.once("ready", async () => {
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
				e = new Yo(l);
				let r = a("backendUrl");
				r ? (t = new Qo(e, r), n = new Gs(t), await e.waitForAuthReady(), game.actors.forEach((e) => n.startListening(e)), console.log("Runarcana Sync | Firebase (login) e backend configurados e rodando."), i.api.firebaseClient = e, i.api.syncManager = n) : console.warn("Runarcana Sync | URL do backend não configurada nas configurações do módulo.");
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
	});
	function l(e) {
		let t = e?.parent;
		return t ? t.documentName === "Actor" ? t : t.documentName === "Item" && t.parent?.documentName === "Actor" ? t.parent : null : null;
	}
	Hooks.on("createActiveEffect", (e, t, r) => {
		if (r !== game.user.id || !n) return;
		let i = l(e);
		i && n.handleActorUpdate(i, {});
	}), Hooks.on("updateActiveEffect", (e, t, r, i) => {
		if (i !== game.user.id || !n) return;
		let a = l(e);
		a && n.handleActorUpdate(a, t);
	}), Hooks.on("deleteActiveEffect", (e, t, r) => {
		if (r !== game.user.id || !n) return;
		let i = l(e);
		i && n.handleActorUpdate(i, {});
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
				e.auth.currentUser ? new is(t, a, n).render(!0) : new es(e).render(!0);
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
				e.auth.currentUser ? new is(t, a, n).render(!0) : new es(e).render(!0);
			}
		});
	});
}));
//#endregion
export default qs();
