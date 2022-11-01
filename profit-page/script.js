var zr = Object.defineProperty;
var qr = (e, t, n) =>
  t in e
    ? zr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var bs = (e, t, n) => (qr(e, typeof t != 'symbol' ? t + '' : t, n), n);
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerpolicy && (o.referrerPolicy = r.referrerpolicy),
      r.crossorigin === 'use-credentials'
        ? (o.credentials = 'include')
        : r.crossorigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = n(r);
    fetch(r.href, o);
  }
})();
function qn(e, t) {
  const n = Object.create(null),
    s = e.split(',');
  for (let r = 0; r < s.length; r++) n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const Jr =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Yr = qn(Jr);
function Js(e) {
  return !!e || e === '';
}
function Jn(e) {
  if (R(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = ie(s) ? Qr(s) : Jn(s);
      if (r) for (const o in r) t[o] = r[o];
    }
    return t;
  } else {
    if (ie(e)) return e;
    if (ne(e)) return e;
  }
}
const Xr = /;(?![^(]*\))/g,
  Zr = /:(.+)/;
function Qr(e) {
  const t = {};
  return (
    e.split(Xr).forEach((n) => {
      if (n) {
        const s = n.split(Zr);
        s.length > 1 && (t[s[0].trim()] = s[1].trim());
      }
    }),
    t
  );
}
function it(e) {
  let t = '';
  if (ie(e)) t = e;
  else if (R(e))
    for (let n = 0; n < e.length; n++) {
      const s = it(e[n]);
      s && (t += s + ' ');
    }
  else if (ne(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
function Gr(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++) n = Wt(e[s], t[s]);
  return n;
}
function Wt(e, t) {
  if (e === t) return !0;
  let n = ms(e),
    s = ms(t);
  if (n || s) return n && s ? e.getTime() === t.getTime() : !1;
  if (((n = $t(e)), (s = $t(t)), n || s)) return e === t;
  if (((n = R(e)), (s = R(t)), n || s)) return n && s ? Gr(e, t) : !1;
  if (((n = ne(e)), (s = ne(t)), n || s)) {
    if (!n || !s) return !1;
    const r = Object.keys(e).length,
      o = Object.keys(t).length;
    if (r !== o) return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i),
        u = t.hasOwnProperty(i);
      if ((l && !u) || (!l && u) || !Wt(e[i], t[i])) return !1;
    }
  }
  return String(e) === String(t);
}
function Yn(e, t) {
  return e.findIndex((n) => Wt(n, t));
}
const je = (e) =>
    ie(e)
      ? e
      : e == null
      ? ''
      : R(e) || (ne(e) && (e.toString === Zs || !k(e.toString)))
      ? JSON.stringify(e, Ys, 2)
      : String(e),
  Ys = (e, t) =>
    t && t.__v_isRef
      ? Ys(e, t.value)
      : yt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, r]) => ((n[`${s} =>`] = r), n),
            {}
          ),
        }
      : Et(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : ne(t) && !R(t) && !Qs(t)
      ? String(t)
      : t,
  q = {},
  mt = [],
  Ie = () => {},
  eo = () => !1,
  to = /^on[^a-z]/,
  dn = (e) => to.test(e),
  Xn = (e) => e.startsWith('onUpdate:'),
  ae = Object.assign,
  Zn = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  no = Object.prototype.hasOwnProperty,
  U = (e, t) => no.call(e, t),
  R = Array.isArray,
  yt = (e) => Vt(e) === '[object Map]',
  Et = (e) => Vt(e) === '[object Set]',
  ms = (e) => Vt(e) === '[object Date]',
  k = (e) => typeof e == 'function',
  ie = (e) => typeof e == 'string',
  $t = (e) => typeof e == 'symbol',
  ne = (e) => e !== null && typeof e == 'object',
  Xs = (e) => ne(e) && k(e.then) && k(e.catch),
  Zs = Object.prototype.toString,
  Vt = (e) => Zs.call(e),
  so = (e) => Vt(e).slice(8, -1),
  Qs = (e) => Vt(e) === '[object Object]',
  Qn = (e) =>
    ie(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  en = qn(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  pn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  ro = /-(\w)/g,
  xt = pn((e) => e.replace(ro, (t, n) => (n ? n.toUpperCase() : ''))),
  oo = /\B([A-Z])/g,
  vt = pn((e) => e.replace(oo, '-$1').toLowerCase()),
  Gs = pn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  vn = pn((e) => (e ? `on${Gs(e)}` : '')),
  Lt = (e, t) => !Object.is(e, t),
  tn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  on = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  ln = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let ys;
const io = () =>
  ys ||
  (ys =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {});
let ke;
class lo {
  constructor(t = !1) {
    (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      !t &&
        ke &&
        ((this.parent = ke),
        (this.index = (ke.scopes || (ke.scopes = [])).push(this) - 1));
  }
  run(t) {
    if (this.active) {
      const n = ke;
      try {
        return (ke = this), t();
      } finally {
        ke = n;
      }
    }
  }
  on() {
    ke = this;
  }
  off() {
    ke = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      this.active = !1;
    }
  }
}
function co(e, t = ke) {
  t && t.active && t.effects.push(e);
}
const Gn = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  er = (e) => (e.w & Ge) > 0,
  tr = (e) => (e.n & Ge) > 0,
  uo = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Ge;
  },
  fo = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let s = 0; s < t.length; s++) {
        const r = t[s];
        er(r) && !tr(r) ? r.delete(e) : (t[n++] = r),
          (r.w &= ~Ge),
          (r.n &= ~Ge);
      }
      t.length = n;
    }
  },
  Rn = new WeakMap();
let Rt = 0,
  Ge = 1;
const Fn = 30;
let Ae;
const ct = Symbol(''),
  Pn = Symbol('');
class es {
  constructor(t, n = null, s) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      co(this, s);
  }
  run() {
    if (!this.active) return this.fn();
    let t = Ae,
      n = Ze;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = Ae),
        (Ae = this),
        (Ze = !0),
        (Ge = 1 << ++Rt),
        Rt <= Fn ? uo(this) : _s(this),
        this.fn()
      );
    } finally {
      Rt <= Fn && fo(this),
        (Ge = 1 << --Rt),
        (Ae = this.parent),
        (Ze = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Ae === this
      ? (this.deferStop = !0)
      : this.active &&
        (_s(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function _s(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let Ze = !0;
const nr = [];
function jt() {
  nr.push(Ze), (Ze = !1);
}
function At() {
  const e = nr.pop();
  Ze = e === void 0 ? !0 : e;
}
function we(e, t, n) {
  if (Ze && Ae) {
    let s = Rn.get(e);
    s || Rn.set(e, (s = new Map()));
    let r = s.get(n);
    r || s.set(n, (r = Gn())), sr(r);
  }
}
function sr(e, t) {
  let n = !1;
  Rt <= Fn ? tr(e) || ((e.n |= Ge), (n = !er(e))) : (n = !e.has(Ae)),
    n && (e.add(Ae), Ae.deps.push(e));
}
function We(e, t, n, s, r, o) {
  const i = Rn.get(e);
  if (!i) return;
  let l = [];
  if (t === 'clear') l = [...i.values()];
  else if (n === 'length' && R(e))
    i.forEach((u, a) => {
      (a === 'length' || a >= s) && l.push(u);
    });
  else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case 'add':
        R(e)
          ? Qn(n) && l.push(i.get('length'))
          : (l.push(i.get(ct)), yt(e) && l.push(i.get(Pn)));
        break;
      case 'delete':
        R(e) || (l.push(i.get(ct)), yt(e) && l.push(i.get(Pn)));
        break;
      case 'set':
        yt(e) && l.push(i.get(ct));
        break;
    }
  if (l.length === 1) l[0] && Mn(l[0]);
  else {
    const u = [];
    for (const a of l) a && u.push(...a);
    Mn(Gn(u));
  }
}
function Mn(e, t) {
  const n = R(e) ? e : [...e];
  for (const s of n) s.computed && ws(s);
  for (const s of n) s.computed || ws(s);
}
function ws(e, t) {
  (e !== Ae || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const ao = qn('__proto__,__v_isRef,__isVue'),
  rr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter($t)
  ),
  po = ts(),
  ho = ts(!1, !0),
  go = ts(!0),
  xs = bo();
function bo() {
  const e = {};
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const s = B(this);
        for (let o = 0, i = this.length; o < i; o++) we(s, 'get', o + '');
        const r = s[t](...n);
        return r === -1 || r === !1 ? s[t](...n.map(B)) : r;
      };
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        jt();
        const s = B(this)[t].apply(this, n);
        return At(), s;
      };
    }),
    e
  );
}
function ts(e = !1, t = !1) {
  return function (s, r, o) {
    if (r === '__v_isReactive') return !e;
    if (r === '__v_isReadonly') return e;
    if (r === '__v_isShallow') return t;
    if (r === '__v_raw' && o === (e ? (t ? Fo : ur) : t ? cr : lr).get(s))
      return s;
    const i = R(s);
    if (!e && i && U(xs, r)) return Reflect.get(xs, r, o);
    const l = Reflect.get(s, r, o);
    return ($t(r) ? rr.has(r) : ao(r)) || (e || we(s, 'get', r), t)
      ? l
      : fe(l)
      ? i && Qn(r)
        ? l
        : l.value
      : ne(l)
      ? e
        ? fr(l)
        : Be(l)
      : l;
  };
}
const mo = or(),
  yo = or(!0);
