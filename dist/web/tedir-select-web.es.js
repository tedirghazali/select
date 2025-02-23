/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function et(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) t[o] = 1;
  return (o) => o in t;
}
const Y = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Tt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ne = () => {
}, ai = () => !1, ro = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Oo = (e) => e.startsWith("onUpdate:"), re = Object.assign, Dr = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, di = Object.prototype.hasOwnProperty, K = (e, t) => di.call(e, t), L = Array.isArray, kt = (e) => Fo(e) === "[object Map]", Ba = (e) => Fo(e) === "[object Set]", B = (e) => typeof e == "function", oe = (e) => typeof e == "string", tt = (e) => typeof e == "symbol", Z = (e) => e !== null && typeof e == "object", Tr = (e) => (Z(e) || B(e)) && B(e.then) && B(e.catch), Fa = Object.prototype.toString, Fo = (e) => Fa.call(e), $r = (e) => Fo(e).slice(8, -1), zo = (e) => Fo(e) === "[object Object]", Mr = (e) => oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, qt = /* @__PURE__ */ et(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ii = /* @__PURE__ */ et(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Ho = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (o) => t[o] || (t[o] = e(o));
}, ni = /-(\w)/g, we = Ho(
  (e) => e.replace(ni, (t, o) => o ? o.toUpperCase() : "")
), li = /\B([A-Z])/g, ye = Ho(
  (e) => e.replace(li, "-$1").toLowerCase()
), Uo = Ho((e) => e.charAt(0).toUpperCase() + e.slice(1)), gt = Ho(
  (e) => e ? `on${Uo(e)}` : ""
), ut = (e, t) => !Object.is(e, t), St = (e, ...t) => {
  for (let o = 0; o < e.length; o++)
    e[o](...t);
}, Io = (e, t, o, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: o
  });
}, hr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ea = (e) => {
  const t = oe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ta;
const ao = () => ta || (ta = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Oe(e) {
  if (L(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const r = e[o], a = oe(r) ? fi(r) : Oe(r);
      if (a)
        for (const d in a)
          t[d] = a[d];
    }
    return t;
  } else if (oe(e) || Z(e))
    return e;
}
const si = /;(?![^(]*\))/g, ci = /:([^]+)/, ui = /\/\*[^]*?\*\//g;
function fi(e) {
  const t = {};
  return e.replace(ui, "").split(si).forEach((o) => {
    if (o) {
      const r = o.split(ci);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ae(e) {
  let t = "";
  if (oe(e))
    t = e;
  else if (L(e))
    for (let o = 0; o < e.length; o++) {
      const r = ae(e[o]);
      r && (t += r + " ");
    }
  else if (Z(e))
    for (const o in e)
      e[o] && (t += o + " ");
  return t.trim();
}
const pi = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", hi = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", bi = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", vi = /* @__PURE__ */ et(pi), gi = /* @__PURE__ */ et(hi), mi = /* @__PURE__ */ et(bi), ki = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", yi = /* @__PURE__ */ et(ki);
function za(e) {
  return !!e || e === "";
}
const Ha = (e) => !!(e && e.__v_isRef === !0), te = (e) => oe(e) ? e : e == null ? "" : L(e) || Z(e) && (e.toString === Fa || !B(e.toString)) ? Ha(e) ? te(e.value) : JSON.stringify(e, Ua, 2) : String(e), Ua = (e, t) => Ha(t) ? Ua(e, t.value) : kt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (o, [r, a], d) => (o[rr(r, d) + " =>"] = a, o),
    {}
  )
} : Ba(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((o) => rr(o))
} : tt(t) ? rr(t) : Z(t) && !L(t) && !zo(t) ? String(t) : t, rr = (e, t = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    tt(e) ? `Symbol(${(o = e.description) != null ? o : t})` : e
  );
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function We(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ne;
class _i {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ne, !t && Ne && (this.index = (Ne.scopes || (Ne.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, o;
      if (this.scopes)
        for (t = 0, o = this.scopes.length; t < o; t++)
          this.scopes[t].pause();
      for (t = 0, o = this.effects.length; t < o; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, o;
      if (this.scopes)
        for (t = 0, o = this.scopes.length; t < o; t++)
          this.scopes[t].resume();
      for (t = 0, o = this.effects.length; t < o; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const o = Ne;
      try {
        return Ne = this, t();
      } finally {
        Ne = o;
      }
    } else process.env.NODE_ENV !== "production" && We("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ne = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ne = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let o, r;
      for (o = 0, r = this.effects.length; o < r; o++)
        this.effects[o].stop();
      for (this.effects.length = 0, o = 0, r = this.cleanups.length; o < r; o++)
        this.cleanups[o]();
      if (this.cleanups.length = 0, this.scopes) {
        for (o = 0, r = this.scopes.length; o < r; o++)
          this.scopes[o].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const a = this.parent.scopes.pop();
        a && a !== this && (this.parent.scopes[this.index] = a, a.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function wi() {
  return Ne;
}
let J;
const ar = /* @__PURE__ */ new WeakSet();
class Wa {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ne && Ne.active && Ne.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ar.has(this) && (ar.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ga(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, oa(this), qa(this);
    const t = J, o = Me;
    J = this, Me = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && J !== this && We(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Ja(this), J = t, Me = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Rr(t);
      this.deps = this.depsTail = void 0, oa(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ar.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    br(this) && this.run();
  }
  get dirty() {
    return br(this);
  }
}
let Ka = 0, Jt, Yt;
function Ga(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Yt, Yt = e;
    return;
  }
  e.next = Jt, Jt = e;
}
function jr() {
  Ka++;
}
function Ar() {
  if (--Ka > 0)
    return;
  if (Yt) {
    let t = Yt;
    for (Yt = void 0; t; ) {
      const o = t.next;
      t.next = void 0, t.flags &= -9, t = o;
    }
  }
  let e;
  for (; Jt; ) {
    let t = Jt;
    for (Jt = void 0; t; ) {
      const o = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = o;
    }
  }
  if (e) throw e;
}
function qa(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ja(e) {
  let t, o = e.depsTail, r = o;
  for (; r; ) {
    const a = r.prevDep;
    r.version === -1 ? (r === o && (o = a), Rr(r), xi(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = a;
  }
  e.deps = t, e.depsTail = o;
}
function br(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ya(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ya(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Zt))
    return;
  e.globalVersion = Zt;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !br(e)) {
    e.flags &= -3;
    return;
  }
  const o = J, r = Me;
  J = e, Me = !0;
  try {
    qa(e);
    const a = e.fn(e._value);
    (t.version === 0 || ut(a, e._value)) && (e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    J = o, Me = r, Ja(e), e.flags &= -3;
  }
}
function Rr(e, t = !1) {
  const { dep: o, prevSub: r, nextSub: a } = e;
  if (r && (r.nextSub = a, e.prevSub = void 0), a && (a.prevSub = r, e.nextSub = void 0), process.env.NODE_ENV !== "production" && o.subsHead === e && (o.subsHead = a), o.subs === e && (o.subs = r, !r && o.computed)) {
    o.computed.flags &= -5;
    for (let d = o.computed.deps; d; d = d.nextDep)
      Rr(d, !0);
  }
  !t && !--o.sc && o.map && o.map.delete(o.key);
}
function xi(e) {
  const { prevDep: t, nextDep: o } = e;
  t && (t.nextDep = o, e.prevDep = void 0), o && (o.prevDep = t, e.nextDep = void 0);
}
let Me = !0;
const Xa = [];
function ot() {
  Xa.push(Me), Me = !1;
}
function rt() {
  const e = Xa.pop();
  Me = e === void 0 ? !0 : e;
}
function oa(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const o = J;
    J = void 0;
    try {
      t();
    } finally {
      J = o;
    }
  }
}
let Zt = 0;
class Ei {
  constructor(t, o) {
    this.sub = t, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Lr {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!J || !Me || J === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== J)
      o = this.activeLink = new Ei(J, this), J.deps ? (o.prevDep = J.depsTail, J.depsTail.nextDep = o, J.depsTail = o) : J.deps = J.depsTail = o, Za(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const r = o.nextDep;
      r.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = r), o.prevDep = J.depsTail, o.nextDep = void 0, J.depsTail.nextDep = o, J.depsTail = o, J.deps === o && (J.deps = r);
    }
    return process.env.NODE_ENV !== "production" && J.onTrack && J.onTrack(
      re(
        {
          effect: J
        },
        t
      )
    ), o;
  }
  trigger(t) {
    this.version++, Zt++, this.notify(t);
  }
  notify(t) {
    jr();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let o = this.subsHead; o; o = o.nextSub)
          o.sub.onTrigger && !(o.sub.flags & 8) && o.sub.onTrigger(
            re(
              {
                effect: o.sub
              },
              t
            )
          );
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      Ar();
    }
  }
}
function Za(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Za(r);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const vr = /* @__PURE__ */ new WeakMap(), yt = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), gr = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Qt = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ie(e, t, o) {
  if (Me && J) {
    let r = vr.get(e);
    r || vr.set(e, r = /* @__PURE__ */ new Map());
    let a = r.get(o);
    a || (r.set(o, a = new Lr()), a.map = r, a.key = o), process.env.NODE_ENV !== "production" ? a.track({
      target: e,
      type: t,
      key: o
    }) : a.track();
  }
}
function Fe(e, t, o, r, a, d) {
  const i = vr.get(e);
  if (!i) {
    Zt++;
    return;
  }
  const n = (s) => {
    s && (process.env.NODE_ENV !== "production" ? s.trigger({
      target: e,
      type: t,
      key: o,
      newValue: r,
      oldValue: a,
      oldTarget: d
    }) : s.trigger());
  };
  if (jr(), t === "clear")
    i.forEach(n);
  else {
    const s = L(e), b = s && Mr(o);
    if (s && o === "length") {
      const p = Number(r);
      i.forEach((c, k) => {
        (k === "length" || k === Qt || !tt(k) && k >= p) && n(c);
      });
    } else
      switch ((o !== void 0 || i.has(void 0)) && n(i.get(o)), b && n(i.get(Qt)), t) {
        case "add":
          s ? b && n(i.get("length")) : (n(i.get(yt)), kt(e) && n(i.get(gr)));
          break;
        case "delete":
          s || (n(i.get(yt)), kt(e) && n(i.get(gr)));
          break;
        case "set":
          kt(e) && n(i.get(yt));
          break;
      }
  }
  Ar();
}
function Ct(e) {
  const t = z(e);
  return t === e ? t : (ie(t, "iterate", Qt), ve(e) ? t : t.map(ue));
}
function Wo(e) {
  return ie(e = z(e), "iterate", Qt), e;
}
const Ni = {
  __proto__: null,
  [Symbol.iterator]() {
    return dr(this, Symbol.iterator, ue);
  },
  concat(...e) {
    return Ct(this).concat(
      ...e.map((t) => L(t) ? Ct(t) : t)
    );
  },
  entries() {
    return dr(this, "entries", (e) => (e[1] = ue(e[1]), e));
  },
  every(e, t) {
    return qe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return qe(this, "filter", e, t, (o) => o.map(ue), arguments);
  },
  find(e, t) {
    return qe(this, "find", e, t, ue, arguments);
  },
  findIndex(e, t) {
    return qe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return qe(this, "findLast", e, t, ue, arguments);
  },
  findLastIndex(e, t) {
    return qe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return qe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ir(this, "includes", e);
  },
  indexOf(...e) {
    return ir(this, "indexOf", e);
  },
  join(e) {
    return Ct(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return ir(this, "lastIndexOf", e);
  },
  map(e, t) {
    return qe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return zt(this, "pop");
  },
  push(...e) {
    return zt(this, "push", e);
  },
  reduce(e, ...t) {
    return ra(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ra(this, "reduceRight", e, t);
  },
  shift() {
    return zt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return qe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return zt(this, "splice", e);
  },
  toReversed() {
    return Ct(this).toReversed();
  },
  toSorted(e) {
    return Ct(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ct(this).toSpliced(...e);
  },
  unshift(...e) {
    return zt(this, "unshift", e);
  },
  values() {
    return dr(this, "values", ue);
  }
};
function dr(e, t, o) {
  const r = Wo(e), a = r[t]();
  return r !== e && !ve(e) && (a._next = a.next, a.next = () => {
    const d = a._next();
    return d.value && (d.value = o(d.value)), d;
  }), a;
}
const Ci = Array.prototype;
function qe(e, t, o, r, a, d) {
  const i = Wo(e), n = i !== e && !ve(e), s = i[t];
  if (s !== Ci[t]) {
    const c = s.apply(e, d);
    return n ? ue(c) : c;
  }
  let b = o;
  i !== e && (n ? b = function(c, k) {
    return o.call(this, ue(c), k, e);
  } : o.length > 2 && (b = function(c, k) {
    return o.call(this, c, k, e);
  }));
  const p = s.call(i, b, r);
  return n && a ? a(p) : p;
}
function ra(e, t, o, r) {
  const a = Wo(e);
  let d = o;
  return a !== e && (ve(e) ? o.length > 3 && (d = function(i, n, s) {
    return o.call(this, i, n, s, e);
  }) : d = function(i, n, s) {
    return o.call(this, i, ue(n), s, e);
  }), a[t](d, ...r);
}
function ir(e, t, o) {
  const r = z(e);
  ie(r, "iterate", Qt);
  const a = r[t](...o);
  return (a === -1 || a === !1) && So(o[0]) ? (o[0] = z(o[0]), r[t](...o)) : a;
}
function zt(e, t, o = []) {
  ot(), jr();
  const r = z(e)[t].apply(e, o);
  return Ar(), rt(), r;
}
const Oi = /* @__PURE__ */ et("__proto__,__v_isRef,__isVue"), Qa = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(tt)
);
function Ii(e) {
  tt(e) || (e = String(e));
  const t = z(this);
  return ie(t, "has", e), t.hasOwnProperty(e);
}
class ed {
  constructor(t = !1, o = !1) {
    this._isReadonly = t, this._isShallow = o;
  }
  get(t, o, r) {
    if (o === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, d = this._isShallow;
    if (o === "__v_isReactive")
      return !a;
    if (o === "__v_isReadonly")
      return a;
    if (o === "__v_isShallow")
      return d;
    if (o === "__v_raw")
      return r === (a ? d ? id : dd : d ? ad : rd).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = L(t);
    if (!a) {
      let s;
      if (i && (s = Ni[o]))
        return s;
      if (o === "hasOwnProperty")
        return Ii;
    }
    const n = Reflect.get(
      t,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      de(t) ? t : r
    );
    return (tt(o) ? Qa.has(o) : Oi(o)) || (a || ie(t, "get", o), d) ? n : de(n) ? i && Mr(o) ? n : n.value : Z(n) ? a ? nd(n) : Go(n) : n;
  }
}
class td extends ed {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, r, a) {
    let d = t[o];
    if (!this._isShallow) {
      const s = Xe(d);
      if (!ve(r) && !Xe(r) && (d = z(d), r = z(r)), !L(t) && de(d) && !de(r))
        return s ? !1 : (d.value = r, !0);
    }
    const i = L(t) && Mr(o) ? Number(o) < t.length : K(t, o), n = Reflect.set(
      t,
      o,
      r,
      de(t) ? t : a
    );
    return t === z(a) && (i ? ut(r, d) && Fe(t, "set", o, r, d) : Fe(t, "add", o, r)), n;
  }
  deleteProperty(t, o) {
    const r = K(t, o), a = t[o], d = Reflect.deleteProperty(t, o);
    return d && r && Fe(t, "delete", o, void 0, a), d;
  }
  has(t, o) {
    const r = Reflect.has(t, o);
    return (!tt(o) || !Qa.has(o)) && ie(t, "has", o), r;
  }
  ownKeys(t) {
    return ie(
      t,
      "iterate",
      L(t) ? "length" : yt
    ), Reflect.ownKeys(t);
  }
}
class od extends ed {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, o) {
    return process.env.NODE_ENV !== "production" && We(
      `Set operation on key "${String(o)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, o) {
    return process.env.NODE_ENV !== "production" && We(
      `Delete operation on key "${String(o)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Si = /* @__PURE__ */ new td(), Vi = /* @__PURE__ */ new od(), Di = /* @__PURE__ */ new td(!0), Ti = /* @__PURE__ */ new od(!0), mr = (e) => e, bo = (e) => Reflect.getPrototypeOf(e);
function $i(e, t, o) {
  return function(...r) {
    const a = this.__v_raw, d = z(a), i = kt(d), n = e === "entries" || e === Symbol.iterator && i, s = e === "keys" && i, b = a[e](...r), p = o ? mr : t ? kr : ue;
    return !t && ie(
      d,
      "iterate",
      s ? gr : yt
    ), {
      // iterator protocol
      next() {
        const { value: c, done: k } = b.next();
        return k ? { value: c, done: k } : {
          value: n ? [p(c[0]), p(c[1])] : p(c),
          done: k
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function vo(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const o = t[0] ? `on key "${t[0]}" ` : "";
      We(
        `${Uo(e)} operation ${o}failed: target is readonly.`,
        z(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Mi(e, t) {
  const o = {
    get(a) {
      const d = this.__v_raw, i = z(d), n = z(a);
      e || (ut(a, n) && ie(i, "get", a), ie(i, "get", n));
      const { has: s } = bo(i), b = t ? mr : e ? kr : ue;
      if (s.call(i, a))
        return b(d.get(a));
      if (s.call(i, n))
        return b(d.get(n));
      d !== i && d.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && ie(z(a), "iterate", yt), Reflect.get(a, "size", a);
    },
    has(a) {
      const d = this.__v_raw, i = z(d), n = z(a);
      return e || (ut(a, n) && ie(i, "has", a), ie(i, "has", n)), a === n ? d.has(a) : d.has(a) || d.has(n);
    },
    forEach(a, d) {
      const i = this, n = i.__v_raw, s = z(n), b = t ? mr : e ? kr : ue;
      return !e && ie(s, "iterate", yt), n.forEach((p, c) => a.call(d, b(p), b(c), i));
    }
  };
  return re(
    o,
    e ? {
      add: vo("add"),
      set: vo("set"),
      delete: vo("delete"),
      clear: vo("clear")
    } : {
      add(a) {
        !t && !ve(a) && !Xe(a) && (a = z(a));
        const d = z(this);
        return bo(d).has.call(d, a) || (d.add(a), Fe(d, "add", a, a)), this;
      },
      set(a, d) {
        !t && !ve(d) && !Xe(d) && (d = z(d));
        const i = z(this), { has: n, get: s } = bo(i);
        let b = n.call(i, a);
        b ? process.env.NODE_ENV !== "production" && aa(i, n, a) : (a = z(a), b = n.call(i, a));
        const p = s.call(i, a);
        return i.set(a, d), b ? ut(d, p) && Fe(i, "set", a, d, p) : Fe(i, "add", a, d), this;
      },
      delete(a) {
        const d = z(this), { has: i, get: n } = bo(d);
        let s = i.call(d, a);
        s ? process.env.NODE_ENV !== "production" && aa(d, i, a) : (a = z(a), s = i.call(d, a));
        const b = n ? n.call(d, a) : void 0, p = d.delete(a);
        return s && Fe(d, "delete", a, void 0, b), p;
      },
      clear() {
        const a = z(this), d = a.size !== 0, i = process.env.NODE_ENV !== "production" ? kt(a) ? new Map(a) : new Set(a) : void 0, n = a.clear();
        return d && Fe(
          a,
          "clear",
          void 0,
          void 0,
          i
        ), n;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((a) => {
    o[a] = $i(a, e, t);
  }), o;
}
function Ko(e, t) {
  const o = Mi(e, t);
  return (r, a, d) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? r : Reflect.get(
    K(o, a) && a in r ? o : r,
    a,
    d
  );
}
const ji = {
  get: /* @__PURE__ */ Ko(!1, !1)
}, Ai = {
  get: /* @__PURE__ */ Ko(!1, !0)
}, Ri = {
  get: /* @__PURE__ */ Ko(!0, !1)
}, Li = {
  get: /* @__PURE__ */ Ko(!0, !0)
};
function aa(e, t, o) {
  const r = z(o);
  if (r !== o && t.call(e, r)) {
    const a = $r(e);
    We(
      `Reactive ${a} contains both the raw and reactive versions of the same object${a === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const rd = /* @__PURE__ */ new WeakMap(), ad = /* @__PURE__ */ new WeakMap(), dd = /* @__PURE__ */ new WeakMap(), id = /* @__PURE__ */ new WeakMap();
function Pi(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Bi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Pi($r(e));
}
function Go(e) {
  return Xe(e) ? e : qo(
    e,
    !1,
    Si,
    ji,
    rd
  );
}
function Fi(e) {
  return qo(
    e,
    !1,
    Di,
    Ai,
    ad
  );
}
function nd(e) {
  return qo(
    e,
    !0,
    Vi,
    Ri,
    dd
  );
}
function ze(e) {
  return qo(
    e,
    !0,
    Ti,
    Li,
    id
  );
}
function qo(e, t, o, r, a) {
  if (!Z(e))
    return process.env.NODE_ENV !== "production" && We(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const d = a.get(e);
  if (d)
    return d;
  const i = Bi(e);
  if (i === 0)
    return e;
  const n = new Proxy(
    e,
    i === 2 ? r : o
  );
  return a.set(e, n), n;
}
function _t(e) {
  return Xe(e) ? _t(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Xe(e) {
  return !!(e && e.__v_isReadonly);
}
function ve(e) {
  return !!(e && e.__v_isShallow);
}
function So(e) {
  return e ? !!e.__v_raw : !1;
}
function z(e) {
  const t = e && e.__v_raw;
  return t ? z(t) : e;
}
function zi(e) {
  return !K(e, "__v_skip") && Object.isExtensible(e) && Io(e, "__v_skip", !0), e;
}
const ue = (e) => Z(e) ? Go(e) : e, kr = (e) => Z(e) ? nd(e) : e;
function de(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ee(e) {
  return Hi(e, !1);
}
function Hi(e, t) {
  return de(e) ? e : new Ui(e, t);
}
class Ui {
  constructor(t, o) {
    this.dep = new Lr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? t : z(t), this._value = o ? t : ue(t), this.__v_isShallow = o;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const o = this._rawValue, r = this.__v_isShallow || ve(t) || Xe(t);
    t = r ? t : z(t), ut(t, o) && (this._rawValue = t, this._value = r ? t : ue(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: o
    }) : this.dep.trigger());
  }
}
function _e(e) {
  return de(e) ? e.value : e;
}
const Wi = {
  get: (e, t, o) => t === "__v_raw" ? e : _e(Reflect.get(e, t, o)),
  set: (e, t, o, r) => {
    const a = e[t];
    return de(a) && !de(o) ? (a.value = o, !0) : Reflect.set(e, t, o, r);
  }
};
function ld(e) {
  return _t(e) ? e : new Proxy(e, Wi);
}
class Ki {
  constructor(t, o, r) {
    this.fn = t, this.setter = o, this._value = void 0, this.dep = new Lr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Zt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    J !== this)
      return Ga(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Ya(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && We("Write operation failed: computed value is readonly");
  }
}
function Gi(e, t, o = !1) {
  let r, a;
  B(e) ? r = e : (r = e.get, a = e.set);
  const d = new Ki(r, a, o);
  return process.env.NODE_ENV, d;
}
const go = {}, Vo = /* @__PURE__ */ new WeakMap();
let mt;
function qi(e, t = !1, o = mt) {
  if (o) {
    let r = Vo.get(o);
    r || Vo.set(o, r = []), r.push(e);
  } else process.env.NODE_ENV !== "production" && !t && We(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Ji(e, t, o = Y) {
  const { immediate: r, deep: a, once: d, scheduler: i, augmentJob: n, call: s } = o, b = ($) => {
    (o.onWarn || We)(
      "Invalid watch source: ",
      $,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = ($) => a ? $ : ve($) || a === !1 || a === 0 ? Ye($, 1) : Ye($);
  let c, k, E, y, N = !1, w = !1;
  if (de(e) ? (k = () => e.value, N = ve(e)) : _t(e) ? (k = () => p(e), N = !0) : L(e) ? (w = !0, N = e.some(($) => _t($) || ve($)), k = () => e.map(($) => {
    if (de($))
      return $.value;
    if (_t($))
      return p($);
    if (B($))
      return s ? s($, 2) : $();
    process.env.NODE_ENV !== "production" && b($);
  })) : B(e) ? t ? k = s ? () => s(e, 2) : e : k = () => {
    if (E) {
      ot();
      try {
        E();
      } finally {
        rt();
      }
    }
    const $ = mt;
    mt = c;
    try {
      return s ? s(e, 3, [y]) : e(y);
    } finally {
      mt = $;
    }
  } : (k = ne, process.env.NODE_ENV !== "production" && b(e)), t && a) {
    const $ = k, q = a === !0 ? 1 / 0 : a;
    k = () => Ye($(), q);
  }
  const g = wi(), u = () => {
    c.stop(), g && g.active && Dr(g.effects, c);
  };
  if (d && t) {
    const $ = t;
    t = (...q) => {
      $(...q), u();
    };
  }
  let h = w ? new Array(e.length).fill(go) : go;
  const m = ($) => {
    if (!(!(c.flags & 1) || !c.dirty && !$))
      if (t) {
        const q = c.run();
        if (a || N || (w ? q.some((Ie, ce) => ut(Ie, h[ce])) : ut(q, h))) {
          E && E();
          const Ie = mt;
          mt = c;
          try {
            const ce = [
              q,
              // pass undefined as the old value when it's changed for the first time
              h === go ? void 0 : w && h[0] === go ? [] : h,
              y
            ];
            s ? s(t, 3, ce) : (
              // @ts-expect-error
              t(...ce)
            ), h = q;
          } finally {
            mt = Ie;
          }
        }
      } else
        c.run();
  };
  return n && n(m), c = new Wa(k), c.scheduler = i ? () => i(m, !1) : m, y = ($) => qi($, !1, c), E = c.onStop = () => {
    const $ = Vo.get(c);
    if ($) {
      if (s)
        s($, 4);
      else
        for (const q of $) q();
      Vo.delete(c);
    }
  }, process.env.NODE_ENV !== "production" && (c.onTrack = o.onTrack, c.onTrigger = o.onTrigger), t ? r ? m(!0) : h = c.run() : i ? i(m.bind(null, !0), !0) : c.run(), u.pause = c.pause.bind(c), u.resume = c.resume.bind(c), u.stop = u, u;
}
function Ye(e, t = 1 / 0, o) {
  if (t <= 0 || !Z(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Set(), o.has(e)))
    return e;
  if (o.add(e), t--, de(e))
    Ye(e.value, t, o);
  else if (L(e))
    for (let r = 0; r < e.length; r++)
      Ye(e[r], t, o);
  else if (Ba(e) || kt(e))
    e.forEach((r) => {
      Ye(r, t, o);
    });
  else if (zo(e)) {
    for (const r in e)
      Ye(e[r], t, o);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Ye(e[r], t, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const wt = [];
function mo(e) {
  wt.push(e);
}
function ko() {
  wt.pop();
}
let nr = !1;
function V(e, ...t) {
  if (nr) return;
  nr = !0, ot();
  const o = wt.length ? wt[wt.length - 1].component : null, r = o && o.appContext.config.warnHandler, a = Yi();
  if (r)
    At(
      r,
      o,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((d) => {
          var i, n;
          return (n = (i = d.toString) == null ? void 0 : i.call(d)) != null ? n : JSON.stringify(d);
        }).join(""),
        o && o.proxy,
        a.map(
          ({ vnode: d }) => `at <${Qo(o, d.type)}>`
        ).join(`
`),
        a
      ]
    );
  else {
    const d = [`[Vue warn]: ${e}`, ...t];
    a.length && d.push(`
`, ...Xi(a)), console.warn(...d);
  }
  rt(), nr = !1;
}
function Yi() {
  let e = wt[wt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const o = t[0];
    o && o.vnode === e ? o.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function Xi(e) {
  const t = [];
  return e.forEach((o, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Zi(o));
  }), t;
}
function Zi({ vnode: e, recurseCount: t }) {
  const o = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, a = ` at <${Qo(
    e.component,
    e.type,
    r
  )}`, d = ">" + o;
  return e.props ? [a, ...Qi(e.props), d] : [a + d];
}
function Qi(e) {
  const t = [], o = Object.keys(e);
  return o.slice(0, 3).forEach((r) => {
    t.push(...sd(r, e[r]));
  }), o.length > 3 && t.push(" ..."), t;
}
function sd(e, t, o) {
  return oe(t) ? (t = JSON.stringify(t), o ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? o ? t : [`${e}=${t}`] : de(t) ? (t = sd(e, z(t.value), !0), o ? t : [`${e}=Ref<`, t, ">"]) : B(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = z(t), o ? t : [`${e}=`, t]);
}
const Pr = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function At(e, t, o, r) {
  try {
    return r ? e(...r) : e();
  } catch (a) {
    io(a, t, o);
  }
}
function Ke(e, t, o, r) {
  if (B(e)) {
    const a = At(e, t, o, r);
    return a && Tr(a) && a.catch((d) => {
      io(d, t, o);
    }), a;
  }
  if (L(e)) {
    const a = [];
    for (let d = 0; d < e.length; d++)
      a.push(Ke(e[d], t, o, r));
    return a;
  } else process.env.NODE_ENV !== "production" && V(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function io(e, t, o, r = !0) {
  const a = t ? t.vnode : null, { errorHandler: d, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Y;
  if (t) {
    let n = t.parent;
    const s = t.proxy, b = process.env.NODE_ENV !== "production" ? Pr[o] : `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; n; ) {
      const p = n.ec;
      if (p) {
        for (let c = 0; c < p.length; c++)
          if (p[c](e, s, b) === !1)
            return;
      }
      n = n.parent;
    }
    if (d) {
      ot(), At(d, null, 10, [
        e,
        s,
        b
      ]), rt();
      return;
    }
  }
  en(e, o, a, r, i);
}
function en(e, t, o, r = !0, a = !1) {
  if (process.env.NODE_ENV !== "production") {
    const d = Pr[t];
    if (o && mo(o), V(`Unhandled error${d ? ` during execution of ${d}` : ""}`), o && ko(), r)
      throw e;
    console.error(e);
  } else {
    if (a)
      throw e;
    console.error(e);
  }
}
const he = [];
let Be = -1;
const $t = [];
let lt = null, Vt = 0;
const cd = /* @__PURE__ */ Promise.resolve();
let Do = null;
const tn = 100;
function ud(e) {
  const t = Do || cd;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function on(e) {
  let t = Be + 1, o = he.length;
  for (; t < o; ) {
    const r = t + o >>> 1, a = he[r], d = eo(a);
    d < e || d === e && a.flags & 2 ? t = r + 1 : o = r;
  }
  return t;
}
function Jo(e) {
  if (!(e.flags & 1)) {
    const t = eo(e), o = he[he.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= eo(o) ? he.push(e) : he.splice(on(t), 0, e), e.flags |= 1, fd();
  }
}
function fd() {
  Do || (Do = cd.then(bd));
}
function pd(e) {
  L(e) ? $t.push(...e) : lt && e.id === -1 ? lt.splice(Vt + 1, 0, e) : e.flags & 1 || ($t.push(e), e.flags |= 1), fd();
}
function da(e, t, o = Be + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); o < he.length; o++) {
    const r = he[o];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid || process.env.NODE_ENV !== "production" && Br(t, r))
        continue;
      he.splice(o, 1), o--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function hd(e) {
  if ($t.length) {
    const t = [...new Set($t)].sort(
      (o, r) => eo(o) - eo(r)
    );
    if ($t.length = 0, lt) {
      lt.push(...t);
      return;
    }
    for (lt = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Vt = 0; Vt < lt.length; Vt++) {
      const o = lt[Vt];
      process.env.NODE_ENV !== "production" && Br(e, o) || (o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2);
    }
    lt = null, Vt = 0;
  }
}
const eo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function bd(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (o) => Br(e, o) : ne;
  try {
    for (Be = 0; Be < he.length; Be++) {
      const o = he[Be];
      if (o && !(o.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(o))
          continue;
        o.flags & 4 && (o.flags &= -2), At(
          o,
          o.i,
          o.i ? 15 : 14
        ), o.flags & 4 || (o.flags &= -2);
      }
    }
  } finally {
    for (; Be < he.length; Be++) {
      const o = he[Be];
      o && (o.flags &= -2);
    }
    Be = -1, he.length = 0, hd(e), Do = null, (he.length || $t.length) && bd(e);
  }
}
function Br(e, t) {
  const o = e.get(t) || 0;
  if (o > tn) {
    const r = t.i, a = r && Yd(r.type);
    return io(
      `Maximum recursive updates exceeded${a ? ` in component <${a}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, o + 1), !1;
}
let He = !1;
const yo = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (ao().__VUE_HMR_RUNTIME__ = {
  createRecord: lr(vd),
  rerender: lr(dn),
  reload: lr(nn)
});
const Et = /* @__PURE__ */ new Map();
function rn(e) {
  const t = e.type.__hmrId;
  let o = Et.get(t);
  o || (vd(t, e.type), o = Et.get(t)), o.instances.add(e);
}
function an(e) {
  Et.get(e.type.__hmrId).instances.delete(e);
}
function vd(e, t) {
  return Et.has(e) ? !1 : (Et.set(e, {
    initialDef: To(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function To(e) {
  return Xd(e) ? e.__vccOpts : e;
}
function dn(e, t) {
  const o = Et.get(e);
  o && (o.initialDef.render = t, [...o.instances].forEach((r) => {
    t && (r.render = t, To(r.type).render = t), r.renderCache = [], He = !0, r.update(), He = !1;
  }));
}
function nn(e, t) {
  const o = Et.get(e);
  if (!o) return;
  t = To(t), ia(o.initialDef, t);
  const r = [...o.instances];
  for (let a = 0; a < r.length; a++) {
    const d = r[a], i = To(d.type);
    let n = yo.get(i);
    n || (i !== o.initialDef && ia(i, t), yo.set(i, n = /* @__PURE__ */ new Set())), n.add(d), d.appContext.propsCache.delete(d.type), d.appContext.emitsCache.delete(d.type), d.appContext.optionsCache.delete(d.type), d.ceReload ? (n.add(d), d.ceReload(t.styles), n.delete(d)) : d.parent ? Jo(() => {
      He = !0, d.parent.update(), He = !1, n.delete(d);
    }) : d.appContext.reload ? d.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), d.root.ce && d !== d.root && d.root.ce._removeChildStyle(i);
  }
  pd(() => {
    yo.clear();
  });
}
function ia(e, t) {
  re(e, t);
  for (const o in e)
    o !== "__file" && !(o in t) && delete e[o];
}
function lr(e) {
  return (t, o) => {
    try {
      return e(t, o);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let $e, Kt = [], yr = !1;
function no(e, ...t) {
  $e ? $e.emit(e, ...t) : yr || Kt.push({ event: e, args: t });
}
function Fr(e, t) {
  var o, r;
  $e = e, $e ? ($e.enabled = !0, Kt.forEach(({ event: a, args: d }) => $e.emit(a, ...d)), Kt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (o = window.navigator) == null ? void 0 : o.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((d) => {
    Fr(d, t);
  }), setTimeout(() => {
    $e || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, yr = !0, Kt = []);
  }, 3e3)) : (yr = !0, Kt = []);
}
function ln(e, t) {
  no("app:init", e, t, {
    Fragment: G,
    Text: lo,
    Comment: Se,
    Static: xo
  });
}
function sn(e) {
  no("app:unmount", e);
}
const cn = /* @__PURE__ */ zr(
  "component:added"
  /* COMPONENT_ADDED */
), gd = /* @__PURE__ */ zr(
  "component:updated"
  /* COMPONENT_UPDATED */
), un = /* @__PURE__ */ zr(
  "component:removed"
  /* COMPONENT_REMOVED */
), fn = (e) => {
  $e && typeof $e.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !$e.cleanupBuffer(e) && un(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function zr(e) {
  return (t) => {
    no(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const pn = /* @__PURE__ */ md(
  "perf:start"
  /* PERFORMANCE_START */
), hn = /* @__PURE__ */ md(
  "perf:end"
  /* PERFORMANCE_END */
);
function md(e) {
  return (t, o, r) => {
    no(e, t.appContext.app, t.uid, t, o, r);
  };
}
function bn(e, t, o) {
  no(
    "component:emit",
    e.appContext.app,
    e,
    t,
    o
  );
}
let le = null, kd = null;
function $o(e) {
  const t = le;
  return le = e, kd = e && e.type.__scopeId || null, t;
}
function vn(e, t = le, o) {
  if (!t || e._n)
    return e;
  const r = (...a) => {
    r._d && ma(-1);
    const d = $o(t);
    let i;
    try {
      i = e(...a);
    } finally {
      $o(d), r._d && ma(1);
    }
    return process.env.NODE_ENV !== "production" && gd(t), i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function yd(e) {
  ii(e) && V("Do not use built-in directive ids as custom directive id: " + e);
}
function Mo(e, t) {
  if (le === null)
    return process.env.NODE_ENV !== "production" && V("withDirectives can only be used inside render functions."), e;
  const o = Zo(le), r = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [d, i, n, s = Y] = t[a];
    d && (B(d) && (d = {
      mounted: d,
      updated: d
    }), d.deep && Ye(i), r.push({
      dir: d,
      instance: o,
      value: i,
      oldValue: void 0,
      arg: n,
      modifiers: s
    }));
  }
  return e;
}
function bt(e, t, o, r) {
  const a = e.dirs, d = t && t.dirs;
  for (let i = 0; i < a.length; i++) {
    const n = a[i];
    d && (n.oldValue = d[i].value);
    let s = n.dir[r];
    s && (ot(), Ke(s, o, 8, [
      e.el,
      n,
      e,
      t
    ]), rt());
  }
}
const gn = Symbol("_vte"), mn = (e) => e.__isTeleport;
function Hr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Hr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Rt(e, t) {
  return B(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    re({ name: e.name }, t, { setup: e })
  ) : e;
}
function _d(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const kn = /* @__PURE__ */ new WeakSet();
function jo(e, t, o, r, a = !1) {
  if (L(e)) {
    e.forEach(
      (y, N) => jo(
        y,
        t && (L(t) ? t[N] : t),
        o,
        r,
        a
      )
    );
    return;
  }
  if (Mt(r) && !a) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && jo(e, t, o, r.component.subTree);
    return;
  }
  const d = r.shapeFlag & 4 ? Zo(r.component) : r.el, i = a ? null : d, { i: n, r: s } = e;
  if (process.env.NODE_ENV !== "production" && !n) {
    V(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const b = t && t.r, p = n.refs === Y ? n.refs = {} : n.refs, c = n.setupState, k = z(c), E = c === Y ? () => !1 : (y) => process.env.NODE_ENV !== "production" && (K(k, y) && !de(k[y]) && V(
    `Template ref "${y}" used on a non-ref value. It will not work in the production build.`
  ), kn.has(k[y])) ? !1 : K(k, y);
  if (b != null && b !== s && (oe(b) ? (p[b] = null, E(b) && (c[b] = null)) : de(b) && (b.value = null)), B(s))
    At(s, n, 12, [i, p]);
  else {
    const y = oe(s), N = de(s);
    if (y || N) {
      const w = () => {
        if (e.f) {
          const g = y ? E(s) ? c[s] : p[s] : s.value;
          a ? L(g) && Dr(g, d) : L(g) ? g.includes(d) || g.push(d) : y ? (p[s] = [d], E(s) && (c[s] = p[s])) : (s.value = [d], e.k && (p[e.k] = s.value));
        } else y ? (p[s] = i, E(s) && (c[s] = i)) : N ? (s.value = i, e.k && (p[e.k] = i)) : process.env.NODE_ENV !== "production" && V("Invalid template ref type:", s, `(${typeof s})`);
      };
      i ? (w.id = -1, Ee(w, o)) : w();
    } else process.env.NODE_ENV !== "production" && V("Invalid template ref type:", s, `(${typeof s})`);
  }
}
ao().requestIdleCallback;
ao().cancelIdleCallback;
const Mt = (e) => !!e.type.__asyncLoader, Ur = (e) => e.type.__isKeepAlive;
function yn(e, t) {
  wd(e, "a", t);
}
function _n(e, t) {
  wd(e, "da", t);
}
function wd(e, t, o = se) {
  const r = e.__wdc || (e.__wdc = () => {
    let a = o;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Yo(t, r, o), o) {
    let a = o.parent;
    for (; a && a.parent; )
      Ur(a.parent.vnode) && wn(r, t, o, a), a = a.parent;
  }
}
function wn(e, t, o, r) {
  const a = Yo(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  xd(() => {
    Dr(r[t], a);
  }, o);
}
function Yo(e, t, o = se, r = !1) {
  if (o) {
    const a = o[e] || (o[e] = []), d = t.__weh || (t.__weh = (...i) => {
      ot();
      const n = co(o), s = Ke(t, o, e, i);
      return n(), rt(), s;
    });
    return r ? a.unshift(d) : a.push(d), d;
  } else if (process.env.NODE_ENV !== "production") {
    const a = gt(Pr[e].replace(/ hook$/, ""));
    V(
      `${a} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const at = (e) => (t, o = se) => {
  (!oo || e === "sp") && Yo(e, (...r) => t(...r), o);
}, xn = at("bm"), En = at("m"), Nn = at(
  "bu"
), Cn = at("u"), On = at(
  "bum"
), xd = at("um"), In = at(
  "sp"
), Sn = at("rtg"), Vn = at("rtc");
function Dn(e, t = se) {
  Yo("ec", e, t);
}
const Tn = Symbol.for("v-ndc");
function Ze(e, t, o, r) {
  let a;
  const d = o, i = L(e);
  if (i || oe(e)) {
    const n = i && _t(e);
    let s = !1;
    n && (s = !ve(e), e = Wo(e)), a = new Array(e.length);
    for (let b = 0, p = e.length; b < p; b++)
      a[b] = t(
        s ? ue(e[b]) : e[b],
        b,
        void 0,
        d
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && V(`The v-for range expect an integer value but got ${e}.`), a = new Array(e);
    for (let n = 0; n < e; n++)
      a[n] = t(n + 1, n, void 0, d);
  } else if (Z(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (n, s) => t(n, s, void 0, d)
      );
    else {
      const n = Object.keys(e);
      a = new Array(n.length);
      for (let s = 0, b = n.length; s < b; s++) {
        const p = n[s];
        a[s] = t(e[p], p, s, d);
      }
    }
  else
    a = [];
  return a;
}
function pt(e, t, o = {}, r, a) {
  if (le.ce || le.parent && Mt(le.parent) && le.parent.ce)
    return M(), ka(
      G,
      null,
      [Ue("slot", o, r)],
      64
    );
  let d = e[t];
  process.env.NODE_ENV !== "production" && d && d.length > 1 && (V(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), d = () => []), d && d._c && (d._d = !1), M();
  const i = d && Ed(d(o)), n = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, s = ka(
    G,
    {
      key: (n && !tt(n) ? n : `_${t}`) + // #7256 force differentiate fallback content from actual content
      ""
    },
    i || [],
    i && e._ === 1 ? 64 : -2
  );
  return d && d._c && (d._d = !0), s;
}
function Ed(e) {
  return e.some((t) => so(t) ? !(t.type === Se || t.type === G && !Ed(t.children)) : !0) ? e : null;
}
const _r = (e) => e ? qd(e) ? Zo(e) : _r(e.parent) : null, xt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ re(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? ze(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? ze(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? ze(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? ze(e.refs) : e.refs,
    $parent: (e) => _r(e.parent),
    $root: (e) => _r(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Od(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Jo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ud.bind(e.proxy)),
    $watch: (e) => ul.bind(e)
  })
), Wr = (e) => e === "_" || e === "$", sr = (e, t) => e !== Y && !e.__isScriptSetup && K(e, t), Nd = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: o, setupState: r, data: a, props: d, accessCache: i, type: n, appContext: s } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let b;
    if (t[0] !== "$") {
      const E = i[t];
      if (E !== void 0)
        switch (E) {
          case 1:
            return r[t];
          case 2:
            return a[t];
          case 4:
            return o[t];
          case 3:
            return d[t];
        }
      else {
        if (sr(r, t))
          return i[t] = 1, r[t];
        if (a !== Y && K(a, t))
          return i[t] = 2, a[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (b = e.propsOptions[0]) && K(b, t)
        )
          return i[t] = 3, d[t];
        if (o !== Y && K(o, t))
          return i[t] = 4, o[t];
        wr && (i[t] = 0);
      }
    }
    const p = xt[t];
    let c, k;
    if (p)
      return t === "$attrs" ? (ie(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && Lo()) : process.env.NODE_ENV !== "production" && t === "$slots" && ie(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (c = n.__cssModules) && (c = c[t])
    )
      return c;
    if (o !== Y && K(o, t))
      return i[t] = 4, o[t];
    if (
      // global properties
      k = s.config.globalProperties, K(k, t)
    )
      return k[t];
    process.env.NODE_ENV !== "production" && le && (!oe(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (a !== Y && Wr(t[0]) && K(a, t) ? V(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === le && V(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, o) {
    const { data: r, setupState: a, ctx: d } = e;
    return sr(a, t) ? (a[t] = o, !0) : process.env.NODE_ENV !== "production" && a.__isScriptSetup && K(a, t) ? (V(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== Y && K(r, t) ? (r[t] = o, !0) : K(e.props, t) ? (process.env.NODE_ENV !== "production" && V(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && V(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(d, t, {
      enumerable: !0,
      configurable: !0,
      value: o
    }) : d[t] = o, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: o, ctx: r, appContext: a, propsOptions: d }
  }, i) {
    let n;
    return !!o[i] || e !== Y && K(e, i) || sr(t, i) || (n = d[0]) && K(n, i) || K(r, i) || K(xt, i) || K(a.config.globalProperties, i);
  },
  defineProperty(e, t, o) {
    return o.get != null ? e._.accessCache[t] = 0 : K(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o);
  }
};
process.env.NODE_ENV !== "production" && (Nd.ownKeys = (e) => (V(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function $n(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(xt).forEach((o) => {
    Object.defineProperty(t, o, {
      configurable: !0,
      enumerable: !1,
      get: () => xt[o](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ne
    });
  }), t;
}
function Mn(e) {
  const {
    ctx: t,
    propsOptions: [o]
  } = e;
  o && Object.keys(o).forEach((r) => {
    Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: ne
    });
  });
}
function jn(e) {
  const { ctx: t, setupState: o } = e;
  Object.keys(z(o)).forEach((r) => {
    if (!o.__isScriptSetup) {
      if (Wr(r[0])) {
        V(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => o[r],
        set: ne
      });
    }
  });
}
function na(e) {
  return L(e) ? e.reduce(
    (t, o) => (t[o] = null, t),
    {}
  ) : e;
}
function An() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, o) => {
    e[o] ? V(`${t} property "${o}" is already defined in ${e[o]}.`) : e[o] = t;
  };
}
let wr = !0;
function Rn(e) {
  const t = Od(e), o = e.proxy, r = e.ctx;
  wr = !1, t.beforeCreate && la(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: d,
    methods: i,
    watch: n,
    provide: s,
    inject: b,
    // lifecycle
    created: p,
    beforeMount: c,
    mounted: k,
    beforeUpdate: E,
    updated: y,
    activated: N,
    deactivated: w,
    beforeDestroy: g,
    beforeUnmount: u,
    destroyed: h,
    unmounted: m,
    render: $,
    renderTracked: q,
    renderTriggered: Ie,
    errorCaptured: ce,
    serverPrefetch: ge,
    // public API
    expose: Ge,
    inheritAttrs: dt,
    // assets
    components: De,
    directives: po,
    filters: Yr
  } = t, it = process.env.NODE_ENV !== "production" ? An() : null;
  if (process.env.NODE_ENV !== "production") {
    const [U] = e.propsOptions;
    if (U)
      for (const H in U)
        it("Props", H);
  }
  if (b && Ln(b, r, it), i)
    for (const U in i) {
      const H = i[U];
      B(H) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, U, {
        value: H.bind(o),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[U] = H.bind(o), process.env.NODE_ENV !== "production" && it("Methods", U)) : process.env.NODE_ENV !== "production" && V(
        `Method "${U}" has type "${typeof H}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (a) {
    process.env.NODE_ENV !== "production" && !B(a) && V(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const U = a.call(o, o);
    if (process.env.NODE_ENV !== "production" && Tr(U) && V(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Z(U))
      process.env.NODE_ENV !== "production" && V("data() should return an object.");
    else if (e.data = Go(U), process.env.NODE_ENV !== "production")
      for (const H in U)
        it("Data", H), Wr(H[0]) || Object.defineProperty(r, H, {
          configurable: !0,
          enumerable: !0,
          get: () => U[H],
          set: ne
        });
  }
  if (wr = !0, d)
    for (const U in d) {
      const H = d[U], je = B(H) ? H.bind(o, o) : B(H.get) ? H.get.bind(o, o) : ne;
      process.env.NODE_ENV !== "production" && je === ne && V(`Computed property "${U}" has no getter.`);
      const er = !B(H) && B(H.set) ? H.set.bind(o) : process.env.NODE_ENV !== "production" ? () => {
        V(
          `Write operation failed: computed property "${U}" is readonly.`
        );
      } : ne, Lt = Qe({
        get: je,
        set: er
      });
      Object.defineProperty(r, U, {
        enumerable: !0,
        configurable: !0,
        get: () => Lt.value,
        set: (Nt) => Lt.value = Nt
      }), process.env.NODE_ENV !== "production" && it("Computed", U);
    }
  if (n)
    for (const U in n)
      Cd(n[U], r, o, U);
  if (s) {
    const U = B(s) ? s.call(o) : s;
    Reflect.ownKeys(U).forEach((H) => {
      Un(H, U[H]);
    });
  }
  p && la(p, e, "c");
  function me(U, H) {
    L(H) ? H.forEach((je) => U(je.bind(o))) : H && U(H.bind(o));
  }
  if (me(xn, c), me(En, k), me(Nn, E), me(Cn, y), me(yn, N), me(_n, w), me(Dn, ce), me(Vn, q), me(Sn, Ie), me(On, u), me(xd, m), me(In, ge), L(Ge))
    if (Ge.length) {
      const U = e.exposed || (e.exposed = {});
      Ge.forEach((H) => {
        Object.defineProperty(U, H, {
          get: () => o[H],
          set: (je) => o[H] = je
        });
      });
    } else e.exposed || (e.exposed = {});
  $ && e.render === ne && (e.render = $), dt != null && (e.inheritAttrs = dt), De && (e.components = De), po && (e.directives = po), ge && _d(e);
}
function Ln(e, t, o = ne) {
  L(e) && (e = xr(e));
  for (const r in e) {
    const a = e[r];
    let d;
    Z(a) ? "default" in a ? d = _o(
      a.from || r,
      a.default,
      !0
    ) : d = _o(a.from || r) : d = _o(a), de(d) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => d.value,
      set: (i) => d.value = i
    }) : t[r] = d, process.env.NODE_ENV !== "production" && o("Inject", r);
  }
}
function la(e, t, o) {
  Ke(
    L(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function Cd(e, t, o, r) {
  let a = r.includes(".") ? Bd(o, r) : () => o[r];
  if (oe(e)) {
    const d = t[e];
    B(d) ? ft(a, d) : process.env.NODE_ENV !== "production" && V(`Invalid watch handler specified by key "${e}"`, d);
  } else if (B(e))
    ft(a, e.bind(o));
  else if (Z(e))
    if (L(e))
      e.forEach((d) => Cd(d, t, o, r));
    else {
      const d = B(e.handler) ? e.handler.bind(o) : t[e.handler];
      B(d) ? ft(a, d, e) : process.env.NODE_ENV !== "production" && V(`Invalid watch handler specified by key "${e.handler}"`, d);
    }
  else process.env.NODE_ENV !== "production" && V(`Invalid watch option: "${r}"`, e);
}
function Od(e) {
  const t = e.type, { mixins: o, extends: r } = t, {
    mixins: a,
    optionsCache: d,
    config: { optionMergeStrategies: i }
  } = e.appContext, n = d.get(t);
  let s;
  return n ? s = n : !a.length && !o && !r ? s = t : (s = {}, a.length && a.forEach(
    (b) => Ao(s, b, i, !0)
  ), Ao(s, t, i)), Z(t) && d.set(t, s), s;
}
function Ao(e, t, o, r = !1) {
  const { mixins: a, extends: d } = t;
  d && Ao(e, d, o, !0), a && a.forEach(
    (i) => Ao(e, i, o, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      process.env.NODE_ENV !== "production" && V(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const n = Pn[i] || o && o[i];
      e[i] = n ? n(e[i], t[i]) : t[i];
    }
  return e;
}
const Pn = {
  data: sa,
  props: ca,
  emits: ca,
  // objects
  methods: Gt,
  computed: Gt,
  // lifecycle
  beforeCreate: pe,
  created: pe,
  beforeMount: pe,
  mounted: pe,
  beforeUpdate: pe,
  updated: pe,
  beforeDestroy: pe,
  beforeUnmount: pe,
  destroyed: pe,
  unmounted: pe,
  activated: pe,
  deactivated: pe,
  errorCaptured: pe,
  serverPrefetch: pe,
  // assets
  components: Gt,
  directives: Gt,
  // watch
  watch: Fn,
  // provide / inject
  provide: sa,
  inject: Bn
};
function sa(e, t) {
  return t ? e ? function() {
    return re(
      B(e) ? e.call(this, this) : e,
      B(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Bn(e, t) {
  return Gt(xr(e), xr(t));
}
function xr(e) {
  if (L(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++)
      t[e[o]] = e[o];
    return t;
  }
  return e;
}
function pe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Gt(e, t) {
  return e ? re(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ca(e, t) {
  return e ? L(e) && L(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : re(
    /* @__PURE__ */ Object.create(null),
    na(e),
    na(t ?? {})
  ) : t;
}
function Fn(e, t) {
  if (!e) return t;
  if (!t) return e;
  const o = re(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    o[r] = pe(e[r], t[r]);
  return o;
}
function Id() {
  return {
    app: null,
    config: {
      isNativeTag: ai,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let zn = 0;
function Hn(e, t) {
  return function(r, a = null) {
    B(r) || (r = re({}, r)), a != null && !Z(a) && (process.env.NODE_ENV !== "production" && V("root props passed to app.mount() must be an object."), a = null);
    const d = Id(), i = /* @__PURE__ */ new WeakSet(), n = [];
    let s = !1;
    const b = d.app = {
      _uid: zn++,
      _component: r,
      _props: a,
      _container: null,
      _context: d,
      _instance: null,
      version: xa,
      get config() {
        return d.config;
      },
      set config(p) {
        process.env.NODE_ENV !== "production" && V(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(p, ...c) {
        return i.has(p) ? process.env.NODE_ENV !== "production" && V("Plugin has already been applied to target app.") : p && B(p.install) ? (i.add(p), p.install(b, ...c)) : B(p) ? (i.add(p), p(b, ...c)) : process.env.NODE_ENV !== "production" && V(
          'A plugin must either be a function or an object with an "install" function.'
        ), b;
      },
      mixin(p) {
        return d.mixins.includes(p) ? process.env.NODE_ENV !== "production" && V(
          "Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")
        ) : d.mixins.push(p), b;
      },
      component(p, c) {
        return process.env.NODE_ENV !== "production" && Ir(p, d.config), c ? (process.env.NODE_ENV !== "production" && d.components[p] && V(`Component "${p}" has already been registered in target app.`), d.components[p] = c, b) : d.components[p];
      },
      directive(p, c) {
        return process.env.NODE_ENV !== "production" && yd(p), c ? (process.env.NODE_ENV !== "production" && d.directives[p] && V(`Directive "${p}" has already been registered in target app.`), d.directives[p] = c, b) : d.directives[p];
      },
      mount(p, c, k) {
        if (s)
          process.env.NODE_ENV !== "production" && V(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && p.__vue_app__ && V(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const E = b._ceVNode || Ue(r, a);
          return E.appContext = d, k === !0 ? k = "svg" : k === !1 && (k = void 0), process.env.NODE_ENV !== "production" && (d.reload = () => {
            e(
              ht(E),
              p,
              k
            );
          }), e(E, p, k), s = !0, b._container = p, p.__vue_app__ = b, process.env.NODE_ENV !== "production" && (b._instance = E.component, ln(b, xa)), Zo(E.component);
        }
      },
      onUnmount(p) {
        process.env.NODE_ENV !== "production" && typeof p != "function" && V(
          `Expected function as first argument to app.onUnmount(), but got ${typeof p}`
        ), n.push(p);
      },
      unmount() {
        s ? (Ke(
          n,
          b._instance,
          16
        ), e(null, b._container), process.env.NODE_ENV !== "production" && (b._instance = null, sn(b)), delete b._container.__vue_app__) : process.env.NODE_ENV !== "production" && V("Cannot unmount an app that is not mounted.");
      },
      provide(p, c) {
        return process.env.NODE_ENV !== "production" && p in d.provides && V(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ), d.provides[p] = c, b;
      },
      runWithContext(p) {
        const c = jt;
        jt = b;
        try {
          return p();
        } finally {
          jt = c;
        }
      }
    };
    return b;
  };
}
let jt = null;
function Un(e, t) {
  if (!se)
    process.env.NODE_ENV !== "production" && V("provide() can only be used inside setup().");
  else {
    let o = se.provides;
    const r = se.parent && se.parent.provides;
    r === o && (o = se.provides = Object.create(r)), o[e] = t;
  }
}
function _o(e, t, o = !1) {
  const r = se || le;
  if (r || jt) {
    const a = jt ? jt._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return o && B(t) ? t.call(r && r.proxy) : t;
    process.env.NODE_ENV !== "production" && V(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && V("inject() can only be used inside setup() or functional components.");
}
const Sd = {}, Vd = () => Object.create(Sd), Dd = (e) => Object.getPrototypeOf(e) === Sd;
function Wn(e, t, o, r = !1) {
  const a = {}, d = Vd();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Td(e, t, a, d);
  for (const i in e.propsOptions[0])
    i in a || (a[i] = void 0);
  process.env.NODE_ENV !== "production" && Md(t || {}, a, e), o ? e.props = r ? a : Fi(a) : e.type.props ? e.props = a : e.props = d, e.attrs = d;
}
function Kn(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Gn(e, t, o, r) {
  const {
    props: a,
    attrs: d,
    vnode: { patchFlag: i }
  } = e, n = z(a), [s] = e.propsOptions;
  let b = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Kn(e)) && (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let c = 0; c < p.length; c++) {
        let k = p[c];
        if (Xo(e.emitsOptions, k))
          continue;
        const E = t[k];
        if (s)
          if (K(d, k))
            E !== d[k] && (d[k] = E, b = !0);
          else {
            const y = we(k);
            a[y] = Er(
              s,
              n,
              y,
              E,
              e,
              !1
            );
          }
        else
          E !== d[k] && (d[k] = E, b = !0);
      }
    }
  } else {
    Td(e, t, a, d) && (b = !0);
    let p;
    for (const c in n)
      (!t || // for camelCase
      !K(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = ye(c)) === c || !K(t, p))) && (s ? o && // for camelCase
      (o[c] !== void 0 || // for kebab-case
      o[p] !== void 0) && (a[c] = Er(
        s,
        n,
        c,
        void 0,
        e,
        !0
      )) : delete a[c]);
    if (d !== n)
      for (const c in d)
        (!t || !K(t, c)) && (delete d[c], b = !0);
  }
  b && Fe(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && Md(t || {}, a, e);
}
function Td(e, t, o, r) {
  const [a, d] = e.propsOptions;
  let i = !1, n;
  if (t)
    for (let s in t) {
      if (qt(s))
        continue;
      const b = t[s];
      let p;
      a && K(a, p = we(s)) ? !d || !d.includes(p) ? o[p] = b : (n || (n = {}))[p] = b : Xo(e.emitsOptions, s) || (!(s in r) || b !== r[s]) && (r[s] = b, i = !0);
    }
  if (d) {
    const s = z(o), b = n || Y;
    for (let p = 0; p < d.length; p++) {
      const c = d[p];
      o[c] = Er(
        a,
        s,
        c,
        b[c],
        e,
        !K(b, c)
      );
    }
  }
  return i;
}
function Er(e, t, o, r, a, d) {
  const i = e[o];
  if (i != null) {
    const n = K(i, "default");
    if (n && r === void 0) {
      const s = i.default;
      if (i.type !== Function && !i.skipFactory && B(s)) {
        const { propsDefaults: b } = a;
        if (o in b)
          r = b[o];
        else {
          const p = co(a);
          r = b[o] = s.call(
            null,
            t
          ), p();
        }
      } else
        r = s;
      a.ce && a.ce._setProp(o, r);
    }
    i[
      0
      /* shouldCast */
    ] && (d && !n ? r = !1 : i[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === ye(o)) && (r = !0));
  }
  return r;
}
const qn = /* @__PURE__ */ new WeakMap();
function $d(e, t, o = !1) {
  const r = o ? qn : t.propsCache, a = r.get(e);
  if (a)
    return a;
  const d = e.props, i = {}, n = [];
  let s = !1;
  if (!B(e)) {
    const p = (c) => {
      s = !0;
      const [k, E] = $d(c, t, !0);
      re(i, k), E && n.push(...E);
    };
    !o && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!d && !s)
    return Z(e) && r.set(e, Tt), Tt;
  if (L(d))
    for (let p = 0; p < d.length; p++) {
      process.env.NODE_ENV !== "production" && !oe(d[p]) && V("props must be strings when using array syntax.", d[p]);
      const c = we(d[p]);
      ua(c) && (i[c] = Y);
    }
  else if (d) {
    process.env.NODE_ENV !== "production" && !Z(d) && V("invalid props options", d);
    for (const p in d) {
      const c = we(p);
      if (ua(c)) {
        const k = d[p], E = i[c] = L(k) || B(k) ? { type: k } : re({}, k), y = E.type;
        let N = !1, w = !0;
        if (L(y))
          for (let g = 0; g < y.length; ++g) {
            const u = y[g], h = B(u) && u.name;
            if (h === "Boolean") {
              N = !0;
              break;
            } else h === "String" && (w = !1);
          }
        else
          N = B(y) && y.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = N, E[
          1
          /* shouldCastTrue */
        ] = w, (N || K(E, "default")) && n.push(c);
      }
    }
  }
  const b = [i, n];
  return Z(e) && r.set(e, b), b;
}
function ua(e) {
  return e[0] !== "$" && !qt(e) ? !0 : (process.env.NODE_ENV !== "production" && V(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Jn(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Md(e, t, o) {
  const r = z(t), a = o.propsOptions[0], d = Object.keys(e).map((i) => we(i));
  for (const i in a) {
    let n = a[i];
    n != null && Yn(
      i,
      r[i],
      n,
      process.env.NODE_ENV !== "production" ? ze(r) : r,
      !d.includes(i)
    );
  }
}
function Yn(e, t, o, r, a) {
  const { type: d, required: i, validator: n, skipCheck: s } = o;
  if (i && a) {
    V('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (d != null && d !== !0 && !s) {
      let b = !1;
      const p = L(d) ? d : [d], c = [];
      for (let k = 0; k < p.length && !b; k++) {
        const { valid: E, expectedType: y } = Zn(t, p[k]);
        c.push(y || ""), b = E;
      }
      if (!b) {
        V(Qn(e, t, c));
        return;
      }
    }
    n && !n(t, r) && V('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Xn = /* @__PURE__ */ et(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Zn(e, t) {
  let o;
  const r = Jn(t);
  if (r === "null")
    o = e === null;
  else if (Xn(r)) {
    const a = typeof e;
    o = a === r.toLowerCase(), !o && a === "object" && (o = e instanceof t);
  } else r === "Object" ? o = Z(e) : r === "Array" ? o = L(e) : o = e instanceof t;
  return {
    valid: o,
    expectedType: r
  };
}
function Qn(e, t, o) {
  if (o.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${o.map(Uo).join(" | ")}`;
  const a = o[0], d = $r(t), i = fa(t, a), n = fa(t, d);
  return o.length === 1 && pa(a) && !el(a, d) && (r += ` with value ${i}`), r += `, got ${d} `, pa(d) && (r += `with value ${n}.`), r;
}
function fa(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function pa(e) {
  return ["string", "number", "boolean"].some((o) => e.toLowerCase() === o);
}
function el(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const jd = (e) => e[0] === "_" || e === "$stable", Kr = (e) => L(e) ? e.map(Te) : [Te(e)], tl = (e, t, o) => {
  if (t._n)
    return t;
  const r = vn((...a) => (process.env.NODE_ENV !== "production" && se && (!o || o.root === se.root) && V(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Kr(t(...a))), o);
  return r._c = !1, r;
}, Ad = (e, t, o) => {
  const r = e._ctx;
  for (const a in e) {
    if (jd(a)) continue;
    const d = e[a];
    if (B(d))
      t[a] = tl(a, d, r);
    else if (d != null) {
      process.env.NODE_ENV !== "production" && V(
        `Non-function value encountered for slot "${a}". Prefer function slots for better performance.`
      );
      const i = Kr(d);
      t[a] = () => i;
    }
  }
}, Rd = (e, t) => {
  process.env.NODE_ENV !== "production" && !Ur(e.vnode) && V(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const o = Kr(t);
  e.slots.default = () => o;
}, Nr = (e, t, o) => {
  for (const r in t)
    (o || r !== "_") && (e[r] = t[r]);
}, ol = (e, t, o) => {
  const r = e.slots = Vd();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Nr(r, t, o), o && Io(r, "_", a, !0)) : Ad(t, r);
  } else t && Rd(e, t);
}, rl = (e, t, o) => {
  const { vnode: r, slots: a } = e;
  let d = !0, i = Y;
  if (r.shapeFlag & 32) {
    const n = t._;
    n ? process.env.NODE_ENV !== "production" && He ? (Nr(a, t, o), Fe(e, "set", "$slots")) : o && n === 1 ? d = !1 : Nr(a, t, o) : (d = !t.$stable, Ad(t, a)), i = t;
  } else t && (Rd(e, t), i = { default: 1 });
  if (d)
    for (const n in a)
      !jd(n) && i[n] == null && delete a[n];
};
let Ht, ct;
function Ot(e, t) {
  e.appContext.config.performance && Ro() && ct.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && pn(e, t, Ro() ? ct.now() : Date.now());
}
function It(e, t) {
  if (e.appContext.config.performance && Ro()) {
    const o = `vue-${t}-${e.uid}`, r = o + ":end";
    ct.mark(r), ct.measure(
      `<${Qo(e, e.type)}> ${t}`,
      o,
      r
    ), ct.clearMarks(o), ct.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && hn(e, t, Ro() ? ct.now() : Date.now());
}
function Ro() {
  return Ht !== void 0 || (typeof window < "u" && window.performance ? (Ht = !0, ct = window.performance) : Ht = !1), Ht;
}
function al() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ee = ml;
function dl(e) {
  return il(e);
}
function il(e, t) {
  al();
  const o = ao();
  o.__VUE__ = !0, process.env.NODE_ENV !== "production" && Fr(o.__VUE_DEVTOOLS_GLOBAL_HOOK__, o);
  const {
    insert: r,
    remove: a,
    patchProp: d,
    createElement: i,
    createText: n,
    createComment: s,
    setText: b,
    setElementText: p,
    parentNode: c,
    nextSibling: k,
    setScopeId: E = ne,
    insertStaticContent: y
  } = e, N = (l, f, v, C = null, _ = null, x = null, D = void 0, S = null, I = process.env.NODE_ENV !== "production" && He ? !1 : !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !Ut(l, f) && (C = ho(l), nt(l, _, x, !0), l = null), f.patchFlag === -2 && (I = !1, f.dynamicChildren = null);
    const { type: O, ref: P, shapeFlag: T } = f;
    switch (O) {
      case lo:
        w(l, f, v, C);
        break;
      case Se:
        g(l, f, v, C);
        break;
      case xo:
        l == null ? u(f, v, C, D) : process.env.NODE_ENV !== "production" && h(l, f, v, D);
        break;
      case G:
        po(
          l,
          f,
          v,
          C,
          _,
          x,
          D,
          S,
          I
        );
        break;
      default:
        T & 1 ? q(
          l,
          f,
          v,
          C,
          _,
          x,
          D,
          S,
          I
        ) : T & 6 ? Yr(
          l,
          f,
          v,
          C,
          _,
          x,
          D,
          S,
          I
        ) : T & 64 || T & 128 ? O.process(
          l,
          f,
          v,
          C,
          _,
          x,
          D,
          S,
          I,
          Bt
        ) : process.env.NODE_ENV !== "production" && V("Invalid VNode type:", O, `(${typeof O})`);
    }
    P != null && _ && jo(P, l && l.ref, x, f || l, !f);
  }, w = (l, f, v, C) => {
    if (l == null)
      r(
        f.el = n(f.children),
        v,
        C
      );
    else {
      const _ = f.el = l.el;
      f.children !== l.children && b(_, f.children);
    }
  }, g = (l, f, v, C) => {
    l == null ? r(
      f.el = s(f.children || ""),
      v,
      C
    ) : f.el = l.el;
  }, u = (l, f, v, C) => {
    [l.el, l.anchor] = y(
      l.children,
      f,
      v,
      C,
      l.el,
      l.anchor
    );
  }, h = (l, f, v, C) => {
    if (f.children !== l.children) {
      const _ = k(l.anchor);
      $(l), [f.el, f.anchor] = y(
        f.children,
        v,
        _,
        C
      );
    } else
      f.el = l.el, f.anchor = l.anchor;
  }, m = ({ el: l, anchor: f }, v, C) => {
    let _;
    for (; l && l !== f; )
      _ = k(l), r(l, v, C), l = _;
    r(f, v, C);
  }, $ = ({ el: l, anchor: f }) => {
    let v;
    for (; l && l !== f; )
      v = k(l), a(l), l = v;
    a(f);
  }, q = (l, f, v, C, _, x, D, S, I) => {
    f.type === "svg" ? D = "svg" : f.type === "math" && (D = "mathml"), l == null ? Ie(
      f,
      v,
      C,
      _,
      x,
      D,
      S,
      I
    ) : Ge(
      l,
      f,
      _,
      x,
      D,
      S,
      I
    );
  }, Ie = (l, f, v, C, _, x, D, S) => {
    let I, O;
    const { props: P, shapeFlag: T, transition: R, dirs: F } = l;
    if (I = l.el = i(
      l.type,
      x,
      P && P.is,
      P
    ), T & 8 ? p(I, l.children) : T & 16 && ge(
      l.children,
      I,
      null,
      C,
      _,
      cr(l, x),
      D,
      S
    ), F && bt(l, null, C, "created"), ce(I, l, l.scopeId, D, C), P) {
      for (const Q in P)
        Q !== "value" && !qt(Q) && d(I, Q, null, P[Q], x, C);
      "value" in P && d(I, "value", null, P.value, x), (O = P.onVnodeBeforeMount) && Pe(O, C, l);
    }
    process.env.NODE_ENV !== "production" && (Io(I, "__vnode", l, !0), Io(I, "__vueParentComponent", C, !0)), F && bt(l, null, C, "beforeMount");
    const W = nl(_, R);
    W && R.beforeEnter(I), r(I, f, v), ((O = P && P.onVnodeMounted) || W || F) && Ee(() => {
      O && Pe(O, C, l), W && R.enter(I), F && bt(l, null, C, "mounted");
    }, _);
  }, ce = (l, f, v, C, _) => {
    if (v && E(l, v), C)
      for (let x = 0; x < C.length; x++)
        E(l, C[x]);
    if (_) {
      let x = _.subTree;
      if (process.env.NODE_ENV !== "production" && x.patchFlag > 0 && x.patchFlag & 2048 && (x = Gr(x.children) || x), f === x || Hd(x.type) && (x.ssContent === f || x.ssFallback === f)) {
        const D = _.vnode;
        ce(
          l,
          D,
          D.scopeId,
          D.slotScopeIds,
          _.parent
        );
      }
    }
  }, ge = (l, f, v, C, _, x, D, S, I = 0) => {
    for (let O = I; O < l.length; O++) {
      const P = l[O] = S ? st(l[O]) : Te(l[O]);
      N(
        null,
        P,
        f,
        v,
        C,
        _,
        x,
        D,
        S
      );
    }
  }, Ge = (l, f, v, C, _, x, D) => {
    const S = f.el = l.el;
    process.env.NODE_ENV !== "production" && (S.__vnode = f);
    let { patchFlag: I, dynamicChildren: O, dirs: P } = f;
    I |= l.patchFlag & 16;
    const T = l.props || Y, R = f.props || Y;
    let F;
    if (v && vt(v, !1), (F = R.onVnodeBeforeUpdate) && Pe(F, v, f, l), P && bt(f, l, v, "beforeUpdate"), v && vt(v, !0), process.env.NODE_ENV !== "production" && He && (I = 0, D = !1, O = null), (T.innerHTML && R.innerHTML == null || T.textContent && R.textContent == null) && p(S, ""), O ? (dt(
      l.dynamicChildren,
      O,
      S,
      v,
      C,
      cr(f, _),
      x
    ), process.env.NODE_ENV !== "production" && wo(l, f)) : D || je(
      l,
      f,
      S,
      null,
      v,
      C,
      cr(f, _),
      x,
      !1
    ), I > 0) {
      if (I & 16)
        De(S, T, R, v, _);
      else if (I & 2 && T.class !== R.class && d(S, "class", null, R.class, _), I & 4 && d(S, "style", T.style, R.style, _), I & 8) {
        const W = f.dynamicProps;
        for (let Q = 0; Q < W.length; Q++) {
          const X = W[Q], xe = T[X], ke = R[X];
          (ke !== xe || X === "value") && d(S, X, xe, ke, _, v);
        }
      }
      I & 1 && l.children !== f.children && p(S, f.children);
    } else !D && O == null && De(S, T, R, v, _);
    ((F = R.onVnodeUpdated) || P) && Ee(() => {
      F && Pe(F, v, f, l), P && bt(f, l, v, "updated");
    }, C);
  }, dt = (l, f, v, C, _, x, D) => {
    for (let S = 0; S < f.length; S++) {
      const I = l[S], O = f[S], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        I.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (I.type === G || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ut(I, O) || // - In the case of a component, it could contain anything.
        I.shapeFlag & 70) ? c(I.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      N(
        I,
        O,
        P,
        null,
        C,
        _,
        x,
        D,
        !0
      );
    }
  }, De = (l, f, v, C, _) => {
    if (f !== v) {
      if (f !== Y)
        for (const x in f)
          !qt(x) && !(x in v) && d(
            l,
            x,
            f[x],
            null,
            _,
            C
          );
      for (const x in v) {
        if (qt(x)) continue;
        const D = v[x], S = f[x];
        D !== S && x !== "value" && d(l, x, S, D, _, C);
      }
      "value" in v && d(l, "value", f.value, v.value, _);
    }
  }, po = (l, f, v, C, _, x, D, S, I) => {
    const O = f.el = l ? l.el : n(""), P = f.anchor = l ? l.anchor : n("");
    let { patchFlag: T, dynamicChildren: R, slotScopeIds: F } = f;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (He || T & 2048) && (T = 0, I = !1, R = null), F && (S = S ? S.concat(F) : F), l == null ? (r(O, v, C), r(P, v, C), ge(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      v,
      P,
      _,
      x,
      D,
      S,
      I
    )) : T > 0 && T & 64 && R && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (dt(
      l.dynamicChildren,
      R,
      v,
      _,
      x,
      D,
      S
    ), process.env.NODE_ENV !== "production" ? wo(l, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || _ && f === _.subTree) && wo(
        l,
        f,
        !0
        /* shallow */
      )
    )) : je(
      l,
      f,
      v,
      P,
      _,
      x,
      D,
      S,
      I
    );
  }, Yr = (l, f, v, C, _, x, D, S, I) => {
    f.slotScopeIds = S, l == null ? f.shapeFlag & 512 ? _.ctx.activate(
      f,
      v,
      C,
      D,
      I
    ) : it(
      f,
      v,
      C,
      _,
      x,
      D,
      I
    ) : me(l, f, I);
  }, it = (l, f, v, C, _, x, D) => {
    const S = l.component = Nl(
      l,
      C,
      _
    );
    if (process.env.NODE_ENV !== "production" && S.type.__hmrId && rn(S), process.env.NODE_ENV !== "production" && (mo(l), Ot(S, "mount")), Ur(l) && (S.ctx.renderer = Bt), process.env.NODE_ENV !== "production" && Ot(S, "init"), Il(S, !1, D), process.env.NODE_ENV !== "production" && It(S, "init"), S.asyncDep) {
      if (process.env.NODE_ENV !== "production" && He && (l.el = null), _ && _.registerDep(S, U, D), !l.el) {
        const I = S.subTree = Ue(Se);
        g(null, I, f, v);
      }
    } else
      U(
        S,
        l,
        f,
        v,
        _,
        x,
        D
      );
    process.env.NODE_ENV !== "production" && (ko(), It(S, "mount"));
  }, me = (l, f, v) => {
    const C = f.component = l.component;
    if (vl(l, f, v))
      if (C.asyncDep && !C.asyncResolved) {
        process.env.NODE_ENV !== "production" && mo(f), H(C, f, v), process.env.NODE_ENV !== "production" && ko();
        return;
      } else
        C.next = f, C.update();
    else
      f.el = l.el, C.vnode = f;
  }, U = (l, f, v, C, _, x, D) => {
    const S = () => {
      if (l.isMounted) {
        let { next: T, bu: R, u: F, parent: W, vnode: Q } = l;
        {
          const Re = Ld(l);
          if (Re) {
            T && (T.el = Q.el, H(l, T, D)), Re.asyncDep.then(() => {
              l.isUnmounted || S();
            });
            return;
          }
        }
        let X = T, xe;
        process.env.NODE_ENV !== "production" && mo(T || l.vnode), vt(l, !1), T ? (T.el = Q.el, H(l, T, D)) : T = Q, R && St(R), (xe = T.props && T.props.onVnodeBeforeUpdate) && Pe(xe, W, T, Q), vt(l, !0), process.env.NODE_ENV !== "production" && Ot(l, "render");
        const ke = ba(l);
        process.env.NODE_ENV !== "production" && It(l, "render");
        const Ae = l.subTree;
        l.subTree = ke, process.env.NODE_ENV !== "production" && Ot(l, "patch"), N(
          Ae,
          ke,
          // parent may have changed if it's in a teleport
          c(Ae.el),
          // anchor may have changed if it's in a fragment
          ho(Ae),
          l,
          _,
          x
        ), process.env.NODE_ENV !== "production" && It(l, "patch"), T.el = ke.el, X === null && gl(l, ke.el), F && Ee(F, _), (xe = T.props && T.props.onVnodeUpdated) && Ee(
          () => Pe(xe, W, T, Q),
          _
        ), process.env.NODE_ENV !== "production" && gd(l), process.env.NODE_ENV !== "production" && ko();
      } else {
        let T;
        const { el: R, props: F } = f, { bm: W, m: Q, parent: X, root: xe, type: ke } = l, Ae = Mt(f);
        vt(l, !1), W && St(W), !Ae && (T = F && F.onVnodeBeforeMount) && Pe(T, X, f), vt(l, !0);
        {
          xe.ce && xe.ce._injectChildStyle(ke), process.env.NODE_ENV !== "production" && Ot(l, "render");
          const Re = l.subTree = ba(l);
          process.env.NODE_ENV !== "production" && It(l, "render"), process.env.NODE_ENV !== "production" && Ot(l, "patch"), N(
            null,
            Re,
            v,
            C,
            l,
            _,
            x
          ), process.env.NODE_ENV !== "production" && It(l, "patch"), f.el = Re.el;
        }
        if (Q && Ee(Q, _), !Ae && (T = F && F.onVnodeMounted)) {
          const Re = f;
          Ee(
            () => Pe(T, X, Re),
            _
          );
        }
        (f.shapeFlag & 256 || X && Mt(X.vnode) && X.vnode.shapeFlag & 256) && l.a && Ee(l.a, _), l.isMounted = !0, process.env.NODE_ENV !== "production" && cn(l), f = v = C = null;
      }
    };
    l.scope.on();
    const I = l.effect = new Wa(S);
    l.scope.off();
    const O = l.update = I.run.bind(I), P = l.job = I.runIfDirty.bind(I);
    P.i = l, P.id = l.uid, I.scheduler = () => Jo(P), vt(l, !0), process.env.NODE_ENV !== "production" && (I.onTrack = l.rtc ? (T) => St(l.rtc, T) : void 0, I.onTrigger = l.rtg ? (T) => St(l.rtg, T) : void 0), O();
  }, H = (l, f, v) => {
    f.component = l;
    const C = l.vnode.props;
    l.vnode = f, l.next = null, Gn(l, f.props, C, v), rl(l, f.children, v), ot(), da(l), rt();
  }, je = (l, f, v, C, _, x, D, S, I = !1) => {
    const O = l && l.children, P = l ? l.shapeFlag : 0, T = f.children, { patchFlag: R, shapeFlag: F } = f;
    if (R > 0) {
      if (R & 128) {
        Lt(
          O,
          T,
          v,
          C,
          _,
          x,
          D,
          S,
          I
        );
        return;
      } else if (R & 256) {
        er(
          O,
          T,
          v,
          C,
          _,
          x,
          D,
          S,
          I
        );
        return;
      }
    }
    F & 8 ? (P & 16 && Pt(O, _, x), T !== O && p(v, T)) : P & 16 ? F & 16 ? Lt(
      O,
      T,
      v,
      C,
      _,
      x,
      D,
      S,
      I
    ) : Pt(O, _, x, !0) : (P & 8 && p(v, ""), F & 16 && ge(
      T,
      v,
      C,
      _,
      x,
      D,
      S,
      I
    ));
  }, er = (l, f, v, C, _, x, D, S, I) => {
    l = l || Tt, f = f || Tt;
    const O = l.length, P = f.length, T = Math.min(O, P);
    let R;
    for (R = 0; R < T; R++) {
      const F = f[R] = I ? st(f[R]) : Te(f[R]);
      N(
        l[R],
        F,
        v,
        null,
        _,
        x,
        D,
        S,
        I
      );
    }
    O > P ? Pt(
      l,
      _,
      x,
      !0,
      !1,
      T
    ) : ge(
      f,
      v,
      C,
      _,
      x,
      D,
      S,
      I,
      T
    );
  }, Lt = (l, f, v, C, _, x, D, S, I) => {
    let O = 0;
    const P = f.length;
    let T = l.length - 1, R = P - 1;
    for (; O <= T && O <= R; ) {
      const F = l[O], W = f[O] = I ? st(f[O]) : Te(f[O]);
      if (Ut(F, W))
        N(
          F,
          W,
          v,
          null,
          _,
          x,
          D,
          S,
          I
        );
      else
        break;
      O++;
    }
    for (; O <= T && O <= R; ) {
      const F = l[T], W = f[R] = I ? st(f[R]) : Te(f[R]);
      if (Ut(F, W))
        N(
          F,
          W,
          v,
          null,
          _,
          x,
          D,
          S,
          I
        );
      else
        break;
      T--, R--;
    }
    if (O > T) {
      if (O <= R) {
        const F = R + 1, W = F < P ? f[F].el : C;
        for (; O <= R; )
          N(
            null,
            f[O] = I ? st(f[O]) : Te(f[O]),
            v,
            W,
            _,
            x,
            D,
            S,
            I
          ), O++;
      }
    } else if (O > R)
      for (; O <= T; )
        nt(l[O], _, x, !0), O++;
    else {
      const F = O, W = O, Q = /* @__PURE__ */ new Map();
      for (O = W; O <= R; O++) {
        const fe = f[O] = I ? st(f[O]) : Te(f[O]);
        fe.key != null && (process.env.NODE_ENV !== "production" && Q.has(fe.key) && V(
          "Duplicate keys found during update:",
          JSON.stringify(fe.key),
          "Make sure keys are unique."
        ), Q.set(fe.key, O));
      }
      let X, xe = 0;
      const ke = R - W + 1;
      let Ae = !1, Re = 0;
      const Ft = new Array(ke);
      for (O = 0; O < ke; O++) Ft[O] = 0;
      for (O = F; O <= T; O++) {
        const fe = l[O];
        if (xe >= ke) {
          nt(fe, _, x, !0);
          continue;
        }
        let Le;
        if (fe.key != null)
          Le = Q.get(fe.key);
        else
          for (X = W; X <= R; X++)
            if (Ft[X - W] === 0 && Ut(fe, f[X])) {
              Le = X;
              break;
            }
        Le === void 0 ? nt(fe, _, x, !0) : (Ft[Le - W] = O + 1, Le >= Re ? Re = Le : Ae = !0, N(
          fe,
          f[Le],
          v,
          null,
          _,
          x,
          D,
          S,
          I
        ), xe++);
      }
      const Zr = Ae ? ll(Ft) : Tt;
      for (X = Zr.length - 1, O = ke - 1; O >= 0; O--) {
        const fe = W + O, Le = f[fe], Qr = fe + 1 < P ? f[fe + 1].el : C;
        Ft[O] === 0 ? N(
          null,
          Le,
          v,
          Qr,
          _,
          x,
          D,
          S,
          I
        ) : Ae && (X < 0 || O !== Zr[X] ? Nt(Le, v, Qr, 2) : X--);
      }
    }
  }, Nt = (l, f, v, C, _ = null) => {
    const { el: x, type: D, transition: S, children: I, shapeFlag: O } = l;
    if (O & 6) {
      Nt(l.component.subTree, f, v, C);
      return;
    }
    if (O & 128) {
      l.suspense.move(f, v, C);
      return;
    }
    if (O & 64) {
      D.move(l, f, v, Bt);
      return;
    }
    if (D === G) {
      r(x, f, v);
      for (let T = 0; T < I.length; T++)
        Nt(I[T], f, v, C);
      r(l.anchor, f, v);
      return;
    }
    if (D === xo) {
      m(l, f, v);
      return;
    }
    if (C !== 2 && O & 1 && S)
      if (C === 0)
        S.beforeEnter(x), r(x, f, v), Ee(() => S.enter(x), _);
      else {
        const { leave: T, delayLeave: R, afterLeave: F } = S, W = () => r(x, f, v), Q = () => {
          T(x, () => {
            W(), F && F();
          });
        };
        R ? R(x, W, Q) : Q();
      }
    else
      r(x, f, v);
  }, nt = (l, f, v, C = !1, _ = !1) => {
    const {
      type: x,
      props: D,
      ref: S,
      children: I,
      dynamicChildren: O,
      shapeFlag: P,
      patchFlag: T,
      dirs: R,
      cacheIndex: F
    } = l;
    if (T === -2 && (_ = !1), S != null && jo(S, null, v, l, !0), F != null && (f.renderCache[F] = void 0), P & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const W = P & 1 && R, Q = !Mt(l);
    let X;
    if (Q && (X = D && D.onVnodeBeforeUnmount) && Pe(X, f, l), P & 6)
      ri(l.component, v, C);
    else {
      if (P & 128) {
        l.suspense.unmount(v, C);
        return;
      }
      W && bt(l, null, f, "beforeUnmount"), P & 64 ? l.type.remove(
        l,
        f,
        v,
        Bt,
        C
      ) : O && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !O.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (x !== G || T > 0 && T & 64) ? Pt(
        O,
        f,
        v,
        !1,
        !0
      ) : (x === G && T & 384 || !_ && P & 16) && Pt(I, f, v), C && tr(l);
    }
    (Q && (X = D && D.onVnodeUnmounted) || W) && Ee(() => {
      X && Pe(X, f, l), W && bt(l, null, f, "unmounted");
    }, v);
  }, tr = (l) => {
    const { type: f, el: v, anchor: C, transition: _ } = l;
    if (f === G) {
      process.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && _ && !_.persisted ? l.children.forEach((D) => {
        D.type === Se ? a(D.el) : tr(D);
      }) : oi(v, C);
      return;
    }
    if (f === xo) {
      $(l);
      return;
    }
    const x = () => {
      a(v), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (l.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: D, delayLeave: S } = _, I = () => D(v, x);
      S ? S(l.el, x, I) : I();
    } else
      x();
  }, oi = (l, f) => {
    let v;
    for (; l !== f; )
      v = k(l), a(l), l = v;
    a(f);
  }, ri = (l, f, v) => {
    process.env.NODE_ENV !== "production" && l.type.__hmrId && an(l);
    const { bum: C, scope: _, job: x, subTree: D, um: S, m: I, a: O } = l;
    ha(I), ha(O), C && St(C), _.stop(), x && (x.flags |= 8, nt(D, l, f, v)), S && Ee(S, f), Ee(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), process.env.NODE_ENV !== "production" && fn(l);
  }, Pt = (l, f, v, C = !1, _ = !1, x = 0) => {
    for (let D = x; D < l.length; D++)
      nt(l[D], f, v, C, _);
  }, ho = (l) => {
    if (l.shapeFlag & 6)
      return ho(l.component.subTree);
    if (l.shapeFlag & 128)
      return l.suspense.next();
    const f = k(l.anchor || l.el), v = f && f[gn];
    return v ? k(v) : f;
  };
  let or = !1;
  const Xr = (l, f, v) => {
    l == null ? f._vnode && nt(f._vnode, null, null, !0) : N(
      f._vnode || null,
      l,
      f,
      null,
      null,
      null,
      v
    ), f._vnode = l, or || (or = !0, da(), hd(), or = !1);
  }, Bt = {
    p: N,
    um: nt,
    m: Nt,
    r: tr,
    mt: it,
    mc: ge,
    pc: je,
    pbc: dt,
    n: ho,
    o: e
  };
  return {
    render: Xr,
    hydrate: void 0,
    createApp: Hn(Xr)
  };
}
function cr({ type: e, props: t }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
}
function vt({ effect: e, job: t }, o) {
  o ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function nl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function wo(e, t, o = !1) {
  const r = e.children, a = t.children;
  if (L(r) && L(a))
    for (let d = 0; d < r.length; d++) {
      const i = r[d];
      let n = a[d];
      n.shapeFlag & 1 && !n.dynamicChildren && ((n.patchFlag <= 0 || n.patchFlag === 32) && (n = a[d] = st(a[d]), n.el = i.el), !o && n.patchFlag !== -2 && wo(i, n)), n.type === lo && (n.el = i.el), process.env.NODE_ENV !== "production" && n.type === Se && !n.el && (n.el = i.el);
    }
}
function ll(e) {
  const t = e.slice(), o = [0];
  let r, a, d, i, n;
  const s = e.length;
  for (r = 0; r < s; r++) {
    const b = e[r];
    if (b !== 0) {
      if (a = o[o.length - 1], e[a] < b) {
        t[r] = a, o.push(r);
        continue;
      }
      for (d = 0, i = o.length - 1; d < i; )
        n = d + i >> 1, e[o[n]] < b ? d = n + 1 : i = n;
      b < e[o[d]] && (d > 0 && (t[r] = o[d - 1]), o[d] = r);
    }
  }
  for (d = o.length, i = o[d - 1]; d-- > 0; )
    o[d] = i, i = t[i];
  return o;
}
function Ld(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ld(t);
}
function ha(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const sl = Symbol.for("v-scx"), cl = () => {
  {
    const e = _o(sl);
    return e || process.env.NODE_ENV !== "production" && V(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function ft(e, t, o) {
  return process.env.NODE_ENV !== "production" && !B(t) && V(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Pd(e, t, o);
}
function Pd(e, t, o = Y) {
  const { immediate: r, deep: a, flush: d, once: i } = o;
  process.env.NODE_ENV !== "production" && !t && (r !== void 0 && V(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), a !== void 0 && V(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && V(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const n = re({}, o);
  process.env.NODE_ENV !== "production" && (n.onWarn = V);
  const s = t && r || !t && d !== "post";
  let b;
  if (oo) {
    if (d === "sync") {
      const E = cl();
      b = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!s) {
      const E = () => {
      };
      return E.stop = ne, E.resume = ne, E.pause = ne, E;
    }
  }
  const p = se;
  n.call = (E, y, N) => Ke(E, p, y, N);
  let c = !1;
  d === "post" ? n.scheduler = (E) => {
    Ee(E, p && p.suspense);
  } : d !== "sync" && (c = !0, n.scheduler = (E, y) => {
    y ? E() : Jo(E);
  }), n.augmentJob = (E) => {
    t && (E.flags |= 4), c && (E.flags |= 2, p && (E.id = p.uid, E.i = p));
  };
  const k = Ji(e, t, n);
  return oo && (b ? b.push(k) : s && k()), k;
}
function ul(e, t, o) {
  const r = this.proxy, a = oe(e) ? e.includes(".") ? Bd(r, e) : () => r[e] : e.bind(r, r);
  let d;
  B(t) ? d = t : (d = t.handler, o = t);
  const i = co(this), n = Pd(a, d.bind(r), o);
  return i(), n;
}
function Bd(e, t) {
  const o = t.split(".");
  return () => {
    let r = e;
    for (let a = 0; a < o.length && r; a++)
      r = r[o[a]];
    return r;
  };
}
const fl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${we(t)}Modifiers`] || e[`${ye(t)}Modifiers`];
function pl(e, t, ...o) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Y;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [c]
    } = e;
    if (p)
      if (!(t in p))
        (!c || !(gt(we(t)) in c)) && V(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${gt(we(t))}" prop.`
        );
      else {
        const k = p[t];
        B(k) && (k(...o) || V(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let a = o;
  const d = t.startsWith("update:"), i = d && fl(r, t.slice(7));
  if (i && (i.trim && (a = o.map((p) => oe(p) ? p.trim() : p)), i.number && (a = o.map(hr))), process.env.NODE_ENV !== "production" && bn(e, t, a), process.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && r[gt(p)] && V(
      `Event "${p}" is emitted in component ${Qo(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ye(
        t
      )}" instead of "${t}".`
    );
  }
  let n, s = r[n = gt(t)] || // also try camelCase event handler (#2249)
  r[n = gt(we(t))];
  !s && d && (s = r[n = gt(ye(t))]), s && Ke(
    s,
    e,
    6,
    a
  );
  const b = r[n + "Once"];
  if (b) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[n])
      return;
    e.emitted[n] = !0, Ke(
      b,
      e,
      6,
      a
    );
  }
}
function Fd(e, t, o = !1) {
  const r = t.emitsCache, a = r.get(e);
  if (a !== void 0)
    return a;
  const d = e.emits;
  let i = {}, n = !1;
  if (!B(e)) {
    const s = (b) => {
      const p = Fd(b, t, !0);
      p && (n = !0, re(i, p));
    };
    !o && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !d && !n ? (Z(e) && r.set(e, null), null) : (L(d) ? d.forEach((s) => i[s] = null) : re(i, d), Z(e) && r.set(e, i), i);
}
function Xo(e, t) {
  return !e || !ro(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), K(e, t[0].toLowerCase() + t.slice(1)) || K(e, ye(t)) || K(e, t));
}
let Cr = !1;
function Lo() {
  Cr = !0;
}
function ba(e) {
  const {
    type: t,
    vnode: o,
    proxy: r,
    withProxy: a,
    propsOptions: [d],
    slots: i,
    attrs: n,
    emit: s,
    render: b,
    renderCache: p,
    props: c,
    data: k,
    setupState: E,
    ctx: y,
    inheritAttrs: N
  } = e, w = $o(e);
  let g, u;
  process.env.NODE_ENV !== "production" && (Cr = !1);
  try {
    if (o.shapeFlag & 4) {
      const $ = a || r, q = process.env.NODE_ENV !== "production" && E.__isScriptSetup ? new Proxy($, {
        get(Ie, ce, ge) {
          return V(
            `Property '${String(
              ce
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Ie, ce, ge);
        }
      }) : $;
      g = Te(
        b.call(
          q,
          $,
          p,
          process.env.NODE_ENV !== "production" ? ze(c) : c,
          E,
          k,
          y
        )
      ), u = n;
    } else {
      const $ = t;
      process.env.NODE_ENV !== "production" && n === c && Lo(), g = Te(
        $.length > 1 ? $(
          process.env.NODE_ENV !== "production" ? ze(c) : c,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Lo(), ze(n);
            },
            slots: i,
            emit: s
          } : { attrs: n, slots: i, emit: s }
        ) : $(
          process.env.NODE_ENV !== "production" ? ze(c) : c,
          null
        )
      ), u = t.props ? n : hl(n);
    }
  } catch ($) {
    Xt.length = 0, io($, e, 1), g = Ue(Se);
  }
  let h = g, m;
  if (process.env.NODE_ENV !== "production" && g.patchFlag > 0 && g.patchFlag & 2048 && ([h, m] = zd(g)), u && N !== !1) {
    const $ = Object.keys(u), { shapeFlag: q } = h;
    if ($.length) {
      if (q & 7)
        d && $.some(Oo) && (u = bl(
          u,
          d
        )), h = ht(h, u, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !Cr && h.type !== Se) {
        const Ie = Object.keys(n), ce = [], ge = [];
        for (let Ge = 0, dt = Ie.length; Ge < dt; Ge++) {
          const De = Ie[Ge];
          ro(De) ? Oo(De) || ce.push(De[2].toLowerCase() + De.slice(3)) : ge.push(De);
        }
        ge.length && V(
          `Extraneous non-props attributes (${ge.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), ce.length && V(
          `Extraneous non-emits event listeners (${ce.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return o.dirs && (process.env.NODE_ENV !== "production" && !va(h) && V(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), h = ht(h, null, !1, !0), h.dirs = h.dirs ? h.dirs.concat(o.dirs) : o.dirs), o.transition && (process.env.NODE_ENV !== "production" && !va(h) && V(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Hr(h, o.transition)), process.env.NODE_ENV !== "production" && m ? m(h) : g = h, $o(w), g;
}
const zd = (e) => {
  const t = e.children, o = e.dynamicChildren, r = Gr(t, !1);
  if (r) {
    if (process.env.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return zd(r);
  } else return [e, void 0];
  const a = t.indexOf(r), d = o ? o.indexOf(r) : -1, i = (n) => {
    t[a] = n, o && (d > -1 ? o[d] = n : n.patchFlag > 0 && (e.dynamicChildren = [...o, n]));
  };
  return [Te(r), i];
};
function Gr(e, t = !0) {
  let o;
  for (let r = 0; r < e.length; r++) {
    const a = e[r];
    if (so(a)) {
      if (a.type !== Se || a.children === "v-if") {
        if (o)
          return;
        if (o = a, process.env.NODE_ENV !== "production" && t && o.patchFlag > 0 && o.patchFlag & 2048)
          return Gr(o.children);
      }
    } else
      return;
  }
  return o;
}
const hl = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || ro(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, bl = (e, t) => {
  const o = {};
  for (const r in e)
    (!Oo(r) || !(r.slice(9) in t)) && (o[r] = e[r]);
  return o;
}, va = (e) => e.shapeFlag & 7 || e.type === Se;
function vl(e, t, o) {
  const { props: r, children: a, component: d } = e, { props: i, children: n, patchFlag: s } = t, b = d.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (a || n) && He || t.dirs || t.transition)
    return !0;
  if (o && s >= 0) {
    if (s & 1024)
      return !0;
    if (s & 16)
      return r ? ga(r, i, b) : !!i;
    if (s & 8) {
      const p = t.dynamicProps;
      for (let c = 0; c < p.length; c++) {
        const k = p[c];
        if (i[k] !== r[k] && !Xo(b, k))
          return !0;
      }
    }
  } else
    return (a || n) && (!n || !n.$stable) ? !0 : r === i ? !1 : r ? i ? ga(r, i, b) : !0 : !!i;
  return !1;
}
function ga(e, t, o) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < r.length; a++) {
    const d = r[a];
    if (t[d] !== e[d] && !Xo(o, d))
      return !0;
  }
  return !1;
}
function gl({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
}
const Hd = (e) => e.__isSuspense;
function ml(e, t) {
  t && t.pendingBranch ? L(e) ? t.effects.push(...e) : t.effects.push(e) : pd(e);
}
const G = Symbol.for("v-fgt"), lo = Symbol.for("v-txt"), Se = Symbol.for("v-cmt"), xo = Symbol.for("v-stc"), Xt = [];
let Ce = null;
function M(e = !1) {
  Xt.push(Ce = e ? null : []);
}
function kl() {
  Xt.pop(), Ce = Xt[Xt.length - 1] || null;
}
let to = 1;
function ma(e, t = !1) {
  to += e, e < 0 && Ce && t && (Ce.hasOnce = !0);
}
function Ud(e) {
  return e.dynamicChildren = to > 0 ? Ce || Tt : null, kl(), to > 0 && Ce && Ce.push(e), e;
}
function j(e, t, o, r, a, d) {
  return Ud(
    A(
      e,
      t,
      o,
      r,
      a,
      d,
      !0
    )
  );
}
function ka(e, t, o, r, a) {
  return Ud(
    Ue(
      e,
      t,
      o,
      r,
      a,
      !0
    )
  );
}
function so(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ut(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const o = yo.get(t.type);
    if (o && o.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const yl = (...e) => Kd(
  ...e
), Wd = ({ key: e }) => e ?? null, Eo = ({
  ref: e,
  ref_key: t,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? oe(e) || de(e) || B(e) ? { i: le, r: e, k: t, f: !!o } : e : null);
function A(e, t = null, o = null, r = 0, a = null, d = e === G ? 0 : 1, i = !1, n = !1) {
  const s = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Wd(t),
    ref: t && Eo(t),
    scopeId: kd,
    slotScopeIds: null,
    children: o,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: d,
    patchFlag: r,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: le
  };
  return n ? (qr(s, o), d & 128 && e.normalize(s)) : o && (s.shapeFlag |= oe(o) ? 8 : 16), process.env.NODE_ENV !== "production" && s.key !== s.key && V("VNode created with invalid key (NaN). VNode type:", s.type), to > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ce && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (s.patchFlag > 0 || d & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  s.patchFlag !== 32 && Ce.push(s), s;
}
const Ue = process.env.NODE_ENV !== "production" ? yl : Kd;
function Kd(e, t = null, o = null, r = 0, a = null, d = !1) {
  if ((!e || e === Tn) && (process.env.NODE_ENV !== "production" && !e && V(`Invalid vnode type when creating vnode: ${e}.`), e = Se), so(e)) {
    const n = ht(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return o && qr(n, o), to > 0 && !d && Ce && (n.shapeFlag & 6 ? Ce[Ce.indexOf(e)] = n : Ce.push(n)), n.patchFlag = -2, n;
  }
  if (Xd(e) && (e = e.__vccOpts), t) {
    t = _l(t);
    let { class: n, style: s } = t;
    n && !oe(n) && (t.class = ae(n)), Z(s) && (So(s) && !L(s) && (s = re({}, s)), t.style = Oe(s));
  }
  const i = oe(e) ? 1 : Hd(e) ? 128 : mn(e) ? 64 : Z(e) ? 4 : B(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && So(e) && (e = z(e), V(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), A(
    e,
    t,
    o,
    r,
    a,
    i,
    d,
    !0
  );
}
function _l(e) {
  return e ? So(e) || Dd(e) ? re({}, e) : e : null;
}
function ht(e, t, o = !1, r = !1) {
  const { props: a, ref: d, patchFlag: i, children: n, transition: s } = e, b = t ? wl(a || {}, t) : a, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: b,
    key: b && Wd(b),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && d ? L(d) ? d.concat(Eo(t)) : [d, Eo(t)] : Eo(t)
    ) : d,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && L(n) ? n.map(Gd) : n,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== G ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: s,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ht(e.ssContent),
    ssFallback: e.ssFallback && ht(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return s && r && Hr(
    p,
    s.clone(p)
  ), p;
}
function Gd(e) {
  const t = ht(e);
  return L(e.children) && (t.children = e.children.map(Gd)), t;
}
function No(e = " ", t = 0) {
  return Ue(lo, null, e, t);
}
function Te(e) {
  return e == null || typeof e == "boolean" ? Ue(Se) : L(e) ? Ue(
    G,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : so(e) ? st(e) : Ue(lo, null, String(e));
}
function st(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ht(e);
}
function qr(e, t) {
  let o = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (L(t))
    o = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), qr(e, a()), a._c && (a._d = !0));
      return;
    } else {
      o = 32;
      const a = t._;
      !a && !Dd(t) ? t._ctx = le : a === 3 && le && (le.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else B(t) ? (t = { default: t, _ctx: le }, o = 32) : (t = String(t), r & 64 ? (o = 16, t = [No(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function wl(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (const a in r)
      if (a === "class")
        t.class !== r.class && (t.class = ae([t.class, r.class]));
      else if (a === "style")
        t.style = Oe([t.style, r.style]);
      else if (ro(a)) {
        const d = t[a], i = r[a];
        i && d !== i && !(L(d) && d.includes(i)) && (t[a] = d ? [].concat(d, i) : i);
      } else a !== "" && (t[a] = r[a]);
  }
  return t;
}
function Pe(e, t, o, r = null) {
  Ke(e, t, 7, [
    o,
    r
  ]);
}
const xl = Id();
let El = 0;
function Nl(e, t, o) {
  const r = e.type, a = (t ? t.appContext : e.appContext) || xl, d = {
    uid: El++,
    vnode: e,
    type: r,
    parent: t,
    appContext: a,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new _i(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(a.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: $d(r, a),
    emitsOptions: Fd(r, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Y,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Y,
    data: Y,
    props: Y,
    attrs: Y,
    slots: Y,
    refs: Y,
    setupState: Y,
    setupContext: null,
    // suspense related
    suspense: o,
    suspenseId: o ? o.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
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
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? d.ctx = $n(d) : d.ctx = { _: d }, d.root = t ? t.root : d, d.emit = pl.bind(null, d), e.ce && e.ce(d), d;
}
let se = null;
const Cl = () => se || le;
let Po, Or;
{
  const e = ao(), t = (o, r) => {
    let a;
    return (a = e[o]) || (a = e[o] = []), a.push(r), (d) => {
      a.length > 1 ? a.forEach((i) => i(d)) : a[0](d);
    };
  };
  Po = t(
    "__VUE_INSTANCE_SETTERS__",
    (o) => se = o
  ), Or = t(
    "__VUE_SSR_SETTERS__",
    (o) => oo = o
  );
}
const co = (e) => {
  const t = se;
  return Po(e), e.scope.on(), () => {
    e.scope.off(), Po(t);
  };
}, ya = () => {
  se && se.scope.off(), Po(null);
}, Ol = /* @__PURE__ */ et("slot,component");
function Ir(e, { isNativeTag: t }) {
  (Ol(e) || t(e)) && V(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function qd(e) {
  return e.vnode.shapeFlag & 4;
}
let oo = !1;
function Il(e, t = !1, o = !1) {
  t && Or(t);
  const { props: r, children: a } = e.vnode, d = qd(e);
  Wn(e, r, d, t), ol(e, a, o);
  const i = d ? Sl(e, t) : void 0;
  return t && Or(!1), i;
}
function Sl(e, t) {
  var o;
  const r = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (r.name && Ir(r.name, e.appContext.config), r.components) {
      const d = Object.keys(r.components);
      for (let i = 0; i < d.length; i++)
        Ir(d[i], e.appContext.config);
    }
    if (r.directives) {
      const d = Object.keys(r.directives);
      for (let i = 0; i < d.length; i++)
        yd(d[i]);
    }
    r.compilerOptions && Vl() && V(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Nd), process.env.NODE_ENV !== "production" && Mn(e);
  const { setup: a } = r;
  if (a) {
    ot();
    const d = e.setupContext = a.length > 1 ? Tl(e) : null, i = co(e), n = At(
      a,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? ze(e.props) : e.props,
        d
      ]
    ), s = Tr(n);
    if (rt(), i(), (s || e.sp) && !Mt(e) && _d(e), s) {
      if (n.then(ya, ya), t)
        return n.then((b) => {
          _a(e, b, t);
        }).catch((b) => {
          io(b, e, 0);
        });
      if (e.asyncDep = n, process.env.NODE_ENV !== "production" && !e.suspense) {
        const b = (o = r.name) != null ? o : "Anonymous";
        V(
          `Component <${b}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      _a(e, n, t);
  } else
    Jd(e, t);
}
function _a(e, t, o) {
  B(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Z(t) ? (process.env.NODE_ENV !== "production" && so(t) && V(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = ld(t), process.env.NODE_ENV !== "production" && jn(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && V(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Jd(e, o);
}
const Vl = () => !0;
function Jd(e, t, o) {
  const r = e.type;
  e.render || (e.render = r.render || ne);
  {
    const a = co(e);
    ot();
    try {
      Rn(e);
    } finally {
      rt(), a();
    }
  }
  process.env.NODE_ENV !== "production" && !r.render && e.render === ne && !t && (r.template ? V(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : V("Component is missing template or render function: ", r));
}
const wa = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return Lo(), ie(e, "get", ""), e[t];
  },
  set() {
    return V("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return V("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return ie(e, "get", ""), e[t];
  }
};
function Dl(e) {
  return new Proxy(e.slots, {
    get(t, o) {
      return ie(e, "get", "$slots"), t[o];
    }
  });
}
function Tl(e) {
  const t = (o) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && V("expose() should be called only once per setup()."), o != null)) {
      let r = typeof o;
      r === "object" && (L(o) ? r = "array" : de(o) && (r = "ref")), r !== "object" && V(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = o || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let o, r;
    return Object.freeze({
      get attrs() {
        return o || (o = new Proxy(e.attrs, wa));
      },
      get slots() {
        return r || (r = Dl(e));
      },
      get emit() {
        return (a, ...d) => e.emit(a, ...d);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, wa),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Zo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ld(zi(e.exposed)), {
    get(t, o) {
      if (o in t)
        return t[o];
      if (o in xt)
        return xt[o](e);
    },
    has(t, o) {
      return o in t || o in xt;
    }
  })) : e.proxy;
}
const $l = /(?:^|[-_])(\w)/g, Ml = (e) => e.replace($l, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Yd(e, t = !0) {
  return B(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Qo(e, t, o = !1) {
  let r = Yd(t);
  if (!r && t.__file) {
    const a = t.__file.match(/([^/\\]+)\.\w+$/);
    a && (r = a[1]);
  }
  if (!r && e && e.parent) {
    const a = (d) => {
      for (const i in d)
        if (d[i] === t)
          return i;
    };
    r = a(
      e.components || e.parent.type.components
    ) || a(e.appContext.components);
  }
  return r ? Ml(r) : o ? "App" : "Anonymous";
}
function Xd(e) {
  return B(e) && "__vccOpts" in e;
}
const Qe = (e, t) => {
  const o = Gi(e, t, oo);
  if (process.env.NODE_ENV !== "production") {
    const r = Cl();
    r && r.appContext.config.warnRecursiveComputed && (o._warnRecursive = !0);
  }
  return o;
};
function jl() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, o = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, a = {
    __vue_custom_formatter: !0,
    header(c) {
      return Z(c) ? c.__isVue ? ["div", e, "VueInstance"] : de(c) ? [
        "div",
        {},
        ["span", e, p(c)],
        "<",
        // avoid debugger accessing value affecting behavior
        n("_value" in c ? c._value : c),
        ">"
      ] : _t(c) ? [
        "div",
        {},
        ["span", e, ve(c) ? "ShallowReactive" : "Reactive"],
        "<",
        n(c),
        `>${Xe(c) ? " (readonly)" : ""}`
      ] : Xe(c) ? [
        "div",
        {},
        ["span", e, ve(c) ? "ShallowReadonly" : "Readonly"],
        "<",
        n(c),
        ">"
      ] : null : null;
    },
    hasBody(c) {
      return c && c.__isVue;
    },
    body(c) {
      if (c && c.__isVue)
        return [
          "div",
          {},
          ...d(c.$)
        ];
    }
  };
  function d(c) {
    const k = [];
    c.type.props && c.props && k.push(i("props", z(c.props))), c.setupState !== Y && k.push(i("setup", c.setupState)), c.data !== Y && k.push(i("data", z(c.data)));
    const E = s(c, "computed");
    E && k.push(i("computed", E));
    const y = s(c, "inject");
    return y && k.push(i("injected", y)), k.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), k;
  }
  function i(c, k) {
    return k = re({}, k), Object.keys(k).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        c
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(k).map((E) => [
          "div",
          {},
          ["span", r, E + ": "],
          n(k[E], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function n(c, k = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", o, JSON.stringify(c)] : typeof c == "boolean" ? ["span", r, c] : Z(c) ? ["object", { object: k ? z(c) : c }] : ["span", o, String(c)];
  }
  function s(c, k) {
    const E = c.type;
    if (B(E))
      return;
    const y = {};
    for (const N in c.ctx)
      b(E, N, k) && (y[N] = c.ctx[N]);
    return y;
  }
  function b(c, k, E) {
    const y = c[E];
    if (L(y) && y.includes(k) || Z(y) && k in y || c.extends && b(c.extends, k, E) || c.mixins && c.mixins.some((N) => b(N, k, E)))
      return !0;
  }
  function p(c) {
    return ve(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(a) : window.devtoolsFormatters = [a];
}
const xa = "3.5.13", Ve = process.env.NODE_ENV !== "production" ? V : ne;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Sr;
const Ea = typeof window < "u" && window.trustedTypes;
if (Ea)
  try {
    Sr = /* @__PURE__ */ Ea.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && Ve(`Error creating trusted types policy: ${e}`);
  }
const Zd = Sr ? (e) => Sr.createHTML(e) : (e) => e, Al = "http://www.w3.org/2000/svg", Rl = "http://www.w3.org/1998/Math/MathML", Je = typeof document < "u" ? document : null, Na = Je && /* @__PURE__ */ Je.createElement("template"), Ll = {
  insert: (e, t, o) => {
    t.insertBefore(e, o || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, o, r) => {
    const a = t === "svg" ? Je.createElementNS(Al, e) : t === "mathml" ? Je.createElementNS(Rl, e) : o ? Je.createElement(e, { is: o }) : Je.createElement(e);
    return e === "select" && r && r.multiple != null && a.setAttribute("multiple", r.multiple), a;
  },
  createText: (e) => Je.createTextNode(e),
  createComment: (e) => Je.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Je.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, o, r, a, d) {
    const i = o ? o.previousSibling : t.lastChild;
    if (a && (a === d || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), o), !(a === d || !(a = a.nextSibling)); )
        ;
    else {
      Na.innerHTML = Zd(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const n = Na.content;
      if (r === "svg" || r === "mathml") {
        const s = n.firstChild;
        for (; s.firstChild; )
          n.appendChild(s.firstChild);
        n.removeChild(s);
      }
      t.insertBefore(n, o);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      o ? o.previousSibling : t.lastChild
    ];
  }
}, Pl = Symbol("_vtc");
function Bl(e, t, o) {
  const r = e[Pl];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const Bo = Symbol("_vod"), Qd = Symbol("_vsh"), Vr = {
  beforeMount(e, { value: t }, { transition: o }) {
    e[Bo] = e.style.display === "none" ? "" : e.style.display, o && t ? o.beforeEnter(e) : Wt(e, t);
  },
  mounted(e, { value: t }, { transition: o }) {
    o && t && o.enter(e);
  },
  updated(e, { value: t, oldValue: o }, { transition: r }) {
    !t != !o && (r ? t ? (r.beforeEnter(e), Wt(e, !0), r.enter(e)) : r.leave(e, () => {
      Wt(e, !1);
    }) : Wt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Wt(e, t);
  }
};
process.env.NODE_ENV !== "production" && (Vr.name = "show");
function Wt(e, t) {
  e.style.display = t ? e[Bo] : "none", e[Qd] = !t;
}
const Fl = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), zl = /(^|;)\s*display\s*:/;
function Hl(e, t, o) {
  const r = e.style, a = oe(o);
  let d = !1;
  if (o && !a) {
    if (t)
      if (oe(t))
        for (const i of t.split(";")) {
          const n = i.slice(0, i.indexOf(":")).trim();
          o[n] == null && Co(r, n, "");
        }
      else
        for (const i in t)
          o[i] == null && Co(r, i, "");
    for (const i in o)
      i === "display" && (d = !0), Co(r, i, o[i]);
  } else if (a) {
    if (t !== o) {
      const i = r[Fl];
      i && (o += ";" + i), r.cssText = o, d = zl.test(o);
    }
  } else t && e.removeAttribute("style");
  Bo in e && (e[Bo] = d ? r.display : "", e[Qd] && (r.display = "none"));
}
const Ul = /[^\\];\s*$/, Ca = /\s*!important$/;
function Co(e, t, o) {
  if (L(o))
    o.forEach((r) => Co(e, t, r));
  else if (o == null && (o = ""), process.env.NODE_ENV !== "production" && Ul.test(o) && Ve(
    `Unexpected semicolon at the end of '${t}' style value: '${o}'`
  ), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const r = Wl(e, t);
    Ca.test(o) ? e.setProperty(
      ye(r),
      o.replace(Ca, ""),
      "important"
    ) : e[r] = o;
  }
}
const Oa = ["Webkit", "Moz", "ms"], ur = {};
function Wl(e, t) {
  const o = ur[t];
  if (o)
    return o;
  let r = we(t);
  if (r !== "filter" && r in e)
    return ur[t] = r;
  r = Uo(r);
  for (let a = 0; a < Oa.length; a++) {
    const d = Oa[a] + r;
    if (d in e)
      return ur[t] = d;
  }
  return t;
}
const Ia = "http://www.w3.org/1999/xlink";
function Sa(e, t, o, r, a, d = yi(t)) {
  r && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Ia, t.slice(6, t.length)) : e.setAttributeNS(Ia, t, o) : o == null || d && !za(o) ? e.removeAttribute(t) : e.setAttribute(
    t,
    d ? "" : tt(o) ? String(o) : o
  );
}
function Va(e, t, o, r, a) {
  if (t === "innerHTML" || t === "textContent") {
    o != null && (e[t] = t === "innerHTML" ? Zd(o) : o);
    return;
  }
  const d = e.tagName;
  if (t === "value" && d !== "PROGRESS" && // custom elements may use _value internally
  !d.includes("-")) {
    const n = d === "OPTION" ? e.getAttribute("value") || "" : e.value, s = o == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(o);
    (n !== s || !("_value" in e)) && (e.value = s), o == null && e.removeAttribute(t), e._value = o;
    return;
  }
  let i = !1;
  if (o === "" || o == null) {
    const n = typeof e[t];
    n === "boolean" ? o = za(o) : o == null && n === "string" ? (o = "", i = !0) : n === "number" && (o = 0, i = !0);
  }
  try {
    e[t] = o;
  } catch (n) {
    process.env.NODE_ENV !== "production" && !i && Ve(
      `Failed setting prop "${t}" on <${d.toLowerCase()}>: value ${o} is invalid.`,
      n
    );
  }
  i && e.removeAttribute(a || t);
}
function Dt(e, t, o, r) {
  e.addEventListener(t, o, r);
}
function Kl(e, t, o, r) {
  e.removeEventListener(t, o, r);
}
const Da = Symbol("_vei");
function Gl(e, t, o, r, a = null) {
  const d = e[Da] || (e[Da] = {}), i = d[t];
  if (r && i)
    i.value = process.env.NODE_ENV !== "production" ? $a(r, t) : r;
  else {
    const [n, s] = ql(t);
    if (r) {
      const b = d[t] = Xl(
        process.env.NODE_ENV !== "production" ? $a(r, t) : r,
        a
      );
      Dt(e, n, b, s);
    } else i && (Kl(e, n, i, s), d[t] = void 0);
  }
}
const Ta = /(?:Once|Passive|Capture)$/;
function ql(e) {
  let t;
  if (Ta.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Ta); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ye(e.slice(2)), t];
}
let fr = 0;
const Jl = /* @__PURE__ */ Promise.resolve(), Yl = () => fr || (Jl.then(() => fr = 0), fr = Date.now());
function Xl(e, t) {
  const o = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= o.attached)
      return;
    Ke(
      Zl(r, o.value),
      t,
      5,
      [r]
    );
  };
  return o.value = e, o.attached = Yl(), o;
}
function $a(e, t) {
  return B(e) || L(e) ? e : (Ve(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), ne);
}
function Zl(e, t) {
  if (L(t)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, t.map(
      (r) => (a) => !a._stopped && r && r(a)
    );
  } else
    return t;
}
const Ma = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ql = (e, t, o, r, a, d) => {
  const i = a === "svg";
  t === "class" ? Bl(e, r, i) : t === "style" ? Hl(e, o, r) : ro(t) ? Oo(t) || Gl(e, t, o, r, d) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : es(e, t, r, i)) ? (Va(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Sa(e, t, r, i, d, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !oe(r)) ? Va(e, we(t), r, d, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Sa(e, t, r, i));
};
function es(e, t, o, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ma(t) && B(o));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Ma(t) && oe(o) ? !1 : t in e;
}
const ja = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function uo(e, t, o) {
  const r = /* @__PURE__ */ Rt(e, t);
  zo(r) && re(r, t);
  class a extends Jr {
    constructor(i) {
      super(r, i, o);
    }
  }
  return a.def = r, a;
}
const ts = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Jr extends ts {
  constructor(t, o = {}, r = Pa) {
    super(), this._def = t, this._props = o, this._createApp = r, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && r !== Pa ? this._root = this.shadowRoot : (process.env.NODE_ENV !== "production" && this.shadowRoot && Ve(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this), this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Jr) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? (this._setParent(), this._update()) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._instance.provides = t._instance.provides);
  }
  disconnectedCallback() {
    this._connected = !1, ud(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let r = 0; r < this.attributes.length; r++)
      this._setAttr(this.attributes[r].name);
    this._ob = new MutationObserver((r) => {
      for (const a of r)
        this._setAttr(a.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (r, a = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: d, styles: i } = r;
      let n;
      if (d && !L(d))
        for (const s in d) {
          const b = d[s];
          (b === Number || b && b.type === Number) && (s in this._props && (this._props[s] = ea(this._props[s])), (n || (n = /* @__PURE__ */ Object.create(null)))[we(s)] = !0);
        }
      this._numberProps = n, a && this._resolveProps(r), this.shadowRoot ? this._applyStyles(i) : process.env.NODE_ENV !== "production" && i && Ve(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(r);
    }, o = this._def.__asyncLoader;
    o ? this._pendingResolve = o().then(
      (r) => t(this._def = r, !0)
    ) : t(this._def);
  }
  _mount(t) {
    process.env.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const o = this._instance && this._instance.exposed;
    if (o)
      for (const r in o)
        K(this, r) ? process.env.NODE_ENV !== "production" && Ve(`Exposed property "${r}" already exists on custom element.`) : Object.defineProperty(this, r, {
          // unwrap ref to be consistent with public instance behavior
          get: () => _e(o[r])
        });
  }
  _resolveProps(t) {
    const { props: o } = t, r = L(o) ? o : Object.keys(o || {});
    for (const a of Object.keys(this))
      a[0] !== "_" && r.includes(a) && this._setProp(a, this[a]);
    for (const a of r.map(we))
      Object.defineProperty(this, a, {
        get() {
          return this._getProp(a);
        },
        set(d) {
          this._setProp(a, d, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const o = this.hasAttribute(t);
    let r = o ? this.getAttribute(t) : ja;
    const a = we(t);
    o && this._numberProps && this._numberProps[a] && (r = ea(r)), this._setProp(a, r, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, o, r = !0, a = !1) {
    if (o !== this._props[t] && (o === ja ? delete this._props[t] : (this._props[t] = o, t === "key" && this._app && (this._app._ceVNode.key = o)), a && this._instance && this._update(), r)) {
      const d = this._ob;
      d && d.disconnect(), o === !0 ? this.setAttribute(ye(t), "") : typeof o == "string" || typeof o == "number" ? this.setAttribute(ye(t), o + "") : o || this.removeAttribute(ye(t)), d && d.observe(this, { attributes: !0 });
    }
  }
  _update() {
    ls(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const o = Ue(this._def, re(t, this._props));
    return this._instance || (o.ce = (r) => {
      this._instance = r, r.ce = this, r.isCE = !0, process.env.NODE_ENV !== "production" && (r.ceReload = (d) => {
        this._styles && (this._styles.forEach((i) => this._root.removeChild(i)), this._styles.length = 0), this._applyStyles(d), this._instance = null, this._update();
      });
      const a = (d, i) => {
        this.dispatchEvent(
          new CustomEvent(
            d,
            zo(i[0]) ? re({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      r.emit = (d, ...i) => {
        a(d, i), ye(d) !== d && a(ye(d), i);
      }, this._setParent();
    }), o;
  }
  _applyStyles(t, o) {
    if (!t) return;
    if (o) {
      if (o === this._def || this._styleChildren.has(o))
        return;
      this._styleChildren.add(o);
    }
    const r = this._nonce;
    for (let a = t.length - 1; a >= 0; a--) {
      const d = document.createElement("style");
      if (r && d.setAttribute("nonce", r), d.textContent = t[a], this.shadowRoot.prepend(d), process.env.NODE_ENV !== "production")
        if (o) {
          if (o.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let i = this._childStyles.get(o.__hmrId);
            i || this._childStyles.set(o.__hmrId, i = []), i.push(d);
          }
        } else
          (this._styles || (this._styles = [])).push(d);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let o;
    for (; o = this.firstChild; ) {
      const r = o.nodeType === 1 && o.getAttribute("slot") || "default";
      (t[r] || (t[r] = [])).push(o), this.removeChild(o);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), o = this._instance.type.__scopeId;
    for (let r = 0; r < t.length; r++) {
      const a = t[r], d = a.getAttribute("name") || "default", i = this._slots[d], n = a.parentNode;
      if (i)
        for (const s of i) {
          if (o && s.nodeType === 1) {
            const b = o + "-s", p = document.createTreeWalker(s, 1);
            s.setAttribute(b, "");
            let c;
            for (; c = p.nextNode(); )
              c.setAttribute(b, "");
          }
          n.insertBefore(s, a);
        }
      else
        for (; a.firstChild; ) n.insertBefore(a.firstChild, a);
      n.removeChild(a);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
    if (process.env.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const o = this._childStyles.get(t.__hmrId);
      o && (o.forEach((r) => this._root.removeChild(r)), o.length = 0);
    }
  }
}
const Aa = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return L(t) ? (o) => St(t, o) : t;
};
function os(e) {
  e.target.composing = !0;
}
function Ra(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const pr = Symbol("_assign"), ei = {
  created(e, { modifiers: { lazy: t, trim: o, number: r } }, a) {
    e[pr] = Aa(a);
    const d = r || a.props && a.props.type === "number";
    Dt(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let n = e.value;
      o && (n = n.trim()), d && (n = hr(n)), e[pr](n);
    }), o && Dt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Dt(e, "compositionstart", os), Dt(e, "compositionend", Ra), Dt(e, "change", Ra));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: o, modifiers: { lazy: r, trim: a, number: d } }, i) {
    if (e[pr] = Aa(i), e.composing) return;
    const n = (d || e.type === "number") && !/^0\d/.test(e.value) ? hr(e.value) : e.value, s = t ?? "";
    n !== s && (document.activeElement === e && e.type !== "range" && (r && t === o || a && e.value.trim() === s) || (e.value = s));
  }
}, rs = ["ctrl", "shift", "alt", "meta"], as = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => rs.some((o) => e[`${o}Key`] && !t.includes(o))
}, be = (e, t) => {
  const o = e._withMods || (e._withMods = {}), r = t.join(".");
  return o[r] || (o[r] = (a, ...d) => {
    for (let i = 0; i < t.length; i++) {
      const n = as[t[i]];
      if (n && n(a, t)) return;
    }
    return e(a, ...d);
  });
}, ds = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, is = (e, t) => {
  const o = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return o[r] || (o[r] = (a) => {
    if (!("key" in a))
      return;
    const d = ye(a.key);
    if (t.some(
      (i) => i === d || ds[i] === d
    ))
      return e(a);
  });
}, ns = /* @__PURE__ */ re({ patchProp: Ql }, Ll);
let La;
function ti() {
  return La || (La = dl(ns));
}
const ls = (...e) => {
  ti().render(...e);
}, Pa = (...e) => {
  const t = ti().createApp(...e);
  process.env.NODE_ENV !== "production" && (cs(t), us(t));
  const { mount: o } = t;
  return t.mount = (r) => {
    const a = fs(r);
    if (!a) return;
    const d = t._component;
    !B(d) && !d.render && !d.template && (d.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const i = o(a, !1, ss(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), i;
  }, t;
};
function ss(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function cs(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => vi(t) || gi(t) || mi(t),
    writable: !1
  });
}
function us(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Ve(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const o = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Ve(r), o;
      },
      set() {
        Ve(r);
      }
    });
  }
}
function fs(e) {
  if (oe(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && Ve(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Ve(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ps() {
  jl();
}
process.env.NODE_ENV !== "production" && ps();
const hs = { class: "pickerWrap" }, bs = { class: "pickerContent" }, vs = { class: "pickerHeader" }, gs = {
  key: 0,
  class: "tedirSelectLoading"
}, ms = ["onClick"], ks = { class: "check" }, ys = ["checked", "id"], _s = ["for"], ws = ["onClick"], xs = { class: "check" }, Es = ["checked", "id"], Ns = ["for"], Cs = ["onClick"], Os = ["onClick"], Is = ["onClick"], Ss = ["onClick"], Vs = /* @__PURE__ */ Rt({
  __name: "SelectBox",
  props: {
    modelValue: { default: {}, type: null },
    options: { default: [], type: Array },
    prop: { default: "value", type: String },
    datatype: { default: "", type: String },
    dataprop: { default: "", type: String },
    placeholder: { default: "-- Select Option --", type: String },
    size: { default: 0, type: Number },
    type: { default: "", type: String },
    up: { type: Boolean, default: !1 },
    defaultOption: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "search", "load"],
  setup(e, { emit: t }) {
    const o = e, r = t, a = ee(o.modelValue || {}), d = ee(!1), i = ee(""), n = ee(null), s = ee(void 0);
    ft(() => o.modelValue, () => {
      a.value = o.modelValue;
    });
    const b = () => {
      clearTimeout(s.value), s.value = setTimeout(() => {
        var u, h;
        i.value = "", (u = n.value) != null && u.value && ((h = n.value) == null ? void 0 : h.value) !== "" && (i.value = n.value.value), r("search", i.value);
      }, 500);
    }, p = Qe(() => {
      let u = o.options;
      return i.value.length >= 1 && (u = u.filter((h) => {
        if (isNaN(h) === !1 && Number(h) === Number(i.value))
          return !0;
        if (typeof h == "string" && h.toLowerCase().includes(i.value.toLowerCase()))
          return !0;
        if (typeof h == "object" && h !== null && Object.prototype.toString.call(h) === "[object Object]")
          for (const m of Object.keys(h)) {
            if (isNaN(h[m]) === !1 && Number(h[m]) === Number(i.value))
              return !0;
            if (typeof h[m] == "string" && h[m].toLowerCase().includes(i.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), u;
    }), k = ((u = 10) => {
      let h = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", m = "";
      for (let $ = 0; $ < u; $++)
        m += h.charAt(Math.floor(Math.random() * h.length));
      return m;
    })(), E = (u) => {
      var h;
      u.target.style.display = "none", d.value = !1, (h = n.value) != null && h.value && (n.value.value = "", i.value = "");
    }, y = (u) => {
      a.value = u, r("update:modelValue", a.value), r("change", a.value, u), d.value = !1;
    }, N = (u, h = "") => {
      h !== "" ? a.value.map((m) => m[h]).includes(u[h]) ? a.value.splice(a.value.findIndex((m) => m[h] === u[h]), 1) : a.value.push(u) : a.value.includes(u) ? a.value.splice(a.value.findIndex((m) => m === u), 1) : a.value.push(u), r("update:modelValue", a.value), r("change", a.value, u);
    }, w = (u) => {
      typeof u == "object" && u !== null && String(o.datatype).toLowerCase() === "string" ? (a.value = u[String(o.dataprop || o.prop)], r("update:modelValue", String(a.value))) : typeof u == "object" && u !== null && String(o.datatype).toLowerCase() === "number" ? (a.value = u[String(o.dataprop || o.prop)], r("update:modelValue", Number(a.value))) : (a.value = u, r("update:modelValue", a.value)), d.value = !1, r("change", a.value, u);
    }, g = Qe(() => {
      let u = (o == null ? void 0 : o.placeholder) || "-- Select option --";
      if (p.value.length >= 1)
        if (typeof a.value == "number") {
          let h = p.value.filter((m) => Number(m[String(o.dataprop || o.prop)]) === Number(a.value));
          typeof p.value[0] == "object" && h.length >= 1 ? u = h[0][String(o.prop)] : typeof p.value[0] == "number" && (u = String(a.value));
        } else if (typeof a.value == "string") {
          let h = p.value.filter((m) => String(m[String(o.dataprop || o.prop)]) === a.value);
          typeof p.value[0] == "object" && h.length >= 1 ? u = h[0][String(o.prop)] : typeof p.value[0] == "string" && a.value !== "" && (u = a.value);
        } else typeof a.value == "object" && (Array.isArray(a.value) && a.value.length >= 1 ? typeof a.value[0] == "object" && String(o.prop) in a.value[0] ? u = a.value.map((h) => h[String(o.prop)]).join(", ") : u = a.value.join(", ") : a.value !== null && String(o.prop) in a.value && (u = a.value[String(o.prop)]));
      return u;
    });
    return (u, h) => (M(), j("div", {
      class: ae(["picker suggestion", { active: d.value, pickerUp: u.up }])
    }, [
      A("div", {
        class: "pickerBackdrop",
        style: Oe({ display: d.value ? "block" : "none" }),
        onClick: E
      }, null, 4),
      A("div", hs, [
        A("div", {
          class: "select pickerToggler",
          onClick: h[0] || (h[0] = (m) => {
            d.value = !d.value, r("load");
          })
        }, te(g.value), 1),
        A("div", bs, [
          A("div", vs, [
            A("input", {
              type: "search",
              ref_key: "searchRef",
              ref: n,
              onInput: b,
              class: "input"
            }, null, 544)
          ]),
          u.loading ? (M(), j("div", gs, h[3] || (h[3] = [
            A("span", { class: "spinner" }, null, -1)
          ]))) : (M(), j(G, { key: 1 }, [
            Array.isArray(a.value) ? (M(), j("div", {
              key: 0,
              class: "pickerMenu",
              style: Oe({ "max-height": Number(u.size) !== 0 ? Number(u.size) * 42 + "px" : "auto" })
            }, [
              Mo(A("div", {
                onClick: h[1] || (h[1] = be((m) => y(typeof u.modelValue == "object" ? Array.isArray(u.modelValue) ? [] : {} : ""), ["stop"])),
                class: "pickerItem"
              }, te(u.placeholder || "-- Select Option --"), 513), [
                [Vr, u.defaultOption]
              ]),
              (M(!0), j(G, null, Ze(p.value, (m, $) => (M(), j(G, {
                key: "option-" + m
              }, [
                typeof m == "string" && u.type !== "slot" ? (M(), j("div", {
                  key: 0,
                  onClick: be((q) => N(m), ["stop"]),
                  class: "pickerItem"
                }, [
                  A("div", ks, [
                    A("input", {
                      type: "checkbox",
                      class: "checkInput",
                      checked: a.value.includes(m),
                      id: "check-" + (_e(k) + String($)),
                      style: { "pointer-events": "none" }
                    }, null, 8, ys),
                    A("label", {
                      class: "checkLabel",
                      for: "check-" + (_e(k) + String($)),
                      style: { "pointer-events": "none" }
                    }, te(m), 9, _s)
                  ])
                ], 8, ms)) : typeof m == "object" && m !== null && u.prop in m && u.type !== "slot" ? (M(), j("div", {
                  key: 1,
                  onClick: be((q) => N(m, u.prop), ["stop"]),
                  class: "pickerItem"
                }, [
                  A("div", xs, [
                    A("input", {
                      type: "checkbox",
                      class: "checkInput",
                      checked: a.value.includes(m),
                      id: "check-" + (_e(k) + String($)),
                      style: { "pointer-events": "none" }
                    }, null, 8, Es),
                    A("label", {
                      class: "checkLabel",
                      for: "check-" + (_e(k) + String($)),
                      style: { "pointer-events": "none" }
                    }, te(m[u.prop]), 9, Ns)
                  ])
                ], 8, ws)) : (M(), j("div", {
                  key: 2,
                  onClick: be((q) => N(m), ["stop"]),
                  class: "pickerItem"
                }, [
                  pt(u.$slots, "default", {
                    option: m,
                    selected: a.value
                  }, void 0)
                ], 8, Cs))
              ], 64))), 128))
            ], 4)) : (M(), j("div", {
              key: 1,
              class: "pickerMenu",
              style: Oe({ "max-height": Number(u.size) !== 0 ? Number(u.size) * 42 + "px" : "auto" })
            }, [
              Mo(A("div", {
                onClick: h[2] || (h[2] = be((m) => y(typeof u.modelValue == "object" ? Array.isArray(u.modelValue) ? [] : {} : ""), ["stop"])),
                class: "pickerItem"
              }, te(u.placeholder || "-- Select Option --"), 513), [
                [Vr, u.defaultOption]
              ]),
              (M(!0), j(G, null, Ze(p.value, (m, $) => (M(), j(G, {
                key: "option-" + m
              }, [
                typeof m == "string" && u.type !== "slot" ? (M(), j("div", {
                  key: 0,
                  onClick: (q) => w(m),
                  class: ae(["pickerItem", a.value === m ? "active" : ""])
                }, te(m), 11, Os)) : typeof m == "object" && m !== null && u.prop in m && u.type !== "slot" ? (M(), j("div", {
                  key: 1,
                  onClick: (q) => w(m),
                  class: ae(["pickerItem", a.value[u.prop] === m[u.prop] || String(m[u.dataprop || u.prop]) === String(a.value) ? "active" : ""])
                }, te(m[u.prop]), 11, Is)) : (M(), j("div", {
                  key: 2,
                  onClick: be((q) => w(m), ["stop"]),
                  class: ae(["pickerItem", a.value === m ? "active" : ""])
                }, [
                  pt(u.$slots, "default", {
                    option: m,
                    selected: a.value
                  }, void 0)
                ], 10, Ss))
              ], 64))), 128))
            ], 4))
          ], 64))
        ])
      ])
    ], 2));
  }
}), Ds = `.picker[data-v-3802d66d]{width:auto}.pickerWrap[data-v-3802d66d]{display:block;position:relative}.picker.dropdown .pickerWrap[data-v-3802d66d]{display:inline-block}.pickerBackdrop[data-v-3802d66d]{position:fixed;z-index:74;top:0;right:3em;bottom:3em;left:0;max-width:100vw;max-height:100vh;width:100%;height:100%;display:none}.picker.active .pickerBackdrop[data-v-3802d66d]{display:block}.pickerToggler[data-v-3802d66d]{padding:.5rem;-webkit-user-select:none;user-select:none}.select.pickerToggler[data-v-3802d66d]{padding-left:.75rem;padding-right:2.25rem;cursor:default;font-size:inherit;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:100%}.pickerContent[data-v-3802d66d]{position:absolute;z-index:75;top:2.45rem;left:0;min-width:240px;background-color:#fff;border:1px solid #d9d9d9;display:none;border-radius:.375rem}.pickerContent .pickerHeader[data-v-3802d66d]{padding:.5rem;border-bottom:1px solid #d9d9d9}.pickerContent .pickerBody[data-v-3802d66d]{padding:.75rem}.pickerContent .pickerMenu[data-v-3802d66d]{overflow-y:auto;max-height:420px}.pickerContent .pickerItem[data-v-3802d66d]{display:block;padding:.675rem .75rem;border-bottom:1px solid #d9d9d9;text-decoration:none;color:#283541;cursor:pointer}.pickerContent .pickerItem[data-v-3802d66d]:last-child{border-bottom:0}.pickerContent .pickerItem[data-v-3802d66d]:hover{background-color:#ededed}.pickerContent .pickerItem.active[data-v-3802d66d]{pointer-events:none;border-color:#4890eb;background-color:#4c9bff;color:#fff;cursor:default}.pickerContent .pickerFooter[data-v-3802d66d]{padding:.5rem;border-top:1px solid #d9d9d9}.pickerContent.pickerSizing[data-v-3802d66d]{overflow-y:auto;max-height:420px}.suggestion .pickerContent[data-v-3802d66d],.fill .pickerContent[data-v-3802d66d]{width:100%;min-width:auto}.pickerEnd .pickerContent[data-v-3802d66d]{right:0;left:auto;text-align:left}.pickerUp .pickerContent[data-v-3802d66d]{bottom:2.5rem;top:auto}.picker:not(.pickerUp).suggestion.active .input.pickerToggler[data-v-3802d66d],.picker:not(.pickerUp).suggestion.active .select.pickerToggler[data-v-3802d66d]{border-bottom-right-radius:0;border-bottom-left-radius:0}.picker:not(.pickerUp).suggestion.active .pickerContent[data-v-3802d66d]{border-top-right-radius:0;border-top-left-radius:0}.picker.pickerUp.suggestion.active .input.pickerToggler[data-v-3802d66d],.picker.pickerUp.suggestion.active .select.pickerToggler[data-v-3802d66d]{border-top-right-radius:0;border-top-left-radius:0}.picker.pickerUp.suggestion.active .pickerContent[data-v-3802d66d]{border-bottom-right-radius:0;border-bottom-left-radius:0}.picker.active .pickerContent[data-v-3802d66d]{display:block}@media (prefers-color-scheme: dark){.pickerContent[data-v-3802d66d]{background-color:#2f2f2f;border-color:#5f5f5f}.pickerContent .pickerHeader[data-v-3802d66d]{border-bottom-color:#5f5f5f}.pickerContent .pickerItem[data-v-3802d66d]{border-bottom-color:#5f5f5f;color:#f2f2f2}.pickerContent .pickerItem[data-v-3802d66d]:hover{background-color:#242424}.pickerContent .pickerFooter[data-v-3802d66d]{border-top-color:#5f5f5f}}@media (prefers-color-scheme: light){html[data-mode=dark] .pickerContent[data-v-3802d66d]{background-color:#2f2f2f;border-color:#5f5f5f}html[data-mode=dark] .pickerContent .pickerHeader[data-v-3802d66d]{border-bottom-color:#5f5f5f}html[data-mode=dark] .pickerContent .pickerItem[data-v-3802d66d]{border-bottom-color:#5f5f5f;color:#f2f2f2}html[data-mode=dark] .pickerContent .pickerItem[data-v-3802d66d]:hover{background-color:#242424}html[data-mode=dark] .pickerContent .pickerFooter[data-v-3802d66d]{border-top-color:#5f5f5f}}@media (prefers-color-scheme: dark){html[data-mode=light] .pickerContent[data-v-3802d66d]{background-color:#fff;border-color:#d9d9d9}html[data-mode=light] .pickerContent .pickerHeader[data-v-3802d66d]{border-bottom-color:#d9d9d9}html[data-mode=light] .pickerContent .pickerItem[data-v-3802d66d]{border-bottom-color:#d9d9d9;color:#283541}html[data-mode=light] .pickerContent .pickerItem[data-v-3802d66d]:hover{background-color:#ededed}html[data-mode=light] .pickerContent .pickerFooter[data-v-3802d66d]{border-top-color:#d9d9d9}}.input[data-v-3802d66d],.select[data-v-3802d66d]{display:block;width:100%;padding:.5rem .75rem;margin:0;font-size:1rem;font-weight:400;line-height:1.5;background-color:#fff;background-clip:padding-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:inherit;border:1px solid #d9d9d9;border-radius:.375rem;outline:0;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.input[data-v-3802d66d]::placeholder,.select[data-v-3802d66d]::placeholder{color:#555}.input[data-v-3802d66d]:focus,.select[data-v-3802d66d]:focus{border-color:#1d84b6;background-color:#f7faff;z-index:1;box-shadow:none}.input[disabled][data-v-3802d66d],.input[readonly][data-v-3802d66d],.input.disabled[data-v-3802d66d],.select[disabled][data-v-3802d66d],.select[readonly][data-v-3802d66d],.select.disabled[data-v-3802d66d]{border-color:#d6d6d6;background-color:#f0f0f0;cursor:default;box-shadow:none}.input[disabled][data-v-3802d66d],.input.disabled[data-v-3802d66d],.select[disabled][data-v-3802d66d],.select.disabled[data-v-3802d66d]{color:#9b9b9b;-webkit-user-select:none;user-select:none;pointer-events:none}.input.plain[data-v-3802d66d],.input.plainText[data-v-3802d66d]{background-color:transparent;border-color:transparent;padding-left:0;padding-right:0;box-shadow:none}.valid[data-v-3802d66d],.validated[data-v-3802d66d] :valid{border-color:#198754;background-color:#f1fff8;padding-right:calc(1.5em + .75rem);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.validMessage[data-v-3802d66d]{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#198754}.validTooltip[data-v-3802d66d]{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:#198754e6;border-radius:.25rem}.invalid[data-v-3802d66d],.validated[data-v-3802d66d] :invalid{border-color:#dc3545;background-color:#fbf1f2;padding-right:calc(1.5em + .75rem);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.invalidMessage[data-v-3802d66d]{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#dc3545}.invalidTooltip[data-v-3802d66d]{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:#dc3545e6;border-radius:.25rem}.valid~.validMessage[data-v-3802d66d],.valid~.validTooltip[data-v-3802d66d],.validated :valid~.validMessage[data-v-3802d66d],.validated :valid~.validTooltip[data-v-3802d66d],.invalid~.invalidMessage[data-v-3802d66d],.invalid~.invalidTooltip[data-v-3802d66d],.validated :invalid~.invalidMessage[data-v-3802d66d],.validated :invalid~.invalidTooltip[data-v-3802d66d]{display:block}textarea.input[data-v-3802d66d]{min-height:6.5rem;resize:none;border-radius:.375rem}.select[data-v-3802d66d]:not([multiple]){background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px}html[dir=rtl] .select[data-v-3802d66d]:not([multiple]){background-position:left .75rem center}select.select[data-v-3802d66d]:not([multiple]){padding:.5rem}.select[multiple][data-v-3802d66d]{padding-top:.5rem;padding-bottom:.5rem}.select[multiple] option[data-v-3802d66d]{padding-top:.375rem;padding-bottom:.375rem;outline:0}.check[data-v-3802d66d]{display:inline-flex;align-items:center}.check .checkInput[data-v-3802d66d]{width:1.5em;height:1.5em;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border:1px solid #d9d9d9}.check .checkInput[type=checkbox][data-v-3802d66d]{border-radius:.25rem}.check .checkInput[type=radio][data-v-3802d66d]{border-radius:.75rem}.check .checkInput[data-v-3802d66d]:checked{border-color:#1d84b6;background-color:#1d84b6}.check .checkInput[disabled][data-v-3802d66d],.check .checkInput.disabled[data-v-3802d66d]{border-color:#d6d6d6;background-color:#f0f0f0;pointer-events:none}.check .checkInput:checked[disabled][data-v-3802d66d],.check .checkInput:checked.disabled[data-v-3802d66d]{background-color:#bbb}.check .checkInput[disabled]~.checkLabel[data-v-3802d66d],.check .checkInput.disabled~.checkLabel[data-v-3802d66d]{color:#9b9b9b;cursor:default}.check .checkInput[type=checkbox][data-v-3802d66d]:checked{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e")}.check .checkInput[type=checkbox][data-v-3802d66d]:indeterminate{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e")}.check .checkInput[type=radio][data-v-3802d66d]:checked{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e")}.check .checkLabel[data-v-3802d66d]{display:inline-block;padding-left:.5rem;padding-right:.5rem}.check.switch .checkInput[data-v-3802d66d]{width:2.85em;background-repeat:no-repeat;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");background-position:left center;border-radius:2em;transition:background-position .15s ease-in-out}.check.switch .checkInput[data-v-3802d66d]:checked{background-position:right center;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")}@media (prefers-color-scheme: dark){.input[data-v-3802d66d],.select[data-v-3802d66d]{background-color:#242424;border-color:#5f5f5f}.input[data-v-3802d66d]::placeholder,.select[data-v-3802d66d]::placeholder{color:#d4d4d4}.input[data-v-3802d66d]:focus,.select[data-v-3802d66d]:focus{background-color:#242424}.input[disabled][data-v-3802d66d],.input[readonly][data-v-3802d66d],.input.disabled[data-v-3802d66d],.select[disabled][data-v-3802d66d],.select[readonly][data-v-3802d66d],.select.disabled[data-v-3802d66d]{background-color:#242424;border-color:#5f5f5f}.input.plain[data-v-3802d66d],.input.plainText[data-v-3802d66d]{background-color:transparent;border-color:transparent}.valid[data-v-3802d66d],.validated[data-v-3802d66d] :valid{background-color:#242424;border-color:#198754}.invalid[data-v-3802d66d],.validated[data-v-3802d66d] :invalid{background-color:#242424;border-color:#dc3545}.check .checkInput[data-v-3802d66d]{background-color:#242424;border-color:#5f5f5f}.check .checkInput[data-v-3802d66d]:checked{border-color:#1d84b6;background-color:#1d84b6}.check .checkInput[disabled][data-v-3802d66d],.check .checkInput.disabled[data-v-3802d66d]{background-color:#2f2f2f;border-color:#5f5f5f}.check .checkInput:checked[disabled][data-v-3802d66d],.check .checkInput:checked.disabled[data-v-3802d66d]{background-color:#2f2f2f}.check.switch .checkInput[data-v-3802d66d]{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%28255, 255, 255, 0.25%29'/%3e%3c/svg%3e")}.check.switch .checkInput[data-v-3802d66d]:checked{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")}}@media (prefers-color-scheme: light){html[data-mode=dark] .input[data-v-3802d66d],html[data-mode=dark] .select[data-v-3802d66d]{background-color:#242424;border-color:#5f5f5f}html[data-mode=dark] .input[data-v-3802d66d]::placeholder,html[data-mode=dark] .select[data-v-3802d66d]::placeholder{color:#d4d4d4}html[data-mode=dark] .input[data-v-3802d66d]:focus,html[data-mode=dark] .select[data-v-3802d66d]:focus{background-color:#242424}html[data-mode=dark] .input[disabled][data-v-3802d66d],html[data-mode=dark] .input[readonly][data-v-3802d66d],html[data-mode=dark] .input.disabled[data-v-3802d66d],html[data-mode=dark] .select[disabled][data-v-3802d66d],html[data-mode=dark] .select[readonly][data-v-3802d66d],html[data-mode=dark] .select.disabled[data-v-3802d66d]{background-color:#242424;border-color:#5f5f5f}html[data-mode=dark] .input.plain[data-v-3802d66d],html[data-mode=dark] .input.plainText[data-v-3802d66d]{background-color:transparent;border-color:transparent}html[data-mode=dark] .valid[data-v-3802d66d],html[data-mode=dark] .validated[data-v-3802d66d] :valid{background-color:#242424;border-color:#198754}html[data-mode=dark] .invalid[data-v-3802d66d],html[data-mode=dark] .validated[data-v-3802d66d] :invalid{background-color:#242424;border-color:#dc3545}html[data-mode=dark] .check .checkInput[data-v-3802d66d]{background-color:#242424;border-color:#5f5f5f}html[data-mode=dark] .check .checkInput[data-v-3802d66d]:checked{border-color:#1d84b6;background-color:#1d84b6}html[data-mode=dark] .check .checkInput[disabled][data-v-3802d66d],html[data-mode=dark] .check .checkInput.disabled[data-v-3802d66d]{background-color:#2f2f2f;border-color:#5f5f5f}html[data-mode=dark] .check .checkInput:checked[disabled][data-v-3802d66d],html[data-mode=dark] .check .checkInput:checked.disabled[data-v-3802d66d]{background-color:#2f2f2f}html[data-mode=dark] .check.switch .checkInput[data-v-3802d66d]{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%28255, 255, 255, 0.25%29'/%3e%3c/svg%3e")}html[data-mode=dark] .check.switch .checkInput[data-v-3802d66d]:checked{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")}}@media (prefers-color-scheme: dark){html[data-mode=light] .input[data-v-3802d66d],html[data-mode=light] .select[data-v-3802d66d]{background-color:#fff;border-color:#d9d9d9}html[data-mode=light] .input[data-v-3802d66d]::placeholder,html[data-mode=light] .select[data-v-3802d66d]::placeholder{color:#555}html[data-mode=light] .input[data-v-3802d66d]:focus,html[data-mode=light] .select[data-v-3802d66d]:focus{background-color:#f7faff}html[data-mode=light] .input[disabled][data-v-3802d66d],html[data-mode=light] .input[readonly][data-v-3802d66d],html[data-mode=light] .input.disabled[data-v-3802d66d],html[data-mode=light] .select[disabled][data-v-3802d66d],html[data-mode=light] .select[readonly][data-v-3802d66d],html[data-mode=light] .select.disabled[data-v-3802d66d]{background-color:#f0f0f0;border-color:#d6d6d6}html[data-mode=light] .input.plain[data-v-3802d66d],html[data-mode=light] .input.plainText[data-v-3802d66d]{background-color:transparent;border-color:transparent}html[data-mode=light] .valid[data-v-3802d66d],html[data-mode=light] .validated[data-v-3802d66d] :valid{background-color:#f1fff8;border-color:#198754}html[data-mode=light] .invalid[data-v-3802d66d],html[data-mode=light] .validated[data-v-3802d66d] :invalid{background-color:#fbf1f2;border-color:#dc3545}html[data-mode=light] .check .checkInput[data-v-3802d66d]{background-color:#fff;border-color:#d9d9d9}html[data-mode=light] .check .checkInput[data-v-3802d66d]:checked{border-color:#1d84b6;background-color:#1d84b6}html[data-mode=light] .check .checkInput[disabled][data-v-3802d66d],html[data-mode=light] .check .checkInput.disabled[data-v-3802d66d]{background-color:#f0f0f0;border-color:#d6d6d6}html[data-mode=light] .check .checkInput:checked[disabled][data-v-3802d66d],html[data-mode=light] .check .checkInput:checked.disabled[data-v-3802d66d]{background-color:#bbb}html[data-mode=light] .check.switch .checkInput[data-v-3802d66d]{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e")}html[data-mode=light] .check.switch .checkInput[data-v-3802d66d]:checked{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")}}.spinner[data-v-3802d66d]{display:block;border-radius:50%;height:25px;width:25px;margin:12.5px 0 0 12.5px;border:5px solid #f2f2f2;border-top:5px solid #07f;animation:spin-3802d66d 1s infinite linear}@keyframes spin-3802d66d{0%{transform:rotate(0)}to{transform:rotate(359deg)}}@media (prefers-color-scheme: dark){.spinner[data-v-3802d66d]{border-color:#5f5f5f;border-top-color:#07f}}@media (prefers-color-scheme: light){html[data-mode=dark] .spinner[data-v-3802d66d]{border-color:#5f5f5f;border-top-color:#07f}}@media (prefers-color-scheme: dark){html[data-mode=light] .spinner[data-v-3802d66d]{border-color:#f2f2f2;border-top-color:#07f}}.tedirSelectLoading[data-v-3802d66d]{width:100%;height:150px;display:grid;place-items:center}`, fo = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [r, a] of t)
    o[r] = a;
  return o;
}, Ts = /* @__PURE__ */ fo(Vs, [["styles", [Ds]], ["__scopeId", "data-v-3802d66d"]]), $s = { class: "pickerWrap" }, Ms = ["value", "placeholder"], js = ["value", "placeholder"], As = { class: "pickerContent pickerSizing" }, Rs = {
  key: 0,
  class: "tedirSelectLoading"
}, Ls = ["onClick"], Ps = ["onClick"], Bs = ["onClick"], Fs = /* @__PURE__ */ Rt({
  __name: "ComboBox",
  props: {
    modelValue: { default: {}, type: null },
    options: { default: [], type: Array },
    prop: { default: "value", type: String },
    datatype: { default: "", type: String },
    dataprop: { default: "", type: String },
    placeholder: { default: "-- Search Option --", type: String },
    size: { default: 0, type: Number },
    select: { type: Boolean, default: !1 },
    up: { type: Boolean, default: !1 },
    serverSearch: { type: Boolean, default: !1 },
    emptySearch: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "search", "load"],
  setup(e, { emit: t }) {
    var N, w;
    const o = e, r = t, a = ee(o.modelValue || {}), d = ee(!1), i = ee(((w = (N = o == null ? void 0 : o.options) == null ? void 0 : N.filter((g) => ((g == null ? void 0 : g[String(o == null ? void 0 : o.prop)]) || g) === o.modelValue)) == null ? void 0 : w[0]) || ""), n = ee(null), s = ee(void 0), b = ee(!1);
    ft(() => o.modelValue, () => {
      var g, u;
      a.value = o.modelValue, i.value = ((u = (g = o == null ? void 0 : o.options) == null ? void 0 : g.filter((h) => ((h == null ? void 0 : h[String(o == null ? void 0 : o.prop)]) || h) === o.modelValue)) == null ? void 0 : u[0]) || "", b.value = !1;
    });
    const p = Qe(() => {
      let g = o.options;
      return i.value.length >= 1 && o.serverSearch !== !0 && (g = g.filter((u) => {
        if (isNaN(u) === !1 && Number(u) === Number(i.value))
          return !0;
        if (typeof u == "string" && u.toLowerCase().includes(i.value.toLowerCase()))
          return !0;
        if (typeof u == "object" && u !== null && Object.prototype.toString.call(u) === "[object Object]")
          for (const h of Object.keys(u)) {
            if (isNaN(u[h]) === !1 && Number(u[h]) === Number(i.value))
              return !0;
            if (typeof u[h] == "string" && u[h].toLowerCase().includes(i.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), g;
    }), c = () => {
      clearTimeout(s.value), s.value = setTimeout(() => {
        var g, u;
        i.value = "", (g = n.value) != null && g.value && ((u = n.value) == null ? void 0 : u.value) !== "" && (i.value = n.value.value), r("search", i.value), p.value.length >= 1 && b.value === !0 || o.serverSearch == !0 ? d.value = !0 : d.value = !1;
      }, 500);
    }, k = (g, u) => {
      (typeof g == "string" || isNaN(g) === !1) && (i.value = g, n.value.value = g), o.emptySearch == !0 && (i.value = "", n.value.value = "", r("search", i.value)), typeof u == "object" && u !== null && String(o.datatype).toLowerCase() === "string" ? (a.value = u[String(o.dataprop || o.prop)], r("update:modelValue", String(a.value))) : typeof u == "object" && u !== null && String(o.datatype).toLowerCase() === "number" ? (a.value = u[String(o.dataprop || o.prop)], r("update:modelValue", Number(a.value))) : (a.value = u, r("update:modelValue", a.value)), r("change", g, u), d.value = !1;
    }, E = (g) => {
      g.target.style.display = "none", d.value = !1;
    }, y = Qe(() => {
      var u;
      let g = i.value;
      if (p.value.length >= 1 && b.value !== !0 && o.emptySearch !== !0)
        if (typeof a.value == "number") {
          let h = p.value.filter((m) => Number(m[String(o.dataprop || o.prop)]) === Number(a.value));
          typeof p.value[0] == "object" && h.length >= 1 ? g = h[0][String(o.prop)] : typeof p.value[0] == "number" && (g = String(a.value));
        } else if (typeof a.value == "string") {
          let h = p.value.filter((m) => String(m[String(o.dataprop || o.prop)]) === a.value);
          typeof p.value[0] == "object" && h.length >= 1 ? g = h[0][String(o.prop)] : typeof p.value[0] == "string" && a.value !== "" && (g = a.value);
        } else typeof a.value == "object" && (Array.isArray(a.value) && a.value.length >= 1 ? typeof a.value[0] == "object" && String(o.prop) in a.value[0] ? g = a.value.map((h) => h[String(o.prop)]).join(", ") : g = a.value.join(", ") : a.value !== null && String(o.prop) in a.value && (g = a.value[String(o.prop)]));
      else (u = n.value) != null && u.value && b.value === !0 && o.emptySearch !== !0 && (g = n.value.value);
      return g;
    });
    return (g, u) => (M(), j("div", {
      class: ae(["picker suggestion", { active: d.value, pickerUp: g.up }])
    }, [
      A("div", {
        class: "pickerBackdrop",
        style: Oe({ display: d.value ? "block" : "none" }),
        onClick: E
      }, null, 4),
      A("div", $s, [
        g.select ? (M(), j("input", {
          key: 0,
          type: "search",
          value: y.value,
          ref_key: "searchRef",
          ref: n,
          onInput: c,
          onClick: u[0] || (u[0] = (h) => {
            d.value = !0, r("load");
          }),
          onFocus: u[1] || (u[1] = (h) => b.value = !0),
          onBlur: u[2] || (u[2] = (h) => b.value = !1),
          class: "select",
          placeholder: g.placeholder
        }, null, 40, Ms)) : (M(), j("input", {
          key: 1,
          type: "search",
          value: y.value,
          ref_key: "searchRef",
          ref: n,
          onInput: c,
          onClick: u[3] || (u[3] = (h) => {
            d.value = p.value.length >= 1 && i.value !== "", r("load");
          }),
          onFocus: u[4] || (u[4] = (h) => b.value = !0),
          onBlur: u[5] || (u[5] = (h) => b.value = !1),
          class: "input",
          placeholder: g.placeholder || "-- Search Option --"
        }, null, 40, js)),
        A("div", As, [
          g.loading ? (M(), j("div", Rs, u[6] || (u[6] = [
            A("span", { class: "spinner" }, null, -1)
          ]))) : (M(!0), j(G, { key: 1 }, Ze(p.value, (h, m) => (M(), j(G, {
            key: "option-" + h
          }, [
            typeof h == "string" ? (M(), j("div", {
              key: 0,
              onClick: ($) => k(h, h),
              class: ae(["pickerItem", g.modelValue === h ? "active" : ""])
            }, te(h), 11, Ls)) : typeof h == "object" && g.prop in h ? (M(), j("div", {
              key: 1,
              onClick: ($) => k(h[g.prop], h),
              class: ae(["pickerItem", a.value[g.prop] === h[g.prop] || String(h[g.dataprop || g.prop]) === String(a.value) ? "active" : ""])
            }, te(h[g.prop]), 11, Ps)) : (M(), j("div", {
              key: 2,
              onClick: be(($) => k(h, h), ["stop"]),
              class: ae(["pickerItem", g.modelValue === h ? "active" : ""])
            }, [
              pt(g.$slots, "default", { option: h }, void 0)
            ], 10, Bs))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
}), zs = `.picker[data-v-873cb0de]{width:auto}.pickerWrap[data-v-873cb0de]{display:block;position:relative}.picker.dropdown .pickerWrap[data-v-873cb0de]{display:inline-block}.pickerBackdrop[data-v-873cb0de]{position:fixed;z-index:74;top:0;right:3em;bottom:3em;left:0;max-width:100vw;max-height:100vh;width:100%;height:100%;display:none}.picker.active .pickerBackdrop[data-v-873cb0de]{display:block}.pickerToggler[data-v-873cb0de]{padding:.5rem;-webkit-user-select:none;user-select:none}.select.pickerToggler[data-v-873cb0de]{padding-left:.75rem;padding-right:2.25rem;cursor:default;font-size:inherit;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:100%}.pickerContent[data-v-873cb0de]{position:absolute;z-index:75;top:2.45rem;left:0;min-width:240px;background-color:#fff;border:1px solid #d9d9d9;display:none;border-radius:.375rem}.pickerContent .pickerHeader[data-v-873cb0de]{padding:.5rem;border-bottom:1px solid #d9d9d9}.pickerContent .pickerBody[data-v-873cb0de]{padding:.75rem}.pickerContent .pickerMenu[data-v-873cb0de]{overflow-y:auto;max-height:420px}.pickerContent .pickerItem[data-v-873cb0de]{display:block;padding:.675rem .75rem;border-bottom:1px solid #d9d9d9;text-decoration:none;color:#283541;cursor:pointer}.pickerContent .pickerItem[data-v-873cb0de]:last-child{border-bottom:0}.pickerContent .pickerItem[data-v-873cb0de]:hover{background-color:#ededed}.pickerContent .pickerItem.active[data-v-873cb0de]{pointer-events:none;border-color:#4890eb;background-color:#4c9bff;color:#fff;cursor:default}.pickerContent .pickerFooter[data-v-873cb0de]{padding:.5rem;border-top:1px solid #d9d9d9}.pickerContent.pickerSizing[data-v-873cb0de]{overflow-y:auto;max-height:420px}.suggestion .pickerContent[data-v-873cb0de],.fill .pickerContent[data-v-873cb0de]{width:100%;min-width:auto}.pickerEnd .pickerContent[data-v-873cb0de]{right:0;left:auto;text-align:left}.pickerUp .pickerContent[data-v-873cb0de]{bottom:2.5rem;top:auto}.picker:not(.pickerUp).suggestion.active .input.pickerToggler[data-v-873cb0de],.picker:not(.pickerUp).suggestion.active .select.pickerToggler[data-v-873cb0de]{border-bottom-right-radius:0;border-bottom-left-radius:0}.picker:not(.pickerUp).suggestion.active .pickerContent[data-v-873cb0de]{border-top-right-radius:0;border-top-left-radius:0}.picker.pickerUp.suggestion.active .input.pickerToggler[data-v-873cb0de],.picker.pickerUp.suggestion.active .select.pickerToggler[data-v-873cb0de]{border-top-right-radius:0;border-top-left-radius:0}.picker.pickerUp.suggestion.active .pickerContent[data-v-873cb0de]{border-bottom-right-radius:0;border-bottom-left-radius:0}.picker.active .pickerContent[data-v-873cb0de]{display:block}@media (prefers-color-scheme: dark){.pickerContent[data-v-873cb0de]{background-color:#2f2f2f;border-color:#5f5f5f}.pickerContent .pickerHeader[data-v-873cb0de]{border-bottom-color:#5f5f5f}.pickerContent .pickerItem[data-v-873cb0de]{border-bottom-color:#5f5f5f;color:#f2f2f2}.pickerContent .pickerItem[data-v-873cb0de]:hover{background-color:#242424}.pickerContent .pickerFooter[data-v-873cb0de]{border-top-color:#5f5f5f}}@media (prefers-color-scheme: light){html[data-mode=dark] .pickerContent[data-v-873cb0de]{background-color:#2f2f2f;border-color:#5f5f5f}html[data-mode=dark] .pickerContent .pickerHeader[data-v-873cb0de]{border-bottom-color:#5f5f5f}html[data-mode=dark] .pickerContent .pickerItem[data-v-873cb0de]{border-bottom-color:#5f5f5f;color:#f2f2f2}html[data-mode=dark] .pickerContent .pickerItem[data-v-873cb0de]:hover{background-color:#242424}html[data-mode=dark] .pickerContent .pickerFooter[data-v-873cb0de]{border-top-color:#5f5f5f}}@media (prefers-color-scheme: dark){html[data-mode=light] .pickerContent[data-v-873cb0de]{background-color:#fff;border-color:#d9d9d9}html[data-mode=light] .pickerContent .pickerHeader[data-v-873cb0de]{border-bottom-color:#d9d9d9}html[data-mode=light] .pickerContent .pickerItem[data-v-873cb0de]{border-bottom-color:#d9d9d9;color:#283541}html[data-mode=light] .pickerContent .pickerItem[data-v-873cb0de]:hover{background-color:#ededed}html[data-mode=light] .pickerContent .pickerFooter[data-v-873cb0de]{border-top-color:#d9d9d9}}.input[data-v-873cb0de],.select[data-v-873cb0de]{display:block;width:100%;padding:.5rem .75rem;margin:0;font-size:1rem;font-weight:400;line-height:1.5;background-color:#fff;background-clip:padding-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:inherit;border:1px solid #d9d9d9;border-radius:.375rem;outline:0;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.input[data-v-873cb0de]::placeholder,.select[data-v-873cb0de]::placeholder{color:#555}.input[data-v-873cb0de]:focus,.select[data-v-873cb0de]:focus{border-color:#1d84b6;background-color:#f7faff;z-index:1;box-shadow:none}.input[disabled][data-v-873cb0de],.input[readonly][data-v-873cb0de],.input.disabled[data-v-873cb0de],.select[disabled][data-v-873cb0de],.select[readonly][data-v-873cb0de],.select.disabled[data-v-873cb0de]{border-color:#d6d6d6;background-color:#f0f0f0;cursor:default;box-shadow:none}.input[disabled][data-v-873cb0de],.input.disabled[data-v-873cb0de],.select[disabled][data-v-873cb0de],.select.disabled[data-v-873cb0de]{color:#9b9b9b;-webkit-user-select:none;user-select:none;pointer-events:none}.input.plain[data-v-873cb0de],.input.plainText[data-v-873cb0de]{background-color:transparent;border-color:transparent;padding-left:0;padding-right:0;box-shadow:none}.valid[data-v-873cb0de],.validated[data-v-873cb0de] :valid{border-color:#198754;background-color:#f1fff8;padding-right:calc(1.5em + .75rem);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.validMessage[data-v-873cb0de]{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#198754}.validTooltip[data-v-873cb0de]{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:#198754e6;border-radius:.25rem}.invalid[data-v-873cb0de],.validated[data-v-873cb0de] :invalid{border-color:#dc3545;background-color:#fbf1f2;padding-right:calc(1.5em + .75rem);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.invalidMessage[data-v-873cb0de]{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#dc3545}.invalidTooltip[data-v-873cb0de]{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:#dc3545e6;border-radius:.25rem}.valid~.validMessage[data-v-873cb0de],.valid~.validTooltip[data-v-873cb0de],.validated :valid~.validMessage[data-v-873cb0de],.validated :valid~.validTooltip[data-v-873cb0de],.invalid~.invalidMessage[data-v-873cb0de],.invalid~.invalidTooltip[data-v-873cb0de],.validated :invalid~.invalidMessage[data-v-873cb0de],.validated :invalid~.invalidTooltip[data-v-873cb0de]{display:block}textarea.input[data-v-873cb0de]{min-height:6.5rem;resize:none;border-radius:.375rem}.select[data-v-873cb0de]:not([multiple]){background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px}html[dir=rtl] .select[data-v-873cb0de]:not([multiple]){background-position:left .75rem center}select.select[data-v-873cb0de]:not([multiple]){padding:.5rem}.select[multiple][data-v-873cb0de]{padding-top:.5rem;padding-bottom:.5rem}.select[multiple] option[data-v-873cb0de]{padding-top:.375rem;padding-bottom:.375rem;outline:0}@media (prefers-color-scheme: dark){.input[data-v-873cb0de],.select[data-v-873cb0de]{background-color:#242424;border-color:#5f5f5f}.input[data-v-873cb0de]::placeholder,.select[data-v-873cb0de]::placeholder{color:#d4d4d4}.input[data-v-873cb0de]:focus,.select[data-v-873cb0de]:focus{background-color:#242424}.input[disabled][data-v-873cb0de],.input[readonly][data-v-873cb0de],.input.disabled[data-v-873cb0de],.select[disabled][data-v-873cb0de],.select[readonly][data-v-873cb0de],.select.disabled[data-v-873cb0de]{background-color:#242424;border-color:#5f5f5f}.input.plain[data-v-873cb0de],.input.plainText[data-v-873cb0de]{background-color:transparent;border-color:transparent}.valid[data-v-873cb0de],.validated[data-v-873cb0de] :valid{background-color:#242424;border-color:#198754}.invalid[data-v-873cb0de],.validated[data-v-873cb0de] :invalid{background-color:#242424;border-color:#dc3545}}@media (prefers-color-scheme: light){html[data-mode=dark] .input[data-v-873cb0de],html[data-mode=dark] .select[data-v-873cb0de]{background-color:#242424;border-color:#5f5f5f}html[data-mode=dark] .input[data-v-873cb0de]::placeholder,html[data-mode=dark] .select[data-v-873cb0de]::placeholder{color:#d4d4d4}html[data-mode=dark] .input[data-v-873cb0de]:focus,html[data-mode=dark] .select[data-v-873cb0de]:focus{background-color:#242424}html[data-mode=dark] .input[disabled][data-v-873cb0de],html[data-mode=dark] .input[readonly][data-v-873cb0de],html[data-mode=dark] .input.disabled[data-v-873cb0de],html[data-mode=dark] .select[disabled][data-v-873cb0de],html[data-mode=dark] .select[readonly][data-v-873cb0de],html[data-mode=dark] .select.disabled[data-v-873cb0de]{background-color:#242424;border-color:#5f5f5f}html[data-mode=dark] .input.plain[data-v-873cb0de],html[data-mode=dark] .input.plainText[data-v-873cb0de]{background-color:transparent;border-color:transparent}html[data-mode=dark] .valid[data-v-873cb0de],html[data-mode=dark] .validated[data-v-873cb0de] :valid{background-color:#242424;border-color:#198754}html[data-mode=dark] .invalid[data-v-873cb0de],html[data-mode=dark] .validated[data-v-873cb0de] :invalid{background-color:#242424;border-color:#dc3545}}@media (prefers-color-scheme: dark){html[data-mode=light] .input[data-v-873cb0de],html[data-mode=light] .select[data-v-873cb0de]{background-color:#fff;border-color:#d9d9d9}html[data-mode=light] .input[data-v-873cb0de]::placeholder,html[data-mode=light] .select[data-v-873cb0de]::placeholder{color:#555}html[data-mode=light] .input[data-v-873cb0de]:focus,html[data-mode=light] .select[data-v-873cb0de]:focus{background-color:#f7faff}html[data-mode=light] .input[disabled][data-v-873cb0de],html[data-mode=light] .input[readonly][data-v-873cb0de],html[data-mode=light] .input.disabled[data-v-873cb0de],html[data-mode=light] .select[disabled][data-v-873cb0de],html[data-mode=light] .select[readonly][data-v-873cb0de],html[data-mode=light] .select.disabled[data-v-873cb0de]{background-color:#f0f0f0;border-color:#d6d6d6}html[data-mode=light] .input.plain[data-v-873cb0de],html[data-mode=light] .input.plainText[data-v-873cb0de]{background-color:transparent;border-color:transparent}html[data-mode=light] .valid[data-v-873cb0de],html[data-mode=light] .validated[data-v-873cb0de] :valid{background-color:#f1fff8;border-color:#198754}html[data-mode=light] .invalid[data-v-873cb0de],html[data-mode=light] .validated[data-v-873cb0de] :invalid{background-color:#fbf1f2;border-color:#dc3545}}.spinner[data-v-873cb0de]{display:block;border-radius:50%;height:25px;width:25px;margin:12.5px 0 0 12.5px;border:5px solid #f2f2f2;border-top:5px solid #07f;animation:spin-873cb0de 1s infinite linear}@keyframes spin-873cb0de{0%{transform:rotate(0)}to{transform:rotate(359deg)}}@media (prefers-color-scheme: dark){.spinner[data-v-873cb0de]{border-color:#5f5f5f;border-top-color:#07f}}@media (prefers-color-scheme: light){html[data-mode=dark] .spinner[data-v-873cb0de]{border-color:#5f5f5f;border-top-color:#07f}}@media (prefers-color-scheme: dark){html[data-mode=light] .spinner[data-v-873cb0de]{border-color:#f2f2f2;border-top-color:#07f}}.tedirSelectLoading[data-v-873cb0de]{width:100%;height:150px;display:grid;place-items:center}`, Hs = /* @__PURE__ */ fo(Fs, [["styles", [zs]], ["__scopeId", "data-v-873cb0de"]]), Us = { class: "list" }, Ws = { class: "listHeader" }, Ks = ["onClick"], Gs = { class: "check" }, qs = ["checked", "id"], Js = ["for"], Ys = ["onClick"], Xs = { class: "check" }, Zs = ["checked", "id"], Qs = ["for"], ec = ["onClick"], tc = ["onClick"], oc = ["onClick"], rc = ["onClick"], ac = /* @__PURE__ */ Rt({
  __name: "ListBox",
  props: {
    modelValue: { default: {}, type: null },
    options: { default: [], type: Array },
    prop: { default: "value", type: String },
    datatype: { default: "", type: String },
    dataprop: { default: "", type: String },
    size: { default: 0, type: Number }
  },
  emits: ["update:modelValue", "change", "search"],
  setup(e, { emit: t }) {
    const o = e, r = t, a = ee(o.modelValue || {}), d = ee(""), i = ee(null), n = ee(void 0);
    ft(() => o.modelValue, () => {
      a.value = o.modelValue;
    });
    const s = () => {
      clearTimeout(n.value), n.value = setTimeout(() => {
        var y, N;
        d.value = "", (y = i.value) != null && y.value && ((N = i.value) == null ? void 0 : N.value) !== "" && (d.value = i.value.value), r("search", d.value);
      }, 500);
    }, b = Qe(() => {
      let y = o.options;
      return d.value.length >= 1 && (y = y.filter((N) => {
        if (isNaN(N) === !1 && Number(N) === Number(d.value))
          return !0;
        if (typeof N == "string" && N.toLowerCase().includes(d.value.toLowerCase()))
          return !0;
        if (typeof N == "object" && N !== null && Object.prototype.toString.call(N) === "[object Object]")
          for (const w of Object.keys(N)) {
            if (isNaN(N[w]) === !1 && Number(N[w]) === Number(d.value))
              return !0;
            if (typeof N[w] == "string" && N[w].toLowerCase().includes(d.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), y;
    }), c = (() => {
      let y = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", N = "";
      for (let w = 0; w < 10; w++)
        N += y.charAt(Math.floor(Math.random() * y.length));
      return N;
    })(), k = (y, N = "") => {
      N !== "" ? a.value.map((w) => w[N]).includes(y[N]) ? a.value.splice(a.value.findIndex((w) => w[N] === y[N]), 1) : a.value.push(y) : a.value.includes(y) ? a.value.splice(a.value.findIndex((w) => w === y), 1) : a.value.push(y), r("update:modelValue", a.value), r("change", a.value, y);
    }, E = (y) => {
      typeof y == "object" && y !== null && String(o.datatype).toLowerCase() === "string" ? (a.value = y[String(o.dataprop || o.prop)], r("update:modelValue", String(a.value))) : typeof y == "object" && y !== null && String(o.datatype).toLowerCase() === "number" ? (a.value = y[String(o.dataprop || o.prop)], r("update:modelValue", Number(a.value))) : (a.value = y, r("update:modelValue", a.value)), r("change", a.value, y);
    };
    return (y, N) => (M(), j("div", null, [
      A("div", Us, [
        A("div", Ws, [
          A("input", {
            type: "search",
            ref_key: "searchRef",
            ref: i,
            onInput: s,
            class: "input"
          }, null, 544)
        ]),
        Array.isArray(y.modelValue) ? (M(), j("div", {
          key: 0,
          class: "listMenu",
          style: Oe({ "max-height": Number(y.size) !== 0 ? Number(y.size) * 44 + "px" : "auto" })
        }, [
          (M(!0), j(G, null, Ze(b.value, (w, g) => (M(), j(G, {
            key: "option-" + w
          }, [
            typeof w == "string" ? (M(), j("div", {
              key: 0,
              onClick: be((u) => k(w), ["stop"]),
              class: "listItem"
            }, [
              A("div", Gs, [
                A("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: a.value.includes(w),
                  id: "check-" + (_e(c) + String(g)),
                  style: { "pointer-events": "none" }
                }, null, 8, qs),
                A("label", {
                  class: "checkLabel",
                  for: "check-" + (_e(c) + String(g)),
                  style: { "pointer-events": "none" }
                }, te(w), 9, Js)
              ])
            ], 8, Ks)) : typeof w == "object" && y.prop in w ? (M(), j("div", {
              key: 1,
              onClick: be((u) => k(w, y.prop), ["stop"]),
              class: "listItem"
            }, [
              A("div", Xs, [
                A("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: a.value.includes(w),
                  id: "check-" + (_e(c) + String(g)),
                  style: { "pointer-events": "none" }
                }, null, 8, Zs),
                A("label", {
                  class: "checkLabel",
                  for: "check-" + (_e(c) + String(g)),
                  style: { "pointer-events": "none" }
                }, te(w[y.prop]), 9, Qs)
              ])
            ], 8, Ys)) : (M(), j("div", {
              key: 2,
              onClick: be((u) => k(w), ["stop"]),
              class: ae(["listItem", a.value.includes(w) ? "active" : ""])
            }, [
              pt(y.$slots, "default", {
                option: w,
                selected: a.value
              }, void 0)
            ], 10, ec))
          ], 64))), 128))
        ], 4)) : (M(), j("div", {
          key: 1,
          class: "listMenu",
          style: Oe({ "max-height": Number(y.size) !== 0 ? Number(y.size) * 44 + "px" : "auto" })
        }, [
          (M(!0), j(G, null, Ze(b.value, (w, g) => (M(), j(G, {
            key: "option-" + w
          }, [
            typeof w == "string" ? (M(), j("div", {
              key: 0,
              onClick: (u) => E(w),
              class: ae(["listItem", a.value === w ? "active" : ""])
            }, te(w), 11, tc)) : typeof w == "object" && y.prop in w ? (M(), j("div", {
              key: 1,
              onClick: (u) => E(w),
              class: ae(["listItem", a.value[y.prop] === w[y.prop] || String(w[y.dataprop || y.prop]) === String(a.value) ? "active" : ""])
            }, te(w[y.prop]), 11, oc)) : (M(), j("div", {
              key: 2,
              onClick: be((u) => E(w), ["stop"]),
              class: ae(["listItem", a.value === w ? "active" : ""])
            }, [
              pt(y.$slots, "default", {
                option: w,
                selected: a.value
              }, void 0)
            ], 10, rc))
          ], 64))), 128))
        ], 4))
      ])
    ]));
  }
}), dc = `.list[data-v-d7fed8bc]{width:100%;background-color:#fff;border:1px solid #d9d9d9;border-radius:.375rem;margin:0;padding:0}.list .listHeader[data-v-d7fed8bc]{padding:.5rem;border-bottom:1px solid #d9d9d9}.list .listMenu[data-v-d7fed8bc]{overflow-y:auto;max-height:360px}.list .listItem[data-v-d7fed8bc]{display:block;padding:.675rem .75rem;border-bottom:1px solid #d9d9d9;text-decoration:none;color:#283541;cursor:pointer}.list .listItem[data-v-d7fed8bc]:last-child{border-bottom:0}.list .listItem[data-v-d7fed8bc]:hover{background-color:#ededed}.list .listItem.active[data-v-d7fed8bc]{pointer-events:none;border-color:#06e;background-color:#07f;color:#fff;cursor:default}.list .listFooter[data-v-d7fed8bc]{padding:.5rem;border-top:1px solid #d9d9d9}.list.sizing[data-v-d7fed8bc],.listSize[data-v-d7fed8bc]{overflow-y:auto;max-height:360px}.list.flush[data-v-d7fed8bc],.listFlush[data-v-d7fed8bc]{border:none;border-radius:0}@media (prefers-color-scheme: dark){.list[data-v-d7fed8bc]{background-color:#2f2f2f;border-color:#5f5f5f}.list .listHeader[data-v-d7fed8bc]{border-bottom-color:#5f5f5f}.list .listItem[data-v-d7fed8bc]{border-bottom-color:#5f5f5f;color:#f2f2f2}.list .listItem[data-v-d7fed8bc]:hover{background-color:#242424}.list .listFooter[data-v-d7fed8bc]{border-top-color:#5f5f5f}}@media (prefers-color-scheme: light){html[data-mode=dark] .list[data-v-d7fed8bc]{background-color:#2f2f2f;border-color:#5f5f5f}html[data-mode=dark] .list .listHeader[data-v-d7fed8bc]{border-bottom-color:#5f5f5f}html[data-mode=dark] .list .listItem[data-v-d7fed8bc]{border-bottom-color:#5f5f5f;color:#f2f2f2}html[data-mode=dark] .list .listItem[data-v-d7fed8bc]:hover{background-color:#242424}html[data-mode=dark] .list .listFooter[data-v-d7fed8bc]{border-top-color:#5f5f5f}}@media (prefers-color-scheme: dark){html[data-mode=light] .list[data-v-d7fed8bc]{background-color:#fff;border-color:#d9d9d9}html[data-mode=light] .list .listHeader[data-v-d7fed8bc]{border-bottom-color:#d9d9d9}html[data-mode=light] .list .listItem[data-v-d7fed8bc]{border-bottom-color:#d9d9d9;color:#283541}html[data-mode=light] .list .listItem[data-v-d7fed8bc]:hover{background-color:#ededed}html[data-mode=light] .list .listFooter[data-v-d7fed8bc]{border-top-color:#d9d9d9}}.input[data-v-d7fed8bc],.select[data-v-d7fed8bc]{display:block;width:100%;padding:.5rem .75rem;margin:0;font-size:1rem;font-weight:400;line-height:1.5;background-color:#fff;background-clip:padding-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:inherit;border:1px solid #d9d9d9;border-radius:.375rem;outline:0;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.input[data-v-d7fed8bc]::placeholder,.select[data-v-d7fed8bc]::placeholder{color:#555}.input[data-v-d7fed8bc]:focus,.select[data-v-d7fed8bc]:focus{border-color:#1d84b6;background-color:#f7faff;z-index:1;box-shadow:none}.input[disabled][data-v-d7fed8bc],.input[readonly][data-v-d7fed8bc],.input.disabled[data-v-d7fed8bc],.select[disabled][data-v-d7fed8bc],.select[readonly][data-v-d7fed8bc],.select.disabled[data-v-d7fed8bc]{border-color:#d6d6d6;background-color:#f0f0f0;cursor:default;box-shadow:none}.input[disabled][data-v-d7fed8bc],.input.disabled[data-v-d7fed8bc],.select[disabled][data-v-d7fed8bc],.select.disabled[data-v-d7fed8bc]{color:#9b9b9b;-webkit-user-select:none;user-select:none;pointer-events:none}.input.plain[data-v-d7fed8bc],.input.plainText[data-v-d7fed8bc]{background-color:transparent;border-color:transparent;padding-left:0;padding-right:0;box-shadow:none}.valid[data-v-d7fed8bc],.validated[data-v-d7fed8bc] :valid{border-color:#198754;background-color:#f1fff8;padding-right:calc(1.5em + .75rem);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.validMessage[data-v-d7fed8bc]{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#198754}.validTooltip[data-v-d7fed8bc]{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:#198754e6;border-radius:.25rem}.invalid[data-v-d7fed8bc],.validated[data-v-d7fed8bc] :invalid{border-color:#dc3545;background-color:#fbf1f2;padding-right:calc(1.5em + .75rem);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.invalidMessage[data-v-d7fed8bc]{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#dc3545}.invalidTooltip[data-v-d7fed8bc]{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:#dc3545e6;border-radius:.25rem}.valid~.validMessage[data-v-d7fed8bc],.valid~.validTooltip[data-v-d7fed8bc],.validated :valid~.validMessage[data-v-d7fed8bc],.validated :valid~.validTooltip[data-v-d7fed8bc],.invalid~.invalidMessage[data-v-d7fed8bc],.invalid~.invalidTooltip[data-v-d7fed8bc],.validated :invalid~.invalidMessage[data-v-d7fed8bc],.validated :invalid~.invalidTooltip[data-v-d7fed8bc]{display:block}textarea.input[data-v-d7fed8bc]{min-height:6.5rem;resize:none;border-radius:.375rem}.select[data-v-d7fed8bc]:not([multiple]){background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px}html[dir=rtl] .select[data-v-d7fed8bc]:not([multiple]){background-position:left .75rem center}select.select[data-v-d7fed8bc]:not([multiple]){padding:.5rem}.select[multiple][data-v-d7fed8bc]{padding-top:.5rem;padding-bottom:.5rem}.select[multiple] option[data-v-d7fed8bc]{padding-top:.375rem;padding-bottom:.375rem;outline:0}.check[data-v-d7fed8bc]{display:inline-flex;align-items:center}.check .checkInput[data-v-d7fed8bc]{width:1.5em;height:1.5em;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border:1px solid #d9d9d9}.check .checkInput[type=checkbox][data-v-d7fed8bc]{border-radius:.25rem}.check .checkInput[type=radio][data-v-d7fed8bc]{border-radius:.75rem}.check .checkInput[data-v-d7fed8bc]:checked{border-color:#1d84b6;background-color:#1d84b6}.check .checkInput[disabled][data-v-d7fed8bc],.check .checkInput.disabled[data-v-d7fed8bc]{border-color:#d6d6d6;background-color:#f0f0f0;pointer-events:none}.check .checkInput:checked[disabled][data-v-d7fed8bc],.check .checkInput:checked.disabled[data-v-d7fed8bc]{background-color:#bbb}.check .checkInput[disabled]~.checkLabel[data-v-d7fed8bc],.check .checkInput.disabled~.checkLabel[data-v-d7fed8bc]{color:#9b9b9b;cursor:default}.check .checkInput[type=checkbox][data-v-d7fed8bc]:checked{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e")}.check .checkInput[type=checkbox][data-v-d7fed8bc]:indeterminate{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e")}.check .checkInput[type=radio][data-v-d7fed8bc]:checked{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e")}.check .checkLabel[data-v-d7fed8bc]{display:inline-block;padding-left:.5rem;padding-right:.5rem}.check.switch .checkInput[data-v-d7fed8bc]{width:2.85em;background-repeat:no-repeat;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");background-position:left center;border-radius:2em;transition:background-position .15s ease-in-out}.check.switch .checkInput[data-v-d7fed8bc]:checked{background-position:right center;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")}@media (prefers-color-scheme: dark){.input[data-v-d7fed8bc],.select[data-v-d7fed8bc]{background-color:#242424;border-color:#5f5f5f}.input[data-v-d7fed8bc]::placeholder,.select[data-v-d7fed8bc]::placeholder{color:#d4d4d4}.input[data-v-d7fed8bc]:focus,.select[data-v-d7fed8bc]:focus{background-color:#242424}.input[disabled][data-v-d7fed8bc],.input[readonly][data-v-d7fed8bc],.input.disabled[data-v-d7fed8bc],.select[disabled][data-v-d7fed8bc],.select[readonly][data-v-d7fed8bc],.select.disabled[data-v-d7fed8bc]{background-color:#242424;border-color:#5f5f5f}.input.plain[data-v-d7fed8bc],.input.plainText[data-v-d7fed8bc]{background-color:transparent;border-color:transparent}.valid[data-v-d7fed8bc],.validated[data-v-d7fed8bc] :valid{background-color:#242424;border-color:#198754}.invalid[data-v-d7fed8bc],.validated[data-v-d7fed8bc] :invalid{background-color:#242424;border-color:#dc3545}.check .checkInput[data-v-d7fed8bc]{background-color:#242424;border-color:#5f5f5f}.check .checkInput[data-v-d7fed8bc]:checked{border-color:#1d84b6;background-color:#1d84b6}.check .checkInput[disabled][data-v-d7fed8bc],.check .checkInput.disabled[data-v-d7fed8bc]{background-color:#2f2f2f;border-color:#5f5f5f}.check .checkInput:checked[disabled][data-v-d7fed8bc],.check .checkInput:checked.disabled[data-v-d7fed8bc]{background-color:#2f2f2f}.check.switch .checkInput[data-v-d7fed8bc]{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%28255, 255, 255, 0.25%29'/%3e%3c/svg%3e")}.check.switch .checkInput[data-v-d7fed8bc]:checked{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")}}@media (prefers-color-scheme: light){html[data-mode=dark] .input[data-v-d7fed8bc],html[data-mode=dark] .select[data-v-d7fed8bc]{background-color:#242424;border-color:#5f5f5f}html[data-mode=dark] .input[data-v-d7fed8bc]::placeholder,html[data-mode=dark] .select[data-v-d7fed8bc]::placeholder{color:#d4d4d4}html[data-mode=dark] .input[data-v-d7fed8bc]:focus,html[data-mode=dark] .select[data-v-d7fed8bc]:focus{background-color:#242424}html[data-mode=dark] .input[disabled][data-v-d7fed8bc],html[data-mode=dark] .input[readonly][data-v-d7fed8bc],html[data-mode=dark] .input.disabled[data-v-d7fed8bc],html[data-mode=dark] .select[disabled][data-v-d7fed8bc],html[data-mode=dark] .select[readonly][data-v-d7fed8bc],html[data-mode=dark] .select.disabled[data-v-d7fed8bc]{background-color:#242424;border-color:#5f5f5f}html[data-mode=dark] .input.plain[data-v-d7fed8bc],html[data-mode=dark] .input.plainText[data-v-d7fed8bc]{background-color:transparent;border-color:transparent}html[data-mode=dark] .valid[data-v-d7fed8bc],html[data-mode=dark] .validated[data-v-d7fed8bc] :valid{background-color:#242424;border-color:#198754}html[data-mode=dark] .invalid[data-v-d7fed8bc],html[data-mode=dark] .validated[data-v-d7fed8bc] :invalid{background-color:#242424;border-color:#dc3545}html[data-mode=dark] .check .checkInput[data-v-d7fed8bc]{background-color:#242424;border-color:#5f5f5f}html[data-mode=dark] .check .checkInput[data-v-d7fed8bc]:checked{border-color:#1d84b6;background-color:#1d84b6}html[data-mode=dark] .check .checkInput[disabled][data-v-d7fed8bc],html[data-mode=dark] .check .checkInput.disabled[data-v-d7fed8bc]{background-color:#2f2f2f;border-color:#5f5f5f}html[data-mode=dark] .check .checkInput:checked[disabled][data-v-d7fed8bc],html[data-mode=dark] .check .checkInput:checked.disabled[data-v-d7fed8bc]{background-color:#2f2f2f}html[data-mode=dark] .check.switch .checkInput[data-v-d7fed8bc]{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%28255, 255, 255, 0.25%29'/%3e%3c/svg%3e")}html[data-mode=dark] .check.switch .checkInput[data-v-d7fed8bc]:checked{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")}}@media (prefers-color-scheme: dark){html[data-mode=light] .input[data-v-d7fed8bc],html[data-mode=light] .select[data-v-d7fed8bc]{background-color:#fff;border-color:#d9d9d9}html[data-mode=light] .input[data-v-d7fed8bc]::placeholder,html[data-mode=light] .select[data-v-d7fed8bc]::placeholder{color:#555}html[data-mode=light] .input[data-v-d7fed8bc]:focus,html[data-mode=light] .select[data-v-d7fed8bc]:focus{background-color:#f7faff}html[data-mode=light] .input[disabled][data-v-d7fed8bc],html[data-mode=light] .input[readonly][data-v-d7fed8bc],html[data-mode=light] .input.disabled[data-v-d7fed8bc],html[data-mode=light] .select[disabled][data-v-d7fed8bc],html[data-mode=light] .select[readonly][data-v-d7fed8bc],html[data-mode=light] .select.disabled[data-v-d7fed8bc]{background-color:#f0f0f0;border-color:#d6d6d6}html[data-mode=light] .input.plain[data-v-d7fed8bc],html[data-mode=light] .input.plainText[data-v-d7fed8bc]{background-color:transparent;border-color:transparent}html[data-mode=light] .valid[data-v-d7fed8bc],html[data-mode=light] .validated[data-v-d7fed8bc] :valid{background-color:#f1fff8;border-color:#198754}html[data-mode=light] .invalid[data-v-d7fed8bc],html[data-mode=light] .validated[data-v-d7fed8bc] :invalid{background-color:#fbf1f2;border-color:#dc3545}html[data-mode=light] .check .checkInput[data-v-d7fed8bc]{background-color:#fff;border-color:#d9d9d9}html[data-mode=light] .check .checkInput[data-v-d7fed8bc]:checked{border-color:#1d84b6;background-color:#1d84b6}html[data-mode=light] .check .checkInput[disabled][data-v-d7fed8bc],html[data-mode=light] .check .checkInput.disabled[data-v-d7fed8bc]{background-color:#f0f0f0;border-color:#d6d6d6}html[data-mode=light] .check .checkInput:checked[disabled][data-v-d7fed8bc],html[data-mode=light] .check .checkInput:checked.disabled[data-v-d7fed8bc]{background-color:#bbb}html[data-mode=light] .check.switch .checkInput[data-v-d7fed8bc]{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e")}html[data-mode=light] .check.switch .checkInput[data-v-d7fed8bc]:checked{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")}}`, ic = /* @__PURE__ */ fo(ac, [["styles", [dc]], ["__scopeId", "data-v-d7fed8bc"]]), nc = { class: "tagWrap" }, lc = { class: "tags" }, sc = { class: "tag groupItem" }, cc = ["onClick"], uc = { class: "tagContent" }, fc = ["onClick"], pc = ["onClick"], hc = ["onClick"], bc = /* @__PURE__ */ Rt({
  __name: "TagBox",
  props: {
    modelValue: { default: [], type: Array },
    options: { default: [], type: Array },
    prop: { default: "value", type: String },
    placeholder: { default: "Add new tag", type: String },
    size: { default: 0, type: Number },
    separator: { default: ",", type: String }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, r = t, a = ee(!1), d = ee(""), i = ee(null), n = Go(o.modelValue || []), s = ee(o.options || []), b = ee(o.separator || ","), p = ee(o.prop || "value"), c = Qe(() => {
      let N = s.value;
      return d.value.length >= 1 && (N = N.filter((w) => {
        if (isNaN(w) === !1 && Number(w) === Number(d.value))
          return !0;
        if (typeof w == "string" && w.toLowerCase().includes(d.value.toLowerCase()))
          return !0;
        if (typeof w == "object" && w !== null && Object.prototype.toString.call(w) === "[object Object]")
          for (const g of Object.keys(w)) {
            if (isNaN(w[g]) === !1 && Number(w[g]) === Number(d.value))
              return !0;
            if (typeof w[g] == "string" && w[g].toLowerCase().includes(d.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), N;
    }), k = () => {
      i.value.focus();
    }, E = (N) => {
      if (N.key !== "Enter" && c.value.length >= 1 ? a.value = !0 : a.value = !1, d.value.endsWith(b.value) || N.key === "Enter") {
        const w = d.value.replace(b.value, "");
        n.includes(w) || (n.push(w), s.value.includes(w) && (s.value = s.value.filter((g) => typeof g == "string" && g !== w ? !0 : typeof g == "object" && p.value in g && g[p.value] !== w))), d.value = "", r("update:modelValue", n);
      }
    };
    ft(d, () => {
      if (i.value !== null) {
        const N = document.createElement("div");
        N.style.width = "max-content", N.style.position = "absolute", N.style.visibility = "hidden";
        const w = d.value.length >= 2 ? d.value : i.value.getAttribute("placeholder");
        N.innerHTML = w.replace(/ /g, "&nbsp;").trim(), document.body.appendChild(N);
        const g = Math.ceil(Number(window.getComputedStyle(N).width.replace("px", ""))) + 30;
        i.value.style.setProperty("width", g + "px"), N.remove();
      }
    });
    const y = (N) => {
      N.target.style.display = "none", a.value = !1;
    };
    return (N, w) => (M(), j("div", {
      class: ae(["taggable", { active: a.value === !0 }])
    }, [
      A("div", {
        class: "tagBackdrop",
        style: Oe({ display: a.value ? "block" : "none" }),
        onClick: y
      }, null, 4),
      A("div", nc, [
        A("div", {
          class: "input tagToggler",
          onClick: k
        }, [
          A("div", lc, [
            (M(!0), j(G, null, Ze(n, (g, u) => (M(), j("div", {
              key: "tag-" + u,
              class: "group"
            }, [
              A("div", sc, [
                typeof g == "string" && g !== "" ? (M(), j(G, { key: 0 }, [
                  No(te(g), 1)
                ], 64)) : typeof g == "object" && p.value in g ? (M(), j(G, { key: 1 }, [
                  No(te(g[p.value]), 1)
                ], 64)) : (M(), j(G, { key: 2 }, [
                  No(te(N.placeholder), 1)
                ], 64))
              ]),
              A("div", {
                class: "tag groupItem",
                onClick: (h) => n.splice(u, 1)
              }, w[3] || (w[3] = [
                A("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  A("line", {
                    x1: "18",
                    y1: "6",
                    x2: "6",
                    y2: "18"
                  }),
                  A("line", {
                    x1: "6",
                    y1: "6",
                    x2: "18",
                    y2: "18"
                  })
                ], -1)
              ]), 8, cc)
            ]))), 128)),
            Mo(A("input", {
              type: "search",
              ref_key: "inputRef",
              ref: i,
              "onUpdate:modelValue": w[0] || (w[0] = (g) => d.value = g),
              class: "tagInput",
              onInput: w[1] || (w[1] = (g) => E(g)),
              onKeyup: w[2] || (w[2] = is((g) => E(g), ["enter"])),
              placeholder: "Add new tag"
            }, null, 544), [
              [ei, d.value]
            ])
          ])
        ]),
        A("div", uc, [
          (M(!0), j(G, null, Ze(c.value, (g, u) => (M(), j(G, {
            key: "option-" + g
          }, [
            typeof g == "string" ? (M(), j("div", {
              key: 0,
              onClick: (h) => {
                d.value = g + ",", E(h);
              },
              class: "tagItem"
            }, te(g), 9, fc)) : typeof g == "object" && p.value in g ? (M(), j("div", {
              key: 1,
              onClick: (h) => {
                d.value = g[p.value] + ",", E(h);
              },
              class: "tagItem"
            }, te(g[p.value]), 9, pc)) : (M(), j("div", {
              key: 2,
              onClick: (h) => {
                d.value = g + ",", E(h);
              },
              class: "tagItem"
            }, [
              pt(N.$slots, "default", { option: g }, void 0)
            ], 8, hc))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
}), vc = `.tag[data-v-3acd22f1]{display:inline-flex;align-items:center;border-radius:.375rem;text-decoration:none;cursor:pointer;background-color:#f2f2f2;color:#2f2f2f;font-size:.75rem;line-height:1.5;font-weight:700;padding:3px 10px;border:1px solid #d9d9d9}.tag.groupItem[data-v-3acd22f1]:first-child{cursor:default;border-top-right-radius:0;border-bottom-right-radius:0}html[dir=rtl] .tag.groupItem[data-v-3acd22f1]:first-child{border-top-left-radius:0;border-bottom-left-radius:0}.tag.groupItem[data-v-3acd22f1]:last-child{padding-right:5px;padding-left:5px;cursor:pointer;border-top-left-radius:0;border-bottom-left-radius:0}html[dir=rtl] .tag.groupItem[data-v-3acd22f1]:last-child{border-top-right-radius:0;border-bottom-right-radius:0}.tag.groupItem svg[data-v-3acd22f1]{pointer-events:none}.tags[data-v-3acd22f1]{display:inline-flex;flex-wrap:wrap;justify-content:flex-start;gap:.5rem}.taggable[data-v-3acd22f1]{width:auto}.tagWrap[data-v-3acd22f1]{display:block;position:relative}.tagBackdrop[data-v-3acd22f1]{position:fixed;z-index:74;top:0;right:3em;bottom:3em;left:0;width:100vw;height:100vh;display:none}html[dir=rtl] .tagBackdrop[data-v-3acd22f1]{top:0;right:0;bottom:3em;left:3em}.taggable.active .tagBackdrop[data-v-3acd22f1]{display:block}.input.tagToggler[data-v-3acd22f1]{padding:.5rem;display:flex;justify-content:flex-start}.tagInput[data-v-3acd22f1]{background-color:transparent;border-color:transparent;width:100px;outline:0}.tagContent[data-v-3acd22f1]{position:absolute;z-index:75;top:100%;left:0;background-color:#fff;border:1px solid #d9d9d9;width:100%;border-radius:.375rem;overflow-y:auto;display:none;border-top-width:0px;max-height:360px}.tagContent .tagItem[data-v-3acd22f1]{display:block;padding:.675rem .75rem;border-bottom:1px solid #d9d9d9;text-decoration:none;color:#283541;cursor:pointer}.tagContent .tagItem[data-v-3acd22f1]:last-child{border-bottom:0}.tagContent .tagItem[data-v-3acd22f1]:hover{background-color:#ededed}.taggable.active .input.tagToggler[data-v-3acd22f1]{border-bottom-right-radius:0;border-bottom-left-radius:0}.taggable.active .tagContent[data-v-3acd22f1]{border-top-right-radius:0;border-top-left-radius:0;display:block}.badge[data-v-3acd22f1]{display:inline;margin-top:0;margin-left:.15rem;padding:3px 7.5px;border-radius:.375rem;text-decoration:none;background-color:#283541;color:#fff;font-size:.75rem;font-weight:700}html[dir=rtl] .badge[data-v-3acd22f1]{margin-left:0;margin-right:.15rem}.badgeTop[data-v-3acd22f1]{margin-top:-.5em}.badgeRound[data-v-3acd22f1]{border-radius:99px}@media (prefers-color-scheme: dark){.tag[data-v-3acd22f1]{background-color:#2f2f2f;color:#fff;border-color:#5f5f5f}.tagContent[data-v-3acd22f1]{background-color:#2f2f2f;border-color:#5f5f5f}.tagContent .tagItem[data-v-3acd22f1]{border-bottom-color:#5f5f5f;color:#f2f2f2}.tagContent .tagItem[data-v-3acd22f1]:hover{background-color:#242424}.badge[data-v-3acd22f1]{background-color:#5f5f5f}}@media (prefers-color-scheme: light){html[data-mode=dark] .tag[data-v-3acd22f1]{background-color:#2f2f2f;color:#fff;border-color:#5f5f5f}html[data-mode=dark] .tagContent[data-v-3acd22f1]{background-color:#2f2f2f;border-color:#5f5f5f}html[data-mode=dark] .tagContent .tagItem[data-v-3acd22f1]{border-bottom-color:#5f5f5f;color:#f2f2f2}html[data-mode=dark] .tagContent .tagItem[data-v-3acd22f1]:hover{background-color:#242424}html[data-mode=dark] .badge[data-v-3acd22f1]{background-color:#5f5f5f}}@media (prefers-color-scheme: dark){html[data-mode=light] .tag[data-v-3acd22f1]{background-color:#f2f2f2;color:#2f2f2f;border-color:#d9d9d9}html[data-mode=light] .tagContent[data-v-3acd22f1]{background-color:#fff;border-color:#d9d9d9}html[data-mode=light] .tagContent .tagItem[data-v-3acd22f1]{border-bottom-color:#d9d9d9;color:#283541}html[data-mode=light] .tagContent .tagItem[data-v-3acd22f1]:hover{background-color:#ededed}html[data-mode=light] .badge[data-v-3acd22f1]{background-color:#283541}}.input[data-v-3acd22f1],.select[data-v-3acd22f1]{display:block;width:100%;padding:.5rem .75rem;margin:0;font-size:1rem;font-weight:400;line-height:1.5;background-color:#fff;background-clip:padding-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:inherit;border:1px solid #d9d9d9;border-radius:.375rem;outline:0;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.input[data-v-3acd22f1]::placeholder,.select[data-v-3acd22f1]::placeholder{color:#555}.input[data-v-3acd22f1]:focus,.select[data-v-3acd22f1]:focus{border-color:#1d84b6;background-color:#f7faff;z-index:1;box-shadow:none}.input[disabled][data-v-3acd22f1],.input[readonly][data-v-3acd22f1],.input.disabled[data-v-3acd22f1],.select[disabled][data-v-3acd22f1],.select[readonly][data-v-3acd22f1],.select.disabled[data-v-3acd22f1]{border-color:#d6d6d6;background-color:#f0f0f0;cursor:default;box-shadow:none}.input[disabled][data-v-3acd22f1],.input.disabled[data-v-3acd22f1],.select[disabled][data-v-3acd22f1],.select.disabled[data-v-3acd22f1]{color:#9b9b9b;-webkit-user-select:none;user-select:none;pointer-events:none}.input.plain[data-v-3acd22f1],.input.plainText[data-v-3acd22f1]{background-color:transparent;border-color:transparent;padding-left:0;padding-right:0;box-shadow:none}.valid[data-v-3acd22f1],.validated[data-v-3acd22f1] :valid{border-color:#198754;background-color:#f1fff8;padding-right:calc(1.5em + .75rem);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.validMessage[data-v-3acd22f1]{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#198754}.validTooltip[data-v-3acd22f1]{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:#198754e6;border-radius:.25rem}.invalid[data-v-3acd22f1],.validated[data-v-3acd22f1] :invalid{border-color:#dc3545;background-color:#fbf1f2;padding-right:calc(1.5em + .75rem);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.invalidMessage[data-v-3acd22f1]{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#dc3545}.invalidTooltip[data-v-3acd22f1]{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:#dc3545e6;border-radius:.25rem}.valid~.validMessage[data-v-3acd22f1],.valid~.validTooltip[data-v-3acd22f1],.validated :valid~.validMessage[data-v-3acd22f1],.validated :valid~.validTooltip[data-v-3acd22f1],.invalid~.invalidMessage[data-v-3acd22f1],.invalid~.invalidTooltip[data-v-3acd22f1],.validated :invalid~.invalidMessage[data-v-3acd22f1],.validated :invalid~.invalidTooltip[data-v-3acd22f1]{display:block}textarea.input[data-v-3acd22f1]{min-height:6.5rem;resize:none;border-radius:.375rem}.select[data-v-3acd22f1]:not([multiple]){background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px}html[dir=rtl] .select[data-v-3acd22f1]:not([multiple]){background-position:left .75rem center}select.select[data-v-3acd22f1]:not([multiple]){padding:.5rem}.select[multiple][data-v-3acd22f1]{padding-top:.5rem;padding-bottom:.5rem}.select[multiple] option[data-v-3acd22f1]{padding-top:.375rem;padding-bottom:.375rem;outline:0}.group[data-v-3acd22f1]{display:inline-flex;flex-wrap:nowrap;align-items:stretch}.group .groupItem[data-v-3acd22f1]{flex:1 1 auto;border-radius:0}.group:not(.groupList) .groupItem[data-v-3acd22f1]:first-child{border-top-left-radius:.375rem;border-bottom-left-radius:.375rem}.group:not(.groupList) .groupItem[data-v-3acd22f1]:last-child{border-top-right-radius:.375rem;border-bottom-right-radius:.375rem}.group:not(.groupList) .groupItem[data-v-3acd22f1]:not(:last-child){margin-right:-1px}.group.groupList[data-v-3acd22f1]{flex-direction:column}.group.groupList .groupItem[data-v-3acd22f1]:first-child{border-top-right-radius:.375rem;border-top-left-radius:.375rem}.group.groupList .groupItem[data-v-3acd22f1]:last-child{border-bottom-right-radius:.375rem;border-bottom-left-radius:.375rem}.group.groupList .groupItem[data-v-3acd22f1]:not(:last-child){margin-bottom:-1px}.group .input[data-v-3acd22f1]:focus,.group .select[data-v-3acd22f1]:focus{border-color:#d9d9d9;z-index:1;box-shadow:none}html[dir=rtl] .group:not(.groupList) .groupItem[data-v-3acd22f1]:first-child{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:.375rem;border-bottom-right-radius:.375rem}html[dir=rtl] .group:not(.groupList) .groupItem[data-v-3acd22f1]:last-child{border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:.375rem;border-bottom-left-radius:.375rem}html[dir=rtl] .group:not(.groupList) .groupItem[data-v-3acd22f1]:not(:last-child){margin-left:-1px}@media (prefers-color-scheme: dark){.input[data-v-3acd22f1],.select[data-v-3acd22f1]{background-color:#242424;border-color:#5f5f5f}.input[data-v-3acd22f1]::placeholder,.select[data-v-3acd22f1]::placeholder{color:#d4d4d4}.input[data-v-3acd22f1]:focus,.select[data-v-3acd22f1]:focus{background-color:#242424}.input[disabled][data-v-3acd22f1],.input[readonly][data-v-3acd22f1],.input.disabled[data-v-3acd22f1],.select[disabled][data-v-3acd22f1],.select[readonly][data-v-3acd22f1],.select.disabled[data-v-3acd22f1]{background-color:#242424;border-color:#5f5f5f}.input.plain[data-v-3acd22f1],.input.plainText[data-v-3acd22f1]{background-color:transparent;border-color:transparent}.valid[data-v-3acd22f1],.validated[data-v-3acd22f1] :valid{background-color:#242424;border-color:#198754}.invalid[data-v-3acd22f1],.validated[data-v-3acd22f1] :invalid{background-color:#242424;border-color:#dc3545}}@media (prefers-color-scheme: light){html[data-mode=dark] .input[data-v-3acd22f1],html[data-mode=dark] .select[data-v-3acd22f1]{background-color:#242424;border-color:#5f5f5f}html[data-mode=dark] .input[data-v-3acd22f1]::placeholder,html[data-mode=dark] .select[data-v-3acd22f1]::placeholder{color:#d4d4d4}html[data-mode=dark] .input[data-v-3acd22f1]:focus,html[data-mode=dark] .select[data-v-3acd22f1]:focus{background-color:#242424}html[data-mode=dark] .input[disabled][data-v-3acd22f1],html[data-mode=dark] .input[readonly][data-v-3acd22f1],html[data-mode=dark] .input.disabled[data-v-3acd22f1],html[data-mode=dark] .select[disabled][data-v-3acd22f1],html[data-mode=dark] .select[readonly][data-v-3acd22f1],html[data-mode=dark] .select.disabled[data-v-3acd22f1]{background-color:#242424;border-color:#5f5f5f}html[data-mode=dark] .input.plain[data-v-3acd22f1],html[data-mode=dark] .input.plainText[data-v-3acd22f1]{background-color:transparent;border-color:transparent}html[data-mode=dark] .valid[data-v-3acd22f1],html[data-mode=dark] .validated[data-v-3acd22f1] :valid{background-color:#242424;border-color:#198754}html[data-mode=dark] .invalid[data-v-3acd22f1],html[data-mode=dark] .validated[data-v-3acd22f1] :invalid{background-color:#242424;border-color:#dc3545}}@media (prefers-color-scheme: dark){html[data-mode=light] .input[data-v-3acd22f1],html[data-mode=light] .select[data-v-3acd22f1]{background-color:#fff;border-color:#d9d9d9}html[data-mode=light] .input[data-v-3acd22f1]::placeholder,html[data-mode=light] .select[data-v-3acd22f1]::placeholder{color:#555}html[data-mode=light] .input[data-v-3acd22f1]:focus,html[data-mode=light] .select[data-v-3acd22f1]:focus{background-color:#f7faff}html[data-mode=light] .input[disabled][data-v-3acd22f1],html[data-mode=light] .input[readonly][data-v-3acd22f1],html[data-mode=light] .input.disabled[data-v-3acd22f1],html[data-mode=light] .select[disabled][data-v-3acd22f1],html[data-mode=light] .select[readonly][data-v-3acd22f1],html[data-mode=light] .select.disabled[data-v-3acd22f1]{background-color:#f0f0f0;border-color:#d6d6d6}html[data-mode=light] .input.plain[data-v-3acd22f1],html[data-mode=light] .input.plainText[data-v-3acd22f1]{background-color:transparent;border-color:transparent}html[data-mode=light] .valid[data-v-3acd22f1],html[data-mode=light] .validated[data-v-3acd22f1] :valid{background-color:#f1fff8;border-color:#198754}html[data-mode=light] .invalid[data-v-3acd22f1],html[data-mode=light] .validated[data-v-3acd22f1] :invalid{background-color:#fbf1f2;border-color:#dc3545}}`, gc = /* @__PURE__ */ fo(bc, [["styles", [vc]], ["__scopeId", "data-v-3acd22f1"]]), mc = { class: "pickerOverlay pickerWrap" }, kc = { class: "pickerContent" }, yc = { class: "pickerHeader" }, _c = ["onClick"], wc = { class: "check" }, xc = ["checked", "id"], Ec = ["for"], Nc = ["onClick"], Cc = { class: "check" }, Oc = ["checked", "id"], Ic = ["for"], Sc = ["onClick"], Vc = ["onClick"], Dc = ["onClick"], Tc = ["onClick"], $c = { class: "pickerFooter" }, Mc = { class: "tedirCategoryAdd" }, jc = /* @__PURE__ */ Rt({
  __name: "CategoryBox",
  props: {
    modelValue: { default: {}, type: null },
    options: { default: [], type: Array },
    prop: { default: "value", type: String },
    datatype: { default: "", type: String },
    dataprop: { default: "", type: String },
    placeholder: { default: "-- Select option --", type: String },
    size: { default: 0, type: Number },
    up: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "add", "search"],
  setup(e, { emit: t }) {
    const o = e, r = t, a = ee(o.modelValue || {}), d = ee(!1), i = ee(""), n = ee(null), s = ee(void 0), b = ee("");
    ft(() => o.modelValue, () => {
      a.value = o.modelValue;
    });
    const p = () => {
      clearTimeout(s.value), s.value = setTimeout(() => {
        var u, h;
        i.value = "", (u = n.value) != null && u.value && ((h = n.value) == null ? void 0 : h.value) !== "" && (i.value = n.value.value), r("search", i.value);
      }, 500);
    }, c = Qe(() => {
      let u = o.options;
      return i.value.length >= 1 && (u = u.filter((h) => {
        if (isNaN(h) === !1 && Number(h) === Number(i.value))
          return !0;
        if (typeof h == "string" && h.toLowerCase().includes(i.value.toLowerCase()))
          return !0;
        if (typeof h == "object" && h !== null && Object.prototype.toString.call(h) === "[object Object]")
          for (const m of Object.keys(h)) {
            if (isNaN(h[m]) === !1 && Number(h[m]) === Number(i.value))
              return !0;
            if (typeof h[m] == "string" && h[m].toLowerCase().includes(i.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), u;
    }), E = ((u = 10) => {
      let h = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", m = "";
      for (let $ = 0; $ < u; $++)
        m += h.charAt(Math.floor(Math.random() * h.length));
      return m;
    })(), y = (u) => {
      var h;
      u.target.style.display = "none", d.value = !1, (h = n.value) != null && h.value && (n.value.value = "", i.value = "");
    }, N = (u, h = "") => {
      h !== "" ? a.value.map((m) => m[h]).includes(u[h]) ? a.value.splice(a.value.findIndex((m) => m[h] === u[h]), 1) : a.value.push(u) : a.value.includes(u) ? a.value.splice(a.value.findIndex((m) => m === u), 1) : a.value.push(u), r("update:modelValue", a.value), r("change", a.value, u);
    }, w = (u) => {
      typeof u == "object" && u !== null && String(o.datatype).toLowerCase() === "string" ? (a.value = u[String(o.dataprop || o.prop)], r("update:modelValue", String(a.value))) : typeof u == "object" && u !== null && String(o.datatype).toLowerCase() === "number" ? (a.value = u[String(o.dataprop || o.prop)], r("update:modelValue", Number(a.value))) : (a.value = u, r("update:modelValue", a.value)), d.value = !1, r("change", a.value, u);
    }, g = Qe(() => {
      let u = (o == null ? void 0 : o.placeholder) || "-- Select option --";
      if (c.value.length >= 1)
        if (typeof a.value == "number") {
          let h = c.value.filter((m) => Number(m[String(o.dataprop || o.prop)]) === Number(a.value));
          typeof c.value[0] == "object" && h.length >= 1 ? u = h[0][String(o.prop)] : typeof c.value[0] == "number" && (u = String(a.value));
        } else if (typeof a.value == "string") {
          let h = c.value.filter((m) => String(m[String(o.dataprop || o.prop)]) === a.value);
          typeof c.value[0] == "object" && h.length >= 1 ? u = h[0][String(o.prop)] : typeof c.value[0] == "string" && a.value !== "" && (u = a.value);
        } else typeof a.value == "object" && (Array.isArray(a.value) && a.value.length >= 1 ? typeof a.value[0] == "object" && String(o.prop) in a.value[0] ? u = a.value.map((h) => h[String(o.prop)]).join(", ") : u = a.value.join(", ") : a.value !== null && String(o.prop) in a.value && (u = a.value[String(o.prop)]));
      return u;
    });
    return (u, h) => (M(), j("div", {
      class: ae(["picker suggestion tedirCategory", { active: d.value, pickerUp: u.up }])
    }, [
      A("div", {
        class: "pickerBackdrop",
        style: Oe({ display: d.value ? "block" : "none" }),
        onClick: y
      }, null, 4),
      A("div", mc, [
        A("div", {
          class: "select pickerToggler",
          onClick: h[0] || (h[0] = (m) => d.value = !d.value)
        }, te(g.value), 1),
        A("div", kc, [
          A("div", yc, [
            A("input", {
              type: "search",
              ref_key: "searchRef",
              ref: n,
              onInput: p,
              class: "input"
            }, null, 544)
          ]),
          Array.isArray(a.value) ? (M(), j("div", {
            key: 0,
            class: "pickerMenu",
            style: Oe({ "max-height": Number(u.size) !== 0 ? Number(u.size) * 42 + "px" : "auto" })
          }, [
            (M(!0), j(G, null, Ze(c.value, (m, $) => (M(), j(G, {
              key: "option-" + m
            }, [
              typeof m == "string" ? (M(), j("div", {
                key: 0,
                onClick: be((q) => N(m), ["stop"]),
                class: "pickerItem"
              }, [
                A("div", wc, [
                  A("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: a.value.includes(m),
                    id: "check-" + (_e(E) + String($)),
                    style: { "pointer-events": "none" }
                  }, null, 8, xc),
                  A("label", {
                    class: "checkLabel",
                    for: "check-" + (_e(E) + String($)),
                    style: { "pointer-events": "none" }
                  }, te(m), 9, Ec)
                ])
              ], 8, _c)) : typeof m == "object" && m !== null && u.prop in m ? (M(), j("div", {
                key: 1,
                onClick: be((q) => N(m, u.prop), ["stop"]),
                class: "pickerItem"
              }, [
                A("div", Cc, [
                  A("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: a.value.includes(m),
                    id: "check-" + (_e(E) + String($)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Oc),
                  A("label", {
                    class: "checkLabel",
                    for: "check-" + (_e(E) + String($)),
                    style: { "pointer-events": "none" }
                  }, te(m[u.prop]), 9, Ic)
                ])
              ], 8, Nc)) : (M(), j("div", {
                key: 2,
                onClick: be((q) => N(m), ["stop"]),
                class: "pickerItem"
              }, [
                pt(u.$slots, "default", {
                  option: m,
                  selected: a.value
                }, void 0)
              ], 8, Sc))
            ], 64))), 128))
          ], 4)) : (M(), j("div", {
            key: 1,
            class: "pickerMenu",
            style: Oe({ "max-height": Number(u.size) !== 0 ? Number(u.size) * 42 + "px" : "auto" })
          }, [
            (M(!0), j(G, null, Ze(c.value, (m, $) => (M(), j(G, {
              key: "option-" + m
            }, [
              typeof m == "string" ? (M(), j("div", {
                key: 0,
                onClick: (q) => w(m),
                class: ae(["pickerItem", a.value === m ? "active" : ""])
              }, te(m), 11, Vc)) : typeof m == "object" && m !== null && u.prop in m ? (M(), j("div", {
                key: 1,
                onClick: (q) => w(m),
                class: ae(["pickerItem", a.value[u.prop] === m[u.prop] || String(m[u.dataprop || u.prop]) === String(a.value) ? "active" : ""])
              }, te(m[u.prop]), 11, Dc)) : (M(), j("div", {
                key: 2,
                onClick: be((q) => w(m), ["stop"]),
                class: ae(["pickerItem", a.value === m ? "active" : ""])
              }, [
                pt(u.$slots, "default", {
                  option: m,
                  selected: a.value
                }, void 0)
              ], 10, Tc))
            ], 64))), 128))
          ], 4)),
          A("div", $c, [
            A("div", Mc, [
              Mo(A("input", {
                type: "text",
                "onUpdate:modelValue": h[1] || (h[1] = (m) => b.value = m),
                class: "input",
                placeholder: "Add New Category"
              }, null, 512), [
                [ei, b.value]
              ]),
              A("button", {
                type: "button",
                class: "button tedirCategoryButton",
                onClick: h[2] || (h[2] = (m) => {
                  r("add", b.value), b.value = "";
                })
              }, "Save")
            ])
          ])
        ])
      ])
    ], 2));
  }
}), Ac = `.picker[data-v-54a3b4ba]{width:auto}.pickerWrap[data-v-54a3b4ba]{display:block;position:relative}.picker.dropdown .pickerWrap[data-v-54a3b4ba]{display:inline-block}.pickerBackdrop[data-v-54a3b4ba]{position:fixed;z-index:74;top:0;right:3em;bottom:3em;left:0;max-width:100vw;max-height:100vh;width:100%;height:100%;display:none}.picker.active .pickerBackdrop[data-v-54a3b4ba]{display:block}.pickerToggler[data-v-54a3b4ba]{padding:.5rem;-webkit-user-select:none;user-select:none}.select.pickerToggler[data-v-54a3b4ba]{padding-left:.75rem;padding-right:2.25rem;cursor:default;font-size:inherit;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:100%}.pickerContent[data-v-54a3b4ba]{position:absolute;z-index:75;top:2.45rem;left:0;min-width:240px;background-color:#fff;border:1px solid #d9d9d9;display:none;border-radius:.375rem}.pickerContent .pickerHeader[data-v-54a3b4ba]{padding:.5rem;border-bottom:1px solid #d9d9d9}.pickerContent .pickerBody[data-v-54a3b4ba]{padding:.75rem}.pickerContent .pickerMenu[data-v-54a3b4ba]{overflow-y:auto;max-height:420px}.pickerContent .pickerItem[data-v-54a3b4ba]{display:block;padding:.675rem .75rem;border-bottom:1px solid #d9d9d9;text-decoration:none;color:#283541;cursor:pointer}.pickerContent .pickerItem[data-v-54a3b4ba]:last-child{border-bottom:0}.pickerContent .pickerItem[data-v-54a3b4ba]:hover{background-color:#ededed}.pickerContent .pickerItem.active[data-v-54a3b4ba]{pointer-events:none;border-color:#4890eb;background-color:#4c9bff;color:#fff;cursor:default}.pickerContent .pickerFooter[data-v-54a3b4ba]{padding:.5rem;border-top:1px solid #d9d9d9}.pickerContent.pickerSizing[data-v-54a3b4ba]{overflow-y:auto;max-height:420px}.suggestion .pickerContent[data-v-54a3b4ba],.fill .pickerContent[data-v-54a3b4ba]{width:100%;min-width:auto}.pickerEnd .pickerContent[data-v-54a3b4ba]{right:0;left:auto;text-align:left}.pickerUp .pickerContent[data-v-54a3b4ba]{bottom:2.5rem;top:auto}.picker:not(.pickerUp).suggestion.active .input.pickerToggler[data-v-54a3b4ba],.picker:not(.pickerUp).suggestion.active .select.pickerToggler[data-v-54a3b4ba]{border-bottom-right-radius:0;border-bottom-left-radius:0}.picker:not(.pickerUp).suggestion.active .pickerContent[data-v-54a3b4ba]{border-top-right-radius:0;border-top-left-radius:0}.picker.pickerUp.suggestion.active .input.pickerToggler[data-v-54a3b4ba],.picker.pickerUp.suggestion.active .select.pickerToggler[data-v-54a3b4ba]{border-top-right-radius:0;border-top-left-radius:0}.picker.pickerUp.suggestion.active .pickerContent[data-v-54a3b4ba]{border-bottom-right-radius:0;border-bottom-left-radius:0}.picker.active .pickerContent[data-v-54a3b4ba]{display:block}@media (prefers-color-scheme: dark){.pickerContent[data-v-54a3b4ba]{background-color:#2f2f2f;border-color:#5f5f5f}.pickerContent .pickerHeader[data-v-54a3b4ba]{border-bottom-color:#5f5f5f}.pickerContent .pickerItem[data-v-54a3b4ba]{border-bottom-color:#5f5f5f;color:#f2f2f2}.pickerContent .pickerItem[data-v-54a3b4ba]:hover{background-color:#242424}.pickerContent .pickerFooter[data-v-54a3b4ba]{border-top-color:#5f5f5f}}@media (prefers-color-scheme: light){html[data-mode=dark] .pickerContent[data-v-54a3b4ba]{background-color:#2f2f2f;border-color:#5f5f5f}html[data-mode=dark] .pickerContent .pickerHeader[data-v-54a3b4ba]{border-bottom-color:#5f5f5f}html[data-mode=dark] .pickerContent .pickerItem[data-v-54a3b4ba]{border-bottom-color:#5f5f5f;color:#f2f2f2}html[data-mode=dark] .pickerContent .pickerItem[data-v-54a3b4ba]:hover{background-color:#242424}html[data-mode=dark] .pickerContent .pickerFooter[data-v-54a3b4ba]{border-top-color:#5f5f5f}}@media (prefers-color-scheme: dark){html[data-mode=light] .pickerContent[data-v-54a3b4ba]{background-color:#fff;border-color:#d9d9d9}html[data-mode=light] .pickerContent .pickerHeader[data-v-54a3b4ba]{border-bottom-color:#d9d9d9}html[data-mode=light] .pickerContent .pickerItem[data-v-54a3b4ba]{border-bottom-color:#d9d9d9;color:#283541}html[data-mode=light] .pickerContent .pickerItem[data-v-54a3b4ba]:hover{background-color:#ededed}html[data-mode=light] .pickerContent .pickerFooter[data-v-54a3b4ba]{border-top-color:#d9d9d9}}.input[data-v-54a3b4ba],.select[data-v-54a3b4ba]{display:block;width:100%;padding:.5rem .75rem;margin:0;font-size:1rem;font-weight:400;line-height:1.5;background-color:#fff;background-clip:padding-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:inherit;border:1px solid #d9d9d9;border-radius:.375rem;outline:0;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.input[data-v-54a3b4ba]::placeholder,.select[data-v-54a3b4ba]::placeholder{color:#555}.input[data-v-54a3b4ba]:focus,.select[data-v-54a3b4ba]:focus{border-color:#1d84b6;background-color:#f7faff;z-index:1;box-shadow:none}.input[disabled][data-v-54a3b4ba],.input[readonly][data-v-54a3b4ba],.input.disabled[data-v-54a3b4ba],.select[disabled][data-v-54a3b4ba],.select[readonly][data-v-54a3b4ba],.select.disabled[data-v-54a3b4ba]{border-color:#d6d6d6;background-color:#f0f0f0;cursor:default;box-shadow:none}.input[disabled][data-v-54a3b4ba],.input.disabled[data-v-54a3b4ba],.select[disabled][data-v-54a3b4ba],.select.disabled[data-v-54a3b4ba]{color:#9b9b9b;-webkit-user-select:none;user-select:none;pointer-events:none}.input.plain[data-v-54a3b4ba],.input.plainText[data-v-54a3b4ba]{background-color:transparent;border-color:transparent;padding-left:0;padding-right:0;box-shadow:none}.valid[data-v-54a3b4ba],.validated[data-v-54a3b4ba] :valid{border-color:#198754;background-color:#f1fff8;padding-right:calc(1.5em + .75rem);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.validMessage[data-v-54a3b4ba]{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#198754}.validTooltip[data-v-54a3b4ba]{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:#198754e6;border-radius:.25rem}.invalid[data-v-54a3b4ba],.validated[data-v-54a3b4ba] :invalid{border-color:#dc3545;background-color:#fbf1f2;padding-right:calc(1.5em + .75rem);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.invalidMessage[data-v-54a3b4ba]{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#dc3545}.invalidTooltip[data-v-54a3b4ba]{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:#dc3545e6;border-radius:.25rem}.valid~.validMessage[data-v-54a3b4ba],.valid~.validTooltip[data-v-54a3b4ba],.validated :valid~.validMessage[data-v-54a3b4ba],.validated :valid~.validTooltip[data-v-54a3b4ba],.invalid~.invalidMessage[data-v-54a3b4ba],.invalid~.invalidTooltip[data-v-54a3b4ba],.validated :invalid~.invalidMessage[data-v-54a3b4ba],.validated :invalid~.invalidTooltip[data-v-54a3b4ba]{display:block}textarea.input[data-v-54a3b4ba]{min-height:6.5rem;resize:none;border-radius:.375rem}.select[data-v-54a3b4ba]:not([multiple]){background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px}html[dir=rtl] .select[data-v-54a3b4ba]:not([multiple]){background-position:left .75rem center}select.select[data-v-54a3b4ba]:not([multiple]){padding:.5rem}.select[multiple][data-v-54a3b4ba]{padding-top:.5rem;padding-bottom:.5rem}.select[multiple] option[data-v-54a3b4ba]{padding-top:.375rem;padding-bottom:.375rem;outline:0}.check[data-v-54a3b4ba]{display:inline-flex;align-items:center}.check .checkInput[data-v-54a3b4ba]{width:1.5em;height:1.5em;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border:1px solid #d9d9d9}.check .checkInput[type=checkbox][data-v-54a3b4ba]{border-radius:.25rem}.check .checkInput[type=radio][data-v-54a3b4ba]{border-radius:.75rem}.check .checkInput[data-v-54a3b4ba]:checked{border-color:#1d84b6;background-color:#1d84b6}.check .checkInput[disabled][data-v-54a3b4ba],.check .checkInput.disabled[data-v-54a3b4ba]{border-color:#d6d6d6;background-color:#f0f0f0;pointer-events:none}.check .checkInput:checked[disabled][data-v-54a3b4ba],.check .checkInput:checked.disabled[data-v-54a3b4ba]{background-color:#bbb}.check .checkInput[disabled]~.checkLabel[data-v-54a3b4ba],.check .checkInput.disabled~.checkLabel[data-v-54a3b4ba]{color:#9b9b9b;cursor:default}.check .checkInput[type=checkbox][data-v-54a3b4ba]:checked{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e")}.check .checkInput[type=checkbox][data-v-54a3b4ba]:indeterminate{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e")}.check .checkInput[type=radio][data-v-54a3b4ba]:checked{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e")}.check .checkLabel[data-v-54a3b4ba]{display:inline-block;padding-left:.5rem;padding-right:.5rem}.check.switch .checkInput[data-v-54a3b4ba]{width:2.85em;background-repeat:no-repeat;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");background-position:left center;border-radius:2em;transition:background-position .15s ease-in-out}.check.switch .checkInput[data-v-54a3b4ba]:checked{background-position:right center;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")}.group[data-v-54a3b4ba]{display:inline-flex;flex-wrap:nowrap;align-items:stretch}.group .groupItem[data-v-54a3b4ba]{flex:1 1 auto;border-radius:0}.group:not(.groupList) .groupItem[data-v-54a3b4ba]:first-child{border-top-left-radius:.375rem;border-bottom-left-radius:.375rem}.group:not(.groupList) .groupItem[data-v-54a3b4ba]:last-child{border-top-right-radius:.375rem;border-bottom-right-radius:.375rem}.group:not(.groupList) .groupItem[data-v-54a3b4ba]:not(:last-child){margin-right:-1px}.group.groupList[data-v-54a3b4ba]{flex-direction:column}.group.groupList .groupItem[data-v-54a3b4ba]:first-child{border-top-right-radius:.375rem;border-top-left-radius:.375rem}.group.groupList .groupItem[data-v-54a3b4ba]:last-child{border-bottom-right-radius:.375rem;border-bottom-left-radius:.375rem}.group.groupList .groupItem[data-v-54a3b4ba]:not(:last-child){margin-bottom:-1px}.group .input[data-v-54a3b4ba]:focus,.group .select[data-v-54a3b4ba]:focus{border-color:#d9d9d9;z-index:1;box-shadow:none}html[dir=rtl] .group:not(.groupList) .groupItem[data-v-54a3b4ba]:first-child{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:.375rem;border-bottom-right-radius:.375rem}html[dir=rtl] .group:not(.groupList) .groupItem[data-v-54a3b4ba]:last-child{border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:.375rem;border-bottom-left-radius:.375rem}html[dir=rtl] .group:not(.groupList) .groupItem[data-v-54a3b4ba]:not(:last-child){margin-left:-1px}.button[data-v-54a3b4ba]{display:inline-block;font-weight:400;color:#283541;text-align:center;text-decoration:none;cursor:pointer;-webkit-user-select:none;user-select:none;background-color:#fff;border:1px solid #d6d6d6;padding:.5rem .75rem;font-size:1rem;border-radius:.375rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.button[data-v-54a3b4ba]:hover{background-color:#e9e9e9}.button[data-v-54a3b4ba]:active{border-color:#bbb;background-color:#bfbfbf}@media (prefers-color-scheme: dark){.input[data-v-54a3b4ba],.select[data-v-54a3b4ba]{background-color:#242424;border-color:#5f5f5f}.input[data-v-54a3b4ba]::placeholder,.select[data-v-54a3b4ba]::placeholder{color:#d4d4d4}.input[data-v-54a3b4ba]:focus,.select[data-v-54a3b4ba]:focus{background-color:#242424}.input[disabled][data-v-54a3b4ba],.input[readonly][data-v-54a3b4ba],.input.disabled[data-v-54a3b4ba],.select[disabled][data-v-54a3b4ba],.select[readonly][data-v-54a3b4ba],.select.disabled[data-v-54a3b4ba]{background-color:#242424;border-color:#5f5f5f}.input.plain[data-v-54a3b4ba],.input.plainText[data-v-54a3b4ba]{background-color:transparent;border-color:transparent}.valid[data-v-54a3b4ba],.validated[data-v-54a3b4ba] :valid{background-color:#242424;border-color:#198754}.invalid[data-v-54a3b4ba],.validated[data-v-54a3b4ba] :invalid{background-color:#242424;border-color:#dc3545}.check .checkInput[data-v-54a3b4ba]{background-color:#242424;border-color:#5f5f5f}.check .checkInput[data-v-54a3b4ba]:checked{border-color:#1d84b6;background-color:#1d84b6}.check .checkInput[disabled][data-v-54a3b4ba],.check .checkInput.disabled[data-v-54a3b4ba]{background-color:#2f2f2f;border-color:#5f5f5f}.check .checkInput:checked[disabled][data-v-54a3b4ba],.check .checkInput:checked.disabled[data-v-54a3b4ba]{background-color:#2f2f2f}.check.switch .checkInput[data-v-54a3b4ba]{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%28255, 255, 255, 0.25%29'/%3e%3c/svg%3e")}.check.switch .checkInput[data-v-54a3b4ba]:checked{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")}.button[data-v-54a3b4ba]{background-color:#2f2f2f;border-color:#5f5f5f;color:inherit}.button[data-v-54a3b4ba]:hover{background-color:#5f5f5f}}@media (prefers-color-scheme: light){html[data-mode=dark] .input[data-v-54a3b4ba],html[data-mode=dark] .select[data-v-54a3b4ba]{background-color:#242424;border-color:#5f5f5f}html[data-mode=dark] .input[data-v-54a3b4ba]::placeholder,html[data-mode=dark] .select[data-v-54a3b4ba]::placeholder{color:#d4d4d4}html[data-mode=dark] .input[data-v-54a3b4ba]:focus,html[data-mode=dark] .select[data-v-54a3b4ba]:focus{background-color:#242424}html[data-mode=dark] .input[disabled][data-v-54a3b4ba],html[data-mode=dark] .input[readonly][data-v-54a3b4ba],html[data-mode=dark] .input.disabled[data-v-54a3b4ba],html[data-mode=dark] .select[disabled][data-v-54a3b4ba],html[data-mode=dark] .select[readonly][data-v-54a3b4ba],html[data-mode=dark] .select.disabled[data-v-54a3b4ba]{background-color:#242424;border-color:#5f5f5f}html[data-mode=dark] .input.plain[data-v-54a3b4ba],html[data-mode=dark] .input.plainText[data-v-54a3b4ba]{background-color:transparent;border-color:transparent}html[data-mode=dark] .valid[data-v-54a3b4ba],html[data-mode=dark] .validated[data-v-54a3b4ba] :valid{background-color:#242424;border-color:#198754}html[data-mode=dark] .invalid[data-v-54a3b4ba],html[data-mode=dark] .validated[data-v-54a3b4ba] :invalid{background-color:#242424;border-color:#dc3545}html[data-mode=dark] .check .checkInput[data-v-54a3b4ba]{background-color:#242424;border-color:#5f5f5f}html[data-mode=dark] .check .checkInput[data-v-54a3b4ba]:checked{border-color:#1d84b6;background-color:#1d84b6}html[data-mode=dark] .check .checkInput[disabled][data-v-54a3b4ba],html[data-mode=dark] .check .checkInput.disabled[data-v-54a3b4ba]{background-color:#2f2f2f;border-color:#5f5f5f}html[data-mode=dark] .check .checkInput:checked[disabled][data-v-54a3b4ba],html[data-mode=dark] .check .checkInput:checked.disabled[data-v-54a3b4ba]{background-color:#2f2f2f}html[data-mode=dark] .check.switch .checkInput[data-v-54a3b4ba]{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%28255, 255, 255, 0.25%29'/%3e%3c/svg%3e")}html[data-mode=dark] .check.switch .checkInput[data-v-54a3b4ba]:checked{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")}html[data-mode=dark] .button[data-v-54a3b4ba]{background-color:#2f2f2f;border-color:#5f5f5f;color:inherit}html[data-mode=dark] .button[data-v-54a3b4ba]:hover{background-color:#5f5f5f}}@media (prefers-color-scheme: dark){html[data-mode=light] .input[data-v-54a3b4ba],html[data-mode=light] .select[data-v-54a3b4ba]{background-color:#fff;border-color:#d9d9d9}html[data-mode=light] .input[data-v-54a3b4ba]::placeholder,html[data-mode=light] .select[data-v-54a3b4ba]::placeholder{color:#555}html[data-mode=light] .input[data-v-54a3b4ba]:focus,html[data-mode=light] .select[data-v-54a3b4ba]:focus{background-color:#f7faff}html[data-mode=light] .input[disabled][data-v-54a3b4ba],html[data-mode=light] .input[readonly][data-v-54a3b4ba],html[data-mode=light] .input.disabled[data-v-54a3b4ba],html[data-mode=light] .select[disabled][data-v-54a3b4ba],html[data-mode=light] .select[readonly][data-v-54a3b4ba],html[data-mode=light] .select.disabled[data-v-54a3b4ba]{background-color:#f0f0f0;border-color:#d6d6d6}html[data-mode=light] .input.plain[data-v-54a3b4ba],html[data-mode=light] .input.plainText[data-v-54a3b4ba]{background-color:transparent;border-color:transparent}html[data-mode=light] .valid[data-v-54a3b4ba],html[data-mode=light] .validated[data-v-54a3b4ba] :valid{background-color:#f1fff8;border-color:#198754}html[data-mode=light] .invalid[data-v-54a3b4ba],html[data-mode=light] .validated[data-v-54a3b4ba] :invalid{background-color:#fbf1f2;border-color:#dc3545}html[data-mode=light] .check .checkInput[data-v-54a3b4ba]{background-color:#fff;border-color:#d9d9d9}html[data-mode=light] .check .checkInput[data-v-54a3b4ba]:checked{border-color:#1d84b6;background-color:#1d84b6}html[data-mode=light] .check .checkInput[disabled][data-v-54a3b4ba],html[data-mode=light] .check .checkInput.disabled[data-v-54a3b4ba]{background-color:#f0f0f0;border-color:#d6d6d6}html[data-mode=light] .check .checkInput:checked[disabled][data-v-54a3b4ba],html[data-mode=light] .check .checkInput:checked.disabled[data-v-54a3b4ba]{background-color:#bbb}html[data-mode=light] .check.switch .checkInput[data-v-54a3b4ba]{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e")}html[data-mode=light] .check.switch .checkInput[data-v-54a3b4ba]:checked{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")}html[data-mode=light] .button[data-v-54a3b4ba]{background-color:#fff;border-color:#d6d6d6;color:#283541}html[data-mode=light] .button[data-v-54a3b4ba]:hover{background-color:#e9e9e9}}@media print{.button[data-v-54a3b4ba]{display:none}}.tedirCategoryAdd[data-v-54a3b4ba]{display:flex;justify-content:space-between}.tedirCategoryAdd .input[data-v-54a3b4ba]{flex-grow:1}.tedirCategoryAdd .tedirCategoryButton[data-v-54a3b4ba]{margin-left:.5rem;background-color:#0d6efd;border-color:#0d6efd;color:#fff}.tedirCategoryAdd .tedirCategoryButton[data-v-54a3b4ba]:hover{background-color:#2182ff;border-color:#2182ff}`, Rc = /* @__PURE__ */ fo(jc, [["styles", [Ac]], ["__scopeId", "data-v-54a3b4ba"]]), Lc = /* @__PURE__ */ uo(Ts), Pc = /* @__PURE__ */ uo(Hs), Bc = /* @__PURE__ */ uo(ic), Fc = /* @__PURE__ */ uo(gc), zc = /* @__PURE__ */ uo(Rc);
function Uc() {
  customElements.define("select-box", Lc), customElements.define("combo-box", Pc), customElements.define("list-box", Bc), customElements.define("tag-box", Fc), customElements.define("category-box", zc);
}
export {
  zc as CategoryBox,
  Pc as ComboBox,
  Bc as ListBox,
  Lc as SelectBox,
  Fc as TagBox,
  Uc as useTedirSelect
};
