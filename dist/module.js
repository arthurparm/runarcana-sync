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
function a(e, t) {
	if (e.uid) throw Error("The \"uid\" field is no longer supported by mockUserToken. Please use \"sub\" instead for Firebase Auth User ID.");
	let n = {
		alg: "none",
		type: "JWT"
	}, r = t || "demo-project", i = e.iat || 0, a = e.sub || e.user_id;
	if (!a) throw Error("mockUserToken must contain 'sub' or 'user_id' field!");
	let o = {
		iss: `https://securetoken.google.com/${r}`,
		aud: r,
		iat: i,
		exp: i + 3600,
		auth_time: i,
		sub: a,
		user_id: a,
		firebase: {
			sign_in_provider: "custom",
			identities: {}
		},
		...e
	};
	return [
		ge(JSON.stringify(n)),
		ge(JSON.stringify(o)),
		""
	].join(".");
}
function o() {
	return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function s() {
	return typeof window < "u" && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(o());
}
function c() {
	let e = xe()?.forceEnvironment;
	if (e === "node") return !0;
	if (e === "browser") return !1;
	try {
		return Object.prototype.toString.call(global.process) === "[object process]";
	} catch {
		return !1;
	}
}
function l() {
	return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers";
}
function u() {
	let e = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
	return typeof e == "object" && e.id !== void 0;
}
function d() {
	return typeof navigator == "object" && navigator.product === "ReactNative";
}
function f() {
	let e = o();
	return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
}
function p() {
	return !c() && !!navigator.userAgent && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
}
function ee() {
	try {
		return typeof indexedDB == "object";
	} catch {
		return !1;
	}
}
function m() {
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
function h(e, t) {
	return e.replace(Ae, (e, n) => {
		let r = t[n];
		return r == null ? `<${n}?>` : String(r);
	});
}
function te(e) {
	for (let t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
	return !0;
}
function ne(e, t) {
	if (e === t) return !0;
	let n = Object.keys(e), r = Object.keys(t);
	for (let i of n) {
		if (!r.includes(i)) return !1;
		let n = e[i], a = t[i];
		if (re(n) && re(a)) {
			if (!ne(n, a)) return !1;
		} else if (n !== a) return !1;
	}
	for (let e of r) if (!n.includes(e)) return !1;
	return !0;
}
function re(e) {
	return typeof e == "object" && !!e;
}
function ie(e) {
	let t = [];
	for (let [n, r] of Object.entries(e)) Array.isArray(r) ? r.forEach((e) => {
		t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e));
	}) : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
	return t.length ? "&" + t.join("&") : "";
}
function ae(e) {
	let t = {};
	return e.replace(/^\?/, "").split("&").forEach((e) => {
		if (e) {
			let [n, r] = e.split("=");
			t[decodeURIComponent(n)] = decodeURIComponent(r);
		}
	}), t;
}
function oe(e) {
	let t = e.indexOf("?");
	if (!t) return "";
	let n = e.indexOf("#", t);
	return e.substring(t, n > 0 ? n : void 0);
}
function se(e, t) {
	let n = new je(e, t);
	return n.subscribe.bind(n);
}
function ce(e, t) {
	if (typeof e != "object" || !e) return !1;
	for (let n of t) if (n in e && typeof e[n] == "function") return !0;
	return !1;
}
function le() {}
function g(e) {
	return e && e._delegate ? e._delegate : e;
}
function _(e) {
	try {
		return (e.startsWith("http://") || e.startsWith("https://") ? new URL(e).hostname : e).endsWith(".cloudworkstations.dev");
	} catch {
		return !1;
	}
}
async function ue(e) {
	return (await fetch(e, { credentials: "include" })).ok;
}
var de, fe, pe, me, he, ge, _e, ve, ye, be, xe, Se, Ce, we, Te, Ee, De, Oe, ke, Ae, je, Me = e((() => {
	r(), de = function(e) {
		let t = [], n = 0;
		for (let r = 0; r < e.length; r++) {
			let i = e.charCodeAt(r);
			i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192, t[n++] = i & 63 | 128) : (i & 64512) == 55296 && r + 1 < e.length && (e.charCodeAt(r + 1) & 64512) == 56320 ? (i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023), t[n++] = i >> 18 | 240, t[n++] = i >> 12 & 63 | 128, t[n++] = i >> 6 & 63 | 128, t[n++] = i & 63 | 128) : (t[n++] = i >> 12 | 224, t[n++] = i >> 6 & 63 | 128, t[n++] = i & 63 | 128);
		}
		return t;
	}, fe = function(e) {
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
	}, pe = {
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
			return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(de(e), t);
		},
		decodeString(e, t) {
			return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : fe(this.decodeStringToByteArray(e, t));
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
				if (++t, i == null || a == null || o == null || s == null) throw new me();
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
	}, me = class extends Error {
		constructor() {
			super(...arguments), this.name = "DecodeBase64StringError";
		}
	}, he = function(e) {
		let t = de(e);
		return pe.encodeByteArray(t, !0);
	}, ge = function(e) {
		return he(e).replace(/\./g, "");
	}, _e = function(e) {
		try {
			return pe.decodeString(e, !0);
		} catch (e) {
			console.error("base64Decode failed: ", e);
		}
		return null;
	}, ve = () => i().__FIREBASE_DEFAULTS__, ye = () => {
		if (typeof process > "u" || process.env === void 0) return;
		let e = process.env.__FIREBASE_DEFAULTS__;
		if (e) return JSON.parse(e);
	}, be = () => {
		if (typeof document > "u") return;
		let e;
		try {
			e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
		} catch {
			return;
		}
		let t = e && _e(e[1]);
		return t && JSON.parse(t);
	}, xe = () => {
		try {
			return n() || ve() || ye() || be();
		} catch (e) {
			console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
			return;
		}
	}, Se = (e) => xe()?.emulatorHosts?.[e], Ce = (e) => {
		let t = Se(e);
		if (!t) return;
		let n = t.lastIndexOf(":");
		if (n <= 0 || n + 1 === t.length) throw Error(`Invalid host ${t} with no separate hostname and port!`);
		let r = parseInt(t.substring(n + 1), 10);
		return t[0] === "[" ? [t.substring(1, n - 1), r] : [t.substring(0, n), r];
	}, we = () => xe()?.config, Te = (e) => xe()?.[`_${e}`], Ee = class {
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
	}, De = "FirebaseError", Oe = class e extends Error {
		constructor(t, n, r) {
			super(n), this.code = t, this.customData = r, this.name = De, Object.setPrototypeOf(this, e.prototype), Error.captureStackTrace && Error.captureStackTrace(this, ke.prototype.create);
		}
	}, ke = class {
		constructor(e, t, n) {
			this.service = e, this.serviceName = t, this.errors = n;
		}
		create(e, ...t) {
			let n = t[0] || {}, r = `${this.service}/${e}`, i = this.errors[e], a = i ? h(i, n) : "Error";
			return new Oe(r, `${this.serviceName}: ${a} (${r}).`, n);
		}
	}, Ae = /\{\$([^}]+)}/g, je = class {
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
			r = ce(e, [
				"next",
				"error",
				"complete"
			]) ? e : {
				next: e,
				error: t,
				complete: n
			}, r.next === void 0 && (r.next = le), r.error === void 0 && (r.error = le), r.complete === void 0 && (r.complete = le);
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
function Ne(e) {
	return e === Ie ? void 0 : e;
}
function Pe(e) {
	return e.instantiationMode === "EAGER";
}
var Fe, Ie, Le, v, y = e((() => {
	Me(), Fe = class {
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
	}, Ie = "[DEFAULT]", Le = class {
		constructor(e, t) {
			this.name = e, this.container = t, this.component = null, this.instances = /* @__PURE__ */ new Map(), this.instancesDeferred = /* @__PURE__ */ new Map(), this.instancesOptions = /* @__PURE__ */ new Map(), this.onInitCallbacks = /* @__PURE__ */ new Map();
		}
		get(e) {
			let t = this.normalizeInstanceIdentifier(e);
			if (!this.instancesDeferred.has(t)) {
				let e = new Ee();
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
				if (Pe(e)) try {
					this.getOrInitializeService({ instanceIdentifier: Ie });
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
		clearInstance(e = Ie) {
			this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e);
		}
		async delete() {
			let e = Array.from(this.instances.values());
			await Promise.all([...e.filter((e) => "INTERNAL" in e).map((e) => e.INTERNAL.delete()), ...e.filter((e) => "_delete" in e).map((e) => e._delete())]);
		}
		isComponentSet() {
			return this.component != null;
		}
		isInitialized(e = Ie) {
			return this.instances.has(e);
		}
		getOptions(e = Ie) {
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
				instanceIdentifier: Ne(e),
				options: t
			}), this.instances.set(e, n), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(n, e), this.component.onInstanceCreated)) try {
				this.component.onInstanceCreated(this.container, e, n);
			} catch {}
			return n || null;
		}
		normalizeInstanceIdentifier(e = Ie) {
			return this.component ? this.component.multipleInstances ? e : Ie : e;
		}
		shouldAutoInitialize() {
			return !!this.component && this.component.instantiationMode !== "EXPLICIT";
		}
	}, v = class {
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
			let t = new Le(e, this);
			return this.providers.set(e, t), t;
		}
		getProviders() {
			return Array.from(this.providers.values());
		}
	};
})), Re, b, ze, Be, Ve, He, Ue, We = e((() => {
	Re = [], (function(e) {
		e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT";
	})(b ||= {}), ze = {
		debug: b.DEBUG,
		verbose: b.VERBOSE,
		info: b.INFO,
		warn: b.WARN,
		error: b.ERROR,
		silent: b.SILENT
	}, Be = b.INFO, Ve = {
		[b.DEBUG]: "log",
		[b.VERBOSE]: "log",
		[b.INFO]: "info",
		[b.WARN]: "warn",
		[b.ERROR]: "error"
	}, He = (e, t, ...n) => {
		if (t < e.logLevel) return;
		let r = (/* @__PURE__ */ new Date()).toISOString(), i = Ve[t];
		if (i) console[i](`[${r}]  ${e.name}:`, ...n);
		else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`);
	}, Ue = class {
		constructor(e) {
			this.name = e, this._logLevel = Be, this._logHandler = He, this._userLogHandler = null, Re.push(this);
		}
		get logLevel() {
			return this._logLevel;
		}
		set logLevel(e) {
			if (!(e in b)) throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
			this._logLevel = e;
		}
		setLogLevel(e) {
			this._logLevel = typeof e == "string" ? ze[e] : e;
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
function Ge() {
	return $e ||= [
		IDBDatabase,
		IDBObjectStore,
		IDBIndex,
		IDBCursor,
		IDBTransaction
	];
}
function Ke() {
	return et ||= [
		IDBCursor.prototype.advance,
		IDBCursor.prototype.continue,
		IDBCursor.prototype.continuePrimaryKey
	];
}
function qe(e) {
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
		t instanceof IDBCursor && tt.set(t, e);
	}).catch(() => {}), it.set(t, e), t;
}
function Je(e) {
	if (nt.has(e)) return;
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
	nt.set(e, t);
}
function Ye(e) {
	at = e(at);
}
function Xe(e) {
	return e === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(t, ...n) {
		let r = e.call(ot(this), t, ...n);
		return S.set(r, t.sort ? t.sort() : [t]), x(r);
	} : Ke().includes(e) ? function(...t) {
		return e.apply(ot(this), t), x(tt.get(this));
	} : function(...t) {
		return x(e.apply(ot(this), t));
	};
}
function Ze(e) {
	return typeof e == "function" ? Xe(e) : (e instanceof IDBTransaction && Je(e), Qe(e, Ge()) ? new Proxy(e, at) : e);
}
function x(e) {
	if (e instanceof IDBRequest) return qe(e);
	if (rt.has(e)) return rt.get(e);
	let t = Ze(e);
	return t !== e && (rt.set(e, t), it.set(t, e)), t;
}
var Qe, $e, et, tt, nt, S, rt, it, at, ot, st = e((() => {
	Qe = (e, t) => t.some((t) => e instanceof t), tt = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakMap(), rt = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ new WeakMap(), at = {
		get(e, t, n) {
			if (e instanceof IDBTransaction) {
				if (t === "done") return nt.get(e);
				if (t === "objectStoreNames") return e.objectStoreNames || S.get(e);
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
	}, ot = (e) => it.get(e);
}));
//#endregion
//#region node_modules/idb/build/index.js
function ct(e, t, { blocked: n, upgrade: r, blocking: i, terminated: a } = {}) {
	let o = indexedDB.open(e, t), s = x(o);
	return r && o.addEventListener("upgradeneeded", (e) => {
		r(x(o.result), e.oldVersion, e.newVersion, x(o.transaction), e);
	}), n && o.addEventListener("blocked", (e) => n(e.oldVersion, e.newVersion, e)), s.then((e) => {
		a && e.addEventListener("close", () => a()), i && e.addEventListener("versionchange", (e) => i(e.oldVersion, e.newVersion, e));
	}).catch(() => {}), s;
}
function lt(e, t) {
	if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
	if (ft.get(t)) return ft.get(t);
	let n = t.replace(/FromIndex$/, ""), r = t !== n, i = dt.includes(n);
	if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || ut.includes(n))) return;
	let a = async function(e, ...t) {
		let a = this.transaction(e, i ? "readwrite" : "readonly"), o = a.store;
		return r && (o = o.index(t.shift())), (await Promise.all([o[n](...t), i && a.done]))[0];
	};
	return ft.set(t, a), a;
}
var ut, dt, ft, pt = e((() => {
	st(), ut = [
		"get",
		"getKey",
		"getAll",
		"getAllKeys",
		"count"
	], dt = [
		"put",
		"add",
		"delete",
		"clear"
	], ft = /* @__PURE__ */ new Map(), Ye((e) => ({
		...e,
		get: (t, n, r) => lt(t, n) || e.get(t, n, r),
		has: (t, n) => !!lt(t, n) || e.has(t, n)
	}));
}));
//#endregion
//#region node_modules/@firebase/app/dist/esm/index.esm.js
function mt(e) {
	return e.getComponent()?.type === "VERSION";
}
function ht(e, t) {
	try {
		e.container.addComponent(t);
	} catch (n) {
		Pt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n);
	}
}
function gt(e) {
	let t = e.name;
	if (fn.has(t)) return Pt.debug(`There were multiple attempts to register component ${t}.`), !1;
	fn.set(t, e);
	for (let t of un.values()) ht(t, e);
	for (let t of dn.values()) ht(t, e);
	return !0;
}
function _t(e, t) {
	let n = e.container.getProvider("heartbeat").getImmediate({ optional: !0 });
	return n && n.triggerHeartbeat(), e.container.getProvider(t);
}
function vt(e) {
	return e == null ? !1 : e.settings !== void 0;
}
function yt(e, t = {}) {
	let n = e;
	typeof t != "object" && (t = { name: t });
	let r = {
		name: cn,
		automaticDataCollectionEnabled: !0,
		...t
	}, i = r.name;
	if (typeof i != "string" || !i) throw pn.create("bad-app-name", { appName: String(i) });
	if (n ||= we(), !n) throw pn.create("no-options");
	let a = un.get(i);
	if (a) {
		if (ne(n, a.options) && ne(r, a.config)) return a;
		throw pn.create("duplicate-app", { appName: i });
	}
	let o = new v(i);
	for (let e of fn.values()) o.addComponent(e);
	let s = new mn(n, r, o);
	return un.set(i, s), s;
}
function bt(e = cn) {
	let t = un.get(e);
	if (!t && e === "[DEFAULT]" && we()) return yt();
	if (!t) throw pn.create("no-app", { appName: e });
	return t;
}
function xt(e, t, n) {
	let r = ln[e] ?? e;
	n && (r += `-${n}`);
	let i = r.match(/\s|\//), a = t.match(/\s|\//);
	if (i || a) {
		let e = [`Unable to register library "${r}" with version "${t}":`];
		i && e.push(`library name "${r}" contains illegal characters (whitespace or "/")`), i && a && e.push("and"), a && e.push(`version name "${t}" contains illegal characters (whitespace or "/")`), Pt.warn(e.join(" "));
		return;
	}
	gt(new Fe(`${r}-version`, () => ({
		library: r,
		version: t
	}), "VERSION"));
}
function St() {
	return yn ||= ct(gn, _n, { upgrade: (e, t) => {
		switch (t) {
			case 0: try {
				e.createObjectStore(vn);
			} catch (e) {
				console.warn(e);
			}
		}
	} }).catch((e) => {
		throw pn.create("idb-open", { originalErrorMessage: e.message });
	}), yn;
}
async function Ct(e) {
	try {
		let t = (await St()).transaction(vn), n = await t.objectStore(vn).get(Tt(e));
		return await t.done, n;
	} catch (e) {
		if (e instanceof Oe) Pt.warn(e.message);
		else {
			let t = pn.create("idb-get", { originalErrorMessage: e?.message });
			Pt.warn(t.message);
		}
	}
}
async function wt(e, t) {
	try {
		let n = (await St()).transaction(vn, "readwrite");
		await n.objectStore(vn).put(t, Tt(e)), await n.done;
	} catch (e) {
		if (e instanceof Oe) Pt.warn(e.message);
		else {
			let t = pn.create("idb-set", { originalErrorMessage: e?.message });
			Pt.warn(t.message);
		}
	}
}
function Tt(e) {
	return `${e.name}!${e.options.appId}`;
}
function Et() {
	return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function Dt(e, t = bn) {
	let n = [], r = e.slice();
	for (let i of e) {
		let e = n.find((e) => e.agent === i.agent);
		if (!e) {
			if (n.push({
				agent: i.agent,
				dates: [i.date]
			}), Ot(n) > t) {
				n.pop();
				break;
			}
		} else if (e.dates.push(i.date), Ot(n) > t) {
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
function Ot(e) {
	return ge(JSON.stringify({
		version: 2,
		heartbeats: e
	})).length;
}
function kt(e) {
	if (e.length === 0) return -1;
	let t = 0, n = e[0].date;
	for (let r = 1; r < e.length; r++) e[r].date < n && (n = e[r].date, t = r);
	return t;
}
function At(e) {
	gt(new Fe("platform-logger", (e) => new jt(e), "PRIVATE")), gt(new Fe("heartbeat", (e) => new Sn(e), "PRIVATE")), xt(Mt, Nt, e), xt(Mt, Nt, "esm2020"), xt("fire-js", "");
}
var jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, C, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn, gn, _n, vn, yn, bn, xn, Sn, w, Cn = e((() => {
	y(), We(), Me(), pt(), jt = class {
		constructor(e) {
			this.container = e;
		}
		getPlatformInfoString() {
			return this.container.getProviders().map((e) => {
				if (mt(e)) {
					let t = e.getImmediate();
					return `${t.library}/${t.version}`;
				} else return null;
			}).filter((e) => e).join(" ");
		}
	}, Mt = "@firebase/app", Nt = "0.14.10", Pt = new Ue("@firebase/app"), Ft = "@firebase/app-compat", It = "@firebase/analytics-compat", Lt = "@firebase/analytics", Rt = "@firebase/app-check-compat", zt = "@firebase/app-check", Bt = "@firebase/auth", Vt = "@firebase/auth-compat", Ht = "@firebase/database", Ut = "@firebase/data-connect", Wt = "@firebase/database-compat", Gt = "@firebase/functions", Kt = "@firebase/functions-compat", C = "@firebase/installations", qt = "@firebase/installations-compat", Jt = "@firebase/messaging", Yt = "@firebase/messaging-compat", Xt = "@firebase/performance", Zt = "@firebase/performance-compat", Qt = "@firebase/remote-config", $t = "@firebase/remote-config-compat", en = "@firebase/storage", tn = "@firebase/storage-compat", nn = "@firebase/firestore", rn = "@firebase/ai", an = "@firebase/firestore-compat", on = "firebase", sn = "12.11.0", cn = "[DEFAULT]", ln = {
		[Mt]: "fire-core",
		[Ft]: "fire-core-compat",
		[Lt]: "fire-analytics",
		[It]: "fire-analytics-compat",
		[zt]: "fire-app-check",
		[Rt]: "fire-app-check-compat",
		[Bt]: "fire-auth",
		[Vt]: "fire-auth-compat",
		[Ht]: "fire-rtdb",
		[Ut]: "fire-data-connect",
		[Wt]: "fire-rtdb-compat",
		[Gt]: "fire-fn",
		[Kt]: "fire-fn-compat",
		[C]: "fire-iid",
		[qt]: "fire-iid-compat",
		[Jt]: "fire-fcm",
		[Yt]: "fire-fcm-compat",
		[Xt]: "fire-perf",
		[Zt]: "fire-perf-compat",
		[Qt]: "fire-rc",
		[$t]: "fire-rc-compat",
		[en]: "fire-gcs",
		[tn]: "fire-gcs-compat",
		[nn]: "fire-fst",
		[an]: "fire-fst-compat",
		[rn]: "fire-vertex",
		"fire-js": "fire-js",
		[on]: "fire-js-all"
	}, un = /* @__PURE__ */ new Map(), dn = /* @__PURE__ */ new Map(), fn = /* @__PURE__ */ new Map(), pn = new ke("app", "Firebase", {
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
	}), mn = class {
		constructor(e, t, n) {
			this._isDeleted = !1, this._options = { ...e }, this._config = { ...t }, this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new Fe("app", () => this, "PUBLIC"));
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
			if (this.isDeleted) throw pn.create("app-deleted", { appName: this._name });
		}
	}, hn = sn, gn = "firebase-heartbeat-database", _n = 1, vn = "firebase-heartbeat-store", yn = null, bn = 1024, xn = 30, Sn = class {
		constructor(e) {
			this.container = e, this._heartbeatsCache = null, this._storage = new w(this.container.getProvider("app").getImmediate()), this._heartbeatsCachePromise = this._storage.read().then((e) => (this._heartbeatsCache = e, e));
		}
		async triggerHeartbeat() {
			try {
				let e = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), t = Et();
				if (this._heartbeatsCache?.heartbeats == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, this._heartbeatsCache?.heartbeats == null) || this._heartbeatsCache.lastSentHeartbeatDate === t || this._heartbeatsCache.heartbeats.some((e) => e.date === t)) return;
				if (this._heartbeatsCache.heartbeats.push({
					date: t,
					agent: e
				}), this._heartbeatsCache.heartbeats.length > xn) {
					let e = kt(this._heartbeatsCache.heartbeats);
					this._heartbeatsCache.heartbeats.splice(e, 1);
				}
				return this._storage.overwrite(this._heartbeatsCache);
			} catch (e) {
				Pt.warn(e);
			}
		}
		async getHeartbeatsHeader() {
			try {
				if (this._heartbeatsCache === null && await this._heartbeatsCachePromise, this._heartbeatsCache?.heartbeats == null || this._heartbeatsCache.heartbeats.length === 0) return "";
				let e = Et(), { heartbeatsToSend: t, unsentEntries: n } = Dt(this._heartbeatsCache.heartbeats), r = ge(JSON.stringify({
					version: 2,
					heartbeats: t
				}));
				return this._heartbeatsCache.lastSentHeartbeatDate = e, n.length > 0 ? (this._heartbeatsCache.heartbeats = n, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), r;
			} catch (e) {
				return Pt.warn(e), "";
			}
		}
	}, w = class {
		constructor(e) {
			this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
		}
		async runIndexedDBEnvironmentCheck() {
			return ee() ? m().then(() => !0).catch(() => !1) : !1;
		}
		async read() {
			if (await this._canUseIndexedDBPromise) {
				let e = await Ct(this.app);
				return e?.heartbeats ? e : { heartbeats: [] };
			} else return { heartbeats: [] };
		}
		async overwrite(e) {
			if (await this._canUseIndexedDBPromise) {
				let t = await this.read();
				return wt(this.app, {
					lastSentHeartbeatDate: e.lastSentHeartbeatDate ?? t.lastSentHeartbeatDate,
					heartbeats: e.heartbeats
				});
			} else return;
		}
		async add(e) {
			if (await this._canUseIndexedDBPromise) {
				let t = await this.read();
				return wt(this.app, {
					lastSentHeartbeatDate: e.lastSentHeartbeatDate ?? t.lastSentHeartbeatDate,
					heartbeats: [...t.heartbeats, ...e.heartbeats]
				});
			} else return;
		}
	}, At("");
})), wn = e((() => {
	Cn(), Cn(), xt("firebase", "12.11.0", "app");
}));
//#endregion
//#region node_modules/@firebase/auth/dist/esm/index-dfb5c973.js
function Tn() {
	return { "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK." };
}
function En(e, ...t) {
	fa.logLevel <= b.WARN && fa.warn(`Auth (${hn}): ${e}`, ...t);
}
function Dn(e, ...t) {
	fa.logLevel <= b.ERROR && fa.error(`Auth (${hn}): ${e}`, ...t);
}
function T(e, ...t) {
	throw jn(e, ...t);
}
function E(e, ...t) {
	return jn(e, ...t);
}
function On(e, t, n) {
	return new ke("auth", "Firebase", {
		...ua(),
		[t]: n
	}).create(t, { appName: e.name });
}
function kn(e) {
	return On(e, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
}
function An(e, t, n) {
	let r = n;
	if (!(t instanceof r)) throw r.name !== t.constructor.name && T(e, "argument-error"), On(e, "argument-error", `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`);
}
function jn(e, ...t) {
	if (typeof e != "string") {
		let n = t[0], r = [...t.slice(1)];
		return r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r);
	}
	return da.create(e, ...t);
}
function D(e, t, ...n) {
	if (!e) throw jn(t, ...n);
}
function Mn(e) {
	let t = "INTERNAL ASSERTION FAILED: " + e;
	throw Dn(t), Error(t);
}
function Nn(e, t) {
	e || Mn(t);
}
function Pn() {
	return typeof self < "u" && self.location?.href || "";
}
function Fn() {
	return In() === "http:" || In() === "https:";
}
function In() {
	return typeof self < "u" && self.location?.protocol || null;
}
function Ln() {
	return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && (Fn() || u() || "connection" in navigator) ? navigator.onLine : !0;
}
function Rn() {
	if (typeof navigator > "u") return null;
	let e = navigator;
	return e.languages && e.languages[0] || e.language || null;
}
function zn(e, t) {
	Nn(e.emulator, "Emulator should always be set here");
	let { url: n } = e.emulator;
	return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n;
}
function O(e, t) {
	return e.tenantId && !t.tenantId ? {
		...t,
		tenantId: e.tenantId
	} : t;
}
async function k(e, t, n, r, i = {}) {
	return Bn(e, i, async () => {
		let i = {}, a = {};
		r && (t === "GET" ? a = r : i = { body: JSON.stringify(r) });
		let o = ie({
			key: e.config.apiKey,
			...a
		}).slice(1), s = await e._getAdditionalHeaders();
		s["Content-Type"] = "application/json", e.languageCode && (s["X-Firebase-Locale"] = e.languageCode);
		let c = {
			method: t,
			headers: s,
			...i
		};
		return l() || (c.referrerPolicy = "no-referrer"), e.emulatorConfig && _(e.emulatorConfig.host) && (c.credentials = "include"), ma.fetch()(await Hn(e, e.config.apiHost, n, o), c);
	});
}
async function Bn(e, t, n) {
	e._canInitEmulator = !1;
	let r = {
		...ha,
		...t
	};
	try {
		let t = new va(e), i = await Promise.race([n(), t.promise]);
		t.clearNetworkTimeout();
		let a = await i.json();
		if ("needConfirmation" in a) throw Wn(e, "account-exists-with-different-credential", a);
		if (i.ok && !("errorMessage" in a)) return a;
		{
			let [t, n] = (i.ok ? a.errorMessage : a.error.message).split(" : ");
			if (t === "FEDERATED_USER_ID_ALREADY_LINKED") throw Wn(e, "credential-already-in-use", a);
			if (t === "EMAIL_EXISTS") throw Wn(e, "email-already-in-use", a);
			if (t === "USER_DISABLED") throw Wn(e, "user-disabled", a);
			let o = r[t] || t.toLowerCase().replace(/[_\s]+/g, "-");
			if (n) throw On(e, o, n);
			T(e, o);
		}
	} catch (t) {
		if (t instanceof Oe) throw t;
		T(e, "network-request-failed", { message: String(t) });
	}
}
async function Vn(e, t, n, r, i = {}) {
	let a = await k(e, t, n, r, i);
	return "mfaPendingCredential" in a && T(e, "multi-factor-auth-required", { _serverResponse: a }), a;
}
async function Hn(e, t, n, r) {
	let i = `${t}${n}?${r}`, a = e, o = a.config.emulator ? zn(e.config, i) : `${e.config.apiScheme}://${i}`;
	return ga.includes(n) && (await a._persistenceManagerAvailable, a._getPersistenceType() === "COOKIE") ? a._getPersistence()._getFinalTarget(o).toString() : o;
}
function Un(e) {
	switch (e) {
		case "ENFORCE": return "ENFORCE";
		case "AUDIT": return "AUDIT";
		case "OFF": return "OFF";
		default: return "ENFORCEMENT_STATE_UNSPECIFIED";
	}
}
function Wn(e, t, n) {
	let r = { appName: e.name };
	n.email && (r.email = n.email), n.phoneNumber && (r.phoneNumber = n.phoneNumber);
	let i = E(e, t, r);
	return i.customData._tokenResponse = n, i;
}
function Gn(e) {
	return e !== void 0 && e.enterprise !== void 0;
}
async function Kn(e, t) {
	return k(e, "GET", "/v2/recaptchaConfig", O(e, t));
}
async function qn(e, t) {
	return k(e, "POST", "/v1/accounts:delete", t);
}
async function Jn(e, t) {
	return k(e, "POST", "/v1/accounts:lookup", t);
}
function Yn(e) {
	if (e) try {
		let t = new Date(Number(e));
		if (!isNaN(t.getTime())) return t.toUTCString();
	} catch {}
}
async function Xn(e, t = !1) {
	let n = g(e), r = await n.getIdToken(t), i = Qn(r);
	D(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
	let a = typeof i.firebase == "object" ? i.firebase : void 0, o = a?.sign_in_provider;
	return {
		claims: i,
		token: r,
		authTime: Yn(Zn(i.auth_time)),
		issuedAtTime: Yn(Zn(i.iat)),
		expirationTime: Yn(Zn(i.exp)),
		signInProvider: o || null,
		signInSecondFactor: a?.sign_in_second_factor || null
	};
}
function Zn(e) {
	return Number(e) * 1e3;
}
function Qn(e) {
	let [t, n, r] = e.split(".");
	if (t === void 0 || n === void 0 || r === void 0) return Dn("JWT malformed, contained fewer than 3 sections"), null;
	try {
		let e = _e(n);
		return e ? JSON.parse(e) : (Dn("Failed to decode base64 JWT payload"), null);
	} catch (e) {
		return Dn("Caught error parsing JWT payload as JSON", e?.toString()), null;
	}
}
function $n(e) {
	let t = Qn(e);
	return D(t, "internal-error"), D(t.exp !== void 0, "internal-error"), D(t.iat !== void 0, "internal-error"), Number(t.exp) - Number(t.iat);
}
async function er(e, t, n = !1) {
	if (n) return t;
	try {
		return await t;
	} catch (t) {
		throw t instanceof Oe && tr(t) && e.auth.currentUser === e && await e.auth.signOut(), t;
	}
}
function tr({ code: e }) {
	return e === "auth/user-disabled" || e === "auth/user-token-expired";
}
async function nr(e) {
	let t = e.auth, n = await er(e, Jn(t, { idToken: await e.getIdToken() }));
	D(n?.users.length, t, "internal-error");
	let r = n.users[0];
	e._notifyReloadListener(r);
	let i = r.providerUserInfo?.length ? ar(r.providerUserInfo) : [], a = ir(e.providerData, i), o = e.isAnonymous, s = !(e.email && r.passwordHash) && !a?.length, c = o ? s : !1, l = {
		uid: r.localId,
		displayName: r.displayName || null,
		photoURL: r.photoUrl || null,
		email: r.email || null,
		emailVerified: r.emailVerified || !1,
		phoneNumber: r.phoneNumber || null,
		tenantId: r.tenantId || null,
		providerData: a,
		metadata: new xa(r.createdAt, r.lastLoginAt),
		isAnonymous: c
	};
	Object.assign(e, l);
}
async function rr(e) {
	let t = g(e);
	await nr(t), await t.auth._persistUserIfCurrent(t), t.auth._notifyListenersIfCurrent(t);
}
function ir(e, t) {
	return [...e.filter((e) => !t.some((t) => t.providerId === e.providerId)), ...t];
}
function ar(e) {
	return e.map(({ providerId: e, ...t }) => ({
		providerId: e,
		uid: t.rawId || "",
		displayName: t.displayName || null,
		email: t.email || null,
		phoneNumber: t.phoneNumber || null,
		photoURL: t.photoUrl || null
	}));
}
async function or(e, t) {
	let n = await Bn(e, {}, async () => {
		let n = ie({
			grant_type: "refresh_token",
			refresh_token: t
		}).slice(1), { tokenApiHost: r, apiKey: i } = e.config, a = await Hn(e, r, "/v1/token", `key=${i}`), o = await e._getAdditionalHeaders();
		o["Content-Type"] = "application/x-www-form-urlencoded";
		let s = {
			method: "POST",
			headers: o,
			body: n
		};
		return e.emulatorConfig && _(e.emulatorConfig.host) && (s.credentials = "include"), ma.fetch()(a, s);
	});
	return {
		accessToken: n.access_token,
		expiresIn: n.expires_in,
		refreshToken: n.refresh_token
	};
}
async function sr(e, t) {
	return k(e, "POST", "/v2/accounts:revokeToken", O(e, t));
}
function cr(e, t) {
	D(typeof e == "string" || e === void 0, "internal-error", { appName: t });
}
function lr(e) {
	Nn(e instanceof Function, "Expected a class definition");
	let t = wa.get(e);
	return t ? (Nn(t instanceof e, "Instance stored in cache mismatched with class"), t) : (t = new e(), wa.set(e, t), t);
}
function ur(e, t, n) {
	return `firebase:${e}:${t}:${n}`;
}
function dr(e) {
	let t = e.toLowerCase();
	if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/")) return "Opera";
	if (hr(t)) return "IEMobile";
	if (t.includes("msie") || t.includes("trident/")) return "IE";
	if (t.includes("edge/")) return "Edge";
	if (fr(t)) return "Firefox";
	if (t.includes("silk/")) return "Silk";
	if (_r(t)) return "Blackberry";
	if (vr(t)) return "Webos";
	if (pr(t)) return "Safari";
	if ((t.includes("chrome/") || mr(t)) && !t.includes("edge/")) return "Chrome";
	if (gr(t)) return "Android";
	{
		let t = e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);
		if (t?.length === 2) return t[1];
	}
	return "Other";
}
function fr(e = o()) {
	return /firefox\//i.test(e);
}
function pr(e = o()) {
	let t = e.toLowerCase();
	return t.includes("safari/") && !t.includes("chrome/") && !t.includes("crios/") && !t.includes("android");
}
function mr(e = o()) {
	return /crios\//i.test(e);
}
function hr(e = o()) {
	return /iemobile/i.test(e);
}
function gr(e = o()) {
	return /android/i.test(e);
}
function _r(e = o()) {
	return /blackberry/i.test(e);
}
function vr(e = o()) {
	return /webos/i.test(e);
}
function yr(e = o()) {
	return /iphone|ipad|ipod/i.test(e) || /macintosh/i.test(e) && /mobile/i.test(e);
}
function br(e = o()) {
	return yr(e) && !!window.navigator?.standalone;
}
function xr() {
	return f() && document.documentMode === 10;
}
function Sr(e = o()) {
	return yr(e) || gr(e) || vr(e) || _r(e) || /windows phone/i.test(e) || hr(e);
}
function Cr(e, t = []) {
	let n;
	switch (e) {
		case "Browser":
			n = dr(o());
			break;
		case "Worker":
			n = `${dr(o())}-${e}`;
			break;
		default: n = e;
	}
	let r = t.length ? t.join(",") : "FirebaseCore-web";
	return `${n}/JsCore/${hn}/${r}`;
}
async function wr(e, t = {}) {
	return k(e, "GET", "/v2/passwordPolicy", O(e, t));
}
function Tr(e) {
	return g(e);
}
function Er(e) {
	Na = e;
}
function Dr(e) {
	return Na.loadJS(e);
}
function Or() {
	return Na.recaptchaEnterpriseScript;
}
function kr() {
	return Na.gapiScript;
}
function Ar(e) {
	return `__${e}${Math.floor(Math.random() * 1e6)}`;
}
async function jr(e, t, n, r = !1, i = !1) {
	let a = new Ra(e), o;
	if (i) o = La;
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
async function Mr(e, t, n, r, i) {
	return i === "EMAIL_PASSWORD_PROVIDER" ? e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER") ? r(e, await jr(e, t, n, n === "getOobCode")) : r(e, t).catch(async (i) => i.code === "auth/missing-recaptcha-token" ? (console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`), r(e, await jr(e, t, n, n === "getOobCode"))) : Promise.reject(i)) : i === "PHONE_PROVIDER" ? e._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER") ? r(e, await jr(e, t, n)).catch(async (i) => e._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER") === "AUDIT" && (i.code === "auth/missing-recaptcha-token" || i.code === "auth/invalid-app-credential") ? (console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`), r(e, await jr(e, t, n, !1, !0))) : Promise.reject(i)) : r(e, await jr(e, t, n, !1, !0)) : Promise.reject(i + " provider is not supported.");
}
async function Nr(e) {
	let t = Tr(e), n = new ya(await Kn(t, {
		clientType: "CLIENT_TYPE_WEB",
		version: "RECAPTCHA_ENTERPRISE"
	}));
	t.tenantId == null ? t._agentRecaptchaConfig = n : t._tenantRecaptchaConfigs[t.tenantId] = n, n.isAnyProviderEnabled() && new Ra(t).verify();
}
function Pr(e, t) {
	let n = _t(e, "auth");
	if (n.isInitialized()) {
		let e = n.getImmediate();
		if (ne(n.getOptions(), t ?? {})) return e;
		T(e, "already-initialized");
	}
	return n.initialize({ options: t });
}
function Fr(e, t) {
	let n = t?.persistence || [], r = (Array.isArray(n) ? n : [n]).map(lr);
	t?.errorMap && e._updateErrorMap(t.errorMap), e._initializeWithPersistence(r, t?.popupRedirectResolver);
}
function Ir(e, t, n) {
	let r = Tr(e);
	D(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
	let i = !!n?.disableWarnings, a = Lr(t), { host: o, port: s } = Rr(t), c = s === null ? "" : `:${s}`, l = { url: `${a}//${o}${c}/` }, u = Object.freeze({
		host: o,
		port: s,
		protocol: a.replace(":", ""),
		options: Object.freeze({ disableWarnings: i })
	});
	if (!r._canInitEmulator) {
		D(r.config.emulator && r.emulatorConfig, r, "emulator-config-failed"), D(ne(l, r.config.emulator) && ne(u, r.emulatorConfig), r, "emulator-config-failed");
		return;
	}
	r.config.emulator = l, r.emulatorConfig = u, r.settings.appVerificationDisabledForTesting = !0, _(o) ? ue(`${a}//${o}${c}`) : i || Br();
}
function Lr(e) {
	let t = e.indexOf(":");
	return t < 0 ? "" : e.substr(0, t + 1);
}
function Rr(e) {
	let t = Lr(e), n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
	if (!n) return {
		host: "",
		port: null
	};
	let r = n[2].split("@").pop() || "", i = /^(\[[^\]]+\])(:|$)/.exec(r);
	if (i) {
		let e = i[1];
		return {
			host: e,
			port: zr(r.substr(e.length + 1))
		};
	} else {
		let [e, t] = r.split(":");
		return {
			host: e,
			port: zr(t)
		};
	}
}
function zr(e) {
	if (!e) return null;
	let t = Number(e);
	return isNaN(t) ? null : t;
}
function Br() {
	function e() {
		let e = document.createElement("p"), t = e.style;
		e.innerText = "Running in emulator mode. Do not use with production credentials.", t.position = "fixed", t.width = "100%", t.backgroundColor = "#ffffff", t.border = ".1em solid #000000", t.color = "#b50000", t.bottom = "0px", t.left = "0px", t.margin = "0px", t.zIndex = "10000", t.textAlign = "center", e.classList.add("firebase-emulator-warning"), document.body.appendChild(e);
	}
	typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", e) : e());
}
async function Vr(e, t) {
	return k(e, "POST", "/v1/accounts:signUp", t);
}
async function Hr(e, t) {
	return Vn(e, "POST", "/v1/accounts:signInWithPassword", O(e, t));
}
async function Ur(e, t) {
	return Vn(e, "POST", "/v1/accounts:signInWithEmailLink", O(e, t));
}
async function Wr(e, t) {
	return Vn(e, "POST", "/v1/accounts:signInWithEmailLink", O(e, t));
}
async function Gr(e, t) {
	return Vn(e, "POST", "/v1/accounts:signInWithIdp", O(e, t));
}
async function Kr(e, t) {
	return k(e, "POST", "/v1/accounts:sendVerificationCode", O(e, t));
}
async function qr(e, t) {
	return Vn(e, "POST", "/v1/accounts:signInWithPhoneNumber", O(e, t));
}
async function Jr(e, t) {
	let n = await Vn(e, "POST", "/v1/accounts:signInWithPhoneNumber", O(e, t));
	if (n.temporaryProof) throw Wn(e, "account-exists-with-different-credential", n);
	return n;
}
async function Yr(e, t) {
	return Vn(e, "POST", "/v1/accounts:signInWithPhoneNumber", O(e, {
		...t,
		operation: "REAUTH"
	}), Ua);
}
function Xr(e) {
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
function Zr(e) {
	let t = ae(oe(e)).link, n = t ? ae(oe(t)).deep_link_id : null, r = ae(oe(e)).deep_link_id;
	return (r ? ae(oe(r)).link : null) || r || n || t || e;
}
function Qr(e) {
	return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null;
}
function $r(e, t, n, r) {
	return (t === "reauthenticate" ? n._getReauthenticationResolver(e) : n._getIdTokenResponse(e)).catch((n) => {
		throw n.code === "auth/multi-factor-auth-required" ? eo._fromErrorAndOperation(e, n, t, r) : n;
	});
}
async function ei(e, t, n = !1) {
	let r = await er(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
	return $a._forOperation(e, "link", r);
}
async function ti(e, t, n = !1) {
	let { auth: r } = e;
	if (vt(r.app)) return Promise.reject(kn(r));
	let i = "reauthenticate";
	try {
		let a = await er(e, $r(r, i, t, e), n);
		D(a.idToken, r, "internal-error");
		let o = Qn(a.idToken);
		D(o, r, "internal-error");
		let { sub: s } = o;
		return D(e.uid === s, r, "user-mismatch"), $a._forOperation(e, i, a);
	} catch (e) {
		throw e?.code === "auth/user-not-found" && T(r, "user-mismatch"), e;
	}
}
async function ni(e, t, n = !1) {
	if (vt(e.app)) return Promise.reject(kn(e));
	let r = "signIn", i = await $r(e, r, t), a = await $a._fromIdTokenResponse(e, r, i);
	return n || await e._updateCurrentUser(a.user), a;
}
async function ri(e, t) {
	return ni(Tr(e), t);
}
async function ii(e) {
	let t = Tr(e);
	t._getPasswordPolicyInternal() && await t._updatePasswordPolicy();
}
function ai(e, t, n) {
	return vt(e.app) ? Promise.reject(kn(e)) : ri(g(e), Ka.credential(t, n)).catch(async (t) => {
		throw t.code === "auth/password-does-not-meet-requirements" && ii(e), t;
	});
}
function oi(e, t, n, r) {
	return g(e).onIdTokenChanged(t, n, r);
}
function si(e, t, n) {
	return g(e).beforeAuthStateChanged(t, n);
}
function ci(e, t) {
	return k(e, "POST", "/v2/accounts/mfaEnrollment:start", O(e, t));
}
function li(e, t) {
	return k(e, "POST", "/v2/accounts/mfaEnrollment:finalize", O(e, t));
}
function di(e, t) {
	return k(e, "POST", "/v2/accounts/mfaEnrollment:start", O(e, t));
}
function fi(e, t) {
	return k(e, "POST", "/v2/accounts/mfaEnrollment:finalize", O(e, t));
}
function pi(e) {
	let t = e.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"), n = RegExp(`${t}=([^;]+)`);
	return document.cookie.match(n)?.[1] ?? null;
}
function mi(e) {
	return `${window.location.protocol === "http:" ? "__dev_" : "__HOST-"}FIREBASE_${e.split(":")[3]}`;
}
function hi(e) {
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
function gi(e = "", t = 10) {
	let n = "";
	for (let e = 0; e < t; e++) n += Math.floor(Math.random() * 10);
	return e + n;
}
function _i() {
	return window;
}
function vi(e) {
	_i().location.href = e;
}
function yi() {
	return _i().WorkerGlobalScope !== void 0 && typeof _i().importScripts == "function";
}
async function bi() {
	if (!navigator?.serviceWorker) return null;
	try {
		return (await navigator.serviceWorker.ready).active;
	} catch {
		return null;
	}
}
function xi() {
	return navigator?.serviceWorker?.controller || null;
}
function Si() {
	return yi() ? self : null;
}
function Ci(e, t) {
	return e.transaction([go], t ? "readwrite" : "readonly").objectStore(go);
}
function wi() {
	return new vo(indexedDB.deleteDatabase(mo)).toPromise();
}
function Ti() {
	let e = indexedDB.open(mo, ho);
	return new Promise((t, n) => {
		e.addEventListener("error", () => {
			n(e.error);
		}), e.addEventListener("upgradeneeded", () => {
			let t = e.result;
			try {
				t.createObjectStore(go, { keyPath: _o });
			} catch (e) {
				n(e);
			}
		}), e.addEventListener("success", async () => {
			let n = e.result;
			n.objectStoreNames.contains(go) ? t(n) : (n.close(), await wi(), t(await Ti()));
		});
	});
}
async function Ei(e, t, n) {
	return new vo(Ci(e, !0).put({
		[_o]: t,
		value: n
	})).toPromise();
}
async function Di(e, t) {
	let n = await new vo(Ci(e, !1).get(t)).toPromise();
	return n === void 0 ? null : n.value;
}
function Oi(e, t) {
	return new vo(Ci(e, !0).delete(t)).toPromise();
}
function ki(e, t) {
	return k(e, "POST", "/v2/accounts/mfaSignIn:start", O(e, t));
}
function Ai(e, t) {
	return k(e, "POST", "/v2/accounts/mfaSignIn:finalize", O(e, t));
}
function ji(e, t) {
	return k(e, "POST", "/v2/accounts/mfaSignIn:finalize", O(e, t));
}
async function Mi(e, t, n) {
	if (!e._getRecaptchaConfig()) try {
		await Nr(e);
	} catch {
		console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.");
	}
	try {
		let r;
		if (r = typeof t == "string" ? { phoneNumber: t } : t, "session" in r) {
			let t = r.session;
			if ("phoneNumber" in r) return D(t.type === "enroll", e, "internal-error"), (await Mr(e, {
				idToken: t.credential,
				phoneEnrollmentInfo: {
					phoneNumber: r.phoneNumber,
					clientType: "CLIENT_TYPE_WEB"
				}
			}, "mfaSmsEnrollment", async (e, t) => t.phoneEnrollmentInfo.captchaResponse === La ? (D(n?.type === Co, e, "argument-error"), ci(e, await Ni(e, t, n))) : ci(e, t), "PHONE_PROVIDER").catch((e) => Promise.reject(e))).phoneSessionInfo.sessionInfo;
			{
				D(t.type === "signin", e, "internal-error");
				let i = r.multiFactorHint?.uid || r.multiFactorUid;
				return D(i, e, "missing-multi-factor-info"), (await Mr(e, {
					mfaPendingCredential: t.credential,
					mfaEnrollmentId: i,
					phoneSignInInfo: { clientType: "CLIENT_TYPE_WEB" }
				}, "mfaSmsSignIn", async (e, t) => t.phoneSignInInfo.captchaResponse === La ? (D(n?.type === Co, e, "argument-error"), ki(e, await Ni(e, t, n))) : ki(e, t), "PHONE_PROVIDER").catch((e) => Promise.reject(e))).phoneResponseInfo.sessionInfo;
			}
		} else return (await Mr(e, {
			phoneNumber: r.phoneNumber,
			clientType: "CLIENT_TYPE_WEB"
		}, "sendVerificationCode", async (e, t) => t.captchaResponse === La ? (D(n?.type === Co, e, "argument-error"), Kr(e, await Ni(e, t, n))) : Kr(e, t), "PHONE_PROVIDER").catch((e) => Promise.reject(e))).sessionInfo;
	} finally {
		n?._reset();
	}
}
async function Ni(e, t, n) {
	D(n.type === Co, e, "argument-error");
	let r = await n.verify();
	D(typeof r == "string", e, "argument-error");
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
function Pi(e, t) {
	return t ? lr(t) : (D(e._popupRedirectResolver, e, "argument-error"), e._popupRedirectResolver);
}
function Fi(e) {
	return ni(e.auth, new To(e), e.bypassAuthState);
}
function Ii(e) {
	let { auth: t, user: n } = e;
	return D(n, t, "internal-error"), ti(n, new To(e), e.bypassAuthState);
}
async function Li(e) {
	let { auth: t, user: n } = e;
	return D(n, t, "internal-error"), ei(n, new To(e), e.bypassAuthState);
}
async function Ri(e, t, n) {
	if (vt(e.app)) return Promise.reject(E(e, "operation-not-supported-in-this-environment"));
	let r = Tr(e);
	return An(e, t, qa), new Oo(r, "signInViaPopup", t, Pi(r, n)).executeNotNull();
}
async function zi(e, t) {
	let n = Hi(t), r = Vi(e);
	if (!await r._isAvailable()) return !1;
	let i = await r._get(n) === "true";
	return await r._remove(n), i;
}
function Bi(e, t) {
	Ao.set(e._key(), t);
}
function Vi(e) {
	return lr(e._redirectPersistence);
}
function Hi(e) {
	return ur(ko, e.config.apiKey, e.name);
}
async function Ui(e, t, n = !1) {
	if (vt(e.app)) return Promise.reject(kn(e));
	let r = Tr(e), i = await new jo(r, Pi(r, t), n).execute();
	return i && !n && (delete i.user._redirectEventId, await r._persistUserIfCurrent(i.user), await r._setRedirectUser(null, t)), i;
}
function Wi(e) {
	return [
		e.type,
		e.eventId,
		e.sessionId,
		e.tenantId
	].filter((e) => e).join("-");
}
function Gi({ type: e, error: t }) {
	return e === "unknown" && t?.code === "auth/no-auth-event";
}
function Ki(e) {
	switch (e.type) {
		case "signInViaRedirect":
		case "linkViaRedirect":
		case "reauthViaRedirect": return !0;
		case "unknown": return Gi(e);
		default: return !1;
	}
}
async function qi(e, t = {}) {
	return k(e, "GET", "/v1/projects", t);
}
async function Ji(e) {
	if (e.config.emulator) return;
	let { authorizedDomains: t } = await qi(e);
	for (let e of t) try {
		if (Yi(e)) return;
	} catch {}
	T(e, "unauthorized-domain");
}
function Yi(e) {
	let t = Pn(), { protocol: n, hostname: r } = new URL(t);
	if (e.startsWith("chrome-extension://")) {
		let i = new URL(e);
		return i.hostname === "" && r === "" ? n === "chrome-extension:" && e.replace("chrome-extension://", "") === t.replace("chrome-extension://", "") : n === "chrome-extension:" && i.hostname === r;
	}
	if (!Fo.test(n)) return !1;
	if (Po.test(e)) return r === e;
	let i = e.replace(/\./g, "\\.");
	return RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
}
function Xi() {
	let e = _i().___jsl;
	if (e?.H) {
		for (let t of Object.keys(e.H)) if (e.H[t].r = e.H[t].r || [], e.H[t].L = e.H[t].L || [], e.H[t].r = [...e.H[t].L], e.CP) for (let t = 0; t < e.CP.length; t++) e.CP[t] = null;
	}
}
function Zi(e) {
	return new Promise((t, n) => {
		function r() {
			Xi(), gapi.load("gapi.iframes", {
				callback: () => {
					t(gapi.iframes.getContext());
				},
				ontimeout: () => {
					Xi(), n(E(e, "network-request-failed"));
				},
				timeout: Io.get()
			});
		}
		if (_i().gapi?.iframes?.Iframe) t(gapi.iframes.getContext());
		else if (_i().gapi?.load) r();
		else {
			let t = Ar("iframefcb");
			return _i()[t] = () => {
				gapi.load ? r() : n(E(e, "network-request-failed"));
			}, Dr(`${kr()}?onload=${t}`).catch((e) => n(e));
		}
	}).catch((e) => {
		throw Lo = null, e;
	});
}
function Qi(e) {
	return Lo ||= Zi(e), Lo;
}
function $i(e) {
	let t = e.config;
	D(t.authDomain, e, "auth-domain-config-required");
	let n = t.emulator ? zn(t, Bo) : `https://${e.config.authDomain}/${zo}`, r = {
		apiKey: t.apiKey,
		appName: e.name,
		v: hn
	}, i = Ho.get(e.config.apiHost);
	i && (r.eid = i);
	let a = e._getFrameworks();
	return a.length && (r.fw = a.join(",")), `${n}?${ie(r).slice(1)}`;
}
async function ea(e) {
	let t = await Qi(e), n = _i().gapi;
	return D(n, e, "internal-error"), t.open({
		where: document.body,
		url: $i(e),
		messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
		attributes: Vo,
		dontclear: !0
	}, (t) => new Promise(async (n, r) => {
		await t.restyle({ setHideOnLeave: !1 });
		let i = E(e, "network-request-failed"), a = _i().setTimeout(() => {
			r(i);
		}, Ro.get());
		function o() {
			_i().clearTimeout(a), n(t);
		}
		t.ping(o).then(o, () => {
			r(i);
		});
	}));
}
function ta(e, t, n, r = Wo, i = Go) {
	let a = Math.max((window.screen.availHeight - i) / 2, 0).toString(), s = Math.max((window.screen.availWidth - r) / 2, 0).toString(), c = "", l = {
		...Uo,
		width: r.toString(),
		height: i.toString(),
		top: a,
		left: s
	}, u = o().toLowerCase();
	n && (c = mr(u) ? Ko : n), fr(u) && (t ||= qo, l.scrollbars = "yes");
	let d = Object.entries(l).reduce((e, [t, n]) => `${e}${t}=${n},`, "");
	if (br(u) && c !== "_self") return na(t || "", c), new Jo(null);
	let f = window.open(t || "", c, d);
	D(f, e, "popup-blocked");
	try {
		f.focus();
	} catch {}
	return new Jo(f);
}
function na(e, t) {
	let n = document.createElement("a");
	n.href = e, n.target = t;
	let r = document.createEvent("MouseEvent");
	r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), n.dispatchEvent(r);
}
async function ra(e, t, n, r, i, a) {
	D(e.config.authDomain, e, "auth-domain-config-required"), D(e.config.apiKey, e, "invalid-api-key");
	let o = {
		apiKey: e.config.apiKey,
		appName: e.name,
		authType: n,
		redirectUrl: r,
		v: hn,
		eventId: i
	};
	if (t instanceof qa) {
		t.setDefaultLanguage(e.languageCode), o.providerId = t.providerId || "", te(t.getCustomParameters()) || (o.customParameters = JSON.stringify(t.getCustomParameters()));
		for (let [e, t] of Object.entries(a || {})) o[e] = t;
	}
	if (t instanceof Ja) {
		let e = t.getScopes().filter((e) => e !== "");
		e.length > 0 && (o.scopes = e.join(","));
	}
	e.tenantId && (o.tid = e.tenantId);
	let s = o;
	for (let e of Object.keys(s)) s[e] === void 0 && delete s[e];
	let c = await e._getAppCheckToken(), l = c ? `#${Zo}=${encodeURIComponent(c)}` : "";
	return `${ia(e)}?${ie(s).slice(1)}${l}`;
}
function ia({ config: e }) {
	return e.emulator ? zn(e, Xo) : `https://${e.authDomain}/${Yo}`;
}
function aa(e) {
	return e === void 0 || e?.length === 0;
}
function oa(e) {
	switch (e) {
		case "Node": return "node";
		case "ReactNative": return "rn";
		case "Worker": return "webworker";
		case "Cordova": return "cordova";
		case "WebExtension": return "web-extension";
		default: return;
	}
}
function sa(e) {
	gt(new Fe("auth", (t, { options: n }) => {
		let r = t.getProvider("app").getImmediate(), i = t.getProvider("heartbeat"), a = t.getProvider("app-check-internal"), { apiKey: o, authDomain: s } = r.options;
		D(o && !o.includes(":"), "invalid-api-key", { appName: r.name });
		let c = new ja(r, i, a, {
			apiKey: o,
			authDomain: s,
			clientPlatform: e,
			apiHost: "identitytoolkit.googleapis.com",
			tokenApiHost: "securetoken.googleapis.com",
			apiScheme: "https",
			sdkClientVersion: Cr(e)
		});
		return Fr(c, n), c;
	}, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e, t, n) => {
		e.getProvider("auth-internal").initialize();
	})), gt(new Fe("auth-internal", (e) => ((e) => new ls(e))(Tr(e.getProvider("auth").getImmediate())), "PRIVATE").setInstantiationMode("EXPLICIT")), xt(ss, cs, oa(e)), xt(ss, cs, "esm2020");
}
function ca(e = bt()) {
	let t = _t(e, "auth");
	if (t.isInitialized()) return t.getImmediate();
	let n = Pr(e, {
		popupRedirectResolver: es,
		persistence: [
			So,
			oo,
			uo
		]
	}), r = Te("authTokenSyncURL");
	if (r && typeof isSecureContext == "boolean" && isSecureContext) {
		let e = new URL(r, location.origin);
		if (location.origin === e.origin) {
			let t = fs(e.toString());
			si(n, t, () => t(n.currentUser)), oi(n, (e) => t(e));
		}
	}
	let i = Se("auth");
	return i && Ir(n, `http://${i}`), n;
}
function la() {
	return document.getElementsByTagName("head")?.[0] ?? document;
}
var ua, da, fa, pa, ma, ha, ga, _a, va, ya, ba, xa, Sa, Ca, wa, Ta, Ea, Da, Oa, ka, Aa, ja, Ma, Na, Pa, Fa, Ia, La, Ra, za, Ba, Va, Ha, Ua, Wa, Ga, Ka, qa, Ja, Ya, Xa, Za, Qa, $a, eo, to, no, ro, io, ao, oo, so, co, lo, uo, fo, po, mo, ho, go, _o, vo, yo, bo, xo, So, Co, wo, To, Eo, Do, Oo, ko, Ao, jo, Mo, No, Po, Fo, Io, Lo, Ro, zo, Bo, Vo, Ho, Uo, Wo, Go, Ko, qo, Jo, Yo, Xo, Zo, Qo, $o, es, ts, ns, rs, is, as, os, ss, cs, ls, us, ds, fs, ps = e((() => {
	Cn(), Me(), We(), y(), ua = Tn, da = new ke("auth", "Firebase", Tn()), fa = new Ue("@firebase/auth"), pa = class {
		constructor(e, t) {
			this.shortDelay = e, this.longDelay = t, Nn(t > e, "Short delay should be less than long delay!"), this.isMobile = s() || d();
		}
		get() {
			return Ln() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
		}
	}, ma = class {
		static initialize(e, t, n) {
			this.fetchImpl = e, t && (this.headersImpl = t), n && (this.responseImpl = n);
		}
		static fetch() {
			if (this.fetchImpl) return this.fetchImpl;
			if (typeof self < "u" && "fetch" in self) return self.fetch;
			if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
			if (typeof fetch < "u") return fetch;
			Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
		}
		static headers() {
			if (this.headersImpl) return this.headersImpl;
			if (typeof self < "u" && "Headers" in self) return self.Headers;
			if (typeof globalThis < "u" && globalThis.Headers) return globalThis.Headers;
			if (typeof Headers < "u") return Headers;
			Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
		}
		static response() {
			if (this.responseImpl) return this.responseImpl;
			if (typeof self < "u" && "Response" in self) return self.Response;
			if (typeof globalThis < "u" && globalThis.Response) return globalThis.Response;
			if (typeof Response < "u") return Response;
			Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
		}
	}, ha = {
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
	}, ga = [
		"/v1/accounts:signInWithCustomToken",
		"/v1/accounts:signInWithEmailLink",
		"/v1/accounts:signInWithIdp",
		"/v1/accounts:signInWithPassword",
		"/v1/accounts:signInWithPhoneNumber",
		"/v1/token"
	], _a = new pa(3e4, 6e4), va = class {
		clearNetworkTimeout() {
			clearTimeout(this.timer);
		}
		constructor(e) {
			this.auth = e, this.timer = null, this.promise = new Promise((e, t) => {
				this.timer = setTimeout(() => t(E(this.auth, "network-request-failed")), _a.get());
			});
		}
	}, ya = class {
		constructor(e) {
			if (this.siteKey = "", this.recaptchaEnforcementState = [], e.recaptchaKey === void 0) throw Error("recaptchaKey undefined");
			this.siteKey = e.recaptchaKey.split("/")[3], this.recaptchaEnforcementState = e.recaptchaEnforcementState;
		}
		getProviderEnforcementState(e) {
			if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0) return null;
			for (let t of this.recaptchaEnforcementState) if (t.provider && t.provider === e) return Un(t.enforcementState);
			return null;
		}
		isProviderEnabled(e) {
			return this.getProviderEnforcementState(e) === "ENFORCE" || this.getProviderEnforcementState(e) === "AUDIT";
		}
		isAnyProviderEnabled() {
			return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER") || this.isProviderEnabled("PHONE_PROVIDER");
		}
	}, ba = class {
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
	}, xa = class {
		constructor(e, t) {
			this.createdAt = e, this.lastLoginAt = t, this._initializeTime();
		}
		_initializeTime() {
			this.lastSignInTime = Yn(this.lastLoginAt), this.creationTime = Yn(this.createdAt);
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
	}, Sa = class e {
		constructor() {
			this.refreshToken = null, this.accessToken = null, this.expirationTime = null;
		}
		get isExpired() {
			return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
		}
		updateFromServerResponse(e) {
			D(e.idToken, "internal-error"), D(e.idToken !== void 0, "internal-error"), D(e.refreshToken !== void 0, "internal-error");
			let t = "expiresIn" in e && e.expiresIn !== void 0 ? Number(e.expiresIn) : $n(e.idToken);
			this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
		}
		updateFromIdToken(e) {
			D(e.length !== 0, "internal-error");
			let t = $n(e);
			this.updateTokensAndExpiration(e, null, t);
		}
		async getToken(e, t = !1) {
			return !t && this.accessToken && !this.isExpired ? this.accessToken : (D(this.refreshToken, e, "user-token-expired"), this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null);
		}
		clearRefreshToken() {
			this.refreshToken = null;
		}
		async refresh(e, t) {
			let { accessToken: n, refreshToken: r, expiresIn: i } = await or(e, t);
			this.updateTokensAndExpiration(n, r, Number(i));
		}
		updateTokensAndExpiration(e, t, n) {
			this.refreshToken = t || null, this.accessToken = e || null, this.expirationTime = Date.now() + n * 1e3;
		}
		static fromJSON(t, n) {
			let { refreshToken: r, accessToken: i, expirationTime: a } = n, o = new e();
			return r && (D(typeof r == "string", "internal-error", { appName: t }), o.refreshToken = r), i && (D(typeof i == "string", "internal-error", { appName: t }), o.accessToken = i), a && (D(typeof a == "number", "internal-error", { appName: t }), o.expirationTime = a), o;
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
			return Mn("not implemented");
		}
	}, Ca = class e {
		constructor({ uid: e, auth: t, stsTokenManager: n, ...r }) {
			this.providerId = "firebase", this.proactiveRefresh = new ba(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = e, this.auth = t, this.stsTokenManager = n, this.accessToken = n.accessToken, this.displayName = r.displayName || null, this.email = r.email || null, this.emailVerified = r.emailVerified || !1, this.phoneNumber = r.phoneNumber || null, this.photoURL = r.photoURL || null, this.isAnonymous = r.isAnonymous || !1, this.tenantId = r.tenantId || null, this.providerData = r.providerData ? [...r.providerData] : [], this.metadata = new xa(r.createdAt || void 0, r.lastLoginAt || void 0);
		}
		async getIdToken(e) {
			let t = await er(this, this.stsTokenManager.getToken(this.auth, e));
			return D(t, this.auth, "internal-error"), this.accessToken !== t && (this.accessToken = t, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), t;
		}
		getIdTokenResult(e) {
			return Xn(this, e);
		}
		reload() {
			return rr(this);
		}
		_assign(e) {
			this !== e && (D(this.uid === e.uid, this.auth, "internal-error"), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map((e) => ({ ...e })), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager));
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
			D(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = e, this.reloadUserInfo &&= (this._notifyReloadListener(this.reloadUserInfo), null);
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
			e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), n = !0), t && await nr(this), await this.auth._persistUserIfCurrent(this), n && this.auth._notifyListenersIfCurrent(this);
		}
		async delete() {
			if (vt(this.auth.app)) return Promise.reject(kn(this.auth));
			let e = await this.getIdToken();
			return await er(this, qn(this.auth, { idToken: e })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
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
			let r = n.displayName ?? void 0, i = n.email ?? void 0, a = n.phoneNumber ?? void 0, o = n.photoURL ?? void 0, s = n.tenantId ?? void 0, c = n._redirectEventId ?? void 0, l = n.createdAt ?? void 0, u = n.lastLoginAt ?? void 0, { uid: d, emailVerified: f, isAnonymous: p, providerData: ee, stsTokenManager: m } = n;
			D(d && m, t, "internal-error");
			let h = Sa.fromJSON(this.name, m);
			D(typeof d == "string", t, "internal-error"), cr(r, t.name), cr(i, t.name), D(typeof f == "boolean", t, "internal-error"), D(typeof p == "boolean", t, "internal-error"), cr(a, t.name), cr(o, t.name), cr(s, t.name), cr(c, t.name), cr(l, t.name), cr(u, t.name);
			let te = new e({
				uid: d,
				auth: t,
				email: i,
				emailVerified: f,
				displayName: r,
				isAnonymous: p,
				photoURL: o,
				phoneNumber: a,
				tenantId: s,
				stsTokenManager: h,
				createdAt: l,
				lastLoginAt: u
			});
			return ee && Array.isArray(ee) && (te.providerData = ee.map((e) => ({ ...e }))), c && (te._redirectEventId = c), te;
		}
		static async _fromIdTokenResponse(t, n, r = !1) {
			let i = new Sa();
			i.updateFromServerResponse(n);
			let a = new e({
				uid: n.localId,
				auth: t,
				stsTokenManager: i,
				isAnonymous: r
			});
			return await nr(a), a;
		}
		static async _fromGetAccountInfoResponse(t, n, r) {
			let i = n.users[0];
			D(i.localId !== void 0, "internal-error");
			let a = i.providerUserInfo === void 0 ? [] : ar(i.providerUserInfo), o = !(i.email && i.passwordHash) && !a?.length, s = new Sa();
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
				metadata: new xa(i.createdAt, i.lastLoginAt),
				isAnonymous: !(i.email && i.passwordHash) && !a?.length
			};
			return Object.assign(c, l), c;
		}
	}, wa = /* @__PURE__ */ new Map(), Ta = class {
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
	}, Ta.type = "NONE", Ea = Ta, Da = class e {
		constructor(e, t, n) {
			this.persistence = e, this.auth = t, this.userKey = n;
			let { config: r, name: i } = this.auth;
			this.fullUserKey = ur(this.userKey, r.apiKey, i), this.fullPersistenceKey = ur("persistence", r.apiKey, i), this.boundEventHandler = t._onStorageEvent.bind(t), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
		}
		setCurrentUser(e) {
			return this.persistence._set(this.fullUserKey, e.toJSON());
		}
		async getCurrentUser() {
			let e = await this.persistence._get(this.fullUserKey);
			if (!e) return null;
			if (typeof e == "string") {
				let t = await Jn(this.auth, { idToken: e }).catch(() => void 0);
				return t ? Ca._fromGetAccountInfoResponse(this.auth, t, e) : null;
			}
			return Ca._fromJSON(this.auth, e);
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
			if (!n.length) return new e(lr(Ea), t, r);
			let i = (await Promise.all(n.map(async (e) => {
				if (await e._isAvailable()) return e;
			}))).filter((e) => e), a = i[0] || lr(Ea), o = ur(r, t.config.apiKey, t.name), s = null;
			for (let e of n) try {
				let n = await e._get(o);
				if (n) {
					let r;
					if (typeof n == "string") {
						let e = await Jn(t, { idToken: n }).catch(() => void 0);
						if (!e) break;
						r = await Ca._fromGetAccountInfoResponse(t, e, n);
					} else r = Ca._fromJSON(t, n);
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
	}, Oa = class {
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
	}, ka = 6, Aa = class {
		constructor(e) {
			let t = e.customStrengthOptions;
			this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = t.minPasswordLength ?? ka, t.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = t.maxPasswordLength), t.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = t.containsLowercaseCharacter), t.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = t.containsUppercaseCharacter), t.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = t.containsNumericCharacter), t.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = t.containsNonAlphanumericCharacter), this.enforcementState = e.enforcementState, this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = e.allowedNonAlphanumericCharacters?.join("") ?? "", this.forceUpgradeOnSignin = e.forceUpgradeOnSignin ?? !1, this.schemaVersion = e.schemaVersion;
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
	}, ja = class {
		constructor(e, t, n, r) {
			this.app = e, this.heartbeatServiceProvider = t, this.appCheckServiceProvider = n, this.config = r, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Ma(this), this.idTokenSubscription = new Ma(this), this.beforeStateQueue = new Oa(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = da, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this._resolvePersistenceManagerAvailable = void 0, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = r.sdkClientVersion, this._persistenceManagerAvailable = new Promise((e) => this._resolvePersistenceManagerAvailable = e);
		}
		_initializeWithPersistence(e, t) {
			return t && (this._popupRedirectResolver = lr(t)), this._initializationPromise = this.queue(async () => {
				if (!this._deleted && (this.persistenceManager = await Da.create(this, e), this._resolvePersistenceManagerAvailable?.(), !this._deleted)) {
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
				let t = await Jn(this, { idToken: e }), n = await Ca._fromGetAccountInfoResponse(this, t, e);
				await this.directlySetCurrentUser(n);
			} catch (e) {
				console.warn("FirebaseServerApp could not login user with provided authIdToken: ", e), await this.directlySetCurrentUser(null);
			}
		}
		async initializeCurrentUser(e) {
			if (vt(this.app)) {
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
			return D(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === n._redirectEventId ? this.directlySetCurrentUser(n) : this.reloadAndSetCurrentUserOrClear(n);
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
				await nr(e);
			} catch (e) {
				if (e?.code !== "auth/network-request-failed") return this.directlySetCurrentUser(null);
			}
			return this.directlySetCurrentUser(e);
		}
		useDeviceLanguage() {
			this.languageCode = Rn();
		}
		async _delete() {
			this._deleted = !0;
		}
		async updateCurrentUser(e) {
			if (vt(this.app)) return Promise.reject(kn(this));
			let t = e ? g(e) : null;
			return t && D(t.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(t && t._clone(this));
		}
		async _updateCurrentUser(e, t = !1) {
			if (!this._deleted) return e && D(this.tenantId === e.tenantId, this, "tenant-id-mismatch"), t || await this.beforeStateQueue.runMiddleware(e), this.queue(async () => {
				await this.directlySetCurrentUser(e), this.notifyAuthListeners();
			});
		}
		async signOut() {
			return vt(this.app) ? Promise.reject(kn(this)) : (await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0));
		}
		setPersistence(e) {
			return vt(this.app) ? Promise.reject(kn(this)) : this.queue(async () => {
				await this.assertedPersistence.setPersistence(lr(e));
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
			let e = new Aa(await wr(this));
			this.tenantId === null ? this._projectPasswordPolicy = e : this._tenantPasswordPolicies[this.tenantId] = e;
		}
		_getPersistenceType() {
			return this.assertedPersistence.persistence.type;
		}
		_getPersistence() {
			return this.assertedPersistence.persistence;
		}
		_updateErrorMap(e) {
			this._errorFactory = new ke("auth", "Firebase", e());
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
				this.tenantId != null && (t.tenantId = this.tenantId), await sr(this, t);
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
				let t = e && lr(e) || this._popupRedirectResolver;
				D(t, this, "argument-error"), this.redirectPersistenceManager = await Da.create(this, [lr(t._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
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
			if (D(o, this, "internal-error"), o.then(() => {
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
			return D(this.persistenceManager, this, "internal-error"), this.persistenceManager;
		}
		_logFramework(e) {
			!e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = Cr(this.config.clientPlatform, this._getFrameworks()));
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
			if (vt(this.app) && this.app.settings.appCheckToken) return this.app.settings.appCheckToken;
			let e = await this.appCheckServiceProvider.getImmediate({ optional: !0 })?.getToken();
			return e?.error && En(`Error while retrieving App Check token: ${e.error}`), e?.token;
		}
	}, Ma = class {
		constructor(e) {
			this.auth = e, this.observer = null, this.addObserver = se((e) => this.observer = e);
		}
		get next() {
			return D(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer);
		}
	}, Na = {
		async loadJS() {
			throw Error("Unable to load external scripts");
		},
		recaptchaV2Script: "",
		recaptchaEnterpriseScript: "",
		gapiScript: ""
	}, Pa = class {
		constructor() {
			this.enterprise = new Fa();
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
	}, Fa = class {
		ready(e) {
			e();
		}
		execute(e, t) {
			return Promise.resolve("token");
		}
		render(e, t) {
			return "";
		}
	}, Ia = "recaptcha-enterprise", La = "NO_RECAPTCHA", Ra = class {
		constructor(e) {
			this.type = Ia, this.auth = Tr(e);
		}
		async verify(e = "verify", t = !1) {
			async function n(e) {
				if (!t) {
					if (e.tenantId == null && e._agentRecaptchaConfig != null) return e._agentRecaptchaConfig.siteKey;
					if (e.tenantId != null && e._tenantRecaptchaConfigs[e.tenantId] !== void 0) return e._tenantRecaptchaConfigs[e.tenantId].siteKey;
				}
				return new Promise(async (t, n) => {
					Kn(e, {
						clientType: "CLIENT_TYPE_WEB",
						version: "RECAPTCHA_ENTERPRISE"
					}).then((r) => {
						if (r.recaptchaKey === void 0) n(/* @__PURE__ */ Error("recaptcha Enterprise site key undefined"));
						else {
							let n = new ya(r);
							return e.tenantId == null ? e._agentRecaptchaConfig = n : e._tenantRecaptchaConfigs[e.tenantId] = n, t(n.siteKey);
						}
					}).catch((e) => {
						n(e);
					});
				});
			}
			function r(t, n, r) {
				let i = window.grecaptcha;
				Gn(i) ? i.enterprise.ready(() => {
					i.enterprise.execute(t, { action: e }).then((e) => {
						n(e);
					}).catch(() => {
						n(La);
					});
				}) : r(Error("No reCAPTCHA enterprise script loaded."));
			}
			return this.auth.settings.appVerificationDisabledForTesting ? new Pa().execute("siteKey", { action: "verify" }) : new Promise((e, i) => {
				n(this.auth).then((n) => {
					if (!t && Gn(window.grecaptcha)) r(n, e, i);
					else {
						if (typeof window > "u") {
							i(/* @__PURE__ */ Error("RecaptchaVerifier is only supported in browser"));
							return;
						}
						let t = Or();
						t.length !== 0 && (t += n), Dr(t).then(() => {
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
	}, za = class {
		constructor(e, t) {
			this.providerId = e, this.signInMethod = t;
		}
		toJSON() {
			return Mn("not implemented");
		}
		_getIdTokenResponse(e) {
			return Mn("not implemented");
		}
		_linkToIdToken(e, t) {
			return Mn("not implemented");
		}
		_getReauthenticationResolver(e) {
			return Mn("not implemented");
		}
	}, Ba = class e extends za {
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
				case "password": return Mr(e, {
					returnSecureToken: !0,
					email: this._email,
					password: this._password,
					clientType: "CLIENT_TYPE_WEB"
				}, "signInWithPassword", Hr, "EMAIL_PASSWORD_PROVIDER");
				case "emailLink": return Ur(e, {
					email: this._email,
					oobCode: this._password
				});
				default: T(e, "internal-error");
			}
		}
		async _linkToIdToken(e, t) {
			switch (this.signInMethod) {
				case "password": return Mr(e, {
					idToken: t,
					returnSecureToken: !0,
					email: this._email,
					password: this._password,
					clientType: "CLIENT_TYPE_WEB"
				}, "signUpPassword", Vr, "EMAIL_PASSWORD_PROVIDER");
				case "emailLink": return Wr(e, {
					idToken: t,
					email: this._email,
					oobCode: this._password
				});
				default: T(e, "internal-error");
			}
		}
		_getReauthenticationResolver(e) {
			return this._getIdTokenResponse(e);
		}
	}, Va = "http://localhost", Ha = class e extends za {
		constructor() {
			super(...arguments), this.pendingToken = null;
		}
		static _fromParams(t) {
			let n = new e(t.providerId, t.signInMethod);
			return t.idToken || t.accessToken ? (t.idToken && (n.idToken = t.idToken), t.accessToken && (n.accessToken = t.accessToken), t.nonce && !t.pendingToken && (n.nonce = t.nonce), t.pendingToken && (n.pendingToken = t.pendingToken)) : t.oauthToken && t.oauthTokenSecret ? (n.accessToken = t.oauthToken, n.secret = t.oauthTokenSecret) : T("argument-error"), n;
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
			return Gr(e, this.buildRequest());
		}
		_linkToIdToken(e, t) {
			let n = this.buildRequest();
			return n.idToken = t, Gr(e, n);
		}
		_getReauthenticationResolver(e) {
			let t = this.buildRequest();
			return t.autoCreate = !1, Gr(e, t);
		}
		buildRequest() {
			let e = {
				requestUri: Va,
				returnSecureToken: !0
			};
			if (this.pendingToken) e.pendingToken = this.pendingToken;
			else {
				let t = {};
				this.idToken && (t.id_token = this.idToken), this.accessToken && (t.access_token = this.accessToken), this.secret && (t.oauth_token_secret = this.secret), t.providerId = this.providerId, this.nonce && !this.pendingToken && (t.nonce = this.nonce), e.postBody = ie(t);
			}
			return e;
		}
	}, Ua = { USER_NOT_FOUND: "user-not-found" }, Wa = class e extends za {
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
			return qr(e, this._makeVerificationRequest());
		}
		_linkToIdToken(e, t) {
			return Jr(e, {
				idToken: t,
				...this._makeVerificationRequest()
			});
		}
		_getReauthenticationResolver(e) {
			return Yr(e, this._makeVerificationRequest());
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
	}, Ga = class e {
		constructor(e) {
			let t = ae(oe(e)), n = t.apiKey ?? null, r = t.oobCode ?? null, i = Xr(t.mode ?? null);
			D(n && r && i, "argument-error"), this.apiKey = n, this.operation = i, this.code = r, this.continueUrl = t.continueUrl ?? null, this.languageCode = t.lang ?? null, this.tenantId = t.tenantId ?? null;
		}
		static parseLink(t) {
			let n = Zr(t);
			try {
				return new e(n);
			} catch {
				return null;
			}
		}
	}, Ka = class e {
		constructor() {
			this.providerId = e.PROVIDER_ID;
		}
		static credential(e, t) {
			return Ba._fromEmailAndPassword(e, t);
		}
		static credentialWithLink(e, t) {
			let n = Ga.parseLink(t);
			return D(n, "argument-error"), Ba._fromEmailAndCode(e, n.code, n.tenantId);
		}
	}, Ka.PROVIDER_ID = "password", Ka.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", Ka.EMAIL_LINK_SIGN_IN_METHOD = "emailLink", qa = class {
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
	}, Ja = class extends qa {
		constructor() {
			super(...arguments), this.scopes = [];
		}
		addScope(e) {
			return this.scopes.includes(e) || this.scopes.push(e), this;
		}
		getScopes() {
			return [...this.scopes];
		}
	}, Ya = class e extends Ja {
		constructor() {
			super("facebook.com");
		}
		static credential(t) {
			return Ha._fromParams({
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
	}, Ya.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Ya.PROVIDER_ID = "facebook.com", Xa = class e extends Ja {
		constructor() {
			super("google.com"), this.addScope("profile");
		}
		static credential(t, n) {
			return Ha._fromParams({
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
	}, Xa.GOOGLE_SIGN_IN_METHOD = "google.com", Xa.PROVIDER_ID = "google.com", Za = class e extends Ja {
		constructor() {
			super("github.com");
		}
		static credential(t) {
			return Ha._fromParams({
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
	}, Za.GITHUB_SIGN_IN_METHOD = "github.com", Za.PROVIDER_ID = "github.com", Qa = class e extends Ja {
		constructor() {
			super("twitter.com");
		}
		static credential(t, n) {
			return Ha._fromParams({
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
	}, Qa.TWITTER_SIGN_IN_METHOD = "twitter.com", Qa.PROVIDER_ID = "twitter.com", $a = class e {
		constructor(e) {
			this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType;
		}
		static async _fromIdTokenResponse(t, n, r, i = !1) {
			return new e({
				user: await Ca._fromIdTokenResponse(t, r, i),
				providerId: Qr(r),
				_tokenResponse: r,
				operationType: n
			});
		}
		static async _forOperation(t, n, r) {
			return await t._updateTokensIfNecessary(r, !0), new e({
				user: t,
				providerId: Qr(r),
				_tokenResponse: r,
				operationType: n
			});
		}
	}, eo = class e extends Oe {
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
	}, to = "__sak", no = class {
		constructor(e, t) {
			this.storageRetriever = e, this.type = t;
		}
		_isAvailable() {
			try {
				return this.storage ? (this.storage.setItem(to, "1"), this.storage.removeItem(to), Promise.resolve(!0)) : Promise.resolve(!1);
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
	}, ro = 1e3, io = 10, ao = class extends no {
		constructor() {
			super(() => window.localStorage, "LOCAL"), this.boundEventHandler = (e, t) => this.onStorageEvent(e, t), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.fallbackToPolling = Sr(), this._shouldAllowMigration = !0;
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
			xr() && i !== e.newValue && e.newValue !== e.oldValue ? setTimeout(r, io) : r();
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
			}, ro);
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
	}, ao.type = "LOCAL", oo = ao, so = 1e3, co = class {
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
			let t = mi(e);
			return window.cookieStore ? (await window.cookieStore.get(t))?.value : pi(t);
		}
		async _remove(e) {
			if (!this._isAvailable() || !await this._get(e)) return;
			let t = mi(e);
			document.cookie = `${t}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`, await fetch("/__cookies__", { method: "DELETE" }).catch(() => void 0);
		}
		_addListener(e, t) {
			if (!this._isAvailable()) return;
			let n = mi(e);
			if (window.cookieStore) {
				let e = ((e) => {
					let r = e.changed.find((e) => e.name === n);
					r && t(r.value), e.deleted.find((e) => e.name === n) && t(null);
				});
				return this.listenerUnsubscribes.set(t, () => window.cookieStore.removeEventListener("change", e)), window.cookieStore.addEventListener("change", e);
			}
			let r = pi(n), i = setInterval(() => {
				let e = pi(n);
				e !== r && (t(e), r = e);
			}, so);
			this.listenerUnsubscribes.set(t, () => clearInterval(i));
		}
		_removeListener(e, t) {
			let n = this.listenerUnsubscribes.get(t);
			n && (n(), this.listenerUnsubscribes.delete(t));
		}
	}, co.type = "COOKIE", lo = class extends no {
		constructor() {
			super(() => window.sessionStorage, "SESSION");
		}
		_addListener(e, t) {}
		_removeListener(e, t) {}
	}, lo.type = "SESSION", uo = lo, fo = class e {
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
			let o = await hi(Array.from(a).map(async (e) => e(t.origin, i)));
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
	}, fo.receivers = [], po = class {
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
				let c = gi("", 20);
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
	}, mo = "firebaseLocalStorageDb", ho = 1, go = "firebaseLocalStorage", _o = "fbase_key", vo = class {
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
	}, yo = 800, bo = 3, xo = class {
		constructor() {
			this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {}, () => {});
		}
		async _openDb() {
			return this.db ||= await Ti(), this.db;
		}
		async _withRetries(e) {
			let t = 0;
			for (;;) try {
				return await e(await this._openDb());
			} catch (e) {
				if (t++ > bo) throw e;
				this.db &&= (this.db.close(), void 0);
			}
		}
		async initializeServiceWorkerMessaging() {
			return yi() ? this.initializeReceiver() : this.initializeSender();
		}
		async initializeReceiver() {
			this.receiver = fo._getInstance(Si()), this.receiver._subscribe("keyChanged", async (e, t) => ({ keyProcessed: (await this._poll()).includes(t.key) })), this.receiver._subscribe("ping", async (e, t) => ["keyChanged"]);
		}
		async initializeSender() {
			if (this.activeServiceWorker = await bi(), !this.activeServiceWorker) return;
			this.sender = new po(this.activeServiceWorker);
			let e = await this.sender._send("ping", {}, 800);
			e && e[0]?.fulfilled && e[0]?.value.includes("keyChanged") && (this.serviceWorkerReceiverAvailable = !0);
		}
		async notifyServiceWorker(e) {
			if (!(!this.sender || !this.activeServiceWorker || xi() !== this.activeServiceWorker)) try {
				await this.sender._send("keyChanged", { key: e }, this.serviceWorkerReceiverAvailable ? 800 : 50);
			} catch {}
		}
		async _isAvailable() {
			try {
				if (!indexedDB) return !1;
				let e = await Ti();
				return await Ei(e, to, "1"), await Oi(e, to), !0;
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
			return this._withPendingWrite(async () => (await this._withRetries((n) => Ei(n, e, t)), this.localCache[e] = t, this.notifyServiceWorker(e)));
		}
		async _get(e) {
			let t = await this._withRetries((t) => Di(t, e));
			return this.localCache[e] = t, t;
		}
		async _remove(e) {
			return this._withPendingWrite(async () => (await this._withRetries((t) => Oi(t, e)), delete this.localCache[e], this.notifyServiceWorker(e)));
		}
		async _poll() {
			let e = await this._withRetries((e) => new vo(Ci(e, !1).getAll()).toPromise());
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
			this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), yo);
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
	}, xo.type = "LOCAL", So = xo, Ar("rcb"), new pa(3e4, 6e4), Co = "recaptcha", wo = class e {
		constructor(t) {
			this.providerId = e.PROVIDER_ID, this.auth = Tr(t);
		}
		verifyPhoneNumber(e, t) {
			return Mi(this.auth, e, g(t));
		}
		static credential(e, t) {
			return Wa._fromVerification(e, t);
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
			return t && n ? Wa._fromTokenResponse(t, n) : null;
		}
	}, wo.PROVIDER_ID = "phone", wo.PHONE_SIGN_IN_METHOD = "phone", To = class extends za {
		constructor(e) {
			super("custom", "custom"), this.params = e;
		}
		_getIdTokenResponse(e) {
			return Gr(e, this._buildIdpRequest());
		}
		_linkToIdToken(e, t) {
			return Gr(e, this._buildIdpRequest(t));
		}
		_getReauthenticationResolver(e) {
			return Gr(e, this._buildIdpRequest());
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
	}, Eo = class {
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
				case "signInViaRedirect": return Fi;
				case "linkViaPopup":
				case "linkViaRedirect": return Li;
				case "reauthViaPopup":
				case "reauthViaRedirect": return Ii;
				default: T(this.auth, "internal-error");
			}
		}
		resolve(e) {
			Nn(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp();
		}
		reject(e) {
			Nn(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp();
		}
		unregisterAndCleanUp() {
			this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp();
		}
	}, Do = new pa(2e3, 1e4), Oo = class e extends Eo {
		constructor(t, n, r, i, a) {
			super(t, n, i, a), this.provider = r, this.authWindow = null, this.pollId = null, e.currentPopupAction && e.currentPopupAction.cancel(), e.currentPopupAction = this;
		}
		async executeNotNull() {
			let e = await this.execute();
			return D(e, this.auth, "internal-error"), e;
		}
		async onExecution() {
			Nn(this.filter.length === 1, "Popup operations only handle one event");
			let e = gi();
			this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], e), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch((e) => {
				this.reject(e);
			}), this.resolver._isIframeWebStorageSupported(this.auth, (e) => {
				e || this.reject(E(this.auth, "web-storage-unsupported"));
			}), this.pollUserCancellation();
		}
		get eventId() {
			return this.authWindow?.associatedEvent || null;
		}
		cancel() {
			this.reject(E(this.auth, "cancelled-popup-request"));
		}
		cleanUp() {
			this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, e.currentPopupAction = null;
		}
		pollUserCancellation() {
			let e = () => {
				if (this.authWindow?.window?.closed) {
					this.pollId = window.setTimeout(() => {
						this.pollId = null, this.reject(E(this.auth, "popup-closed-by-user"));
					}, 8e3);
					return;
				}
				this.pollId = window.setTimeout(e, Do.get());
			};
			e();
		}
	}, Oo.currentPopupAction = null, ko = "pendingRedirect", Ao = /* @__PURE__ */ new Map(), jo = class extends Eo {
		constructor(e, t, n = !1) {
			super(e, [
				"signInViaRedirect",
				"linkViaRedirect",
				"reauthViaRedirect",
				"unknown"
			], t, void 0, n), this.eventId = null;
		}
		async execute() {
			let e = Ao.get(this.auth._key());
			if (!e) {
				try {
					let t = await zi(this.resolver, this.auth) ? await super.execute() : null;
					e = () => Promise.resolve(t);
				} catch (t) {
					e = () => Promise.reject(t);
				}
				Ao.set(this.auth._key(), e);
			}
			return this.bypassAuthState || Ao.set(this.auth._key(), () => Promise.resolve(null)), e();
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
	}, Mo = 600 * 1e3, No = class {
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
			}), this.hasHandledPotentialRedirect || !Ki(e) ? t : (this.hasHandledPotentialRedirect = !0, t ||= (this.queuedRedirectEvent = e, !0), t);
		}
		sendToConsumer(e, t) {
			if (e.error && !Gi(e)) {
				let n = e.error.code?.split("auth/")[1] || "internal-error";
				t.onError(E(this.auth, n));
			} else t.onAuthEvent(e);
		}
		isEventForConsumer(e, t) {
			let n = t.eventId === null || !!e.eventId && e.eventId === t.eventId;
			return t.filter.includes(e.type) && n;
		}
		hasEventBeenHandled(e) {
			return Date.now() - this.lastProcessedEventTime >= Mo && this.cachedEventUids.clear(), this.cachedEventUids.has(Wi(e));
		}
		saveEventToCache(e) {
			this.cachedEventUids.add(Wi(e)), this.lastProcessedEventTime = Date.now();
		}
	}, Po = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, Fo = /^https?/, Io = new pa(3e4, 6e4), Lo = null, Ro = new pa(5e3, 15e3), zo = "__/auth/iframe", Bo = "emulator/auth/iframe", Vo = {
		style: {
			position: "absolute",
			top: "-100px",
			width: "1px",
			height: "1px"
		},
		"aria-hidden": "true",
		tabindex: "-1"
	}, Ho = new Map([
		["identitytoolkit.googleapis.com", "p"],
		["staging-identitytoolkit.sandbox.googleapis.com", "s"],
		["test-identitytoolkit.sandbox.googleapis.com", "t"]
	]), Uo = {
		location: "yes",
		resizable: "yes",
		statusbar: "yes",
		toolbar: "no"
	}, Wo = 500, Go = 600, Ko = "_blank", qo = "http://localhost", Jo = class {
		constructor(e) {
			this.window = e, this.associatedEvent = null;
		}
		close() {
			if (this.window) try {
				this.window.close();
			} catch {}
		}
	}, Yo = "__/auth/handler", Xo = "emulator/auth/handler", Zo = "fac", Qo = "webStorageSupport", $o = class {
		constructor() {
			this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = uo, this._completeRedirectFn = Ui, this._overrideRedirectResult = Bi;
		}
		async _openPopup(e, t, n, r) {
			return Nn(this.eventManagers[e._key()]?.manager, "_initialize() not called before _openPopup()"), ta(e, await ra(e, t, n, Pn(), r), gi());
		}
		async _openRedirect(e, t, n, r) {
			return await this._originValidation(e), vi(await ra(e, t, n, Pn(), r)), new Promise(() => {});
		}
		_initialize(e) {
			let t = e._key();
			if (this.eventManagers[t]) {
				let { manager: e, promise: n } = this.eventManagers[t];
				return e ? Promise.resolve(e) : (Nn(n, "If manager is not set, promise should be"), n);
			}
			let n = this.initAndGetManager(e);
			return this.eventManagers[t] = { promise: n }, n.catch(() => {
				delete this.eventManagers[t];
			}), n;
		}
		async initAndGetManager(e) {
			let t = await ea(e), n = new No(e);
			return t.register("authEvent", (t) => (D(t?.authEvent, e, "invalid-auth-event"), { status: n.onEvent(t.authEvent) ? "ACK" : "ERROR" }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = { manager: n }, this.iframes[e._key()] = t, n;
		}
		_isIframeWebStorageSupported(e, t) {
			this.iframes[e._key()].send(Qo, { type: Qo }, (n) => {
				let r = n?.[0]?.[Qo];
				r !== void 0 && t(!!r), T(e, "internal-error");
			}, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
		}
		_originValidation(e) {
			let t = e._key();
			return this.originValidationPromises[t] || (this.originValidationPromises[t] = Ji(e)), this.originValidationPromises[t];
		}
		get _shouldInitProactively() {
			return Sr() || pr() || yr();
		}
	}, es = $o, ts = class {
		constructor(e) {
			this.factorId = e;
		}
		_process(e, t, n) {
			switch (t.type) {
				case "enroll": return this._finalizeEnroll(e, t.credential, n);
				case "signin": return this._finalizeSignIn(e, t.credential);
				default: return Mn("unexpected MultiFactorSessionType");
			}
		}
	}, ns = class e extends ts {
		constructor(e) {
			super("phone"), this.credential = e;
		}
		static _fromCredential(t) {
			return new e(t);
		}
		_finalizeEnroll(e, t, n) {
			return li(e, {
				idToken: t,
				displayName: n,
				phoneVerificationInfo: this.credential._makeVerificationRequest()
			});
		}
		_finalizeSignIn(e, t) {
			return Ai(e, {
				mfaPendingCredential: t,
				phoneVerificationInfo: this.credential._makeVerificationRequest()
			});
		}
	}, rs = class {
		constructor() {}
		static assertion(e) {
			return ns._fromCredential(e);
		}
	}, rs.FACTOR_ID = "phone", is = class {
		static assertionForEnrollment(e, t) {
			return as._fromSecret(e, t);
		}
		static assertionForSignIn(e, t) {
			return as._fromEnrollmentId(e, t);
		}
		static async generateSecret(e) {
			let t = e;
			D(t.user?.auth !== void 0, "internal-error");
			let n = await di(t.user.auth, {
				idToken: t.credential,
				totpEnrollmentInfo: {}
			});
			return os._fromStartTotpMfaEnrollmentResponse(n, t.user.auth);
		}
	}, is.FACTOR_ID = "totp", as = class e extends ts {
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
			return D(this.secret !== void 0, e, "argument-error"), fi(e, {
				idToken: t,
				displayName: n,
				totpVerificationInfo: this.secret._makeTotpVerificationInfo(this.otp)
			});
		}
		async _finalizeSignIn(e, t) {
			D(this.enrollmentId !== void 0 && this.otp !== void 0, e, "argument-error");
			let n = { verificationCode: this.otp };
			return ji(e, {
				mfaPendingCredential: t,
				mfaEnrollmentId: this.enrollmentId,
				totpVerificationInfo: n
			});
		}
	}, os = class e {
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
			return (aa(e) || aa(t)) && (n = !0), n && (aa(e) && (e = this.auth.currentUser?.email || "unknownuser"), aa(t) && (t = this.auth.name)), `otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`;
		}
	}, ss = "@firebase/auth", cs = "1.12.2", ls = class {
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
			D(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth");
		}
		updateProactiveRefresh() {
			this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh();
		}
	}, us = Te("authIdTokenMaxAge") || 300, ds = null, fs = (e) => async (t) => {
		let n = t && await t.getIdTokenResult(), r = n && ((/* @__PURE__ */ new Date()).getTime() - Date.parse(n.issuedAtTime)) / 1e3;
		if (r && r > us) return;
		let i = n?.token;
		ds !== i && (ds = i, await fetch(e, {
			method: i ? "POST" : "DELETE",
			headers: i ? { Authorization: `Bearer ${i}` } : {}
		}));
	}, Er({
		loadJS(e) {
			return new Promise((t, n) => {
				let r = document.createElement("script");
				r.setAttribute("src", e), r.onload = t, r.onerror = (e) => {
					let t = E("internal-error");
					t.customData = e, n(t);
				}, r.type = "text/javascript", r.charset = "UTF-8", la().appendChild(r);
			});
		},
		gapiScript: "https://apis.google.com/js/api.js",
		recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
		recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
	}), sa("Browser");
})), ms = e((() => {
	ps(), Cn(), We();
})), hs = e((() => {
	ms();
})), gs, _s, vs, ys, bs = e((() => {
	gs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _s = {}, (function() {
		var e;
		function t(e, t) {
			function n() {}
			n.prototype = t.prototype, e.F = t.prototype, e.prototype = new n(), e.prototype.constructor = e, e.D = function(e, n, r) {
				for (var i = Array(arguments.length - 2), a = 2; a < arguments.length; a++) i[a - 2] = arguments[a];
				return t.prototype[n].apply(e, i);
			};
		}
		function n() {
			this.blockSize = -1;
		}
		function r() {
			this.blockSize = -1, this.blockSize = 64, this.g = [
				,
				,
				,
				,
			], this.C = Array(this.blockSize), this.o = this.h = 0, this.u();
		}
		t(r, n), r.prototype.u = function() {
			this.g[0] = 1732584193, this.g[1] = 4023233417, this.g[2] = 2562383102, this.g[3] = 271733878, this.o = this.h = 0;
		};
		function i(e, t, n) {
			n ||= 0;
			let r = Array(16);
			if (typeof t == "string") for (var i = 0; i < 16; ++i) r[i] = t.charCodeAt(n++) | t.charCodeAt(n++) << 8 | t.charCodeAt(n++) << 16 | t.charCodeAt(n++) << 24;
			else for (i = 0; i < 16; ++i) r[i] = t[n++] | t[n++] << 8 | t[n++] << 16 | t[n++] << 24;
			t = e.g[0], n = e.g[1], i = e.g[2];
			let a = e.g[3], o;
			o = t + (a ^ n & (i ^ a)) + r[0] + 3614090360 & 4294967295, t = n + (o << 7 & 4294967295 | o >>> 25), o = a + (i ^ t & (n ^ i)) + r[1] + 3905402710 & 4294967295, a = t + (o << 12 & 4294967295 | o >>> 20), o = i + (n ^ a & (t ^ n)) + r[2] + 606105819 & 4294967295, i = a + (o << 17 & 4294967295 | o >>> 15), o = n + (t ^ i & (a ^ t)) + r[3] + 3250441966 & 4294967295, n = i + (o << 22 & 4294967295 | o >>> 10), o = t + (a ^ n & (i ^ a)) + r[4] + 4118548399 & 4294967295, t = n + (o << 7 & 4294967295 | o >>> 25), o = a + (i ^ t & (n ^ i)) + r[5] + 1200080426 & 4294967295, a = t + (o << 12 & 4294967295 | o >>> 20), o = i + (n ^ a & (t ^ n)) + r[6] + 2821735955 & 4294967295, i = a + (o << 17 & 4294967295 | o >>> 15), o = n + (t ^ i & (a ^ t)) + r[7] + 4249261313 & 4294967295, n = i + (o << 22 & 4294967295 | o >>> 10), o = t + (a ^ n & (i ^ a)) + r[8] + 1770035416 & 4294967295, t = n + (o << 7 & 4294967295 | o >>> 25), o = a + (i ^ t & (n ^ i)) + r[9] + 2336552879 & 4294967295, a = t + (o << 12 & 4294967295 | o >>> 20), o = i + (n ^ a & (t ^ n)) + r[10] + 4294925233 & 4294967295, i = a + (o << 17 & 4294967295 | o >>> 15), o = n + (t ^ i & (a ^ t)) + r[11] + 2304563134 & 4294967295, n = i + (o << 22 & 4294967295 | o >>> 10), o = t + (a ^ n & (i ^ a)) + r[12] + 1804603682 & 4294967295, t = n + (o << 7 & 4294967295 | o >>> 25), o = a + (i ^ t & (n ^ i)) + r[13] + 4254626195 & 4294967295, a = t + (o << 12 & 4294967295 | o >>> 20), o = i + (n ^ a & (t ^ n)) + r[14] + 2792965006 & 4294967295, i = a + (o << 17 & 4294967295 | o >>> 15), o = n + (t ^ i & (a ^ t)) + r[15] + 1236535329 & 4294967295, n = i + (o << 22 & 4294967295 | o >>> 10), o = t + (i ^ a & (n ^ i)) + r[1] + 4129170786 & 4294967295, t = n + (o << 5 & 4294967295 | o >>> 27), o = a + (n ^ i & (t ^ n)) + r[6] + 3225465664 & 4294967295, a = t + (o << 9 & 4294967295 | o >>> 23), o = i + (t ^ n & (a ^ t)) + r[11] + 643717713 & 4294967295, i = a + (o << 14 & 4294967295 | o >>> 18), o = n + (a ^ t & (i ^ a)) + r[0] + 3921069994 & 4294967295, n = i + (o << 20 & 4294967295 | o >>> 12), o = t + (i ^ a & (n ^ i)) + r[5] + 3593408605 & 4294967295, t = n + (o << 5 & 4294967295 | o >>> 27), o = a + (n ^ i & (t ^ n)) + r[10] + 38016083 & 4294967295, a = t + (o << 9 & 4294967295 | o >>> 23), o = i + (t ^ n & (a ^ t)) + r[15] + 3634488961 & 4294967295, i = a + (o << 14 & 4294967295 | o >>> 18), o = n + (a ^ t & (i ^ a)) + r[4] + 3889429448 & 4294967295, n = i + (o << 20 & 4294967295 | o >>> 12), o = t + (i ^ a & (n ^ i)) + r[9] + 568446438 & 4294967295, t = n + (o << 5 & 4294967295 | o >>> 27), o = a + (n ^ i & (t ^ n)) + r[14] + 3275163606 & 4294967295, a = t + (o << 9 & 4294967295 | o >>> 23), o = i + (t ^ n & (a ^ t)) + r[3] + 4107603335 & 4294967295, i = a + (o << 14 & 4294967295 | o >>> 18), o = n + (a ^ t & (i ^ a)) + r[8] + 1163531501 & 4294967295, n = i + (o << 20 & 4294967295 | o >>> 12), o = t + (i ^ a & (n ^ i)) + r[13] + 2850285829 & 4294967295, t = n + (o << 5 & 4294967295 | o >>> 27), o = a + (n ^ i & (t ^ n)) + r[2] + 4243563512 & 4294967295, a = t + (o << 9 & 4294967295 | o >>> 23), o = i + (t ^ n & (a ^ t)) + r[7] + 1735328473 & 4294967295, i = a + (o << 14 & 4294967295 | o >>> 18), o = n + (a ^ t & (i ^ a)) + r[12] + 2368359562 & 4294967295, n = i + (o << 20 & 4294967295 | o >>> 12), o = t + (n ^ i ^ a) + r[5] + 4294588738 & 4294967295, t = n + (o << 4 & 4294967295 | o >>> 28), o = a + (t ^ n ^ i) + r[8] + 2272392833 & 4294967295, a = t + (o << 11 & 4294967295 | o >>> 21), o = i + (a ^ t ^ n) + r[11] + 1839030562 & 4294967295, i = a + (o << 16 & 4294967295 | o >>> 16), o = n + (i ^ a ^ t) + r[14] + 4259657740 & 4294967295, n = i + (o << 23 & 4294967295 | o >>> 9), o = t + (n ^ i ^ a) + r[1] + 2763975236 & 4294967295, t = n + (o << 4 & 4294967295 | o >>> 28), o = a + (t ^ n ^ i) + r[4] + 1272893353 & 4294967295, a = t + (o << 11 & 4294967295 | o >>> 21), o = i + (a ^ t ^ n) + r[7] + 4139469664 & 4294967295, i = a + (o << 16 & 4294967295 | o >>> 16), o = n + (i ^ a ^ t) + r[10] + 3200236656 & 4294967295, n = i + (o << 23 & 4294967295 | o >>> 9), o = t + (n ^ i ^ a) + r[13] + 681279174 & 4294967295, t = n + (o << 4 & 4294967295 | o >>> 28), o = a + (t ^ n ^ i) + r[0] + 3936430074 & 4294967295, a = t + (o << 11 & 4294967295 | o >>> 21), o = i + (a ^ t ^ n) + r[3] + 3572445317 & 4294967295, i = a + (o << 16 & 4294967295 | o >>> 16), o = n + (i ^ a ^ t) + r[6] + 76029189 & 4294967295, n = i + (o << 23 & 4294967295 | o >>> 9), o = t + (n ^ i ^ a) + r[9] + 3654602809 & 4294967295, t = n + (o << 4 & 4294967295 | o >>> 28), o = a + (t ^ n ^ i) + r[12] + 3873151461 & 4294967295, a = t + (o << 11 & 4294967295 | o >>> 21), o = i + (a ^ t ^ n) + r[15] + 530742520 & 4294967295, i = a + (o << 16 & 4294967295 | o >>> 16), o = n + (i ^ a ^ t) + r[2] + 3299628645 & 4294967295, n = i + (o << 23 & 4294967295 | o >>> 9), o = t + (i ^ (n | ~a)) + r[0] + 4096336452 & 4294967295, t = n + (o << 6 & 4294967295 | o >>> 26), o = a + (n ^ (t | ~i)) + r[7] + 1126891415 & 4294967295, a = t + (o << 10 & 4294967295 | o >>> 22), o = i + (t ^ (a | ~n)) + r[14] + 2878612391 & 4294967295, i = a + (o << 15 & 4294967295 | o >>> 17), o = n + (a ^ (i | ~t)) + r[5] + 4237533241 & 4294967295, n = i + (o << 21 & 4294967295 | o >>> 11), o = t + (i ^ (n | ~a)) + r[12] + 1700485571 & 4294967295, t = n + (o << 6 & 4294967295 | o >>> 26), o = a + (n ^ (t | ~i)) + r[3] + 2399980690 & 4294967295, a = t + (o << 10 & 4294967295 | o >>> 22), o = i + (t ^ (a | ~n)) + r[10] + 4293915773 & 4294967295, i = a + (o << 15 & 4294967295 | o >>> 17), o = n + (a ^ (i | ~t)) + r[1] + 2240044497 & 4294967295, n = i + (o << 21 & 4294967295 | o >>> 11), o = t + (i ^ (n | ~a)) + r[8] + 1873313359 & 4294967295, t = n + (o << 6 & 4294967295 | o >>> 26), o = a + (n ^ (t | ~i)) + r[15] + 4264355552 & 4294967295, a = t + (o << 10 & 4294967295 | o >>> 22), o = i + (t ^ (a | ~n)) + r[6] + 2734768916 & 4294967295, i = a + (o << 15 & 4294967295 | o >>> 17), o = n + (a ^ (i | ~t)) + r[13] + 1309151649 & 4294967295, n = i + (o << 21 & 4294967295 | o >>> 11), o = t + (i ^ (n | ~a)) + r[4] + 4149444226 & 4294967295, t = n + (o << 6 & 4294967295 | o >>> 26), o = a + (n ^ (t | ~i)) + r[11] + 3174756917 & 4294967295, a = t + (o << 10 & 4294967295 | o >>> 22), o = i + (t ^ (a | ~n)) + r[2] + 718787259 & 4294967295, i = a + (o << 15 & 4294967295 | o >>> 17), o = n + (a ^ (i | ~t)) + r[9] + 3951481745 & 4294967295, e.g[0] = e.g[0] + t & 4294967295, e.g[1] = e.g[1] + (i + (o << 21 & 4294967295 | o >>> 11)) & 4294967295, e.g[2] = e.g[2] + i & 4294967295, e.g[3] = e.g[3] + a & 4294967295;
		}
		r.prototype.v = function(e, t) {
			t === void 0 && (t = e.length);
			let n = t - this.blockSize, r = this.C, a = this.h, o = 0;
			for (; o < t;) {
				if (a == 0) for (; o <= n;) i(this, e, o), o += this.blockSize;
				if (typeof e == "string") {
					for (; o < t;) if (r[a++] = e.charCodeAt(o++), a == this.blockSize) {
						i(this, r), a = 0;
						break;
					}
				} else for (; o < t;) if (r[a++] = e[o++], a == this.blockSize) {
					i(this, r), a = 0;
					break;
				}
			}
			this.h = a, this.o += t;
		}, r.prototype.A = function() {
			var e = Array((this.h < 56 ? this.blockSize : this.blockSize * 2) - this.h);
			e[0] = 128;
			for (var t = 1; t < e.length - 8; ++t) e[t] = 0;
			t = this.o * 8;
			for (var n = e.length - 8; n < e.length; ++n) e[n] = t & 255, t /= 256;
			for (this.v(e), e = Array(16), t = 0, n = 0; n < 4; ++n) for (let r = 0; r < 32; r += 8) e[t++] = this.g[n] >>> r & 255;
			return e;
		};
		function a(e, t) {
			var n = s;
			return Object.prototype.hasOwnProperty.call(n, e) ? n[e] : n[e] = t(e);
		}
		function o(e, t) {
			this.h = t;
			let n = [], r = !0;
			for (let i = e.length - 1; i >= 0; i--) {
				let a = e[i] | 0;
				r && a == t || (n[i] = a, r = !1);
			}
			this.g = n;
		}
		var s = {};
		function c(e) {
			return -128 <= e && e < 128 ? a(e, function(e) {
				return new o([e | 0], e < 0 ? -1 : 0);
			}) : new o([e | 0], e < 0 ? -1 : 0);
		}
		function l(e) {
			if (isNaN(e) || !isFinite(e)) return d;
			if (e < 0) return h(l(-e));
			let t = [], n = 1;
			for (let r = 0; e >= n; r++) t[r] = e / n | 0, n *= 4294967296;
			return new o(t, 0);
		}
		function u(e, t) {
			if (e.length == 0) throw Error("number format error: empty string");
			if (t ||= 10, t < 2 || 36 < t) throw Error("radix out of range: " + t);
			if (e.charAt(0) == "-") return h(u(e.substring(1), t));
			if (e.indexOf("-") >= 0) throw Error("number format error: interior \"-\" character");
			let n = l(t ** 8), r = d;
			for (let a = 0; a < e.length; a += 8) {
				var i = Math.min(8, e.length - a);
				let o = parseInt(e.substring(a, a + i), t);
				i < 8 ? (i = l(t ** +i), r = r.j(i).add(l(o))) : (r = r.j(n), r = r.add(l(o)));
			}
			return r;
		}
		var d = c(0), f = c(1), p = c(16777216);
		e = o.prototype, e.m = function() {
			if (m(this)) return -h(this).m();
			let e = 0, t = 1;
			for (let n = 0; n < this.g.length; n++) {
				let r = this.i(n);
				e += (r >= 0 ? r : 4294967296 + r) * t, t *= 4294967296;
			}
			return e;
		}, e.toString = function(e) {
			if (e ||= 10, e < 2 || 36 < e) throw Error("radix out of range: " + e);
			if (ee(this)) return "0";
			if (m(this)) return "-" + h(this).toString(e);
			let t = l(e ** 6);
			var n = this;
			let r = "";
			for (;;) {
				let i = ie(n, t).g;
				n = te(n, i.j(t));
				let a = ((n.g.length > 0 ? n.g[0] : n.h) >>> 0).toString(e);
				if (n = i, ee(n)) return a + r;
				for (; a.length < 6;) a = "0" + a;
				r = a + r;
			}
		}, e.i = function(e) {
			return e < 0 ? 0 : e < this.g.length ? this.g[e] : this.h;
		};
		function ee(e) {
			if (e.h != 0) return !1;
			for (let t = 0; t < e.g.length; t++) if (e.g[t] != 0) return !1;
			return !0;
		}
		function m(e) {
			return e.h == -1;
		}
		e.l = function(e) {
			return e = te(this, e), m(e) ? -1 : +!ee(e);
		};
		function h(e) {
			let t = e.g.length, n = [];
			for (let r = 0; r < t; r++) n[r] = ~e.g[r];
			return new o(n, ~e.h).add(f);
		}
		e.abs = function() {
			return m(this) ? h(this) : this;
		}, e.add = function(e) {
			let t = Math.max(this.g.length, e.g.length), n = [], r = 0;
			for (let i = 0; i <= t; i++) {
				let t = r + (this.i(i) & 65535) + (e.i(i) & 65535), a = (t >>> 16) + (this.i(i) >>> 16) + (e.i(i) >>> 16);
				r = a >>> 16, t &= 65535, a &= 65535, n[i] = a << 16 | t;
			}
			return new o(n, n[n.length - 1] & -2147483648 ? -1 : 0);
		};
		function te(e, t) {
			return e.add(h(t));
		}
		e.j = function(e) {
			if (ee(this) || ee(e)) return d;
			if (m(this)) return m(e) ? h(this).j(h(e)) : h(h(this).j(e));
			if (m(e)) return h(this.j(h(e)));
			if (this.l(p) < 0 && e.l(p) < 0) return l(this.m() * e.m());
			let t = this.g.length + e.g.length, n = [];
			for (var r = 0; r < 2 * t; r++) n[r] = 0;
			for (r = 0; r < this.g.length; r++) for (let t = 0; t < e.g.length; t++) {
				let i = this.i(r) >>> 16, a = this.i(r) & 65535, o = e.i(t) >>> 16, s = e.i(t) & 65535;
				n[2 * r + 2 * t] += a * s, ne(n, 2 * r + 2 * t), n[2 * r + 2 * t + 1] += i * s, ne(n, 2 * r + 2 * t + 1), n[2 * r + 2 * t + 1] += a * o, ne(n, 2 * r + 2 * t + 1), n[2 * r + 2 * t + 2] += i * o, ne(n, 2 * r + 2 * t + 2);
			}
			for (e = 0; e < t; e++) n[e] = n[2 * e + 1] << 16 | n[2 * e];
			for (e = t; e < 2 * t; e++) n[e] = 0;
			return new o(n, 0);
		};
		function ne(e, t) {
			for (; (e[t] & 65535) != e[t];) e[t + 1] += e[t] >>> 16, e[t] &= 65535, t++;
		}
		function re(e, t) {
			this.g = e, this.h = t;
		}
		function ie(e, t) {
			if (ee(t)) throw Error("division by zero");
			if (ee(e)) return new re(d, d);
			if (m(e)) return t = ie(h(e), t), new re(h(t.g), h(t.h));
			if (m(t)) return t = ie(e, h(t)), new re(h(t.g), t.h);
			if (e.g.length > 30) {
				if (m(e) || m(t)) throw Error("slowDivide_ only works with positive integers.");
				for (var n = f, r = t; r.l(e) <= 0;) n = ae(n), r = ae(r);
				var i = oe(n, 1), a = oe(r, 1);
				for (r = oe(r, 2), n = oe(n, 2); !ee(r);) {
					var o = a.add(r);
					o.l(e) <= 0 && (i = i.add(n), a = o), r = oe(r, 1), n = oe(n, 1);
				}
				return t = te(e, i.j(t)), new re(i, t);
			}
			for (i = d; e.l(t) >= 0;) {
				for (n = Math.max(1, Math.floor(e.m() / t.m())), r = Math.ceil(Math.log(n) / Math.LN2), r = r <= 48 ? 1 : 2 ** (r - 48), a = l(n), o = a.j(t); m(o) || o.l(e) > 0;) n -= r, a = l(n), o = a.j(t);
				ee(a) && (a = f), i = i.add(a), e = te(e, o);
			}
			return new re(i, e);
		}
		e.B = function(e) {
			return ie(this, e).h;
		}, e.and = function(e) {
			let t = Math.max(this.g.length, e.g.length), n = [];
			for (let r = 0; r < t; r++) n[r] = this.i(r) & e.i(r);
			return new o(n, this.h & e.h);
		}, e.or = function(e) {
			let t = Math.max(this.g.length, e.g.length), n = [];
			for (let r = 0; r < t; r++) n[r] = this.i(r) | e.i(r);
			return new o(n, this.h | e.h);
		}, e.xor = function(e) {
			let t = Math.max(this.g.length, e.g.length), n = [];
			for (let r = 0; r < t; r++) n[r] = this.i(r) ^ e.i(r);
			return new o(n, this.h ^ e.h);
		};
		function ae(e) {
			let t = e.g.length + 1, n = [];
			for (let r = 0; r < t; r++) n[r] = e.i(r) << 1 | e.i(r - 1) >>> 31;
			return new o(n, e.h);
		}
		function oe(e, t) {
			let n = t >> 5;
			t %= 32;
			let r = e.g.length - n, i = [];
			for (let a = 0; a < r; a++) i[a] = t > 0 ? e.i(a + n) >>> t | e.i(a + n + 1) << 32 - t : e.i(a + n);
			return new o(i, e.h);
		}
		r.prototype.digest = r.prototype.A, r.prototype.reset = r.prototype.u, r.prototype.update = r.prototype.v, ys = _s.Md5 = r, o.prototype.add = o.prototype.add, o.prototype.multiply = o.prototype.j, o.prototype.modulo = o.prototype.B, o.prototype.compare = o.prototype.l, o.prototype.toNumber = o.prototype.m, o.prototype.toString = o.prototype.toString, o.prototype.getBits = o.prototype.i, o.fromNumber = l, o.fromString = u, vs = _s.Integer = o;
	}).apply(gs === void 0 ? typeof self < "u" ? self : typeof window < "u" ? window : {} : gs);
})), xs, Ss, Cs, ws, Ts, Es, Ds, Os, ks, As, js = e((() => {
	xs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ss = {}, (function() {
		var e, t = Object.defineProperty;
		function n(e) {
			e = [
				typeof globalThis == "object" && globalThis,
				e,
				typeof window == "object" && window,
				typeof self == "object" && self,
				typeof xs == "object" && xs
			];
			for (var t = 0; t < e.length; ++t) {
				var n = e[t];
				if (n && n.Math == Math) return n;
			}
			throw Error("Cannot find global object");
		}
		var r = n(this);
		function i(e, n) {
			if (n) a: {
				var i = r;
				e = e.split(".");
				for (var a = 0; a < e.length - 1; a++) {
					var o = e[a];
					if (!(o in i)) break a;
					i = i[o];
				}
				e = e[e.length - 1], a = i[e], n = n(a), n != a && n != null && t(i, e, {
					configurable: !0,
					writable: !0,
					value: n
				});
			}
		}
		i("Symbol.dispose", function(e) {
			return e || Symbol("Symbol.dispose");
		}), i("Array.prototype.values", function(e) {
			return e || function() {
				return this[Symbol.iterator]();
			};
		}), i("Object.entries", function(e) {
			return e || function(e) {
				var t = [], n;
				for (n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push([n, e[n]]);
				return t;
			};
		});
		var a = a || {}, o = this || self;
		function s(e) {
			var t = typeof e;
			return t == "object" && e != null || t == "function";
		}
		function c(e, t, n) {
			return e.call.apply(e.bind, arguments);
		}
		function l(e, t, n) {
			return l = c, l.apply(null, arguments);
		}
		function u(e, t) {
			var n = Array.prototype.slice.call(arguments, 1);
			return function() {
				var t = n.slice();
				return t.push.apply(t, arguments), e.apply(this, t);
			};
		}
		function d(e, t) {
			function n() {}
			n.prototype = t.prototype, e.Z = t.prototype, e.prototype = new n(), e.prototype.constructor = e, e.Ob = function(e, n, r) {
				for (var i = Array(arguments.length - 2), a = 2; a < arguments.length; a++) i[a - 2] = arguments[a];
				return t.prototype[n].apply(e, i);
			};
		}
		var f = typeof AsyncContext < "u" && typeof AsyncContext.Snapshot == "function" ? (e) => e && AsyncContext.Snapshot.wrap(e) : (e) => e;
		function p(e) {
			let t = e.length;
			if (t > 0) {
				let n = Array(t);
				for (let r = 0; r < t; r++) n[r] = e[r];
				return n;
			}
			return [];
		}
		function ee(e, t) {
			for (let t = 1; t < arguments.length; t++) {
				let r = arguments[t];
				var n = typeof r;
				if (n = n == "object" ? r ? Array.isArray(r) ? "array" : n : "null" : n, n == "array" || n == "object" && typeof r.length == "number") {
					n = e.length || 0;
					let t = r.length || 0;
					e.length = n + t;
					for (let i = 0; i < t; i++) e[n + i] = r[i];
				} else e.push(r);
			}
		}
		class m {
			constructor(e, t) {
				this.i = e, this.j = t, this.h = 0, this.g = null;
			}
			get() {
				let e;
				return this.h > 0 ? (this.h--, e = this.g, this.g = e.next, e.next = null) : e = this.i(), e;
			}
		}
		function h(e) {
			o.setTimeout(() => {
				throw e;
			}, 0);
		}
		function te() {
			var e = se;
			let t = null;
			return e.g && (t = e.g, e.g = e.g.next, e.g || (e.h = null), t.next = null), t;
		}
		class ne {
			constructor() {
				this.h = this.g = null;
			}
			add(e, t) {
				let n = re.get();
				n.set(e, t), this.h ? this.h.next = n : this.g = n, this.h = n;
			}
		}
		var re = new m(() => new ie(), (e) => e.reset());
		class ie {
			constructor() {
				this.next = this.g = this.h = null;
			}
			set(e, t) {
				this.h = e, this.g = t, this.next = null;
			}
			reset() {
				this.next = this.g = this.h = null;
			}
		}
		let ae, oe = !1, se = new ne(), ce = () => {
			let e = Promise.resolve(void 0);
			ae = () => {
				e.then(le);
			};
		};
		function le() {
			for (var e; e = te();) {
				try {
					e.h.call(e.g);
				} catch (e) {
					h(e);
				}
				var t = re;
				t.j(e), t.h < 100 && (t.h++, e.next = t.g, t.g = e);
			}
			oe = !1;
		}
		function g() {
			this.u = this.u, this.C = this.C;
		}
		g.prototype.u = !1, g.prototype.dispose = function() {
			this.u || (this.u = !0, this.N());
		}, g.prototype[Symbol.dispose] = function() {
			this.dispose();
		}, g.prototype.N = function() {
			if (this.C) for (; this.C.length;) this.C.shift()();
		};
		function _(e, t) {
			this.type = e, this.g = this.target = t, this.defaultPrevented = !1;
		}
		_.prototype.h = function() {
			this.defaultPrevented = !0;
		};
		var ue = function() {
			if (!o.addEventListener || !Object.defineProperty) return !1;
			var e = !1, t = Object.defineProperty({}, "passive", { get: function() {
				e = !0;
			} });
			try {
				let e = () => {};
				o.addEventListener("test", e, t), o.removeEventListener("test", e, t);
			} catch {}
			return e;
		}();
		function de(e) {
			return /^[\s\xa0]*$/.test(e);
		}
		function fe(e, t) {
			_.call(this, e ? e.type : ""), this.relatedTarget = this.g = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.state = null, this.pointerId = 0, this.pointerType = "", this.i = null, e && this.init(e, t);
		}
		d(fe, _), fe.prototype.init = function(e, t) {
			let n = this.type = e.type, r = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : null;
			this.target = e.target || e.srcElement, this.g = t, t = e.relatedTarget, t || (n == "mouseover" ? t = e.fromElement : n == "mouseout" && (t = e.toElement)), this.relatedTarget = t, r ? (this.clientX = r.clientX === void 0 ? r.pageX : r.clientX, this.clientY = r.clientY === void 0 ? r.pageY : r.clientY, this.screenX = r.screenX || 0, this.screenY = r.screenY || 0) : (this.clientX = e.clientX === void 0 ? e.pageX : e.clientX, this.clientY = e.clientY === void 0 ? e.pageY : e.clientY, this.screenX = e.screenX || 0, this.screenY = e.screenY || 0), this.button = e.button, this.key = e.key || "", this.ctrlKey = e.ctrlKey, this.altKey = e.altKey, this.shiftKey = e.shiftKey, this.metaKey = e.metaKey, this.pointerId = e.pointerId || 0, this.pointerType = e.pointerType, this.state = e.state, this.i = e, e.defaultPrevented && fe.Z.h.call(this);
		}, fe.prototype.h = function() {
			fe.Z.h.call(this);
			let e = this.i;
			e.preventDefault ? e.preventDefault() : e.returnValue = !1;
		};
		var pe = "closure_listenable_" + (Math.random() * 1e6 | 0), me = 0;
		function he(e, t, n, r, i) {
			this.listener = e, this.proxy = null, this.src = t, this.type = n, this.capture = !!r, this.ha = i, this.key = ++me, this.da = this.fa = !1;
		}
		function ge(e) {
			e.da = !0, e.listener = null, e.proxy = null, e.src = null, e.ha = null;
		}
		function _e(e, t, n) {
			for (let r in e) t.call(n, e[r], r, e);
		}
		function ve(e, t) {
			for (let n in e) t.call(void 0, e[n], n, e);
		}
		function ye(e) {
			let t = {};
			for (let n in e) t[n] = e[n];
			return t;
		}
		let be = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
		function xe(e, t) {
			let n, r;
			for (let t = 1; t < arguments.length; t++) {
				for (n in r = arguments[t], r) e[n] = r[n];
				for (let t = 0; t < be.length; t++) n = be[t], Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
			}
		}
		function Se(e) {
			this.src = e, this.g = {}, this.h = 0;
		}
		Se.prototype.add = function(e, t, n, r, i) {
			let a = e.toString();
			e = this.g[a], e || (e = this.g[a] = [], this.h++);
			let o = we(e, t, r, i);
			return o > -1 ? (t = e[o], n || (t.fa = !1)) : (t = new he(t, this.src, a, !!r, i), t.fa = n, e.push(t)), t;
		};
		function Ce(e, t) {
			let n = t.type;
			if (n in e.g) {
				var r = e.g[n], i = Array.prototype.indexOf.call(r, t, void 0), a;
				(a = i >= 0) && Array.prototype.splice.call(r, i, 1), a && (ge(t), e.g[n].length == 0 && (delete e.g[n], e.h--));
			}
		}
		function we(e, t, n, r) {
			for (let i = 0; i < e.length; ++i) {
				let a = e[i];
				if (!a.da && a.listener == t && a.capture == !!n && a.ha == r) return i;
			}
			return -1;
		}
		var Te = "closure_lm_" + (Math.random() * 1e6 | 0), Ee = {};
		function De(e, t, n, r, i) {
			if (r && r.once) return Ae(e, t, n, r, i);
			if (Array.isArray(t)) {
				for (let a = 0; a < t.length; a++) De(e, t[a], n, r, i);
				return null;
			}
			return n = Le(n), e && e[pe] ? e.J(t, n, s(r) ? !!r.capture : !!r, i) : Oe(e, t, n, !1, r, i);
		}
		function Oe(e, t, n, r, i, a) {
			if (!t) throw Error("Invalid event type");
			let o = s(i) ? !!i.capture : !!i, c = Fe(e);
			if (c || (e[Te] = c = new Se(e)), n = c.add(t, n, r, o, a), n.proxy) return n;
			if (r = ke(), n.proxy = r, r.src = e, r.listener = n, e.addEventListener) ue || (i = o), i === void 0 && (i = !1), e.addEventListener(t.toString(), r, i);
			else if (e.attachEvent) e.attachEvent(Ne(t.toString()), r);
			else if (e.addListener && e.removeListener) e.addListener(r);
			else throw Error("addEventListener and attachEvent are unavailable.");
			return n;
		}
		function ke() {
			function e(n) {
				return t.call(e.src, e.listener, n);
			}
			let t = Pe;
			return e;
		}
		function Ae(e, t, n, r, i) {
			if (Array.isArray(t)) {
				for (let a = 0; a < t.length; a++) Ae(e, t[a], n, r, i);
				return null;
			}
			return n = Le(n), e && e[pe] ? e.K(t, n, s(r) ? !!r.capture : !!r, i) : Oe(e, t, n, !0, r, i);
		}
		function je(e, t, n, r, i) {
			if (Array.isArray(t)) for (var a = 0; a < t.length; a++) je(e, t[a], n, r, i);
			else r = s(r) ? !!r.capture : !!r, n = Le(n), e && e[pe] ? (e = e.i, a = String(t).toString(), a in e.g && (t = e.g[a], n = we(t, n, r, i), n > -1 && (ge(t[n]), Array.prototype.splice.call(t, n, 1), t.length == 0 && (delete e.g[a], e.h--)))) : (e &&= Fe(e)) && (t = e.g[t.toString()], e = -1, t && (e = we(t, n, r, i)), (n = e > -1 ? t[e] : null) && Me(n));
		}
		function Me(e) {
			if (typeof e != "number" && e && !e.da) {
				var t = e.src;
				if (t && t[pe]) Ce(t.i, e);
				else {
					var n = e.type, r = e.proxy;
					t.removeEventListener ? t.removeEventListener(n, r, e.capture) : t.detachEvent ? t.detachEvent(Ne(n), r) : t.addListener && t.removeListener && t.removeListener(r), (n = Fe(t)) ? (Ce(n, e), n.h == 0 && (n.src = null, t[Te] = null)) : ge(e);
				}
			}
		}
		function Ne(e) {
			return e in Ee ? Ee[e] : Ee[e] = "on" + e;
		}
		function Pe(e, t) {
			if (e.da) e = !0;
			else {
				t = new fe(t, this);
				let n = e.listener, r = e.ha || e.src;
				e.fa && Me(e), e = n.call(r, t);
			}
			return e;
		}
		function Fe(e) {
			return e = e[Te], e instanceof Se ? e : null;
		}
		var Ie = "__closure_events_fn_" + (Math.random() * 1e9 >>> 0);
		function Le(e) {
			return typeof e == "function" ? e : (e[Ie] || (e[Ie] = function(t) {
				return e.handleEvent(t);
			}), e[Ie]);
		}
		function v() {
			g.call(this), this.i = new Se(this), this.M = this, this.G = null;
		}
		d(v, g), v.prototype[pe] = !0, v.prototype.removeEventListener = function(e, t, n, r) {
			je(this, e, t, n, r);
		};
		function y(e, t) {
			var n, r = e.G;
			if (r) for (n = []; r; r = r.G) n.push(r);
			if (e = e.M, r = t.type || t, typeof t == "string") t = new _(t, e);
			else if (t instanceof _) t.target = t.target || e;
			else {
				var i = t;
				t = new _(r, e), xe(t, i);
			}
			i = !0;
			let a, o;
			if (n) for (o = n.length - 1; o >= 0; o--) a = t.g = n[o], i = Re(a, r, !0, t) && i;
			if (a = t.g = e, i = Re(a, r, !0, t) && i, i = Re(a, r, !1, t) && i, n) for (o = 0; o < n.length; o++) a = t.g = n[o], i = Re(a, r, !1, t) && i;
		}
		v.prototype.N = function() {
			if (v.Z.N.call(this), this.i) {
				var e = this.i;
				for (let t in e.g) {
					let n = e.g[t];
					for (let e = 0; e < n.length; e++) ge(n[e]);
					delete e.g[t], e.h--;
				}
			}
			this.G = null;
		}, v.prototype.J = function(e, t, n, r) {
			return this.i.add(String(e), t, !1, n, r);
		}, v.prototype.K = function(e, t, n, r) {
			return this.i.add(String(e), t, !0, n, r);
		};
		function Re(e, t, n, r) {
			if (t = e.i.g[String(t)], !t) return !0;
			t = t.concat();
			let i = !0;
			for (let a = 0; a < t.length; ++a) {
				let o = t[a];
				if (o && !o.da && o.capture == n) {
					let t = o.listener, n = o.ha || o.src;
					o.fa && Ce(e.i, o), i = t.call(n, r) !== !1 && i;
				}
			}
			return i && !r.defaultPrevented;
		}
		function b(e, t) {
			if (typeof e != "function") if (e && typeof e.handleEvent == "function") e = l(e.handleEvent, e);
			else throw Error("Invalid listener argument");
			return Number(t) > 2147483647 ? -1 : o.setTimeout(e, t || 0);
		}
		function ze(e) {
			e.g = b(() => {
				e.g = null, e.i && (e.i = !1, ze(e));
			}, e.l);
			let t = e.h;
			e.h = null, e.m.apply(null, t);
		}
		class Be extends g {
			constructor(e, t) {
				super(), this.m = e, this.l = t, this.h = null, this.i = !1, this.g = null;
			}
			j(e) {
				this.h = arguments, this.g ? this.i = !0 : ze(this);
			}
			N() {
				super.N(), this.g && (o.clearTimeout(this.g), this.g = null, this.i = !1, this.h = null);
			}
		}
		function Ve(e) {
			g.call(this), this.h = e, this.g = {};
		}
		d(Ve, g);
		var He = [];
		function Ue(e) {
			_e(e.g, function(e, t) {
				this.g.hasOwnProperty(t) && Me(e);
			}, e), e.g = {};
		}
		Ve.prototype.N = function() {
			Ve.Z.N.call(this), Ue(this);
		}, Ve.prototype.handleEvent = function() {
			throw Error("EventHandler.handleEvent not implemented");
		};
		var We = o.JSON.stringify, Ge = o.JSON.parse, Ke = class {
			stringify(e) {
				return o.JSON.stringify(e, void 0);
			}
			parse(e) {
				return o.JSON.parse(e, void 0);
			}
		};
		function qe() {}
		function Je() {}
		var Ye = {
			OPEN: "a",
			hb: "b",
			ERROR: "c",
			tb: "d"
		};
		function Xe() {
			_.call(this, "d");
		}
		d(Xe, _);
		function Ze() {
			_.call(this, "c");
		}
		d(Ze, _);
		var x = {}, Qe = null;
		function $e() {
			return Qe ||= new v();
		}
		x.Ia = "serverreachability";
		function et(e) {
			_.call(this, x.Ia, e);
		}
		d(et, _);
		function tt(e) {
			let t = $e();
			y(t, new et(t));
		}
		x.STAT_EVENT = "statevent";
		function nt(e, t) {
			_.call(this, x.STAT_EVENT, e), this.stat = t;
		}
		d(nt, _);
		function S(e) {
			let t = $e();
			y(t, new nt(t, e));
		}
		x.Ja = "timingevent";
		function rt(e, t) {
			_.call(this, x.Ja, e), this.size = t;
		}
		d(rt, _);
		function it(e, t) {
			if (typeof e != "function") throw Error("Fn must not be null and must be a function");
			return o.setTimeout(function() {
				e();
			}, t);
		}
		function at() {
			this.g = !0;
		}
		at.prototype.ua = function() {
			this.g = !1;
		};
		function ot(e, t, n, r, i, a) {
			e.info(function() {
				if (e.g) if (a) {
					var o = "", s = a.split("&");
					for (let e = 0; e < s.length; e++) {
						var c = s[e].split("=");
						if (c.length > 1) {
							let e = c[0];
							c = c[1];
							let t = e.split("_");
							o = t.length >= 2 && t[1] == "type" ? o + (e + "=" + c + "&") : o + (e + "=redacted&");
						}
					}
				} else o = null;
				else o = a;
				return "XMLHTTP REQ (" + r + ") [attempt " + i + "]: " + t + "\n" + n + "\n" + o;
			});
		}
		function st(e, t, n, r, i, a, o) {
			e.info(function() {
				return "XMLHTTP RESP (" + r + ") [ attempt " + i + "]: " + t + "\n" + n + "\n" + a + " " + o;
			});
		}
		function ct(e, t, n, r) {
			e.info(function() {
				return "XMLHTTP TEXT (" + t + "): " + ut(e, n) + (r ? " " + r : "");
			});
		}
		function lt(e, t) {
			e.info(function() {
				return "TIMEOUT: " + t;
			});
		}
		at.prototype.info = function() {};
		function ut(e, t) {
			if (!e.g) return t;
			if (!t) return null;
			try {
				let a = JSON.parse(t);
				if (a) {
					for (e = 0; e < a.length; e++) if (Array.isArray(a[e])) {
						var n = a[e];
						if (!(n.length < 2)) {
							var r = n[1];
							if (Array.isArray(r) && !(r.length < 1)) {
								var i = r[0];
								if (i != "noop" && i != "stop" && i != "close") for (let e = 1; e < r.length; e++) r[e] = "";
							}
						}
					}
				}
				return We(a);
			} catch {
				return t;
			}
		}
		var dt = {
			NO_ERROR: 0,
			cb: 1,
			qb: 2,
			pb: 3,
			kb: 4,
			ob: 5,
			rb: 6,
			Ga: 7,
			TIMEOUT: 8,
			ub: 9
		}, ft = {
			ib: "complete",
			Fb: "success",
			ERROR: "error",
			Ga: "abort",
			xb: "ready",
			yb: "readystatechange",
			TIMEOUT: "timeout",
			sb: "incrementaldata",
			wb: "progress",
			lb: "downloadprogress",
			Nb: "uploadprogress"
		}, pt;
		function mt() {}
		d(mt, qe), mt.prototype.g = function() {
			return new XMLHttpRequest();
		}, pt = new mt();
		function ht(e) {
			return encodeURIComponent(String(e));
		}
		function gt(e) {
			var t = 1;
			e = e.split(":");
			let n = [];
			for (; t > 0 && e.length;) n.push(e.shift()), t--;
			return e.length && n.push(e.join(":")), n;
		}
		function _t(e, t, n, r) {
			this.j = e, this.i = t, this.l = n, this.S = r || 1, this.V = new Ve(this), this.H = 45e3, this.J = null, this.o = !1, this.u = this.B = this.A = this.M = this.F = this.T = this.D = null, this.G = [], this.g = null, this.C = 0, this.m = this.v = null, this.X = -1, this.K = !1, this.P = 0, this.O = null, this.W = this.L = this.U = this.R = !1, this.h = new vt();
		}
		function vt() {
			this.i = null, this.g = "", this.h = !1;
		}
		var yt = {}, bt = {};
		function xt(e, t, n) {
			e.M = 1, e.A = qt(Ut(t)), e.u = n, e.R = !0, St(e, null);
		}
		function St(e, t) {
			e.F = Date.now(), Et(e), e.B = Ut(e.A);
			var n = e.B, r = e.S;
			Array.isArray(r) || (r = [String(r)]), cn(n.i, "t", r), e.C = 0, n = e.j.L, e.h = new vt(), e.g = qn(e.j, n ? t : null, !e.u), e.P > 0 && (e.O = new Be(l(e.Y, e, e.g), e.P)), t = e.V, n = e.g, r = e.ba;
			var i = "readystatechange";
			Array.isArray(i) || (i && (He[0] = i.toString()), i = He);
			for (let e = 0; e < i.length; e++) {
				let a = De(n, i[e], r || t.handleEvent, !1, t.h || t);
				if (!a) break;
				t.g[a.key] = a;
			}
			t = e.J ? ye(e.J) : {}, e.u ? (e.v ||= "POST", t["Content-Type"] = "application/x-www-form-urlencoded", e.g.ea(e.B, e.v, e.u, t)) : (e.v = "GET", e.g.ea(e.B, e.v, null, t)), tt(), ot(e.i, e.v, e.B, e.l, e.S, e.u);
		}
		_t.prototype.ba = function(e) {
			e = e.target;
			let t = this.O;
			t && E(e) == 3 ? t.j() : this.Y(e);
		}, _t.prototype.Y = function(e) {
			try {
				if (e == this.g) a: {
					let s = E(this.g), c = this.g.ya(), l = this.g.ca();
					if (!(s < 3) && (s != 3 || this.g && (this.h.h || this.g.la() || On(this.g)))) {
						this.K || s != 4 || c == 7 || tt(c == 8 || l <= 0 ? 3 : 2), Ot(this);
						var t = this.g.ca();
						this.X = t;
						var n = Ct(this);
						if (this.o = t == 200, st(this.i, this.v, this.B, this.l, this.S, s, t), this.o) {
							if (this.U && !this.L) {
								b: {
									if (this.g) {
										var r, i = this.g;
										if ((r = i.g ? i.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !de(r)) {
											var a = r;
											break b;
										}
									}
									a = null;
								}
								if (e = a) ct(this.i, this.l, e, "Initial handshake response via X-HTTP-Initial-Response"), this.L = !0, jt(this, e);
								else {
									this.o = !1, this.m = 3, S(12), At(this), kt(this);
									break a;
								}
							}
							if (this.R) {
								e = !0;
								let t;
								for (; !this.K && this.C < n.length;) if (t = Tt(this, n), t == bt) {
									s == 4 && (this.m = 4, S(14), e = !1), ct(this.i, this.l, null, "[Incomplete Response]");
									break;
								} else if (t == yt) {
									this.m = 4, S(15), ct(this.i, this.l, n, "[Invalid Chunk]"), e = !1;
									break;
								} else ct(this.i, this.l, t, null), jt(this, t);
								if (wt(this) && this.C != 0 && (this.h.g = this.h.g.slice(this.C), this.C = 0), s != 4 || n.length != 0 || this.h.h || (this.m = 1, S(16), e = !1), this.o = this.o && e, !e) ct(this.i, this.l, n, "[Invalid Chunked Response]"), At(this), kt(this);
								else if (n.length > 0 && !this.W) {
									this.W = !0;
									var o = this.j;
									o.g == this && o.aa && !o.P && (o.j.info("Great, no buffering proxy detected. Bytes received: " + n.length), k(o), o.P = !0, S(11));
								}
							} else ct(this.i, this.l, n, null), jt(this, n);
							s == 4 && At(this), this.o && !this.K && (s == 4 ? Hn(this.j, this) : (this.o = !1, Et(this)));
						} else kn(this.g), t == 400 && n.indexOf("Unknown SID") > 0 ? (this.m = 3, S(12)) : (this.m = 0, S(13)), At(this), kt(this);
					}
				}
			} catch {}
		};
		function Ct(e) {
			if (!wt(e)) return e.g.la();
			let t = On(e.g);
			if (t === "") return "";
			let n = "", r = t.length, i = E(e.g) == 4;
			if (!e.h.i) {
				if (typeof TextDecoder > "u") return At(e), kt(e), "";
				e.h.i = new o.TextDecoder();
			}
			for (let a = 0; a < r; a++) e.h.h = !0, n += e.h.i.decode(t[a], { stream: !(i && a == r - 1) });
			return t.length = 0, e.h.g += n, e.C = 0, e.h.g;
		}
		function wt(e) {
			return e.g ? e.v == "GET" && e.M != 2 && e.j.Aa : !1;
		}
		function Tt(e, t) {
			var n = e.C, r = t.indexOf("\n", n);
			return r == -1 ? bt : (n = Number(t.substring(n, r)), isNaN(n) ? yt : (r += 1, r + n > t.length ? bt : (t = t.slice(r, r + n), e.C = r + n, t)));
		}
		_t.prototype.cancel = function() {
			this.K = !0, At(this);
		};
		function Et(e) {
			e.T = Date.now() + e.H, Dt(e, e.H);
		}
		function Dt(e, t) {
			if (e.D != null) throw Error("WatchDog timer not null");
			e.D = it(l(e.aa, e), t);
		}
		function Ot(e) {
			e.D &&= (o.clearTimeout(e.D), null);
		}
		_t.prototype.aa = function() {
			this.D = null;
			let e = Date.now();
			e - this.T >= 0 ? (lt(this.i, this.B), this.M != 2 && (tt(), S(17)), At(this), this.m = 2, kt(this)) : Dt(this, this.T - e);
		};
		function kt(e) {
			e.j.I == 0 || e.K || Hn(e.j, e);
		}
		function At(e) {
			Ot(e);
			var t = e.O;
			t && typeof t.dispose == "function" && t.dispose(), e.O = null, Ue(e.V), e.g && (t = e.g, e.g = null, t.abort(), t.dispose());
		}
		function jt(e, t) {
			try {
				var n = e.j;
				if (n.I != 0 && (n.g == e || It(n.h, e))) {
					if (!e.L && It(n.h, e) && n.I == 3) {
						try {
							var r = n.Ba.g.parse(t);
						} catch {
							r = null;
						}
						if (Array.isArray(r) && r.length == 3) {
							var i = r;
							if (i[0] == 0) {
								a: if (!n.v) {
									if (n.g) if (n.g.F + 3e3 < e.F) Vn(n), Mn(n);
									else break a;
									O(n), S(18);
								}
							} else n.xa = i[1], 0 < n.xa - n.K && i[2] < 37500 && n.F && n.A == 0 && !n.C && (n.C = it(l(n.Va, n), 6e3));
							Ft(n.h) <= 1 && n.ta && (n.ta = void 0);
						} else Wn(n, 11);
					} else if ((e.L || n.g == e) && Vn(n), !de(t)) for (i = n.Ba.g.parse(t), t = 0; t < i.length; t++) {
						let l = i[t], u = l[0];
						if (!(u <= n.K)) if (n.K = u, l = l[1], n.I == 2) if (l[0] == "c") {
							n.M = l[1], n.ba = l[2];
							let t = l[3];
							t != null && (n.ka = t, n.j.info("VER=" + n.ka));
							let i = l[4];
							i != null && (n.za = i, n.j.info("SVER=" + n.za));
							let u = l[5];
							u != null && typeof u == "number" && u > 0 && (r = 1.5 * u, n.O = r, n.j.info("backChannelRequestTimeoutMs_=" + r)), r = n;
							let d = e.g;
							if (d) {
								let e = d.g ? d.g.getResponseHeader("X-Client-Wire-Protocol") : null;
								if (e) {
									var a = r.h;
									a.g || e.indexOf("spdy") == -1 && e.indexOf("quic") == -1 && e.indexOf("h2") == -1 || (a.j = a.l, a.g = /* @__PURE__ */ new Set(), a.h &&= (Lt(a, a.h), null));
								}
								if (r.G) {
									let e = d.g ? d.g.getResponseHeader("X-HTTP-Session-Id") : null;
									e && (r.wa = e, C(r.J, r.G, e));
								}
							}
							n.I = 3, n.l && n.l.ra(), n.aa && (n.T = Date.now() - e.F, n.j.info("Handshake RTT: " + n.T + "ms")), r = n;
							var o = e;
							if (r.na = Kn(r, r.L ? r.ba : null, r.W), o.L) {
								Rt(r.h, o);
								var s = o, c = r.O;
								c && (s.H = c), s.D && (Ot(s), Et(s)), r.g = o;
							} else zn(r);
							n.i.length > 0 && Pn(n);
						} else l[0] != "stop" && l[0] != "close" || Wn(n, 7);
						else n.I == 3 && (l[0] == "stop" || l[0] == "close" ? l[0] == "stop" ? Wn(n, 7) : D(n) : l[0] != "noop" && n.l && n.l.qa(l), n.A = 0);
					}
				}
				tt(4);
			} catch {}
		}
		var Mt = class {
			constructor(e, t) {
				this.g = e, this.map = t;
			}
		};
		function Nt(e) {
			this.l = e || 10, o.PerformanceNavigationTiming ? (e = o.performance.getEntriesByType("navigation"), e = e.length > 0 && (e[0].nextHopProtocol == "hq" || e[0].nextHopProtocol == "h2")) : e = !!(o.chrome && o.chrome.loadTimes && o.chrome.loadTimes() && o.chrome.loadTimes().wasFetchedViaSpdy), this.j = e ? this.l : 1, this.g = null, this.j > 1 && (this.g = /* @__PURE__ */ new Set()), this.h = null, this.i = [];
		}
		function Pt(e) {
			return e.h ? !0 : e.g ? e.g.size >= e.j : !1;
		}
		function Ft(e) {
			return e.h ? 1 : e.g ? e.g.size : 0;
		}
		function It(e, t) {
			return e.h ? e.h == t : e.g ? e.g.has(t) : !1;
		}
		function Lt(e, t) {
			e.g ? e.g.add(t) : e.h = t;
		}
		function Rt(e, t) {
			e.h && e.h == t ? e.h = null : e.g && e.g.has(t) && e.g.delete(t);
		}
		Nt.prototype.cancel = function() {
			if (this.i = zt(this), this.h) this.h.cancel(), this.h = null;
			else if (this.g && this.g.size !== 0) {
				for (let e of this.g.values()) e.cancel();
				this.g.clear();
			}
		};
		function zt(e) {
			if (e.h != null) return e.i.concat(e.h.G);
			if (e.g != null && e.g.size !== 0) {
				let t = e.i;
				for (let n of e.g.values()) t = t.concat(n.G);
				return t;
			}
			return p(e.i);
		}
		var Bt = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
		function Vt(e, t) {
			if (e) {
				e = e.split("&");
				for (let n = 0; n < e.length; n++) {
					let r = e[n].indexOf("="), i, a = null;
					r >= 0 ? (i = e[n].substring(0, r), a = e[n].substring(r + 1)) : i = e[n], t(i, a ? decodeURIComponent(a.replace(/\+/g, " ")) : "");
				}
			}
		}
		function Ht(e) {
			this.g = this.o = this.j = "", this.u = null, this.m = this.h = "", this.l = !1;
			let t;
			e instanceof Ht ? (this.l = e.l, Wt(this, e.j), this.o = e.o, this.g = e.g, Gt(this, e.u), this.h = e.h, Kt(this, ln(e.i)), this.m = e.m) : e && (t = String(e).match(Bt)) ? (this.l = !1, Wt(this, t[1] || "", !0), this.o = Jt(t[2] || ""), this.g = Jt(t[3] || "", !0), Gt(this, t[4]), this.h = Jt(t[5] || "", !0), Kt(this, t[6] || "", !0), this.m = Jt(t[7] || "")) : (this.l = !1, this.i = new nn(null, this.l));
		}
		Ht.prototype.toString = function() {
			let e = [];
			var t = this.j;
			t && e.push(Yt(t, Zt, !0), ":");
			var n = this.g;
			return (n || t == "file") && (e.push("//"), (t = this.o) && e.push(Yt(t, Zt, !0), "@"), e.push(ht(n).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), n = this.u, n != null && e.push(":", String(n))), (n = this.h) && (this.g && n.charAt(0) != "/" && e.push("/"), e.push(Yt(n, n.charAt(0) == "/" ? $t : Qt, !0))), (n = this.i.toString()) && e.push("?", n), (n = this.m) && e.push("#", Yt(n, tn)), e.join("");
		}, Ht.prototype.resolve = function(e) {
			let t = Ut(this), n = !!e.j;
			n ? Wt(t, e.j) : n = !!e.o, n ? t.o = e.o : n = !!e.g, n ? t.g = e.g : n = e.u != null;
			var r = e.h;
			if (n) Gt(t, e.u);
			else if (n = !!e.h) {
				if (r.charAt(0) != "/") if (this.g && !this.h) r = "/" + r;
				else {
					var i = t.h.lastIndexOf("/");
					i != -1 && (r = t.h.slice(0, i + 1) + r);
				}
				if (i = r, i == ".." || i == ".") r = "";
				else if (i.indexOf("./") != -1 || i.indexOf("/.") != -1) {
					r = i.lastIndexOf("/", 0) == 0, i = i.split("/");
					let e = [];
					for (let t = 0; t < i.length;) {
						let n = i[t++];
						n == "." ? r && t == i.length && e.push("") : n == ".." ? ((e.length > 1 || e.length == 1 && e[0] != "") && e.pop(), r && t == i.length && e.push("")) : (e.push(n), r = !0);
					}
					r = e.join("/");
				} else r = i;
			}
			return n ? t.h = r : n = e.i.toString() !== "", n ? Kt(t, ln(e.i)) : n = !!e.m, n && (t.m = e.m), t;
		};
		function Ut(e) {
			return new Ht(e);
		}
		function Wt(e, t, n) {
			e.j = n ? Jt(t, !0) : t, e.j &&= e.j.replace(/:$/, "");
		}
		function Gt(e, t) {
			if (t) {
				if (t = Number(t), isNaN(t) || t < 0) throw Error("Bad port number " + t);
				e.u = t;
			} else e.u = null;
		}
		function Kt(e, t, n) {
			t instanceof nn ? (e.i = t, dn(e.i, e.l)) : (n || (t = Yt(t, en)), e.i = new nn(t, e.l));
		}
		function C(e, t, n) {
			e.i.set(t, n);
		}
		function qt(e) {
			return C(e, "zx", Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ Date.now()).toString(36)), e;
		}
		function Jt(e, t) {
			return e ? t ? decodeURI(e.replace(/%25/g, "%2525")) : decodeURIComponent(e) : "";
		}
		function Yt(e, t, n) {
			return typeof e == "string" ? (e = encodeURI(e).replace(t, Xt), n && (e = e.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), e) : null;
		}
		function Xt(e) {
			return e = e.charCodeAt(0), "%" + (e >> 4 & 15).toString(16) + (e & 15).toString(16);
		}
		var Zt = /[#\/\?@]/g, Qt = /[#\?:]/g, $t = /[#\?]/g, en = /[#\?@]/g, tn = /#/g;
		function nn(e, t) {
			this.h = this.g = null, this.i = e || null, this.j = !!t;
		}
		function rn(e) {
			e.g || (e.g = /* @__PURE__ */ new Map(), e.h = 0, e.i && Vt(e.i, function(t, n) {
				e.add(decodeURIComponent(t.replace(/\+/g, " ")), n);
			}));
		}
		e = nn.prototype, e.add = function(e, t) {
			rn(this), this.i = null, e = un(this, e);
			let n = this.g.get(e);
			return n || this.g.set(e, n = []), n.push(t), this.h += 1, this;
		};
		function an(e, t) {
			rn(e), t = un(e, t), e.g.has(t) && (e.i = null, e.h -= e.g.get(t).length, e.g.delete(t));
		}
		function on(e, t) {
			return rn(e), t = un(e, t), e.g.has(t);
		}
		e.forEach = function(e, t) {
			rn(this), this.g.forEach(function(n, r) {
				n.forEach(function(n) {
					e.call(t, n, r, this);
				}, this);
			}, this);
		};
		function sn(e, t) {
			rn(e);
			let n = [];
			if (typeof t == "string") on(e, t) && (n = n.concat(e.g.get(un(e, t))));
			else for (e = Array.from(e.g.values()), t = 0; t < e.length; t++) n = n.concat(e[t]);
			return n;
		}
		e.set = function(e, t) {
			return rn(this), this.i = null, e = un(this, e), on(this, e) && (this.h -= this.g.get(e).length), this.g.set(e, [t]), this.h += 1, this;
		}, e.get = function(e, t) {
			return e ? (e = sn(this, e), e.length > 0 ? String(e[0]) : t) : t;
		};
		function cn(e, t, n) {
			an(e, t), n.length > 0 && (e.i = null, e.g.set(un(e, t), p(n)), e.h += n.length);
		}
		e.toString = function() {
			if (this.i) return this.i;
			if (!this.g) return "";
			let e = [], t = Array.from(this.g.keys());
			for (let r = 0; r < t.length; r++) {
				var n = t[r];
				let i = ht(n);
				n = sn(this, n);
				for (let t = 0; t < n.length; t++) {
					let r = i;
					n[t] !== "" && (r += "=" + ht(n[t])), e.push(r);
				}
			}
			return this.i = e.join("&");
		};
		function ln(e) {
			let t = new nn();
			return t.i = e.i, e.g && (t.g = new Map(e.g), t.h = e.h), t;
		}
		function un(e, t) {
			return t = String(t), e.j && (t = t.toLowerCase()), t;
		}
		function dn(e, t) {
			t && !e.j && (rn(e), e.i = null, e.g.forEach(function(e, t) {
				let n = t.toLowerCase();
				t != n && (an(this, t), cn(this, n, e));
			}, e)), e.j = t;
		}
		function fn(e, t) {
			let n = new at();
			if (o.Image) {
				let r = new Image();
				r.onload = u(mn, n, "TestLoadImage: loaded", !0, t, r), r.onerror = u(mn, n, "TestLoadImage: error", !1, t, r), r.onabort = u(mn, n, "TestLoadImage: abort", !1, t, r), r.ontimeout = u(mn, n, "TestLoadImage: timeout", !1, t, r), o.setTimeout(function() {
					r.ontimeout && r.ontimeout();
				}, 1e4), r.src = e;
			} else t(!1);
		}
		function pn(e, t) {
			let n = new at(), r = new AbortController(), i = setTimeout(() => {
				r.abort(), mn(n, "TestPingServer: timeout", !1, t);
			}, 1e4);
			fetch(e, { signal: r.signal }).then((e) => {
				clearTimeout(i), e.ok ? mn(n, "TestPingServer: ok", !0, t) : mn(n, "TestPingServer: server error", !1, t);
			}).catch(() => {
				clearTimeout(i), mn(n, "TestPingServer: error", !1, t);
			});
		}
		function mn(e, t, n, r, i) {
			try {
				i && (i.onload = null, i.onerror = null, i.onabort = null, i.ontimeout = null), r(n);
			} catch {}
		}
		function hn() {
			this.g = new Ke();
		}
		function gn(e) {
			this.i = e.Sb || null, this.h = e.ab || !1;
		}
		d(gn, qe), gn.prototype.g = function() {
			return new _n(this.i, this.h);
		};
		function _n(e, t) {
			v.call(this), this.H = e, this.o = t, this.m = void 0, this.status = this.readyState = 0, this.responseType = this.responseText = this.response = this.statusText = "", this.onreadystatechange = null, this.A = new Headers(), this.h = null, this.F = "GET", this.D = "", this.g = !1, this.B = this.j = this.l = null, this.v = new AbortController();
		}
		d(_n, v), e = _n.prototype, e.open = function(e, t) {
			if (this.readyState != 0) throw this.abort(), Error("Error reopening a connection");
			this.F = e, this.D = t, this.readyState = 1, bn(this);
		}, e.send = function(e) {
			if (this.readyState != 1) throw this.abort(), Error("need to call open() first. ");
			if (this.v.signal.aborted) throw this.abort(), Error("Request was aborted.");
			this.g = !0;
			let t = {
				headers: this.A,
				method: this.F,
				credentials: this.m,
				cache: void 0,
				signal: this.v.signal
			};
			e && (t.body = e), (this.H || o).fetch(new Request(this.D, t)).then(this.Pa.bind(this), this.ga.bind(this));
		}, e.abort = function() {
			this.response = this.responseText = "", this.A = new Headers(), this.status = 0, this.v.abort(), this.j && this.j.cancel("Request was aborted.").catch(() => {}), this.readyState >= 1 && this.g && this.readyState != 4 && (this.g = !1, yn(this)), this.readyState = 0;
		}, e.Pa = function(e) {
			if (this.g && (this.l = e, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = e.headers, this.readyState = 2, bn(this)), this.g && (this.readyState = 3, bn(this), this.g))) if (this.responseType === "arraybuffer") e.arrayBuffer().then(this.Na.bind(this), this.ga.bind(this));
			else if (o.ReadableStream !== void 0 && "body" in e) {
				if (this.j = e.body.getReader(), this.o) {
					if (this.responseType) throw Error("responseType must be empty for \"streamBinaryChunks\" mode responses.");
					this.response = [];
				} else this.response = this.responseText = "", this.B = new TextDecoder();
				vn(this);
			} else e.text().then(this.Oa.bind(this), this.ga.bind(this));
		};
		function vn(e) {
			e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e));
		}
		e.Ma = function(e) {
			if (this.g) {
				if (this.o && e.value) this.response.push(e.value);
				else if (!this.o) {
					var t = e.value ? e.value : new Uint8Array();
					(t = this.B.decode(t, { stream: !e.done })) && (this.response = this.responseText += t);
				}
				e.done ? yn(this) : bn(this), this.readyState == 3 && vn(this);
			}
		}, e.Oa = function(e) {
			this.g && (this.response = this.responseText = e, yn(this));
		}, e.Na = function(e) {
			this.g && (this.response = e, yn(this));
		}, e.ga = function() {
			this.g && yn(this);
		};
		function yn(e) {
			e.readyState = 4, e.l = null, e.j = null, e.B = null, bn(e);
		}
		e.setRequestHeader = function(e, t) {
			this.A.append(e, t);
		}, e.getResponseHeader = function(e) {
			return this.h && this.h.get(e.toLowerCase()) || "";
		}, e.getAllResponseHeaders = function() {
			if (!this.h) return "";
			let e = [], t = this.h.entries();
			for (var n = t.next(); !n.done;) n = n.value, e.push(n[0] + ": " + n[1]), n = t.next();
			return e.join("\r\n");
		};
		function bn(e) {
			e.onreadystatechange && e.onreadystatechange.call(e);
		}
		Object.defineProperty(_n.prototype, "withCredentials", {
			get: function() {
				return this.m === "include";
			},
			set: function(e) {
				this.m = e ? "include" : "same-origin";
			}
		});
		function xn(e) {
			let t = "";
			return _e(e, function(e, n) {
				t += n, t += ":", t += e, t += "\r\n";
			}), t;
		}
		function Sn(e, t, n) {
			a: {
				for (r in n) {
					var r = !1;
					break a;
				}
				r = !0;
			}
			r || (n = xn(n), typeof e == "string" || C(e, t, n));
		}
		function w(e) {
			v.call(this), this.headers = /* @__PURE__ */ new Map(), this.L = e || null, this.h = !1, this.g = null, this.D = "", this.o = 0, this.l = "", this.j = this.B = this.v = this.A = !1, this.m = null, this.F = "", this.H = !1;
		}
		d(w, v);
		var Cn = /^https?$/i, wn = ["POST", "PUT"];
		e = w.prototype, e.Fa = function(e) {
			this.H = e;
		}, e.ea = function(e, t, n, r) {
			if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + e);
			t = t ? t.toUpperCase() : "GET", this.D = e, this.l = "", this.o = 0, this.A = !1, this.h = !0, this.g = this.L ? this.L.g() : pt.g(), this.g.onreadystatechange = f(l(this.Ca, this));
			try {
				this.B = !0, this.g.open(t, String(e), !0), this.B = !1;
			} catch (e) {
				Tn(this, e);
				return;
			}
			if (e = n || "", n = new Map(this.headers), r) if (Object.getPrototypeOf(r) === Object.prototype) for (var i in r) n.set(i, r[i]);
			else if (typeof r.keys == "function" && typeof r.get == "function") for (let e of r.keys()) n.set(e, r.get(e));
			else throw Error("Unknown input type for opt_headers: " + String(r));
			r = Array.from(n.keys()).find((e) => e.toLowerCase() == "content-type"), i = o.FormData && e instanceof o.FormData, !(Array.prototype.indexOf.call(wn, t, void 0) >= 0) || r || i || n.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
			for (let [e, t] of n) this.g.setRequestHeader(e, t);
			this.F && (this.g.responseType = this.F), "withCredentials" in this.g && this.g.withCredentials !== this.H && (this.g.withCredentials = this.H);
			try {
				this.m &&= (clearTimeout(this.m), null), this.v = !0, this.g.send(e), this.v = !1;
			} catch (e) {
				Tn(this, e);
			}
		};
		function Tn(e, t) {
			e.h = !1, e.g && (e.j = !0, e.g.abort(), e.j = !1), e.l = t, e.o = 5, En(e), T(e);
		}
		function En(e) {
			e.A || (e.A = !0, y(e, "complete"), y(e, "error"));
		}
		e.abort = function(e) {
			this.g && this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1, this.o = e || 7, y(this, "complete"), y(this, "abort"), T(this));
		}, e.N = function() {
			this.g && (this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1), T(this, !0)), w.Z.N.call(this);
		}, e.Ca = function() {
			this.u || (this.B || this.v || this.j ? Dn(this) : this.Xa());
		}, e.Xa = function() {
			Dn(this);
		};
		function Dn(e) {
			if (e.h && a !== void 0) {
				if (e.v && E(e) == 4) setTimeout(e.Ca.bind(e), 0);
				else if (y(e, "readystatechange"), E(e) == 4) {
					e.h = !1;
					try {
						let a = e.ca();
						a: switch (a) {
							case 200:
							case 201:
							case 202:
							case 204:
							case 206:
							case 304:
							case 1223:
								var t = !0;
								break a;
							default: t = !1;
						}
						var n;
						if (!(n = t)) {
							var r;
							if (r = a === 0) {
								let t = String(e.D).match(Bt)[1] || null;
								!t && o.self && o.self.location && (t = o.self.location.protocol.slice(0, -1)), r = !Cn.test(t ? t.toLowerCase() : "");
							}
							n = r;
						}
						if (n) y(e, "complete"), y(e, "success");
						else {
							e.o = 6;
							try {
								var i = E(e) > 2 ? e.g.statusText : "";
							} catch {
								i = "";
							}
							e.l = i + " [" + e.ca() + "]", En(e);
						}
					} finally {
						T(e);
					}
				}
			}
		}
		function T(e, t) {
			if (e.g) {
				e.m &&= (clearTimeout(e.m), null);
				let n = e.g;
				e.g = null, t || y(e, "ready");
				try {
					n.onreadystatechange = null;
				} catch {}
			}
		}
		e.isActive = function() {
			return !!this.g;
		};
		function E(e) {
			return e.g ? e.g.readyState : 0;
		}
		e.ca = function() {
			try {
				return E(this) > 2 ? this.g.status : -1;
			} catch {
				return -1;
			}
		}, e.la = function() {
			try {
				return this.g ? this.g.responseText : "";
			} catch {
				return "";
			}
		}, e.La = function(e) {
			if (this.g) {
				var t = this.g.responseText;
				return e && t.indexOf(e) == 0 && (t = t.substring(e.length)), Ge(t);
			}
		};
		function On(e) {
			try {
				if (!e.g) return null;
				if ("response" in e.g) return e.g.response;
				switch (e.F) {
					case "":
					case "text": return e.g.responseText;
					case "arraybuffer": if ("mozResponseArrayBuffer" in e.g) return e.g.mozResponseArrayBuffer;
				}
				return null;
			} catch {
				return null;
			}
		}
		function kn(e) {
			let t = {};
			e = (e.g && E(e) >= 2 && e.g.getAllResponseHeaders() || "").split("\r\n");
			for (let r = 0; r < e.length; r++) {
				if (de(e[r])) continue;
				var n = gt(e[r]);
				let i = n[0];
				if (n = n[1], typeof n != "string") continue;
				n = n.trim();
				let a = t[i] || [];
				t[i] = a, a.push(n);
			}
			ve(t, function(e) {
				return e.join(", ");
			});
		}
		e.ya = function() {
			return this.o;
		}, e.Ha = function() {
			return typeof this.l == "string" ? this.l : String(this.l);
		};
		function An(e, t, n) {
			return n && n.internalChannelParams && n.internalChannelParams[e] || t;
		}
		function jn(e) {
			this.za = 0, this.i = [], this.j = new at(), this.ba = this.na = this.J = this.W = this.g = this.wa = this.G = this.H = this.u = this.U = this.o = null, this.Ya = this.V = 0, this.Sa = An("failFast", !1, e), this.F = this.C = this.v = this.m = this.l = null, this.X = !0, this.xa = this.K = -1, this.Y = this.A = this.D = 0, this.Qa = An("baseRetryDelayMs", 5e3, e), this.Za = An("retryDelaySeedMs", 1e4, e), this.Ta = An("forwardChannelMaxRetries", 2, e), this.va = An("forwardChannelRequestTimeoutMs", 2e4, e), this.ma = e && e.xmlHttpFactory || void 0, this.Ua = e && e.Rb || void 0, this.Aa = e && e.useFetchStreams || !1, this.O = void 0, this.L = e && e.supportsCrossDomainXhr || !1, this.M = "", this.h = new Nt(e && e.concurrentRequestLimit), this.Ba = new hn(), this.S = e && e.fastHandshake || !1, this.R = e && e.encodeInitMessageHeaders || !1, this.S && this.R && (this.R = !1), this.Ra = e && e.Pb || !1, e && e.ua && this.j.ua(), e && e.forceLongPolling && (this.X = !1), this.aa = !this.S && this.X && e && e.detectBufferingProxy || !1, this.ia = void 0, e && e.longPollingTimeout && e.longPollingTimeout > 0 && (this.ia = e.longPollingTimeout), this.ta = void 0, this.T = 0, this.P = !1, this.ja = this.B = null;
		}
		e = jn.prototype, e.ka = 8, e.I = 1, e.connect = function(e, t, n, r) {
			S(0), this.W = e, this.H = t || {}, n && r !== void 0 && (this.H.OSID = n, this.H.OAID = r), this.F = this.X, this.J = Kn(this, null, this.W), Pn(this);
		};
		function D(e) {
			if (Nn(e), e.I == 3) {
				var t = e.V++, n = Ut(e.J);
				if (C(n, "SID", e.M), C(n, "RID", t), C(n, "TYPE", "terminate"), Ln(e, n), t = new _t(e, e.j, t), t.M = 2, t.A = qt(Ut(n)), n = !1, o.navigator && o.navigator.sendBeacon) try {
					n = o.navigator.sendBeacon(t.A.toString(), "");
				} catch {}
				!n && o.Image && (new Image().src = t.A, n = !0), n || (t.g = qn(t.j, null), t.g.ea(t.A)), t.F = Date.now(), Et(t);
			}
			Gn(e);
		}
		function Mn(e) {
			e.g &&= (k(e), e.g.cancel(), null);
		}
		function Nn(e) {
			Mn(e), e.v &&= (o.clearTimeout(e.v), null), Vn(e), e.h.cancel(), e.m &&= (typeof e.m == "number" && o.clearTimeout(e.m), null);
		}
		function Pn(e) {
			if (!Pt(e.h) && !e.m) {
				e.m = !0;
				var t = e.Ea;
				ae || ce(), oe ||= (ae(), !0), se.add(t, e), e.D = 0;
			}
		}
		function Fn(e, t) {
			return Ft(e.h) >= e.h.j - +!!e.m ? !1 : e.m ? (e.i = t.G.concat(e.i), !0) : e.I == 1 || e.I == 2 || e.D >= (e.Sa ? 0 : e.Ta) ? !1 : (e.m = it(l(e.Ea, e, t), Un(e, e.D)), e.D++, !0);
		}
		e.Ea = function(e) {
			if (this.m) if (this.m = null, this.I == 1) {
				if (!e) {
					this.V = Math.floor(Math.random() * 1e5), e = this.V++;
					let i = new _t(this, this.j, e), a = this.o;
					if (this.U && (a ? (a = ye(a), xe(a, this.U)) : a = this.U), this.u !== null || this.R || (i.J = a, a = null), this.S) a: {
						for (var t = 0, n = 0; n < this.i.length; n++) {
							b: {
								var r = this.i[n];
								if ("__data__" in r.map && (r = r.map.__data__, typeof r == "string")) {
									r = r.length;
									break b;
								}
								r = void 0;
							}
							if (r === void 0) break;
							if (t += r, t > 4096) {
								t = n;
								break a;
							}
							if (t === 4096 || n === this.i.length - 1) {
								t = n + 1;
								break a;
							}
						}
						t = 1e3;
					}
					else t = 1e3;
					t = Rn(this, i, t), n = Ut(this.J), C(n, "RID", e), C(n, "CVER", 22), this.G && C(n, "X-HTTP-Session-Id", this.G), Ln(this, n), a && (this.R ? t = "headers=" + ht(xn(a)) + "&" + t : this.u && Sn(n, this.u, a)), Lt(this.h, i), this.Ra && C(n, "TYPE", "init"), this.S ? (C(n, "$req", t), C(n, "SID", "null"), i.U = !0, xt(i, n, null)) : xt(i, n, t), this.I = 2;
				}
			} else this.I == 3 && (e ? In(this, e) : this.i.length == 0 || Pt(this.h) || In(this));
		};
		function In(e, t) {
			var n = t ? t.l : e.V++;
			let r = Ut(e.J);
			C(r, "SID", e.M), C(r, "RID", n), C(r, "AID", e.K), Ln(e, r), e.u && e.o && Sn(r, e.u, e.o), n = new _t(e, e.j, n, e.D + 1), e.u === null && (n.J = e.o), t && (e.i = t.G.concat(e.i)), t = Rn(e, n, 1e3), n.H = Math.round(e.va * .5) + Math.round(e.va * .5 * Math.random()), Lt(e.h, n), xt(n, r, t);
		}
		function Ln(e, t) {
			e.H && _e(e.H, function(e, n) {
				C(t, n, e);
			}), e.l && _e({}, function(e, n) {
				C(t, n, e);
			});
		}
		function Rn(e, t, n) {
			n = Math.min(e.i.length, n);
			let r = e.l ? l(e.l.Ka, e.l, e) : null;
			a: {
				var i = e.i;
				let t = -1;
				for (;;) {
					let e = ["count=" + n];
					t == -1 ? n > 0 ? (t = i[0].g, e.push("ofs=" + t)) : t = 0 : e.push("ofs=" + t);
					let c = !0;
					for (let l = 0; l < n; l++) {
						var a = i[l].g;
						let n = i[l].map;
						if (a -= t, a < 0) t = Math.max(0, i[l].g - 100), c = !1;
						else try {
							a = "req" + a + "_" || "";
							try {
								var o = n instanceof Map ? n : Object.entries(n);
								for (let [t, n] of o) {
									let r = n;
									s(n) && (r = We(n)), e.push(a + t + "=" + encodeURIComponent(r));
								}
							} catch (t) {
								throw e.push(a + "type=_badmap"), t;
							}
						} catch {
							r && r(n);
						}
					}
					if (c) {
						o = e.join("&");
						break a;
					}
				}
				o = void 0;
			}
			return e = e.i.splice(0, n), t.G = e, o;
		}
		function zn(e) {
			if (!e.g && !e.v) {
				e.Y = 1;
				var t = e.Da;
				ae || ce(), oe ||= (ae(), !0), se.add(t, e), e.A = 0;
			}
		}
		function O(e) {
			return e.g || e.v || e.A >= 3 ? !1 : (e.Y++, e.v = it(l(e.Da, e), Un(e, e.A)), e.A++, !0);
		}
		e.Da = function() {
			if (this.v = null, Bn(this), this.aa && !(this.P || this.g == null || this.T <= 0)) {
				var e = 4 * this.T;
				this.j.info("BP detection timer enabled: " + e), this.B = it(l(this.Wa, this), e);
			}
		}, e.Wa = function() {
			this.B && (this.B = null, this.j.info("BP detection timeout reached."), this.j.info("Buffering proxy detected and switch to long-polling!"), this.F = !1, this.P = !0, S(10), Mn(this), Bn(this));
		};
		function k(e) {
			e.B != null && (o.clearTimeout(e.B), e.B = null);
		}
		function Bn(e) {
			e.g = new _t(e, e.j, "rpc", e.Y), e.u === null && (e.g.J = e.o), e.g.P = 0;
			var t = Ut(e.na);
			C(t, "RID", "rpc"), C(t, "SID", e.M), C(t, "AID", e.K), C(t, "CI", e.F ? "0" : "1"), !e.F && e.ia && C(t, "TO", e.ia), C(t, "TYPE", "xmlhttp"), Ln(e, t), e.u && e.o && Sn(t, e.u, e.o), e.O && (e.g.H = e.O);
			var n = e.g;
			e = e.ba, n.M = 1, n.A = qt(Ut(t)), n.u = null, n.R = !0, St(n, e);
		}
		e.Va = function() {
			this.C != null && (this.C = null, Mn(this), O(this), S(19));
		};
		function Vn(e) {
			e.C != null && (o.clearTimeout(e.C), e.C = null);
		}
		function Hn(e, t) {
			var n = null;
			if (e.g == t) {
				Vn(e), k(e), e.g = null;
				var r = 2;
			} else if (It(e.h, t)) n = t.G, Rt(e.h, t), r = 1;
			else return;
			if (e.I != 0) {
				if (t.o) if (r == 1) {
					n = t.u ? t.u.length : 0, t = Date.now() - t.F;
					var i = e.D;
					r = $e(), y(r, new rt(r, n)), Pn(e);
				} else zn(e);
				else if (i = t.m, i == 3 || i == 0 && t.X > 0 || !(r == 1 && Fn(e, t) || r == 2 && O(e))) switch (n && n.length > 0 && (t = e.h, t.i = t.i.concat(n)), i) {
					case 1:
						Wn(e, 5);
						break;
					case 4:
						Wn(e, 10);
						break;
					case 3:
						Wn(e, 6);
						break;
					default: Wn(e, 2);
				}
			}
		}
		function Un(e, t) {
			let n = e.Qa + Math.floor(Math.random() * e.Za);
			return e.isActive() || (n *= 2), n * t;
		}
		function Wn(e, t) {
			if (e.j.info("Error code " + t), t == 2) {
				var n = l(e.bb, e), r = e.Ua;
				let t = !r;
				r = new Ht(r || "//www.google.com/images/cleardot.gif"), o.location && o.location.protocol == "http" || Wt(r, "https"), qt(r), t ? fn(r.toString(), n) : pn(r.toString(), n);
			} else S(2);
			e.I = 0, e.l && e.l.pa(t), Gn(e), Nn(e);
		}
		e.bb = function(e) {
			e ? (this.j.info("Successfully pinged google.com"), S(2)) : (this.j.info("Failed to ping google.com"), S(1));
		};
		function Gn(e) {
			if (e.I = 0, e.ja = [], e.l) {
				let t = zt(e.h);
				(t.length != 0 || e.i.length != 0) && (ee(e.ja, t), ee(e.ja, e.i), e.h.i.length = 0, p(e.i), e.i.length = 0), e.l.oa();
			}
		}
		function Kn(e, t, n) {
			var r = n instanceof Ht ? Ut(n) : new Ht(n);
			if (r.g != "") t && (r.g = t + "." + r.g), Gt(r, r.u);
			else {
				var i = o.location;
				r = i.protocol, t = t ? t + "." + i.hostname : i.hostname, i = +i.port;
				let e = new Ht(null);
				r && Wt(e, r), t && (e.g = t), i && Gt(e, i), n && (e.h = n), r = e;
			}
			return n = e.G, t = e.wa, n && t && C(r, n, t), C(r, "VER", e.ka), Ln(e, r), r;
		}
		function qn(e, t, n) {
			if (t && !e.L) throw Error("Can't create secondary domain capable XhrIo object.");
			return t = e.Aa && !e.ma ? new w(new gn({ ab: n })) : new w(e.ma), t.Fa(e.L), t;
		}
		e.isActive = function() {
			return !!this.l && this.l.isActive(this);
		};
		function Jn() {}
		e = Jn.prototype, e.ra = function() {}, e.qa = function() {}, e.pa = function() {}, e.oa = function() {}, e.isActive = function() {
			return !0;
		}, e.Ka = function() {};
		function Yn() {}
		Yn.prototype.g = function(e, t) {
			return new Xn(e, t);
		};
		function Xn(e, t) {
			v.call(this), this.g = new jn(t), this.l = e, this.h = t && t.messageUrlParams || null, e = t && t.messageHeaders || null, t && t.clientProtocolHeaderRequired && (e ? e["X-Client-Protocol"] = "webchannel" : e = { "X-Client-Protocol": "webchannel" }), this.g.o = e, e = t && t.initMessageHeaders || null, t && t.messageContentType && (e ? e["X-WebChannel-Content-Type"] = t.messageContentType : e = { "X-WebChannel-Content-Type": t.messageContentType }), t && t.sa && (e ? e["X-WebChannel-Client-Profile"] = t.sa : e = { "X-WebChannel-Client-Profile": t.sa }), this.g.U = e, (e = t && t.Qb) && !de(e) && (this.g.u = e), this.A = t && t.supportsCrossDomainXhr || !1, this.v = t && t.sendRawJson || !1, (t &&= t.httpSessionIdParam) && !de(t) && (this.g.G = t, e = this.h, e !== null && t in e && (e = this.h, t in e && delete e[t])), this.j = new $n(this);
		}
		d(Xn, v), Xn.prototype.m = function() {
			this.g.l = this.j, this.A && (this.g.L = !0), this.g.connect(this.l, this.h || void 0);
		}, Xn.prototype.close = function() {
			D(this.g);
		}, Xn.prototype.o = function(e) {
			var t = this.g;
			if (typeof e == "string") {
				var n = {};
				n.__data__ = e, e = n;
			} else this.v && (n = {}, n.__data__ = We(e), e = n);
			t.i.push(new Mt(t.Ya++, e)), t.I == 3 && Pn(t);
		}, Xn.prototype.N = function() {
			this.g.l = null, delete this.j, D(this.g), delete this.g, Xn.Z.N.call(this);
		};
		function Zn(e) {
			Xe.call(this), e.__headers__ && (this.headers = e.__headers__, this.statusCode = e.__status__, delete e.__headers__, delete e.__status__);
			var t = e.__sm__;
			if (t) {
				a: {
					for (let n in t) {
						e = n;
						break a;
					}
					e = void 0;
				}
				(this.i = e) && (e = this.i, t = t !== null && e in t ? t[e] : void 0), this.data = t;
			} else this.data = e;
		}
		d(Zn, Xe);
		function Qn() {
			Ze.call(this), this.status = 1;
		}
		d(Qn, Ze);
		function $n(e) {
			this.g = e;
		}
		d($n, Jn), $n.prototype.ra = function() {
			y(this.g, "a");
		}, $n.prototype.qa = function(e) {
			y(this.g, new Zn(e));
		}, $n.prototype.pa = function(e) {
			y(this.g, new Qn());
		}, $n.prototype.oa = function() {
			y(this.g, "b");
		}, Yn.prototype.createWebChannel = Yn.prototype.g, Xn.prototype.send = Xn.prototype.o, Xn.prototype.open = Xn.prototype.m, Xn.prototype.close = Xn.prototype.close, As = Ss.createWebChannelTransport = function() {
			return new Yn();
		}, ks = Ss.getStatEventTarget = function() {
			return $e();
		}, Os = Ss.Event = x, Ds = Ss.Stat = {
			jb: 0,
			mb: 1,
			nb: 2,
			Hb: 3,
			Mb: 4,
			Jb: 5,
			Kb: 6,
			Ib: 7,
			Gb: 8,
			Lb: 9,
			PROXY: 10,
			NOPROXY: 11,
			Eb: 12,
			Ab: 13,
			Bb: 14,
			zb: 15,
			Cb: 16,
			Db: 17,
			fb: 18,
			eb: 19,
			gb: 20
		}, dt.NO_ERROR = 0, dt.TIMEOUT = 8, dt.HTTP_ERROR = 6, Es = Ss.ErrorCode = dt, ft.COMPLETE = "complete", Ts = Ss.EventType = ft, Je.EventType = Ye, Ye.OPEN = "a", Ye.CLOSE = "b", Ye.ERROR = "c", Ye.MESSAGE = "d", v.prototype.listen = v.prototype.J, ws = Ss.WebChannel = Je, Ss.FetchXmlHttpFactory = gn, w.prototype.listenOnce = w.prototype.K, w.prototype.getLastError = w.prototype.Ha, w.prototype.getLastErrorCode = w.prototype.ya, w.prototype.getStatus = w.prototype.ca, w.prototype.getResponseJson = w.prototype.La, w.prototype.getResponseText = w.prototype.la, w.prototype.send = w.prototype.ea, w.prototype.setWithCredentials = w.prototype.Fa, Cs = Ss.XhrIo = w;
	}).apply(xs === void 0 ? typeof self < "u" ? self : typeof window < "u" ? window : {} : xs);
}));
//#endregion
//#region node_modules/@firebase/firestore/dist/common-edb5d170.esm.js
function Ms(e) {
	Of = e;
}
function Ns() {
	return kf.logLevel;
}
function A(e, ...t) {
	if (kf.logLevel <= b.DEBUG) {
		let n = t.map(Is);
		kf.debug(`Firestore (${Of}): ${e}`, ...n);
	}
}
function Ps(e, ...t) {
	if (kf.logLevel <= b.ERROR) {
		let n = t.map(Is);
		kf.error(`Firestore (${Of}): ${e}`, ...n);
	}
}
function Fs(e, ...t) {
	if (kf.logLevel <= b.WARN) {
		let n = t.map(Is);
		kf.warn(`Firestore (${Of}): ${e}`, ...n);
	}
}
function Is(e) {
	if (typeof e == "string") return e;
	try {
		return function(e) {
			return JSON.stringify(e);
		}(e);
	} catch {
		return e;
	}
}
function j(e, t, n) {
	let r = "Unexpected state";
	typeof t == "string" ? r = t : n = t, Ls(e, r, n);
}
function Ls(e, t, n) {
	let r = `FIRESTORE (${Of}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;
	if (n !== void 0) try {
		r += " CONTEXT: " + JSON.stringify(n);
	} catch {
		r += " CONTEXT: " + n;
	}
	throw Ps(r), Error(r);
}
function M(e, t, n, r) {
	let i = "Unexpected state";
	typeof n == "string" ? i = n : r = n, e || Ls(t, i, r);
}
function N(e, t) {
	return e;
}
function Rs(e) {
	let t = typeof self < "u" && (self.crypto || self.msCrypto), n = new Uint8Array(e);
	if (t && typeof t.getRandomValues == "function") t.getRandomValues(n);
	else for (let t = 0; t < e; t++) n[t] = Math.floor(256 * Math.random());
	return n;
}
function P(e, t) {
	return e < t ? -1 : +(e > t);
}
function zs(e, t) {
	let n = Math.min(e.length, t.length);
	for (let r = 0; r < n; r++) {
		let n = e.charAt(r), i = t.charAt(r);
		if (n !== i) return Bs(n) === Bs(i) ? P(n, i) : Bs(n) ? 1 : -1;
	}
	return P(e.length, t.length);
}
function Bs(e) {
	let t = e.charCodeAt(0);
	return t >= Bf && t <= Vf;
}
function Vs(e, t, n) {
	return e.length === t.length && e.every(((e, r) => n(e, t[r])));
}
function Hs(e, t, n) {
	if (!n) throw new B(z.INVALID_ARGUMENT, `Function ${e}() cannot be called with an empty ${t}.`);
}
function Us(e, t, n, r) {
	if (!0 === t && !0 === r) throw new B(z.INVALID_ARGUMENT, `${e} and ${n} cannot be used together.`);
}
function Ws(e) {
	if (!H.isDocumentKey(e)) throw new B(z.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`);
}
function Gs(e) {
	if (H.isDocumentKey(e)) throw new B(z.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`);
}
function Ks(e) {
	return typeof e == "object" && !!e && (Object.getPrototypeOf(e) === Object.prototype || Object.getPrototypeOf(e) === null);
}
function qs(e) {
	if (e === void 0) return "undefined";
	if (e === null) return "null";
	if (typeof e == "string") return e.length > 20 && (e = `${e.substring(0, 20)}...`), JSON.stringify(e);
	if (typeof e == "number" || typeof e == "boolean") return "" + e;
	if (typeof e == "object") {
		if (e instanceof Array) return "an array";
		{
			let t = function(e) {
				return e.constructor ? e.constructor.name : null;
			}(e);
			return t ? `a custom ${t} object` : "an object";
		}
	}
	return typeof e == "function" ? "a function" : j(12329, { type: typeof e });
}
function Js(e, t) {
	if ("_delegate" in e && (e = e._delegate), !(e instanceof t)) {
		if (t.name === e.constructor.name) throw new B(z.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
		{
			let n = qs(e);
			throw new B(z.INVALID_ARGUMENT, `Expected type '${t.name}', but it was: ${n}`);
		}
	}
	return e;
}
function F(e, t) {
	let n = { typeString: e };
	return t && (n.value = t), n;
}
function Ys(e, t) {
	if (!Ks(e)) throw new B(z.INVALID_ARGUMENT, "JSON must be an object");
	let n;
	for (let r in t) if (t[r]) {
		let i = t[r].typeString, a = "value" in t[r] ? { value: t[r].value } : void 0;
		if (!(r in e)) {
			n = `JSON missing required field: '${r}'`;
			break;
		}
		let o = e[r];
		if (i && typeof o !== i) {
			n = `JSON field '${r}' must be a ${i}.`;
			break;
		}
		if (a !== void 0 && o !== a.value) {
			n = `Expected '${r}' field to equal '${a.value}'`;
			break;
		}
	}
	if (n) throw new B(z.INVALID_ARGUMENT, n);
	return !0;
}
function Xs(e, t) {
	let n = e.toTimestamp().seconds, r = e.toTimestamp().nanoseconds + 1;
	return new Xf(W.fromTimestamp(r === 1e9 ? new U(n + 1, 0) : new U(n, r)), H.empty(), t);
}
function Zs(e) {
	return new Xf(e.readTime, e.key, Jf);
}
function Qs(e, t) {
	let n = e.readTime.compareTo(t.readTime);
	return n === 0 ? (n = H.comparator(e.documentKey, t.documentKey), n === 0 ? P(e.largestBatchId, t.largestBatchId) : n) : n;
}
async function $s(e) {
	if (e.code !== z.FAILED_PRECONDITION || e.message !== Zf) throw e;
	A("LocalStore", "Unexpectedly lost primary lease");
}
function ec(e) {
	let t = e.match(/Android ([\d.]+)/i), n = t ? t[1].split(".").slice(0, 2).join(".") : "-1";
	return Number(n);
}
function tc(e) {
	return e.name === "IndexedDbTransactionError";
}
function nc(e) {
	return e == null;
}
function rc(e) {
	return e === 0 && 1 / e == -Infinity;
}
function ic(e) {
	return typeof e == "number" && Number.isInteger(e) && !rc(e) && e <= 2 ** 53 - 1 && e >= -(2 ** 53 - 1);
}
function ac(e) {
	let t = "";
	for (let n = 0; n < e.length; n++) t.length > 0 && (t = sc(t)), t = oc(e.get(n), t);
	return sc(t);
}
function oc(e, t) {
	let n = t, r = e.length;
	for (let t = 0; t < r; t++) {
		let r = e.charAt(t);
		switch (r) {
			case "\0":
				n += "";
				break;
			case tp:
				n += "";
				break;
			default: n += r;
		}
	}
	return n;
}
function sc(e) {
	return e + tp + "";
}
function cc(e) {
	let t = 0;
	for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t++;
	return t;
}
function lc(e, t) {
	for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n]);
}
function uc(e) {
	for (let t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
	return !0;
}
function dc(e) {
	if (M(!!e, 39018), typeof e == "string") {
		let t = 0, n = Ap.exec(e);
		if (M(!!n, 46558, { timestamp: e }), n[1]) {
			let e = n[1];
			e = (e + "000000000").substr(0, 9), t = Number(e);
		}
		let r = new Date(e);
		return {
			seconds: Math.floor(r.getTime() / 1e3),
			nanos: t
		};
	}
	return {
		seconds: I(e.seconds),
		nanos: I(e.nanos)
	};
}
function I(e) {
	return typeof e == "number" ? e : typeof e == "string" ? Number(e) : 0;
}
function fc(e) {
	return typeof e == "string" ? kp.fromBase64String(e) : kp.fromUint8Array(e);
}
function pc(e) {
	return (e?.mapValue?.fields || {})[Mp]?.stringValue === jp;
}
function mc(e) {
	let t = e.mapValue.fields[Np];
	return pc(t) ? mc(t) : t;
}
function hc(e) {
	let t = dc(e.mapValue.fields[Pp].timestampValue);
	return new U(t.seconds, t.nanos);
}
function gc(e, t) {
	if (!Object.prototype.hasOwnProperty.apply(e.options, ["projectId"])) throw new B(z.INVALID_ARGUMENT, "\"projectId\" not provided in firebase.initializeApp.");
	return new Lp(e.options.projectId, t);
}
function _c(e) {
	return "nullValue" in e ? 0 : "booleanValue" in e ? 1 : "integerValue" in e || "doubleValue" in e ? 2 : "timestampValue" in e ? 3 : "stringValue" in e ? 5 : "bytesValue" in e ? 6 : "referenceValue" in e ? 7 : "geoPointValue" in e ? 8 : "arrayValue" in e ? 9 : "mapValue" in e ? pc(e) ? 4 : Pc(e) ? 9007199254740991 : Mc(e) ? 10 : 11 : j(28295, { value: e });
}
function vc(e, t) {
	if (e === t) return !0;
	let n = _c(e);
	if (n !== _c(t)) return !1;
	switch (n) {
		case 0:
		case 9007199254740991: return !0;
		case 1: return e.booleanValue === t.booleanValue;
		case 4: return hc(e).isEqual(hc(t));
		case 3: return function(e, t) {
			if (typeof e.timestampValue == "string" && typeof t.timestampValue == "string" && e.timestampValue.length === t.timestampValue.length) return e.timestampValue === t.timestampValue;
			let n = dc(e.timestampValue), r = dc(t.timestampValue);
			return n.seconds === r.seconds && n.nanos === r.nanos;
		}(e, t);
		case 5: return e.stringValue === t.stringValue;
		case 6: return function(e, t) {
			return fc(e.bytesValue).isEqual(fc(t.bytesValue));
		}(e, t);
		case 7: return e.referenceValue === t.referenceValue;
		case 8: return function(e, t) {
			return I(e.geoPointValue.latitude) === I(t.geoPointValue.latitude) && I(e.geoPointValue.longitude) === I(t.geoPointValue.longitude);
		}(e, t);
		case 2: return function(e, t) {
			if ("integerValue" in e && "integerValue" in t) return I(e.integerValue) === I(t.integerValue);
			if ("doubleValue" in e && "doubleValue" in t) {
				let n = I(e.doubleValue), r = I(t.doubleValue);
				return n === r ? rc(n) === rc(r) : isNaN(n) && isNaN(r);
			}
			return !1;
		}(e, t);
		case 9: return Vs(e.arrayValue.values || [], t.arrayValue.values || [], vc);
		case 10:
		case 11: return function(e, t) {
			let n = e.mapValue.fields || {}, r = t.mapValue.fields || {};
			if (cc(n) !== cc(r)) return !1;
			for (let e in n) if (n.hasOwnProperty(e) && (r[e] === void 0 || !vc(n[e], r[e]))) return !1;
			return !0;
		}(e, t);
		default: return j(52216, { left: e });
	}
}
function yc(e, t) {
	return (e.values || []).find(((e) => vc(e, t))) !== void 0;
}
function bc(e, t) {
	if (e === t) return 0;
	let n = _c(e), r = _c(t);
	if (n !== r) return P(n, r);
	switch (n) {
		case 0:
		case 9007199254740991: return 0;
		case 1: return P(e.booleanValue, t.booleanValue);
		case 2: return function(e, t) {
			let n = I(e.integerValue || e.doubleValue), r = I(t.integerValue || t.doubleValue);
			return n < r ? -1 : n > r ? 1 : n === r ? 0 : isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
		}(e, t);
		case 3: return xc(e.timestampValue, t.timestampValue);
		case 4: return xc(hc(e), hc(t));
		case 5: return zs(e.stringValue, t.stringValue);
		case 6: return function(e, t) {
			let n = fc(e), r = fc(t);
			return n.compareTo(r);
		}(e.bytesValue, t.bytesValue);
		case 7: return function(e, t) {
			let n = e.split("/"), r = t.split("/");
			for (let e = 0; e < n.length && e < r.length; e++) {
				let t = P(n[e], r[e]);
				if (t !== 0) return t;
			}
			return P(n.length, r.length);
		}(e.referenceValue, t.referenceValue);
		case 8: return function(e, t) {
			let n = P(I(e.latitude), I(t.latitude));
			return n === 0 ? P(I(e.longitude), I(t.longitude)) : n;
		}(e.geoPointValue, t.geoPointValue);
		case 9: return Sc(e.arrayValue, t.arrayValue);
		case 10: return function(e, t) {
			let n = e.fields || {}, r = t.fields || {}, i = n[Hp]?.arrayValue, a = r[Hp]?.arrayValue, o = P(i?.values?.length || 0, a?.values?.length || 0);
			return o === 0 ? Sc(i, a) : o;
		}(e.mapValue, t.mapValue);
		case 11: return function(e, t) {
			if (e === Bp.mapValue && t === Bp.mapValue) return 0;
			if (e === Bp.mapValue) return 1;
			if (t === Bp.mapValue) return -1;
			let n = e.fields || {}, r = Object.keys(n), i = t.fields || {}, a = Object.keys(i);
			r.sort(), a.sort();
			for (let e = 0; e < r.length && e < a.length; ++e) {
				let t = zs(r[e], a[e]);
				if (t !== 0) return t;
				let o = bc(n[r[e]], i[a[e]]);
				if (o !== 0) return o;
			}
			return P(r.length, a.length);
		}(e.mapValue, t.mapValue);
		default: throw j(23264, { he: n });
	}
}
function xc(e, t) {
	if (typeof e == "string" && typeof t == "string" && e.length === t.length) return P(e, t);
	let n = dc(e), r = dc(t), i = P(n.seconds, r.seconds);
	return i === 0 ? P(n.nanos, r.nanos) : i;
}
function Sc(e, t) {
	let n = e.values || [], r = t.values || [];
	for (let e = 0; e < n.length && e < r.length; ++e) {
		let t = bc(n[e], r[e]);
		if (t) return t;
	}
	return P(n.length, r.length);
}
function Cc(e) {
	return wc(e);
}
function wc(e) {
	return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function(e) {
		let t = dc(e);
		return `time(${t.seconds},${t.nanos})`;
	}(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? function(e) {
		return fc(e).toBase64();
	}(e.bytesValue) : "referenceValue" in e ? function(e) {
		return H.fromName(e).toString();
	}(e.referenceValue) : "geoPointValue" in e ? function(e) {
		return `geo(${e.latitude},${e.longitude})`;
	}(e.geoPointValue) : "arrayValue" in e ? function(e) {
		let t = "[", n = !0;
		for (let r of e.values || []) n ? n = !1 : t += ",", t += wc(r);
		return t + "]";
	}(e.arrayValue) : "mapValue" in e ? function(e) {
		let t = Object.keys(e.fields || {}).sort(), n = "{", r = !0;
		for (let i of t) r ? r = !1 : n += ",", n += `${i}:${wc(e.fields[i])}`;
		return n + "}";
	}(e.mapValue) : j(61005, { value: e });
}
function Tc(e) {
	switch (_c(e)) {
		case 0:
		case 1: return 4;
		case 2: return 8;
		case 3:
		case 8: return 16;
		case 4:
			let t = mc(e);
			return t ? 16 + Tc(t) : 16;
		case 5: return 2 * e.stringValue.length;
		case 6: return fc(e.bytesValue).approximateByteSize();
		case 7: return e.referenceValue.length;
		case 9: return function(e) {
			return (e.values || []).reduce(((e, t) => e + Tc(t)), 0);
		}(e.arrayValue);
		case 10:
		case 11: return function(e) {
			let t = 0;
			return lc(e.fields, ((e, n) => {
				t += e.length + Tc(n);
			})), t;
		}(e.mapValue);
		default: throw j(13486, { value: e });
	}
}
function Ec(e, t) {
	return { referenceValue: `projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}` };
}
function Dc(e) {
	return !!e && "integerValue" in e;
}
function Oc(e) {
	return !!e && "arrayValue" in e;
}
function kc(e) {
	return !!e && "nullValue" in e;
}
function Ac(e) {
	return !!e && "doubleValue" in e && isNaN(Number(e.doubleValue));
}
function jc(e) {
	return !!e && "mapValue" in e;
}
function Mc(e) {
	return (e?.mapValue?.fields || {})[Rp]?.stringValue === Vp;
}
function Nc(e) {
	if (e.geoPointValue) return { geoPointValue: { ...e.geoPointValue } };
	if (e.timestampValue && typeof e.timestampValue == "object") return { timestampValue: { ...e.timestampValue } };
	if (e.mapValue) {
		let t = { mapValue: { fields: {} } };
		return lc(e.mapValue.fields, ((e, n) => t.mapValue.fields[e] = Nc(n))), t;
	}
	if (e.arrayValue) {
		let t = { arrayValue: { values: [] } };
		for (let n = 0; n < (e.arrayValue.values || []).length; ++n) t.arrayValue.values[n] = Nc(e.arrayValue.values[n]);
		return t;
	}
	return { ...e };
}
function Pc(e) {
	return (((e.mapValue || {}).fields || {}).__type__ || {}).stringValue === zp;
}
function Fc(e) {
	let t = [];
	return lc(e.fields, ((e, n) => {
		let r = new Gf([e]);
		if (jc(n)) {
			let e = Fc(n.mapValue).fields;
			if (e.length === 0) t.push(r);
			else for (let n of e) t.push(r.child(n));
		} else t.push(r);
	})), new Dp(t);
}
function Ic(e, t, n) {
	let r = 0;
	for (let i = 0; i < e.position.length; i++) {
		let a = t[i], o = e.position[i];
		if (r = a.field.isKeyField() ? H.comparator(H.fromName(o.referenceValue), n.key) : bc(o, n.data.field(a.field)), a.dir === "desc" && (r *= -1), r !== 0) break;
	}
	return r;
}
function Lc(e, t) {
	if (e === null) return t === null;
	if (t === null || e.inclusive !== t.inclusive || e.position.length !== t.position.length) return !1;
	for (let n = 0; n < e.position.length; n++) if (!vc(e.position[n], t.position[n])) return !1;
	return !0;
}
function Rc(e, t) {
	return e.dir === t.dir && e.field.isEqual(t.field);
}
function zc(e) {
	return e.op === "and";
}
function Bc(e) {
	return Vc(e) && zc(e);
}
function Vc(e) {
	for (let t of e.filters) if (t instanceof Jp) return !1;
	return !0;
}
function Hc(e) {
	if (e instanceof J) return e.field.canonicalString() + e.op.toString() + Cc(e.value);
	if (Bc(e)) return e.filters.map(((e) => Hc(e))).join(",");
	{
		let t = e.filters.map(((e) => Hc(e))).join(",");
		return `${e.op}(${t})`;
	}
}
function Uc(e, t) {
	return e instanceof J ? function(e, t) {
		return t instanceof J && e.op === t.op && e.field.isEqual(t.field) && vc(e.value, t.value);
	}(e, t) : e instanceof Jp ? function(e, t) {
		return t instanceof Jp && e.op === t.op && e.filters.length === t.filters.length ? e.filters.reduce(((e, n, r) => e && Uc(n, t.filters[r])), !0) : !1;
	}(e, t) : void j(19439);
}
function Wc(e) {
	return e instanceof J ? function(e) {
		return `${e.field.canonicalString()} ${e.op} ${Cc(e.value)}`;
	}(e) : e instanceof Jp ? function(e) {
		return e.op.toString() + " {" + e.getFilters().map(Wc).join(" ,") + "}";
	}(e) : "Filter";
}
function Gc(e, t) {
	return (t.arrayValue?.values || []).map(((e) => H.fromName(e.referenceValue)));
}
function Kc(e, t = null, n = [], r = [], i = null, a = null, o = null) {
	return new nm(e, t, n, r, i, a, o);
}
function qc(e) {
	let t = N(e);
	if (t.Te === null) {
		let e = t.path.canonicalString();
		t.collectionGroup !== null && (e += "|cg:" + t.collectionGroup), e += "|f:", e += t.filters.map(((e) => Hc(e))).join(","), e += "|ob:", e += t.orderBy.map(((e) => function(e) {
			return e.field.canonicalString() + e.dir;
		}(e))).join(","), nc(t.limit) || (e += "|l:", e += t.limit), t.startAt && (e += "|lb:", e += t.startAt.inclusive ? "b:" : "a:", e += t.startAt.position.map(((e) => Cc(e))).join(",")), t.endAt && (e += "|ub:", e += t.endAt.inclusive ? "a:" : "b:", e += t.endAt.position.map(((e) => Cc(e))).join(",")), t.Te = e;
	}
	return t.Te;
}
function Jc(e, t) {
	if (e.limit !== t.limit || e.orderBy.length !== t.orderBy.length) return !1;
	for (let n = 0; n < e.orderBy.length; n++) if (!Rc(e.orderBy[n], t.orderBy[n])) return !1;
	if (e.filters.length !== t.filters.length) return !1;
	for (let n = 0; n < e.filters.length; n++) if (!Uc(e.filters[n], t.filters[n])) return !1;
	return e.collectionGroup === t.collectionGroup && !!e.path.isEqual(t.path) && !!Lc(e.startAt, t.startAt) && Lc(e.endAt, t.endAt);
}
function Yc(e) {
	return H.isDocumentKey(e.path) && e.collectionGroup === null && e.filters.length === 0;
}
function Xc(e, t, n, r, i, a, o, s) {
	return new rm(e, t, n, r, i, a, o, s);
}
function Zc(e) {
	return new rm(e);
}
function Qc(e) {
	return e.filters.length === 0 && e.limit === null && e.startAt == null && e.endAt == null && (e.explicitOrderBy.length === 0 || e.explicitOrderBy.length === 1 && e.explicitOrderBy[0].field.isKeyField());
}
function $c(e) {
	return H.isDocumentKey(e.path) && e.collectionGroup === null && e.filters.length === 0;
}
function el(e) {
	return e.collectionGroup !== null;
}
function tl(e) {
	let t = N(e);
	if (t.Ee === null) {
		t.Ee = [];
		let e = /* @__PURE__ */ new Set();
		for (let n of t.explicitOrderBy) t.Ee.push(n), e.add(n.field.canonicalString());
		let n = t.explicitOrderBy.length > 0 ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir : "asc";
		(function(e) {
			let t = new q(Gf.comparator);
			return e.filters.forEach(((e) => {
				e.getFlattenedFilters().forEach(((e) => {
					e.isInequality() && (t = t.add(e.field));
				}));
			})), t;
		})(t).forEach(((r) => {
			e.has(r.canonicalString()) || r.isKeyField() || t.Ee.push(new Kp(r, n));
		})), e.has(Gf.keyField().canonicalString()) || t.Ee.push(new Kp(Gf.keyField(), n));
	}
	return t.Ee;
}
function nl(e) {
	let t = N(e);
	return t.Ie ||= rl(t, tl(e)), t.Ie;
}
function rl(e, t) {
	if (e.limitType === "F") return Kc(e.path, e.collectionGroup, t, e.filters, e.limit, e.startAt, e.endAt);
	{
		t = t.map(((e) => {
			let t = e.dir === "desc" ? "asc" : "desc";
			return new Kp(e.field, t);
		}));
		let n = e.endAt ? new Gp(e.endAt.position, e.endAt.inclusive) : null, r = e.startAt ? new Gp(e.startAt.position, e.startAt.inclusive) : null;
		return Kc(e.path, e.collectionGroup, t, e.filters, e.limit, n, r);
	}
}
function il(e, t) {
	let n = e.filters.concat([t]);
	return new rm(e.path, e.collectionGroup, e.explicitOrderBy.slice(), n, e.limit, e.limitType, e.startAt, e.endAt);
}
function al(e, t, n) {
	return new rm(e.path, e.collectionGroup, e.explicitOrderBy.slice(), e.filters.slice(), t, n, e.startAt, e.endAt);
}
function ol(e, t) {
	return Jc(nl(e), nl(t)) && e.limitType === t.limitType;
}
function sl(e) {
	return `${qc(nl(e))}|lt:${e.limitType}`;
}
function cl(e) {
	return `Query(target=${function(e) {
		let t = e.path.canonicalString();
		return e.collectionGroup !== null && (t += " collectionGroup=" + e.collectionGroup), e.filters.length > 0 && (t += `, filters: [${e.filters.map(((e) => Wc(e))).join(", ")}]`), nc(e.limit) || (t += ", limit: " + e.limit), e.orderBy.length > 0 && (t += `, orderBy: [${e.orderBy.map(((e) => function(e) {
			return `${e.field.canonicalString()} (${e.dir})`;
		}(e))).join(", ")}]`), e.startAt && (t += ", startAt: ", t += e.startAt.inclusive ? "b:" : "a:", t += e.startAt.position.map(((e) => Cc(e))).join(",")), e.endAt && (t += ", endAt: ", t += e.endAt.inclusive ? "a:" : "b:", t += e.endAt.position.map(((e) => Cc(e))).join(",")), `Target(${t})`;
	}(nl(e))}; limitType=${e.limitType})`;
}
function ll(e, t) {
	return t.isFoundDocument() && function(e, t) {
		let n = t.key.path;
		return e.collectionGroup === null ? H.isDocumentKey(e.path) ? e.path.isEqual(n) : e.path.isImmediateParentOf(n) : t.key.hasCollectionId(e.collectionGroup) && e.path.isPrefixOf(n);
	}(e, t) && function(e, t) {
		for (let n of tl(e)) if (!n.field.isKeyField() && t.data.field(n.field) === null) return !1;
		return !0;
	}(e, t) && function(e, t) {
		for (let n of e.filters) if (!n.matches(t)) return !1;
		return !0;
	}(e, t) && function(e, t) {
		return !(e.startAt && !function(e, t, n) {
			let r = Ic(e, t, n);
			return e.inclusive ? r <= 0 : r < 0;
		}(e.startAt, tl(e), t) || e.endAt && !function(e, t, n) {
			let r = Ic(e, t, n);
			return e.inclusive ? r >= 0 : r > 0;
		}(e.endAt, tl(e), t));
	}(e, t);
}
function ul(e) {
	return e.collectionGroup || (e.path.length % 2 == 1 ? e.path.lastSegment() : e.path.get(e.path.length - 2));
}
function dl(e) {
	return (t, n) => {
		let r = !1;
		for (let i of tl(e)) {
			let e = fl(i, t, n);
			if (e !== 0) return e;
			r ||= i.field.isKeyField();
		}
		return 0;
	};
}
function fl(e, t, n) {
	let r = e.field.isKeyField() ? H.comparator(t.key, n.key) : function(e, t, n) {
		let r = t.data.field(e), i = n.data.field(e);
		return r !== null && i !== null ? bc(r, i) : j(42886);
	}(e.field, t, n);
	switch (e.dir) {
		case "asc": return r;
		case "desc": return -1 * r;
		default: return j(19790, { direction: e.dir });
	}
}
function pl() {
	return am;
}
function ml(...e) {
	let t = om;
	for (let n of e) t = t.insert(n.key, n);
	return t;
}
function hl(e) {
	let t = om;
	return e.forEach(((e, n) => t = t.insert(e, n.overlayedDocument))), t;
}
function gl() {
	return vl();
}
function _l() {
	return vl();
}
function vl() {
	return new im(((e) => e.toString()), ((e, t) => e.isEqual(t)));
}
function L(...e) {
	let t = cm;
	for (let n of e) t = t.add(n);
	return t;
}
function yl() {
	return lm;
}
function bl(e, t) {
	if (e.useProto3Json) {
		if (isNaN(t)) return { doubleValue: "NaN" };
		if (t === Infinity) return { doubleValue: "Infinity" };
		if (t === -Infinity) return { doubleValue: "-Infinity" };
	}
	return { doubleValue: rc(t) ? "-0" : t };
}
function xl(e) {
	return { integerValue: "" + e };
}
function Sl(e, t) {
	return ic(t) ? xl(t) : bl(e, t);
}
function Cl(e, t, n) {
	return e instanceof dm ? function(e, t) {
		let n = { fields: {
			[Mp]: { stringValue: jp },
			[Pp]: { timestampValue: {
				seconds: e.seconds,
				nanos: e.nanoseconds
			} }
		} };
		return t && pc(t) && (t = mc(t)), t && (n.fields[Np] = t), { mapValue: n };
	}(n, t) : e instanceof fm ? El(e, t) : e instanceof pm ? Dl(e, t) : function(e, t) {
		let n = Tl(e, t), r = Ol(n) + Ol(e.Ae);
		return Dc(n) && Dc(e.Ae) ? xl(r) : bl(e.serializer, r);
	}(e, t);
}
function wl(e, t, n) {
	return e instanceof fm ? El(e, t) : e instanceof pm ? Dl(e, t) : n;
}
function Tl(e, t) {
	return e instanceof mm ? function(e) {
		return Dc(e) || function(e) {
			return !!e && "doubleValue" in e;
		}(e);
	}(t) ? t : { integerValue: 0 } : null;
}
function El(e, t) {
	let n = kl(t);
	for (let t of e.elements) n.some(((e) => vc(e, t))) || n.push(t);
	return { arrayValue: { values: n } };
}
function Dl(e, t) {
	let n = kl(t);
	for (let t of e.elements) n = n.filter(((e) => !vc(e, t)));
	return { arrayValue: { values: n } };
}
function Ol(e) {
	return I(e.integerValue || e.doubleValue);
}
function kl(e) {
	return Oc(e) && e.arrayValue.values ? e.arrayValue.values.slice() : [];
}
function Al(e, t) {
	return e.field.isEqual(t.field) && function(e, t) {
		return e instanceof fm && t instanceof fm || e instanceof pm && t instanceof pm ? Vs(e.elements, t.elements, vc) : e instanceof mm && t instanceof mm ? vc(e.Ae, t.Ae) : e instanceof dm && t instanceof dm;
	}(e.transform, t.transform);
}
function jl(e, t) {
	return e.updateTime === void 0 ? e.exists === void 0 || e.exists === t.isFoundDocument() : t.isFoundDocument() && t.version.isEqual(e.updateTime);
}
function Ml(e, t) {
	if (!e.hasLocalMutations || t && t.fields.length === 0) return null;
	if (t === null) return e.isNoDocument() ? new bm(e.key, gm.none()) : new vm(e.key, e.data, gm.none());
	{
		let n = e.data, r = Up.empty(), i = new q(Gf.comparator);
		for (let e of t.fields) if (!i.has(e)) {
			let t = n.field(e);
			t === null && e.length > 1 && (e = e.popLast(), t = n.field(e)), t === null ? r.delete(e) : r.set(e, t), i = i.add(e);
		}
		return new ym(e.key, r, new Dp(i.toArray()), gm.none());
	}
}
function Nl(e, t, n) {
	e instanceof vm ? function(e, t, n) {
		let r = e.value.clone(), i = Rl(e.fieldTransforms, t, n.transformResults);
		r.setAll(i), t.convertToFoundDocument(n.version, r).setHasCommittedMutations();
	}(e, t, n) : e instanceof ym ? function(e, t, n) {
		if (!jl(e.precondition, t)) return void t.convertToUnknownDocument(n.version);
		let r = Rl(e.fieldTransforms, t, n.transformResults), i = t.data;
		i.setAll(Ll(e)), i.setAll(r), t.convertToFoundDocument(n.version, i).setHasCommittedMutations();
	}(e, t, n) : function(e, t, n) {
		t.convertToNoDocument(n.version).setHasCommittedMutations();
	}(0, t, n);
}
function Pl(e, t, n, r) {
	return e instanceof vm ? function(e, t, n, r) {
		if (!jl(e.precondition, t)) return n;
		let i = e.value.clone(), a = zl(e.fieldTransforms, r, t);
		return i.setAll(a), t.convertToFoundDocument(t.version, i).setHasLocalMutations(), null;
	}(e, t, n, r) : e instanceof ym ? function(e, t, n, r) {
		if (!jl(e.precondition, t)) return n;
		let i = zl(e.fieldTransforms, r, t), a = t.data;
		return a.setAll(Ll(e)), a.setAll(i), t.convertToFoundDocument(t.version, a).setHasLocalMutations(), n === null ? null : n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(((e) => e.field)));
	}(e, t, n, r) : function(e, t, n) {
		return jl(e.precondition, t) ? (t.convertToNoDocument(t.version).setHasLocalMutations(), null) : n;
	}(e, t, n);
}
function Fl(e, t) {
	let n = null;
	for (let r of e.fieldTransforms) {
		let e = t.data.field(r.field), i = Tl(r.transform, e || null);
		i != null && (n === null && (n = Up.empty()), n.set(r.field, i));
	}
	return n || null;
}
function Il(e, t) {
	return e.type === t.type && !!e.key.isEqual(t.key) && !!e.precondition.isEqual(t.precondition) && !!function(e, t) {
		return e === void 0 && t === void 0 || !(!e || !t) && Vs(e, t, ((e, t) => Al(e, t)));
	}(e.fieldTransforms, t.fieldTransforms) && (e.type === 0 ? e.value.isEqual(t.value) : e.type !== 1 || e.data.isEqual(t.data) && e.fieldMask.isEqual(t.fieldMask));
}
function Ll(e) {
	let t = /* @__PURE__ */ new Map();
	return e.fieldMask.fields.forEach(((n) => {
		if (!n.isEmpty()) {
			let r = e.data.field(n);
			t.set(n, r);
		}
	})), t;
}
function Rl(e, t, n) {
	let r = /* @__PURE__ */ new Map();
	M(e.length === n.length, 32656, {
		Ve: n.length,
		de: e.length
	});
	for (let i = 0; i < n.length; i++) {
		let a = e[i], o = a.transform, s = t.data.field(a.field);
		r.set(a.field, wl(o, s, n[i]));
	}
	return r;
}
function zl(e, t, n) {
	let r = /* @__PURE__ */ new Map();
	for (let i of e) {
		let e = i.transform, a = n.data.field(i.field);
		r.set(i.field, Cl(e, a, t));
	}
	return r;
}
function Bl(e) {
	switch (e) {
		case z.OK: return j(64938);
		case z.CANCELLED:
		case z.UNKNOWN:
		case z.DEADLINE_EXCEEDED:
		case z.RESOURCE_EXHAUSTED:
		case z.INTERNAL:
		case z.UNAVAILABLE:
		case z.UNAUTHENTICATED: return !1;
		case z.INVALID_ARGUMENT:
		case z.NOT_FOUND:
		case z.ALREADY_EXISTS:
		case z.PERMISSION_DENIED:
		case z.FAILED_PRECONDITION:
		case z.ABORTED:
		case z.OUT_OF_RANGE:
		case z.UNIMPLEMENTED:
		case z.DATA_LOSS: return !0;
		default: return j(15467, { code: e });
	}
}
function Vl(e) {
	if (e === void 0) return Ps("GRPC error has no .code"), z.UNKNOWN;
	switch (e) {
		case Y.OK: return z.OK;
		case Y.CANCELLED: return z.CANCELLED;
		case Y.UNKNOWN: return z.UNKNOWN;
		case Y.DEADLINE_EXCEEDED: return z.DEADLINE_EXCEEDED;
		case Y.RESOURCE_EXHAUSTED: return z.RESOURCE_EXHAUSTED;
		case Y.INTERNAL: return z.INTERNAL;
		case Y.UNAVAILABLE: return z.UNAVAILABLE;
		case Y.UNAUTHENTICATED: return z.UNAUTHENTICATED;
		case Y.INVALID_ARGUMENT: return z.INVALID_ARGUMENT;
		case Y.NOT_FOUND: return z.NOT_FOUND;
		case Y.ALREADY_EXISTS: return z.ALREADY_EXISTS;
		case Y.PERMISSION_DENIED: return z.PERMISSION_DENIED;
		case Y.FAILED_PRECONDITION: return z.FAILED_PRECONDITION;
		case Y.ABORTED: return z.ABORTED;
		case Y.OUT_OF_RANGE: return z.OUT_OF_RANGE;
		case Y.UNIMPLEMENTED: return z.UNIMPLEMENTED;
		case Y.DATA_LOSS: return z.DATA_LOSS;
		default: return j(39323, { code: e });
	}
}
function Hl() {
	return new TextEncoder();
}
function Ul(e) {
	let t = Hl().encode(e), n = new ys();
	return n.update(t), new Uint8Array(n.digest());
}
function Wl(e) {
	let t = new DataView(e.buffer), n = t.getUint32(0, !0), r = t.getUint32(4, !0), i = t.getUint32(8, !0), a = t.getUint32(12, !0);
	return [new vs([n, r], 0), new vs([i, a], 0)];
}
function Gl() {
	return new K(H.comparator);
}
function Kl() {
	return new K(H.comparator);
}
function ql(e, t) {
	return e.useProto3Json || nc(t) ? t : { value: t };
}
function Jl(e, t) {
	return e.useProto3Json ? `${(/* @__PURE__ */ new Date(1e3 * t.seconds)).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + t.nanoseconds).slice(-9)}Z` : {
		seconds: "" + t.seconds,
		nanos: t.nanoseconds
	};
}
function Yl(e, t) {
	return e.useProto3Json ? t.toBase64() : t.toUint8Array();
}
function Xl(e, t) {
	return Jl(e, t.toTimestamp());
}
function Zl(e) {
	return M(!!e, 49232), W.fromTimestamp(function(e) {
		let t = dc(e);
		return new U(t.seconds, t.nanos);
	}(e));
}
function Ql(e, t) {
	return $l(e, t).canonicalString();
}
function $l(e, t) {
	let n = function(e) {
		return new V([
			"projects",
			e.projectId,
			"databases",
			e.database
		]);
	}(e).child("documents");
	return t === void 0 ? n : n.child(t);
}
function eu(e) {
	let t = V.fromString(e);
	return M(Cu(t), 10190, { key: t.toString() }), t;
}
function tu(e, t) {
	return Ql(e.databaseId, t.path);
}
function nu(e, t) {
	let n = eu(t);
	if (n.get(1) !== e.databaseId.projectId) throw new B(z.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + e.databaseId.projectId);
	if (n.get(3) !== e.databaseId.database) throw new B(z.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + e.databaseId.database);
	return new H(ou(n));
}
function ru(e, t) {
	return Ql(e.databaseId, t);
}
function iu(e) {
	let t = eu(e);
	return t.length === 4 ? V.emptyPath() : ou(t);
}
function au(e) {
	return new V([
		"projects",
		e.databaseId.projectId,
		"databases",
		e.databaseId.database
	]).canonicalString();
}
function ou(e) {
	return M(e.length > 4 && e.get(4) === "documents", 29091, { key: e.toString() }), e.popFirst(5);
}
function su(e, t, n) {
	return {
		name: tu(e, t),
		fields: n.value.mapValue.fields
	};
}
function cu(e, t) {
	let n;
	if ("targetChange" in t) {
		t.targetChange;
		let r = function(e) {
			return e === "NO_CHANGE" ? 0 : e === "ADD" ? 1 : e === "REMOVE" ? 2 : e === "CURRENT" ? 3 : e === "RESET" ? 4 : j(39313, { state: e });
		}(t.targetChange.targetChangeType || "NO_CHANGE"), i = t.targetChange.targetIds || [], a = function(e, t) {
			return e.useProto3Json ? (M(t === void 0 || typeof t == "string", 58123), kp.fromBase64String(t || "")) : (M(t === void 0 || t instanceof Buffer || t instanceof Uint8Array, 16193), kp.fromUint8Array(t || new Uint8Array()));
		}(e, t.targetChange.resumeToken), o = t.targetChange.cause;
		n = new Pm(r, i, a, o && function(e) {
			return new B(e.code === void 0 ? z.UNKNOWN : Vl(e.code), e.message || "");
		}(o) || null);
	} else if ("documentChange" in t) {
		t.documentChange;
		let r = t.documentChange;
		r.document, r.document.name, r.document.updateTime;
		let i = nu(e, r.document.name), a = Zl(r.document.updateTime), o = r.document.createTime ? Zl(r.document.createTime) : W.min(), s = new Up({ mapValue: { fields: r.document.fields } }), c = Wp.newFoundDocument(i, a, o, s);
		n = new Mm(r.targetIds || [], r.removedTargetIds || [], c.key, c);
	} else if ("documentDelete" in t) {
		t.documentDelete;
		let r = t.documentDelete;
		r.document;
		let i = nu(e, r.document), a = r.readTime ? Zl(r.readTime) : W.min(), o = Wp.newNoDocument(i, a);
		n = new Mm([], r.removedTargetIds || [], o.key, o);
	} else if ("documentRemove" in t) {
		t.documentRemove;
		let r = t.documentRemove;
		r.document;
		let i = nu(e, r.document);
		n = new Mm([], r.removedTargetIds || [], i, null);
	} else {
		if (!("filter" in t)) return j(11601, { Vt: t });
		{
			t.filter;
			let e = t.filter;
			e.targetId;
			let { count: r = 0, unchangedNames: i } = e, a = new Tm(r, i), o = e.targetId;
			n = new Nm(o, a);
		}
	}
	return n;
}
function lu(e, t) {
	let n;
	if (t instanceof vm) n = { update: su(e, t.key, t.value) };
	else if (t instanceof bm) n = { delete: tu(e, t.key) };
	else if (t instanceof ym) n = {
		update: su(e, t.key, t.data),
		updateMask: Su(t.fieldMask)
	};
	else {
		if (!(t instanceof xm)) return j(16599, { dt: t.type });
		n = { verify: tu(e, t.key) };
	}
	return t.fieldTransforms.length > 0 && (n.updateTransforms = t.fieldTransforms.map(((e) => function(e, t) {
		let n = t.transform;
		if (n instanceof dm) return {
			fieldPath: t.field.canonicalString(),
			setToServerValue: "REQUEST_TIME"
		};
		if (n instanceof fm) return {
			fieldPath: t.field.canonicalString(),
			appendMissingElements: { values: n.elements }
		};
		if (n instanceof pm) return {
			fieldPath: t.field.canonicalString(),
			removeAllFromArray: { values: n.elements }
		};
		if (n instanceof mm) return {
			fieldPath: t.field.canonicalString(),
			increment: n.Ae
		};
		throw j(20930, { transform: t.transform });
	}(0, e)))), t.precondition.isNone || (n.currentDocument = function(e, t) {
		return t.updateTime === void 0 ? t.exists === void 0 ? j(27497) : { exists: t.exists } : { updateTime: Xl(e, t.updateTime) };
	}(e, t.precondition)), n;
}
function uu(e, t) {
	return e && e.length > 0 ? (M(t !== void 0, 14353), e.map(((e) => function(e, t) {
		let n = e.updateTime ? Zl(e.updateTime) : Zl(t);
		return n.isEqual(W.min()) && (n = Zl(t)), new hm(n, e.transformResults || []);
	}(e, t)))) : [];
}
function du(e, t) {
	return { documents: [ru(e, t.path)] };
}
function fu(e, t) {
	let n = { structuredQuery: {} }, r = t.path, i;
	t.collectionGroup === null ? (i = r.popLast(), n.structuredQuery.from = [{ collectionId: r.lastSegment() }]) : (i = r, n.structuredQuery.from = [{
		collectionId: t.collectionGroup,
		allDescendants: !0
	}]), n.parent = ru(e, i);
	let a = function(e) {
		if (e.length !== 0) return xu(Jp.create(e, "and"));
	}(t.filters);
	a && (n.structuredQuery.where = a);
	let o = function(e) {
		if (e.length !== 0) return e.map(((e) => function(e) {
			return {
				field: yu(e.field),
				direction: gu(e.dir)
			};
		}(e)));
	}(t.orderBy);
	o && (n.structuredQuery.orderBy = o);
	let s = ql(e, t.limit);
	return s !== null && (n.structuredQuery.limit = s), t.startAt && (n.structuredQuery.startAt = function(e) {
		return {
			before: e.inclusive,
			values: e.position
		};
	}(t.startAt)), t.endAt && (n.structuredQuery.endAt = function(e) {
		return {
			before: !e.inclusive,
			values: e.position
		};
	}(t.endAt)), {
		ft: n,
		parent: i
	};
}
function pu(e) {
	let t = iu(e.parent), n = e.structuredQuery, r = n.from ? n.from.length : 0, i = null;
	if (r > 0) {
		M(r === 1, 65062);
		let e = n.from[0];
		e.allDescendants ? i = e.collectionId : t = t.child(e.collectionId);
	}
	let a = [];
	n.where && (a = function(e) {
		let t = hu(e);
		return t instanceof Jp && Bc(t) ? t.getFilters() : [t];
	}(n.where));
	let o = [];
	n.orderBy && (o = function(e) {
		return e.map(((e) => function(e) {
			return new Kp(bu(e.field), function(e) {
				switch (e) {
					case "ASCENDING": return "asc";
					case "DESCENDING": return "desc";
					default: return;
				}
			}(e.direction));
		}(e)));
	}(n.orderBy));
	let s = null;
	n.limit && (s = function(e) {
		let t;
		return t = typeof e == "object" ? e.value : e, nc(t) ? null : t;
	}(n.limit));
	let c = null;
	n.startAt && (c = function(e) {
		let t = !!e.before;
		return new Gp(e.values || [], t);
	}(n.startAt));
	let l = null;
	return n.endAt && (l = function(e) {
		let t = !e.before;
		return new Gp(e.values || [], t);
	}(n.endAt)), Xc(t, i, o, a, s, "F", c, l);
}
function mu(e, t) {
	let n = function(e) {
		switch (e) {
			case "TargetPurposeListen": return null;
			case "TargetPurposeExistenceFilterMismatch": return "existence-filter-mismatch";
			case "TargetPurposeExistenceFilterMismatchBloom": return "existence-filter-mismatch-bloom";
			case "TargetPurposeLimboResolution": return "limbo-document";
			default: return j(28987, { purpose: e });
		}
	}(t.purpose);
	return n == null ? null : { "goog-listen-tags": n };
}
function hu(e) {
	return e.unaryFilter === void 0 ? e.fieldFilter === void 0 ? e.compositeFilter === void 0 ? j(30097, { filter: e }) : function(e) {
		return Jp.create(e.compositeFilter.filters.map(((e) => hu(e))), function(e) {
			switch (e) {
				case "AND": return "and";
				case "OR": return "or";
				default: return j(1026);
			}
		}(e.compositeFilter.op));
	}(e) : function(e) {
		return J.create(bu(e.fieldFilter.field), function(e) {
			switch (e) {
				case "EQUAL": return "==";
				case "NOT_EQUAL": return "!=";
				case "GREATER_THAN": return ">";
				case "GREATER_THAN_OR_EQUAL": return ">=";
				case "LESS_THAN": return "<";
				case "LESS_THAN_OR_EQUAL": return "<=";
				case "ARRAY_CONTAINS": return "array-contains";
				case "IN": return "in";
				case "NOT_IN": return "not-in";
				case "ARRAY_CONTAINS_ANY": return "array-contains-any";
				case "OPERATOR_UNSPECIFIED": return j(58110);
				default: return j(50506);
			}
		}(e.fieldFilter.op), e.fieldFilter.value);
	}(e) : function(e) {
		switch (e.unaryFilter.op) {
			case "IS_NAN":
				let t = bu(e.unaryFilter.field);
				return J.create(t, "==", { doubleValue: NaN });
			case "IS_NULL":
				let n = bu(e.unaryFilter.field);
				return J.create(n, "==", { nullValue: "NULL_VALUE" });
			case "IS_NOT_NAN":
				let r = bu(e.unaryFilter.field);
				return J.create(r, "!=", { doubleValue: NaN });
			case "IS_NOT_NULL":
				let i = bu(e.unaryFilter.field);
				return J.create(i, "!=", { nullValue: "NULL_VALUE" });
			case "OPERATOR_UNSPECIFIED": return j(61313);
			default: return j(60726);
		}
	}(e);
}
function gu(e) {
	return Lm[e];
}
function _u(e) {
	return Rm[e];
}
function vu(e) {
	return zm[e];
}
function yu(e) {
	return { fieldPath: e.canonicalString() };
}
function bu(e) {
	return Gf.fromServerFormat(e.fieldPath);
}
function xu(e) {
	return e instanceof J ? function(e) {
		if (e.op === "==") {
			if (Ac(e.value)) return { unaryFilter: {
				field: yu(e.field),
				op: "IS_NAN"
			} };
			if (kc(e.value)) return { unaryFilter: {
				field: yu(e.field),
				op: "IS_NULL"
			} };
		} else if (e.op === "!=") {
			if (Ac(e.value)) return { unaryFilter: {
				field: yu(e.field),
				op: "IS_NOT_NAN"
			} };
			if (kc(e.value)) return { unaryFilter: {
				field: yu(e.field),
				op: "IS_NOT_NULL"
			} };
		}
		return { fieldFilter: {
			field: yu(e.field),
			op: _u(e.op),
			value: e.value
		} };
	}(e) : e instanceof Jp ? function(e) {
		let t = e.getFilters().map(((e) => xu(e)));
		return t.length === 1 ? t[0] : { compositeFilter: {
			op: vu(e.op),
			filters: t
		} };
	}(e) : j(54877, { filter: e });
}
function Su(e) {
	let t = [];
	return e.fields.forEach(((e) => t.push(e.canonicalString()))), { fieldPaths: t };
}
function Cu(e) {
	return e.length >= 4 && e.get(0) === "projects" && e.get(2) === "databases";
}
function wu(e) {
	return !!e && typeof e._toProto == "function" && e._protoValueType === "ProtoValue";
}
function Tu(e) {
	let t = pu({
		parent: e.parent,
		structuredQuery: e.structuredQuery
	});
	return e.limitType === "LAST" ? al(t, t.limit, "L") : t;
}
function Eu([e, t], [n, r]) {
	let i = P(e, n);
	return i === 0 ? P(t, r) : i;
}
function Du(e, t) {
	return new eh(e, t);
}
function Ou(e, t, n, r) {
	return new xh(e, t, n, r);
}
async function ku(e, t) {
	let n = N(e);
	return await n.persistence.runTransaction("Handle user change", "readonly", ((e) => {
		let r;
		return n.mutationQueue.getAllMutationBatches(e).next(((i) => (r = i, n.Os(t), n.mutationQueue.getAllMutationBatches(e)))).next(((t) => {
			let i = [], a = [], o = L();
			for (let e of r) {
				i.push(e.batchId);
				for (let t of e.mutations) o = o.add(t.key);
			}
			for (let e of t) {
				a.push(e.batchId);
				for (let t of e.mutations) o = o.add(t.key);
			}
			return n.localDocuments.getDocuments(e, o).next(((e) => ({
				Ns: e,
				removedBatchIds: i,
				addedBatchIds: a
			})));
		}));
	}));
}
function Au(e, t) {
	let n = N(e);
	return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", ((e) => {
		let r = t.batch.keys(), i = n.xs.newChangeBuffer({ trackRemovals: !0 });
		return function(e, t, n, r) {
			let i = n.batch, a = i.keys(), o = G.resolve();
			return a.forEach(((e) => {
				o = o.next((() => r.getEntry(t, e))).next(((t) => {
					let a = n.docVersions.get(e);
					M(a !== null, 48541), t.version.compareTo(a) < 0 && (i.applyToRemoteDocument(t, n), t.isValidDocument() && (t.setReadTime(n.commitVersion), r.addEntry(t)));
				}));
			})), o.next((() => e.mutationQueue.removeMutationBatch(t, i)));
		}(n, e, t, i).next((() => i.apply(e))).next((() => n.mutationQueue.performConsistencyCheck(e))).next((() => n.documentOverlayCache.removeOverlaysForBatchId(e, r, t.batch.batchId))).next((() => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e, function(e) {
			let t = L();
			for (let n = 0; n < e.mutationResults.length; ++n) e.mutationResults[n].transformResults.length > 0 && (t = t.add(e.batch.mutations[n].key));
			return t;
		}(t)))).next((() => n.localDocuments.getDocuments(e, r)));
	}));
}
function ju(e) {
	let t = N(e);
	return t.persistence.runTransaction("Get last remote snapshot version", "readonly", ((e) => t.li.getLastRemoteSnapshotVersion(e)));
}
function Mu(e, t) {
	let n = N(e), r = t.snapshotVersion, i = n.vs;
	return n.persistence.runTransaction("Apply remote event", "readwrite-primary", ((e) => {
		let a = n.xs.newChangeBuffer({ trackRemovals: !0 });
		i = n.vs;
		let o = [];
		t.targetChanges.forEach(((a, s) => {
			let c = i.get(s);
			if (!c) return;
			o.push(n.li.removeMatchingKeys(e, a.removedDocuments, s).next((() => n.li.addMatchingKeys(e, a.addedDocuments, s))));
			let l = c.withSequenceNumber(e.currentSequenceNumber);
			t.targetMismatches.get(s) === null ? a.resumeToken.approximateByteSize() > 0 && (l = l.withResumeToken(a.resumeToken, r)) : l = l.withResumeToken(kp.EMPTY_BYTE_STRING, W.min()).withLastLimboFreeSnapshotVersion(W.min()), i = i.insert(s, l), function(e, t, n) {
				return e.resumeToken.approximateByteSize() === 0 || t.snapshotVersion.toMicroseconds() - e.snapshotVersion.toMicroseconds() >= bh ? !0 : n.addedDocuments.size + n.modifiedDocuments.size + n.removedDocuments.size > 0;
			}(c, l, a) && o.push(n.li.updateTargetData(e, l));
		}));
		let s = pl(), c = L();
		if (t.documentUpdates.forEach(((r) => {
			t.resolvedLimboDocuments.has(r) && o.push(n.persistence.referenceDelegate.updateLimboDocument(e, r));
		})), o.push(Nu(e, a, t.documentUpdates).next(((e) => {
			s = e.Bs, c = e.Ls;
		}))), !r.isEqual(W.min())) {
			let t = n.li.getLastRemoteSnapshotVersion(e).next(((t) => n.li.setTargetsMetadata(e, e.currentSequenceNumber, r)));
			o.push(t);
		}
		return G.waitFor(o).next((() => a.apply(e))).next((() => n.localDocuments.getLocalViewOfDocuments(e, s, c))).next((() => s));
	})).then(((e) => (n.vs = i, e)));
}
function Nu(e, t, n) {
	let r = L(), i = L();
	return n.forEach(((e) => r = r.add(e))), t.getEntries(e, r).next(((e) => {
		let r = pl();
		return n.forEach(((n, a) => {
			let o = e.get(n);
			a.isFoundDocument() !== o.isFoundDocument() && (i = i.add(n)), a.isNoDocument() && a.version.isEqual(W.min()) ? (t.removeEntry(n, a.readTime), r = r.insert(n, a)) : !o.isValidDocument() || a.version.compareTo(o.version) > 0 || a.version.compareTo(o.version) === 0 && o.hasPendingWrites ? (t.addEntry(a), r = r.insert(n, a)) : A(yh, "Ignoring outdated watch update for ", n, ". Current version:", o.version, " Watch version:", a.version);
		})), {
			Bs: r,
			Ls: i
		};
	}));
}
function Pu(e, t) {
	let n = N(e);
	return n.persistence.runTransaction("Get next mutation batch", "readonly", ((e) => (t === void 0 && (t = ep), n.mutationQueue.getNextMutationBatchAfterBatchId(e, t))));
}
function Fu(e, t) {
	let n = N(e);
	return n.persistence.runTransaction("Allocate target", "readwrite", ((e) => {
		let r;
		return n.li.getTargetData(e, t).next(((i) => i ? (r = i, G.resolve(r)) : n.li.allocateTargetId(e).next(((i) => (r = new Vm(t, i, "TargetPurposeListen", e.currentSequenceNumber), n.li.addTargetData(e, r).next((() => r)))))));
	})).then(((e) => {
		let r = n.vs.get(e.targetId);
		return (r === null || e.snapshotVersion.compareTo(r.snapshotVersion) > 0) && (n.vs = n.vs.insert(e.targetId, e), n.Fs.set(t, e.targetId)), e;
	}));
}
async function Iu(e, t, n) {
	let r = N(e), i = r.vs.get(t), a = n ? "readwrite" : "readwrite-primary";
	try {
		n || await r.persistence.runTransaction("Release target", a, ((e) => r.persistence.referenceDelegate.removeTarget(e, i)));
	} catch (e) {
		if (!tc(e)) throw e;
		A(yh, `Failed to update sequence numbers for target ${t}: ${e}`);
	}
	r.vs = r.vs.remove(t), r.Fs.delete(i.target);
}
function Lu(e, t, n) {
	let r = N(e), i = W.min(), a = L();
	return r.persistence.runTransaction("Execute query", "readwrite", ((e) => function(e, t, n) {
		let r = N(e), i = r.Fs.get(n);
		return i === void 0 ? r.li.getTargetData(t, n) : G.resolve(r.vs.get(i));
	}(r, e, nl(t)).next(((t) => {
		if (t) return i = t.lastLimboFreeSnapshotVersion, r.li.getMatchingKeysForTargetId(e, t.targetId).next(((e) => {
			a = e;
		}));
	})).next((() => r.Cs.getDocumentsMatchingQuery(e, t, n ? i : W.min(), n ? a : L()))).next(((e) => (Ru(r, ul(t), e), {
		documents: e,
		ks: a
	})))));
}
function Ru(e, t, n) {
	let r = e.Ms.get(t) || W.min();
	n.forEach(((e, t) => {
		t.readTime.compareTo(r) > 0 && (r = t.readTime);
	})), e.Ms.set(t, r);
}
function zu() {
	return Dh === null ? Dh = function() {
		return 268435456 + Math.round(2147483648 * Math.random());
	}() : Dh++, "0x" + Dh.toString(16);
}
function Bu(e) {
	return new Nh(e);
}
function Vu() {
	return typeof document < "u" ? document : null;
}
function Hu(e) {
	return new Bm(e, !0);
}
function Uu(e, t, n, r) {
	return new Bh(e, t, n, r);
}
async function Wu(e) {
	if (Qu(e)) for (let t of e.Ra) await t(!0);
}
async function Gu(e) {
	for (let t of e.Ra) await t(!1);
}
function Ku(e, t) {
	let n = N(e);
	n.Ea.has(t.targetId) || (n.Ea.set(t.targetId, t), Zu(n) ? Xu(n) : _d(n).O_() && Ju(n, t));
}
function qu(e, t) {
	let n = N(e), r = _d(n);
	n.Ea.delete(t), r.O_() && Yu(n, t), n.Ea.size === 0 && (r.O_() ? r.L_() : Qu(n) && n.Va.set("Unknown"));
}
function Ju(e, t) {
	if (e.da.$e(t.targetId), t.resumeToken.approximateByteSize() > 0 || t.snapshotVersion.compareTo(W.min()) > 0) {
		let n = e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;
		t = t.withExpectedCount(n);
	}
	_d(e).Z_(t);
}
function Yu(e, t) {
	e.da.$e(t), _d(e).X_(t);
}
function Xu(e) {
	e.da = new Im({
		getRemoteKeysForTarget: (t) => e.remoteSyncer.getRemoteKeysForTarget(t),
		At: (t) => e.Ea.get(t) || null,
		ht: () => e.datastore.serializer.databaseId
	}), _d(e).start(), e.Va.ua();
}
function Zu(e) {
	return Qu(e) && !_d(e).x_() && e.Ea.size > 0;
}
function Qu(e) {
	return N(e).Ia.size === 0;
}
function $u(e) {
	e.da = void 0;
}
async function ed(e) {
	e.Va.set("Online");
}
async function td(e) {
	e.Ea.forEach(((t, n) => {
		Ju(e, t);
	}));
}
async function nd(e, t) {
	$u(e), Zu(e) ? (e.Va.ha(t), Xu(e)) : e.Va.set("Unknown");
}
async function rd(e, t, n) {
	if (e.Va.set("Online"), t instanceof Pm && t.state === 2 && t.cause) try {
		await async function(e, t) {
			let n = t.cause;
			for (let r of t.targetIds) e.Ea.has(r) && (await e.remoteSyncer.rejectListen(r, n), e.Ea.delete(r), e.da.removeTarget(r));
		}(e, t);
	} catch (n) {
		A(Hh, "Failed to remove targets %s: %s ", t.targetIds.join(","), n), await id(e, n);
	}
	else if (t instanceof Mm ? e.da.Xe(t) : t instanceof Nm ? e.da.st(t) : e.da.tt(t), !n.isEqual(W.min())) try {
		let t = await ju(e.localStore);
		n.compareTo(t) >= 0 && await function(e, t) {
			let n = e.da.Tt(t);
			return n.targetChanges.forEach(((n, r) => {
				if (n.resumeToken.approximateByteSize() > 0) {
					let i = e.Ea.get(r);
					i && e.Ea.set(r, i.withResumeToken(n.resumeToken, t));
				}
			})), n.targetMismatches.forEach(((t, n) => {
				let r = e.Ea.get(t);
				r && (e.Ea.set(t, r.withResumeToken(kp.EMPTY_BYTE_STRING, r.snapshotVersion)), Yu(e, t), Ju(e, new Vm(r.target, t, n, r.sequenceNumber)));
			})), e.remoteSyncer.applyRemoteEvent(n);
		}(e, n);
	} catch (t) {
		A(Hh, "Failed to raise snapshot:", t), await id(e, t);
	}
}
async function id(e, t, n) {
	if (!tc(t)) throw t;
	e.Ia.add(1), await Gu(e), e.Va.set("Offline"), n ||= () => ju(e.localStore), e.asyncQueue.enqueueRetryable((async () => {
		A(Hh, "Retrying IndexedDB access"), await n(), e.Ia.delete(1), await Wu(e);
	}));
}
function ad(e, t) {
	return t().catch(((n) => id(e, n, t)));
}
async function od(e) {
	let t = N(e), n = vd(t), r = t.Ta.length > 0 ? t.Ta[t.Ta.length - 1].batchId : ep;
	for (; sd(t);) try {
		let e = await Pu(t.localStore, r);
		if (e === null) {
			t.Ta.length === 0 && n.L_();
			break;
		}
		r = e.batchId, cd(t, e);
	} catch (e) {
		await id(t, e);
	}
	ld(t) && ud(t);
}
function sd(e) {
	return Qu(e) && e.Ta.length < 10;
}
function cd(e, t) {
	e.Ta.push(t);
	let n = vd(e);
	n.O_() && n.Y_ && n.ea(t.mutations);
}
function ld(e) {
	return Qu(e) && !vd(e).x_() && e.Ta.length > 0;
}
function ud(e) {
	vd(e).start();
}
async function dd(e) {
	vd(e).ra();
}
async function fd(e) {
	let t = vd(e);
	for (let n of e.Ta) t.ea(n.mutations);
}
async function pd(e, t, n) {
	let r = e.Ta.shift(), i = Cm.from(r, t, n);
	await ad(e, (() => e.remoteSyncer.applySuccessfulWrite(i))), await od(e);
}
async function md(e, t) {
	t && vd(e).Y_ && await async function(e, t) {
		if (function(e) {
			return Bl(e) && e !== z.ABORTED;
		}(t.code)) {
			let n = e.Ta.shift();
			vd(e).B_(), await ad(e, (() => e.remoteSyncer.rejectFailedWrite(n.batchId, t))), await od(e);
		}
	}(e, t), ld(e) && ud(e);
}
async function hd(e, t) {
	let n = N(e);
	n.asyncQueue.verifyOperationInProgress(), A(Hh, "RemoteStore received new credentials");
	let r = Qu(n);
	n.Ia.add(3), await Gu(n), r && n.Va.set("Unknown"), await n.remoteSyncer.handleCredentialChange(t), n.Ia.delete(3), await Wu(n);
}
async function gd(e, t) {
	let n = N(e);
	t ? (n.Ia.delete(2), await Wu(n)) : t || (n.Ia.add(2), await Gu(n), n.Va.set("Unknown"));
}
function _d(e) {
	return e.ma || (e.ma = function(e, t, n) {
		let r = N(e);
		return r.sa(), new Lh(t, r.connection, r.authCredentials, r.appCheckCredentials, r.serializer, n);
	}(e.datastore, e.asyncQueue, {
		Zo: ed.bind(null, e),
		Yo: td.bind(null, e),
		t_: nd.bind(null, e),
		H_: rd.bind(null, e)
	}), e.Ra.push((async (t) => {
		t ? (e.ma.B_(), Zu(e) ? Xu(e) : e.Va.set("Unknown")) : (await e.ma.stop(), $u(e));
	}))), e.ma;
}
function vd(e) {
	return e.fa || (e.fa = function(e, t, n) {
		let r = N(e);
		return r.sa(), new Rh(t, r.connection, r.authCredentials, r.appCheckCredentials, r.serializer, n);
	}(e.datastore, e.asyncQueue, {
		Zo: () => Promise.resolve(),
		Yo: dd.bind(null, e),
		t_: md.bind(null, e),
		ta: fd.bind(null, e),
		na: pd.bind(null, e)
	}), e.Ra.push((async (t) => {
		t ? (e.fa.B_(), await od(e)) : (await e.fa.stop(), e.Ta.length > 0 && (A(Hh, `Stopping write stream with ${e.Ta.length} pending writes`), e.Ta = []));
	}))), e.fa;
}
function yd(e, t) {
	if (Ps("AsyncQueue", `${t}: ${e}`), tc(e)) return new B(z.UNAVAILABLE, `${t}: ${e}`);
	throw e;
}
function bd() {
	return new im(((e) => sl(e)), ol);
}
async function xd(e, t) {
	let n = N(e), r = 3, i = t.query, a = n.queries.get(i);
	a ? !a.ba() && t.Da() && (r = 2) : (a = new Jh(), r = +!t.Da());
	try {
		switch (r) {
			case 0:
				a.wa = await n.onListen(i, !0);
				break;
			case 1:
				a.wa = await n.onListen(i, !1);
				break;
			case 2: await n.onFirstRemoteStoreListen(i);
		}
	} catch (e) {
		let n = yd(e, `Initialization of query '${cl(t.query)}' failed`);
		t.onError(n);
		return;
	}
	n.queries.set(i, a), a.Sa.push(t), t.va(n.onlineState), a.wa && t.Fa(a.wa) && Td(n);
}
async function Sd(e, t) {
	let n = N(e), r = t.query, i = 3, a = n.queries.get(r);
	if (a) {
		let e = a.Sa.indexOf(t);
		e >= 0 && (a.Sa.splice(e, 1), a.Sa.length === 0 ? i = +!t.Da() : !a.ba() && t.Da() && (i = 2));
	}
	switch (i) {
		case 0: return n.queries.delete(r), n.onUnlisten(r, !0);
		case 1: return n.queries.delete(r), n.onUnlisten(r, !1);
		case 2: return n.onLastRemoteStoreUnlisten(r);
		default: return;
	}
}
function Cd(e, t) {
	let n = N(e), r = !1;
	for (let e of t) {
		let t = e.query, i = n.queries.get(t);
		if (i) {
			for (let t of i.Sa) t.Fa(e) && (r = !0);
			i.wa = e;
		}
	}
	r && Td(n);
}
function wd(e, t, n) {
	let r = N(e), i = r.queries.get(t);
	if (i) for (let e of i.Sa) e.onError(n);
	r.queries.delete(t);
}
function Td(e) {
	e.Ca.forEach(((e) => {
		e.next();
	}));
}
async function Ed(e, t, n = !0) {
	let r = Jd(e), i, a = r.Tu.get(t);
	return a ? (r.sharedClientState.addLocalQueryTarget(a.targetId), i = a.view.lu()) : i = await Od(r, t, n, !0), i;
}
async function Dd(e, t) {
	await Od(Jd(e), t, !0, !1);
}
async function Od(e, t, n, r) {
	let i = await Fu(e.localStore, nl(t)), a = i.targetId, o = e.sharedClientState.addLocalQueryTarget(a, n), s;
	return r && (s = await kd(e, t, a, o === "current", i.resumeToken)), e.isPrimaryClient && n && Ku(e.remoteStore, i), s;
}
async function kd(e, t, n, r, i) {
	e.pu = (t, n, r) => async function(e, t, n, r) {
		let i = t.view.ru(n);
		i.bs && (i = await Lu(e.localStore, t.query, !1).then((({ documents: e }) => t.view.ru(e, i))));
		let a = r && r.targetChanges.get(t.targetId), o = r && r.targetMismatches.get(t.targetId) != null, s = t.view.applyChanges(i, e.isPrimaryClient, a, o);
		return Hd(e, t.targetId, s.au), s.snapshot;
	}(e, t, n, r);
	let a = await Lu(e.localStore, t, !0), o = new tg(t, a.ks), s = o.ru(a.documents), c = jm.createSynthesizedTargetChangeForCurrentChange(n, r && e.onlineState !== "Offline", i), l = o.applyChanges(s, e.isPrimaryClient, c);
	Hd(e, n, l.au);
	let u = new rg(t, n, o);
	return e.Tu.set(t, u), e.Eu.has(n) ? e.Eu.get(n).push(t) : e.Eu.set(n, [t]), l.snapshot;
}
async function Ad(e, t, n) {
	let r = N(e), i = r.Tu.get(t), a = r.Eu.get(i.targetId);
	if (a.length > 1) return r.Eu.set(i.targetId, a.filter(((e) => !ol(e, t)))), void r.Tu.delete(t);
	r.isPrimaryClient ? (r.sharedClientState.removeLocalQueryTarget(i.targetId), r.sharedClientState.isActiveQueryTarget(i.targetId) || await Iu(r.localStore, i.targetId, !1).then((() => {
		r.sharedClientState.clearQueryState(i.targetId), n && qu(r.remoteStore, i.targetId), Bd(r, i.targetId);
	})).catch($s)) : (Bd(r, i.targetId), await Iu(r.localStore, i.targetId, !0));
}
async function jd(e, t) {
	let n = N(e), r = n.Tu.get(t), i = n.Eu.get(r.targetId);
	n.isPrimaryClient && i.length === 1 && (n.sharedClientState.removeLocalQueryTarget(r.targetId), qu(n.remoteStore, r.targetId));
}
async function Md(e, t, n) {
	let r = Yd(e);
	try {
		let e = await function(e, t) {
			let n = N(e), r = U.now(), i = t.reduce(((e, t) => e.add(t.key)), L()), a, o;
			return n.persistence.runTransaction("Locally write mutations", "readwrite", ((e) => {
				let s = pl(), c = L();
				return n.xs.getEntries(e, i).next(((e) => {
					s = e, s.forEach(((e, t) => {
						t.isValidDocument() || (c = c.add(e));
					}));
				})).next((() => n.localDocuments.getOverlayedDocuments(e, s))).next(((i) => {
					a = i;
					let o = [];
					for (let e of t) {
						let t = Fl(e, a.get(e.key).overlayedDocument);
						t != null && o.push(new ym(e.key, t, Fc(t.value.mapValue), gm.exists(!0)));
					}
					return n.mutationQueue.addMutationBatch(e, r, o, t);
				})).next(((t) => {
					o = t;
					let r = t.applyToLocalDocumentSet(a, c);
					return n.documentOverlayCache.saveOverlays(e, t.batchId, r);
				}));
			})).then((() => ({
				batchId: o.batchId,
				changes: hl(a)
			})));
		}(r.localStore, t);
		r.sharedClientState.addPendingMutation(e.batchId), function(e, t, n) {
			let r = e.du[e.currentUser.toKey()];
			r ||= new K(P), r = r.insert(t, n), e.du[e.currentUser.toKey()] = r;
		}(r, e.batchId, n), await Gd(r, e.changes), await od(r.remoteStore);
	} catch (e) {
		let t = yd(e, "Failed to persist write");
		n.reject(t);
	}
}
async function Nd(e, t) {
	let n = N(e);
	try {
		let e = await Mu(n.localStore, t);
		t.targetChanges.forEach(((e, t) => {
			let r = n.Au.get(t);
			r && (M(e.addedDocuments.size + e.modifiedDocuments.size + e.removedDocuments.size <= 1, 22616), e.addedDocuments.size > 0 ? r.hu = !0 : e.modifiedDocuments.size > 0 ? M(r.hu, 14607) : e.removedDocuments.size > 0 && (M(r.hu, 42227), r.hu = !1));
		})), await Gd(n, e, t);
	} catch (e) {
		await $s(e);
	}
}
function Pd(e, t, n) {
	let r = N(e);
	if (r.isPrimaryClient && n === 0 || !r.isPrimaryClient && n === 1) {
		let e = [];
		r.Tu.forEach(((n, r) => {
			let i = r.view.va(t);
			i.snapshot && e.push(i.snapshot);
		})), function(e, t) {
			let n = N(e);
			n.onlineState = t;
			let r = !1;
			n.queries.forEach(((e, n) => {
				for (let e of n.Sa) e.va(t) && (r = !0);
			})), r && Td(n);
		}(r.eventManager, t), e.length && r.Pu.H_(e), r.onlineState = t, r.isPrimaryClient && r.sharedClientState.setOnlineState(t);
	}
}
async function Fd(e, t, n) {
	let r = N(e);
	r.sharedClientState.updateQueryState(t, "rejected", n);
	let i = r.Au.get(t), a = i && i.key;
	if (a) {
		let e = new K(H.comparator);
		e = e.insert(a, Wp.newNoDocument(a, W.min()));
		let n = L().add(a);
		await Nd(r, new Am(W.min(), /* @__PURE__ */ new Map(), new K(P), e, n)), r.Ru = r.Ru.remove(a), r.Au.delete(t), Wd(r);
	} else await Iu(r.localStore, t, !1).then((() => Bd(r, t, n))).catch($s);
}
async function Id(e, t) {
	let n = N(e), r = t.batch.batchId;
	try {
		let e = await Au(n.localStore, t);
		zd(n, r, null), Rd(n, r), n.sharedClientState.updateMutationState(r, "acknowledged"), await Gd(n, e);
	} catch (e) {
		await $s(e);
	}
}
async function Ld(e, t, n) {
	let r = N(e);
	try {
		let e = await function(e, t) {
			let n = N(e);
			return n.persistence.runTransaction("Reject batch", "readwrite-primary", ((e) => {
				let r;
				return n.mutationQueue.lookupMutationBatch(e, t).next(((t) => (M(t !== null, 37113), r = t.keys(), n.mutationQueue.removeMutationBatch(e, t)))).next((() => n.mutationQueue.performConsistencyCheck(e))).next((() => n.documentOverlayCache.removeOverlaysForBatchId(e, r, t))).next((() => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e, r))).next((() => n.localDocuments.getDocuments(e, r)));
			}));
		}(r.localStore, t);
		zd(r, t, n), Rd(r, t), r.sharedClientState.updateMutationState(t, "rejected", n), await Gd(r, e);
	} catch (e) {
		await $s(e);
	}
}
function Rd(e, t) {
	(e.mu.get(t) || []).forEach(((e) => {
		e.resolve();
	})), e.mu.delete(t);
}
function zd(e, t, n) {
	let r = N(e), i = r.du[r.currentUser.toKey()];
	if (i) {
		let e = i.get(t);
		e && (n ? e.reject(n) : e.resolve(), i = i.remove(t)), r.du[r.currentUser.toKey()] = i;
	}
}
function Bd(e, t, n = null) {
	e.sharedClientState.removeLocalQueryTarget(t);
	for (let r of e.Eu.get(t)) e.Tu.delete(r), n && e.Pu.yu(r, n);
	e.Eu.delete(t), e.isPrimaryClient && e.Vu.Gr(t).forEach(((t) => {
		e.Vu.containsKey(t) || Vd(e, t);
	}));
}
function Vd(e, t) {
	e.Iu.delete(t.path.canonicalString());
	let n = e.Ru.get(t);
	n !== null && (qu(e.remoteStore, n), e.Ru = e.Ru.remove(t), e.Au.delete(n), Wd(e));
}
function Hd(e, t, n) {
	for (let r of n) r instanceof $h ? (e.Vu.addReference(r.key, t), Ud(e, r)) : r instanceof eg ? (A(ng, "Document no longer in limbo: " + r.key), e.Vu.removeReference(r.key, t), e.Vu.containsKey(r.key) || Vd(e, r.key)) : j(19791, { wu: r });
}
function Ud(e, t) {
	let n = t.key, r = n.path.canonicalString();
	e.Ru.get(n) || e.Iu.has(r) || (A(ng, "New document in limbo: " + n), e.Iu.add(r), Wd(e));
}
function Wd(e) {
	for (; e.Iu.size > 0 && e.Ru.size < e.maxConcurrentLimboResolutions;) {
		let t = e.Iu.values().next().value;
		e.Iu.delete(t);
		let n = new H(V.fromString(t)), r = e.fu.next();
		e.Au.set(r, new ig(n)), e.Ru = e.Ru.insert(n, r), Ku(e.remoteStore, new Vm(nl(Zc(n.path)), r, "TargetPurposeLimboResolution", $f.ce));
	}
}
async function Gd(e, t, n) {
	let r = N(e), i = [], a = [], o = [];
	r.Tu.isEmpty() || (r.Tu.forEach(((e, s) => {
		o.push(r.pu(s, t, n).then(((e) => {
			if ((e || n) && r.isPrimaryClient) {
				let t = e ? !e.fromCache : n?.targetChanges.get(s.targetId)?.current;
				r.sharedClientState.updateQueryState(s.targetId, t ? "current" : "not-current");
			}
			if (e) {
				i.push(e);
				let t = gh.Is(s.targetId, e);
				a.push(t);
			}
		})));
	})), await Promise.all(o), r.Pu.H_(i), await async function(e, t) {
		let n = N(e);
		try {
			await n.persistence.runTransaction("notifyLocalViewChanges", "readwrite", ((e) => G.forEach(t, ((t) => G.forEach(t.Ts, ((r) => n.persistence.referenceDelegate.addReference(e, t.targetId, r))).next((() => G.forEach(t.Es, ((r) => n.persistence.referenceDelegate.removeReference(e, t.targetId, r)))))))));
		} catch (e) {
			if (!tc(e)) throw e;
			A(yh, "Failed to update sequence numbers: " + e);
		}
		for (let e of t) {
			let t = e.targetId;
			if (!e.fromCache) {
				let e = n.vs.get(t), r = e.snapshotVersion, i = e.withLastLimboFreeSnapshotVersion(r);
				n.vs = n.vs.insert(t, i);
			}
		}
	}(r.localStore, a));
}
async function Kd(e, t) {
	let n = N(e);
	if (!n.currentUser.isEqual(t)) {
		A(ng, "User change. New user:", t.toKey());
		let e = await ku(n.localStore, t);
		n.currentUser = t, function(e, t) {
			e.mu.forEach(((e) => {
				e.forEach(((e) => {
					e.reject(new B(z.CANCELLED, t));
				}));
			})), e.mu.clear();
		}(n, "'waitForPendingWrites' promise is rejected due to a user change."), n.sharedClientState.handleUserChange(t, e.removedBatchIds, e.addedBatchIds), await Gd(n, e.Ns);
	}
}
function qd(e, t) {
	let n = N(e), r = n.Au.get(t);
	if (r && r.hu) return L().add(r.key);
	{
		let e = L(), r = n.Eu.get(t);
		if (!r) return e;
		for (let t of r) {
			let r = n.Tu.get(t);
			e = e.unionWith(r.view.nu);
		}
		return e;
	}
}
function Jd(e) {
	let t = N(e);
	return t.remoteStore.remoteSyncer.applyRemoteEvent = Nd.bind(null, t), t.remoteStore.remoteSyncer.getRemoteKeysForTarget = qd.bind(null, t), t.remoteStore.remoteSyncer.rejectListen = Fd.bind(null, t), t.Pu.H_ = Cd.bind(null, t.eventManager), t.Pu.yu = wd.bind(null, t.eventManager), t;
}
function Yd(e) {
	let t = N(e);
	return t.remoteStore.remoteSyncer.applySuccessfulWrite = Id.bind(null, t), t.remoteStore.remoteSyncer.rejectFailedWrite = Ld.bind(null, t), t;
}
async function Xd(e, t) {
	e.asyncQueue.verifyOperationInProgress(), A(ug, "Initializing OfflineComponentProvider");
	let n = e.configuration;
	await t.initialize(n);
	let r = n.initialUser;
	e.setCredentialChangeListener((async (e) => {
		r.isEqual(e) || (await ku(t.localStore, e), r = e);
	})), t.persistence.setDatabaseDeletedListener((() => e.terminate())), e._offlineComponents = t;
}
async function Zd(e, t) {
	e.asyncQueue.verifyOperationInProgress();
	let n = await Qd(e);
	A(ug, "Initializing OnlineComponentProvider"), await t.initialize(n, e.configuration), e.setCredentialChangeListener(((e) => hd(t.remoteStore, e))), e.setAppCheckTokenChangeListener(((e, n) => hd(t.remoteStore, n))), e._onlineComponents = t;
}
async function Qd(e) {
	if (!e._offlineComponents) if (e._uninitializedComponentsProvider) {
		A(ug, "Using user provided OfflineComponentProvider");
		try {
			await Xd(e, e._uninitializedComponentsProvider._offline);
		} catch (t) {
			let n = t;
			if (!function(e) {
				return e.name === "FirebaseError" ? e.code === z.FAILED_PRECONDITION || e.code === z.UNIMPLEMENTED : !(typeof DOMException < "u" && e instanceof DOMException) || e.code === 22 || e.code === 20 || e.code === 11;
			}(n)) throw n;
			Fs("Error using user provided cache. Falling back to memory cache: " + n), await Xd(e, new og());
		}
	} else A(ug, "Using default OfflineComponentProvider"), await Xd(e, new sg(void 0));
	return e._offlineComponents;
}
async function $d(e) {
	return e._onlineComponents || (e._uninitializedComponentsProvider ? (A(ug, "Using user provided OnlineComponentProvider"), await Zd(e, e._uninitializedComponentsProvider._online)) : (A(ug, "Using default OnlineComponentProvider"), await Zd(e, new cg()))), e._onlineComponents;
}
function ef(e) {
	return $d(e).then(((e) => e.syncEngine));
}
async function tf(e) {
	let t = await $d(e), n = t.eventManager;
	return n.onListen = Ed.bind(null, t.syncEngine), n.onUnlisten = Ad.bind(null, t.syncEngine), n.onFirstRemoteStoreListen = Dd.bind(null, t.syncEngine), n.onLastRemoteStoreUnlisten = jd.bind(null, t.syncEngine), n;
}
function nf(e, t, n, r) {
	let i = new lg(r), a = new Qh(t, i, n);
	return e.asyncQueue.enqueueAndForget((async () => xd(await tf(e), a))), () => {
		i.Nu(), e.asyncQueue.enqueueAndForget((async () => Sd(await tf(e), a)));
	};
}
function rf(e, t, n = {}) {
	let r = new Af();
	return e.asyncQueue.enqueueAndForget((async () => function(e, t, n, r, i) {
		let a = new lg({
			next: (n) => {
				a.Nu(), t.enqueueAndForget((() => Sd(e, o))), n.fromCache && r.source === "server" ? i.reject(new B(z.UNAVAILABLE, "Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to \"server\" to retrieve the cached documents.)")) : i.resolve(n);
			},
			error: (e) => i.reject(e)
		}), o = new Qh(n, a, {
			includeMetadataChanges: !0,
			qa: !0
		});
		return xd(e, o);
	}(await tf(e), e.asyncQueue, t, n, r))), r.promise;
}
function af(e, t) {
	let n = new Af();
	return e.asyncQueue.enqueueAndForget((async () => Md(await ef(e), t, n))), n.promise;
}
function of(e) {
	let t = {};
	return e.timeoutSeconds !== void 0 && (t.timeoutSeconds = e.timeoutSeconds), t;
}
function sf(e, t, n, r, i) {
	return new Fp(e, t, n, i.host, i.ssl, i.experimentalForceLongPolling, i.experimentalAutoDetectLongPolling, of(i.experimentalLongPollingOptions), i.useFetchStreams, i.isUsingEmulator, r);
}
function cf(e, t, n, r = {}) {
	e = Js(e, _g);
	let i = _(t), o = e._getSettings(), s = {
		...o,
		emulatorOptions: e._getEmulatorOptions()
	}, c = `${t}:${n}`;
	i && ue(`https://${c}`), o.host !== mg && o.host !== c && Fs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");
	let l = {
		...o,
		host: c,
		ssl: i,
		emulatorOptions: r
	};
	if (!ne(l, s) && (e._setSettings(l), r.mockUserToken)) {
		let t, n;
		if (typeof r.mockUserToken == "string") t = r.mockUserToken, n = R.MOCK_USER;
		else {
			t = a(r.mockUserToken, e._app?.options.projectId);
			let i = r.mockUserToken.sub || r.mockUserToken.user_id;
			if (!i) throw new B(z.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
			n = new R(i);
		}
		e._authCredentials = new Nf(new jf(t, n));
	}
}
function lf(e, t, ...n) {
	if (e = g(e), Hs("collection", "path", t), e instanceof _g) {
		let r = V.fromString(t, ...n);
		return Gs(r), new yg(e, null, r);
	}
	{
		if (!(e instanceof $ || e instanceof yg)) throw new B(z.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
		let r = e._path.child(V.fromString(t, ...n));
		return Gs(r), new yg(e.firestore, null, r);
	}
}
function uf(e, t, ...n) {
	if (e = g(e), arguments.length === 1 && (t = zf.newId()), Hs("doc", "path", t), e instanceof _g) {
		let r = V.fromString(t, ...n);
		return Ws(r), new $(e, null, new H(r));
	}
	{
		if (!(e instanceof $ || e instanceof yg)) throw new B(z.INVALID_ARGUMENT, "Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
		let r = e._path.child(V.fromString(t, ...n));
		return Ws(r), new $(e.firestore, e instanceof yg ? e.converter : null, new H(r));
	}
}
function df(e) {
	let t = e.message || "";
	return e.stack && (t = e.stack.includes(e.message) ? e.stack : e.message + "\n" + e.stack), t;
}
function ff(e, t) {
	let n = typeof e == "object" ? e : bt(), r = typeof e == "string" ? e : t || Ip, i = _t(n, "firestore").getImmediate({ identifier: r });
	if (!i._initialized) {
		let e = Ce("firestore");
		e && cf(i, ...e);
	}
	return i;
}
function pf(e) {
	if (e._terminated) throw new B(z.FAILED_PRECONDITION, "The client has already been terminated.");
	return e._firestoreClient || mf(e), e._firestoreClient;
}
function mf(e) {
	let t = e._freezeSettings(), n = sf(e._databaseId, e._app?.options.appId || "", e._persistenceKey, e._app?.options.apiKey, t);
	e._componentsProvider || t.localCache?._offlineComponentProvider && t.localCache?._onlineComponentProvider && (e._componentsProvider = {
		_offline: t.localCache._offlineComponentProvider,
		_online: t.localCache._onlineComponentProvider
	}), e._firestoreClient = new dg(e._authCredentials, e._appCheckCredentials, e._queue, n, e._componentsProvider && function(e) {
		let t = e?._online.build();
		return {
			_offline: e?._offline.build(t),
			_online: t
		};
	}(e._componentsProvider));
}
function hf(e) {
	switch (e) {
		case 0:
		case 2:
		case 1: return !0;
		case 3:
		case 4: return !1;
		default: throw j(40011, { dataSource: e });
	}
}
function gf(e) {
	let t = e._freezeSettings(), n = Hu(e._databaseId);
	return new jg(e._databaseId, !!t.ignoreUndefinedProperties, n);
}
function _f(e, t, n, r) {
	let i = e.A(1, t, n);
	Cf("Data must be an object, but it was:", i, r);
	let a = [], o = Up.empty();
	return lc(r, ((e, r) => {
		let s = Tf(t, e, n);
		r = g(r);
		let c = i.fc(s);
		if (r instanceof Mg) a.push(s);
		else {
			let e = bf(r, c);
			e != null && (a.push(s), o.set(s, e));
		}
	})), new kg(o, new Dp(a), i.fieldTransforms);
}
function vf(e, t, n, r, i, a) {
	let o = e.A(1, t, n), s = [wf(t, r, n)], c = [i];
	if (a.length % 2 != 0) throw new B(z.INVALID_ARGUMENT, `Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);
	for (let e = 0; e < a.length; e += 2) s.push(wf(t, a[e])), c.push(a[e + 1]);
	let l = [], u = Up.empty();
	for (let e = s.length - 1; e >= 0; --e) if (!Df(l, s[e])) {
		let t = s[e], n = c[e];
		n = g(n);
		let r = o.fc(t);
		if (n instanceof Mg) l.push(t);
		else {
			let e = bf(n, r);
			e != null && (l.push(t), u.set(t, e));
		}
	}
	return new kg(u, new Dp(l), o.fieldTransforms);
}
function yf(e, t, n, r = !1) {
	return bf(n, e.A(r ? 4 : 3, t));
}
function bf(e, t) {
	if (Sf(e = g(e))) return Cf("Unsupported field value:", t, e), xf(e, t);
	if (e instanceof Tg) return function(e, t) {
		if (!hf(t.dataSource)) throw t.yc(`${e._methodName}() can only be used with update() and set()`);
		if (!t.path) throw t.yc(`${e._methodName}() is not currently supported inside arrays`);
		let n = e._toFieldTransform(t);
		n && t.fieldTransforms.push(n);
	}(e, t), null;
	if (e === void 0 && t.ignoreUndefinedProperties) return null;
	if (t.path && t.fieldMask.push(t.path), e instanceof Array) {
		if (t.settings.arrayElement && t.dataSource !== 4) throw t.yc("Nested arrays are not supported");
		return function(e, t) {
			let n = [], r = 0;
			for (let i of e) {
				let e = bf(i, t.gc(r));
				e ??= { nullValue: "NULL_VALUE" }, n.push(e), r++;
			}
			return { arrayValue: { values: n } };
		}(e, t);
	}
	return function(e, t) {
		if ((e = g(e)) === null) return { nullValue: "NULL_VALUE" };
		if (typeof e == "number") return Sl(t.serializer, e);
		if (typeof e == "boolean") return { booleanValue: e };
		if (typeof e == "string") return { stringValue: e };
		if (e instanceof Date) {
			let n = U.fromDate(e);
			return { timestampValue: Jl(t.serializer, n) };
		}
		if (e instanceof U) {
			let n = new U(e.seconds, 1e3 * Math.floor(e.nanoseconds / 1e3));
			return { timestampValue: Jl(t.serializer, n) };
		}
		if (e instanceof Eg) return { geoPointValue: {
			latitude: e.latitude,
			longitude: e.longitude
		} };
		if (e instanceof Cg) return { bytesValue: Yl(t.serializer, e._byteString) };
		if (e instanceof $) {
			let n = t.databaseId, r = e.firestore._databaseId;
			if (!r.isEqual(n)) throw t.yc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);
			return { referenceValue: Ql(e.firestore._databaseId || t.databaseId, e._key.path) };
		}
		if (e instanceof Dg) return function(e, t) {
			let n = e instanceof Dg ? e.toArray() : e;
			return { mapValue: { fields: {
				[Rp]: { stringValue: Vp },
				[Hp]: { arrayValue: { values: n.map(((e) => {
					if (typeof e != "number") throw t.yc("VectorValues must only contain numeric values.");
					return bl(t.serializer, e);
				})) } }
			} } };
		}(e, t);
		if (wu(e)) return e._toProto(t.serializer);
		throw t.yc(`Unsupported field value: ${qs(e)}`);
	}(e, t);
}
function xf(e, t) {
	let n = {};
	return uc(e) ? t.path && t.path.length > 0 && t.fieldMask.push(t.path) : lc(e, ((e, r) => {
		let i = bf(r, t.dc(e));
		i != null && (n[e] = i);
	})), { mapValue: { fields: n } };
}
function Sf(e) {
	return !(typeof e != "object" || !e || e instanceof Array || e instanceof Date || e instanceof U || e instanceof Eg || e instanceof Cg || e instanceof $ || e instanceof Tg || e instanceof Dg || wu(e));
}
function Cf(e, t, n) {
	if (!Sf(n) || !Ks(n)) {
		let r = qs(n);
		throw r === "an object" ? t.yc(e + " a custom object") : t.yc(e + " " + r);
	}
}
function wf(e, t, n) {
	if ((t = g(t)) instanceof wg) return t._internalPath;
	if (typeof t == "string") return Tf(e, t);
	throw Ef("Field path arguments must be of type string or ", e, !1, void 0, n);
}
function Tf(e, t, n) {
	if (t.search(Ng) >= 0) throw Ef(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`, e, !1, void 0, n);
	try {
		return new wg(...t.split("."))._internalPath;
	} catch {
		throw Ef(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`, e, !1, void 0, n);
	}
}
function Ef(e, t, n, r, i) {
	let a = r && !r.isEmpty(), o = i !== void 0, s = `Function ${t}() called with invalid data`;
	n && (s += " (via `toFirestore()`)"), s += ". ";
	let c = "";
	return (a || o) && (c += " (found", a && (c += ` in field ${r}`), o && (c += ` in document ${i}`), c += ")"), new B(z.INVALID_ARGUMENT, s + e + c);
}
function Df(e, t) {
	return e.some(((e) => e.isEqual(t)));
}
var R, Of, kf, z, B, Af, jf, Mf, Nf, Pf, Ff, If, Lf, Rf, zf, Bf, Vf, Hf, Uf, V, Wf, Gf, H, Kf, qf, U, W, Jf, Yf, Xf, Zf, Qf, G, $f, ep, tp, np, rp, ip, ap, op, sp, cp, lp, up, dp, fp, pp, mp, hp, gp, _p, vp, yp, bp, xp, Sp, Cp, K, wp, Tp, q, Ep, Dp, Op, kp, Ap, jp, Mp, Np, Pp, Fp, Ip, Lp, Rp, zp, Bp, Vp, Hp, Up, Wp, Gp, Kp, qp, J, Jp, Yp, Xp, Zp, Qp, $p, em, tm, nm, rm, im, am, om, sm, cm, lm, um, dm, fm, pm, mm, hm, gm, _m, vm, ym, bm, xm, Sm, Cm, wm, Tm, Y, X, Em, Dm, Om, km, Am, jm, Mm, Nm, Pm, Fm, Im, Lm, Rm, zm, Bm, Vm, Hm, Um, Wm, Gm, Km, qm, Jm, Ym, Xm, Zm, Qm, $m, eh, th, nh, rh, ih, ah, oh, sh, Z, ch, lh, uh, dh, fh, ph, mh, hh, gh, _h, vh, yh, bh, xh, Sh, Ch, wh, Th, Eh, Dh, Oh, kh, Ah, jh, Q, Mh, Nh, Ph, Fh, Ih, Lh, Rh, zh, Bh, Vh, Hh, Uh, Wh, Gh, Kh, qh, Jh, Yh, Xh, Zh, Qh, $h, eg, tg, ng, rg, ig, ag, og, sg, cg, lg, ug, dg, fg, pg, mg, hg, gg, _g, vg, $, yg, bg, xg, Sg, Cg, wg, Tg, Eg, Dg, Og, kg, Ag, jg, Mg, Ng, Pg, Fg, Ig = e((() => {
	Cn(), Me(), bs(), We(), js(), R = class {
		constructor(e) {
			this.uid = e;
		}
		isAuthenticated() {
			return this.uid != null;
		}
		toKey() {
			return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
		}
		isEqual(e) {
			return e.uid === this.uid;
		}
	}, R.UNAUTHENTICATED = new R(null), R.GOOGLE_CREDENTIALS = new R("google-credentials-uid"), R.FIRST_PARTY = new R("first-party-uid"), R.MOCK_USER = new R("mock-user"), Of = "12.11.0", kf = new Ue("@firebase/firestore"), z = {
		OK: "ok",
		CANCELLED: "cancelled",
		UNKNOWN: "unknown",
		INVALID_ARGUMENT: "invalid-argument",
		DEADLINE_EXCEEDED: "deadline-exceeded",
		NOT_FOUND: "not-found",
		ALREADY_EXISTS: "already-exists",
		PERMISSION_DENIED: "permission-denied",
		UNAUTHENTICATED: "unauthenticated",
		RESOURCE_EXHAUSTED: "resource-exhausted",
		FAILED_PRECONDITION: "failed-precondition",
		ABORTED: "aborted",
		OUT_OF_RANGE: "out-of-range",
		UNIMPLEMENTED: "unimplemented",
		INTERNAL: "internal",
		UNAVAILABLE: "unavailable",
		DATA_LOSS: "data-loss"
	}, B = class extends Oe {
		constructor(e, t) {
			super(e, t), this.code = e, this.message = t, this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
		}
	}, Af = class {
		constructor() {
			this.promise = new Promise(((e, t) => {
				this.resolve = e, this.reject = t;
			}));
		}
	}, jf = class {
		constructor(e, t) {
			this.user = t, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${e}`);
		}
	}, Mf = class {
		getToken() {
			return Promise.resolve(null);
		}
		invalidateToken() {}
		start(e, t) {
			e.enqueueRetryable((() => t(R.UNAUTHENTICATED)));
		}
		shutdown() {}
	}, Nf = class {
		constructor(e) {
			this.token = e, this.changeListener = null;
		}
		getToken() {
			return Promise.resolve(this.token);
		}
		invalidateToken() {}
		start(e, t) {
			this.changeListener = t, e.enqueueRetryable((() => t(this.token.user)));
		}
		shutdown() {
			this.changeListener = null;
		}
	}, Pf = class {
		constructor(e) {
			this.t = e, this.currentUser = R.UNAUTHENTICATED, this.i = 0, this.forceRefresh = !1, this.auth = null;
		}
		start(e, t) {
			M(this.o === void 0, 42304);
			let n = this.i, r = (e) => this.i === n ? Promise.resolve() : (n = this.i, t(e)), i = new Af();
			this.o = () => {
				this.i++, this.currentUser = this.u(), i.resolve(), i = new Af(), e.enqueueRetryable((() => r(this.currentUser)));
			};
			let a = () => {
				let t = i;
				e.enqueueRetryable((async () => {
					await t.promise, await r(this.currentUser);
				}));
			}, o = (e) => {
				A("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = e, this.o && (this.auth.addAuthTokenListener(this.o), a());
			};
			this.t.onInit(((e) => o(e))), setTimeout((() => {
				if (!this.auth) {
					let e = this.t.getImmediate({ optional: !0 });
					e ? o(e) : (A("FirebaseAuthCredentialsProvider", "Auth not yet detected"), i.resolve(), i = new Af());
				}
			}), 0), a();
		}
		getToken() {
			let e = this.i, t = this.forceRefresh;
			return this.forceRefresh = !1, this.auth ? this.auth.getToken(t).then(((t) => this.i === e ? t ? (M(typeof t.accessToken == "string", 31837, { l: t }), new jf(t.accessToken, this.currentUser)) : null : (A("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()))) : Promise.resolve(null);
		}
		invalidateToken() {
			this.forceRefresh = !0;
		}
		shutdown() {
			this.auth && this.o && this.auth.removeAuthTokenListener(this.o), this.o = void 0;
		}
		u() {
			let e = this.auth && this.auth.getUid();
			return M(e === null || typeof e == "string", 2055, { h: e }), new R(e);
		}
	}, Ff = class {
		constructor(e, t, n) {
			this.P = e, this.T = t, this.I = n, this.type = "FirstParty", this.user = R.FIRST_PARTY, this.R = /* @__PURE__ */ new Map();
		}
		A() {
			return this.I ? this.I() : null;
		}
		get headers() {
			this.R.set("X-Goog-AuthUser", this.P);
			let e = this.A();
			return e && this.R.set("Authorization", e), this.T && this.R.set("X-Goog-Iam-Authorization-Token", this.T), this.R;
		}
	}, If = class {
		constructor(e, t, n) {
			this.P = e, this.T = t, this.I = n;
		}
		getToken() {
			return Promise.resolve(new Ff(this.P, this.T, this.I));
		}
		start(e, t) {
			e.enqueueRetryable((() => t(R.FIRST_PARTY)));
		}
		shutdown() {}
		invalidateToken() {}
	}, Lf = class {
		constructor(e) {
			this.value = e, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
		}
	}, Rf = class {
		constructor(e, t) {
			this.V = t, this.forceRefresh = !1, this.appCheck = null, this.m = null, this.p = null, vt(e) && e.settings.appCheckToken && (this.p = e.settings.appCheckToken);
		}
		start(e, t) {
			M(this.o === void 0, 3512);
			let n = (e) => {
				e.error != null && A("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);
				let n = e.token !== this.m;
				return this.m = e.token, A("FirebaseAppCheckTokenProvider", `Received ${n ? "new" : "existing"} token.`), n ? t(e.token) : Promise.resolve();
			};
			this.o = (t) => {
				e.enqueueRetryable((() => n(t)));
			};
			let r = (e) => {
				A("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = e, this.o && this.appCheck.addTokenListener(this.o);
			};
			this.V.onInit(((e) => r(e))), setTimeout((() => {
				if (!this.appCheck) {
					let e = this.V.getImmediate({ optional: !0 });
					e ? r(e) : A("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
				}
			}), 0);
		}
		getToken() {
			if (this.p) return Promise.resolve(new Lf(this.p));
			let e = this.forceRefresh;
			return this.forceRefresh = !1, this.appCheck ? this.appCheck.getToken(e).then(((e) => e ? (M(typeof e.token == "string", 44558, { tokenResult: e }), this.m = e.token, new Lf(e.token)) : null)) : Promise.resolve(null);
		}
		invalidateToken() {
			this.forceRefresh = !0;
		}
		shutdown() {
			this.appCheck && this.o && this.appCheck.removeTokenListener(this.o), this.o = void 0;
		}
	}, zf = class {
		static newId() {
			let e = "";
			for (; e.length < 20;) {
				let t = Rs(40);
				for (let n = 0; n < t.length; ++n) e.length < 20 && t[n] < 248 && (e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(t[n] % 62));
			}
			return e;
		}
	}, Bf = 55296, Vf = 57343, Hf = "__name__", Uf = class e {
		constructor(e, t, n) {
			t === void 0 ? t = 0 : t > e.length && j(637, {
				offset: t,
				range: e.length
			}), n === void 0 ? n = e.length - t : n > e.length - t && j(1746, {
				length: n,
				range: e.length - t
			}), this.segments = e, this.offset = t, this.len = n;
		}
		get length() {
			return this.len;
		}
		isEqual(t) {
			return e.comparator(this, t) === 0;
		}
		child(t) {
			let n = this.segments.slice(this.offset, this.limit());
			return t instanceof e ? t.forEach(((e) => {
				n.push(e);
			})) : n.push(t), this.construct(n);
		}
		limit() {
			return this.offset + this.length;
		}
		popFirst(e) {
			return e = e === void 0 ? 1 : e, this.construct(this.segments, this.offset + e, this.length - e);
		}
		popLast() {
			return this.construct(this.segments, this.offset, this.length - 1);
		}
		firstSegment() {
			return this.segments[this.offset];
		}
		lastSegment() {
			return this.get(this.length - 1);
		}
		get(e) {
			return this.segments[this.offset + e];
		}
		isEmpty() {
			return this.length === 0;
		}
		isPrefixOf(e) {
			if (e.length < this.length) return !1;
			for (let t = 0; t < this.length; t++) if (this.get(t) !== e.get(t)) return !1;
			return !0;
		}
		isImmediateParentOf(e) {
			if (this.length + 1 !== e.length) return !1;
			for (let t = 0; t < this.length; t++) if (this.get(t) !== e.get(t)) return !1;
			return !0;
		}
		forEach(e) {
			for (let t = this.offset, n = this.limit(); t < n; t++) e(this.segments[t]);
		}
		toArray() {
			return this.segments.slice(this.offset, this.limit());
		}
		static comparator(t, n) {
			let r = Math.min(t.length, n.length);
			for (let i = 0; i < r; i++) {
				let r = e.compareSegments(t.get(i), n.get(i));
				if (r !== 0) return r;
			}
			return P(t.length, n.length);
		}
		static compareSegments(t, n) {
			let r = e.isNumericId(t), i = e.isNumericId(n);
			return r && !i ? -1 : !r && i ? 1 : r && i ? e.extractNumericId(t).compare(e.extractNumericId(n)) : zs(t, n);
		}
		static isNumericId(e) {
			return e.startsWith("__id") && e.endsWith("__");
		}
		static extractNumericId(e) {
			return vs.fromString(e.substring(4, e.length - 2));
		}
	}, V = class e extends Uf {
		construct(t, n, r) {
			return new e(t, n, r);
		}
		canonicalString() {
			return this.toArray().join("/");
		}
		toString() {
			return this.canonicalString();
		}
		toUriEncodedString() {
			return this.toArray().map(encodeURIComponent).join("/");
		}
		static fromString(...t) {
			let n = [];
			for (let e of t) {
				if (e.indexOf("//") >= 0) throw new B(z.INVALID_ARGUMENT, `Invalid segment (${e}). Paths must not contain // in them.`);
				n.push(...e.split("/").filter(((e) => e.length > 0)));
			}
			return new e(n);
		}
		static emptyPath() {
			return new e([]);
		}
	}, Wf = /^[_a-zA-Z][_a-zA-Z0-9]*$/, Gf = class e extends Uf {
		construct(t, n, r) {
			return new e(t, n, r);
		}
		static isValidIdentifier(e) {
			return Wf.test(e);
		}
		canonicalString() {
			return this.toArray().map(((t) => (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), e.isValidIdentifier(t) || (t = "`" + t + "`"), t))).join(".");
		}
		toString() {
			return this.canonicalString();
		}
		isKeyField() {
			return this.length === 1 && this.get(0) === "__name__";
		}
		static keyField() {
			return new e([Hf]);
		}
		static fromServerFormat(t) {
			let n = [], r = "", i = 0, a = () => {
				if (r.length === 0) throw new B(z.INVALID_ARGUMENT, `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
				n.push(r), r = "";
			}, o = !1;
			for (; i < t.length;) {
				let e = t[i];
				if (e === "\\") {
					if (i + 1 === t.length) throw new B(z.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
					let e = t[i + 1];
					if (e !== "\\" && e !== "." && e !== "`") throw new B(z.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
					r += e, i += 2;
				} else e === "`" ? (o = !o, i++) : e !== "." || o ? (r += e, i++) : (a(), i++);
			}
			if (a(), o) throw new B(z.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
			return new e(n);
		}
		static emptyPath() {
			return new e([]);
		}
	}, H = class e {
		constructor(e) {
			this.path = e;
		}
		static fromPath(t) {
			return new e(V.fromString(t));
		}
		static fromName(t) {
			return new e(V.fromString(t).popFirst(5));
		}
		static empty() {
			return new e(V.emptyPath());
		}
		get collectionGroup() {
			return this.path.popLast().lastSegment();
		}
		hasCollectionId(e) {
			return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
		}
		getCollectionGroup() {
			return this.path.get(this.path.length - 2);
		}
		getCollectionPath() {
			return this.path.popLast();
		}
		isEqual(e) {
			return e !== null && V.comparator(this.path, e.path) === 0;
		}
		toString() {
			return this.path.toString();
		}
		static comparator(e, t) {
			return V.comparator(e.path, t.path);
		}
		static isDocumentKey(e) {
			return e.length % 2 == 0;
		}
		static fromSegments(t) {
			return new e(new V(t.slice()));
		}
	}, Kf = -62135596800, qf = 1e6, U = class e {
		static now() {
			return e.fromMillis(Date.now());
		}
		static fromDate(t) {
			return e.fromMillis(t.getTime());
		}
		static fromMillis(t) {
			let n = Math.floor(t / 1e3);
			return new e(n, Math.floor((t - 1e3 * n) * qf));
		}
		constructor(e, t) {
			if (this.seconds = e, this.nanoseconds = t, t < 0 || t >= 1e9) throw new B(z.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
			if (e < Kf || e >= 253402300800) throw new B(z.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
		}
		toDate() {
			return new Date(this.toMillis());
		}
		toMillis() {
			return 1e3 * this.seconds + this.nanoseconds / qf;
		}
		_compareTo(e) {
			return this.seconds === e.seconds ? P(this.nanoseconds, e.nanoseconds) : P(this.seconds, e.seconds);
		}
		isEqual(e) {
			return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
		}
		toString() {
			return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
		}
		toJSON() {
			return {
				type: e._jsonSchemaVersion,
				seconds: this.seconds,
				nanoseconds: this.nanoseconds
			};
		}
		static fromJSON(t) {
			if (Ys(t, e._jsonSchema)) return new e(t.seconds, t.nanoseconds);
		}
		valueOf() {
			let e = this.seconds - Kf;
			return String(e).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
		}
	}, U._jsonSchemaVersion = "firestore/timestamp/1.0", U._jsonSchema = {
		type: F("string", U._jsonSchemaVersion),
		seconds: F("number"),
		nanoseconds: F("number")
	}, W = class e {
		static fromTimestamp(t) {
			return new e(t);
		}
		static min() {
			return new e(new U(0, 0));
		}
		static max() {
			return new e(new U(253402300799, 999999999));
		}
		constructor(e) {
			this.timestamp = e;
		}
		compareTo(e) {
			return this.timestamp._compareTo(e.timestamp);
		}
		isEqual(e) {
			return this.timestamp.isEqual(e.timestamp);
		}
		toMicroseconds() {
			return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
		}
		toString() {
			return "SnapshotVersion(" + this.timestamp.toString() + ")";
		}
		toTimestamp() {
			return this.timestamp;
		}
	}, Jf = -1, Yf = class {
		constructor(e, t, n, r) {
			this.indexId = e, this.collectionGroup = t, this.fields = n, this.indexState = r;
		}
	}, Yf.UNKNOWN_ID = -1, Xf = class e {
		constructor(e, t, n) {
			this.readTime = e, this.documentKey = t, this.largestBatchId = n;
		}
		static min() {
			return new e(W.min(), H.empty(), Jf);
		}
		static max() {
			return new e(W.max(), H.empty(), Jf);
		}
	}, Zf = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.", Qf = class {
		constructor() {
			this.onCommittedListeners = [];
		}
		addOnCommittedListener(e) {
			this.onCommittedListeners.push(e);
		}
		raiseOnCommittedEvent() {
			this.onCommittedListeners.forEach(((e) => e()));
		}
	}, G = class e {
		constructor(e) {
			this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone = !1, this.callbackAttached = !1, e(((e) => {
				this.isDone = !0, this.result = e, this.nextCallback && this.nextCallback(e);
			}), ((e) => {
				this.isDone = !0, this.error = e, this.catchCallback && this.catchCallback(e);
			}));
		}
		catch(e) {
			return this.next(void 0, e);
		}
		next(t, n) {
			return this.callbackAttached && j(59440), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(n, this.error) : this.wrapSuccess(t, this.result) : new e(((e, r) => {
				this.nextCallback = (n) => {
					this.wrapSuccess(t, n).next(e, r);
				}, this.catchCallback = (t) => {
					this.wrapFailure(n, t).next(e, r);
				};
			}));
		}
		toPromise() {
			return new Promise(((e, t) => {
				this.next(e, t);
			}));
		}
		wrapUserFunction(t) {
			try {
				let n = t();
				return n instanceof e ? n : e.resolve(n);
			} catch (t) {
				return e.reject(t);
			}
		}
		wrapSuccess(t, n) {
			return t ? this.wrapUserFunction((() => t(n))) : e.resolve(n);
		}
		wrapFailure(t, n) {
			return t ? this.wrapUserFunction((() => t(n))) : e.reject(n);
		}
		static resolve(t) {
			return new e(((e, n) => {
				e(t);
			}));
		}
		static reject(t) {
			return new e(((e, n) => {
				n(t);
			}));
		}
		static waitFor(t) {
			return new e(((e, n) => {
				let r = 0, i = 0, a = !1;
				t.forEach(((t) => {
					++r, t.next((() => {
						++i, a && i === r && e();
					}), ((e) => n(e)));
				})), a = !0, i === r && e();
			}));
		}
		static or(t) {
			let n = e.resolve(!1);
			for (let r of t) n = n.next(((t) => t ? e.resolve(t) : r()));
			return n;
		}
		static forEach(e, t) {
			let n = [];
			return e.forEach(((e, r) => {
				n.push(t.call(this, e, r));
			})), this.waitFor(n);
		}
		static mapArray(t, n) {
			return new e(((e, r) => {
				let i = t.length, a = Array(i), o = 0;
				for (let s = 0; s < i; s++) {
					let c = s;
					n(t[c]).next(((t) => {
						a[c] = t, ++o, o === i && e(a);
					}), ((e) => r(e)));
				}
			}));
		}
		static doWhile(t, n) {
			return new e(((e, r) => {
				let i = () => {
					!0 === t() ? n().next((() => {
						i();
					}), r) : e();
				};
				i();
			}));
		}
	}, $f = class {
		constructor(e, t) {
			this.previousValue = e, t && (t.sequenceNumberHandler = (e) => this.ae(e), this.ue = (e) => t.writeSequenceNumber(e));
		}
		ae(e) {
			return this.previousValue = Math.max(e, this.previousValue), this.previousValue;
		}
		next() {
			let e = ++this.previousValue;
			return this.ue && this.ue(e), e;
		}
	}, $f.ce = -1, ep = -1, tp = "", np = "remoteDocuments", rp = "owner", ip = "mutationQueues", ap = "mutations", op = "documentMutations", sp = "remoteDocumentsV14", cp = "remoteDocumentGlobal", lp = "targets", up = "targetDocuments", dp = "targetGlobal", fp = "collectionParents", pp = "clientMetadata", mp = "bundles", hp = "namedQueries", gp = "indexConfiguration", _p = "indexState", vp = "indexEntries", yp = "documentOverlays", bp = [
		...[...[...[...[
			ip,
			ap,
			op,
			np,
			lp,
			rp,
			dp,
			up
		], pp], cp], fp],
		mp,
		hp
	], [...bp], xp = [
		ip,
		ap,
		op,
		sp,
		lp,
		rp,
		dp,
		up,
		pp,
		cp,
		fp,
		mp,
		hp,
		yp
	], Sp = xp, Cp = [
		...Sp,
		gp,
		_p,
		vp
	], [...Cp], K = class e {
		constructor(e, t) {
			this.comparator = e, this.root = t || Tp.EMPTY;
		}
		insert(t, n) {
			return new e(this.comparator, this.root.insert(t, n, this.comparator).copy(null, null, Tp.BLACK, null, null));
		}
		remove(t) {
			return new e(this.comparator, this.root.remove(t, this.comparator).copy(null, null, Tp.BLACK, null, null));
		}
		get(e) {
			let t = this.root;
			for (; !t.isEmpty();) {
				let n = this.comparator(e, t.key);
				if (n === 0) return t.value;
				n < 0 ? t = t.left : n > 0 && (t = t.right);
			}
			return null;
		}
		indexOf(e) {
			let t = 0, n = this.root;
			for (; !n.isEmpty();) {
				let r = this.comparator(e, n.key);
				if (r === 0) return t + n.left.size;
				r < 0 ? n = n.left : (t += n.left.size + 1, n = n.right);
			}
			return -1;
		}
		isEmpty() {
			return this.root.isEmpty();
		}
		get size() {
			return this.root.size;
		}
		minKey() {
			return this.root.minKey();
		}
		maxKey() {
			return this.root.maxKey();
		}
		inorderTraversal(e) {
			return this.root.inorderTraversal(e);
		}
		forEach(e) {
			this.inorderTraversal(((t, n) => (e(t, n), !1)));
		}
		toString() {
			let e = [];
			return this.inorderTraversal(((t, n) => (e.push(`${t}:${n}`), !1))), `{${e.join(", ")}}`;
		}
		reverseTraversal(e) {
			return this.root.reverseTraversal(e);
		}
		getIterator() {
			return new wp(this.root, null, this.comparator, !1);
		}
		getIteratorFrom(e) {
			return new wp(this.root, e, this.comparator, !1);
		}
		getReverseIterator() {
			return new wp(this.root, null, this.comparator, !0);
		}
		getReverseIteratorFrom(e) {
			return new wp(this.root, e, this.comparator, !0);
		}
	}, wp = class {
		constructor(e, t, n, r) {
			this.isReverse = r, this.nodeStack = [];
			let i = 1;
			for (; !e.isEmpty();) if (i = t ? n(e.key, t) : 1, t && r && (i *= -1), i < 0) e = this.isReverse ? e.left : e.right;
			else {
				if (i === 0) {
					this.nodeStack.push(e);
					break;
				}
				this.nodeStack.push(e), e = this.isReverse ? e.right : e.left;
			}
		}
		getNext() {
			let e = this.nodeStack.pop(), t = {
				key: e.key,
				value: e.value
			};
			if (this.isReverse) for (e = e.left; !e.isEmpty();) this.nodeStack.push(e), e = e.right;
			else for (e = e.right; !e.isEmpty();) this.nodeStack.push(e), e = e.left;
			return t;
		}
		hasNext() {
			return this.nodeStack.length > 0;
		}
		peek() {
			if (this.nodeStack.length === 0) return null;
			let e = this.nodeStack[this.nodeStack.length - 1];
			return {
				key: e.key,
				value: e.value
			};
		}
	}, Tp = class e {
		constructor(t, n, r, i, a) {
			this.key = t, this.value = n, this.color = r ?? e.RED, this.left = i ?? e.EMPTY, this.right = a ?? e.EMPTY, this.size = this.left.size + 1 + this.right.size;
		}
		copy(t, n, r, i, a) {
			return new e(t ?? this.key, n ?? this.value, r ?? this.color, i ?? this.left, a ?? this.right);
		}
		isEmpty() {
			return !1;
		}
		inorderTraversal(e) {
			return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e);
		}
		reverseTraversal(e) {
			return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e);
		}
		min() {
			return this.left.isEmpty() ? this : this.left.min();
		}
		minKey() {
			return this.min().key;
		}
		maxKey() {
			return this.right.isEmpty() ? this.key : this.right.maxKey();
		}
		insert(e, t, n) {
			let r = this, i = n(e, r.key);
			return r = i < 0 ? r.copy(null, null, null, r.left.insert(e, t, n), null) : i === 0 ? r.copy(null, t, null, null, null) : r.copy(null, null, null, null, r.right.insert(e, t, n)), r.fixUp();
		}
		removeMin() {
			if (this.left.isEmpty()) return e.EMPTY;
			let t = this;
			return t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()), t = t.copy(null, null, null, t.left.removeMin(), null), t.fixUp();
		}
		remove(t, n) {
			let r, i = this;
			if (n(t, i.key) < 0) i.left.isEmpty() || i.left.isRed() || i.left.left.isRed() || (i = i.moveRedLeft()), i = i.copy(null, null, null, i.left.remove(t, n), null);
			else {
				if (i.left.isRed() && (i = i.rotateRight()), i.right.isEmpty() || i.right.isRed() || i.right.left.isRed() || (i = i.moveRedRight()), n(t, i.key) === 0) {
					if (i.right.isEmpty()) return e.EMPTY;
					r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.removeMin());
				}
				i = i.copy(null, null, null, null, i.right.remove(t, n));
			}
			return i.fixUp();
		}
		isRed() {
			return this.color;
		}
		fixUp() {
			let e = this;
			return e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()), e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()), e.left.isRed() && e.right.isRed() && (e = e.colorFlip()), e;
		}
		moveRedLeft() {
			let e = this.colorFlip();
			return e.right.left.isRed() && (e = e.copy(null, null, null, null, e.right.rotateRight()), e = e.rotateLeft(), e = e.colorFlip()), e;
		}
		moveRedRight() {
			let e = this.colorFlip();
			return e.left.left.isRed() && (e = e.rotateRight(), e = e.colorFlip()), e;
		}
		rotateLeft() {
			let t = this.copy(null, null, e.RED, null, this.right.left);
			return this.right.copy(null, null, this.color, t, null);
		}
		rotateRight() {
			let t = this.copy(null, null, e.RED, this.left.right, null);
			return this.left.copy(null, null, this.color, null, t);
		}
		colorFlip() {
			let e = this.left.copy(null, null, !this.left.color, null, null), t = this.right.copy(null, null, !this.right.color, null, null);
			return this.copy(null, null, !this.color, e, t);
		}
		checkMaxDepth() {
			return 2 ** this.check() <= this.size + 1;
		}
		check() {
			if (this.isRed() && this.left.isRed()) throw j(43730, {
				key: this.key,
				value: this.value
			});
			if (this.right.isRed()) throw j(14113, {
				key: this.key,
				value: this.value
			});
			let e = this.left.check();
			if (e !== this.right.check()) throw j(27949);
			return e + +!this.isRed();
		}
	}, Tp.EMPTY = null, Tp.RED = !0, Tp.BLACK = !1, Tp.EMPTY = new class {
		constructor() {
			this.size = 0;
		}
		get key() {
			throw j(57766);
		}
		get value() {
			throw j(16141);
		}
		get color() {
			throw j(16727);
		}
		get left() {
			throw j(29726);
		}
		get right() {
			throw j(36894);
		}
		copy(e, t, n, r, i) {
			return this;
		}
		insert(e, t, n) {
			return new Tp(e, t);
		}
		remove(e, t) {
			return this;
		}
		isEmpty() {
			return !0;
		}
		inorderTraversal(e) {
			return !1;
		}
		reverseTraversal(e) {
			return !1;
		}
		minKey() {
			return null;
		}
		maxKey() {
			return null;
		}
		isRed() {
			return !1;
		}
		checkMaxDepth() {
			return !0;
		}
		check() {
			return 0;
		}
	}(), q = class e {
		constructor(e) {
			this.comparator = e, this.data = new K(this.comparator);
		}
		has(e) {
			return this.data.get(e) !== null;
		}
		first() {
			return this.data.minKey();
		}
		last() {
			return this.data.maxKey();
		}
		get size() {
			return this.data.size;
		}
		indexOf(e) {
			return this.data.indexOf(e);
		}
		forEach(e) {
			this.data.inorderTraversal(((t, n) => (e(t), !1)));
		}
		forEachInRange(e, t) {
			let n = this.data.getIteratorFrom(e[0]);
			for (; n.hasNext();) {
				let r = n.getNext();
				if (this.comparator(r.key, e[1]) >= 0) return;
				t(r.key);
			}
		}
		forEachWhile(e, t) {
			let n;
			for (n = t === void 0 ? this.data.getIterator() : this.data.getIteratorFrom(t); n.hasNext();) if (!e(n.getNext().key)) return;
		}
		firstAfterOrEqual(e) {
			let t = this.data.getIteratorFrom(e);
			return t.hasNext() ? t.getNext().key : null;
		}
		getIterator() {
			return new Ep(this.data.getIterator());
		}
		getIteratorFrom(e) {
			return new Ep(this.data.getIteratorFrom(e));
		}
		add(e) {
			return this.copy(this.data.remove(e).insert(e, !0));
		}
		delete(e) {
			return this.has(e) ? this.copy(this.data.remove(e)) : this;
		}
		isEmpty() {
			return this.data.isEmpty();
		}
		unionWith(e) {
			let t = this;
			return t.size < e.size && (t = e, e = this), e.forEach(((e) => {
				t = t.add(e);
			})), t;
		}
		isEqual(t) {
			if (!(t instanceof e) || this.size !== t.size) return !1;
			let n = this.data.getIterator(), r = t.data.getIterator();
			for (; n.hasNext();) {
				let e = n.getNext().key, t = r.getNext().key;
				if (this.comparator(e, t) !== 0) return !1;
			}
			return !0;
		}
		toArray() {
			let e = [];
			return this.forEach(((t) => {
				e.push(t);
			})), e;
		}
		toString() {
			let e = [];
			return this.forEach(((t) => e.push(t))), "SortedSet(" + e.toString() + ")";
		}
		copy(t) {
			let n = new e(this.comparator);
			return n.data = t, n;
		}
	}, Ep = class {
		constructor(e) {
			this.iter = e;
		}
		getNext() {
			return this.iter.getNext().key;
		}
		hasNext() {
			return this.iter.hasNext();
		}
	}, Dp = class e {
		constructor(e) {
			this.fields = e, e.sort(Gf.comparator);
		}
		static empty() {
			return new e([]);
		}
		unionWith(t) {
			let n = new q(Gf.comparator);
			for (let e of this.fields) n = n.add(e);
			for (let e of t) n = n.add(e);
			return new e(n.toArray());
		}
		covers(e) {
			for (let t of this.fields) if (t.isPrefixOf(e)) return !0;
			return !1;
		}
		isEqual(e) {
			return Vs(this.fields, e.fields, ((e, t) => e.isEqual(t)));
		}
	}, Op = class extends Error {
		constructor() {
			super(...arguments), this.name = "Base64DecodeError";
		}
	}, kp = class e {
		constructor(e) {
			this.binaryString = e;
		}
		static fromBase64String(t) {
			return new e(function(e) {
				try {
					return atob(e);
				} catch (e) {
					throw typeof DOMException < "u" && e instanceof DOMException ? new Op("Invalid base64 string: " + e) : e;
				}
			}(t));
		}
		static fromUint8Array(t) {
			return new e(function(e) {
				let t = "";
				for (let n = 0; n < e.length; ++n) t += String.fromCharCode(e[n]);
				return t;
			}(t));
		}
		[Symbol.iterator]() {
			let e = 0;
			return { next: () => e < this.binaryString.length ? {
				value: this.binaryString.charCodeAt(e++),
				done: !1
			} : {
				value: void 0,
				done: !0
			} };
		}
		toBase64() {
			return function(e) {
				return btoa(e);
			}(this.binaryString);
		}
		toUint8Array() {
			return function(e) {
				let t = new Uint8Array(e.length);
				for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
				return t;
			}(this.binaryString);
		}
		approximateByteSize() {
			return 2 * this.binaryString.length;
		}
		compareTo(e) {
			return P(this.binaryString, e.binaryString);
		}
		isEqual(e) {
			return this.binaryString === e.binaryString;
		}
	}, kp.EMPTY_BYTE_STRING = new kp(""), Ap = /* @__PURE__ */ new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/), jp = "server_timestamp", Mp = "__type__", Np = "__previous_value__", Pp = "__local_write_time__", Fp = class {
		constructor(e, t, n, r, i, a, o, s, c, l, u) {
			this.databaseId = e, this.appId = t, this.persistenceKey = n, this.host = r, this.ssl = i, this.forceLongPolling = a, this.autoDetectLongPolling = o, this.longPollingOptions = s, this.useFetchStreams = c, this.isUsingEmulator = l, this.apiKey = u;
		}
	}, Ip = "(default)", Lp = class e {
		constructor(e, t) {
			this.projectId = e, this.database = t || Ip;
		}
		static empty() {
			return new e("", "");
		}
		get isDefaultDatabase() {
			return this.database === Ip;
		}
		isEqual(t) {
			return t instanceof e && t.projectId === this.projectId && t.database === this.database;
		}
	}, Rp = "__type__", zp = "__max__", Bp = { mapValue: { fields: { __type__: { stringValue: zp } } } }, Vp = "__vector__", Hp = "value", Up = class e {
		constructor(e) {
			this.value = e;
		}
		static empty() {
			return new e({ mapValue: {} });
		}
		field(e) {
			if (e.isEmpty()) return this.value;
			{
				let t = this.value;
				for (let n = 0; n < e.length - 1; ++n) if (t = (t.mapValue.fields || {})[e.get(n)], !jc(t)) return null;
				return t = (t.mapValue.fields || {})[e.lastSegment()], t || null;
			}
		}
		set(e, t) {
			this.getFieldsMap(e.popLast())[e.lastSegment()] = Nc(t);
		}
		setAll(e) {
			let t = Gf.emptyPath(), n = {}, r = [];
			e.forEach(((e, i) => {
				if (!t.isImmediateParentOf(i)) {
					let e = this.getFieldsMap(t);
					this.applyChanges(e, n, r), n = {}, r = [], t = i.popLast();
				}
				e ? n[i.lastSegment()] = Nc(e) : r.push(i.lastSegment());
			}));
			let i = this.getFieldsMap(t);
			this.applyChanges(i, n, r);
		}
		delete(e) {
			let t = this.field(e.popLast());
			jc(t) && t.mapValue.fields && delete t.mapValue.fields[e.lastSegment()];
		}
		isEqual(e) {
			return vc(this.value, e.value);
		}
		getFieldsMap(e) {
			let t = this.value;
			t.mapValue.fields || (t.mapValue = { fields: {} });
			for (let n = 0; n < e.length; ++n) {
				let r = t.mapValue.fields[e.get(n)];
				jc(r) && r.mapValue.fields || (r = { mapValue: { fields: {} } }, t.mapValue.fields[e.get(n)] = r), t = r;
			}
			return t.mapValue.fields;
		}
		applyChanges(e, t, n) {
			lc(t, ((t, n) => e[t] = n));
			for (let t of n) delete e[t];
		}
		clone() {
			return new e(Nc(this.value));
		}
	}, Wp = class e {
		constructor(e, t, n, r, i, a, o) {
			this.key = e, this.documentType = t, this.version = n, this.readTime = r, this.createTime = i, this.data = a, this.documentState = o;
		}
		static newInvalidDocument(t) {
			return new e(t, 0, W.min(), W.min(), W.min(), Up.empty(), 0);
		}
		static newFoundDocument(t, n, r, i) {
			return new e(t, 1, n, W.min(), r, i, 0);
		}
		static newNoDocument(t, n) {
			return new e(t, 2, n, W.min(), W.min(), Up.empty(), 0);
		}
		static newUnknownDocument(t, n) {
			return new e(t, 3, n, W.min(), W.min(), Up.empty(), 2);
		}
		convertToFoundDocument(e, t) {
			return !this.createTime.isEqual(W.min()) || this.documentType !== 2 && this.documentType !== 0 || (this.createTime = e), this.version = e, this.documentType = 1, this.data = t, this.documentState = 0, this;
		}
		convertToNoDocument(e) {
			return this.version = e, this.documentType = 2, this.data = Up.empty(), this.documentState = 0, this;
		}
		convertToUnknownDocument(e) {
			return this.version = e, this.documentType = 3, this.data = Up.empty(), this.documentState = 2, this;
		}
		setHasCommittedMutations() {
			return this.documentState = 2, this;
		}
		setHasLocalMutations() {
			return this.documentState = 1, this.version = W.min(), this;
		}
		setReadTime(e) {
			return this.readTime = e, this;
		}
		get hasLocalMutations() {
			return this.documentState === 1;
		}
		get hasCommittedMutations() {
			return this.documentState === 2;
		}
		get hasPendingWrites() {
			return this.hasLocalMutations || this.hasCommittedMutations;
		}
		isValidDocument() {
			return this.documentType !== 0;
		}
		isFoundDocument() {
			return this.documentType === 1;
		}
		isNoDocument() {
			return this.documentType === 2;
		}
		isUnknownDocument() {
			return this.documentType === 3;
		}
		isEqual(t) {
			return t instanceof e && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.documentType === t.documentType && this.documentState === t.documentState && this.data.isEqual(t.data);
		}
		mutableCopy() {
			return new e(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState);
		}
		toString() {
			return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
		}
	}, Gp = class {
		constructor(e, t) {
			this.position = e, this.inclusive = t;
		}
	}, Kp = class {
		constructor(e, t = "asc") {
			this.field = e, this.dir = t;
		}
	}, qp = class {}, J = class e extends qp {
		constructor(e, t, n) {
			super(), this.field = e, this.op = t, this.value = n;
		}
		static create(t, n, r) {
			return t.isKeyField() ? n === "in" || n === "not-in" ? this.createKeyFieldInFilter(t, n, r) : new Yp(t, n, r) : n === "array-contains" ? new Qp(t, r) : n === "in" ? new $p(t, r) : n === "not-in" ? new em(t, r) : n === "array-contains-any" ? new tm(t, r) : new e(t, n, r);
		}
		static createKeyFieldInFilter(e, t, n) {
			return t === "in" ? new Xp(e, n) : new Zp(e, n);
		}
		matches(e) {
			let t = e.data.field(this.field);
			return this.op === "!=" ? t !== null && t.nullValue === void 0 && this.matchesComparison(bc(t, this.value)) : t !== null && _c(this.value) === _c(t) && this.matchesComparison(bc(t, this.value));
		}
		matchesComparison(e) {
			switch (this.op) {
				case "<": return e < 0;
				case "<=": return e <= 0;
				case "==": return e === 0;
				case "!=": return e !== 0;
				case ">": return e > 0;
				case ">=": return e >= 0;
				default: return j(47266, { operator: this.op });
			}
		}
		isInequality() {
			return [
				"<",
				"<=",
				">",
				">=",
				"!=",
				"not-in"
			].indexOf(this.op) >= 0;
		}
		getFlattenedFilters() {
			return [this];
		}
		getFilters() {
			return [this];
		}
	}, Jp = class e extends qp {
		constructor(e, t) {
			super(), this.filters = e, this.op = t, this.Pe = null;
		}
		static create(t, n) {
			return new e(t, n);
		}
		matches(e) {
			return zc(this) ? this.filters.find(((t) => !t.matches(e))) === void 0 : this.filters.find(((t) => t.matches(e))) !== void 0;
		}
		getFlattenedFilters() {
			return this.Pe !== null || (this.Pe = this.filters.reduce(((e, t) => e.concat(t.getFlattenedFilters())), [])), this.Pe;
		}
		getFilters() {
			return Object.assign([], this.filters);
		}
	}, Yp = class extends J {
		constructor(e, t, n) {
			super(e, t, n), this.key = H.fromName(n.referenceValue);
		}
		matches(e) {
			let t = H.comparator(e.key, this.key);
			return this.matchesComparison(t);
		}
	}, Xp = class extends J {
		constructor(e, t) {
			super(e, "in", t), this.keys = Gc("in", t);
		}
		matches(e) {
			return this.keys.some(((t) => t.isEqual(e.key)));
		}
	}, Zp = class extends J {
		constructor(e, t) {
			super(e, "not-in", t), this.keys = Gc("not-in", t);
		}
		matches(e) {
			return !this.keys.some(((t) => t.isEqual(e.key)));
		}
	}, Qp = class extends J {
		constructor(e, t) {
			super(e, "array-contains", t);
		}
		matches(e) {
			let t = e.data.field(this.field);
			return Oc(t) && yc(t.arrayValue, this.value);
		}
	}, $p = class extends J {
		constructor(e, t) {
			super(e, "in", t);
		}
		matches(e) {
			let t = e.data.field(this.field);
			return t !== null && yc(this.value.arrayValue, t);
		}
	}, em = class extends J {
		constructor(e, t) {
			super(e, "not-in", t);
		}
		matches(e) {
			if (yc(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return !1;
			let t = e.data.field(this.field);
			return t !== null && t.nullValue === void 0 && !yc(this.value.arrayValue, t);
		}
	}, tm = class extends J {
		constructor(e, t) {
			super(e, "array-contains-any", t);
		}
		matches(e) {
			let t = e.data.field(this.field);
			return !(!Oc(t) || !t.arrayValue.values) && t.arrayValue.values.some(((e) => yc(this.value.arrayValue, e)));
		}
	}, nm = class {
		constructor(e, t = null, n = [], r = [], i = null, a = null, o = null) {
			this.path = e, this.collectionGroup = t, this.orderBy = n, this.filters = r, this.limit = i, this.startAt = a, this.endAt = o, this.Te = null;
		}
	}, rm = class {
		constructor(e, t = null, n = [], r = [], i = null, a = "F", o = null, s = null) {
			this.path = e, this.collectionGroup = t, this.explicitOrderBy = n, this.filters = r, this.limit = i, this.limitType = a, this.startAt = o, this.endAt = s, this.Ee = null, this.Ie = null, this.Re = null, this.startAt, this.endAt;
		}
	}, im = class {
		constructor(e, t) {
			this.mapKeyFn = e, this.equalsFn = t, this.inner = {}, this.innerSize = 0;
		}
		get(e) {
			let t = this.mapKeyFn(e), n = this.inner[t];
			if (n !== void 0) {
				for (let [t, r] of n) if (this.equalsFn(t, e)) return r;
			}
		}
		has(e) {
			return this.get(e) !== void 0;
		}
		set(e, t) {
			let n = this.mapKeyFn(e), r = this.inner[n];
			if (r === void 0) return this.inner[n] = [[e, t]], void this.innerSize++;
			for (let n = 0; n < r.length; n++) if (this.equalsFn(r[n][0], e)) return void (r[n] = [e, t]);
			r.push([e, t]), this.innerSize++;
		}
		delete(e) {
			let t = this.mapKeyFn(e), n = this.inner[t];
			if (n === void 0) return !1;
			for (let r = 0; r < n.length; r++) if (this.equalsFn(n[r][0], e)) return n.length === 1 ? delete this.inner[t] : n.splice(r, 1), this.innerSize--, !0;
			return !1;
		}
		forEach(e) {
			lc(this.inner, ((t, n) => {
				for (let [t, r] of n) e(t, r);
			}));
		}
		isEmpty() {
			return uc(this.inner);
		}
		size() {
			return this.innerSize;
		}
	}, am = new K(H.comparator), om = new K(H.comparator), sm = new K(H.comparator), cm = new q(H.comparator), lm = new q(P), um = class {
		constructor() {
			this._ = void 0;
		}
	}, dm = class extends um {}, fm = class extends um {
		constructor(e) {
			super(), this.elements = e;
		}
	}, pm = class extends um {
		constructor(e) {
			super(), this.elements = e;
		}
	}, mm = class extends um {
		constructor(e, t) {
			super(), this.serializer = e, this.Ae = t;
		}
	}, hm = class {
		constructor(e, t) {
			this.version = e, this.transformResults = t;
		}
	}, gm = class e {
		constructor(e, t) {
			this.updateTime = e, this.exists = t;
		}
		static none() {
			return new e();
		}
		static exists(t) {
			return new e(void 0, t);
		}
		static updateTime(t) {
			return new e(t);
		}
		get isNone() {
			return this.updateTime === void 0 && this.exists === void 0;
		}
		isEqual(e) {
			return this.exists === e.exists && (this.updateTime ? !!e.updateTime && this.updateTime.isEqual(e.updateTime) : !e.updateTime);
		}
	}, _m = class {}, vm = class extends _m {
		constructor(e, t, n, r = []) {
			super(), this.key = e, this.value = t, this.precondition = n, this.fieldTransforms = r, this.type = 0;
		}
		getFieldMask() {
			return null;
		}
	}, ym = class extends _m {
		constructor(e, t, n, r, i = []) {
			super(), this.key = e, this.data = t, this.fieldMask = n, this.precondition = r, this.fieldTransforms = i, this.type = 1;
		}
		getFieldMask() {
			return this.fieldMask;
		}
	}, bm = class extends _m {
		constructor(e, t) {
			super(), this.key = e, this.precondition = t, this.type = 2, this.fieldTransforms = [];
		}
		getFieldMask() {
			return null;
		}
	}, xm = class extends _m {
		constructor(e, t) {
			super(), this.key = e, this.precondition = t, this.type = 3, this.fieldTransforms = [];
		}
		getFieldMask() {
			return null;
		}
	}, Sm = class {
		constructor(e, t, n, r) {
			this.batchId = e, this.localWriteTime = t, this.baseMutations = n, this.mutations = r;
		}
		applyToRemoteDocument(e, t) {
			let n = t.mutationResults;
			for (let t = 0; t < this.mutations.length; t++) {
				let r = this.mutations[t];
				r.key.isEqual(e.key) && Nl(r, e, n[t]);
			}
		}
		applyToLocalView(e, t) {
			for (let n of this.baseMutations) n.key.isEqual(e.key) && (t = Pl(n, e, t, this.localWriteTime));
			for (let n of this.mutations) n.key.isEqual(e.key) && (t = Pl(n, e, t, this.localWriteTime));
			return t;
		}
		applyToLocalDocumentSet(e, t) {
			let n = _l();
			return this.mutations.forEach(((r) => {
				let i = e.get(r.key), a = i.overlayedDocument, o = this.applyToLocalView(a, i.mutatedFields);
				o = t.has(r.key) ? null : o;
				let s = Ml(a, o);
				s !== null && n.set(r.key, s), a.isValidDocument() || a.convertToNoDocument(W.min());
			})), n;
		}
		keys() {
			return this.mutations.reduce(((e, t) => e.add(t.key)), L());
		}
		isEqual(e) {
			return this.batchId === e.batchId && Vs(this.mutations, e.mutations, ((e, t) => Il(e, t))) && Vs(this.baseMutations, e.baseMutations, ((e, t) => Il(e, t)));
		}
	}, Cm = class e {
		constructor(e, t, n, r) {
			this.batch = e, this.commitVersion = t, this.mutationResults = n, this.docVersions = r;
		}
		static from(t, n, r) {
			M(t.mutations.length === r.length, 58842, {
				me: t.mutations.length,
				fe: r.length
			});
			let i = function() {
				return sm;
			}(), a = t.mutations;
			for (let e = 0; e < a.length; e++) i = i.insert(a[e].key, r[e].version);
			return new e(t, n, r, i);
		}
	}, wm = class {
		constructor(e, t) {
			this.largestBatchId = e, this.mutation = t;
		}
		getKey() {
			return this.mutation.key;
		}
		isEqual(e) {
			return e !== null && this.mutation === e.mutation;
		}
		toString() {
			return `Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`;
		}
	}, Tm = class {
		constructor(e, t) {
			this.count = e, this.unchangedNames = t;
		}
	}, (X = Y ||= {})[X.OK = 0] = "OK", X[X.CANCELLED = 1] = "CANCELLED", X[X.UNKNOWN = 2] = "UNKNOWN", X[X.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", X[X.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", X[X.NOT_FOUND = 5] = "NOT_FOUND", X[X.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", X[X.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", X[X.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", X[X.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", X[X.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", X[X.ABORTED = 10] = "ABORTED", X[X.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", X[X.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", X[X.INTERNAL = 13] = "INTERNAL", X[X.UNAVAILABLE = 14] = "UNAVAILABLE", X[X.DATA_LOSS = 15] = "DATA_LOSS", Em = null, Dm = new vs([4294967295, 4294967295], 0), Om = class e {
		constructor(e, t, n) {
			if (this.bitmap = e, this.padding = t, this.hashCount = n, t < 0 || t >= 8) throw new km(`Invalid padding: ${t}`);
			if (n < 0 || e.length > 0 && this.hashCount === 0) throw new km(`Invalid hash count: ${n}`);
			if (e.length === 0 && t !== 0) throw new km(`Invalid padding when bitmap length is 0: ${t}`);
			this.ge = 8 * e.length - t, this.pe = vs.fromNumber(this.ge);
		}
		ye(e, t, n) {
			let r = e.add(t.multiply(vs.fromNumber(n)));
			return r.compare(Dm) === 1 && (r = new vs([r.getBits(0), r.getBits(1)], 0)), r.modulo(this.pe).toNumber();
		}
		we(e) {
			return !!(this.bitmap[Math.floor(e / 8)] & 1 << e % 8);
		}
		mightContain(e) {
			if (this.ge === 0) return !1;
			let [t, n] = Wl(Ul(e));
			for (let e = 0; e < this.hashCount; e++) {
				let r = this.ye(t, n, e);
				if (!this.we(r)) return !1;
			}
			return !0;
		}
		static create(t, n, r) {
			let i = t % 8 == 0 ? 0 : 8 - t % 8, a = new e(new Uint8Array(Math.ceil(t / 8)), i, n);
			return r.forEach(((e) => a.insert(e))), a;
		}
		insert(e) {
			if (this.ge === 0) return;
			let [t, n] = Wl(Ul(e));
			for (let e = 0; e < this.hashCount; e++) {
				let r = this.ye(t, n, e);
				this.Se(r);
			}
		}
		Se(e) {
			let t = Math.floor(e / 8), n = e % 8;
			this.bitmap[t] |= 1 << n;
		}
	}, km = class extends Error {
		constructor() {
			super(...arguments), this.name = "BloomFilterError";
		}
	}, Am = class e {
		constructor(e, t, n, r, i) {
			this.snapshotVersion = e, this.targetChanges = t, this.targetMismatches = n, this.documentUpdates = r, this.resolvedLimboDocuments = i;
		}
		static createSynthesizedRemoteEventForCurrentChange(t, n, r) {
			let i = /* @__PURE__ */ new Map();
			return i.set(t, jm.createSynthesizedTargetChangeForCurrentChange(t, n, r)), new e(W.min(), i, new K(P), pl(), L());
		}
	}, jm = class e {
		constructor(e, t, n, r, i) {
			this.resumeToken = e, this.current = t, this.addedDocuments = n, this.modifiedDocuments = r, this.removedDocuments = i;
		}
		static createSynthesizedTargetChangeForCurrentChange(t, n, r) {
			return new e(r, n, L(), L(), L());
		}
	}, Mm = class {
		constructor(e, t, n, r) {
			this.be = e, this.removedTargetIds = t, this.key = n, this.De = r;
		}
	}, Nm = class {
		constructor(e, t) {
			this.targetId = e, this.Ce = t;
		}
	}, Pm = class {
		constructor(e, t, n = kp.EMPTY_BYTE_STRING, r = null) {
			this.state = e, this.targetIds = t, this.resumeToken = n, this.cause = r;
		}
	}, Fm = class {
		constructor() {
			this.ve = 0, this.Fe = Kl(), this.Me = kp.EMPTY_BYTE_STRING, this.xe = !1, this.Oe = !0;
		}
		get current() {
			return this.xe;
		}
		get resumeToken() {
			return this.Me;
		}
		get Ne() {
			return this.ve !== 0;
		}
		get Be() {
			return this.Oe;
		}
		Le(e) {
			e.approximateByteSize() > 0 && (this.Oe = !0, this.Me = e);
		}
		ke() {
			let e = L(), t = L(), n = L();
			return this.Fe.forEach(((r, i) => {
				switch (i) {
					case 0:
						e = e.add(r);
						break;
					case 2:
						t = t.add(r);
						break;
					case 1:
						n = n.add(r);
						break;
					default: j(38017, { changeType: i });
				}
			})), new jm(this.Me, this.xe, e, t, n);
		}
		qe() {
			this.Oe = !1, this.Fe = Kl();
		}
		Ke(e, t) {
			this.Oe = !0, this.Fe = this.Fe.insert(e, t);
		}
		Ue(e) {
			this.Oe = !0, this.Fe = this.Fe.remove(e);
		}
		$e() {
			this.ve += 1;
		}
		We() {
			--this.ve, M(this.ve >= 0, 3241, { ve: this.ve });
		}
		Qe() {
			this.Oe = !0, this.xe = !0;
		}
	}, Im = class {
		constructor(e) {
			this.Ge = e, this.ze = /* @__PURE__ */ new Map(), this.je = pl(), this.Je = Gl(), this.He = Gl(), this.Ze = new K(P);
		}
		Xe(e) {
			for (let t of e.be) e.De && e.De.isFoundDocument() ? this.Ye(t, e.De) : this.et(t, e.key, e.De);
			for (let t of e.removedTargetIds) this.et(t, e.key, e.De);
		}
		tt(e) {
			this.forEachTarget(e, ((t) => {
				let n = this.nt(t);
				switch (e.state) {
					case 0:
						this.rt(t) && n.Le(e.resumeToken);
						break;
					case 1:
						n.We(), n.Ne || n.qe(), n.Le(e.resumeToken);
						break;
					case 2:
						n.We(), n.Ne || this.removeTarget(t);
						break;
					case 3:
						this.rt(t) && (n.Qe(), n.Le(e.resumeToken));
						break;
					case 4:
						this.rt(t) && (this.it(t), n.Le(e.resumeToken));
						break;
					default: j(56790, { state: e.state });
				}
			}));
		}
		forEachTarget(e, t) {
			e.targetIds.length > 0 ? e.targetIds.forEach(t) : this.ze.forEach(((e, n) => {
				this.rt(n) && t(n);
			}));
		}
		st(e) {
			let t = e.targetId, n = e.Ce.count, r = this.ot(t);
			if (r) {
				let i = r.target;
				if (Yc(i)) if (n === 0) {
					let e = new H(i.path);
					this.et(t, e, Wp.newNoDocument(e, W.min()));
				} else M(n === 1, 20013, { expectedCount: n });
				else {
					let r = this._t(t);
					if (r !== n) {
						let n = this.ut(e), i = n ? this.ct(n, e, r) : 1;
						if (i !== 0) {
							this.it(t);
							let e = i === 2 ? "TargetPurposeExistenceFilterMismatchBloom" : "TargetPurposeExistenceFilterMismatch";
							this.Ze = this.Ze.insert(t, e);
						}
						Em?.o(function(e, t, n, r, i) {
							let a = {
								localCacheCount: e,
								existenceFilterCount: t.count,
								databaseId: n.database,
								projectId: n.projectId
							}, o = t.unchangedNames;
							return o && (a.bloomFilter = {
								applied: i === 0,
								hashCount: o?.hashCount ?? 0,
								bitmapLength: o?.bits?.bitmap?.length ?? 0,
								padding: o?.bits?.padding ?? 0,
								mightContain: (e) => r?.mightContain(e) ?? !1
							}), a;
						}(r, e.Ce, this.Ge.ht(), n, i));
					}
				}
			}
		}
		ut(e) {
			let t = e.Ce.unchangedNames;
			if (!t || !t.bits) return null;
			let { bits: { bitmap: n = "", padding: r = 0 }, hashCount: i = 0 } = t, a, o;
			try {
				a = fc(n).toUint8Array();
			} catch (e) {
				if (e instanceof Op) return Fs("Decoding the base64 bloom filter in existence filter failed (" + e.message + "); ignoring the bloom filter and falling back to full re-query."), null;
				throw e;
			}
			try {
				o = new Om(a, r, i);
			} catch (e) {
				return Fs(e instanceof km ? "BloomFilter error: " : "Applying bloom filter failed: ", e), null;
			}
			return o.ge === 0 ? null : o;
		}
		ct(e, t, n) {
			return t.Ce.count === n - this.Pt(e, t.targetId) ? 0 : 2;
		}
		Pt(e, t) {
			let n = this.Ge.getRemoteKeysForTarget(t), r = 0;
			return n.forEach(((n) => {
				let i = this.Ge.ht(), a = `projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;
				e.mightContain(a) || (this.et(t, n, null), r++);
			})), r;
		}
		Tt(e) {
			let t = /* @__PURE__ */ new Map();
			this.ze.forEach(((n, r) => {
				let i = this.ot(r);
				if (i) {
					if (n.current && Yc(i.target)) {
						let t = new H(i.target.path);
						this.Et(t).has(r) || this.It(r, t) || this.et(r, t, Wp.newNoDocument(t, e));
					}
					n.Be && (t.set(r, n.ke()), n.qe());
				}
			}));
			let n = L();
			this.He.forEach(((e, t) => {
				let r = !0;
				t.forEachWhile(((e) => {
					let t = this.ot(e);
					return !t || t.purpose === "TargetPurposeLimboResolution" || (r = !1, !1);
				})), r && (n = n.add(e));
			})), this.je.forEach(((t, n) => n.setReadTime(e)));
			let r = new Am(e, t, this.Ze, this.je, n);
			return this.je = pl(), this.Je = Gl(), this.He = Gl(), this.Ze = new K(P), r;
		}
		Ye(e, t) {
			if (!this.rt(e)) return;
			let n = this.It(e, t.key) ? 2 : 0;
			this.nt(e).Ke(t.key, n), this.je = this.je.insert(t.key, t), this.Je = this.Je.insert(t.key, this.Et(t.key).add(e)), this.He = this.He.insert(t.key, this.Rt(t.key).add(e));
		}
		et(e, t, n) {
			if (!this.rt(e)) return;
			let r = this.nt(e);
			this.It(e, t) ? r.Ke(t, 1) : r.Ue(t), this.He = this.He.insert(t, this.Rt(t).delete(e)), this.He = this.He.insert(t, this.Rt(t).add(e)), n && (this.je = this.je.insert(t, n));
		}
		removeTarget(e) {
			this.ze.delete(e);
		}
		_t(e) {
			let t = this.nt(e).ke();
			return this.Ge.getRemoteKeysForTarget(e).size + t.addedDocuments.size - t.removedDocuments.size;
		}
		$e(e) {
			this.nt(e).$e();
		}
		nt(e) {
			let t = this.ze.get(e);
			return t || (t = new Fm(), this.ze.set(e, t)), t;
		}
		Rt(e) {
			let t = this.He.get(e);
			return t || (t = new q(P), this.He = this.He.insert(e, t)), t;
		}
		Et(e) {
			let t = this.Je.get(e);
			return t || (t = new q(P), this.Je = this.Je.insert(e, t)), t;
		}
		rt(e) {
			let t = this.ot(e) !== null;
			return t || A("WatchChangeAggregator", "Detected inactive target", e), t;
		}
		ot(e) {
			let t = this.ze.get(e);
			return t && t.Ne ? null : this.Ge.At(e);
		}
		it(e) {
			this.ze.set(e, new Fm()), this.Ge.getRemoteKeysForTarget(e).forEach(((t) => {
				this.et(e, t, null);
			}));
		}
		It(e, t) {
			return this.Ge.getRemoteKeysForTarget(e).has(t);
		}
	}, Lm = {
		asc: "ASCENDING",
		desc: "DESCENDING"
	}, Rm = {
		"<": "LESS_THAN",
		"<=": "LESS_THAN_OR_EQUAL",
		">": "GREATER_THAN",
		">=": "GREATER_THAN_OR_EQUAL",
		"==": "EQUAL",
		"!=": "NOT_EQUAL",
		"array-contains": "ARRAY_CONTAINS",
		in: "IN",
		"not-in": "NOT_IN",
		"array-contains-any": "ARRAY_CONTAINS_ANY"
	}, zm = {
		and: "AND",
		or: "OR"
	}, Bm = class {
		constructor(e, t) {
			this.databaseId = e, this.useProto3Json = t;
		}
	}, Vm = class e {
		constructor(e, t, n, r, i = W.min(), a = W.min(), o = kp.EMPTY_BYTE_STRING, s = null) {
			this.target = e, this.targetId = t, this.purpose = n, this.sequenceNumber = r, this.snapshotVersion = i, this.lastLimboFreeSnapshotVersion = a, this.resumeToken = o, this.expectedCount = s;
		}
		withSequenceNumber(t) {
			return new e(this.target, this.targetId, this.purpose, t, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, this.expectedCount);
		}
		withResumeToken(t, n) {
			return new e(this.target, this.targetId, this.purpose, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, t, null);
		}
		withExpectedCount(t) {
			return new e(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, t);
		}
		withLastLimboFreeSnapshotVersion(t) {
			return new e(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, t, this.resumeToken, this.expectedCount);
		}
	}, Hm = class {
		constructor(e) {
			this.yt = e;
		}
	}, Um = class {
		constructor() {}
		Dt(e, t) {
			this.Ct(e, t), t.vt();
		}
		Ct(e, t) {
			if ("nullValue" in e) this.Ft(t, 5);
			else if ("booleanValue" in e) this.Ft(t, 10), t.Mt(+!!e.booleanValue);
			else if ("integerValue" in e) this.Ft(t, 15), t.Mt(I(e.integerValue));
			else if ("doubleValue" in e) {
				let n = I(e.doubleValue);
				isNaN(n) ? this.Ft(t, 13) : (this.Ft(t, 15), rc(n) ? t.Mt(0) : t.Mt(n));
			} else if ("timestampValue" in e) {
				let n = e.timestampValue;
				this.Ft(t, 20), typeof n == "string" && (n = dc(n)), t.xt(`${n.seconds || ""}`), t.Mt(n.nanos || 0);
			} else if ("stringValue" in e) this.Ot(e.stringValue, t), this.Nt(t);
			else if ("bytesValue" in e) this.Ft(t, 30), t.Bt(fc(e.bytesValue)), this.Nt(t);
			else if ("referenceValue" in e) this.Lt(e.referenceValue, t);
			else if ("geoPointValue" in e) {
				let n = e.geoPointValue;
				this.Ft(t, 45), t.Mt(n.latitude || 0), t.Mt(n.longitude || 0);
			} else "mapValue" in e ? Pc(e) ? this.Ft(t, 2 ** 53 - 1) : Mc(e) ? this.kt(e.mapValue, t) : (this.qt(e.mapValue, t), this.Nt(t)) : "arrayValue" in e ? (this.Kt(e.arrayValue, t), this.Nt(t)) : j(19022, { Ut: e });
		}
		Ot(e, t) {
			this.Ft(t, 25), this.$t(e, t);
		}
		$t(e, t) {
			t.xt(e);
		}
		qt(e, t) {
			let n = e.fields || {};
			this.Ft(t, 55);
			for (let e of Object.keys(n)) this.Ot(e, t), this.Ct(n[e], t);
		}
		kt(e, t) {
			let n = e.fields || {};
			this.Ft(t, 53);
			let r = Hp, i = n[r].arrayValue?.values?.length || 0;
			this.Ft(t, 15), t.Mt(I(i)), this.Ot(r, t), this.Ct(n[r], t);
		}
		Kt(e, t) {
			let n = e.values || [];
			this.Ft(t, 50);
			for (let e of n) this.Ct(e, t);
		}
		Lt(e, t) {
			this.Ft(t, 37), H.fromName(e).path.forEach(((e) => {
				this.Ft(t, 60), this.$t(e, t);
			}));
		}
		Ft(e, t) {
			e.Mt(t);
		}
		Nt(e) {
			e.Mt(2);
		}
	}, Um.Wt = new Um(), Wm = class {
		constructor() {
			this.bn = new Gm();
		}
		addToCollectionParentIndex(e, t) {
			return this.bn.add(t), G.resolve();
		}
		getCollectionParents(e, t) {
			return G.resolve(this.bn.getEntries(t));
		}
		addFieldIndex(e, t) {
			return G.resolve();
		}
		deleteFieldIndex(e, t) {
			return G.resolve();
		}
		deleteAllFieldIndexes(e) {
			return G.resolve();
		}
		createTargetIndexes(e, t) {
			return G.resolve();
		}
		getDocumentsMatchingTarget(e, t) {
			return G.resolve(null);
		}
		getIndexType(e, t) {
			return G.resolve(0);
		}
		getFieldIndexes(e, t) {
			return G.resolve([]);
		}
		getNextCollectionGroupToUpdate(e) {
			return G.resolve(null);
		}
		getMinOffset(e, t) {
			return G.resolve(Xf.min());
		}
		getMinOffsetFromCollectionGroup(e, t) {
			return G.resolve(Xf.min());
		}
		updateCollectionGroup(e, t, n) {
			return G.resolve();
		}
		updateIndexEntries(e, t) {
			return G.resolve();
		}
	}, Gm = class {
		constructor() {
			this.index = {};
		}
		add(e) {
			let t = e.lastSegment(), n = e.popLast(), r = this.index[t] || new q(V.comparator), i = !r.has(n);
			return this.index[t] = r.add(n), i;
		}
		has(e) {
			let t = e.lastSegment(), n = e.popLast(), r = this.index[t];
			return r && r.has(n);
		}
		getEntries(e) {
			return (this.index[e] || new q(V.comparator)).toArray();
		}
	}, Km = {
		didRun: !1,
		sequenceNumbersCollected: 0,
		targetsRemoved: 0,
		documentsRemoved: 0
	}, qm = 41943040, Jm = class e {
		static withCacheSize(t) {
			return new e(t, e.DEFAULT_COLLECTION_PERCENTILE, e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
		}
		constructor(e, t, n) {
			this.cacheSizeCollectionThreshold = e, this.percentileToCollect = t, this.maximumSequenceNumbersToCollect = n;
		}
	}, Jm.DEFAULT_COLLECTION_PERCENTILE = 10, Jm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, Jm.DEFAULT = new Jm(qm, Jm.DEFAULT_COLLECTION_PERCENTILE, Jm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), Jm.DISABLED = new Jm(-1, 0, 0), Ym = class e {
		constructor(e) {
			this.sr = e;
		}
		next() {
			return this.sr += 2, this.sr;
		}
		static _r() {
			return new e(0);
		}
		static ar() {
			return new e(-1);
		}
	}, Xm = "LruGarbageCollector", Zm = 1048576, Qm = class {
		constructor(e) {
			this.Pr = e, this.buffer = new q(Eu), this.Tr = 0;
		}
		Er() {
			return ++this.Tr;
		}
		Ir(e) {
			let t = [e, this.Er()];
			if (this.buffer.size < this.Pr) this.buffer = this.buffer.add(t);
			else {
				let e = this.buffer.last();
				Eu(t, e) < 0 && (this.buffer = this.buffer.delete(e).add(t));
			}
		}
		get maxValue() {
			return this.buffer.last()[0];
		}
	}, $m = class {
		constructor(e, t, n) {
			this.garbageCollector = e, this.asyncQueue = t, this.localStore = n, this.Rr = null;
		}
		start() {
			this.garbageCollector.params.cacheSizeCollectionThreshold !== -1 && this.Ar(6e4);
		}
		stop() {
			this.Rr &&= (this.Rr.cancel(), null);
		}
		get started() {
			return this.Rr !== null;
		}
		Ar(e) {
			A(Xm, `Garbage collection scheduled in ${e}ms`), this.Rr = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection", e, (async () => {
				this.Rr = null;
				try {
					await this.localStore.collectGarbage(this.garbageCollector);
				} catch (e) {
					tc(e) ? A(Xm, "Ignoring IndexedDB error during garbage collection: ", e) : await $s(e);
				}
				await this.Ar(3e5);
			}));
		}
	}, eh = class {
		constructor(e, t) {
			this.Vr = e, this.params = t;
		}
		calculateTargetCount(e, t) {
			return this.Vr.dr(e).next(((e) => Math.floor(t / 100 * e)));
		}
		nthSequenceNumber(e, t) {
			if (t === 0) return G.resolve($f.ce);
			let n = new Qm(t);
			return this.Vr.forEachTarget(e, ((e) => n.Ir(e.sequenceNumber))).next((() => this.Vr.mr(e, ((e) => n.Ir(e))))).next((() => n.maxValue));
		}
		removeTargets(e, t, n) {
			return this.Vr.removeTargets(e, t, n);
		}
		removeOrphanedDocuments(e, t) {
			return this.Vr.removeOrphanedDocuments(e, t);
		}
		collect(e, t) {
			return this.params.cacheSizeCollectionThreshold === -1 ? (A("LruGarbageCollector", "Garbage collection skipped; disabled"), G.resolve(Km)) : this.getCacheSize(e).next(((n) => n < this.params.cacheSizeCollectionThreshold ? (A("LruGarbageCollector", `Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`), Km) : this.gr(e, t)));
		}
		getCacheSize(e) {
			return this.Vr.getCacheSize(e);
		}
		gr(e, t) {
			let n, r, i, a, o, s, c, l = Date.now();
			return this.calculateTargetCount(e, this.params.percentileToCollect).next(((t) => (t > this.params.maximumSequenceNumbersToCollect ? (A("LruGarbageCollector", `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`), r = this.params.maximumSequenceNumbersToCollect) : r = t, a = Date.now(), this.nthSequenceNumber(e, r)))).next(((r) => (n = r, o = Date.now(), this.removeTargets(e, n, t)))).next(((t) => (i = t, s = Date.now(), this.removeOrphanedDocuments(e, n)))).next(((e) => (c = Date.now(), Ns() <= b.DEBUG && A("LruGarbageCollector", `LRU Garbage Collection\n\tCounted targets in ${a - l}ms\n\tDetermined least recently used ${r} in ` + (o - a) + `ms
\tRemoved ${i} targets in ` + (s - o) + `ms
\tRemoved ${e} documents in ` + (c - s) + `ms
Total Duration: ${c - l}ms`), G.resolve({
				didRun: !0,
				sequenceNumbersCollected: r,
				targetsRemoved: i,
				documentsRemoved: e
			}))));
		}
	}, th = class {
		constructor() {
			this.changes = new im(((e) => e.toString()), ((e, t) => e.isEqual(t))), this.changesApplied = !1;
		}
		addEntry(e) {
			this.assertNotApplied(), this.changes.set(e.key, e);
		}
		removeEntry(e, t) {
			this.assertNotApplied(), this.changes.set(e, Wp.newInvalidDocument(e).setReadTime(t));
		}
		getEntry(e, t) {
			this.assertNotApplied();
			let n = this.changes.get(t);
			return n === void 0 ? this.getFromCache(e, t) : G.resolve(n);
		}
		getEntries(e, t) {
			return this.getAllFromCache(e, t);
		}
		apply(e) {
			return this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(e);
		}
		assertNotApplied() {}
	}, nh = class {
		constructor(e, t) {
			this.overlayedDocument = e, this.mutatedFields = t;
		}
	}, rh = class {
		constructor(e, t, n, r) {
			this.remoteDocumentCache = e, this.mutationQueue = t, this.documentOverlayCache = n, this.indexManager = r;
		}
		getDocument(e, t) {
			let n = null;
			return this.documentOverlayCache.getOverlay(e, t).next(((r) => (n = r, this.remoteDocumentCache.getEntry(e, t)))).next(((e) => (n !== null && Pl(n.mutation, e, Dp.empty(), U.now()), e)));
		}
		getDocuments(e, t) {
			return this.remoteDocumentCache.getEntries(e, t).next(((t) => this.getLocalViewOfDocuments(e, t, L()).next((() => t))));
		}
		getLocalViewOfDocuments(e, t, n = L()) {
			let r = gl();
			return this.populateOverlays(e, r, t).next((() => this.computeViews(e, t, r, n).next(((e) => {
				let t = ml();
				return e.forEach(((e, n) => {
					t = t.insert(e, n.overlayedDocument);
				})), t;
			}))));
		}
		getOverlayedDocuments(e, t) {
			let n = gl();
			return this.populateOverlays(e, n, t).next((() => this.computeViews(e, t, n, L())));
		}
		populateOverlays(e, t, n) {
			let r = [];
			return n.forEach(((e) => {
				t.has(e) || r.push(e);
			})), this.documentOverlayCache.getOverlays(e, r).next(((e) => {
				e.forEach(((e, n) => {
					t.set(e, n);
				}));
			}));
		}
		computeViews(e, t, n, r) {
			let i = pl(), a = vl(), o = function() {
				return vl();
			}();
			return t.forEach(((e, t) => {
				let o = n.get(t.key);
				r.has(t.key) && (o === void 0 || o.mutation instanceof ym) ? i = i.insert(t.key, t) : o === void 0 ? a.set(t.key, Dp.empty()) : (a.set(t.key, o.mutation.getFieldMask()), Pl(o.mutation, t, o.mutation.getFieldMask(), U.now()));
			})), this.recalculateAndSaveOverlays(e, i).next(((e) => (e.forEach(((e, t) => a.set(e, t))), t.forEach(((e, t) => o.set(e, new nh(t, a.get(e) ?? null)))), o)));
		}
		recalculateAndSaveOverlays(e, t) {
			let n = vl(), r = new K(((e, t) => e - t)), i = L();
			return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e, t).next(((e) => {
				for (let i of e) i.keys().forEach(((e) => {
					let a = t.get(e);
					if (a === null) return;
					let o = n.get(e) || Dp.empty();
					o = i.applyToLocalView(a, o), n.set(e, o);
					let s = (r.get(i.batchId) || L()).add(e);
					r = r.insert(i.batchId, s);
				}));
			})).next((() => {
				let a = [], o = r.getReverseIterator();
				for (; o.hasNext();) {
					let r = o.getNext(), s = r.key, c = r.value, l = _l();
					c.forEach(((e) => {
						if (!i.has(e)) {
							let r = Ml(t.get(e), n.get(e));
							r !== null && l.set(e, r), i = i.add(e);
						}
					})), a.push(this.documentOverlayCache.saveOverlays(e, s, l));
				}
				return G.waitFor(a);
			})).next((() => n));
		}
		recalculateAndSaveOverlaysForDocumentKeys(e, t) {
			return this.remoteDocumentCache.getEntries(e, t).next(((t) => this.recalculateAndSaveOverlays(e, t)));
		}
		getDocumentsMatchingQuery(e, t, n, r) {
			return $c(t) ? this.getDocumentsMatchingDocumentQuery(e, t.path) : el(t) ? this.getDocumentsMatchingCollectionGroupQuery(e, t, n, r) : this.getDocumentsMatchingCollectionQuery(e, t, n, r);
		}
		getNextDocuments(e, t, n, r) {
			return this.remoteDocumentCache.getAllFromCollectionGroup(e, t, n, r).next(((i) => {
				let a = r - i.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(e, t, n.largestBatchId, r - i.size) : G.resolve(gl()), o = Jf, s = i;
				return a.next(((t) => G.forEach(t, ((t, n) => (o < n.largestBatchId && (o = n.largestBatchId), i.get(t) ? G.resolve() : this.remoteDocumentCache.getEntry(e, t).next(((e) => {
					s = s.insert(t, e);
				}))))).next((() => this.populateOverlays(e, t, i))).next((() => this.computeViews(e, s, t, L()))).next(((e) => ({
					batchId: o,
					changes: hl(e)
				})))));
			}));
		}
		getDocumentsMatchingDocumentQuery(e, t) {
			return this.getDocument(e, new H(t)).next(((e) => {
				let t = ml();
				return e.isFoundDocument() && (t = t.insert(e.key, e)), t;
			}));
		}
		getDocumentsMatchingCollectionGroupQuery(e, t, n, r) {
			let i = t.collectionGroup, a = ml();
			return this.indexManager.getCollectionParents(e, i).next(((o) => G.forEach(o, ((o) => {
				let s = function(e, t) {
					return new rm(t, null, e.explicitOrderBy.slice(), e.filters.slice(), e.limit, e.limitType, e.startAt, e.endAt);
				}(t, o.child(i));
				return this.getDocumentsMatchingCollectionQuery(e, s, n, r).next(((e) => {
					e.forEach(((e, t) => {
						a = a.insert(e, t);
					}));
				}));
			})).next((() => a))));
		}
		getDocumentsMatchingCollectionQuery(e, t, n, r) {
			let i;
			return this.documentOverlayCache.getOverlaysForCollection(e, t.path, n.largestBatchId).next(((a) => (i = a, this.remoteDocumentCache.getDocumentsMatchingQuery(e, t, n, i, r)))).next(((e) => {
				i.forEach(((t, n) => {
					let r = n.getKey();
					e.get(r) === null && (e = e.insert(r, Wp.newInvalidDocument(r)));
				}));
				let n = ml();
				return e.forEach(((e, r) => {
					let a = i.get(e);
					a !== void 0 && Pl(a.mutation, r, Dp.empty(), U.now()), ll(t, r) && (n = n.insert(e, r));
				})), n;
			}));
		}
	}, ih = class {
		constructor(e) {
			this.serializer = e, this.Nr = /* @__PURE__ */ new Map(), this.Br = /* @__PURE__ */ new Map();
		}
		getBundleMetadata(e, t) {
			return G.resolve(this.Nr.get(t));
		}
		saveBundleMetadata(e, t) {
			return this.Nr.set(t.id, function(e) {
				return {
					id: e.id,
					version: e.version,
					createTime: Zl(e.createTime)
				};
			}(t)), G.resolve();
		}
		getNamedQuery(e, t) {
			return G.resolve(this.Br.get(t));
		}
		saveNamedQuery(e, t) {
			return this.Br.set(t.name, function(e) {
				return {
					name: e.name,
					query: Tu(e.bundledQuery),
					readTime: Zl(e.readTime)
				};
			}(t)), G.resolve();
		}
	}, ah = class {
		constructor() {
			this.overlays = new K(H.comparator), this.Lr = /* @__PURE__ */ new Map();
		}
		getOverlay(e, t) {
			return G.resolve(this.overlays.get(t));
		}
		getOverlays(e, t) {
			let n = gl();
			return G.forEach(t, ((t) => this.getOverlay(e, t).next(((e) => {
				e !== null && n.set(t, e);
			})))).next((() => n));
		}
		saveOverlays(e, t, n) {
			return n.forEach(((n, r) => {
				this.St(e, t, r);
			})), G.resolve();
		}
		removeOverlaysForBatchId(e, t, n) {
			let r = this.Lr.get(n);
			return r !== void 0 && (r.forEach(((e) => this.overlays = this.overlays.remove(e))), this.Lr.delete(n)), G.resolve();
		}
		getOverlaysForCollection(e, t, n) {
			let r = gl(), i = t.length + 1, a = new H(t.child("")), o = this.overlays.getIteratorFrom(a);
			for (; o.hasNext();) {
				let e = o.getNext().value, a = e.getKey();
				if (!t.isPrefixOf(a.path)) break;
				a.path.length === i && e.largestBatchId > n && r.set(e.getKey(), e);
			}
			return G.resolve(r);
		}
		getOverlaysForCollectionGroup(e, t, n, r) {
			let i = new K(((e, t) => e - t)), a = this.overlays.getIterator();
			for (; a.hasNext();) {
				let e = a.getNext().value;
				if (e.getKey().getCollectionGroup() === t && e.largestBatchId > n) {
					let t = i.get(e.largestBatchId);
					t === null && (t = gl(), i = i.insert(e.largestBatchId, t)), t.set(e.getKey(), e);
				}
			}
			let o = gl(), s = i.getIterator();
			for (; s.hasNext() && (s.getNext().value.forEach(((e, t) => o.set(e, t))), !(o.size() >= r)););
			return G.resolve(o);
		}
		St(e, t, n) {
			let r = this.overlays.get(n.key);
			if (r !== null) {
				let e = this.Lr.get(r.largestBatchId).delete(n.key);
				this.Lr.set(r.largestBatchId, e);
			}
			this.overlays = this.overlays.insert(n.key, new wm(t, n));
			let i = this.Lr.get(t);
			i === void 0 && (i = L(), this.Lr.set(t, i)), this.Lr.set(t, i.add(n.key));
		}
	}, oh = class {
		constructor() {
			this.sessionToken = kp.EMPTY_BYTE_STRING;
		}
		getSessionToken(e) {
			return G.resolve(this.sessionToken);
		}
		setSessionToken(e, t) {
			return this.sessionToken = t, G.resolve();
		}
	}, sh = class {
		constructor() {
			this.kr = new q(Z.qr), this.Kr = new q(Z.Ur);
		}
		isEmpty() {
			return this.kr.isEmpty();
		}
		addReference(e, t) {
			let n = new Z(e, t);
			this.kr = this.kr.add(n), this.Kr = this.Kr.add(n);
		}
		$r(e, t) {
			e.forEach(((e) => this.addReference(e, t)));
		}
		removeReference(e, t) {
			this.Wr(new Z(e, t));
		}
		Qr(e, t) {
			e.forEach(((e) => this.removeReference(e, t)));
		}
		Gr(e) {
			let t = new H(new V([])), n = new Z(t, e), r = new Z(t, e + 1), i = [];
			return this.Kr.forEachInRange([n, r], ((e) => {
				this.Wr(e), i.push(e.key);
			})), i;
		}
		zr() {
			this.kr.forEach(((e) => this.Wr(e)));
		}
		Wr(e) {
			this.kr = this.kr.delete(e), this.Kr = this.Kr.delete(e);
		}
		jr(e) {
			let t = new H(new V([])), n = new Z(t, e), r = new Z(t, e + 1), i = L();
			return this.Kr.forEachInRange([n, r], ((e) => {
				i = i.add(e.key);
			})), i;
		}
		containsKey(e) {
			let t = new Z(e, 0), n = this.kr.firstAfterOrEqual(t);
			return n !== null && e.isEqual(n.key);
		}
	}, Z = class {
		constructor(e, t) {
			this.key = e, this.Jr = t;
		}
		static qr(e, t) {
			return H.comparator(e.key, t.key) || P(e.Jr, t.Jr);
		}
		static Ur(e, t) {
			return P(e.Jr, t.Jr) || H.comparator(e.key, t.key);
		}
	}, ch = class {
		constructor(e, t) {
			this.indexManager = e, this.referenceDelegate = t, this.mutationQueue = [], this.Yn = 1, this.Hr = new q(Z.qr);
		}
		checkEmpty(e) {
			return G.resolve(this.mutationQueue.length === 0);
		}
		addMutationBatch(e, t, n, r) {
			let i = this.Yn;
			this.Yn++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
			let a = new Sm(i, t, n, r);
			this.mutationQueue.push(a);
			for (let t of r) this.Hr = this.Hr.add(new Z(t.key, i)), this.indexManager.addToCollectionParentIndex(e, t.key.path.popLast());
			return G.resolve(a);
		}
		lookupMutationBatch(e, t) {
			return G.resolve(this.Zr(t));
		}
		getNextMutationBatchAfterBatchId(e, t) {
			let n = t + 1, r = this.Xr(n), i = r < 0 ? 0 : r;
			return G.resolve(this.mutationQueue.length > i ? this.mutationQueue[i] : null);
		}
		getHighestUnacknowledgedBatchId() {
			return G.resolve(this.mutationQueue.length === 0 ? ep : this.Yn - 1);
		}
		getAllMutationBatches(e) {
			return G.resolve(this.mutationQueue.slice());
		}
		getAllMutationBatchesAffectingDocumentKey(e, t) {
			let n = new Z(t, 0), r = new Z(t, Infinity), i = [];
			return this.Hr.forEachInRange([n, r], ((e) => {
				let t = this.Zr(e.Jr);
				i.push(t);
			})), G.resolve(i);
		}
		getAllMutationBatchesAffectingDocumentKeys(e, t) {
			let n = new q(P);
			return t.forEach(((e) => {
				let t = new Z(e, 0), r = new Z(e, Infinity);
				this.Hr.forEachInRange([t, r], ((e) => {
					n = n.add(e.Jr);
				}));
			})), G.resolve(this.Yr(n));
		}
		getAllMutationBatchesAffectingQuery(e, t) {
			let n = t.path, r = n.length + 1, i = n;
			H.isDocumentKey(i) || (i = i.child(""));
			let a = new Z(new H(i), 0), o = new q(P);
			return this.Hr.forEachWhile(((e) => {
				let t = e.key.path;
				return !!n.isPrefixOf(t) && (t.length === r && (o = o.add(e.Jr)), !0);
			}), a), G.resolve(this.Yr(o));
		}
		Yr(e) {
			let t = [];
			return e.forEach(((e) => {
				let n = this.Zr(e);
				n !== null && t.push(n);
			})), t;
		}
		removeMutationBatch(e, t) {
			M(this.ei(t.batchId, "removed") === 0, 55003), this.mutationQueue.shift();
			let n = this.Hr;
			return G.forEach(t.mutations, ((r) => {
				let i = new Z(r.key, t.batchId);
				return n = n.delete(i), this.referenceDelegate.markPotentiallyOrphaned(e, r.key);
			})).next((() => {
				this.Hr = n;
			}));
		}
		nr(e) {}
		containsKey(e, t) {
			let n = new Z(t, 0), r = this.Hr.firstAfterOrEqual(n);
			return G.resolve(t.isEqual(r && r.key));
		}
		performConsistencyCheck(e) {
			return this.mutationQueue.length, G.resolve();
		}
		ei(e, t) {
			return this.Xr(e);
		}
		Xr(e) {
			return this.mutationQueue.length === 0 ? 0 : e - this.mutationQueue[0].batchId;
		}
		Zr(e) {
			let t = this.Xr(e);
			return t < 0 || t >= this.mutationQueue.length ? null : this.mutationQueue[t];
		}
	}, lh = class {
		constructor(e) {
			this.ti = e, this.docs = function() {
				return new K(H.comparator);
			}(), this.size = 0;
		}
		setIndexManager(e) {
			this.indexManager = e;
		}
		addEntry(e, t) {
			let n = t.key, r = this.docs.get(n), i = r ? r.size : 0, a = this.ti(t);
			return this.docs = this.docs.insert(n, {
				document: t.mutableCopy(),
				size: a
			}), this.size += a - i, this.indexManager.addToCollectionParentIndex(e, n.path.popLast());
		}
		removeEntry(e) {
			let t = this.docs.get(e);
			t && (this.docs = this.docs.remove(e), this.size -= t.size);
		}
		getEntry(e, t) {
			let n = this.docs.get(t);
			return G.resolve(n ? n.document.mutableCopy() : Wp.newInvalidDocument(t));
		}
		getEntries(e, t) {
			let n = pl();
			return t.forEach(((e) => {
				let t = this.docs.get(e);
				n = n.insert(e, t ? t.document.mutableCopy() : Wp.newInvalidDocument(e));
			})), G.resolve(n);
		}
		getDocumentsMatchingQuery(e, t, n, r) {
			let i = pl(), a = t.path, o = new H(a.child("__id-9223372036854775808__")), s = this.docs.getIteratorFrom(o);
			for (; s.hasNext();) {
				let { key: e, value: { document: o } } = s.getNext();
				if (!a.isPrefixOf(e.path)) break;
				e.path.length > a.length + 1 || Qs(Zs(o), n) <= 0 || (r.has(o.key) || ll(t, o)) && (i = i.insert(o.key, o.mutableCopy()));
			}
			return G.resolve(i);
		}
		getAllFromCollectionGroup(e, t, n, r) {
			j(9500);
		}
		ni(e, t) {
			return G.forEach(this.docs, ((e) => t(e)));
		}
		newChangeBuffer(e) {
			return new uh(this);
		}
		getSize(e) {
			return G.resolve(this.size);
		}
	}, uh = class extends th {
		constructor(e) {
			super(), this.Mr = e;
		}
		applyChanges(e) {
			let t = [];
			return this.changes.forEach(((n, r) => {
				r.isValidDocument() ? t.push(this.Mr.addEntry(e, r)) : this.Mr.removeEntry(n);
			})), G.waitFor(t);
		}
		getFromCache(e, t) {
			return this.Mr.getEntry(e, t);
		}
		getAllFromCache(e, t) {
			return this.Mr.getEntries(e, t);
		}
	}, dh = class {
		constructor(e) {
			this.persistence = e, this.ri = new im(((e) => qc(e)), Jc), this.lastRemoteSnapshotVersion = W.min(), this.highestTargetId = 0, this.ii = 0, this.si = new sh(), this.targetCount = 0, this.oi = Ym._r();
		}
		forEachTarget(e, t) {
			return this.ri.forEach(((e, n) => t(n))), G.resolve();
		}
		getLastRemoteSnapshotVersion(e) {
			return G.resolve(this.lastRemoteSnapshotVersion);
		}
		getHighestSequenceNumber(e) {
			return G.resolve(this.ii);
		}
		allocateTargetId(e) {
			return this.highestTargetId = this.oi.next(), G.resolve(this.highestTargetId);
		}
		setTargetsMetadata(e, t, n) {
			return n && (this.lastRemoteSnapshotVersion = n), t > this.ii && (this.ii = t), G.resolve();
		}
		lr(e) {
			this.ri.set(e.target, e);
			let t = e.targetId;
			t > this.highestTargetId && (this.oi = new Ym(t), this.highestTargetId = t), e.sequenceNumber > this.ii && (this.ii = e.sequenceNumber);
		}
		addTargetData(e, t) {
			return this.lr(t), this.targetCount += 1, G.resolve();
		}
		updateTargetData(e, t) {
			return this.lr(t), G.resolve();
		}
		removeTargetData(e, t) {
			return this.ri.delete(t.target), this.si.Gr(t.targetId), --this.targetCount, G.resolve();
		}
		removeTargets(e, t, n) {
			let r = 0, i = [];
			return this.ri.forEach(((a, o) => {
				o.sequenceNumber <= t && n.get(o.targetId) === null && (this.ri.delete(a), i.push(this.removeMatchingKeysForTargetId(e, o.targetId)), r++);
			})), G.waitFor(i).next((() => r));
		}
		getTargetCount(e) {
			return G.resolve(this.targetCount);
		}
		getTargetData(e, t) {
			let n = this.ri.get(t) || null;
			return G.resolve(n);
		}
		addMatchingKeys(e, t, n) {
			return this.si.$r(t, n), G.resolve();
		}
		removeMatchingKeys(e, t, n) {
			this.si.Qr(t, n);
			let r = this.persistence.referenceDelegate, i = [];
			return r && t.forEach(((t) => {
				i.push(r.markPotentiallyOrphaned(e, t));
			})), G.waitFor(i);
		}
		removeMatchingKeysForTargetId(e, t) {
			return this.si.Gr(t), G.resolve();
		}
		getMatchingKeysForTargetId(e, t) {
			let n = this.si.jr(t);
			return G.resolve(n);
		}
		containsKey(e, t) {
			return G.resolve(this.si.containsKey(t));
		}
	}, fh = class {
		constructor(e, t) {
			this._i = {}, this.overlays = {}, this.ai = new $f(0), this.ui = !1, this.ui = !0, this.ci = new oh(), this.referenceDelegate = e(this), this.li = new dh(this), this.indexManager = new Wm(), this.remoteDocumentCache = function(e) {
				return new lh(e);
			}(((e) => this.referenceDelegate.hi(e))), this.serializer = new Hm(t), this.Pi = new ih(this.serializer);
		}
		start() {
			return Promise.resolve();
		}
		shutdown() {
			return this.ui = !1, Promise.resolve();
		}
		get started() {
			return this.ui;
		}
		setDatabaseDeletedListener() {}
		setNetworkEnabled() {}
		getIndexManager(e) {
			return this.indexManager;
		}
		getDocumentOverlayCache(e) {
			let t = this.overlays[e.toKey()];
			return t || (t = new ah(), this.overlays[e.toKey()] = t), t;
		}
		getMutationQueue(e, t) {
			let n = this._i[e.toKey()];
			return n || (n = new ch(t, this.referenceDelegate), this._i[e.toKey()] = n), n;
		}
		getGlobalsCache() {
			return this.ci;
		}
		getTargetCache() {
			return this.li;
		}
		getRemoteDocumentCache() {
			return this.remoteDocumentCache;
		}
		getBundleCache() {
			return this.Pi;
		}
		runTransaction(e, t, n) {
			A("MemoryPersistence", "Starting transaction:", e);
			let r = new ph(this.ai.next());
			return this.referenceDelegate.Ti(), n(r).next(((e) => this.referenceDelegate.Ei(r).next((() => e)))).toPromise().then(((e) => (r.raiseOnCommittedEvent(), e)));
		}
		Ii(e, t) {
			return G.or(Object.values(this._i).map(((n) => () => n.containsKey(e, t))));
		}
	}, ph = class extends Qf {
		constructor(e) {
			super(), this.currentSequenceNumber = e;
		}
	}, mh = class e {
		constructor(e) {
			this.persistence = e, this.Ri = new sh(), this.Ai = null;
		}
		static Vi(t) {
			return new e(t);
		}
		get di() {
			if (this.Ai) return this.Ai;
			throw j(60996);
		}
		addReference(e, t, n) {
			return this.Ri.addReference(n, t), this.di.delete(n.toString()), G.resolve();
		}
		removeReference(e, t, n) {
			return this.Ri.removeReference(n, t), this.di.add(n.toString()), G.resolve();
		}
		markPotentiallyOrphaned(e, t) {
			return this.di.add(t.toString()), G.resolve();
		}
		removeTarget(e, t) {
			this.Ri.Gr(t.targetId).forEach(((e) => this.di.add(e.toString())));
			let n = this.persistence.getTargetCache();
			return n.getMatchingKeysForTargetId(e, t.targetId).next(((e) => {
				e.forEach(((e) => this.di.add(e.toString())));
			})).next((() => n.removeTargetData(e, t)));
		}
		Ti() {
			this.Ai = /* @__PURE__ */ new Set();
		}
		Ei(e) {
			let t = this.persistence.getRemoteDocumentCache().newChangeBuffer();
			return G.forEach(this.di, ((n) => {
				let r = H.fromPath(n);
				return this.mi(e, r).next(((e) => {
					e || t.removeEntry(r, W.min());
				}));
			})).next((() => (this.Ai = null, t.apply(e))));
		}
		updateLimboDocument(e, t) {
			return this.mi(e, t).next(((e) => {
				e ? this.di.delete(t.toString()) : this.di.add(t.toString());
			}));
		}
		hi(e) {
			return 0;
		}
		mi(e, t) {
			return G.or([
				() => G.resolve(this.Ri.containsKey(t)),
				() => this.persistence.getTargetCache().containsKey(e, t),
				() => this.persistence.Ii(e, t)
			]);
		}
	}, hh = class e {
		constructor(e, t) {
			this.persistence = e, this.fi = new im(((e) => ac(e.path)), ((e, t) => e.isEqual(t))), this.garbageCollector = Du(this, t);
		}
		static Vi(t, n) {
			return new e(t, n);
		}
		Ti() {}
		Ei(e) {
			return G.resolve();
		}
		forEachTarget(e, t) {
			return this.persistence.getTargetCache().forEachTarget(e, t);
		}
		dr(e) {
			let t = this.pr(e);
			return this.persistence.getTargetCache().getTargetCount(e).next(((e) => t.next(((t) => e + t))));
		}
		pr(e) {
			let t = 0;
			return this.mr(e, ((e) => {
				t++;
			})).next((() => t));
		}
		mr(e, t) {
			return G.forEach(this.fi, ((n, r) => this.wr(e, n, r).next(((e) => e ? G.resolve() : t(r)))));
		}
		removeTargets(e, t, n) {
			return this.persistence.getTargetCache().removeTargets(e, t, n);
		}
		removeOrphanedDocuments(e, t) {
			let n = 0, r = this.persistence.getRemoteDocumentCache(), i = r.newChangeBuffer();
			return r.ni(e, ((r) => this.wr(e, r, t).next(((e) => {
				e || (n++, i.removeEntry(r, W.min()));
			})))).next((() => i.apply(e))).next((() => n));
		}
		markPotentiallyOrphaned(e, t) {
			return this.fi.set(t, e.currentSequenceNumber), G.resolve();
		}
		removeTarget(e, t) {
			let n = t.withSequenceNumber(e.currentSequenceNumber);
			return this.persistence.getTargetCache().updateTargetData(e, n);
		}
		addReference(e, t, n) {
			return this.fi.set(n, e.currentSequenceNumber), G.resolve();
		}
		removeReference(e, t, n) {
			return this.fi.set(n, e.currentSequenceNumber), G.resolve();
		}
		updateLimboDocument(e, t) {
			return this.fi.set(t, e.currentSequenceNumber), G.resolve();
		}
		hi(e) {
			let t = e.key.toString().length;
			return e.isFoundDocument() && (t += Tc(e.data.value)), t;
		}
		wr(e, t, n) {
			return G.or([
				() => this.persistence.Ii(e, t),
				() => this.persistence.getTargetCache().containsKey(e, t),
				() => {
					let e = this.fi.get(t);
					return G.resolve(e !== void 0 && e > n);
				}
			]);
		}
		getCacheSize(e) {
			return this.persistence.getRemoteDocumentCache().getSize(e);
		}
	}, gh = class e {
		constructor(e, t, n, r) {
			this.targetId = e, this.fromCache = t, this.Ts = n, this.Es = r;
		}
		static Is(t, n) {
			let r = L(), i = L();
			for (let e of n.docChanges) switch (e.type) {
				case 0:
					r = r.add(e.doc.key);
					break;
				case 1: i = i.add(e.doc.key);
			}
			return new e(t, n.fromCache, r, i);
		}
	}, _h = class {
		constructor() {
			this._documentReadCount = 0;
		}
		get documentReadCount() {
			return this._documentReadCount;
		}
		incrementDocumentReadCount(e) {
			this._documentReadCount += e;
		}
	}, vh = class {
		constructor() {
			this.Rs = !1, this.As = !1, this.Vs = 100, this.ds = function() {
				return p() ? 8 : ec(o()) > 0 ? 6 : 4;
			}();
		}
		initialize(e, t) {
			this.fs = e, this.indexManager = t, this.Rs = !0;
		}
		getDocumentsMatchingQuery(e, t, n, r) {
			let i = { result: null };
			return this.gs(e, t).next(((e) => {
				i.result = e;
			})).next((() => {
				if (!i.result) return this.ps(e, t, r, n).next(((e) => {
					i.result = e;
				}));
			})).next((() => {
				if (i.result) return;
				let n = new _h();
				return this.ys(e, t, n).next(((r) => {
					if (i.result = r, this.As) return this.ws(e, t, n, r.size);
				}));
			})).next((() => i.result));
		}
		ws(e, t, n, r) {
			return n.documentReadCount < this.Vs ? (Ns() <= b.DEBUG && A("QueryEngine", "SDK will not create cache indexes for query:", cl(t), "since it only creates cache indexes for collection contains", "more than or equal to", this.Vs, "documents"), G.resolve()) : (Ns() <= b.DEBUG && A("QueryEngine", "Query:", cl(t), "scans", n.documentReadCount, "local documents and returns", r, "documents as results."), n.documentReadCount > this.ds * r ? (Ns() <= b.DEBUG && A("QueryEngine", "The SDK decides to create cache indexes for query:", cl(t), "as using cache indexes may help improve performance."), this.indexManager.createTargetIndexes(e, nl(t))) : G.resolve());
		}
		gs(e, t) {
			if (Qc(t)) return G.resolve(null);
			let n = nl(t);
			return this.indexManager.getIndexType(e, n).next(((r) => r === 0 ? null : (t.limit !== null && r === 1 && (t = al(t, null, "F"), n = nl(t)), this.indexManager.getDocumentsMatchingTarget(e, n).next(((r) => {
				let i = L(...r);
				return this.fs.getDocuments(e, i).next(((r) => this.indexManager.getMinOffset(e, n).next(((n) => {
					let a = this.Ss(t, r);
					return this.bs(t, a, i, n.readTime) ? this.gs(e, al(t, null, "F")) : this.Ds(e, a, t, n);
				}))));
			})))));
		}
		ps(e, t, n, r) {
			return Qc(t) || r.isEqual(W.min()) ? G.resolve(null) : this.fs.getDocuments(e, n).next(((i) => {
				let a = this.Ss(t, i);
				return this.bs(t, a, n, r) ? G.resolve(null) : (Ns() <= b.DEBUG && A("QueryEngine", "Re-using previous result from %s to execute query: %s", r.toString(), cl(t)), this.Ds(e, a, t, Xs(r, Jf)).next(((e) => e)));
			}));
		}
		Ss(e, t) {
			let n = new q(dl(e));
			return t.forEach(((t, r) => {
				ll(e, r) && (n = n.add(r));
			})), n;
		}
		bs(e, t, n, r) {
			if (e.limit === null) return !1;
			if (n.size !== t.size) return !0;
			let i = e.limitType === "F" ? t.last() : t.first();
			return !!i && (i.hasPendingWrites || i.version.compareTo(r) > 0);
		}
		ys(e, t, n) {
			return Ns() <= b.DEBUG && A("QueryEngine", "Using full collection scan to execute query:", cl(t)), this.fs.getDocumentsMatchingQuery(e, t, Xf.min(), n);
		}
		Ds(e, t, n, r) {
			return this.fs.getDocumentsMatchingQuery(e, n, r).next(((e) => (t.forEach(((t) => {
				e = e.insert(t.key, t);
			})), e)));
		}
	}, yh = "LocalStore", bh = 3e8, xh = class {
		constructor(e, t, n, r) {
			this.persistence = e, this.Cs = t, this.serializer = r, this.vs = new K(P), this.Fs = new im(((e) => qc(e)), Jc), this.Ms = /* @__PURE__ */ new Map(), this.xs = e.getRemoteDocumentCache(), this.li = e.getTargetCache(), this.Pi = e.getBundleCache(), this.Os(n);
		}
		Os(e) {
			this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e), this.indexManager = this.persistence.getIndexManager(e), this.mutationQueue = this.persistence.getMutationQueue(e, this.indexManager), this.localDocuments = new rh(this.xs, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.xs.setIndexManager(this.indexManager), this.Cs.initialize(this.localDocuments, this.indexManager);
		}
		collectGarbage(e) {
			return this.persistence.runTransaction("Collect garbage", "readwrite-primary", ((t) => e.collect(t, this.vs)));
		}
	}, Sh = class {
		constructor() {
			this.activeTargetIds = yl();
		}
		Qs(e) {
			this.activeTargetIds = this.activeTargetIds.add(e);
		}
		Gs(e) {
			this.activeTargetIds = this.activeTargetIds.delete(e);
		}
		Ws() {
			let e = {
				activeTargetIds: this.activeTargetIds.toArray(),
				updateTimeMs: Date.now()
			};
			return JSON.stringify(e);
		}
	}, Ch = class {
		constructor() {
			this.vo = new Sh(), this.Fo = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
		}
		addPendingMutation(e) {}
		updateMutationState(e, t, n) {}
		addLocalQueryTarget(e, t = !0) {
			return t && this.vo.Qs(e), this.Fo[e] || "not-current";
		}
		updateQueryState(e, t, n) {
			this.Fo[e] = t;
		}
		removeLocalQueryTarget(e) {
			this.vo.Gs(e);
		}
		isLocalQueryTarget(e) {
			return this.vo.activeTargetIds.has(e);
		}
		clearQueryState(e) {
			delete this.Fo[e];
		}
		getAllActiveQueryTargets() {
			return this.vo.activeTargetIds;
		}
		isActiveQueryTarget(e) {
			return this.vo.activeTargetIds.has(e);
		}
		start() {
			return this.vo = new Sh(), Promise.resolve();
		}
		handleUserChange(e, t, n) {}
		setOnlineState(e) {}
		shutdown() {}
		writeSequenceNumber(e) {}
		notifyBundleLoaded(e) {}
	}, wh = class {
		Mo(e) {}
		shutdown() {}
	}, Th = "ConnectivityMonitor", Eh = class {
		constructor() {
			this.xo = () => this.Oo(), this.No = () => this.Bo(), this.Lo = [], this.ko();
		}
		Mo(e) {
			this.Lo.push(e);
		}
		shutdown() {
			window.removeEventListener("online", this.xo), window.removeEventListener("offline", this.No);
		}
		ko() {
			window.addEventListener("online", this.xo), window.addEventListener("offline", this.No);
		}
		Oo() {
			A(Th, "Network connectivity changed: AVAILABLE");
			for (let e of this.Lo) e(0);
		}
		Bo() {
			A(Th, "Network connectivity changed: UNAVAILABLE");
			for (let e of this.Lo) e(1);
		}
		static v() {
			return typeof window < "u" && window.addEventListener !== void 0 && window.removeEventListener !== void 0;
		}
	}, Dh = null, Oh = "RestConnection", kh = {
		BatchGetDocuments: "batchGet",
		Commit: "commit",
		RunQuery: "runQuery",
		RunAggregationQuery: "runAggregationQuery",
		ExecutePipeline: "executePipeline"
	}, Ah = class {
		get qo() {
			return !1;
		}
		constructor(e) {
			this.databaseInfo = e, this.databaseId = e.databaseId;
			let t = e.ssl ? "https" : "http", n = encodeURIComponent(this.databaseId.projectId), r = encodeURIComponent(this.databaseId.database);
			this.Ko = t + "://" + e.host, this.Uo = `projects/${n}/databases/${r}`, this.$o = this.databaseId.database === Ip ? `project_id=${n}` : `project_id=${n}&database_id=${r}`;
		}
		Wo(e, t, n, r, i) {
			let a = zu(), o = this.Qo(e, t.toUriEncodedString());
			A(Oh, `Sending RPC '${e}' ${a}:`, o, n);
			let s = {
				"google-cloud-resource-prefix": this.Uo,
				"x-goog-request-params": this.$o
			};
			this.Go(s, r, i);
			let { host: c } = new URL(o), l = _(c);
			return this.zo(e, o, s, n, l).then(((t) => (A(Oh, `Received RPC '${e}' ${a}: `, t), t)), ((t) => {
				throw Fs(Oh, `RPC '${e}' ${a} failed with error: `, t, "url: ", o, "request:", n), t;
			}));
		}
		jo(e, t, n, r, i, a) {
			return this.Wo(e, t, n, r, i);
		}
		Go(e, t, n) {
			e["X-Goog-Api-Client"] = function() {
				return "gl-js/ fire/" + Of;
			}(), e["Content-Type"] = "text/plain", this.databaseInfo.appId && (e["X-Firebase-GMPID"] = this.databaseInfo.appId), t && t.headers.forEach(((t, n) => e[n] = t)), n && n.headers.forEach(((t, n) => e[n] = t));
		}
		Qo(e, t) {
			let n = kh[e], r = `${this.Ko}/v1/${t}:${n}`;
			return this.databaseInfo.apiKey && (r = `${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`), r;
		}
		terminate() {}
	}, jh = class {
		constructor(e) {
			this.Jo = e.Jo, this.Ho = e.Ho;
		}
		Zo(e) {
			this.Xo = e;
		}
		Yo(e) {
			this.e_ = e;
		}
		t_(e) {
			this.n_ = e;
		}
		onMessage(e) {
			this.r_ = e;
		}
		close() {
			this.Ho();
		}
		send(e) {
			this.Jo(e);
		}
		i_() {
			this.Xo();
		}
		s_() {
			this.e_();
		}
		o_(e) {
			this.n_(e);
		}
		__(e) {
			this.r_(e);
		}
	}, Q = "WebChannelConnection", Mh = (e, t, n) => {
		e.listen(t, ((e) => {
			try {
				n(e);
			} catch (e) {
				setTimeout((() => {
					throw e;
				}), 0);
			}
		}));
	}, Nh = class e extends Ah {
		constructor(e) {
			super(e), this.a_ = [], this.forceLongPolling = e.forceLongPolling, this.autoDetectLongPolling = e.autoDetectLongPolling, this.useFetchStreams = e.useFetchStreams, this.longPollingOptions = e.longPollingOptions;
		}
		static u_() {
			e.c_ ||= (Mh(ks(), Os.STAT_EVENT, ((e) => {
				e.stat === Ds.PROXY ? A(Q, "STAT_EVENT: detected buffering proxy") : e.stat === Ds.NOPROXY && A(Q, "STAT_EVENT: detected no buffering proxy");
			})), !0);
		}
		zo(e, t, n, r, i) {
			let a = zu();
			return new Promise(((i, o) => {
				let s = new Cs();
				s.setWithCredentials(!0), s.listenOnce(Ts.COMPLETE, (() => {
					try {
						switch (s.getLastErrorCode()) {
							case Es.NO_ERROR:
								let t = s.getResponseJson();
								A(Q, `XHR for RPC '${e}' ${a} received:`, JSON.stringify(t)), i(t);
								break;
							case Es.TIMEOUT:
								A(Q, `RPC '${e}' ${a} timed out`), o(new B(z.DEADLINE_EXCEEDED, "Request time out"));
								break;
							case Es.HTTP_ERROR:
								let n = s.getStatus();
								if (A(Q, `RPC '${e}' ${a} failed with status:`, n, "response text:", s.getResponseText()), n > 0) {
									let e = s.getResponseJson();
									Array.isArray(e) && (e = e[0]);
									let t = e?.error;
									t && t.status && t.message ? o(new B(function(e) {
										let t = e.toLowerCase().replace(/_/g, "-");
										return Object.values(z).indexOf(t) >= 0 ? t : z.UNKNOWN;
									}(t.status), t.message)) : o(new B(z.UNKNOWN, "Server responded with status " + s.getStatus()));
								} else o(new B(z.UNAVAILABLE, "Connection failed."));
								break;
							default: j(9055, {
								l_: e,
								streamId: a,
								h_: s.getLastErrorCode(),
								P_: s.getLastError()
							});
						}
					} finally {
						A(Q, `RPC '${e}' ${a} completed.`);
					}
				}));
				let c = JSON.stringify(r);
				A(Q, `RPC '${e}' ${a} sending request:`, r), s.send(t, "POST", c, n, 15);
			}));
		}
		T_(t, n, r) {
			let i = zu(), a = [
				this.Ko,
				"/",
				"google.firestore.v1.Firestore",
				"/",
				t,
				"/channel"
			], o = this.createWebChannelTransport(), s = {
				httpSessionIdParam: "gsessionid",
				initMessageHeaders: {},
				messageUrlParams: { database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}` },
				sendRawJson: !0,
				supportsCrossDomainXhr: !0,
				internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
				forceLongPolling: this.forceLongPolling,
				detectBufferingProxy: this.autoDetectLongPolling
			}, c = this.longPollingOptions.timeoutSeconds;
			c !== void 0 && (s.longPollingTimeout = Math.round(1e3 * c)), this.useFetchStreams && (s.useFetchStreams = !0), this.Go(s.initMessageHeaders, n, r), s.encodeInitMessageHeaders = !0;
			let l = a.join("");
			A(Q, `Creating RPC '${t}' stream ${i}: ${l}`, s);
			let u = o.createWebChannel(l, s);
			this.E_(u);
			let d = !1, f = !1, p = new jh({
				Jo: (e) => {
					f ? A(Q, `Not sending because RPC '${t}' stream ${i} is closed:`, e) : (d ||= (A(Q, `Opening RPC '${t}' stream ${i} transport.`), u.open(), !0), A(Q, `RPC '${t}' stream ${i} sending:`, e), u.send(e));
				},
				Ho: () => u.close()
			});
			return Mh(u, ws.EventType.OPEN, (() => {
				f || (A(Q, `RPC '${t}' stream ${i} transport opened.`), p.i_());
			})), Mh(u, ws.EventType.CLOSE, (() => {
				f || (f = !0, A(Q, `RPC '${t}' stream ${i} transport closed`), p.o_(), this.I_(u));
			})), Mh(u, ws.EventType.ERROR, ((e) => {
				f || (f = !0, Fs(Q, `RPC '${t}' stream ${i} transport errored. Name:`, e.name, "Message:", e.message), p.o_(new B(z.UNAVAILABLE, "The operation could not be completed")));
			})), Mh(u, ws.EventType.MESSAGE, ((e) => {
				if (!f) {
					let n = e.data[0];
					M(!!n, 16349);
					let r = n, a = r?.error || r[0]?.error;
					if (a) {
						A(Q, `RPC '${t}' stream ${i} received error:`, a);
						let e = a.status, n = function(e) {
							let t = Y[e];
							if (t !== void 0) return Vl(t);
						}(e), r = a.message;
						e === "NOT_FOUND" && r.includes("database") && r.includes("does not exist") && r.includes(this.databaseId.database) && Fs(`Database '${this.databaseId.database}' not found. Please check your project configuration.`), n === void 0 && (n = z.INTERNAL, r = "Unknown error status: " + e + " with message " + a.message), f = !0, p.o_(new B(n, r)), u.close();
					} else A(Q, `RPC '${t}' stream ${i} received:`, n), p.__(n);
				}
			})), e.u_(), setTimeout((() => {
				p.s_();
			}), 0), p;
		}
		terminate() {
			this.a_.forEach(((e) => e.close())), this.a_ = [];
		}
		E_(e) {
			this.a_.push(e);
		}
		I_(e) {
			this.a_ = this.a_.filter(((t) => t === e));
		}
		Go(e, t, n) {
			super.Go(e, t, n), this.databaseInfo.apiKey && (e["x-goog-api-key"] = this.databaseInfo.apiKey);
		}
		createWebChannelTransport() {
			return As();
		}
	}, Nh.c_ = !1, Ph = class {
		constructor(e, t, n = 1e3, r = 1.5, i = 6e4) {
			this.Ci = e, this.timerId = t, this.R_ = n, this.A_ = r, this.V_ = i, this.d_ = 0, this.m_ = null, this.f_ = Date.now(), this.reset();
		}
		reset() {
			this.d_ = 0;
		}
		g_() {
			this.d_ = this.V_;
		}
		p_(e) {
			this.cancel();
			let t = Math.floor(this.d_ + this.y_()), n = Math.max(0, Date.now() - this.f_), r = Math.max(0, t - n);
			r > 0 && A("ExponentialBackoff", `Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`), this.m_ = this.Ci.enqueueAfterDelay(this.timerId, r, (() => (this.f_ = Date.now(), e()))), this.d_ *= this.A_, this.d_ < this.R_ && (this.d_ = this.R_), this.d_ > this.V_ && (this.d_ = this.V_);
		}
		w_() {
			this.m_ !== null && (this.m_.skipDelay(), this.m_ = null);
		}
		cancel() {
			this.m_ !== null && (this.m_.cancel(), this.m_ = null);
		}
		y_() {
			return (Math.random() - .5) * this.d_;
		}
	}, Fh = "PersistentStream", Ih = class {
		constructor(e, t, n, r, i, a, o, s) {
			this.Ci = e, this.S_ = n, this.b_ = r, this.connection = i, this.authCredentialsProvider = a, this.appCheckCredentialsProvider = o, this.listener = s, this.state = 0, this.D_ = 0, this.C_ = null, this.v_ = null, this.stream = null, this.F_ = 0, this.M_ = new Ph(e, t);
		}
		x_() {
			return this.state === 1 || this.state === 5 || this.O_();
		}
		O_() {
			return this.state === 2 || this.state === 3;
		}
		start() {
			this.F_ = 0, this.state === 4 ? this.N_() : this.auth();
		}
		async stop() {
			this.x_() && await this.close(0);
		}
		B_() {
			this.state = 0, this.M_.reset();
		}
		L_() {
			this.O_() && this.C_ === null && (this.C_ = this.Ci.enqueueAfterDelay(this.S_, 6e4, (() => this.k_())));
		}
		q_(e) {
			this.K_(), this.stream.send(e);
		}
		async k_() {
			if (this.O_()) return this.close(0);
		}
		K_() {
			this.C_ &&= (this.C_.cancel(), null);
		}
		U_() {
			this.v_ &&= (this.v_.cancel(), null);
		}
		async close(e, t) {
			this.K_(), this.U_(), this.M_.cancel(), this.D_++, e === 4 ? t && t.code === z.RESOURCE_EXHAUSTED ? (Ps(t.toString()), Ps("Using maximum backoff delay to prevent overloading the backend."), this.M_.g_()) : t && t.code === z.UNAUTHENTICATED && this.state !== 3 && (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()) : this.M_.reset(), this.stream !== null && (this.W_(), this.stream.close(), this.stream = null), this.state = e, await this.listener.t_(t);
		}
		W_() {}
		auth() {
			this.state = 1;
			let e = this.Q_(this.D_), t = this.D_;
			Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then((([e, n]) => {
				this.D_ === t && this.G_(e, n);
			}), ((t) => {
				e((() => {
					let e = new B(z.UNKNOWN, "Fetching auth token failed: " + t.message);
					return this.z_(e);
				}));
			}));
		}
		G_(e, t) {
			let n = this.Q_(this.D_);
			this.stream = this.j_(e, t), this.stream.Zo((() => {
				n((() => this.listener.Zo()));
			})), this.stream.Yo((() => {
				n((() => (this.state = 2, this.v_ = this.Ci.enqueueAfterDelay(this.b_, 1e4, (() => (this.O_() && (this.state = 3), Promise.resolve()))), this.listener.Yo())));
			})), this.stream.t_(((e) => {
				n((() => this.z_(e)));
			})), this.stream.onMessage(((e) => {
				n((() => ++this.F_ == 1 ? this.J_(e) : this.onNext(e)));
			}));
		}
		N_() {
			this.state = 5, this.M_.p_((async () => {
				this.state = 0, this.start();
			}));
		}
		z_(e) {
			return A(Fh, `close with error: ${e}`), this.stream = null, this.close(4, e);
		}
		Q_(e) {
			return (t) => {
				this.Ci.enqueueAndForget((() => this.D_ === e ? t() : (A(Fh, "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve())));
			};
		}
	}, Lh = class extends Ih {
		constructor(e, t, n, r, i, a) {
			super(e, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", t, n, r, a), this.serializer = i;
		}
		j_(e, t) {
			return this.connection.T_("Listen", e, t);
		}
		J_(e) {
			return this.onNext(e);
		}
		onNext(e) {
			this.M_.reset();
			let t = cu(this.serializer, e), n = function(e) {
				if (!("targetChange" in e)) return W.min();
				let t = e.targetChange;
				return t.targetIds && t.targetIds.length ? W.min() : t.readTime ? Zl(t.readTime) : W.min();
			}(e);
			return this.listener.H_(t, n);
		}
		Z_(e) {
			let t = {};
			t.database = au(this.serializer), t.addTarget = function(e, t) {
				let n, r = t.target;
				if (n = Yc(r) ? { documents: du(e, r) } : { query: fu(e, r).ft }, n.targetId = t.targetId, t.resumeToken.approximateByteSize() > 0) {
					n.resumeToken = Yl(e, t.resumeToken);
					let r = ql(e, t.expectedCount);
					r !== null && (n.expectedCount = r);
				} else if (t.snapshotVersion.compareTo(W.min()) > 0) {
					n.readTime = Jl(e, t.snapshotVersion.toTimestamp());
					let r = ql(e, t.expectedCount);
					r !== null && (n.expectedCount = r);
				}
				return n;
			}(this.serializer, e);
			let n = mu(this.serializer, e);
			n && (t.labels = n), this.q_(t);
		}
		X_(e) {
			let t = {};
			t.database = au(this.serializer), t.removeTarget = e, this.q_(t);
		}
	}, Rh = class extends Ih {
		constructor(e, t, n, r, i, a) {
			super(e, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", t, n, r, a), this.serializer = i;
		}
		get Y_() {
			return this.F_ > 0;
		}
		start() {
			this.lastStreamToken = void 0, super.start();
		}
		W_() {
			this.Y_ && this.ea([]);
		}
		j_(e, t) {
			return this.connection.T_("Write", e, t);
		}
		J_(e) {
			return M(!!e.streamToken, 31322), this.lastStreamToken = e.streamToken, M(!e.writeResults || e.writeResults.length === 0, 55816), this.listener.ta();
		}
		onNext(e) {
			M(!!e.streamToken, 12678), this.lastStreamToken = e.streamToken, this.M_.reset();
			let t = uu(e.writeResults, e.commitTime), n = Zl(e.commitTime);
			return this.listener.na(n, t);
		}
		ra() {
			let e = {};
			e.database = au(this.serializer), this.q_(e);
		}
		ea(e) {
			let t = {
				streamToken: this.lastStreamToken,
				writes: e.map(((e) => lu(this.serializer, e)))
			};
			this.q_(t);
		}
	}, zh = class {}, Bh = class extends zh {
		constructor(e, t, n, r) {
			super(), this.authCredentials = e, this.appCheckCredentials = t, this.connection = n, this.serializer = r, this.ia = !1;
		}
		sa() {
			if (this.ia) throw new B(z.FAILED_PRECONDITION, "The client has already been terminated.");
		}
		Wo(e, t, n, r) {
			return this.sa(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then((([i, a]) => this.connection.Wo(e, $l(t, n), r, i, a))).catch(((e) => {
				throw e.name === "FirebaseError" ? (e.code === z.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e) : new B(z.UNKNOWN, e.toString());
			}));
		}
		jo(e, t, n, r, i) {
			return this.sa(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then((([a, o]) => this.connection.jo(e, $l(t, n), r, a, o, i))).catch(((e) => {
				throw e.name === "FirebaseError" ? (e.code === z.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e) : new B(z.UNKNOWN, e.toString());
			}));
		}
		terminate() {
			this.ia = !0, this.connection.terminate();
		}
	}, Vh = class {
		constructor(e, t) {
			this.asyncQueue = e, this.onlineStateHandler = t, this.state = "Unknown", this.oa = 0, this._a = null, this.aa = !0;
		}
		ua() {
			this.oa === 0 && (this.ca("Unknown"), this._a = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, (() => (this._a = null, this.la("Backend didn't respond within 10 seconds."), this.ca("Offline"), Promise.resolve()))));
		}
		ha(e) {
			this.state === "Online" ? this.ca("Unknown") : (this.oa++, this.oa >= 1 && (this.Pa(), this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`), this.ca("Offline")));
		}
		set(e) {
			this.Pa(), this.oa = 0, e === "Online" && (this.aa = !1), this.ca(e);
		}
		ca(e) {
			e !== this.state && (this.state = e, this.onlineStateHandler(e));
		}
		la(e) {
			let t = `Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
			this.aa ? (Ps(t), this.aa = !1) : A("OnlineStateTracker", t);
		}
		Pa() {
			this._a !== null && (this._a.cancel(), this._a = null);
		}
	}, Hh = "RemoteStore", Uh = class {
		constructor(e, t, n, r, i) {
			this.localStore = e, this.datastore = t, this.asyncQueue = n, this.remoteSyncer = {}, this.Ta = [], this.Ea = /* @__PURE__ */ new Map(), this.Ia = /* @__PURE__ */ new Set(), this.Ra = [], this.Aa = i, this.Aa.Mo(((e) => {
				n.enqueueAndForget((async () => {
					Qu(this) && (A(Hh, "Restarting streams for network reachability change."), await async function(e) {
						let t = N(e);
						t.Ia.add(4), await Gu(t), t.Va.set("Unknown"), t.Ia.delete(4), await Wu(t);
					}(this));
				}));
			})), this.Va = new Vh(n, r);
		}
	}, Wh = class e {
		constructor(e, t, n, r, i) {
			this.asyncQueue = e, this.timerId = t, this.targetTimeMs = n, this.op = r, this.removalCallback = i, this.deferred = new Af(), this.then = this.deferred.promise.then.bind(this.deferred.promise), this.deferred.promise.catch(((e) => {}));
		}
		get promise() {
			return this.deferred.promise;
		}
		static createAndSchedule(t, n, r, i, a) {
			let o = new e(t, n, Date.now() + r, i, a);
			return o.start(r), o;
		}
		start(e) {
			this.timerHandle = setTimeout((() => this.handleDelayElapsed()), e);
		}
		skipDelay() {
			return this.handleDelayElapsed();
		}
		cancel(e) {
			this.timerHandle !== null && (this.clearTimeout(), this.deferred.reject(new B(z.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))));
		}
		handleDelayElapsed() {
			this.asyncQueue.enqueueAndForget((() => this.timerHandle === null ? Promise.resolve() : (this.clearTimeout(), this.op().then(((e) => this.deferred.resolve(e))))));
		}
		clearTimeout() {
			this.timerHandle !== null && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
		}
	}, Gh = class e {
		static emptySet(t) {
			return new e(t.comparator);
		}
		constructor(e) {
			this.comparator = e ? (t, n) => e(t, n) || H.comparator(t.key, n.key) : (e, t) => H.comparator(e.key, t.key), this.keyedMap = ml(), this.sortedSet = new K(this.comparator);
		}
		has(e) {
			return this.keyedMap.get(e) != null;
		}
		get(e) {
			return this.keyedMap.get(e);
		}
		first() {
			return this.sortedSet.minKey();
		}
		last() {
			return this.sortedSet.maxKey();
		}
		isEmpty() {
			return this.sortedSet.isEmpty();
		}
		indexOf(e) {
			let t = this.keyedMap.get(e);
			return t ? this.sortedSet.indexOf(t) : -1;
		}
		get size() {
			return this.sortedSet.size;
		}
		forEach(e) {
			this.sortedSet.inorderTraversal(((t, n) => (e(t), !1)));
		}
		add(e) {
			let t = this.delete(e.key);
			return t.copy(t.keyedMap.insert(e.key, e), t.sortedSet.insert(e, null));
		}
		delete(e) {
			let t = this.get(e);
			return t ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(t)) : this;
		}
		isEqual(t) {
			if (!(t instanceof e) || this.size !== t.size) return !1;
			let n = this.sortedSet.getIterator(), r = t.sortedSet.getIterator();
			for (; n.hasNext();) {
				let e = n.getNext().key, t = r.getNext().key;
				if (!e.isEqual(t)) return !1;
			}
			return !0;
		}
		toString() {
			let e = [];
			return this.forEach(((t) => {
				e.push(t.toString());
			})), e.length === 0 ? "DocumentSet ()" : "DocumentSet (\n  " + e.join("  \n") + "\n)";
		}
		copy(t, n) {
			let r = new e();
			return r.comparator = this.comparator, r.keyedMap = t, r.sortedSet = n, r;
		}
	}, Kh = class {
		constructor() {
			this.ga = new K(H.comparator);
		}
		track(e) {
			let t = e.doc.key, n = this.ga.get(t);
			n ? e.type !== 0 && n.type === 3 ? this.ga = this.ga.insert(t, e) : e.type === 3 && n.type !== 1 ? this.ga = this.ga.insert(t, {
				type: n.type,
				doc: e.doc
			}) : e.type === 2 && n.type === 2 ? this.ga = this.ga.insert(t, {
				type: 2,
				doc: e.doc
			}) : e.type === 2 && n.type === 0 ? this.ga = this.ga.insert(t, {
				type: 0,
				doc: e.doc
			}) : e.type === 1 && n.type === 0 ? this.ga = this.ga.remove(t) : e.type === 1 && n.type === 2 ? this.ga = this.ga.insert(t, {
				type: 1,
				doc: n.doc
			}) : e.type === 0 && n.type === 1 ? this.ga = this.ga.insert(t, {
				type: 2,
				doc: e.doc
			}) : j(63341, {
				Vt: e,
				pa: n
			}) : this.ga = this.ga.insert(t, e);
		}
		ya() {
			let e = [];
			return this.ga.inorderTraversal(((t, n) => {
				e.push(n);
			})), e;
		}
	}, qh = class e {
		constructor(e, t, n, r, i, a, o, s, c) {
			this.query = e, this.docs = t, this.oldDocs = n, this.docChanges = r, this.mutatedKeys = i, this.fromCache = a, this.syncStateChanged = o, this.excludesMetadataChanges = s, this.hasCachedResults = c;
		}
		static fromInitialDocuments(t, n, r, i, a) {
			let o = [];
			return n.forEach(((e) => {
				o.push({
					type: 0,
					doc: e
				});
			})), new e(t, n, Gh.emptySet(n), o, r, i, !0, !1, a);
		}
		get hasPendingWrites() {
			return !this.mutatedKeys.isEmpty();
		}
		isEqual(e) {
			if (!(this.fromCache === e.fromCache && this.hasCachedResults === e.hasCachedResults && this.syncStateChanged === e.syncStateChanged && this.mutatedKeys.isEqual(e.mutatedKeys) && ol(this.query, e.query) && this.docs.isEqual(e.docs) && this.oldDocs.isEqual(e.oldDocs))) return !1;
			let t = this.docChanges, n = e.docChanges;
			if (t.length !== n.length) return !1;
			for (let e = 0; e < t.length; e++) if (t[e].type !== n[e].type || !t[e].doc.isEqual(n[e].doc)) return !1;
			return !0;
		}
	}, Jh = class {
		constructor() {
			this.wa = void 0, this.Sa = [];
		}
		ba() {
			return this.Sa.some(((e) => e.Da()));
		}
	}, Yh = class {
		constructor() {
			this.queries = bd(), this.onlineState = "Unknown", this.Ca = /* @__PURE__ */ new Set();
		}
		terminate() {
			(function(e, t) {
				let n = N(e), r = n.queries;
				n.queries = bd(), r.forEach(((e, n) => {
					for (let e of n.Sa) e.onError(t);
				}));
			})(this, new B(z.ABORTED, "Firestore shutting down"));
		}
	}, (Zh = Xh ||= {}).Ma = "default", Zh.Cache = "cache", Qh = class {
		constructor(e, t, n) {
			this.query = e, this.xa = t, this.Oa = !1, this.Na = null, this.onlineState = "Unknown", this.options = n || {};
		}
		Fa(e) {
			if (!this.options.includeMetadataChanges) {
				let t = [];
				for (let n of e.docChanges) n.type !== 3 && t.push(n);
				e = new qh(e.query, e.docs, e.oldDocs, t, e.mutatedKeys, e.fromCache, e.syncStateChanged, !0, e.hasCachedResults);
			}
			let t = !1;
			return this.Oa ? this.Ba(e) && (this.xa.next(e), t = !0) : this.La(e, this.onlineState) && (this.ka(e), t = !0), this.Na = e, t;
		}
		onError(e) {
			this.xa.error(e);
		}
		va(e) {
			this.onlineState = e;
			let t = !1;
			return this.Na && !this.Oa && this.La(this.Na, e) && (this.ka(this.Na), t = !0), t;
		}
		La(e, t) {
			if (!e.fromCache || !this.Da()) return !0;
			let n = t !== "Offline";
			return (!this.options.qa || !n) && (!e.docs.isEmpty() || e.hasCachedResults || t === "Offline");
		}
		Ba(e) {
			if (e.docChanges.length > 0) return !0;
			let t = this.Na && this.Na.hasPendingWrites !== e.hasPendingWrites;
			return !(!e.syncStateChanged && !t) && !0 === this.options.includeMetadataChanges;
		}
		ka(e) {
			e = qh.fromInitialDocuments(e.query, e.docs, e.mutatedKeys, e.fromCache, e.hasCachedResults), this.Oa = !0, this.xa.next(e);
		}
		Da() {
			return this.options.source !== Xh.Cache;
		}
	}, $h = class {
		constructor(e) {
			this.key = e;
		}
	}, eg = class {
		constructor(e) {
			this.key = e;
		}
	}, tg = class {
		constructor(e, t) {
			this.query = e, this.Za = t, this.Xa = null, this.hasCachedResults = !1, this.current = !1, this.Ya = L(), this.mutatedKeys = L(), this.eu = dl(e), this.tu = new Gh(this.eu);
		}
		get nu() {
			return this.Za;
		}
		ru(e, t) {
			let n = t ? t.iu : new Kh(), r = t ? t.tu : this.tu, i = t ? t.mutatedKeys : this.mutatedKeys, a = r, o = !1, s = this.query.limitType === "F" && r.size === this.query.limit ? r.last() : null, c = this.query.limitType === "L" && r.size === this.query.limit ? r.first() : null;
			if (e.inorderTraversal(((e, t) => {
				let l = r.get(e), u = ll(this.query, t) ? t : null, d = !!l && this.mutatedKeys.has(l.key), f = !!u && (u.hasLocalMutations || this.mutatedKeys.has(u.key) && u.hasCommittedMutations), p = !1;
				l && u ? l.data.isEqual(u.data) ? d !== f && (n.track({
					type: 3,
					doc: u
				}), p = !0) : this.su(l, u) || (n.track({
					type: 2,
					doc: u
				}), p = !0, (s && this.eu(u, s) > 0 || c && this.eu(u, c) < 0) && (o = !0)) : !l && u ? (n.track({
					type: 0,
					doc: u
				}), p = !0) : l && !u && (n.track({
					type: 1,
					doc: l
				}), p = !0, (s || c) && (o = !0)), p && (u ? (a = a.add(u), i = f ? i.add(e) : i.delete(e)) : (a = a.delete(e), i = i.delete(e)));
			})), this.query.limit !== null) for (; a.size > this.query.limit;) {
				let e = this.query.limitType === "F" ? a.last() : a.first();
				a = a.delete(e.key), i = i.delete(e.key), n.track({
					type: 1,
					doc: e
				});
			}
			return {
				tu: a,
				iu: n,
				bs: o,
				mutatedKeys: i
			};
		}
		su(e, t) {
			return e.hasLocalMutations && t.hasCommittedMutations && !t.hasLocalMutations;
		}
		applyChanges(e, t, n, r) {
			let i = this.tu;
			this.tu = e.tu, this.mutatedKeys = e.mutatedKeys;
			let a = e.iu.ya();
			a.sort(((e, t) => function(e, t) {
				let n = (e) => {
					switch (e) {
						case 0: return 1;
						case 2:
						case 3: return 2;
						case 1: return 0;
						default: return j(20277, { Vt: e });
					}
				};
				return n(e) - n(t);
			}(e.type, t.type) || this.eu(e.doc, t.doc))), this.ou(n), r ??= !1;
			let o = t && !r ? this._u() : [], s = this.Ya.size === 0 && this.current && !r ? 1 : 0, c = s !== this.Xa;
			return this.Xa = s, a.length !== 0 || c ? {
				snapshot: new qh(this.query, e.tu, i, a, e.mutatedKeys, s === 0, c, !1, !!n && n.resumeToken.approximateByteSize() > 0),
				au: o
			} : { au: o };
		}
		va(e) {
			return this.current && e === "Offline" ? (this.current = !1, this.applyChanges({
				tu: this.tu,
				iu: new Kh(),
				mutatedKeys: this.mutatedKeys,
				bs: !1
			}, !1)) : { au: [] };
		}
		uu(e) {
			return !this.Za.has(e) && !!this.tu.has(e) && !this.tu.get(e).hasLocalMutations;
		}
		ou(e) {
			e && (e.addedDocuments.forEach(((e) => this.Za = this.Za.add(e))), e.modifiedDocuments.forEach(((e) => {})), e.removedDocuments.forEach(((e) => this.Za = this.Za.delete(e))), this.current = e.current);
		}
		_u() {
			if (!this.current) return [];
			let e = this.Ya;
			this.Ya = L(), this.tu.forEach(((e) => {
				this.uu(e.key) && (this.Ya = this.Ya.add(e.key));
			}));
			let t = [];
			return e.forEach(((e) => {
				this.Ya.has(e) || t.push(new eg(e));
			})), this.Ya.forEach(((n) => {
				e.has(n) || t.push(new $h(n));
			})), t;
		}
		cu(e) {
			this.Za = e.ks, this.Ya = L();
			let t = this.ru(e.documents);
			return this.applyChanges(t, !0);
		}
		lu() {
			return qh.fromInitialDocuments(this.query, this.tu, this.mutatedKeys, this.Xa === 0, this.hasCachedResults);
		}
	}, ng = "SyncEngine", rg = class {
		constructor(e, t, n) {
			this.query = e, this.targetId = t, this.view = n;
		}
	}, ig = class {
		constructor(e) {
			this.key = e, this.hu = !1;
		}
	}, ag = class {
		constructor(e, t, n, r, i, a) {
			this.localStore = e, this.remoteStore = t, this.eventManager = n, this.sharedClientState = r, this.currentUser = i, this.maxConcurrentLimboResolutions = a, this.Pu = {}, this.Tu = new im(((e) => sl(e)), ol), this.Eu = /* @__PURE__ */ new Map(), this.Iu = /* @__PURE__ */ new Set(), this.Ru = new K(H.comparator), this.Au = /* @__PURE__ */ new Map(), this.Vu = new sh(), this.du = {}, this.mu = /* @__PURE__ */ new Map(), this.fu = Ym.ar(), this.onlineState = "Unknown", this.gu = void 0;
		}
		get isPrimaryClient() {
			return !0 === this.gu;
		}
	}, og = class {
		constructor() {
			this.kind = "memory", this.synchronizeTabs = !1;
		}
		async initialize(e) {
			this.serializer = Hu(e.databaseInfo.databaseId), this.sharedClientState = this.Du(e), this.persistence = this.Cu(e), await this.persistence.start(), this.localStore = this.vu(e), this.gcScheduler = this.Fu(e, this.localStore), this.indexBackfillerScheduler = this.Mu(e, this.localStore);
		}
		Fu(e, t) {
			return null;
		}
		Mu(e, t) {
			return null;
		}
		vu(e) {
			return Ou(this.persistence, new vh(), e.initialUser, this.serializer);
		}
		Cu(e) {
			return new fh(mh.Vi, this.serializer);
		}
		Du(e) {
			return new Ch();
		}
		async terminate() {
			this.gcScheduler?.stop(), this.indexBackfillerScheduler?.stop(), this.sharedClientState.shutdown(), await this.persistence.shutdown();
		}
	}, og.provider = { build: () => new og() }, sg = class extends og {
		constructor(e) {
			super(), this.cacheSizeBytes = e;
		}
		Fu(e, t) {
			M(this.persistence.referenceDelegate instanceof hh, 46915);
			let n = this.persistence.referenceDelegate.garbageCollector;
			return new $m(n, e.asyncQueue, t);
		}
		Cu(e) {
			let t = this.cacheSizeBytes === void 0 ? Jm.DEFAULT : Jm.withCacheSize(this.cacheSizeBytes);
			return new fh(((e) => hh.Vi(e, t)), this.serializer);
		}
	}, cg = class {
		async initialize(e, t) {
			this.localStore || (this.localStore = e.localStore, this.sharedClientState = e.sharedClientState, this.datastore = this.createDatastore(t), this.remoteStore = this.createRemoteStore(t), this.eventManager = this.createEventManager(t), this.syncEngine = this.createSyncEngine(t, !e.synchronizeTabs), this.sharedClientState.onlineStateHandler = (e) => Pd(this.syncEngine, e, 1), this.remoteStore.remoteSyncer.handleCredentialChange = Kd.bind(null, this.syncEngine), await gd(this.remoteStore, this.syncEngine.isPrimaryClient));
		}
		createEventManager(e) {
			return function() {
				return new Yh();
			}();
		}
		createDatastore(e) {
			let t = Hu(e.databaseInfo.databaseId), n = Bu(e.databaseInfo);
			return Uu(e.authCredentials, e.appCheckCredentials, n, t);
		}
		createRemoteStore(e) {
			return function(e, t, n, r, i) {
				return new Uh(e, t, n, r, i);
			}(this.localStore, this.datastore, e.asyncQueue, ((e) => Pd(this.syncEngine, e, 0)), function() {
				return Eh.v() ? new Eh() : new wh();
			}());
		}
		createSyncEngine(e, t) {
			return function(e, t, n, r, i, a, o) {
				let s = new ag(e, t, n, r, i, a);
				return o && (s.gu = !0), s;
			}(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, e.initialUser, e.maxConcurrentLimboResolutions, t);
		}
		async terminate() {
			await async function(e) {
				let t = N(e);
				A(Hh, "RemoteStore shutting down."), t.Ia.add(5), await Gu(t), t.Aa.shutdown(), t.Va.set("Unknown");
			}(this.remoteStore), this.datastore?.terminate(), this.eventManager?.terminate();
		}
	}, cg.provider = { build: () => new cg() }, lg = class {
		constructor(e) {
			this.observer = e, this.muted = !1;
		}
		next(e) {
			this.muted || this.observer.next && this.Ou(this.observer.next, e);
		}
		error(e) {
			this.muted || (this.observer.error ? this.Ou(this.observer.error, e) : Ps("Uncaught Error in snapshot listener:", e.toString()));
		}
		Nu() {
			this.muted = !0;
		}
		Ou(e, t) {
			setTimeout((() => {
				this.muted || e(t);
			}), 0);
		}
	}, ug = "FirestoreClient", dg = class {
		constructor(e, t, n, r, i) {
			this.authCredentials = e, this.appCheckCredentials = t, this.asyncQueue = n, this._databaseInfo = r, this.user = R.UNAUTHENTICATED, this.clientId = zf.newId(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this._uninitializedComponentsProvider = i, this.authCredentials.start(n, (async (e) => {
				A(ug, "Received user=", e.uid), await this.authCredentialListener(e), this.user = e;
			})), this.appCheckCredentials.start(n, ((e) => (A(ug, "Received new app check token=", e), this.appCheckCredentialListener(e, this.user))));
		}
		get configuration() {
			return {
				asyncQueue: this.asyncQueue,
				databaseInfo: this._databaseInfo,
				clientId: this.clientId,
				authCredentials: this.authCredentials,
				appCheckCredentials: this.appCheckCredentials,
				initialUser: this.user,
				maxConcurrentLimboResolutions: 100
			};
		}
		setCredentialChangeListener(e) {
			this.authCredentialListener = e;
		}
		setAppCheckTokenChangeListener(e) {
			this.appCheckCredentialListener = e;
		}
		terminate() {
			this.asyncQueue.enterRestrictedMode();
			let e = new Af();
			return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async () => {
				try {
					this._onlineComponents && await this._onlineComponents.terminate(), this._offlineComponents && await this._offlineComponents.terminate(), this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), e.resolve();
				} catch (t) {
					let n = yd(t, "Failed to shutdown persistence");
					e.reject(n);
				}
			})), e.promise;
		}
	}, fg = "ComponentProvider", pg = /* @__PURE__ */ new Map(), mg = "firestore.googleapis.com", hg = !0, gg = class {
		constructor(e) {
			if (e.host === void 0) {
				if (e.ssl !== void 0) throw new B(z.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
				this.host = mg, this.ssl = hg;
			} else this.host = e.host, this.ssl = e.ssl ?? hg;
			if (this.isUsingEmulator = e.emulatorOptions !== void 0, this.credentials = e.credentials, this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties, this.localCache = e.localCache, e.cacheSizeBytes === void 0) this.cacheSizeBytes = qm;
			else {
				if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < Zm) throw new B(z.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
				this.cacheSizeBytes = e.cacheSizeBytes;
			}
			Us("experimentalForceLongPolling", e.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", e.experimentalAutoDetectLongPolling), this.experimentalForceLongPolling = !!e.experimentalForceLongPolling, this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = !1 : e.experimentalAutoDetectLongPolling === void 0 ? this.experimentalAutoDetectLongPolling = !0 : this.experimentalAutoDetectLongPolling = !!e.experimentalAutoDetectLongPolling, this.experimentalLongPollingOptions = of(e.experimentalLongPollingOptions ?? {}), function(e) {
				if (e.timeoutSeconds !== void 0) {
					if (isNaN(e.timeoutSeconds)) throw new B(z.INVALID_ARGUMENT, `invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);
					if (e.timeoutSeconds < 5) throw new B(z.INVALID_ARGUMENT, `invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);
					if (e.timeoutSeconds > 30) throw new B(z.INVALID_ARGUMENT, `invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`);
				}
			}(this.experimentalLongPollingOptions), this.useFetchStreams = !!e.useFetchStreams;
		}
		isEqual(e) {
			return this.host === e.host && this.ssl === e.ssl && this.credentials === e.credentials && this.cacheSizeBytes === e.cacheSizeBytes && this.experimentalForceLongPolling === e.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === e.experimentalAutoDetectLongPolling && function(e, t) {
				return e.timeoutSeconds === t.timeoutSeconds;
			}(this.experimentalLongPollingOptions, e.experimentalLongPollingOptions) && this.ignoreUndefinedProperties === e.ignoreUndefinedProperties && this.useFetchStreams === e.useFetchStreams;
		}
	}, _g = class {
		constructor(e, t, n, r) {
			this._authCredentials = e, this._appCheckCredentials = t, this._databaseId = n, this._app = r, this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new gg({}), this._settingsFrozen = !1, this._emulatorOptions = {}, this._terminateTask = "notTerminated";
		}
		get app() {
			if (!this._app) throw new B(z.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
			return this._app;
		}
		get _initialized() {
			return this._settingsFrozen;
		}
		get _terminated() {
			return this._terminateTask !== "notTerminated";
		}
		_setSettings(e) {
			if (this._settingsFrozen) throw new B(z.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
			this._settings = new gg(e), this._emulatorOptions = e.emulatorOptions || {}, e.credentials !== void 0 && (this._authCredentials = function(e) {
				if (!e) return new Mf();
				switch (e.type) {
					case "firstParty": return new If(e.sessionIndex || "0", e.iamToken || null, e.authTokenFactory || null);
					case "provider": return e.client;
					default: throw new B(z.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
				}
			}(e.credentials));
		}
		_getSettings() {
			return this._settings;
		}
		_getEmulatorOptions() {
			return this._emulatorOptions;
		}
		_freezeSettings() {
			return this._settingsFrozen = !0, this._settings;
		}
		_delete() {
			return this._terminateTask === "notTerminated" && (this._terminateTask = this._terminate()), this._terminateTask;
		}
		async _restart() {
			this._terminateTask === "notTerminated" ? await this._terminate() : this._terminateTask = "notTerminated";
		}
		toJSON() {
			return {
				app: this._app,
				databaseId: this._databaseId,
				settings: this._settings
			};
		}
		_terminate() {
			return function(e) {
				let t = pg.get(e);
				t && (A(fg, "Removing Datastore"), pg.delete(e), t.terminate());
			}(this), Promise.resolve();
		}
	}, vg = class e {
		constructor(e, t, n) {
			this.converter = t, this._query = n, this.type = "query", this.firestore = e;
		}
		withConverter(t) {
			return new e(this.firestore, t, this._query);
		}
	}, $ = class e {
		constructor(e, t, n) {
			this.converter = t, this._key = n, this.type = "document", this.firestore = e;
		}
		get _path() {
			return this._key.path;
		}
		get id() {
			return this._key.path.lastSegment();
		}
		get path() {
			return this._key.path.canonicalString();
		}
		get parent() {
			return new yg(this.firestore, this.converter, this._key.path.popLast());
		}
		withConverter(t) {
			return new e(this.firestore, t, this._key);
		}
		toJSON() {
			return {
				type: e._jsonSchemaVersion,
				referencePath: this._key.toString()
			};
		}
		static fromJSON(t, n, r) {
			if (Ys(n, e._jsonSchema)) return new e(t, r || null, new H(V.fromString(n.referencePath)));
		}
	}, $._jsonSchemaVersion = "firestore/documentReference/1.0", $._jsonSchema = {
		type: F("string", $._jsonSchemaVersion),
		referencePath: F("string")
	}, yg = class e extends vg {
		constructor(e, t, n) {
			super(e, t, Zc(n)), this._path = n, this.type = "collection";
		}
		get id() {
			return this._query.path.lastSegment();
		}
		get path() {
			return this._query.path.canonicalString();
		}
		get parent() {
			let e = this._path.popLast();
			return e.isEmpty() ? null : new $(this.firestore, null, new H(e));
		}
		withConverter(t) {
			return new e(this.firestore, t, this._path);
		}
	}, bg = "AsyncQueue", xg = class {
		constructor(e = Promise.resolve()) {
			this.Yu = [], this.ec = !1, this.tc = [], this.nc = null, this.rc = !1, this.sc = !1, this.oc = [], this.M_ = new Ph(this, "async_queue_retry"), this._c = () => {
				let e = Vu();
				e && A(bg, "Visibility state changed to " + e.visibilityState), this.M_.w_();
			}, this.ac = e;
			let t = Vu();
			t && typeof t.addEventListener == "function" && t.addEventListener("visibilitychange", this._c);
		}
		get isShuttingDown() {
			return this.ec;
		}
		enqueueAndForget(e) {
			this.enqueue(e);
		}
		enqueueAndForgetEvenWhileRestricted(e) {
			this.uc(), this.cc(e);
		}
		enterRestrictedMode(e) {
			if (!this.ec) {
				this.ec = !0, this.sc = e || !1;
				let t = Vu();
				t && typeof t.removeEventListener == "function" && t.removeEventListener("visibilitychange", this._c);
			}
		}
		enqueue(e) {
			if (this.uc(), this.ec) return new Promise((() => {}));
			let t = new Af();
			return this.cc((() => this.ec && this.sc ? Promise.resolve() : (e().then(t.resolve, t.reject), t.promise))).then((() => t.promise));
		}
		enqueueRetryable(e) {
			this.enqueueAndForget((() => (this.Yu.push(e), this.lc())));
		}
		async lc() {
			if (this.Yu.length !== 0) {
				try {
					await this.Yu[0](), this.Yu.shift(), this.M_.reset();
				} catch (e) {
					if (!tc(e)) throw e;
					A(bg, "Operation failed with retryable error: " + e);
				}
				this.Yu.length > 0 && this.M_.p_((() => this.lc()));
			}
		}
		cc(e) {
			let t = this.ac.then((() => (this.rc = !0, e().catch(((e) => {
				throw this.nc = e, this.rc = !1, Ps("INTERNAL UNHANDLED ERROR: ", df(e)), e;
			})).then(((e) => (this.rc = !1, e))))));
			return this.ac = t, t;
		}
		enqueueAfterDelay(e, t, n) {
			this.uc(), this.oc.indexOf(e) > -1 && (t = 0);
			let r = Wh.createAndSchedule(this, e, t, n, ((e) => this.hc(e)));
			return this.tc.push(r), r;
		}
		uc() {
			this.nc && j(47125, { Pc: df(this.nc) });
		}
		verifyOperationInProgress() {}
		async Tc() {
			let e;
			do
				e = this.ac, await e;
			while (e !== this.ac);
		}
		Ec(e) {
			for (let t of this.tc) if (t.timerId === e) return !0;
			return !1;
		}
		Ic(e) {
			return this.Tc().then((() => {
				this.tc.sort(((e, t) => e.targetTimeMs - t.targetTimeMs));
				for (let t of this.tc) if (t.skipDelay(), e !== "all" && t.timerId === e) break;
				return this.Tc();
			}));
		}
		Rc(e) {
			this.oc.push(e);
		}
		hc(e) {
			let t = this.tc.indexOf(e);
			this.tc.splice(t, 1);
		}
	}, Sg = class extends _g {
		constructor(e, t, n, r) {
			super(e, t, n, r), this.type = "firestore", this._queue = new xg(), this._persistenceKey = r?.name || "[DEFAULT]";
		}
		async _terminate() {
			if (this._firestoreClient) {
				let e = this._firestoreClient.terminate();
				this._queue = new xg(e), this._firestoreClient = void 0, await e;
			}
		}
	}, Cg = class e {
		constructor(e) {
			this._byteString = e;
		}
		static fromBase64String(t) {
			try {
				return new e(kp.fromBase64String(t));
			} catch (e) {
				throw new B(z.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + e);
			}
		}
		static fromUint8Array(t) {
			return new e(kp.fromUint8Array(t));
		}
		toBase64() {
			return this._byteString.toBase64();
		}
		toUint8Array() {
			return this._byteString.toUint8Array();
		}
		toString() {
			return "Bytes(base64: " + this.toBase64() + ")";
		}
		isEqual(e) {
			return this._byteString.isEqual(e._byteString);
		}
		toJSON() {
			return {
				type: e._jsonSchemaVersion,
				bytes: this.toBase64()
			};
		}
		static fromJSON(t) {
			if (Ys(t, e._jsonSchema)) return e.fromBase64String(t.bytes);
		}
	}, Cg._jsonSchemaVersion = "firestore/bytes/1.0", Cg._jsonSchema = {
		type: F("string", Cg._jsonSchemaVersion),
		bytes: F("string")
	}, wg = class {
		constructor(...e) {
			for (let t = 0; t < e.length; ++t) if (e[t].length === 0) throw new B(z.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
			this._internalPath = new Gf(e);
		}
		isEqual(e) {
			return this._internalPath.isEqual(e._internalPath);
		}
	}, Tg = class {
		constructor(e) {
			this._methodName = e;
		}
	}, Eg = class e {
		constructor(e, t) {
			if (!isFinite(e) || e < -90 || e > 90) throw new B(z.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + e);
			if (!isFinite(t) || t < -180 || t > 180) throw new B(z.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + t);
			this._lat = e, this._long = t;
		}
		get latitude() {
			return this._lat;
		}
		get longitude() {
			return this._long;
		}
		isEqual(e) {
			return this._lat === e._lat && this._long === e._long;
		}
		_compareTo(e) {
			return P(this._lat, e._lat) || P(this._long, e._long);
		}
		toJSON() {
			return {
				latitude: this._lat,
				longitude: this._long,
				type: e._jsonSchemaVersion
			};
		}
		static fromJSON(t) {
			if (Ys(t, e._jsonSchema)) return new e(t.latitude, t.longitude);
		}
	}, Eg._jsonSchemaVersion = "firestore/geoPoint/1.0", Eg._jsonSchema = {
		type: F("string", Eg._jsonSchemaVersion),
		latitude: F("number"),
		longitude: F("number")
	}, Dg = class e {
		constructor(e) {
			this._values = (e || []).map(((e) => e));
		}
		toArray() {
			return this._values.map(((e) => e));
		}
		isEqual(e) {
			return function(e, t) {
				if (e.length !== t.length) return !1;
				for (let n = 0; n < e.length; ++n) if (e[n] !== t[n]) return !1;
				return !0;
			}(this._values, e._values);
		}
		toJSON() {
			return {
				type: e._jsonSchemaVersion,
				vectorValues: this._values
			};
		}
		static fromJSON(t) {
			if (Ys(t, e._jsonSchema)) {
				if (Array.isArray(t.vectorValues) && t.vectorValues.every(((e) => typeof e == "number"))) return new e(t.vectorValues);
				throw new B(z.INVALID_ARGUMENT, "Expected 'vectorValues' field to be a number array");
			}
		}
	}, Dg._jsonSchemaVersion = "firestore/vectorValue/1.0", Dg._jsonSchema = {
		type: F("string", Dg._jsonSchemaVersion),
		vectorValues: F("object")
	}, Og = /^__.*__$/, kg = class {
		constructor(e, t, n) {
			this.data = e, this.fieldMask = t, this.fieldTransforms = n;
		}
		toMutation(e, t) {
			return new ym(e, this.data, this.fieldMask, t, this.fieldTransforms);
		}
	}, Ag = class e {
		constructor(e, t, n, r, i, a) {
			this.settings = e, this.databaseId = t, this.serializer = n, this.ignoreUndefinedProperties = r, i === void 0 && this.Ac(), this.fieldTransforms = i || [], this.fieldMask = a || [];
		}
		get path() {
			return this.settings.path;
		}
		get dataSource() {
			return this.settings.dataSource;
		}
		i(t) {
			return new e({
				...this.settings,
				...t
			}, this.databaseId, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
		}
		dc(e) {
			let t = this.path?.child(e), n = this.i({
				path: t,
				arrayElement: !1
			});
			return n.mc(e), n;
		}
		fc(e) {
			let t = this.path?.child(e), n = this.i({
				path: t,
				arrayElement: !1
			});
			return n.Ac(), n;
		}
		gc(e) {
			return this.i({
				path: void 0,
				arrayElement: !0
			});
		}
		yc(e) {
			return Ef(e, this.settings.methodName, this.settings.hasConverter || !1, this.path, this.settings.targetDoc);
		}
		contains(e) {
			return this.fieldMask.find(((t) => e.isPrefixOf(t))) !== void 0 || this.fieldTransforms.find(((t) => e.isPrefixOf(t.field))) !== void 0;
		}
		Ac() {
			if (this.path) for (let e = 0; e < this.path.length; e++) this.mc(this.path.get(e));
		}
		mc(e) {
			if (e.length === 0) throw this.yc("Document fields must not be empty");
			if (hf(this.dataSource) && Og.test(e)) throw this.yc("Document fields cannot begin and end with \"__\"");
		}
	}, jg = class {
		constructor(e, t, n) {
			this.databaseId = e, this.ignoreUndefinedProperties = t, this.serializer = n || Hu(e);
		}
		A(e, t, n, r = !1) {
			return new Ag({
				dataSource: e,
				methodName: t,
				targetDoc: n,
				path: Gf.emptyPath(),
				arrayElement: !1,
				hasConverter: r
			}, this.databaseId, this.serializer, this.ignoreUndefinedProperties);
		}
	}, Mg = class e extends Tg {
		_toFieldTransform(e) {
			if (e.dataSource !== 2) throw e.dataSource === 1 ? e.yc(`${this._methodName}() can only appear at the top level of your update data`) : e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
			return e.fieldMask.push(e.path), null;
		}
		isEqual(t) {
			return t instanceof e;
		}
	}, Ng = /* @__PURE__ */ RegExp("[~\\*/\\[\\]]"), Pg = class {
		convertValue(e, t = "none") {
			switch (_c(e)) {
				case 0: return null;
				case 1: return e.booleanValue;
				case 2: return I(e.integerValue || e.doubleValue);
				case 3: return this.convertTimestamp(e.timestampValue);
				case 4: return this.convertServerTimestamp(e, t);
				case 5: return e.stringValue;
				case 6: return this.convertBytes(fc(e.bytesValue));
				case 7: return this.convertReference(e.referenceValue);
				case 8: return this.convertGeoPoint(e.geoPointValue);
				case 9: return this.convertArray(e.arrayValue, t);
				case 11: return this.convertObject(e.mapValue, t);
				case 10: return this.convertVectorValue(e.mapValue);
				default: throw j(62114, { value: e });
			}
		}
		convertObject(e, t) {
			return this.convertObjectMap(e.fields, t);
		}
		convertObjectMap(e, t = "none") {
			let n = {};
			return lc(e, ((e, r) => {
				n[e] = this.convertValue(r, t);
			})), n;
		}
		convertVectorValue(e) {
			let t = e.fields?.[Hp].arrayValue?.values?.map(((e) => I(e.doubleValue)));
			return new Dg(t);
		}
		convertGeoPoint(e) {
			return new Eg(I(e.latitude), I(e.longitude));
		}
		convertArray(e, t) {
			return (e.values || []).map(((e) => this.convertValue(e, t)));
		}
		convertServerTimestamp(e, t) {
			switch (t) {
				case "previous":
					let n = mc(e);
					return n == null ? null : this.convertValue(n, t);
				case "estimate": return this.convertTimestamp(hc(e));
				default: return null;
			}
		}
		convertTimestamp(e) {
			let t = dc(e);
			return new U(t.seconds, t.nanos);
		}
		convertDocumentKey(e, t) {
			let n = V.fromString(e);
			M(Cu(n), 9688, { name: e });
			let r = new Lp(n.get(1), n.get(3)), i = new H(n.popFirst(5));
			return r.isEqual(t) || Ps(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`), i;
		}
	}, Fg = class extends Pg {
		constructor(e) {
			super(), this.firestore = e;
		}
		convertBytes(e) {
			return new Cg(e);
		}
		convertReference(e) {
			let t = this.convertDocumentKey(e, this.firestore._databaseId);
			return new $(this.firestore, null, t);
		}
	};
}));
//#endregion
//#region node_modules/@firebase/firestore/dist/index.esm.js
function Lg(e) {
	return function(e, t) {
		if (typeof e != "object" || !e) return !1;
		let n = e;
		for (let e of t) if (e in n && typeof n[e] == "function") return !0;
		return !1;
	}(e, [
		"next",
		"error",
		"complete"
	]);
}
function Rg(e) {
	if (e.limitType === "L" && e.explicitOrderBy.length === 0) throw new B(z.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}
function zg(e, t, ...n) {
	let r = [];
	t instanceof e_ && r.push(t), r = r.concat(n), function(e) {
		let t = e.filter(((e) => e instanceof r_)).length, n = e.filter(((e) => e instanceof n_)).length;
		if (t > 1 || t > 0 && n > 0) throw new B(z.INVALID_ARGUMENT, "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.");
	}(r);
	for (let t of r) e = t._apply(e);
	return e;
}
function Bg(e, t, n) {
	let r = t, i = wf("where", e);
	return n_._create(i, r, n);
}
function Vg(e, t, n) {
	if (typeof (n = g(n)) == "string") {
		if (n === "") throw new B(z.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
		if (!el(t) && n.indexOf("/") !== -1) throw new B(z.INVALID_ARGUMENT, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);
		let r = t.path.child(V.fromString(n));
		if (!H.isDocumentKey(r)) throw new B(z.INVALID_ARGUMENT, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);
		return Ec(e, new H(r));
	}
	if (n instanceof $) return Ec(e, n._key);
	throw new B(z.INVALID_ARGUMENT, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qs(n)}.`);
}
function Hg(e, t) {
	if (!Array.isArray(e) || e.length === 0) throw new B(z.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);
}
function Ug(e, t) {
	let n = function(e, t) {
		for (let n of e) for (let e of n.getFlattenedFilters()) if (t.indexOf(e.op) >= 0) return e.op;
		return null;
	}(e.filters, function(e) {
		switch (e) {
			case "!=": return ["!=", "not-in"];
			case "array-contains-any":
			case "in": return ["not-in"];
			case "not-in": return [
				"array-contains-any",
				"in",
				"not-in",
				"!="
			];
			default: return [];
		}
	}(t.op));
	if (n !== null) throw n === t.op ? new B(z.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${t.op.toString()}' filter.`) : new B(z.INVALID_ARGUMENT, `Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`);
}
function Wg(e) {
	switch (e) {
		case 0: return "added";
		case 2:
		case 3: return "modified";
		case 1: return "removed";
		default: return j(61501, { type: e });
	}
}
function Gg(e) {
	e = Js(e, vg);
	let t = Js(e.firestore, Sg), n = pf(t), r = new Fg(t);
	return Rg(e._query), rf(n, e._query).then(((n) => new s_(t, r, e, n)));
}
function Kg(e, t, n, ...r) {
	e = Js(e, $);
	let i = Js(e.firestore, Sg), a = gf(i), o;
	return o = typeof (t = g(t)) == "string" || t instanceof wg ? vf(a, "updateDoc", e._key, t, n, r) : _f(a, "updateDoc", e._key, t), Jg(i, [o.toMutation(e._key, gm.exists(!0))]);
}
function qg(e, ...t) {
	e = g(e);
	let n = {
		includeMetadataChanges: !1,
		source: "default"
	}, r = 0;
	typeof t[r] != "object" || Lg(t[r]) || (n = t[r++]);
	let i = {
		includeMetadataChanges: n.includeMetadataChanges,
		source: n.source
	};
	if (Lg(t[r])) {
		let e = t[r];
		t[r] = e.next?.bind(e), t[r + 1] = e.error?.bind(e), t[r + 2] = e.complete?.bind(e);
	}
	let a, o, s;
	if (e instanceof $) o = Js(e.firestore, Sg), s = Zc(e._key.path), a = {
		next: (n) => {
			t[r] && t[r](Yg(o, e, n));
		},
		error: t[r + 1],
		complete: t[r + 2]
	};
	else {
		let n = Js(e, vg);
		o = Js(n.firestore, Sg), s = n._query;
		let i = new Fg(o);
		a = {
			next: (e) => {
				t[r] && t[r](new s_(o, i, n, e));
			},
			error: t[r + 1],
			complete: t[r + 2]
		}, Rg(e._query);
	}
	return nf(pf(o), s, i, a);
}
function Jg(e, t) {
	return af(pf(e), t);
}
function Yg(e, t, n) {
	let r = n.docs.get(t._key);
	return new a_(e, new Fg(e), t._key, r, new i_(n.hasPendingWrites, n.fromCache), t.converter);
}
var Xg, Zg, Qg, $g, e_, t_, n_, r_, i_, a_, o_, s_, c_ = e((() => {
	Cn(), y(), Ig(), Me(), bs(), We(), js(), Xg = "@firebase/firestore", Zg = "4.13.0", Qg = class {
		constructor(e, t, n, r, i) {
			this._firestore = e, this._userDataWriter = t, this._key = n, this._document = r, this._converter = i;
		}
		get id() {
			return this._key.path.lastSegment();
		}
		get ref() {
			return new $(this._firestore, this._converter, this._key);
		}
		exists() {
			return this._document !== null;
		}
		data() {
			if (this._document) {
				if (this._converter) {
					let e = new $g(this._firestore, this._userDataWriter, this._key, this._document, null);
					return this._converter.fromFirestore(e);
				}
				return this._userDataWriter.convertValue(this._document.data.value);
			}
		}
		_fieldsProto() {
			return this._document?.data.clone().value.mapValue.fields ?? void 0;
		}
		get(e) {
			if (this._document) {
				let t = this._document.data.field(wf("DocumentSnapshot.get", e));
				if (t !== null) return this._userDataWriter.convertValue(t);
			}
		}
	}, $g = class extends Qg {
		data() {
			return super.data();
		}
	}, e_ = class {}, t_ = class extends e_ {}, n_ = class e extends t_ {
		constructor(e, t, n) {
			super(), this._field = e, this._op = t, this._value = n, this.type = "where";
		}
		static _create(t, n, r) {
			return new e(t, n, r);
		}
		_apply(e) {
			let t = this._parse(e);
			return Ug(e._query, t), new vg(e.firestore, e.converter, il(e._query, t));
		}
		_parse(e) {
			let t = gf(e.firestore);
			return function(e, t, n, r, i, a, o) {
				let s;
				if (i.isKeyField()) {
					if (a === "array-contains" || a === "array-contains-any") throw new B(z.INVALID_ARGUMENT, `Invalid Query. You can't perform '${a}' queries on documentId().`);
					if (a === "in" || a === "not-in") {
						Hg(o, a);
						let t = [];
						for (let n of o) t.push(Vg(r, e, n));
						s = { arrayValue: { values: t } };
					} else s = Vg(r, e, o);
				} else a !== "in" && a !== "not-in" && a !== "array-contains-any" || Hg(o, a), s = yf(n, t, o, a === "in" || a === "not-in");
				return J.create(i, a, s);
			}(e._query, "where", t, e.firestore._databaseId, this._field, this._op, this._value);
		}
	}, r_ = class e extends e_ {
		constructor(e, t) {
			super(), this.type = e, this._queryConstraints = t;
		}
		static _create(t, n) {
			return new e(t, n);
		}
		_parse(e) {
			let t = this._queryConstraints.map(((t) => t._parse(e))).filter(((e) => e.getFilters().length > 0));
			return t.length === 1 ? t[0] : Jp.create(t, this._getOperator());
		}
		_apply(e) {
			let t = this._parse(e);
			return t.getFilters().length === 0 ? e : (function(e, t) {
				let n = e, r = t.getFlattenedFilters();
				for (let e of r) Ug(n, e), n = il(n, e);
			}(e._query, t), new vg(e.firestore, e.converter, il(e._query, t)));
		}
		_getQueryConstraints() {
			return this._queryConstraints;
		}
		_getOperator() {
			return this.type === "and" ? "and" : "or";
		}
	}, i_ = class {
		constructor(e, t) {
			this.hasPendingWrites = e, this.fromCache = t;
		}
		isEqual(e) {
			return this.hasPendingWrites === e.hasPendingWrites && this.fromCache === e.fromCache;
		}
	}, a_ = class e extends Qg {
		constructor(e, t, n, r, i, a) {
			super(e, t, n, r, a), this._firestore = e, this._firestoreImpl = e, this.metadata = i;
		}
		exists() {
			return super.exists();
		}
		data(e = {}) {
			if (this._document) {
				if (this._converter) {
					let t = new o_(this._firestore, this._userDataWriter, this._key, this._document, this.metadata, null);
					return this._converter.fromFirestore(t, e);
				}
				return this._userDataWriter.convertValue(this._document.data.value, e.serverTimestamps);
			}
		}
		get(e, t = {}) {
			if (this._document) {
				let n = this._document.data.field(wf("DocumentSnapshot.get", e));
				if (n !== null) return this._userDataWriter.convertValue(n, t.serverTimestamps);
			}
		}
		toJSON() {
			if (this.metadata.hasPendingWrites) throw new B(z.FAILED_PRECONDITION, "DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");
			let t = this._document, n = {};
			return n.type = e._jsonSchemaVersion, n.bundle = "", n.bundleSource = "DocumentSnapshot", n.bundleName = this._key.toString(), !t || !t.isValidDocument() || !t.isFoundDocument() ? n : (this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields, "previous"), n.bundle = (this._firestore, this.ref.path, "NOT SUPPORTED"), n);
		}
	}, a_._jsonSchemaVersion = "firestore/documentSnapshot/1.0", a_._jsonSchema = {
		type: F("string", a_._jsonSchemaVersion),
		bundleSource: F("string", "DocumentSnapshot"),
		bundleName: F("string"),
		bundle: F("string")
	}, o_ = class extends a_ {
		data(e = {}) {
			return super.data(e);
		}
	}, s_ = class e {
		constructor(e, t, n, r) {
			this._firestore = e, this._userDataWriter = t, this._snapshot = r, this.metadata = new i_(r.hasPendingWrites, r.fromCache), this.query = n;
		}
		get docs() {
			let e = [];
			return this.forEach(((t) => e.push(t))), e;
		}
		get size() {
			return this._snapshot.docs.size;
		}
		get empty() {
			return this.size === 0;
		}
		forEach(e, t) {
			this._snapshot.docs.forEach(((n) => {
				e.call(t, new o_(this._firestore, this._userDataWriter, n.key, n, new i_(this._snapshot.mutatedKeys.has(n.key), this._snapshot.fromCache), this.query.converter));
			}));
		}
		docChanges(e = {}) {
			let t = !!e.includeMetadataChanges;
			if (t && this._snapshot.excludesMetadataChanges) throw new B(z.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
			return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === t || (this._cachedChanges = function(e, t) {
				if (e._snapshot.oldDocs.isEmpty()) {
					let t = 0;
					return e._snapshot.docChanges.map(((n) => {
						let r = new o_(e._firestore, e._userDataWriter, n.doc.key, n.doc, new i_(e._snapshot.mutatedKeys.has(n.doc.key), e._snapshot.fromCache), e.query.converter);
						return n.doc, {
							type: "added",
							doc: r,
							oldIndex: -1,
							newIndex: t++
						};
					}));
				}
				{
					let n = e._snapshot.oldDocs;
					return e._snapshot.docChanges.filter(((e) => t || e.type !== 3)).map(((t) => {
						let r = new o_(e._firestore, e._userDataWriter, t.doc.key, t.doc, new i_(e._snapshot.mutatedKeys.has(t.doc.key), e._snapshot.fromCache), e.query.converter), i = -1, a = -1;
						return t.type !== 0 && (i = n.indexOf(t.doc.key), n = n.delete(t.doc.key)), t.type !== 1 && (n = n.add(t.doc), a = n.indexOf(t.doc.key)), {
							type: Wg(t.type),
							doc: r,
							oldIndex: i,
							newIndex: a
						};
					}));
				}
			}(this, t), this._cachedChangesIncludeMetadataChanges = t), this._cachedChanges;
		}
		toJSON() {
			if (this.metadata.hasPendingWrites) throw new B(z.FAILED_PRECONDITION, "QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");
			let t = {};
			t.type = e._jsonSchemaVersion, t.bundleSource = "QuerySnapshot", t.bundleName = zf.newId(), this._firestore._databaseId.database, this._firestore._databaseId.projectId;
			let n = [], r = [], i = [];
			return this.docs.forEach(((e) => {
				e._document !== null && (n.push(e._document), r.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields, "previous")), i.push(e.ref.path));
			})), t.bundle = (this._firestore, this.query._query, t.bundleName, "NOT SUPPORTED"), t;
		}
	}, s_._jsonSchemaVersion = "firestore/querySnapshot/1.0", s_._jsonSchema = {
		type: F("string", s_._jsonSchemaVersion),
		bundleSource: F("string", "QuerySnapshot"),
		bundleName: F("string"),
		bundle: F("string")
	}, (function(e, t = !0) {
		Ms(hn), gt(new Fe("firestore", ((e, { instanceIdentifier: n, options: r }) => {
			let i = e.getProvider("app").getImmediate(), a = new Sg(new Pf(e.getProvider("auth-internal")), new Rf(i, e.getProvider("app-check-internal")), gc(i, n), i);
			return r = {
				useFetchStreams: t,
				...r
			}, a._setSettings(r), a;
		}), "PUBLIC").setMultipleInstances(!0)), xt(Xg, Zg, e), xt(Xg, Zg, "esm2020");
	})();
})), l_ = e((() => {
	c_();
})), u_, d_ = e((() => {
	wn(), hs(), l_(), u_ = class {
		constructor(e) {
			this.app = yt(e), this.auth = ca(this.app), this.db = ff(this.app), this.googleProvider = new Xa(), this.googleProvider.setCustomParameters({ prompt: "select_account" });
		}
		async login(e, t) {
			return ai(this.auth, e, t);
		}
		async loginWithGoogle() {
			return Ri(this.auth, this.googleProvider);
		}
	};
})), f_, p_ = e((() => {
	f_ = class extends Dialog {
		constructor(e) {
			super({
				title: "Runarcana Sync Login",
				content: "\n        <form>\n          <p>Entre com email e senha ou use a conta Google habilitada no Firebase Authentication.</p>\n          <div class=\"form-group\">\n            <label>Email:</label>\n            <input type=\"text\" name=\"email\" />\n          </div>\n          <div class=\"form-group\">\n            <label>Senha:</label>\n            <input type=\"password\" name=\"password\" />\n          </div>\n        </form>\n      ",
				buttons: {
					google: {
						icon: "<i class=\"fab fa-google\"></i>",
						label: "Google",
						callback: async () => {
							try {
								await e.loginWithGoogle(), ui.notifications.info("Runarcana Sync: Login com Google realizado com sucesso!");
							} catch (e) {
								ui.notifications.error("Erro no login com Google: " + e.message);
							}
						}
					},
					login: {
						icon: "<i class=\"fas fa-check\"></i>",
						label: "Login",
						callback: async (t) => {
							let n = t.find("[name=\"email\"]").val(), r = t.find("[name=\"password\"]").val();
							try {
								await e.login(n, r), ui.notifications.info("Runarcana Sync: Login realizado com sucesso!");
							} catch (e) {
								ui.notifications.error("Erro no login: " + e.message);
							}
						}
					}
				}
			});
		}
	};
})), m_, h_ = e((() => {
	l_(), m_ = class extends Dialog {
		constructor(e, t, n) {
			super({
				title: "Vincular Ficha Runarcana",
				content: "<p>Carregando fichas...</p>",
				buttons: {}
			}), this.firebaseClient = e, this.actor = t, this.syncManager = n;
		}
		async render(e, t) {
			super.render(e, t), await this.loadDrafts();
		}
		async loadDrafts() {
			try {
				let e = (await Gg(zg(lf(this.firebaseClient.db, "character_drafts"), Bg("ownerId", "==", this.firebaseClient.auth.currentUser.uid)))).docs.map((e) => ({
					id: e.id,
					...e.data()
				})), t = "<form><div class=\"form-group\"><label>Ficha:</label><select name=\"draftId\">";
				e.forEach((e) => {
					t += `<option value="${e.id}">${e.concept?.name || "Sem Nome"} (${e.classBuild?.classId || "Sem Classe"})</option>`;
				}), t += "</select></div></form>", this.data.content = t, this.data.buttons = { link: {
					icon: "<i class=\"fas fa-link\"></i>",
					label: "Vincular",
					callback: async (e) => {
						let t = e.find("[name=\"draftId\"]").val();
						await this.actor.setFlag("runarcana-sync", "draftId", t), ui.notifications.info(`Actor vinculado à ficha ${t}`), this.syncManager && this.syncManager.startListening(this.actor);
					}
				} }, super.render(!0);
			} catch (e) {
				this.data.content = `<p>Erro ao carregar fichas: ${e.message}</p>`, super.render(!0);
			}
		}
	};
})), g_, __, v_ = e((() => {
	g_ = {
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
	}, __ = [
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
function y_(e, t) {
	let n;
	return function(...r) {
		clearTimeout(n), n = setTimeout(() => e.apply(this, r), t);
	};
}
function b_(e) {
	var t = {};
	for (var n in e) if (e.hasOwnProperty(n)) if (typeof e[n] == "object" && e[n] !== null && !Array.isArray(e[n])) {
		var r = b_(e[n]);
		for (var i in r) r.hasOwnProperty(i) && (t[n + "." + i] = r[i]);
	} else t[n] = e[n];
	return t;
}
function x_(e) {
	let t = foundry.utils.deepClone(e);
	return delete t._stats, delete t.sort, delete t.ownership, delete t.folder, t.flags && (delete t.flags.core, delete t.flags.exportSource), t;
}
function S_(e) {
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
var C_, w_ = e((() => {
	l_(), v_(), C_ = class {
		constructor(e) {
			this.firebaseClient = e, this.subscriptions = /* @__PURE__ */ new Map(), this.activeSyncs = /* @__PURE__ */ new Set(), this.debouncedActorUpdate = y_(this._executeActorUpdate.bind(this), 1e3), this.debouncedItemUpdate = y_(this._executeItemUpdate.bind(this), 1e3);
		}
		startListening(e) {
			let t = e.getFlag("runarcana-sync", "draftId");
			if (!t || this.subscriptions.has(e.id)) return;
			let n = qg(uf(this.firebaseClient.db, "character_drafts", t), async (t) => {
				if (!t.exists()) return;
				let n = t.data();
				this.activeSyncs.add(e.id);
				let r = {};
				for (let [t, i] of Object.entries(g_)) {
					if (t.startsWith("system.abilities")) continue;
					let a = foundry.utils.getProperty(n, i), o = foundry.utils.getProperty(e, t);
					a != null && a !== o && (r[t] = a);
				}
				if (__.forEach(({ foundry: t, firebase: i }) => {
					let a = e.system.abilities?.[t]?.value || 0, o = (foundry.utils.getProperty(n, `attributes.scores.${i}`) || 10) + (foundry.utils.getProperty(n, `attributes.originBonuses.${i}`) || 0);
					a !== o && (r[`system.abilities.${t}.value`] = o);
				}), Object.keys(r).length > 0 && await e.update(r), n.items && Array.isArray(n.items)) {
					let t = n.items, r = e.items.contents, i = [], a = [], o = [];
					for (let e of t) {
						let t = r.find((t) => t.getFlag("runarcana-sync", "sourceId") === e._id || t.id === e._id), n = S_(foundry.utils.deepClone(e));
						if (t) {
							let r = x_(t.toObject()), i = x_(n);
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
						let n = e.getFlag("runarcana-sync", "sourceId") || e.id;
						t.some((e) => e._id === n) || o.push(e.id);
					}
					o.length > 0 && await e.deleteEmbeddedDocuments("Item", o), i.length > 0 && await e.createEmbeddedDocuments("Item", i), a.length > 0 && await e.updateEmbeddedDocuments("Item", a);
				}
				this.activeSyncs.delete(e.id);
			});
			this.subscriptions.set(e.id, n);
		}
		async handleActorUpdate(e, t) {
			if (this.activeSyncs.has(e.id)) return;
			let n = e.getFlag("runarcana-sync", "draftId");
			n && this.debouncedActorUpdate(e, t, n);
		}
		async _executeActorUpdate(e, t, n) {
			let r = uf(this.firebaseClient.db, "character_drafts", n), i = {}, a = b_(t);
			for (let [e, t] of Object.entries(a)) if (!e.startsWith("_") && g_[e]) {
				let n = g_[e];
				i[n] = t;
			}
			Object.keys(i).length > 0 && await Kg(r, i);
		}
		async handleItemUpdate(e) {
			if (this.activeSyncs.has(e.id)) return;
			let t = e.getFlag("runarcana-sync", "draftId");
			t && this.debouncedItemUpdate(e, t);
		}
		async _executeItemUpdate(e, t) {
			let n = e.items.map((e) => {
				let t = e.toObject();
				return t._id = e.getFlag("runarcana-sync", "sourceId") || t._id, x_(t);
			});
			await Kg(uf(this.firebaseClient.db, "character_drafts", t), { items: n });
		}
	};
})), T_ = /* @__PURE__ */ t((() => {
	d_(), p_(), h_(), w_();
	var e = null, t = null;
	function n(e) {
		let t = game.settings.get("runarcana-sync", e);
		return typeof t == "string" ? t.trim() : "";
	}
	function r() {
		let e = n("apiKey"), t = n("authDomain"), r = n("projectId"), i = n("appId"), a = [];
		if (e || a.push("apiKey"), t || a.push("authDomain"), r || a.push("projectId"), a.length > 0) return {
			config: {},
			missingFields: a
		};
		let o = {
			apiKey: e,
			authDomain: t,
			projectId: r
		};
		return i && (o.appId = i), {
			config: o,
			missingFields: []
		};
	}
	function i(e) {
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
	Hooks.once("init", () => {
		game.settings.register("runarcana-sync", "apiKey", {
			name: "Firebase API Key",
			hint: "Sua chave de API web do Firebase (apiKey).",
			scope: "world",
			config: !0,
			type: String,
			default: "",
			requiresReload: !0
		}), game.settings.register("runarcana-sync", "authDomain", {
			name: "Firebase Auth Domain",
			hint: "Seu domínio de autenticação (authDomain). Ex: seu-projeto.firebaseapp.com",
			scope: "world",
			config: !0,
			type: String,
			default: "",
			requiresReload: !0
		}), game.settings.register("runarcana-sync", "projectId", {
			name: "Firebase Project ID",
			hint: "O ID do seu projeto no Firebase (projectId).",
			scope: "world",
			config: !0,
			type: String,
			default: "",
			requiresReload: !0
		}), game.settings.register("runarcana-sync", "appId", {
			name: "Firebase App ID",
			hint: "(Opcional) O ID do aplicativo (appId). Geralmente no formato 1:xxxxxxxxxx:web:xxxxxxxxxx.",
			scope: "world",
			config: !0,
			type: String,
			default: "",
			requiresReload: !0
		}), game.settings.register("runarcana-sync", "firebaseConfigJSON", {
			name: "Firebase Config (JSON Avançado)",
			hint: "(Opcional) Cole o objeto JSON completo do Firebase aqui. Se preenchido, irá sobrepor os campos individuais acima.",
			scope: "world",
			config: !0,
			type: String,
			default: "",
			requiresReload: !0
		});
	}), Hooks.once("ready", () => {
		let a = n("firebaseConfigJSON"), o = {}, s = [];
		try {
			if (a) {
				let e = i(a);
				o = e.config, s = e.missingFields, Object.keys(o).length === 0 && s.length > 0 && console.warn(`Runarcana Sync | JSON Avançado incompleto ou inválido. Campos ausentes: ${s.join(", ")}. Tentando usar campos individuais.`);
			}
			if (Object.keys(o).length === 0) {
				let e = r();
				o = e.config, s = e.missingFields;
			}
			Object.keys(o).length > 0 ? (e = new u_(o), t = new C_(e), game.actors.forEach((e) => t.startListening(e)), console.log("Runarcana Sync | Firebase configurado e rodando.")) : console.warn(`Runarcana Sync | Firebase não configurado. Campos ausentes: ${s.join(", ") || "desconhecidos"}.`);
		} catch (e) {
			console.error("Runarcana Sync | Erro ao iniciar o Firebase:", e), ui.notifications.error("Runarcana Sync: Configuração do Firebase inválida.");
		}
	}), Hooks.on("updateActor", (e, n, r, i) => {
		i !== game.user.id || !t || t.handleActorUpdate(e, n);
	}), Hooks.on("createItem", (e, n, r) => {
		r !== game.user.id || !t || !e.parent || t.handleItemUpdate(e.parent);
	}), Hooks.on("updateItem", (e, n, r, i) => {
		i !== game.user.id || !t || !e.parent || t.handleItemUpdate(e.parent);
	}), Hooks.on("deleteItem", (e, n, r) => {
		r !== game.user.id || !t || !e.parent || t.handleItemUpdate(e.parent);
	}), Hooks.on("getActorSheetHeaderButtons", (n, r) => {
		let i = n.object;
		if (!i || i.documentName !== "Actor") return;
		let a = !!i.getFlag("runarcana-sync", "draftId");
		r.unshift({
			class: "runarcana-sync-btn",
			icon: "fas fa-sync",
			label: a ? "Runarcana (Vinculado)" : "Runarcana Sync",
			onclick: () => {
				if (!e) return ui.notifications.warn("Configure o Firebase nas configurações do módulo primeiro.");
				e.auth.currentUser ? new m_(e, i, t).render(!0) : new f_(e).render(!0);
			}
		});
	}), Hooks.on("getHeaderControlsActorSheetV2", (n, r) => {
		let i = n.document;
		if (!i || i.documentName !== "Actor") return;
		let a = !!i.getFlag("runarcana-sync", "draftId");
		r.unshift({
			action: "runarcana-sync",
			icon: "fas fa-sync",
			label: a ? "Runarcana (Vinculado)" : "Runarcana Sync",
			class: "runarcana-sync-btn",
			onClick: () => {
				if (!e) return ui.notifications.warn("Configure o Firebase nas configurações do módulo primeiro.");
				e.auth.currentUser ? new m_(e, i, t).render(!0) : new f_(e).render(!0);
			}
		});
	});
}));
//#endregion
export default T_();