function or(e = !1) {
  return function (n, s, r, o) {
    let i = n[s];
    if (Nt(i) && fe(i) && !fe(r)) return !1;
    if (
      !e &&
      !Nt(r) &&
      (kn(r) || ((r = B(r)), (i = B(i))), !R(n) && fe(i) && !fe(r))
    )
      return (i.value = r), !0;
    const l = R(n) && Qn(s) ? Number(s) < n.length : U(n, s),
      u = Reflect.set(n, s, r, o);
    return (
      n === B(o) && (l ? Lt(r, i) && We(n, 'set', s, r) : We(n, 'add', s, r)), u
    );
  };
}
function _o(e, t) {
  const n = U(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && We(e, 'delete', t, void 0), s;
}
function wo(e, t) {
  const n = Reflect.has(e, t);
  return (!$t(t) || !rr.has(t)) && we(e, 'has', t), n;
}
function xo(e) {
  return we(e, 'iterate', R(e) ? 'length' : ct), Reflect.ownKeys(e);
}
const ir = { get: po, set: mo, deleteProperty: _o, has: wo, ownKeys: xo },
  Oo = {
    get: go,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  Co = ae({}, ir, { get: ho, set: yo }),
  ns = (e) => e,
  hn = (e) => Reflect.getPrototypeOf(e);
function qt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = B(e),
    o = B(t);
  n || (t !== o && we(r, 'get', t), we(r, 'get', o));
  const { has: i } = hn(r),
    l = s ? ns : n ? os : Ht;
  if (i.call(r, t)) return l(e.get(t));
  if (i.call(r, o)) return l(e.get(o));
  e !== r && e.get(t);
}
function Jt(e, t = !1) {
  const n = this.__v_raw,
    s = B(n),
    r = B(e);
  return (
    t || (e !== r && we(s, 'has', e), we(s, 'has', r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  );
}
function Yt(e, t = !1) {
  return (
    (e = e.__v_raw), !t && we(B(e), 'iterate', ct), Reflect.get(e, 'size', e)
  );
}
function Os(e) {
  e = B(e);
  const t = B(this);
  return hn(t).has.call(t, e) || (t.add(e), We(t, 'add', e, e)), this;
}
function Cs(e, t) {
  t = B(t);
  const n = B(this),
    { has: s, get: r } = hn(n);
  let o = s.call(n, e);
  o || ((e = B(e)), (o = s.call(n, e)));
  const i = r.call(n, e);
  return (
    n.set(e, t), o ? Lt(t, i) && We(n, 'set', e, t) : We(n, 'add', e, t), this
  );
}
function Es(e) {
  const t = B(this),
    { has: n, get: s } = hn(t);
  let r = n.call(t, e);
  r || ((e = B(e)), (r = n.call(t, e))), s && s.call(t, e);
  const o = t.delete(e);
  return r && We(t, 'delete', e, void 0), o;
}
function vs() {
  const e = B(this),
    t = e.size !== 0,
    n = e.clear();
  return t && We(e, 'clear', void 0, void 0), n;
}
function Xt(e, t) {
  return function (s, r) {
    const o = this,
      i = o.__v_raw,
      l = B(i),
      u = t ? ns : e ? os : Ht;
    return (
      !e && we(l, 'iterate', ct), i.forEach((a, b) => s.call(r, u(a), u(b), o))
    );
  };
}
function Zt(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      o = B(r),
      i = yt(o),
      l = e === 'entries' || (e === Symbol.iterator && i),
      u = e === 'keys' && i,
      a = r[e](...s),
      b = n ? ns : t ? os : Ht;
    return (
      !t && we(o, 'iterate', u ? Pn : ct),
      {
        next() {
          const { value: w, done: E } = a.next();
          return E
            ? { value: w, done: E }
            : { value: l ? [b(w[0]), b(w[1])] : b(w), done: E };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function qe(e) {
  return function (...t) {
    return e === 'delete' ? !1 : this;
  };
}
function Eo() {
  const e = {
      get(o) {
        return qt(this, o);
      },
      get size() {
        return Yt(this);
      },
      has: Jt,
      add: Os,
      set: Cs,
      delete: Es,
      clear: vs,
      forEach: Xt(!1, !1),
    },
    t = {
      get(o) {
        return qt(this, o, !1, !0);
      },
      get size() {
        return Yt(this);
      },
      has: Jt,
      add: Os,
      set: Cs,
      delete: Es,
      clear: vs,
      forEach: Xt(!1, !0),
    },
    n = {
      get(o) {
        return qt(this, o, !0);
      },
      get size() {
        return Yt(this, !0);
      },
      has(o) {
        return Jt.call(this, o, !0);
      },
      add: qe('add'),
      set: qe('set'),
      delete: qe('delete'),
      clear: qe('clear'),
      forEach: Xt(!0, !1),
    },
    s = {
      get(o) {
        return qt(this, o, !0, !0);
      },
      get size() {
        return Yt(this, !0);
      },
      has(o) {
        return Jt.call(this, o, !0);
      },
      add: qe('add'),
      set: qe('set'),
      delete: qe('delete'),
      clear: qe('clear'),
      forEach: Xt(!0, !0),
    };
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((o) => {
      (e[o] = Zt(o, !1, !1)),
        (n[o] = Zt(o, !0, !1)),
        (t[o] = Zt(o, !1, !0)),
        (s[o] = Zt(o, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [vo, jo, Ao, To] = Eo();
function ss(e, t) {
  const n = t ? (e ? To : Ao) : e ? jo : vo;
  return (s, r, o) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
      ? e
      : r === '__v_raw'
      ? s
      : Reflect.get(U(n, r) && r in s ? n : s, r, o);
}
const So = { get: ss(!1, !1) },
  Io = { get: ss(!1, !0) },
  Ro = { get: ss(!0, !1) },
  lr = new WeakMap(),
  cr = new WeakMap(),
  ur = new WeakMap(),
  Fo = new WeakMap();
function Po(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function Mo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Po(so(e));
}
function Be(e) {
  return Nt(e) ? e : rs(e, !1, ir, So, lr);
}
function ko(e) {
  return rs(e, !1, Co, Io, cr);
}
function fr(e) {
  return rs(e, !0, Oo, Ro, ur);
}
function rs(e, t, n, s, r) {
  if (!ne(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = r.get(e);
  if (o) return o;
  const i = Mo(e);
  if (i === 0) return e;
  const l = new Proxy(e, i === 2 ? s : n);
  return r.set(e, l), l;
}
function _t(e) {
  return Nt(e) ? _t(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Nt(e) {
  return !!(e && e.__v_isReadonly);
}
function kn(e) {
  return !!(e && e.__v_isShallow);
}
function ar(e) {
  return _t(e) || Nt(e);
}
function B(e) {
  const t = e && e.__v_raw;
  return t ? B(t) : e;
}
function dr(e) {
  return on(e, '__v_skip', !0), e;
}
const Ht = (e) => (ne(e) ? Be(e) : e),
  os = (e) => (ne(e) ? fr(e) : e);
function pr(e) {
  Ze && Ae && ((e = B(e)), sr(e.dep || (e.dep = Gn())));
}
function hr(e, t) {
  (e = B(e)), e.dep && Mn(e.dep);
}
function fe(e) {
  return !!(e && e.__v_isRef === !0);
}
function $o(e) {
  return Lo(e, !1);
}
function Lo(e, t) {
  return fe(e) ? e : new No(e, t);
}
class No {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : B(t)),
      (this._value = n ? t : Ht(t));
  }
  get value() {
    return pr(this), this._value;
  }
  set value(t) {
    (t = this.__v_isShallow ? t : B(t)),
      Lt(t, this._rawValue) &&
        ((this._rawValue = t),
        (this._value = this.__v_isShallow ? t : Ht(t)),
        hr(this));
  }
}
function ht(e) {
  return fe(e) ? e.value : e;
}
const Ho = {
  get: (e, t, n) => ht(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return fe(r) && !fe(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function gr(e) {
  return _t(e) ? e : new Proxy(e, Ho);
}
class Uo {
  constructor(t, n, s, r) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._dirty = !0),
      (this.effect = new es(t, () => {
        this._dirty || ((this._dirty = !0), hr(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = B(this);
    return (
      pr(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
function Do(e, t, n = !1) {
  let s, r;
  const o = k(e);
  return (
    o ? ((s = e), (r = Ie)) : ((s = e.get), (r = e.set)),
    new Uo(s, r, o || !r, n)
  );
}
function Qe(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    gn(o, t, n);
  }
  return r;
}
function Ce(e, t, n, s) {
  if (k(e)) {
    const o = Qe(e, t, n, s);
    return (
      o &&
        Xs(o) &&
        o.catch((i) => {
          gn(i, t, n);
        }),
      o
    );
  }
  const r = [];
  for (let o = 0; o < e.length; o++) r.push(Ce(e[o], t, n, s));
  return r;
}
function gn(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy,
      l = n;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let b = 0; b < a.length; b++) if (a[b](e, i, l) === !1) return;
      }
      o = o.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Qe(u, null, 10, [e, i, l]);
      return;
    }
  }
  Bo(e, n, r, s);
}
function Bo(e, t, n, s = !0) {
  console.error(e);
}
let cn = !1,
  $n = !1;
const _e = [];
let Ke = 0;
const Pt = [];
let Ft = null,
  gt = 0;
const Mt = [];
let Je = null,
  bt = 0;
const br = Promise.resolve();
let is = null,
  Ln = null;
function Ko(e) {
  const t = is || br;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Wo(e) {
  let t = Ke + 1,
    n = _e.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1;
    Ut(_e[s]) < e ? (t = s + 1) : (n = s);
  }
  return t;
}
function mr(e) {
  (!_e.length || !_e.includes(e, cn && e.allowRecurse ? Ke + 1 : Ke)) &&
    e !== Ln &&
    (e.id == null ? _e.push(e) : _e.splice(Wo(e.id), 0, e), yr());
}
function yr() {
  !cn && !$n && (($n = !0), (is = br.then(xr)));
}
function Vo(e) {
  const t = _e.indexOf(e);
  t > Ke && _e.splice(t, 1);
}
function _r(e, t, n, s) {
  R(e)
    ? n.push(...e)
    : (!t || !t.includes(e, e.allowRecurse ? s + 1 : s)) && n.push(e),
    yr();
}
function zo(e) {
  _r(e, Ft, Pt, gt);
}
function qo(e) {
  _r(e, Je, Mt, bt);
}
function bn(e, t = null) {
  if (Pt.length) {
    for (
      Ln = t, Ft = [...new Set(Pt)], Pt.length = 0, gt = 0;
      gt < Ft.length;
      gt++
    )
      Ft[gt]();
    (Ft = null), (gt = 0), (Ln = null), bn(e, t);
  }
}
function wr(e) {
  if ((bn(), Mt.length)) {
    const t = [...new Set(Mt)];
    if (((Mt.length = 0), Je)) {
      Je.push(...t);
      return;
    }
    for (Je = t, Je.sort((n, s) => Ut(n) - Ut(s)), bt = 0; bt < Je.length; bt++)
      Je[bt]();
    (Je = null), (bt = 0);
  }
}
const Ut = (e) => (e.id == null ? 1 / 0 : e.id);
function xr(e) {
  ($n = !1), (cn = !0), bn(e), _e.sort((n, s) => Ut(n) - Ut(s));
  const t = Ie;
  try {
    for (Ke = 0; Ke < _e.length; Ke++) {
      const n = _e[Ke];
      n && n.active !== !1 && Qe(n, null, 14);
    }
  } finally {
    (Ke = 0),
      (_e.length = 0),
      wr(),
      (cn = !1),
      (is = null),
      (_e.length || Pt.length || Mt.length) && xr(e);
  }
}
function Jo(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || q;
  let r = n;
  const o = t.startsWith('update:'),
    i = o && t.slice(7);
  if (i && i in s) {
    const b = `${i === 'modelValue' ? 'model' : i}Modifiers`,
      { number: w, trim: E } = s[b] || q;
    E && (r = n.map((F) => F.trim())), w && (r = n.map(ln));
  }
  let l,
    u = s[(l = vn(t))] || s[(l = vn(xt(t)))];
  !u && o && (u = s[(l = vn(vt(t)))]), u && Ce(u, e, 6, r);
  const a = s[l + 'Once'];
  if (a) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), Ce(a, e, 6, r);
  }
}
function Or(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const o = e.emits;
  let i = {},
    l = !1;
  if (!k(e)) {
    const u = (a) => {
      const b = Or(a, t, !0);
      b && ((l = !0), ae(i, b));
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  return !o && !l
    ? (s.set(e, null), null)
    : (R(o) ? o.forEach((u) => (i[u] = null)) : ae(i, o), s.set(e, i), i);
}
function mn(e, t) {
  return !e || !dn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      U(e, t[0].toLowerCase() + t.slice(1)) || U(e, vt(t)) || U(e, t));
}
let Te = null,
  yn = null;
function un(e) {
  const t = Te;
  return (Te = e), (yn = (e && e.type.__scopeId) || null), t;
}
function Yo(e) {
  yn = e;
}
function Xo() {
  yn = null;
}
function Zo(e, t = Te, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && ks(-1);
    const o = un(t),
      i = e(...r);
    return un(o), s._d && ks(1), i;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function jn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: o,
    propsOptions: [i],
    slots: l,
    attrs: u,
    emit: a,
    render: b,
    renderCache: w,
    data: E,
    setupState: F,
    ctx: K,
    inheritAttrs: H,
  } = e;
  let M, L;
  const ge = un(e);
  try {
    if (n.shapeFlag & 4) {
      const G = r || s;
      (M = $e(b.call(G, G, w, o, F, E, K))), (L = u);
    } else {
      const G = t;
      (M = $e(
        G.length > 1 ? G(o, { attrs: u, slots: l, emit: a }) : G(o, null)
      )),
        (L = t.props ? u : Qo(u));
    }
  } catch (G) {
    (kt.length = 0), gn(G, e, 1), (M = Fe(Re));
  }
  let te = M;
  if (L && H !== !1) {
    const G = Object.keys(L),
      { shapeFlag: re } = te;
    G.length && re & 7 && (i && G.some(Xn) && (L = Go(L, i)), (te = et(te, L)));
  }
  return (
    n.dirs &&
      ((te = et(te)), (te.dirs = te.dirs ? te.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (te.transition = n.transition),
    (M = te),
    un(ge),
    M
  );
}
const Qo = (e) => {
    let t;
    for (const n in e)
      (n === 'class' || n === 'style' || dn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Go = (e, t) => {
    const n = {};
    for (const s in e) (!Xn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function ei(e, t, n) {
  const { props: s, children: r, component: o } = e,
    { props: i, children: l, patchFlag: u } = t,
    a = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && u >= 0) {
    if (u & 1024) return !0;
    if (u & 16) return s ? js(s, i, a) : !!i;
    if (u & 8) {
      const b = t.dynamicProps;
      for (let w = 0; w < b.length; w++) {
        const E = b[w];
        if (i[E] !== s[E] && !mn(a, E)) return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === i
      ? !1
      : s
      ? i
        ? js(s, i, a)
        : !0
      : !!i;
  return !1;
}
function js(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !mn(n, o)) return !0;
  }
  return !1;
}
function ti({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const ni = (e) => e.__isSuspense;
function si(e, t) {
  t && t.pendingBranch
    ? R(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : qo(e);
}
function ri(e, t) {
  if (ce) {
    let n = ce.provides;
    const s = ce.parent && ce.parent.provides;
    s === n && (n = ce.provides = Object.create(s)), (n[e] = t);
  }
}
function An(e, t, n = !1) {
  const s = ce || Te;
  if (s) {
    const r =
      s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && k(t) ? t.call(s.proxy) : t;
  }
}
const As = {};
function wt(e, t, n) {
  return Cr(e, t, n);
}
function Cr(
  e,
  t,
  { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = q
) {
  const l = ce;
  let u,
    a = !1,
    b = !1;
  if (
    (fe(e)
      ? ((u = () => e.value), (a = kn(e)))
      : _t(e)
      ? ((u = () => e), (s = !0))
      : R(e)
      ? ((b = !0),
        (a = e.some((L) => _t(L) || kn(L))),
        (u = () =>
          e.map((L) => {
            if (fe(L)) return L.value;
            if (_t(L)) return lt(L);
            if (k(L)) return Qe(L, l, 2);
          })))
      : k(e)
      ? t
        ? (u = () => Qe(e, l, 2))
        : (u = () => {
            if (!(l && l.isUnmounted)) return w && w(), Ce(e, l, 3, [E]);
          })
      : (u = Ie),
    t && s)
  ) {
    const L = u;
    u = () => lt(L());
  }
  let w,
    E = (L) => {
      w = M.onStop = () => {
        Qe(L, l, 4);
      };
    };
  if (Bt)
    return (E = Ie), t ? n && Ce(t, l, 3, [u(), b ? [] : void 0, E]) : u(), Ie;
  let F = b ? [] : As;
  const K = () => {
    if (!!M.active)
      if (t) {
        const L = M.run();
        (s || a || (b ? L.some((ge, te) => Lt(ge, F[te])) : Lt(L, F))) &&
          (w && w(), Ce(t, l, 3, [L, F === As ? void 0 : F, E]), (F = L));
      } else M.run();
  };
  K.allowRecurse = !!t;
  let H;
  r === 'sync'
    ? (H = K)
    : r === 'post'
    ? (H = () => be(K, l && l.suspense))
    : (H = () => zo(K));
  const M = new es(u, H);
  return (
    t
      ? n
        ? K()
        : (F = M.run())
      : r === 'post'
      ? be(M.run.bind(M), l && l.suspense)
      : M.run(),
    () => {
      M.stop(), l && l.scope && Zn(l.scope.effects, M);
    }
  );
}
function oi(e, t, n) {
  const s = this.proxy,
    r = ie(e) ? (e.includes('.') ? Er(s, e) : () => s[e]) : e.bind(s, s);
  let o;
  k(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = ce;
  Ot(this);
  const l = Cr(r, o.bind(s), n);
  return i ? Ot(i) : ut(), l;
}
function Er(e, t) {
  const n = t.split('.');
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
function lt(e, t) {
  if (!ne(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), fe(e))) lt(e.value, t);
  else if (R(e)) for (let n = 0; n < e.length; n++) lt(e[n], t);
  else if (Et(e) || yt(e))
    e.forEach((n) => {
      lt(n, t);
    });
  else if (Qs(e)) for (const n in e) lt(e[n], t);
  return e;
}
function ii() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    ls(() => {
      e.isMounted = !0;
    }),
    Tr(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Oe = [Function, Array],
  li = {
    name: 'BaseTransition',
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: Oe,
      onEnter: Oe,
      onAfterEnter: Oe,
      onEnterCancelled: Oe,
      onBeforeLeave: Oe,
      onLeave: Oe,
      onAfterLeave: Oe,
      onLeaveCancelled: Oe,
      onBeforeAppear: Oe,
      onAppear: Oe,
      onAfterAppear: Oe,
      onAppearCancelled: Oe,
    },
    setup(e, { slots: t }) {
      const n = qi(),
        s = ii();
      let r;
      return () => {
        const o = t.default && jr(t.default(), !0);
        if (!o || !o.length) return;
        let i = o[0];
        if (o.length > 1) {
          for (const H of o)
            if (H.type !== Re) {
              i = H;
              break;
            }
        }
        const l = B(e),
          { mode: u } = l;
        if (s.isLeaving) return Tn(i);
        const a = Ts(i);
        if (!a) return Tn(i);
        const b = Nn(a, l, s, n);
        Hn(a, b);
        const w = n.subTree,
          E = w && Ts(w);
        let F = !1;
        const { getTransitionKey: K } = a.type;
        if (K) {
          const H = K();
          r === void 0 ? (r = H) : H !== r && ((r = H), (F = !0));
        }
        if (E && E.type !== Re && (!rt(a, E) || F)) {
          const H = Nn(E, l, s, n);
          if ((Hn(E, H), u === 'out-in'))
            return (
              (s.isLeaving = !0),
              (H.afterLeave = () => {
                (s.isLeaving = !1), n.update();
              }),
              Tn(i)
            );
          u === 'in-out' &&
            a.type !== Re &&
            (H.delayLeave = (M, L, ge) => {
              const te = vr(s, E);
              (te[String(E.key)] = E),
                (M._leaveCb = () => {
                  L(), (M._leaveCb = void 0), delete b.delayedLeave;
                }),
                (b.delayedLeave = ge);
            });
        }
        return i;
      };
    },
  },
  ci = li;
function vr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || ((s = Object.create(null)), n.set(t.type, s)), s;
}
function Nn(e, t, n, s) {
  const {
      appear: r,
      mode: o,
      persisted: i = !1,
      onBeforeEnter: l,
      onEnter: u,
      onAfterEnter: a,
      onEnterCancelled: b,
      onBeforeLeave: w,
      onLeave: E,
      onAfterLeave: F,
      onLeaveCancelled: K,
      onBeforeAppear: H,
      onAppear: M,
      onAfterAppear: L,
      onAppearCancelled: ge,
    } = t,
    te = String(e.key),
    G = vr(n, e),
    re = (N, J) => {
      N && Ce(N, s, 9, J);
    },
    Le = (N, J) => {
      const ee = J[1];
      re(N, J),
        R(N) ? N.every((oe) => oe.length <= 1) && ee() : N.length <= 1 && ee();
    },
    Ne = {
      mode: o,
      persisted: i,
      beforeEnter(N) {
        let J = l;
        if (!n.isMounted)
          if (r) J = H || l;
          else return;
        N._leaveCb && N._leaveCb(!0);
        const ee = G[te];
        ee && rt(e, ee) && ee.el._leaveCb && ee.el._leaveCb(), re(J, [N]);
      },
      enter(N) {
        let J = u,
          ee = a,
          oe = b;
        if (!n.isMounted)
          if (r) (J = M || u), (ee = L || a), (oe = ge || b);
          else return;
        let me = !1;
        const Ee = (N._enterCb = (ft) => {
          me ||
            ((me = !0),
            ft ? re(oe, [N]) : re(ee, [N]),
            Ne.delayedLeave && Ne.delayedLeave(),
            (N._enterCb = void 0));
        });
        J ? Le(J, [N, Ee]) : Ee();
      },
      leave(N, J) {
        const ee = String(e.key);
        if ((N._enterCb && N._enterCb(!0), n.isUnmounting)) return J();
        re(w, [N]);
        let oe = !1;
        const me = (N._leaveCb = (Ee) => {
          oe ||
            ((oe = !0),
            J(),
            Ee ? re(K, [N]) : re(F, [N]),
            (N._leaveCb = void 0),
            G[ee] === e && delete G[ee]);
        });
        (G[ee] = e), E ? Le(E, [N, me]) : me();
      },
      clone(N) {
        return Nn(N, t, n, s);
      },
    };
  return Ne;
}
function Tn(e) {
  if (_n(e)) return (e = et(e)), (e.children = null), e;
}
function Ts(e) {
  return _n(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Hn(e, t) {
  e.shapeFlag & 6 && e.component
    ? Hn(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function jr(e, t = !1, n) {
  let s = [],
    r = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === se
      ? (i.patchFlag & 128 && r++, (s = s.concat(jr(i.children, t, l))))
      : (t || i.type !== Re) && s.push(l != null ? et(i, { key: l }) : i);
  }
  if (r > 1) for (let o = 0; o < s.length; o++) s[o].patchFlag = -2;
  return s;
}
const nn = (e) => !!e.type.__asyncLoader,
  _n = (e) => e.type.__isKeepAlive;
function ui(e, t) {
  Ar(e, 'a', t);
}
function fi(e, t) {
  Ar(e, 'da', t);
}
function Ar(e, t, n = ce) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((wn(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      _n(r.parent.vnode) && ai(s, t, n, r), (r = r.parent);
  }
}
function ai(e, t, n, s) {
  const r = wn(t, e, s, !0);
  cs(() => {
    Zn(s[t], r);
  }, n);
}
function wn(e, t, n = ce, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          jt(), Ot(n);
          const l = Ce(t, n, e, i);
          return ut(), At(), l;
        });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const Ve =
    (e) =>
    (t, n = ce) =>
      (!Bt || e === 'sp') && wn(e, t, n),
  di = Ve('bm'),
  ls = Ve('m'),
  pi = Ve('bu'),
  hi = Ve('u'),
  Tr = Ve('bum'),
  cs = Ve('um'),
  gi = Ve('sp'),
  bi = Ve('rtg'),
  mi = Ve('rtc');
function yi(e, t = ce) {
  wn('ec', e, t);
}
function Ue(e, t) {
  const n = Te;
  if (n === null) return e;
  const s = On(n) || n.proxy,
    r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, l, u, a = q] = t[o];
    k(i) && (i = { mounted: i, updated: i }),
      i.deep && lt(l),
      r.push({
        dir: i,
        instance: s,
        value: l,
        oldValue: void 0,
        arg: u,
        modifiers: a,
      });
  }
  return e;
}
function tt(e, t, n, s) {
  const r = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    o && (l.oldValue = o[i].value);
    let u = l.dir[s];
    u && (jt(), Ce(u, n, 8, [e.el, l, e, t]), At());
  }
}
const _i = Symbol();
function De(e, t, n, s) {
  let r;
  const o = n && n[s];
  if (R(e) || ie(e)) {
    r = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      r[i] = t(e[i], i, void 0, o && o[i]);
  } else if (typeof e == 'number') {
    r = new Array(e);
    for (let i = 0; i < e; i++) r[i] = t(i + 1, i, void 0, o && o[i]);
  } else if (ne(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (i, l) => t(i, l, void 0, o && o[l]));
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let l = 0, u = i.length; l < u; l++) {
        const a = i[l];
        r[l] = t(e[a], a, l, o && o[l]);
      }
    }
  else r = [];
  return n && (n[s] = r), r;
}
const Un = (e) => (e ? (Dr(e) ? On(e) || e.proxy : Un(e.parent)) : null),
  fn = ae(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Un(e.parent),
    $root: (e) => Un(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ir(e),
    $forceUpdate: (e) => e.f || (e.f = () => mr(e.update)),
    $nextTick: (e) => e.n || (e.n = Ko.bind(e.proxy)),
    $watch: (e) => oi.bind(e),
  }),
  wi = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: o,
        accessCache: i,
        type: l,
        appContext: u,
      } = e;
      let a;
      if (t[0] !== '$') {
        const F = i[t];
        if (F !== void 0)
          switch (F) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (s !== q && U(s, t)) return (i[t] = 1), s[t];
          if (r !== q && U(r, t)) return (i[t] = 2), r[t];
          if ((a = e.propsOptions[0]) && U(a, t)) return (i[t] = 3), o[t];
          if (n !== q && U(n, t)) return (i[t] = 4), n[t];
          Dn && (i[t] = 0);
        }
      }
      const b = fn[t];
      let w, E;
      if (b) return t === '$attrs' && we(e, 'get', t), b(e);
      if ((w = l.__cssModules) && (w = w[t])) return w;
      if (n !== q && U(n, t)) return (i[t] = 4), n[t];
      if (((E = u.config.globalProperties), U(E, t))) return E[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: o } = e;
      return r !== q && U(r, t)
        ? ((r[t] = n), !0)
        : s !== q && U(s, t)
        ? ((s[t] = n), !0)
        : U(e.props, t) || (t[0] === '$' && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: o,
        },
      },
      i
    ) {
      let l;
      return (
        !!n[i] ||
        (e !== q && U(e, i)) ||
        (t !== q && U(t, i)) ||
        ((l = o[0]) && U(l, i)) ||
        U(s, i) ||
        U(fn, i) ||
        U(r.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : U(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let Dn = !0;
function xi(e) {
  const t = Ir(e),
    n = e.proxy,
    s = e.ctx;
  (Dn = !1), t.beforeCreate && Ss(t.beforeCreate, e, 'bc');
  const {
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: u,
    inject: a,
    created: b,
    beforeMount: w,
    mounted: E,
    beforeUpdate: F,
    updated: K,
    activated: H,
    deactivated: M,
    beforeDestroy: L,
    beforeUnmount: ge,
    destroyed: te,
    unmounted: G,
    render: re,
    renderTracked: Le,
    renderTriggered: Ne,
    errorCaptured: N,
    serverPrefetch: J,
    expose: ee,
    inheritAttrs: oe,
    components: me,
    directives: Ee,
    filters: ft,
  } = t;
  if ((a && Oi(a, s, null, e.appContext.config.unwrapInjectedRef), i))
    for (const Z in i) {
      const W = i[Z];
      k(W) && (s[Z] = W.bind(n));
    }
  if (r) {
    const Z = r.call(n, n);
    ne(Z) && (e.data = Be(Z));
  }
  if (((Dn = !0), o))
    for (const Z in o) {
      const W = o[Z],
        xe = k(W) ? W.bind(n, n) : k(W.get) ? W.get.bind(n, n) : Ie,
        m = !k(W) && k(W.set) ? W.set.bind(n) : Ie,
        _ = Gi({ get: xe, set: m });
      Object.defineProperty(s, Z, {
        enumerable: !0,
        configurable: !0,
        get: () => _.value,
        set: (p) => (_.value = p),
      });
    }
  if (l) for (const Z in l) Sr(l[Z], s, n, Z);
  if (u) {
    const Z = k(u) ? u.call(n) : u;
    Reflect.ownKeys(Z).forEach((W) => {
      ri(W, Z[W]);
    });
  }
  b && Ss(b, e, 'c');
  function ue(Z, W) {
    R(W) ? W.forEach((xe) => Z(xe.bind(n))) : W && Z(W.bind(n));
  }
  if (
    (ue(di, w),
    ue(ls, E),
    ue(pi, F),
    ue(hi, K),
    ue(ui, H),
    ue(fi, M),
    ue(yi, N),
    ue(mi, Le),
    ue(bi, Ne),
    ue(Tr, ge),
    ue(cs, G),
    ue(gi, J),
    R(ee))
  )
    if (ee.length) {
      const Z = e.exposed || (e.exposed = {});
      ee.forEach((W) => {
        Object.defineProperty(Z, W, {
          get: () => n[W],
          set: (xe) => (n[W] = xe),
        });
      });
    } else e.exposed || (e.exposed = {});
  re && e.render === Ie && (e.render = re),
    oe != null && (e.inheritAttrs = oe),
    me && (e.components = me),
    Ee && (e.directives = Ee);
}
function Oi(e, t, n = Ie, s = !1) {
  R(e) && (e = Bn(e));
  for (const r in e) {
    const o = e[r];
    let i;
    ne(o)
      ? 'default' in o
        ? (i = An(o.from || r, o.default, !0))
        : (i = An(o.from || r))
      : (i = An(o)),
      fe(i) && s
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (l) => (i.value = l),
          })
        : (t[r] = i);
  }
}
function Ss(e, t, n) {
  Ce(R(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Sr(e, t, n, s) {
  const r = s.includes('.') ? Er(n, s) : () => n[s];
  if (ie(e)) {
    const o = t[e];
    k(o) && wt(r, o);
  } else if (k(e)) wt(r, e.bind(n));
  else if (ne(e))
    if (R(e)) e.forEach((o) => Sr(o, t, n, s));
    else {
      const o = k(e.handler) ? e.handler.bind(n) : t[e.handler];
      k(o) && wt(r, o, e);
    }
}
function Ir(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = o.get(t);
  let u;
  return (
    l
      ? (u = l)
      : !r.length && !n && !s
      ? (u = t)
      : ((u = {}), r.length && r.forEach((a) => an(u, a, i, !0)), an(u, t, i)),
    o.set(t, u),
    u
  );
}
function an(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && an(e, o, n, !0), r && r.forEach((i) => an(e, i, n, !0));
  for (const i in t)
    if (!(s && i === 'expose')) {
      const l = Ci[i] || (n && n[i]);
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Ci = {
  data: Is,
  props: st,
  emits: st,
  methods: st,
  computed: st,
  beforeCreate: de,
  created: de,
  beforeMount: de,
  mounted: de,
  beforeUpdate: de,
  updated: de,
  beforeDestroy: de,
  beforeUnmount: de,
  destroyed: de,
  unmounted: de,
  activated: de,
  deactivated: de,
  errorCaptured: de,
  serverPrefetch: de,
  components: st,
  directives: st,
  watch: vi,
  provide: Is,
  inject: Ei,
};
function Is(e, t) {
  return t
    ? e
      ? function () {
          return ae(
            k(e) ? e.call(this, this) : e,
            k(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Ei(e, t) {
  return st(Bn(e), Bn(t));
}
function Bn(e) {
  if (R(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function de(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function st(e, t) {
  return e ? ae(ae(Object.create(null), e), t) : t;
}
function vi(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ae(Object.create(null), e);
  for (const s in t) n[s] = de(e[s], t[s]);
  return n;
}
function ji(e, t, n, s = !1) {
  const r = {},
    o = {};
  on(o, xn, 1), (e.propsDefaults = Object.create(null)), Rr(e, t, r, o);
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0);
  n ? (e.props = s ? r : ko(r)) : e.type.props ? (e.props = r) : (e.props = o),
    (e.attrs = o);
}
function Ai(e, t, n, s) {
  const {
      props: r,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    l = B(r),
    [u] = e.propsOptions;
  let a = !1;
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const b = e.vnode.dynamicProps;
      for (let w = 0; w < b.length; w++) {
        let E = b[w];
        if (mn(e.emitsOptions, E)) continue;
        const F = t[E];
        if (u)
          if (U(o, E)) F !== o[E] && ((o[E] = F), (a = !0));
          else {
            const K = xt(E);
            r[K] = Kn(u, l, K, F, e, !1);
          }
        else F !== o[E] && ((o[E] = F), (a = !0));
      }
    }
  } else {
    Rr(e, t, r, o) && (a = !0);
    let b;
    for (const w in l)
      (!t || (!U(t, w) && ((b = vt(w)) === w || !U(t, b)))) &&
        (u
          ? n &&
            (n[w] !== void 0 || n[b] !== void 0) &&
            (r[w] = Kn(u, l, w, void 0, e, !0))
          : delete r[w]);
    if (o !== l)
      for (const w in o) (!t || (!U(t, w) && !0)) && (delete o[w], (a = !0));
  }
  a && We(e, 'set', '$attrs');
}
function Rr(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1,
    l;
  if (t)
    for (let u in t) {
      if (en(u)) continue;
      const a = t[u];
      let b;
      r && U(r, (b = xt(u)))
        ? !o || !o.includes(b)
          ? (n[b] = a)
          : ((l || (l = {}))[b] = a)
        : mn(e.emitsOptions, u) ||
          ((!(u in s) || a !== s[u]) && ((s[u] = a), (i = !0)));
    }
  if (o) {
    const u = B(n),
      a = l || q;
    for (let b = 0; b < o.length; b++) {
      const w = o[b];
      n[w] = Kn(r, u, w, a[w], e, !U(a, w));
    }
  }
  return i;
}
function Kn(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const l = U(i, 'default');
    if (l && s === void 0) {
      const u = i.default;
      if (i.type !== Function && k(u)) {
        const { propsDefaults: a } = r;
        n in a ? (s = a[n]) : (Ot(r), (s = a[n] = u.call(null, t)), ut());
      } else s = u;
    }
    i[0] &&
      (o && !l ? (s = !1) : i[1] && (s === '' || s === vt(n)) && (s = !0));
  }
  return s;
}
function Fr(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e);
  if (r) return r;
  const o = e.props,
    i = {},
    l = [];
  let u = !1;
  if (!k(e)) {
    const b = (w) => {
      u = !0;
      const [E, F] = Fr(w, t, !0);
      ae(i, E), F && l.push(...F);
    };
    !n && t.mixins.length && t.mixins.forEach(b),
      e.extends && b(e.extends),
      e.mixins && e.mixins.forEach(b);
  }
  if (!o && !u) return s.set(e, mt), mt;
  if (R(o))
    for (let b = 0; b < o.length; b++) {
      const w = xt(o[b]);
      Rs(w) && (i[w] = q);
    }
  else if (o)
    for (const b in o) {
      const w = xt(b);
      if (Rs(w)) {
        const E = o[b],
          F = (i[w] = R(E) || k(E) ? { type: E } : E);
        if (F) {
          const K = Ms(Boolean, F.type),
            H = Ms(String, F.type);
          (F[0] = K > -1),
            (F[1] = H < 0 || K < H),
            (K > -1 || U(F, 'default')) && l.push(w);
        }
      }
    }
  const a = [i, l];
  return s.set(e, a), a;
}
function Rs(e) {
  return e[0] !== '$';
}
function Fs(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? 'null' : '';
}
function Ps(e, t) {
  return Fs(e) === Fs(t);
}
function Ms(e, t) {
  return R(t) ? t.findIndex((n) => Ps(n, e)) : k(t) && Ps(t, e) ? 0 : -1;
}
const Pr = (e) => e[0] === '_' || e === '$stable',
  us = (e) => (R(e) ? e.map($e) : [$e(e)]),
  Ti = (e, t, n) => {
    if (t._n) return t;
    const s = Zo((...r) => us(t(...r)), n);
    return (s._c = !1), s;
  },
  Mr = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (Pr(r)) continue;
      const o = e[r];
      if (k(o)) t[r] = Ti(r, o, s);
      else if (o != null) {
        const i = us(o);
        t[r] = () => i;
      }
    }
  },
  kr = (e, t) => {
    const n = us(t);
    e.slots.default = () => n;
  },
  Si = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = B(t)), on(t, '_', n)) : Mr(t, (e.slots = {}));
    } else (e.slots = {}), t && kr(e, t);
    on(e.slots, xn, 1);
  },
  Ii = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let o = !0,
      i = q;
    if (s.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (o = !1)
          : (ae(r, t), !n && l === 1 && delete r._)
        : ((o = !t.$stable), Mr(t, r)),
        (i = t);
    } else t && (kr(e, t), (i = { default: 1 }));
    if (o) for (const l in r) !Pr(l) && !(l in i) && delete r[l];
  };
function $r() {
  return {
    app: null,
    config: {
      isNativeTag: eo,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Ri = 0;
function Fi(e, t) {
  return function (s, r = null) {
    k(s) || (s = Object.assign({}, s)), r != null && !ne(r) && (r = null);
    const o = $r(),
      i = new Set();
    let l = !1;
    const u = (o.app = {
      _uid: Ri++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: el,
      get config() {
        return o.config;
      },
      set config(a) {},
      use(a, ...b) {
        return (
          i.has(a) ||
            (a && k(a.install)
              ? (i.add(a), a.install(u, ...b))
              : k(a) && (i.add(a), a(u, ...b))),
          u
        );
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), u;
      },
      component(a, b) {
        return b ? ((o.components[a] = b), u) : o.components[a];
      },
      directive(a, b) {
        return b ? ((o.directives[a] = b), u) : o.directives[a];
      },
      mount(a, b, w) {
        if (!l) {
          const E = Fe(s, r);
          return (
            (E.appContext = o),
            b && t ? t(E, a) : e(E, a, w),
            (l = !0),
            (u._container = a),
            (a.__vue_app__ = u),
            On(E.component) || E.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(a, b) {
        return (o.provides[a] = b), u;
      },
    });
    return u;
  };
}
function Wn(e, t, n, s, r = !1) {
  if (R(e)) {
    e.forEach((E, F) => Wn(E, t && (R(t) ? t[F] : t), n, s, r));
    return;
  }
  if (nn(s) && !r) return;
  const o = s.shapeFlag & 4 ? On(s.component) || s.component.proxy : s.el,
    i = r ? null : o,
    { i: l, r: u } = e,
    a = t && t.r,
    b = l.refs === q ? (l.refs = {}) : l.refs,
    w = l.setupState;
  if (
    (a != null &&
      a !== u &&
      (ie(a)
        ? ((b[a] = null), U(w, a) && (w[a] = null))
        : fe(a) && (a.value = null)),
    k(u))
  )
    Qe(u, l, 12, [i, b]);
  else {
    const E = ie(u),
      F = fe(u);
    if (E || F) {
      const K = () => {
        if (e.f) {
          const H = E ? b[u] : u.value;
          r
            ? R(H) && Zn(H, o)
            : R(H)
            ? H.includes(o) || H.push(o)
            : E
            ? ((b[u] = [o]), U(w, u) && (w[u] = b[u]))
            : ((u.value = [o]), e.k && (b[e.k] = u.value));
        } else
          E
            ? ((b[u] = i), U(w, u) && (w[u] = i))
            : F && ((u.value = i), e.k && (b[e.k] = i));
      };
      i ? ((K.id = -1), be(K, n)) : K();
    }
  }
}
const be = si;
function Pi(e) {
  return Mi(e);
}
function Mi(e, t) {
  const n = io();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: o,
      createElement: i,
      createText: l,
      createComment: u,
      setText: a,
      setElementText: b,
      parentNode: w,
      nextSibling: E,
      setScopeId: F = Ie,
      cloneNode: K,
      insertStaticContent: H,
    } = e,
    M = (
      c,
      f,
      d,
      g = null,
      h = null,
      O = null,
      j = !1,
      x = null,
      C = !!f.dynamicChildren
    ) => {
      if (c === f) return;
      c && !rt(c, f) && ((g = zt(c)), v(c, h, O, !0), (c = null)),
        f.patchFlag === -2 && ((C = !1), (f.dynamicChildren = null));
      const { type: y, ref: S, shapeFlag: A } = f;
      switch (y) {
        case fs:
          L(c, f, d, g);
          break;
        case Re:
          ge(c, f, d, g);
          break;
        case sn:
          c == null && te(f, d, g, j);
          break;
        case se:
          Ee(c, f, d, g, h, O, j, x, C);
          break;
        default:
          A & 1
            ? Le(c, f, d, g, h, O, j, x, C)
            : A & 6
            ? ft(c, f, d, g, h, O, j, x, C)
            : (A & 64 || A & 128) && y.process(c, f, d, g, h, O, j, x, C, at);
      }
      S != null && h && Wn(S, c && c.ref, O, f || c, !f);
    },
    L = (c, f, d, g) => {
      if (c == null) s((f.el = l(f.children)), d, g);
      else {
        const h = (f.el = c.el);
        f.children !== c.children && a(h, f.children);
      }
    },
    ge = (c, f, d, g) => {
      c == null ? s((f.el = u(f.children || '')), d, g) : (f.el = c.el);
    },
    te = (c, f, d, g) => {
      [c.el, c.anchor] = H(c.children, f, d, g, c.el, c.anchor);
    },
    G = ({ el: c, anchor: f }, d, g) => {
      let h;
      for (; c && c !== f; ) (h = E(c)), s(c, d, g), (c = h);
      s(f, d, g);
    },
    re = ({ el: c, anchor: f }) => {
      let d;
      for (; c && c !== f; ) (d = E(c)), r(c), (c = d);
      r(f);
    },
    Le = (c, f, d, g, h, O, j, x, C) => {
      (j = j || f.type === 'svg'),
        c == null ? Ne(f, d, g, h, O, j, x, C) : ee(c, f, h, O, j, x, C);
    },
    Ne = (c, f, d, g, h, O, j, x) => {
      let C, y;
      const {
        type: S,
        props: A,
        shapeFlag: I,
        transition: P,
        patchFlag: D,
        dirs: V,
      } = c;
      if (c.el && K !== void 0 && D === -1) C = c.el = K(c.el);
      else {
        if (
          ((C = c.el = i(c.type, O, A && A.is, A)),
          I & 8
            ? b(C, c.children)
            : I & 16 &&
              J(c.children, C, null, g, h, O && S !== 'foreignObject', j, x),
          V && tt(c, null, g, 'created'),
          A)
        ) {
          for (const Y in A)
            Y !== 'value' &&
              !en(Y) &&
              o(C, Y, null, A[Y], O, c.children, g, h, He);
          'value' in A && o(C, 'value', null, A.value),
            (y = A.onVnodeBeforeMount) && Me(y, g, c);
        }
        N(C, c, c.scopeId, j, g);
      }
      V && tt(c, null, g, 'beforeMount');
      const z = (!h || (h && !h.pendingBranch)) && P && !P.persisted;
      z && P.beforeEnter(C),
        s(C, f, d),
        ((y = A && A.onVnodeMounted) || z || V) &&
          be(() => {
            y && Me(y, g, c), z && P.enter(C), V && tt(c, null, g, 'mounted');
          }, h);
    },
    N = (c, f, d, g, h) => {
      if ((d && F(c, d), g)) for (let O = 0; O < g.length; O++) F(c, g[O]);
      if (h) {
        let O = h.subTree;
        if (f === O) {
          const j = h.vnode;
          N(c, j, j.scopeId, j.slotScopeIds, h.parent);
        }
      }
    },
    J = (c, f, d, g, h, O, j, x, C = 0) => {
      for (let y = C; y < c.length; y++) {
        const S = (c[y] = x ? Ye(c[y]) : $e(c[y]));
        M(null, S, f, d, g, h, O, j, x);
      }
    },
    ee = (c, f, d, g, h, O, j) => {
      const x = (f.el = c.el);
      let { patchFlag: C, dynamicChildren: y, dirs: S } = f;
      C |= c.patchFlag & 16;
      const A = c.props || q,
        I = f.props || q;
      let P;
      d && nt(d, !1),
        (P = I.onVnodeBeforeUpdate) && Me(P, d, f, c),
        S && tt(f, c, d, 'beforeUpdate'),
        d && nt(d, !0);
      const D = h && f.type !== 'foreignObject';
      if (
        (y
          ? oe(c.dynamicChildren, y, x, d, g, D, O)
          : j || xe(c, f, x, null, d, g, D, O, !1),
        C > 0)
      ) {
        if (C & 16) me(x, f, A, I, d, g, h);
        else if (
          (C & 2 && A.class !== I.class && o(x, 'class', null, I.class, h),
          C & 4 && o(x, 'style', A.style, I.style, h),
          C & 8)
        ) {
          const V = f.dynamicProps;
          for (let z = 0; z < V.length; z++) {
            const Y = V[z],
              ve = A[Y],
              dt = I[Y];
            (dt !== ve || Y === 'value') &&
              o(x, Y, ve, dt, h, c.children, d, g, He);
          }
        }
        C & 1 && c.children !== f.children && b(x, f.children);
      } else !j && y == null && me(x, f, A, I, d, g, h);
      ((P = I.onVnodeUpdated) || S) &&
        be(() => {
          P && Me(P, d, f, c), S && tt(f, c, d, 'updated');
        }, g);
    },
    oe = (c, f, d, g, h, O, j) => {
      for (let x = 0; x < f.length; x++) {
        const C = c[x],
          y = f[x],
          S =
            C.el && (C.type === se || !rt(C, y) || C.shapeFlag & 70)
              ? w(C.el)
              : d;
        M(C, y, S, null, g, h, O, j, !0);
      }
    },
    me = (c, f, d, g, h, O, j) => {
      if (d !== g) {
        for (const x in g) {
          if (en(x)) continue;
          const C = g[x],
            y = d[x];
          C !== y && x !== 'value' && o(c, x, y, C, j, f.children, h, O, He);
        }
        if (d !== q)
          for (const x in d)
            !en(x) && !(x in g) && o(c, x, d[x], null, j, f.children, h, O, He);
        'value' in g && o(c, 'value', d.value, g.value);
      }
    },
    Ee = (c, f, d, g, h, O, j, x, C) => {
      const y = (f.el = c ? c.el : l('')),
        S = (f.anchor = c ? c.anchor : l(''));
      let { patchFlag: A, dynamicChildren: I, slotScopeIds: P } = f;
      P && (x = x ? x.concat(P) : P),
        c == null
          ? (s(y, d, g), s(S, d, g), J(f.children, d, S, h, O, j, x, C))
          : A > 0 && A & 64 && I && c.dynamicChildren
          ? (oe(c.dynamicChildren, I, d, h, O, j, x),
            (f.key != null || (h && f === h.subTree)) && Lr(c, f, !0))
          : xe(c, f, d, S, h, O, j, x, C);
    },
    ft = (c, f, d, g, h, O, j, x, C) => {
      (f.slotScopeIds = x),
        c == null
          ? f.shapeFlag & 512
            ? h.ctx.activate(f, d, g, j, C)
            : Tt(f, d, g, h, O, j, C)
          : ue(c, f, C);
    },
    Tt = (c, f, d, g, h, O, j) => {
      const x = (c.component = zi(c, g, h));
      if ((_n(c) && (x.ctx.renderer = at), Ji(x), x.asyncDep)) {
        if ((h && h.registerDep(x, Z), !c.el)) {
          const C = (x.subTree = Fe(Re));
          ge(null, C, f, d);
        }
        return;
      }
      Z(x, c, f, d, h, O, j);
    },
    ue = (c, f, d) => {
      const g = (f.component = c.component);
      if (ei(c, f, d))
        if (g.asyncDep && !g.asyncResolved) {
          W(g, f, d);
          return;
        } else (g.next = f), Vo(g.update), g.update();
      else (f.el = c.el), (g.vnode = f);
    },
    Z = (c, f, d, g, h, O, j) => {
      const x = () => {
          if (c.isMounted) {
            let { next: S, bu: A, u: I, parent: P, vnode: D } = c,
              V = S,
              z;
            nt(c, !1),
              S ? ((S.el = D.el), W(c, S, j)) : (S = D),
              A && tn(A),
              (z = S.props && S.props.onVnodeBeforeUpdate) && Me(z, P, S, D),
              nt(c, !0);
            const Y = jn(c),
              ve = c.subTree;
            (c.subTree = Y),
              M(ve, Y, w(ve.el), zt(ve), c, h, O),
              (S.el = Y.el),
              V === null && ti(c, Y.el),
              I && be(I, h),
              (z = S.props && S.props.onVnodeUpdated) &&
                be(() => Me(z, P, S, D), h);
          } else {
            let S;
            const { el: A, props: I } = f,
              { bm: P, m: D, parent: V } = c,
              z = nn(f);
            if (
              (nt(c, !1),
              P && tn(P),
              !z && (S = I && I.onVnodeBeforeMount) && Me(S, V, f),
              nt(c, !0),
              A && En)
            ) {
              const Y = () => {
                (c.subTree = jn(c)), En(A, c.subTree, c, h, null);
              };
              z
                ? f.type.__asyncLoader().then(() => !c.isUnmounted && Y())
                : Y();
            } else {
              const Y = (c.subTree = jn(c));
              M(null, Y, d, g, c, h, O), (f.el = Y.el);
            }
            if ((D && be(D, h), !z && (S = I && I.onVnodeMounted))) {
              const Y = f;
              be(() => Me(S, V, Y), h);
            }
            (f.shapeFlag & 256 ||
              (V && nn(V.vnode) && V.vnode.shapeFlag & 256)) &&
              c.a &&
              be(c.a, h),
              (c.isMounted = !0),
              (f = d = g = null);
          }
        },
        C = (c.effect = new es(x, () => mr(y), c.scope)),
        y = (c.update = () => C.run());
      (y.id = c.uid), nt(c, !0), y();
    },
    W = (c, f, d) => {
      f.component = c;
      const g = c.vnode.props;
      (c.vnode = f),
        (c.next = null),
        Ai(c, f.props, g, d),
        Ii(c, f.children, d),
        jt(),
        bn(void 0, c.update),
        At();
    },
    xe = (c, f, d, g, h, O, j, x, C = !1) => {
      const y = c && c.children,
        S = c ? c.shapeFlag : 0,
        A = f.children,
        { patchFlag: I, shapeFlag: P } = f;
      if (I > 0) {
        if (I & 128) {
          _(y, A, d, g, h, O, j, x, C);
          return;
        } else if (I & 256) {
          m(y, A, d, g, h, O, j, x, C);
          return;
        }
      }
      P & 8
        ? (S & 16 && He(y, h, O), A !== y && b(d, A))
        : S & 16
        ? P & 16
          ? _(y, A, d, g, h, O, j, x, C)
          : He(y, h, O, !0)
        : (S & 8 && b(d, ''), P & 16 && J(A, d, g, h, O, j, x, C));
    },
    m = (c, f, d, g, h, O, j, x, C) => {
      (c = c || mt), (f = f || mt);
      const y = c.length,
        S = f.length,
        A = Math.min(y, S);
      let I;
      for (I = 0; I < A; I++) {
        const P = (f[I] = C ? Ye(f[I]) : $e(f[I]));
        M(c[I], P, d, null, h, O, j, x, C);
      }
      y > S ? He(c, h, O, !0, !1, A) : J(f, d, g, h, O, j, x, C, A);
    },
    _ = (c, f, d, g, h, O, j, x, C) => {
      let y = 0;
      const S = f.length;
      let A = c.length - 1,
        I = S - 1;
      for (; y <= A && y <= I; ) {
        const P = c[y],
          D = (f[y] = C ? Ye(f[y]) : $e(f[y]));
        if (rt(P, D)) M(P, D, d, null, h, O, j, x, C);
        else break;
        y++;
      }
      for (; y <= A && y <= I; ) {
        const P = c[A],
          D = (f[I] = C ? Ye(f[I]) : $e(f[I]));
        if (rt(P, D)) M(P, D, d, null, h, O, j, x, C);
        else break;
        A--, I--;
      }
      if (y > A) {
        if (y <= I) {
          const P = I + 1,
            D = P < S ? f[P].el : g;
          for (; y <= I; )
            M(null, (f[y] = C ? Ye(f[y]) : $e(f[y])), d, D, h, O, j, x, C), y++;
        }
      } else if (y > I) for (; y <= A; ) v(c[y], h, O, !0), y++;
      else {
        const P = y,
          D = y,
          V = new Map();
        for (y = D; y <= I; y++) {
          const ye = (f[y] = C ? Ye(f[y]) : $e(f[y]));
          ye.key != null && V.set(ye.key, y);
        }
        let z,
          Y = 0;
        const ve = I - D + 1;
        let dt = !1,
          ps = 0;
        const St = new Array(ve);
        for (y = 0; y < ve; y++) St[y] = 0;
        for (y = P; y <= A; y++) {
          const ye = c[y];
          if (Y >= ve) {
            v(ye, h, O, !0);
            continue;
          }
          let Pe;
          if (ye.key != null) Pe = V.get(ye.key);
          else
            for (z = D; z <= I; z++)
              if (St[z - D] === 0 && rt(ye, f[z])) {
                Pe = z;
                break;
              }
          Pe === void 0
            ? v(ye, h, O, !0)
            : ((St[Pe - D] = y + 1),
              Pe >= ps ? (ps = Pe) : (dt = !0),
              M(ye, f[Pe], d, null, h, O, j, x, C),
              Y++);
        }
        const hs = dt ? ki(St) : mt;
        for (z = hs.length - 1, y = ve - 1; y >= 0; y--) {
          const ye = D + y,
            Pe = f[ye],
            gs = ye + 1 < S ? f[ye + 1].el : g;
          St[y] === 0
            ? M(null, Pe, d, gs, h, O, j, x, C)
            : dt && (z < 0 || y !== hs[z] ? p(Pe, d, gs, 2) : z--);
        }
      }
    },
    p = (c, f, d, g, h = null) => {
      const { el: O, type: j, transition: x, children: C, shapeFlag: y } = c;
      if (y & 6) {
        p(c.component.subTree, f, d, g);
        return;
      }
      if (y & 128) {
        c.suspense.move(f, d, g);
        return;
      }
      if (y & 64) {
        j.move(c, f, d, at);
        return;
      }
      if (j === se) {
        s(O, f, d);
        for (let A = 0; A < C.length; A++) p(C[A], f, d, g);
        s(c.anchor, f, d);
        return;
      }
      if (j === sn) {
        G(c, f, d);
        return;
      }
      if (g !== 2 && y & 1 && x)
        if (g === 0) x.beforeEnter(O), s(O, f, d), be(() => x.enter(O), h);
        else {
          const { leave: A, delayLeave: I, afterLeave: P } = x,
            D = () => s(O, f, d),
            V = () => {
              A(O, () => {
                D(), P && P();
              });
            };
          I ? I(O, D, V) : V();
        }
      else s(O, f, d);
    },
    v = (c, f, d, g = !1, h = !1) => {
      const {
        type: O,
        props: j,
        ref: x,
        children: C,
        dynamicChildren: y,
        shapeFlag: S,
        patchFlag: A,
        dirs: I,
      } = c;
      if ((x != null && Wn(x, null, d, c, !0), S & 256)) {
        f.ctx.deactivate(c);
        return;
      }
      const P = S & 1 && I,
        D = !nn(c);
      let V;
      if ((D && (V = j && j.onVnodeBeforeUnmount) && Me(V, f, c), S & 6))
        Vr(c.component, d, g);
      else {
        if (S & 128) {
          c.suspense.unmount(d, g);
          return;
        }
        P && tt(c, null, f, 'beforeUnmount'),
          S & 64
            ? c.type.remove(c, f, d, h, at, g)
            : y && (O !== se || (A > 0 && A & 64))
            ? He(y, f, d, !1, !0)
            : ((O === se && A & 384) || (!h && S & 16)) && He(C, f, d),
          g && le(c);
      }
      ((D && (V = j && j.onVnodeUnmounted)) || P) &&
        be(() => {
          V && Me(V, f, c), P && tt(c, null, f, 'unmounted');
        }, d);
    },
    le = (c) => {
      const { type: f, el: d, anchor: g, transition: h } = c;
      if (f === se) {
        ze(d, g);
        return;
      }
      if (f === sn) {
        re(c);
        return;
      }
      const O = () => {
        r(d), h && !h.persisted && h.afterLeave && h.afterLeave();
      };
      if (c.shapeFlag & 1 && h && !h.persisted) {
        const { leave: j, delayLeave: x } = h,
          C = () => j(d, O);
        x ? x(c.el, O, C) : C();
      } else O();
    },
    ze = (c, f) => {
      let d;
      for (; c !== f; ) (d = E(c)), r(c), (c = d);
      r(f);
    },
    Vr = (c, f, d) => {
      const { bum: g, scope: h, update: O, subTree: j, um: x } = c;
      g && tn(g),
        h.stop(),
        O && ((O.active = !1), v(j, c, f, d)),
        x && be(x, f),
        be(() => {
          c.isUnmounted = !0;
        }, f),
        f &&
          f.pendingBranch &&
          !f.isUnmounted &&
          c.asyncDep &&
          !c.asyncResolved &&
          c.suspenseId === f.pendingId &&
          (f.deps--, f.deps === 0 && f.resolve());
    },
    He = (c, f, d, g = !1, h = !1, O = 0) => {
      for (let j = O; j < c.length; j++) v(c[j], f, d, g, h);
    },
    zt = (c) =>
      c.shapeFlag & 6
        ? zt(c.component.subTree)
        : c.shapeFlag & 128
        ? c.suspense.next()
        : E(c.anchor || c.el),
    ds = (c, f, d) => {
      c == null
        ? f._vnode && v(f._vnode, null, null, !0)
        : M(f._vnode || null, c, f, null, null, null, d),
        wr(),
        (f._vnode = c);
    },
    at = {
      p: M,
      um: v,
      m: p,
      r: le,
      mt: Tt,
      mc: J,
      pc: xe,
      pbc: oe,
      n: zt,
      o: e,
    };
  let Cn, En;
  return (
    t && ([Cn, En] = t(at)), { render: ds, hydrate: Cn, createApp: Fi(ds, Cn) }
  );
}
function nt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Lr(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (R(s) && R(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let l = r[o];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[o] = Ye(r[o])), (l.el = i.el)),
        n || Lr(i, l));
    }
}
function ki(e) {
  const t = e.slice(),
    n = [0];
  let s, r, o, i, l;
  const u = e.length;
  for (s = 0; s < u; s++) {
    const a = e[s];
    if (a !== 0) {
      if (((r = n[n.length - 1]), e[r] < a)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (l = (o + i) >> 1), e[n[l]] < a ? (o = l + 1) : (i = l);
      a < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
const $i = (e) => e.__isTeleport,
  se = Symbol(void 0),
  fs = Symbol(void 0),
  Re = Symbol(void 0),
  sn = Symbol(void 0),
  kt = [];
let Se = null;
function X(e = !1) {
  kt.push((Se = e ? null : []));
}
function Li() {
  kt.pop(), (Se = kt[kt.length - 1] || null);
}
let Dt = 1;
function ks(e) {
  Dt += e;
}
function Nr(e) {
  return (
    (e.dynamicChildren = Dt > 0 ? Se || mt : null),
    Li(),
    Dt > 0 && Se && Se.push(e),
    e
  );
}
function Q(e, t, n, s, r, o) {
  return Nr(T(e, t, n, s, r, o, !0));
}
function Ni(e, t, n, s, r) {
  return Nr(Fe(e, t, n, s, r, !0));
}
function Hi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function rt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const xn = '__vInternal',
  Hr = ({ key: e }) => (e != null ? e : null),
  rn = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? ie(e) || fe(e) || k(e)
        ? { i: Te, r: e, k: t, f: !!n }
        : e
      : null;
function T(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  o = e === se ? 0 : 1,
  i = !1,
  l = !1
) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Hr(t),
    ref: t && rn(t),
    scopeId: yn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
  };
  return (
    l
      ? (as(u, n), o & 128 && e.normalize(u))
      : n && (u.shapeFlag |= ie(n) ? 8 : 16),
    Dt > 0 &&
      !i &&
      Se &&
      (u.patchFlag > 0 || o & 6) &&
      u.patchFlag !== 32 &&
      Se.push(u),
    u
  );
}
const Fe = Ui;
function Ui(e, t = null, n = null, s = 0, r = null, o = !1) {
  if (((!e || e === _i) && (e = Re), Hi(e))) {
    const l = et(e, t, !0);
    return (
      n && as(l, n),
      Dt > 0 &&
        !o &&
        Se &&
        (l.shapeFlag & 6 ? (Se[Se.indexOf(e)] = l) : Se.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((Qi(e) && (e = e.__vccOpts), t)) {
    t = Di(t);
    let { class: l, style: u } = t;
    l && !ie(l) && (t.class = it(l)),
      ne(u) && (ar(u) && !R(u) && (u = ae({}, u)), (t.style = Jn(u)));
  }
  const i = ie(e) ? 1 : ni(e) ? 128 : $i(e) ? 64 : ne(e) ? 4 : k(e) ? 2 : 0;
  return T(e, t, n, s, r, i, o, !0);
}
function Di(e) {
  return e ? (ar(e) || xn in e ? ae({}, e) : e) : null;
}
function et(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e,
    l = t ? Ki(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Hr(l),
    ref:
      t && t.ref ? (n && r ? (R(r) ? r.concat(rn(t)) : [r, rn(t)]) : rn(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== se ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && et(e.ssContent),
    ssFallback: e.ssFallback && et(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
  };
}
function Ur(e = ' ', t = 0) {
  return Fe(fs, null, e, t);
}
function Bi(e, t) {
  const n = Fe(sn, null, e);
  return (n.staticCount = t), n;
}
function Qt(e = '', t = !1) {
  return t ? (X(), Ni(Re, null, e)) : Fe(Re, null, e);
}
function $e(e) {
  return e == null || typeof e == 'boolean'
    ? Fe(Re)
    : R(e)
    ? Fe(se, null, e.slice())
    : typeof e == 'object'
    ? Ye(e)
    : Fe(fs, null, String(e));
}
function Ye(e) {
  return e.el === null || e.memo ? e : et(e);
}
function as(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (R(t)) n = 16;
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), as(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(xn in t)
        ? (t._ctx = Te)
        : r === 3 &&
          Te &&
          (Te.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    k(t)
      ? ((t = { default: t, _ctx: Te }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Ur(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Ki(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === 'class')
        t.class !== s.class && (t.class = it([t.class, s.class]));
      else if (r === 'style') t.style = Jn([t.style, s.style]);
      else if (dn(r)) {
        const o = t[r],
          i = s[r];
        i &&
          o !== i &&
          !(R(o) && o.includes(i)) &&
          (t[r] = o ? [].concat(o, i) : i);
      } else r !== '' && (t[r] = s[r]);
  }
  return t;
}
function Me(e, t, n, s = null) {
  Ce(e, t, 7, [n, s]);
}
const Wi = $r();
let Vi = 0;
function zi(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Wi,
    o = {
      uid: Vi++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new lo(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Fr(s, r),
      emitsOptions: Or(s, r),
      emit: null,
      emitted: null,
      propsDefaults: q,
      inheritAttrs: s.inheritAttrs,
      ctx: q,
      data: q,
      props: q,
      attrs: q,
      slots: q,
      refs: q,
      setupState: q,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = Jo.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let ce = null;
const qi = () => ce || Te,
  Ot = (e) => {
    (ce = e), e.scope.on();
  },
  ut = () => {
    ce && ce.scope.off(), (ce = null);
  };
function Dr(e) {
  return e.vnode.shapeFlag & 4;
}
let Bt = !1;
function Ji(e, t = !1) {
  Bt = t;
  const { props: n, children: s } = e.vnode,
    r = Dr(e);
  ji(e, n, r, t), Si(e, s);
  const o = r ? Yi(e, t) : void 0;
  return (Bt = !1), o;
}
function Yi(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = dr(new Proxy(e.ctx, wi)));
  const { setup: s } = n;
  if (s) {
    const r = (e.setupContext = s.length > 1 ? Zi(e) : null);
    Ot(e), jt();
    const o = Qe(s, e, 0, [e.props, r]);
    if ((At(), ut(), Xs(o))) {
      if ((o.then(ut, ut), t))
        return o
          .then((i) => {
            $s(e, i, t);
          })
          .catch((i) => {
            gn(i, e, 0);
          });
      e.asyncDep = o;
    } else $s(e, o, t);
  } else Br(e, t);
}
function $s(e, t, n) {
  k(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ne(t) && (e.setupState = gr(t)),
    Br(e, n);
}
let Ls;
function Br(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Ls && !s.render) {
      const r = s.template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: u } = s,
          a = ae(ae({ isCustomElement: o, delimiters: l }, i), u);
        s.render = Ls(r, a);
      }
    }
    e.render = s.render || Ie;
  }
  Ot(e), jt(), xi(e), At(), ut();
}
function Xi(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return we(e, 'get', '$attrs'), t[n];
    },
  });
}
function Zi(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Xi(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function On(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(gr(dr(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in fn) return fn[n](e);
        },
      }))
    );
}
function Qi(e) {
  return k(e) && '__vccOpts' in e;
}
const Gi = (e, t) => Do(e, t, Bt),
  el = '3.2.37',
  tl = 'http://www.w3.org/2000/svg',
  ot = typeof document < 'u' ? document : null,
  Ns = ot && ot.createElement('template'),
  nl = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r = t
        ? ot.createElementNS(tl, e)
        : ot.createElement(e, n ? { is: n } : void 0);
      return (
        e === 'select' &&
          s &&
          s.multiple != null &&
          r.setAttribute('multiple', s.multiple),
        r
      );
    },
    createText: (e) => ot.createTextNode(e),
    createComment: (e) => ot.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => ot.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    cloneNode(e) {
      const t = e.cloneNode(!0);
      return '_value' in e && (t._value = e._value), t;
    },
    insertStaticContent(e, t, n, s, r, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (r && (r === o || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === o || !(r = r.nextSibling));

        );
      else {
        Ns.innerHTML = s ? `<svg>${e}</svg>` : e;
        const l = Ns.content;
        if (s) {
          const u = l.firstChild;
          for (; u.firstChild; ) l.appendChild(u.firstChild);
          l.removeChild(u);
        }
        t.insertBefore(l, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function sl(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
      ? e.setAttribute('class', t)
      : (e.className = t);
}
function rl(e, t, n) {
  const s = e.style,
    r = ie(n);
  if (n && !r) {
    for (const o in n) Vn(s, o, n[o]);
    if (t && !ie(t)) for (const o in t) n[o] == null && Vn(s, o, '');
  } else {
    const o = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute('style'),
      '_vod' in e && (s.display = o);
  }
}
const Hs = /\s*!important$/;
function Vn(e, t, n) {
  if (R(n)) n.forEach((s) => Vn(e, t, s));
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
  else {
    const s = ol(e, t);
    Hs.test(n)
      ? e.setProperty(vt(s), n.replace(Hs, ''), 'important')
      : (e[s] = n);
  }
}
const Us = ['Webkit', 'Moz', 'ms'],
  Sn = {};
function ol(e, t) {
  const n = Sn[t];
  if (n) return n;
  let s = xt(t);
  if (s !== 'filter' && s in e) return (Sn[t] = s);
  s = Gs(s);
  for (let r = 0; r < Us.length; r++) {
    const o = Us[r] + s;
    if (o in e) return (Sn[t] = o);
  }
  return t;
}
const Ds = 'http://www.w3.org/1999/xlink';
function il(e, t, n, s, r) {
  if (s && t.startsWith('xlink:'))
    n == null
      ? e.removeAttributeNS(Ds, t.slice(6, t.length))
      : e.setAttributeNS(Ds, t, n);
  else {
    const o = Yr(t);
    n == null || (o && !Js(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : n);
  }
}
function ll(e, t, n, s, r, o, i) {
  if (t === 'innerHTML' || t === 'textContent') {
    s && i(s, r, o), (e[t] = n == null ? '' : n);
    return;
  }
  if (t === 'value' && e.tagName !== 'PROGRESS' && !e.tagName.includes('-')) {
    e._value = n;
    const u = n == null ? '' : n;
    (e.value !== u || e.tagName === 'OPTION') && (e.value = u),
      n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === '' || n == null) {
    const u = typeof e[t];
    u === 'boolean'
      ? (n = Js(n))
      : n == null && u === 'string'
      ? ((n = ''), (l = !0))
      : u === 'number' && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(t);
}
const [Kr, cl] = (() => {
  let e = Date.now,
    t = !1;
  if (typeof window < 'u') {
    Date.now() > document.createEvent('Event').timeStamp &&
      (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let zn = 0;
const ul = Promise.resolve(),
  fl = () => {
    zn = 0;
  },
  al = () => zn || (ul.then(fl), (zn = Kr()));
function Xe(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function dl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function pl(e, t, n, s, r = null) {
  const o = e._vei || (e._vei = {}),
    i = o[t];
  if (s && i) i.value = s;
  else {
    const [l, u] = hl(t);
    if (s) {
      const a = (o[t] = gl(s, r));
      Xe(e, l, a, u);
    } else i && (dl(e, l, i, u), (o[t] = void 0));
  }
}
const Bs = /(?:Once|Passive|Capture)$/;
function hl(e) {
  let t;
  if (Bs.test(e)) {
    t = {};
    let n;
    for (; (n = e.match(Bs)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
  }
  return [vt(e.slice(2)), t];
}
function gl(e, t) {
  const n = (s) => {
    const r = s.timeStamp || Kr();
    (cl || r >= n.attached - 1) && Ce(bl(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = al()), n;
}
function bl(e, t) {
  if (R(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return t;
}
const Ks = /^on[a-z]/,
  ml = (e, t, n, s, r = !1, o, i, l, u) => {
    t === 'class'
      ? sl(e, s, r)
      : t === 'style'
      ? rl(e, n, s)
      : dn(t)
      ? Xn(t) || pl(e, t, n, s, i)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : yl(e, t, s, r)
        )
      ? ll(e, t, s, o, i, l, u)
      : (t === 'true-value'
          ? (e._trueValue = s)
          : t === 'false-value' && (e._falseValue = s),
        il(e, t, s, r));
  };
function yl(e, t, n, s) {
  return s
    ? !!(
        t === 'innerHTML' ||
        t === 'textContent' ||
        (t in e && Ks.test(t) && k(n))
      )
    : t === 'spellcheck' ||
      t === 'draggable' ||
      t === 'translate' ||
      t === 'form' ||
      (t === 'list' && e.tagName === 'INPUT') ||
      (t === 'type' && e.tagName === 'TEXTAREA') ||
      (Ks.test(t) && ie(n))
    ? !1
    : t in e;
}
const _l = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
ci.props;
const Ct = (e) => {
  const t = e.props['onUpdate:modelValue'] || !1;
  return R(t) ? (n) => tn(t, n) : t;
};
function wl(e) {
  e.target.composing = !0;
}
function Ws(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')));
}
const It = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
      e._assign = Ct(r);
      const o = s || (r.props && r.props.type === 'number');
      Xe(e, t ? 'change' : 'input', (i) => {
        if (i.target.composing) return;
        let l = e.value;
        n && (l = l.trim()), o && (l = ln(l)), e._assign(l);
      }),
        n &&
          Xe(e, 'change', () => {
            e.value = e.value.trim();
          }),
        t ||
          (Xe(e, 'compositionstart', wl),
          Xe(e, 'compositionend', Ws),
          Xe(e, 'change', Ws));
    },
    mounted(e, { value: t }) {
      e.value = t == null ? '' : t;
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: s, number: r } },
      o
    ) {
      if (
        ((e._assign = Ct(o)),
        e.composing ||
          (document.activeElement === e &&
            e.type !== 'range' &&
            (n ||
              (s && e.value.trim() === t) ||
              ((r || e.type === 'number') && ln(e.value) === t))))
      )
        return;
      const i = t == null ? '' : t;
      e.value !== i && (e.value = i);
    },
  },
  xl = {
    deep: !0,
    created(e, t, n) {
      (e._assign = Ct(n)),
        Xe(e, 'change', () => {
          const s = e._modelValue,
            r = Kt(e),
            o = e.checked,
            i = e._assign;
          if (R(s)) {
            const l = Yn(s, r),
              u = l !== -1;
            if (o && !u) i(s.concat(r));
            else if (!o && u) {
              const a = [...s];
              a.splice(l, 1), i(a);
            }
          } else if (Et(s)) {
            const l = new Set(s);
            o ? l.add(r) : l.delete(r), i(l);
          } else i(Wr(e, o));
        });
    },
    mounted: Vs,
    beforeUpdate(e, t, n) {
      (e._assign = Ct(n)), Vs(e, t, n);
    },
  };
function Vs(e, { value: t, oldValue: n }, s) {
  (e._modelValue = t),
    R(t)
      ? (e.checked = Yn(t, s.props.value) > -1)
      : Et(t)
      ? (e.checked = t.has(s.props.value))
      : t !== n && (e.checked = Wt(t, Wr(e, !0)));
}
const In = {
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const r = Et(t);
    Xe(e, 'change', () => {
      const o = Array.prototype.filter
        .call(e.options, (i) => i.selected)
        .map((i) => (n ? ln(Kt(i)) : Kt(i)));
      e._assign(e.multiple ? (r ? new Set(o) : o) : o[0]);
    }),
      (e._assign = Ct(s));
  },
  mounted(e, { value: t }) {
    zs(e, t);
  },
  beforeUpdate(e, t, n) {
    e._assign = Ct(n);
  },
  updated(e, { value: t }) {
    zs(e, t);
  },
};
function zs(e, t) {
  const n = e.multiple;
  if (!(n && !R(t) && !Et(t))) {
    for (let s = 0, r = e.options.length; s < r; s++) {
      const o = e.options[s],
        i = Kt(o);
      if (n) R(t) ? (o.selected = Yn(t, i) > -1) : (o.selected = t.has(i));
      else if (Wt(Kt(o), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Kt(e) {
  return '_value' in e ? e._value : e.value;
}
function Wr(e, t) {
  const n = t ? '_trueValue' : '_falseValue';
  return n in e ? e[n] : t;
}
const Ol = ae({ patchProp: ml }, nl);
let qs;
function Cl() {
  return qs || (qs = Pi(Ol));
}
const El = (...e) => {
  const t = Cl().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = vl(s);
      if (!r) return;
      const o = t._component;
      !k(o) && !o.render && !o.template && (o.template = r.innerHTML),
        (r.innerHTML = '');
      const i = n(r, !1, r instanceof SVGElement);
      return (
        r instanceof Element &&
          (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
        i
      );
    }),
    t
  );
};
function vl(e) {
  return ie(e) ? document.querySelector(e) : e;
}
const Gt = {
    mine: [
      '     OO +OO-    ',
      ' +   OO  OO  -  ',
      '    -OO+ OO     ',
      '  -  OO  OO   + ',
    ],
    conveyor: [
      '    +O-         ',
      ' +   O   -      ',
      '    -O+         ',
      ' -   O   +      ',
      '    +OO-        ',
      ' +   O   O   -  ',
      '    -OO+        ',
      ' -   O   O   +  ',
    ],
    combiner: ['+O +O-+O ', '+++OOO - ', ' O+-O+ O+', ' - OOO+++'],
    factory: '++++++OOO++OOO++OOO++++++',
  },
  pt = {
    deposit: { x: 0, y: 0 },
    obstacle: { x: 0, y: 0 },
    mine: { x: 1, y: 1 },
    conveyor: { x: 1, y: 1 },
    combiner: { x: 1, y: 1 },
    factory: { x: 0, y: 0 },
  },
  $ = class {
    addError(t, n, s) {
      const r = { type: t, message: n };
      this.errors.push({ ...r, ...(s || {}) });
    }
    parse(t) {
      if (((this.errors = []), !t)) {
        this.addError('input', 'Raw object must not be falsy');
        return;
      }
      if (((this.width = parseInt(t.width) || 0), this.width < 1)) {
        this.addError('input', 'Width must be > 0');
        return;
      }
      if (this.width > 100) {
        this.addError('input', 'Width must be <= 100');
        return;
      }
      if (((this.height = parseInt(t.height) || 0), this.height < 1)) {
        this.addError('input', 'Height must be > 0');
        return;
      }
      if (this.height > 100) {
        this.addError('input', 'Height must be <= 100');
        return;
      }
      if (((this.objects = []), !Array.isArray(t.objects))) {
        this.addError('input', 'Objects must be an array');
        return;
      }
      for (const n of t.objects)
        try {
          this.objects.push($.objectFromRaw(n));
        } catch (s) {
          this.addError('input', s.message, { raw: t });
          return;
        }
      if (((this.products = []), !Array.isArray(t.products))) {
        this.addError('input', 'Products must be an array');
        return;
      }
      for (const n of t.products)
        try {
          this.products.push($.productFromRaw(n));
        } catch (s) {
          this.addError('input', s.message, { raw: t });
          return;
        }
      (this.turns = parseInt(t.turns)),
        (this.log = []),
        (this.logEnabled = !0),
        this.update();
    }
    parseObject(t) {
      const n = $.objectFromRaw(t);
      return this.objects.push(n), this.resetSimulation(), n;
    }
    parseObjects(t, n) {
      const s = t.map((r) => $.objectFromRaw(r));
      return n && s.some((r) => $.isLandscapeObject(r))
        ? !1
        : (this.objects.push(...s), this.resetSimulation(), s);
    }
    parseProducts(t) {
      (this.products = t.map((n) => $.productFromRaw(n))),
        this.resetSimulation();
    }
    toRaw(t) {
      let { objects: n } = this;
      t !== 'gui' && (n = n.filter((r) => $.isLandscapeObject(r))),
        (n = n.map((r) => $.objectToRaw(r)));
      const s = {
        width: this.width,
        height: this.height,
        objects: n,
        products: this.products.filter((r) => $.productToRaw(r)),
        turns: this.turns,
      };
      return t !== 'cli'
        ? s
        : [
            s,
            this.objects
              .filter((r) => !$.isLandscapeObject(r))
              .map((r) => $.objectToRaw(r)),
          ];
    }
    update() {
      (this.errors = []), (this.partsAt = {}), (this.objectsAt = {});
      for (let n = 0; n < this.height; n++)
        for (let s = 0; s < this.width; s++)
          (this.partsAt[[s, n]] = ' '), (this.objectsAt[[s, n]] = []);
      for (const n of this.objects) {
        switch (n.type) {
          case 'deposit':
            n.parts = [];
            for (let s = 0; s < n.height; s++)
              for (let r = 0; r < n.width; r++)
                n.parts.push(
                  r === 0 || r === n.width - 1 || s === 0 || s === n.height - 1
                    ? '-'
                    : 'O'
                );
            n.available = n.height * n.width * 5;
            break;
          case 'obstacle':
            n.parts = 'O'.repeat(n.width * n.height);
            break;
        }
        (n.partsAt = {}), (n.sources = []), (n.sinks = []);
        for (let s = n.y - n.anchor.y; s < n.y + n.height - n.anchor.y; s++)
          for (let r = n.x - n.anchor.x; r < n.x + n.width - n.anchor.x; r++) {
            const o =
              n.parts[
                (s - n.y + n.anchor.y) * n.width + (r - n.x + n.anchor.x)
              ];
            if (o !== ' ') {
              if (r < 0 || s < 0 || r > this.width - 1 || s > this.height - 1) {
                this.addError('state', 'Object is out of bounds', {
                  coordinates: { x: r, y: s },
                });
                continue;
              }
              this.partsAt[[r, s]] !== ' ' &&
                ((o === 'O' &&
                  this.objectsAt[[r, s]].every(
                    (l) => l.type === 'conveyor' && l.partsAt[[r, s]] === 'O'
                  )) ||
                  this.addError('state', 'Objects intersect', {
                    coordinates: { x: r, y: s },
                  })),
                (this.partsAt[[r, s]] = o),
                this.objectsAt[[r, s]].push(n),
                (n.partsAt[[r, s]] = o);
            }
          }
      }
      if (this.errors.length > 0) return;
      for (const n of this.objects)
        for (const [s, r] of Object.entries(n.partsAt)) {
          const [o, i] = $.splitCoordinates(s);
          if (r === '+') {
            for (const [l, u] of this.adjacentCoordinates(o, i))
              for (const a of this.objectsAt[[l, u]])
                if (a !== n && this.partsAt[[l, u]] === '-') {
                  if (a.type === 'deposit' && n.type !== 'mine') {
                    const w =
                      'Only ingresses of mines may be connected to egresses of deposits';
                    this.addError('state', w, { coordinates: { x: o, y: i } });
                    continue;
                  }
                  if (
                    a.type === 'mine' &&
                    !['conveyor', 'combiner', 'factory'].includes(n.type)
                  ) {
                    const w =
                      'Egresses of mines may only be connected to conveyors, combiners and factories';
                    this.addError('state', w, { coordinates: { x: l, y: u } });
                    continue;
                  }
                  n.sources.push({ object: a, coordinates: { x: o, y: i } });
                  const b = a.sinks.find(
                    (w) => w.coordinates.x === l && w.coordinates.y === u
                  );
                  if (b) {
                    const w =
                      'Ingresses may only be connected to a single egress';
                    this.addError('state', w, { coordinates: b.coordinates });
                    continue;
                  }
                  a.sinks.push({ object: n, coordinates: { x: l, y: u } });
                }
          }
        }
      if (this.turns < 1) {
        this.addError('state', 'Number of turns is < 1');
        return;
      }
      if (this.products.length === 0) {
        this.addError('state', 'List of products is empty');
        return;
      }
      const t = this.products.find(
        (n) =>
          $.countResources(n.resources) < 1 || n.resources.some((s) => s < 0)
      );
      t &&
        this.addError(
          'state',
          `Resource requirements of product ${t.subtype} are invalid`
        ),
        (this.factories = this.objects.filter((n) => n.type === 'factory'));
    }
    adjacentCoordinates(t, n) {
      return [
        [t - 1, n],
        [t, n - 1],
        [t + 1, n],
        [t, n + 1],
      ].filter(
        ([s, r]) => s > -1 && r > -1 && s < this.width && r < this.height
      );
    }
    resize(t, n) {
      (this.width = t), (this.height = n);
      const s = [];
      for (const r of this.objects)
        for (const o of Object.keys(r.partsAt)) {
          const [i, l] = $.splitCoordinates(o);
          if (i > this.width - 1 || l > this.height - 1) {
            s.push(r);
            break;
          }
        }
      for (const r of s) this.deleteObject(r);
      this.resetSimulation();
    }
    moveObject(t, n, s) {
      (t.x = n), (t.y = s), this.resetSimulation();
    }
    resizeObject(t, n, s) {
      (t.width = n), (t.height = s), this.resetSimulation();
    }
    deleteObject(t) {
      const n = this.objects.indexOf(t);
      n !== -1 && (this.objects.splice(n, 1), this.resetSimulation());
    }
    clearObjects() {
      (this.objects = []), this.resetSimulation();
    }
    setTurns(t) {
      (this.turns = t), this.resetSimulation();
    }
    addLog(t, n) {
      const s = n
        ? ''
        : `${this.turn} (${this.startOfTurn ? 'start' : 'end'}): `;
      this.log.push(`${s}${t}`);
    }
    formatYield() {
      return `[${this.yield
        .filter((t) => t > 0)
        .map((t, n) => `${n}:${t}`)
        .join(', ')}]`;
    }
    acceptResources(t) {
      t.totals.incoming !== 0 &&
        ($.mergeResources(t.incoming, t.storage),
        this.logEnabled &&
          this.addLog(
            `${$.formatCoordinates(t)} accepts ${$.formatResources(
              t.incoming
            )}, holds ${$.formatResources(t.storage)}`
          ),
        (t.totals.incoming = $.clearResources(t.incoming)));
    }
    retrieveResourcesFromDeposit(t) {
      for (const n of t.sinks)
        if (t.available > 0) {
          const s = Math.min(3, t.available);
          (t.available -= s),
            (n.object.incoming[t.subtype] += s),
            (n.object.totals.incoming += s),
            this.logEnabled &&
              this.addLog(
                `${$.formatCoordinates(t)} takes ${$.formatResource(
                  t.subtype,
                  s
                )}, ${$.formatResource(t.subtype, t.available)} available`
              );
        }
    }
    producePossibleProducts(t) {
      let n = !0;
      for (; n; ) {
        n = !1;
        for (const s of this.products)
          if (
            t.subtype === s.subtype &&
            !t.storage.some((r, o) => r < s.resources[o])
          ) {
            for (let r = 0; r < $.numSubtypes.deposit; r++)
              t.storage[r] -= s.resources[r];
            this.yield[s.subtype]++,
              (this.score += s.points),
              (this.scoreAtTurn = this.turn),
              (n = !0),
              this.logEnabled &&
                this.addLog(
                  `${$.formatCoordinates(t)} produces ${s.subtype} (${
                    s.points
                  } points)`
                );
          }
      }
    }
    resetSimulation() {
      this.update(),
        (this.log = []),
        (this.turn = 1),
        (this.scoreAtTurn = 1),
        (this.score = 0),
        (this.yield = Array($.numSubtypes.product).fill(0));
      for (const t of this.objects)
        (t.incoming = Array($.numSubtypes.deposit).fill(0)),
          (t.storage = Array($.numSubtypes.deposit).fill(0)),
          (t.totals = { incoming: 0 });
    }
    simulateStartOfTurn() {
      this.startOfTurn = !0;
      for (const t of this.objects)
        switch (t.type) {
          case 'mine':
            this.acceptResources(t);
            break;
          case 'conveyor':
            this.acceptResources(t);
            break;
          case 'combiner':
            this.acceptResources(t);
            break;
          case 'factory':
            this.acceptResources(t);
            break;
        }
    }
    simulateEndOfTurn() {
      this.startOfTurn = !1;
      for (const t of this.objects)
        switch (t.type) {
          case 'deposit':
            this.retrieveResourcesFromDeposit(t);
            break;
          case 'mine':
            $.transferResourcesToSink(t);
            break;
          case 'conveyor':
            $.transferResourcesToSink(t);
            break;
          case 'combiner':
            $.transferResourcesToSink(t);
            break;
        }
      for (const t of this.factories) this.producePossibleProducts(t);
    }
    simulate() {
      const t = Date.now();
      for (this.resetSimulation(); this.turn <= this.turns; this.turn++)
        this.simulateStartOfTurn(), this.simulateEndOfTurn();
      (this.duration = Date.now() - t),
        this.logEnabled &&
          (this.addLog(`Yield: ${this.formatYield()}`, !0),
          this.addLog(`Score: ${this.score} at turn ${this.scoreAtTurn}`, !0),
          this.addLog(`Duration: ${this.duration} ms`, !0));
    }
    static objectFromRaw(t) {
      const n = {
          type: t.type,
          subtype: parseInt(t.subtype) || 0,
          x: parseInt(t.x) || 0,
          y: parseInt(t.y) || 0,
        },
        s = $.numSubtypes[n.type];
      switch (t.type) {
        case 'deposit':
          if (((n.width = parseInt(t.width) || 0), n.width < 1))
            throw new Error('Width must be > 0');
          if (((n.height = parseInt(t.height) || 0), n.height < 1))
            throw new Error('Height must be > 0');
          n.anchor = pt.deposit;
          break;
        case 'obstacle':
          if (((n.width = parseInt(t.width) || 0), n.width < 1))
            throw new Error('Width must be > 0');
          if (((n.height = parseInt(t.height) || 0), n.height < 1))
            throw new Error('Height must be > 0');
          n.anchor = pt.obstacle;
          break;
        case 'mine':
          if (((n.width = 4), (n.height = 4), n.subtype < 0 || n.subtype >= s))
            throw new Error(`Subtype must be between 0 and ${s - 1}`);
          (n.parts = Gt.mine[n.subtype]), (n.anchor = pt.mine);
          break;
        case 'conveyor':
          if (((n.width = 4), (n.height = 4), n.subtype < 0 || n.subtype >= s))
            throw new Error(`Subtype must be between 0 and ${s - 1}`);
          (n.parts = Gt.conveyor[n.subtype]), (n.anchor = pt.conveyor);
          break;
        case 'combiner':
          if (((n.width = 3), (n.height = 3), n.subtype < 0 || n.subtype >= s))
            throw new Error(`Subtype must be between 0 and ${s - 1}`);
          (n.parts = Gt.combiner[n.subtype]), (n.anchor = pt.combiner);
          break;
        case 'factory':
          if (((n.width = 5), (n.height = 5), n.subtype < 0 || n.subtype >= s))
            throw new Error(`Subtype must be between 0 and ${s - 1}`);
          (n.parts = Gt.factory), (n.anchor = pt.factory);
          break;
        default:
          throw new Error(`Unknown object type: ${t.type}`);
      }
      return n;
    }
    static objectToRaw(t) {
      const n = { type: t.type, x: t.x, y: t.y };
      return (
        t.type !== 'obstacle' && (n.subtype = t.subtype),
        ['deposit', 'obstacle'].includes(t.type) &&
          ((n.width = t.width), (n.height = t.height)),
        n
      );
    }
    static productFromRaw(t) {
      const n = {
        type: 'product',
        subtype: t.subtype,
        resources: t.resources.map((s) => parseInt(s) || 0),
        points: parseInt(t.points) || 0,
      };
      if (n.subtype < 0 || n.subtype >= $.numSubtypes.product)
        throw new Error(
          `Subtype must be between 0 and ${$.numSubtypes.product - 1}`
        );
      return n;
    }
    static productToRaw(t) {
      return {
        type: t.type,
        subtype: t.subtype,
        resources: t.resources,
        points: t.points,
      };
    }
    static isLandscapeObject(t) {
      return ['deposit', 'obstacle'].includes(t.type);
    }
    static splitCoordinates(t) {
      return t.split(',').map((n) => parseInt(n) || 0);
    }
    static formatResource(t, n) {
      return `[${n}x${t}]`;
    }
    static formatResources(t) {
      const n = [];
      for (let s = 0; s < $.numSubtypes.deposit; s++)
        t[s] > 0 && n.push(`${t[s]}x${s}`);
      return `[${n.join(', ')}]`;
    }
    static formatCoordinates(t) {
      return `(${t.x}, ${t.y})`;
    }
    static countResources(t) {
      return t.reduce((n, s) => n + s, 0);
    }
    static clearResources(t) {
      for (let n = 0; n < t.length; n++) t[n] = 0;
      return 0;
    }
    static mergeResources(t, n) {
      let s = 0;
      for (let r = 0; r < t.length; r++) (n[r] += t[r]), (s += t[r]);
      return s;
    }
    static transferResourcesToSink(t) {
      t.sinks[0] &&
        ((t.sinks[0].object.totals.incoming += $.mergeResources(
          t.storage,
          t.sinks[0].object.incoming
        )),
        $.clearResources(t.storage));
    }
  };
let pe = $;
bs(pe, 'numSubtypes', {
  deposit: 8,
  obstacle: 0,
  mine: 4,
  combiner: 4,
  conveyor: 8,
  factory: 8,
  product: 8,
});
const jl = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, r] of t) n[s] = r;
    return n;
  },
  he = (e) => (Yo('data-v-90cb578b'), (e = e()), Xo(), e),
  Al = { class: 'world' },
  Tl = he(() => T('td', null, [T('div')], -1)),
  Sl = ['data-x', 'data-y'],
  Il = { class: 'bottom left' },
  Rl = { key: 0, class: 'errors' },
  Fl = he(() => T('h1', null, 'Errors', -1)),
  Pl = { key: 0 },
  Ml = { key: 1, class: 'log' },
  kl = he(() => T('h1', null, 'Log', -1)),
  $l = { class: 'bottom right' },
  Ll = { class: 'controls' },
  Nl = he(() => T('h1', null, 'Dimensions', -1)),
  Hl = he(() => T('span', null, 'Width:', -1)),
  Ul = he(() => T('span', null, 'Height:', -1)),
  Dl = he(() => T('h1', null, 'Objects', -1)),
  Bl = he(() =>
    T(
      'p',
      { class: 'hint' },
      '[Left]: insert, [Space]: next subtype, [Ctrl]+[Space]: next type, [Delete]: delete selected.',
      -1
    )
  ),
  Kl = Bi(
    '<option value="deposit" data-v-90cb578b>Deposit</option><option value="obstacle" data-v-90cb578b>Obstacle</option><option value="mine" data-v-90cb578b>Mine</option><option value="conveyor" data-v-90cb578b>Conveyor</option><option value="combiner" data-v-90cb578b>Combiner</option><option value="factory" data-v-90cb578b>Factory</option>',
    6
  ),
  Wl = [Kl],
  Vl = ['value'],
  zl = ['disabled'],
  ql = he(() => T('h1', null, 'Products', -1)),
  Jl = ['value'],
  Yl = he(() => T('span', null, 'Enabled:', -1)),
  Xl = he(() => T('span', null, 'Points:', -1)),
  Zl = he(() => T('p', null, 'Resource requirements:', -1)),
  Ql = ['onUpdate:modelValue'],
  Gl = he(() => T('h1', null, 'Simulation', -1)),
  ec = he(() => T('span', null, 'Turns:', -1)),
  tc = ['disabled'],
  nc = he(() => T('h1', null, 'Persistence', -1)),
  sc = {
    __name: 'WorldComponent',
    setup(e) {
      const t = Be(new pe());
      t.parse({ width: 40, height: 20, objects: [], products: [], turns: 100 });
      const n = Be({}),
        s = Be({}),
        r = Be({}),
        o = Be({}),
        i = $o([]),
        l = Be({
          type: 'deposit',
          subtype: 0,
          width: t.width,
          height: t.height,
          turns: 100,
          product: 0,
          products: Array(pe.numSubtypes.product),
        });
      for (let m = 0; m < pe.numSubtypes.product; m++)
        l.products[m] = {
          type: 'product',
          subtype: m,
          resources: Array(pe.numSubtypes.deposit).fill(0),
          points: 0,
          enabled: !1,
        };
      (l.products[0].enabled = !0),
        (l.products[0].points = 10),
        (l.products[0].resources[0] = 10);
      function u(m) {
        const { x: _, y: p } = m.dataset;
        return [parseInt(_), parseInt(p)];
      }
      function a() {
        switch (l.type) {
          case 'deposit':
            return 'obstacle';
          case 'obstacle':
            return 'mine';
          case 'mine':
            return 'conveyor';
          case 'conveyor':
            return 'combiner';
          case 'combiner':
            return 'factory';
          case 'factory':
            return 'deposit';
          default:
            throw new Error();
        }
      }
      function b(m, _, p) {
        return m.x === _ && m.y === p;
      }
      function w(m, _, p) {
        return (
          ['deposit', 'obstacle'].includes(m.type) &&
          m.x - m.anchor.x + m.width - 1 === _ &&
          m.y - m.anchor.y + m.height - 1 === p
        );
      }
      function E(m, _, p) {
        return _ === 0 || !m.partsAt[[_ - 1, p]];
      }
      function F(m, _, p) {
        return p === 0 || !m.partsAt[[_, p - 1]];
      }
      function K(m, _, p) {
        return _ === t.width - 1 || !m.partsAt[[_ + 1, p]];
      }
      function H(m, _, p) {
        return p === t.height - 1 || !m.partsAt[[_, p + 1]];
      }
      function M(m, _, p) {
        return (
          m.partsAt[[_, p]] === '-' &&
          m.sinks.length > 0 &&
          m.sinks.find((v) => v.coordinates.x === _ && v.coordinates.y === p)
        );
      }
      function L(m, _, p) {
        return (
          m.partsAt[[_, p]] === '+' &&
          m.sources.length > 0 &&
          m.sources.find((v) => v.coordinates.x === _ && v.coordinates.y === p)
        );
      }
      function ge() {
        return [o.object && 'move', r.object && 'resize'];
      }
      function te(m, _) {
        const [p] = t.objectsAt[[m, _]];
        if (!p) return ['empty'];
        const v = [
          'object',
          `${p.type}`,
          (o.object || b(p, m, _)) && 'move',
          (r.object || w(p, m, _)) && 'resize',
          E(p, m, _) && 'border-left',
          F(p, m, _) && 'border-top',
          K(p, m, _) && 'border-right',
          H(p, m, _) && 'border-bottom',
        ];
        for (const le of t.errors)
          if (
            le.coordinates &&
            m === le.coordinates.x &&
            _ === le.coordinates.y
          )
            return v.push('error'), v;
        return (
          p === s.object && v.push('selected'),
          (L(p, m, _) || M(p, m, _)) && v.push('connected'),
          v
        );
      }
      function G(m, _) {
        const [p] = t.objectsAt[[m, _]];
        if (!p) return;
        if (w(p, m, _)) return '\u2921';
        if (b(p, m, _)) return '\u2725';
        const v = p.partsAt[[m, _]];
        switch (v) {
          case '+':
          case '-':
            return v;
          default:
            switch (p.type) {
              case 'obstacle':
                return '\xD7';
              case 'deposit':
                return `${p.subtype}`;
              case 'mine':
                return '\u26CF';
              case 'conveyor':
                return '>';
              case 'combiner':
                return '\u2AA2';
              case 'factory':
                return [1, 3].includes(m - p.x) || [1, 3].includes(_ - p.y)
                  ? '\u26EE'
                  : `${p.subtype}`;
              default:
                throw new Error();
            }
        }
      }
      function re(m, _) {
        switch (l.type) {
          case 'deposit':
            return {
              type: 'deposit',
              subtype: l.subtype,
              x: m,
              y: _,
              width: 3,
              height: 3,
            };
          case 'obstacle':
            return { type: 'obstacle', x: m, y: _, width: 3, height: 3 };
          case 'mine':
            return { type: 'mine', subtype: l.subtype, x: m, y: _ };
          case 'conveyor':
            return { type: 'conveyor', subtype: l.subtype, x: m, y: _ };
          case 'combiner':
            return { type: 'combiner', subtype: l.subtype, x: m, y: _ };
          case 'factory':
            return { type: 'factory', subtype: l.subtype, x: m, y: _ };
          default:
            throw new Error();
        }
      }
      function Le() {
        !s.object || (t.deleteObject(s.object), delete s.object);
      }
      function Ne() {
        t.resize(l.width, l.height);
      }
      function N() {
        t.simulate(), (i.value = [...t.log]);
      }
      function J() {
        t.resetSimulation(), (i.value = []);
      }
      function ee() {
        const fileSelect = document.createElement('input');
        fileSelect.type = 'file';
        fileSelect.setAttribute('id', 'fileSelect');
        fileSelect.addEventListener('change', () => {
          const fileReader = new FileReader();
          fileReader.onload = () => {
            if (fileReader.result) {
              const p = JSON.parse(fileReader.result);
              if (Array.isArray(p)) {
                const [v, le] = p;
                t.parse(v), t.parseObjects(le);
              } else t.parse(p);
              if (
                ((l.width = t.width),
                (l.height = t.height),
                (l.turns = t.turns),
                p.form && p.form.products)
              )
                l.products = p.form.products;
              else {
                l.products = [];
                for (let v = 0; v < pe.numSubtypes.product; v++) {
                  const le = t.products.find((ze) => ze.subtype === v);
                  l.products[v] = {
                    type: 'product',
                    subtype: v,
                    resources: le
                      ? le.resources
                      : Array(pe.numSubtypes.deposit).fill(0),
                    points: le ? le.points : 0,
                    enabled: Boolean(le),
                  };
                }
              }
              J();
            }
          };

          fileReader.readAsText(fileSelect.files[0]);
        });

        const appContainer = document.getElementById('app');
        appContainer.appendChild(fileSelect);
      }
      function oe(m, _, p) {
        const v = document.createElement('a');
        v.setAttribute('download', m),
          (v.href = `data:${_};base64,${btoa(JSON.stringify(p))}`),
          document.body.appendChild(v),
          v.click(),
          v.remove();
      }
      function me() {
        const m = t.toRaw('gui');
        (m.form = { products: l.products }),
          oe(`profit.gui.${Date.now()}.json`, 'application/json', m);
      }
      function Ee() {
        const m = t.toRaw('task');
        oe(`profit.task.${Date.now()}.json`, 'application/json', m);
      }
      function ft() {
        const m = t.toRaw('cli');
        oe(`profit.cli.${Date.now()}.json`, 'application/json', m);
      }
      function Tt(m) {
        const [_, p] = u(m.target);
        if (
          ((n.coordinates = [_, p]),
          n.object && (t.deleteObject(n.object), delete n.object),
          o.object)
        ) {
          m.button === 0 ? t.moveObject(o.object, _, p) : delete o.object;
          return;
        }
        r.object &&
          (m.button === 0
            ? _ >= r.object.x &&
              p >= r.object.y &&
              t.resizeObject(r.object, _ - r.object.x + 1, p - r.object.y + 1)
            : delete r.object);
        const [v] = t.objectsAt[[_, p]];
        v || (n.object = t.parseObject(re(_, p)));
      }
      function ue() {
        const [m, _] = n.coordinates;
        if (n.object) {
          t.deleteObject(n.object),
            delete n.object,
            (s.object = t.parseObject(re(m, _)));
          return;
        }
        const [p] = t.objectsAt[[m, _]];
        if (!p) {
          delete s.object;
          return;
        }
        if (((s.object = p), b(p, m, _))) {
          o.object = p;
          return;
        }
        w(p, m, _) && (r.object = p);
      }
      function Z() {
        delete o.object, delete r.object;
      }
      function W() {
        n.object && (t.deleteObject(n.object), delete n.object),
          delete o.object,
          delete r.object;
      }
      function xe(m) {
        switch (m.code) {
          case 'Delete':
            Le();
            break;
          case 'Space':
            m.ctrlKey
              ? (l.type = a())
              : (l.subtype++,
                l.subtype === pe.numSubtypes[l.type] && (l.subtype = 0));
            {
              t.deleteObject(n.object);
              const [_, p] = n.coordinates;
              n.object = t.parseObject(re(_, p));
            }
            break;
        }
      }
      return (
        wt(
          () => l.type,
          () => (l.subtype = 0)
        ),
        wt(
          () => l.turns,
          (m) => t.setTurns(m),
          { immediate: !0 }
        ),
        wt(
          () => l.products,
          () => t.parseProducts(l.products.filter((m) => m.enabled)),
          { deep: !0, immediate: !0 }
        ),
        ls(() => document.addEventListener('keydown', xe)),
        cs(() => document.removeEventListener('keydown', xe)),
        (m, _) => (
          X(),
          Q('div', Al, [
            T(
              'table',
              {
                class: it(ge()),
                onMousedown: ue,
                onMouseup: Z,
                onMouseleave: W,
              },
              [
                T('tr', null, [
                  Tl,
                  (X(!0),
                  Q(
                    se,
                    null,
                    De(
                      t.width,
                      (p, v) => (
                        X(), Q('td', { key: v }, [T('div', null, je(v), 1)])
                      )
                    ),
                    128
                  )),
                ]),
                (X(!0),
                Q(
                  se,
                  null,
                  De(
                    t.height,
                    (p, v) => (
                      X(),
                      Q('tr', { key: v }, [
                        T('td', null, [T('div', null, je(v), 1)]),
                        (X(!0),
                        Q(
                          se,
                          null,
                          De(
                            t.width,
                            (le, ze) => (
                              X(),
                              Q(
                                'td',
                                { key: ze, class: it(te(ze, v)) },
                                [
                                  T(
                                    'div',
                                    {
                                      'data-x': ze,
                                      'data-y': v,
                                      onMouseenter: Tt,
                                    },
                                    je(G(ze, v)),
                                    41,
                                    Sl
                                  ),
                                ],
                                2
                              )
                            )
                          ),
                          128
                        )),
                      ])
                    )
                  ),
                  128
                )),
              ],
              34
            ),
            T('div', Il, [
              t.errors.length > 0
                ? (X(),
                  Q('div', Rl, [
                    Fl,
                    T('div', null, [
                      T('ul', null, [
                        (X(!0),
                        Q(
                          se,
                          null,
                          De(
                            t.errors,
                            (p, v) => (
                              X(),
                              Q(
                                'li',
                                { key: v, class: it(v % 2 && 'even') },
                                [
                                  p.coordinates
                                    ? (X(),
                                      Q(
                                        'span',
                                        Pl,
                                        '(' +
                                          je(p.coordinates.x) +
                                          ', ' +
                                          je(p.coordinates.y) +
                                          '): ',
                                        1
                                      ))
                                    : Qt('', !0),
                                  Ur(' ' + je(p.message), 1),
                                ],
                                2
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                    ]),
                  ]))
                : Qt('', !0),
              i.value.length > 0
                ? (X(),
                  Q('div', Ml, [
                    kl,
                    T('div', null, [
                      T('ul', null, [
                        (X(!0),
                        Q(
                          se,
                          null,
                          De(
                            i.value,
                            (p, v) => (
                              X(),
                              Q(
                                'li',
                                { key: v, class: it(v % 2 && 'even') },
                                je(p),
                                3
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                    ]),
                  ]))
                : Qt('', !0),
            ]),
            T('div', $l, [
              T('div', Ll, [
                Nl,
                T('p', null, [
                  Hl,
                  Ue(
                    T(
                      'input',
                      {
                        'onUpdate:modelValue':
                          _[0] || (_[0] = (p) => (l.width = p)),
                        type: 'number',
                        style: { width: '50px' },
                      },
                      null,
                      512
                    ),
                    [[It, l.width]]
                  ),
                  Ul,
                  Ue(
                    T(
                      'input',
                      {
                        'onUpdate:modelValue':
                          _[1] || (_[1] = (p) => (l.height = p)),
                        type: 'number',
                        style: { width: '50px' },
                      },
                      null,
                      512
                    ),
                    [[It, l.height]]
                  ),
                  T('button', { onClick: Ne }, 'Resize'),
                ]),
                Dl,
                Bl,
                T('p', null, [
                  Ue(
                    T(
                      'select',
                      {
                        'onUpdate:modelValue':
                          _[2] || (_[2] = (p) => (l.type = p)),
                      },
                      Wl,
                      512
                    ),
                    [[In, l.type]]
                  ),
                  ht(pe).numSubtypes[l.type] > 0
                    ? Ue(
                        (X(),
                        Q(
                          'select',
                          {
                            key: 0,
                            'onUpdate:modelValue':
                              _[3] || (_[3] = (p) => (l.subtype = p)),
                          },
                          [
                            (X(!0),
                            Q(
                              se,
                              null,
                              De(
                                ht(pe).numSubtypes[l.type],
                                (p, v) => (
                                  X(),
                                  Q(
                                    'option',
                                    { key: v, value: v },
                                    'Subtype ' + je(v),
                                    9,
                                    Vl
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          512
                        )),
                        [[In, l.subtype]]
                      )
                    : Qt('', !0),
                  T(
                    'button',
                    { disabled: !s.object, onClick: Le },
                    'Delete selected',
                    8,
                    zl
                  ),
                ]),
                ql,
                T('p', null, [
                  Ue(
                    T(
                      'select',
                      {
                        'onUpdate:modelValue':
                          _[4] || (_[4] = (p) => (l.product = p)),
                      },
                      [
                        (X(!0),
                        Q(
                          se,
                          null,
                          De(
                            ht(pe).numSubtypes.product,
                            (p, v) => (
                              X(),
                              Q(
                                'option',
                                { key: v, value: v },
                                ' Product ' +
                                  je(v) +
                                  je(l.products[v].enabled ? ' *' : ''),
                                9,
                                Jl
                              )
                            )
                          ),
                          128
                        )),
                      ],
                      512
                    ),
                    [[In, l.product]]
                  ),
                ]),
                T('p', null, [
                  T('label', null, [
                    Yl,
                    Ue(
                      T(
                        'input',
                        {
                          'onUpdate:modelValue':
                            _[5] ||
                            (_[5] = (p) => (l.products[l.product].enabled = p)),
                          type: 'checkbox',
                        },
                        null,
                        512
                      ),
                      [[xl, l.products[l.product].enabled]]
                    ),
                  ]),
                  Xl,
                  Ue(
                    T(
                      'input',
                      {
                        'onUpdate:modelValue':
                          _[6] ||
                          (_[6] = (p) => (l.products[l.product].points = p)),
                        type: 'number',
                        style: { width: '50px' },
                      },
                      null,
                      512
                    ),
                    [[It, l.products[l.product].points]]
                  ),
                ]),
                Zl,
                T('div', null, [
                  T('table', null, [
                    T('tr', null, [
                      (X(!0),
                      Q(
                        se,
                        null,
                        De(
                          ht(pe).numSubtypes.deposit,
                          (p, v) => (X(), Q('th', { key: v }, je(v), 1))
                        ),
                        128
                      )),
                    ]),
                    T('tr', null, [
                      (X(!0),
                      Q(
                        se,
                        null,
                        De(
                          ht(pe).numSubtypes.deposit,
                          (p, v) => (
                            X(),
                            Q('td', { key: v }, [
                              Ue(
                                T(
                                  'input',
                                  {
                                    'onUpdate:modelValue': (le) =>
                                      (l.products[l.product].resources[v] = le),
                                    style: { width: '100%' },
                                  },
                                  null,
                                  8,
                                  Ql
                                ),
                                [[It, l.products[l.product].resources[v]]]
                              ),
                            ])
                          )
                        ),
                        128
                      )),
                    ]),
                  ]),
                ]),
                Gl,
                T('p', null, [
                  ec,
                  Ue(
                    T(
                      'input',
                      {
                        'onUpdate:modelValue':
                          _[7] || (_[7] = (p) => (l.turns = p)),
                        type: 'number',
                        style: { width: '50px' },
                      },
                      null,
                      512
                    ),
                    [[It, l.turns]]
                  ),
                  T(
                    'button',
                    { disabled: t.errors.length > 0, onClick: N },
                    'Run',
                    8,
                    tc
                  ),
                  T('button', { onClick: J }, 'Reset'),
                ]),
                nc,
                T('p', null, [
                  T('button', { onClick: ee }, 'Import'),
                  T('button', { onClick: me }, 'Export (GUI)'),
                  T('button', { onClick: Ee }, 'Export (task)'),
                  T('button', { onClick: ft }, 'Export (CLI)'),
                ]),
              ]),
            ]),
          ])
        )
      );
    },
  },
  rc = jl(sc, [['__scopeId', 'data-v-90cb578b']]);
const oc = {
  __name: 'App',
  setup(e) {
    return (t, n) => (X(), Q('main', null, [Fe(rc)]));
  },
};
El(oc).mount('#app');
