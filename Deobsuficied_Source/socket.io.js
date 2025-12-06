!function (t, e) {
  if ("object" == typeof exports && "object" == typeof module) {
    module.exports = e();
  } else if ("function" == typeof define && define.amd) {
    define([], e);
  } else if ("object" == typeof exports) {
    exports.io = e();
  } else {
    t.io = e();
  }
}(this, function () {
  return function (t) {
    var e = {};
    function r(n) {
      if (e[n]) {
        return e[n].exports;
      }
      var o = e[n] = {
        exports: {},
        id: n,
        loaded: false
      };
      t[n].call(o.exports, o, o.exports, r);
      o.loaded = true;
      return o.exports;
    }
    r.m = t;
    r.c = e;
    r.p = "";
    return r(0);
  }([function (t, r) {
    "use strict";

    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    };
    var o = r(1);
    var i = r(4);
    var s = r(9);
    r(3)("socket.io-client");
    t.exports = c;
    var a = c.managers = {};
    function c(t, e) {
      if ("object" === (undefined === t ? "undefined" : n(t))) {
        e = t;
        t = undefined;
      }
      e = e || {};
      var r;
      var i = o(t);
      var c = i.source;
      var p = i.id;
      var h = i.path;
      var u = a[p] && h in a[p].nsps;
      if (e.forceNew || e["force new connection"] || false === e.multiplex || u) {
        r = s(c, e);
      } else {
        if (!a[p]) {
          a[p] = s(c, e);
        }
        r = a[p];
      }
      if (i.query && !e.query) {
        e.query = i.query;
      }
      return r.socket(i.path, e);
    }
    c.protocol = i.protocol;
    c.connect = c;
    c.Manager = r(9);
    c.Socket = r(33);
  }, function (t, e, r) {
    "use strict";

    var n = r(2);
    r(3)("socket.io-client:url");
    t.exports = function (t, e) {
      var r = t;
      e = e || "undefined" != typeof location && location;
      if (null == t) {
        t = e.protocol + "//" + e.host;
      }
      if ("string" == typeof t) {
        if ("/" === t.charAt(0)) {
          t = "/" === t.charAt(1) ? e.protocol + t : e.host + t;
        }
        if (!/^(https?|wss?):\/\//.test(t)) {
          t = undefined !== e ? e.protocol + "//" + t : "https://" + t;
        }
        r = n(t);
      }
      if (!r.port) {
        if (/^(http|ws)$/.test(r.protocol)) {
          r.port = "80";
        } else if (/^(http|ws)s$/.test(r.protocol)) {
          r.port = "443";
        }
      }
      r.path = r.path || "/";
      var o = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
      r.id = r.protocol + "://" + o + ":" + r.port;
      r.href = r.protocol + "://" + o + (e && e.port === r.port ? "" : ":" + r.port);
      return r;
    };
  }, function (t, e) {
    var r = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
    var n = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
    t.exports = function (t) {
      var e = t;
      var o = t.indexOf("[");
      var i = t.indexOf("]");
      if (-1 != o && -1 != i) {
        t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(i, t.length);
      }
      var s = r.exec(t || "");
      var a = {};
      for (var c = 14; c--;) {
        a[n[c]] = s[c] || "";
      }
      if (-1 != o && -1 != i) {
        a.source = e;
        a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":");
        a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
        a.ipv6uri = true;
      }
      return a;
    };
  }, function (t, e) {
    "use strict";

    t.exports = function () {
      return function () {};
    };
  }, function (t, e, r) {
    r(3)("socket.io-parser");
    var n = r(5);
    var o = r(6);
    var i = r(7);
    var s = r(8);
    function a() {}
    e.protocol = 4;
    e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"];
    e.CONNECT = 0;
    e.DISCONNECT = 1;
    e.EVENT = 2;
    e.ACK = 3;
    e.ERROR = 4;
    e.BINARY_EVENT = 5;
    e.BINARY_ACK = 6;
    e.Encoder = a;
    e.Decoder = h;
    var c = e.ERROR + "\"encode error\"";
    function p(t) {
      var r = "" + t.type;
      if (!(e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type)) {
        r += t.attachments + "-";
      }
      if (t.nsp && "/" !== t.nsp) {
        r += t.nsp + ",";
      }
      if (null != t.id) {
        r += t.id;
      }
      if (null != t.data) {
        var n = function (t) {
          try {
            return JSON.stringify(t);
          } catch (t) {
            return false;
          }
        }(t.data);
        if (false === n) {
          return c;
        }
        r += n;
      }
      return r;
    }
    function h() {
      this.reconstructor = null;
    }
    function u(t) {
      this.reconPack = t;
      this.buffers = [];
    }
    a.prototype.encode = function (t, r) {
      if (e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type) {
        (function (t, e) {
          function r(t) {
            var r = o.deconstructPacket(t);
            var n = p(r.packet);
            var i = r.buffers;
            i.unshift(n);
            e(i);
          }
          o.removeBlobs(t, r);
        })(t, r);
      } else {
        r([p(t)]);
      }
    };
    n(h.prototype);
    h.prototype.add = function (t) {
      var r;
      if ("string" == typeof t) {
        r = function (t) {
          var r = 0;
          var n = {
            type: Number(t.charAt(0))
          };
          if (null == e.types[n.type]) {
            return {
              type: e.ERROR,
              data: "parser error: " + ("unknown packet type " + n.type)
            };
          }
          if (e.BINARY_EVENT === n.type || e.BINARY_ACK === n.type) {
            for (var o = ""; "-" !== t.charAt(++r) && (o += t.charAt(r), r != t.length);) {
              ;
            }
            if (o != Number(o) || "-" !== t.charAt(r)) {
              throw new Error("Illegal attachments");
            }
            n.attachments = Number(o);
          }
          if ("/" === t.charAt(r + 1)) {
            for (n.nsp = ""; ++r;) {
              if ("," === (a = t.charAt(r))) {
                break;
              }
              n.nsp += a;
              if (r === t.length) {
                break;
              }
            }
          } else {
            n.nsp = "/";
          }
          var s = t.charAt(r + 1);
          if ("" !== s && Number(s) == s) {
            for (n.id = ""; ++r;) {
              var a;
              if (null == (a = t.charAt(r)) || Number(a) != a) {
                --r;
                break;
              }
              n.id += t.charAt(r);
              if (r === t.length) {
                break;
              }
            }
            n.id = Number(n.id);
          }
          if (t.charAt(++r)) {
            var c = function (t) {
              try {
                return JSON.parse(t);
              } catch (t) {
                return false;
              }
            }(t.substr(r));
            if (!(false !== c && (n.type === e.ERROR || i(c)))) {
              return {
                type: e.ERROR,
                data: "parser error: invalid payload"
              };
            }
            n.data = c;
          }
          return n;
        }(t);
        if (e.BINARY_EVENT === r.type || e.BINARY_ACK === r.type) {
          this.reconstructor = new u(r);
          if (0 === this.reconstructor.reconPack.attachments) {
            this.emit("decoded", r);
          }
        } else {
          this.emit("decoded", r);
        }
      } else {
        if (!s(t) && !t.base64) {
          throw new Error("Unknown type: " + t);
        }
        if (!this.reconstructor) {
          throw new Error("got binary data when not reconstructing a packet");
        }
        if (r = this.reconstructor.takeBinaryData(t)) {
          this.reconstructor = null;
          this.emit("decoded", r);
        }
      }
    };
    h.prototype.destroy = function () {
      if (this.reconstructor) {
        this.reconstructor.finishedReconstruction();
      }
    };
    u.prototype.takeBinaryData = function (t) {
      this.buffers.push(t);
      if (this.buffers.length === this.reconPack.attachments) {
        var e = o.reconstructPacket(this.reconPack, this.buffers);
        this.finishedReconstruction();
        return e;
      }
      return null;
    };
    u.prototype.finishedReconstruction = function () {
      this.reconPack = null;
      this.buffers = [];
    };
  }, function (t, e, r) {
    function n(t) {
      if (t) {
        return function (t) {
          for (var e in n.prototype) t[e] = n.prototype[e];
          return t;
        }(t);
      }
    }
    t.exports = n;
    n.prototype.on = n.prototype.addEventListener = function (t, e) {
      this._callbacks = this._callbacks || {};
      (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e);
      return this;
    };
    n.prototype.once = function (t, e) {
      function r() {
        this.off(t, r);
        e.apply(this, arguments);
      }
      r.fn = e;
      this.on(t, r);
      return this;
    };
    n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function (t, e) {
      this._callbacks = this._callbacks || {};
      if (0 == arguments.length) {
        this._callbacks = {};
        return this;
      }
      var r;
      var n = this._callbacks["$" + t];
      if (!n) {
        return this;
      }
      if (1 == arguments.length) {
        delete this._callbacks["$" + t];
        return this;
      }
      for (var o = 0; o < n.length; o++) {
        if ((r = n[o]) === e || r.fn === e) {
          n.splice(o, 1);
          break;
        }
      }
      return this;
    };
    n.prototype.emit = function (t) {
      this._callbacks = this._callbacks || {};
      var e = [].slice.call(arguments, 1);
      var r = this._callbacks["$" + t];
      if (r) {
        var n = 0;
        for (var o = (r = r.slice(0)).length; n < o; ++n) {
          r[n].apply(this, e);
        }
      }
      return this;
    };
    n.prototype.listeners = function (t) {
      this._callbacks = this._callbacks || {};
      return this._callbacks["$" + t] || [];
    };
    n.prototype.hasListeners = function (t) {
      return !!this.listeners(t).length;
    };
  }, function (t, e, r) {
    var n = r(7);
    var o = r(8);
    var i = Object.prototype.toString;
    var s = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === i.call(Blob);
    var a = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === i.call(File);
    function c(t, e) {
      if (!t) {
        return t;
      }
      if (o(t)) {
        var r = {
          _placeholder: true,
          num: e.length
        };
        e.push(t);
        return r;
      }
      if (n(t)) {
        var i = new Array(t.length);
        for (var s = 0; s < t.length; s++) {
          i[s] = c(t[s], e);
        }
        return i;
      }
      if ("object" == typeof t && !(t instanceof Date)) {
        i = {};
        for (var a in t) i[a] = c(t[a], e);
        return i;
      }
      return t;
    }
    function p(t, e) {
      if (!t) {
        return t;
      }
      if (t && t._placeholder) {
        return e[t.num];
      }
      if (n(t)) {
        for (var r = 0; r < t.length; r++) {
          t[r] = p(t[r], e);
        }
      } else if ("object" == typeof t) {
        for (var o in t) t[o] = p(t[o], e);
      }
      return t;
    }
    e.deconstructPacket = function (t) {
      var e = [];
      var r = t.data;
      t.data = c(r, e);
      t.attachments = e.length;
      return {
        packet: t,
        buffers: e
      };
    };
    e.reconstructPacket = function (t, e) {
      t.data = p(t.data, e);
      t.attachments = undefined;
      return t;
    };
    e.removeBlobs = function (t, e) {
      var r = 0;
      var i = t;
      !function t(c, p, h) {
        if (!c) {
          return c;
        }
        if (s && c instanceof Blob || a && c instanceof File) {
          r++;
          var u = new FileReader();
          u.onload = function () {
            if (h) {
              h[p] = this.result;
            } else {
              i = this.result;
            }
            if (! --r) {
              e(i);
            }
          };
          u.readAsArrayBuffer(c);
        } else if (n(c)) {
          for (var f = 0; f < c.length; f++) {
            t(c[f], f, c);
          }
        } else if ("object" == typeof c && !o(c)) {
          for (var l in c) t(c[l], l, c);
        }
      }(i);
      if (!r) {
        e(i);
      }
    };
  }, function (t, e) {
    var r = {}.toString;
    t.exports = Array.isArray || function (t) {
      return "[object Array]" == r.call(t);
    };
  }, function (t, e) {
    t.exports = function (t) {
      return r && Buffer.isBuffer(t) || n && (t instanceof ArrayBuffer || ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer));
    };
    var r = "function" == typeof Buffer && "function" == typeof Buffer.isBuffer;
    var n = "function" == typeof ArrayBuffer;
  }, function (t, e, r) {
    "use strict";

    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    };
    var o = r(10);
    var i = r(33);
    var s = r(5);
    var a = r(4);
    var c = r(35);
    var p = r(36);
    r(3)("socket.io-client:manager");
    var h = r(32);
    var u = r(37);
    var f = Object.prototype.hasOwnProperty;
    function l(t, e) {
      if (!(this instanceof l)) {
        return new l(t, e);
      }
      if (t && "object" === (undefined === t ? "undefined" : n(t))) {
        e = t;
        t = undefined;
      }
      (e = e || {}).path = e.path || "/socket.io";
      this.nsps = {};
      this.subs = [];
      this.opts = e;
      this.reconnection(false !== e.reconnection);
      this.reconnectionAttempts(e.reconnectionAttempts || Infinity);
      this.reconnectionDelay(e.reconnectionDelay || 1e3);
      this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3);
      this.randomizationFactor(e.randomizationFactor || .5);
      this.backoff = new u({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor()
      });
      this.timeout(null == e.timeout ? 2e4 : e.timeout);
      this.readyState = "closed";
      this.uri = t;
      this.connecting = [];
      this.lastPing = null;
      this.encoding = false;
      this.packetBuffer = [];
      var r = e.parser || a;
      this.encoder = new r.Encoder();
      this.decoder = new r.Decoder();
      this.autoConnect = false !== e.autoConnect;
      if (this.autoConnect) {
        this.open();
      }
    }
    t.exports = l;
    l.prototype.emitAll = function () {
      this.emit.apply(this, arguments);
      for (var t in this.nsps) if (f.call(this.nsps, t)) {
        this.nsps[t].emit.apply(this.nsps[t], arguments);
      }
    };
    l.prototype.updateSocketIds = function () {
      for (var t in this.nsps) if (f.call(this.nsps, t)) {
        this.nsps[t].id = this.generateId(t);
      }
    };
    l.prototype.generateId = function (t) {
      return ("/" === t ? "" : t + "#") + this.engine.id;
    };
    s(l.prototype);
    l.prototype.reconnection = function (t) {
      return arguments.length ? (this._reconnection = !!t, this) : this._reconnection;
    };
    l.prototype.reconnectionAttempts = function (t) {
      return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts;
    };
    l.prototype.reconnectionDelay = function (t) {
      return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay;
    };
    l.prototype.randomizationFactor = function (t) {
      return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor;
    };
    l.prototype.reconnectionDelayMax = function (t) {
      return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax;
    };
    l.prototype.timeout = function (t) {
      return arguments.length ? (this._timeout = t, this) : this._timeout;
    };
    l.prototype.maybeReconnectOnOpen = function () {
      if (!this.reconnecting && this._reconnection && 0 === this.backoff.attempts) {
        this.reconnect();
      }
    };
    l.prototype.open = l.prototype.connect = function (t, e) {
      if (~this.readyState.indexOf("open")) {
        return this;
      }
      this.engine = o(this.uri, this.opts);
      var r = this.engine;
      var n = this;
      this.readyState = "opening";
      this.skipReconnect = false;
      var i = c(r, "open", function () {
        n.onopen();
        if (t) {
          t();
        }
      });
      var s = c(r, "error", function (e) {
        n.cleanup();
        n.readyState = "closed";
        n.emitAll("connect_error", e);
        if (t) {
          var r = new Error("Connection error");
          r.data = e;
          t(r);
        } else {
          n.maybeReconnectOnOpen();
        }
      });
      if (false !== this._timeout) {
        var a = this._timeout;
        var p = setTimeout(function () {
          i.destroy();
          r.close();
          r.emit("error", "timeout");
          n.emitAll("connect_timeout", a);
        }, a);
        this.subs.push({
          destroy: function () {
            clearTimeout(p);
          }
        });
      }
      this.subs.push(i);
      this.subs.push(s);
      return this;
    };
    l.prototype.onopen = function () {
      this.cleanup();
      this.readyState = "open";
      this.emit("open");
      var t = this.engine;
      this.subs.push(c(t, "data", p(this, "ondata")));
      this.subs.push(c(t, "ping", p(this, "onping")));
      this.subs.push(c(t, "pong", p(this, "onpong")));
      this.subs.push(c(t, "error", p(this, "onerror")));
      this.subs.push(c(t, "close", p(this, "onclose")));
      this.subs.push(c(this.decoder, "decoded", p(this, "ondecoded")));
    };
    l.prototype.onping = function () {
      this.lastPing = new Date();
      this.emitAll("ping");
    };
    l.prototype.onpong = function () {
      this.emitAll("pong", new Date() - this.lastPing);
    };
    l.prototype.ondata = function (t) {
      this.decoder.add(t);
    };
    l.prototype.ondecoded = function (t) {
      this.emit("packet", t);
    };
    l.prototype.onerror = function (t) {
      this.emitAll("error", t);
    };
    l.prototype.socket = function (t, e) {
      var r = this.nsps[t];
      if (!r) {
        r = new i(this, t, e);
        this.nsps[t] = r;
        var n = this;
        r.on("connecting", o);
        r.on("connect", function () {
          r.id = n.generateId(t);
        });
        if (this.autoConnect) {
          o();
        }
      }
      function o() {
        if (!~h(n.connecting, r)) {
          n.connecting.push(r);
        }
      }
      return r;
    };
    l.prototype.destroy = function (t) {
      var e = h(this.connecting, t);
      if (~e) {
        this.connecting.splice(e, 1);
      }
      if (!this.connecting.length) {
        this.close();
      }
    };
    l.prototype.packet = function (t) {
      var e = this;
      if (t.query && 0 === t.type) {
        t.nsp += "?" + t.query;
      }
      if (e.encoding) {
        e.packetBuffer.push(t);
      } else {
        e.encoding = true;
        this.encoder.encode(t, function (r) {
          for (var n = 0; n < r.length; n++) {
            e.engine.write(r[n], t.options);
          }
          e.encoding = false;
          e.processPacketQueue();
        });
      }
    };
    l.prototype.processPacketQueue = function () {
      if (this.packetBuffer.length > 0 && !this.encoding) {
        var t = this.packetBuffer.shift();
        this.packet(t);
      }
    };
    l.prototype.cleanup = function () {
      var t = this.subs.length;
      for (var e = 0; e < t; e++) {
        this.subs.shift().destroy();
      }
      this.packetBuffer = [];
      this.encoding = false;
      this.lastPing = null;
      this.decoder.destroy();
    };
    l.prototype.close = l.prototype.disconnect = function () {
      this.skipReconnect = true;
      this.reconnecting = false;
      if ("opening" === this.readyState) {
        this.cleanup();
      }
      this.backoff.reset();
      this.readyState = "closed";
      if (this.engine) {
        this.engine.close();
      }
    };
    l.prototype.onclose = function (t) {
      this.cleanup();
      this.backoff.reset();
      this.readyState = "closed";
      this.emit("close", t);
      if (this._reconnection && !this.skipReconnect) {
        this.reconnect();
      }
    };
    l.prototype.reconnect = function () {
      if (this.reconnecting || this.skipReconnect) {
        return this;
      }
      var t = this;
      if (this.backoff.attempts >= this._reconnectionAttempts) {
        this.backoff.reset();
        this.emitAll("reconnect_failed");
        this.reconnecting = false;
      } else {
        var e = this.backoff.duration();
        this.reconnecting = true;
        var r = setTimeout(function () {
          if (!t.skipReconnect) {
            t.emitAll("reconnect_attempt", t.backoff.attempts);
            t.emitAll("reconnecting", t.backoff.attempts);
            if (!t.skipReconnect) {
              t.open(function (e) {
                if (e) {
                  t.reconnecting = false;
                  t.reconnect();
                  t.emitAll("reconnect_error", e.data);
                } else {
                  t.onreconnect();
                }
              });
            }
          }
        }, e);
        this.subs.push({
          destroy: function () {
            clearTimeout(r);
          }
        });
      }
    };
    l.prototype.onreconnect = function () {
      var t = this.backoff.attempts;
      this.reconnecting = false;
      this.backoff.reset();
      this.updateSocketIds();
      this.emitAll("reconnect", t);
    };
  }, function (t, e, r) {
    t.exports = r(11);
    t.exports.parser = r(18);
  }, function (t, e, r) {
    var n = r(12);
    var o = r(5);
    r(3)("engine.io-client:socket");
    var i = r(32);
    var s = r(18);
    var a = r(2);
    var c = r(26);
    function p(t, e) {
      if (!(this instanceof p)) {
        return new p(t, e);
      }
      e = e || {};
      if (t && "object" == typeof t) {
        e = t;
        t = null;
      }
      if (t) {
        t = a(t);
        e.hostname = t.host;
        e.secure = "https" === t.protocol || "wss" === t.protocol;
        e.port = t.port;
        if (t.query) {
          e.query = t.query;
        }
      } else if (e.host) {
        e.hostname = a(e.host).host;
      }
      this.secure = null != e.secure ? e.secure : "undefined" != typeof location && "https:" === location.protocol;
      if (e.hostname && !e.port) {
        e.port = this.secure ? "443" : "80";
      }
      this.agent = e.agent || false;
      this.hostname = e.hostname || ("undefined" != typeof location ? location.hostname : "localhost");
      this.port = e.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80);
      this.query = e.query || {};
      if ("string" == typeof this.query) {
        this.query = c.decode(this.query);
      }
      this.upgrade = false !== e.upgrade;
      this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/";
      this.forceJSONP = !!e.forceJSONP;
      this.jsonp = false !== e.jsonp;
      this.forceBase64 = !!e.forceBase64;
      this.enablesXDR = !!e.enablesXDR;
      this.withCredentials = false !== e.withCredentials;
      this.timestampParam = e.timestampParam || "t";
      this.timestampRequests = e.timestampRequests;
      this.transports = e.transports || ["polling", "websocket"];
      this.transportOptions = e.transportOptions || {};
      this.readyState = "";
      this.writeBuffer = [];
      this.prevBufferLen = 0;
      this.policyPort = e.policyPort || 843;
      this.rememberUpgrade = e.rememberUpgrade || false;
      this.binaryType = null;
      this.onlyBinaryUpgrades = e.onlyBinaryUpgrades;
      this.perMessageDeflate = false !== e.perMessageDeflate && (e.perMessageDeflate || {});
      if (true === this.perMessageDeflate) {
        this.perMessageDeflate = {};
      }
      if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
        this.perMessageDeflate.threshold = 1024;
      }
      this.pfx = e.pfx || null;
      this.key = e.key || null;
      this.passphrase = e.passphrase || null;
      this.cert = e.cert || null;
      this.ca = e.ca || null;
      this.ciphers = e.ciphers || null;
      this.rejectUnauthorized = undefined === e.rejectUnauthorized || e.rejectUnauthorized;
      this.forceNode = !!e.forceNode;
      this.isReactNative = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase();
      if ("undefined" == typeof self || this.isReactNative) {
        if (e.extraHeaders && Object.keys(e.extraHeaders).length > 0) {
          this.extraHeaders = e.extraHeaders;
        }
        if (e.localAddress) {
          this.localAddress = e.localAddress;
        }
      }
      this.id = null;
      this.upgrades = null;
      this.pingInterval = null;
      this.pingTimeout = null;
      this.pingIntervalTimer = null;
      this.pingTimeoutTimer = null;
      this.open();
    }
    t.exports = p;
    p.priorWebsocketSuccess = false;
    o(p.prototype);
    p.protocol = s.protocol;
    p.Socket = p;
    p.Transport = r(17);
    p.transports = r(12);
    p.parser = r(18);
    p.prototype.createTransport = function (t) {
      var e = function (t) {
        var e = {};
        for (var r in t) if (t.hasOwnProperty(r)) {
          e[r] = t[r];
        }
        return e;
      }(this.query);
      e.EIO = s.protocol;
      e.transport = t;
      var r = this.transportOptions[t] || {};
      if (this.id) {
        e.sid = this.id;
      }
      return new n[t]({
        query: e,
        socket: this,
        agent: r.agent || this.agent,
        hostname: r.hostname || this.hostname,
        port: r.port || this.port,
        secure: r.secure || this.secure,
        path: r.path || this.path,
        forceJSONP: r.forceJSONP || this.forceJSONP,
        jsonp: r.jsonp || this.jsonp,
        forceBase64: r.forceBase64 || this.forceBase64,
        enablesXDR: r.enablesXDR || this.enablesXDR,
        withCredentials: r.withCredentials || this.withCredentials,
        timestampRequests: r.timestampRequests || this.timestampRequests,
        timestampParam: r.timestampParam || this.timestampParam,
        policyPort: r.policyPort || this.policyPort,
        pfx: r.pfx || this.pfx,
        key: r.key || this.key,
        passphrase: r.passphrase || this.passphrase,
        cert: r.cert || this.cert,
        ca: r.ca || this.ca,
        ciphers: r.ciphers || this.ciphers,
        rejectUnauthorized: r.rejectUnauthorized || this.rejectUnauthorized,
        perMessageDeflate: r.perMessageDeflate || this.perMessageDeflate,
        extraHeaders: r.extraHeaders || this.extraHeaders,
        forceNode: r.forceNode || this.forceNode,
        localAddress: r.localAddress || this.localAddress,
        requestTimeout: r.requestTimeout || this.requestTimeout,
        protocols: r.protocols || undefined,
        isReactNative: this.isReactNative
      });
    };
    p.prototype.open = function () {
      var t;
      if (this.rememberUpgrade && p.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) {
        t = "websocket";
      } else {
        if (0 === this.transports.length) {
          var e = this;
          return void setTimeout(function () {
            e.emit("error", "No transports available");
          }, 0);
        }
        t = this.transports[0];
      }
      this.readyState = "opening";
      try {
        t = this.createTransport(t);
      } catch (t) {
        this.transports.shift();
        return void this.open();
      }
      t.open();
      this.setTransport(t);
    };
    p.prototype.setTransport = function (t) {
      var e = this;
      if (this.transport) {
        this.transport.removeAllListeners();
      }
      this.transport = t;
      t.on("drain", function () {
        e.onDrain();
      }).on("packet", function (t) {
        e.onPacket(t);
      }).on("error", function (t) {
        e.onError(t);
      }).on("close", function () {
        e.onClose("transport close");
      });
    };
    p.prototype.probe = function (t) {
      var e = this.createTransport(t, {
        probe: 1
      });
      var r = false;
      var n = this;
      function o() {
        if (n.onlyBinaryUpgrades) {
          var t = !this.supportsBinary && n.transport.supportsBinary;
          r = r || t;
        }
        if (!r) {
          e.send([{
            type: "ping",
            data: "probe"
          }]);
          e.once("packet", function (t) {
            if (!r) {
              if ("pong" === t.type && "probe" === t.data) {
                n.upgrading = true;
                n.emit("upgrading", e);
                if (!e) {
                  return;
                }
                p.priorWebsocketSuccess = "websocket" === e.name;
                n.transport.pause(function () {
                  if (!r) {
                    if ("closed" !== n.readyState) {
                      u();
                      n.setTransport(e);
                      e.send([{
                        type: "upgrade"
                      }]);
                      n.emit("upgrade", e);
                      e = null;
                      n.upgrading = false;
                      n.flush();
                    }
                  }
                });
              } else {
                var o = new Error("probe error");
                o.transport = e.name;
                n.emit("upgradeError", o);
              }
            }
          });
        }
      }
      function i() {
        if (!r) {
          r = true;
          u();
          e.close();
          e = null;
        }
      }
      function s(t) {
        var r = new Error("probe error: " + t);
        r.transport = e.name;
        i();
        n.emit("upgradeError", r);
      }
      function a() {
        s("transport closed");
      }
      function c() {
        s("socket closed");
      }
      function h(t) {
        if (e && t.name !== e.name) {
          i();
        }
      }
      function u() {
        e.removeListener("open", o);
        e.removeListener("error", s);
        e.removeListener("close", a);
        n.removeListener("close", c);
        n.removeListener("upgrading", h);
      }
      p.priorWebsocketSuccess = false;
      e.once("open", o);
      e.once("error", s);
      e.once("close", a);
      this.once("close", c);
      this.once("upgrading", h);
      e.open();
    };
    p.prototype.onOpen = function () {
      this.readyState = "open";
      p.priorWebsocketSuccess = "websocket" === this.transport.name;
      this.emit("open");
      this.flush();
      if ("open" === this.readyState && this.upgrade && this.transport.pause) {
        var t = 0;
        for (var e = this.upgrades.length; t < e; t++) {
          this.probe(this.upgrades[t]);
        }
      }
    };
    p.prototype.onPacket = function (t) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        this.emit("packet", t);
        this.emit("heartbeat");
        switch (t.type) {
          case "open":
            this.onHandshake(JSON.parse(t.data));
            break;
          case "pong":
            this.setPing();
            this.emit("pong");
            break;
          case "error":
            var e = new Error("server error");
            e.code = t.data;
            this.onError(e);
            break;
          case "message":
            this.emit("data", t.data);
            this.emit("message", t.data);
        }
      }
    };
    p.prototype.onHandshake = function (t) {
      this.emit("handshake", t);
      this.id = t.sid;
      this.transport.query.sid = t.sid;
      this.upgrades = this.filterUpgrades(t.upgrades);
      this.pingInterval = t.pingInterval;
      this.pingTimeout = t.pingTimeout;
      this.onOpen();
      if ("closed" !== this.readyState) {
        this.setPing();
        this.removeListener("heartbeat", this.onHeartbeat);
        this.on("heartbeat", this.onHeartbeat);
      }
    };
    p.prototype.onHeartbeat = function (t) {
      clearTimeout(this.pingTimeoutTimer);
      var e = this;
      e.pingTimeoutTimer = setTimeout(function () {
        if ("closed" !== e.readyState) {
          e.onClose("ping timeout");
        }
      }, t || e.pingInterval + e.pingTimeout);
    };
    p.prototype.setPing = function () {
      var t = this;
      clearTimeout(t.pingIntervalTimer);
      t.pingIntervalTimer = setTimeout(function () {
        t.ping();
        t.onHeartbeat(t.pingTimeout);
      }, t.pingInterval);
    };
    p.prototype.ping = function () {
      var t = this;
      this.sendPacket("ping", function () {
        t.emit("ping");
      });
    };
    p.prototype.onDrain = function () {
      this.writeBuffer.splice(0, this.prevBufferLen);
      this.prevBufferLen = 0;
      if (0 === this.writeBuffer.length) {
        this.emit("drain");
      } else {
        this.flush();
      }
    };
    p.prototype.flush = function () {
      if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
        this.transport.send(this.writeBuffer);
        this.prevBufferLen = this.writeBuffer.length;
        this.emit("flush");
      }
    };
    p.prototype.write = p.prototype.send = function (t, e, r) {
      this.sendPacket("message", t, e, r);
      return this;
    };
    p.prototype.sendPacket = function (t, e, r, n) {
      if ("function" == typeof e) {
        n = e;
        e = undefined;
      }
      if ("function" == typeof r) {
        n = r;
        r = null;
      }
      if ("closing" !== this.readyState && "closed" !== this.readyState) {
        (r = r || {}).compress = false !== r.compress;
        var o = {
          type: t,
          data: e,
          options: r
        };
        this.emit("packetCreate", o);
        this.writeBuffer.push(o);
        if (n) {
          this.once("flush", n);
        }
        this.flush();
      }
    };
    p.prototype.close = function () {
      if ("opening" === this.readyState || "open" === this.readyState) {
        this.readyState = "closing";
        var t = this;
        if (this.writeBuffer.length) {
          this.once("drain", function () {
            if (this.upgrading) {
              n();
            } else {
              e();
            }
          });
        } else if (this.upgrading) {
          n();
        } else {
          e();
        }
      }
      function e() {
        t.onClose("forced close");
        t.transport.close();
      }
      function r() {
        t.removeListener("upgrade", r);
        t.removeListener("upgradeError", r);
        e();
      }
      function n() {
        t.once("upgrade", r);
        t.once("upgradeError", r);
      }
      return this;
    };
    p.prototype.onError = function (t) {
      p.priorWebsocketSuccess = false;
      this.emit("error", t);
      this.onClose("transport error", t);
    };
    p.prototype.onClose = function (t, e) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        clearTimeout(this.pingIntervalTimer);
        clearTimeout(this.pingTimeoutTimer);
        this.transport.removeAllListeners("close");
        this.transport.close();
        this.transport.removeAllListeners();
        this.readyState = "closed";
        this.id = null;
        this.emit("close", t, e);
        this.writeBuffer = [];
        this.prevBufferLen = 0;
      }
    };
    p.prototype.filterUpgrades = function (t) {
      var e = [];
      var r = 0;
      for (var n = t.length; r < n; r++) {
        if (~i(this.transports, t[r])) {
          e.push(t[r]);
        }
      }
      return e;
    };
  }, function (t, e, r) {
    var n = r(13);
    var o = r(15);
    var i = r(29);
    var s = r(30);
    e.polling = function (t) {
      var e = false;
      var r = false;
      var s = false !== t.jsonp;
      if ("undefined" != typeof location) {
        var a = "https:" === location.protocol;
        var c = location.port;
        if (!c) {
          c = a ? 443 : 80;
        }
        e = t.hostname !== location.hostname || c !== t.port;
        r = t.secure !== a;
      }
      t.xdomain = e;
      t.xscheme = r;
      if ("open" in new n(t) && !t.forceJSONP) {
        return new o(t);
      }
      if (!s) {
        throw new Error("JSONP disabled");
      }
      return new i(t);
    };
    e.websocket = s;
  }, function (t, e, r) {
    var n = r(14);
    t.exports = function (t) {
      var e = t.xdomain;
      var r = t.xscheme;
      var o = t.enablesXDR;
      try {
        if ("undefined" != typeof XMLHttpRequest && (!e || n)) {
          return new XMLHttpRequest();
        }
      } catch (t) {}
      try {
        if ("undefined" != typeof XDomainRequest && !r && o) {
          return new XDomainRequest();
        }
      } catch (t) {}
      if (!e) {
        try {
          return new self[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
        } catch (t) {}
      }
    };
  }, function (t, e) {
    try {
      t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
    } catch (e) {
      t.exports = false;
    }
  }, function (t, e, r) {
    var n = r(13);
    var o = r(16);
    var i = r(5);
    var s = r(27);
    r(3)("engine.io-client:polling-xhr");
    function a() {}
    function c(t) {
      o.call(this, t);
      this.requestTimeout = t.requestTimeout;
      this.extraHeaders = t.extraHeaders;
      if ("undefined" != typeof location) {
        var e = "https:" === location.protocol;
        var r = location.port;
        if (!r) {
          r = e ? 443 : 80;
        }
        this.xd = "undefined" != typeof location && t.hostname !== location.hostname || r !== t.port;
        this.xs = t.secure !== e;
      }
    }
    function p(t) {
      this.method = t.method || "GET";
      this.uri = t.uri;
      this.xd = !!t.xd;
      this.xs = !!t.xs;
      this.async = false !== t.async;
      this.data = undefined !== t.data ? t.data : null;
      this.agent = t.agent;
      this.isBinary = t.isBinary;
      this.supportsBinary = t.supportsBinary;
      this.enablesXDR = t.enablesXDR;
      this.withCredentials = t.withCredentials;
      this.requestTimeout = t.requestTimeout;
      this.pfx = t.pfx;
      this.key = t.key;
      this.passphrase = t.passphrase;
      this.cert = t.cert;
      this.ca = t.ca;
      this.ciphers = t.ciphers;
      this.rejectUnauthorized = t.rejectUnauthorized;
      this.extraHeaders = t.extraHeaders;
      this.create();
    }
    t.exports = c;
    t.exports.Request = p;
    s(c, o);
    c.prototype.supportsBinary = true;
    c.prototype.request = function (t) {
      (t = t || {}).uri = this.uri();
      t.xd = this.xd;
      t.xs = this.xs;
      t.agent = this.agent || false;
      t.supportsBinary = this.supportsBinary;
      t.enablesXDR = this.enablesXDR;
      t.withCredentials = this.withCredentials;
      t.pfx = this.pfx;
      t.key = this.key;
      t.passphrase = this.passphrase;
      t.cert = this.cert;
      t.ca = this.ca;
      t.ciphers = this.ciphers;
      t.rejectUnauthorized = this.rejectUnauthorized;
      t.requestTimeout = this.requestTimeout;
      t.extraHeaders = this.extraHeaders;
      return new p(t);
    };
    c.prototype.doWrite = function (t, e) {
      var r = "string" != typeof t && undefined !== t;
      var n = this.request({
        method: "POST",
        data: t,
        isBinary: r
      });
      var o = this;
      n.on("success", e);
      n.on("error", function (t) {
        o.onError("xhr post error", t);
      });
      this.sendXhr = n;
    };
    c.prototype.doPoll = function () {
      var t = this.request();
      var e = this;
      t.on("data", function (t) {
        e.onData(t);
      });
      t.on("error", function (t) {
        e.onError("xhr poll error", t);
      });
      this.pollXhr = t;
    };
    i(p.prototype);
    p.prototype.create = function () {
      var t = {
        agent: this.agent,
        xdomain: this.xd,
        xscheme: this.xs,
        enablesXDR: this.enablesXDR
      };
      t.pfx = this.pfx;
      t.key = this.key;
      t.passphrase = this.passphrase;
      t.cert = this.cert;
      t.ca = this.ca;
      t.ciphers = this.ciphers;
      t.rejectUnauthorized = this.rejectUnauthorized;
      var e = this.xhr = new n(t);
      var r = this;
      try {
        e.open(this.method, this.uri, this.async);
        try {
          if (this.extraHeaders) {
            if (e.setDisableHeaderCheck) {
              e.setDisableHeaderCheck(true);
            }
            for (var o in this.extraHeaders) if (this.extraHeaders.hasOwnProperty(o)) {
              e.setRequestHeader(o, this.extraHeaders[o]);
            }
          }
        } catch (t) {}
        if ("POST" === this.method) {
          try {
            if (this.isBinary) {
              e.setRequestHeader("Content-type", "application/octet-stream");
            } else {
              e.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
            }
          } catch (t) {}
        }
        try {
          e.setRequestHeader("Accept", "*/*");
        } catch (t) {}
        if ("withCredentials" in e) {
          e.withCredentials = this.withCredentials;
        }
        if (this.requestTimeout) {
          e.timeout = this.requestTimeout;
        }
        if (this.hasXDR()) {
          e.onload = function () {
            r.onLoad();
          };
          e.onerror = function () {
            r.onError(e.responseText);
          };
        } else {
          e.onreadystatechange = function () {
            if (2 === e.readyState) {
              try {
                var t = e.getResponseHeader("Content-Type");
                if (r.supportsBinary && "application/octet-stream" === t || "application/octet-stream; charset=UTF-8" === t) {
                  e.responseType = "arraybuffer";
                }
              } catch (t) {}
            }
            if (4 === e.readyState) {
              if (200 === e.status || 1223 === e.status) {
                r.onLoad();
              } else {
                setTimeout(function () {
                  r.onError("number" == typeof e.status ? e.status : 0);
                }, 0);
              }
            }
          };
        }
        e.send(this.data);
      } catch (t) {
        return void setTimeout(function () {
          r.onError(t);
        }, 0);
      }
      if ("undefined" != typeof document) {
        this.index = p.requestsCount++;
        p.requests[this.index] = this;
      }
    };
    p.prototype.onSuccess = function () {
      this.emit("success");
      this.cleanup();
    };
    p.prototype.onData = function (t) {
      this.emit("data", t);
      this.onSuccess();
    };
    p.prototype.onError = function (t) {
      this.emit("error", t);
      this.cleanup(true);
    };
    p.prototype.cleanup = function (t) {
      if (undefined !== this.xhr && null !== this.xhr) {
        if (this.hasXDR()) {
          this.xhr.onload = this.xhr.onerror = a;
        } else {
          this.xhr.onreadystatechange = a;
        }
        if (t) {
          try {
            this.xhr.abort();
          } catch (t) {}
        }
        if ("undefined" != typeof document) {
          delete p.requests[this.index];
        }
        this.xhr = null;
      }
    };
    p.prototype.onLoad = function () {
      var t;
      try {
        var e;
        try {
          e = this.xhr.getResponseHeader("Content-Type");
        } catch (t) {}
        t = ("application/octet-stream" === e || "application/octet-stream; charset=UTF-8" === e) && this.xhr.response || this.xhr.responseText;
      } catch (t) {
        this.onError(t);
      }
      if (null != t) {
        this.onData(t);
      }
    };
    p.prototype.hasXDR = function () {
      return "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR;
    };
    p.prototype.abort = function () {
      this.cleanup();
    };
    p.requestsCount = 0;
    p.requests = {};
    if ("undefined" != typeof document) {
      if ("function" == typeof attachEvent) {
        attachEvent("onunload", u);
      } else if ("function" == typeof addEventListener) {
        var h = "onpagehide" in self ? "pagehide" : "unload";
        addEventListener(h, u, false);
      }
    }
    function u() {
      for (var t in p.requests) if (p.requests.hasOwnProperty(t)) {
        p.requests[t].abort();
      }
    }
  }, function (t, e, r) {
    var n = r(17);
    var o = r(26);
    var i = r(18);
    var s = r(27);
    var a = r(28);
    r(3)("engine.io-client:polling");
    t.exports = p;
    var c = null != new (r(13))({
      xdomain: false
    }).responseType;
    function p(t) {
      var e = t && t.forceBase64;
      if (!(c && !e)) {
        this.supportsBinary = false;
      }
      n.call(this, t);
    }
    s(p, n);
    p.prototype.name = "polling";
    p.prototype.doOpen = function () {
      this.poll();
    };
    p.prototype.pause = function (t) {
      var e = this;
      function r() {
        e.readyState = "paused";
        t();
      }
      this.readyState = "pausing";
      if (this.polling || !this.writable) {
        var n = 0;
        if (this.polling) {
          n++;
          this.once("pollComplete", function () {
            if (! --n) {
              r();
            }
          });
        }
        if (!this.writable) {
          n++;
          this.once("drain", function () {
            if (! --n) {
              r();
            }
          });
        }
      } else {
        r();
      }
    };
    p.prototype.poll = function () {
      this.polling = true;
      this.doPoll();
      this.emit("poll");
    };
    p.prototype.onData = function (t) {
      var e = this;
      i.decodePayload(t, this.socket.binaryType, function (t, r, n) {
        if ("opening" === e.readyState) {
          e.onOpen();
        }
        if ("close" === t.type) {
          e.onClose();
          return false;
        }
        e.onPacket(t);
      });
      if ("closed" !== this.readyState) {
        this.polling = false;
        this.emit("pollComplete");
        if ("open" === this.readyState) {
          this.poll();
        }
      }
    };
    p.prototype.doClose = function () {
      var t = this;
      function e() {
        t.write([{
          type: "close"
        }]);
      }
      if ("open" === this.readyState) {
        e();
      } else {
        this.once("open", e);
      }
    };
    p.prototype.write = function (t) {
      var e = this;
      this.writable = false;
      var r = function () {
        e.writable = true;
        e.emit("drain");
      };
      i.encodePayload(t, this.supportsBinary, function (t) {
        e.doWrite(t, r);
      });
    };
    p.prototype.uri = function () {
      var t = this.query || {};
      var e = this.secure ? "https" : "http";
      var r = "";
      if (false !== this.timestampRequests) {
        t[this.timestampParam] = a();
      }
      if (!(this.supportsBinary || t.sid)) {
        t.b64 = 1;
      }
      t = o.encode(t);
      if (this.port && ("https" === e && 443 !== Number(this.port) || "http" === e && 80 !== Number(this.port))) {
        r = ":" + this.port;
      }
      if (t.length) {
        t = "?" + t;
      }
      return e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + r + this.path + t;
    };
  }, function (t, e, r) {
    var n = r(18);
    var o = r(5);
    function i(t) {
      this.path = t.path;
      this.hostname = t.hostname;
      this.port = t.port;
      this.secure = t.secure;
      this.query = t.query;
      this.timestampParam = t.timestampParam;
      this.timestampRequests = t.timestampRequests;
      this.readyState = "";
      this.agent = t.agent || false;
      this.socket = t.socket;
      this.enablesXDR = t.enablesXDR;
      this.withCredentials = t.withCredentials;
      this.pfx = t.pfx;
      this.key = t.key;
      this.passphrase = t.passphrase;
      this.cert = t.cert;
      this.ca = t.ca;
      this.ciphers = t.ciphers;
      this.rejectUnauthorized = t.rejectUnauthorized;
      this.forceNode = t.forceNode;
      this.isReactNative = t.isReactNative;
      this.extraHeaders = t.extraHeaders;
      this.localAddress = t.localAddress;
    }
    t.exports = i;
    o(i.prototype);
    i.prototype.onError = function (t, e) {
      var r = new Error(t);
      r.type = "TransportError";
      r.description = e;
      this.emit("error", r);
      return this;
    };
    i.prototype.open = function () {
      if (!("closed" !== this.readyState && "" !== this.readyState)) {
        this.readyState = "opening";
        this.doOpen();
      }
      return this;
    };
    i.prototype.close = function () {
      if (!("opening" !== this.readyState && "open" !== this.readyState)) {
        this.doClose();
        this.onClose();
      }
      return this;
    };
    i.prototype.send = function (t) {
      if ("open" !== this.readyState) {
        throw new Error("Transport not open");
      }
      this.write(t);
    };
    i.prototype.onOpen = function () {
      this.readyState = "open";
      this.writable = true;
      this.emit("open");
    };
    i.prototype.onData = function (t) {
      var e = n.decodePacket(t, this.socket.binaryType);
      this.onPacket(e);
    };
    i.prototype.onPacket = function (t) {
      this.emit("packet", t);
    };
    i.prototype.onClose = function () {
      this.readyState = "closed";
      this.emit("close");
    };
  }, function (t, e, r) {
    var n;
    var o = r(19);
    var i = r(20);
    var s = r(21);
    var a = r(22);
    var c = r(23);
    if ("undefined" != typeof ArrayBuffer) {
      n = r(24);
    }
    var p = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent);
    var h = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent);
    var u = p || h;
    e.protocol = 3;
    var f = e.packets = {
      open: 0,
      close: 1,
      ping: 2,
      pong: 3,
      message: 4,
      upgrade: 5,
      noop: 6
    };
    var l = o(f);
    var d = {
      type: "error",
      data: "parser error"
    };
    var y = r(25);
    function m(t, e, r) {
      var n = new Array(t.length);
      var o = a(t.length, r);
      var i = function (t, r, o) {
        e(r, function (e, r) {
          n[t] = r;
          o(e, n);
        });
      };
      for (var s = 0; s < t.length; s++) {
        i(s, t[s], o);
      }
    }
    e.encodePacket = function (t, r, n, o) {
      if ("function" == typeof r) {
        o = r;
        r = false;
      }
      if ("function" == typeof n) {
        o = n;
        n = null;
      }
      var i = undefined === t.data ? undefined : t.data.buffer || t.data;
      if ("undefined" != typeof ArrayBuffer && i instanceof ArrayBuffer) {
        return function (t, r, n) {
          if (!r) {
            return e.encodeBase64Packet(t, n);
          }
          var o = t.data;
          var i = new Uint8Array(o);
          var s = new Uint8Array(1 + o.byteLength);
          s[0] = f[t.type];
          for (var a = 0; a < i.length; a++) {
            s[a + 1] = i[a];
          }
          return n(s.buffer);
        }(t, r, o);
      }
      if (undefined !== y && i instanceof y) {
        return function (t, r, n) {
          if (!r) {
            return e.encodeBase64Packet(t, n);
          }
          if (u) {
            return function (t, r, n) {
              if (!r) {
                return e.encodeBase64Packet(t, n);
              }
              var o = new FileReader();
              o.onload = function () {
                e.encodePacket({
                  type: t.type,
                  data: o.result
                }, r, true, n);
              };
              return o.readAsArrayBuffer(t.data);
            }(t, r, n);
          }
          var o = new Uint8Array(1);
          o[0] = f[t.type];
          var i = new y([o.buffer, t.data]);
          return n(i);
        }(t, r, o);
      }
      if (i && i.base64) {
        return function (t, r) {
          var n = "b" + e.packets[t.type] + t.data.data;
          return r(n);
        }(t, o);
      }
      var s = f[t.type];
      if (undefined !== t.data) {
        s += n ? c.encode(String(t.data), {
          strict: false
        }) : String(t.data);
      }
      return o("" + s);
    };
    e.encodeBase64Packet = function (t, r) {
      var n;
      var o = "b" + e.packets[t.type];
      if (undefined !== y && t.data instanceof y) {
        var i = new FileReader();
        i.onload = function () {
          var t = i.result.split(",")[1];
          r(o + t);
        };
        return i.readAsDataURL(t.data);
      }
      try {
        n = String.fromCharCode.apply(null, new Uint8Array(t.data));
      } catch (e) {
        var s = new Uint8Array(t.data);
        var a = new Array(s.length);
        for (var c = 0; c < s.length; c++) {
          a[c] = s[c];
        }
        n = String.fromCharCode.apply(null, a);
      }
      o += btoa(n);
      return r(o);
    };
    e.decodePacket = function (t, r, n) {
      if (undefined === t) {
        return d;
      }
      if ("string" == typeof t) {
        if ("b" === t.charAt(0)) {
          return e.decodeBase64Packet(t.substr(1), r);
        }
        if (n && false === (t = function (t) {
          try {
            t = c.decode(t, {
              strict: false
            });
          } catch (t) {
            return false;
          }
          return t;
        }(t))) {
          return d;
        }
        var o = t.charAt(0);
        return Number(o) == o && l[o] ? t.length > 1 ? {
          type: l[o],
          data: t.substring(1)
        } : {
          type: l[o]
        } : d;
      }
      o = new Uint8Array(t)[0];
      var i = s(t, 1);
      if (y && "blob" === r) {
        i = new y([i]);
      }
      return {
        type: l[o],
        data: i
      };
    };
    e.decodeBase64Packet = function (t, e) {
      var r = l[t.charAt(0)];
      if (!n) {
        return {
          type: r,
          data: {
            base64: true,
            data: t.substr(1)
          }
        };
      }
      var o = n.decode(t.substr(1));
      if ("blob" === e && y) {
        o = new y([o]);
      }
      return {
        type: r,
        data: o
      };
    };
    e.encodePayload = function (t, r, n) {
      if ("function" == typeof r) {
        n = r;
        r = null;
      }
      var o = i(t);
      if (r && o) {
        return y && !u ? e.encodePayloadAsBlob(t, n) : e.encodePayloadAsArrayBuffer(t, n);
      }
      if (!t.length) {
        return n("0:");
      }
      m(t, function (t, n) {
        e.encodePacket(t, !!o && r, false, function (t) {
          n(null, function (t) {
            return t.length + ":" + t;
          }(t));
        });
      }, function (t, e) {
        return n(e.join(""));
      });
    };
    e.decodePayload = function (t, r, n) {
      if ("string" != typeof t) {
        return e.decodePayloadAsBinary(t, r, n);
      }
      var o;
      if ("function" == typeof r) {
        n = r;
        r = null;
      }
      if ("" === t) {
        return n(d, 0, 1);
      }
      var i;
      var s;
      var a = "";
      var c = 0;
      for (var p = t.length; c < p; c++) {
        var h = t.charAt(c);
        if (":" === h) {
          if ("" === a || a != (i = Number(a))) {
            return n(d, 0, 1);
          }
          if (a != (s = t.substr(c + 1, i)).length) {
            return n(d, 0, 1);
          }
          if (s.length) {
            o = e.decodePacket(s, r, false);
            if ("error" === o.type && "parser error" === o.data) {
              return n(d, 0, 1);
            }
            if (false === n(o, c + i, p)) {
              return;
            }
          }
          c += i;
          a = "";
        } else {
          a += h;
        }
      }
      return "" !== a ? n(d, 0, 1) : undefined;
    };
    e.encodePayloadAsArrayBuffer = function (t, r) {
      if (!t.length) {
        return r(new ArrayBuffer(0));
      }
      m(t, function (t, r) {
        e.encodePacket(t, true, true, function (t) {
          return r(null, t);
        });
      }, function (t, e) {
        var n = e.reduce(function (t, e) {
          var r;
          return t + (r = "string" == typeof e ? e.length : e.byteLength).toString().length + r + 2;
        }, 0);
        var o = new Uint8Array(n);
        var i = 0;
        e.forEach(function (t) {
          var e = "string" == typeof t;
          var r = t;
          if (e) {
            var n = new Uint8Array(t.length);
            for (var s = 0; s < t.length; s++) {
              n[s] = t.charCodeAt(s);
            }
            r = n.buffer;
          }
          o[i++] = e ? 0 : 1;
          var a = r.byteLength.toString();
          for (s = 0; s < a.length; s++) {
            o[i++] = parseInt(a[s]);
          }
          o[i++] = 255;
          n = new Uint8Array(r);
          for (s = 0; s < n.length; s++) {
            o[i++] = n[s];
          }
        });
        return r(o.buffer);
      });
    };
    e.encodePayloadAsBlob = function (t, r) {
      m(t, function (t, r) {
        e.encodePacket(t, true, true, function (t) {
          var e = new Uint8Array(1);
          e[0] = 1;
          if ("string" == typeof t) {
            var n = new Uint8Array(t.length);
            for (var o = 0; o < t.length; o++) {
              n[o] = t.charCodeAt(o);
            }
            t = n.buffer;
            e[0] = 0;
          }
          var i = (t instanceof ArrayBuffer ? t.byteLength : t.size).toString();
          var s = new Uint8Array(i.length + 1);
          for (o = 0; o < i.length; o++) {
            s[o] = parseInt(i[o]);
          }
          s[i.length] = 255;
          if (y) {
            var a = new y([e.buffer, s.buffer, t]);
            r(null, a);
          }
        });
      }, function (t, e) {
        return r(new y(e));
      });
    };
    e.decodePayloadAsBinary = function (t, r, n) {
      if ("function" == typeof r) {
        n = r;
        r = null;
      }
      var o = t;
      for (var i = []; o.byteLength > 0;) {
        var a = new Uint8Array(o);
        var c = 0 === a[0];
        var p = "";
        for (var h = 1; 255 !== a[h]; h++) {
          if (p.length > 310) {
            return n(d, 0, 1);
          }
          p += a[h];
        }
        o = s(o, 2 + p.length);
        p = parseInt(p);
        var u = s(o, 0, p);
        if (c) {
          try {
            u = String.fromCharCode.apply(null, new Uint8Array(u));
          } catch (t) {
            var f = new Uint8Array(u);
            u = "";
            for (h = 0; h < f.length; h++) {
              u += String.fromCharCode(f[h]);
            }
          }
        }
        i.push(u);
        o = s(o, p);
      }
      var l = i.length;
      i.forEach(function (t, o) {
        n(e.decodePacket(t, r, true), o, l);
      });
    };
  }, function (t, e) {
    t.exports = Object.keys || function (t) {
      var e = [];
      var r = Object.prototype.hasOwnProperty;
      for (var n in t) if (r.call(t, n)) {
        e.push(n);
      }
      return e;
    };
  }, function (t, e, r) {
    var n = r(7);
    var o = Object.prototype.toString;
    var i = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === o.call(Blob);
    var s = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === o.call(File);
    t.exports = function t(e) {
      if (!e || "object" != typeof e) {
        return false;
      }
      if (n(e)) {
        var r = 0;
        for (var o = e.length; r < o; r++) {
          if (t(e[r])) {
            return true;
          }
        }
        return false;
      }
      if ("function" == typeof Buffer && Buffer.isBuffer && Buffer.isBuffer(e) || "function" == typeof ArrayBuffer && e instanceof ArrayBuffer || i && e instanceof Blob || s && e instanceof File) {
        return true;
      }
      if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length) {
        return t(e.toJSON(), true);
      }
      for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a) && t(e[a])) {
        return true;
      }
      return false;
    };
  }, function (t, e) {
    t.exports = function (t, e, r) {
      var n = t.byteLength;
      e = e || 0;
      r = r || n;
      if (t.slice) {
        return t.slice(e, r);
      }
      if (e < 0) {
        e += n;
      }
      if (r < 0) {
        r += n;
      }
      if (r > n) {
        r = n;
      }
      if (e >= n || e >= r || 0 === n) {
        return new ArrayBuffer(0);
      }
      var o = new Uint8Array(t);
      var i = new Uint8Array(r - e);
      var s = e;
      for (var a = 0; s < r; s++, a++) {
        i[a] = o[s];
      }
      return i.buffer;
    };
  }, function (t, e) {
    function r() {}
    t.exports = function (t, e, n) {
      var o = false;
      n = n || r;
      i.count = t;
      return 0 === t ? e() : i;
      function i(t, r) {
        if (i.count <= 0) {
          throw new Error("after called too many times");
        }
        --i.count;
        if (t) {
          o = true;
          e(t);
          e = n;
        } else if (!(0 !== i.count || o)) {
          e(null, r);
        }
      }
    };
  }, function (t, e) {
    /*! https://mths.be/utf8js v2.1.2 by @mathias */
    var r;
    var n;
    var o;
    var i = String.fromCharCode;
    function s(t) {
      var e;
      var r;
      var n = [];
      var o = 0;
      for (var i = t.length; o < i;) {
        if ((e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < i) {
          if (56320 == (64512 & (r = t.charCodeAt(o++)))) {
            n.push(((1023 & e) << 10) + (1023 & r) + 65536);
          } else {
            n.push(e);
            o--;
          }
        } else {
          n.push(e);
        }
      }
      return n;
    }
    function a(t, e) {
      if (t >= 55296 && t <= 57343) {
        if (e) {
          throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
        }
        return false;
      }
      return true;
    }
    function p(t, e) {
      if (0 == (4294967168 & t)) {
        return i(t);
      }
      var r = "";
      if (0 == (4294965248 & t)) {
        r = i(t >> 6 & 31 | 192);
      } else if (0 == (4294901760 & t)) {
        if (!a(t, e)) {
          t = 65533;
        }
        r = i(t >> 12 & 15 | 224);
        r += i(t >> 6 & 63 | 128);
      } else if (0 == (4292870144 & t)) {
        r = i(t >> 18 & 7 | 240);
        r += i(t >> 12 & 63 | 128);
        r += i(t >> 6 & 63 | 128);
      }
      return r += i(63 & t | 128);
    }
    function h() {
      if (o >= n) {
        throw Error("Invalid byte index");
      }
      var t = 255 & r[o];
      o++;
      if (128 == (192 & t)) {
        return 63 & t;
      }
      throw Error("Invalid continuation byte");
    }
    function u(t) {
      var e;
      var i;
      if (o > n) {
        throw Error("Invalid byte index");
      }
      if (o == n) {
        return false;
      }
      e = 255 & r[o];
      o++;
      if (0 == (128 & e)) {
        return e;
      }
      if (192 == (224 & e)) {
        if ((i = (31 & e) << 6 | h()) >= 128) {
          return i;
        }
        throw Error("Invalid continuation byte");
      }
      if (224 == (240 & e)) {
        if ((i = (15 & e) << 12 | h() << 6 | h()) >= 2048) {
          return a(i, t) ? i : 65533;
        }
        throw Error("Invalid continuation byte");
      }
      if (240 == (248 & e) && (i = (7 & e) << 18 | h() << 12 | h() << 6 | h()) >= 65536 && i <= 1114111) {
        return i;
      }
      throw Error("Invalid UTF-8 detected");
    }
    t.exports = {
      version: "2.1.2",
      encode: function (t, e) {
        var r = false !== (e = e || {}).strict;
        var n = s(t);
        var o = n.length;
        var i = -1;
        for (var a = ""; ++i < o;) {
          a += p(n[i], r);
        }
        return a;
      },
      decode: function (t, e) {
        var a = false !== (e = e || {}).strict;
        r = s(t);
        n = r.length;
        o = 0;
        var c;
        for (var p = []; false !== (c = u(a));) {
          p.push(c);
        }
        return function (t) {
          var e;
          var r = t.length;
          var n = -1;
          for (var o = ""; ++n < r;) {
            if ((e = t[n]) > 65535) {
              o += i((e -= 65536) >>> 10 & 1023 | 55296);
              e = 56320 | 1023 & e;
            }
            o += i(e);
          }
          return o;
        }(p);
      }
    };
  }, function (t, e) {
    !function () {
      "use strict";

      var r = new Uint8Array(256);
      for (var n = 0; n < 64; n++) {
        r["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(n)] = n;
      }
      e.encode = function (e) {
        var r;
        var n = new Uint8Array(e);
        var o = n.length;
        var i = "";
        for (r = 0; r < o; r += 3) {
          i += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[n[r] >> 2];
          i += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(3 & n[r]) << 4 | n[r + 1] >> 4];
          i += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(15 & n[r + 1]) << 2 | n[r + 2] >> 6];
          i += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[63 & n[r + 2]];
        }
        if (o % 3 == 2) {
          i = i.substring(0, i.length - 1) + "=";
        } else if (o % 3 == 1) {
          i = i.substring(0, i.length - 2) + "==";
        }
        return i;
      };
      e.decode = function (t) {
        var e;
        var n;
        var o;
        var i;
        var s;
        var a = .75 * t.length;
        var c = t.length;
        var p = 0;
        if ("=" === t[t.length - 1]) {
          a--;
          if ("=" === t[t.length - 2]) {
            a--;
          }
        }
        var h = new ArrayBuffer(a);
        var u = new Uint8Array(h);
        for (e = 0; e < c; e += 4) {
          n = r[t.charCodeAt(e)];
          o = r[t.charCodeAt(e + 1)];
          i = r[t.charCodeAt(e + 2)];
          s = r[t.charCodeAt(e + 3)];
          u[p++] = n << 2 | o >> 4;
          u[p++] = (15 & o) << 4 | i >> 2;
          u[p++] = (3 & i) << 6 | 63 & s;
        }
        return h;
      };
    }();
  }, function (t, e) {
    var r = undefined !== r ? r : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder;
    var n = function () {
      try {
        return 2 === new Blob(["hi"]).size;
      } catch (t) {
        return false;
      }
    }();
    var o = n && function () {
      try {
        return 2 === new Blob([new Uint8Array([1, 2])]).size;
      } catch (t) {
        return false;
      }
    }();
    var i = r && r.prototype.append && r.prototype.getBlob;
    function s(t) {
      return t.map(function (t) {
        if (t.buffer instanceof ArrayBuffer) {
          var e = t.buffer;
          if (t.byteLength !== e.byteLength) {
            var r = new Uint8Array(t.byteLength);
            r.set(new Uint8Array(e, t.byteOffset, t.byteLength));
            e = r.buffer;
          }
          return e;
        }
        return t;
      });
    }
    function a(t, e) {
      e = e || {};
      var n = new r();
      s(t).forEach(function (t) {
        n.append(t);
      });
      return e.type ? n.getBlob(e.type) : n.getBlob();
    }
    function c(t, e) {
      return new Blob(s(t), e || {});
    }
    if ("undefined" != typeof Blob) {
      a.prototype = Blob.prototype;
      c.prototype = Blob.prototype;
    }
    t.exports = n ? o ? Blob : c : i ? a : undefined;
  }, function (t, e) {
    e.encode = function (t) {
      var e = "";
      for (var r in t) if (t.hasOwnProperty(r)) {
        if (e.length) {
          e += "&";
        }
        e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]);
      }
      return e;
    };
    e.decode = function (t) {
      var e = {};
      var r = t.split("&");
      var n = 0;
      for (var o = r.length; n < o; n++) {
        var i = r[n].split("=");
        e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
      }
      return e;
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      var r = function () {};
      r.prototype = e.prototype;
      t.prototype = new r();
      t.prototype.constructor = t;
    };
  }, function (t, e) {
    "use strict";

    var r;
    var n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
    var i = {};
    var s = 0;
    var a = 0;
    function c(t) {
      var e = "";
      do {
        e = n[t % 64] + e;
        t = Math.floor(t / 64);
      } while (t > 0);
      return e;
    }
    function p() {
      var t = c(+new Date());
      return t !== r ? (s = 0, r = t) : t + "." + c(s++);
    }
    for (; a < 64; a++) {
      i[n[a]] = a;
    }
    p.encode = c;
    p.decode = function (t) {
      var e = 0;
      for (a = 0; a < t.length; a++) {
        e = e * 64 + i[t.charAt(a)];
      }
      return e;
    };
    t.exports = p;
  }, function (t, e, r) {
    (function (e) {
      var n = r(16);
      var o = r(27);
      t.exports = h;
      var i;
      var s = /\n/g;
      var a = /\\n/g;
      function c() {}
      function h(t) {
        n.call(this, t);
        this.query = this.query || {};
        if (!i) {
          var e = "undefined" != typeof self ? self : "undefined" != typeof window ? window : undefined !== e ? e : {};
          i = e.___eio = e.___eio || [];
        }
        this.index = i.length;
        var r = this;
        i.push(function (t) {
          r.onData(t);
        });
        this.query.j = this.index;
        if ("function" == typeof addEventListener) {
          addEventListener("beforeunload", function () {
            if (r.script) {
              r.script.onerror = c;
            }
          }, false);
        }
      }
      o(h, n);
      h.prototype.supportsBinary = false;
      h.prototype.doClose = function () {
        if (this.script) {
          this.script.parentNode.removeChild(this.script);
          this.script = null;
        }
        if (this.form) {
          this.form.parentNode.removeChild(this.form);
          this.form = null;
          this.iframe = null;
        }
        n.prototype.doClose.call(this);
      };
      h.prototype.doPoll = function () {
        var t = this;
        var e = document.createElement("script");
        if (this.script) {
          this.script.parentNode.removeChild(this.script);
          this.script = null;
        }
        e.async = true;
        e.src = this.uri();
        e.onerror = function (e) {
          t.onError("jsonp poll error", e);
        };
        var r = document.getElementsByTagName("script")[0];
        if (r) {
          r.parentNode.insertBefore(e, r);
        } else {
          (document.head || document.body).appendChild(e);
        }
        this.script = e;
        if ("undefined" != typeof navigator && /gecko/i.test(navigator.userAgent)) {
          setTimeout(function () {
            var t = document.createElement("iframe");
            document.body.appendChild(t);
            document.body.removeChild(t);
          }, 100);
        }
      };
      h.prototype.doWrite = function (t, e) {
        var r = this;
        if (!this.form) {
          var n;
          var o = document.createElement("form");
          var i = document.createElement("textarea");
          var c = this.iframeId = "eio_iframe_" + this.index;
          o.className = "socketio";
          o.style.position = "absolute";
          o.style.top = "-1000px";
          o.style.left = "-1000px";
          o.target = c;
          o.method = "POST";
          o.setAttribute("accept-charset", "utf-8");
          i.name = "d";
          o.appendChild(i);
          document.body.appendChild(o);
          this.form = o;
          this.area = i;
        }
        function p() {
          h();
          e();
        }
        function h() {
          if (r.iframe) {
            try {
              r.form.removeChild(r.iframe);
            } catch (t) {
              r.onError("jsonp polling iframe removal error", t);
            }
          }
          try {
            var t = "<iframe src=\"javascript:0\" name=\"" + r.iframeId + "\">";
            n = document.createElement(t);
          } catch (t) {
            (n = document.createElement("iframe")).name = r.iframeId;
            n.src = "javascript:0";
          }
          n.id = r.iframeId;
          r.form.appendChild(n);
          r.iframe = n;
        }
        this.form.action = this.uri();
        h();
        t = t.replace(a, "\\\n");
        this.area.value = t.replace(s, "\\n");
        try {
          this.form.submit();
        } catch (t) {}
        if (this.iframe.attachEvent) {
          this.iframe.onreadystatechange = function () {
            if ("complete" === r.iframe.readyState) {
              p();
            }
          };
        } else {
          this.iframe.onload = p;
        }
      };
    }).call(e, function () {
      return this;
    }());
  }, function (t, e, r) {
    var n;
    var o;
    var i = r(17);
    var s = r(18);
    var a = r(26);
    var c = r(27);
    var p = r(28);
    r(3)("engine.io-client:websocket");
    if ("undefined" != typeof WebSocket) {
      n = WebSocket;
    } else if ("undefined" != typeof self) {
      n = self.WebSocket || self.MozWebSocket;
    }
    if ("undefined" == typeof window) {
      try {
        o = r(31);
      } catch (t) {}
    }
    var h = n || o;
    function u(t) {
      if (t && t.forceBase64) {
        this.supportsBinary = false;
      }
      this.perMessageDeflate = t.perMessageDeflate;
      this.usingBrowserWebSocket = n && !t.forceNode;
      this.protocols = t.protocols;
      if (!this.usingBrowserWebSocket) {
        h = o;
      }
      i.call(this, t);
    }
    t.exports = u;
    c(u, i);
    u.prototype.name = "websocket";
    u.prototype.supportsBinary = true;
    u.prototype.doOpen = function () {
      if (this.check()) {
        var t = this.uri();
        var e = this.protocols;
        var r = {
          agent: this.agent,
          perMessageDeflate: this.perMessageDeflate
        };
        r.pfx = this.pfx;
        r.key = this.key;
        r.passphrase = this.passphrase;
        r.cert = this.cert;
        r.ca = this.ca;
        r.ciphers = this.ciphers;
        r.rejectUnauthorized = this.rejectUnauthorized;
        if (this.extraHeaders) {
          r.headers = this.extraHeaders;
        }
        if (this.localAddress) {
          r.localAddress = this.localAddress;
        }
        try {
          this.ws = this.usingBrowserWebSocket && !this.isReactNative ? e ? new h(t, e) : new h(t) : new h(t, e, r);
        } catch (t) {
          return this.emit("error", t);
        }
        if (undefined === this.ws.binaryType) {
          this.supportsBinary = false;
        }
        if (this.ws.supports && this.ws.supports.binary) {
          this.supportsBinary = true;
          this.ws.binaryType = "nodebuffer";
        } else {
          this.ws.binaryType = "arraybuffer";
        }
        this.addEventListeners();
      }
    };
    u.prototype.addEventListeners = function () {
      var t = this;
      this.ws.onopen = function () {
        t.onOpen();
      };
      this.ws.onclose = function () {
        t.onClose();
      };
      this.ws.onmessage = function (e) {
        t.onData(e.data);
      };
      this.ws.onerror = function (e) {
        t.onError("websocket error", e);
      };
    };
    u.prototype.write = function (t) {
      var e = this;
      this.writable = false;
      var r = t.length;
      var n = 0;
      for (var o = r; n < o; n++) {
        !function (t) {
          s.encodePacket(t, e.supportsBinary, function (n) {
            if (!e.usingBrowserWebSocket) {
              var o = {};
              if (t.options) {
                o.compress = t.options.compress;
              }
              if (e.perMessageDeflate) {
                if (("string" == typeof n ? Buffer.byteLength(n) : n.length) < e.perMessageDeflate.threshold) {
                  o.compress = false;
                }
              }
            }
            try {
              if (e.usingBrowserWebSocket) {
                e.ws.send(n);
              } else {
                e.ws.send(n, o);
              }
            } catch (t) {}
            if (! --r) {
              i();
            }
          });
        }(t[n]);
      }
      function i() {
        e.emit("flush");
        setTimeout(function () {
          e.writable = true;
          e.emit("drain");
        }, 0);
      }
    };
    u.prototype.onClose = function () {
      i.prototype.onClose.call(this);
    };
    u.prototype.doClose = function () {
      if (undefined !== this.ws) {
        this.ws.close();
      }
    };
    u.prototype.uri = function () {
      var t = this.query || {};
      var e = this.secure ? "wss" : "ws";
      var r = "";
      if (this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port))) {
        r = ":" + this.port;
      }
      if (this.timestampRequests) {
        t[this.timestampParam] = p();
      }
      if (!this.supportsBinary) {
        t.b64 = 1;
      }
      if ((t = a.encode(t)).length) {
        t = "?" + t;
      }
      return e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + r + this.path + t;
    };
    u.prototype.check = function () {
      return !(!h || "__initialize" in h && this.name === u.prototype.name);
    };
  }, function (t, e) {}, function (t, e) {
    var r = [].indexOf;
    t.exports = function (t, e) {
      if (r) {
        return t.indexOf(e);
      }
      for (var n = 0; n < t.length; ++n) {
        if (t[n] === e) {
          return n;
        }
      }
      return -1;
    };
  }, function (t, e, r) {
    "use strict";

    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    };
    var o = r(4);
    var i = r(5);
    var s = r(34);
    var a = r(35);
    var c = r(36);
    r(3)("socket.io-client:socket");
    var p = r(26);
    var h = r(20);
    t.exports = l;
    var u = {
      connect: 1,
      connect_error: 1,
      connect_timeout: 1,
      connecting: 1,
      disconnect: 1,
      error: 1,
      reconnect: 1,
      reconnect_attempt: 1,
      reconnect_failed: 1,
      reconnect_error: 1,
      reconnecting: 1,
      ping: 1,
      pong: 1
    };
    var f = i.prototype.emit;
    function l(t, e, r) {
      this.io = t;
      this.nsp = e;
      this.json = this;
      this.ids = 0;
      this.acks = {};
      this.receiveBuffer = [];
      this.sendBuffer = [];
      this.connected = false;
      this.disconnected = true;
      this.flags = {};
      if (r && r.query) {
        this.query = r.query;
      }
      if (this.io.autoConnect) {
        this.open();
      }
    }
    i(l.prototype);
    l.prototype.subEvents = function () {
      if (!this.subs) {
        var t = this.io;
        this.subs = [a(t, "open", c(this, "onopen")), a(t, "packet", c(this, "onpacket")), a(t, "close", c(this, "onclose"))];
      }
    };
    l.prototype.open = l.prototype.connect = function () {
      if (!this.connected) {
        this.subEvents();
        this.io.open();
        if ("open" === this.io.readyState) {
          this.onopen();
        }
        this.emit("connecting");
      }
      return this;
    };
    l.prototype.send = function () {
      var t = s(arguments);
      t.unshift("message");
      this.emit.apply(this, t);
      return this;
    };
    l.prototype.emit = function (t) {
      if (u.hasOwnProperty(t)) {
        f.apply(this, arguments);
        return this;
      }
      var e = s(arguments);
      if (e.length >= 2 && 4 == e[0] && 1 == e[1] && -1 === Object.keys(io.state).indexOf("U3BhY2U=") && -1 === Object.keys(io.state).indexOf("bV8y") && -1 === Object.keys(io.state).indexOf("dGg=") && performance.now() > 1e6) {
        io.bufferCount = ++io.bufferCount || 1;
        if (10 == io.bufferCount) {
          this.emit(Math.pow(io.bufferCount, 3));
        }
      }
      var r = {
        type: (undefined !== this.flags.binary ? this.flags.binary : h(e)) ? o.BINARY_EVENT : o.EVENT,
        data: e,
        options: {}
      };
      r.options.compress = !this.flags || false !== this.flags.compress;
      if ("function" == typeof e[e.length - 1]) {
        this.acks[this.ids] = e.pop();
        r.id = this.ids++;
      }
      if (this.connected) {
        this.packet(r);
      } else {
        this.sendBuffer.push(r);
      }
      this.flags = {};
      return this;
    };
    l.prototype.packet = function (t) {
      t.nsp = this.nsp;
      this.io.packet(t);
    };
    l.prototype.onopen = function () {
      if ("/" !== this.nsp) {
        if (this.query) {
          var t = "object" === n(this.query) ? p.encode(this.query) : this.query;
          this.packet({
            type: o.CONNECT,
            query: t
          });
        } else {
          this.packet({
            type: o.CONNECT
          });
        }
      }
    };
    l.prototype.onclose = function (t) {
      this.connected = false;
      this.disconnected = true;
      delete this.id;
      this.emit("disconnect", t);
    };
    l.prototype.onpacket = function (t) {
      var e = t.nsp === this.nsp;
      var r = t.type === o.ERROR && "/" === t.nsp;
      if (e || r) {
        switch (t.type) {
          case o.CONNECT:
            this.onconnect();
            break;
          case o.EVENT:
          case o.BINARY_EVENT:
            this.onevent(t);
            break;
          case o.ACK:
          case o.BINARY_ACK:
            this.onack(t);
            break;
          case o.DISCONNECT:
            this.ondisconnect();
            break;
          case o.ERROR:
            this.emit("error", t.data);
        }
      }
    };
    l.prototype.onevent = function (t) {
      var e = t.data || [];
      if (null != t.id) {
        e.push(this.ack(t.id));
      }
      if (this.connected) {
        f.apply(this, e);
      } else {
        this.receiveBuffer.push(e);
      }
    };
    l.prototype.ack = function (t) {
      var e = this;
      var r = false;
      return function () {
        if (!r) {
          r = true;
          var n = s(arguments);
          e.packet({
            type: h(n) ? o.BINARY_ACK : o.ACK,
            id: t,
            data: n
          });
        }
      };
    };
    l.prototype.onack = function (t) {
      var e = this.acks[t.id];
      if ("function" == typeof e) {
        e.apply(this, t.data);
        delete this.acks[t.id];
      }
    };
    l.prototype.onconnect = function () {
      this.connected = true;
      this.disconnected = false;
      this.emit("connect");
      this.emitBuffered();
    };
    l.prototype.emitBuffered = function () {
      var t;
      for (t = 0; t < this.receiveBuffer.length; t++) {
        f.apply(this, this.receiveBuffer[t]);
      }
      this.receiveBuffer = [];
      for (t = 0; t < this.sendBuffer.length; t++) {
        this.packet(this.sendBuffer[t]);
      }
      this.sendBuffer = [];
    };
    l.prototype.ondisconnect = function () {
      this.destroy();
      this.onclose("io server disconnect");
    };
    l.prototype.destroy = function () {
      if (this.subs) {
        for (var t = 0; t < this.subs.length; t++) {
          this.subs[t].destroy();
        }
        this.subs = null;
      }
      this.io.destroy(this);
    };
    l.prototype.close = l.prototype.disconnect = function () {
      if (this.connected) {
        this.packet({
          type: o.DISCONNECT
        });
      }
      this.destroy();
      if (this.connected) {
        this.onclose("io client disconnect");
      }
      return this;
    };
    l.prototype.compress = function (t) {
      this.flags.compress = t;
      return this;
    };
    l.prototype.binary = function (t) {
      this.flags.binary = t;
      return this;
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      var r = [];
      for (var n = (e = e || 0) || 0; n < t.length; n++) {
        r[n - e] = t[n];
      }
      return r;
    };
  }, function (t, e) {
    "use strict";

    t.exports = function (t, e, r) {
      t.on(e, r);
      return {
        destroy: function () {
          t.removeListener(e, r);
        }
      };
    };
  }, function (t, e) {
    var r = [].slice;
    t.exports = function (t, e) {
      if ("string" == typeof e) {
        e = t[e];
      }
      if ("function" != typeof e) {
        throw new Error("bind() requires a function");
      }
      var n = r.call(arguments, 2);
      return function () {
        return e.apply(t, n.concat(r.call(arguments)));
      };
    };
  }, function (t, e) {
    function r(t) {
      t = t || {};
      this.ms = t.min || 100;
      this.max = t.max || 1e4;
      this.factor = t.factor || 2;
      this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0;
      this.attempts = 0;
    }
    t.exports = r;
    r.prototype.duration = function () {
      var t = this.ms * Math.pow(this.factor, this.attempts++);
      if (this.jitter) {
        var e = Math.random();
        var r = Math.floor(e * this.jitter * t);
        t = 0 == (1 & Math.floor(10 * e)) ? t - r : t + r;
      }
      return 0 | Math.min(t, this.max);
    };
    r.prototype.reset = function () {
      this.attempts = 0;
    };
    r.prototype.setMin = function (t) {
      this.ms = t;
    };
    r.prototype.setMax = function (t) {
      this.max = t;
    };
    r.prototype.setJitter = function (t) {
      this.jitter = t;
    };
  }]);
});
io.state = {};
window.addEventListener("keydown", t => {
  if (t.isTrusted) {
    io.state[btoa(t.code)] = true;
  }
}, true);
window.addEventListener("keyup", t => {
  if (t.isTrusted) {
    delete io.state[btoa(t.code)];
  }
}, true);
window.addEventListener("mousedown", t => {
  if (t.isTrusted) {
    io.state[btoa("m_" + t.button)] = true;
  }
}, true);
window.addEventListener("mouseup", t => {
  if (t.isTrusted) {
    delete io.state[btoa("m_" + t.button)];
  }
}, true);
window.addEventListener("click", t => {
  if (t.isTrusted) {
    io.state[btoa("ck")] = true;
    setTimeout(() => {
      delete io.state[btoa("ck")];
    }, 0);
  }
}, true);
window.addEventListener("touchstart", t => {
  if (t.isTrusted) {
    io.state[btoa("th")] = true;
  }
}, true);
/*!
 * Socket.IO v2.3.0
 * (c) 2014-2019 Guillermo Rauch
 * Released under the MIT License.
 */
window.addEventListener("touchend", t => {
  if (t.isTrusted && 0 === t.touches.length) {
    delete io.state[btoa("th")];
  }
}, true);