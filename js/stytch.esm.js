function _defineProperty(obj, key, value) { key = _toPropertyKey2(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray2(arr, i) { return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2(); }
function _nonIterableRest2() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit2(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles2(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray2(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray2(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray2(arr); }
function _arrayLikeToArray2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _callSuper2(t, o, e) { return o = _getPrototypeOf2(o), _possibleConstructorReturn2(t, _isNativeReflectConstruct2() ? Reflect.construct(o, e || [], _getPrototypeOf2(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn2(self, call) { if (call && (_typeof2(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized2(self); }
function _isNativeReflectConstruct2() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct2 = function _isNativeReflectConstruct2() { return !!t; })(); }
function _getPrototypeOf2(o) { _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf2(o); }
function _assertThisInitialized2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf2(subClass, superClass); }
function _setPrototypeOf2(o, p) { _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf2(o, p); }
function _regeneratorRuntime2() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime2 = function _regeneratorRuntime2() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof2(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof2(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _typeof2(o) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof2(o); }
function _classCallCheck2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function __defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey2(descriptor.key), descriptor); } }
function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) __defineProperties(Constructor.prototype, protoProps); if (staticProps) __defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey2(t) { var i = _toPrimitive2(t, "string"); return "symbol" == _typeof2(i) ? i : String(i); }
function _toPrimitive2(t, r) { if ("object" != _typeof2(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof2(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof$1(o) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$1(o);
}
function _createClass$1(Constructor, protoProps, staticProps) {
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _callSuper$1(t, o, e) {
  return o = _getPrototypeOf$1(o), _possibleConstructorReturn$1(t, _isNativeReflectConstruct$1() ? Reflect.construct(o, e || [], _getPrototypeOf$1(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn$1(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$1(self);
}
function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}
function _wrapNativeSuper$1(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper$1 = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction$1(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct$1(Class, arguments, _getPrototypeOf$1(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf$1(Wrapper, Class);
  };
  return _wrapNativeSuper$1(Class);
}
function _construct$1(t, e, r) {
  if (_isNativeReflectConstruct$1()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf$1(p, r.prototype), p;
}
function _isNativeReflectConstruct$1() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct$1 = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function _isNativeFunction$1(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch (e) {
    return typeof fn === "function";
  }
}
function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf$1(o, p);
}
function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}
var Products;
(function (Products) {
  Products["emailMagicLinks"] = "emailMagicLinks";
  Products["oauth"] = "oauth";
  Products["otp"] = "otp";
  Products["crypto"] = "crypto";
  Products["passwords"] = "passwords";
  Products["passkeys"] = "passkeys";
})(Products || (Products = {}));
var OAuthProviders;
(function (OAuthProviders) {
  OAuthProviders["Google"] = "google";
  OAuthProviders["Microsoft"] = "microsoft";
  OAuthProviders["Apple"] = "apple";
  OAuthProviders["Github"] = "github";
  OAuthProviders["GitLab"] = "gitlab";
  OAuthProviders["Facebook"] = "facebook";
  OAuthProviders["Discord"] = "discord";
  OAuthProviders["Salesforce"] = "salesforce";
  OAuthProviders["Slack"] = "slack";
  OAuthProviders["Amazon"] = "amazon";
  OAuthProviders["Bitbucket"] = "bitbucket";
  OAuthProviders["LinkedIn"] = "linkedin";
  OAuthProviders["Coinbase"] = "coinbase";
  OAuthProviders["Twitch"] = "twitch";
  OAuthProviders["Twitter"] = "twitter";
  OAuthProviders["TikTok"] = "tiktok";
  OAuthProviders["Snapchat"] = "snapchat";
  OAuthProviders["Figma"] = "figma";
  OAuthProviders["Yahoo"] = "yahoo";
})(OAuthProviders || (OAuthProviders = {}));
var Wallets;
(function (Wallets) {
  Wallets["Vessel"] = "Vessel";
  Wallets["Phantom"] = "Phantom";
  Wallets["Metamask"] = "Metamask";
  Wallets["Coinbase"] = "Coinbase";
  Wallets["Binance"] = "Binance";
  Wallets["GenericEthereumWallet"] = "Other Ethereum Wallet";
  Wallets["GenericSolanaWallet"] = "Other Solana Wallet";
})(Wallets || (Wallets = {}));
var OneTapPositions;
(function (OneTapPositions) {
  OneTapPositions["embedded"] = "embedded";
  OneTapPositions["floating"] = "floating";
  OneTapPositions["embeddedOnly"] = "embeddedOnly";
  OneTapPositions["floatingOrEmbedded"] = "floatingOrEmbedded";
  OneTapPositions["forceLegacyEmbedded"] = "forceLegacyEmbedded";
})(OneTapPositions || (OneTapPositions = {}));
var OTPMethods;
(function (OTPMethods) {
  OTPMethods["SMS"] = "sms";
  OTPMethods["WhatsApp"] = "whatsapp";
  OTPMethods["Email"] = "email";
})(OTPMethods || (OTPMethods = {}));
var StytchEventType;
(function (StytchEventType) {
  StytchEventType["MagicLinkLoginOrCreateEvent"] = "MAGIC_LINK_LOGIN_OR_CREATE";
  StytchEventType["OTPsLoginOrCreateEvent"] = "OTP_LOGIN_OR_CREATE";
  StytchEventType["OTPsAuthenticate"] = "OTP_AUTHENTICATE";
  StytchEventType["CryptoWalletAuthenticateStart"] = "CRYPTO_WALLET_AUTHENTICATE_START";
  StytchEventType["CryptoWalletAuthenticate"] = "CRYPTO_WALLET_AUTHENTICATE";
  StytchEventType["PasswordCreate"] = "PASSWORD_CREATE";
  StytchEventType["PasswordAuthenticate"] = "PASSWORD_AUTHENTICATE";
  StytchEventType["PasswordResetByEmailStart"] = "PASSWORD_RESET_BY_EMAIL_START";
  StytchEventType["PasswordResetByEmail"] = "PASSWORD_RESET_BY_EMAIL";
  StytchEventType["PasskeyRegister"] = "PASSKEY_REGISTER";
  StytchEventType["PasskeyAuthenticate"] = "PASSKEY_AUTHENTICATE";
  StytchEventType["PasskeySkip"] = "PASSKEY_SKIP";
  StytchEventType["PasskeyDone"] = "PASSKEY_DONE";
  StytchEventType["AuthenticateFlowComplete"] = "AUTHENTICATE_FLOW_COMPLETE";
  StytchEventType["B2BMagicLinkEmailLoginOrSignup"] = "B2B_MAGIC_LINK_EMAIL_LOGIN_OR_SIGNUP";
  StytchEventType["B2BMagicLinkAuthenticate"] = "B2B_MAGIC_LINK_AUTHENTICATE";
  StytchEventType["B2BMagicLinkEmailDiscoverySend"] = "B2B_MAGIC_LINK_EMAIL_DISCOVERY_SEND";
  StytchEventType["B2BMagicLinkDiscoveryAuthenticate"] = "B2B_MAGIC_LINK_DISCOVERY_AUTHENTICATE";
  StytchEventType["B2BSSOStart"] = "B2B_SSO_START";
  StytchEventType["B2BSSOAuthenticate"] = "B2B_SSO_AUTHENTICATE";
  StytchEventType["B2BOAuthAuthenticate"] = "B2B_OAUTH_AUTHENTICATE";
  StytchEventType["B2BOAuthDiscoveryAuthenticate"] = "B2B_OAUTH_DISCOVERY_AUTHENTICATE";
  StytchEventType["B2BDiscoveryOrganizationsCreate"] = "B2B_DISCOVERY_ORGANIZATIONS_CREATE";
  StytchEventType["B2BDiscoveryIntermediateSessionExchange"] = "B2B_DISCOVERY_INTERMEDIATE_SESSION_EXCHANGE";
  StytchEventType["B2BPasswordAuthenticate"] = "B2B_PASSWORD_AUTHENTICATE";
  StytchEventType["B2BPasswordDiscoveryAuthenticate"] = "B2B_PASSWORD_DISCOVERY_AUTHENTICATE";
  StytchEventType["B2BPasswordResetByEmailStart"] = "B2B_PASSWORD_RESET_BY_EMAIL_START";
  StytchEventType["B2BPasswordResetByEmail"] = "B2B_PASSWORD_RESET_BY_EMAIL";
  StytchEventType["B2BPasswordResetBySession"] = "B2B_PASSWORD_RESET_BY_SESSION";
  StytchEventType["B2BSMSOTPSend"] = "B2B_SMS_OTP_SEND";
  StytchEventType["B2BSMSOTPAuthenticate"] = "B2B_SMS_OTP_AUTHENTICATE";
  StytchEventType["B2BTOTPCreate"] = "B2B_TOTP_CREATE";
  StytchEventType["B2BTOTPAuthenticate"] = "B2B_TOTP_AUTHENTICATE";
  StytchEventType["B2BRecoveryCodesRecover"] = "B2B_RECOVERY_CODES_RECOVER";
  StytchEventType["B2BPasswordDiscoveryResetStart"] = "B2B_PASSWORD_DISCOVERY_RESET_BY_EMAIL_START";
  StytchEventType["B2BDiscoveryPasswordReset"] = "B2B_PASSWORD_DISCOVERY_RESET_BY_EMAIL";
})(StytchEventType || (StytchEventType = {}));
var RNUIProducts;
(function (RNUIProducts) {
  RNUIProducts[RNUIProducts["emailMagicLinks"] = 0] = "emailMagicLinks";
  RNUIProducts[RNUIProducts["oauth"] = 1] = "oauth";
  RNUIProducts[RNUIProducts["otp"] = 2] = "otp";
  RNUIProducts[RNUIProducts["passwords"] = 3] = "passwords";
})(RNUIProducts || (RNUIProducts = {}));
var SDKAPIUnreachableError = /*#__PURE__*/function (_Error) {
  _inherits$1(SDKAPIUnreachableError, _Error);
  function SDKAPIUnreachableError(message, details) {
    var _this;
    _classCallCheck$1(this, SDKAPIUnreachableError);
    _this = _callSuper$1(this, SDKAPIUnreachableError, [message + '\n' + details]);
    _this.message = message + '\n' + details;
    _this.name = 'SDKAPIUnreachableError';
    _this.details = details;
    Object.setPrototypeOf(_assertThisInitialized$1(_this), SDKAPIUnreachableError.prototype);
    return _this;
  }
  return _createClass$1(SDKAPIUnreachableError);
}( /*#__PURE__*/_wrapNativeSuper$1(Error));
var StytchSDKUsageError = /*#__PURE__*/function (_Error2) {
  _inherits$1(StytchSDKUsageError, _Error2);
  function StytchSDKUsageError(methodName, message) {
    var _this2;
    _classCallCheck$1(this, StytchSDKUsageError);
    _this2 = _callSuper$1(this, StytchSDKUsageError);
    _this2.name = 'StytchSDKUsageError';
    _this2.message = "Invalid call to ".concat(methodName, "\n") + message;
    return _this2;
  }
  return _createClass$1(StytchSDKUsageError);
}( /*#__PURE__*/_wrapNativeSuper$1(Error));
var StytchSDKSchemaError = /*#__PURE__*/function (_Error3) {
  _inherits$1(StytchSDKSchemaError, _Error3);
  function StytchSDKSchemaError(schemaError) {
    var _this3;
    _classCallCheck$1(this, StytchSDKSchemaError);
    var _a;
    _this3 = _callSuper$1(this, StytchSDKSchemaError);
    _this3.name = 'StytchSDKSchemaError';
    var messages = (_a = schemaError.body) === null || _a === void 0 ? void 0 : _a.map(function (err) {
      return "".concat(err.dataPath, ": ").concat(err.message);
    }).join('\n');
    _this3.message = "[400] Request does not match expected schema\n".concat(messages);
    return _this3;
  }
  return _createClass$1(StytchSDKSchemaError);
}( /*#__PURE__*/_wrapNativeSuper$1(Error));
var StytchSDKAPIError = /*#__PURE__*/function (_Error4) {
  _inherits$1(StytchSDKAPIError, _Error4);
  function StytchSDKAPIError(details) {
    var _this4;
    _classCallCheck$1(this, StytchSDKAPIError);
    _this4 = _callSuper$1(this, StytchSDKAPIError);
    _this4.name = 'StytchSDKAPIError';
    var status_code = details.status_code,
      error_type = details.error_type,
      error_message = details.error_message,
      error_url = details.error_url,
      request_id = details.request_id;
    _this4.error_type = error_type;
    _this4.error_message = error_message;
    _this4.error_url = error_url;
    _this4.request_id = request_id;
    _this4.status_code = status_code;
    _this4.message = "[".concat(status_code, "] ").concat(error_type, "\n") + "".concat(error_message, "\n") + "See ".concat(error_url, " for more information.\n") + (request_id ? "request_id: ".concat(request_id, "\n") : '');
    return _this4;
  }
  return _createClass$1(StytchSDKAPIError);
}( /*#__PURE__*/_wrapNativeSuper$1(Error));
var UNRECOVERABLE_ERROR_TYPES = ['unauthorized_credentials', 'user_unauthenticated', 'invalid_secret_authentication', 'session_not_found'];
var StytchError = /*#__PURE__*/function (_Error5) {
  _inherits$1(StytchError, _Error5);
  function StytchError(name, message) {
    var _this5;
    _classCallCheck$1(this, StytchError);
    _this5 = _callSuper$1(this, StytchError, [message]);
    _this5.name = name;
    return _this5;
  }
  return _createClass$1(StytchError);
}( /*#__PURE__*/_wrapNativeSuper$1(Error));
var StytchAPIUnreachableError = /*#__PURE__*/function (_StytchError) {
  _inherits$1(StytchAPIUnreachableError, _StytchError);
  function StytchAPIUnreachableError(details) {
    var _this6;
    _classCallCheck$1(this, StytchAPIUnreachableError);
    _this6 = _callSuper$1(this, StytchAPIUnreachableError, ['StytchAPIUnreachableError', details]);
    Object.setPrototypeOf(_assertThisInitialized$1(_this6), StytchAPIUnreachableError.prototype);
    return _this6;
  }
  return _createClass$1(StytchAPIUnreachableError);
}(StytchError);
var StytchAPISchemaError = /*#__PURE__*/function (_StytchError2) {
  _inherits$1(StytchAPISchemaError, _StytchError2);
  function StytchAPISchemaError(schemaError) {
    _classCallCheck$1(this, StytchAPISchemaError);
    var _a;
    var messages = (_a = schemaError.body) === null || _a === void 0 ? void 0 : _a.map(function (err) {
      return "".concat(err.dataPath, ": ").concat(err.message);
    }).join('\n');
    return _callSuper$1(this, StytchAPISchemaError, ['StytchAPISchemaError', "Request does not match expected schema\n".concat(messages)]);
  }
  return _createClass$1(StytchAPISchemaError);
}(StytchError);
var StytchAPIError = /*#__PURE__*/function (_StytchError3) {
  _inherits$1(StytchAPIError, _StytchError3);
  function StytchAPIError(details) {
    var _this7;
    _classCallCheck$1(this, StytchAPIError);
    var status_code = details.status_code,
      error_type = details.error_type,
      error_message = details.error_message,
      error_url = details.error_url,
      request_id = details.request_id;
    _this7 = _callSuper$1(this, StytchAPIError, ['StytchAPIError', "[".concat(status_code, "] ").concat(error_type, "\n") + "".concat(error_message, "\n") + "See ".concat(error_url, " for more information.\n") + (request_id ? "request_id: ".concat(request_id, "\n") : '')]);
    _this7.error_type = error_type;
    _this7.error_message = error_message;
    _this7.error_url = error_url;
    _this7.request_id = request_id;
    _this7.status_code = status_code;
    return _this7;
  }
  return _createClass$1(StytchAPIError);
}(StytchError);
var StytchSDKError = /*#__PURE__*/function (_StytchError4) {
  _inherits$1(StytchSDKError, _StytchError4);
  function StytchSDKError(name, description, options) {
    var _this8;
    _classCallCheck$1(this, StytchSDKError);
    _this8 = _callSuper$1(this, StytchSDKError, [name, description]);
    _this8.options = options;
    return _this8;
  }
  return _createClass$1(StytchSDKError);
}(StytchError);
var NoCurrentSessionError = /*#__PURE__*/function (_StytchSDKError) {
  _inherits$1(NoCurrentSessionError, _StytchSDKError);
  function NoCurrentSessionError() {
    _classCallCheck$1(this, NoCurrentSessionError);
    return _callSuper$1(this, NoCurrentSessionError, ['NoCurrentSessionError', 'There is no session currently available. Make sure the user is authenticated with a valid session.']);
  }
  return _createClass$1(NoCurrentSessionError);
}(StytchSDKError);
var InternalError = /*#__PURE__*/function (_StytchSDKError2) {
  _inherits$1(InternalError, _StytchSDKError2);
  function InternalError(message) {
    _classCallCheck$1(this, InternalError);
    return _callSuper$1(this, InternalError, ['InternalError', message ? message : 'An internal error has occurred. Please contact Stytch if this occurs.']);
  }
  return _createClass$1(InternalError);
}(StytchSDKError);
var NoBiometricsRegistrationError = /*#__PURE__*/function (_StytchSDKError3) {
  _inherits$1(NoBiometricsRegistrationError, _StytchSDKError3);
  function NoBiometricsRegistrationError() {
    _classCallCheck$1(this, NoBiometricsRegistrationError);
    return _callSuper$1(this, NoBiometricsRegistrationError, ['NoBiometricsRegistrationError', 'There is no biometric registration available. Authenticate with another method and add a new biometric registration first.']);
  }
  return _createClass$1(NoBiometricsRegistrationError);
}(StytchSDKError);
var BiometricsUnavailableError = /*#__PURE__*/function (_StytchSDKError4) {
  _inherits$1(BiometricsUnavailableError, _StytchSDKError4);
  function BiometricsUnavailableError() {
    _classCallCheck$1(this, BiometricsUnavailableError);
    return _callSuper$1(this, BiometricsUnavailableError, ['BiometricsUnavailableError', 'Biometrics is not available on the device.']);
  }
  return _createClass$1(BiometricsUnavailableError);
}(StytchSDKError);
var KeyInvalidatedError = /*#__PURE__*/function (_StytchSDKError5) {
  _inherits$1(KeyInvalidatedError, _StytchSDKError5);
  function KeyInvalidatedError() {
    _classCallCheck$1(this, KeyInvalidatedError);
    return _callSuper$1(this, KeyInvalidatedError, ['KeyInvalidatedError', 'The biometrics enrollment on the device has changed.']);
  }
  return _createClass$1(KeyInvalidatedError);
}(StytchSDKError);
var KeystoreUnavailableError = /*#__PURE__*/function (_StytchSDKError6) {
  _inherits$1(KeystoreUnavailableError, _StytchSDKError6);
  function KeystoreUnavailableError() {
    _classCallCheck$1(this, KeystoreUnavailableError);
    return _callSuper$1(this, KeystoreUnavailableError, ['KeystoreUnavailableError', 'The Android keystore is unavailable on the device. Consider setting allowFallbackToCleartext to true.']);
  }
  return _createClass$1(KeystoreUnavailableError);
}(StytchSDKError);
var NoBiometricsEnrolledError = /*#__PURE__*/function (_StytchSDKError7) {
  _inherits$1(NoBiometricsEnrolledError, _StytchSDKError7);
  function NoBiometricsEnrolledError() {
    _classCallCheck$1(this, NoBiometricsEnrolledError);
    return _callSuper$1(this, NoBiometricsEnrolledError, ['NoBiometricsEnrolledError', 'There is no biometric factor enrolled on the device. Add a biometric factor in the device settings.']);
  }
  return _createClass$1(NoBiometricsEnrolledError);
}(StytchSDKError);
var UserCancellationError = /*#__PURE__*/function (_StytchSDKError8) {
  _inherits$1(UserCancellationError, _StytchSDKError8);
  function UserCancellationError() {
    _classCallCheck$1(this, UserCancellationError);
    return _callSuper$1(this, UserCancellationError, ['UserCancellationError', 'The user canceled the prompt. Ask the user to try again.']);
  }
  return _createClass$1(UserCancellationError);
}(StytchSDKError);
var UserLockedOutError = /*#__PURE__*/function (_StytchSDKError9) {
  _inherits$1(UserLockedOutError, _StytchSDKError9);
  function UserLockedOutError() {
    _classCallCheck$1(this, UserLockedOutError);
    return _callSuper$1(this, UserLockedOutError, ['UserLockedOutError', 'The user has been locked out due to too many failed attempts. Ask the user to try again later.']);
  }
  return _createClass$1(UserLockedOutError);
}(StytchSDKError);
var DeviceCredentialsNotAllowedError = /*#__PURE__*/function (_StytchSDKError10) {
  _inherits$1(DeviceCredentialsNotAllowedError, _StytchSDKError10);
  function DeviceCredentialsNotAllowedError() {
    _classCallCheck$1(this, DeviceCredentialsNotAllowedError);
    return _callSuper$1(this, DeviceCredentialsNotAllowedError, ['DeviceCredentialsNotAllowedError', 'The device credentials allowment is mismatched. Change the allowDeviceCredentials parameter to be the same in both the register and authenticate methods.']);
  }
  return _createClass$1(DeviceCredentialsNotAllowedError);
}(StytchSDKError);
var MissingGoogleClientIDError = /*#__PURE__*/function (_StytchSDKError11) {
  _inherits$1(MissingGoogleClientIDError, _StytchSDKError11);
  function MissingGoogleClientIDError() {
    _classCallCheck$1(this, MissingGoogleClientIDError);
    return _callSuper$1(this, MissingGoogleClientIDError, ['MissingGoogleClientIDError', 'No Google client ID was found in the project.']);
  }
  return _createClass$1(MissingGoogleClientIDError);
}(StytchSDKError);
var MissingPKCEError = /*#__PURE__*/function (_StytchSDKError12) {
  _inherits$1(MissingPKCEError, _StytchSDKError12);
  function MissingPKCEError() {
    _classCallCheck$1(this, MissingPKCEError);
    return _callSuper$1(this, MissingPKCEError, ['MissingPKCEError', 'Make sure this flow is completed on the same device on which it was started.']);
  }
  return _createClass$1(MissingPKCEError);
}(StytchSDKError);
var MissingAuthorizationCredentialIDTokenError = /*#__PURE__*/function (_StytchSDKError13) {
  _inherits$1(MissingAuthorizationCredentialIDTokenError, _StytchSDKError13);
  function MissingAuthorizationCredentialIDTokenError() {
    _classCallCheck$1(this, MissingAuthorizationCredentialIDTokenError);
    return _callSuper$1(this, MissingAuthorizationCredentialIDTokenError, ['MissingAuthorizationCredentialIDTokenError', 'The authorization credential is missing an ID token.']);
  }
  return _createClass$1(MissingAuthorizationCredentialIDTokenError);
}(StytchSDKError);
var InvalidAuthorizationCredentialError = /*#__PURE__*/function (_StytchSDKError14) {
  _inherits$1(InvalidAuthorizationCredentialError, _StytchSDKError14);
  function InvalidAuthorizationCredentialError() {
    _classCallCheck$1(this, InvalidAuthorizationCredentialError);
    return _callSuper$1(this, InvalidAuthorizationCredentialError, ['InvalidAuthorizationCredentialError', 'The authorization credential is invalid. Verify that OAuth is set up correctly in the developer console, and call the start flow method.']);
  }
  return _createClass$1(InvalidAuthorizationCredentialError);
}(StytchSDKError);
var NoCredentialsPresentError = /*#__PURE__*/function (_StytchSDKError15) {
  _inherits$1(NoCredentialsPresentError, _StytchSDKError15);
  function NoCredentialsPresentError() {
    _classCallCheck$1(this, NoCredentialsPresentError);
    return _callSuper$1(this, NoCredentialsPresentError, ['NoCredentialsPresentError', 'The user did not provide credentials for a Google OneTap attempt']);
  }
  return _createClass$1(NoCredentialsPresentError);
}(StytchSDKError);
var MissingPublicKeyError = /*#__PURE__*/function (_StytchSDKError16) {
  _inherits$1(MissingPublicKeyError, _StytchSDKError16);
  function MissingPublicKeyError() {
    _classCallCheck$1(this, MissingPublicKeyError);
    return _callSuper$1(this, MissingPublicKeyError, ['MissingPublicKeyError', 'Failed to retrieve the public key. Add a new biometric registration.']);
  }
  return _createClass$1(MissingPublicKeyError);
}(StytchSDKError);
var ChallengeSigningFailedError = /*#__PURE__*/function (_StytchSDKError17) {
  _inherits$1(ChallengeSigningFailedError, _StytchSDKError17);
  function ChallengeSigningFailedError() {
    _classCallCheck$1(this, ChallengeSigningFailedError);
    return _callSuper$1(this, ChallengeSigningFailedError, ['ChallengeSigningFailedError', 'Failed to sign the challenge with the key.']);
  }
  return _createClass$1(ChallengeSigningFailedError);
}(StytchSDKError);
var SDKNotConfiguredError = /*#__PURE__*/function (_StytchSDKError18) {
  _inherits$1(SDKNotConfiguredError, _StytchSDKError18);
  function SDKNotConfiguredError() {
    _classCallCheck$1(this, SDKNotConfiguredError);
    return _callSuper$1(this, SDKNotConfiguredError, ['SDKNotConfiguredError', 'Stytch client is not confiured. You must call the configure method before using the SDK']);
  }
  return _createClass$1(SDKNotConfiguredError);
}(StytchSDKError);
var FailedCodeChallengeError = /*#__PURE__*/function (_StytchSDKError19) {
  _inherits$1(FailedCodeChallengeError, _StytchSDKError19);
  function FailedCodeChallengeError() {
    _classCallCheck$1(this, FailedCodeChallengeError);
    return _callSuper$1(this, FailedCodeChallengeError, ['FailedCodeChallengeError', 'Failed to create a code challenge']);
  }
  return _createClass$1(FailedCodeChallengeError);
}(StytchSDKError);
var PasskeysUnsupportedError = /*#__PURE__*/function (_StytchSDKError20) {
  _inherits$1(PasskeysUnsupportedError, _StytchSDKError20);
  function PasskeysUnsupportedError() {
    _classCallCheck$1(this, PasskeysUnsupportedError);
    return _callSuper$1(this, PasskeysUnsupportedError, ['PasskeysUnsupportedError', 'Passkeys are not supported on this device']);
  }
  return _createClass$1(PasskeysUnsupportedError);
}(StytchSDKError);
var FailedToDecryptDataError = /*#__PURE__*/function (_StytchSDKError21) {
  _inherits$1(FailedToDecryptDataError, _StytchSDKError21);
  function FailedToDecryptDataError() {
    _classCallCheck$1(this, FailedToDecryptDataError);
    return _callSuper$1(this, FailedToDecryptDataError, ['FailedToDecryptDataError', 'Failed to decrypt user data']);
  }
  return _createClass$1(FailedToDecryptDataError);
}(StytchSDKError);
var BiometricsFailedError = /*#__PURE__*/function (_StytchSDKError22) {
  _inherits$1(BiometricsFailedError, _StytchSDKError22);
  function BiometricsFailedError() {
    _classCallCheck$1(this, BiometricsFailedError);
    return _callSuper$1(this, BiometricsFailedError, ['BiometricsFailedError', 'Biometric authentication failed']);
  }
  return _createClass$1(BiometricsFailedError);
}(StytchSDKError);
var InvalidStartUrlError = /*#__PURE__*/function (_StytchSDKError23) {
  _inherits$1(InvalidStartUrlError, _StytchSDKError23);
  function InvalidStartUrlError() {
    _classCallCheck$1(this, InvalidStartUrlError);
    return _callSuper$1(this, InvalidStartUrlError, ['InvalidStartUrlError', 'The start URL was invalid or improperly formatted.']);
  }
  return _createClass$1(InvalidStartUrlError);
}(StytchSDKError);
var InvalidRedirectSchemeError = /*#__PURE__*/function (_StytchSDKError24) {
  _inherits$1(InvalidRedirectSchemeError, _StytchSDKError24);
  function InvalidRedirectSchemeError() {
    _classCallCheck$1(this, InvalidRedirectSchemeError);
    return _callSuper$1(this, InvalidRedirectSchemeError, ['InvalidRedirectSchemeError', 'The scheme from the given redirect urls was invalid. Possible reasons include: nil scheme, non-custom scheme (using http or https), or differing schemes for login/signup urls.']);
  }
  return _createClass$1(InvalidRedirectSchemeError);
}(StytchSDKError);
var MissingUrlError = /*#__PURE__*/function (_StytchSDKError25) {
  _inherits$1(MissingUrlError, _StytchSDKError25);
  function MissingUrlError() {
    _classCallCheck$1(this, MissingUrlError);
    return _callSuper$1(this, MissingUrlError, ['MissingUrlError', 'The underlying web authentication service failed to return a URL.']);
  }
  return _createClass$1(MissingUrlError);
}(StytchSDKError);
var InvalidCredentialTypeError = /*#__PURE__*/function (_StytchSDKError26) {
  _inherits$1(InvalidCredentialTypeError, _StytchSDKError26);
  function InvalidCredentialTypeError() {
    _classCallCheck$1(this, InvalidCredentialTypeError);
    return _callSuper$1(this, InvalidCredentialTypeError, ['InvalidCredentialTypeError', 'The public key credential type was not of the expected type.']);
  }
  return _createClass$1(InvalidCredentialTypeError);
}(StytchSDKError);
var MissingAttestationObjectError = /*#__PURE__*/function (_StytchSDKError27) {
  _inherits$1(MissingAttestationObjectError, _StytchSDKError27);
  function MissingAttestationObjectError() {
    _classCallCheck$1(this, MissingAttestationObjectError);
    return _callSuper$1(this, MissingAttestationObjectError, ['MissingAttestationObjectError', 'The public key credential is missing the attestation object.']);
  }
  return _createClass$1(MissingAttestationObjectError);
}(StytchSDKError);
var JSONDataNotConvertibleToStringError = /*#__PURE__*/function (_StytchSDKError28) {
  _inherits$1(JSONDataNotConvertibleToStringError, _StytchSDKError28);
  function JSONDataNotConvertibleToStringError() {
    _classCallCheck$1(this, JSONDataNotConvertibleToStringError);
    return _callSuper$1(this, JSONDataNotConvertibleToStringError, ['JSONDataNotConvertibleToStringError', 'JSON data unable to be converted to String type.']);
  }
  return _createClass$1(JSONDataNotConvertibleToStringError);
}(StytchSDKError);
var RandomNumberGenerationFailed = /*#__PURE__*/function (_StytchSDKError29) {
  _inherits$1(RandomNumberGenerationFailed, _StytchSDKError29);
  function RandomNumberGenerationFailed() {
    _classCallCheck$1(this, RandomNumberGenerationFailed);
    return _callSuper$1(this, RandomNumberGenerationFailed, ['RandomNumberGenerationFailed', 'Random number generation failed']);
  }
  return _createClass$1(RandomNumberGenerationFailed);
}(StytchSDKError);
var PasskeysInvalidEncoding = /*#__PURE__*/function (_StytchSDKError30) {
  _inherits$1(PasskeysInvalidEncoding, _StytchSDKError30);
  function PasskeysInvalidEncoding() {
    _classCallCheck$1(this, PasskeysInvalidEncoding);
    return _callSuper$1(this, PasskeysInvalidEncoding, ['PasskeysInvalidEncoding', 'Invalid passkey encoding']);
  }
  return _createClass$1(PasskeysInvalidEncoding);
}(StytchSDKError);
var PasskeysMisconfigured = /*#__PURE__*/function (_StytchSDKError31) {
  _inherits$1(PasskeysMisconfigured, _StytchSDKError31);
  function PasskeysMisconfigured() {
    _classCallCheck$1(this, PasskeysMisconfigured);
    return _callSuper$1(this, PasskeysMisconfigured, ['PasskeysMisconfigured', 'Passkeys are misconfigured. Verify that you have added the correct associated domain for your application, and that the signing information is correct.']);
  }
  return _createClass$1(PasskeysMisconfigured);
}(StytchSDKError);
var SignInWithAppleMisconfigured = /*#__PURE__*/function (_StytchSDKError32) {
  _inherits$1(SignInWithAppleMisconfigured, _StytchSDKError32);
  function SignInWithAppleMisconfigured() {
    _classCallCheck$1(this, SignInWithAppleMisconfigured);
    return _callSuper$1(this, SignInWithAppleMisconfigured, ['SignInWithAppleMisconfigured', 'Sign In With Apple is misconfigured. Verify that you have correctly configured Apple OAuth in the Stytch Dashboard and added the Sign In With Apple capability to your project.']);
  }
  return _createClass$1(SignInWithAppleMisconfigured);
}(StytchSDKError);
function errorToStytchError(error) {
  switch (error.message) {
    case 'internal_error':
      return new InternalError(error.message);
    case 'no_current_session':
      return new NoCurrentSessionError();
    case 'no_biometrics_registration':
      return new NoBiometricsRegistrationError();
    case 'biometrics_unavailable':
      return new BiometricsUnavailableError();
    case 'key_invalidated':
      return new KeyInvalidatedError();
    case 'device_hardware_error':
      return new BiometricsUnavailableError();
    case 'biometrics_not_available':
      return new BiometricsUnavailableError();
    case 'no_biometrics_enrolled':
      return new NoBiometricsEnrolledError();
    case 'keystore_unavailable':
      return new KeystoreUnavailableError();
    case 'no_biometric_key':
      return new KeyInvalidatedError();
    case 'device_credentials_not_allowed':
      return new DeviceCredentialsNotAllowedError();
    case 'user_cancellation':
      return new UserCancellationError();
    case 'user_locked_out':
      return new UserLockedOutError();
    case 'google_onetap_missing_id_token':
      return new MissingAuthorizationCredentialIDTokenError();
    case 'google_onetap_missing_member':
      return new InvalidAuthorizationCredentialError();
    case 'oauth_apple_missing_id_token':
      return new MissingAuthorizationCredentialIDTokenError();
    case 'oauth_apple_credential_invalid':
      return new InvalidAuthorizationCredentialError();
    case 'missing_public_key':
      return new MissingPublicKeyError();
    case 'challenge_signing_failed':
      return new ChallengeSigningFailedError();
    case 'missing_authorization_credential_id_token':
      return new MissingAuthorizationCredentialIDTokenError();
    case 'invalid_authorization_credential':
      return new InvalidAuthorizationCredentialError();
    case 'no_credentials_present':
      return new NoCredentialsPresentError();
    case 'sdk_not_configured':
      return new SDKNotConfiguredError();
    case 'failed_code_challenge':
      return new FailedCodeChallengeError();
    case 'passkeys_unsupported':
      return new PasskeysUnsupportedError();
    case 'failed_to_decrypt_data':
      return new FailedToDecryptDataError();
    case 'biometrics_failed':
      return new BiometricsFailedError();
    case 'invalid_start_url':
      return new InvalidStartUrlError();
    case 'invalid_redirect_scheme':
      return new InvalidRedirectSchemeError();
    case 'missing_url':
      return new MissingUrlError();
    case 'invalid_credential_type':
      return new InvalidCredentialTypeError();
    case 'missing_attestation_object':
      return new MissingAttestationObjectError();
    case 'json_data_not_convertible_to_string':
      return new JSONDataNotConvertibleToStringError();
    case 'random_number_generation_failed':
      return new RandomNumberGenerationFailed();
    case 'passkeys_invalid_encoding':
      return new PasskeysInvalidEncoding();
    case 'passkeys_misconfigured':
      return new PasskeysMisconfigured();
    case 'signinwithapple_misconfigured':
      return new SignInWithAppleMisconfigured();
    default:
      return new StytchSDKError(error.name, error.message);
  }
}
var B2BProducts;
(function (B2BProducts) {
  B2BProducts["emailMagicLinks"] = "emailMagicLinks";
  B2BProducts["emailOtp"] = "emailOtp";
  B2BProducts["sso"] = "sso";
  B2BProducts["passwords"] = "passwords";
  B2BProducts["oauth"] = "oauth";
})(B2BProducts || (B2BProducts = {}));
var AuthFlowType;
(function (AuthFlowType) {
  AuthFlowType["Discovery"] = "Discovery";
  AuthFlowType["Organization"] = "Organization";
  AuthFlowType["PasswordReset"] = "PasswordReset";
})(AuthFlowType || (AuthFlowType = {}));
var RedirectURLType;
(function (RedirectURLType) {
  RedirectURLType["ResetPassword"] = "reset_password";
})(RedirectURLType || (RedirectURLType = {}));
var B2BMFAProducts;
(function (B2BMFAProducts) {
  B2BMFAProducts["smsOtp"] = "smsOtp";
  B2BMFAProducts["totp"] = "totp";
})(B2BMFAProducts || (B2BMFAProducts = {}));
var B2BOAuthProviders;
(function (B2BOAuthProviders) {
  B2BOAuthProviders["Google"] = "google";
  B2BOAuthProviders["Microsoft"] = "microsoft";
  B2BOAuthProviders["HubSpot"] = "hubspot";
  B2BOAuthProviders["Slack"] = "slack";
  B2BOAuthProviders["GitHub"] = "github";
})(B2BOAuthProviders || (B2BOAuthProviders = {}));
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike) {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch (e) {
    return typeof fn === "function";
  }
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
var TEST_API_URL = 'https://test.stytch.com';
var LIVE_API_URL = 'https://api.stytch.com';
var CLIENTSIDE_SERVICES_IFRAME_URL = 'https://js.stytch.com/clientside-services/index.html';
var STYTCH_DFP_BACKEND_URL = "https://telemetry.stytch.com";
var STYTCH_DFP_CDN_URL = "https://elements.stytch.com";
var GOOGLE_ONE_TAP_HOST = 'https://accounts.google.com/gsi';
var GOOGLE_ONE_TAP_SCRIPT_URL = "".concat(GOOGLE_ONE_TAP_HOST, "/client");
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __awaiter$1(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
var RetriableErrorType;
(function (RetriableErrorType) {
  RetriableErrorType["RequiredCatcha"] = "Catcha Required";
})(RetriableErrorType || (RetriableErrorType = {}));
var RetriableError = /*#__PURE__*/function (_Error) {
  _inherits(RetriableError, _Error);
  function RetriableError(type) {
    var _this;
    _classCallCheck(this, RetriableError);
    _this = _callSuper(this, RetriableError, [type]);
    _this.type = type;
    return _this;
  }
  return _createClass(RetriableError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
function _retriableFetchSDK(_ref) {
  var method = _ref.method,
    finalURL = _ref.finalURL,
    basicAuthHeader = _ref.basicAuthHeader,
    xSDKClientHeader = _ref.xSDKClientHeader,
    xSDKParentHostHeader = _ref.xSDKParentHostHeader,
    body = _ref.body,
    retryCallback = _ref.retryCallback;
  return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var req;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          req = {
            method: method,
            finalURL: finalURL,
            basicAuthHeader: basicAuthHeader,
            xSDKClientHeader: xSDKClientHeader,
            xSDKParentHostHeader: xSDKParentHostHeader,
            body: body
          };
          _context.prev = 1;
          _context.next = 4;
          return baseFetchSDK(req);
        case 4:
          return _context.abrupt("return", _context.sent);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](1);
          if (!(_context.t0 instanceof RetriableError)) {
            _context.next = 16;
            break;
          }
          _context.next = 12;
          return retryCallback(_context.t0, req);
        case 12:
          req = _context.sent;
          _context.next = 15;
          return baseFetchSDK(req);
        case 15:
          return _context.abrupt("return", _context.sent);
        case 16:
          throw _context.t0;
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 7]]);
  }));
}
function baseFetchSDK(_ref2) {
  var method = _ref2.method,
    finalURL = _ref2.finalURL,
    basicAuthHeader = _ref2.basicAuthHeader,
    xSDKClientHeader = _ref2.xSDKClientHeader,
    xSDKParentHostHeader = _ref2.xSDKParentHostHeader,
    body = _ref2.body;
  var _a;
  return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var headers, fetchOpts, resp, _respData, respError, respData;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          headers = {
            Authorization: basicAuthHeader,
            'Content-Type': 'application/json',
            'X-SDK-Client': xSDKClientHeader
          };
          if (xSDKParentHostHeader) {
            headers['X-SDK-Parent-Host'] = xSDKParentHostHeader;
          }
          fetchOpts = {
            method: method,
            headers: headers,
            body: body && JSON.stringify(body),
            credentials: 'include'
          };
          _context2.prev = 3;
          _context2.next = 6;
          return fetch(finalURL, fetchOpts);
        case 6:
          resp = _context2.sent;
          _context2.next = 14;
          break;
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](3);
          if (!(_context2.t0.message === 'Failed to fetch')) {
            _context2.next = 13;
            break;
          }
          throw new StytchAPIUnreachableError('Unable to contact our servers.');
        case 13:
          throw _context2.t0;
        case 14:
          if (!(resp.status <= 299)) {
            _context2.next = 25;
            break;
          }
          _context2.prev = 15;
          _context2.next = 18;
          return resp.json();
        case 18:
          _respData = _context2.sent;
          return _context2.abrupt("return", _respData.data);
        case 22:
          _context2.prev = 22;
          _context2.t1 = _context2["catch"](15);
          throw new StytchAPIUnreachableError('Invalid JSON response from our servers.');
        case 25:
          if (!(resp.status !== 200 && ((_a = resp.headers.get('content-type')) === null || _a === void 0 ? void 0 : _a.includes('application/json')))) {
            _context2.next = 38;
            break;
          }
          _context2.prev = 26;
          _context2.next = 29;
          return resp.json();
        case 29:
          respError = _context2.sent;
          _context2.next = 35;
          break;
        case 32:
          _context2.prev = 32;
          _context2.t2 = _context2["catch"](26);
          throw new StytchAPIUnreachableError('Invalid or no response from server');
        case 35:
          if (!('body' in respError || 'params' in respError || 'query' in respError)) {
            _context2.next = 37;
            break;
          }
          throw new StytchAPISchemaError(respError);
        case 37:
          throw new StytchAPIError(respError);
        case 38:
          _context2.prev = 38;
          _context2.next = 41;
          return resp.text();
        case 41:
          respData = _context2.sent;
          _context2.next = 47;
          break;
        case 44:
          _context2.prev = 44;
          _context2.t3 = _context2["catch"](38);
          throw new StytchAPIUnreachableError('Invalid response from our servers.');
        case 47:
          if (!respData.includes('Captcha required')) {
            _context2.next = 49;
            break;
          }
          throw new RetriableError(RetriableErrorType.RequiredCatcha);
        case 49:
          throw new StytchAPIUnreachableError('Invalid response from our servers.');
        case 50:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 9], [15, 22], [26, 32], [38, 44]]);
  }));
}
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}
var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function validate$1(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate$1(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }
  return uuid;
}
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80;
  return stringify(rnds);
}
var ModulePromiseCache = {};
function loadESModule(url, moduleFromGlobalScope) {
  return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (!(ModulePromiseCache[url] !== undefined)) {
            _context3.next = 2;
            break;
          }
          return _context3.abrupt("return", ModulePromiseCache[url]);
        case 2:
          ModulePromiseCache[url] = loadESModuleFromNetwork(url, moduleFromGlobalScope);
          return _context3.abrupt("return", ModulePromiseCache[url]);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
}
function loadESModuleFromNetwork(url, moduleFromGlobalScope) {
  return new Promise(function (resolve, reject) {
    var maybeScript = findScript(url);
    if (maybeScript && maybeScript.dataset.loaded === 'true') {
      try {
        resolve(moduleFromGlobalScope());
      } catch (err) {
        return reject(new Error("".concat(url, " already loaded, but module was not found in global scope: ").concat(err)));
      }
    }
    var script = createScript(url);
    script.addEventListener('load', function () {
      script.dataset.loaded = 'true';
      try {
        resolve(moduleFromGlobalScope());
      } catch (err) {
        reject(new Error("".concat(url, " was loaded, but module was not found in global scope: ").concat(err)));
      }
    });
    script.addEventListener('error', function (err) {
      reject(new Error("".concat(url, " could not be loaded: ").concat(err)));
    });
  });
}
var findScriptsInDom = function findScriptsInDom(url) {
  return document.querySelectorAll("script[src=\"".concat(url, "\"]"));
};
function findScript(url) {
  var scripts = findScriptsInDom(url);
  if (scripts[0]) {
    return scripts[0];
  }
}
function createScript(url) {
  var script = document.createElement('script');
  script.setAttribute('src', url);
  script.setAttribute('async', 'true');
  script.setAttribute('defer', 'true');
  document.head.appendChild(script);
  return script;
}
var getLiveApiURL = function getLiveApiURL(opts) {
  var _a, _b, _c;
  if ((_a = opts === null || opts === void 0 ? void 0 : opts.endpointOptions) === null || _a === void 0 ? void 0 : _a.apiDomain) {
    return "https://".concat(opts.endpointOptions.apiDomain);
  }
  return (_c = (_b = opts === null || opts === void 0 ? void 0 : opts.endpoints) === null || _b === void 0 ? void 0 : _b.liveAPIURL) !== null && _c !== void 0 ? _c : LIVE_API_URL;
};
var STYTCH_BADGE = ['[Stytch]'];
var DEBUG = false;
var logger = {
  debug: function debug() {
    return DEBUG;
  },
  log: function log() {
    var _console;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (_console = console).log.apply(_console, STYTCH_BADGE.concat(args));
  },
  warn: function warn() {
    var _console2;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return (_console2 = console).warn.apply(_console2, STYTCH_BADGE.concat(args));
  },
  error: function error() {
    var _console3;
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return (_console3 = console).error.apply(_console3, STYTCH_BADGE.concat(args));
  }
};
var trailer = "\nYou can find your public token at https://stytch.com/dashboard/api-keys.";
var checkPublicToken = function checkPublicToken(publicToken) {
  if (typeof publicToken !== 'string') {
    logger.warn("Public token is malformed. Expected a string, got ".concat(_typeof(publicToken), ".").concat(trailer));
  } else if (publicToken === '') {
    logger.warn("Public token is malformed. Expected \"public-token-...\", got an empty string.".concat(trailer));
  } else if (!publicToken.startsWith('public-token-')) {
    logger.warn("Public token is malformed. Expected \"public-token-...\", got ".concat(publicToken, ".").concat(trailer));
  }
};
var checkNotSSR = function checkNotSSR(clientName) {
  var codeSample = "import { createStytchHeadlessClient } from '@stytch/nextjs/ui';\n    \nconst stytch = createStytchHeadlessClient('public-token-...');\n";
  if (typeof window === 'undefined') {
    throw new Error("The ".concat(clientName, " is not compatible with server-side environments.\nIf using nextjs, use the create").concat(clientName, " method instead.\n```\n").concat(codeSample, "\n```\n"));
  }
};
var getDFPBackendURL = function getDFPBackendURL(opts) {
  var _a, _b;
  if ((_a = opts === null || opts === void 0 ? void 0 : opts.endpointOptions) === null || _a === void 0 ? void 0 : _a.dfppaDomain) {
    return 'https://' + opts.endpointOptions.dfppaDomain;
  }
  if ((_b = opts === null || opts === void 0 ? void 0 : opts.endpoints) === null || _b === void 0 ? void 0 : _b.dfpBackendURL) {
    return opts.endpoints.dfpBackendURL;
  }
  return STYTCH_DFP_BACKEND_URL;
};
var isTestPublicToken = function isTestPublicToken(token) {
  return token.includes('public-token-test');
};
var createEventId = function createEventId() {
  return "event-id-".concat(v4());
};
var createAppSessionId = function createAppSessionId() {
  return "app-session-id-".concat(v4());
};
var createPersistentId = function createPersistentId() {
  return "persistent-id-".concat(v4());
};
var validate = function validate(methodName) {
  var validator = {
    isObject: function isObject(fieldName, value) {
      var isObject = _typeof(value) === 'object' && !Array.isArray(value) && value !== null;
      if (!isObject) {
        throw new StytchSDKUsageError(methodName, fieldName + ' must be an object.');
      }
      return validator;
    },
    isOptionalObject: function isOptionalObject(fieldName, value) {
      if (typeof value === 'undefined') {
        return validator;
      }
      return validator.isObject(fieldName, value);
    },
    isString: function isString(fieldName, value) {
      if (typeof value !== 'string') {
        throw new StytchSDKUsageError(methodName, fieldName + ' must be a string.');
      }
      return validator;
    },
    isOptionalString: function isOptionalString(fieldName, value) {
      if (typeof value === 'undefined') {
        return validator;
      }
      return validator.isString(fieldName, value);
    },
    isStringArray: function isStringArray(fieldName, value) {
      if (!Array.isArray(value)) {
        throw new StytchSDKUsageError(methodName, fieldName + ' must be an array of strings.');
      }
      var _iterator = _createForOfIteratorHelper(value),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var str = _step.value;
          if (typeof str !== 'string') {
            throw new StytchSDKUsageError(methodName, fieldName + ' must be an array of strings.');
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return validator;
    },
    isOptionalStringArray: function isOptionalStringArray(fieldName, value) {
      if (typeof value === 'undefined') {
        return validator;
      }
      return validator.isStringArray(fieldName, value);
    },
    isNumber: function isNumber(fieldName, value) {
      if (typeof value !== 'number') {
        throw new StytchSDKUsageError(methodName, fieldName + ' must be a number.');
      }
      return validator;
    },
    isOptionalNumber: function isOptionalNumber(fieldName, value) {
      if (typeof value === 'undefined') {
        return validator;
      }
      return validator.isNumber(fieldName, value);
    },
    isBoolean: function isBoolean(fieldName, value) {
      if (typeof value !== 'boolean') {
        throw new StytchSDKUsageError(methodName, fieldName + ' must be a boolean.');
      }
      return validator;
    },
    isOptionalBoolean: function isOptionalBoolean(fieldName, value) {
      if (typeof value === 'undefined') {
        return validator;
      }
      return validator.isBoolean(fieldName, value);
    }
  };
  return validator;
};
var removeResponseCommon = function removeResponseCommon(_a) {
  var rest = __rest(_a, ["request_id", "status_code"]);
  return rest;
};
var omitUser = function omitUser(resp) {
  var rest = __rest(resp, ["__user"]);
  return rest;
};
var loadTelemetryJS = function loadTelemetryJS() {
  return loadESModule("".concat(STYTCH_DFP_CDN_URL, "/telemetry.js"), function () {
    return window.GetTelemetryID;
  });
};
var DFPProtectedAuthProvider = /*#__PURE__*/_createClass(function DFPProtectedAuthProvider(publicToken, dfpBackendURL, bootstrapPromise) {
  var _this2 = this;
  var executeRecaptcha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {
    return Promise.resolve(undefined);
  };
  _classCallCheck(this, DFPProtectedAuthProvider);
  this.bootstrapPromise = bootstrapPromise;
  this.isEnabled = function () {
    return __awaiter$1(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", this.state.then(function (state) {
              return state.enabled;
            }));
          case 1:
          case "end":
            return _context4.stop();
        }
      }, _callee4, this);
    }));
  };
  this.getTelemetryID = function () {
    return __awaiter$1(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var _yield$this$state, publicToken, enabled, dfpBackendURL;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return this.state;
          case 2:
            _yield$this$state = _context5.sent;
            publicToken = _yield$this$state.publicToken;
            enabled = _yield$this$state.enabled;
            dfpBackendURL = _yield$this$state.dfpBackendURL;
            if (enabled) {
              _context5.next = 8;
              break;
            }
            return _context5.abrupt("return", undefined);
          case 8:
            _context5.next = 10;
            return window.GetTelemetryID(publicToken, "".concat(dfpBackendURL, "/submit"));
          case 10:
            return _context5.abrupt("return", _context5.sent);
          case 11:
          case "end":
            return _context5.stop();
        }
      }, _callee5, this);
    }));
  };
  this.getDFPTelemetryIDAndCaptcha = function () {
    return __awaiter$1(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var _yield$this$state2, enabled, executeRecaptcha, mode, dfp_telemetry_id, captcha_token;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return this.state;
          case 2:
            _yield$this$state2 = _context6.sent;
            enabled = _yield$this$state2.enabled;
            executeRecaptcha = _yield$this$state2.executeRecaptcha;
            mode = _yield$this$state2.mode;
            dfp_telemetry_id = undefined;
            captcha_token = undefined;
            if (enabled) {
              _context6.next = 12;
              break;
            }
            _context6.next = 11;
            return executeRecaptcha();
          case 11:
            captcha_token = _context6.sent;
          case 12:
            if (!(mode === 'DECISIONING')) {
              _context6.next = 18;
              break;
            }
            _context6.next = 15;
            return this.getTelemetryID();
          case 15:
            dfp_telemetry_id = _context6.sent;
            _context6.next = 25;
            break;
          case 18:
            if (!(mode === 'OBSERVATION')) {
              _context6.next = 25;
              break;
            }
            _context6.next = 21;
            return this.getTelemetryID();
          case 21:
            dfp_telemetry_id = _context6.sent;
            _context6.next = 24;
            return executeRecaptcha();
          case 24:
            captcha_token = _context6.sent;
          case 25:
            return _context6.abrupt("return", {
              dfp_telemetry_id: dfp_telemetry_id,
              captcha_token: captcha_token
            });
          case 26:
          case "end":
            return _context6.stop();
        }
      }, _callee6, this);
    }));
  };
  this.retryWithCaptchaAndDFP = function (e, req) {
    return __awaiter$1(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var _yield$this$state3, enabled, executeRecaptcha;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return this.state;
          case 2:
            _yield$this$state3 = _context7.sent;
            enabled = _yield$this$state3.enabled;
            executeRecaptcha = _yield$this$state3.executeRecaptcha;
            if (!(e.type === RetriableErrorType.RequiredCatcha && enabled)) {
              _context7.next = 14;
              break;
            }
            if (!req.body) {
              _context7.next = 13;
              break;
            }
            _context7.next = 9;
            return this.getTelemetryID();
          case 9:
            req.body.dfp_telemetry_id = _context7.sent;
            _context7.next = 12;
            return executeRecaptcha();
          case 12:
            req.body.captcha_token = _context7.sent;
          case 13:
            return _context7.abrupt("return", req);
          case 14:
            throw new Error('Unable to query captcha and/or dfp telemetry ID');
          case 15:
          case "end":
            return _context7.stop();
        }
      }, _callee7, this);
    }));
  };
  this.state = bootstrapPromise.then(function (bootstrapData) {
    return __awaiter$1(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            if (bootstrapData.runDFPProtectedAuth) {
              _context8.next = 2;
              break;
            }
            return _context8.abrupt("return", {
              publicToken: publicToken,
              dfpBackendURL: dfpBackendURL,
              enabled: false,
              loaded: false,
              executeRecaptcha: executeRecaptcha
            });
          case 2:
            _context8.next = 4;
            return loadTelemetryJS();
          case 4:
            return _context8.abrupt("return", {
              publicToken: publicToken,
              dfpBackendURL: dfpBackendURL,
              enabled: true,
              mode: bootstrapData.dfpProtectedAuthMode || 'OBSERVATION',
              loaded: true,
              executeRecaptcha: executeRecaptcha
            });
          case 5:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
  });
});
var ErrorMarshaller = /*#__PURE__*/function () {
  function ErrorMarshaller() {
    _classCallCheck(this, ErrorMarshaller);
  }
  _createClass(ErrorMarshaller, null, [{
    key: "marshall",
    value: function marshall(error) {
      return Object.assign(Object.assign({}, error), {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
    }
  }, {
    key: "inflate",
    value: function inflate(ErrorClass, ErrorData) {
      var err = new ErrorClass(ErrorData);
      Object.assign(err, ErrorData);
      Object.setPrototypeOf(err, ErrorClass.prototype);
      return err;
    }
  }, {
    key: "unmarshall",
    value: function unmarshall(error) {
      if ('name' in error) {
        switch (error.name) {
          case 'SDKAPIUnreachableError':
            return ErrorMarshaller.inflate(SDKAPIUnreachableError, error);
          case 'StytchSDKSchemaError':
            return ErrorMarshaller.inflate(StytchSDKSchemaError, error);
          case 'StytchAPIUnreachableError':
            return ErrorMarshaller.inflate(StytchAPIUnreachableError, error);
          case 'StytchAPISchemaError':
            return ErrorMarshaller.inflate(StytchAPISchemaError, error);
          case 'StytchSDKAPIError':
            return ErrorMarshaller.inflate(StytchSDKAPIError, error);
          case 'StytchAPIError':
            return ErrorMarshaller.inflate(StytchAPIError, error);
          case 'TypeError':
            return ErrorMarshaller.inflate(TypeError, error);
          case 'SyntaxError':
            return ErrorMarshaller.inflate(SyntaxError, error);
          case 'ReferenceError':
            return ErrorMarshaller.inflate(ReferenceError, error);
          case 'RangeError':
            return ErrorMarshaller.inflate(RangeError, error);
          case 'EvalError':
            return ErrorMarshaller.inflate(EvalError, error);
          case 'URIError':
            return ErrorMarshaller.inflate(URIError, error);
        }
      }
      return ErrorMarshaller.inflate(Error, error);
    }
  }]);
  return ErrorMarshaller;
}();
var DEFAULT_MAX_BATCH_SIZE = 15;
var DEFAULT_INTERVAL_DURATION_MS = 800;
var EventLogger = /*#__PURE__*/function () {
  function EventLogger(args) {
    _classCallCheck(this, EventLogger);
    this.maxBatchSize = args.maxBatchSize;
    this.logEventURL = args.logEventURL;
    setInterval(this.flush.bind(this), args.intervalDurationMs);
    this.batch = [];
  }
  _createClass(EventLogger, [{
    key: "logEvent",
    value: function logEvent(telemetry, event) {
      this.batch.push({
        telemetry: telemetry,
        event: event
      });
      if (this.batch.length >= this.maxBatchSize) {
        this.flush();
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        var batchToSubmit;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              if (this.batch.length) {
                _context13.next = 2;
                break;
              }
              return _context13.abrupt("return");
            case 2:
              batchToSubmit = this.batch;
              this.batch = [];
              _context13.prev = 4;
              _context13.next = 7;
              return fetch(this.logEventURL, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(batchToSubmit)
              });
            case 7:
              _context13.next = 11;
              break;
            case 9:
              _context13.prev = 9;
              _context13.t0 = _context13["catch"](4);
            case 11:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this, [[4, 9]]);
      }));
    }
  }]);
  return EventLogger;
}();
var EmailSentType;
(function (EmailSentType) {
  EmailSentType["LoginOrCreateEML"] = "login_or_create_eml";
  EmailSentType["LoginOrCreateOTP"] = "login_or_create_otp";
  EmailSentType["ResetPassword"] = "reset_password";
})(EmailSentType || (EmailSentType = {}));
var HeadlessUserClient = /*#__PURE__*/_createClass(function HeadlessUserClient(_networkClient, _subscriptionService) {
  var _this3 = this;
  _classCallCheck(this, HeadlessUserClient);
  this._networkClient = _networkClient;
  this._subscriptionService = _subscriptionService;
  this.get = function () {
    return __awaiter$1(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
      var resp, user;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return this._networkClient.fetchSDK({
              url: '/users/me',
              method: 'GET'
            });
          case 2:
            resp = _context14.sent;
            user = removeResponseCommon(resp);
            this._subscriptionService.updateUser(user);
            return _context14.abrupt("return", user);
          case 6:
          case "end":
            return _context14.stop();
        }
      }, _callee14, this);
    }));
  };
  this.getSync = function () {
    return _this3._subscriptionService.getUser();
  };
  this.getInfo = function () {
    return {
      user: _this3.getSync(),
      fromCache: _this3._subscriptionService.getFromCache()
    };
  };
  this.update = function (options) {
    return __awaiter$1(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
      var resp, user;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            validate('stytch.user.update').isOptionalObject('untrusted_metadata', options.untrusted_metadata);
            _context15.next = 3;
            return this._networkClient.fetchSDK({
              url: '/users/me',
              body: options,
              method: 'PUT'
            });
          case 3:
            resp = _context15.sent;
            user = removeResponseCommon(resp.__user);
            this._subscriptionService.updateUser(user);
            return _context15.abrupt("return", omitUser(resp));
          case 7:
          case "end":
            return _context15.stop();
        }
      }, _callee15, this);
    }));
  };
  this.deleteEmail = function (emailId) {
    return __awaiter$1(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
      var resp, user;
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            _context16.next = 2;
            return this._networkClient.fetchSDK({
              url: "/users/emails/".concat(emailId),
              method: 'DELETE'
            });
          case 2:
            resp = _context16.sent;
            user = removeResponseCommon(resp.__user);
            this._subscriptionService.updateUser(user);
            return _context16.abrupt("return", omitUser(resp));
          case 6:
          case "end":
            return _context16.stop();
        }
      }, _callee16, this);
    }));
  };
  this.deletePhoneNumber = function (phoneId) {
    return __awaiter$1(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
      var resp, user;
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return this._networkClient.fetchSDK({
              url: "/users/phone_numbers/".concat(phoneId),
              method: 'DELETE'
            });
          case 2:
            resp = _context17.sent;
            user = removeResponseCommon(resp.__user);
            this._subscriptionService.updateUser(user);
            return _context17.abrupt("return", omitUser(resp));
          case 6:
          case "end":
            return _context17.stop();
        }
      }, _callee17, this);
    }));
  };
  this.deleteTOTP = function (totpId) {
    return __awaiter$1(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
      var resp, user;
      return _regeneratorRuntime().wrap(function _callee18$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            _context18.next = 2;
            return this._networkClient.fetchSDK({
              url: "/users/totps/".concat(totpId),
              method: 'DELETE'
            });
          case 2:
            resp = _context18.sent;
            user = removeResponseCommon(resp.__user);
            this._subscriptionService.updateUser(user);
            return _context18.abrupt("return", omitUser(resp));
          case 6:
          case "end":
            return _context18.stop();
        }
      }, _callee18, this);
    }));
  };
  this.deleteCryptoWallet = function (cryptoWalletId) {
    return __awaiter$1(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
      var resp, user;
      return _regeneratorRuntime().wrap(function _callee19$(_context19) {
        while (1) switch (_context19.prev = _context19.next) {
          case 0:
            _context19.next = 2;
            return this._networkClient.fetchSDK({
              url: "/users/crypto_wallets/".concat(cryptoWalletId),
              method: 'DELETE'
            });
          case 2:
            resp = _context19.sent;
            user = removeResponseCommon(resp.__user);
            this._subscriptionService.updateUser(user);
            return _context19.abrupt("return", omitUser(resp));
          case 6:
          case "end":
            return _context19.stop();
        }
      }, _callee19, this);
    }));
  };
  this.deleteOAuthRegistration = function (oauthUserRegistrationId) {
    return __awaiter$1(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
      var resp, user;
      return _regeneratorRuntime().wrap(function _callee20$(_context20) {
        while (1) switch (_context20.prev = _context20.next) {
          case 0:
            _context20.next = 2;
            return this._networkClient.fetchSDK({
              url: "/users/oauth/".concat(oauthUserRegistrationId),
              method: 'DELETE'
            });
          case 2:
            resp = _context20.sent;
            user = removeResponseCommon(resp.__user);
            this._subscriptionService.updateUser(user);
            return _context20.abrupt("return", omitUser(resp));
          case 6:
          case "end":
            return _context20.stop();
        }
      }, _callee20, this);
    }));
  };
  this.deleteWebauthnRegistration = function (webAuthnId) {
    return __awaiter$1(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
      var resp, user;
      return _regeneratorRuntime().wrap(function _callee21$(_context21) {
        while (1) switch (_context21.prev = _context21.next) {
          case 0:
            _context21.next = 2;
            return this._networkClient.fetchSDK({
              url: "/users/webauthn_registrations/".concat(webAuthnId),
              method: 'DELETE'
            });
          case 2:
            resp = _context21.sent;
            user = removeResponseCommon(resp.__user);
            this._subscriptionService.updateUser(user);
            return _context21.abrupt("return", omitUser(resp));
          case 6:
          case "end":
            return _context21.stop();
        }
      }, _callee21, this);
    }));
  };
  this.deleteBiometricRegistration = function (biometricRegistrationId) {
    return __awaiter$1(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
      var resp, user;
      return _regeneratorRuntime().wrap(function _callee22$(_context22) {
        while (1) switch (_context22.prev = _context22.next) {
          case 0:
            _context22.next = 2;
            return this._networkClient.fetchSDK({
              url: "/users/biometric_registrations/".concat(biometricRegistrationId),
              method: 'DELETE'
            });
          case 2:
            resp = _context22.sent;
            user = removeResponseCommon(resp.__user);
            this._subscriptionService.updateUser(user);
            return _context22.abrupt("return", omitUser(resp));
          case 6:
          case "end":
            return _context22.stop();
        }
      }, _callee22, this);
    }));
  };
  this.onChange = function (callback) {
    var lastVal = _this3._subscriptionService.getUser();
    var listener = function listener(state) {
      var _a;
      if ((state === null || state === void 0 ? void 0 : state.user) !== lastVal) {
        lastVal = (_a = state === null || state === void 0 ? void 0 : state.user) !== null && _a !== void 0 ? _a : null;
        callback(lastVal);
      }
    };
    return _this3._subscriptionService.subscribeToState(listener);
  };
});
var HeadlessSessionClient = /*#__PURE__*/function () {
  function HeadlessSessionClient(_networkClient, _subscriptionService) {
    var _this4 = this;
    _classCallCheck(this, HeadlessSessionClient);
    this._networkClient = _networkClient;
    this._subscriptionService = _subscriptionService;
    this.getSync = function () {
      return _this4._subscriptionService.getSession();
    };
    this.getInfo = function () {
      return {
        session: _this4.getSync(),
        fromCache: _this4._subscriptionService.getFromCache()
      };
    };
    this.onChange = function (callback) {
      var lastVal = _this4._subscriptionService.getSession();
      var listener = function listener(state) {
        var _a;
        if ((state === null || state === void 0 ? void 0 : state.session) !== lastVal) {
          lastVal = (_a = state === null || state === void 0 ? void 0 : state.session) !== null && _a !== void 0 ? _a : null;
          callback(lastVal);
        }
      };
      return _this4._subscriptionService.subscribeToState(listener);
    };
    this.revoke = function (options) {
      return __awaiter$1(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
        var resp;
        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) switch (_context23.prev = _context23.next) {
            case 0:
              _context23.prev = 0;
              _context23.next = 3;
              return this._networkClient.fetchSDK({
                url: "/sessions/revoke",
                method: 'POST'
              });
            case 3:
              resp = _context23.sent;
              this._subscriptionService.destroyState();
              return _context23.abrupt("return", resp);
            case 8:
              _context23.prev = 8;
              _context23.t0 = _context23["catch"](0);
              if (!!(options === null || options === void 0 ? void 0 : options.forceClear)) {
                this._subscriptionService.destroyState();
              } else if (UNRECOVERABLE_ERROR_TYPES.includes(_context23.t0.error_type)) {
                this._subscriptionService.destroyState();
              }
              throw _context23.t0;
            case 12:
            case "end":
              return _context23.stop();
          }
        }, _callee23, this, [[0, 8]]);
      }));
    };
    this.authenticate = function (options) {
      return __awaiter$1(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
        var _this5 = this;
        var initialSession, isSessionStale, requestBody, resp;
        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) switch (_context24.prev = _context24.next) {
            case 0:
              initialSession = this._subscriptionService.getSession();
              isSessionStale = function isSessionStale() {
                var _a;
                return (initialSession === null || initialSession === void 0 ? void 0 : initialSession.session_id) !== ((_a = _this5._subscriptionService.getSession()) === null || _a === void 0 ? void 0 : _a.session_id);
              };
              _context24.prev = 2;
              requestBody = {
                session_duration_minutes: options === null || options === void 0 ? void 0 : options.session_duration_minutes
              };
              _context24.next = 6;
              return this._networkClient.fetchSDK({
                url: '/sessions/authenticate',
                body: requestBody,
                method: 'POST'
              });
            case 6:
              resp = _context24.sent;
              if (!isSessionStale()) {
                _context24.next = 9;
                break;
              }
              return _context24.abrupt("return", this.authenticate(options));
            case 9:
              this._subscriptionService.updateSession(resp);
              return _context24.abrupt("return", omitUser(resp));
            case 13:
              _context24.prev = 13;
              _context24.t0 = _context24["catch"](2);
              if (!isSessionStale()) {
                _context24.next = 17;
                break;
              }
              return _context24.abrupt("return", this.authenticate(options));
            case 17:
              if (UNRECOVERABLE_ERROR_TYPES.includes(_context24.t0.error_type)) {
                this._subscriptionService.destroySession();
              }
              throw _context24.t0;
            case 19:
            case "end":
              return _context24.stop();
          }
        }, _callee24, this, [[2, 13]]);
      }));
    };
  }
  _createClass(HeadlessSessionClient, [{
    key: "getTokens",
    value: function getTokens() {
      return this._subscriptionService.getTokens();
    }
  }, {
    key: "updateSession",
    value: function updateSession(tokens) {
      var _a;
      validate('stytch.session.updateSession').isString('session_token', tokens.session_token).isOptionalString('session_jwt', (_a = tokens.session_jwt) !== null && _a !== void 0 ? _a : undefined);
      this._subscriptionService.updateTokens(tokens);
    }
  }]);
  return HeadlessSessionClient;
}();
var DefaultDynamicConfig$4 = Promise.resolve({
  pkceRequiredForEmailMagicLinks: false
});
var HeadlessMagicLinksClient = /*#__PURE__*/function () {
  function HeadlessMagicLinksClient(_networkClient, _subscriptionService, _pkceManager, _passwordResetPKCEManager) {
    var _this6 = this;
    var _config = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : DefaultDynamicConfig$4;
    var dfpProtectedAuth = arguments.length > 5 ? arguments[5] : undefined;
    _classCallCheck(this, HeadlessMagicLinksClient);
    this._networkClient = _networkClient;
    this._subscriptionService = _subscriptionService;
    this._pkceManager = _pkceManager;
    this._passwordResetPKCEManager = _passwordResetPKCEManager;
    this._config = _config;
    this.dfpProtectedAuth = dfpProtectedAuth;
    this.email = {
      loginOrCreate: function loginOrCreate(email) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return __awaiter$1(_this6, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
          var _yield$this$_config, pkceRequiredForEmailMagicLinks, code_challenge, _yield$this$dfpProtec, dfp_telemetry_id, captcha_token, requestBody;
          return _regeneratorRuntime().wrap(function _callee25$(_context25) {
            while (1) switch (_context25.prev = _context25.next) {
              case 0:
                _context25.next = 2;
                return this._config;
              case 2:
                _yield$this$_config = _context25.sent;
                pkceRequiredForEmailMagicLinks = _yield$this$_config.pkceRequiredForEmailMagicLinks;
                code_challenge = undefined;
                if (!pkceRequiredForEmailMagicLinks) {
                  _context25.next = 9;
                  break;
                }
                _context25.next = 8;
                return this.getCodeChallenge();
              case 8:
                code_challenge = _context25.sent;
              case 9:
                _context25.next = 11;
                return this.dfpProtectedAuth.getDFPTelemetryIDAndCaptcha();
              case 11:
                _yield$this$dfpProtec = _context25.sent;
                dfp_telemetry_id = _yield$this$dfpProtec.dfp_telemetry_id;
                captcha_token = _yield$this$dfpProtec.captcha_token;
                requestBody = Object.assign(Object.assign({}, options), {
                  email: email,
                  code_challenge: code_challenge,
                  captcha_token: captcha_token,
                  dfp_telemetry_id: dfp_telemetry_id
                });
                return _context25.abrupt("return", this._networkClient.retriableFetchSDK({
                  url: '/magic_links/email/login_or_create',
                  body: requestBody,
                  method: 'POST',
                  retryCallback: this.dfpProtectedAuth.retryWithCaptchaAndDFP
                }));
              case 16:
              case "end":
                return _context25.stop();
            }
          }, _callee25, this);
        }));
      },
      send: function send(email) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return __awaiter$1(_this6, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
          var _yield$this$_config2, pkceRequiredForEmailMagicLinks, code_challenge, _yield$this$dfpProtec2, dfp_telemetry_id, captcha_token, requestBody, isLoggedIn, endpoint;
          return _regeneratorRuntime().wrap(function _callee26$(_context26) {
            while (1) switch (_context26.prev = _context26.next) {
              case 0:
                _context26.next = 2;
                return this._config;
              case 2:
                _yield$this$_config2 = _context26.sent;
                pkceRequiredForEmailMagicLinks = _yield$this$_config2.pkceRequiredForEmailMagicLinks;
                code_challenge = undefined;
                if (!pkceRequiredForEmailMagicLinks) {
                  _context26.next = 9;
                  break;
                }
                _context26.next = 8;
                return this.getCodeChallenge();
              case 8:
                code_challenge = _context26.sent;
              case 9:
                _context26.next = 11;
                return this.dfpProtectedAuth.getDFPTelemetryIDAndCaptcha();
              case 11:
                _yield$this$dfpProtec2 = _context26.sent;
                dfp_telemetry_id = _yield$this$dfpProtec2.dfp_telemetry_id;
                captcha_token = _yield$this$dfpProtec2.captcha_token;
                requestBody = Object.assign(Object.assign({}, options), {
                  email: email,
                  code_challenge: code_challenge,
                  captcha_token: captcha_token,
                  dfp_telemetry_id: dfp_telemetry_id
                });
                isLoggedIn = !!this._subscriptionService.getSession();
                endpoint = isLoggedIn ? '/magic_links/email/send/secondary' : '/magic_links/email/send/primary';
                return _context26.abrupt("return", this._networkClient.retriableFetchSDK({
                  url: endpoint,
                  body: requestBody,
                  method: 'POST',
                  retryCallback: this.dfpProtectedAuth.retryWithCaptchaAndDFP
                }));
              case 18:
              case "end":
                return _context26.stop();
            }
          }, _callee26, this);
        }));
      }
    };
    this.authenticate = function (token, options) {
      return __awaiter$1(_this6, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
        var passwordResetPKPair, resp;
        return _regeneratorRuntime().wrap(function _callee27$(_context27) {
          while (1) switch (_context27.prev = _context27.next) {
            case 0:
              validate('stytch.magicLinks.authenticate').isString('Token', token).isNumber('session_duration_minutes', options.session_duration_minutes);
              _context27.next = 3;
              return this._passwordResetPKCEManager.getPKPair();
            case 3:
              passwordResetPKPair = _context27.sent;
              resp = null;
              if (!(passwordResetPKPair === null || passwordResetPKPair === void 0 ? void 0 : passwordResetPKPair.code_verifier)) {
                _context27.next = 19;
                break;
              }
              _context27.prev = 6;
              _context27.next = 9;
              return this.handlePKCEForAuthenticate(this._passwordResetPKCEManager, Object.assign(Object.assign({}, options), {
                token: token
              }));
            case 9:
              resp = _context27.sent;
              _context27.next = 19;
              break;
            case 12:
              _context27.prev = 12;
              _context27.t0 = _context27["catch"](6);
              if (!_context27.t0.message.includes('pkce')) {
                _context27.next = 18;
                break;
              }
              console.log('Authenticate with passwords pkce namespace failed. Falling back to authenticate with magic_links namespace.');
              _context27.next = 19;
              break;
            case 18:
              throw _context27.t0;
            case 19:
              if (resp) {
                _context27.next = 23;
                break;
              }
              _context27.next = 22;
              return this.handlePKCEForAuthenticate(this._pkceManager, Object.assign(Object.assign({}, options), {
                token: token
              }));
            case 22:
              resp = _context27.sent;
            case 23:
              this._subscriptionService.updateSession(resp);
              return _context27.abrupt("return", omitUser(resp));
            case 25:
            case "end":
              return _context27.stop();
          }
        }, _callee27, this, [[6, 12]]);
      }));
    };
  }
  _createClass(HeadlessMagicLinksClient, [{
    key: "getCodeChallenge",
    value: function getCodeChallenge() {
      return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
        var keyPair;
        return _regeneratorRuntime().wrap(function _callee28$(_context28) {
          while (1) switch (_context28.prev = _context28.next) {
            case 0:
              _context28.next = 2;
              return this._pkceManager.getPKPair();
            case 2:
              keyPair = _context28.sent;
              if (!keyPair) {
                _context28.next = 5;
                break;
              }
              return _context28.abrupt("return", keyPair.code_challenge);
            case 5:
              _context28.next = 7;
              return this._pkceManager.startPKCETransaction();
            case 7:
              keyPair = _context28.sent;
              return _context28.abrupt("return", keyPair.code_challenge);
            case 9:
            case "end":
              return _context28.stop();
          }
        }, _callee28, this);
      }));
    }
  }, {
    key: "handlePKCEForAuthenticate",
    value: function handlePKCEForAuthenticate(pkceManager, data) {
      return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee29() {
        var pkPair, requestBody, resp;
        return _regeneratorRuntime().wrap(function _callee29$(_context29) {
          while (1) switch (_context29.prev = _context29.next) {
            case 0:
              _context29.next = 2;
              return pkceManager.getPKPair();
            case 2:
              pkPair = _context29.sent;
              requestBody = Object.assign({
                code_verifier: pkPair === null || pkPair === void 0 ? void 0 : pkPair.code_verifier
              }, data);
              _context29.next = 6;
              return this._networkClient.fetchSDK({
                url: '/magic_links/authenticate',
                body: requestBody,
                method: 'POST'
              });
            case 6:
              resp = _context29.sent;
              pkceManager.clearPKPair();
              return _context29.abrupt("return", resp);
            case 9:
            case "end":
              return _context29.stop();
          }
        }, _callee29, this);
      }));
    }
  }]);
  return HeadlessMagicLinksClient;
}();
var HeadlessOTPClient = /*#__PURE__*/_createClass(function HeadlessOTPClient(_networkClient, _subscriptionService) {
  var _this7 = this;
  var executeRecaptcha = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    return Promise.resolve(undefined);
  };
  var dfpProtectedAuth = arguments.length > 3 ? arguments[3] : undefined;
  _classCallCheck(this, HeadlessOTPClient);
  this._networkClient = _networkClient;
  this._subscriptionService = _subscriptionService;
  this.executeRecaptcha = executeRecaptcha;
  this.dfpProtectedAuth = dfpProtectedAuth;
  this.sms = {
    loginOrCreate: function loginOrCreate(phone_number, options) {
      return __awaiter$1(_this7, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
        var _yield$this$dfpProtec3, dfp_telemetry_id, captcha_token, requestBody;
        return _regeneratorRuntime().wrap(function _callee30$(_context30) {
          while (1) switch (_context30.prev = _context30.next) {
            case 0:
              _context30.next = 2;
              return this.dfpProtectedAuth.getDFPTelemetryIDAndCaptcha();
            case 2:
              _yield$this$dfpProtec3 = _context30.sent;
              dfp_telemetry_id = _yield$this$dfpProtec3.dfp_telemetry_id;
              captcha_token = _yield$this$dfpProtec3.captcha_token;
              requestBody = Object.assign(Object.assign({}, options), {
                phone_number: phone_number,
                captcha_token: captcha_token,
                dfp_telemetry_id: dfp_telemetry_id
              });
              return _context30.abrupt("return", this._networkClient.retriableFetchSDK({
                url: '/otps/sms/login_or_create',
                body: requestBody,
                method: 'POST',
                retryCallback: this.dfpProtectedAuth.retryWithCaptchaAndDFP
              }));
            case 7:
            case "end":
              return _context30.stop();
          }
        }, _callee30, this);
      }));
    },
    send: function send(phone_number, options) {
      return __awaiter$1(_this7, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee31() {
        var _yield$this$dfpProtec4, dfp_telemetry_id, captcha_token, requestBody, isLoggedIn, endpoint;
        return _regeneratorRuntime().wrap(function _callee31$(_context31) {
          while (1) switch (_context31.prev = _context31.next) {
            case 0:
              _context31.next = 2;
              return this.dfpProtectedAuth.getDFPTelemetryIDAndCaptcha();
            case 2:
              _yield$this$dfpProtec4 = _context31.sent;
              dfp_telemetry_id = _yield$this$dfpProtec4.dfp_telemetry_id;
              captcha_token = _yield$this$dfpProtec4.captcha_token;
              requestBody = Object.assign(Object.assign({}, options), {
                phone_number: phone_number,
                captcha_token: captcha_token,
                dfp_telemetry_id: dfp_telemetry_id
              });
              isLoggedIn = !!this._subscriptionService.getSession();
              endpoint = isLoggedIn ? '/otps/sms/send/secondary' : '/otps/sms/send/primary';
              return _context31.abrupt("return", this._networkClient.retriableFetchSDK({
                url: endpoint,
                body: requestBody,
                method: 'POST',
                retryCallback: this.dfpProtectedAuth.retryWithCaptchaAndDFP
              }));
            case 9:
            case "end":
              return _context31.stop();
          }
        }, _callee31, this);
      }));
    }
  };
  this.whatsapp = {
    loginOrCreate: function loginOrCreate(phone_number, options) {
      return __awaiter$1(_this7, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee32() {
        var _yield$this$dfpProtec5, dfp_telemetry_id, captcha_token, requestBody;
        return _regeneratorRuntime().wrap(function _callee32$(_context32) {
          while (1) switch (_context32.prev = _context32.next) {
            case 0:
              _context32.next = 2;
              return this.dfpProtectedAuth.getDFPTelemetryIDAndCaptcha();
            case 2:
              _yield$this$dfpProtec5 = _context32.sent;
              dfp_telemetry_id = _yield$this$dfpProtec5.dfp_telemetry_id;
              captcha_token = _yield$this$dfpProtec5.captcha_token;
              requestBody = Object.assign(Object.assign({}, options), {
                phone_number: phone_number,
                dfp_telemetry_id: dfp_telemetry_id,
                captcha_token: captcha_token
              });
              return _context32.abrupt("return", this._networkClient.retriableFetchSDK({
                url: '/otps/whatsapp/login_or_create',
                body: requestBody,
                method: 'POST',
                retryCallback: this.dfpProtectedAuth.retryWithCaptchaAndDFP
              }));
            case 7:
            case "end":
              return _context32.stop();
          }
        }, _callee32, this);
      }));
    },
    send: function send(phone_number, options) {
      return __awaiter$1(_this7, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {
        var _yield$this$dfpProtec6, dfp_telemetry_id, captcha_token, requestBody, isLoggedIn, endpoint;
        return _regeneratorRuntime().wrap(function _callee33$(_context33) {
          while (1) switch (_context33.prev = _context33.next) {
            case 0:
              _context33.next = 2;
              return this.dfpProtectedAuth.getDFPTelemetryIDAndCaptcha();
            case 2:
              _yield$this$dfpProtec6 = _context33.sent;
              dfp_telemetry_id = _yield$this$dfpProtec6.dfp_telemetry_id;
              captcha_token = _yield$this$dfpProtec6.captcha_token;
              requestBody = Object.assign(Object.assign({}, options), {
                phone_number: phone_number,
                captcha_token: captcha_token,
                dfp_telemetry_id: dfp_telemetry_id
              });
              isLoggedIn = !!this._subscriptionService.getSession();
              endpoint = isLoggedIn ? '/otps/whatsapp/send/secondary' : '/otps/whatsapp/send/primary';
              return _context33.abrupt("return", this._networkClient.retriableFetchSDK({
                url: endpoint,
                body: requestBody,
                method: 'POST',
                retryCallback: this.dfpProtectedAuth.retryWithCaptchaAndDFP
              }));
            case 9:
            case "end":
              return _context33.stop();
          }
        }, _callee33, this);
      }));
    }
  };
  this.email = {
    loginOrCreate: function loginOrCreate(email, options) {
      return __awaiter$1(_this7, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee34() {
        var _yield$this$dfpProtec7, dfp_telemetry_id, captcha_token, requestBody;
        return _regeneratorRuntime().wrap(function _callee34$(_context34) {
          while (1) switch (_context34.prev = _context34.next) {
            case 0:
              _context34.next = 2;
              return this.dfpProtectedAuth.getDFPTelemetryIDAndCaptcha();
            case 2:
              _yield$this$dfpProtec7 = _context34.sent;
              dfp_telemetry_id = _yield$this$dfpProtec7.dfp_telemetry_id;
              captcha_token = _yield$this$dfpProtec7.captcha_token;
              requestBody = Object.assign(Object.assign({}, options), {
                email: email,
                captcha_token: captcha_token,
                dfp_telemetry_id: dfp_telemetry_id
              });
              return _context34.abrupt("return", this._networkClient.retriableFetchSDK({
                url: '/otps/email/login_or_create',
                body: requestBody,
                method: 'POST',
                retryCallback: this.dfpProtectedAuth.retryWithCaptchaAndDFP
              }));
            case 7:
            case "end":
              return _context34.stop();
          }
        }, _callee34, this);
      }));
    },
    send: function send(email, options) {
      return __awaiter$1(_this7, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee35() {
        var captcha_token, requestBody, isLoggedIn, endpoint;
        return _regeneratorRuntime().wrap(function _callee35$(_context35) {
          while (1) switch (_context35.prev = _context35.next) {
            case 0:
              _context35.next = 2;
              return this.executeRecaptcha();
            case 2:
              captcha_token = _context35.sent;
              requestBody = Object.assign(Object.assign({}, options), {
                email: email,
                captcha_token: captcha_token
              });
              isLoggedIn = !!this._subscriptionService.getSession();
              endpoint = isLoggedIn ? '/otps/email/send/secondary' : '/otps/email/send/primary';
              return _context35.abrupt("return", this._networkClient.fetchSDK({
                url: endpoint,
                body: requestBody,
                method: 'POST'
              }));
            case 7:
            case "end":
              return _context35.stop();
          }
        }, _callee35, this);
      }));
    }
  };
  this.authenticate = function (code, method_id, options) {
    return __awaiter$1(_this7, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee36() {
      var _yield$this$dfpProtec8, dfp_telemetry_id, captcha_token, requestBody, resp;
      return _regeneratorRuntime().wrap(function _callee36$(_context36) {
        while (1) switch (_context36.prev = _context36.next) {
          case 0:
            validate('stytch.otps.authenticate').isString('Code', code).isNumber('session_duration_minutes', options.session_duration_minutes);
            _context36.next = 3;
            return this.dfpProtectedAuth.getDFPTelemetryIDAndCaptcha();
          case 3:
            _yield$this$dfpProtec8 = _context36.sent;
            dfp_telemetry_id = _yield$this$dfpProtec8.dfp_telemetry_id;
            captcha_token = _yield$this$dfpProtec8.captcha_token;
            requestBody = Object.assign({
              token: code,
              method_id: method_id,
              dfp_telemetry_id: dfp_telemetry_id,
              captcha_token: captcha_token
            }, options);
            _context36.next = 9;
            return this._networkClient.retriableFetchSDK({
              url: '/otps/authenticate',
              body: requestBody,
              method: 'POST',
              retryCallback: this.dfpProtectedAuth.retryWithCaptchaAndDFP
            });
          case 9:
            resp = _context36.sent;
            this._subscriptionService.updateSession(resp);
            return _context36.abrupt("return", omitUser(resp));
          case 12:
          case "end":
            return _context36.stop();
        }
      }, _callee36, this);
    }));
  };
});
var HeadlessOAuthClient$1 = /*#__PURE__*/function () {
  function HeadlessOAuthClient(_networkClient, _subscriptionService, _pkceManager, _dynamicConfig, _config) {
    _classCallCheck(this, HeadlessOAuthClient);
    this._networkClient = _networkClient;
    this._subscriptionService = _subscriptionService;
    this._pkceManager = _pkceManager;
    this._dynamicConfig = _dynamicConfig;
    this._config = _config;
    this.google = {
      start: this.startOAuthFlow(OAuthProviders.Google)
    };
    this.apple = {
      start: this.startOAuthFlow(OAuthProviders.Apple)
    };
    this.microsoft = {
      start: this.startOAuthFlow(OAuthProviders.Microsoft)
    };
    this.github = {
      start: this.startOAuthFlow(OAuthProviders.Github)
    };
    this.gitlab = {
      start: this.startOAuthFlow(OAuthProviders.GitLab)
    };
    this.facebook = {
      start: this.startOAuthFlow(OAuthProviders.Facebook)
    };
    this.discord = {
      start: this.startOAuthFlow(OAuthProviders.Discord)
    };
    this.salesforce = {
      start: this.startOAuthFlow(OAuthProviders.Salesforce)
    };
    this.slack = {
      start: this.startOAuthFlow(OAuthProviders.Slack)
    };
    this.amazon = {
      start: this.startOAuthFlow(OAuthProviders.Amazon)
    };
    this.bitbucket = {
      start: this.startOAuthFlow(OAuthProviders.Bitbucket)
    };
    this.linkedin = {
      start: this.startOAuthFlow(OAuthProviders.LinkedIn)
    };
    this.coinbase = {
      start: this.startOAuthFlow(OAuthProviders.Coinbase)
    };
    this.twitch = {
      start: this.startOAuthFlow(OAuthProviders.Twitch)
    };
    this.twitter = {
      start: this.startOAuthFlow(OAuthProviders.Twitter)
    };
    this.tiktok = {
      start: this.startOAuthFlow(OAuthProviders.TikTok)
    };
    this.snapchat = {
      start: this.startOAuthFlow(OAuthProviders.Snapchat)
    };
    this.figma = {
      start: this.startOAuthFlow(OAuthProviders.Figma)
    };
    this.yahoo = {
      start: this.startOAuthFlow(OAuthProviders.Yahoo)
    };
  }
  _createClass(HeadlessOAuthClient, [{
    key: "authenticate",
    value: function authenticate(token, options) {
      return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee37() {
        var keyPair, resp;
        return _regeneratorRuntime().wrap(function _callee37$(_context37) {
          while (1) switch (_context37.prev = _context37.next) {
            case 0:
              validate('stytch.oauth.authenticate').isString('Token', token).isNumber('session_duration_minutes', options.session_duration_minutes);
              _context37.next = 3;
              return this._pkceManager.getPKPair();
            case 3:
              keyPair = _context37.sent;
              if (!keyPair) {
                logger.warn('No code verifier found in local storage for OAuth flow.\n' + 'Consider using stytch.oauth.$provider.start() to add PKCE to your OAuth flows for added security.\n' + 'See https://stytch.com/docs/oauth#guides_pkce for more information.');
              }
              _context37.next = 7;
              return this._networkClient.fetchSDK({
                url: '/oauth/authenticate',
                method: 'POST',
                body: Object.assign({
                  token: token,
                  code_verifier: keyPair === null || keyPair === void 0 ? void 0 : keyPair.code_verifier
                }, options)
              });
            case 7:
              resp = _context37.sent;
              this._pkceManager.clearPKPair();
              this._subscriptionService.updateSession(resp);
              return _context37.abrupt("return", omitUser(resp));
            case 11:
            case "end":
              return _context37.stop();
          }
        }, _callee37, this);
      }));
    }
  }, {
    key: "getBaseApiUrl",
    value: function getBaseApiUrl() {
      return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee38() {
        var _yield$this$_dynamicC, cnameDomain;
        return _regeneratorRuntime().wrap(function _callee38$(_context38) {
          while (1) switch (_context38.prev = _context38.next) {
            case 0:
              _context38.next = 2;
              return this._dynamicConfig;
            case 2:
              _yield$this$_dynamicC = _context38.sent;
              cnameDomain = _yield$this$_dynamicC.cnameDomain;
              if (!cnameDomain) {
                _context38.next = 6;
                break;
              }
              return _context38.abrupt("return", "https://".concat(cnameDomain));
            case 6:
              if (!isTestPublicToken(this._config.publicToken)) {
                _context38.next = 8;
                break;
              }
              return _context38.abrupt("return", this._config.testAPIURL);
            case 8:
              return _context38.abrupt("return", this._config.liveAPIURL);
            case 9:
            case "end":
              return _context38.stop();
          }
        }, _callee38, this);
      }));
    }
  }, {
    key: "startOAuthFlow",
    value: function startOAuthFlow(providerType) {
      var _this8 = this;
      return function () {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          login_redirect_url = _ref3.login_redirect_url,
          signup_redirect_url = _ref3.signup_redirect_url,
          custom_scopes = _ref3.custom_scopes,
          provider_params = _ref3.provider_params;
        return __awaiter$1(_this8, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee39() {
          var _yield$this$_dynamicC2, cnameDomain, pkceRequiredForOAuth, baseURL, oauthUrl, keyPair, key;
          return _regeneratorRuntime().wrap(function _callee39$(_context39) {
            while (1) switch (_context39.prev = _context39.next) {
              case 0:
                _context39.next = 2;
                return this._dynamicConfig;
              case 2:
                _yield$this$_dynamicC2 = _context39.sent;
                cnameDomain = _yield$this$_dynamicC2.cnameDomain;
                pkceRequiredForOAuth = _yield$this$_dynamicC2.pkceRequiredForOAuth;
                _context39.next = 7;
                return this.getBaseApiUrl();
              case 7:
                baseURL = _context39.sent;
                this._networkClient.logEvent({
                  name: 'start_oauth_flow',
                  details: {
                    provider_type: providerType,
                    custom_scopes: custom_scopes,
                    cname_domain: cnameDomain,
                    pkce: pkceRequiredForOAuth,
                    provider_params: provider_params
                  }
                });
                oauthUrl = new URL("".concat(baseURL, "/v1/public/oauth/").concat(providerType, "/start"));
                oauthUrl.searchParams.set('public_token', this._config.publicToken);
                if (!pkceRequiredForOAuth) {
                  _context39.next = 18;
                  break;
                }
                _context39.next = 14;
                return this._pkceManager.startPKCETransaction();
              case 14:
                keyPair = _context39.sent;
                oauthUrl.searchParams.set('code_challenge', keyPair.code_challenge);
                _context39.next = 19;
                break;
              case 18:
                this._pkceManager.clearPKPair();
              case 19:
                if (custom_scopes) {
                  validate('startOAuthFlow').isStringArray('custom_scopes', custom_scopes);
                  oauthUrl.searchParams.set('custom_scopes', custom_scopes.join(' '));
                }
                if (provider_params) {
                  validate('startOAuthFlow').isOptionalObject('provider_params', provider_params);
                  for (key in provider_params) {
                    oauthUrl.searchParams.set('provider_' + key, provider_params[key]);
                  }
                }
                login_redirect_url && oauthUrl.searchParams.set('login_redirect_url', login_redirect_url);
                signup_redirect_url && oauthUrl.searchParams.set('signup_redirect_url', signup_redirect_url);
                window.location.href = oauthUrl.toString();
              case 24:
              case "end":
                return _context39.stop();
            }
          }, _callee39, this);
        }));
      };
    }
  }]);
  return HeadlessOAuthClient;
}();
var DefaultDynamicConfig$3 = Promise.resolve({
  siweRequiredForCryptoWallets: false
});
var HeadlessCryptoWalletClient = /*#__PURE__*/function () {
  function HeadlessCryptoWalletClient(_networkClient, _apiNetworkClient, _subscriptionService) {
    var executeRecaptcha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {
      return Promise.resolve(undefined);
    };
    var dfpProtectedAuth = arguments.length > 4 ? arguments[4] : undefined;
    var _config = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : DefaultDynamicConfig$3;
    _classCallCheck(this, HeadlessCryptoWalletClient);
    this._networkClient = _networkClient;
    this._apiNetworkClient = _apiNetworkClient;
    this._subscriptionService = _subscriptionService;
    this.executeRecaptcha = executeRecaptcha;
    this.dfpProtectedAuth = dfpProtectedAuth;
    this._config = _config;
  }
  _createClass(HeadlessCryptoWalletClient, [{
    key: "authenticateStart",
    value: function authenticateStart(options) {
      var _a;
      return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee40() {
        var isLoggedIn, captcha_token, _yield$this$_config3, siweRequiredForCryptoWallets, body, endpoint, requestBody;
        return _regeneratorRuntime().wrap(function _callee40$(_context40) {
          while (1) switch (_context40.prev = _context40.next) {
            case 0:
              validate('stytch.cryptoWallets.authenticateStart').isString('crypto_wallet_address', options.crypto_wallet_address).isString('crypto_wallet_type', options.crypto_wallet_type);
              if (options.siwe_params) {
                validate('stytch.cryptoWallets.authenticateStart').isOptionalString('uri', options.siwe_params.uri).isOptionalString('chain_id', options.siwe_params.chain_id).isOptionalString('issued_at', options.siwe_params.issued_at).isOptionalString('statement', options.siwe_params.statement).isOptionalString('not_before', options.siwe_params.not_before).isOptionalString('message_request_id', options.siwe_params.message_request_id).isOptionalStringArray('resources', options.siwe_params.resources);
              }
              isLoggedIn = !!this._subscriptionService.getSession();
              _context40.next = 5;
              return this.executeRecaptcha();
            case 5:
              captcha_token = _context40.sent;
              _context40.next = 8;
              return this._config;
            case 8:
              _yield$this$_config3 = _context40.sent;
              siweRequiredForCryptoWallets = _yield$this$_config3.siweRequiredForCryptoWallets;
              body = {
                crypto_wallet_address: options.crypto_wallet_address,
                crypto_wallet_type: options.crypto_wallet_type
              };
              if (siweRequiredForCryptoWallets && options.crypto_wallet_type == 'ethereum') {
                body.siwe_params = Object.assign(Object.assign({}, options.siwe_params), {
                  uri: ((_a = options.siwe_params) === null || _a === void 0 ? void 0 : _a.uri) || window.location.origin
                });
              }
              endpoint = isLoggedIn ? '/crypto_wallets/authenticate/start/secondary' : '/crypto_wallets/authenticate/start/primary';
              requestBody = Object.assign(Object.assign({}, body), {
                captcha_token: captcha_token
              });
              return _context40.abrupt("return", this._apiNetworkClient.fetchSDK({
                url: endpoint,
                method: 'POST',
                body: requestBody
              }));
            case 15:
            case "end":
              return _context40.stop();
          }
        }, _callee40, this);
      }));
    }
  }, {
    key: "authenticate",
    value: function authenticate(options) {
      return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee41() {
        var _yield$this$dfpProtec9, dfp_telemetry_id, captcha_token, resp;
        return _regeneratorRuntime().wrap(function _callee41$(_context41) {
          while (1) switch (_context41.prev = _context41.next) {
            case 0:
              validate('stytch.cryptoWallets.authenticate').isString('signature', options.signature).isString('crypto_wallet_address', options.crypto_wallet_address).isString('crypto_wallet_type', options.crypto_wallet_type).isNumber('session_duration_minutes', options.session_duration_minutes);
              _context41.next = 3;
              return this.dfpProtectedAuth.getDFPTelemetryIDAndCaptcha();
            case 3:
              _yield$this$dfpProtec9 = _context41.sent;
              dfp_telemetry_id = _yield$this$dfpProtec9.dfp_telemetry_id;
              captcha_token = _yield$this$dfpProtec9.captcha_token;
              _context41.next = 8;
              return this._apiNetworkClient.retriableFetchSDK({
                url: '/crypto_wallets/authenticate',
                method: 'POST',
                body: {
                  session_duration_minutes: options.session_duration_minutes,
                  crypto_wallet_address: options.crypto_wallet_address,
                  crypto_wallet_type: options.crypto_wallet_type,
                  signature: options.signature,
                  captcha_token: captcha_token,
                  dfp_telemetry_id: dfp_telemetry_id
                },
                retryCallback: this.dfpProtectedAuth.retryWithCaptchaAndDFP
              });
            case 8:
              resp = _context41.sent;
              this._subscriptionService.updateSession(resp);
              return _context41.abrupt("return", omitUser(resp));
            case 11:
            case "end":
              return _context41.stop();
          }
        }, _callee41, this);
      }));
    }
  }]);
  return HeadlessCryptoWalletClient;
}();
var HeadlessTOTPClient = /*#__PURE__*/function () {
  function HeadlessTOTPClient(_networkClient, _subscriptionService, dfpProtectedAuth) {
    _classCallCheck(this, HeadlessTOTPClient);
    this._networkClient = _networkClient;
    this._subscriptionService = _subscriptionService;
    this.dfpProtectedAuth = dfpProtectedAuth;
  }
  _createClass(HeadlessTOTPClient, [{
    key: "create",
    value: function create(options) {
      return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee42() {
        var resp;
        return _regeneratorRuntime().wrap(function _callee42$(_context42) {
          while (1) switch (_context42.prev = _context42.next) {
            case 0:
              validate('stytch.totps.create').isNumber('expiration_minutes', options.expiration_minutes);
              _context42.next = 3;
              return this._networkClient.fetchSDK({
                url: '/totps',
                method: 'POST',
                body: {
                  expiration_minutes: options.expiration_minutes
                }
              });
            case 3:
              resp = _context42.sent;
              this._subscriptionService.updateUser(resp.__user);
              return _context42.abrupt("return", omitUser(resp));
            case 6:
            case "end":
              return _context42.stop();
          }
        }, _callee42, this);
      }));
    }
  }, {
    key: "authenticate",
    value: function authenticate(options) {
      return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee43() {
        var _yield$this$dfpProtec10, dfp_telemetry_id, captcha_token, resp;
        return _regeneratorRuntime().wrap(function _callee43$(_context43) {
          while (1) switch (_context43.prev = _context43.next) {
            case 0:
              validate('stytch.totps.authenticate').isNumber('session_duration_minutes', options.session_duration_minutes).isString('totp_code', options.totp_code);
              _context43.next = 3;
              return this.dfpProtectedAuth.getDFPTelemetryIDAndCaptcha();
            case 3:
              _yield$this$dfpProtec10 = _context43.sent;
              dfp_telemetry_id = _yield$this$dfpProtec10.dfp_telemetry_id;
              captcha_token = _yield$this$dfpProtec10.captcha_token;
              _context43.next = 8;
              return this._networkClient.retriableFetchSDK({
                url: '/totps/authenticate',
                method: 'POST',
                body: {
                  session_duration_minutes: options.session_duration_minutes,
                  totp_code: options.totp_code,
                  captcha_token: captcha_token,
                  dfp_telemetry_id: dfp_telemetry_id
                },
                retryCallback: this.dfpProtectedAuth.retryWithCaptchaAndDFP
              });
            case 8:
              resp = _context43.sent;
              this._subscriptionService.updateSession(resp);
              return _context43.abrupt("return", omitUser(resp));
            case 11:
            case "end":
              return _context43.stop();
          }
        }, _callee43, this);
      }));
    }
  }, {
    key: "recoveryCodes",
    value: function recoveryCodes() {
      return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee44() {
        return _regeneratorRuntime().wrap(function _callee44$(_context44) {
          while (1) switch (_context44.prev = _context44.next) {
            case 0:
              return _context44.abrupt("return", this._networkClient.fetchSDK({
                url: '/totps/recovery_codes',
                method: 'POST'
              }));
            case 1:
            case "end":
              return _context44.stop();
          }
        }, _callee44, this);
      }));
    }
  }, {
    key: "recover",
    value: function recover(options) {
      return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee45() {
        var _yield$this$dfpProtec11, dfp_telemetry_id, captcha_token, resp;
        return _regeneratorRuntime().wrap(function _callee45$(_context45) {
          while (1) switch (_context45.prev = _context45.next) {
            case 0:
              validate('stytch.totps.recover').isNumber('session_duration_minutes', options.session_duration_minutes).isString('recovery_code', options.recovery_code);
              _context45.next = 3;
              return this.dfpProtectedAuth.getDFPTelemetryIDAndCaptcha();
            case 3:
              _yield$this$dfpProtec11 = _context45.sent;
              dfp_telemetry_id = _yield$this$dfpProtec11.dfp_telemetry_id;
              captcha_token = _yield$this$dfpProtec11.captcha_token;
              _context45.next = 8;
              return this._networkClient.retriableFetchSDK({
                url: '/totps/recover',
                method: 'POST',
                body: {
                  session_duration_minutes: options.session_duration_minutes,
                  recovery_code: options.recovery_code,
                  captcha_token: captcha_token,
                  dfp_telemetry_id: dfp_telemetry_id
                },
                retryCallback: this.dfpProtectedAuth.retryWithCaptchaAndDFP
              });
            case 8:
              resp = _context45.sent;
              this._subscriptionService.updateSession(resp);
              return _context45.abrupt("return", omitUser(resp));
            case 11:
            case "end":
              return _context45.stop();
          }
        }, _callee45, this);
      }));
    }
  }]);
  return HeadlessTOTPClient;
}();
function base64urlToBuffer(baseurl64String) {
  var padding = "==".slice(0, (4 - baseurl64String.length % 4) % 4);
  var base64String = baseurl64String.replace(/-/g, "+").replace(/_/g, "/") + padding;
  var str = atob(base64String);
  var buffer = new ArrayBuffer(str.length);
  var byteView = new Uint8Array(buffer);
  for (var _i = 0; _i < str.length; _i++) {
    byteView[_i] = str.charCodeAt(_i);
  }
  return buffer;
}
function bufferToBase64url(buffer) {
  var byteView = new Uint8Array(buffer);
  var str = "";
  var _iterator2 = _createForOfIteratorHelper(byteView),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var charCode = _step2.value;
      str += String.fromCharCode(charCode);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var base64String = btoa(str);
  var base64urlString = base64String.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  return base64urlString;
}
var copyValue = "copy";
var convertValue = "convert";
function convert(conversionFn, schema2, input) {
  if (schema2 === copyValue) {
    return input;
  }
  if (schema2 === convertValue) {
    return conversionFn(input);
  }
  if (schema2 instanceof Array) {
    return input.map(function (v) {
      return convert(conversionFn, schema2[0], v);
    });
  }
  if (schema2 instanceof Object) {
    var output = {};
    for (var _i2 = 0, _Object$entries = Object.entries(schema2); _i2 < _Object$entries.length; _i2++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        key = _Object$entries$_i[0],
        schemaField = _Object$entries$_i[1];
      if (schemaField.derive) {
        var v = schemaField.derive(input);
        if (v !== void 0) {
          input[key] = v;
        }
      }
      if (!(key in input)) {
        if (schemaField.required) {
          throw new Error("Missing key: ".concat(key));
        }
        continue;
      }
      if (input[key] == null) {
        output[key] = null;
        continue;
      }
      output[key] = convert(conversionFn, schemaField.schema, input[key]);
    }
    return output;
  }
}
function derived(schema2, derive) {
  return {
    required: true,
    schema: schema2,
    derive: derive
  };
}
function required(schema2) {
  return {
    required: true,
    schema: schema2
  };
}
function optional(schema2) {
  return {
    required: false,
    schema: schema2
  };
}
var publicKeyCredentialDescriptorSchema = {
  type: required(copyValue),
  id: required(convertValue),
  transports: optional(copyValue)
};
var simplifiedExtensionsSchema = {
  appid: optional(copyValue),
  appidExclude: optional(copyValue),
  credProps: optional(copyValue)
};
var simplifiedClientExtensionResultsSchema = {
  appid: optional(copyValue),
  appidExclude: optional(copyValue),
  credProps: optional(copyValue)
};
var credentialCreationOptions = {
  publicKey: required({
    rp: required(copyValue),
    user: required({
      id: required(convertValue),
      name: required(copyValue),
      displayName: required(copyValue)
    }),
    challenge: required(convertValue),
    pubKeyCredParams: required(copyValue),
    timeout: optional(copyValue),
    excludeCredentials: optional([publicKeyCredentialDescriptorSchema]),
    authenticatorSelection: optional(copyValue),
    attestation: optional(copyValue),
    extensions: optional(simplifiedExtensionsSchema)
  }),
  signal: optional(copyValue)
};
var publicKeyCredentialWithAttestation = {
  type: required(copyValue),
  id: required(copyValue),
  rawId: required(convertValue),
  authenticatorAttachment: optional(copyValue),
  response: required({
    clientDataJSON: required(convertValue),
    attestationObject: required(convertValue),
    transports: derived(copyValue, function (response) {
      var _a;
      return ((_a = response.getTransports) == null ? void 0 : _a.call(response)) || [];
    })
  }),
  clientExtensionResults: derived(simplifiedClientExtensionResultsSchema, function (pkc) {
    return pkc.getClientExtensionResults();
  })
};
var credentialRequestOptions = {
  mediation: optional(copyValue),
  publicKey: required({
    challenge: required(convertValue),
    timeout: optional(copyValue),
    rpId: optional(copyValue),
    allowCredentials: optional([publicKeyCredentialDescriptorSchema]),
    userVerification: optional(copyValue),
    extensions: optional(simplifiedExtensionsSchema)
  }),
  signal: optional(copyValue)
};
var publicKeyCredentialWithAssertion = {
  type: required(copyValue),
  id: required(copyValue),
  rawId: required(convertValue),
  authenticatorAttachment: optional(copyValue),
  response: required({
    clientDataJSON: required(convertValue),
    authenticatorData: required(convertValue),
    signature: required(convertValue),
    userHandle: required(convertValue)
  }),
  clientExtensionResults: derived(simplifiedClientExtensionResultsSchema, function (pkc) {
    return pkc.getClientExtensionResults();
  })
};
function createRequestFromJSON(requestJSON) {
  return convert(base64urlToBuffer, credentialCreationOptions, requestJSON);
}
function createResponseToJSON(credential) {
  return convert(bufferToBase64url, publicKeyCredentialWithAttestation, credential);
}
function create(requestJSON) {
  return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee46() {
    var credential;
    return _regeneratorRuntime().wrap(function _callee46$(_context46) {
      while (1) switch (_context46.prev = _context46.next) {
        case 0:
          _context46.next = 2;
          return navigator.credentials.create(createRequestFromJSON(requestJSON));
        case 2:
          credential = _context46.sent;
          return _context46.abrupt("return", createResponseToJSON(credential));
        case 4:
        case "end":
          return _context46.stop();
      }
    }, _callee46);
  }));
}
function getRequestFromJSON(requestJSON) {
  return convert(base64urlToBuffer, credentialRequestOptions, requestJSON);
}
function getResponseToJSON(credential) {
  return convert(bufferToBase64url, publicKeyCredentialWithAssertion, credential);
}
function get(requestJSON) {
  return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee47() {
    var credential;
    return _regeneratorRuntime().wrap(function _callee47$(_context47) {
      while (1) switch (_context47.prev = _context47.next) {
        case 0:
          _context47.next = 2;
          return navigator.credentials.get(getRequestFromJSON(requestJSON));
        case 2:
          credential = _context47.sent;
          return _context47.abrupt("return", getResponseToJSON(credential));
        case 4:
        case "end":
          return _context47.stop();
      }
    }, _callee47);
  }));
}
var HeadlessWebAuthnClient = /*#__PURE__*/function () {
  function HeadlessWebAuthnClient(_networkClient, _subscriptionService, dfpProtectedAuth) {
    _classCallCheck(this, HeadlessWebAuthnClient);
    this._networkClient = _networkClient;
    this._subscriptionService = _subscriptionService;
    this.dfpProtectedAuth = dfpProtectedAuth;
    this.checkEligibleInputs = function () {
      var eligibleInputs = document.querySelectorAll("input[autocomplete*='webauthn']");
      if (eligibleInputs.length < 1) {
        console.error('No <input> with `"webauthn"` in its `autocomplete` attribute was detected');
        return false;
      }
      return true;
    };
  }
  _createClass(HeadlessWebAuthnClient, [{
    key: "register",
    value: function register(options) {
      var _a, _b;
      return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee48() {
        var startResp, publicKeyCredentialCreationOptions, publicKey, credential, resp;
        return _regeneratorRuntime().wrap(function _callee48$(_context48) {
          while (1) switch (_context48.prev = _context48.next) {
            case 0:
              validate('stytch.webauthn.register').isOptionalString('domain', options === null || options === void 0 ? void 0 : options.domain).isOptionalString('authenticator_type', options === null || options === void 0 ? void 0 : options.authenticator_type).isOptionalBoolean('is_passkey', options === null || options === void 0 ? void 0 : options.is_passkey).isOptionalNumber('session_duration_minutes', options === null || options === void 0 ? void 0 : options.session_duration_minutes).isOptionalString('override_id', options === null || options === void 0 ? void 0 : options.override_id).isOptionalString('override_name', options === null || options === void 0 ? void 0 : options.override_name).isOptionalString('override_display_name', options === null || options === void 0 ? void 0 : options.override_display_name);
              _context48.next = 3;
              return this._networkClient.fetchSDK({
                url: '/webauthn/register/start',
                method: 'POST',
                body: {
                  domain: (_a = options === null || options === void 0 ? void 0 : options.domain) !== null && _a !== void 0 ? _a : window.location.hostname,
                  authenticator_type: (_b = options === null || options === void 0 ? void 0 : options.authenticator_type) !== null && _b !== void 0 ? _b : undefined,
                  return_passkey_credential_options: options === null || options === void 0 ? void 0 : options.is_passkey,
                  override_id: options === null || options === void 0 ? void 0 : options.override_id,
                  override_name: options === null || options === void 0 ? void 0 : options.override_name,
                  override_display_name: options === null || options === void 0 ? void 0 : options.override_display_name,
                  user_agent: navigator.userAgent
                }
              });
            case 3:
              startResp = _context48.sent;
              publicKeyCredentialCreationOptions = startResp.public_key_credential_creation_options;
              publicKey = JSON.parse(publicKeyCredentialCreationOptions);
              _context48.next = 8;
              return create({
                publicKey: publicKey
              });
            case 8:
              credential = _context48.sent;
              _context48.next = 11;
              return this._networkClient.fetchSDK({
                url: '/webauthn/register',
                method: 'POST',
                body: {
                  public_key_credential: JSON.stringify(credential),
                  session_duration_minutes: options === null || options === void 0 ? void 0 : options.session_duration_minutes
                }
              });
            case 11:
              resp = _context48.sent;
              this._subscriptionService.updateSession(resp);
              return _context48.abrupt("return", omitUser(resp));
            case 14:
            case "end":
              return _context48.stop();
          }
        }, _callee48, this);
      }));
    }
  }, {
    key: "authenticate",
    value: function authenticate(options) {
      var _a, _b;
      return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee49() {
        var _yield$this$dfpProtec12, dfp_telemetry_id, captcha_token, isLoggedIn, endpoint, startResp, publicKeyCredentialRequestOptions, abortController, credReqOptions, conditionalMediationCredReqOption, credential, authenticationData;
        return _regeneratorRuntime().wrap(function _callee49$(_context49) {
          while (1) switch (_context49.prev = _context49.next) {
            case 0:
              validate('stytch.webauthn.authenticate').isOptionalString('domain', options.domain).isNumber('session_duration_minutes', options.session_duration_minutes).isOptionalBoolean('is_passkey', options.is_passkey).isOptionalObject('signal', options.signal);
              _context49.next = 3;
              return this.dfpProtectedAuth.getDFPTelemetryIDAndCaptcha();
            case 3:
              _yield$this$dfpProtec12 = _context49.sent;
              dfp_telemetry_id = _yield$this$dfpProtec12.dfp_telemetry_id;
              captcha_token = _yield$this$dfpProtec12.captcha_token;
              if (!options.conditional_mediation) {
                _context49.next = 14;
                break;
              }
              _context49.next = 9;
              return this.browserSupportsAutofill();
            case 9:
              if (_context49.sent) {
                _context49.next = 12;
                break;
              }
              console.error('Browser does not support WebAuthn autofill');
              return _context49.abrupt("return", null);
            case 12:
              if (this.checkEligibleInputs()) {
                _context49.next = 14;
                break;
              }
              return _context49.abrupt("return", null);
            case 14:
              isLoggedIn = !!this._subscriptionService.getSession();
              endpoint = isLoggedIn ? '/webauthn/authenticate/start/secondary' : '/webauthn/authenticate/start/primary';
              _context49.next = 18;
              return this._networkClient.fetchSDK({
                url: endpoint,
                method: 'POST',
                body: {
                  domain: (_a = options.domain) !== null && _a !== void 0 ? _a : window.location.hostname,
                  return_passkey_credential_options: options === null || options === void 0 ? void 0 : options.is_passkey
                }
              });
            case 18:
              startResp = _context49.sent;
              publicKeyCredentialRequestOptions = startResp.public_key_credential_request_options;
              abortController = new AbortController();
              credReqOptions = {
                publicKey: JSON.parse(publicKeyCredentialRequestOptions),
                signal: (_b = options.signal) !== null && _b !== void 0 ? _b : abortController.signal
              };
              conditionalMediationCredReqOption = Object.assign(Object.assign({}, credReqOptions), {
                mediation: 'conditional'
              });
              _context49.next = 25;
              return get(options.conditional_mediation ? conditionalMediationCredReqOption : credReqOptions);
            case 25:
              credential = _context49.sent;
              _context49.next = 28;
              return this._networkClient.retriableFetchSDK({
                url: '/webauthn/authenticate',
                method: 'POST',
                body: {
                  public_key_credential: JSON.stringify(credential),
                  session_duration_minutes: options.session_duration_minutes,
                  dfp_telemetry_id: dfp_telemetry_id,
                  captcha_token: captcha_token
                },
                retryCallback: this.dfpProtectedAuth.retryWithCaptchaAndDFP
              });
            case 28:
              authenticationData = _context49.sent;
              this._subscriptionService.updateSession(authenticationData);
              return _context49.abrupt("return", omitUser(authenticationData));
            case 31:
            case "end":
              return _context49.stop();
          }
        }, _callee49, this);
      }));
    }
  }, {
    key: "update",
    value: function update(options) {
      return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee50() {
        var url;
        return _regeneratorRuntime().wrap(function _callee50$(_context50) {
          while (1) switch (_context50.prev = _context50.next) {
            case 0:
              url = '/webauthn/update/' + options.webauthn_registration_id;
              _context50.next = 3;
              return this._networkClient.fetchSDK({
                url: url,
                method: 'PUT',
                body: {
                  name: options.name
                }
              });
            case 3:
              return _context50.abrupt("return", _context50.sent);
            case 4:
            case "end":
              return _context50.stop();
          }
        }, _callee50, this);
      }));
    }
  }, {
    key: "browserSupportsAutofill",
    value: function browserSupportsAutofill() {
      return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee51() {
        var globalPublicKeyCredential;
        return _regeneratorRuntime().wrap(function _callee51$(_context51) {
          while (1) switch (_context51.prev = _context51.next) {
            case 0:
              globalPublicKeyCredential = window.PublicKeyCredential;
              if (!(globalPublicKeyCredential === undefined || globalPublicKeyCredential.isConditionalMediationAvailable === undefined)) {
                _context51.next = 3;
                break;
              }
              return _context51.abrupt("return", new Promise(function (resolve) {
                return resolve(false);
              }));
            case 3:
              return _context51.abrupt("return", globalPublicKeyCredential.isConditionalMediationAvailable());
            case 4:
            case "end":
              return _context51.stop();
          }
        }, _callee51);
      }));
    }
  }]);
  return HeadlessWebAuthnClient;
}();
var DefaultDynamicConfig$2 = Promise.resolve({
  pkceRequiredForPasswordResets: false
});
var HeadlessPasswordClient = /*#__PURE__*/function () {
  function HeadlessPasswordClient(_networkClient, _subscriptionService, _pkceManager) {
    var _config = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DefaultDynamicConfig$2;
    var dfpProtectedAuth = arguments.length > 4 ? arguments[4] : undefined;
    _classCallCheck(this, HeadlessPasswordClient);
    this._networkClient = _networkClient;
    this._subscriptionService = _subscriptionService;
    this._pkceManager = _pkceManager;
    this._config = _config;
    this.dfpProtectedAuth = dfpProtectedAuth;
  }
  _createClass(HeadlessPasswordClient, [{
    key: "getCodeChallenge",
    value: function getCodeChallenge() {
      return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee52() {
        var _yield$this$_config4, pkceRequiredForPasswordResets, keyPair;
        return _regeneratorRuntime().wrap(function _callee52$(_context52) {
          while (1) switch (_context52.prev = _context52.next) {
            case 0:
              _context52.next = 2;
              return this._config;
            case 2:
              _yield$this$_config4 = _context52.sent;
              pkceRequiredForPasswordResets = _yield$this$_config4.pkceRequiredForPasswordResets;
              if (pkceRequiredForPasswordResets) {
                _context52.next = 6;
                break;
              }
              return _context52.abrupt("return", undefined);
            case 6:
              _context52.next = 8;
              return this._pkceManager.getPKPair();
            case 8:
              keyPair = _context52.sent;
              if (!keyPair) {
                _context52.next = 11;
                break;
              }
              return _context52.abrupt("return", keyPair.code_challenge);
            case 11:
              _context52.next = 13;
              return this._pkceManager.startPKCETransaction();
            case 13:
              keyPair = _context52.sent;
              return _context52.abrupt("return", keyPair.code_challenge);
            case 15:
            case "end":
              return _context52.stop();
          }
        }, _callee52, this);
      }));
    }
  }, {
    key: "create",
    value: function create(options) {
      return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee53() {
        var _yield$this$dfpProtec13, dfp_telemetry_id, captcha_token, resp;
        return _regeneratorRuntime().wrap(function _callee53$(_context53) {
          while (1) switch (_context53.prev = _context53.next) {
            case 0:
              validate('stytch.passwords.create').isString('password', options.password).isString('email', options.email).isNumber('session_duration_minutes', options.session_duration_minutes);
              _context53.next = 3;
              return this.dfpProtectedAuth.getDFPTelemetryIDAndCaptcha();
            case 3:
              _yield$this$dfpProtec13 = _context53.sent;
              dfp_telemetry_id = _yield$this$dfpProtec13.dfp_telemetry_id;
              captcha_token = _yield$this$dfpProtec13.captcha_token;
              _context53.next = 8;
              return this._networkClient.retriableFetchSDK({
                url: '/passwords',
                method: 'POST',
                body: {
                  email: options.email,
                  password: options.password,
                  session_duration_minutes: options.session_duration_minutes,
                  captcha_token: captcha_token,
                  dfp_telemetry_id: dfp_telemetry_id
                },
                retryCallback: this.dfpProtectedAuth.retryWithCaptchaAndDFP
              });
            case 8:
              resp = _context53.sent;
              this._subscriptionService.updateSession(resp);
              return _context53.abrupt("return", omitUser(resp));
            case 11:
            case "end":
              return _context53.stop();
          }
        }, _callee53, this);
      }));
    }
  }, {
    key: "authenticate",
    value: function authenticate(options) {
      return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee54() {
        var _yield$this$dfpProtec14, dfp_telemetry_id, captcha_token, resp;
        return _regeneratorRuntime().wrap(function _callee54$(_context54) {
          while (1) switch (_context54.prev = _context54.next) {
            case 0:
              validate('stytch.passwords.authenticate').isString('password', options.password).isString('email', options.email).isNumber('session_duration_minutes', options.session_duration_minutes);
              _context54.next = 3;
              return this.dfpProtectedAuth.getDFPTelemetryIDAndCaptcha();
            case 3:
              _yield$this$dfpProtec14 = _context54.sent;
              dfp_telemetry_id = _yield$this$dfpProtec14.dfp_telemetry_id;
              captcha_token = _yield$this$dfpProtec14.captcha_token;
              _context54.next = 8;
              return this._networkClient.retriableFetchSDK({
                url: '/passwords/authenticate',
                method: 'POST',
                body: {
                  email: options.email,
                  password: options.password,
                  session_duration_minutes: options.session_duration_minutes,
                  captcha_token: captcha_token,
                  dfp_telemetry_id: dfp_telemetry_id
                },
                retryCallback: this.dfpProtectedAuth.retryWithCaptchaAndDFP
              });
            case 8:
              resp = _context54.sent;
              this._subscriptionService.updateSession(resp);
              return _context54.abrupt("return", omitUser(resp));
            case 11:
            case "end":
              return _context54.stop();
          }
        }, _callee54, this);
      }));
    }
  }, {
    key: "resetByEmailStart",
    value: function resetByEmailStart(options) {
      return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee55() {
        var code_challenge, _yield$this$dfpProtec15, dfp_telemetry_id, captcha_token;
        return _regeneratorRuntime().wrap(function _callee55$(_context55) {
          while (1) switch (_context55.prev = _context55.next) {
            case 0:
              validate('stytch.passwords.resetByEmailStart').isString('email', options.email).isOptionalString('login_redirect_url', options.login_redirect_url).isOptionalString('reset_password_redirect_url', options.reset_password_redirect_url).isOptionalString('reset_password_template_id', options.reset_password_template_id).isOptionalNumber('reset_password_expiration_minutes', options.reset_password_expiration_minutes);
              _context55.next = 3;
              return this.getCodeChallenge();
            case 3:
              code_challenge = _context55.sent;
              _context55.next = 6;
              return this.dfpProtectedAuth.getDFPTelemetryIDAndCaptcha();
            case 6:
              _yield$this$dfpProtec15 = _context55.sent;
              dfp_telemetry_id = _yield$this$dfpProtec15.dfp_telemetry_id;
              captcha_token = _yield$this$dfpProtec15.captcha_token;
              return _context55.abrupt("return", this._networkClient.retriableFetchSDK({
                url: '/passwords/email/reset/start',
                method: 'POST',
                body: {
                  email: options.email,
                  login_redirect_url: options.login_redirect_url,
                  reset_password_redirect_url: options.reset_password_redirect_url,
                  reset_password_expiration_minutes: options.reset_password_expiration_minutes,
                  reset_password_template_id: options.reset_password_template_id,
                  code_challenge: code_challenge,
                  captcha_token: captcha_token,
                  dfp_telemetry_id: dfp_telemetry_id
                },
                retryCallback: this.dfpProtectedAuth.retryWithCaptchaAndDFP
              }));
            case 10:
            case "end":
              return _context55.stop();
          }
        }, _callee55, this);
      }));
    }
  }, {
    key: "resetByEmail",
    value: function resetByEmail(options) {
      return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee56() {
        var _yield$this$dfpProtec16, dfp_telemetry_id, captcha_token, pkPair, code_verifier, resp;
        return _regeneratorRuntime().wrap(function _callee56$(_context56) {
          while (1) switch (_context56.prev = _context56.next) {
            case 0:
              validate('stytch.passwords.resetByEmail').isString('token', options.token).isString('password', options.password).isNumber('session_duration_minutes', options.session_duration_minutes);
              _context56.next = 3;
              return this.dfpProtectedAuth.getDFPTelemetryIDAndCaptcha();
            case 3:
              _yield$this$dfpProtec16 = _context56.sent;
              dfp_telemetry_id = _yield$this$dfpProtec16.dfp_telemetry_id;
              captcha_token = _yield$this$dfpProtec16.captcha_token;
              _context56.next = 8;
              return this._pkceManager.getPKPair();
            case 8:
              pkPair = _context56.sent;
              code_verifier = pkPair === null || pkPair === void 0 ? void 0 : pkPair.code_verifier;
              _context56.next = 12;
              return this._networkClient.retriableFetchSDK({
                url: '/passwords/email/reset',
                method: 'POST',
                body: {
                  token: options.token,
                  password: options.password,
                  session_duration_minutes: options.session_duration_minutes,
                  captcha_token: captcha_token,
                  code_verifier: code_verifier,
                  dfp_telemetry_id: dfp_telemetry_id
                },
                retryCallback: this.dfpProtectedAuth.retryWithCaptchaAndDFP
              });
            case 12:
              resp = _context56.sent;
              this._pkceManager.clearPKPair();
              this._subscriptionService.updateSession(resp);
              return _context56.abrupt("return", omitUser(resp));
            case 16:
            case "end":
              return _context56.stop();
          }
        }, _callee56, this);
      }));
    }
  }, {
    key: "resetByExistingPassword",
    value: function resetByExistingPassword(options) {
      return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee57() {
        var _yield$this$dfpProtec17, dfp_telemetry_id, captcha_token, resp;
        return _regeneratorRuntime().wrap(function _callee57$(_context57) {
          while (1) switch (_context57.prev = _context57.next) {
            case 0:
              validate('stytch.passwords.resetByExistingPassword').isString('email', options.email).isString('existing_password', options.existing_password).isString('new_password', options.new_password).isNumber('session_duration_minutes', options.session_duration_minutes);
              _context57.next = 3;
              return this.dfpProtectedAuth.getDFPTelemetryIDAndCaptcha();
            case 3:
              _yield$this$dfpProtec17 = _context57.sent;
              dfp_telemetry_id = _yield$this$dfpProtec17.dfp_telemetry_id;
              captcha_token = _yield$this$dfpProtec17.captcha_token;
              _context57.next = 8;
              return this._networkClient.retriableFetchSDK({
                url: '/passwords/existing_password/reset',
                method: 'POST',
                body: {
                  email: options.email,
                  existing_password: options.existing_password,
                  new_password: options.new_password,
                  session_duration_minutes: options.session_duration_minutes,
                  dfp_telemetry_id: dfp_telemetry_id,
                  captcha_token: captcha_token
                },
                retryCallback: this.dfpProtectedAuth.retryWithCaptchaAndDFP
              });
            case 8:
              resp = _context57.sent;
              this._subscriptionService.updateSession(resp);
              return _context57.abrupt("return", omitUser(resp));
            case 11:
            case "end":
              return _context57.stop();
          }
        }, _callee57, this);
      }));
    }
  }, {
    key: "resetBySession",
    value: function resetBySession(options) {
      return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee58() {
        var _yield$this$dfpProtec18, dfp_telemetry_id, captcha_token, resp;
        return _regeneratorRuntime().wrap(function _callee58$(_context58) {
          while (1) switch (_context58.prev = _context58.next) {
            case 0:
              validate('stytch.passwords.resetBySession').isString('password', options.password);
              _context58.next = 3;
              return this.dfpProtectedAuth.getDFPTelemetryIDAndCaptcha();
            case 3:
              _yield$this$dfpProtec18 = _context58.sent;
              dfp_telemetry_id = _yield$this$dfpProtec18.dfp_telemetry_id;
              captcha_token = _yield$this$dfpProtec18.captcha_token;
              _context58.next = 8;
              return this._networkClient.retriableFetchSDK({
                url: '/passwords/session/reset',
                method: 'POST',
                body: {
                  password: options.password,
                  session_duration_minutes: options.session_duration_minutes,
                  dfp_telemetry_id: dfp_telemetry_id,
                  captcha_token: captcha_token
                },
                retryCallback: this.dfpProtectedAuth.retryWithCaptchaAndDFP
              });
            case 8:
              resp = _context58.sent;
              this._subscriptionService.updateSession(resp);
              return _context58.abrupt("return", resp);
            case 11:
            case "end":
              return _context58.stop();
          }
        }, _callee58, this);
      }));
    }
  }, {
    key: "strengthCheck",
    value: function strengthCheck(options) {
      return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee59() {
        return _regeneratorRuntime().wrap(function _callee59$(_context59) {
          while (1) switch (_context59.prev = _context59.next) {
            case 0:
              validate('stytch.passwords.strengthCheck').isOptionalString('email', options.email).isString('password', options.password);
              return _context59.abrupt("return", this._networkClient.fetchSDK({
                url: '/passwords/strength_check',
                method: 'POST',
                body: {
                  email: options.email,
                  password: options.password
                }
              }));
            case 2:
            case "end":
              return _context59.stop();
          }
        }, _callee59, this);
      }));
    }
  }]);
  return HeadlessPasswordClient;
}();
Promise.resolve({
  pkceRequiredForEmailMagicLinks: false
});
Promise.resolve({
  pkceRequiredForPasswordResets: false
});
var IframeHostClient = /*#__PURE__*/function () {
  function IframeHostClient(iframeURL) {
    _classCallCheck(this, IframeHostClient);
    this.iframeURL = iframeURL;
    this.createIframe();
  }
  _createClass(IframeHostClient, [{
    key: "createIframe",
    value: function createIframe() {
      var existingIframe = document.querySelector("[src~=\"".concat(this.iframeURL, "\"]"));
      if (!existingIframe) {
        existingIframe = document.createElement('iframe');
        existingIframe.src = this.iframeURL;
        existingIframe.style.position = 'absolute';
        existingIframe.style.width = '0';
        existingIframe.style.height = '0';
        existingIframe.style.border = '0';
        document.body.appendChild(existingIframe);
      } else {
        logger.warn("It looks like you're creating multiple copies of the Stytch client." + ' This behavior is unsupported, and unintended side effects may occur. ' + "Make sure you are creating the Stytch client at the global level, and not inside a component's render function.");
      }
      if (existingIframe.dataset.loaded === 'true') {
        this.frame = Promise.resolve(existingIframe);
        return;
      }
      this.frame = new Promise(function (resolve) {
        existingIframe.addEventListener('load', function () {
          existingIframe.dataset.loaded = 'true';
          resolve(existingIframe);
        }, {
          once: true
        });
      });
    }
  }, {
    key: "call",
    value: function call(method, args) {
      return __awaiter$1(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee140() {
        var _this23 = this;
        var frame, channel;
        return _regeneratorRuntime().wrap(function _callee140$(_context140) {
          while (1) switch (_context140.prev = _context140.next) {
            case 0:
              _context140.next = 2;
              return this.frame;
            case 2:
              frame = _context140.sent;
              channel = new MessageChannel();
              return _context140.abrupt("return", new Promise(function (resolve, reject) {
                var _a;
                channel.port1.onmessage = function (event) {
                  var resp = event.data;
                  channel.port1.close();
                  if (resp.success) {
                    resolve(resp.payload);
                  } else {
                    reject(ErrorMarshaller.unmarshall(resp.error));
                  }
                };
                var message = {
                  method: method,
                  args: args
                };
                (_a = frame.contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage(message, _this23.iframeURL, [channel.port2]);
              }));
            case 5:
            case "end":
              return _context140.stop();
          }
        }, _callee140, this);
      }));
    }
  }]);
  return IframeHostClient;
}();
var SearchDataManager = /*#__PURE__*/function () {
  function SearchDataManager(_networkClient, dfpProtectedAuth) {
    _classCallCheck(this, SearchDataManager);
    this._networkClient = _networkClient;
    this.dfpProtectedAuth = dfpProtectedAuth;
  }
  _createClass(SearchDataManager, [{
    key: "searchUser",
    value: function searchUser(email) {
      var _this25 = this;
      return this.dfpProtectedAuth.getDFPTelemetryIDAndCaptcha().then(function (_ref7) {
        var dfp_telemetry_id = _ref7.dfp_telemetry_id,
          captcha_token = _ref7.captcha_token;
        return _this25._networkClient.fetchSDK({
          url: "/users/search",
          method: 'POST',
          body: {
            email: email,
            dfp_telemetry_id: dfp_telemetry_id,
            captcha_token: captcha_token
          }
        });
      });
    }
  }, {
    key: "searchMember",
    value: function searchMember(email, organization_id) {
      return this._networkClient.fetchSDK({
        url: "/b2b/organizations/members/search",
        method: 'POST',
        body: {
          email_address: email,
          organization_id: organization_id
        }
      });
    }
  }]);
  return SearchDataManager;
}();
var shouldTryRefresh = function shouldTryRefresh(state) {
  return !!(state === null || state === void 0 ? void 0 : state.session);
};
var SessionManager = /*#__PURE__*/function () {
  function SessionManager(_subscriptionService, _headlessSessionClient) {
    var _this26 = this;
    _classCallCheck(this, SessionManager);
    this._subscriptionService = _subscriptionService;
    this._headlessSessionClient = _headlessSessionClient;
    this._onDataChange = function (state) {
      if (shouldTryRefresh(state)) {
        _this26.scheduleBackgroundRefresh();
      } else {
        _this26.cancelBackgroundRefresh();
      }
    };
    this._reauthenticateWithBackoff = function () {
      return __awaiter$1(_this26, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee142() {
        var count;
        return _regeneratorRuntime().wrap(function _callee142$(_context142) {
          while (1) switch (_context142.prev = _context142.next) {
            case 0:
              count = 0;
            case 1:
              _context142.prev = 2;
              _context142.next = 5;
              return this._headlessSessionClient.authenticate();
            case 5:
              return _context142.abrupt("return", _context142.sent);
            case 8:
              _context142.prev = 8;
              _context142.t0 = _context142["catch"](2);
              if (!SessionManager.isUnrecoverableError(_context142.t0)) {
                _context142.next = 12;
                break;
              }
              return _context142.abrupt("return", Promise.reject(_context142.t0));
            case 12:
              count++;
              _context142.next = 15;
              return new Promise(function (done) {
                return setTimeout(done, SessionManager.timeoutForAttempt(count));
              });
            case 15:
              _context142.next = 1;
              break;
            case 17:
            case "end":
              return _context142.stop();
          }
        }, _callee142, this, [[2, 8]]);
      }));
    };
    this.timeout = null;
    this._subscriptionService.subscribeToState(this._onDataChange);
  }
  _createClass(SessionManager, [{
    key: "performBackgroundRefresh",
    value: function performBackgroundRefresh() {
      var _this27 = this;
      this._reauthenticateWithBackoff().then(function () {
        _this27.scheduleBackgroundRefresh();
      })["catch"](function (error) {
        logger.warn('Session background refresh failed. Signalling to app that user is logged out.', {
          error: error
        });
        _this27._subscriptionService.destroySession();
      });
    }
  }, {
    key: "scheduleBackgroundRefresh",
    value: function scheduleBackgroundRefresh() {
      var _this28 = this;
      this.cancelBackgroundRefresh();
      this.timeout = setTimeout(function () {
        _this28.performBackgroundRefresh();
      }, SessionManager.REFRESH_INTERVAL_MS);
    }
  }, {
    key: "cancelBackgroundRefresh",
    value: function cancelBackgroundRefresh() {
      if (this.timeout !== null) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
    }
  }], [{
    key: "timeoutForAttempt",
    value: function timeoutForAttempt(count) {
      count = Math.min(count, 7);
      var jitter = Math.floor(Math.random() * 350) - 175;
      var delayMS = 2000 * Math.pow(2, count);
      return jitter + delayMS;
    }
  }, {
    key: "isUnrecoverableError",
    value: function isUnrecoverableError(error) {
      return UNRECOVERABLE_ERROR_TYPES.includes(error.error_type);
    }
  }]);
  return SessionManager;
}();
SessionManager.REFRESH_INTERVAL_MS = 1000 * 60 * 3;
var StateChangeClient = /*#__PURE__*/_createClass(function StateChangeClient(_subscriptionService, emptyState) {
  var _this29 = this;
  _classCallCheck(this, StateChangeClient);
  this._subscriptionService = _subscriptionService;
  this.emptyState = emptyState;
  this.onStateChange = function (callback) {
    return _this29._subscriptionService.subscribeToState(function (state) {
      callback(state !== null && state !== void 0 ? state : _this29.emptyState);
    });
  };
});
var BOOTSTRAP_CACHE_KEY = 'bootstrap';
var DEFAULT_BOOTSTRAP = function DEFAULT_BOOTSTRAP() {
  return {
    displayWatermark: false,
    cnameDomain: null,
    emailDomains: ['stytch.com'],
    captchaSettings: {
      enabled: false
    },
    pkceRequiredForEmailMagicLinks: false,
    pkceRequiredForPasswordResets: false,
    pkceRequiredForOAuth: false,
    pkceRequiredForSso: false,
    slugPattern: null,
    createOrganizationEnabled: false,
    passwordConfig: null,
    runDFPProtectedAuth: false,
    rbacPolicy: null,
    siweRequiredForCryptoWallets: false
  };
};
var BootstrapDataManager = /*#__PURE__*/function () {
  function BootstrapDataManager(_publicToken, _networkClient, _dataLayer) {
    var _this9 = this;
    _classCallCheck2(this, BootstrapDataManager);
    this._publicToken = _publicToken;
    this._networkClient = _networkClient;
    this._dataLayer = _dataLayer;
    this._bootstrapDataPromise = this._networkClient.fetchSDK({
      url: "/projects/bootstrap/".concat(this._publicToken),
      method: 'GET'
    }).then(BootstrapDataManager.mapBootstrapData).then(function (data) {
      _this9._dataLayer.setItem(BOOTSTRAP_CACHE_KEY, JSON.stringify(data));
      return data;
    })["catch"](function (error) {
      logger.error(error);
      return DEFAULT_BOOTSTRAP();
    });
  }
  _createClass2(BootstrapDataManager, [{
    key: "getSync",
    value: function getSync() {
      var cached = this._dataLayer.getItem(BOOTSTRAP_CACHE_KEY);
      if (cached === null) {
        return DEFAULT_BOOTSTRAP();
      }
      try {
        return JSON.parse(cached);
      } catch (_a) {
        return DEFAULT_BOOTSTRAP();
      }
    }
  }, {
    key: "getAsync",
    value: function getAsync() {
      return this._bootstrapDataPromise;
    }
  }], [{
    key: "mapBootstrapData",
    value: function mapBootstrapData(response) {
      var _a, _b;
      var passwordConfig = response.password_config !== null ? {
        ludsComplexity: response.password_config.luds_complexity,
        ludsMinimumCount: response.password_config.luds_minimum_count
      } : null;
      return {
        displayWatermark: !response.disable_sdk_watermark,
        captchaSettings: response.captcha_settings,
        cnameDomain: response.cname_domain,
        emailDomains: response.email_domains,
        pkceRequiredForEmailMagicLinks: response.pkce_required_for_email_magic_links,
        pkceRequiredForPasswordResets: response.pkce_required_for_password_resets,
        pkceRequiredForOAuth: response.pkce_required_for_oauth,
        pkceRequiredForSso: response.pkce_required_for_sso,
        slugPattern: response.slug_pattern,
        createOrganizationEnabled: response.create_organization_enabled,
        passwordConfig: passwordConfig,
        runDFPProtectedAuth: (_a = response.dfp_protected_auth_enabled) !== null && _a !== void 0 ? _a : false,
        dfpProtectedAuthMode: response.dfp_protected_auth_mode,
        rbacPolicy: (_b = response.rbac_policy) !== null && _b !== void 0 ? _b : null,
        siweRequiredForCryptoWallets: response.siwe_required_for_crypto_wallets
      };
    }
  }]);
  return BootstrapDataManager;
}();
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
var loadRecaptchaClient = function loadRecaptchaClient(siteKey) {
  return loadESModule("https://www.google.com/recaptcha/enterprise.js?render=".concat(siteKey), function () {
    return window.grecaptcha.enterprise;
  });
};
var CaptchaProvider = /*#__PURE__*/_createClass2(function CaptchaProvider(bootstrapPromise) {
  var _this10 = this;
  _classCallCheck2(this, CaptchaProvider);
  this.bootstrapPromise = bootstrapPromise;
  this.executeRecaptcha = function () {
    return __awaiter(_this10, void 0, void 0, /*#__PURE__*/_regeneratorRuntime2().mark(function _callee9() {
      var _yield$this$state4, captchaClient, configured, siteKey;
      return _regeneratorRuntime2().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return this.state;
          case 2:
            _yield$this$state4 = _context9.sent;
            captchaClient = _yield$this$state4.captchaClient;
            configured = _yield$this$state4.configured;
            siteKey = _yield$this$state4.siteKey;
            if (configured) {
              _context9.next = 8;
              break;
            }
            return _context9.abrupt("return", undefined);
          case 8:
            _context9.next = 10;
            return new Promise(function (resolve) {
              return captchaClient.ready(resolve);
            });
          case 10:
            return _context9.abrupt("return", captchaClient.execute(siteKey, {
              action: 'LOGIN'
            }));
          case 11:
          case "end":
            return _context9.stop();
        }
      }, _callee9, this);
    }));
  };
  this.state = bootstrapPromise.then(function (bootstrapData) {
    return __awaiter(_this10, void 0, void 0, /*#__PURE__*/_regeneratorRuntime2().mark(function _callee10() {
      return _regeneratorRuntime2().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            if (bootstrapData.captchaSettings.enabled) {
              _context10.next = 2;
              break;
            }
            return _context10.abrupt("return", {
              configured: false
            });
          case 2:
            _context10.next = 4;
            return loadRecaptchaClient(bootstrapData.captchaSettings.siteKey);
          case 4:
            _context10.t0 = _context10.sent;
            _context10.t1 = bootstrapData.captchaSettings.siteKey;
            return _context10.abrupt("return", {
              configured: true,
              captchaClient: _context10.t0,
              siteKey: _context10.t1
            });
          case 7:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    }));
  });
});
var ClientsideServicesProvider = /*#__PURE__*/function () {
  function ClientsideServicesProvider(iframeURL) {
    var _this11 = this;
    _classCallCheck2(this, ClientsideServicesProvider);
    this.iframeURL = iframeURL;
    this.oneTapStart = function (req) {
      return _this11.call('oneTapStart', req);
    };
    this.oneTapSubmit = function (req) {
      return _this11.call('oneTapSubmit', req);
    };
    this.parsedPhoneNumber = function (req) {
      return _this11.call('parsedPhoneNumber', req);
    };
  }
  _createClass2(ClientsideServicesProvider, [{
    key: "frameClient",
    get: function get() {
      var _a;
      this._frameClient = (_a = this._frameClient) !== null && _a !== void 0 ? _a : new IframeHostClient(this.iframeURL);
      return this._frameClient;
    }
  }, {
    key: "call",
    value: function call(handlerName, req) {
      return this.frameClient.call(handlerName, [req]);
    }
  }]);
  return ClientsideServicesProvider;
}();
var HeadlessOAuthClient = /*#__PURE__*/function (_HeadlessOAuthClient$) {
  _inherits2(HeadlessOAuthClient, _HeadlessOAuthClient$);
  function HeadlessOAuthClient(_networkClient, _subscriptionService, _pkceManager, _dynamicConfig, _config, _oneTap) {
    var _this12;
    _classCallCheck2(this, HeadlessOAuthClient);
    _this12 = _callSuper2(this, HeadlessOAuthClient, [_networkClient, _subscriptionService, _pkceManager, _dynamicConfig, _config]);
    _this12._oneTap = _oneTap;
    _this12.startOneTap = function (options) {
      return __awaiter(_assertThisInitialized2(_this12), void 0, void 0, /*#__PURE__*/_regeneratorRuntime2().mark(function _callee11() {
        var clientResult, client, onSuccessCallback;
        return _regeneratorRuntime2().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return this._oneTap.createOneTapClient();
            case 2:
              clientResult = _context11.sent;
              if (clientResult.success) {
                _context11.next = 5;
                break;
              }
              throw new Error("One Tap could not load: ".concat(clientResult.reason));
            case 5:
              client = clientResult.client;
              onSuccessCallback = this._oneTap.createOnSuccessHandler({
                signupRedirectUrl: options.signup_redirect_url,
                loginRedirectUrl: options.login_redirect_url,
                onSuccess: this._oneTap.RedirectOnSuccess
              });
              return _context11.abrupt("return", client.render({
                style: {
                  position: OneTapPositions.floating
                },
                onOneTapCancelled: options.onOneTapCancelled,
                callback: onSuccessCallback
              }));
            case 8:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
    };
    _this12.googleOneTap = {
      start: _this12.startOneTap
    };
    return _this12;
  }
  return _createClass2(HeadlessOAuthClient);
}(HeadlessOAuthClient$1);
var navigatorSupportsFedCM = typeof window !== 'undefined' && 'IdentityCredential' in window;
var getConfiguredEmbeddedMode = function getConfiguredEmbeddedMode(position) {
  if (position === OneTapPositions.forceLegacyEmbedded) {
    return 'force';
  }
  if (position === OneTapPositions.embeddedOnly || position === OneTapPositions.embedded || position === OneTapPositions.floatingOrEmbedded) {
    return true;
  }
  return false;
};
var getShouldRenderEmbeddedOneTap = function getShouldRenderEmbeddedOneTap(position) {
  var embeddedMode = getConfiguredEmbeddedMode(position);
  return embeddedMode === 'force' || embeddedMode && !navigatorSupportsFedCM;
};
var GoogleOneTapClient = /*#__PURE__*/function () {
  function GoogleOneTapClient(_googleClient, _clientId) {
    _classCallCheck2(this, GoogleOneTapClient);
    this._googleClient = _googleClient;
    this._clientId = _clientId;
  }
  _createClass2(GoogleOneTapClient, [{
    key: "cancel",
    value: function cancel() {
      this._googleClient.cancel();
    }
  }, {
    key: "render",
    value: function render(_ref4) {
      var callback = _ref4.callback,
        onOneTapCancelled = _ref4.onOneTapCancelled,
        style = _ref4.style;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime2().mark(function _callee12() {
        var _this13 = this;
        var embeddedMode, shouldRenderEmbeddedOneTap, config;
        return _regeneratorRuntime2().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              embeddedMode = getConfiguredEmbeddedMode(style.position);
              shouldRenderEmbeddedOneTap = getShouldRenderEmbeddedOneTap(style.position);
              config = {
                client_id: this._clientId,
                callback: callback,
                auto_select: false,
                context: 'use',
                itp_support: true,
                use_fedcm_for_prompt: embeddedMode !== 'force'
              };
              if (shouldRenderEmbeddedOneTap) {
                config.prompt_parent_id = 'google-parent-prompt';
                config.cancel_on_tap_outside = false;
              }
              this._googleClient.initialize(config);
              return _context12.abrupt("return", new Promise(function (resolve) {
                _this13._googleClient.prompt(function (notification) {
                  var _a, _b, _c, _d, _e;
                  if (notification.isSkippedMoment()) {
                    var reason = (_b = (_a = notification.getSkippedReason) === null || _a === void 0 ? void 0 : _a.call(notification)) !== null && _b !== void 0 ? _b : 'unknown_reason';
                    if (reason === 'user_cancel') {
                      onOneTapCancelled === null || onOneTapCancelled === void 0 ? void 0 : onOneTapCancelled();
                    }
                    return resolve({
                      success: false,
                      reason: reason
                    });
                  }
                  if (!notification.isNotDisplayed && shouldRenderEmbeddedOneTap || ((_c = notification.isNotDisplayed) === null || _c === void 0 ? void 0 : _c.call(notification))) {
                    return resolve({
                      success: false,
                      reason: (_e = (_d = notification.getNotDisplayedReason) === null || _d === void 0 ? void 0 : _d.call(notification)) !== null && _e !== void 0 ? _e : 'unknown_reason'
                    });
                  }
                  if (!notification.isDismissedMoment()) {
                    _this13.styleFrame(shouldRenderEmbeddedOneTap);
                    return resolve({
                      success: true
                    });
                  }
                });
              }));
            case 6:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
    }
  }, {
    key: "styleFrame",
    value: function styleFrame(shouldRenderEmbeddedOneTap) {
      if (!shouldRenderEmbeddedOneTap) {
        return;
      }
      Array.from(document.getElementsByTagName('iframe')).forEach(function (frame) {
        if (frame.src.includes(GOOGLE_ONE_TAP_HOST)) {
          frame.style.width = '100%';
        }
      });
    }
  }]);
  return GoogleOneTapClient;
}();
var loadGoogleOneTapClient = function loadGoogleOneTapClient() {
  return loadESModule(GOOGLE_ONE_TAP_SCRIPT_URL, function () {
    return window.google.accounts.id;
  });
};
var OneTapProvider = /*#__PURE__*/function () {
  function OneTapProvider(_publicToken, clientsideServices) {
    var _this14 = this;
    _classCallCheck2(this, OneTapProvider);
    this._publicToken = _publicToken;
    this.clientsideServices = clientsideServices;
    this.createOnSuccessHandler = function (_ref5) {
      var loginRedirectUrl = _ref5.loginRedirectUrl,
        signupRedirectUrl = _ref5.signupRedirectUrl,
        onSuccess = _ref5.onSuccess;
      return function (response) {
        return __awaiter(_this14, void 0, void 0, /*#__PURE__*/_regeneratorRuntime2().mark(function _callee60() {
          var credential, _yield$this$submitGoo, redirect_url;
          return _regeneratorRuntime2().wrap(function _callee60$(_context60) {
            while (1) switch (_context60.prev = _context60.next) {
              case 0:
                credential = response.credential;
                _context60.next = 3;
                return this.submitGoogleOneTapToken({
                  credential: credential,
                  loginRedirectUrl: loginRedirectUrl,
                  signupRedirectUrl: signupRedirectUrl
                });
              case 3:
                _yield$this$submitGoo = _context60.sent;
                redirect_url = _yield$this$submitGoo.redirect_url;
                onSuccess(redirect_url);
              case 6:
              case "end":
                return _context60.stop();
            }
          }, _callee60, this);
        }));
      };
    };
    this.RedirectOnSuccess = function (redirect_url) {
      window.location.href = redirect_url;
    };
  }
  _createClass2(OneTapProvider, [{
    key: "createOneTapClient",
    value: function createOneTapClient() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime2().mark(function _callee61() {
        var googleClientId, _yield$this$fetchGoog, err, client;
        return _regeneratorRuntime2().wrap(function _callee61$(_context61) {
          while (1) switch (_context61.prev = _context61.next) {
            case 0:
              _context61.prev = 0;
              _context61.next = 3;
              return this.fetchGoogleStart();
            case 3:
              _yield$this$fetchGoog = _context61.sent;
              googleClientId = _yield$this$fetchGoog.googleClientId;
              _context61.next = 11;
              break;
            case 7:
              _context61.prev = 7;
              _context61.t0 = _context61["catch"](0);
              err = _context61.t0;
              return _context61.abrupt("return", {
                success: false,
                reason: err.error_type
              });
            case 11:
              if (!(googleClientId === '')) {
                _context61.next = 13;
                break;
              }
              return _context61.abrupt("return", {
                success: false,
                reason: 'oauth_config_not_found'
              });
            case 13:
              _context61.t1 = GoogleOneTapClient;
              _context61.next = 16;
              return loadGoogleOneTapClient();
            case 16:
              _context61.t2 = _context61.sent;
              _context61.t3 = googleClientId;
              client = new _context61.t1(_context61.t2, _context61.t3);
              return _context61.abrupt("return", {
                success: true,
                client: client
              });
            case 20:
            case "end":
              return _context61.stop();
          }
        }, _callee61, this, [[0, 7]]);
      }));
    }
  }, {
    key: "fetchGoogleStart",
    value: function fetchGoogleStart() {
      if (this.googleConfig) {
        return this.googleConfig;
      }
      this.googleConfig = this.clientsideServices.oneTapStart({
        publicToken: this._publicToken
      });
      return this.googleConfig;
    }
  }, {
    key: "submitGoogleOneTapToken",
    value: function submitGoogleOneTapToken(_ref6) {
      var credential = _ref6.credential,
        loginRedirectUrl = _ref6.loginRedirectUrl,
        signupRedirectUrl = _ref6.signupRedirectUrl;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime2().mark(function _callee62() {
        var _yield$this$fetchGoog2, oauthCallbackId;
        return _regeneratorRuntime2().wrap(function _callee62$(_context62) {
          while (1) switch (_context62.prev = _context62.next) {
            case 0:
              _context62.next = 2;
              return this.fetchGoogleStart();
            case 2:
              _yield$this$fetchGoog2 = _context62.sent;
              oauthCallbackId = _yield$this$fetchGoog2.oauthCallbackId;
              return _context62.abrupt("return", this.clientsideServices.oneTapSubmit({
                publicToken: this._publicToken,
                idToken: credential,
                loginRedirectURL: loginRedirectUrl,
                oauthCallbackID: oauthCallbackId,
                signupRedirectURL: signupRedirectUrl
              }));
            case 5:
            case "end":
              return _context62.stop();
          }
        }, _callee62, this);
      }));
    }
  }], [{
    key: "WillGoogleOneTapShowBannerForUA",
    value: function WillGoogleOneTapShowBannerForUA(ua) {
      var uaContains = function uaContains(userAgent, searchString) {
        return userAgent.indexOf(searchString) !== -1;
      };
      var isTabletUA = uaContains(ua, 'iPad') || uaContains(ua, 'Android') && !uaContains(ua, 'Mobile') || uaContains(ua, 'Silk');
      var isMobileUA = uaContains(ua, 'iPod') || uaContains(ua, 'iPhone') || uaContains(ua, 'Android') || uaContains(ua, 'IEMobile');
      return !isTabletUA && isMobileUA;
    }
  }, {
    key: "WillGoogleOneTapShowEmbedded",
    value: function WillGoogleOneTapShowEmbedded() {
      return !OneTapProvider.WillGoogleOneTapShowBannerForUA(navigator.userAgent);
    }
  }]);
  return OneTapProvider;
}();
var PKCE_VERIFIER_STORAGE_KEY = 'PKCE_VERIFIER';
function toHex(n) {
  var str = n.toString(16);
  if (str.length === 1) {
    str = '0' + str;
  }
  return str;
}
function base64URLEncode(buf) {
  var _String$fromCharCode;
  return btoa((_String$fromCharCode = String.fromCharCode).call.apply(_String$fromCharCode, [null].concat(_toConsumableArray(new Uint8Array(buf))))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
var PKCEManager = /*#__PURE__*/function () {
  function PKCEManager(_dataLayer, namespace) {
    _classCallCheck2(this, PKCEManager);
    this._dataLayer = _dataLayer;
    this.namespace = namespace;
  }
  _createClass2(PKCEManager, [{
    key: "key",
    value: function key() {
      return PKCE_VERIFIER_STORAGE_KEY + ':' + this.namespace;
    }
  }, {
    key: "startPKCETransaction",
    value: function startPKCETransaction() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime2().mark(function _callee63() {
        var keyPair;
        return _regeneratorRuntime2().wrap(function _callee63$(_context63) {
          while (1) switch (_context63.prev = _context63.next) {
            case 0:
              _context63.next = 2;
              return PKCEManager.createProofkeyPair();
            case 2:
              keyPair = _context63.sent;
              this._dataLayer.setItem(this.key(), JSON.stringify(keyPair));
              return _context63.abrupt("return", keyPair);
            case 5:
            case "end":
              return _context63.stop();
          }
        }, _callee63, this);
      }));
    }
  }, {
    key: "getPKPair",
    value: function getPKPair() {
      var serialized = this._dataLayer.getItem(this.key());
      if (serialized === null) {
        return undefined;
      }
      try {
        return JSON.parse(serialized);
      } catch (_a) {
        logger.warn('Found malformed Proof Key pair in localstorage.');
        return undefined;
      }
    }
  }, {
    key: "clearPKPair",
    value: function clearPKPair() {
      return this._dataLayer.removeItem(this.key());
    }
  }], [{
    key: "createProofkeyPair",
    value: function createProofkeyPair() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime2().mark(function _callee64() {
        var bytes, codeVerifier, digest;
        return _regeneratorRuntime2().wrap(function _callee64$(_context64) {
          while (1) switch (_context64.prev = _context64.next) {
            case 0:
              bytes = new Uint32Array(16);
              window.crypto.getRandomValues(bytes);
              codeVerifier = Array.from(bytes).map(toHex).join('');
              _context64.next = 5;
              return window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(codeVerifier));
            case 5:
              digest = _context64.sent;
              return _context64.abrupt("return", {
                code_challenge: base64URLEncode(digest),
                code_verifier: codeVerifier
              });
            case 7:
            case "end":
              return _context64.stop();
          }
        }, _callee64);
      }));
    }
  }]);
  return PKCEManager;
}();
var createDeepEqual = function createDeepEqual() {
  var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref8$KEYS_TO_EXCLUDE = _ref8.KEYS_TO_EXCLUDE,
    KEYS_TO_EXCLUDE = _ref8$KEYS_TO_EXCLUDE === void 0 ? [] : _ref8$KEYS_TO_EXCLUDE;
  var deepEqual = function deepEqual(a, b) {
    if (_typeof2(a) !== _typeof2(b)) return false;
    if (a === null || b === null) return a === b;
    if (_typeof2(a) === 'object') {
      if (Object.keys(a).length !== Object.keys(b).length || Object.keys(a).some(function (k) {
        return !(k in b);
      })) return false;
      return Object.entries(a).filter(function (_ref9) {
        var _ref10 = _slicedToArray2(_ref9, 1),
          k = _ref10[0];
        return !KEYS_TO_EXCLUDE.includes(k);
      }).every(function (_ref11) {
        var _ref12 = _slicedToArray2(_ref11, 2),
          k = _ref12[0],
          v = _ref12[1];
        return deepEqual(v, b[k]);
      });
    }
    return a === b;
  };
  return deepEqual;
};
var isLocalhost = function isLocalhost() {
  return Boolean(window.location.hostname === 'localhost' || window.location.hostname === '[::1]' || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
};
var buildFinalConfig = function buildFinalConfig(opts) {
  var _a, _b, _c, _d;
  return {
    cookieOptions: opts === null || opts === void 0 ? void 0 : opts.cookieOptions,
    endpoints: {
      testAPIURL: (_b = (_a = opts === null || opts === void 0 ? void 0 : opts.endpoints) === null || _a === void 0 ? void 0 : _a.testAPIURL) !== null && _b !== void 0 ? _b : TEST_API_URL,
      liveAPIURL: getLiveApiURL(opts),
      dfpBackendURL: getDFPBackendURL(opts),
      clientsideServicesIframeURL: (_d = (_c = opts === null || opts === void 0 ? void 0 : opts.endpoints) === null || _c === void 0 ? void 0 : _c.clientsideServicesIframeURL) !== null && _d !== void 0 ? _d : CLIENTSIDE_SERVICES_IFRAME_URL
    }
  };
};
var hasMultipleCookies = function hasMultipleCookies(cookieName) {
  var cookiePairs = document.cookie ? document.cookie.split('; ') : [];
  var matchedCookies = cookiePairs.filter(function (pair) {
    var _pair$split = pair.split('='),
      _pair$split2 = _slicedToArray2(_pair$split, 1),
      name = _pair$split2[0];
    return cookieName === name;
  });
  return matchedCookies.length > 1;
};
var PERSISTENT_STORAGE_KEY_PREFIX = 'stytch_sdk_state_';
var getPersistentStorageKey = function getPersistentStorageKey(publicToken) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return "".concat(PERSISTENT_STORAGE_KEY_PREFIX).concat(publicToken).concat(key ? "::".concat(key) : '');
};

/*! js-cookie v3.0.1 | MIT */
function assign(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target;
}
var defaultConverter = {
  read: function read(value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function write(value) {
    return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
  }
};
function init(converter, defaultAttributes) {
  function set(key, value, attributes) {
    if (typeof document === 'undefined') {
      return;
    }
    attributes = assign({}, defaultAttributes, attributes);
    if (typeof attributes.expires === 'number') {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }
    key = encodeURIComponent(key).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
    var stringifiedAttributes = '';
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue;
      }
      stringifiedAttributes += '; ' + attributeName;
      if (attributes[attributeName] === true) {
        continue;
      }
      stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
    }
    return document.cookie = key + '=' + converter.write(value, key) + stringifiedAttributes;
  }
  function get(key) {
    if (typeof document === 'undefined' || arguments.length && !key) {
      return;
    }
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split('=');
      var value = parts.slice(1).join('=');
      try {
        var foundKey = decodeURIComponent(parts[0]);
        jar[foundKey] = converter.read(value, foundKey);
        if (key === foundKey) {
          break;
        }
      } catch (e) {}
    }
    return key ? jar[key] : jar;
  }
  return Object.create({
    set: set,
    get: get,
    remove: function remove(key, attributes) {
      set(key, '', assign({}, attributes, {
        expires: -1
      }));
    },
    withAttributes: function withAttributes(attributes) {
      return init(this.converter, assign({}, this.attributes, attributes));
    },
    withConverter: function withConverter(converter) {
      return init(assign({}, this.converter, converter), this.attributes);
    }
  }, {
    attributes: {
      value: Object.freeze(defaultAttributes)
    },
    converter: {
      value: Object.freeze(converter)
    }
  });
}
var api = init(defaultConverter, {
  path: '/'
});
var STYTCH_SESSION_COOKIE = 'stytch_session';
var STYTCH_SESSION_JWT_COOKIE = 'stytch_session_jwt';
var STYTCH_INTERMEDIATE_SESSION_TOKEN_COOKIE = 'stytch_intermediate_session_token';
var isStorageAvailable = function isStorageAvailable(storage) {
  return typeof storage !== 'undefined' && storage !== null;
};
var safeStorageOperation = function safeStorageOperation(storage) {
  return function (_ref13) {
    var operation = _ref13.operation,
      key = _ref13.key,
      value = _ref13.value;
    if (!storage || !isStorageAvailable(storage)) return null;
    try {
      switch (operation) {
        case 'get':
          return storage.getItem(key);
        case 'set':
          if (value) storage.setItem(key, value);
          break;
        case 'remove':
          storage.removeItem(key);
          break;
      }
    } catch (err) {}
    return null;
  };
};
var safeLocalStorageOperation = safeStorageOperation(typeof window !== 'undefined' ? window.localStorage : undefined);
var safeSessionStorageOperation = safeStorageOperation(typeof window !== 'undefined' ? window.sessionStorage : undefined);
var SubscriptionDataLayer = /*#__PURE__*/function () {
  function SubscriptionDataLayer(publicToken, options) {
    var _this15 = this;
    _classCallCheck2(this, SubscriptionDataLayer);
    this.browserSessionStorage = {
      getItem: function getItem(key) {
        return safeSessionStorageOperation({
          operation: 'get',
          key: getPersistentStorageKey(_this15.publicToken, key)
        });
      },
      setItem: function setItem(key, value) {
        safeSessionStorageOperation({
          operation: 'set',
          key: getPersistentStorageKey(_this15.publicToken, key),
          value: value
        });
      },
      removeItem: function removeItem(key) {
        safeSessionStorageOperation({
          operation: 'remove',
          key: getPersistentStorageKey(_this15.publicToken, key)
        });
      }
    };
    this.publicToken = publicToken;
    this.state = null;
    this.stateKeysUpdated = new Set();
    this.subscriptions = {};
    if (options === null || options === void 0 ? void 0 : options.cookieOptions) {
      validate('SubscriptionDataLayer').isOptionalString('cookieOptions.opaqueTokenCookieName', options.cookieOptions.opaqueTokenCookieName).isOptionalString('cookieOptions.jwtCookieName', options.cookieOptions.jwtCookieName).isOptionalString('cookieOptions.istCookieName', options.cookieOptions.istCookieName).isOptionalString('cookieOptions.path', options.cookieOptions.path).isOptionalString('cookieOptions.domain', options.cookieOptions.domain);
      this._jwtCookieName = options.cookieOptions.jwtCookieName || null;
      this._opaqueTokenCookieName = options.cookieOptions.opaqueTokenCookieName || null;
      this._cookiePath = options.cookieOptions.path || null;
      this._domain = options.cookieOptions.domain || null;
      this._cookieAvailableToSubdomains = options.cookieOptions.availableToSubdomains || false;
      this._istCookieName = options.cookieOptions.istCookieName || null;
    } else {
      this._opaqueTokenCookieName = null;
      this._jwtCookieName = null;
      this._cookiePath = null;
      this._domain = null;
      this._cookieAvailableToSubdomains = false;
      this._istCookieName = null;
    }
    var localStorageState = safeLocalStorageOperation({
      operation: 'get',
      key: getPersistentStorageKey(this.publicToken)
    });
    if (!localStorageState) {
      return;
    }
    var parsedState;
    try {
      parsedState = JSON.parse(localStorageState);
    } catch (e) {
      this.syncToLocalStorage();
      return;
    }
    this.state = parsedState;
  }
  _createClass2(SubscriptionDataLayer, [{
    key: "opaqueTokenCookieName",
    get: function get() {
      var _a;
      return (_a = this._opaqueTokenCookieName) !== null && _a !== void 0 ? _a : STYTCH_SESSION_COOKIE;
    }
  }, {
    key: "jwtCookieName",
    get: function get() {
      var _a;
      return (_a = this._jwtCookieName) !== null && _a !== void 0 ? _a : STYTCH_SESSION_JWT_COOKIE;
    }
  }, {
    key: "istCookieName",
    get: function get() {
      var _a;
      return (_a = this._istCookieName) !== null && _a !== void 0 ? _a : STYTCH_INTERMEDIATE_SESSION_TOKEN_COOKIE;
    }
  }, {
    key: "readSessionCookie",
    value: function readSessionCookie() {
      return {
        session_token: api.get(this.opaqueTokenCookieName),
        session_jwt: api.get(this.jwtCookieName)
      };
    }
  }, {
    key: "readIntermediateSessionTokenCookie",
    value: function readIntermediateSessionTokenCookie() {
      return api.get(this.istCookieName);
    }
  }, {
    key: "writeSessionCookie",
    value: function writeSessionCookie(stateDiff) {
      var _a, _b, _c, _d;
      var state = stateDiff.state,
        session_token = stateDiff.session_token,
        session_jwt = stateDiff.session_jwt;
      var cookieOpts = SubscriptionDataLayer.generateCookieOpts({
        expiresAt: (_b = (_a = state === null || state === void 0 ? void 0 : state.session) === null || _a === void 0 ? void 0 : _a.expires_at) !== null && _b !== void 0 ? _b : '',
        availableToSubdomains: this._cookieAvailableToSubdomains,
        path: this._cookiePath,
        domain: this._domain
      });
      api.set(this.opaqueTokenCookieName, session_token, cookieOpts);
      api.set(this.jwtCookieName, session_jwt, cookieOpts);
      var alternateCookieOptions = SubscriptionDataLayer.generateCookieOpts({
        expiresAt: (_d = (_c = state === null || state === void 0 ? void 0 : state.session) === null || _c === void 0 ? void 0 : _c.expires_at) !== null && _d !== void 0 ? _d : '',
        availableToSubdomains: !this._cookieAvailableToSubdomains,
        path: this._cookiePath,
        domain: this._domain
      });
      if (hasMultipleCookies(this.jwtCookieName)) {
        api.remove(this.jwtCookieName, alternateCookieOptions);
      }
      if (hasMultipleCookies(this.opaqueTokenCookieName)) {
        api.remove(this.opaqueTokenCookieName, alternateCookieOptions);
      }
      if (hasMultipleCookies(this.jwtCookieName)) {
        logger.warn('Could not remove extraneous JWT cookie. This might happen if the cookie has been set using multiple `path` settings, and may produce unwanted behavior.');
      }
      if (hasMultipleCookies(this.opaqueTokenCookieName)) {
        logger.warn('Could not remove extraneous opaque token cookie.');
      }
    }
  }, {
    key: "writeIntermediateSessionTokenCookie",
    value: function writeIntermediateSessionTokenCookie(IST) {
      var expiresAtTime = new Date(Date.now() + 10 * 60000);
      var cookieOpts = SubscriptionDataLayer.generateCookieOpts({
        expiresAt: expiresAtTime.toString(),
        availableToSubdomains: this._cookieAvailableToSubdomains,
        path: this._cookiePath,
        domain: this._domain
      });
      api.set(this.istCookieName, IST, cookieOpts);
    }
  }, {
    key: "removeSessionCookie",
    value: function removeSessionCookie() {
      this.removeCookies([this.opaqueTokenCookieName, this.jwtCookieName]);
    }
  }, {
    key: "removeISTCookie",
    value: function removeISTCookie() {
      this.removeCookies([this.istCookieName]);
    }
  }, {
    key: "removeCookies",
    value: function removeCookies(cookiesToRemove) {
      var _this16 = this;
      [true, false].forEach(function (availableToSubdomains) {
        [_this16._cookiePath, null].forEach(function (path) {
          [_this16._domain, null].forEach(function (domain) {
            var cookieOpts = SubscriptionDataLayer.generateCookieOpts({
              expiresAt: new Date(0).toString(),
              availableToSubdomains: availableToSubdomains,
              path: path,
              domain: domain
            });
            cookiesToRemove.forEach(function (cookieName) {
              api.remove(cookieName, cookieOpts);
            });
          });
        });
      });
    }
  }, {
    key: "syncToLocalStorage",
    value: function syncToLocalStorage() {
      safeLocalStorageOperation({
        operation: 'set',
        key: getPersistentStorageKey(this.publicToken),
        value: JSON.stringify(this.state)
      });
    }
  }, {
    key: "getItem",
    value: function getItem(key) {
      return safeLocalStorageOperation({
        operation: 'get',
        key: getPersistentStorageKey(this.publicToken, key)
      });
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      safeLocalStorageOperation({
        operation: 'set',
        key: getPersistentStorageKey(this.publicToken, key),
        value: value
      });
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      safeLocalStorageOperation({
        operation: 'remove',
        key: getPersistentStorageKey(this.publicToken, key)
      });
    }
  }], [{
    key: "generateCookieOpts",
    value: function generateCookieOpts(_ref14) {
      var path = _ref14.path,
        domain = _ref14.domain,
        availableToSubdomains = _ref14.availableToSubdomains,
        expiresAt = _ref14.expiresAt;
      var cookieOpts = {
        expires: new Date(expiresAt),
        sameSite: 'lax'
      };
      if (path) {
        cookieOpts.path = path;
      }
      if (isLocalhost()) {
        cookieOpts.secure = false;
      } else {
        if (availableToSubdomains) {
          cookieOpts.domain = domain || window.location.host;
        }
        cookieOpts.secure = true;
      }
      return cookieOpts;
    }
  }]);
  return SubscriptionDataLayer;
}();
var ConsumerSubscriptionDataLayer = /*#__PURE__*/function (_SubscriptionDataLaye) {
  _inherits2(ConsumerSubscriptionDataLayer, _SubscriptionDataLaye);
  function ConsumerSubscriptionDataLayer() {
    _classCallCheck2(this, ConsumerSubscriptionDataLayer);
    return _callSuper2(this, ConsumerSubscriptionDataLayer, arguments);
  }
  return _createClass2(ConsumerSubscriptionDataLayer);
}(SubscriptionDataLayer);
var consumerDataLayerCacheSymbol = Symbol["for"]('__stytch_DataLayer');
var getConsumerDataLayerCache = function getConsumerDataLayerCache() {
  var wdw = window;
  if (!wdw[consumerDataLayerCacheSymbol]) {
    wdw[consumerDataLayerCacheSymbol] = {};
  }
  return wdw[consumerDataLayerCacheSymbol];
};
var getConsumerDataLayer = function getConsumerDataLayer(publicToken, options) {
  var dataLayerCache = getConsumerDataLayerCache();
  if (!dataLayerCache[publicToken]) {
    dataLayerCache[publicToken] = new ConsumerSubscriptionDataLayer(publicToken, options);
  }
  return dataLayerCache[publicToken];
};
var addSubscriber = function addSubscriber(collection, subscriber) {
  var uniqueId = Math.random().toString(36).slice(-10);
  collection[uniqueId] = subscriber;
  return function () {
    return delete collection[uniqueId];
  };
};
var notifySubscribers = function notifySubscribers(collection, value) {
  Object.values(collection).forEach(function (cb) {
    return cb(value);
  });
};
var deepEqualData = createDeepEqual({
  KEYS_TO_EXCLUDE: ['last_accessed_at']
});
var BaseSubscriptionService = /*#__PURE__*/function () {
  function BaseSubscriptionService(_publicToken, _datalayer, _ref15) {
    var _this17 = this;
    var usingCustomApiEndpoint = _ref15.usingCustomApiEndpoint;
    _classCallCheck2(this, BaseSubscriptionService);
    this._publicToken = _publicToken;
    this._datalayer = _datalayer;
    this.fromCache = true;
    this._listen = function (e) {
      if (e.key !== getPersistentStorageKey(_this17._publicToken)) {
        return;
      }
      var parsedValue = e.newValue === null || e.newValue === 'null' ? null : JSON.parse(e.newValue);
      _this17.updateState(parsedValue, true);
    };
    window.addEventListener('storage', this._listen);
    if (!usingCustomApiEndpoint) {
      var _this$_datalayer$read = this._datalayer.readSessionCookie(),
        session_token = _this$_datalayer$read.session_token;
      if (!session_token) {
        this.destroySession();
        return;
      }
    }
  }
  _createClass2(BaseSubscriptionService, [{
    key: "getTokens",
    value: function getTokens() {
      var _this$_datalayer$read2 = this._datalayer.readSessionCookie(),
        session_token = _this$_datalayer$read2.session_token,
        session_jwt = _this$_datalayer$read2.session_jwt;
      if (!(typeof session_token === 'string') || !(typeof session_jwt === 'string')) {
        return null;
      }
      return {
        session_token: session_token,
        session_jwt: session_jwt
      };
    }
  }, {
    key: "getIntermediateSessionToken",
    value: function getIntermediateSessionToken() {
      return this._datalayer.readIntermediateSessionTokenCookie() || null;
    }
  }, {
    key: "destroyState",
    value: function destroyState() {
      this.updateStateAndTokens({
        state: null,
        session_token: null,
        session_jwt: null,
        intermediate_session_token: null
      });
    }
  }, {
    key: "destroySession",
    value: function destroySession() {
      this._datalayer.removeSessionCookie();
      this.updateState(null);
    }
  }, {
    key: "_updateStateAndTokensInternal",
    value: function _updateStateAndTokensInternal(stateDiff) {
      var oldStateValue = this._datalayer.state;
      var newStateValue = stateDiff.state === null ? null : Object.assign(Object.assign({}, this._datalayer.state), stateDiff.state);
      this._datalayer.state = newStateValue;
      var wasCached = this.getFromCache();
      this.setCacheRefreshed();
      if (wasCached || !deepEqualData(oldStateValue, newStateValue)) {
        notifySubscribers(this._datalayer.subscriptions, newStateValue);
      }
    }
  }, {
    key: "updateStateAndTokens",
    value: function updateStateAndTokens(stateDiff) {
      if (stateDiff.state) {
        if (typeof stateDiff.session_token === 'string') {
          this._datalayer.writeSessionCookie(stateDiff);
        }
        this._datalayer.removeISTCookie();
      } else if (stateDiff.intermediate_session_token) {
        if (typeof stateDiff.intermediate_session_token === 'string') {
          this._datalayer.writeIntermediateSessionTokenCookie(stateDiff.intermediate_session_token);
        }
        this._datalayer.removeSessionCookie();
      } else {
        this._datalayer.removeSessionCookie();
        this._datalayer.removeISTCookie();
      }
      this._updateStateAndTokensInternal(stateDiff);
      this._datalayer.syncToLocalStorage();
    }
  }, {
    key: "updateState",
    value: function updateState(state) {
      var fromExternalSource = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var oldStateValue = this._datalayer.state;
      var newStateValue = state === null ? null : Object.assign(Object.assign({}, this._datalayer.state), state);
      this._datalayer.state = newStateValue;
      var wasCached = this.getFromCache();
      this.setCacheRefreshed();
      var hasStateChanged = !deepEqualData(oldStateValue, newStateValue);
      if (wasCached || hasStateChanged) {
        notifySubscribers(this._datalayer.subscriptions, newStateValue);
        if (hasStateChanged && !fromExternalSource) {
          this._datalayer.syncToLocalStorage();
        }
      }
    }
  }, {
    key: "updateTokens",
    value: function updateTokens(tokens) {
      var session_token = tokens.session_token,
        session_jwt = tokens.session_jwt;
      var cookie = this._datalayer.readSessionCookie();
      var diff = Object.assign(Object.assign({}, cookie), {
        session_token: session_token,
        session_jwt: session_jwt
      });
      if (typeof session_token === 'string' || typeof session_jwt === 'string') {
        this._datalayer.writeSessionCookie(diff);
        this._datalayer.removeISTCookie();
      } else {
        this._datalayer.removeSessionCookie();
      }
    }
  }, {
    key: "subscribeToState",
    value: function subscribeToState(callback) {
      return addSubscriber(this._datalayer.subscriptions, callback);
    }
  }, {
    key: "getState",
    value: function getState() {
      return this._datalayer.state;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      window.removeEventListener('storage', this._listen);
    }
  }, {
    key: "syncFromDeviceStorage",
    value: function syncFromDeviceStorage() {
      return null;
    }
  }, {
    key: "getFromCache",
    value: function getFromCache() {
      return this.fromCache;
    }
  }, {
    key: "setCacheRefreshed",
    value: function setCacheRefreshed() {
      this.fromCache = false;
    }
  }]);
  return BaseSubscriptionService;
}();
var ConsumerSubscriptionService = /*#__PURE__*/function (_BaseSubscriptionServ) {
  _inherits2(ConsumerSubscriptionService, _BaseSubscriptionServ);
  function ConsumerSubscriptionService() {
    var _this18;
    _classCallCheck2(this, ConsumerSubscriptionService);
    _this18 = _callSuper2(this, ConsumerSubscriptionService, arguments);
    _this18.updateUser = function (user) {
      return _this18.updateState({
        user: user
      });
    };
    _this18.getUser = function () {
      var _a, _b;
      return (_b = (_a = _this18.getState()) === null || _a === void 0 ? void 0 : _a.user) !== null && _b !== void 0 ? _b : null;
    };
    _this18.getSession = function () {
      var _a, _b;
      return (_b = (_a = _this18.getState()) === null || _a === void 0 ? void 0 : _a.session) !== null && _b !== void 0 ? _b : null;
    };
    _this18.updateSession = function (resp) {
      var session = resp.session,
        user = resp.user,
        session_jwt = resp.session_jwt,
        session_token = resp.session_token;
      if (session_token && session_jwt) {
        _this18.updateStateAndTokens({
          state: {
            session: session,
            user: user
          },
          session_jwt: session_jwt,
          session_token: session_token,
          intermediate_session_token: null
        });
      } else {
        _this18.updateStateAndTokens({
          state: {
            session: session,
            user: user
          },
          session_token: true,
          session_jwt: true,
          intermediate_session_token: null
        });
      }
    };
    return _this18;
  }
  return _createClass2(ConsumerSubscriptionService);
}(BaseSubscriptionService);
var internalSymB2C = Symbol["for"]('stytch__internal_b2c');
var writeB2CInternals = function writeB2CInternals(obj, internals) {
  Object.assign(obj, _defineProperty({}, internalSymB2C, internals));
};
var version = "5.9.4";
var NetworkClient = /*#__PURE__*/function () {
  function NetworkClient(_publicToken, _subscriptionDataLayer, _liveAPIURL, _testAPIURL, additionalTelemetryDataFn) {
    _classCallCheck2(this, NetworkClient);
    this._publicToken = _publicToken;
    this._subscriptionDataLayer = _subscriptionDataLayer;
    this.additionalTelemetryDataFn = additionalTelemetryDataFn;
    this.updateSessionToken = function () {
      return null;
    };
    this.baseURL = _liveAPIURL;
    if (isTestPublicToken(_publicToken)) {
      this.baseURL = _testAPIURL;
    }
    this.eventLogger = new EventLogger({
      maxBatchSize: DEFAULT_MAX_BATCH_SIZE,
      intervalDurationMs: DEFAULT_INTERVAL_DURATION_MS,
      logEventURL: this.buildSDKUrl('/events')
    });
  }
  _createClass2(NetworkClient, [{
    key: "logEvent",
    value: function logEvent(_ref16) {
      var name = _ref16.name,
        details = _ref16.details,
        _ref16$error = _ref16.error,
        error = _ref16$error === void 0 ? {} : _ref16$error;
      this.eventLogger.logEvent(this.createTelemetryBlob(), {
        public_token: this._publicToken,
        event_name: name,
        details: details,
        error_code: error.error_code,
        error_description: error.error_description,
        http_status_code: error.http_status_code
      });
    }
  }, {
    key: "createTelemetryBlob",
    value: function createTelemetryBlob() {
      return Object.assign(Object.assign({
        event_id: createEventId(),
        app_session_id: createAppSessionId(),
        persistent_id: createPersistentId(),
        client_sent_at: new Date().toISOString(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      }, this.additionalTelemetryDataFn()), {
        app: {
          identifier: window.location.hostname
        },
        sdk: {
          identifier: 'Stytch.js Javascript SDK',
          version: version
        }
      });
    }
  }, {
    key: "fetchSDK",
    value: function fetchSDK(_ref17) {
      var url = _ref17.url,
        body = _ref17.body,
        method = _ref17.method;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime2().mark(function _callee65() {
        var sessionToken, basicAuthHeader, xSDKClientHeader, xSDKParentHostHeader;
        return _regeneratorRuntime2().wrap(function _callee65$(_context65) {
          while (1) switch (_context65.prev = _context65.next) {
            case 0:
              sessionToken = this._subscriptionDataLayer.readSessionCookie().session_token;
              basicAuthHeader = 'Basic ' + window.btoa(this._publicToken + ':' + (sessionToken || this._publicToken));
              xSDKClientHeader = window.btoa(JSON.stringify(this.createTelemetryBlob()));
              xSDKParentHostHeader = window.location.origin;
              return _context65.abrupt("return", baseFetchSDK({
                basicAuthHeader: basicAuthHeader,
                body: body,
                finalURL: this.buildSDKUrl(url),
                method: method,
                xSDKClientHeader: xSDKClientHeader,
                xSDKParentHostHeader: xSDKParentHostHeader
              }));
            case 5:
            case "end":
              return _context65.stop();
          }
        }, _callee65, this);
      }));
    }
  }, {
    key: "retriableFetchSDK",
    value: function retriableFetchSDK(_ref18) {
      var url = _ref18.url,
        body = _ref18.body,
        method = _ref18.method,
        retryCallback = _ref18.retryCallback;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime2().mark(function _callee66() {
        var sessionToken, basicAuthHeader, xSDKClientHeader, xSDKParentHostHeader;
        return _regeneratorRuntime2().wrap(function _callee66$(_context66) {
          while (1) switch (_context66.prev = _context66.next) {
            case 0:
              sessionToken = this._subscriptionDataLayer.readSessionCookie().session_token;
              basicAuthHeader = 'Basic ' + window.btoa(this._publicToken + ':' + (sessionToken || this._publicToken));
              xSDKClientHeader = window.btoa(JSON.stringify(this.createTelemetryBlob()));
              xSDKParentHostHeader = window.location.origin;
              return _context66.abrupt("return", _retriableFetchSDK({
                basicAuthHeader: basicAuthHeader,
                body: body,
                finalURL: this.buildSDKUrl(url),
                method: method,
                xSDKClientHeader: xSDKClientHeader,
                xSDKParentHostHeader: xSDKParentHostHeader,
                retryCallback: retryCallback
              }));
            case 5:
            case "end":
              return _context66.stop();
          }
        }, _callee66, this);
      }));
    }
  }, {
    key: "buildSDKUrl",
    value: function buildSDKUrl(url) {
      return "".concat(this.baseURL, "/sdk/v1").concat(url);
    }
  }]);
  return NetworkClient;
}();
var StytchHeadlessClient = /*#__PURE__*/_createClass2(function StytchHeadlessClient(_PUBLIC_TOKEN, options) {
  var _this19 = this;
  _classCallCheck2(this, StytchHeadlessClient);
  var _a;
  checkNotSSR('StytchHeadlessClient');
  checkPublicToken(_PUBLIC_TOKEN);
  var _options = options;
  var config = buildFinalConfig(_options);
  var usingCustomApiEndpoint = !!((_a = options === null || options === void 0 ? void 0 : options.endpointOptions) === null || _a === void 0 ? void 0 : _a.apiDomain);
  this._dataLayer = getConsumerDataLayer(_PUBLIC_TOKEN, _options);
  this._subscriptionService = new ConsumerSubscriptionService(_PUBLIC_TOKEN, this._dataLayer, {
    usingCustomApiEndpoint: usingCustomApiEndpoint
  });
  this._stateChangeClient = new StateChangeClient(this._subscriptionService, {});
  this.onStateChange = function () {
    var _this19$_stateChangeC;
    return (_this19$_stateChangeC = _this19._stateChangeClient).onStateChange.apply(_this19$_stateChangeC, arguments);
  };
  var additionalTelemetryDataFn = function additionalTelemetryDataFn() {
    var _a, _b, _c, _d;
    return {
      stytch_user_id: (_b = (_a = _this19._dataLayer.state) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.user_id,
      stytch_session_id: (_d = (_c = _this19._dataLayer.state) === null || _c === void 0 ? void 0 : _c.session) === null || _d === void 0 ? void 0 : _d.session_id
    };
  };
  var passwordsPKCEManager = new PKCEManager(this._dataLayer, 'passwords');
  this._networkClient = new NetworkClient(_PUBLIC_TOKEN, this._dataLayer, config.endpoints.liveAPIURL, config.endpoints.testAPIURL, additionalTelemetryDataFn);
  var bootstrap = new BootstrapDataManager(_PUBLIC_TOKEN, this._networkClient, this._dataLayer);
  var captcha = new CaptchaProvider(bootstrap.getAsync());
  var dfpProtectedAuth = new DFPProtectedAuthProvider(_PUBLIC_TOKEN, config.endpoints.dfpBackendURL, bootstrap.getAsync(), captcha.executeRecaptcha);
  var clientsideServices = new ClientsideServicesProvider(config.endpoints.clientsideServicesIframeURL);
  var oneTap = new OneTapProvider(_PUBLIC_TOKEN, clientsideServices);
  var searchManager = new SearchDataManager(this._networkClient, dfpProtectedAuth);
  this.user = new HeadlessUserClient(this._networkClient, this._subscriptionService);
  this.session = new HeadlessSessionClient(this._networkClient, this._subscriptionService);
  this.magicLinks = new HeadlessMagicLinksClient(this._networkClient, this._subscriptionService, new PKCEManager(this._dataLayer, 'magic_links'), passwordsPKCEManager, bootstrap.getAsync(), dfpProtectedAuth);
  this.otps = new HeadlessOTPClient(this._networkClient, this._subscriptionService, captcha.executeRecaptcha, dfpProtectedAuth);
  this.oauth = new HeadlessOAuthClient(this._networkClient, this._subscriptionService, new PKCEManager(this._dataLayer, 'oauth'), bootstrap.getAsync(), {
    publicToken: _PUBLIC_TOKEN,
    testAPIURL: config.endpoints.testAPIURL,
    liveAPIURL: config.endpoints.liveAPIURL
  }, oneTap);
  this.cryptoWallets = new HeadlessCryptoWalletClient(this._networkClient, this._networkClient, this._subscriptionService, captcha.executeRecaptcha, dfpProtectedAuth, bootstrap.getAsync());
  this.totps = new HeadlessTOTPClient(this._networkClient, this._subscriptionService, dfpProtectedAuth);
  this.webauthn = new HeadlessWebAuthnClient(this._networkClient, this._subscriptionService, dfpProtectedAuth);
  this.passwords = new HeadlessPasswordClient(this._networkClient, this._subscriptionService, passwordsPKCEManager, bootstrap.getAsync(), dfpProtectedAuth);
  this._sessionManager = new SessionManager(this._subscriptionService, this.session);
  if (usingCustomApiEndpoint || this._dataLayer.readSessionCookie().session_token) {
    this._sessionManager.performBackgroundRefresh();
  }
  this._networkClient.logEvent({
    name: 'sdk_instance_instantiated',
    details: {
      event_callback_registered: false,
      error_callback_registered: false,
      success_callback_registered: false
    }
  });
  writeB2CInternals(this, {
    bootstrap: bootstrap,
    clientsideServices: clientsideServices,
    captcha: captcha,
    oneTap: oneTap,
    searchManager: searchManager,
    publicToken: _PUBLIC_TOKEN,
    dataLayer: this._dataLayer,
    networkClient: this._networkClient
  });
});
export { AuthFlowType, B2BMFAProducts, B2BOAuthProviders, B2BProducts, BiometricsFailedError, BiometricsUnavailableError, ChallengeSigningFailedError, DeviceCredentialsNotAllowedError, FailedCodeChallengeError, FailedToDecryptDataError, InternalError, InvalidAuthorizationCredentialError, InvalidCredentialTypeError, InvalidRedirectSchemeError, InvalidStartUrlError, JSONDataNotConvertibleToStringError, KeyInvalidatedError, KeystoreUnavailableError, MissingAttestationObjectError, MissingAuthorizationCredentialIDTokenError, MissingGoogleClientIDError, MissingPKCEError, MissingPublicKeyError, MissingUrlError, NoBiometricsEnrolledError, NoBiometricsRegistrationError, NoCredentialsPresentError, NoCurrentSessionError, OAuthProviders, OTPMethods, OneTapPositions, PasskeysInvalidEncoding, PasskeysMisconfigured, PasskeysUnsupportedError, Products, RNUIProducts, RandomNumberGenerationFailed, RedirectURLType, SDKAPIUnreachableError, SDKNotConfiguredError, SignInWithAppleMisconfigured, StytchAPIError, StytchAPISchemaError, StytchAPIUnreachableError, StytchError, StytchEventType, StytchHeadlessClient, StytchSDKAPIError, StytchSDKError, StytchSDKSchemaError, StytchSDKUsageError, UNRECOVERABLE_ERROR_TYPES, UserCancellationError, UserLockedOutError, Wallets, errorToStytchError };
