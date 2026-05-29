import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
import * as r from "react";
import i, { Activity as a, Children as o, cloneElement as s, createElement as c, forwardRef as l, isValidElement as u, useContext as d, useEffect as f, useId as p, useRef as m, useState as h } from "react";
import g from "react-dom";
//#region \0rolldown/runtime.js
var _ = Object.create, v = Object.defineProperty, y = Object.getOwnPropertyDescriptor, b = Object.getOwnPropertyNames, x = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty, C = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), w = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = b(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !S.call(e, s) && s !== n && v(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = y(t, s)) || r.enumerable
	});
	return e;
}, T = (e, t, n) => (n = e == null ? {} : _(x(e)), w(t || !e || !e.__esModule ? v(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), E = {
	SMALL: "small",
	MEDIUM: "medium",
	LARGE: "large"
};
function D(e) {
	switch (e) {
		case E.SMALL: return "h-8";
		case E.MEDIUM: return "h-10";
		case E.LARGE: return "h-14";
	}
}
function O(e) {
	switch (e) {
		case E.SMALL: return "text-[14px]";
		case E.MEDIUM: return "text-[15px]";
		case E.LARGE: return "text-[16px]";
	}
}
function k(e) {
	switch (e) {
		case E.SMALL: return 16;
		case E.MEDIUM: return 20;
		case E.LARGE: return 24;
	}
}
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function A(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = A(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function j() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = A(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
var M = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, N = (e, t) => ({
	classGroupId: e,
	validator: t
}), ee = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), te = "-", P = [], ne = "arbitrary..", re = (e) => {
	let t = F(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return ae(e);
			let n = e.split(te);
			return ie(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? M(i, t) : t : i || P;
			}
			return n[e] || P;
		}
	};
}, ie = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = ie(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(te) : e.slice(t).join(te), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, ae = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? ne + r : void 0;
})(), F = (e) => {
	let { theme: t, classGroups: n } = e;
	return I(n, t);
}, I = (e, t) => {
	let n = ee();
	for (let r in e) {
		let i = e[r];
		oe(i, n, r, t);
	}
	return n;
}, oe = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		se(i, t, n, r);
	}
}, se = (e, t, n, r) => {
	if (typeof e == "string") {
		L(e, t, n);
		return;
	}
	if (typeof e == "function") {
		R(e, t, n, r);
		return;
	}
	ce(e, t, n, r);
}, L = (e, t, n) => {
	let r = e === "" ? t : le(t, e);
	r.classGroupId = n;
}, R = (e, t, n, r) => {
	if (ue(e)) {
		oe(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(N(n, e));
}, ce = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		oe(o, le(t, a), n, r);
	}
}, le = (e, t) => {
	let n = e, r = t.split(te), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = ee(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, ue = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, de = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
		n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
	};
	return {
		get(e) {
			let t = n[e];
			if (t !== void 0) return t;
			if ((t = r[e]) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			e in n ? n[e] = t : i(e, t);
		}
	};
}, fe = "!", pe = ":", z = [], me = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), he = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === pe) {
					t.push(e.slice(i, s)), i = s + 1;
					continue;
				}
				if (o === "/") {
					a = s;
					continue;
				}
			}
			o === "[" ? n++ : o === "]" ? n-- : o === "(" ? r++ : o === ")" && r--;
		}
		let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
		s.endsWith(fe) ? (c = s.slice(0, -1), l = !0) : s.startsWith(fe) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return me(t, l, c, u);
	};
	if (t) {
		let e = t + pe, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : me(z, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, ge = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, n) => {
		t.set(e, 1e6 + n);
	}), (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
		}
		return r.length > 0 && (r.sort(), n.push(...r)), n;
	};
}, _e = (e) => ({
	cache: de(e.cacheSize),
	parseClassName: he(e),
	sortModifiers: ge(e),
	postfixLookupClassGroupIds: ve(e),
	...re(e)
}), ve = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, ye = /\s+/, be = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(ye), l = "";
	for (let e = c.length - 1; e >= 0; --e) {
		let t = c[e], { isExternal: u, modifiers: d, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: m } = n(t);
		if (u) {
			l = t + (l.length > 0 ? " " + l : l);
			continue;
		}
		let h = !!m, g;
		if (h) {
			g = r(p.substring(0, m));
			let e = g && o[g] ? r(p) : void 0;
			e && e !== g && (g = e, h = !1);
		} else g = r(p);
		if (!g) {
			if (!h) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			if (g = r(p), !g) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			h = !1;
		}
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + fe : _, y = v + g;
		if (s.indexOf(y) > -1) continue;
		s.push(y);
		let b = i(g, h);
		for (let e = 0; e < b.length; ++e) {
			let t = b[e];
			s.push(v + t);
		}
		l = t + (l.length > 0 ? " " + l : l);
	}
	return l;
}, xe = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = Se(n)) && (i && (i += " "), i += r);
	return i;
}, Se = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = Se(e[r])) && (n && (n += " "), n += t);
	return n;
}, Ce = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = _e(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = be(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(xe(...e));
}, we = [], B = (e) => {
	let t = (t) => t[e] || we;
	return t.isThemeGetter = !0, t;
}, Te = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ee = /^\((?:(\w[\w-]*):)?(.+)\)$/i, De = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Oe = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ke = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ae = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, je = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Me = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ne = (e) => De.test(e), V = (e) => !!e && !Number.isNaN(Number(e)), Pe = (e) => !!e && Number.isInteger(Number(e)), Fe = (e) => e.endsWith("%") && V(e.slice(0, -1)), Ie = (e) => Oe.test(e), Le = () => !0, Re = (e) => ke.test(e) && !Ae.test(e), ze = () => !1, Be = (e) => je.test(e), Ve = (e) => Me.test(e), He = (e) => !H(e) && !U(e), Ue = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), We = (e) => at(e, lt, ze), H = (e) => Te.test(e), Ge = (e) => at(e, ut, Re), Ke = (e) => at(e, dt, V), qe = (e) => at(e, pt, Le), Je = (e) => at(e, ft, ze), Ye = (e) => at(e, st, ze), Xe = (e) => at(e, ct, Ve), Ze = (e) => at(e, mt, Be), U = (e) => Ee.test(e), Qe = (e) => ot(e, ut), $e = (e) => ot(e, ft), et = (e) => ot(e, st), tt = (e) => ot(e, lt), nt = (e) => ot(e, ct), rt = (e) => ot(e, mt, !0), it = (e) => ot(e, pt, !0), at = (e, t, n) => {
	let r = Te.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, ot = (e, t, n = !1) => {
	let r = Ee.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, st = (e) => e === "position" || e === "percentage", ct = (e) => e === "image" || e === "url", lt = (e) => e === "length" || e === "size" || e === "bg-size", ut = (e) => e === "length", dt = (e) => e === "number", ft = (e) => e === "family-name", pt = (e) => e === "number" || e === "weight", mt = (e) => e === "shadow", ht = /* @__PURE__ */ Ce(() => {
	let e = B("color"), t = B("font"), n = B("text"), r = B("font-weight"), i = B("tracking"), a = B("leading"), o = B("breakpoint"), s = B("container"), c = B("spacing"), l = B("radius"), u = B("shadow"), d = B("inset-shadow"), f = B("text-shadow"), p = B("drop-shadow"), m = B("blur"), h = B("perspective"), g = B("aspect"), _ = B("ease"), v = B("animate"), y = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], b = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], x = () => [
		...b(),
		U,
		H
	], S = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], C = () => [
		"auto",
		"contain",
		"none"
	], w = () => [
		U,
		H,
		c
	], T = () => [
		Ne,
		"full",
		"auto",
		...w()
	], E = () => [
		Pe,
		"none",
		"subgrid",
		U,
		H
	], D = () => [
		"auto",
		{ span: [
			"full",
			Pe,
			U,
			H
		] },
		Pe,
		U,
		H
	], O = () => [
		Pe,
		"auto",
		U,
		H
	], k = () => [
		"auto",
		"min",
		"max",
		"fr",
		U,
		H
	], A = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], j = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], M = () => ["auto", ...w()], N = () => [
		Ne,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], ee = () => [
		Ne,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], te = () => [
		Ne,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], P = () => [
		e,
		U,
		H
	], ne = () => [
		...b(),
		et,
		Ye,
		{ position: [U, H] }
	], re = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], ie = () => [
		"auto",
		"cover",
		"contain",
		tt,
		We,
		{ size: [U, H] }
	], ae = () => [
		Fe,
		Qe,
		Ge
	], F = () => [
		"",
		"none",
		"full",
		l,
		U,
		H
	], I = () => [
		"",
		V,
		Qe,
		Ge
	], oe = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], se = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], L = () => [
		V,
		Fe,
		et,
		Ye
	], R = () => [
		"",
		"none",
		m,
		U,
		H
	], ce = () => [
		"none",
		V,
		U,
		H
	], le = () => [
		"none",
		V,
		U,
		H
	], ue = () => [
		V,
		U,
		H
	], de = () => [
		Ne,
		"full",
		...w()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [Ie],
			breakpoint: [Ie],
			color: [Le],
			container: [Ie],
			"drop-shadow": [Ie],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [He],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [Ie],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [Ie],
			shadow: [Ie],
			spacing: ["px", V],
			text: [Ie],
			"text-shadow": [Ie],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				Ne,
				H,
				U,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				U,
				H
			] }],
			"container-named": [Ue],
			columns: [{ columns: [
				V,
				H,
				U,
				s
			] }],
			"break-after": [{ "break-after": y() }],
			"break-before": [{ "break-before": y() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: x() }],
			overflow: [{ overflow: S() }],
			"overflow-x": [{ "overflow-x": S() }],
			"overflow-y": [{ "overflow-y": S() }],
			overscroll: [{ overscroll: C() }],
			"overscroll-x": [{ "overscroll-x": C() }],
			"overscroll-y": [{ "overscroll-y": C() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: T() }],
			"inset-x": [{ "inset-x": T() }],
			"inset-y": [{ "inset-y": T() }],
			start: [{
				"inset-s": T(),
				start: T()
			}],
			end: [{
				"inset-e": T(),
				end: T()
			}],
			"inset-bs": [{ "inset-bs": T() }],
			"inset-be": [{ "inset-be": T() }],
			top: [{ top: T() }],
			right: [{ right: T() }],
			bottom: [{ bottom: T() }],
			left: [{ left: T() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				Pe,
				"auto",
				U,
				H
			] }],
			basis: [{ basis: [
				Ne,
				"full",
				"auto",
				s,
				...w()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				V,
				Ne,
				"auto",
				"initial",
				"none",
				H
			] }],
			grow: [{ grow: [
				"",
				V,
				U,
				H
			] }],
			shrink: [{ shrink: [
				"",
				V,
				U,
				H
			] }],
			order: [{ order: [
				Pe,
				"first",
				"last",
				"none",
				U,
				H
			] }],
			"grid-cols": [{ "grid-cols": E() }],
			"col-start-end": [{ col: D() }],
			"col-start": [{ "col-start": O() }],
			"col-end": [{ "col-end": O() }],
			"grid-rows": [{ "grid-rows": E() }],
			"row-start-end": [{ row: D() }],
			"row-start": [{ "row-start": O() }],
			"row-end": [{ "row-end": O() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": k() }],
			"auto-rows": [{ "auto-rows": k() }],
			gap: [{ gap: w() }],
			"gap-x": [{ "gap-x": w() }],
			"gap-y": [{ "gap-y": w() }],
			"justify-content": [{ justify: [...A(), "normal"] }],
			"justify-items": [{ "justify-items": [...j(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...j()] }],
			"align-content": [{ content: ["normal", ...A()] }],
			"align-items": [{ items: [...j(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...j(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": A() }],
			"place-items": [{ "place-items": [...j(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...j()] }],
			p: [{ p: w() }],
			px: [{ px: w() }],
			py: [{ py: w() }],
			ps: [{ ps: w() }],
			pe: [{ pe: w() }],
			pbs: [{ pbs: w() }],
			pbe: [{ pbe: w() }],
			pt: [{ pt: w() }],
			pr: [{ pr: w() }],
			pb: [{ pb: w() }],
			pl: [{ pl: w() }],
			m: [{ m: M() }],
			mx: [{ mx: M() }],
			my: [{ my: M() }],
			ms: [{ ms: M() }],
			me: [{ me: M() }],
			mbs: [{ mbs: M() }],
			mbe: [{ mbe: M() }],
			mt: [{ mt: M() }],
			mr: [{ mr: M() }],
			mb: [{ mb: M() }],
			ml: [{ ml: M() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: N() }],
			"inline-size": [{ inline: ["auto", ...ee()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...ee()] }],
			"max-inline-size": [{ "max-inline": ["none", ...ee()] }],
			"block-size": [{ block: ["auto", ...te()] }],
			"min-block-size": [{ "min-block": ["auto", ...te()] }],
			"max-block-size": [{ "max-block": ["none", ...te()] }],
			w: [{ w: [
				s,
				"screen",
				...N()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...N()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...N()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...N()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...N()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...N()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				Qe,
				Ge
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				it,
				qe
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				Fe,
				H
			] }],
			"font-family": [{ font: [
				$e,
				Je,
				t
			] }],
			"font-features": [{ "font-features": [H] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				U,
				H
			] }],
			"line-clamp": [{ "line-clamp": [
				V,
				"none",
				U,
				Ke
			] }],
			leading: [{ leading: [a, ...w()] }],
			"list-image": [{ "list-image": [
				"none",
				U,
				H
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				U,
				H
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: P() }],
			"text-color": [{ text: P() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...oe(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				V,
				"from-font",
				"auto",
				U,
				Ge
			] }],
			"text-decoration-color": [{ decoration: P() }],
			"underline-offset": [{ "underline-offset": [
				V,
				"auto",
				U,
				H
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: w() }],
			"tab-size": [{ tab: [
				Pe,
				U,
				H
			] }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				U,
				H
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				U,
				H
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: ne() }],
			"bg-repeat": [{ bg: re() }],
			"bg-size": [{ bg: ie() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						Pe,
						U,
						H
					],
					radial: [
						"",
						U,
						H
					],
					conic: [
						Pe,
						U,
						H
					]
				},
				nt,
				Xe
			] }],
			"bg-color": [{ bg: P() }],
			"gradient-from-pos": [{ from: ae() }],
			"gradient-via-pos": [{ via: ae() }],
			"gradient-to-pos": [{ to: ae() }],
			"gradient-from": [{ from: P() }],
			"gradient-via": [{ via: P() }],
			"gradient-to": [{ to: P() }],
			rounded: [{ rounded: F() }],
			"rounded-s": [{ "rounded-s": F() }],
			"rounded-e": [{ "rounded-e": F() }],
			"rounded-t": [{ "rounded-t": F() }],
			"rounded-r": [{ "rounded-r": F() }],
			"rounded-b": [{ "rounded-b": F() }],
			"rounded-l": [{ "rounded-l": F() }],
			"rounded-ss": [{ "rounded-ss": F() }],
			"rounded-se": [{ "rounded-se": F() }],
			"rounded-ee": [{ "rounded-ee": F() }],
			"rounded-es": [{ "rounded-es": F() }],
			"rounded-tl": [{ "rounded-tl": F() }],
			"rounded-tr": [{ "rounded-tr": F() }],
			"rounded-br": [{ "rounded-br": F() }],
			"rounded-bl": [{ "rounded-bl": F() }],
			"border-w": [{ border: I() }],
			"border-w-x": [{ "border-x": I() }],
			"border-w-y": [{ "border-y": I() }],
			"border-w-s": [{ "border-s": I() }],
			"border-w-e": [{ "border-e": I() }],
			"border-w-bs": [{ "border-bs": I() }],
			"border-w-be": [{ "border-be": I() }],
			"border-w-t": [{ "border-t": I() }],
			"border-w-r": [{ "border-r": I() }],
			"border-w-b": [{ "border-b": I() }],
			"border-w-l": [{ "border-l": I() }],
			"divide-x": [{ "divide-x": I() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": I() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...oe(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...oe(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: P() }],
			"border-color-x": [{ "border-x": P() }],
			"border-color-y": [{ "border-y": P() }],
			"border-color-s": [{ "border-s": P() }],
			"border-color-e": [{ "border-e": P() }],
			"border-color-bs": [{ "border-bs": P() }],
			"border-color-be": [{ "border-be": P() }],
			"border-color-t": [{ "border-t": P() }],
			"border-color-r": [{ "border-r": P() }],
			"border-color-b": [{ "border-b": P() }],
			"border-color-l": [{ "border-l": P() }],
			"divide-color": [{ divide: P() }],
			"outline-style": [{ outline: [
				...oe(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				V,
				U,
				H
			] }],
			"outline-w": [{ outline: [
				"",
				V,
				Qe,
				Ge
			] }],
			"outline-color": [{ outline: P() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				rt,
				Ze
			] }],
			"shadow-color": [{ shadow: P() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				rt,
				Ze
			] }],
			"inset-shadow-color": [{ "inset-shadow": P() }],
			"ring-w": [{ ring: I() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: P() }],
			"ring-offset-w": [{ "ring-offset": [V, Ge] }],
			"ring-offset-color": [{ "ring-offset": P() }],
			"inset-ring-w": [{ "inset-ring": I() }],
			"inset-ring-color": [{ "inset-ring": P() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				rt,
				Ze
			] }],
			"text-shadow-color": [{ "text-shadow": P() }],
			opacity: [{ opacity: [
				V,
				U,
				H
			] }],
			"mix-blend": [{ "mix-blend": [
				...se(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": se() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [V] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": L() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": L() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": P() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": P() }],
			"mask-image-t-from-pos": [{ "mask-t-from": L() }],
			"mask-image-t-to-pos": [{ "mask-t-to": L() }],
			"mask-image-t-from-color": [{ "mask-t-from": P() }],
			"mask-image-t-to-color": [{ "mask-t-to": P() }],
			"mask-image-r-from-pos": [{ "mask-r-from": L() }],
			"mask-image-r-to-pos": [{ "mask-r-to": L() }],
			"mask-image-r-from-color": [{ "mask-r-from": P() }],
			"mask-image-r-to-color": [{ "mask-r-to": P() }],
			"mask-image-b-from-pos": [{ "mask-b-from": L() }],
			"mask-image-b-to-pos": [{ "mask-b-to": L() }],
			"mask-image-b-from-color": [{ "mask-b-from": P() }],
			"mask-image-b-to-color": [{ "mask-b-to": P() }],
			"mask-image-l-from-pos": [{ "mask-l-from": L() }],
			"mask-image-l-to-pos": [{ "mask-l-to": L() }],
			"mask-image-l-from-color": [{ "mask-l-from": P() }],
			"mask-image-l-to-color": [{ "mask-l-to": P() }],
			"mask-image-x-from-pos": [{ "mask-x-from": L() }],
			"mask-image-x-to-pos": [{ "mask-x-to": L() }],
			"mask-image-x-from-color": [{ "mask-x-from": P() }],
			"mask-image-x-to-color": [{ "mask-x-to": P() }],
			"mask-image-y-from-pos": [{ "mask-y-from": L() }],
			"mask-image-y-to-pos": [{ "mask-y-to": L() }],
			"mask-image-y-from-color": [{ "mask-y-from": P() }],
			"mask-image-y-to-color": [{ "mask-y-to": P() }],
			"mask-image-radial": [{ "mask-radial": [U, H] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": L() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": L() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": P() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": P() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [V] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": L() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": L() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": P() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": P() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: ne() }],
			"mask-repeat": [{ mask: re() }],
			"mask-size": [{ mask: ie() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				U,
				H
			] }],
			filter: [{ filter: [
				"",
				"none",
				U,
				H
			] }],
			blur: [{ blur: R() }],
			brightness: [{ brightness: [
				V,
				U,
				H
			] }],
			contrast: [{ contrast: [
				V,
				U,
				H
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				rt,
				Ze
			] }],
			"drop-shadow-color": [{ "drop-shadow": P() }],
			grayscale: [{ grayscale: [
				"",
				V,
				U,
				H
			] }],
			"hue-rotate": [{ "hue-rotate": [
				V,
				U,
				H
			] }],
			invert: [{ invert: [
				"",
				V,
				U,
				H
			] }],
			saturate: [{ saturate: [
				V,
				U,
				H
			] }],
			sepia: [{ sepia: [
				"",
				V,
				U,
				H
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				U,
				H
			] }],
			"backdrop-blur": [{ "backdrop-blur": R() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				V,
				U,
				H
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				V,
				U,
				H
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				V,
				U,
				H
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				V,
				U,
				H
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				V,
				U,
				H
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				V,
				U,
				H
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				V,
				U,
				H
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				V,
				U,
				H
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": w() }],
			"border-spacing-x": [{ "border-spacing-x": w() }],
			"border-spacing-y": [{ "border-spacing-y": w() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				U,
				H
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				V,
				"initial",
				U,
				H
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				U,
				H
			] }],
			delay: [{ delay: [
				V,
				U,
				H
			] }],
			animate: [{ animate: [
				"none",
				v,
				U,
				H
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				U,
				H
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: ce() }],
			"rotate-x": [{ "rotate-x": ce() }],
			"rotate-y": [{ "rotate-y": ce() }],
			"rotate-z": [{ "rotate-z": ce() }],
			scale: [{ scale: le() }],
			"scale-x": [{ "scale-x": le() }],
			"scale-y": [{ "scale-y": le() }],
			"scale-z": [{ "scale-z": le() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: ue() }],
			"skew-x": [{ "skew-x": ue() }],
			"skew-y": [{ "skew-y": ue() }],
			transform: [{ transform: [
				U,
				H,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: de() }],
			"translate-x": [{ "translate-x": de() }],
			"translate-y": [{ "translate-y": de() }],
			"translate-z": [{ "translate-z": de() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				Pe,
				U,
				H
			] }],
			accent: [{ accent: P() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: P() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				U,
				H
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scrollbar-thumb-color": [{ "scrollbar-thumb": P() }],
			"scrollbar-track-color": [{ "scrollbar-track": P() }],
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			"scroll-m": [{ "scroll-m": w() }],
			"scroll-mx": [{ "scroll-mx": w() }],
			"scroll-my": [{ "scroll-my": w() }],
			"scroll-ms": [{ "scroll-ms": w() }],
			"scroll-me": [{ "scroll-me": w() }],
			"scroll-mbs": [{ "scroll-mbs": w() }],
			"scroll-mbe": [{ "scroll-mbe": w() }],
			"scroll-mt": [{ "scroll-mt": w() }],
			"scroll-mr": [{ "scroll-mr": w() }],
			"scroll-mb": [{ "scroll-mb": w() }],
			"scroll-ml": [{ "scroll-ml": w() }],
			"scroll-p": [{ "scroll-p": w() }],
			"scroll-px": [{ "scroll-px": w() }],
			"scroll-py": [{ "scroll-py": w() }],
			"scroll-ps": [{ "scroll-ps": w() }],
			"scroll-pe": [{ "scroll-pe": w() }],
			"scroll-pbs": [{ "scroll-pbs": w() }],
			"scroll-pbe": [{ "scroll-pbe": w() }],
			"scroll-pt": [{ "scroll-pt": w() }],
			"scroll-pr": [{ "scroll-pr": w() }],
			"scroll-pb": [{ "scroll-pb": w() }],
			"scroll-pl": [{ "scroll-pl": w() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				U,
				H
			] }],
			fill: [{ fill: ["none", ...P()] }],
			"stroke-w": [{ stroke: [
				V,
				Qe,
				Ge,
				Ke
			] }],
			stroke: [{ stroke: ["none", ...P()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
});
//#endregion
//#region src/uis/cn.ts
function W(...e) {
	return ht(j(e));
}
//#endregion
//#region src/components/buttons/ButtonFilled.tsx
function gt({ label: e, enable: n, scale: r, whenClicked: i }) {
	return /* @__PURE__ */ t("button", {
		type: "button",
		className: W("w-full rounded-lg font-medium", D(r), O(r), n ? "bg-primary text-on-primary cursor-pointer" : "bg-on-surface-op10 text-on-surface-op38 cursor-not-allowed"),
		disabled: !n,
		onClick: i,
		children: e
	});
}
//#endregion
//#region src/components/buttons/ButtonFilledError.tsx
function _t({ label: e, enable: n, scale: r, whenClicked: i }) {
	return /* @__PURE__ */ t("button", {
		type: "button",
		className: W("w-full rounded-lg font-medium", D(r), O(r), n ? "bg-error text-on-error cursor-pointer" : "bg-on-surface-op10 text-on-surface-op38 cursor-not-allowed"),
		disabled: !n,
		onClick: i,
		children: e
	});
}
//#endregion
//#region node_modules/@iconify/react/dist/iconify.js
function vt(e, t) {
	let n = e.icons, r = e.aliases || Object.create(null), i = Object.create(null);
	function a(e) {
		if (n[e]) return i[e] = [];
		if (!(e in i)) {
			i[e] = null;
			let t = r[e] && r[e].parent, n = t && a(t);
			n && (i[e] = [t].concat(n));
		}
		return i[e];
	}
	return Object.keys(n).concat(Object.keys(r)).forEach(a), i;
}
var yt = Object.freeze({
	left: 0,
	top: 0,
	width: 16,
	height: 16
}), bt = Object.freeze({
	rotate: 0,
	vFlip: !1,
	hFlip: !1
}), xt = Object.freeze({
	...yt,
	...bt
}), St = Object.freeze({
	...xt,
	body: "",
	hidden: !1
});
function Ct(e, t) {
	let n = {};
	!e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
	let r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
	return r && (n.rotate = r), n;
}
function wt(e, t) {
	let n = Ct(e, t);
	for (let r in St) r in bt ? r in e && !(r in n) && (n[r] = bt[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
	return n;
}
function Tt(e, t, n) {
	let r = e.icons, i = e.aliases || Object.create(null), a = {};
	function o(e) {
		a = wt(r[e] || i[e], a);
	}
	return o(t), n.forEach(o), wt(e, a);
}
function Et(e, t) {
	let n = [];
	if (typeof e != "object" || typeof e.icons != "object") return n;
	e.not_found instanceof Array && e.not_found.forEach((e) => {
		t(e, null), n.push(e);
	});
	let r = vt(e);
	for (let i in r) {
		let a = r[i];
		a && (t(i, Tt(e, i, a)), n.push(i));
	}
	return n;
}
var Dt = {
	provider: "",
	aliases: {},
	not_found: {},
	...yt
};
function Ot(e, t) {
	for (let n in t) if (n in e && typeof e[n] != typeof t[n]) return !1;
	return !0;
}
function kt(e) {
	if (typeof e != "object" || !e) return null;
	let t = e;
	if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !Ot(e, Dt)) return null;
	let n = t.icons;
	for (let e in n) {
		let t = n[e];
		if (!e || typeof t.body != "string" || !Ot(t, St)) return null;
	}
	let r = t.aliases || Object.create(null);
	for (let e in r) {
		let t = r[e], i = t.parent;
		if (!e || typeof i != "string" || !n[i] && !r[i] || !Ot(t, St)) return null;
	}
	return t;
}
var At = Object.create(null);
function jt(e, t) {
	return {
		provider: e,
		prefix: t,
		icons: Object.create(null),
		missing: /* @__PURE__ */ new Set()
	};
}
function Mt(e, t) {
	let n = At[e] || (At[e] = Object.create(null));
	return n[t] || (n[t] = jt(e, t));
}
function Nt(e, t) {
	return kt(t) ? Et(t, (t, n) => {
		n ? e.icons[t] = n : e.missing.add(t);
	}) : [];
}
function Pt(e, t, n) {
	try {
		if (typeof n.body == "string") return e.icons[t] = { ...n }, !0;
	} catch {}
	return !1;
}
var Ft = /^[a-z0-9]+(-[a-z0-9]+)*$/, It = (e, t, n, r = "") => {
	let i = e.split(":");
	if (e.slice(0, 1) === "@") {
		if (i.length < 2 || i.length > 3) return null;
		r = i.shift().slice(1);
	}
	if (i.length > 3 || !i.length) return null;
	if (i.length > 1) {
		let e = i.pop(), n = i.pop(), a = {
			provider: i.length > 0 ? i[0] : r,
			prefix: n,
			name: e
		};
		return t && !Lt(a) ? null : a;
	}
	let a = i[0], o = a.split("-");
	if (o.length > 1) {
		let e = {
			provider: r,
			prefix: o.shift(),
			name: o.join("-")
		};
		return t && !Lt(e) ? null : e;
	}
	if (n && r === "") {
		let e = {
			provider: r,
			prefix: "",
			name: a
		};
		return t && !Lt(e, n) ? null : e;
	}
	return null;
}, Lt = (e, t) => e ? !!((t && e.prefix === "" || e.prefix) && e.name) : !1, Rt = !1;
function zt(e) {
	return typeof e == "boolean" && (Rt = e), Rt;
}
function Bt(e) {
	let t = typeof e == "string" ? It(e, !0, Rt) : e;
	if (t) {
		let e = Mt(t.provider, t.prefix), n = t.name;
		return e.icons[n] || (e.missing.has(n) ? null : void 0);
	}
}
function Vt(e, t) {
	let n = It(e, !0, Rt);
	if (!n) return !1;
	let r = Mt(n.provider, n.prefix);
	return t ? Pt(r, n.name, t) : (r.missing.add(n.name), !0);
}
function Ht(e, t) {
	if (typeof e != "object") return !1;
	if (typeof t != "string" && (t = e.provider || ""), Rt && !t && !e.prefix) {
		let t = !1;
		return kt(e) && (e.prefix = "", Et(e, (e, n) => {
			Vt(e, n) && (t = !0);
		})), t;
	}
	let n = e.prefix;
	return Lt({
		prefix: n,
		name: "a"
	}) ? !!Nt(Mt(t, n), e) : !1;
}
var Ut = Object.freeze({
	width: null,
	height: null
}), Wt = Object.freeze({
	...Ut,
	...bt
}), Gt = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Kt = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function qt(e, t, n) {
	if (t === 1) return e;
	if (n ||= 100, typeof e == "number") return Math.ceil(e * t * n) / n;
	if (typeof e != "string") return e;
	let r = e.split(Gt);
	if (r === null || !r.length) return e;
	let i = [], a = r.shift(), o = Kt.test(a);
	for (;;) {
		if (o) {
			let e = parseFloat(a);
			isNaN(e) ? i.push(a) : i.push(Math.ceil(e * t * n) / n);
		} else i.push(a);
		if (a = r.shift(), a === void 0) return i.join("");
		o = !o;
	}
}
function Jt(e, t = "defs") {
	let n = "", r = e.indexOf("<" + t);
	for (; r >= 0;) {
		let i = e.indexOf(">", r), a = e.indexOf("</" + t);
		if (i === -1 || a === -1) break;
		let o = e.indexOf(">", a);
		if (o === -1) break;
		n += e.slice(i + 1, a).trim(), e = e.slice(0, r).trim() + e.slice(o + 1);
	}
	return {
		defs: n,
		content: e
	};
}
function Yt(e, t) {
	return e ? "<defs>" + e + "</defs>" + t : t;
}
function Xt(e, t, n) {
	let r = Jt(e);
	return Yt(r.defs, t + r.content + n);
}
var Zt = (e) => e === "unset" || e === "undefined" || e === "none";
function Qt(e, t) {
	let n = {
		...xt,
		...e
	}, r = {
		...Wt,
		...t
	}, i = {
		left: n.left,
		top: n.top,
		width: n.width,
		height: n.height
	}, a = n.body;
	[n, r].forEach((e) => {
		let t = [], n = e.hFlip, r = e.vFlip, o = e.rotate;
		n ? r ? o += 2 : (t.push("translate(" + (i.width + i.left).toString() + " " + (0 - i.top).toString() + ")"), t.push("scale(-1 1)"), i.top = i.left = 0) : r && (t.push("translate(" + (0 - i.left).toString() + " " + (i.height + i.top).toString() + ")"), t.push("scale(1 -1)"), i.top = i.left = 0);
		let s;
		switch (o < 0 && (o -= Math.floor(o / 4) * 4), o %= 4, o) {
			case 1:
				s = i.height / 2 + i.top, t.unshift("rotate(90 " + s.toString() + " " + s.toString() + ")");
				break;
			case 2:
				t.unshift("rotate(180 " + (i.width / 2 + i.left).toString() + " " + (i.height / 2 + i.top).toString() + ")");
				break;
			case 3:
				s = i.width / 2 + i.left, t.unshift("rotate(-90 " + s.toString() + " " + s.toString() + ")");
				break;
		}
		o % 2 == 1 && (i.left !== i.top && (s = i.left, i.left = i.top, i.top = s), i.width !== i.height && (s = i.width, i.width = i.height, i.height = s)), t.length && (a = Xt(a, "<g transform=\"" + t.join(" ") + "\">", "</g>"));
	});
	let o = r.width, s = r.height, c = i.width, l = i.height, u, d;
	o === null ? (d = s === null ? "1em" : s === "auto" ? l : s, u = qt(d, c / l)) : (u = o === "auto" ? c : o, d = s === null ? qt(u, l / c) : s === "auto" ? l : s);
	let f = {}, p = (e, t) => {
		Zt(t) || (f[e] = t.toString());
	};
	p("width", u), p("height", d);
	let m = [
		i.left,
		i.top,
		c,
		l
	];
	return f.viewBox = m.join(" "), {
		attributes: f,
		viewBox: m,
		body: a
	};
}
var $t = /\sid="(\S+)"/g, en = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16), tn = 0;
function nn(e, t = en) {
	let n = [], r;
	for (; r = $t.exec(e);) n.push(r[1]);
	if (!n.length) return e;
	let i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
	return n.forEach((n) => {
		let r = typeof t == "function" ? t(n) : t + (tn++).toString(), a = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		e = e.replace(RegExp("([#;\"])(" + a + ")([\")]|\\.[a-z])", "g"), "$1" + r + i + "$3");
	}), e = e.replace(new RegExp(i, "g"), ""), e;
}
var rn = Object.create(null);
function an(e, t) {
	rn[e] = t;
}
function on(e) {
	return rn[e] || rn[""];
}
function sn(e) {
	let t;
	if (typeof e.resources == "string") t = [e.resources];
	else if (t = e.resources, !(t instanceof Array) || !t.length) return null;
	return {
		resources: t,
		path: e.path || "/",
		maxURL: e.maxURL || 500,
		rotate: e.rotate || 750,
		timeout: e.timeout || 5e3,
		random: e.random === !0,
		index: e.index || 0,
		dataAfterTimeout: e.dataAfterTimeout !== !1
	};
}
for (var cn = Object.create(null), ln = ["https://api.simplesvg.com", "https://api.unisvg.com"], un = []; ln.length > 0;) ln.length === 1 || Math.random() > .5 ? un.push(ln.shift()) : un.push(ln.pop());
cn[""] = sn({ resources: ["https://api.iconify.design"].concat(un) });
function dn(e, t) {
	let n = sn(t);
	return n === null ? !1 : (cn[e] = n, !0);
}
function fn(e) {
	return cn[e];
}
var pn = (() => {
	let e;
	try {
		if (e = fetch, typeof e == "function") return e;
	} catch {}
})();
function mn(e, t) {
	let n = fn(e);
	if (!n) return 0;
	let r;
	if (!n.maxURL) r = 0;
	else {
		let e = 0;
		n.resources.forEach((t) => {
			e = Math.max(e, t.length);
		});
		let i = t + ".json?icons=";
		r = n.maxURL - e - n.path.length - i.length;
	}
	return r;
}
function hn(e) {
	return e === 404;
}
var gn = (e, t, n) => {
	let r = [], i = mn(e, t), a = "icons", o = {
		type: a,
		provider: e,
		prefix: t,
		icons: []
	}, s = 0;
	return n.forEach((n, c) => {
		s += n.length + 1, s >= i && c > 0 && (r.push(o), o = {
			type: a,
			provider: e,
			prefix: t,
			icons: []
		}, s = n.length), o.icons.push(n);
	}), r.push(o), r;
};
function _n(e) {
	if (typeof e == "string") {
		let t = fn(e);
		if (t) return t.path;
	}
	return "/";
}
var vn = {
	prepare: gn,
	send: (e, t, n) => {
		if (!pn) {
			n("abort", 424);
			return;
		}
		let r = _n(t.provider);
		switch (t.type) {
			case "icons": {
				let e = t.prefix, n = t.icons.join(","), i = new URLSearchParams({ icons: n });
				r += e + ".json?" + i.toString();
				break;
			}
			case "custom": {
				let e = t.uri;
				r += e.slice(0, 1) === "/" ? e.slice(1) : e;
				break;
			}
			default:
				n("abort", 400);
				return;
		}
		let i = 503;
		pn(e + r).then((e) => {
			let t = e.status;
			if (t !== 200) {
				setTimeout(() => {
					n(hn(t) ? "abort" : "next", t);
				});
				return;
			}
			return i = 501, e.json();
		}).then((e) => {
			if (typeof e != "object" || !e) {
				setTimeout(() => {
					e === 404 ? n("abort", e) : n("next", i);
				});
				return;
			}
			setTimeout(() => {
				n("success", e);
			});
		}).catch(() => {
			n("next", i);
		});
	}
};
function yn(e, t) {
	e.forEach((e) => {
		let n = e.loaderCallbacks;
		n && (e.loaderCallbacks = n.filter((e) => e.id !== t));
	});
}
function bn(e) {
	e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
		e.pendingCallbacksFlag = !1;
		let t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
		if (!t.length) return;
		let n = !1, r = e.provider, i = e.prefix;
		t.forEach((t) => {
			let a = t.icons, o = a.pending.length;
			a.pending = a.pending.filter((t) => {
				if (t.prefix !== i) return !0;
				let o = t.name;
				if (e.icons[o]) a.loaded.push({
					provider: r,
					prefix: i,
					name: o
				});
				else if (e.missing.has(o)) a.missing.push({
					provider: r,
					prefix: i,
					name: o
				});
				else return n = !0, !0;
				return !1;
			}), a.pending.length !== o && (n || yn([e], t.id), t.callback(a.loaded.slice(0), a.missing.slice(0), a.pending.slice(0), t.abort));
		});
	}));
}
var xn = 0;
function Sn(e, t, n) {
	let r = xn++, i = yn.bind(null, n, r);
	if (!t.pending.length) return i;
	let a = {
		id: r,
		icons: t,
		callback: e,
		abort: i
	};
	return n.forEach((e) => {
		(e.loaderCallbacks ||= []).push(a);
	}), i;
}
function Cn(e) {
	let t = {
		loaded: [],
		missing: [],
		pending: []
	}, n = Object.create(null);
	e.sort((e, t) => e.provider === t.provider ? e.prefix === t.prefix ? e.name.localeCompare(t.name) : e.prefix.localeCompare(t.prefix) : e.provider.localeCompare(t.provider));
	let r = {
		provider: "",
		prefix: "",
		name: ""
	};
	return e.forEach((e) => {
		if (r.name === e.name && r.prefix === e.prefix && r.provider === e.provider) return;
		r = e;
		let i = e.provider, a = e.prefix, o = e.name, s = n[i] || (n[i] = Object.create(null)), c = s[a] || (s[a] = Mt(i, a)), l;
		l = o in c.icons ? t.loaded : a === "" || c.missing.has(o) ? t.missing : t.pending;
		let u = {
			provider: i,
			prefix: a,
			name: o
		};
		l.push(u);
	}), t;
}
function wn(e, t = !0, n = !1) {
	let r = [];
	return e.forEach((e) => {
		let i = typeof e == "string" ? It(e, t, n) : e;
		i && r.push(i);
	}), r;
}
var Tn = {
	resources: [],
	index: 0,
	timeout: 2e3,
	rotate: 750,
	random: !1,
	dataAfterTimeout: !1
};
function En(e, t, n, r) {
	let i = e.resources.length, a = e.random ? Math.floor(Math.random() * i) : e.index, o;
	if (e.random) {
		let t = e.resources.slice(0);
		for (o = []; t.length > 1;) {
			let e = Math.floor(Math.random() * t.length);
			o.push(t[e]), t = t.slice(0, e).concat(t.slice(e + 1));
		}
		o = o.concat(t);
	} else o = e.resources.slice(a).concat(e.resources.slice(0, a));
	let s = Date.now(), c = "pending", l = 0, u, d = null, f = [], p = [];
	typeof r == "function" && p.push(r);
	function m() {
		d &&= (clearTimeout(d), null);
	}
	function h() {
		c === "pending" && (c = "aborted"), m(), f.forEach((e) => {
			e.status === "pending" && (e.status = "aborted");
		}), f = [];
	}
	function g(e, t) {
		t && (p = []), typeof e == "function" && p.push(e);
	}
	function _() {
		return {
			startTime: s,
			payload: t,
			status: c,
			queriesSent: l,
			queriesPending: f.length,
			subscribe: g,
			abort: h
		};
	}
	function v() {
		c = "failed", p.forEach((e) => {
			e(void 0, u);
		});
	}
	function y() {
		f.forEach((e) => {
			e.status === "pending" && (e.status = "aborted");
		}), f = [];
	}
	function b(t, n, r) {
		let i = n !== "success";
		switch (f = f.filter((e) => e !== t), c) {
			case "pending": break;
			case "failed":
				if (i || !e.dataAfterTimeout) return;
				break;
			default: return;
		}
		if (n === "abort") {
			u = r, v();
			return;
		}
		if (i) {
			u = r, f.length || (o.length ? x() : v());
			return;
		}
		if (m(), y(), !e.random) {
			let n = e.resources.indexOf(t.resource);
			n !== -1 && n !== e.index && (e.index = n);
		}
		c = "completed", p.forEach((e) => {
			e(r);
		});
	}
	function x() {
		if (c !== "pending") return;
		m();
		let r = o.shift();
		if (r === void 0) {
			if (f.length) {
				d = setTimeout(() => {
					m(), c === "pending" && (y(), v());
				}, e.timeout);
				return;
			}
			v();
			return;
		}
		let i = {
			status: "pending",
			resource: r,
			callback: (e, t) => {
				b(i, e, t);
			}
		};
		f.push(i), l++, d = setTimeout(x, e.rotate), n(r, t, i.callback);
	}
	return setTimeout(x), _;
}
function Dn(e) {
	let t = {
		...Tn,
		...e
	}, n = [];
	function r() {
		n = n.filter((e) => e().status === "pending");
	}
	function i(e, i, a) {
		let o = En(t, e, i, (e, t) => {
			r(), a && a(e, t);
		});
		return n.push(o), o;
	}
	function a(e) {
		return n.find((t) => e(t)) || null;
	}
	return {
		query: i,
		find: a,
		setIndex: (e) => {
			t.index = e;
		},
		getIndex: () => t.index,
		cleanup: r
	};
}
function On() {}
var kn = Object.create(null);
function An(e) {
	if (!kn[e]) {
		let t = fn(e);
		if (!t) return;
		kn[e] = {
			config: t,
			redundancy: Dn(t)
		};
	}
	return kn[e];
}
function jn(e, t, n) {
	let r, i;
	if (typeof e == "string") {
		let t = on(e);
		if (!t) return n(void 0, 424), On;
		i = t.send;
		let a = An(e);
		a && (r = a.redundancy);
	} else {
		let t = sn(e);
		if (t) {
			r = Dn(t);
			let n = on(e.resources ? e.resources[0] : "");
			n && (i = n.send);
		}
	}
	return !r || !i ? (n(void 0, 424), On) : r.query(t, i, n)().abort;
}
function Mn() {}
function Nn(e) {
	e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
		e.iconsLoaderFlag = !1, bn(e);
	}));
}
function Pn(e) {
	let t = [], n = [];
	return e.forEach((e) => {
		(e.match(Ft) ? t : n).push(e);
	}), {
		valid: t,
		invalid: n
	};
}
function Fn(e, t, n) {
	function r() {
		let n = e.pendingIcons;
		t.forEach((t) => {
			n && n.delete(t), e.icons[t] || e.missing.add(t);
		});
	}
	if (n && typeof n == "object") try {
		if (!Nt(e, n).length) {
			r();
			return;
		}
	} catch (e) {
		console.error(e);
	}
	r(), Nn(e);
}
function In(e, t) {
	e instanceof Promise ? e.then((e) => {
		t(e);
	}).catch(() => {
		t(null);
	}) : t(e);
}
function Ln(e, t) {
	e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
		e.iconsQueueFlag = !1;
		let { provider: t, prefix: n } = e, r = e.iconsToLoad;
		if (delete e.iconsToLoad, !r || !r.length) return;
		let i = e.loadIcon;
		if (e.loadIcons && (r.length > 1 || !i)) {
			In(e.loadIcons(r, n, t), (t) => {
				Fn(e, r, t);
			});
			return;
		}
		if (i) {
			r.forEach((r) => {
				In(i(r, n, t), (t) => {
					Fn(e, [r], t ? {
						prefix: n,
						icons: { [r]: t }
					} : null);
				});
			});
			return;
		}
		let { valid: a, invalid: o } = Pn(r);
		if (o.length && Fn(e, o, null), !a.length) return;
		let s = n.match(Ft) ? on(t) : null;
		if (!s) {
			Fn(e, a, null);
			return;
		}
		s.prepare(t, n, a).forEach((n) => {
			jn(t, n, (t) => {
				Fn(e, n.icons, t);
			});
		});
	}));
}
var Rn = (e, t) => {
	let n = Cn(wn(e, !0, zt()));
	if (!n.pending.length) {
		let e = !0;
		return t && setTimeout(() => {
			e && t(n.loaded, n.missing, n.pending, Mn);
		}), () => {
			e = !1;
		};
	}
	let r = Object.create(null), i = [], a, o;
	return n.pending.forEach((e) => {
		let { provider: t, prefix: n } = e;
		if (n === o && t === a) return;
		a = t, o = n, i.push(Mt(t, n));
		let s = r[t] || (r[t] = Object.create(null));
		s[n] || (s[n] = []);
	}), n.pending.forEach((e) => {
		let { provider: t, prefix: n, name: i } = e, a = Mt(t, n), o = a.pendingIcons ||= /* @__PURE__ */ new Set();
		o.has(i) || (o.add(i), r[t][n].push(i));
	}), i.forEach((e) => {
		let t = r[e.provider][e.prefix];
		t.length && Ln(e, t);
	}), t ? Sn(t, n, i) : Mn;
};
function zn(e, t) {
	let n = { ...e };
	for (let e in t) {
		let r = t[e], i = typeof r;
		e in Ut ? (r === null || r && (i === "string" || i === "number")) && (n[e] = r) : i === typeof n[e] && (n[e] = e === "rotate" ? r % 4 : r);
	}
	return n;
}
var Bn = /[\s,]+/;
function Vn(e, t) {
	t.split(Bn).forEach((t) => {
		switch (t.trim()) {
			case "horizontal":
				e.hFlip = !0;
				break;
			case "vertical":
				e.vFlip = !0;
				break;
		}
	});
}
function Hn(e, t = 0) {
	let n = e.replace(/^-?[0-9.]*/, "");
	function r(e) {
		for (; e < 0;) e += 4;
		return e % 4;
	}
	if (n === "") {
		let t = parseInt(e);
		return isNaN(t) ? 0 : r(t);
	} else if (n !== e) {
		let t = 0;
		switch (n) {
			case "%":
				t = 25;
				break;
			case "deg": t = 90;
		}
		if (t) {
			let i = parseFloat(e.slice(0, e.length - n.length));
			return isNaN(i) ? 0 : (i /= t, i % 1 == 0 ? r(i) : 0);
		}
	}
	return t;
}
function Un(e, t) {
	let n = e.indexOf("xlink:") === -1 ? "" : " xmlns:xlink=\"http://www.w3.org/1999/xlink\"";
	for (let e in t) n += " " + e + "=\"" + t[e] + "\"";
	return "<svg xmlns=\"http://www.w3.org/2000/svg\"" + n + ">" + e + "</svg>";
}
function Wn(e) {
	return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Gn(e) {
	return "data:image/svg+xml," + Wn(e);
}
function Kn(e) {
	return "url(\"" + Gn(e) + "\")";
}
var qn;
function Jn() {
	try {
		qn = window.trustedTypes.createPolicy("iconify", { createHTML: (e) => e });
	} catch {
		qn = null;
	}
}
function Yn(e) {
	return qn === void 0 && Jn(), qn ? qn.createHTML(e) : e;
}
var Xn = {
	...Wt,
	inline: !1
}, Zn = {
	xmlns: "http://www.w3.org/2000/svg",
	xmlnsXlink: "http://www.w3.org/1999/xlink",
	"aria-hidden": !0,
	role: "img"
}, Qn = { display: "inline-block" }, $n = { backgroundColor: "currentColor" }, er = { backgroundColor: "transparent" }, tr = {
	Image: "var(--svg)",
	Repeat: "no-repeat",
	Size: "100% 100%"
}, nr = {
	WebkitMask: $n,
	mask: $n,
	background: er
};
for (let e in nr) {
	let t = nr[e];
	for (let n in tr) t[e + n] = tr[n];
}
var rr = {
	...Xn,
	inline: !0
};
function ir(e) {
	return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
var ar = (e, t, n) => {
	let r = t.inline ? rr : Xn, i = zn(r, t), a = t.mode || "svg", o = {}, s = t.style || {}, l = { ...a === "svg" ? Zn : {} };
	if (n) {
		let e = It(n, !1, !0);
		if (e) {
			let t = ["iconify"];
			for (let n of ["provider", "prefix"]) e[n] && t.push("iconify--" + e[n]);
			l.className = t.join(" ");
		}
	}
	for (let e in t) {
		let n = t[e];
		if (n !== void 0) switch (e) {
			case "icon":
			case "style":
			case "children":
			case "onLoad":
			case "mode":
			case "ssr":
			case "fallback": break;
			case "_ref":
				l.ref = n;
				break;
			case "className":
				l[e] = (l[e] ? l[e] + " " : "") + n;
				break;
			case "inline":
			case "hFlip":
			case "vFlip":
				i[e] = n === !0 || n === "true" || n === 1;
				break;
			case "flip":
				typeof n == "string" && Vn(i, n);
				break;
			case "color":
				o.color = n;
				break;
			case "rotate":
				typeof n == "string" ? i[e] = Hn(n) : typeof n == "number" && (i[e] = n);
				break;
			case "ariaHidden":
			case "aria-hidden":
				n !== !0 && n !== "true" && delete l["aria-hidden"];
				break;
			default: r[e] === void 0 && (l[e] = n);
		}
	}
	let u = Qt(e, i), d = u.attributes;
	if (i.inline && (o.verticalAlign = "-0.125em"), a === "svg") {
		l.style = {
			...o,
			...s
		}, Object.assign(l, d);
		let e = 0, n = t.id;
		return typeof n == "string" && (n = n.replace(/-/g, "_")), l.dangerouslySetInnerHTML = { __html: Yn(nn(u.body, n ? () => n + "ID" + e++ : "iconifyReact")) }, c("svg", l);
	}
	let { body: f, width: p, height: m } = e, h = a === "mask" || (a === "bg" ? !1 : f.indexOf("currentColor") !== -1), g = Un(f, {
		...d,
		width: p + "",
		height: m + ""
	});
	return l.style = {
		...o,
		"--svg": Kn(g),
		width: ir(d.width),
		height: ir(d.height),
		...Qn,
		...h ? $n : er,
		...s
	}, c("span", l);
};
if (zt(!0), an("", vn), typeof document < "u" && typeof window < "u") {
	let e = window;
	if (e.IconifyPreload !== void 0) {
		let t = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
		typeof t == "object" && t && (t instanceof Array ? t : [t]).forEach((e) => {
			try {
				(typeof e != "object" || !e || e instanceof Array || typeof e.icons != "object" || typeof e.prefix != "string" || !Ht(e)) && console.error(n);
			} catch {
				console.error(n);
			}
		});
	}
	if (e.IconifyProviders !== void 0) {
		let t = e.IconifyProviders;
		if (typeof t == "object" && t) for (let e in t) {
			let n = "IconifyProviders[" + e + "] is invalid.";
			try {
				let r = t[e];
				if (typeof r != "object" || !r || r.resources === void 0) continue;
				dn(e, r) || console.error(n);
			} catch {
				console.error(n);
			}
		}
	}
}
function or(e) {
	let [t, n] = h(!!e.ssr), [r, i] = h({});
	function a(t) {
		if (t) {
			let t = e.icon;
			if (typeof t == "object") return {
				name: "",
				data: t
			};
			let n = Bt(t);
			if (n) return {
				name: t,
				data: n
			};
		}
		return { name: "" };
	}
	let [o, s] = h(a(!!e.ssr));
	function l() {
		let e = r.callback;
		e && (e(), i({}));
	}
	function u(e) {
		if (JSON.stringify(o) !== JSON.stringify(e)) return l(), s(e), !0;
	}
	function d() {
		var t;
		let n = e.icon;
		if (typeof n == "object") {
			u({
				name: "",
				data: n
			});
			return;
		}
		let r = Bt(n);
		u({
			name: n,
			data: r
		}) && (r === void 0 ? i({ callback: Rn([n], d) }) : r && ((t = e.onLoad) == null || t.call(e, n)));
	}
	f(() => (n(!0), l), []), f(() => {
		t && d();
	}, [e.icon, t]);
	let { name: p, data: m } = o;
	return m ? ar({
		...xt,
		...m
	}, e, p) : e.children ? e.children : e.fallback ? e.fallback : c("span", {});
}
var sr = l((e, t) => or({
	...e,
	_ref: t
}));
l((e, t) => or({
	inline: !0,
	...e,
	_ref: t
}));
//#endregion
//#region src/components/commons/Iconify.tsx
function cr({ iconify: e, size: n, color: r }) {
	return /* @__PURE__ */ t(sr, {
		icon: e,
		width: n,
		height: n,
		style: { color: r }
	});
}
//#endregion
//#region src/components/buttons/ButtonFilledErrorIcon.tsx
function lr({ label: e, iconify: r, enable: i, scale: a, whenClicked: o }) {
	return /* @__PURE__ */ n("button", {
		type: "button",
		className: W("flex w-full items-center justify-center rounded-lg", D(a), i ? "bg-error text-on-error cursor-pointer" : "bg-on-surface-op10 text-on-surface-op38 cursor-not-allowed"),
		disabled: !i,
		onClick: o,
		children: [/* @__PURE__ */ t(cr, {
			iconify: r,
			size: k(a),
			color: ""
		}), /* @__PURE__ */ t("div", {
			className: W("ml-2 font-medium", O(a)),
			children: e
		})]
	});
}
//#endregion
//#region src/components/buttons/ButtonFilledIcon.tsx
function ur({ label: e, iconify: r, enable: i, scale: a, whenClicked: o }) {
	return /* @__PURE__ */ n("button", {
		type: "button",
		className: W("flex w-full items-center justify-center rounded-lg", D(a), i ? "bg-primary text-on-primary cursor-pointer" : "bg-on-surface-op10 text-on-surface-op38 cursor-not-allowed"),
		disabled: !i,
		onClick: o,
		children: [/* @__PURE__ */ t(cr, {
			iconify: r,
			size: k(a),
			color: ""
		}), /* @__PURE__ */ t("div", {
			className: W("ml-2 font-medium", O(a)),
			children: e
		})]
	});
}
//#endregion
//#region src/components/buttons/ButtonMenuErrorIcon.tsx
function dr({ label: e, iconify: r, enable: i, whenClicked: a }) {
	return /* @__PURE__ */ n("button", {
		type: "button",
		className: W("flex w-full items-center bg-transparent px-4 py-2", i ? "text-error hover:text-on-error-container hover:bg-error-container cursor-pointer" : "text-on-surface-op38 cursor-not-allowed"),
		disabled: !i,
		onClick: a,
		children: [/* @__PURE__ */ t(cr, {
			iconify: r,
			size: 24,
			color: ""
		}), /* @__PURE__ */ t("div", {
			className: "ml-2 text-[16px] font-medium",
			children: e
		})]
	});
}
//#endregion
//#region src/components/buttons/ButtonMenuIcon.tsx
function fr({ label: e, iconify: r, enable: i, whenClicked: a }) {
	return /* @__PURE__ */ n("button", {
		type: "button",
		className: W("flex w-full items-center bg-transparent px-4 py-2", i ? "text-on-surface hover:text-on-secondary-container hover:bg-secondary-container cursor-pointer" : "text-on-surface-op38 cursor-not-allowed"),
		disabled: !i,
		onClick: a,
		children: [/* @__PURE__ */ t(cr, {
			iconify: r,
			size: 24,
			color: ""
		}), /* @__PURE__ */ t("div", {
			className: "ml-2 text-[16px] font-medium",
			children: e
		})]
	});
}
//#endregion
//#region src/components/buttons/ButtonOnlyIcon.tsx
function pr({ iconify: e, iconColor: n = "var(--color-on-surface-variant)", enable: r = !0, scale: i = E.LARGE, whenClicked: a }) {
	return /* @__PURE__ */ t("button", {
		type: "button",
		className: W("hover:bg-on-surface-variant-op8 flex items-center justify-center rounded-full bg-transparent p-3", r ? "cursor-pointer" : "cursor-not-allowed"),
		disabled: !r,
		onClick: a,
		children: /* @__PURE__ */ t(cr, {
			iconify: e,
			size: k(i),
			color: r ? n : "var(--color-on-surface-op38)"
		})
	});
}
//#endregion
//#region src/components/buttons/ButtonOutlined.tsx
function mr({ label: e, scale: n, whenClicked: r }) {
	return /* @__PURE__ */ t("button", {
		type: "button",
		className: W("text-primary border-primary w-full cursor-pointer rounded-lg border-2 bg-transparent font-medium", D(n), O(n)),
		onClick: r,
		children: e
	});
}
//#endregion
//#region src/components/buttons/ButtonOutlinedError.tsx
function hr({ label: e, scale: n, whenClicked: r }) {
	return /* @__PURE__ */ t("button", {
		type: "button",
		className: W("text-error border-error w-full cursor-pointer rounded-lg border-2 bg-transparent font-medium", D(n), O(n)),
		onClick: r,
		children: e
	});
}
//#endregion
//#region src/components/buttons/ButtonOutlinedErrorIcon.tsx
function gr({ label: e, iconify: r, scale: i, whenClicked: a }) {
	return /* @__PURE__ */ n("button", {
		type: "button",
		className: W("border-error flex w-full cursor-pointer items-center justify-center rounded-lg border-2 bg-transparent", D(i)),
		onClick: a,
		children: [/* @__PURE__ */ t(cr, {
			iconify: r,
			size: k(i),
			color: "var(--color-error)"
		}), /* @__PURE__ */ t("div", {
			className: W("text-error ml-2 font-medium", O(i)),
			children: e
		})]
	});
}
//#endregion
//#region src/components/buttons/ButtonOutlinedIcon.tsx
function _r({ label: e, iconify: r, scale: i, whenClicked: a }) {
	return /* @__PURE__ */ n("button", {
		type: "button",
		className: W("border-primary flex w-full cursor-pointer items-center justify-center rounded-lg border-2 bg-transparent", D(i)),
		onClick: a,
		children: [/* @__PURE__ */ t(cr, {
			iconify: r,
			size: k(i),
			color: "var(--color-primary)"
		}), /* @__PURE__ */ t("div", {
			className: W("text-primary ml-2 font-medium", O(i)),
			children: e
		})]
	});
}
//#endregion
//#region src/components/buttons/ButtonText.tsx
function vr({ label: e, scale: n, whenClicked: r }) {
	return /* @__PURE__ */ t("button", {
		type: "button",
		className: W("text-primary hover:bg-primary-op8 cursor-pointer rounded-lg bg-transparent px-4 font-medium", D(n), O(n)),
		onClick: r,
		children: e
	});
}
//#endregion
//#region src/components/buttons/ButtonTextIcon.tsx
function yr({ label: e, iconify: r, scale: i, whenClicked: a }) {
	return /* @__PURE__ */ n("button", {
		type: "button",
		className: W("text-primary hover:bg-primary-op8 flex cursor-pointer items-center justify-center rounded-lg bg-transparent px-4", D(i)),
		onClick: a,
		children: [/* @__PURE__ */ t(cr, {
			iconify: r,
			size: k(i),
			color: ""
		}), /* @__PURE__ */ t("div", {
			className: W("ml-2 font-medium", O(i)),
			children: e
		})]
	});
}
//#endregion
//#region src/components/commons/BadgeIcon.tsx
function br({ label: e, iconify: r }) {
	return /* @__PURE__ */ n("div", {
		className: "bg-primary-container border-primary-fixed-dim text-on-primary-container flex items-center gap-x-1 rounded-full border px-3 py-1",
		children: [/* @__PURE__ */ t(cr, {
			iconify: r,
			size: 16,
			color: "var(--color-on-primary-container)"
		}), /* @__PURE__ */ t("div", {
			className: "text-[14px] font-medium",
			children: e
		})]
	});
}
//#endregion
//#region src/constants/applicationsStatus.ts
var xr = [
	{
		applications_status_uuid: "019d3f3c-d4ae-7af5-bc71-ffe88e0d4167",
		status: "REJECTED"
	},
	{
		applications_status_uuid: "019d3f3c-d4ad-723b-88ce-05801ecae82d",
		status: "APPLIED"
	},
	{
		applications_status_uuid: "019d3f3c-d4ae-79f3-8091-250ad00077a5",
		status: "SHORTLISTED"
	},
	{
		applications_status_uuid: "019d4d77-8001-740c-837e-47cb6b79537c",
		status: "INTERVIEWED"
	},
	{
		applications_status_uuid: "019d4d77-8004-777e-a9d3-9011c67e6509",
		status: "OFFERED"
	},
	{
		applications_status_uuid: "019d51f2-3e56-72f7-b4bd-f68aa366f175",
		status: "HIRED"
	}
], Sr = xr.map((e) => ({
	label: e.status,
	value: e.applications_status_uuid
})), Cr = [
	{
		cefr_levels_uuid: "019b834e-eb34-778f-b803-d37e680161ba",
		level_code: "A1",
		level_name: "Beginner",
		description: "Can understand and use familiar everyday expressions and very basic phrases. Can introduce themselves and ask/answer simple questions"
	},
	{
		cefr_levels_uuid: "019b834e-eb37-7363-bb7c-f9fbc77c2a0a",
		level_code: "A2",
		level_name: "Elementary",
		description: "Can understand sentences and frequently used expressions related to personal information, shopping, work, and immediate surroundings"
	},
	{
		cefr_levels_uuid: "019b834e-eb37-7402-821a-e74d460541dd",
		level_code: "B1",
		level_name: "Intermediate",
		description: "Can understand the main points of clear standard input on familiar topics. Can describe experiences, events, and ambitions and give reasons or explanations"
	},
	{
		cefr_levels_uuid: "019b834e-eb37-745f-9f99-8c159f39a3e5",
		level_code: "B2",
		level_name: "Upper Intermediate",
		description: "Can understand more complex texts, interact fluently, and express opinions on a range of topics clearly and in detail"
	},
	{
		cefr_levels_uuid: "019b834e-eb37-74bc-932f-559d2dfb4f81",
		level_code: "C1",
		level_name: "Advanced",
		description: "Can understand demanding texts, express themselves fluently without much effort, and use language flexibly in social, academic, and professional settings"
	},
	{
		cefr_levels_uuid: "019b834e-eb37-751b-b66c-91ddd57fe878",
		level_code: "C2",
		level_name: "Proficiency",
		description: "Can understand almost everything they hear or read, summarize information from different spoken and written sources, and express themselves with high precision and nuance"
	}
], wr = Cr.map((e) => ({
	label: `${e.level_code} - ${e.level_name}`,
	value: e.cefr_levels_uuid
})), Tr = [
	{
		contract_types_uuid: "019b8353-8adf-72f1-98c8-b081e5384d82",
		name: "Full-Time",
		definition: "Standard, long-term employment with benefits"
	},
	{
		contract_types_uuid: "019b8353-8ae0-7e9c-af86-3c53af9d8eac",
		name: "Part-Time",
		definition: "Fewer working hours than full-time, often with fewer benefits"
	},
	{
		contract_types_uuid: "019b8353-8ae0-7f5e-b7fa-5b4a26bffc45",
		name: "Freelance",
		definition: "Independent work on a project or contract basis"
	},
	{
		contract_types_uuid: "019b8353-8ae0-7fd6-b6b1-998b5c4dfcd5",
		name: "Temporary",
		definition: "Short-term employment, often for a specific period"
	},
	{
		contract_types_uuid: "019b8353-8ae1-7053-a388-8836c73ad72b",
		name: "Contract",
		definition: "Employment for a fixed duration or specific project, often through an agency"
	},
	{
		contract_types_uuid: "019b8353-8ae1-70c8-bd34-865048fb1473",
		name: "Internship",
		definition: "Temporary work for students or trainees, paid or unpaid"
	},
	{
		contract_types_uuid: "019b8353-8ae1-713e-bcd8-a9804bf585f6",
		name: "Apprenticeship",
		definition: "Structured training programs that combine work with learning"
	}
], Er = Tr.map((e) => ({
	label: e.name,
	value: e.contract_types_uuid
})), Dr = [
	{
		degrees_uuid: "019b8358-8d62-723f-8ad6-8f3d4650e320",
		level: "Primary and Secondary Education"
	},
	{
		degrees_uuid: "019b8358-8d62-7c38-aefc-147fe7486f24",
		level: "Associate Degrees"
	},
	{
		degrees_uuid: "019b8358-8d62-7d44-8fb4-26f3503409e0",
		level: "Bachelor's Degrees"
	},
	{
		degrees_uuid: "019b8358-8d62-7e28-9a63-473a6fec9b3f",
		level: "Master's Degrees"
	},
	{
		degrees_uuid: "019b8358-8d62-7f0b-b9bf-5845cdd6634d",
		level: "Doctoral and Professional Degrees"
	}
], Or = Dr.map((e) => ({
	label: e.level,
	value: e.degrees_uuid
})), kr = [
	{
		iso_country_code_uuid: "019b8372-3785-7227-99f8-6cf40c65fd7f",
		country: "Afghanistan",
		alpha2: "AF",
		alpha3: "AFG",
		numeric: 4,
		latitude: 33,
		longitude: 65
	},
	{
		iso_country_code_uuid: "019b8372-3788-76af-9c21-ad9db470c6d4",
		country: "Albania",
		alpha2: "AL",
		alpha3: "ALB",
		numeric: 8,
		latitude: 41,
		longitude: 20
	},
	{
		iso_country_code_uuid: "019b8372-3788-7835-8e99-32fe2992678b",
		country: "Algeria",
		alpha2: "DZ",
		alpha3: "DZA",
		numeric: 12,
		latitude: 28,
		longitude: 3
	},
	{
		iso_country_code_uuid: "019b8372-3788-7979-a6d1-67769741ed83",
		country: "American Samoa",
		alpha2: "AS",
		alpha3: "ASM",
		numeric: 16,
		latitude: -14.3333,
		longitude: -170
	},
	{
		iso_country_code_uuid: "019b8372-3788-7abc-97a1-3aa8cf1dd09c",
		country: "Andorra",
		alpha2: "AD",
		alpha3: "AND",
		numeric: 20,
		latitude: 42.5,
		longitude: 1.5
	},
	{
		iso_country_code_uuid: "019b8372-3788-7bf8-94a3-ce9466270459",
		country: "Angola",
		alpha2: "AO",
		alpha3: "AGO",
		numeric: 24,
		latitude: -12.5,
		longitude: 18.5
	},
	{
		iso_country_code_uuid: "019b8372-3788-7d32-8a0f-f68d501a59a6",
		country: "Anguilla",
		alpha2: "AI",
		alpha3: "AIA",
		numeric: 660,
		latitude: 18.25,
		longitude: -63.1667
	},
	{
		iso_country_code_uuid: "019b8372-3788-7e68-ad85-d9d8414899e4",
		country: "Antarctica",
		alpha2: "AQ",
		alpha3: "ATA",
		numeric: 10,
		latitude: -90,
		longitude: 0
	},
	{
		iso_country_code_uuid: "019b8372-3788-7fa3-ac98-5e53a0b81bde",
		country: "Antigua and Barbuda",
		alpha2: "AG",
		alpha3: "ATG",
		numeric: 28,
		latitude: 17.05,
		longitude: -61.8
	},
	{
		iso_country_code_uuid: "019b8372-3789-70d5-9bc2-22c89927f177",
		country: "Argentina",
		alpha2: "AR",
		alpha3: "ARG",
		numeric: 32,
		latitude: -34,
		longitude: -64
	},
	{
		iso_country_code_uuid: "019b8372-3789-720b-9659-a9ab2f797694",
		country: "Armenia",
		alpha2: "AM",
		alpha3: "ARM",
		numeric: 51,
		latitude: 40,
		longitude: 45
	},
	{
		iso_country_code_uuid: "019b8372-3789-7335-80e6-d373741b2ab5",
		country: "Aruba",
		alpha2: "AW",
		alpha3: "ABW",
		numeric: 533,
		latitude: 12.5,
		longitude: -69.9667
	},
	{
		iso_country_code_uuid: "019b8372-3789-7469-89b7-c37e8a169e1d",
		country: "Australia",
		alpha2: "AU",
		alpha3: "AUS",
		numeric: 36,
		latitude: -27,
		longitude: 133
	},
	{
		iso_country_code_uuid: "019b8372-3789-759c-82cd-4eb26fe0a96e",
		country: "Austria",
		alpha2: "AT",
		alpha3: "AUT",
		numeric: 40,
		latitude: 47.3333,
		longitude: 13.3333
	},
	{
		iso_country_code_uuid: "019b8372-3789-76d1-bf0f-141f20826e97",
		country: "Azerbaijan",
		alpha2: "AZ",
		alpha3: "AZE",
		numeric: 31,
		latitude: 40.5,
		longitude: 47.5
	},
	{
		iso_country_code_uuid: "019b8372-3789-7800-8365-8bd310347134",
		country: "Bahamas (the)",
		alpha2: "BS",
		alpha3: "BHS",
		numeric: 44,
		latitude: 24.25,
		longitude: -76
	},
	{
		iso_country_code_uuid: "019b8372-3789-7933-9bfd-8ae21c842f87",
		country: "Bahrain",
		alpha2: "BH",
		alpha3: "BHR",
		numeric: 48,
		latitude: 26,
		longitude: 50.55
	},
	{
		iso_country_code_uuid: "019b8372-3789-7a62-9d5b-9285531c650f",
		country: "Bangladesh",
		alpha2: "BD",
		alpha3: "BGD",
		numeric: 50,
		latitude: 24,
		longitude: 90
	},
	{
		iso_country_code_uuid: "019b8372-3789-7b95-9e43-c88d0acff717",
		country: "Barbados",
		alpha2: "BB",
		alpha3: "BRB",
		numeric: 52,
		latitude: 13.1667,
		longitude: -59.5333
	},
	{
		iso_country_code_uuid: "019b8372-3789-7cca-bca5-8756a278df35",
		country: "Belarus",
		alpha2: "BY",
		alpha3: "BLR",
		numeric: 112,
		latitude: 53,
		longitude: 28
	},
	{
		iso_country_code_uuid: "019b8372-3789-7df8-a956-785d64f467ac",
		country: "Belgium",
		alpha2: "BE",
		alpha3: "BEL",
		numeric: 56,
		latitude: 50.8333,
		longitude: 4
	},
	{
		iso_country_code_uuid: "019b8372-3789-7f2f-8d56-996f388c6e6e",
		country: "Belize",
		alpha2: "BZ",
		alpha3: "BLZ",
		numeric: 84,
		latitude: 17.25,
		longitude: -88.75
	},
	{
		iso_country_code_uuid: "019b8372-378a-705c-a741-afb15fdc7c3a",
		country: "Benin",
		alpha2: "BJ",
		alpha3: "BEN",
		numeric: 204,
		latitude: 9.5,
		longitude: 2.25
	},
	{
		iso_country_code_uuid: "019b8372-378a-718e-9b86-a595d1a9bd50",
		country: "Bermuda",
		alpha2: "BM",
		alpha3: "BMU",
		numeric: 60,
		latitude: 32.3333,
		longitude: -64.75
	},
	{
		iso_country_code_uuid: "019b8372-378a-72c1-93c4-035138d0b4e9",
		country: "Bhutan",
		alpha2: "BT",
		alpha3: "BTN",
		numeric: 64,
		latitude: 27.5,
		longitude: 90.5
	},
	{
		iso_country_code_uuid: "019b8372-378a-73ef-a66d-d3fa01430f83",
		country: "Bolivia (Plurinational State of)",
		alpha2: "BO",
		alpha3: "BOL",
		numeric: 68,
		latitude: -17,
		longitude: -65
	},
	{
		iso_country_code_uuid: "019b8372-378a-7524-9301-6eb80b14db1c",
		country: "Bonaire, Sint Eustatius and Saba",
		alpha2: "BQ",
		alpha3: "BES",
		numeric: 535,
		latitude: 12.18333,
		longitude: -68.23333
	},
	{
		iso_country_code_uuid: "019b8372-378a-765f-aa2b-f42601563497",
		country: "Bosnia and Herzegovina",
		alpha2: "BA",
		alpha3: "BIH",
		numeric: 70,
		latitude: 44,
		longitude: 18
	},
	{
		iso_country_code_uuid: "019b8372-378a-7793-9645-432c3da8c90c",
		country: "Botswana",
		alpha2: "BW",
		alpha3: "BWA",
		numeric: 72,
		latitude: -22,
		longitude: 24
	},
	{
		iso_country_code_uuid: "019b8372-378a-78c7-a21f-c27972b1e9f1",
		country: "Bouvet Island",
		alpha2: "BV",
		alpha3: "BVT",
		numeric: 74,
		latitude: -54.4333,
		longitude: 3.4
	},
	{
		iso_country_code_uuid: "019b8372-378a-79f9-8e9c-40a47ddeb844",
		country: "Brazil",
		alpha2: "BR",
		alpha3: "BRA",
		numeric: 76,
		latitude: -10,
		longitude: -55
	},
	{
		iso_country_code_uuid: "019b8372-378a-7b2c-b995-83e38b85b73d",
		country: "British Indian Ocean Territory (the)",
		alpha2: "IO",
		alpha3: "IOT",
		numeric: 86,
		latitude: -6,
		longitude: 71.5
	},
	{
		iso_country_code_uuid: "019b8372-378a-7eb6-9a71-97235ca8c76f",
		country: "Brunei Darussalam",
		alpha2: "BN",
		alpha3: "BRN",
		numeric: 96,
		latitude: 4.5,
		longitude: 114.6667
	},
	{
		iso_country_code_uuid: "019b8372-378a-7ff4-b8ca-2dc5fbc45953",
		country: "Bulgaria",
		alpha2: "BG",
		alpha3: "BGR",
		numeric: 100,
		latitude: 43,
		longitude: 25
	},
	{
		iso_country_code_uuid: "019b8372-378b-7131-a821-b4b865bffca5",
		country: "Burkina Faso",
		alpha2: "BF",
		alpha3: "BFA",
		numeric: 854,
		latitude: 13,
		longitude: -2
	},
	{
		iso_country_code_uuid: "019b8372-378b-7265-83b8-d5294fef3df8",
		country: "Burundi",
		alpha2: "BI",
		alpha3: "BDI",
		numeric: 108,
		latitude: -3.5,
		longitude: 30
	},
	{
		iso_country_code_uuid: "019b8372-378b-739f-8b42-a4e6653c8c12",
		country: "Cabo Verde",
		alpha2: "CV",
		alpha3: "CPV",
		numeric: 132,
		latitude: 16,
		longitude: -24
	},
	{
		iso_country_code_uuid: "019b8372-378b-74d1-be89-136c6980944a",
		country: "Cambodia",
		alpha2: "KH",
		alpha3: "KHM",
		numeric: 116,
		latitude: 13,
		longitude: 105
	},
	{
		iso_country_code_uuid: "019b8372-378b-7660-8bcb-b841d25b6709",
		country: "Cameroon",
		alpha2: "CM",
		alpha3: "CMR",
		numeric: 120,
		latitude: 6,
		longitude: 12
	},
	{
		iso_country_code_uuid: "019b8372-378b-7799-bc44-443bbb104bb4",
		country: "Canada",
		alpha2: "CA",
		alpha3: "CAN",
		numeric: 124,
		latitude: 60,
		longitude: -95
	},
	{
		iso_country_code_uuid: "019b8372-378b-78d1-b00f-7313e20ea271",
		country: "Cayman Islands (the)",
		alpha2: "KY",
		alpha3: "CYM",
		numeric: 136,
		latitude: 19.5,
		longitude: -80.5
	},
	{
		iso_country_code_uuid: "019b8372-378b-7a04-a922-1aebf9a98d4b",
		country: "Central African Republic (the)",
		alpha2: "CF",
		alpha3: "CAF",
		numeric: 140,
		latitude: 7,
		longitude: 21
	},
	{
		iso_country_code_uuid: "019b8372-378b-7b3b-a00e-a3932eb32e9d",
		country: "Chad",
		alpha2: "TD",
		alpha3: "TCD",
		numeric: 148,
		latitude: 15,
		longitude: 19
	},
	{
		iso_country_code_uuid: "019b8372-378b-7c6c-96d6-8b4f6e0d6726",
		country: "Chile",
		alpha2: "CL",
		alpha3: "CHL",
		numeric: 152,
		latitude: -30,
		longitude: -71
	},
	{
		iso_country_code_uuid: "019b8372-378b-7da0-a4a8-5db9285bd9f6",
		country: "China",
		alpha2: "CN",
		alpha3: "CHN",
		numeric: 156,
		latitude: 35,
		longitude: 105
	},
	{
		iso_country_code_uuid: "019b8372-378b-7ed5-b314-78aba57bf81a",
		country: "Christmas Island",
		alpha2: "CX",
		alpha3: "CXR",
		numeric: 162,
		latitude: -10.5,
		longitude: 105.6667
	},
	{
		iso_country_code_uuid: "019b8372-378c-700f-9a55-986e7491b4d5",
		country: "Cocos (Keeling) Islands (the)",
		alpha2: "CC",
		alpha3: "CCK",
		numeric: 166,
		latitude: -12.5,
		longitude: 96.8333
	},
	{
		iso_country_code_uuid: "019b8372-378c-7146-bf3c-f01e790f9f95",
		country: "Colombia",
		alpha2: "CO",
		alpha3: "COL",
		numeric: 170,
		latitude: 4,
		longitude: -72
	},
	{
		iso_country_code_uuid: "019b8372-378c-727a-83ad-a161982419dd",
		country: "Comoros (the)",
		alpha2: "KM",
		alpha3: "COM",
		numeric: 174,
		latitude: -12.1667,
		longitude: 44.25
	},
	{
		iso_country_code_uuid: "019b8372-378c-73ac-be2b-9438147ca548",
		country: "Congo (the Democratic Republic of the)",
		alpha2: "CD",
		alpha3: "COD",
		numeric: 180,
		latitude: 0,
		longitude: 25
	},
	{
		iso_country_code_uuid: "019b8372-378c-75ec-80a9-138e9074de05",
		country: "Congo (the)",
		alpha2: "CG",
		alpha3: "COG",
		numeric: 178,
		latitude: -1,
		longitude: 15
	},
	{
		iso_country_code_uuid: "019b8372-378c-77b8-9e06-b4ff2150766b",
		country: "Cook Islands (the)",
		alpha2: "CK",
		alpha3: "COK",
		numeric: 184,
		latitude: -21.2333,
		longitude: -159.7667
	},
	{
		iso_country_code_uuid: "019b8372-378c-7985-8bf3-58647e346b02",
		country: "Costa Rica",
		alpha2: "CR",
		alpha3: "CRI",
		numeric: 188,
		latitude: 10,
		longitude: -84
	},
	{
		iso_country_code_uuid: "019b8372-378c-7ad8-99fc-fcd5d9cbb256",
		country: "Croatia",
		alpha2: "HR",
		alpha3: "HRV",
		numeric: 191,
		latitude: 45.1667,
		longitude: 15.5
	},
	{
		iso_country_code_uuid: "019b8372-378c-7c25-aff8-ef983b3aceac",
		country: "Cuba",
		alpha2: "CU",
		alpha3: "CUB",
		numeric: 192,
		latitude: 21.5,
		longitude: -80
	},
	{
		iso_country_code_uuid: "019b8372-378c-7d6d-9685-b7068ff50c1f",
		country: "Curaçao",
		alpha2: "CW",
		alpha3: "CUW",
		numeric: 531,
		latitude: 12.18611,
		longitude: -68.98944
	},
	{
		iso_country_code_uuid: "019b8372-378c-7ead-b1b6-b26252f8c9ab",
		country: "Cyprus",
		alpha2: "CY",
		alpha3: "CYP",
		numeric: 196,
		latitude: 35,
		longitude: 33
	},
	{
		iso_country_code_uuid: "019b8372-378c-7fe8-8a7b-38bb8d804ac6",
		country: "Czechia",
		alpha2: "CZ",
		alpha3: "CZE",
		numeric: 203,
		latitude: 49.75,
		longitude: 15.5
	},
	{
		iso_country_code_uuid: "019b8372-378d-7126-b232-8a284dede649",
		country: "Côte d'Ivoire",
		alpha2: "CI",
		alpha3: "CIV",
		numeric: 384,
		latitude: 8,
		longitude: -5
	},
	{
		iso_country_code_uuid: "019b8372-378d-7261-b45b-94d9b91ff396",
		country: "Denmark",
		alpha2: "DK",
		alpha3: "DNK",
		numeric: 208,
		latitude: 56,
		longitude: 10
	},
	{
		iso_country_code_uuid: "019b8372-378d-7394-b72c-4cf9f93ace9e",
		country: "Djibouti",
		alpha2: "DJ",
		alpha3: "DJI",
		numeric: 262,
		latitude: 11.5,
		longitude: 43
	},
	{
		iso_country_code_uuid: "019b8372-378d-74a2-96b4-09429ed80bac",
		country: "Dominica",
		alpha2: "DM",
		alpha3: "DMA",
		numeric: 212,
		latitude: 15.4167,
		longitude: -61.3333
	},
	{
		iso_country_code_uuid: "019b8372-378d-7587-a1dc-42237fc745d5",
		country: "Dominican Republic (the)",
		alpha2: "DO",
		alpha3: "DOM",
		numeric: 214,
		latitude: 19,
		longitude: -70.6667
	},
	{
		iso_country_code_uuid: "019b8372-378d-766a-9b36-c7e888ff87a6",
		country: "Ecuador",
		alpha2: "EC",
		alpha3: "ECU",
		numeric: 218,
		latitude: -2,
		longitude: -77.5
	},
	{
		iso_country_code_uuid: "019b8372-378d-7749-a4d7-affb50d1a961",
		country: "Egypt",
		alpha2: "EG",
		alpha3: "EGY",
		numeric: 818,
		latitude: 27,
		longitude: 30
	},
	{
		iso_country_code_uuid: "019b8372-378d-782e-8376-05aa9a8a5c28",
		country: "El Salvador",
		alpha2: "SV",
		alpha3: "SLV",
		numeric: 222,
		latitude: 13.8333,
		longitude: -88.9167
	},
	{
		iso_country_code_uuid: "019b8372-378d-790c-9f56-d91e3dc84982",
		country: "Equatorial Guinea",
		alpha2: "GQ",
		alpha3: "GNQ",
		numeric: 226,
		latitude: 2,
		longitude: 10
	},
	{
		iso_country_code_uuid: "019b8372-378d-79f2-8115-b5c865dce52d",
		country: "Eritrea",
		alpha2: "ER",
		alpha3: "ERI",
		numeric: 232,
		latitude: 15,
		longitude: 39
	},
	{
		iso_country_code_uuid: "019b8372-378d-7ad5-9d51-8746e09584ae",
		country: "Estonia",
		alpha2: "EE",
		alpha3: "EST",
		numeric: 233,
		latitude: 59,
		longitude: 26
	},
	{
		iso_country_code_uuid: "019b8372-378d-7bb4-b908-e42e84f4a1aa",
		country: "Eswatini",
		alpha2: "SZ",
		alpha3: "SWZ",
		numeric: 748,
		latitude: -26.5,
		longitude: 31.5
	},
	{
		iso_country_code_uuid: "019b8372-378d-7c96-ab4e-79909c02bd40",
		country: "Ethiopia",
		alpha2: "ET",
		alpha3: "ETH",
		numeric: 231,
		latitude: 8,
		longitude: 38
	},
	{
		iso_country_code_uuid: "019b8372-378d-7d7f-8123-413e15a44894",
		country: "Falkland Islands (the) [Malvinas]",
		alpha2: "FK",
		alpha3: "FLK",
		numeric: 238,
		latitude: -51.75,
		longitude: -59
	},
	{
		iso_country_code_uuid: "019b8372-378d-7e5e-ac00-e15ba55ae3d1",
		country: "Faroe Islands (the)",
		alpha2: "FO",
		alpha3: "FRO",
		numeric: 234,
		latitude: 62,
		longitude: -7
	},
	{
		iso_country_code_uuid: "019b8372-378d-7f41-8b8b-adbbb063460f",
		country: "Fiji",
		alpha2: "FJ",
		alpha3: "FJI",
		numeric: 242,
		latitude: -18,
		longitude: 175
	},
	{
		iso_country_code_uuid: "019b8372-378e-7025-ba36-855e712a834a",
		country: "Finland",
		alpha2: "FI",
		alpha3: "FIN",
		numeric: 246,
		latitude: 64,
		longitude: 26
	},
	{
		iso_country_code_uuid: "019b8372-378e-7160-b9a5-39ddad1024ee",
		country: "France",
		alpha2: "FR",
		alpha3: "FRA",
		numeric: 250,
		latitude: 46,
		longitude: 2
	},
	{
		iso_country_code_uuid: "019b8372-378e-7246-8358-5cf0234de9f5",
		country: "French Guiana",
		alpha2: "GF",
		alpha3: "GUF",
		numeric: 254,
		latitude: 4,
		longitude: -53
	},
	{
		iso_country_code_uuid: "019b8372-378e-7327-a4af-2e1226485bd8",
		country: "French Polynesia",
		alpha2: "PF",
		alpha3: "PYF",
		numeric: 258,
		latitude: -15,
		longitude: -140
	},
	{
		iso_country_code_uuid: "019b8372-378e-740c-8c01-87038bdafd89",
		country: "French Southern Territories (the)",
		alpha2: "TF",
		alpha3: "ATF",
		numeric: 260,
		latitude: -43,
		longitude: 67
	},
	{
		iso_country_code_uuid: "019b8372-378e-74ee-abc2-00739cc82f09",
		country: "Gabon",
		alpha2: "GA",
		alpha3: "GAB",
		numeric: 266,
		latitude: -1,
		longitude: 11.75
	},
	{
		iso_country_code_uuid: "019b8372-378e-7604-9069-c1a20007fc80",
		country: "Gambia (the)",
		alpha2: "GM",
		alpha3: "GMB",
		numeric: 270,
		latitude: 13.4667,
		longitude: -16.5667
	},
	{
		iso_country_code_uuid: "019b8372-378e-777a-af48-5d320c8bbede",
		country: "Georgia",
		alpha2: "GE",
		alpha3: "GEO",
		numeric: 268,
		latitude: 42,
		longitude: 43.5
	},
	{
		iso_country_code_uuid: "019b8372-378e-785e-892d-0850bb3cd332",
		country: "Germany",
		alpha2: "DE",
		alpha3: "DEU",
		numeric: 276,
		latitude: 51,
		longitude: 9
	},
	{
		iso_country_code_uuid: "019b8372-378e-7942-93fa-9af1ccddda64",
		country: "Ghana",
		alpha2: "GH",
		alpha3: "GHA",
		numeric: 288,
		latitude: 8,
		longitude: -2
	},
	{
		iso_country_code_uuid: "019b8372-378e-7a25-940f-cf6a4a8e9cfc",
		country: "Gibraltar",
		alpha2: "GI",
		alpha3: "GIB",
		numeric: 292,
		latitude: 36.1833,
		longitude: -5.3667
	},
	{
		iso_country_code_uuid: "019b8372-378e-7b08-aeb2-0a2ebcfe1779",
		country: "Greece",
		alpha2: "GR",
		alpha3: "GRC",
		numeric: 300,
		latitude: 39,
		longitude: 22
	},
	{
		iso_country_code_uuid: "019b8372-378e-7beb-bb13-802703e52b3d",
		country: "Greenland",
		alpha2: "GL",
		alpha3: "GRL",
		numeric: 304,
		latitude: 72,
		longitude: -40
	},
	{
		iso_country_code_uuid: "019b8372-378e-7cd0-8eab-b957f965813f",
		country: "Grenada",
		alpha2: "GD",
		alpha3: "GRD",
		numeric: 308,
		latitude: 12.1167,
		longitude: -61.6667
	},
	{
		iso_country_code_uuid: "019b8372-378e-7db1-bf6d-dfa2a1760f54",
		country: "Guadeloupe",
		alpha2: "GP",
		alpha3: "GLP",
		numeric: 312,
		latitude: 16.25,
		longitude: -61.5833
	},
	{
		iso_country_code_uuid: "019b8372-378e-7e90-99c5-04bf0f16f670",
		country: "Guam",
		alpha2: "GU",
		alpha3: "GUM",
		numeric: 316,
		latitude: 13.4667,
		longitude: 144.7833
	},
	{
		iso_country_code_uuid: "019b8372-378e-7f95-99a6-d7fac687ab5f",
		country: "Guatemala",
		alpha2: "GT",
		alpha3: "GTM",
		numeric: 320,
		latitude: 15.5,
		longitude: -90.25
	},
	{
		iso_country_code_uuid: "019b8372-378f-7074-a275-743d57f0220f",
		country: "Guernsey",
		alpha2: "GG",
		alpha3: "GGY",
		numeric: 831,
		latitude: 49.46569,
		longitude: -2.58528
	},
	{
		iso_country_code_uuid: "019b8372-378f-715e-89fb-078863afbe63",
		country: "Guinea",
		alpha2: "GN",
		alpha3: "GIN",
		numeric: 324,
		latitude: 11,
		longitude: -10
	},
	{
		iso_country_code_uuid: "019b8372-378f-723d-a3f8-02f00b7f8e97",
		country: "Guinea-Bissau",
		alpha2: "GW",
		alpha3: "GNB",
		numeric: 624,
		latitude: 12,
		longitude: -15
	},
	{
		iso_country_code_uuid: "019b8372-378f-7321-85b4-5ac137c3f513",
		country: "Guyana",
		alpha2: "GY",
		alpha3: "GUY",
		numeric: 328,
		latitude: 5,
		longitude: -59
	},
	{
		iso_country_code_uuid: "019b8372-378f-7406-a9aa-4316ff0dc5e4",
		country: "Haiti",
		alpha2: "HT",
		alpha3: "HTI",
		numeric: 332,
		latitude: 19,
		longitude: -72.4167
	},
	{
		iso_country_code_uuid: "019b8372-378f-74eb-b157-477405f27880",
		country: "Heard Island and McDonald Islands",
		alpha2: "HM",
		alpha3: "HMD",
		numeric: 334,
		latitude: -53.1,
		longitude: 72.5167
	},
	{
		iso_country_code_uuid: "019b8372-378f-75cd-8d68-f4afe51b402b",
		country: "Holy See (the)",
		alpha2: "VA",
		alpha3: "VAT",
		numeric: 336,
		latitude: 41.9,
		longitude: 12.45
	},
	{
		iso_country_code_uuid: "019b8372-378f-76b1-a3f9-ee53b9b25ccf",
		country: "Honduras",
		alpha2: "HN",
		alpha3: "HND",
		numeric: 340,
		latitude: 15,
		longitude: -86.5
	},
	{
		iso_country_code_uuid: "019b8372-378f-7796-817b-70e5f49ff808",
		country: "Hong Kong",
		alpha2: "HK",
		alpha3: "HKG",
		numeric: 344,
		latitude: 22.25,
		longitude: 114.1667
	},
	{
		iso_country_code_uuid: "019b8372-378f-788a-a480-ba271fd2c21b",
		country: "Hungary",
		alpha2: "HU",
		alpha3: "HUN",
		numeric: 348,
		latitude: 47,
		longitude: 20
	},
	{
		iso_country_code_uuid: "019b8372-378f-7971-bc48-1dd90591f1ae",
		country: "Iceland",
		alpha2: "IS",
		alpha3: "ISL",
		numeric: 352,
		latitude: 65,
		longitude: -18
	},
	{
		iso_country_code_uuid: "019b8372-378f-7a56-aef8-dd924edfcffe",
		country: "India",
		alpha2: "IN",
		alpha3: "IND",
		numeric: 356,
		latitude: 20,
		longitude: 77
	},
	{
		iso_country_code_uuid: "019b8372-378f-7b34-9c32-bbeab802d0b2",
		country: "Indonesia",
		alpha2: "ID",
		alpha3: "IDN",
		numeric: 360,
		latitude: -5,
		longitude: 120
	},
	{
		iso_country_code_uuid: "019b8372-378f-7c19-a64f-ad3434b521a7",
		country: "Iran (Islamic Republic of)",
		alpha2: "IR",
		alpha3: "IRN",
		numeric: 364,
		latitude: 32,
		longitude: 53
	},
	{
		iso_country_code_uuid: "019b8372-378f-7cf8-8975-a38beb513cc8",
		country: "Iraq",
		alpha2: "IQ",
		alpha3: "IRQ",
		numeric: 368,
		latitude: 33,
		longitude: 44
	},
	{
		iso_country_code_uuid: "019b8372-378f-7ddf-bb57-acbf534a9ac7",
		country: "Ireland",
		alpha2: "IE",
		alpha3: "IRL",
		numeric: 372,
		latitude: 53,
		longitude: -8
	},
	{
		iso_country_code_uuid: "019b8372-378f-7ec2-a1d7-5c93e8e58d22",
		country: "Isle of Man",
		alpha2: "IM",
		alpha3: "IMN",
		numeric: 833,
		latitude: 54.23611,
		longitude: -4.54806
	},
	{
		iso_country_code_uuid: "019b8372-378f-7fa0-973e-c79c60595e11",
		country: "Israel",
		alpha2: "IL",
		alpha3: "ISR",
		numeric: 376,
		latitude: 31.5,
		longitude: 34.75
	},
	{
		iso_country_code_uuid: "019b8372-3790-7082-933a-d2595db5fdb4",
		country: "Italy",
		alpha2: "IT",
		alpha3: "ITA",
		numeric: 380,
		latitude: 42.8333,
		longitude: 12.8333
	},
	{
		iso_country_code_uuid: "019b8372-3790-7167-ac03-03ea87516d7f",
		country: "Jamaica",
		alpha2: "JM",
		alpha3: "JAM",
		numeric: 388,
		latitude: 18.25,
		longitude: -77.5
	},
	{
		iso_country_code_uuid: "019b8372-3790-7244-8a1c-f64a074bab9d",
		country: "Japan",
		alpha2: "JP",
		alpha3: "JPN",
		numeric: 392,
		latitude: 36,
		longitude: 138
	},
	{
		iso_country_code_uuid: "019b8372-3790-732b-80ed-357bde6cd175",
		country: "Jersey",
		alpha2: "JE",
		alpha3: "JEY",
		numeric: 832,
		latitude: 49.21444,
		longitude: -2.13125
	},
	{
		iso_country_code_uuid: "019b8372-3790-7443-b7c6-bd13376b64e7",
		country: "Jordan",
		alpha2: "JO",
		alpha3: "JOR",
		numeric: 400,
		latitude: 31,
		longitude: 36
	},
	{
		iso_country_code_uuid: "019b8372-3790-7527-808d-9e1ebd8e0cb3",
		country: "Kazakhstan",
		alpha2: "KZ",
		alpha3: "KAZ",
		numeric: 398,
		latitude: 48,
		longitude: 68
	},
	{
		iso_country_code_uuid: "019b8372-3790-760e-a74c-a7231beafc76",
		country: "Kenya",
		alpha2: "KE",
		alpha3: "KEN",
		numeric: 404,
		latitude: 1,
		longitude: 38
	},
	{
		iso_country_code_uuid: "019b8372-3790-7e76-9931-2e14419c8519",
		country: "Kiribati",
		alpha2: "KI",
		alpha3: "KIR",
		numeric: 296,
		latitude: 1.4167,
		longitude: 173
	},
	{
		iso_country_code_uuid: "019b8372-3790-7f63-aa1c-30ef8d0ea49e",
		country: "Korea (the Democratic People's Republic of)",
		alpha2: "KP",
		alpha3: "PRK",
		numeric: 408,
		latitude: 40,
		longitude: 127
	},
	{
		iso_country_code_uuid: "019b8372-3791-704b-8636-8b011411a2a3",
		country: "Korea (the Republic of)",
		alpha2: "KR",
		alpha3: "KOR",
		numeric: 410,
		latitude: 37,
		longitude: 127.5
	},
	{
		iso_country_code_uuid: "019b8372-3791-7129-bda3-1142e04d27fc",
		country: "Kuwait",
		alpha2: "KW",
		alpha3: "KWT",
		numeric: 414,
		latitude: 29.3375,
		longitude: 47.6581
	},
	{
		iso_country_code_uuid: "019b8372-3791-720f-b153-2e55d8a23f14",
		country: "Kyrgyzstan",
		alpha2: "KG",
		alpha3: "KGZ",
		numeric: 417,
		latitude: 41,
		longitude: 75
	},
	{
		iso_country_code_uuid: "019b8372-3791-72f3-900e-5fe8f8baf5d8",
		country: "Lao People's Democratic Republic (the)",
		alpha2: "LA",
		alpha3: "LAO",
		numeric: 418,
		latitude: 18,
		longitude: 105
	},
	{
		iso_country_code_uuid: "019b8372-3791-73d4-99b5-3bb2966499b2",
		country: "Latvia",
		alpha2: "LV",
		alpha3: "LVA",
		numeric: 428,
		latitude: 57,
		longitude: 25
	},
	{
		iso_country_code_uuid: "019b8372-3791-74ba-a077-b1af46752beb",
		country: "Lebanon",
		alpha2: "LB",
		alpha3: "LBN",
		numeric: 422,
		latitude: 33.8333,
		longitude: 35.8333
	},
	{
		iso_country_code_uuid: "019b8372-3791-759a-a54a-e64752ee58a5",
		country: "Lesotho",
		alpha2: "LS",
		alpha3: "LSO",
		numeric: 426,
		latitude: -29.5,
		longitude: 28.5
	},
	{
		iso_country_code_uuid: "019b8372-3791-767a-b95d-bc7b0e41b049",
		country: "Liberia",
		alpha2: "LR",
		alpha3: "LBR",
		numeric: 430,
		latitude: 6.5,
		longitude: -9.5
	},
	{
		iso_country_code_uuid: "019b8372-3791-7760-aeb3-241f254508c7",
		country: "Libya",
		alpha2: "LY",
		alpha3: "LBY",
		numeric: 434,
		latitude: 25,
		longitude: 17
	},
	{
		iso_country_code_uuid: "019b8372-3791-7841-8112-b5af81d2eacd",
		country: "Liechtenstein",
		alpha2: "LI",
		alpha3: "LIE",
		numeric: 438,
		latitude: 47.1667,
		longitude: 9.5333
	},
	{
		iso_country_code_uuid: "019b8372-3791-7925-b9b6-81e4652776b9",
		country: "Lithuania",
		alpha2: "LT",
		alpha3: "LTU",
		numeric: 440,
		latitude: 56,
		longitude: 24
	},
	{
		iso_country_code_uuid: "019b8372-3791-7a0e-be67-cb99136148fe",
		country: "Luxembourg",
		alpha2: "LU",
		alpha3: "LUX",
		numeric: 442,
		latitude: 49.75,
		longitude: 6.1667
	},
	{
		iso_country_code_uuid: "019b8372-3791-7aef-a406-849cacd9dad8",
		country: "Macao",
		alpha2: "MO",
		alpha3: "MAC",
		numeric: 446,
		latitude: 22.1667,
		longitude: 113.55
	},
	{
		iso_country_code_uuid: "019b8372-3791-7bd0-a7bc-adb4d2e42b5a",
		country: "Madagascar",
		alpha2: "MG",
		alpha3: "MDG",
		numeric: 450,
		latitude: -20,
		longitude: 47
	},
	{
		iso_country_code_uuid: "019b8372-3791-7cb4-a85c-0b8b820539d5",
		country: "Malawi",
		alpha2: "MW",
		alpha3: "MWI",
		numeric: 454,
		latitude: -13.5,
		longitude: 34
	},
	{
		iso_country_code_uuid: "019b8372-3791-7d9b-8f4c-5f65efe8aed0",
		country: "Malaysia",
		alpha2: "MY",
		alpha3: "MYS",
		numeric: 458,
		latitude: 2.5,
		longitude: 112.5
	},
	{
		iso_country_code_uuid: "019b8372-3791-7e7f-bf8e-9b484d0b3afb",
		country: "Maldives",
		alpha2: "MV",
		alpha3: "MDV",
		numeric: 462,
		latitude: 3.25,
		longitude: 73
	},
	{
		iso_country_code_uuid: "019b8372-3791-7f61-a0ce-8692f642577f",
		country: "Mali",
		alpha2: "ML",
		alpha3: "MLI",
		numeric: 466,
		latitude: 17,
		longitude: -4
	},
	{
		iso_country_code_uuid: "019b8372-3792-7047-ac91-17f9365d3b5b",
		country: "Malta",
		alpha2: "MT",
		alpha3: "MLT",
		numeric: 470,
		latitude: 35.8333,
		longitude: 14.5833
	},
	{
		iso_country_code_uuid: "019b8372-3792-7127-8da5-e207b54d33fe",
		country: "Marshall Islands (the)",
		alpha2: "MH",
		alpha3: "MHL",
		numeric: 584,
		latitude: 9,
		longitude: 168
	},
	{
		iso_country_code_uuid: "019b8372-3792-720b-97da-3c87aeb698a7",
		country: "Martinique",
		alpha2: "MQ",
		alpha3: "MTQ",
		numeric: 474,
		latitude: 14.6667,
		longitude: -61
	},
	{
		iso_country_code_uuid: "019b8372-3792-72ee-88d6-6eedea20500d",
		country: "Mauritania",
		alpha2: "MR",
		alpha3: "MRT",
		numeric: 478,
		latitude: 20,
		longitude: -12
	},
	{
		iso_country_code_uuid: "019b8372-3792-73cf-ac14-55617a4a5b0b",
		country: "Mauritius",
		alpha2: "MU",
		alpha3: "MUS",
		numeric: 480,
		latitude: -20.2833,
		longitude: 57.55
	},
	{
		iso_country_code_uuid: "019b8372-3792-74b4-b407-e69208a3b2de",
		country: "Mayotte",
		alpha2: "YT",
		alpha3: "MYT",
		numeric: 175,
		latitude: -12.8333,
		longitude: 45.1667
	},
	{
		iso_country_code_uuid: "019b8372-3792-7594-8caa-f72dd59418c8",
		country: "Mexico",
		alpha2: "MX",
		alpha3: "MEX",
		numeric: 484,
		latitude: 23,
		longitude: -102
	},
	{
		iso_country_code_uuid: "019b8372-3792-7679-8d8f-10c092612e66",
		country: "Micronesia (Federated States of)",
		alpha2: "FM",
		alpha3: "FSM",
		numeric: 583,
		latitude: 6.9167,
		longitude: 158.25
	},
	{
		iso_country_code_uuid: "019b8372-3792-7760-9104-279b0b4e6a0b",
		country: "Moldova (the Republic of)",
		alpha2: "MD",
		alpha3: "MDA",
		numeric: 498,
		latitude: 47,
		longitude: 29
	},
	{
		iso_country_code_uuid: "019b8372-3792-7844-9765-2562cb346205",
		country: "Monaco",
		alpha2: "MC",
		alpha3: "MCO",
		numeric: 492,
		latitude: 43.7333,
		longitude: 7.4
	},
	{
		iso_country_code_uuid: "019b8372-3792-7927-87d5-c2a87866b2de",
		country: "Mongolia",
		alpha2: "MN",
		alpha3: "MNG",
		numeric: 496,
		latitude: 46,
		longitude: 105
	},
	{
		iso_country_code_uuid: "019b8372-3792-7a0a-b6a9-8a78d7566e6f",
		country: "Montenegro",
		alpha2: "ME",
		alpha3: "MNE",
		numeric: 499,
		latitude: 42,
		longitude: 19
	},
	{
		iso_country_code_uuid: "019b8372-3792-7aec-b467-db92fa518555",
		country: "Montserrat",
		alpha2: "MS",
		alpha3: "MSR",
		numeric: 500,
		latitude: 16.75,
		longitude: -62.2
	},
	{
		iso_country_code_uuid: "019b8372-3792-7bd3-a66c-51db55a361c9",
		country: "Morocco",
		alpha2: "MA",
		alpha3: "MAR",
		numeric: 504,
		latitude: 32,
		longitude: -5
	},
	{
		iso_country_code_uuid: "019b8372-3792-7cb9-9780-1e9b6cae7eaa",
		country: "Mozambique",
		alpha2: "MZ",
		alpha3: "MOZ",
		numeric: 508,
		latitude: -18.25,
		longitude: 35
	},
	{
		iso_country_code_uuid: "019b8372-3792-7dce-983e-96025992510b",
		country: "Myanmar",
		alpha2: "MM",
		alpha3: "MMR",
		numeric: 104,
		latitude: 22,
		longitude: 98
	},
	{
		iso_country_code_uuid: "019b8372-3792-7ece-8fb6-4e0cb77d3adc",
		country: "Namibia",
		alpha2: "NA",
		alpha3: "NAM",
		numeric: 516,
		latitude: -22,
		longitude: 17
	},
	{
		iso_country_code_uuid: "019b8372-3792-7fb5-8821-a9a9befe6b2c",
		country: "Nauru",
		alpha2: "NR",
		alpha3: "NRU",
		numeric: 520,
		latitude: -.5333,
		longitude: 166.9167
	},
	{
		iso_country_code_uuid: "019b8372-3793-7098-8696-a9613d863c42",
		country: "Nepal",
		alpha2: "NP",
		alpha3: "NPL",
		numeric: 524,
		latitude: 28,
		longitude: 84
	},
	{
		iso_country_code_uuid: "019b8372-3793-717c-aff4-278d278e45a6",
		country: "Netherlands (the)",
		alpha2: "NL",
		alpha3: "NLD",
		numeric: 528,
		latitude: 52.5,
		longitude: 5.75
	},
	{
		iso_country_code_uuid: "019b8372-3793-7262-bcc1-56caa8a44a87",
		country: "New Caledonia",
		alpha2: "NC",
		alpha3: "NCL",
		numeric: 540,
		latitude: -21.5,
		longitude: 165.5
	},
	{
		iso_country_code_uuid: "019b8372-3793-7343-a685-2d02887f1314",
		country: "New Zealand",
		alpha2: "NZ",
		alpha3: "NZL",
		numeric: 554,
		latitude: -41,
		longitude: 174
	},
	{
		iso_country_code_uuid: "019b8372-3793-742c-b5c7-b284a7f37f06",
		country: "Nicaragua",
		alpha2: "NI",
		alpha3: "NIC",
		numeric: 558,
		latitude: 13,
		longitude: -85
	},
	{
		iso_country_code_uuid: "019b8372-3793-750c-8964-aaeba5d4ae8f",
		country: "Niger (the)",
		alpha2: "NE",
		alpha3: "NER",
		numeric: 562,
		latitude: 16,
		longitude: 8
	},
	{
		iso_country_code_uuid: "019b8372-3793-75ed-a3e3-2ca22467745a",
		country: "Nigeria",
		alpha2: "NG",
		alpha3: "NGA",
		numeric: 566,
		latitude: 10,
		longitude: 8
	},
	{
		iso_country_code_uuid: "019b8372-3793-76d0-b87d-b5812040f9c7",
		country: "Niue",
		alpha2: "NU",
		alpha3: "NIU",
		numeric: 570,
		latitude: -19.0333,
		longitude: -169.8667
	},
	{
		iso_country_code_uuid: "019b8372-3793-77b6-b078-23d763124f5c",
		country: "Norfolk Island",
		alpha2: "NF",
		alpha3: "NFK",
		numeric: 574,
		latitude: -29.0333,
		longitude: 167.95
	},
	{
		iso_country_code_uuid: "019b8372-3793-7899-8c5b-ada9cde3d473",
		country: "Northern Mariana Islands (the)",
		alpha2: "MP",
		alpha3: "MNP",
		numeric: 580,
		latitude: 15.2,
		longitude: 145.75
	},
	{
		iso_country_code_uuid: "019b8372-3793-797d-8825-1ed2d86068d5",
		country: "Norway",
		alpha2: "NO",
		alpha3: "NOR",
		numeric: 578,
		latitude: 62,
		longitude: 10
	},
	{
		iso_country_code_uuid: "019b8372-3793-7a63-bdfb-bb24613f1ae7",
		country: "Oman",
		alpha2: "OM",
		alpha3: "OMN",
		numeric: 512,
		latitude: 21,
		longitude: 57
	},
	{
		iso_country_code_uuid: "019b8372-3793-7b42-a7cc-651c177c0c5c",
		country: "Pakistan",
		alpha2: "PK",
		alpha3: "PAK",
		numeric: 586,
		latitude: 30,
		longitude: 70
	},
	{
		iso_country_code_uuid: "019b8372-3793-7c24-9391-82770febdbe0",
		country: "Palau",
		alpha2: "PW",
		alpha3: "PLW",
		numeric: 585,
		latitude: 7.5,
		longitude: 134.5
	},
	{
		iso_country_code_uuid: "019b8372-3793-7d06-a7a8-c2b3daa4ba30",
		country: "Palestine, State of",
		alpha2: "PS",
		alpha3: "PSE",
		numeric: 275,
		latitude: 32,
		longitude: 35.25
	},
	{
		iso_country_code_uuid: "019b8372-3793-7de8-803c-2c99a06995e7",
		country: "Panama",
		alpha2: "PA",
		alpha3: "PAN",
		numeric: 591,
		latitude: 9,
		longitude: -80
	},
	{
		iso_country_code_uuid: "019b8372-3793-7ece-a385-d3faac9f6d44",
		country: "Papua New Guinea",
		alpha2: "PG",
		alpha3: "PNG",
		numeric: 598,
		latitude: -6,
		longitude: 147
	},
	{
		iso_country_code_uuid: "019b8372-3793-7fb0-94aa-102518e94529",
		country: "Paraguay",
		alpha2: "PY",
		alpha3: "PRY",
		numeric: 600,
		latitude: -23,
		longitude: -58
	},
	{
		iso_country_code_uuid: "019b8372-3794-708d-a930-c4abbb83a703",
		country: "Peru",
		alpha2: "PE",
		alpha3: "PER",
		numeric: 604,
		latitude: -10,
		longitude: -76
	},
	{
		iso_country_code_uuid: "019b8372-3794-7176-9ee7-1cf34fa2c277",
		country: "Philippines (the)",
		alpha2: "PH",
		alpha3: "PHL",
		numeric: 608,
		latitude: 13,
		longitude: 122
	},
	{
		iso_country_code_uuid: "019b8372-3794-7257-8247-7d7ae8d1f313",
		country: "Pitcairn",
		alpha2: "PN",
		alpha3: "PCN",
		numeric: 612,
		latitude: -25.0667,
		longitude: -130.1
	},
	{
		iso_country_code_uuid: "019b8372-3794-7339-9348-d6abac1d2c79",
		country: "Poland",
		alpha2: "PL",
		alpha3: "POL",
		numeric: 616,
		latitude: 52,
		longitude: 20
	},
	{
		iso_country_code_uuid: "019b8372-3794-741c-ba1f-6250a73ce278",
		country: "Portugal",
		alpha2: "PT",
		alpha3: "PRT",
		numeric: 620,
		latitude: 39.5,
		longitude: -8
	},
	{
		iso_country_code_uuid: "019b8372-3794-7500-8c82-04f824069d1c",
		country: "Puerto Rico",
		alpha2: "PR",
		alpha3: "PRI",
		numeric: 630,
		latitude: 18.25,
		longitude: -66.5
	},
	{
		iso_country_code_uuid: "019b8372-3794-75e2-a2cd-fcbd5e1d5e43",
		country: "Qatar",
		alpha2: "QA",
		alpha3: "QAT",
		numeric: 634,
		latitude: 25.5,
		longitude: 51.25
	},
	{
		iso_country_code_uuid: "019b8372-3794-76c4-9dd5-aa720711606e",
		country: "Republic of North Macedonia",
		alpha2: "MK",
		alpha3: "MKD",
		numeric: 807,
		latitude: 41.8333,
		longitude: 22
	},
	{
		iso_country_code_uuid: "019b8372-3794-77a9-891a-b15df308d02b",
		country: "Romania",
		alpha2: "RO",
		alpha3: "ROU",
		numeric: 642,
		latitude: 46,
		longitude: 25
	},
	{
		iso_country_code_uuid: "019b8372-3794-7888-b982-fbae4fbba541",
		country: "Russian Federation (the)",
		alpha2: "RU",
		alpha3: "RUS",
		numeric: 643,
		latitude: 60,
		longitude: 100
	},
	{
		iso_country_code_uuid: "019b8372-3794-7973-87f9-881530e1e645",
		country: "Rwanda",
		alpha2: "RW",
		alpha3: "RWA",
		numeric: 646,
		latitude: -2,
		longitude: 30
	},
	{
		iso_country_code_uuid: "019b8372-3794-7a57-8431-255336348edb",
		country: "Réunion",
		alpha2: "RE",
		alpha3: "REU",
		numeric: 638,
		latitude: -21.1,
		longitude: 55.6
	},
	{
		iso_country_code_uuid: "019b8372-3794-7b3a-8df1-c119c3618b42",
		country: "Saint Barthélemy",
		alpha2: "BL",
		alpha3: "BLM",
		numeric: 652,
		latitude: 17.9,
		longitude: -62.8333
	},
	{
		iso_country_code_uuid: "019b8372-3794-7c22-b56d-c7102fffa5bc",
		country: "Saint Helena, Ascension and Tristan da Cunha",
		alpha2: "SH",
		alpha3: "SHN",
		numeric: 654,
		latitude: -15.9333,
		longitude: -5.7
	},
	{
		iso_country_code_uuid: "019b8372-3794-7d03-9619-f4e780f91c7b",
		country: "Saint Kitts and Nevis",
		alpha2: "KN",
		alpha3: "KNA",
		numeric: 659,
		latitude: 17.3333,
		longitude: -62.75
	},
	{
		iso_country_code_uuid: "019b8372-3794-7de5-ad35-945b1116d88d",
		country: "Saint Lucia",
		alpha2: "LC",
		alpha3: "LCA",
		numeric: 662,
		latitude: 13.8833,
		longitude: -61.1333
	},
	{
		iso_country_code_uuid: "019b8372-3794-7ece-9a43-cdb76f31f7e9",
		country: "Saint Martin (French part)",
		alpha2: "MF",
		alpha3: "MAF",
		numeric: 663,
		latitude: 18.0825,
		longitude: -63.05199
	},
	{
		iso_country_code_uuid: "019b8372-3794-7fe3-9157-d2409f5686c3",
		country: "Saint Pierre and Miquelon",
		alpha2: "PM",
		alpha3: "SPM",
		numeric: 666,
		latitude: 46.8333,
		longitude: -56.3333
	},
	{
		iso_country_code_uuid: "019b8372-3795-70cc-9a79-aedb28092df2",
		country: "Saint Vincent and the Grenadines",
		alpha2: "VC",
		alpha3: "VCT",
		numeric: 670,
		latitude: 13.25,
		longitude: -61.2
	},
	{
		iso_country_code_uuid: "019b8372-3795-71b2-9ea9-8306a385dfdf",
		country: "Samoa",
		alpha2: "WS",
		alpha3: "WSM",
		numeric: 882,
		latitude: -13.5833,
		longitude: -172.3333
	},
	{
		iso_country_code_uuid: "019b8372-3795-728a-a446-dd1d379310f9",
		country: "San Marino",
		alpha2: "SM",
		alpha3: "SMR",
		numeric: 674,
		latitude: 43.7667,
		longitude: 12.4167
	},
	{
		iso_country_code_uuid: "019b8372-3795-7338-8b63-995f9fc81116",
		country: "Sao Tome and Principe",
		alpha2: "ST",
		alpha3: "STP",
		numeric: 678,
		latitude: 1,
		longitude: 7
	},
	{
		iso_country_code_uuid: "019b8372-3795-73ea-ba92-e0dcdb0d85ef",
		country: "Saudi Arabia",
		alpha2: "SA",
		alpha3: "SAU",
		numeric: 682,
		latitude: 25,
		longitude: 45
	},
	{
		iso_country_code_uuid: "019b8372-3795-749c-8450-f195f3bdc60e",
		country: "Senegal",
		alpha2: "SN",
		alpha3: "SEN",
		numeric: 686,
		latitude: 14,
		longitude: -14
	},
	{
		iso_country_code_uuid: "019b8372-3795-754e-823f-8ad090ac6f95",
		country: "Serbia",
		alpha2: "RS",
		alpha3: "SRB",
		numeric: 688,
		latitude: 44,
		longitude: 21
	},
	{
		iso_country_code_uuid: "019b8372-3795-7607-83fd-fda9e0390ee1",
		country: "Seychelles",
		alpha2: "SC",
		alpha3: "SYC",
		numeric: 690,
		latitude: -4.5833,
		longitude: 55.6667
	},
	{
		iso_country_code_uuid: "019b8372-3795-76ba-ba47-c87f1efd4b2a",
		country: "Sierra Leone",
		alpha2: "SL",
		alpha3: "SLE",
		numeric: 694,
		latitude: 8.5,
		longitude: -11.5
	},
	{
		iso_country_code_uuid: "019b8372-3795-776e-9943-953c5eb4f39b",
		country: "Singapore",
		alpha2: "SG",
		alpha3: "SGP",
		numeric: 702,
		latitude: 1.3667,
		longitude: 103.8
	},
	{
		iso_country_code_uuid: "019b8372-3795-781d-83a6-ff85f077faae",
		country: "Sint Maarten (Dutch part)",
		alpha2: "SX",
		alpha3: "SXM",
		numeric: 534,
		latitude: 18.0425,
		longitude: -63.0548
	},
	{
		iso_country_code_uuid: "019b8372-3795-78d3-b3c1-6d117597131c",
		country: "Slovakia",
		alpha2: "SK",
		alpha3: "SVK",
		numeric: 703,
		latitude: 48.6667,
		longitude: 19.5
	},
	{
		iso_country_code_uuid: "019b8372-3795-7985-bcf7-5fe535f39beb",
		country: "Slovenia",
		alpha2: "SI",
		alpha3: "SVN",
		numeric: 705,
		latitude: 46,
		longitude: 15
	},
	{
		iso_country_code_uuid: "019b8372-3795-7a35-abd4-adfd444dd75f",
		country: "Solomon Islands",
		alpha2: "SB",
		alpha3: "SLB",
		numeric: 90,
		latitude: -8,
		longitude: 159
	},
	{
		iso_country_code_uuid: "019b8372-3795-7aeb-adad-d9d19bd4f223",
		country: "Somalia",
		alpha2: "SO",
		alpha3: "SOM",
		numeric: 706,
		latitude: 10,
		longitude: 49
	},
	{
		iso_country_code_uuid: "019b8372-3795-7b98-a1dd-a6c84d99a73b",
		country: "South Africa",
		alpha2: "ZA",
		alpha3: "ZAF",
		numeric: 710,
		latitude: -29,
		longitude: 24
	},
	{
		iso_country_code_uuid: "019b8372-3795-7c4d-835a-368f20051c2a",
		country: "South Georgia and the South Sandwich Islands",
		alpha2: "GS",
		alpha3: "SGS",
		numeric: 239,
		latitude: -54.5,
		longitude: -37
	},
	{
		iso_country_code_uuid: "019b8372-3795-7d00-99c1-cb9edf6cc666",
		country: "South Sudan",
		alpha2: "SS",
		alpha3: "SSD",
		numeric: 728,
		latitude: 8,
		longitude: 30
	},
	{
		iso_country_code_uuid: "019b8372-3795-7db1-94f6-d38c63da7ff9",
		country: "Spain",
		alpha2: "ES",
		alpha3: "ESP",
		numeric: 724,
		latitude: 40,
		longitude: -4
	},
	{
		iso_country_code_uuid: "019b8372-3795-7e66-ba64-c4e172d2c34a",
		country: "Sri Lanka",
		alpha2: "LK",
		alpha3: "LKA",
		numeric: 144,
		latitude: 7,
		longitude: 81
	},
	{
		iso_country_code_uuid: "019b8372-3795-7f19-8373-4a97148acee5",
		country: "Sudan (the)",
		alpha2: "SD",
		alpha3: "SDN",
		numeric: 729,
		latitude: 15,
		longitude: 30
	},
	{
		iso_country_code_uuid: "019b8372-3795-7fca-96bc-b8f016ad02dc",
		country: "Suriname",
		alpha2: "SR",
		alpha3: "SUR",
		numeric: 740,
		latitude: 4,
		longitude: -56
	},
	{
		iso_country_code_uuid: "019b8372-3796-7079-9e2d-09f7f637384e",
		country: "Svalbard and Jan Mayen",
		alpha2: "SJ",
		alpha3: "SJM",
		numeric: 744,
		latitude: 78,
		longitude: 20
	},
	{
		iso_country_code_uuid: "019b8372-3796-712c-8b5f-66d9266e21d1",
		country: "Sweden",
		alpha2: "SE",
		alpha3: "SWE",
		numeric: 752,
		latitude: 62,
		longitude: 15
	},
	{
		iso_country_code_uuid: "019b8372-3796-71e2-90f4-4f968b64f2cd",
		country: "Switzerland",
		alpha2: "CH",
		alpha3: "CHE",
		numeric: 756,
		latitude: 47,
		longitude: 8
	},
	{
		iso_country_code_uuid: "019b8372-3796-7290-bb26-a5f604f47936",
		country: "Syrian Arab Republic",
		alpha2: "SY",
		alpha3: "SYR",
		numeric: 760,
		latitude: 35,
		longitude: 38
	},
	{
		iso_country_code_uuid: "019b8372-3796-7344-9ebd-0f77053a47fa",
		country: "Taiwan (Province of China)",
		alpha2: "TW",
		alpha3: "TWN",
		numeric: 158,
		latitude: 23.5,
		longitude: 121
	},
	{
		iso_country_code_uuid: "019b8372-3796-73f5-a218-64edaaeefb56",
		country: "Tajikistan",
		alpha2: "TJ",
		alpha3: "TJK",
		numeric: 762,
		latitude: 39,
		longitude: 71
	},
	{
		iso_country_code_uuid: "019b8372-3796-74ad-9c02-c28081f8cb5e",
		country: "Tanzania, United Republic of",
		alpha2: "TZ",
		alpha3: "TZA",
		numeric: 834,
		latitude: -6,
		longitude: 35
	},
	{
		iso_country_code_uuid: "019b8372-3796-755c-9668-c39758c7e305",
		country: "Thailand",
		alpha2: "TH",
		alpha3: "THA",
		numeric: 764,
		latitude: 15,
		longitude: 100
	},
	{
		iso_country_code_uuid: "019b8372-3796-7610-afe5-757fff51259e",
		country: "Timor-Leste",
		alpha2: "TL",
		alpha3: "TLS",
		numeric: 626,
		latitude: -8.87422,
		longitude: 125.72754
	},
	{
		iso_country_code_uuid: "019b8372-3796-76c1-8851-3dedf6366bd1",
		country: "Togo",
		alpha2: "TG",
		alpha3: "TGO",
		numeric: 768,
		latitude: 8,
		longitude: 1.1667
	},
	{
		iso_country_code_uuid: "019b8372-3796-7772-9975-4dd30805e043",
		country: "Tokelau",
		alpha2: "TK",
		alpha3: "TKL",
		numeric: 772,
		latitude: -9,
		longitude: -172
	},
	{
		iso_country_code_uuid: "019b8372-3796-7823-85c6-a5f0d31e77b8",
		country: "Tonga",
		alpha2: "TO",
		alpha3: "TON",
		numeric: 776,
		latitude: -20,
		longitude: -175
	},
	{
		iso_country_code_uuid: "019b8372-3796-78d4-afc8-a52cfcc52d74",
		country: "Trinidad and Tobago",
		alpha2: "TT",
		alpha3: "TTO",
		numeric: 780,
		latitude: 11,
		longitude: -61
	},
	{
		iso_country_code_uuid: "019b8372-3796-7985-989f-bd37f602d8a5",
		country: "Tunisia",
		alpha2: "TN",
		alpha3: "TUN",
		numeric: 788,
		latitude: 34,
		longitude: 9
	},
	{
		iso_country_code_uuid: "019b8372-3796-7a6d-af14-ba50bbcd7bb5",
		country: "Turkey",
		alpha2: "TR",
		alpha3: "TUR",
		numeric: 792,
		latitude: 39,
		longitude: 35
	},
	{
		iso_country_code_uuid: "019b8372-3796-7bcc-9812-9020cac01303",
		country: "Turkmenistan",
		alpha2: "TM",
		alpha3: "TKM",
		numeric: 795,
		latitude: 40,
		longitude: 60
	},
	{
		iso_country_code_uuid: "019b8372-3796-7c84-b1ef-ced130e5d40c",
		country: "Turks and Caicos Islands (the)",
		alpha2: "TC",
		alpha3: "TCA",
		numeric: 796,
		latitude: 21.75,
		longitude: -71.5833
	},
	{
		iso_country_code_uuid: "019b8372-3796-7e3d-aff8-f6ae89c83f58",
		country: "Tuvalu",
		alpha2: "TV",
		alpha3: "TUV",
		numeric: 798,
		latitude: -8,
		longitude: 178
	},
	{
		iso_country_code_uuid: "019b8372-3796-7ef3-97ef-1bd6b8aaa6df",
		country: "Uganda",
		alpha2: "UG",
		alpha3: "UGA",
		numeric: 800,
		latitude: 1,
		longitude: 32
	},
	{
		iso_country_code_uuid: "019b8372-3796-7fa4-981b-18b8d040acdb",
		country: "Ukraine",
		alpha2: "UA",
		alpha3: "UKR",
		numeric: 804,
		latitude: 49,
		longitude: 32
	},
	{
		iso_country_code_uuid: "019b8372-3797-7056-9609-324fb6e53d4e",
		country: "United Arab Emirates (the)",
		alpha2: "AE",
		alpha3: "ARE",
		numeric: 784,
		latitude: 24,
		longitude: 54
	},
	{
		iso_country_code_uuid: "019b8372-3797-710a-afa9-1d1fa8d9909d",
		country: "United Kingdom of Great Britain and Northern Ireland (the)",
		alpha2: "GB",
		alpha3: "GBR",
		numeric: 826,
		latitude: 54,
		longitude: -2
	},
	{
		iso_country_code_uuid: "019b8372-3797-71bc-870a-b1a2eea224a7",
		country: "United States Minor Outlying Islands (the)",
		alpha2: "UM",
		alpha3: "UMI",
		numeric: 581,
		latitude: 19.2833,
		longitude: 166.6
	},
	{
		iso_country_code_uuid: "019b8372-3797-7273-b215-7a450837eb2e",
		country: "United States of America (the)",
		alpha2: "US",
		alpha3: "USA",
		numeric: 840,
		latitude: 38,
		longitude: -97
	},
	{
		iso_country_code_uuid: "019b8372-3797-7325-bffb-890338ecdf0e",
		country: "Uruguay",
		alpha2: "UY",
		alpha3: "URY",
		numeric: 858,
		latitude: -33,
		longitude: -56
	},
	{
		iso_country_code_uuid: "019b8372-3797-73d7-90b1-534470ac8bbe",
		country: "Uzbekistan",
		alpha2: "UZ",
		alpha3: "UZB",
		numeric: 860,
		latitude: 41,
		longitude: 64
	},
	{
		iso_country_code_uuid: "019b8372-3797-748a-82b7-8494f6676171",
		country: "Vanuatu",
		alpha2: "VU",
		alpha3: "VUT",
		numeric: 548,
		latitude: -16,
		longitude: 167
	},
	{
		iso_country_code_uuid: "019b8372-3797-753d-95a0-c71cf325b6d2",
		country: "Venezuela (Bolivarian Republic of)",
		alpha2: "VE",
		alpha3: "VEN",
		numeric: 862,
		latitude: 8,
		longitude: -66
	},
	{
		iso_country_code_uuid: "019b8372-3797-75ef-857c-dc6734264d01",
		country: "Viet Nam",
		alpha2: "VN",
		alpha3: "VNM",
		numeric: 704,
		latitude: 16,
		longitude: 106
	},
	{
		iso_country_code_uuid: "019b8372-3797-76a2-8bb5-3086076307ac",
		country: "Virgin Islands (British)",
		alpha2: "VG",
		alpha3: "VGB",
		numeric: 92,
		latitude: 18.5,
		longitude: -64.5
	},
	{
		iso_country_code_uuid: "019b8372-3797-7750-a8b3-5170180675f8",
		country: "Virgin Islands (U.S.)",
		alpha2: "VI",
		alpha3: "VIR",
		numeric: 850,
		latitude: 18.3333,
		longitude: -64.8333
	},
	{
		iso_country_code_uuid: "019b8372-3797-7808-860c-4704bacb99c9",
		country: "Wallis and Futuna",
		alpha2: "WF",
		alpha3: "WLF",
		numeric: 876,
		latitude: -13.3,
		longitude: -176.2
	},
	{
		iso_country_code_uuid: "019b8372-3797-78ed-9c31-0148b97eda2c",
		country: "Western Sahara",
		alpha2: "EH",
		alpha3: "ESH",
		numeric: 732,
		latitude: 24.5,
		longitude: -13
	},
	{
		iso_country_code_uuid: "019b8372-3797-79a3-a8a3-0d91a9e7658d",
		country: "Yemen",
		alpha2: "YE",
		alpha3: "YEM",
		numeric: 887,
		latitude: 15,
		longitude: 48
	},
	{
		iso_country_code_uuid: "019b8372-3797-7a54-b3fd-19b95606cc1f",
		country: "Zambia",
		alpha2: "ZM",
		alpha3: "ZMB",
		numeric: 894,
		latitude: -15,
		longitude: 30
	},
	{
		iso_country_code_uuid: "019b8372-3797-7b05-a890-19341efbabfd",
		country: "Zimbabwe",
		alpha2: "ZW",
		alpha3: "ZWE",
		numeric: 716,
		latitude: -20,
		longitude: 30
	},
	{
		iso_country_code_uuid: "019b8372-3797-7c3d-bf3f-d7c66345aa8a",
		country: "Åland Islands",
		alpha2: "AX",
		alpha3: "ALA",
		numeric: 248,
		latitude: 60.25072,
		longitude: 20.37415
	}
], Ar = kr.map((e) => ({
	label: `${e.country} - ${e.alpha2} - ${e.alpha3}`,
	value: e.iso_country_code_uuid
})), jr = [
	{
		iso_currency_code_uuid: "019b8378-2486-74fe-9dd8-389a3893ad51",
		currency: "Afghani",
		code: "AFN",
		number: 971
	},
	{
		iso_currency_code_uuid: "019b8378-2486-7ee7-b77a-f4d1d5c2649a",
		currency: "Lek",
		code: "ALL",
		number: 8
	},
	{
		iso_currency_code_uuid: "019b8378-2486-7f86-b505-87f7d2d61e80",
		currency: "Algerian Dinar",
		code: "DZD",
		number: 12
	},
	{
		iso_currency_code_uuid: "019b8378-2487-700f-a1e5-5637a22f4356",
		currency: "US Dollar",
		code: "USD",
		number: 840
	},
	{
		iso_currency_code_uuid: "019b8378-2487-7088-9af1-2f97908f147e",
		currency: "Euro",
		code: "EUR",
		number: 978
	},
	{
		iso_currency_code_uuid: "019b8378-2487-710e-b455-49d8fe4f7251",
		currency: "Kwanza",
		code: "AOA",
		number: 973
	},
	{
		iso_currency_code_uuid: "019b8378-2487-718f-a0fb-8b15b3865d5e",
		currency: "East Caribbean Dollar",
		code: "XCD",
		number: 951
	},
	{
		iso_currency_code_uuid: "019b8378-2487-720e-b3e4-21f15d996205",
		currency: "Argentine Peso",
		code: "ARS",
		number: 32
	},
	{
		iso_currency_code_uuid: "019b8378-2487-728a-bd14-34d7ae038e7e",
		currency: "Armenian Dram",
		code: "AMD",
		number: 51
	},
	{
		iso_currency_code_uuid: "019b8378-2487-730b-bc0a-def7bd788bc7",
		currency: "Aruban Florin",
		code: "AWG",
		number: 533
	},
	{
		iso_currency_code_uuid: "019b8378-2487-7385-a0f8-2dda7d2d1d02",
		currency: "Australian Dollar",
		code: "AUD",
		number: 36
	},
	{
		iso_currency_code_uuid: "019b8378-2487-7407-9191-82362dde2914",
		currency: "Azerbaijanian Manat",
		code: "AZN",
		number: 944
	},
	{
		iso_currency_code_uuid: "019b8378-2487-7482-a7f2-1fd0dffa1915",
		currency: "Bahamian Dollar",
		code: "BSD",
		number: 44
	},
	{
		iso_currency_code_uuid: "019b8378-2487-7500-ab00-276dda0418d0",
		currency: "Bahraini Dinar",
		code: "BHD",
		number: 48
	},
	{
		iso_currency_code_uuid: "019b8378-2487-7581-b80c-9e4a0293be1d",
		currency: "Taka",
		code: "BDT",
		number: 50
	},
	{
		iso_currency_code_uuid: "019b8378-2487-7640-b4b7-b7dc4c34d70e",
		currency: "Barbados Dollar",
		code: "BBD",
		number: 52
	},
	{
		iso_currency_code_uuid: "019b8378-2487-76c6-aa7c-e88c249a0550",
		currency: "Belarussian Ruble",
		code: "BYN",
		number: 933
	},
	{
		iso_currency_code_uuid: "019b8378-2487-7742-a061-752dd8dd7f3f",
		currency: "Belize Dollar",
		code: "BZD",
		number: 84
	},
	{
		iso_currency_code_uuid: "019b8378-2487-77d4-bc24-44bb8d1007a7",
		currency: "CFA Franc BCEAO",
		code: "XOF",
		number: 952
	},
	{
		iso_currency_code_uuid: "019b8378-2487-7885-bff6-fe11c027307f",
		currency: "Bermudian Dollar",
		code: "BMD",
		number: 60
	},
	{
		iso_currency_code_uuid: "019b8378-2487-790b-80ed-4c235463ac71",
		currency: "Ngultrum",
		code: "BTN",
		number: 64
	},
	{
		iso_currency_code_uuid: "019b8378-2487-7988-b3d1-fa7d6828485b",
		currency: "Indian Rupee",
		code: "INR",
		number: 356
	},
	{
		iso_currency_code_uuid: "019b8378-2487-7a09-a14b-0858e146f6a3",
		currency: "Boliviano",
		code: "BOB",
		number: 68
	},
	{
		iso_currency_code_uuid: "019b8378-2487-7a84-bcf1-ffccb1e8514d",
		currency: "Mvdol",
		code: "BOV",
		number: 984
	},
	{
		iso_currency_code_uuid: "019b8378-2487-7b8d-8979-3a98a8a44b23",
		currency: "Convertible Mark",
		code: "BAM",
		number: 977
	},
	{
		iso_currency_code_uuid: "019b8378-2487-7c14-8b56-d8dd7a444774",
		currency: "Pula",
		code: "BWP",
		number: 72
	},
	{
		iso_currency_code_uuid: "019b8378-2487-7c93-b8bb-04342d7af204",
		currency: "Norwegian Krone",
		code: "NOK",
		number: 578
	},
	{
		iso_currency_code_uuid: "019b8378-2487-7d10-84e5-2318560a6655",
		currency: "Brazilian Real",
		code: "BRL",
		number: 986
	},
	{
		iso_currency_code_uuid: "019b8378-2487-7d91-bd4d-536dea4d6afe",
		currency: "Brunei Dollar",
		code: "BND",
		number: 96
	},
	{
		iso_currency_code_uuid: "019b8378-2487-7e12-8e31-52ca4c25eff1",
		currency: "Bulgarian Lev",
		code: "BGN",
		number: 975
	},
	{
		iso_currency_code_uuid: "019b8378-2487-7e8e-b71c-c4c22fecc82f",
		currency: "Burundi Franc",
		code: "BIF",
		number: 108
	},
	{
		iso_currency_code_uuid: "019b8378-2487-7f0c-8d7b-c310e470a478",
		currency: "Cabo Verde Escudo",
		code: "CVE",
		number: 132
	},
	{
		iso_currency_code_uuid: "019b8378-2487-7f8e-a753-ee2011065a11",
		currency: "Riel",
		code: "KHR",
		number: 116
	},
	{
		iso_currency_code_uuid: "019b8378-2488-700c-8375-123fad3cd9f0",
		currency: "CFA Franc BEAC",
		code: "XAF",
		number: 950
	},
	{
		iso_currency_code_uuid: "019b8378-2488-708a-b958-c774a33d3dda",
		currency: "Canadian Dollar",
		code: "CAD",
		number: 124
	},
	{
		iso_currency_code_uuid: "019b8378-2488-710e-84bc-05503fb1e853",
		currency: "Cayman Islands Dollar",
		code: "KYD",
		number: 136
	},
	{
		iso_currency_code_uuid: "019b8378-2488-718f-b726-10a9b97e9a51",
		currency: "Unidad de Fomento",
		code: "CLF",
		number: 990
	},
	{
		iso_currency_code_uuid: "019b8378-2488-720c-8bc5-dc3f5808326d",
		currency: "Chilean Peso",
		code: "CLP",
		number: 152
	},
	{
		iso_currency_code_uuid: "019b8378-2488-7289-b8a4-7d3c7c89a3bb",
		currency: "Yuan Renminbi",
		code: "CNY",
		number: 156
	},
	{
		iso_currency_code_uuid: "019b8378-2488-7308-8684-4efd1f87e717",
		currency: "Colombian Peso",
		code: "COP",
		number: 170
	},
	{
		iso_currency_code_uuid: "019b8378-2488-738f-97bf-e8d11ad04847",
		currency: "Unidad de Valor Real",
		code: "COU",
		number: 970
	},
	{
		iso_currency_code_uuid: "019b8378-2488-740f-9dc3-b59d167d5183",
		currency: "Comoro Franc",
		code: "KMF",
		number: 174
	},
	{
		iso_currency_code_uuid: "019b8378-2488-7489-99bf-2f5042c812cb",
		currency: "Congolese Franc",
		code: "CDF",
		number: 976
	},
	{
		iso_currency_code_uuid: "019b8378-2488-750a-a866-38c13de22234",
		currency: "New Zealand Dollar",
		code: "NZD",
		number: 554
	},
	{
		iso_currency_code_uuid: "019b8378-2488-758a-aea7-6961c590782d",
		currency: "Costa Rican Colon",
		code: "CRC",
		number: 188
	},
	{
		iso_currency_code_uuid: "019b8378-2488-760b-a7dd-22faf3a1c91b",
		currency: "Peso Convertible",
		code: "CUC",
		number: 931
	},
	{
		iso_currency_code_uuid: "019b8378-2488-7686-bd14-612802eeee4b",
		currency: "Cuban Peso",
		code: "CUP",
		number: 192
	},
	{
		iso_currency_code_uuid: "019b8378-2488-7705-b40e-e3466675d930",
		currency: "Netherlands Antillean Guilder",
		code: "ANG",
		number: 532
	},
	{
		iso_currency_code_uuid: "019b8378-2488-7785-9772-2678dfd768fc",
		currency: "Czech Koruna",
		code: "CZK",
		number: 203
	},
	{
		iso_currency_code_uuid: "019b8378-2488-7805-81e7-a11e4427bcc5",
		currency: "Danish Krone",
		code: "DKK",
		number: 208
	},
	{
		iso_currency_code_uuid: "019b8378-2488-7883-82e8-ad21bfa65934",
		currency: "Djibouti Franc",
		code: "DJF",
		number: 262
	},
	{
		iso_currency_code_uuid: "019b8378-2488-7901-ad91-bb54b60cf0f9",
		currency: "Dominican Peso",
		code: "DOP",
		number: 214
	},
	{
		iso_currency_code_uuid: "019b8378-2488-7980-90fd-d77a41a61031",
		currency: "Egyptian Pound",
		code: "EGP",
		number: 818
	},
	{
		iso_currency_code_uuid: "019b8378-2488-7a02-8573-fb350df82edd",
		currency: "El Salvador Colon",
		code: "SVC",
		number: 222
	},
	{
		iso_currency_code_uuid: "019b8378-2488-7a7c-83c9-0e06e4482cbf",
		currency: "Nakfa",
		code: "ERN",
		number: 232
	},
	{
		iso_currency_code_uuid: "019b8378-2488-7afd-9e72-854b0c833b38",
		currency: "Ethiopian Birr",
		code: "ETB",
		number: 230
	},
	{
		iso_currency_code_uuid: "019b8378-2488-7b82-80db-ae8899de1046",
		currency: "Falkland Islands Pound",
		code: "FKP",
		number: 238
	},
	{
		iso_currency_code_uuid: "019b8378-2488-7c03-a6aa-8da62fd596b1",
		currency: "Fiji Dollar",
		code: "FJD",
		number: 242
	},
	{
		iso_currency_code_uuid: "019b8378-2488-7c7f-90ae-ab65fed0066d",
		currency: "CFP Franc",
		code: "XPF",
		number: 953
	},
	{
		iso_currency_code_uuid: "019b8378-2488-7cfd-9a32-05357c67cc6c",
		currency: "Dalasi",
		code: "GMD",
		number: 270
	},
	{
		iso_currency_code_uuid: "019b8378-2488-7d7d-a7df-10230a74fd75",
		currency: "Lari",
		code: "GEL",
		number: 981
	},
	{
		iso_currency_code_uuid: "019b8378-2488-7dfa-a616-c3bf97275b5b",
		currency: "Ghana Cedi",
		code: "GHS",
		number: 936
	},
	{
		iso_currency_code_uuid: "019b8378-2488-7e7a-a8c3-90e799536853",
		currency: "Gibraltar Pound",
		code: "GIP",
		number: 292
	},
	{
		iso_currency_code_uuid: "019b8378-2488-7efc-ba5e-908d376de756",
		currency: "Quetzal",
		code: "GTQ",
		number: 320
	},
	{
		iso_currency_code_uuid: "019b8378-2488-7f7f-9f81-9638b9fe811f",
		currency: "Pound Sterling",
		code: "GBP",
		number: 826
	},
	{
		iso_currency_code_uuid: "019b8378-2488-7ff9-8170-787a1e23a7fe",
		currency: "Guinea Franc",
		code: "GNF",
		number: 324
	},
	{
		iso_currency_code_uuid: "019b8378-2489-707a-ad03-418b258d0276",
		currency: "Guyana Dollar",
		code: "GYD",
		number: 328
	},
	{
		iso_currency_code_uuid: "019b8378-2489-70fb-92f0-71bff2a80bb8",
		currency: "Gourde",
		code: "HTG",
		number: 332
	},
	{
		iso_currency_code_uuid: "019b8378-2489-717f-b6bd-9e951cdfc5e2",
		currency: "Lempira",
		code: "HNL",
		number: 340
	},
	{
		iso_currency_code_uuid: "019b8378-2489-71fa-bb86-de80583ebee4",
		currency: "Hong Kong Dollar",
		code: "HKD",
		number: 344
	},
	{
		iso_currency_code_uuid: "019b8378-2489-72b5-9f7c-120fea2f62ab",
		currency: "Forint",
		code: "HUF",
		number: 348
	},
	{
		iso_currency_code_uuid: "019b8378-2489-7333-9263-b73707bfe365",
		currency: "Iceland Krona",
		code: "ISK",
		number: 352
	},
	{
		iso_currency_code_uuid: "019b8378-2489-73b6-8d2a-e9a0702b5157",
		currency: "Rupiah",
		code: "IDR",
		number: 360
	},
	{
		iso_currency_code_uuid: "019b8378-2489-7434-b0c0-a33295d40728",
		currency: "SDR (Special Drawing Right)",
		code: "XDR",
		number: 960
	},
	{
		iso_currency_code_uuid: "019b8378-2489-74b7-9eb8-884cbf3c8ee0",
		currency: "Iranian Rial",
		code: "IRR",
		number: 364
	},
	{
		iso_currency_code_uuid: "019b8378-2489-7530-b017-9e3d28832cc4",
		currency: "Iraqi Dinar",
		code: "IQD",
		number: 368
	},
	{
		iso_currency_code_uuid: "019b8378-2489-75b2-80aa-0788b5a05685",
		currency: "New Israeli Sheqel",
		code: "ILS",
		number: 376
	},
	{
		iso_currency_code_uuid: "019b8378-2489-7648-8f7c-8b7038886d76",
		currency: "Jamaican Dollar",
		code: "JMD",
		number: 388
	},
	{
		iso_currency_code_uuid: "019b8378-2489-76cd-9692-a3efbaea1ff7",
		currency: "Yen",
		code: "JPY",
		number: 392
	},
	{
		iso_currency_code_uuid: "019b8378-2489-7748-80dc-3a748e7b1080",
		currency: "Jordanian Dinar",
		code: "JOD",
		number: 400
	},
	{
		iso_currency_code_uuid: "019b8378-2489-77cf-b11d-efe0d5f41d90",
		currency: "Tenge",
		code: "KZT",
		number: 398
	},
	{
		iso_currency_code_uuid: "019b8378-2489-784f-ba5b-e087a339d80c",
		currency: "Kenyan Shilling",
		code: "KES",
		number: 404
	},
	{
		iso_currency_code_uuid: "019b8378-2489-78d1-b415-d014901bb842",
		currency: "North Korean Won",
		code: "KPW",
		number: 408
	},
	{
		iso_currency_code_uuid: "019b8378-2489-794c-8e1f-fe253f4413f4",
		currency: "Won",
		code: "KRW",
		number: 410
	},
	{
		iso_currency_code_uuid: "019b8378-2489-79cf-93bc-3ceb4bb1bc12",
		currency: "Kuwaiti Dinar",
		code: "KWD",
		number: 414
	},
	{
		iso_currency_code_uuid: "019b8378-2489-7a4c-ba83-065fc3d1f7ec",
		currency: "Som",
		code: "KGS",
		number: 417
	},
	{
		iso_currency_code_uuid: "019b8378-2489-7ad0-aa93-62cbf3982263",
		currency: "Kip",
		code: "LAK",
		number: 418
	},
	{
		iso_currency_code_uuid: "019b8378-2489-7b4d-974d-3875d08b28bf",
		currency: "Lebanese Pound",
		code: "LBP",
		number: 422
	},
	{
		iso_currency_code_uuid: "019b8378-2489-7bce-b4d7-ff9353c29886",
		currency: "Loti",
		code: "LSL",
		number: 426
	},
	{
		iso_currency_code_uuid: "019b8378-2489-7c4e-8d2a-5c488bc22fa9",
		currency: "Rand",
		code: "ZAR",
		number: 710
	},
	{
		iso_currency_code_uuid: "019b8378-2489-7ccd-b712-0ee2f3e7cfd6",
		currency: "Liberian Dollar",
		code: "LRD",
		number: 430
	},
	{
		iso_currency_code_uuid: "019b8378-2489-7d4f-87cc-f3f49206b782",
		currency: "Libyan Dinar",
		code: "LYD",
		number: 434
	},
	{
		iso_currency_code_uuid: "019b8378-2489-7dcc-a968-d631f19f0966",
		currency: "Swiss Franc",
		code: "CHF",
		number: 756
	},
	{
		iso_currency_code_uuid: "019b8378-2489-7e4d-99fc-564cca851906",
		currency: "Pataca",
		code: "MOP",
		number: 446
	},
	{
		iso_currency_code_uuid: "019b8378-2489-7ecf-abd8-3fa6523ea935",
		currency: "Malagasy Ariary",
		code: "MGA",
		number: 969
	},
	{
		iso_currency_code_uuid: "019b8378-2489-7f49-bef5-fd9a9a330dcc",
		currency: "Kwacha",
		code: "MWK",
		number: 454
	},
	{
		iso_currency_code_uuid: "019b8378-2489-7fcf-9d98-9dae977acf2a",
		currency: "Malaysian Ringgit",
		code: "MYR",
		number: 458
	},
	{
		iso_currency_code_uuid: "019b8378-248a-704e-bdbd-c83834ddb330",
		currency: "Rufiyaa",
		code: "MVR",
		number: 462
	},
	{
		iso_currency_code_uuid: "019b8378-248a-70ce-b94e-8a122712c76e",
		currency: "Ouguiya",
		code: "MRU",
		number: 929
	},
	{
		iso_currency_code_uuid: "019b8378-248a-7148-a077-5e1f5da14589",
		currency: "Mauritius Rupee",
		code: "MUR",
		number: 480
	},
	{
		iso_currency_code_uuid: "019b8378-248a-71cd-9ac5-0b705d169678",
		currency: "ADB Unit of Account",
		code: "XUA",
		number: 965
	},
	{
		iso_currency_code_uuid: "019b8378-248a-724e-8398-319edb453eaf",
		currency: "Mexican Peso",
		code: "MXN",
		number: 484
	},
	{
		iso_currency_code_uuid: "019b8378-248a-72ce-8f66-83d8a1876e6d",
		currency: "Mexican Unidad de Inversion (UDI)",
		code: "MXV",
		number: 979
	},
	{
		iso_currency_code_uuid: "019b8378-248a-7348-b903-64b61455ea82",
		currency: "Moldovan Leu",
		code: "MDL",
		number: 498
	},
	{
		iso_currency_code_uuid: "019b8378-248a-73cf-ae39-f683b8abc7e0",
		currency: "Tugrik",
		code: "MNT",
		number: 496
	},
	{
		iso_currency_code_uuid: "019b8378-248a-744e-a33d-939294c73d7d",
		currency: "Moroccan Dirham",
		code: "MAD",
		number: 504
	},
	{
		iso_currency_code_uuid: "019b8378-248a-74cc-b34e-df205b7947ca",
		currency: "Mozambique Metical",
		code: "MZN",
		number: 943
	},
	{
		iso_currency_code_uuid: "019b8378-248a-754b-ab28-4190cb7fb5eb",
		currency: "Kyat",
		code: "MMK",
		number: 104
	},
	{
		iso_currency_code_uuid: "019b8378-248a-75cd-9ab7-d3b6f0cc747a",
		currency: "Namibia Dollar",
		code: "NAD",
		number: 516
	},
	{
		iso_currency_code_uuid: "019b8378-248a-764e-ac66-c6c2c0264b94",
		currency: "Nepalese Rupee",
		code: "NPR",
		number: 524
	},
	{
		iso_currency_code_uuid: "019b8378-248a-76ce-ad33-a80d68471724",
		currency: "Cordoba Oro",
		code: "NIO",
		number: 558
	},
	{
		iso_currency_code_uuid: "019b8378-248a-774e-99a3-9151984cf5c2",
		currency: "Naira",
		code: "NGN",
		number: 566
	},
	{
		iso_currency_code_uuid: "019b8378-248a-77cc-8c78-81c348d5ed78",
		currency: "Rial Omani",
		code: "OMR",
		number: 512
	},
	{
		iso_currency_code_uuid: "019b8378-248a-784f-a117-f4bbe341b585",
		currency: "Pakistan Rupee",
		code: "PKR",
		number: 586
	},
	{
		iso_currency_code_uuid: "019b8378-248a-78ce-93e8-59dd42cea368",
		currency: "Balboa",
		code: "PAB",
		number: 590
	},
	{
		iso_currency_code_uuid: "019b8378-248a-794e-90b1-39d9d04cfcb8",
		currency: "Kina",
		code: "PGK",
		number: 598
	},
	{
		iso_currency_code_uuid: "019b8378-248a-79cf-969e-7721a0bf89e4",
		currency: "Guarani",
		code: "PYG",
		number: 600
	},
	{
		iso_currency_code_uuid: "019b8378-248a-7b60-ba3a-2ddce0544a49",
		currency: "Nuevo Sol",
		code: "PEN",
		number: 604
	},
	{
		iso_currency_code_uuid: "019b8378-248a-7c2c-b980-8054084a04af",
		currency: "Philippine Peso",
		code: "PHP",
		number: 608
	},
	{
		iso_currency_code_uuid: "019b8378-248a-7cc3-9e49-7cd7bec13372",
		currency: "Zloty",
		code: "PLN",
		number: 985
	},
	{
		iso_currency_code_uuid: "019b8378-248a-7d4b-8a25-2f4e0914c5a6",
		currency: "Qatari Rial",
		code: "QAR",
		number: 634
	},
	{
		iso_currency_code_uuid: "019b8378-248a-7dcc-a41f-91e6f42fe32f",
		currency: "Denar",
		code: "MKD",
		number: 807
	},
	{
		iso_currency_code_uuid: "019b8378-248b-72b8-927c-b37f972aaba7",
		currency: "Romanian Leu",
		code: "RON",
		number: 946
	},
	{
		iso_currency_code_uuid: "019b8378-248b-733d-925b-89bacb149512",
		currency: "Russian Ruble",
		code: "RUB",
		number: 643
	},
	{
		iso_currency_code_uuid: "019b8378-248b-73c6-ae7b-0aeadf308b05",
		currency: "Rwanda Franc",
		code: "RWF",
		number: 646
	},
	{
		iso_currency_code_uuid: "019b8378-248b-748a-957e-2a5986ea2784",
		currency: "Saint Helena Pound",
		code: "SHP",
		number: 654
	},
	{
		iso_currency_code_uuid: "019b8378-248b-750e-a0bd-ea2116c897b2",
		currency: "Tala",
		code: "WST",
		number: 882
	},
	{
		iso_currency_code_uuid: "019b8378-248b-7593-ae5b-250dd744f292",
		currency: "Dobra",
		code: "STN",
		number: 930
	},
	{
		iso_currency_code_uuid: "019b8378-248b-7610-a5a1-dab1dd52e57c",
		currency: "Saudi Riyal",
		code: "SAR",
		number: 682
	},
	{
		iso_currency_code_uuid: "019b8378-248b-7692-8c3d-9862b81c137b",
		currency: "Serbian Dinar",
		code: "RSD",
		number: 941
	},
	{
		iso_currency_code_uuid: "019b8378-248b-7713-8e5b-ccc180e89035",
		currency: "Seychelles Rupee",
		code: "SCR",
		number: 690
	},
	{
		iso_currency_code_uuid: "019b8378-248b-7795-b6b3-057d52ef075d",
		currency: "Leone",
		code: "SLE",
		number: 925
	},
	{
		iso_currency_code_uuid: "019b8378-248b-781b-8a32-8569e724c7ee",
		currency: "Singapore Dollar",
		code: "SGD",
		number: 702
	},
	{
		iso_currency_code_uuid: "019b8378-248b-7896-8695-c408f663aad9",
		currency: "Sucre",
		code: "XSU",
		number: 994
	},
	{
		iso_currency_code_uuid: "019b8378-248b-7919-9a0b-bd8ce4df1900",
		currency: "Solomon Islands Dollar",
		code: "SBD",
		number: 90
	},
	{
		iso_currency_code_uuid: "019b8378-248b-799f-8522-842675adb8e5",
		currency: "Somali Shilling",
		code: "SOS",
		number: 706
	},
	{
		iso_currency_code_uuid: "019b8378-248b-7a1f-9881-dd213d6e3fe0",
		currency: "South Sudanese Pound",
		code: "SSP",
		number: 728
	},
	{
		iso_currency_code_uuid: "019b8378-248b-7a9e-b2c0-a5a37704b13c",
		currency: "Sri Lanka Rupee",
		code: "LKR",
		number: 144
	},
	{
		iso_currency_code_uuid: "019b8378-248b-7b1f-9867-47e2c197ebaa",
		currency: "Sudanese Pound",
		code: "SDG",
		number: 938
	},
	{
		iso_currency_code_uuid: "019b8378-248b-7ba0-8b83-b972a0029390",
		currency: "Surinam Dollar",
		code: "SRD",
		number: 968
	},
	{
		iso_currency_code_uuid: "019b8378-248b-7c20-ac6f-cc4b56e895ea",
		currency: "Lilangeni",
		code: "SZL",
		number: 748
	},
	{
		iso_currency_code_uuid: "019b8378-248b-7ca1-9b54-0471fe5c75a4",
		currency: "Swedish Krona",
		code: "SEK",
		number: 752
	},
	{
		iso_currency_code_uuid: "019b8378-248b-7d22-8ef8-871477ced273",
		currency: "WIR Euro",
		code: "CHE",
		number: 947
	},
	{
		iso_currency_code_uuid: "019b8378-248b-7e32-b66a-9e5aed5c97ce",
		currency: "WIR Franc",
		code: "CHW",
		number: 948
	},
	{
		iso_currency_code_uuid: "019b8378-248b-7eb4-adba-f640df01afca",
		currency: "Syrian Pound",
		code: "SYP",
		number: 760
	},
	{
		iso_currency_code_uuid: "019b8378-248b-7f34-96cd-4afb78607ed0",
		currency: "New Taiwan Dollar",
		code: "TWD",
		number: 901
	},
	{
		iso_currency_code_uuid: "019b8378-248b-7fb8-8aef-b21e74ed48f1",
		currency: "Somoni",
		code: "TJS",
		number: 972
	},
	{
		iso_currency_code_uuid: "019b8378-248c-703e-b245-356d95c6cf53",
		currency: "Tanzanian Shilling",
		code: "TZS",
		number: 834
	},
	{
		iso_currency_code_uuid: "019b8378-248c-70bf-ac5d-e51fbd4bef29",
		currency: "Baht",
		code: "THB",
		number: 764
	},
	{
		iso_currency_code_uuid: "019b8378-248c-713f-9214-80c19e0e4392",
		currency: "Pa’anga",
		code: "TOP",
		number: 776
	},
	{
		iso_currency_code_uuid: "019b8378-248c-71c0-bacf-7090893e2fb9",
		currency: "Trinidad and Tobago Dollar",
		code: "TTD",
		number: 780
	},
	{
		iso_currency_code_uuid: "019b8378-248c-7245-a201-03246a67b5e9",
		currency: "Tunisian Dinar",
		code: "TND",
		number: 788
	},
	{
		iso_currency_code_uuid: "019b8378-248c-72ca-a412-40df5d1445c5",
		currency: "Turkish Lira",
		code: "TRY",
		number: 949
	},
	{
		iso_currency_code_uuid: "019b8378-248c-7347-be30-72415e6ff8f3",
		currency: "Turkmenistan New Manat",
		code: "TMT",
		number: 934
	},
	{
		iso_currency_code_uuid: "019b8378-248c-73ca-9281-65a555aa5a2b",
		currency: "Uganda Shilling",
		code: "UGX",
		number: 800
	},
	{
		iso_currency_code_uuid: "019b8378-248c-744b-aab6-6f3195ccc230",
		currency: "Hryvnia",
		code: "UAH",
		number: 980
	},
	{
		iso_currency_code_uuid: "019b8378-248c-74cd-ad75-b8a2515f9a00",
		currency: "UAE Dirham",
		code: "AED",
		number: 784
	},
	{
		iso_currency_code_uuid: "019b8378-248c-754c-b63d-6dd02ba10f69",
		currency: "US Dollar (Next day)",
		code: "USN",
		number: 997
	},
	{
		iso_currency_code_uuid: "019b8378-248c-75d3-bd15-5bbe02a4417a",
		currency: "Uruguay Peso en Unidades Indexadas (URUIURUI)",
		code: "UYI",
		number: 940
	},
	{
		iso_currency_code_uuid: "019b8378-248c-7651-aedd-97d795bc1ca2",
		currency: "Peso Uruguayo",
		code: "UYU",
		number: 858
	},
	{
		iso_currency_code_uuid: "019b8378-248c-76d6-8f74-13cde254bb8d",
		currency: "Uzbekistan Sum",
		code: "UZS",
		number: 860
	},
	{
		iso_currency_code_uuid: "019b8378-248c-7752-b400-d91062d3c114",
		currency: "Vatu",
		code: "VUV",
		number: 548
	},
	{
		iso_currency_code_uuid: "019b8378-248c-77d6-af12-4882baa0c8e1",
		currency: "Bolivar",
		code: "VEF",
		number: 937
	},
	{
		iso_currency_code_uuid: "019b8378-248c-7856-bb54-0b7e27832cd1",
		currency: "Bolivar",
		code: "VED",
		number: 926
	},
	{
		iso_currency_code_uuid: "019b8378-248c-78da-9277-97b82b8ab479",
		currency: "Dong",
		code: "VND",
		number: 704
	},
	{
		iso_currency_code_uuid: "019b8378-248c-7959-aea7-3833f8416355",
		currency: "Yemeni Rial",
		code: "YER",
		number: 886
	},
	{
		iso_currency_code_uuid: "019b8378-248c-79d8-8ff2-480524ac3e88",
		currency: "Zambian Kwacha",
		code: "ZMW",
		number: 967
	},
	{
		iso_currency_code_uuid: "019b8378-248c-7a5d-b3cc-8163abe74084",
		currency: "Zimbabwe Dollar",
		code: "ZWL",
		number: 932
	}
], Mr = jr.map((e) => ({
	label: `${e.currency} - ${e.code} - ${e.number}`,
	value: e.iso_currency_code_uuid
})), Nr = [
	{
		iso_language_code_uuid: "019b837c-fc26-7c0a-857e-241644fe80f9",
		language: "Abkhazian",
		code: "ab"
	},
	{
		iso_language_code_uuid: "019b837c-fc28-7da8-93bb-a71cfad6df21",
		language: "Afar",
		code: "aa"
	},
	{
		iso_language_code_uuid: "019b837c-fc28-7efb-9086-d8d95972b846",
		language: "Afrikaans",
		code: "af"
	},
	{
		iso_language_code_uuid: "019b837c-fc28-7fef-ab10-0db70f2e8f56",
		language: "Akan",
		code: "ak"
	},
	{
		iso_language_code_uuid: "019b837c-fc29-7103-9050-9a2d1f950441",
		language: "Albanian",
		code: "sq"
	},
	{
		iso_language_code_uuid: "019b837c-fc29-71e7-8400-5cef129abafb",
		language: "Amharic",
		code: "am"
	},
	{
		iso_language_code_uuid: "019b837c-fc29-72ca-8168-5cb56aedcac7",
		language: "Arabic",
		code: "ar"
	},
	{
		iso_language_code_uuid: "019b837c-fc29-73aa-94a5-3186d4c494f4",
		language: "Aragonese",
		code: "an"
	},
	{
		iso_language_code_uuid: "019b837c-fc29-748c-a179-b9bd8aba2e76",
		language: "Armenian",
		code: "hy"
	},
	{
		iso_language_code_uuid: "019b837c-fc29-7570-927f-eba6b8cfb5c2",
		language: "Assamese",
		code: "as"
	},
	{
		iso_language_code_uuid: "019b837c-fc29-7650-92a0-01f954e21c8d",
		language: "Avaric",
		code: "av"
	},
	{
		iso_language_code_uuid: "019b837c-fc29-7737-b11f-0a474d212259",
		language: "Avestan",
		code: "ae"
	},
	{
		iso_language_code_uuid: "019b837c-fc29-7819-83c7-46951d61dcb3",
		language: "Aymara",
		code: "ay"
	},
	{
		iso_language_code_uuid: "019b837c-fc29-78f8-b253-6ccb36d5a1ee",
		language: "Azerbaijani",
		code: "az"
	},
	{
		iso_language_code_uuid: "019b837c-fc29-79d9-9242-c4996d1ff7c8",
		language: "Bambara",
		code: "bm"
	},
	{
		iso_language_code_uuid: "019b837c-fc29-7abe-8fba-ac20a6eaeba7",
		language: "Bashkir",
		code: "ba"
	},
	{
		iso_language_code_uuid: "019b837c-fc29-7b9f-9164-0fd6797ce588",
		language: "Basque",
		code: "eu"
	},
	{
		iso_language_code_uuid: "019b837c-fc29-7c7c-bb61-acc70661c4a0",
		language: "Belarusian",
		code: "be"
	},
	{
		iso_language_code_uuid: "019b837c-fc29-7d60-acfb-8a835b8c97ad",
		language: "Bengali (Bangla)",
		code: "bn"
	},
	{
		iso_language_code_uuid: "019b837c-fc29-7e43-823e-00de846fa96f",
		language: "Bihari",
		code: "bh"
	},
	{
		iso_language_code_uuid: "019b837c-fc29-7f23-ab6b-c97344a37246",
		language: "Bislama",
		code: "bi"
	},
	{
		iso_language_code_uuid: "019b837c-fc2a-7007-9130-7a757434cc68",
		language: "Bosnian",
		code: "bs"
	},
	{
		iso_language_code_uuid: "019b837c-fc2a-70e5-9ac8-3d941c89d890",
		language: "Breton",
		code: "br"
	},
	{
		iso_language_code_uuid: "019b837c-fc2a-71c6-9626-9b7cfc4b7bfd",
		language: "Bulgarian",
		code: "bg"
	},
	{
		iso_language_code_uuid: "019b837c-fc2a-72a0-824c-a34d2073ed7d",
		language: "Burmese",
		code: "my"
	},
	{
		iso_language_code_uuid: "019b837c-fc2a-7385-b8cc-fc6870b24190",
		language: "Catalan",
		code: "ca"
	},
	{
		iso_language_code_uuid: "019b837c-fc2a-7464-9347-654236e85cf7",
		language: "Chamorro",
		code: "ch"
	},
	{
		iso_language_code_uuid: "019b837c-fc2a-756e-9f03-d966729d2d3d",
		language: "Chechen",
		code: "ce"
	},
	{
		iso_language_code_uuid: "019b837c-fc2a-7726-878d-ac80c254047a",
		language: "Chichewa, Chewa, Nyanja",
		code: "ny"
	},
	{
		iso_language_code_uuid: "019b837c-fc2a-7855-b941-e188da3df864",
		language: "Chinese",
		code: "zh"
	},
	{
		iso_language_code_uuid: "019b837c-fc2a-794c-821a-7deee35382f7",
		language: "Chinese (Simplified)",
		code: "zh-Hans"
	},
	{
		iso_language_code_uuid: "019b837c-fc2a-7a3b-bed6-4da9c7ed55c2",
		language: "Chinese (Traditional)",
		code: "zh-Hant"
	},
	{
		iso_language_code_uuid: "019b837c-fc2a-7b1c-9bf9-f863fb64e76c",
		language: "Chuvash",
		code: "cv"
	},
	{
		iso_language_code_uuid: "019b837c-fc2a-7c02-9c17-6e0aa818c506",
		language: "Cornish",
		code: "kw"
	},
	{
		iso_language_code_uuid: "019b837c-fc2a-7ce0-ab22-d2b37dfad545",
		language: "Corsican",
		code: "co"
	},
	{
		iso_language_code_uuid: "019b837c-fc2a-7dc0-8657-d5ff464e1959",
		language: "Cree",
		code: "cr"
	},
	{
		iso_language_code_uuid: "019b837c-fc2a-7ea1-b6d3-7d53c3283234",
		language: "Croatian",
		code: "hr"
	},
	{
		iso_language_code_uuid: "019b837c-fc2a-7fde-b0f8-85be49be3737",
		language: "Czech",
		code: "cs"
	},
	{
		iso_language_code_uuid: "019b837c-fc2b-7116-b7f9-f5bebc1ef083",
		language: "Danish",
		code: "da"
	},
	{
		iso_language_code_uuid: "019b837c-fc2b-7227-bd2e-777718583d41",
		language: "Divehi, Dhivehi, Maldivian",
		code: "dv"
	},
	{
		iso_language_code_uuid: "019b837c-fc2b-73e8-a05e-ce1100489c9d",
		language: "Dutch",
		code: "nl"
	},
	{
		iso_language_code_uuid: "019b837c-fc2b-751b-9b45-458077629f81",
		language: "Dzongkha",
		code: "dz"
	},
	{
		iso_language_code_uuid: "019b837c-fc2b-7644-91aa-746a58783b5e",
		language: "English",
		code: "en"
	},
	{
		iso_language_code_uuid: "019b837c-fc2b-7777-b1b2-72685cb2704d",
		language: "Esperanto",
		code: "eo"
	},
	{
		iso_language_code_uuid: "019b837c-fc2b-789d-bbdd-1735ed8920e4",
		language: "Estonian",
		code: "et"
	},
	{
		iso_language_code_uuid: "019b837c-fc2b-79a9-a5f4-ded65771e366",
		language: "Ewe",
		code: "ee"
	},
	{
		iso_language_code_uuid: "019b837c-fc2b-7b47-a4d2-939d7f74f20c",
		language: "Faroese",
		code: "fo"
	},
	{
		iso_language_code_uuid: "019b837c-fc2b-7c54-8baf-5ca258b117d6",
		language: "Fijian",
		code: "fj"
	},
	{
		iso_language_code_uuid: "019b837c-fc2b-7d61-8261-28ace81ea1cf",
		language: "Finnish",
		code: "fi"
	},
	{
		iso_language_code_uuid: "019b837c-fc2b-7e43-b76f-fecfe3f87bb8",
		language: "French",
		code: "fr"
	},
	{
		iso_language_code_uuid: "019b837c-fc2b-7f22-9300-eafa8c5b12f6",
		language: "Fula, Fulah, Pulaar, Pular",
		code: "ff"
	},
	{
		iso_language_code_uuid: "019b837c-fc2c-7006-a380-4f26cfc41e6a",
		language: "Galician",
		code: "gl"
	},
	{
		iso_language_code_uuid: "019b837c-fc2c-70e5-a11f-c3551ca7de20",
		language: "Gaelic (Scottish)",
		code: "gd"
	},
	{
		iso_language_code_uuid: "019b837c-fc2c-71c8-83ee-d5f6b31feba5",
		language: "Gaelic (Manx)",
		code: "gv"
	},
	{
		iso_language_code_uuid: "019b837c-fc2c-72ae-b8a0-157f6e29f908",
		language: "Georgian",
		code: "ka"
	},
	{
		iso_language_code_uuid: "019b837c-fc2c-738c-beb8-4b4a3821c8ef",
		language: "German",
		code: "de"
	},
	{
		iso_language_code_uuid: "019b837c-fc2c-746d-b06e-1f6731506173",
		language: "Greek",
		code: "el"
	},
	{
		iso_language_code_uuid: "019b837c-fc2c-754c-bfb7-0267b06b304b",
		language: "Greenlandic",
		code: "kl"
	},
	{
		iso_language_code_uuid: "019b837c-fc2c-7632-a0b5-db7c0f1cb133",
		language: "Guarani",
		code: "gn"
	},
	{
		iso_language_code_uuid: "019b837c-fc2c-7711-a19e-dc4839eb7bee",
		language: "Gujarati",
		code: "gu"
	},
	{
		iso_language_code_uuid: "019b837c-fc2c-77f1-95ca-ab6c45fe240f",
		language: "Haitian Creole",
		code: "ht"
	},
	{
		iso_language_code_uuid: "019b837c-fc2c-78d4-9eaa-f3abb1d5643d",
		language: "Hausa",
		code: "ha"
	},
	{
		iso_language_code_uuid: "019b837c-fc2c-79b3-893d-318277a9d26d",
		language: "Hebrew",
		code: "he"
	},
	{
		iso_language_code_uuid: "019b837c-fc2c-7a91-be9a-03aaeb03c29e",
		language: "Herero",
		code: "hz"
	},
	{
		iso_language_code_uuid: "019b837c-fc2c-7b77-877a-bf17eb79340a",
		language: "Hindi",
		code: "hi"
	},
	{
		iso_language_code_uuid: "019b837c-fc2c-7c50-ab6c-9a18e50a50c6",
		language: "Hiri Motu",
		code: "ho"
	},
	{
		iso_language_code_uuid: "019b837c-fc2c-7d31-b01e-a76157030367",
		language: "Hungarian",
		code: "hu"
	},
	{
		iso_language_code_uuid: "019b837c-fc2c-7e15-ab01-2eee68da963e",
		language: "Icelandic",
		code: "is"
	},
	{
		iso_language_code_uuid: "019b837c-fc2c-7ef7-8e28-728b3cd973d0",
		language: "Ido",
		code: "io"
	},
	{
		iso_language_code_uuid: "019b837c-fc2c-7fd7-bab0-f5dcd339f8c7",
		language: "Igbo",
		code: "ig"
	},
	{
		iso_language_code_uuid: "019b837c-fc2d-70ba-80c8-3c7cf91d657f",
		language: "Indonesian",
		code: "id, in"
	},
	{
		iso_language_code_uuid: "019b837c-fc2d-719b-85c3-4438495e8ad6",
		language: "Interlingua",
		code: "ia"
	},
	{
		iso_language_code_uuid: "019b837c-fc2d-727b-a442-5e3e1caee86f",
		language: "Interlingue",
		code: "ie"
	},
	{
		iso_language_code_uuid: "019b837c-fc2d-735d-b72a-6fda051fbd83",
		language: "Inuktitut",
		code: "iu"
	},
	{
		iso_language_code_uuid: "019b837c-fc2d-740e-8996-fa9f3b3861f0",
		language: "Inupiak",
		code: "ik"
	},
	{
		iso_language_code_uuid: "019b837c-fc2d-74b1-a5e4-f428982c8512",
		language: "Irish",
		code: "ga"
	},
	{
		iso_language_code_uuid: "019b837c-fc2d-7553-a6b5-fde34dc3b2e4",
		language: "Italian",
		code: "it"
	},
	{
		iso_language_code_uuid: "019b837c-fc2d-75f6-ae7c-b02bb2d3d259",
		language: "Japanese",
		code: "ja"
	},
	{
		iso_language_code_uuid: "019b837c-fc2d-7698-884d-1119b34e3242",
		language: "Javanese",
		code: "jv"
	},
	{
		iso_language_code_uuid: "019b837c-fc2d-773f-9d2f-eee422a02919",
		language: "Kalaallisut, Greenlandic",
		code: "kl"
	},
	{
		iso_language_code_uuid: "019b837c-fc2d-77e4-823b-ec75f037eba2",
		language: "Kannada",
		code: "kn"
	},
	{
		iso_language_code_uuid: "019b837c-fc2d-7886-be5d-708f58eb84a9",
		language: "Kanuri",
		code: "kr"
	},
	{
		iso_language_code_uuid: "019b837c-fc2d-7929-84e3-ed6d56eb0f2e",
		language: "Kashmiri",
		code: "ks"
	},
	{
		iso_language_code_uuid: "019b837c-fc2d-79cf-8706-64ff91f5160c",
		language: "Kazakh",
		code: "kk"
	},
	{
		iso_language_code_uuid: "019b837c-fc2d-7a74-a37d-09fb61b32fc5",
		language: "Khmer",
		code: "km"
	},
	{
		iso_language_code_uuid: "019b837c-fc2d-7b19-b690-29a16a131fef",
		language: "Kikuyu",
		code: "ki"
	},
	{
		iso_language_code_uuid: "019b837c-fc2d-7bbc-b232-f70caa4fd171",
		language: "Kinyarwanda (Rwanda)",
		code: "rw"
	},
	{
		iso_language_code_uuid: "019b837c-fc2d-7c60-9451-4055e23de272",
		language: "Kirundi",
		code: "rn"
	},
	{
		iso_language_code_uuid: "019b837c-fc2d-7d0b-8ffd-ae2702dbfef6",
		language: "Kyrgyz",
		code: "ky"
	},
	{
		iso_language_code_uuid: "019b837c-fc2d-7da8-8194-b65d81a0fda1",
		language: "Komi",
		code: "kv"
	},
	{
		iso_language_code_uuid: "019b837c-fc2d-7e53-9581-e87b39b8efbc",
		language: "Kongo",
		code: "kg"
	},
	{
		iso_language_code_uuid: "019b837c-fc2d-7ef5-926c-21ba4d22abed",
		language: "Korean",
		code: "ko"
	},
	{
		iso_language_code_uuid: "019b837c-fc2d-7f99-b441-cfe10b39c976",
		language: "Kurdish",
		code: "ku"
	},
	{
		iso_language_code_uuid: "019b837c-fc2e-703c-9200-c72de8edb4a6",
		language: "Kwanyama",
		code: "kj"
	},
	{
		iso_language_code_uuid: "019b837c-fc2e-70e3-ac4e-cf5cfd17e5a2",
		language: "Lao",
		code: "lo"
	},
	{
		iso_language_code_uuid: "019b837c-fc2e-7186-9361-affb8c4ab37f",
		language: "Latin",
		code: "la"
	},
	{
		iso_language_code_uuid: "019b837c-fc2e-722d-951d-90a79c523170",
		language: "Latvian (Lettish)",
		code: "lv"
	},
	{
		iso_language_code_uuid: "019b837c-fc2e-72d0-ad92-20feaf1c3b95",
		language: "Limburgish ( Limburger)",
		code: "li"
	},
	{
		iso_language_code_uuid: "019b837c-fc2e-7376-955d-dc02c2fcfeb8",
		language: "Lingala",
		code: "ln"
	},
	{
		iso_language_code_uuid: "019b837c-fc2e-7418-8c8f-d5d258beb017",
		language: "Lithuanian",
		code: "lt"
	},
	{
		iso_language_code_uuid: "019b837c-fc2e-74be-8043-93e86e02c61e",
		language: "Luga-Katanga",
		code: "lu"
	},
	{
		iso_language_code_uuid: "019b837c-fc2e-7567-b076-a2d4e254bb25",
		language: "Luganda, Ganda",
		code: "lg"
	},
	{
		iso_language_code_uuid: "019b837c-fc2e-760b-93d8-3f39fc687a7d",
		language: "Luxembourgish",
		code: "lb"
	},
	{
		iso_language_code_uuid: "019b837c-fc2e-76f0-b4b1-92b2cbca3361",
		language: "Manx",
		code: "gv"
	},
	{
		iso_language_code_uuid: "019b837c-fc2e-779f-97a0-7ac0d6cfc399",
		language: "Macedonian",
		code: "mk"
	},
	{
		iso_language_code_uuid: "019b837c-fc2e-7847-8649-baa0dfeae373",
		language: "Malagasy",
		code: "mg"
	},
	{
		iso_language_code_uuid: "019b837c-fc2e-78eb-b22f-ccc1e6095b60",
		language: "Malay",
		code: "ms"
	},
	{
		iso_language_code_uuid: "019b837c-fc2e-798e-8b4c-74a4153d156f",
		language: "Malayalam",
		code: "ml"
	},
	{
		iso_language_code_uuid: "019b837c-fc2e-7a30-97ec-95b1585c78aa",
		language: "Maltese",
		code: "mt"
	},
	{
		iso_language_code_uuid: "019b837c-fc2e-7ad7-9d5e-c88d3c1bb0d0",
		language: "Maori",
		code: "mi"
	},
	{
		iso_language_code_uuid: "019b837c-fc2e-7b7f-a86e-76dbac8d5c1c",
		language: "Marathi",
		code: "mr"
	},
	{
		iso_language_code_uuid: "019b837c-fc2e-7c22-9c32-ab36f14755a7",
		language: "Marshallese",
		code: "mh"
	},
	{
		iso_language_code_uuid: "019b837c-fc2e-7d4b-bb89-9afbce3cfcbe",
		language: "Moldavian",
		code: "mo"
	},
	{
		iso_language_code_uuid: "019b837c-fc2e-7df4-8536-7462553318f8",
		language: "Mongolian",
		code: "mn"
	},
	{
		iso_language_code_uuid: "019b837c-fc2e-7ed9-aca1-094506a8fde7",
		language: "Nauru",
		code: "na"
	},
	{
		iso_language_code_uuid: "019b837c-fc2e-7fa0-b20d-f0ebd122036c",
		language: "Navajo",
		code: "nv"
	},
	{
		iso_language_code_uuid: "019b837c-fc2f-704a-9dd3-0a8774c372da",
		language: "Ndonga",
		code: "ng"
	},
	{
		iso_language_code_uuid: "019b837c-fc2f-70ed-b026-b768e9cd1e96",
		language: "Northern Ndebele",
		code: "nd"
	},
	{
		iso_language_code_uuid: "019b837c-fc2f-7190-8f0f-0b0ae0f183a0",
		language: "Nepali",
		code: "ne"
	},
	{
		iso_language_code_uuid: "019b837c-fc2f-7235-b5ab-44a67a4ef206",
		language: "Norwegian",
		code: "no"
	},
	{
		iso_language_code_uuid: "019b837c-fc2f-78ff-8017-b0af11515ac9",
		language: "Norwegian bokmål",
		code: "nb"
	},
	{
		iso_language_code_uuid: "019b837c-fc2f-79b0-b476-032d6f422e5d",
		language: "Norwegian nynorsk",
		code: "nn"
	},
	{
		iso_language_code_uuid: "019b837c-fc2f-7a54-bfb6-f5157b42d5b1",
		language: "Nuosu",
		code: "ii"
	},
	{
		iso_language_code_uuid: "019b837c-fc2f-7b5f-8b7a-64a299b09937",
		language: "Occitan",
		code: "oc"
	},
	{
		iso_language_code_uuid: "019b837c-fc2f-7c3d-af10-8e5208a89d79",
		language: "Ojibwe",
		code: "oj"
	},
	{
		iso_language_code_uuid: "019b837c-fc2f-7d24-a435-ccb2c155b877",
		language: "Old Church Slavonic, Old Bulgarian",
		code: "cu"
	},
	{
		iso_language_code_uuid: "019b837c-fc2f-7df0-b4e9-bf077ea1338d",
		language: "Oriya",
		code: "or"
	},
	{
		iso_language_code_uuid: "019b837c-fc2f-7ef4-81ab-7f675bc1aa2e",
		language: "Oromo (Afaan Oromo)",
		code: "om"
	},
	{
		iso_language_code_uuid: "019b837c-fc2f-7fc4-9493-9dbc40291c8f",
		language: "Ossetian",
		code: "os"
	},
	{
		iso_language_code_uuid: "019b837c-fc30-708c-b010-bb5e651329e1",
		language: "Pāli",
		code: "pi"
	},
	{
		iso_language_code_uuid: "019b837c-fc30-7137-aa62-f5ceb7dfb793",
		language: "Pashto, Pushto",
		code: "ps"
	},
	{
		iso_language_code_uuid: "019b837c-fc30-71d8-99ad-a71e4cd4fcb4",
		language: "Persian (Farsi)",
		code: "fa"
	},
	{
		iso_language_code_uuid: "019b837c-fc30-7281-9f41-24807f85f1e2",
		language: "Polish",
		code: "pl"
	},
	{
		iso_language_code_uuid: "019b837c-fc30-7327-86e6-ac64a75a9bc5",
		language: "Portuguese",
		code: "pt"
	},
	{
		iso_language_code_uuid: "019b837c-fc3c-79b3-a795-9e56ca21c284",
		language: "Punjabi (Eastern)",
		code: "pa"
	},
	{
		iso_language_code_uuid: "019b837c-fc3c-7ae8-a70d-430a31c2178a",
		language: "Quechua",
		code: "qu"
	},
	{
		iso_language_code_uuid: "019b837c-fc3c-7b99-a260-0b6d46050fb2",
		language: "Romansh",
		code: "rm"
	},
	{
		iso_language_code_uuid: "019b837c-fc3c-7c8a-88c5-433d53fbd97b",
		language: "Romanian",
		code: "ro"
	},
	{
		iso_language_code_uuid: "019b837c-fc3c-7d13-9109-8df931b8c0b8",
		language: "Russian",
		code: "ru"
	},
	{
		iso_language_code_uuid: "019b837c-fc3c-7df0-a451-1d26a4079908",
		language: "Sami",
		code: "se"
	},
	{
		iso_language_code_uuid: "019b837c-fc3c-7ea2-b118-3084f7e42994",
		language: "Samoan",
		code: "sm"
	},
	{
		iso_language_code_uuid: "019b837c-fc3c-7f1f-b832-8613ddca031c",
		language: "Sango",
		code: "sg"
	},
	{
		iso_language_code_uuid: "019b837c-fc3c-7f95-bf6c-7e6f3f6d1d9f",
		language: "Sanskrit",
		code: "sa"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-7004-af82-b65167048889",
		language: "Serbian",
		code: "sr"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-7073-987e-d1b2ed15261c",
		language: "Serbo-Croatian",
		code: "sh"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-70e0-9b50-92205c63685e",
		language: "Sesotho",
		code: "st"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-714d-9901-2d461499665d",
		language: "Setswana",
		code: "tn"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-71bc-a9d3-2b2125338d62",
		language: "Shona",
		code: "sn"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-7228-900d-e7646bdc071b",
		language: "Sichuan Yi",
		code: "ii"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-7297-82e6-0e73189ba61f",
		language: "Sindhi",
		code: "sd"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-7304-9245-f6e723c4596b",
		language: "Sinhalese",
		code: "si"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-73ad-b027-aee9b33ebcce",
		language: "Siswati",
		code: "ss"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-7423-a8bb-fb6bc8df272d",
		language: "Slovak",
		code: "sk"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-748e-a479-5f1d6839c226",
		language: "Slovenian",
		code: "sl"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-74fd-9656-a5cd5263c122",
		language: "Somali",
		code: "so"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-7568-9a40-1c548e98899e",
		language: "Southern Ndebele",
		code: "nr"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-75d7-b499-551751033087",
		language: "Spanish",
		code: "es"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-7643-866f-f5c847da1300",
		language: "Sundanese",
		code: "su"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-76ae-aeb9-fb45984a2d6a",
		language: "Swahili (Kiswahili)",
		code: "sw"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-771a-a664-55c2edf8d6d4",
		language: "Swati",
		code: "ss"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-7785-9ce0-1c660f9f72e3",
		language: "Swedish",
		code: "sv"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-77f0-a267-3ba66ffe9e8d",
		language: "Tagalog",
		code: "tl"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-785d-9692-e056429d5e21",
		language: "Tahitian",
		code: "ty"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-78c8-82ef-6af7ecf5f23a",
		language: "Tajik",
		code: "tg"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-7937-8d6a-181868dd38e0",
		language: "Tamil",
		code: "ta"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-79a2-b31f-faed643bff10",
		language: "Tatar",
		code: "tt"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-7a12-8cb8-9696e64fadd3",
		language: "Telugu",
		code: "te"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-7a78-a516-42481ef2eccd",
		language: "Thai",
		code: "th"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-7ae9-9454-335bf7fbc898",
		language: "Tibetan",
		code: "bo"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-7b52-b786-7ab9f11eaa80",
		language: "Tigrinya",
		code: "ti"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-7bc3-8a0f-9e85c0ad47cd",
		language: "Tonga",
		code: "to"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-7c2f-a8dc-eeff5ce3a87c",
		language: "Tsonga",
		code: "ts"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-7c9b-9f4d-f9d540e96bf2",
		language: "Turkish",
		code: "tr"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-7d05-b8cd-863def91a94c",
		language: "Turkmen",
		code: "tk"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-7d70-9349-326b234bad8e",
		language: "Twi",
		code: "tw"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-7dde-8d83-1a2b4de028cb",
		language: "Uyghur",
		code: "ug"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-7e48-9b28-afd2b8e1e876",
		language: "Ukrainian",
		code: "uk"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-7eb4-adda-ffd38139ae3f",
		language: "Urdu",
		code: "ur"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-7f23-8e1f-dfec4c704668",
		language: "Uzbek",
		code: "uz"
	},
	{
		iso_language_code_uuid: "019b837c-fc3d-7f8f-bf6f-250bc8b72a85",
		language: "Venda",
		code: "ve"
	},
	{
		iso_language_code_uuid: "019b837c-fc3e-7011-9d0e-deb2e4a154b2",
		language: "Vietnamese",
		code: "vi"
	},
	{
		iso_language_code_uuid: "019b837c-fc3e-7078-924d-3c553ae29f86",
		language: "Volapük",
		code: "vo"
	},
	{
		iso_language_code_uuid: "019b837c-fc3e-70ea-a6a3-7893449f7287",
		language: "Wallon",
		code: "wa"
	},
	{
		iso_language_code_uuid: "019b837c-fc3e-71f9-83ea-7677cdc0bf01",
		language: "Welsh",
		code: "cy"
	},
	{
		iso_language_code_uuid: "019b837c-fc3e-726d-ba5c-3e52ef2ee560",
		language: "Wolof",
		code: "wo"
	},
	{
		iso_language_code_uuid: "019b837c-fc3e-72df-97e1-289f2b043d9c",
		language: "Western Frisian",
		code: "fy"
	},
	{
		iso_language_code_uuid: "019b837c-fc3e-734b-ad66-c269098597c6",
		language: "Xhosa",
		code: "xh"
	},
	{
		iso_language_code_uuid: "019b837c-fc3e-73b8-895c-0d9ea1ebd531",
		language: "Yiddish",
		code: "yi, ji"
	},
	{
		iso_language_code_uuid: "019b837c-fc3e-7425-8313-b21f992a1a76",
		language: "Yoruba",
		code: "yo"
	},
	{
		iso_language_code_uuid: "019b837c-fc3e-748d-82fd-d37ee63d9d66",
		language: "Zhuang, Chuang",
		code: "za"
	},
	{
		iso_language_code_uuid: "019b837c-fc3e-7503-95bb-a3a6960b855b",
		language: "Zulu",
		code: "zu"
	}
], Pr = Nr.map((e) => ({
	label: `${e.language} - ${e.code}`,
	value: e.iso_language_code_uuid
})), Fr = [
	{
		legal_entity_size_uuid: "019b8382-9534-71ae-81ae-b08c327085eb",
		name: "Micro",
		definition: "Fewer than 10 employees"
	},
	{
		legal_entity_size_uuid: "019b8382-953b-7d1a-81f7-1397b36664ae",
		name: "Small",
		definition: "10-49 employees"
	},
	{
		legal_entity_size_uuid: "019b8382-953b-7ed3-8a77-a2ca3bdc303a",
		name: "Medium",
		definition: "50-249 employees"
	},
	{
		legal_entity_size_uuid: "019b8382-953b-7f68-ad56-e3871ac7eb65",
		name: "Large",
		definition: "250 or more employees"
	}
], Ir = Fr.map((e) => ({
	label: `${e.name} - ${e.definition}`,
	value: e.legal_entity_size_uuid
})), Lr = [
	{
		legal_entity_types_uuid: "019b8385-604d-71a2-b024-b05f6f6e8a5e",
		name: "Businesses (For-Profit Companies)"
	},
	{
		legal_entity_types_uuid: "019b8385-604e-7a7d-9405-45d5ec37f0a6",
		name: "Nonprofit Organizations (NPOs, NGOs)"
	},
	{
		legal_entity_types_uuid: "019b8385-604e-7bb7-b144-793460ab9c8e",
		name: "Government Agencies & Public Institutions"
	},
	{
		legal_entity_types_uuid: "019b8385-604e-7c9c-8a43-7da70fadc99a",
		name: "Individuals, Freelancers & Independent Contractors"
	}
], Rr = Lr.map((e) => ({
	label: e.name,
	value: e.legal_entity_types_uuid
})), zr = [
	{
		physical_location_uuid: "019b838c-f2fb-780f-83d7-197acc80c77d",
		name: "Office"
	},
	{
		physical_location_uuid: "019b838c-f2fd-7d24-ba35-25d06474c4d0",
		name: "Remote"
	},
	{
		physical_location_uuid: "019b838c-f2fd-7f83-ab90-761594f13578",
		name: "Hybrid"
	}
], Br = zr.map((e) => ({
	label: e.name,
	value: e.physical_location_uuid
})), Vr = [
	{
		proficiency_scale_uuid: "019b8396-c5f5-7138-beea-0a4f561c4ad2",
		level: 1,
		meaning: "Very Beginner",
		description: "No practical experience, only awareness"
	},
	{
		proficiency_scale_uuid: "019b8396-c5f8-7f3d-9475-ec4f15677fa3",
		level: 2,
		meaning: "Beginner",
		description: "Can follow tutorials, needs constant guidance"
	},
	{
		proficiency_scale_uuid: "019b8396-c5f9-7030-a77c-72dca3920ac1",
		level: 3,
		meaning: "Beginner+",
		description: "Can do simple tasks with help"
	},
	{
		proficiency_scale_uuid: "019b8396-c5f9-7097-a068-4313d2ba30f5",
		level: 4,
		meaning: "Basic",
		description: "Can handle straightforward tasks independently"
	},
	{
		proficiency_scale_uuid: "019b8396-c5f9-70f7-9155-82e4ad066468",
		level: 5,
		meaning: "Basic+",
		description: "Comfortable with common use cases"
	},
	{
		proficiency_scale_uuid: "019b8396-c5f9-714d-8882-88b82426e010",
		level: 6,
		meaning: "Intermediate",
		description: "Can solve non-trivial problems independently"
	},
	{
		proficiency_scale_uuid: "019b8396-c5f9-71ac-bfdd-64bdf8156a7a",
		level: 7,
		meaning: "Intermediate+",
		description: "Understands best practices and edge cases"
	},
	{
		proficiency_scale_uuid: "019b8396-c5f9-720a-98ba-57c1c59956c3",
		level: 8,
		meaning: "Advanced",
		description: "Designs solutions and mentors others"
	},
	{
		proficiency_scale_uuid: "019b8396-c5f9-7262-a8d0-543a69ea2067",
		level: 9,
		meaning: "Expert",
		description: "Deep domain expertise; optimizes and debugs complex issues"
	},
	{
		proficiency_scale_uuid: "019b8396-c5f9-72c2-bda8-41a1c312351c",
		level: 10,
		meaning: "Master",
		description: "Recognized authority who sets standards and innovates"
	}
], Hr = Vr.map((e) => ({
	label: `${e.level}/10 - ${e.meaning}`,
	value: e.proficiency_scale_uuid
})), Ur = [
	{
		sectors_uuid: "019b83a5-16d4-71ba-8e18-127f29de3b24",
		name: "Information Technology & Software"
	},
	{
		sectors_uuid: "019b83a5-16d7-7192-8d11-3f33445943a2",
		name: "Healthcare & Medical"
	},
	{
		sectors_uuid: "019b83a5-16d7-721b-80fe-3f2927dbd062",
		name: "Business, Finance & Legal"
	},
	{
		sectors_uuid: "019b83a5-16d7-7286-ba34-04e5b9ff4729",
		name: "Engineering & Manufacturing"
	},
	{
		sectors_uuid: "019b83a5-16d7-72ed-a650-f75de99efabc",
		name: "Education & Training"
	},
	{
		sectors_uuid: "019b83a5-16d7-7350-9d28-f9d4211c55b9",
		name: "Media, Design & Entertainment"
	},
	{
		sectors_uuid: "019b83a5-16d7-73b8-8b19-4ebff00daf28",
		name: "Sales, Retail & Customer Service"
	},
	{
		sectors_uuid: "019b83a5-16d7-7420-be93-48fdd44e8133",
		name: "Construction & Real Estate"
	},
	{
		sectors_uuid: "019b83a5-16d7-7486-93fa-9f71738f4f7c",
		name: "Hospitality, Travel & Tourism"
	},
	{
		sectors_uuid: "019b83a5-16d7-74ed-9788-c11e1a2bc8b3",
		name: "Logistics & Transportation"
	},
	{
		sectors_uuid: "019b83a5-16d7-754f-8bcf-24e166b3419b",
		name: "Government & Public Services"
	},
	{
		sectors_uuid: "019b83a5-16d7-75db-b5fc-8c80265eef8f",
		name: "Science, Research & Environmental"
	},
	{
		sectors_uuid: "019b83a5-16d7-7642-8644-47743c25eef0",
		name: "Energy & Utilities"
	},
	{
		sectors_uuid: "019b83a5-16d7-76a6-a329-86cf7fe56f73",
		name: "Recruiting & Staffing Agencies"
	},
	{
		sectors_uuid: "019b83a5-16d7-770d-abc6-6962b059e7e6",
		name: "Freelance, Remote & Gig Economy"
	},
	{
		sectors_uuid: "019b83a5-16d7-7775-ba90-d835f48c4d76",
		name: "Sports, Fitness & Recreation"
	},
	{
		sectors_uuid: "019b83a5-16d7-77db-be34-ce1c247c39b2",
		name: "Fashion, Beauty & Lifestyle"
	},
	{
		sectors_uuid: "019b83a5-16d7-7843-b837-ed13ad4cd05c",
		name: "Agriculture, Farming & Veterinary"
	},
	{
		sectors_uuid: "019b83a5-16d7-78a4-9709-9c80082c1f18",
		name: "Automotive & Mechanical Trades"
	},
	{
		sectors_uuid: "019b83a5-16d7-790d-a0ce-e9b0e714afed",
		name: "Handicrafts, Trades & Artisans"
	},
	{
		sectors_uuid: "019b83a5-16d7-797d-bea1-2afaf9bf2f71",
		name: "Others"
	}
], Wr = Ur.map((e) => ({
	label: e.name,
	value: e.sectors_uuid
})), Gr = [
	{
		sex_uuid: "019b83ac-ce10-78de-ac51-a80f373773c0",
		description: "Male"
	},
	{
		sex_uuid: "019b83ac-ce11-74d7-b53d-f0eaed2ad604",
		description: "Female"
	},
	{
		sex_uuid: "019b83ac-ce11-755d-aad1-db11faae90b4",
		description: "Prefer not to say"
	}
], Kr = Gr.map((e) => ({
	label: e.description,
	value: e.sex_uuid
})), qr = "TAENGMO", Jr = "PLACEHOLDER_STRING", Yr = 0, Xr = new Date(Date.now()), Zr = !1, Qr = "Loading...", $r = "Error!", ei = "N/A", ti = "Not specified", ni = "Your primary name", ri = "Your position";
//#endregion
//#region src/components/commons/CefrLevelsBadge.tsx
function ii(e) {
	switch (e) {
		case "019b834e-eb34-778f-b803-d37e680161ba": return "border-teal-300";
		case "019b834e-eb37-7363-bb7c-f9fbc77c2a0a": return "border-cyan-300";
		case "019b834e-eb37-7402-821a-e74d460541dd": return "border-sky-300";
		case "019b834e-eb37-745f-9f99-8c159f39a3e5": return "border-blue-300";
		case "019b834e-eb37-74bc-932f-559d2dfb4f81": return "border-indigo-300";
		case "019b834e-eb37-751b-b66c-91ddd57fe878": return "border-violet-300";
		default: return "border-red-300";
	}
}
function ai(e) {
	switch (e) {
		case "019b834e-eb34-778f-b803-d37e680161ba": return "bg-teal-100";
		case "019b834e-eb37-7363-bb7c-f9fbc77c2a0a": return "bg-cyan-100";
		case "019b834e-eb37-7402-821a-e74d460541dd": return "bg-sky-100";
		case "019b834e-eb37-745f-9f99-8c159f39a3e5": return "bg-blue-100";
		case "019b834e-eb37-74bc-932f-559d2dfb4f81": return "bg-indigo-100";
		case "019b834e-eb37-751b-b66c-91ddd57fe878": return "bg-violet-100";
		default: return "bg-red-100";
	}
}
function oi(e) {
	switch (e) {
		case "019b834e-eb34-778f-b803-d37e680161ba": return "text-teal-700";
		case "019b834e-eb37-7363-bb7c-f9fbc77c2a0a": return "text-cyan-700";
		case "019b834e-eb37-7402-821a-e74d460541dd": return "text-sky-700";
		case "019b834e-eb37-745f-9f99-8c159f39a3e5": return "text-blue-700";
		case "019b834e-eb37-74bc-932f-559d2dfb4f81": return "text-indigo-700";
		case "019b834e-eb37-751b-b66c-91ddd57fe878": return "text-violet-700";
		default: return "text-red-700";
	}
}
function si({ cefrLevelsUuid: e }) {
	return /* @__PURE__ */ t("div", {
		className: W("rounded-full border px-3 py-1 text-[14px] font-medium", ii(e), ai(e), oi(e)),
		children: wr.find((t) => t.value === e)?.label ?? "Error!"
	});
}
//#endregion
//#region node_modules/@mui/material/colors/common.mjs
var ci = {
	black: "#000",
	white: "#fff"
}, li = {
	50: "#ffebee",
	100: "#ffcdd2",
	200: "#ef9a9a",
	300: "#e57373",
	400: "#ef5350",
	500: "#f44336",
	600: "#e53935",
	700: "#d32f2f",
	800: "#c62828",
	900: "#b71c1c",
	A100: "#ff8a80",
	A200: "#ff5252",
	A400: "#ff1744",
	A700: "#d50000"
}, ui = {
	50: "#f3e5f5",
	100: "#e1bee7",
	200: "#ce93d8",
	300: "#ba68c8",
	400: "#ab47bc",
	500: "#9c27b0",
	600: "#8e24aa",
	700: "#7b1fa2",
	800: "#6a1b9a",
	900: "#4a148c",
	A100: "#ea80fc",
	A200: "#e040fb",
	A400: "#d500f9",
	A700: "#aa00ff"
}, di = {
	50: "#e3f2fd",
	100: "#bbdefb",
	200: "#90caf9",
	300: "#64b5f6",
	400: "#42a5f5",
	500: "#2196f3",
	600: "#1e88e5",
	700: "#1976d2",
	800: "#1565c0",
	900: "#0d47a1",
	A100: "#82b1ff",
	A200: "#448aff",
	A400: "#2979ff",
	A700: "#2962ff"
}, fi = {
	50: "#e1f5fe",
	100: "#b3e5fc",
	200: "#81d4fa",
	300: "#4fc3f7",
	400: "#29b6f6",
	500: "#03a9f4",
	600: "#039be5",
	700: "#0288d1",
	800: "#0277bd",
	900: "#01579b",
	A100: "#80d8ff",
	A200: "#40c4ff",
	A400: "#00b0ff",
	A700: "#0091ea"
}, pi = {
	50: "#e8f5e9",
	100: "#c8e6c9",
	200: "#a5d6a7",
	300: "#81c784",
	400: "#66bb6a",
	500: "#4caf50",
	600: "#43a047",
	700: "#388e3c",
	800: "#2e7d32",
	900: "#1b5e20",
	A100: "#b9f6ca",
	A200: "#69f0ae",
	A400: "#00e676",
	A700: "#00c853"
}, mi = {
	50: "#fff3e0",
	100: "#ffe0b2",
	200: "#ffcc80",
	300: "#ffb74d",
	400: "#ffa726",
	500: "#ff9800",
	600: "#fb8c00",
	700: "#f57c00",
	800: "#ef6c00",
	900: "#e65100",
	A100: "#ffd180",
	A200: "#ffab40",
	A400: "#ff9100",
	A700: "#ff6d00"
}, hi = {
	50: "#fafafa",
	100: "#f5f5f5",
	200: "#eeeeee",
	300: "#e0e0e0",
	400: "#bdbdbd",
	500: "#9e9e9e",
	600: "#757575",
	700: "#616161",
	800: "#424242",
	900: "#212121",
	A100: "#f5f5f5",
	A200: "#eeeeee",
	A400: "#bdbdbd",
	A700: "#616161"
};
//#endregion
//#region node_modules/@mui/utils/formatMuiErrorMessage/formatMuiErrorMessage.mjs
function gi(e, ...t) {
	let n = new URL(`https://mui.com/production-error/?code=${e}`);
	return t.forEach((e) => n.searchParams.append("args[]", e)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
//#endregion
//#region node_modules/@mui/material/styles/identifier.mjs
var _i = "$$material";
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/extends.js
function vi() {
	return vi = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, vi.apply(null, arguments);
}
//#endregion
//#region node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
var yi = !1;
function bi(e) {
	if (e.sheet) return e.sheet;
	/* istanbul ignore next */
	for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function xi(e) {
	var t = document.createElement("style");
	return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Si = /* @__PURE__ */ function() {
	function e(e) {
		var t = this;
		this._insertTag = function(e) {
			var n = t.tags.length === 0 ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling;
			t.container.insertBefore(e, n), t.tags.push(e);
		}, this.isSpeedy = e.speedy === void 0 ? !yi : e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null;
	}
	var t = e.prototype;
	return t.hydrate = function(e) {
		e.forEach(this._insertTag);
	}, t.insert = function(e) {
		this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(xi(this));
		var t = this.tags[this.tags.length - 1];
		if (this.isSpeedy) {
			var n = bi(t);
			try {
				n.insertRule(e, n.cssRules.length);
			} catch {}
		} else t.appendChild(document.createTextNode(e));
		this.ctr++;
	}, t.flush = function() {
		this.tags.forEach(function(e) {
			return e.parentNode?.removeChild(e);
		}), this.tags = [], this.ctr = 0;
	}, e;
}(), Ci = "-ms-", wi = "-moz-", G = "-webkit-", Ti = "comm", Ei = "rule", Di = "decl", Oi = "@import", ki = "@keyframes", Ai = "@layer", ji = Math.abs, Mi = String.fromCharCode, Ni = Object.assign;
function Pi(e, t) {
	return Ri(e, 0) ^ 45 ? (((t << 2 ^ Ri(e, 0)) << 2 ^ Ri(e, 1)) << 2 ^ Ri(e, 2)) << 2 ^ Ri(e, 3) : 0;
}
function Fi(e) {
	return e.trim();
}
function Ii(e, t) {
	return (e = t.exec(e)) ? e[0] : e;
}
function K(e, t, n) {
	return e.replace(t, n);
}
function Li(e, t) {
	return e.indexOf(t);
}
function Ri(e, t) {
	return e.charCodeAt(t) | 0;
}
function zi(e, t, n) {
	return e.slice(t, n);
}
function Bi(e) {
	return e.length;
}
function Vi(e) {
	return e.length;
}
function Hi(e, t) {
	return t.push(e), e;
}
function Ui(e, t) {
	return e.map(t).join("");
}
//#endregion
//#region node_modules/stylis/src/Tokenizer.js
var Wi = 1, Gi = 1, Ki = 0, qi = 0, Ji = 0, Yi = "";
function Xi(e, t, n, r, i, a, o) {
	return {
		value: e,
		root: t,
		parent: n,
		type: r,
		props: i,
		children: a,
		line: Wi,
		column: Gi,
		length: o,
		return: ""
	};
}
function Zi(e, t) {
	return Ni(Xi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Qi() {
	return Ji;
}
function $i() {
	return Ji = qi > 0 ? Ri(Yi, --qi) : 0, Gi--, Ji === 10 && (Gi = 1, Wi--), Ji;
}
function ea() {
	return Ji = qi < Ki ? Ri(Yi, qi++) : 0, Gi++, Ji === 10 && (Gi = 1, Wi++), Ji;
}
function ta() {
	return Ri(Yi, qi);
}
function na() {
	return qi;
}
function ra(e, t) {
	return zi(Yi, e, t);
}
function ia(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
function aa(e) {
	return Wi = Gi = 1, Ki = Bi(Yi = e), qi = 0, [];
}
function oa(e) {
	return Yi = "", e;
}
function sa(e) {
	return Fi(ra(qi - 1, ua(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ca(e) {
	for (; (Ji = ta()) && Ji < 33;) ea();
	return ia(e) > 2 || ia(Ji) > 3 ? "" : " ";
}
function la(e, t) {
	for (; --t && ea() && !(Ji < 48 || Ji > 102 || Ji > 57 && Ji < 65 || Ji > 70 && Ji < 97););
	return ra(e, na() + (t < 6 && ta() == 32 && ea() == 32));
}
function ua(e) {
	for (; ea();) switch (Ji) {
		case e: return qi;
		case 34:
		case 39:
			e !== 34 && e !== 39 && ua(Ji);
			break;
		case 40:
			e === 41 && ua(e);
			break;
		case 92:
			ea();
			break;
	}
	return qi;
}
function da(e, t) {
	for (; ea() && e + Ji !== 57 && !(e + Ji === 84 && ta() === 47););
	return "/*" + ra(t, qi - 1) + "*" + Mi(e === 47 ? e : ea());
}
function fa(e) {
	for (; !ia(ta());) ea();
	return ra(e, qi);
}
//#endregion
//#region node_modules/stylis/src/Parser.js
function pa(e) {
	return oa(ma("", null, null, null, [""], e = aa(e), 0, [0], e));
}
function ma(e, t, n, r, i, a, o, s, c) {
	for (var l = 0, u = 0, d = o, f = 0, p = 0, m = 0, h = 1, g = 1, _ = 1, v = 0, y = "", b = i, x = a, S = r, C = y; g;) switch (m = v, v = ea()) {
		case 40: if (m != 108 && Ri(C, d - 1) == 58) {
			Li(C += K(sa(v), "&", "&\f"), "&\f") != -1 && (_ = -1);
			break;
		}
		case 34:
		case 39:
		case 91:
			C += sa(v);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			C += ca(m);
			break;
		case 92:
			C += la(na() - 1, 7);
			continue;
		case 47:
			switch (ta()) {
				case 42:
				case 47:
					Hi(ga(da(ea(), na()), t, n), c);
					break;
				default: C += "/";
			}
			break;
		case 123 * h: s[l++] = Bi(C) * _;
		case 125 * h:
		case 59:
		case 0:
			switch (v) {
				case 0:
				case 125: g = 0;
				case 59 + u:
					_ == -1 && (C = K(C, /\f/g, "")), p > 0 && Bi(C) - d && Hi(p > 32 ? _a(C + ";", r, n, d - 1) : _a(K(C, " ", "") + ";", r, n, d - 2), c);
					break;
				case 59: C += ";";
				default: if (Hi(S = ha(C, t, n, l, u, i, s, y, b = [], x = [], d), a), v === 123) if (u === 0) ma(C, t, S, S, b, a, d, s, x);
				else switch (f === 99 && Ri(C, 3) === 110 ? 100 : f) {
					case 100:
					case 108:
					case 109:
					case 115:
						ma(e, S, S, r && Hi(ha(e, S, S, 0, 0, i, s, y, i, b = [], d), x), i, x, d, s, r ? b : x);
						break;
					default: ma(C, S, S, S, [""], x, 0, s, x);
				}
			}
			l = u = p = 0, h = _ = 1, y = C = "", d = o;
			break;
		case 58: d = 1 + Bi(C), p = m;
		default:
			if (h < 1) {
				if (v == 123) --h;
				else if (v == 125 && h++ == 0 && $i() == 125) continue;
			}
			switch (C += Mi(v), v * h) {
				case 38:
					_ = u > 0 ? 1 : (C += "\f", -1);
					break;
				case 44:
					s[l++] = (Bi(C) - 1) * _, _ = 1;
					break;
				case 64:
					ta() === 45 && (C += sa(ea())), f = ta(), u = d = Bi(y = C += fa(na())), v++;
					break;
				case 45: m === 45 && Bi(C) == 2 && (h = 0);
			}
	}
	return a;
}
function ha(e, t, n, r, i, a, o, s, c, l, u) {
	for (var d = i - 1, f = i === 0 ? a : [""], p = Vi(f), m = 0, h = 0, g = 0; m < r; ++m) for (var _ = 0, v = zi(e, d + 1, d = ji(h = o[m])), y = e; _ < p; ++_) (y = Fi(h > 0 ? f[_] + " " + v : K(v, /&\f/g, f[_]))) && (c[g++] = y);
	return Xi(e, t, n, i === 0 ? Ei : s, c, l, u);
}
function ga(e, t, n) {
	return Xi(e, t, n, Ti, Mi(Qi()), zi(e, 2, -2), 0);
}
function _a(e, t, n, r) {
	return Xi(e, t, n, Di, zi(e, 0, r), zi(e, r + 1, -1), r);
}
//#endregion
//#region node_modules/stylis/src/Serializer.js
function va(e, t) {
	for (var n = "", r = Vi(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
	return n;
}
function ya(e, t, n, r) {
	switch (e.type) {
		case Ai: if (e.children.length) break;
		case Oi:
		case Di: return e.return = e.return || e.value;
		case Ti: return "";
		case ki: return e.return = e.value + "{" + va(e.children, r) + "}";
		case Ei: e.value = e.props.join(",");
	}
	return Bi(n = va(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
//#endregion
//#region node_modules/stylis/src/Middleware.js
function ba(e) {
	var t = Vi(e);
	return function(n, r, i, a) {
		for (var o = "", s = 0; s < t; s++) o += e[s](n, r, i, a) || "";
		return o;
	};
}
function xa(e) {
	return function(t) {
		t.root || (t = t.return) && e(t);
	};
}
//#endregion
//#region node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function Sa(e) {
	var t = Object.create(null);
	return function(n) {
		return t[n] === void 0 && (t[n] = e(n)), t[n];
	};
}
//#endregion
//#region node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var Ca = function(e, t, n) {
	for (var r = 0, i = 0; r = i, i = ta(), r === 38 && i === 12 && (t[n] = 1), !ia(i);) ea();
	return ra(e, qi);
}, wa = function(e, t) {
	var n = -1, r = 44;
	do
		switch (ia(r)) {
			case 0:
				r === 38 && ta() === 12 && (t[n] = 1), e[n] += Ca(qi - 1, t, n);
				break;
			case 2:
				e[n] += sa(r);
				break;
			case 4: if (r === 44) {
				e[++n] = ta() === 58 ? "&\f" : "", t[n] = e[n].length;
				break;
			}
			default: e[n] += Mi(r);
		}
	while (r = ea());
	return e;
}, Ta = function(e, t) {
	return oa(wa(aa(e), t));
}, Ea = /* @__PURE__ */ new WeakMap(), Da = function(e) {
	if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
		for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line; n.type !== "rule";) if (n = n.parent, !n) return;
		if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Ea.get(n)) && !r) {
			Ea.set(e, !0);
			for (var i = [], a = Ta(t, i), o = n.props, s = 0, c = 0; s < a.length; s++) for (var l = 0; l < o.length; l++, c++) e.props[c] = i[s] ? a[s].replace(/&\f/g, o[l]) : o[l] + " " + a[s];
		}
	}
}, Oa = function(e) {
	if (e.type === "decl") {
		var t = e.value;
		t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
	}
};
function ka(e, t) {
	switch (Pi(e, t)) {
		case 5103: return G + "print-" + e + e;
		case 5737:
		case 4201:
		case 3177:
		case 3433:
		case 1641:
		case 4457:
		case 2921:
		case 5572:
		case 6356:
		case 5844:
		case 3191:
		case 6645:
		case 3005:
		case 6391:
		case 5879:
		case 5623:
		case 6135:
		case 4599:
		case 4855:
		case 4215:
		case 6389:
		case 5109:
		case 5365:
		case 5621:
		case 3829: return G + e + e;
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756: return G + e + wi + e + Ci + e + e;
		case 6828:
		case 4268: return G + e + Ci + e + e;
		case 6165: return G + e + Ci + "flex-" + e + e;
		case 5187: return G + e + K(e, /(\w+).+(:[^]+)/, G + "box-$1$2" + Ci + "flex-$1$2") + e;
		case 5443: return G + e + Ci + "flex-item-" + K(e, /flex-|-self/, "") + e;
		case 4675: return G + e + Ci + "flex-line-pack" + K(e, /align-content|flex-|-self/, "") + e;
		case 5548: return G + e + Ci + K(e, "shrink", "negative") + e;
		case 5292: return G + e + Ci + K(e, "basis", "preferred-size") + e;
		case 6060: return G + "box-" + K(e, "-grow", "") + G + e + Ci + K(e, "grow", "positive") + e;
		case 4554: return G + K(e, /([^-])(transform)/g, "$1" + G + "$2") + e;
		case 6187: return K(K(K(e, /(zoom-|grab)/, G + "$1"), /(image-set)/, G + "$1"), e, "") + e;
		case 5495:
		case 3959: return K(e, /(image-set\([^]*)/, G + "$1$`$1");
		case 4968: return K(K(e, /(.+:)(flex-)?(.*)/, G + "box-pack:$3" + Ci + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + G + e + e;
		case 4095:
		case 3583:
		case 4068:
		case 2532: return K(e, /(.+)-inline(.+)/, G + "$1$2") + e;
		case 8116:
		case 7059:
		case 5753:
		case 5535:
		case 5445:
		case 5701:
		case 4933:
		case 4677:
		case 5533:
		case 5789:
		case 5021:
		case 4765:
			if (Bi(e) - 1 - t > 6) switch (Ri(e, t + 1)) {
				case 109: if (Ri(e, t + 4) !== 45) break;
				case 102: return K(e, /(.+:)(.+)-([^]+)/, "$1" + G + "$2-$3$1" + wi + (Ri(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
				case 115: return ~Li(e, "stretch") ? ka(K(e, "stretch", "fill-available"), t) + e : e;
			}
			break;
		case 4949: if (Ri(e, t + 1) !== 115) break;
		case 6444:
			switch (Ri(e, Bi(e) - 3 - (~Li(e, "!important") && 10))) {
				case 107: return K(e, ":", ":" + G) + e;
				case 101: return K(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + G + (Ri(e, 14) === 45 ? "inline-" : "") + "box$3$1" + G + "$2$3$1" + Ci + "$2box$3") + e;
			}
			break;
		case 5936:
			switch (Ri(e, t + 11)) {
				case 114: return G + e + Ci + K(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
				case 108: return G + e + Ci + K(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
				case 45: return G + e + Ci + K(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
			}
			return G + e + Ci + e + e;
	}
	return e;
}
var Aa = [function(e, t, n, r) {
	if (e.length > -1 && !e.return) switch (e.type) {
		case Di:
			e.return = ka(e.value, e.length);
			break;
		case ki: return va([Zi(e, { value: K(e.value, "@", "@" + G) })], r);
		case Ei: if (e.length) return Ui(e.props, function(t) {
			switch (Ii(t, /(::plac\w+|:read-\w+)/)) {
				case ":read-only":
				case ":read-write": return va([Zi(e, { props: [K(t, /:(read-\w+)/, ":" + wi + "$1")] })], r);
				case "::placeholder": return va([
					Zi(e, { props: [K(t, /:(plac\w+)/, ":" + G + "input-$1")] }),
					Zi(e, { props: [K(t, /:(plac\w+)/, ":" + wi + "$1")] }),
					Zi(e, { props: [K(t, /:(plac\w+)/, Ci + "input-$1")] })
				], r);
			}
			return "";
		});
	}
}], ja = function(e) {
	var t = e.key;
	if (t === "css") {
		var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
		Array.prototype.forEach.call(n, function(e) {
			e.getAttribute("data-emotion").indexOf(" ") !== -1 && (document.head.appendChild(e), e.setAttribute("data-s", ""));
		});
	}
	var r = e.stylisPlugins || Aa, i = {}, a, o = [];
	a = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + t + " \"]"), function(e) {
		for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) i[t[n]] = !0;
		o.push(e);
	});
	var s, c = [Da, Oa], l, u = [ya, xa(function(e) {
		l.insert(e);
	})], d = ba(c.concat(r, u)), f = function(e) {
		return va(pa(e), d);
	};
	s = function(e, t, n, r) {
		l = n, f(e ? e + "{" + t.styles + "}" : t.styles), r && (p.inserted[t.name] = !0);
	};
	var p = {
		key: t,
		sheet: new Si({
			key: t,
			container: a,
			nonce: e.nonce,
			speedy: e.speedy,
			prepend: e.prepend,
			insertionPoint: e.insertionPoint
		}),
		nonce: e.nonce,
		inserted: i,
		registered: {},
		insert: s
	};
	return p.sheet.hydrate(o), p;
}, Ma = /* @__PURE__ */ C(((e) => {
	var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
	function b(e) {
		if (typeof e == "object" && e) {
			var t = e.$$typeof;
			switch (t) {
				case n: switch (e = e.type, e) {
					case l:
					case u:
					case i:
					case o:
					case a:
					case f: return e;
					default: switch (e &&= e.$$typeof, e) {
						case c:
						case d:
						case h:
						case m:
						case s: return e;
						default: return t;
					}
				}
				case r: return t;
			}
		}
	}
	function x(e) {
		return b(e) === u;
	}
	e.AsyncMode = l, e.ConcurrentMode = u, e.ContextConsumer = c, e.ContextProvider = s, e.Element = n, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = m, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(e) {
		return x(e) || b(e) === l;
	}, e.isConcurrentMode = x, e.isContextConsumer = function(e) {
		return b(e) === c;
	}, e.isContextProvider = function(e) {
		return b(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === n;
	}, e.isForwardRef = function(e) {
		return b(e) === d;
	}, e.isFragment = function(e) {
		return b(e) === i;
	}, e.isLazy = function(e) {
		return b(e) === h;
	}, e.isMemo = function(e) {
		return b(e) === m;
	}, e.isPortal = function(e) {
		return b(e) === r;
	}, e.isProfiler = function(e) {
		return b(e) === o;
	}, e.isStrictMode = function(e) {
		return b(e) === a;
	}, e.isSuspense = function(e) {
		return b(e) === f;
	}, e.isValidElementType = function(e) {
		return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
	}, e.typeOf = b;
})), Na = /* @__PURE__ */ C(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
		function b(e) {
			return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
		}
		function x(e) {
			if (typeof e == "object" && e) {
				var t = e.$$typeof;
				switch (t) {
					case n:
						var p = e.type;
						switch (p) {
							case l:
							case u:
							case i:
							case o:
							case a:
							case f: return p;
							default:
								var g = p && p.$$typeof;
								switch (g) {
									case c:
									case d:
									case h:
									case m:
									case s: return g;
									default: return t;
								}
						}
					case r: return t;
				}
			}
		}
		var S = l, C = u, w = c, T = s, E = n, D = d, O = i, k = h, A = m, j = r, M = o, N = a, ee = f, te = !1;
		function P(e) {
			return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ne(e) || x(e) === l;
		}
		function ne(e) {
			return x(e) === u;
		}
		function re(e) {
			return x(e) === c;
		}
		function ie(e) {
			return x(e) === s;
		}
		function ae(e) {
			return typeof e == "object" && !!e && e.$$typeof === n;
		}
		function F(e) {
			return x(e) === d;
		}
		function I(e) {
			return x(e) === i;
		}
		function oe(e) {
			return x(e) === h;
		}
		function se(e) {
			return x(e) === m;
		}
		function L(e) {
			return x(e) === r;
		}
		function R(e) {
			return x(e) === o;
		}
		function ce(e) {
			return x(e) === a;
		}
		function le(e) {
			return x(e) === f;
		}
		e.AsyncMode = S, e.ConcurrentMode = C, e.ContextConsumer = w, e.ContextProvider = T, e.Element = E, e.ForwardRef = D, e.Fragment = O, e.Lazy = k, e.Memo = A, e.Portal = j, e.Profiler = M, e.StrictMode = N, e.Suspense = ee, e.isAsyncMode = P, e.isConcurrentMode = ne, e.isContextConsumer = re, e.isContextProvider = ie, e.isElement = ae, e.isForwardRef = F, e.isFragment = I, e.isLazy = oe, e.isMemo = se, e.isPortal = L, e.isProfiler = R, e.isStrictMode = ce, e.isSuspense = le, e.isValidElementType = b, e.typeOf = x;
	})();
})), Pa = /* @__PURE__ */ C(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = Ma() : t.exports = Na();
})), Fa = /* @__PURE__ */ C(((e, t) => {
	var n = Pa(), r = {
		childContextTypes: !0,
		contextType: !0,
		contextTypes: !0,
		defaultProps: !0,
		displayName: !0,
		getDefaultProps: !0,
		getDerivedStateFromError: !0,
		getDerivedStateFromProps: !0,
		mixins: !0,
		propTypes: !0,
		type: !0
	}, i = {
		name: !0,
		length: !0,
		prototype: !0,
		caller: !0,
		callee: !0,
		arguments: !0,
		arity: !0
	}, a = {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0
	}, o = {
		$$typeof: !0,
		compare: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
		type: !0
	}, s = {};
	s[n.ForwardRef] = a, s[n.Memo] = o;
	function c(e) {
		return n.isMemo(e) ? o : s[e.$$typeof] || r;
	}
	var l = Object.defineProperty, u = Object.getOwnPropertyNames, d = Object.getOwnPropertySymbols, f = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, m = Object.prototype;
	function h(e, t, n) {
		if (typeof t != "string") {
			if (m) {
				var r = p(t);
				r && r !== m && h(e, r, n);
			}
			var a = u(t);
			d && (a = a.concat(d(t)));
			for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
				var _ = a[g];
				if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
					var v = f(t, _);
					try {
						l(e, _, v);
					} catch {}
				}
			}
		}
		return e;
	}
	t.exports = h;
})), Ia = !0;
function La(e, t, n) {
	var r = "";
	return n.split(" ").forEach(function(n) {
		e[n] === void 0 ? n && (r += n + " ") : t.push(e[n] + ";");
	}), r;
}
var Ra = function(e, t, n) {
	var r = e.key + "-" + t.name;
	(n === !1 || Ia === !1) && e.registered[r] === void 0 && (e.registered[r] = t.styles);
}, za = function(e, t, n) {
	Ra(e, t, n);
	var r = e.key + "-" + t.name;
	if (e.inserted[t.name] === void 0) {
		var i = t;
		do
			e.insert(t === i ? "." + r : "", i, e.sheet, !0), i = i.next;
		while (i !== void 0);
	}
};
//#endregion
//#region node_modules/@emotion/hash/dist/emotion-hash.esm.js
function Ba(e) {
	for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4) n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
	switch (i) {
		case 3: t ^= (e.charCodeAt(r + 2) & 255) << 16;
		case 2: t ^= (e.charCodeAt(r + 1) & 255) << 8;
		case 1: t ^= e.charCodeAt(r) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
	}
	return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
//#endregion
//#region node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var Va = {
	animationIterationCount: 1,
	aspectRatio: 1,
	borderImageOutset: 1,
	borderImageSlice: 1,
	borderImageWidth: 1,
	boxFlex: 1,
	boxFlexGroup: 1,
	boxOrdinalGroup: 1,
	columnCount: 1,
	columns: 1,
	flex: 1,
	flexGrow: 1,
	flexPositive: 1,
	flexShrink: 1,
	flexNegative: 1,
	flexOrder: 1,
	gridRow: 1,
	gridRowEnd: 1,
	gridRowSpan: 1,
	gridRowStart: 1,
	gridColumn: 1,
	gridColumnEnd: 1,
	gridColumnSpan: 1,
	gridColumnStart: 1,
	msGridRow: 1,
	msGridRowSpan: 1,
	msGridColumn: 1,
	msGridColumnSpan: 1,
	fontWeight: 1,
	lineHeight: 1,
	opacity: 1,
	order: 1,
	orphans: 1,
	scale: 1,
	tabSize: 1,
	widows: 1,
	zIndex: 1,
	zoom: 1,
	WebkitLineClamp: 1,
	fillOpacity: 1,
	floodOpacity: 1,
	stopOpacity: 1,
	strokeDasharray: 1,
	strokeDashoffset: 1,
	strokeMiterlimit: 1,
	strokeOpacity: 1,
	strokeWidth: 1
}, Ha = !1, Ua = /[A-Z]|^ms/g, Wa = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ga = function(e) {
	return e.charCodeAt(1) === 45;
}, Ka = function(e) {
	return e != null && typeof e != "boolean";
}, qa = /* @__PURE__ */ Sa(function(e) {
	return Ga(e) ? e : e.replace(Ua, "-$&").toLowerCase();
}), Ja = function(e, t) {
	switch (e) {
		case "animation":
		case "animationName": if (typeof t == "string") return t.replace(Wa, function(e, t, n) {
			return $a = {
				name: t,
				styles: n,
				next: $a
			}, t;
		});
	}
	return Va[e] !== 1 && !Ga(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
}, Ya = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Xa(e, t, n) {
	if (n == null) return "";
	var r = n;
	if (r.__emotion_styles !== void 0) return r;
	switch (typeof n) {
		case "boolean": return "";
		case "object":
			var i = n;
			if (i.anim === 1) return $a = {
				name: i.name,
				styles: i.styles,
				next: $a
			}, i.name;
			var a = n;
			if (a.styles !== void 0) {
				var o = a.next;
				if (o !== void 0) for (; o !== void 0;) $a = {
					name: o.name,
					styles: o.styles,
					next: $a
				}, o = o.next;
				return a.styles + ";";
			}
			return Za(e, t, n);
		case "function":
			if (e !== void 0) {
				var s = $a, c = n(e);
				return $a = s, Xa(e, t, c);
			}
			break;
	}
	var l = n;
	if (t == null) return l;
	var u = t[l];
	return u === void 0 ? l : u;
}
function Za(e, t, n) {
	var r = "";
	if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r += Xa(e, t, n[i]) + ";";
	else for (var a in n) {
		var o = n[a];
		if (typeof o != "object") {
			var s = o;
			t != null && t[s] !== void 0 ? r += a + "{" + t[s] + "}" : Ka(s) && (r += qa(a) + ":" + Ja(a, s) + ";");
		} else {
			if (a === "NO_COMPONENT_SELECTOR" && Ha) throw Error(Ya);
			if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0)) for (var c = 0; c < o.length; c++) Ka(o[c]) && (r += qa(a) + ":" + Ja(a, o[c]) + ";");
			else {
				var l = Xa(e, t, o);
				switch (a) {
					case "animation":
					case "animationName":
						r += qa(a) + ":" + l + ";";
						break;
					default: r += a + "{" + l + "}";
				}
			}
		}
	}
	return r;
}
var Qa = /label:\s*([^\s;{]+)\s*(;|$)/g, $a;
function eo(e, t, n) {
	if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0) return e[0];
	var r = !0, i = "";
	$a = void 0;
	var a = e[0];
	a == null || a.raw === void 0 ? (r = !1, i += Xa(n, t, a)) : i += a[0];
	for (var o = 1; o < e.length; o++) i += Xa(n, t, e[o]), r && (i += a[o]);
	Qa.lastIndex = 0;
	for (var s = "", c; (c = Qa.exec(i)) !== null;) s += "-" + c[1];
	return {
		name: Ba(i) + s,
		styles: i,
		next: $a
	};
}
//#endregion
//#region node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
var to = function(e) {
	return e();
}, no = r.useInsertionEffect ? r.useInsertionEffect : !1, ro = no || to, io = no || r.useLayoutEffect, ao = /* @__PURE__ */ r.createContext(typeof HTMLElement < "u" ? /* @__PURE__ */ ja({ key: "css" }) : null);
ao.Provider;
var oo = function(e) {
	return /* @__PURE__ */ l(function(t, n) {
		return e(t, d(ao), n);
	});
}, so = /* @__PURE__ */ r.createContext({}), co = {}.hasOwnProperty, lo = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", uo = function(e, t) {
	var n = {};
	for (var r in t) co.call(t, r) && (n[r] = t[r]);
	return n[lo] = e, n;
}, fo = function(e) {
	var t = e.cache, n = e.serialized, r = e.isStringTag;
	return Ra(t, n, r), ro(function() {
		return za(t, n, r);
	}), null;
}, po = /* @__PURE__ */ oo(function(e, t, n) {
	var i = e.css;
	typeof i == "string" && t.registered[i] !== void 0 && (i = t.registered[i]);
	var a = e[lo], o = [i], s = "";
	typeof e.className == "string" ? s = La(t.registered, o, e.className) : e.className != null && (s = e.className + " ");
	var c = eo(o, void 0, r.useContext(so));
	s += t.key + "-" + c.name;
	var l = {};
	for (var u in e) co.call(e, u) && u !== "css" && u !== lo && (l[u] = e[u]);
	return l.className = s, n && (l.ref = n), /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(fo, {
		cache: t,
		serialized: c,
		isStringTag: typeof a == "string"
	}), /* @__PURE__ */ r.createElement(a, l));
});
Fa();
var mo = function(e, t) {
	var n = arguments;
	if (t == null || !co.call(t, "css")) return r.createElement.apply(void 0, n);
	var i = n.length, a = Array(i);
	a[0] = po, a[1] = uo(e, t);
	for (var o = 2; o < i; o++) a[o] = n[o];
	return r.createElement.apply(null, a);
};
(function(e) {
	var t;
	(function(e) {})(t ||= e.JSX ||= {});
})(mo ||= {});
var ho = /* @__PURE__ */ oo(function(e, t) {
	var n = e.styles, i = eo([n], void 0, r.useContext(so)), a = r.useRef();
	return io(function() {
		var e = t.key + "-global", n = new t.sheet.constructor({
			key: e,
			nonce: t.sheet.nonce,
			container: t.sheet.container,
			speedy: t.sheet.isSpeedy
		}), r = !1, o = document.querySelector("style[data-emotion=\"" + e + " " + i.name + "\"]");
		return t.sheet.tags.length && (n.before = t.sheet.tags[0]), o !== null && (r = !0, o.setAttribute("data-emotion", e), n.hydrate([o])), a.current = [n, r], function() {
			n.flush();
		};
	}, [t]), io(function() {
		var e = a.current, n = e[0];
		if (e[1]) {
			e[1] = !1;
			return;
		}
		i.next !== void 0 && za(t, i.next, !0), n.tags.length && (n.before = n.tags[n.tags.length - 1].nextElementSibling, n.flush()), t.insert("", i, n, !1);
	}, [t, i.name]), null;
});
function go() {
	return eo([...arguments]);
}
function _o() {
	var e = go.apply(void 0, arguments), t = "animation-" + e.name;
	return {
		name: t,
		styles: "@keyframes " + t + "{" + e.styles + "}",
		anim: 1,
		toString: function() {
			return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
		}
	};
}
//#endregion
//#region node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
var vo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, yo = /* @__PURE__ */ Sa(function(e) {
	return vo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
}), bo = !1, xo = yo, So = function(e) {
	return e !== "theme";
}, Co = function(e) {
	return typeof e == "string" && e.charCodeAt(0) > 96 ? xo : So;
}, wo = function(e, t, n) {
	var r;
	if (t) {
		var i = t.shouldForwardProp;
		r = e.__emotion_forwardProp && i ? function(t) {
			return e.__emotion_forwardProp(t) && i(t);
		} : i;
	}
	return typeof r != "function" && n && (r = e.__emotion_forwardProp), r;
}, To = function(e) {
	var t = e.cache, n = e.serialized, r = e.isStringTag;
	return Ra(t, n, r), ro(function() {
		return za(t, n, r);
	}), null;
}, Eo = function e(t, n) {
	var i = t.__emotion_real === t, a = i && t.__emotion_base || t, o, s;
	n !== void 0 && (o = n.label, s = n.target);
	var c = wo(t, n, i), l = c || Co(a), u = !l("as");
	return function() {
		var d = arguments, f = i && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
		if (o !== void 0 && f.push("label:" + o + ";"), d[0] == null || d[0].raw === void 0) f.push.apply(f, d);
		else {
			var p = d[0];
			f.push(p[0]);
			for (var m = d.length, h = 1; h < m; h++) f.push(d[h], p[h]);
		}
		var g = oo(function(e, t, n) {
			var i = u && e.as || a, o = "", d = [], p = e;
			if (e.theme == null) {
				for (var m in p = {}, e) p[m] = e[m];
				p.theme = r.useContext(so);
			}
			typeof e.className == "string" ? o = La(t.registered, d, e.className) : e.className != null && (o = e.className + " ");
			var h = eo(f.concat(d), t.registered, p);
			o += t.key + "-" + h.name, s !== void 0 && (o += " " + s);
			var g = u && c === void 0 ? Co(i) : l, _ = {};
			for (var v in e) u && v === "as" || g(v) && (_[v] = e[v]);
			return _.className = o, n && (_.ref = n), /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(To, {
				cache: t,
				serialized: h,
				isStringTag: typeof i == "string"
			}), /* @__PURE__ */ r.createElement(i, _));
		});
		return g.displayName = o === void 0 ? "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")" : o, g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = a, g.__emotion_styles = f, g.__emotion_forwardProp = c, Object.defineProperty(g, "toString", { value: function() {
			return s === void 0 && bo ? "NO_COMPONENT_SELECTOR" : "." + s;
		} }), g.withComponent = function(t, r) {
			return e(t, vi({}, n, r, { shouldForwardProp: wo(g, r, !0) })).apply(void 0, f);
		}, g;
	};
}, Do = /* @__PURE__ */ "a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan".split("."), Oo = Eo.bind(null);
Do.forEach(function(e) {
	Oo[e] = Oo(e);
});
//#endregion
//#region node_modules/prop-types/node_modules/react-is/cjs/react-is.production.min.js
var ko = /* @__PURE__ */ C(((e) => {
	var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
	function b(e) {
		if (typeof e == "object" && e) {
			var t = e.$$typeof;
			switch (t) {
				case n: switch (e = e.type, e) {
					case l:
					case u:
					case i:
					case o:
					case a:
					case f: return e;
					default: switch (e &&= e.$$typeof, e) {
						case c:
						case d:
						case h:
						case m:
						case s: return e;
						default: return t;
					}
				}
				case r: return t;
			}
		}
	}
	function x(e) {
		return b(e) === u;
	}
	e.AsyncMode = l, e.ConcurrentMode = u, e.ContextConsumer = c, e.ContextProvider = s, e.Element = n, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = m, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(e) {
		return x(e) || b(e) === l;
	}, e.isConcurrentMode = x, e.isContextConsumer = function(e) {
		return b(e) === c;
	}, e.isContextProvider = function(e) {
		return b(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === n;
	}, e.isForwardRef = function(e) {
		return b(e) === d;
	}, e.isFragment = function(e) {
		return b(e) === i;
	}, e.isLazy = function(e) {
		return b(e) === h;
	}, e.isMemo = function(e) {
		return b(e) === m;
	}, e.isPortal = function(e) {
		return b(e) === r;
	}, e.isProfiler = function(e) {
		return b(e) === o;
	}, e.isStrictMode = function(e) {
		return b(e) === a;
	}, e.isSuspense = function(e) {
		return b(e) === f;
	}, e.isValidElementType = function(e) {
		return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
	}, e.typeOf = b;
})), Ao = /* @__PURE__ */ C(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
		function b(e) {
			return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
		}
		function x(e) {
			if (typeof e == "object" && e) {
				var t = e.$$typeof;
				switch (t) {
					case n:
						var p = e.type;
						switch (p) {
							case l:
							case u:
							case i:
							case o:
							case a:
							case f: return p;
							default:
								var g = p && p.$$typeof;
								switch (g) {
									case c:
									case d:
									case h:
									case m:
									case s: return g;
									default: return t;
								}
						}
					case r: return t;
				}
			}
		}
		var S = l, C = u, w = c, T = s, E = n, D = d, O = i, k = h, A = m, j = r, M = o, N = a, ee = f, te = !1;
		function P(e) {
			return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ne(e) || x(e) === l;
		}
		function ne(e) {
			return x(e) === u;
		}
		function re(e) {
			return x(e) === c;
		}
		function ie(e) {
			return x(e) === s;
		}
		function ae(e) {
			return typeof e == "object" && !!e && e.$$typeof === n;
		}
		function F(e) {
			return x(e) === d;
		}
		function I(e) {
			return x(e) === i;
		}
		function oe(e) {
			return x(e) === h;
		}
		function se(e) {
			return x(e) === m;
		}
		function L(e) {
			return x(e) === r;
		}
		function R(e) {
			return x(e) === o;
		}
		function ce(e) {
			return x(e) === a;
		}
		function le(e) {
			return x(e) === f;
		}
		e.AsyncMode = S, e.ConcurrentMode = C, e.ContextConsumer = w, e.ContextProvider = T, e.Element = E, e.ForwardRef = D, e.Fragment = O, e.Lazy = k, e.Memo = A, e.Portal = j, e.Profiler = M, e.StrictMode = N, e.Suspense = ee, e.isAsyncMode = P, e.isConcurrentMode = ne, e.isContextConsumer = re, e.isContextProvider = ie, e.isElement = ae, e.isForwardRef = F, e.isFragment = I, e.isLazy = oe, e.isMemo = se, e.isPortal = L, e.isProfiler = R, e.isStrictMode = ce, e.isSuspense = le, e.isValidElementType = b, e.typeOf = x;
	})();
})), jo = /* @__PURE__ */ C(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = ko() : t.exports = Ao();
})), Mo = /* @__PURE__ */ C(((e, t) => {
	var n = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
	function a(e) {
		if (e == null) throw TypeError("Object.assign cannot be called with null or undefined");
		return Object(e);
	}
	function o() {
		try {
			if (!Object.assign) return !1;
			var e = /* @__PURE__ */ new String("abc");
			if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5") return !1;
			for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
			if (Object.getOwnPropertyNames(t).map(function(e) {
				return t[e];
			}).join("") !== "0123456789") return !1;
			var r = {};
			return "abcdefghijklmnopqrst".split("").forEach(function(e) {
				r[e] = e;
			}), Object.keys(Object.assign({}, r)).join("") === "abcdefghijklmnopqrst";
		} catch {
			return !1;
		}
	}
	t.exports = o() ? Object.assign : function(e, t) {
		for (var o, s = a(e), c, l = 1; l < arguments.length; l++) {
			for (var u in o = Object(arguments[l]), o) r.call(o, u) && (s[u] = o[u]);
			if (n) {
				c = n(o);
				for (var d = 0; d < c.length; d++) i.call(o, c[d]) && (s[c[d]] = o[c[d]]);
			}
		}
		return s;
	};
})), No = /* @__PURE__ */ C(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), Po = /* @__PURE__ */ C(((e, t) => {
	t.exports = Function.call.bind(Object.prototype.hasOwnProperty);
})), Fo = /* @__PURE__ */ C(((e, t) => {
	var n = function() {};
	if (process.env.NODE_ENV !== "production") {
		var r = No(), i = {}, a = Po();
		n = function(e) {
			var t = "Warning: " + e;
			typeof console < "u" && console.error(t);
			try {
				throw Error(t);
			} catch {}
		};
	}
	function o(e, t, o, s, c) {
		if (process.env.NODE_ENV !== "production") {
			for (var l in e) if (a(e, l)) {
				var u;
				try {
					if (typeof e[l] != "function") {
						var d = Error((s || "React class") + ": " + o + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
						throw d.name = "Invariant Violation", d;
					}
					u = e[l](t, l, s, o, null, r);
				} catch (e) {
					u = e;
				}
				if (u && !(u instanceof Error) && n((s || "React class") + ": type specification of " + o + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), u instanceof Error && !(u.message in i)) {
					i[u.message] = !0;
					var f = c ? c() : "";
					n("Failed " + o + " type: " + u.message + (f ?? ""));
				}
			}
		}
	}
	o.resetWarningCache = function() {
		process.env.NODE_ENV !== "production" && (i = {});
	}, t.exports = o;
})), Io = /* @__PURE__ */ C(((e, t) => {
	var n = jo(), r = Mo(), i = No(), a = Po(), o = Fo(), s = function() {};
	process.env.NODE_ENV !== "production" && (s = function(e) {
		var t = "Warning: " + e;
		typeof console < "u" && console.error(t);
		try {
			throw Error(t);
		} catch {}
	});
	function c() {
		return null;
	}
	t.exports = function(e, t) {
		var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
		function d(e) {
			var t = e && (l && e[l] || e[u]);
			if (typeof t == "function") return t;
		}
		var f = "<<anonymous>>", p = {
			array: _("array"),
			bigint: _("bigint"),
			bool: _("boolean"),
			func: _("function"),
			number: _("number"),
			object: _("object"),
			string: _("string"),
			symbol: _("symbol"),
			any: v(),
			arrayOf: y,
			element: b(),
			elementType: x(),
			instanceOf: S,
			node: E(),
			objectOf: w,
			oneOf: C,
			oneOfType: T,
			shape: O,
			exact: k
		};
		function m(e, t) {
			return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
		}
		function h(e, t) {
			this.message = e, this.data = t && typeof t == "object" ? t : {}, this.stack = "";
		}
		h.prototype = Error.prototype;
		function g(e) {
			if (process.env.NODE_ENV !== "production") var n = {}, r = 0;
			function a(a, o, c, l, u, d, p) {
				if (l ||= f, d ||= c, p !== i) {
					if (t) {
						var m = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
						throw m.name = "Invariant Violation", m;
					} else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
						var g = l + ":" + c;
						!n[g] && r < 3 && (s("You are manually calling a React.PropTypes validation function for the `" + d + "` prop on `" + l + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), n[g] = !0, r++);
					}
				}
				return o[c] == null ? a ? o[c] === null ? new h("The " + u + " `" + d + "` is marked as required " + ("in `" + l + "`, but its value is `null`.")) : new h("The " + u + " `" + d + "` is marked as required in " + ("`" + l + "`, but its value is `undefined`.")) : null : e(o, c, l, u, d);
			}
			var o = a.bind(null, !1);
			return o.isRequired = a.bind(null, !0), o;
		}
		function _(e) {
			function t(t, n, r, i, a, o) {
				var s = t[n];
				if (M(s) !== e) {
					var c = N(s);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected ") + ("`" + e + "`."), { expectedType: e });
				}
				return null;
			}
			return g(t);
		}
		function v() {
			return g(c);
		}
		function y(e) {
			function t(t, n, r, a, o) {
				if (typeof e != "function") return new h("Property `" + o + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
				var s = t[n];
				if (!Array.isArray(s)) {
					var c = M(s);
					return new h("Invalid " + a + " `" + o + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected an array."));
				}
				for (var l = 0; l < s.length; l++) {
					var u = e(s, l, r, a, o + "[" + l + "]", i);
					if (u instanceof Error) return u;
				}
				return null;
			}
			return g(t);
		}
		function b() {
			function t(t, n, r, i, a) {
				var o = t[n];
				if (!e(o)) {
					var s = M(o);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected a single ReactElement."));
				}
				return null;
			}
			return g(t);
		}
		function x() {
			function e(e, t, r, i, a) {
				var o = e[t];
				if (!n.isValidElementType(o)) {
					var s = M(o);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected a single ReactElement type."));
				}
				return null;
			}
			return g(e);
		}
		function S(e) {
			function t(t, n, r, i, a) {
				if (!(t[n] instanceof e)) {
					var o = e.name || f, s = te(t[n]);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected ") + ("instance of `" + o + "`."));
				}
				return null;
			}
			return g(t);
		}
		function C(e) {
			if (!Array.isArray(e)) return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).") : s("Invalid argument supplied to oneOf, expected an array.")), c;
			function t(t, n, r, i, a) {
				for (var o = t[n], s = 0; s < e.length; s++) if (m(o, e[s])) return null;
				var c = JSON.stringify(e, function(e, t) {
					return N(t) === "symbol" ? String(t) : t;
				});
				return new h("Invalid " + i + " `" + a + "` of value `" + String(o) + "` " + ("supplied to `" + r + "`, expected one of " + c + "."));
			}
			return g(t);
		}
		function w(e) {
			function t(t, n, r, o, s) {
				if (typeof e != "function") return new h("Property `" + s + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
				var c = t[n], l = M(c);
				if (l !== "object") return new h("Invalid " + o + " `" + s + "` of type " + ("`" + l + "` supplied to `" + r + "`, expected an object."));
				for (var u in c) if (a(c, u)) {
					var d = e(c, u, r, o, s + "." + u, i);
					if (d instanceof Error) return d;
				}
				return null;
			}
			return g(t);
		}
		function T(e) {
			if (!Array.isArray(e)) return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), c;
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				if (typeof n != "function") return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(n) + " at index " + t + "."), c;
			}
			function r(t, n, r, o, s) {
				for (var c = [], l = 0; l < e.length; l++) {
					var u = e[l], d = u(t, n, r, o, s, i);
					if (d == null) return null;
					d.data && a(d.data, "expectedType") && c.push(d.data.expectedType);
				}
				var f = c.length > 0 ? ", expected one of type [" + c.join(", ") + "]" : "";
				return new h("Invalid " + o + " `" + s + "` supplied to " + ("`" + r + "`" + f + "."));
			}
			return g(r);
		}
		function E() {
			function e(e, t, n, r, i) {
				return A(e[t]) ? null : new h("Invalid " + r + " `" + i + "` supplied to " + ("`" + n + "`, expected a ReactNode."));
			}
			return g(e);
		}
		function D(e, t, n, r, i) {
			return new h((e || "React class") + ": " + t + " type `" + n + "." + r + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + i + "`.");
		}
		function O(e) {
			function t(t, n, r, a, o) {
				var s = t[n], c = M(s);
				if (c !== "object") return new h("Invalid " + a + " `" + o + "` of type `" + c + "` " + ("supplied to `" + r + "`, expected `object`."));
				for (var l in e) {
					var u = e[l];
					if (typeof u != "function") return D(r, a, o, l, N(u));
					var d = u(s, l, r, a, o + "." + l, i);
					if (d) return d;
				}
				return null;
			}
			return g(t);
		}
		function k(e) {
			function t(t, n, o, s, c) {
				var l = t[n], u = M(l);
				if (u !== "object") return new h("Invalid " + s + " `" + c + "` of type `" + u + "` " + ("supplied to `" + o + "`, expected `object`."));
				for (var d in r({}, t[n], e)) {
					var f = e[d];
					if (a(e, d) && typeof f != "function") return D(o, s, c, d, N(f));
					if (!f) return new h("Invalid " + s + " `" + c + "` key `" + d + "` supplied to `" + o + "`.\nBad object: " + JSON.stringify(t[n], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
					var p = f(l, d, o, s, c + "." + d, i);
					if (p) return p;
				}
				return null;
			}
			return g(t);
		}
		function A(t) {
			switch (typeof t) {
				case "number":
				case "string":
				case "undefined": return !0;
				case "boolean": return !t;
				case "object":
					if (Array.isArray(t)) return t.every(A);
					if (t === null || e(t)) return !0;
					var n = d(t);
					if (n) {
						var r = n.call(t), i;
						if (n !== t.entries) {
							for (; !(i = r.next()).done;) if (!A(i.value)) return !1;
						} else for (; !(i = r.next()).done;) {
							var a = i.value;
							if (a && !A(a[1])) return !1;
						}
					} else return !1;
					return !0;
				default: return !1;
			}
		}
		function j(e, t) {
			return e === "symbol" ? !0 : t ? t["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && t instanceof Symbol : !1;
		}
		function M(e) {
			var t = typeof e;
			return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : j(t, e) ? "symbol" : t;
		}
		function N(e) {
			if (e == null) return "" + e;
			var t = M(e);
			if (t === "object") {
				if (e instanceof Date) return "date";
				if (e instanceof RegExp) return "regexp";
			}
			return t;
		}
		function ee(e) {
			var t = N(e);
			switch (t) {
				case "array":
				case "object": return "an " + t;
				case "boolean":
				case "date":
				case "regexp": return "a " + t;
				default: return t;
			}
		}
		function te(e) {
			return !e.constructor || !e.constructor.name ? f : e.constructor.name;
		}
		return p.checkPropTypes = o, p.resetWarningCache = o.resetWarningCache, p.PropTypes = p, p;
	};
})), Lo = /* @__PURE__ */ C(((e, t) => {
	var n = No();
	function r() {}
	function i() {}
	i.resetWarningCache = r, t.exports = function() {
		function e(e, t, r, i, a, o) {
			if (o !== n) {
				var s = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw s.name = "Invariant Violation", s;
			}
		}
		e.isRequired = e;
		function t() {
			return e;
		}
		var a = {
			array: e,
			bigint: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			elementType: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
			exact: t,
			checkPropTypes: i,
			resetWarningCache: r
		};
		return a.PropTypes = a, a;
	};
})), q = /* @__PURE__ */ T((/* @__PURE__ */ C(((e, t) => {
	if (process.env.NODE_ENV !== "production") {
		var n = jo();
		t.exports = Io()(n.isElement, !0);
	} else t.exports = Lo()();
})))(), 1);
function Ro(e) {
	return e == null || Object.keys(e).length === 0;
}
function zo(e) {
	let { styles: n, defaultTheme: r = {} } = e;
	return /* @__PURE__ */ t(ho, { styles: typeof n == "function" ? (e) => n(Ro(e) ? r : e) : n });
}
process.env.NODE_ENV !== "production" && (zo.propTypes = {
	defaultTheme: q.default.object,
	styles: q.default.oneOfType([
		q.default.array,
		q.default.string,
		q.default.object,
		q.default.func
	])
});
//#endregion
//#region node_modules/@mui/styled-engine/index.mjs
function Bo(e, t) {
	let n = Oo(e, t);
	return process.env.NODE_ENV === "production" ? n : (...t) => {
		let r = typeof e == "string" ? `"${e}"` : "component";
		return t.length === 0 ? console.error([`MUI: Seems like you called \`styled(${r})()\` without a \`style\` argument.`, "You must provide a `styles` argument: `styled(\"div\")(styleYouForgotToPass)`."].join("\n")) : t.some((e) => e === void 0) && console.error(`MUI: the styled(${r})(...args) API requires all its args to be defined.`), n(...t);
	};
}
function Vo(e, t) {
	Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
var Ho = [];
function Uo(e) {
	return Ho[0] = e, eo(Ho);
}
//#endregion
//#region node_modules/react-is/cjs/react-is.production.js
var Wo = /* @__PURE__ */ C(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.view_transition"), m = Symbol.for("react.client.reference");
	function h(e) {
		if (typeof e == "object" && e) {
			var m = e.$$typeof;
			switch (m) {
				case t: switch (e = e.type, e) {
					case r:
					case a:
					case i:
					case l:
					case u:
					case p: return e;
					default: switch (e &&= e.$$typeof, e) {
						case s:
						case c:
						case f:
						case d: return e;
						case o: return e;
						default: return m;
					}
				}
				case n: return m;
			}
		}
	}
	e.ContextConsumer = o, e.ContextProvider = s, e.Element = t, e.ForwardRef = c, e.Fragment = r, e.Lazy = f, e.Memo = d, e.Portal = n, e.Profiler = a, e.StrictMode = i, e.Suspense = l, e.SuspenseList = u, e.isContextConsumer = function(e) {
		return h(e) === o;
	}, e.isContextProvider = function(e) {
		return h(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}, e.isForwardRef = function(e) {
		return h(e) === c;
	}, e.isFragment = function(e) {
		return h(e) === r;
	}, e.isLazy = function(e) {
		return h(e) === f;
	}, e.isMemo = function(e) {
		return h(e) === d;
	}, e.isPortal = function(e) {
		return h(e) === n;
	}, e.isProfiler = function(e) {
		return h(e) === a;
	}, e.isStrictMode = function(e) {
		return h(e) === i;
	}, e.isSuspense = function(e) {
		return h(e) === l;
	}, e.isSuspenseList = function(e) {
		return h(e) === u;
	}, e.isValidElementType = function(e) {
		return !!(typeof e == "string" || typeof e == "function" || e === r || e === a || e === i || e === l || e === u || typeof e == "object" && e && (e.$$typeof === f || e.$$typeof === d || e.$$typeof === s || e.$$typeof === o || e.$$typeof === c || e.$$typeof === m || e.getModuleId !== void 0));
	}, e.typeOf = h;
})), Go = /* @__PURE__ */ C(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (typeof e == "object" && e) {
				var t = e.$$typeof;
				switch (t) {
					case n: switch (e = e.type, e) {
						case i:
						case o:
						case a:
						case u:
						case d:
						case m: return e;
						default: switch (e &&= e.$$typeof, e) {
							case c:
							case l:
							case p:
							case f: return e;
							case s: return e;
							default: return t;
						}
					}
					case r: return t;
				}
			}
		}
		var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
		e.ContextConsumer = s, e.ContextProvider = c, e.Element = n, e.ForwardRef = l, e.Fragment = i, e.Lazy = p, e.Memo = f, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = u, e.SuspenseList = d, e.isContextConsumer = function(e) {
			return t(e) === s;
		}, e.isContextProvider = function(e) {
			return t(e) === c;
		}, e.isElement = function(e) {
			return typeof e == "object" && !!e && e.$$typeof === n;
		}, e.isForwardRef = function(e) {
			return t(e) === l;
		}, e.isFragment = function(e) {
			return t(e) === i;
		}, e.isLazy = function(e) {
			return t(e) === p;
		}, e.isMemo = function(e) {
			return t(e) === f;
		}, e.isPortal = function(e) {
			return t(e) === r;
		}, e.isProfiler = function(e) {
			return t(e) === o;
		}, e.isStrictMode = function(e) {
			return t(e) === a;
		}, e.isSuspense = function(e) {
			return t(e) === u;
		}, e.isSuspenseList = function(e) {
			return t(e) === d;
		}, e.isValidElementType = function(e) {
			return !!(typeof e == "string" || typeof e == "function" || e === i || e === o || e === a || e === u || e === d || typeof e == "object" && e && (e.$$typeof === p || e.$$typeof === f || e.$$typeof === c || e.$$typeof === s || e.$$typeof === l || e.$$typeof === h || e.getModuleId !== void 0));
		}, e.typeOf = t;
	})();
})), Ko = (/* @__PURE__ */ C(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = Wo() : t.exports = Go();
})))();
function qo(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Jo(e) {
	if (/* @__PURE__ */ r.isValidElement(e) || (0, Ko.isValidElementType)(e) || !qo(e)) return e;
	let t = {};
	return Object.keys(e).forEach((n) => {
		t[n] = Jo(e[n]);
	}), t;
}
function Yo(e, t, n = { clone: !0 }) {
	let i = n.clone ? { ...e } : e;
	return qo(e) && qo(t) && Object.keys(t).forEach((a) => {
		/* @__PURE__ */ r.isValidElement(t[a]) || (0, Ko.isValidElementType)(t[a]) ? i[a] = t[a] : qo(t[a]) && Object.prototype.hasOwnProperty.call(e, a) && qo(e[a]) ? i[a] = Yo(e[a], t[a], n) : n.clone ? i[a] = qo(t[a]) ? Jo(t[a]) : t[a] : i[a] = t[a];
	}), i;
}
//#endregion
//#region node_modules/@mui/system/createBreakpoints/createBreakpoints.mjs
var Xo = (e) => {
	let t = Object.keys(e).map((t) => ({
		key: t,
		val: e[t]
	})) || [];
	return t.sort((e, t) => e.val - t.val), t.reduce((e, t) => ({
		...e,
		[t.key]: t.val
	}), {});
};
function Zo(e) {
	let { values: t = {
		xs: 0,
		sm: 600,
		md: 900,
		lg: 1200,
		xl: 1536
	}, unit: n = "px", step: r = 5, ...i } = e, a = Xo(t), o = Object.keys(a);
	function s(e) {
		return `@media (min-width:${typeof t[e] == "number" ? t[e] : e}${n})`;
	}
	function c(e) {
		return `@media (max-width:${(typeof t[e] == "number" ? t[e] : e) - r / 100}${n})`;
	}
	function l(e, i) {
		let a = o.indexOf(i);
		return `@media (min-width:${typeof t[e] == "number" ? t[e] : e}${n}) and (max-width:${(a !== -1 && typeof t[o[a]] == "number" ? t[o[a]] : i) - r / 100}${n})`;
	}
	function u(e) {
		return o.indexOf(e) + 1 < o.length ? l(e, o[o.indexOf(e) + 1]) : s(e);
	}
	function d(e) {
		let t = o.indexOf(e);
		return t === 0 ? s(o[1]) : t === o.length - 1 ? c(o[t]) : l(e, o[o.indexOf(e) + 1]).replace("@media", "@media not all and");
	}
	let f = [];
	for (let e = 0; e < o.length; e += 1) f.push(s(o[e]));
	return {
		keys: o,
		values: a,
		up: s,
		down: c,
		between: l,
		only: u,
		not: d,
		unit: n,
		internal_mediaKeys: f,
		...i
	};
}
//#endregion
//#region node_modules/@mui/system/cssContainerQueries/cssContainerQueries.mjs
var Qo = /min-width:\s*([0-9.]+)/;
function $o(e, t) {
	if (!e.containerQueries || !es(t)) return t;
	let n = [];
	for (let e in t) e.startsWith("@container") && n.push(e);
	n.sort((e, t) => (e.match(Qo)?.[1] || 0) - +(t.match(Qo)?.[1] || 0));
	let r = t;
	for (let e = 0; e < n.length; e += 1) {
		let t = n[e], i = r[t];
		delete r[t], r[t] = i;
	}
	return r;
}
function es(e) {
	for (let t in e) if (t.startsWith("@container")) return !0;
	return !1;
}
function ts(e, t) {
	return t === "@" || t.startsWith("@") && (e.some((e) => t.startsWith(`@${e}`)) || !!t.match(/^@\d/));
}
function ns(e, t) {
	let n = t.match(/^@([^/]+)?\/?(.+)?$/);
	if (!n) {
		if (process.env.NODE_ENV !== "production") throw Error(`MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.\nFor example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.`);
		return null;
	}
	let [, r, i] = n, a = Number.isNaN(+r) ? r || 0 : +r;
	return e.containerQueries(i).up(a);
}
function rs(e) {
	let t = (e, t) => e.replace("@media", t ? `@container ${t}` : "@container");
	function n(n, r) {
		n.up = (...n) => t(e.breakpoints.up(...n), r), n.down = (...n) => t(e.breakpoints.down(...n), r), n.between = (...n) => t(e.breakpoints.between(...n), r), n.only = (...n) => t(e.breakpoints.only(...n), r), n.not = (...n) => {
			let i = t(e.breakpoints.not(...n), r);
			return i.includes("not all and") ? i.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : i;
		};
	}
	let r = {}, i = (e) => (n(r, e), r);
	return n(i), {
		...e,
		containerQueries: i
	};
}
//#endregion
//#region node_modules/@mui/system/createTheme/shape.mjs
var is = { borderRadius: 4 }, as = process.env.NODE_ENV === "production" ? {} : q.default.oneOfType([
	q.default.number,
	q.default.string,
	q.default.object,
	q.default.array
]);
//#endregion
//#region node_modules/@mui/utils/isObjectEmpty/isObjectEmpty.mjs
function os(e) {
	if (e == null) return !0;
	for (let t in e) return !1;
	return !0;
}
//#endregion
//#region node_modules/@mui/utils/fastDeepAssign/fastDeepAssign.mjs
function ss(e, t) {
	let n = Array.isArray(t), r = Array.isArray(e);
	return fs(t) ? t : ps(e) ? ms(t) : n && r ? us(e, t) : n === r ? hs(e, t) : ms(t);
}
function cs(e) {
	let t = 0, n = e.length, r = Array(n);
	for (t = 0; t < n; t += 1) r[t] = ms(e[t]);
	return r;
}
function ls(e) {
	let t = {};
	for (let n in e) t[n] = ms(e[n]);
	return t;
}
function us(e, t) {
	let n = e.length;
	for (let r = 0; r < t.length; r += 1) e[n + r] = ms(t[r]);
	return e;
}
function ds(e) {
	return typeof e == "object" && !!e && !(e instanceof RegExp) && !(e instanceof Date);
}
function fs(e) {
	return typeof e != "object" || !e;
}
function ps(e) {
	return typeof e != "object" || !e || e instanceof RegExp || e instanceof Date;
}
function ms(e) {
	return ds(e) ? Array.isArray(e) ? cs(e) : ls(e) : e;
}
function hs(e, t) {
	for (let n in t) n in e ? e[n] = ss(e[n], t[n]) : e[n] = ms(t[n]);
	return e;
}
//#endregion
//#region node_modules/@mui/system/breakpoints/breakpoints.mjs
var gs = {}, _s = {
	xs: 0,
	sm: 600,
	md: 900,
	lg: 1200,
	xl: 1536
}, vs = Zo({ values: _s }), ys = { containerQueries: (e) => ({ up: (t) => {
	let n = typeof t == "number" ? t : _s[t] || t;
	return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
} }) };
function bs(e, t, n) {
	let r = {};
	return xs(r, e.theme, t, (e, t, i) => {
		let a = n(t, i);
		e ? r[e] = a : ss(r, a);
	});
}
function xs(e, t, n, r) {
	if (t ??= gs, Array.isArray(n)) {
		let i = t.breakpoints ?? vs;
		for (let t = 0; t < n.length; t += 1) Ss(e, i.up(i.keys[t]), n[t], void 0, r);
		return e;
	}
	if (typeof n == "object") {
		let i = t.breakpoints ?? vs, a = i.values ?? _s;
		for (let o in n) if (ts(i.keys, o)) {
			let i = ns(t.containerQueries ? t : ys, o);
			i && Ss(e, i, n[o], o, r);
		} else if (o in a) Ss(e, i.up(o), n[o], o, r);
		else {
			let t = o;
			e[t] = n[t];
		}
		return e;
	}
	return r(void 0, n), e;
}
function Ss(e, t, n, r, i) {
	e[t] ??= {}, i(t, n, r);
}
function Cs(e = vs) {
	let { internal_mediaKeys: t } = e, n = {};
	for (let e = 0; e < t.length; e += 1) n[t[e]] = {};
	return n;
}
function ws(e, t) {
	let n = e.internal_mediaKeys;
	for (let e = 0; e < n.length; e += 1) {
		let r = n[e];
		os(t[r]) && delete t[r];
	}
	return t;
}
function Ts(e, t) {
	if (Array.isArray(t)) return !0;
	if (typeof t == "object" && t) {
		for (let n = 0; n < e.keys.length; n += 1) if (e.keys[n] in t) return !0;
		let n = Object.keys(t);
		for (let t = 0; t < n.length; t += 1) if (ts(e.keys, n[t])) return !0;
	}
	return !1;
}
//#endregion
//#region node_modules/@mui/utils/capitalize/capitalize.mjs
function Es(e) {
	if (typeof e != "string") throw Error(process.env.NODE_ENV === "production" ? gi(7) : "MUI: `capitalize(string)` expects a string argument.");
	return e.charAt(0).toUpperCase() + e.slice(1);
}
//#endregion
//#region node_modules/@mui/system/style/style.mjs
function Ds(e, t, n, r) {
	let i;
	return i = typeof e == "function" ? e(n) : Array.isArray(e) ? e[n] || n : typeof n == "string" && Os(e, n, !0, r) || n, t && (i = t(i, n, e)), i;
}
function Os(e, t, n = !0, r = void 0) {
	if (!e || !t) return null;
	let i = t.split(".");
	if (e.vars && n) {
		let t = ks(e.vars, i, r);
		if (t != null) return t;
	}
	return ks(e, i, r);
}
function ks(e, t, n = void 0) {
	let r, i = e, a = 0;
	for (; a < t.length;) {
		if (i == null) return i;
		r = i, i = i[t[a]], a += 1;
	}
	if (n && i === void 0) {
		let e = t[t.length - 1], i = `${n}${e === "default" ? "" : Es(e)}`;
		return r?.[i];
	}
	return i;
}
function As(e) {
	let { prop: t, cssProperty: n = e.prop, themeKey: r, transform: i } = e, a = (e) => {
		if (e[t] == null) return null;
		let a = e[t], o = e.theme, s = Os(o, r) || {};
		return bs(e, a, (e) => {
			let r = Ds(s, i, e, t);
			return n === !1 ? r : { [n]: r };
		});
	};
	return a.propTypes = process.env.NODE_ENV === "production" ? {} : { [t]: as }, a.filterProps = [t], a;
}
//#endregion
//#region node_modules/@mui/system/spacing/spacing.mjs
var js = { internal_cache: {} }, Ms = {
	m: "margin",
	p: "padding"
}, Ns = {
	t: "Top",
	r: "Right",
	b: "Bottom",
	l: "Left",
	x: ["Left", "Right"],
	y: ["Top", "Bottom"]
}, Ps = {
	marginX: "mx",
	marginY: "my",
	paddingX: "px",
	paddingY: "py"
}, Fs = {};
for (let e in Ms) Fs[e] = [Ms[e]];
for (let e in Ms) for (let t in Ns) {
	let n = Ms[e], r = Ns[t], i = Array.isArray(r) ? r.map((e) => n + e) : [n + r];
	Fs[e + t] = i;
}
for (let e in Ps) Fs[e] = Fs[Ps[e]];
var Is = new Set([
	"m",
	"mt",
	"mr",
	"mb",
	"ml",
	"mx",
	"my",
	"margin",
	"marginTop",
	"marginRight",
	"marginBottom",
	"marginLeft",
	"marginX",
	"marginY",
	"marginInline",
	"marginInlineStart",
	"marginInlineEnd",
	"marginBlock",
	"marginBlockStart",
	"marginBlockEnd"
]), Ls = new Set([
	"p",
	"pt",
	"pr",
	"pb",
	"pl",
	"px",
	"py",
	"padding",
	"paddingTop",
	"paddingRight",
	"paddingBottom",
	"paddingLeft",
	"paddingX",
	"paddingY",
	"paddingInline",
	"paddingInlineStart",
	"paddingInlineEnd",
	"paddingBlock",
	"paddingBlockStart",
	"paddingBlockEnd"
]), Rs = new Set([...Is, ...Ls]);
function zs(e, t, n, r) {
	let i = Os(e, t, !0) ?? n;
	return typeof i == "number" || typeof i == "string" ? (e) => typeof e == "string" ? e : (process.env.NODE_ENV !== "production" && typeof e != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${e}.`), typeof i == "string" ? i.startsWith("var(") && e === 0 ? 0 : i.startsWith("var(") && e === 1 ? i : `calc(${e} * ${i})` : i * e) : Array.isArray(i) ? (e) => {
		if (typeof e == "string") return e;
		let n = Math.abs(e);
		process.env.NODE_ENV !== "production" && (Number.isInteger(n) ? n > i.length - 1 && console.error([
			`MUI: The value provided (${n}) overflows.`,
			`The supported values are: ${JSON.stringify(i)}.`,
			`${n} > ${i.length - 1}, you need to add the missing values.`
		].join("\n")) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join("\n")));
		let r = i[n];
		return e >= 0 ? r : typeof r == "number" ? -r : typeof r == "string" && r.startsWith("var(") ? `calc(-1 * ${r})` : `-${r}`;
	} : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join("\n")), () => void 0);
}
function Bs(e) {
	return zs(e, "spacing", 8, "spacing");
}
function Vs(e, t) {
	return typeof t == "string" || t == null ? t : e(t);
}
var Hs = [""];
function Us(e, t) {
	let n = e.theme ?? js, r = n?.internal_cache?.unarySpacing ?? Bs(n), i = {};
	for (let n in e) {
		if (!t.has(n)) continue;
		let a = Fs[n] ?? (Hs[0] = n, Hs), o = e[n];
		xs(i, e.theme, o, (e, t) => {
			let n = e ? i[e] : i;
			for (let e = 0; e < a.length; e += 1) n[a[e]] = Vs(r, t);
		});
	}
	return i;
}
function Ws(e) {
	return Us(e, Is);
}
Ws.propTypes = process.env.NODE_ENV === "production" ? {} : Array.from(Is).reduce((e, t) => (e[t] = as, e), {}), Ws.filterProps = Is;
function Gs(e) {
	return Us(e, Ls);
}
Gs.propTypes = process.env.NODE_ENV === "production" ? {} : Array.from(Ls).reduce((e, t) => (e[t] = as, e), {}), Gs.filterProps = Ls;
function Ks(e) {
	return Us(e, Rs);
}
Ks.propTypes = process.env.NODE_ENV === "production" ? {} : Array.from(Rs).reduce((e, t) => (e[t] = as, e), {}), Ks.filterProps = Rs;
//#endregion
//#region node_modules/@mui/system/createTheme/createSpacing.mjs
function qs(e = 8, t = Bs({ spacing: e })) {
	if (e.mui) return e;
	let n = (...e) => (process.env.NODE_ENV !== "production" && (e.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${e.length}`)), (e.length === 0 ? [1] : e).map((e) => {
		let n = t(e);
		return typeof n == "number" ? `${n}px` : n;
	}).join(" "));
	return n.mui = !0, n;
}
//#endregion
//#region node_modules/@mui/system/compose/compose.mjs
function Js(...e) {
	let t = e.reduce((e, t) => (t.filterProps.forEach((n) => {
		e[n] = t;
	}), e), {}), n = (e) => {
		let n = {};
		for (let r in e) t[r] && ss(n, t[r](e));
		return n;
	};
	return n.propTypes = process.env.NODE_ENV === "production" ? {} : e.reduce((e, t) => Object.assign(e, t.propTypes), {}), n.filterProps = e.reduce((e, t) => e.concat(t.filterProps), []), n;
}
//#endregion
//#region node_modules/@mui/system/borders/borders.mjs
function Ys(e) {
	return typeof e == "number" ? `${e}px solid` : e;
}
function Xs(e, t) {
	return As({
		prop: e,
		themeKey: "borders",
		transform: t
	});
}
var Zs = Xs("border", Ys), Qs = Xs("borderTop", Ys), $s = Xs("borderRight", Ys), ec = Xs("borderBottom", Ys), tc = Xs("borderLeft", Ys), nc = Xs("borderColor"), rc = Xs("borderTopColor"), ic = Xs("borderRightColor"), ac = Xs("borderBottomColor"), oc = Xs("borderLeftColor"), sc = Xs("outline", Ys), cc = Xs("outlineColor"), lc = (e) => {
	if (e.borderRadius !== void 0 && e.borderRadius !== null) {
		let t = zs(e.theme, "shape.borderRadius", 4, "borderRadius");
		return bs(e, e.borderRadius, (e) => ({ borderRadius: Vs(t, e) }));
	}
	return null;
};
lc.propTypes = process.env.NODE_ENV === "production" ? {} : { borderRadius: as }, lc.filterProps = ["borderRadius"], Js(Zs, Qs, $s, ec, tc, nc, rc, ic, ac, oc, lc, sc, cc);
//#endregion
//#region node_modules/@mui/system/cssGrid/cssGrid.mjs
var uc = (e) => {
	if (e.gap !== void 0 && e.gap !== null) {
		let t = zs(e.theme, "spacing", 8, "gap");
		return bs(e, e.gap, (e) => ({ gap: Vs(t, e) }));
	}
	return null;
};
uc.propTypes = process.env.NODE_ENV === "production" ? {} : { gap: as }, uc.filterProps = ["gap"];
var dc = (e) => {
	if (e.columnGap !== void 0 && e.columnGap !== null) {
		let t = zs(e.theme, "spacing", 8, "columnGap");
		return bs(e, e.columnGap, (e) => ({ columnGap: Vs(t, e) }));
	}
	return null;
};
dc.propTypes = process.env.NODE_ENV === "production" ? {} : { columnGap: as }, dc.filterProps = ["columnGap"];
var fc = (e) => {
	if (e.rowGap !== void 0 && e.rowGap !== null) {
		let t = zs(e.theme, "spacing", 8, "rowGap");
		return bs(e, e.rowGap, (e) => ({ rowGap: Vs(t, e) }));
	}
	return null;
};
fc.propTypes = process.env.NODE_ENV === "production" ? {} : { rowGap: as }, fc.filterProps = ["rowGap"], Js(uc, dc, fc, As({ prop: "gridColumn" }), As({ prop: "gridRow" }), As({ prop: "gridAutoFlow" }), As({ prop: "gridAutoColumns" }), As({ prop: "gridAutoRows" }), As({ prop: "gridTemplateColumns" }), As({ prop: "gridTemplateRows" }), As({ prop: "gridTemplateAreas" }), As({ prop: "gridArea" }));
//#endregion
//#region node_modules/@mui/system/palette/palette.mjs
function pc(e, t) {
	return t === "grey" ? t : e;
}
Js(As({
	prop: "color",
	themeKey: "palette",
	transform: pc
}), As({
	prop: "bgcolor",
	cssProperty: "backgroundColor",
	themeKey: "palette",
	transform: pc
}), As({
	prop: "backgroundColor",
	themeKey: "palette",
	transform: pc
}));
//#endregion
//#region node_modules/@mui/system/sizing/sizing.mjs
function mc(e) {
	return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
var hc = As({
	prop: "width",
	transform: mc
}), gc = (e) => e.maxWidth !== void 0 && e.maxWidth !== null ? bs(e, e.maxWidth, (t) => {
	let n = e.theme?.breakpoints?.values?.[t] || _s[t];
	return n ? e.theme?.breakpoints?.unit === "px" ? { maxWidth: n } : { maxWidth: `${n}${e.theme.breakpoints.unit}` } : { maxWidth: mc(t) };
}) : null;
gc.filterProps = ["maxWidth"];
var _c = As({
	prop: "minWidth",
	transform: mc
}), vc = As({
	prop: "height",
	transform: mc
}), yc = As({
	prop: "maxHeight",
	transform: mc
}), bc = As({
	prop: "minHeight",
	transform: mc
});
As({
	prop: "size",
	cssProperty: "width",
	transform: mc
}), As({
	prop: "size",
	cssProperty: "height",
	transform: mc
}), Js(hc, gc, _c, vc, yc, bc, As({ prop: "boxSizing" }));
//#endregion
//#region node_modules/@mui/system/styleFunctionSx/defaultSxConfig.mjs
var xc = {
	border: {
		themeKey: "borders",
		transform: Ys
	},
	borderTop: {
		themeKey: "borders",
		transform: Ys
	},
	borderRight: {
		themeKey: "borders",
		transform: Ys
	},
	borderBottom: {
		themeKey: "borders",
		transform: Ys
	},
	borderLeft: {
		themeKey: "borders",
		transform: Ys
	},
	borderColor: { themeKey: "palette" },
	borderTopColor: { themeKey: "palette" },
	borderRightColor: { themeKey: "palette" },
	borderBottomColor: { themeKey: "palette" },
	borderLeftColor: { themeKey: "palette" },
	outline: {
		themeKey: "borders",
		transform: Ys
	},
	outlineColor: { themeKey: "palette" },
	borderRadius: {
		themeKey: "shape.borderRadius",
		style: lc
	},
	color: {
		themeKey: "palette",
		transform: pc
	},
	bgcolor: {
		themeKey: "palette",
		cssProperty: "backgroundColor",
		transform: pc
	},
	backgroundColor: {
		themeKey: "palette",
		transform: pc
	},
	p: { style: Gs },
	pt: { style: Gs },
	pr: { style: Gs },
	pb: { style: Gs },
	pl: { style: Gs },
	px: { style: Gs },
	py: { style: Gs },
	padding: { style: Gs },
	paddingTop: { style: Gs },
	paddingRight: { style: Gs },
	paddingBottom: { style: Gs },
	paddingLeft: { style: Gs },
	paddingX: { style: Gs },
	paddingY: { style: Gs },
	paddingInline: { style: Gs },
	paddingInlineStart: { style: Gs },
	paddingInlineEnd: { style: Gs },
	paddingBlock: { style: Gs },
	paddingBlockStart: { style: Gs },
	paddingBlockEnd: { style: Gs },
	m: { style: Ws },
	mt: { style: Ws },
	mr: { style: Ws },
	mb: { style: Ws },
	ml: { style: Ws },
	mx: { style: Ws },
	my: { style: Ws },
	margin: { style: Ws },
	marginTop: { style: Ws },
	marginRight: { style: Ws },
	marginBottom: { style: Ws },
	marginLeft: { style: Ws },
	marginX: { style: Ws },
	marginY: { style: Ws },
	marginInline: { style: Ws },
	marginInlineStart: { style: Ws },
	marginInlineEnd: { style: Ws },
	marginBlock: { style: Ws },
	marginBlockStart: { style: Ws },
	marginBlockEnd: { style: Ws },
	displayPrint: {
		cssProperty: !1,
		transform: (e) => ({ "@media print": { display: e } })
	},
	display: {},
	overflow: {},
	textOverflow: {},
	visibility: {},
	whiteSpace: {},
	flexBasis: {},
	flexDirection: {},
	flexWrap: {},
	justifyContent: {},
	alignItems: {},
	alignContent: {},
	order: {},
	flex: {},
	flexGrow: {},
	flexShrink: {},
	alignSelf: {},
	justifyItems: {},
	justifySelf: {},
	gap: { style: uc },
	rowGap: { style: fc },
	columnGap: { style: dc },
	gridColumn: {},
	gridRow: {},
	gridAutoFlow: {},
	gridAutoColumns: {},
	gridAutoRows: {},
	gridTemplateColumns: {},
	gridTemplateRows: {},
	gridTemplateAreas: {},
	gridArea: {},
	position: {},
	zIndex: { themeKey: "zIndex" },
	top: {},
	right: {},
	bottom: {},
	left: {},
	boxShadow: { themeKey: "shadows" },
	width: { transform: mc },
	maxWidth: { style: gc },
	minWidth: { transform: mc },
	height: { transform: mc },
	maxHeight: { transform: mc },
	minHeight: { transform: mc },
	boxSizing: {},
	font: { themeKey: "font" },
	fontFamily: { themeKey: "typography" },
	fontSize: { themeKey: "typography" },
	fontStyle: { themeKey: "typography" },
	fontWeight: { themeKey: "typography" },
	letterSpacing: {},
	textTransform: {},
	lineHeight: {},
	textAlign: {},
	typography: {
		cssProperty: !1,
		themeKey: "typography"
	}
}, Sc = {};
function Cc() {
	function e(t) {
		if (!t.sx) return null;
		let { sx: n, theme: r = Sc, nested: i } = t, a = r.unstable_sxConfig ?? xc, o = {
			sx: null,
			theme: r,
			nested: !0
		};
		function s(n) {
			let s = n;
			if (typeof n == "function") s = n(r);
			else if (typeof n != "object") return n;
			if (!s) return null;
			let c = r.breakpoints ?? vs, l = Cs(c);
			for (let n in s) {
				let i = Ec(s[n], r);
				if (i != null) {
					if (typeof i != "object") {
						Tc(l, n, i, r, a);
						continue;
					}
					if (a[n]) {
						Tc(l, n, i, r, a);
						continue;
					}
					Ts(c, i) ? xs(l, t.theme, i, (e, t) => {
						l[e][n] = t;
					}) : (o.sx = i, l[n] = e(o));
				}
			}
			return !i && r.modularCssLayers ? { "@layer sx": $o(r, ws(c, l)) } : $o(r, ws(c, l));
		}
		return Array.isArray(n) ? n.map(s) : s(n);
	}
	return e.filterProps = ["sx"], e;
}
var wc = Cc();
function Tc(e, t, n, r, i) {
	let a = i[t];
	if (!a) {
		e[t] = n;
		return;
	}
	if (n == null) return;
	let { themeKey: o } = a;
	if (o === "typography" && n === "inherit") {
		e[t] = n;
		return;
	}
	let { style: s } = a;
	if (s) {
		ss(e, s({
			[t]: n,
			theme: r
		}));
		return;
	}
	let { cssProperty: c = t, transform: l } = a, u = Os(r, o);
	xs(e, r, n, (n, r) => {
		let i = Ds(u, l, r, t);
		c === !1 ? ss(n ? e[n] : e, i) : n ? e[n][c] = i : e[c] = i;
	});
}
function Ec(e, t) {
	return typeof e == "function" ? e(t) : e;
}
//#endregion
//#region node_modules/@mui/system/createTheme/applyStyles.mjs
function Dc(e, t) {
	let n = this;
	if (n.vars) {
		if (!n.colorSchemes?.[e] || typeof n.getColorSchemeSelector != "function") return {};
		let r = n.getColorSchemeSelector(e);
		return r === "&" ? t : ((r.includes("data-") || r.includes(".")) && (r = `*:where(${r.replace(/\s*&$/, "")}) &`), { [r]: t });
	}
	return n.palette.mode === e ? t : {};
}
//#endregion
//#region node_modules/@mui/system/createTheme/createTheme.mjs
function Oc(e = {}, ...t) {
	let { breakpoints: n = {}, palette: r = {}, spacing: i, shape: a = {}, ...o } = e, s = Zo(n), c = qs(i), l = Yo({
		breakpoints: s,
		direction: "ltr",
		components: {},
		palette: {
			mode: "light",
			...r
		},
		spacing: c,
		shape: {
			...is,
			...a
		}
	}, o);
	return l = rs(l), l.applyStyles = Dc, l = t.reduce((e, t) => Yo(e, t), l), l.unstable_sxConfig = {
		...xc,
		...o?.unstable_sxConfig
	}, l.unstable_sx = function(e) {
		return wc({
			sx: e,
			theme: this
		});
	}, l.internal_cache = {}, l;
}
//#endregion
//#region node_modules/@mui/system/useThemeWithoutDefault/useThemeWithoutDefault.mjs
function kc(e) {
	return Object.keys(e).length === 0;
}
function Ac(e = null) {
	let t = r.useContext(so);
	return !t || kc(t) ? e : t;
}
//#endregion
//#region node_modules/@mui/system/useTheme/useTheme.mjs
var jc = Oc();
function Mc(e = jc) {
	return Ac(e);
}
//#endregion
//#region node_modules/@mui/system/GlobalStyles/GlobalStyles.mjs
function Nc(e) {
	let t = Uo(e);
	return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Pc({ styles: e, themeId: n, defaultTheme: r = {} }) {
	let i = Mc(r), a = n && i[n] || i, o = typeof e == "function" ? e(a) : e;
	return a.modularCssLayers && (o = Array.isArray(o) ? o.map((e) => Nc(typeof e == "function" ? e(a) : e)) : Nc(o)), /* @__PURE__ */ t(zo, { styles: o });
}
process.env.NODE_ENV !== "production" && (Pc.propTypes = {
	defaultTheme: q.default.object,
	styles: q.default.oneOfType([
		q.default.array,
		q.default.func,
		q.default.number,
		q.default.object,
		q.default.string,
		q.default.bool
	]),
	themeId: q.default.string
});
//#endregion
//#region node_modules/@mui/utils/ClassNameGenerator/ClassNameGenerator.mjs
var Fc = (e) => e, Ic = (() => {
	let e = Fc;
	return {
		configure(t) {
			e = t;
		},
		generate(t) {
			return e(t);
		},
		reset() {
			e = Fc;
		}
	};
})(), Lc = {
	active: "active",
	checked: "checked",
	completed: "completed",
	disabled: "disabled",
	error: "error",
	expanded: "expanded",
	focused: "focused",
	focusVisible: "focusVisible",
	open: "open",
	readOnly: "readOnly",
	required: "required",
	selected: "selected"
};
function Rc(e, t, n = "Mui") {
	let r = Lc[t];
	return r ? `${n}-${r}` : `${Ic.generate(e)}-${t}`;
}
//#endregion
//#region node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.mjs
function zc(e, t, n = "Mui") {
	let r = {};
	return t.forEach((t) => {
		r[t] = Rc(e, t, n);
	}), r;
}
//#endregion
//#region node_modules/@mui/utils/getDisplayName/getDisplayName.mjs
function Bc(e, t = "") {
	return e.displayName || e.name || t;
}
function Vc(e, t, n) {
	let r = Bc(t);
	return e.displayName || (r === "" ? n : `${n}(${r})`);
}
function Hc(e) {
	if (e != null) {
		if (typeof e == "string") return e;
		if (typeof e == "function") return Bc(e, "Component");
		if (typeof e == "object") switch (e.$$typeof) {
			case Ko.ForwardRef: return Vc(e, e.render, "ForwardRef");
			case Ko.Memo: return Vc(e, e.type, "memo");
			default: return;
		}
	}
}
//#endregion
//#region node_modules/@mui/system/preprocessStyles.mjs
function Uc(e) {
	let { variants: t, ...n } = e, r = {
		variants: t,
		style: Uo(n),
		isProcessed: !0
	};
	return r.style === n || t && t.forEach((e) => {
		typeof e.style != "function" && (e.style = Uo(e.style));
	}), r;
}
//#endregion
//#region node_modules/@mui/system/createStyled/createStyled.mjs
var Wc = Oc();
function Gc(e) {
	return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Kc(e, t) {
	return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function qc(e) {
	return e ? (t, n) => n[e] : null;
}
function Jc(e, t, n) {
	e.theme = os(e.theme) ? n : e.theme[t] || e.theme;
}
function Yc(e, t, n) {
	let r = typeof t == "function" ? t(e) : t;
	if (Array.isArray(r)) return r.flatMap((t) => Yc(e, t, n));
	if (Array.isArray(r?.variants)) {
		let t;
		if (r.isProcessed) t = n ? Kc(r.style, n) : r.style;
		else {
			let { variants: e, ...i } = r;
			t = n ? Kc(Uo(i), n) : i;
		}
		return Xc(e, r.variants, [t], n);
	}
	return r?.isProcessed ? n ? Kc(Uo(r.style), n) : r.style : n ? Kc(Uo(r), n) : r;
}
function Xc(e, t, n = [], r = void 0) {
	let i;
	variantLoop: for (let a = 0; a < t.length; a += 1) {
		let o = t[a];
		if (typeof o.props == "function") {
			if (i ??= {
				...e,
				...e.ownerState,
				ownerState: e.ownerState
			}, !o.props(i)) continue;
		} else for (let t in o.props) if (e[t] !== o.props[t] && e.ownerState?.[t] !== o.props[t]) continue variantLoop;
		typeof o.style == "function" ? (i ??= {
			...e,
			...e.ownerState,
			ownerState: e.ownerState
		}, n.push(r ? Kc(Uo(o.style(i)), r) : o.style(i))) : n.push(r ? Kc(Uo(o.style), r) : o.style);
	}
	return n;
}
function Zc(e = {}) {
	let { themeId: t, defaultTheme: n = Wc, rootShouldForwardProp: r = Gc, slotShouldForwardProp: i = Gc } = e;
	function a(e) {
		Jc(e, t, n);
	}
	return (e, t = {}) => {
		Vo(e, (e) => e.filter((e) => e !== wc));
		let { name: n, slot: o, skipVariantsResolver: s, skipSx: c, overridesResolver: l = qc(tl(o)), ...u } = t, d = n && n.startsWith("Mui") || o ? "components" : "custom", f = s === void 0 ? o && o !== "Root" && o !== "root" || !1 : s, p = c || !1, m = Gc;
		o === "Root" || o === "root" ? m = r : o ? m = i : el(e) && (m = void 0);
		let h = Bo(e, {
			shouldForwardProp: m,
			label: $c(n, o),
			...u
		}), g = (e) => {
			if (e.__emotion_real === e) return e;
			if (typeof e == "function") return function(t) {
				return Yc(t, e, t.theme.modularCssLayers ? d : void 0);
			};
			if (qo(e)) {
				let t = Uc(e);
				return function(e) {
					return t.variants ? Yc(e, t, e.theme.modularCssLayers ? d : void 0) : e.theme.modularCssLayers ? Kc(t.style, d) : t.style;
				};
			}
			return e;
		}, _ = (...t) => {
			let r = [], i = t.map(g), s = [];
			if (r.push(a), n && l && s.push(function(e) {
				let t = e.theme.components?.[n]?.styleOverrides;
				if (!t) return null;
				let r = {};
				for (let n in t) r[n] = Yc(e, t[n], e.theme.modularCssLayers ? "theme" : void 0);
				return l(e, r);
			}), n && !f && s.push(function(e) {
				let t = e.theme?.components?.[n]?.variants;
				return t ? Xc(e, t, [], e.theme.modularCssLayers ? "theme" : void 0) : null;
			}), p || s.push(wc), Array.isArray(i[0])) {
				let e = i.shift(), t = Array(r.length).fill(""), n = Array(s.length).fill(""), a;
				a = [
					...t,
					...e,
					...n
				], a.raw = [
					...t,
					...e.raw,
					...n
				], r.unshift(a);
			}
			let c = h(...r, ...i, ...s);
			return e.muiName && (c.muiName = e.muiName), process.env.NODE_ENV !== "production" && (c.displayName = Qc(n, o, e)), c;
		};
		return h.withConfig && (_.withConfig = h.withConfig), _;
	};
}
function Qc(e, t, n) {
	return e ? `${e}${Es(t || "")}` : `Styled(${Hc(n)})`;
}
function $c(e, t) {
	let n;
	return process.env.NODE_ENV !== "production" && e && (n = `${e}-${tl(t || "Root")}`), n;
}
function el(e) {
	return typeof e == "string" && e.charCodeAt(0) > 96;
}
function tl(e) {
	return e && e.charAt(0).toLowerCase() + e.slice(1);
}
//#endregion
//#region node_modules/@mui/utils/resolveProps/resolveProps.mjs
function nl(e, t, n = !1) {
	let r = { ...t };
	for (let i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
		let a = i;
		if (a === "components" || a === "slots") r[a] = {
			...e[a],
			...r[a]
		};
		else if (a === "componentsProps" || a === "slotProps") {
			let i = e[a], o = t[a];
			if (!o) r[a] = i || {};
			else if (!i) r[a] = o;
			else {
				r[a] = { ...o };
				for (let e in i) if (Object.prototype.hasOwnProperty.call(i, e)) {
					let t = e;
					r[a][t] = nl(i[t], o[t], n);
				}
			}
		} else a === "className" && n && t.className !== void 0 ? r.className = j(e?.className, t?.className) : a === "style" && n && t.style ? r.style = {
			...e?.style,
			...t?.style
		} : r[a] === void 0 && (r[a] = e[a]);
	}
	return r;
}
//#endregion
//#region node_modules/@mui/utils/useEnhancedEffect/useEnhancedEffect.mjs
var rl = typeof window < "u" ? r.useLayoutEffect : r.useEffect;
//#endregion
//#region node_modules/@mui/utils/clamp/clamp.mjs
function il(e, t = -(2 ** 53 - 1), n = 2 ** 53 - 1) {
	return Math.max(t, Math.min(e, n));
}
//#endregion
//#region node_modules/@mui/system/colorManipulator/colorManipulator.mjs
function al(e, t = 0, n = 1) {
	return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), il(e, t, n);
}
function ol(e) {
	e = e.slice(1);
	let t = RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g"), n = e.match(t);
	return n && n[0].length === 1 && (n = n.map((e) => e + e)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((e, t) => t < 3 ? parseInt(e, 16) : Math.round(parseInt(e, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function sl(e) {
	if (e.type) return e;
	if (e.charAt(0) === "#") return sl(ol(e));
	let t = e.indexOf("("), n = e.substring(0, t);
	if (![
		"rgb",
		"rgba",
		"hsl",
		"hsla",
		"color"
	].includes(n)) throw Error(process.env.NODE_ENV === "production" ? gi(9, e) : `MUI: Unsupported \`${e}\` color.\nThe following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().`);
	let r = e.substring(t + 1, e.length - 1), i;
	if (n === "color") {
		if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ![
			"srgb",
			"display-p3",
			"a98-rgb",
			"prophoto-rgb",
			"rec-2020"
		].includes(i)) throw Error(process.env.NODE_ENV === "production" ? gi(10, i) : `MUI: unsupported \`${i}\` color space.\nThe following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.`);
	} else r = r.split(",");
	return r = r.map((e) => parseFloat(e)), {
		type: n,
		values: r,
		colorSpace: i
	};
}
var cl = (e) => {
	let t = sl(e);
	return t.values.slice(0, 3).map((e, n) => t.type.includes("hsl") && n !== 0 ? `${e}%` : e).join(" ");
}, ll = (e, t) => {
	try {
		return cl(e);
	} catch {
		return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
	}
};
function ul(e) {
	let { type: t, colorSpace: n } = e, { values: r } = e;
	return t.includes("rgb") ? r = r.map((e, t) => t < 3 ? parseInt(e, 10) : e) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), r = t.includes("color") ? `${n} ${r.join(" ")}` : `${r.join(", ")}`, `${t}(${r})`;
}
function dl(e) {
	e = sl(e);
	let { values: t } = e, n = t[0], r = t[1] / 100, i = t[2] / 100, a = r * Math.min(i, 1 - i), o = (e, t = (e + n / 30) % 12) => i - a * Math.max(Math.min(t - 3, 9 - t, 1), -1), s = "rgb", c = [
		Math.round(o(0) * 255),
		Math.round(o(8) * 255),
		Math.round(o(4) * 255)
	];
	return e.type === "hsla" && (s += "a", c.push(t[3])), ul({
		type: s,
		values: c
	});
}
function fl(e) {
	e = sl(e);
	let t = e.type === "hsl" || e.type === "hsla" ? sl(dl(e)).values : e.values;
	return t = t.map((t) => (e.type !== "color" && (t /= 255), t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4)), Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3));
}
function pl(e, t) {
	let n = fl(e), r = fl(t);
	return (Math.max(n, r) + .05) / (Math.min(n, r) + .05);
}
function ml(e, t) {
	return e = sl(e), t = al(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ul(e);
}
function hl(e, t, n) {
	try {
		return ml(e, t);
	} catch {
		return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
	}
}
function gl(e, t) {
	if (e = sl(e), t = al(t), e.type.includes("hsl")) e.values[2] *= 1 - t;
	else if (e.type.includes("rgb") || e.type.includes("color")) for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
	return ul(e);
}
function J(e, t, n) {
	try {
		return gl(e, t);
	} catch {
		return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
	}
}
function _l(e, t) {
	if (e = sl(e), t = al(t), e.type.includes("hsl")) e.values[2] += (100 - e.values[2]) * t;
	else if (e.type.includes("rgb")) for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
	else if (e.type.includes("color")) for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
	return ul(e);
}
function Y(e, t, n) {
	try {
		return _l(e, t);
	} catch {
		return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
	}
}
function vl(e, t = .15) {
	return fl(e) > .5 ? gl(e, t) : _l(e, t);
}
function yl(e, t, n) {
	try {
		return vl(e, t);
	} catch {
		return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
	}
}
//#endregion
//#region node_modules/@mui/utils/exactProp/exactProp.mjs
var bl = "exact-prop: ​";
function xl(e) {
	return process.env.NODE_ENV === "production" ? e : {
		...e,
		[bl]: (t) => {
			let n = Object.keys(t).filter((t) => !e.hasOwnProperty(t));
			return n.length > 0 ? /* @__PURE__ */ Error(`The following props are not supported: ${n.map((e) => `\`${e}\``).join(", ")}. Please remove them.`) : null;
		}
	};
}
//#endregion
//#region node_modules/@mui/system/RtlProvider/index.mjs
var Sl = /* @__PURE__ */ r.createContext();
function Cl({ value: e, ...n }) {
	return /* @__PURE__ */ t(Sl.Provider, {
		value: e ?? !0,
		...n
	});
}
process.env.NODE_ENV !== "production" && (Cl.propTypes = {
	children: q.default.node,
	value: q.default.bool
});
var wl = () => r.useContext(Sl) ?? !1, Tl = /* @__PURE__ */ r.createContext(void 0);
function El({ value: e, children: n }) {
	return /* @__PURE__ */ t(Tl.Provider, {
		value: e,
		children: n
	});
}
process.env.NODE_ENV !== "production" && (El.propTypes = {
	children: q.default.node,
	value: q.default.object
});
function Dl(e) {
	let { theme: t, name: n, props: r } = e;
	if (!t || !t.components || !t.components[n]) return r;
	let i = t.components[n];
	return i.defaultProps ? nl(i.defaultProps, r, t.components.mergeClassNameAndStyle) : !i.styleOverrides && !i.variants ? nl(i, r, t.components.mergeClassNameAndStyle) : r;
}
function Ol({ props: e, name: t }) {
	return Dl({
		props: e,
		name: t,
		theme: { components: r.useContext(Tl) }
	});
}
//#endregion
//#region node_modules/@mui/utils/useId/useId.mjs
var kl = 0;
function Al(e) {
	let [t, n] = r.useState(e), i = e || t;
	return r.useEffect(() => {
		t ?? (kl += 1, n(`mui-${kl}`));
	}, [t]), i;
}
var jl = { ...r }.useId;
function Ml(e) {
	if (jl !== void 0) {
		let t = jl();
		return e ?? t;
	}
	return Al(e);
}
//#endregion
//#region node_modules/@mui/system/memoTheme.mjs
var Nl = { theme: void 0 };
function Pl(e) {
	let t, n;
	return function(r) {
		let i = t;
		return (i === void 0 || r.theme !== n) && (Nl.theme = r.theme, i = Uc(e(Nl)), t = i, n = r.theme), i;
	};
}
//#endregion
//#region node_modules/@mui/system/cssVars/createGetCssVar.mjs
function Fl(e = "") {
	function t(...n) {
		if (!n.length) return "";
		let r = n[0];
		return typeof r == "string" && !r.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${r}${t(...n.slice(1))})` : `, ${r}`;
	}
	return (n, ...r) => `var(--${e ? `${e}-` : ""}${n}${t(...r)})`;
}
//#endregion
//#region node_modules/@mui/system/cssVars/cssVarsParser.mjs
var Il = (e, t, n, r = []) => {
	let i = e;
	t.forEach((e, a) => {
		a === t.length - 1 ? Array.isArray(i) ? i[Number(e)] = n : i && typeof i == "object" && (i[e] = n) : i && typeof i == "object" && (i[e] || (i[e] = r.includes(e) ? [] : {}), i = i[e]);
	});
}, Ll = (e, t, n) => {
	function r(e, i = [], a = []) {
		Object.entries(e).forEach(([e, o]) => {
			(!n || n && !n([...i, e])) && o != null && (typeof o == "object" && Object.keys(o).length > 0 ? r(o, [...i, e], Array.isArray(o) ? [...a, e] : a) : t([...i, e], o, a));
		});
	}
	r(e);
}, Rl = (e, t) => typeof t == "number" ? [
	"lineHeight",
	"fontWeight",
	"opacity",
	"zIndex"
].some((t) => e.includes(t)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function zl(e, t) {
	let { prefix: n, shouldSkipGeneratingVar: r } = t || {}, i = {}, a = {}, o = {};
	return Ll(e, (e, t, s) => {
		if ((typeof t == "string" || typeof t == "number") && (!r || !r(e, t))) {
			let r = `--${n ? `${n}-` : ""}${e.join("-")}`, c = Rl(e, t);
			Object.assign(i, { [r]: c }), Il(a, e, `var(${r})`, s), Il(o, e, `var(${r}, ${c})`, s);
		}
	}, (e) => e[0] === "vars"), {
		css: i,
		vars: a,
		varsWithDefaults: o
	};
}
//#endregion
//#region node_modules/@mui/system/cssVars/prepareCssVars.mjs
function Bl(e, t = {}) {
	let { getSelector: n = _, disableCssColorScheme: r, colorSchemeSelector: i, enableContrastVars: a } = t, { colorSchemes: o = {}, components: s, defaultColorScheme: c = "light", ...l } = e, { vars: u, css: d, varsWithDefaults: f } = zl(l, t), p = f, m = {}, { [c]: h, ...g } = o;
	if (Object.entries(g || {}).forEach(([e, n]) => {
		let { vars: r, css: i, varsWithDefaults: a } = zl(n, t);
		p = Yo(p, a), m[e] = {
			css: i,
			vars: r
		};
	}), h) {
		let { css: e, vars: n, varsWithDefaults: r } = zl(h, t);
		p = Yo(p, r), m[c] = {
			css: e,
			vars: n
		};
	}
	function _(t, n) {
		let r = i;
		if (i === "class" && (r = ".%s"), i === "data" && (r = "[data-%s]"), i?.startsWith("data-") && !i.includes("%s") && (r = `[${i}="%s"]`), t) {
			if (r === "media") return e.defaultColorScheme === t ? ":root" : { [`@media (prefers-color-scheme: ${o[t]?.palette?.mode || t})`]: { ":root": n } };
			if (r) return e.defaultColorScheme === t ? `:root, ${r.replace("%s", String(t))}` : r.replace("%s", String(t));
		}
		return ":root";
	}
	return {
		vars: p,
		generateThemeVars: () => {
			let e = { ...u };
			return Object.entries(m).forEach(([, { vars: t }]) => {
				e = Yo(e, t);
			}), e;
		},
		generateStyleSheets: () => {
			let t = [], i = e.defaultColorScheme || "light";
			function s(e, n) {
				Object.keys(n).length && t.push(typeof e == "string" ? { [e]: { ...n } } : e);
			}
			s(n(void 0, { ...d }), d);
			let { [i]: c, ...l } = m;
			if (c) {
				let { css: e } = c, t = o[i]?.palette?.mode, a = !r && t ? {
					colorScheme: t,
					...e
				} : { ...e };
				s(n(i, { ...a }), a);
			}
			return Object.entries(l).forEach(([e, { css: t }]) => {
				let i = o[e]?.palette?.mode, a = !r && i ? {
					colorScheme: i,
					...t
				} : { ...t };
				s(n(e, { ...a }), a);
			}), a && t.push({ ":root": {
				"--__l-threshold": "0.7",
				"--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
				"--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
			} }), t;
		}
	};
}
//#endregion
//#region node_modules/@mui/system/cssVars/getColorSchemeSelector.mjs
function Vl(e) {
	return function(t) {
		return e === "media" ? (process.env.NODE_ENV !== "production" && t !== "light" && t !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${t}'.`), `@media (prefers-color-scheme: ${t})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${t}"] &` : e === "class" ? `.${t} &` : e === "data" ? `[data-${t}] &` : `${e.replace("%s", t)} &` : "&";
	};
}
//#endregion
//#region node_modules/@mui/utils/composeClasses/composeClasses.mjs
function Hl(e, t, n = void 0) {
	let r = {};
	for (let i in e) {
		let a = e[i], o = "", s = !0;
		for (let e = 0; e < a.length; e += 1) {
			let r = a[e];
			r && (o += (s === !0 ? "" : " ") + t(r), s = !1, n && n[r] && (o += " " + n[r]));
		}
		r[i] = o;
	}
	return r;
}
//#endregion
//#region node_modules/@mui/utils/isMuiElement/isMuiElement.mjs
function Ul(e, t) {
	return /* @__PURE__ */ r.isValidElement(e) && t.indexOf(e.type.muiName ?? e.type?._payload?.value?.muiName) !== -1;
}
//#endregion
//#region node_modules/@mui/material/styles/createPalette.mjs
function Wl() {
	return {
		text: {
			primary: "rgba(0, 0, 0, 0.87)",
			secondary: "rgba(0, 0, 0, 0.6)",
			disabled: "rgba(0, 0, 0, 0.38)"
		},
		divider: "rgba(0, 0, 0, 0.12)",
		background: {
			paper: ci.white,
			default: ci.white
		},
		action: {
			active: "rgba(0, 0, 0, 0.54)",
			hover: "rgba(0, 0, 0, 0.04)",
			hoverOpacity: .04,
			selected: "rgba(0, 0, 0, 0.08)",
			selectedOpacity: .08,
			disabled: "rgba(0, 0, 0, 0.26)",
			disabledBackground: "rgba(0, 0, 0, 0.12)",
			disabledOpacity: .38,
			focus: "rgba(0, 0, 0, 0.12)",
			focusOpacity: .12,
			activatedOpacity: .12
		}
	};
}
var Gl = Wl();
function Kl() {
	return {
		text: {
			primary: ci.white,
			secondary: "rgba(255, 255, 255, 0.7)",
			disabled: "rgba(255, 255, 255, 0.5)",
			icon: "rgba(255, 255, 255, 0.5)"
		},
		divider: "rgba(255, 255, 255, 0.12)",
		background: {
			paper: "#121212",
			default: "#121212"
		},
		action: {
			active: ci.white,
			hover: "rgba(255, 255, 255, 0.08)",
			hoverOpacity: .08,
			selected: "rgba(255, 255, 255, 0.16)",
			selectedOpacity: .16,
			disabled: "rgba(255, 255, 255, 0.3)",
			disabledBackground: "rgba(255, 255, 255, 0.12)",
			disabledOpacity: .38,
			focus: "rgba(255, 255, 255, 0.12)",
			focusOpacity: .12,
			activatedOpacity: .24
		}
	};
}
var ql = Kl();
function Jl(e, t, n, r) {
	let i = r.light || r, a = r.dark || r * 1.5;
	e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = _l(e.main, i) : t === "dark" && (e.dark = gl(e.main, a)));
}
function Yl(e, t, n, r, i) {
	let a = i.light || i, o = i.dark || i * 1.5;
	t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(a * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(o * 100).toFixed(0)}%)`));
}
function Xl(e = "light") {
	return e === "dark" ? {
		main: di[200],
		light: di[50],
		dark: di[400]
	} : {
		main: di[700],
		light: di[400],
		dark: di[800]
	};
}
function Zl(e = "light") {
	return e === "dark" ? {
		main: ui[200],
		light: ui[50],
		dark: ui[400]
	} : {
		main: ui[500],
		light: ui[300],
		dark: ui[700]
	};
}
function Ql(e = "light") {
	return e === "dark" ? {
		main: li[500],
		light: li[300],
		dark: li[700]
	} : {
		main: li[700],
		light: li[400],
		dark: li[800]
	};
}
function $l(e = "light") {
	return e === "dark" ? {
		main: fi[400],
		light: fi[300],
		dark: fi[700]
	} : {
		main: fi[700],
		light: fi[500],
		dark: fi[900]
	};
}
function eu(e = "light") {
	return e === "dark" ? {
		main: pi[400],
		light: pi[300],
		dark: pi[700]
	} : {
		main: pi[800],
		light: pi[500],
		dark: pi[900]
	};
}
function tu(e = "light") {
	return e === "dark" ? {
		main: mi[400],
		light: mi[300],
		dark: mi[700]
	} : {
		main: "#ed6c02",
		light: mi[500],
		dark: mi[900]
	};
}
function nu(e) {
	return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function ru(e) {
	let { mode: t = "light", contrastThreshold: n = 3, tonalOffset: r = .2, colorSpace: i, ...a } = e, o = e.primary || Xl(t), s = e.secondary || Zl(t), c = e.error || Ql(t), l = e.info || $l(t), u = e.success || eu(t), d = e.warning || tu(t);
	function f(e) {
		if (i) return nu(e);
		let t = pl(e, ql.text.primary) >= n ? ql.text.primary : Gl.text.primary;
		if (process.env.NODE_ENV !== "production") {
			let n = pl(e, t);
			n < 3 && console.error([
				`MUI: The contrast ratio of ${n}:1 for ${t} on ${e}`,
				"falls below the WCAG recommended absolute minimum contrast ratio of 3:1.",
				"https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"
			].join("\n"));
		}
		return t;
	}
	let p = ({ color: e, name: t, mainShade: n = 500, lightShade: a = 300, darkShade: o = 700 }) => {
		if (e = { ...e }, !e.main && e[n] && (e.main = e[n]), !e.hasOwnProperty("main")) throw Error(process.env.NODE_ENV === "production" ? gi(11, t ? ` (${t})` : "", n) : `MUI: The color${t ? ` (${t})` : ""} provided to augmentColor(color) is invalid.\nThe color object needs to have a \`main\` property or a \`${n}\` property.`);
		if (typeof e.main != "string") throw Error(process.env.NODE_ENV === "production" ? gi(12, t ? ` (${t})` : "", JSON.stringify(e.main)) : `MUI: The color${t ? ` (${t})` : ""} provided to augmentColor(color) is invalid.\n\`color.main\` should be a string, but \`${JSON.stringify(e.main)}\` was provided instead.\n
Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });`);
		return i ? (Yl(i, e, "light", a, r), Yl(i, e, "dark", o, r)) : (Jl(e, "light", a, r), Jl(e, "dark", o, r)), e.contrastText ||= f(e.main), e;
	}, m;
	return t === "light" ? m = Wl() : t === "dark" && (m = Kl()), process.env.NODE_ENV !== "production" && (m || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Yo({
		common: { ...ci },
		mode: t,
		primary: p({
			color: o,
			name: "primary"
		}),
		secondary: p({
			color: s,
			name: "secondary",
			mainShade: "A400",
			lightShade: "A200",
			darkShade: "A700"
		}),
		error: p({
			color: c,
			name: "error"
		}),
		warning: p({
			color: d,
			name: "warning"
		}),
		info: p({
			color: l,
			name: "info"
		}),
		success: p({
			color: u,
			name: "success"
		}),
		grey: hi,
		contrastThreshold: n,
		getContrastText: f,
		augmentColor: p,
		tonalOffset: r,
		...m
	}, a);
}
//#endregion
//#region node_modules/@mui/system/cssVars/prepareTypographyVars.mjs
function iu(e) {
	let t = {};
	return Object.entries(e).forEach((e) => {
		let [n, r] = e;
		typeof r == "object" && (t[n] = `${r.fontStyle ? `${r.fontStyle} ` : ""}${r.fontVariant ? `${r.fontVariant} ` : ""}${r.fontWeight ? `${r.fontWeight} ` : ""}${r.fontStretch ? `${r.fontStretch} ` : ""}${r.fontSize || ""}${r.lineHeight ? `/${r.lineHeight} ` : ""}${r.fontFamily || ""}`);
	}), t;
}
//#endregion
//#region node_modules/@mui/material/styles/createMixins.mjs
function au(e, t) {
	return {
		toolbar: {
			minHeight: 56,
			[e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
			[e.up("sm")]: { minHeight: 64 }
		},
		...t
	};
}
//#endregion
//#region node_modules/@mui/material/styles/createTypography.mjs
function ou(e) {
	return Math.round(e * 1e5) / 1e5;
}
var su = { textTransform: "uppercase" }, cu = "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif";
function lu(e, t) {
	let { fontFamily: n = cu, fontSize: r = 14, fontWeightLight: i = 300, fontWeightRegular: a = 400, fontWeightMedium: o = 500, fontWeightBold: s = 700, htmlFontSize: c = 16, allVariants: l, pxToRem: u, ...d } = typeof t == "function" ? t(e) : t;
	process.env.NODE_ENV !== "production" && (typeof r != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
	let f = r / 14, p = u || ((e) => `${e / c * f}rem`), m = (e, t, r, i, a) => ({
		fontFamily: n,
		fontWeight: e,
		fontSize: p(t),
		lineHeight: r,
		...n === cu ? { letterSpacing: `${ou(i / t)}em` } : {},
		...a,
		...l
	});
	return Yo({
		htmlFontSize: c,
		pxToRem: p,
		fontFamily: n,
		fontSize: r,
		fontWeightLight: i,
		fontWeightRegular: a,
		fontWeightMedium: o,
		fontWeightBold: s,
		h1: m(i, 96, 1.167, -1.5),
		h2: m(i, 60, 1.2, -.5),
		h3: m(a, 48, 1.167, 0),
		h4: m(a, 34, 1.235, .25),
		h5: m(a, 24, 1.334, 0),
		h6: m(o, 20, 1.6, .15),
		subtitle1: m(a, 16, 1.75, .15),
		subtitle2: m(o, 14, 1.57, .1),
		body1: m(a, 16, 1.5, .15),
		body2: m(a, 14, 1.43, .15),
		button: m(o, 14, 1.75, .4, su),
		caption: m(a, 12, 1.66, .4),
		overline: m(a, 12, 2.66, 1, su),
		inherit: {
			fontFamily: "inherit",
			fontWeight: "inherit",
			fontSize: "inherit",
			lineHeight: "inherit",
			letterSpacing: "inherit"
		}
	}, d, { clone: !1 });
}
//#endregion
//#region node_modules/@mui/material/styles/shadows.mjs
var uu = .2, du = .14, fu = .12;
function pu(...e) {
	return [
		`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${uu})`,
		`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${du})`,
		`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${fu})`
	].join(",");
}
var mu = [
	"none",
	pu(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
	pu(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
	pu(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
	pu(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
	pu(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
	pu(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
	pu(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
	pu(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
	pu(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
	pu(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
	pu(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
	pu(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
	pu(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
	pu(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
	pu(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
	pu(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
	pu(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
	pu(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
	pu(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
	pu(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
	pu(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
	pu(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
	pu(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
	pu(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
], hu = {
	easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
	easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
	easeIn: "cubic-bezier(0.4, 0, 1, 1)",
	sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, gu = {
	shortest: 150,
	shorter: 200,
	short: 250,
	standard: 300,
	complex: 375,
	enteringScreen: 225,
	leavingScreen: 195
};
function _u(e) {
	return `${Math.round(e)}ms`;
}
function vu(e) {
	if (!e) return 0;
	let t = e / 36;
	return Math.min(Math.round((4 + 15 * t ** .25 + t / 5) * 10), 3e3);
}
function yu(e) {
	let t = {
		...hu,
		...e.easing
	}, n = {
		...gu,
		...e.duration
	};
	return {
		getAutoHeightDuration: vu,
		create: (e = ["all"], r = {}) => {
			let { duration: i = n.standard, easing: a = t.easeInOut, delay: o = 0, ...s } = r;
			if (process.env.NODE_ENV !== "production") {
				let t = (e) => typeof e == "string", n = (e) => !Number.isNaN(parseFloat(e));
				!t(e) && !Array.isArray(e) && console.error("MUI: Argument \"props\" must be a string or Array."), !n(i) && !t(i) && console.error(`MUI: Argument "duration" must be a number or a string but found ${i}.`), t(a) || console.error("MUI: Argument \"easing\" must be a string."), !n(o) && !t(o) && console.error("MUI: Argument \"delay\" must be a number or a string."), typeof r != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join("\n")), Object.keys(s).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(s).join(",")}].`);
			}
			return (Array.isArray(e) ? e : [e]).map((e) => `${e} ${typeof i == "string" ? i : _u(i)} ${a} ${typeof o == "string" ? o : _u(o)}`).join(",");
		},
		...e,
		easing: t,
		duration: n
	};
}
//#endregion
//#region node_modules/@mui/material/styles/zIndex.mjs
var bu = {
	mobileStepper: 1e3,
	fab: 1050,
	speedDial: 1050,
	appBar: 1100,
	drawer: 1200,
	modal: 1300,
	snackbar: 1400,
	tooltip: 1500
};
//#endregion
//#region node_modules/@mui/material/styles/stringifyTheme.mjs
function xu(e) {
	return qo(e) || e === void 0 || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Su(e = {}) {
	let t = { ...e };
	function n(e) {
		let t = Object.entries(e);
		for (let r = 0; r < t.length; r++) {
			let [i, a] = t[r];
			!xu(a) || i.startsWith("unstable_") || i.startsWith("internal_") ? delete e[i] : qo(a) && (e[i] = { ...a }, n(e[i]));
		}
	}
	return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
//#endregion
//#region node_modules/@mui/material/styles/createThemeNoVars.mjs
function Cu(e) {
	return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
var wu = (e) => {
	if (!Number.isNaN(+e)) return +e;
	let t = e.match(/\d*\.?\d+/g);
	if (!t) return 0;
	let n = 0;
	for (let e = 0; e < t.length; e += 1) n += +t[e];
	return n;
};
function Tu(e) {
	Object.assign(e, {
		alpha(t, n) {
			let r = this || e;
			return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : ml(t, wu(n));
		},
		lighten(t, n) {
			let r = this || e;
			return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${Cu(n)})` : _l(t, n);
		},
		darken(t, n) {
			let r = this || e;
			return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${Cu(n)})` : gl(t, n);
		}
	});
}
function Eu(e = {}, ...t) {
	let { breakpoints: n, mixins: r = {}, spacing: i, palette: a = {}, transitions: o = {}, typography: s = {}, shape: c, colorSpace: l, ...u } = e;
	if (e.vars && e.generateThemeVars === void 0) throw Error(process.env.NODE_ENV === "production" ? gi(22) : "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature.");
	let d = ru({
		...a,
		colorSpace: l
	}), f = Oc(e), p = Yo(f, {
		mixins: au(f.breakpoints, r),
		palette: d,
		shadows: mu.slice(),
		typography: lu(d, s),
		transitions: yu(o),
		zIndex: { ...bu }
	});
	if (p = Yo(p, u), p = t.reduce((e, t) => Yo(e, t), p), process.env.NODE_ENV !== "production") {
		let e = [
			"active",
			"checked",
			"completed",
			"disabled",
			"error",
			"expanded",
			"focused",
			"focusVisible",
			"required",
			"selected"
		], t = (t, n) => {
			let r;
			for (r in t) {
				let i = t[r];
				if (e.includes(r) && Object.keys(i).length > 0) {
					if (process.env.NODE_ENV !== "production") {
						let e = Rc("", r);
						console.error([
							`MUI: The \`${n}\` component increases the CSS specificity of the \`${r}\` internal state.`,
							"You can not override it like this: ",
							JSON.stringify(t, null, 2),
							"",
							`Instead, you need to use the '&.${e}' syntax:`,
							JSON.stringify({ root: { [`&.${e}`]: i } }, null, 2),
							"",
							"https://mui.com/r/state-classes-guide"
						].join("\n"));
					}
					t[r] = {};
				}
			}
		};
		Object.keys(p.components).forEach((e) => {
			let n = p.components[e].styleOverrides;
			n && e.startsWith("Mui") && t(n, e);
		});
	}
	return p.unstable_sxConfig = {
		...xc,
		...u?.unstable_sxConfig
	}, p.unstable_sx = function(e) {
		return wc({
			sx: e,
			theme: this
		});
	}, p.toRuntimeSource = Su, Tu(p), p;
}
//#endregion
//#region node_modules/@mui/material/styles/getOverlayAlpha.mjs
function Du(e) {
	let t;
	return t = e < 1 ? 5.11916 * e ** 2 : 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
//#endregion
//#region node_modules/@mui/material/styles/createColorScheme.mjs
var Ou = [...Array(25)].map((e, t) => {
	if (t === 0) return "none";
	let n = Du(t);
	return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function ku(e) {
	return {
		inputPlaceholder: e === "dark" ? .5 : .42,
		inputUnderline: e === "dark" ? .7 : .42,
		switchTrackDisabled: e === "dark" ? .2 : .12,
		switchTrack: e === "dark" ? .3 : .38
	};
}
function Au(e) {
	return e === "dark" ? Ou : [];
}
function ju(e) {
	let { palette: t = { mode: "light" }, opacity: n, overlays: r, colorSpace: i, ...a } = e, o = ru({
		...t,
		colorSpace: i
	});
	return {
		palette: o,
		opacity: {
			...ku(o.mode),
			...n
		},
		overlays: r || Au(o.mode),
		...a
	};
}
//#endregion
//#region node_modules/@mui/material/styles/shouldSkipGeneratingVar.mjs
function Mu(e) {
	return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
//#endregion
//#region node_modules/@mui/material/styles/excludeVariablesFromRoot.mjs
var Nu = (e) => [
	...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`),
	`--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
	`--${e ? `${e}-` : ""}palette-AppBar-darkColor`
], Pu = (e) => (t, n) => {
	let r = e.rootSelector || ":root", i = e.colorSchemeSelector, a = i;
	if (i === "class" && (a = ".%s"), i === "data" && (a = "[data-%s]"), i?.startsWith("data-") && !i.includes("%s") && (a = `[${i}="%s"]`), e.defaultColorScheme === t) {
		if (t === "dark") {
			let i = {};
			return Nu(e.cssVarPrefix).forEach((e) => {
				i[e] = n[e], delete n[e];
			}), a === "media" ? {
				[r]: n,
				"@media (prefers-color-scheme: dark)": { [r]: i }
			} : a ? {
				[a.replace("%s", t)]: i,
				[`${r}, ${a.replace("%s", t)}`]: n
			} : { [r]: {
				...n,
				...i
			} };
		}
		if (a && a !== "media") return `${r}, ${a.replace("%s", String(t))}`;
	} else if (t) {
		if (a === "media") return { [`@media (prefers-color-scheme: ${String(t)})`]: { [r]: n } };
		if (a) return a.replace("%s", String(t));
	}
	return r;
};
//#endregion
//#region node_modules/@mui/material/styles/createThemeWithVars.mjs
function Fu(e, t) {
	t.forEach((t) => {
		e[t] || (e[t] = {});
	});
}
function X(e, t, n) {
	!e[t] && n && (e[t] = n);
}
function Iu(e) {
	return typeof e != "string" || !e.startsWith("hsl") ? e : dl(e);
}
function Lu(e, t) {
	`${t}Channel` in e || (e[`${t}Channel`] = ll(Iu(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Ru(e) {
	return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
var zu = (e) => {
	try {
		return e();
	} catch {}
}, Bu = (e = "mui") => Fl(e);
function Vu(e, t, n, r, i) {
	if (!n) return;
	n = n === !0 ? {} : n;
	let a = i === "dark" ? "dark" : "light";
	if (!r) {
		t[i] = ju({
			...n,
			palette: {
				mode: a,
				...n?.palette
			},
			colorSpace: e
		});
		return;
	}
	let { palette: o, ...s } = Eu({
		...r,
		palette: {
			mode: a,
			...n?.palette
		},
		colorSpace: e
	});
	return t[i] = {
		...n,
		palette: o,
		opacity: {
			...ku(a),
			...n?.opacity
		},
		overlays: n?.overlays || Au(a)
	}, s;
}
function Hu(e = {}, ...t) {
	let { colorSchemes: n = { light: !0 }, defaultColorScheme: r, disableCssColorScheme: i = !1, cssVarPrefix: a = "mui", nativeColor: o = !1, shouldSkipGeneratingVar: s = Mu, colorSchemeSelector: c = n.light && n.dark ? "media" : void 0, rootSelector: l = ":root", ...u } = e, d = Object.keys(n)[0], f = r || (n.light && d !== "light" ? "light" : d), p = Bu(a), { [f]: m, light: h, dark: g, ..._ } = n, v = { ..._ }, y = m;
	if ((f === "dark" && !("dark" in n) || f === "light" && !("light" in n)) && (y = !0), !y) throw Error(process.env.NODE_ENV === "production" ? gi(21, f) : `MUI: The \`colorSchemes.${f}\` option is either missing or invalid.`);
	let b;
	o && (b = "oklch");
	let x = Vu(b, v, y, u, f);
	h && !v.light && Vu(b, v, h, void 0, "light"), g && !v.dark && Vu(b, v, g, void 0, "dark");
	let S = {
		defaultColorScheme: f,
		...x,
		cssVarPrefix: a,
		colorSchemeSelector: c,
		rootSelector: l,
		getCssVar: p,
		colorSchemes: v,
		font: {
			...iu(x.typography),
			...x.font
		},
		spacing: Ru(u.spacing)
	};
	Object.keys(S.colorSchemes).forEach((e) => {
		let t = S.colorSchemes[e].palette, n = (e) => {
			let n = e.split("-"), r = n[1], i = n[2];
			return p(e, t[r][i]);
		};
		t.mode === "light" && (X(t.common, "background", "#fff"), X(t.common, "onBackground", "#000")), t.mode === "dark" && (X(t.common, "background", "#000"), X(t.common, "onBackground", "#fff"));
		function r(e, t, n) {
			if (b) {
				let r;
				return e === hl && (r = `transparent ${((1 - n) * 100).toFixed(0)}%`), e === J && (r = `#000 ${(n * 100).toFixed(0)}%`), e === Y && (r = `#fff ${(n * 100).toFixed(0)}%`), `color-mix(in ${b}, ${t}, ${r})`;
			}
			return e(t, n);
		}
		if (Fu(t, [
			"Alert",
			"AppBar",
			"Avatar",
			"Button",
			"Chip",
			"FilledInput",
			"LinearProgress",
			"Skeleton",
			"Slider",
			"SnackbarContent",
			"SpeedDialAction",
			"StepConnector",
			"StepContent",
			"Switch",
			"TableCell",
			"Tooltip"
		]), t.mode === "light") {
			X(t.Alert, "errorColor", r(J, o ? p("palette-error-light") : t.error.light, .6)), X(t.Alert, "infoColor", r(J, o ? p("palette-info-light") : t.info.light, .6)), X(t.Alert, "successColor", r(J, o ? p("palette-success-light") : t.success.light, .6)), X(t.Alert, "warningColor", r(J, o ? p("palette-warning-light") : t.warning.light, .6)), X(t.Alert, "errorFilledBg", n("palette-error-main")), X(t.Alert, "infoFilledBg", n("palette-info-main")), X(t.Alert, "successFilledBg", n("palette-success-main")), X(t.Alert, "warningFilledBg", n("palette-warning-main")), X(t.Alert, "errorFilledColor", zu(() => t.getContrastText(t.error.main))), X(t.Alert, "infoFilledColor", zu(() => t.getContrastText(t.info.main))), X(t.Alert, "successFilledColor", zu(() => t.getContrastText(t.success.main))), X(t.Alert, "warningFilledColor", zu(() => t.getContrastText(t.warning.main))), X(t.Alert, "errorStandardBg", r(Y, o ? p("palette-error-light") : t.error.light, .9)), X(t.Alert, "infoStandardBg", r(Y, o ? p("palette-info-light") : t.info.light, .9)), X(t.Alert, "successStandardBg", r(Y, o ? p("palette-success-light") : t.success.light, .9)), X(t.Alert, "warningStandardBg", r(Y, o ? p("palette-warning-light") : t.warning.light, .9)), X(t.Alert, "errorIconColor", n("palette-error-main")), X(t.Alert, "infoIconColor", n("palette-info-main")), X(t.Alert, "successIconColor", n("palette-success-main")), X(t.Alert, "warningIconColor", n("palette-warning-main")), X(t.AppBar, "defaultBg", n("palette-grey-100")), X(t.Avatar, "defaultBg", n("palette-grey-400")), X(t.Button, "inheritContainedBg", n("palette-grey-300")), X(t.Button, "inheritContainedHoverBg", n("palette-grey-A100")), X(t.Chip, "defaultBorder", n("palette-grey-400")), X(t.Chip, "defaultAvatarColor", n("palette-grey-700")), X(t.Chip, "defaultIconColor", n("palette-grey-700")), X(t.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), X(t.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), X(t.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), X(t.LinearProgress, "primaryBg", r(Y, o ? p("palette-primary-main") : t.primary.main, .62)), X(t.LinearProgress, "secondaryBg", r(Y, o ? p("palette-secondary-main") : t.secondary.main, .62)), X(t.LinearProgress, "errorBg", r(Y, o ? p("palette-error-main") : t.error.main, .62)), X(t.LinearProgress, "infoBg", r(Y, o ? p("palette-info-main") : t.info.main, .62)), X(t.LinearProgress, "successBg", r(Y, o ? p("palette-success-main") : t.success.main, .62)), X(t.LinearProgress, "warningBg", r(Y, o ? p("palette-warning-light") : t.warning.main, .62)), X(t.Skeleton, "bg", b ? r(hl, o ? p("palette-text-primary") : t.text.primary, .11) : `rgba(${n("palette-text-primaryChannel")} / 0.11)`), X(t.Slider, "primaryTrack", r(Y, o ? p("palette-primary-main") : t.primary.main, .62)), X(t.Slider, "secondaryTrack", r(Y, o ? p("palette-secondary-main") : t.secondary.main, .62)), X(t.Slider, "errorTrack", r(Y, o ? p("palette-error-main") : t.error.main, .62)), X(t.Slider, "infoTrack", r(Y, o ? p("palette-info-main") : t.info.main, .62)), X(t.Slider, "successTrack", r(Y, o ? p("palette-success-main") : t.success.main, .62)), X(t.Slider, "warningTrack", r(Y, o ? p("palette-warning-main") : t.warning.main, .62));
			let e = b ? r(J, o ? p("palette-background-default") : t.background.default, .6825) : yl(t.background.default, .8);
			X(t.SnackbarContent, "bg", e), X(t.SnackbarContent, "color", zu(() => b ? ql.text.primary : t.getContrastText(e))), X(t.SpeedDialAction, "fabHoverBg", yl(t.background.paper, .15)), X(t.StepConnector, "border", n("palette-grey-400")), X(t.StepContent, "border", n("palette-grey-400")), X(t.Switch, "defaultColor", n("palette-common-white")), X(t.Switch, "defaultDisabledColor", n("palette-grey-100")), X(t.Switch, "primaryDisabledColor", r(Y, o ? p("palette-primary-main") : t.primary.main, .62)), X(t.Switch, "secondaryDisabledColor", r(Y, o ? p("palette-secondary-main") : t.secondary.main, .62)), X(t.Switch, "errorDisabledColor", r(Y, o ? p("palette-error-main") : t.error.main, .62)), X(t.Switch, "infoDisabledColor", r(Y, o ? p("palette-info-main") : t.info.main, .62)), X(t.Switch, "successDisabledColor", r(Y, o ? p("palette-success-main") : t.success.main, .62)), X(t.Switch, "warningDisabledColor", r(Y, o ? p("palette-warning-main") : t.warning.main, .62)), X(t.TableCell, "border", r(Y, hl(o ? p("palette-divider") : t.divider, 1), .88)), X(t.Tooltip, "bg", r(hl, o ? p("palette-grey-700") : t.grey[700], .92));
		}
		if (t.mode === "dark") {
			X(t.Alert, "errorColor", r(Y, o ? p("palette-error-light") : t.error.light, .6)), X(t.Alert, "infoColor", r(Y, o ? p("palette-info-light") : t.info.light, .6)), X(t.Alert, "successColor", r(Y, o ? p("palette-success-light") : t.success.light, .6)), X(t.Alert, "warningColor", r(Y, o ? p("palette-warning-light") : t.warning.light, .6)), X(t.Alert, "errorFilledBg", n("palette-error-dark")), X(t.Alert, "infoFilledBg", n("palette-info-dark")), X(t.Alert, "successFilledBg", n("palette-success-dark")), X(t.Alert, "warningFilledBg", n("palette-warning-dark")), X(t.Alert, "errorFilledColor", zu(() => t.getContrastText(t.error.dark))), X(t.Alert, "infoFilledColor", zu(() => t.getContrastText(t.info.dark))), X(t.Alert, "successFilledColor", zu(() => t.getContrastText(t.success.dark))), X(t.Alert, "warningFilledColor", zu(() => t.getContrastText(t.warning.dark))), X(t.Alert, "errorStandardBg", r(J, o ? p("palette-error-light") : t.error.light, .9)), X(t.Alert, "infoStandardBg", r(J, o ? p("palette-info-light") : t.info.light, .9)), X(t.Alert, "successStandardBg", r(J, o ? p("palette-success-light") : t.success.light, .9)), X(t.Alert, "warningStandardBg", r(J, o ? p("palette-warning-light") : t.warning.light, .9)), X(t.Alert, "errorIconColor", n("palette-error-main")), X(t.Alert, "infoIconColor", n("palette-info-main")), X(t.Alert, "successIconColor", n("palette-success-main")), X(t.Alert, "warningIconColor", n("palette-warning-main")), X(t.AppBar, "defaultBg", n("palette-grey-900")), X(t.AppBar, "darkBg", n("palette-background-paper")), X(t.AppBar, "darkColor", n("palette-text-primary")), X(t.Avatar, "defaultBg", n("palette-grey-600")), X(t.Button, "inheritContainedBg", n("palette-grey-800")), X(t.Button, "inheritContainedHoverBg", n("palette-grey-700")), X(t.Chip, "defaultBorder", n("palette-grey-700")), X(t.Chip, "defaultAvatarColor", n("palette-grey-300")), X(t.Chip, "defaultIconColor", n("palette-grey-300")), X(t.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), X(t.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), X(t.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), X(t.LinearProgress, "primaryBg", r(J, o ? p("palette-primary-main") : t.primary.main, .5)), X(t.LinearProgress, "secondaryBg", r(J, o ? p("palette-secondary-main") : t.secondary.main, .5)), X(t.LinearProgress, "errorBg", r(J, o ? p("palette-error-main") : t.error.main, .5)), X(t.LinearProgress, "infoBg", r(J, o ? p("palette-info-main") : t.info.main, .5)), X(t.LinearProgress, "successBg", r(J, o ? p("palette-success-main") : t.success.main, .5)), X(t.LinearProgress, "warningBg", r(J, o ? p("palette-warning-main") : t.warning.main, .5)), X(t.Skeleton, "bg", b ? r(hl, o ? p("palette-text-primary") : t.text.primary, .13) : `rgba(${n("palette-text-primaryChannel")} / 0.13)`), X(t.Slider, "primaryTrack", r(J, o ? p("palette-primary-main") : t.primary.main, .5)), X(t.Slider, "secondaryTrack", r(J, o ? p("palette-secondary-main") : t.secondary.main, .5)), X(t.Slider, "errorTrack", r(J, o ? p("palette-error-main") : t.error.main, .5)), X(t.Slider, "infoTrack", r(J, o ? p("palette-info-main") : t.info.main, .5)), X(t.Slider, "successTrack", r(J, o ? p("palette-success-main") : t.success.main, .5)), X(t.Slider, "warningTrack", r(J, o ? p("palette-warning-light") : t.warning.main, .5));
			let e = b ? r(Y, o ? p("palette-background-default") : t.background.default, .985) : yl(t.background.default, .98);
			X(t.SnackbarContent, "bg", e), X(t.SnackbarContent, "color", zu(() => b ? Gl.text.primary : t.getContrastText(e))), X(t.SpeedDialAction, "fabHoverBg", yl(t.background.paper, .15)), X(t.StepConnector, "border", n("palette-grey-600")), X(t.StepContent, "border", n("palette-grey-600")), X(t.Switch, "defaultColor", n("palette-grey-300")), X(t.Switch, "defaultDisabledColor", n("palette-grey-600")), X(t.Switch, "primaryDisabledColor", r(J, o ? p("palette-primary-main") : t.primary.main, .55)), X(t.Switch, "secondaryDisabledColor", r(J, o ? p("palette-secondary-main") : t.secondary.main, .55)), X(t.Switch, "errorDisabledColor", r(J, o ? p("palette-error-main") : t.error.main, .55)), X(t.Switch, "infoDisabledColor", r(J, o ? p("palette-info-main") : t.info.main, .55)), X(t.Switch, "successDisabledColor", r(J, o ? p("palette-success-main") : t.success.main, .55)), X(t.Switch, "warningDisabledColor", r(J, o ? p("palette-warning-light") : t.warning.main, .55)), X(t.TableCell, "border", r(J, hl(o ? p("palette-divider") : t.divider, 1), .68)), X(t.Tooltip, "bg", r(hl, o ? p("palette-grey-700") : t.grey[700], .92));
		}
		o || (Lu(t.background, "default"), Lu(t.background, "paper"), Lu(t.common, "background"), Lu(t.common, "onBackground"), Lu(t, "divider")), Object.keys(t).forEach((e) => {
			let n = t[e];
			e !== "tonalOffset" && !o && n && typeof n == "object" && (n.main && X(t[e], "mainChannel", ll(Iu(n.main))), n.light && X(t[e], "lightChannel", ll(Iu(n.light))), n.dark && X(t[e], "darkChannel", ll(Iu(n.dark))), n.contrastText && X(t[e], "contrastTextChannel", ll(Iu(n.contrastText))), e === "text" && (Lu(t[e], "primary"), Lu(t[e], "secondary")), e === "action" && (n.active && Lu(t[e], "active"), n.selected && Lu(t[e], "selected")));
		});
	}), S = t.reduce((e, t) => Yo(e, t), S);
	let C = {
		prefix: a,
		disableCssColorScheme: i,
		shouldSkipGeneratingVar: s,
		getSelector: Pu(S),
		enableContrastVars: o
	}, { vars: w, generateThemeVars: T, generateStyleSheets: E } = Bl(S, C);
	return S.vars = w, Object.entries(S.colorSchemes[S.defaultColorScheme]).forEach(([e, t]) => {
		S[e] = t;
	}), S.generateThemeVars = T, S.generateStyleSheets = E, S.generateSpacing = function() {
		return qs(u.spacing, Bs(this));
	}, S.getColorSchemeSelector = Vl(c), S.spacing = S.generateSpacing(), S.shouldSkipGeneratingVar = s, S.unstable_sxConfig = {
		...xc,
		...u?.unstable_sxConfig
	}, S.unstable_sx = function(e) {
		return wc({
			sx: e,
			theme: this
		});
	}, S.internal_cache = {}, S.toRuntimeSource = Su, S;
}
//#endregion
//#region node_modules/@mui/material/styles/createTheme.mjs
function Uu(e, t, n) {
	e.colorSchemes && n && (e.colorSchemes[t] = {
		...n !== !0 && n,
		palette: ru({
			...n === !0 ? {} : n.palette,
			mode: t
		})
	});
}
function Wu(e = {}, ...t) {
	let { palette: n, cssVariables: r = !1, colorSchemes: i = n ? void 0 : { light: !0 }, defaultColorScheme: a = n?.mode, ...o } = e, s = a || "light", c = i?.[s], l = {
		...i,
		...n ? { [s]: {
			...typeof c != "boolean" && c,
			palette: n
		} } : void 0
	};
	if (r === !1) {
		if (!("colorSchemes" in e)) return Eu(e, ...t);
		let r = n;
		"palette" in e || l[s] && (l[s] === !0 ? s === "dark" && (r = { mode: "dark" }) : r = l[s].palette);
		let i = Eu({
			...e,
			palette: r
		}, ...t);
		return i.defaultColorScheme = s, i.colorSchemes = l, i.palette.mode === "light" && (i.colorSchemes.light = {
			...l.light !== !0 && l.light,
			palette: i.palette
		}, Uu(i, "dark", l.dark)), i.palette.mode === "dark" && (i.colorSchemes.dark = {
			...l.dark !== !0 && l.dark,
			palette: i.palette
		}, Uu(i, "light", l.light)), i;
	}
	return !n && !("light" in l) && s === "light" && (l.light = !0), Hu({
		...o,
		colorSchemes: l,
		defaultColorScheme: s,
		...typeof r != "boolean" && r
	}, ...t);
}
//#endregion
//#region node_modules/@mui/material/styles/defaultTheme.mjs
var Gu = Wu();
//#endregion
//#region node_modules/@mui/material/styles/useTheme.mjs
function Ku() {
	let e = Mc(Gu);
	return process.env.NODE_ENV !== "production" && r.useDebugValue(e), e.$$material || e;
}
//#endregion
//#region node_modules/@mui/material/styles/slotShouldForwardProp.mjs
function qu(e) {
	return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
//#endregion
//#region node_modules/@mui/material/styles/rootShouldForwardProp.mjs
var Ju = (e) => qu(e) && e !== "classes", Z = Zc({
	themeId: _i,
	defaultTheme: Gu,
	rootShouldForwardProp: Ju
}), Q = Es;
//#endregion
//#region node_modules/@mui/material/GlobalStyles/GlobalStyles.mjs
function Yu(e) {
	return /* @__PURE__ */ t(Pc, {
		...e,
		defaultTheme: Gu,
		themeId: _i
	});
}
process.env.NODE_ENV !== "production" && (Yu.propTypes = { styles: q.default.oneOfType([
	q.default.array,
	q.default.func,
	q.default.number,
	q.default.object,
	q.default.string,
	q.default.bool
]) });
//#endregion
//#region node_modules/@mui/material/zero-styled/index.mjs
function Xu(e) {
	return function(n) {
		return /* @__PURE__ */ t(Yu, { styles: typeof e == "function" ? (t) => e({
			theme: t,
			...n
		}) : e });
	};
}
//#endregion
//#region node_modules/@mui/material/utils/memoTheme.mjs
var $ = Pl;
//#endregion
//#region node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.mjs
function Zu(e) {
	return /* @__PURE__ */ t(El, { ...e });
}
process.env.NODE_ENV !== "production" && (Zu.propTypes = {
	children: q.default.node,
	value: q.default.object.isRequired
});
function Qu(e) {
	return Ol(e);
}
//#endregion
//#region node_modules/@mui/material/SvgIcon/svgIconClasses.mjs
function $u(e) {
	return Rc("MuiSvgIcon", e);
}
zc("MuiSvgIcon", [
	"root",
	"colorPrimary",
	"colorSecondary",
	"colorAction",
	"colorError",
	"colorDisabled",
	"fontSizeInherit",
	"fontSizeSmall",
	"fontSizeMedium",
	"fontSizeLarge"
]);
//#endregion
//#region node_modules/@mui/material/SvgIcon/SvgIcon.mjs
var ed = (e) => {
	let { color: t, fontSize: n, classes: r } = e;
	return Hl({ root: [
		"root",
		t !== "inherit" && `color${Q(t)}`,
		`fontSize${Q(n)}`
	] }, $u, r);
}, td = Z("svg", {
	name: "MuiSvgIcon",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			n.color !== "inherit" && t[`color${Q(n.color)}`],
			t[`fontSize${Q(n.fontSize)}`]
		];
	}
})($(({ theme: e }) => ({
	userSelect: "none",
	width: "1em",
	height: "1em",
	display: "inline-block",
	flexShrink: 0,
	transition: e.transitions?.create?.("fill", { duration: (e.vars ?? e).transitions?.duration?.shorter }),
	variants: [
		{
			props: (e) => !e.hasSvgAsChild,
			style: { fill: "currentColor" }
		},
		{
			props: { fontSize: "inherit" },
			style: { fontSize: "inherit" }
		},
		{
			props: { fontSize: "small" },
			style: { fontSize: e.typography?.pxToRem?.(20) || "1.25rem" }
		},
		{
			props: { fontSize: "medium" },
			style: { fontSize: e.typography?.pxToRem?.(24) || "1.5rem" }
		},
		{
			props: { fontSize: "large" },
			style: { fontSize: e.typography?.pxToRem?.(35) || "2.1875rem" }
		},
		...Object.entries((e.vars ?? e).palette).filter(([, e]) => e && e.main).map(([t]) => ({
			props: { color: t },
			style: { color: (e.vars ?? e).palette?.[t]?.main }
		})),
		{
			props: { color: "action" },
			style: { color: (e.vars ?? e).palette?.action?.active }
		},
		{
			props: { color: "disabled" },
			style: { color: (e.vars ?? e).palette?.action?.disabled }
		},
		{
			props: { color: "inherit" },
			style: { color: void 0 }
		}
	]
}))), nd = /* @__PURE__ */ r.forwardRef(function(e, i) {
	let a = Qu({
		props: e,
		name: "MuiSvgIcon"
	}), { children: o, className: s, color: c = "inherit", component: l = "svg", fontSize: u = "medium", htmlColor: d, inheritViewBox: f = !1, titleAccess: p, viewBox: m = "0 0 24 24", ...h } = a, g = /* @__PURE__ */ r.isValidElement(o) && o.type === "svg", _ = {
		...a,
		color: c,
		component: l,
		fontSize: u,
		instanceFontSize: e.fontSize,
		inheritViewBox: f,
		viewBox: m,
		hasSvgAsChild: g
	}, v = {};
	return f || (v.viewBox = m), /* @__PURE__ */ n(td, {
		as: l,
		className: j(ed(_).root, s),
		focusable: "false",
		color: d,
		"aria-hidden": p ? void 0 : !0,
		role: p ? "img" : void 0,
		ref: i,
		...v,
		...h,
		...g && o.props,
		ownerState: _,
		children: [g ? o.props.children : o, p ? /* @__PURE__ */ t("title", { children: p }) : null]
	});
});
process.env.NODE_ENV !== "production" && (nd.propTypes = {
	children: q.default.node,
	classes: q.default.object,
	className: q.default.string,
	color: q.default.oneOfType([q.default.oneOf([
		"inherit",
		"action",
		"disabled",
		"primary",
		"secondary",
		"error",
		"info",
		"success",
		"warning"
	]), q.default.string]),
	component: q.default.elementType,
	fontSize: q.default.oneOfType([q.default.oneOf([
		"inherit",
		"large",
		"medium",
		"small"
	]), q.default.string]),
	htmlColor: q.default.string,
	inheritViewBox: q.default.bool,
	shapeRendering: q.default.string,
	sx: q.default.oneOfType([
		q.default.arrayOf(q.default.oneOfType([
			q.default.func,
			q.default.object,
			q.default.bool
		])),
		q.default.func,
		q.default.object
	]),
	titleAccess: q.default.string,
	viewBox: q.default.string
}), nd.muiName = "SvgIcon";
//#endregion
//#region node_modules/@mui/material/SvgIcon/createSvgIcon.mjs
function rd(e, n) {
	function i(r, i) {
		return /* @__PURE__ */ t(nd, {
			"data-testid": process.env.NODE_ENV === "production" ? void 0 : `${n}Icon`,
			ref: i,
			...r,
			children: e
		});
	}
	return process.env.NODE_ENV !== "production" && (i.displayName = `${n}Icon`), i.muiName = nd.muiName, /* @__PURE__ */ r.memo(/* @__PURE__ */ r.forwardRef(i));
}
//#endregion
//#region node_modules/@mui/utils/debounce/debounce.mjs
function id(e, t = 166) {
	let n;
	function r(...r) {
		clearTimeout(n), n = setTimeout(() => {
			e.apply(this, r);
		}, t);
	}
	return r.clear = () => {
		clearTimeout(n);
	}, r;
}
//#endregion
//#region node_modules/@mui/material/utils/isMuiElement.mjs
var ad = Ul;
//#endregion
//#region node_modules/@mui/utils/getActiveElement/getActiveElement.mjs
function od(e) {
	let t = e.activeElement;
	for (; t?.shadowRoot?.activeElement != null;) t = t.shadowRoot.activeElement;
	return t;
}
//#endregion
//#region node_modules/@mui/material/utils/getActiveElement.mjs
var sd = od;
//#endregion
//#region node_modules/@mui/utils/ownerDocument/ownerDocument.mjs
function cd(e) {
	return e && e.ownerDocument || document;
}
//#endregion
//#region node_modules/@mui/material/utils/ownerDocument.mjs
var ld = cd;
//#endregion
//#region node_modules/@mui/utils/ownerWindow/ownerWindow.mjs
function ud(e) {
	return cd(e).defaultView || window;
}
//#endregion
//#region node_modules/@mui/material/utils/useEnhancedEffect.mjs
var dd = rl, fd = Ml;
//#endregion
//#region node_modules/@mui/utils/useControlled/useControlled.mjs
function pd(e) {
	let { controlled: t, default: n, name: i, state: a = "value" } = e, { current: o } = r.useRef(t !== void 0), [s, c] = r.useState(n), l = o ? t : s;
	if (process.env.NODE_ENV !== "production") {
		r.useEffect(() => {
			o !== (t !== void 0) && console.error([
				`MUI: A component is changing the ${o ? "" : "un"}controlled ${a} state of ${i} to be ${o ? "un" : ""}controlled.`,
				"Elements should not switch from uncontrolled to controlled (or vice versa).",
				`Decide between using a controlled or uncontrolled ${i} element for the lifetime of the component.`,
				"The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
				"More info: https://fb.me/react-controlled-components"
			].join("\n"));
		}, [
			a,
			i,
			t
		]);
		let { current: e } = r.useRef(n);
		r.useEffect(() => {
			!o && JSON.stringify(n) !== JSON.stringify(e) && console.error([`MUI: A component is changing the default ${a} state of an uncontrolled ${i} after being initialized. To suppress this warning opt to use a controlled ${i}.`].join("\n"));
		}, [JSON.stringify(n)]);
	}
	return [l, r.useCallback((e) => {
		o || c(e);
	}, [])];
}
//#endregion
//#region node_modules/@mui/material/utils/useControlled.mjs
var md = pd;
//#endregion
//#region node_modules/@mui/utils/useEventCallback/useEventCallback.mjs
function hd(e) {
	let t = r.useRef(e);
	return rl(() => {
		t.current = e;
	}), r.useRef((...e) => (0, t.current)(...e)).current;
}
//#endregion
//#region node_modules/@mui/material/utils/useEventCallback.mjs
var gd = hd;
//#endregion
//#region node_modules/@mui/utils/useForkRef/useForkRef.mjs
function _d(...e) {
	let t = r.useRef(void 0), n = r.useCallback((t) => {
		let n = e.map((e) => {
			if (e == null) return null;
			if (typeof e == "function") {
				let n = e, r = n(t);
				return typeof r == "function" ? r : () => {
					n(null);
				};
			}
			return e.current = t, () => {
				e.current = null;
			};
		});
		return () => {
			n.forEach((e) => e?.());
		};
	}, e);
	return r.useMemo(() => e.every((e) => e == null) ? null : (e) => {
		t.current &&= (t.current(), void 0), e != null && (t.current = n(e));
	}, e);
}
//#endregion
//#region node_modules/@mui/material/utils/useForkRef.mjs
var vd = _d;
//#endregion
//#region node_modules/@mui/utils/isEventHandler/isEventHandler.mjs
function yd(e, t) {
	let n = e.charCodeAt(2);
	return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
//#endregion
//#region node_modules/@mui/material/utils/mergeSlotProps.mjs
function bd(e, t) {
	if (!e) return t;
	function n(e, t) {
		let n = {};
		return Object.keys(t).forEach((r) => {
			yd(r, t[r]) && typeof e[r] == "function" && (n[r] = (...n) => {
				e[r](...n), t[r](...n);
			});
		}), n;
	}
	if (typeof e == "function" || typeof t == "function") return (r) => {
		let i = typeof t == "function" ? t(r) : t, a = typeof e == "function" ? e({
			...r,
			...i
		}) : e, o = j(r?.className, i?.className, a?.className), s = n(a, i);
		return {
			...i,
			...a,
			...s,
			...!!o && { className: o },
			...i?.style && a?.style && { style: {
				...i.style,
				...a.style
			} },
			...i?.sx && a?.sx && { sx: [...Array.isArray(i.sx) ? i.sx : [i.sx], ...Array.isArray(a.sx) ? a.sx : [a.sx]] }
		};
	};
	let r = t, i = n(e, r), a = j(r?.className, e?.className);
	return {
		...t,
		...e,
		...i,
		...!!a && { className: a },
		...r?.style && e?.style && { style: {
			...r.style,
			...e.style
		} },
		...r?.sx && e?.sx && { sx: [...Array.isArray(r.sx) ? r.sx : [r.sx], ...Array.isArray(e.sx) ? e.sx : [e.sx]] }
	};
}
//#endregion
//#region node_modules/@mui/utils/chainPropTypes/chainPropTypes.mjs
function xd(e, t) {
	return process.env.NODE_ENV === "production" ? () => null : function(...n) {
		return e(...n) || t(...n);
	};
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function Sd(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function Cd(e, t) {
	return Cd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Cd(e, t);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function wd(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Cd(e, t);
}
//#endregion
//#region node_modules/react-transition-group/esm/config.js
var Td = { disabled: !1 }, Ed = process.env.NODE_ENV === "production" ? null : q.default.oneOfType([q.default.number, q.default.shape({
	enter: q.default.number,
	exit: q.default.number,
	appear: q.default.number
}).isRequired]);
process.env.NODE_ENV === "production" || q.default.oneOfType([
	q.default.string,
	q.default.shape({
		enter: q.default.string,
		exit: q.default.string,
		active: q.default.string
	}),
	q.default.shape({
		enter: q.default.string,
		enterDone: q.default.string,
		enterActive: q.default.string,
		exit: q.default.string,
		exitDone: q.default.string,
		exitActive: q.default.string
	})
]);
//#endregion
//#region node_modules/react-transition-group/esm/TransitionGroupContext.js
var Dd = i.createContext(null), Od = function(e) {
	return e.scrollTop;
}, kd = "unmounted", Ad = "exited", jd = "entering", Md = "entered", Nd = "exiting", Pd = /* @__PURE__ */ function(e) {
	wd(t, e);
	function t(t, n) {
		var r = e.call(this, t, n) || this, i = n, a = i && !i.isMounting ? t.enter : t.appear, o;
		return r.appearStatus = null, t.in ? a ? (o = Ad, r.appearStatus = jd) : o = Md : o = t.unmountOnExit || t.mountOnEnter ? kd : Ad, r.state = { status: o }, r.nextCallback = null, r;
	}
	t.getDerivedStateFromProps = function(e, t) {
		return e.in && t.status === "unmounted" ? { status: Ad } : null;
	};
	var n = t.prototype;
	return n.componentDidMount = function() {
		this.updateStatus(!0, this.appearStatus);
	}, n.componentDidUpdate = function(e) {
		var t = null;
		if (e !== this.props) {
			var n = this.state.status;
			this.props.in ? n !== "entering" && n !== "entered" && (t = jd) : (n === "entering" || n === "entered") && (t = Nd);
		}
		this.updateStatus(!1, t);
	}, n.componentWillUnmount = function() {
		this.cancelNextCallback();
	}, n.getTimeouts = function() {
		var e = this.props.timeout, t = n = r = e, n, r;
		return e != null && typeof e != "number" && (t = e.exit, n = e.enter, r = e.appear === void 0 ? n : e.appear), {
			exit: t,
			enter: n,
			appear: r
		};
	}, n.updateStatus = function(e, t) {
		if (e === void 0 && (e = !1), t !== null) if (this.cancelNextCallback(), t === "entering") {
			if (this.props.unmountOnExit || this.props.mountOnEnter) {
				var n = this.props.nodeRef ? this.props.nodeRef.current : g.findDOMNode(this);
				n && Od(n);
			}
			this.performEnter(e);
		} else this.performExit();
		else this.props.unmountOnExit && this.state.status === "exited" && this.setState({ status: kd });
	}, n.performEnter = function(e) {
		var t = this, n = this.props.enter, r = this.context ? this.context.isMounting : e, i = this.props.nodeRef ? [r] : [g.findDOMNode(this), r], a = i[0], o = i[1], s = this.getTimeouts(), c = r ? s.appear : s.enter;
		if (!e && !n || Td.disabled) {
			this.safeSetState({ status: Md }, function() {
				t.props.onEntered(a);
			});
			return;
		}
		this.props.onEnter(a, o), this.safeSetState({ status: jd }, function() {
			t.props.onEntering(a, o), t.onTransitionEnd(c, function() {
				t.safeSetState({ status: Md }, function() {
					t.props.onEntered(a, o);
				});
			});
		});
	}, n.performExit = function() {
		var e = this, t = this.props.exit, n = this.getTimeouts(), r = this.props.nodeRef ? void 0 : g.findDOMNode(this);
		if (!t || Td.disabled) {
			this.safeSetState({ status: Ad }, function() {
				e.props.onExited(r);
			});
			return;
		}
		this.props.onExit(r), this.safeSetState({ status: Nd }, function() {
			e.props.onExiting(r), e.onTransitionEnd(n.exit, function() {
				e.safeSetState({ status: Ad }, function() {
					e.props.onExited(r);
				});
			});
		});
	}, n.cancelNextCallback = function() {
		this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
	}, n.safeSetState = function(e, t) {
		t = this.setNextCallback(t), this.setState(e, t);
	}, n.setNextCallback = function(e) {
		var t = this, n = !0;
		return this.nextCallback = function(r) {
			n && (n = !1, t.nextCallback = null, e(r));
		}, this.nextCallback.cancel = function() {
			n = !1;
		}, this.nextCallback;
	}, n.onTransitionEnd = function(e, t) {
		this.setNextCallback(t);
		var n = this.props.nodeRef ? this.props.nodeRef.current : g.findDOMNode(this), r = e == null && !this.props.addEndListener;
		if (!n || r) {
			setTimeout(this.nextCallback, 0);
			return;
		}
		if (this.props.addEndListener) {
			var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback], a = i[0], o = i[1];
			this.props.addEndListener(a, o);
		}
		e != null && setTimeout(this.nextCallback, e);
	}, n.render = function() {
		var e = this.state.status;
		if (e === "unmounted") return null;
		var t = this.props, n = t.children;
		t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef;
		var r = Sd(t, [
			"children",
			"in",
			"mountOnEnter",
			"unmountOnExit",
			"appear",
			"enter",
			"exit",
			"timeout",
			"addEndListener",
			"onEnter",
			"onEntering",
			"onEntered",
			"onExit",
			"onExiting",
			"onExited",
			"nodeRef"
		]);
		return /* @__PURE__ */ i.createElement(Dd.Provider, { value: null }, typeof n == "function" ? n(e, r) : i.cloneElement(i.Children.only(n), r));
	}, t;
}(i.Component);
Pd.contextType = Dd, Pd.propTypes = process.env.NODE_ENV === "production" ? {} : {
	nodeRef: q.default.shape({ current: typeof Element > "u" ? q.default.any : function(e, t, n, r, i, a) {
		var o = e[t];
		return q.default.instanceOf(o && "ownerDocument" in o ? o.ownerDocument.defaultView.Element : Element)(e, t, n, r, i, a);
	} }),
	children: q.default.oneOfType([q.default.func.isRequired, q.default.element.isRequired]).isRequired,
	in: q.default.bool,
	mountOnEnter: q.default.bool,
	unmountOnExit: q.default.bool,
	appear: q.default.bool,
	enter: q.default.bool,
	exit: q.default.bool,
	timeout: function(e) {
		var t = Ed;
		e.addEndListener || (t = t.isRequired);
		var n = [...arguments].slice(1);
		return t.apply(void 0, [e].concat(n));
	},
	addEndListener: q.default.func,
	onEnter: q.default.func,
	onEntering: q.default.func,
	onEntered: q.default.func,
	onExit: q.default.func,
	onExiting: q.default.func,
	onExited: q.default.func
};
function Fd() {}
Pd.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: Fd,
	onEntering: Fd,
	onEntered: Fd,
	onExit: Fd,
	onExiting: Fd,
	onExited: Fd
}, Pd.UNMOUNTED = kd, Pd.EXITED = Ad, Pd.ENTERING = jd, Pd.ENTERED = Md, Pd.EXITING = Nd;
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function Id(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
//#endregion
//#region node_modules/react-transition-group/esm/utils/ChildMapping.js
function Ld(e, t) {
	var n = function(e) {
		return t && u(e) ? t(e) : e;
	}, r = Object.create(null);
	return e && o.map(e, function(e) {
		return e;
	}).forEach(function(e) {
		r[e.key] = n(e);
	}), r;
}
function Rd(e, t) {
	e ||= {}, t ||= {};
	function n(n) {
		return n in t ? t[n] : e[n];
	}
	var r = Object.create(null), i = [];
	for (var a in e) a in t ? i.length && (r[a] = i, i = []) : i.push(a);
	var o, s = {};
	for (var c in t) {
		if (r[c]) for (o = 0; o < r[c].length; o++) {
			var l = r[c][o];
			s[r[c][o]] = n(l);
		}
		s[c] = n(c);
	}
	for (o = 0; o < i.length; o++) s[i[o]] = n(i[o]);
	return s;
}
function zd(e, t, n) {
	return n[t] == null ? e.props[t] : n[t];
}
function Bd(e, t) {
	return Ld(e.children, function(n) {
		return s(n, {
			onExited: t.bind(null, n),
			in: !0,
			appear: zd(n, "appear", e),
			enter: zd(n, "enter", e),
			exit: zd(n, "exit", e)
		});
	});
}
function Vd(e, t, n) {
	var r = Ld(e.children), i = Rd(t, r);
	return Object.keys(i).forEach(function(a) {
		var o = i[a];
		if (u(o)) {
			var c = a in t, l = a in r, d = t[a], f = u(d) && !d.props.in;
			l && (!c || f) ? i[a] = s(o, {
				onExited: n.bind(null, o),
				in: !0,
				exit: zd(o, "exit", e),
				enter: zd(o, "enter", e)
			}) : !l && c && !f ? i[a] = s(o, { in: !1 }) : l && c && u(d) && (i[a] = s(o, {
				onExited: n.bind(null, o),
				in: d.props.in,
				exit: zd(o, "exit", e),
				enter: zd(o, "enter", e)
			}));
		}
	}), i;
}
//#endregion
//#region node_modules/react-transition-group/esm/TransitionGroup.js
var Hd = Object.values || function(e) {
	return Object.keys(e).map(function(t) {
		return e[t];
	});
}, Ud = {
	component: "div",
	childFactory: function(e) {
		return e;
	}
}, Wd = /* @__PURE__ */ function(e) {
	wd(t, e);
	function t(t, n) {
		var r = e.call(this, t, n) || this;
		return r.state = {
			contextValue: { isMounting: !0 },
			handleExited: r.handleExited.bind(Id(r)),
			firstRender: !0
		}, r;
	}
	var n = t.prototype;
	return n.componentDidMount = function() {
		this.mounted = !0, this.setState({ contextValue: { isMounting: !1 } });
	}, n.componentWillUnmount = function() {
		this.mounted = !1;
	}, t.getDerivedStateFromProps = function(e, t) {
		var n = t.children, r = t.handleExited;
		return {
			children: t.firstRender ? Bd(e, r) : Vd(e, n, r),
			firstRender: !1
		};
	}, n.handleExited = function(e, t) {
		var n = Ld(this.props.children);
		e.key in n || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState(function(t) {
			var n = vi({}, t.children);
			return delete n[e.key], { children: n };
		}));
	}, n.render = function() {
		var e = this.props, t = e.component, n = e.childFactory, r = Sd(e, ["component", "childFactory"]), a = this.state.contextValue, o = Hd(this.state.children).map(n);
		return delete r.appear, delete r.enter, delete r.exit, t === null ? /* @__PURE__ */ i.createElement(Dd.Provider, { value: a }, o) : /* @__PURE__ */ i.createElement(Dd.Provider, { value: a }, /* @__PURE__ */ i.createElement(t, r, o));
	}, t;
}(i.Component);
Wd.propTypes = process.env.NODE_ENV === "production" ? {} : {
	component: q.default.any,
	children: q.default.node,
	appear: q.default.bool,
	enter: q.default.bool,
	exit: q.default.bool,
	childFactory: q.default.func
}, Wd.defaultProps = Ud;
//#endregion
//#region node_modules/@mui/utils/useLazyRef/useLazyRef.mjs
var Gd = {};
function Kd(e, t) {
	let n = r.useRef(Gd);
	return n.current === Gd && (n.current = e(t)), n;
}
//#endregion
//#region node_modules/@mui/utils/useOnMount/useOnMount.mjs
var qd = [];
function Jd(e) {
	r.useEffect(e, qd);
}
//#endregion
//#region node_modules/@mui/utils/useTimeout/useTimeout.mjs
var Yd = class e {
	static create() {
		return new e();
	}
	currentId = null;
	start(e, t) {
		this.clear(), this.currentId = setTimeout(() => {
			this.currentId = null, t();
		}, e);
	}
	clear = () => {
		this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
	};
	disposeEffect = () => this.clear;
};
function Xd() {
	let e = Kd(Yd.create).current;
	return Jd(e.disposeEffect), e;
}
//#endregion
//#region node_modules/@mui/utils/elementTypeAcceptingRef/elementTypeAcceptingRef.mjs
function Zd(e) {
	let { prototype: t = {} } = e;
	return !!t.isReactComponent;
}
function Qd(e, t, n, i, a) {
	let o = e[t], s = a || t;
	if (o == null || typeof window > "u") return null;
	let c;
	return typeof o == "function" && !Zd(o) && (c = "Did you accidentally provide a plain function component instead?"), o === r.Fragment && (c = "Did you accidentally provide a React.Fragment instead?"), c === void 0 ? null : /* @__PURE__ */ Error(`Invalid ${i} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`);
}
var $d = xd(q.default.elementType, Qd), ef = (e) => e.scrollTop;
function tf(e, t) {
	return (n) => {
		if (t) {
			let r = e.current;
			n === void 0 ? t(r) : t(r, n);
		}
	};
}
function nf(e, t, n, r, i, a) {
	let o = e === "exited" && !t ? r : n[e] || n.exited;
	return i || a ? {
		...o,
		...i,
		...a
	} : o;
}
function rf(e, t) {
	let { timeout: n, easing: r, style: i = {} } = e;
	return {
		duration: i.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
		easing: i.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
		delay: i.transitionDelay
	};
}
//#endregion
//#region node_modules/@mui/utils/isHostComponent/isHostComponent.mjs
function af(e) {
	return typeof e == "string";
}
//#endregion
//#region node_modules/@mui/utils/appendOwnerState/appendOwnerState.mjs
function of(e, t, n) {
	return e === void 0 || af(e) ? t : {
		...t,
		ownerState: {
			...t.ownerState,
			...n
		}
	};
}
//#endregion
//#region node_modules/@mui/utils/resolveComponentProps/resolveComponentProps.mjs
function sf(e, t, n) {
	return typeof e == "function" ? e(t, n) : e;
}
//#endregion
//#region node_modules/@mui/utils/extractEventHandlers/extractEventHandlers.mjs
function cf(e) {
	if (e === void 0) return {};
	let t = {};
	for (let n of Object.keys(e)) yd(n, e[n]) && (t[n] = e[n]);
	return t;
}
//#endregion
//#region node_modules/@mui/utils/omitEventHandlers/omitEventHandlers.mjs
function lf(e) {
	if (e === void 0) return {};
	let t = {};
	return Object.keys(e).filter((t) => !(t.match(/^on[A-Z]/) && typeof e[t] == "function")).forEach((n) => {
		t[n] = e[n];
	}), t;
}
//#endregion
//#region node_modules/@mui/utils/mergeSlotProps/mergeSlotProps.mjs
function uf(e) {
	let { getSlotProps: t, additionalProps: n, externalSlotProps: r, externalForwardedProps: i, className: a } = e;
	if (!t) {
		let e = j(n?.className, a, i?.className, r?.className), t = {
			...n?.style,
			...i?.style,
			...r?.style
		}, o = {
			...n,
			...i,
			...r
		};
		return e.length > 0 && (o.className = e), Object.keys(t).length > 0 && (o.style = t), {
			props: o,
			internalRef: void 0
		};
	}
	let o = cf({
		...i,
		...r
	}), s = lf(r), c = lf(i), l = t(o), u = j(l?.className, n?.className, a, i?.className, r?.className), d = {
		...l?.style,
		...n?.style,
		...i?.style,
		...r?.style
	}, f = {
		...l,
		...n,
		...c,
		...s
	};
	return u.length > 0 && (f.className = u), Object.keys(d).length > 0 && (f.style = d), {
		props: f,
		internalRef: l.ref
	};
}
//#endregion
//#region node_modules/@mui/material/utils/useSlot.mjs
function df(e, t) {
	let { className: n, elementType: r, ownerState: i, externalForwardedProps: a, internalForwardedProps: o, shouldForwardComponentProp: s = !1, ...c } = t, { component: l, slots: u = { [e]: void 0 }, slotProps: d = { [e]: void 0 }, ...f } = a, p = u[e] || r, m = sf(d[e], i), { props: { component: h, ...g }, internalRef: _ } = uf({
		className: n,
		...c,
		externalForwardedProps: e === "root" ? f : void 0,
		externalSlotProps: m
	}), v = _d(_, m?.ref, t.ref), y = e === "root" ? h || l : h;
	return [p, of(p, {
		...e === "root" && !l && !u[e] && o,
		...e !== "root" && !u[e] && o,
		...g,
		...y && !s && { as: y },
		...y && s && { component: y },
		ref: v
	}, i)];
}
//#endregion
//#region node_modules/@mui/utils/integerPropType/integerPropType.mjs
function ff(e) {
	let t = typeof e;
	switch (t) {
		case "number": return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e === Math.floor(e) ? "number" : "float" : "Infinity";
		case "object": return e === null ? "null" : e.constructor.name;
		default: return t;
	}
}
function pf(e, t, n, r) {
	let i = e[t];
	if (i == null || !Number.isInteger(i)) {
		let e = ff(i);
		return /* @__PURE__ */ RangeError(`Invalid ${r} \`${t}\` of type \`${e}\` supplied to \`${n}\`, expected \`integer\`.`);
	}
	return null;
}
function mf(e, t, n, r) {
	return e[t] === void 0 ? null : pf(e, t, n, r);
}
function hf() {
	return null;
}
mf.isRequired = pf, hf.isRequired = hf;
var gf = process.env.NODE_ENV === "production" ? hf : mf;
//#endregion
//#region node_modules/@mui/material/Paper/paperClasses.mjs
function _f(e) {
	return Rc("MuiPaper", e);
}
zc("MuiPaper", /* @__PURE__ */ "root.rounded.outlined.elevation.elevation0.elevation1.elevation2.elevation3.elevation4.elevation5.elevation6.elevation7.elevation8.elevation9.elevation10.elevation11.elevation12.elevation13.elevation14.elevation15.elevation16.elevation17.elevation18.elevation19.elevation20.elevation21.elevation22.elevation23.elevation24".split("."));
//#endregion
//#region node_modules/@mui/material/Paper/Paper.mjs
var vf = (e) => {
	let { square: t, elevation: n, variant: r, classes: i } = e;
	return Hl({ root: [
		"root",
		r,
		!t && "rounded",
		r === "elevation" && `elevation${n}`
	] }, _f, i);
}, yf = Z("div", {
	name: "MuiPaper",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			t[n.variant],
			!n.square && t.rounded,
			n.variant === "elevation" && t[`elevation${n.elevation}`]
		];
	}
})($(({ theme: e }) => ({
	backgroundColor: (e.vars || e).palette.background.paper,
	color: (e.vars || e).palette.text.primary,
	transition: e.transitions.create("box-shadow"),
	variants: [
		{
			props: ({ ownerState: e }) => !e.square,
			style: { borderRadius: e.shape.borderRadius }
		},
		{
			props: { variant: "outlined" },
			style: { border: `1px solid ${(e.vars || e).palette.divider}` }
		},
		{
			props: { variant: "elevation" },
			style: {
				boxShadow: "var(--Paper-shadow)",
				backgroundImage: "var(--Paper-overlay)"
			}
		}
	]
}))), bf = /* @__PURE__ */ r.forwardRef(function(e, n) {
	let r = Qu({
		props: e,
		name: "MuiPaper"
	}), i = Ku(), { className: a, component: o = "div", elevation: s = 1, square: c = !1, variant: l = "elevation", ...u } = r, d = {
		...r,
		component: o,
		elevation: s,
		square: c,
		variant: l
	}, f = vf(d);
	return process.env.NODE_ENV !== "production" && i.shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join("\n")), /* @__PURE__ */ t(yf, {
		as: o,
		ownerState: d,
		className: j(f.root, a),
		ref: n,
		...u,
		style: {
			...l === "elevation" && {
				"--Paper-shadow": (i.vars || i).shadows[s],
				...i.vars && { "--Paper-overlay": i.vars.overlays?.[s] },
				...!i.vars && i.palette.mode === "dark" && { "--Paper-overlay": `linear-gradient(${ml("#fff", Du(s))}, ${ml("#fff", Du(s))})` }
			},
			...u.style
		}
	});
});
process.env.NODE_ENV !== "production" && (bf.propTypes = {
	children: q.default.node,
	classes: q.default.object,
	className: q.default.string,
	component: q.default.elementType,
	elevation: xd(gf, (e) => {
		let { elevation: t, variant: n } = e;
		return t > 0 && n === "outlined" ? /* @__PURE__ */ Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
	}),
	square: q.default.bool,
	style: q.default.object,
	sx: q.default.oneOfType([
		q.default.arrayOf(q.default.oneOfType([
			q.default.func,
			q.default.object,
			q.default.bool
		])),
		q.default.func,
		q.default.object
	]),
	variant: q.default.oneOfType([q.default.oneOf(["elevation", "outlined"]), q.default.string])
});
//#endregion
//#region node_modules/@mui/utils/refType/refType.mjs
var xf = q.default.oneOfType([q.default.func, q.default.object]);
//#endregion
//#region node_modules/@mui/utils/isFocusVisible/isFocusVisible.mjs
function Sf(e) {
	try {
		return e.matches(":focus-visible");
	} catch {
		process.env.NODE_ENV !== "production" && !window.navigator.userAgent.includes("jsdom") && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join("\n"));
	}
	return !1;
}
//#endregion
//#region node_modules/@mui/material/utils/useFocusableWhenDisabled.mjs
function Cf(e) {
	let { focusableWhenDisabled: t, disabled: n, composite: i = !1, tabIndex: a = 0, isNativeButton: o } = e, s = i && t !== !1, c = i && t === !1;
	return r.useMemo(() => {
		let e = { onKeyDown(e) {
			n && t && e.key !== "Tab" && e.preventDefault();
		} };
		return i || (e.tabIndex = a, !o && n && (e.tabIndex = t ? a : -1)), (o && (t || s) || !o && n) && (e["aria-disabled"] = n), o && (!t || c) && (e.disabled = n), e;
	}, [
		i,
		n,
		t,
		s,
		c,
		o,
		a
	]);
}
//#endregion
//#region node_modules/@mui/material/ButtonBase/useButtonBase.mjs
var wf = {};
function Tf(e) {
	let { nativeButton: t, nativeButtonProp: n, internalNativeButton: i = t, allowInferredHostMismatch: a = !1, disabled: o, type: s, hasFormAction: c = !1, tabIndex: l = 0, focusableWhenDisabled: u, stopEventPropagation: d = !1, onBeforeKeyDown: f, onBeforeKeyUp: p } = e, m = r.useRef(null), h = u === !0, g = Cf({
		focusableWhenDisabled: h,
		disabled: o,
		isNativeButton: t,
		tabIndex: l
	});
	process.env.NODE_ENV !== "production" && r.useEffect(() => {
		let e = m.current;
		if (e == null) return;
		let t = e.tagName === "BUTTON";
		if (n !== void 0) {
			n && !t && console.error("MUI: A component that acts as a button expected a native <button> because the `nativeButton` prop is true. Rendering a non-<button> removes native button semantics, which can impact forms and accessibility. Render a real <button> or set `nativeButton` to `false`."), !n && t && console.error("MUI: A component that acts as a button expected a non-<button> because the `nativeButton` prop is false. Rendering a <button> keeps native behavior while additionally applies non-native attributes and handlers, which can add unintended extra attributes (such as `role` or `aria-disabled`). Render a non-<button> such as <div>, or set `nativeButton` to `true`.");
			return;
		}
		a || (i && !t && console.error("MUI: A component rendering a native <button> resolved to a non-<button> element, but `nativeButton={false}` was not specified and the resolved root is a non-<button>. When rendering a custom component, set `nativeButton={false}` explicitly or render a <button> element."), !i && t && console.error("MUI: A component that acts as a non-native button resolved to a native <button> element, but `nativeButton={true}` was not specified. When rendering a custom component, set `nativeButton={true}` explicitly or render a non-<button> element."));
	}, [
		a,
		i,
		n
	]);
	let _ = r.useCallback(() => {
		let e = m.current;
		return e == null ? t : e.tagName === "BUTTON" ? !0 : !!(e.tagName === "A" && e.href);
	}, [t]), v = r.useMemo(() => {
		let e = h ? {} : { tabIndex: o ? -1 : l };
		return t ? (e.type = s === void 0 && !c ? "button" : s, h || (e.disabled = o)) : (e.role = "button", !h && o && (e["aria-disabled"] = o)), h ? {
			...e,
			...g
		} : e;
	}, [
		o,
		h,
		g,
		c,
		t,
		l,
		s
	]);
	return {
		getButtonProps: r.useCallback((e = wf) => {
			let { onClick: t, onKeyDown: n, onKeyUp: r, ...i } = e, a = (e) => {
				if (d && e.stopPropagation(), o) {
					e.preventDefault();
					return;
				}
				t?.(e);
			}, s = (e) => {
				if (h && g.onKeyDown(e), !o && (f?.(e), n?.(e), !(e.target !== e.currentTarget || _()))) {
					if (e.key === " ") {
						e.preventDefault();
						return;
					}
					e.key === "Enter" && (e.preventDefault(), e.currentTarget.click());
				}
			}, c = (e) => {
				o || (p?.(e), r?.(e), e.target === e.currentTarget && !_() && e.key === " " && !e.defaultPrevented && e.currentTarget.click());
			};
			return {
				...v,
				...i,
				onClick: a,
				onKeyDown: s,
				onKeyUp: c
			};
		}, [
			v,
			o,
			h,
			g,
			_,
			f,
			p,
			d
		]),
		rootRef: m
	};
}
//#endregion
//#region node_modules/@mui/material/useLazyRipple/useLazyRipple.mjs
var Ef = class e {
	static create() {
		return new e();
	}
	static use() {
		let t = Kd(e.create).current, [n, i] = r.useState(!1);
		return t.shouldMount = n, t.setShouldMount = i, r.useEffect(t.mountEffect, [n]), t;
	}
	constructor() {
		this.ref = { current: null }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
	}
	mount() {
		return this.mounted || (this.mounted = Of(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
	}
	mountEffect = () => {
		this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
	};
	start(...e) {
		this.mount().then(() => this.ref.current?.start(...e));
	}
	stop(...e) {
		this.mount().then(() => this.ref.current?.stop(...e));
	}
	pulsate(...e) {
		this.mount().then(() => this.ref.current?.pulsate(...e));
	}
};
function Df() {
	return Ef.use();
}
function Of() {
	let e, t, n = new Promise((n, r) => {
		e = n, t = r;
	});
	return n.resolve = e, n.reject = t, n;
}
//#endregion
//#region node_modules/@mui/material/ButtonBase/Ripple.mjs
function kf(e) {
	let { className: n, classes: i, pulsate: a = !1, rippleX: o, rippleY: s, rippleSize: c, in: l, onExited: u, timeout: d } = e, [f, p] = r.useState(!1), m = j(n, i.ripple, i.rippleVisible, a && i.ripplePulsate), h = {
		width: c,
		height: c,
		top: -(c / 2) + s,
		left: -(c / 2) + o
	}, g = j(i.child, f && i.childLeaving, a && i.childPulsate);
	return !l && !f && p(!0), r.useEffect(() => {
		if (!l && u != null) {
			let e = setTimeout(u, d);
			return () => {
				clearTimeout(e);
			};
		}
	}, [
		u,
		l,
		d
	]), /* @__PURE__ */ t("span", {
		className: m,
		style: h,
		children: /* @__PURE__ */ t("span", { className: g })
	});
}
process.env.NODE_ENV !== "production" && (kf.propTypes = {
	classes: q.default.object.isRequired,
	className: q.default.string,
	in: q.default.bool,
	onExited: q.default.func,
	pulsate: q.default.bool,
	rippleSize: q.default.number,
	rippleX: q.default.number,
	rippleY: q.default.number,
	timeout: q.default.number.isRequired
});
//#endregion
//#region node_modules/@mui/material/ButtonBase/touchRippleClasses.mjs
var Af = zc("MuiTouchRipple", [
	"root",
	"ripple",
	"rippleVisible",
	"ripplePulsate",
	"child",
	"childLeaving",
	"childPulsate"
]), jf = 550, Mf = _o`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Nf = _o`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Pf = _o`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Ff = Z("span", {
	name: "MuiTouchRipple",
	slot: "Root"
})({
	overflow: "hidden",
	pointerEvents: "none",
	position: "absolute",
	zIndex: 0,
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	borderRadius: "inherit"
}), If = Z(kf, {
	name: "MuiTouchRipple",
	slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Af.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Mf};
    animation-duration: ${jf}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  &.${Af.ripplePulsate} {
    animation-duration: ${({ theme: e }) => e.transitions.duration.shorter}ms;
  }

  & .${Af.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Af.childLeaving} {
    opacity: 0;
    animation-name: ${Nf};
    animation-duration: ${jf}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  & .${Af.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Pf};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Lf = /* @__PURE__ */ r.forwardRef(function(e, n) {
	let { center: i = !1, classes: a = {}, className: o, ...s } = Qu({
		props: e,
		name: "MuiTouchRipple"
	}), [c, l] = r.useState([]), u = r.useRef(0), d = r.useRef(null);
	r.useEffect(() => {
		d.current &&= (d.current(), null);
	}, [c]);
	let f = r.useRef(!1), p = Xd(), m = r.useRef(null), h = r.useRef(null), g = r.useCallback((e) => {
		let { pulsate: n, rippleX: r, rippleY: i, rippleSize: o, cb: s } = e;
		l((e) => [...e, /* @__PURE__ */ t(If, {
			classes: {
				ripple: j(a.ripple, Af.ripple),
				rippleVisible: j(a.rippleVisible, Af.rippleVisible),
				ripplePulsate: j(a.ripplePulsate, Af.ripplePulsate),
				child: j(a.child, Af.child),
				childLeaving: j(a.childLeaving, Af.childLeaving),
				childPulsate: j(a.childPulsate, Af.childPulsate)
			},
			timeout: jf,
			pulsate: n,
			rippleX: r,
			rippleY: i,
			rippleSize: o
		}, u.current)]), u.current += 1, d.current = s;
	}, [a]), _ = r.useCallback((e = {}, t = {}, n = () => {}) => {
		let { pulsate: r = !1, center: a = i || t.pulsate, fakeElement: o = !1 } = t;
		if (e?.type === "mousedown" && f.current) {
			f.current = !1;
			return;
		}
		e?.type === "touchstart" && (f.current = !0);
		let s = o ? null : h.current, c = s ? s.getBoundingClientRect() : {
			width: 0,
			height: 0,
			left: 0,
			top: 0
		}, l, u, d;
		if (a || e === void 0 || e.clientX === 0 && e.clientY === 0 || !e.clientX && !e.touches) l = Math.round(c.width / 2), u = Math.round(c.height / 2);
		else {
			let { clientX: t, clientY: n } = e.touches && e.touches.length > 0 ? e.touches[0] : e;
			l = Math.round(t - c.left), u = Math.round(n - c.top);
		}
		if (a) d = Math.sqrt((2 * c.width ** 2 + c.height ** 2) / 3), d % 2 == 0 && (d += 1);
		else {
			let e = Math.max(Math.abs((s ? s.clientWidth : 0) - l), l) * 2 + 2, t = Math.max(Math.abs((s ? s.clientHeight : 0) - u), u) * 2 + 2;
			d = Math.sqrt(e ** 2 + t ** 2);
		}
		e?.touches ? m.current === null && (m.current = () => {
			g({
				pulsate: r,
				rippleX: l,
				rippleY: u,
				rippleSize: d,
				cb: n
			});
		}, p.start(80, () => {
			m.current &&= (m.current(), null);
		})) : g({
			pulsate: r,
			rippleX: l,
			rippleY: u,
			rippleSize: d,
			cb: n
		});
	}, [
		i,
		g,
		p
	]), v = r.useCallback(() => {
		_({}, { pulsate: !0 });
	}, [_]), y = r.useCallback((e, t) => {
		if (p.clear(), e?.type === "touchend" && m.current) {
			m.current(), m.current = null, p.start(0, () => {
				y(e, t);
			});
			return;
		}
		m.current = null, l((e) => e.length > 0 ? e.slice(1) : e), d.current = t;
	}, [p]);
	return r.useImperativeHandle(n, () => ({
		pulsate: v,
		start: _,
		stop: y
	}), [
		v,
		_,
		y
	]), /* @__PURE__ */ t(Ff, {
		className: j(Af.root, a.root, o),
		ref: h,
		...s,
		children: /* @__PURE__ */ t(Wd, {
			component: null,
			exit: !0,
			children: c
		})
	});
});
process.env.NODE_ENV !== "production" && (Lf.propTypes = {
	center: q.default.bool,
	classes: q.default.object,
	className: q.default.string
});
//#endregion
//#region node_modules/@mui/material/ButtonBase/buttonBaseClasses.mjs
function Rf(e) {
	return Rc("MuiButtonBase", e);
}
var zf = zc("MuiButtonBase", [
	"root",
	"disabled",
	"focusVisible"
]), Bf = (e) => {
	let { disabled: t, focusVisible: n, focusVisibleClassName: r, suppressFocusVisible: i, classes: a } = e, o = Hl({ root: [
		"root",
		t && "disabled",
		n && !i && "focusVisible"
	] }, Rf, a);
	return n && !i && r && (o.root += ` ${r}`), o;
}, Vf = Z("button", {
	name: "MuiButtonBase",
	slot: "Root"
})({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	position: "relative",
	boxSizing: "border-box",
	WebkitTapHighlightColor: "transparent",
	backgroundColor: "transparent",
	outline: 0,
	border: 0,
	margin: 0,
	borderRadius: 0,
	padding: 0,
	cursor: "pointer",
	userSelect: "none",
	verticalAlign: "middle",
	MozAppearance: "none",
	WebkitAppearance: "none",
	textDecoration: "none",
	color: "inherit",
	"&::-moz-focus-inner": { borderStyle: "none" },
	[`&.${zf.disabled}`]: {
		pointerEvents: "none",
		cursor: "default"
	},
	"@media print": { colorAdjust: "exact" }
}), Hf = /* @__PURE__ */ r.forwardRef(function(e, i) {
	let a = Qu({
		props: e,
		name: "MuiButtonBase"
	}), { action: o, centerRipple: s = !1, children: c, className: l, component: u = "button", disabled: d = !1, disableRipple: f = !1, disableTouchRipple: p = !1, focusRipple: m = !1, focusVisibleClassName: h, focusableWhenDisabled: g, suppressFocusVisible: _ = !1, internalNativeButton: v, LinkComponent: y = "a", nativeButton: b, onBlur: x, onClick: S, onContextMenu: C, onDragLeave: w, onFocus: T, onFocusVisible: E, onKeyDown: D, onKeyUp: O, onMouseDown: k, onMouseLeave: A, onMouseUp: M, onTouchEnd: N, onTouchMove: ee, onTouchStart: te, tabIndex: P = 0, TouchRippleProps: ne, touchRippleRef: re, type: ie, ...ae } = a, F = !!(ae.href || ae.to), I = !!ae.formAction, oe = u;
	oe === "button" && F && (oe = y);
	let se = typeof oe == "string" ? oe === "button" : v ?? !1, L = b ?? se, R = Df(), ce = vd(R.ref, re), [le, ue] = r.useState(!1);
	(d || _) && le && ue(!1);
	let de = gd((e) => {
		m && !e.repeat && le && e.key === " " && R.stop(e, () => {
			R.start(e);
		});
	}), fe = gd((e) => {
		m && e.key === " " && le && !e.defaultPrevented && R.stop(e, () => {
			R.pulsate(e);
		});
	}), { getButtonProps: pe, rootRef: z } = Tf({
		nativeButton: L,
		nativeButtonProp: b,
		internalNativeButton: se,
		allowInferredHostMismatch: F || typeof oe == "string",
		disabled: d,
		type: ie,
		hasFormAction: I,
		tabIndex: P,
		onBeforeKeyDown: de,
		onBeforeKeyUp: fe
	}), { onClick: me, onKeyDown: he, onKeyUp: ge, ..._e } = pe({
		onClick: S,
		onKeyDown: D,
		onKeyUp: O
	});
	r.useImperativeHandle(o, () => ({ focusVisible: () => {
		ue(!0), z.current.focus();
	} }), [z]);
	let ve = R.shouldMount && !f && !d;
	r.useEffect(() => {
		le && m && !f && R.pulsate();
	}, [
		f,
		m,
		le,
		R
	]);
	let ye = Uf(R, "start", k, p), be = Uf(R, "stop", C, p), xe = Uf(R, "stop", w, p), Se = Uf(R, "stop", M, p), Ce = Uf(R, "stop", (e) => {
		le && e.preventDefault(), A && A(e);
	}, p), we = Uf(R, "start", te, p), B = Uf(R, "stop", N, p), Te = Uf(R, "stop", ee, p), Ee = Uf(R, "stop", (e) => {
		Sf(e.target) || ue(!1), x && x(e);
	}, !1), De = gd((e) => {
		z.current ||= e.currentTarget, !_ && Sf(e.target) && (ue(!0), E && E(e)), T && T(e);
	}), Oe = {};
	F && (Oe.tabIndex = d ? -1 : P, d && (Oe["aria-disabled"] = d), Oe.type = ie);
	let ke = vd(i, z), Ae = {
		...a,
		centerRipple: s,
		component: u,
		disabled: d,
		disableRipple: f,
		disableTouchRipple: p,
		focusRipple: m,
		suppressFocusVisible: _,
		tabIndex: P,
		focusVisible: le
	}, je = Bf(Ae);
	return /* @__PURE__ */ n(Vf, {
		as: oe,
		className: j(je.root, l),
		ownerState: Ae,
		onBlur: Ee,
		onClick: me,
		onContextMenu: be,
		onFocus: De,
		onKeyDown: he,
		onKeyUp: ge,
		onMouseDown: ye,
		onMouseLeave: Ce,
		onMouseUp: Se,
		onDragLeave: xe,
		onTouchEnd: B,
		onTouchMove: Te,
		onTouchStart: we,
		ref: ke,
		...F ? Oe : _e,
		...ae,
		children: [c, ve ? /* @__PURE__ */ t(Lf, {
			ref: ce,
			center: s,
			...ne
		}) : null]
	});
});
function Uf(e, t, n, r = !1) {
	return gd((i) => (n && n(i), r || e[t](i), !0));
}
process.env.NODE_ENV !== "production" && (Hf.propTypes = {
	action: xf,
	centerRipple: q.default.bool,
	children: q.default.node,
	classes: q.default.object,
	className: q.default.string,
	component: $d,
	disabled: q.default.bool,
	disableRipple: q.default.bool,
	disableTouchRipple: q.default.bool,
	focusRipple: q.default.bool,
	focusVisibleClassName: q.default.string,
	formAction: q.default.oneOfType([q.default.func, q.default.string]),
	href: q.default.any,
	LinkComponent: q.default.elementType,
	nativeButton: q.default.bool,
	onBlur: q.default.func,
	onClick: q.default.func,
	onContextMenu: q.default.func,
	onDragLeave: q.default.func,
	onFocus: q.default.func,
	onFocusVisible: q.default.func,
	onKeyDown: q.default.func,
	onKeyUp: q.default.func,
	onMouseDown: q.default.func,
	onMouseLeave: q.default.func,
	onMouseUp: q.default.func,
	onTouchEnd: q.default.func,
	onTouchMove: q.default.func,
	onTouchStart: q.default.func,
	sx: q.default.oneOfType([
		q.default.arrayOf(q.default.oneOfType([
			q.default.func,
			q.default.object,
			q.default.bool
		])),
		q.default.func,
		q.default.object
	]),
	tabIndex: q.default.number,
	TouchRippleProps: q.default.object,
	touchRippleRef: q.default.oneOfType([q.default.func, q.default.shape({ current: q.default.shape({
		pulsate: q.default.func.isRequired,
		start: q.default.func.isRequired,
		stop: q.default.func.isRequired
	}) })]),
	type: q.default.string
});
//#endregion
//#region node_modules/@mui/material/utils/createSimplePaletteValueFilter.mjs
function Wf(e) {
	return typeof e.main == "string";
}
function Gf(e, t = []) {
	if (!Wf(e)) return !1;
	for (let n of t) if (!e.hasOwnProperty(n) || typeof e[n] != "string") return !1;
	return !0;
}
function Kf(e = []) {
	return ([, t]) => t && Gf(t, e);
}
//#endregion
//#region node_modules/@mui/material/CircularProgress/circularProgressClasses.mjs
function qf(e) {
	return Rc("MuiCircularProgress", e);
}
zc("MuiCircularProgress", [
	"root",
	"determinate",
	"indeterminate",
	"colorPrimary",
	"colorSecondary",
	"svg",
	"track",
	"circle",
	"circleDisableShrink"
]);
//#endregion
//#region node_modules/@mui/material/CircularProgress/CircularProgress.mjs
var Jf = 44, Yf = _o`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Xf = _o`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, Zf = typeof Yf == "string" ? null : go`
        animation: ${Yf} 1.4s linear infinite;
      `, Qf = typeof Xf == "string" ? null : go`
        animation: ${Xf} 1.4s ease-in-out infinite;
      `, $f = (e) => {
	let { classes: t, variant: n, color: r, disableShrink: i } = e;
	return Hl({
		root: [
			"root",
			n,
			`color${Q(r)}`
		],
		svg: ["svg"],
		track: ["track"],
		circle: ["circle", i && "circleDisableShrink"]
	}, qf, t);
}, ep = Z("span", {
	name: "MuiCircularProgress",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			t[n.variant],
			t[`color${Q(n.color)}`]
		];
	}
})($(({ theme: e }) => ({
	display: "inline-block",
	variants: [
		{
			props: { variant: "determinate" },
			style: { transition: e.transitions.create("transform") }
		},
		{
			props: { variant: "indeterminate" },
			style: Zf || { animation: `${Yf} 1.4s linear infinite` }
		},
		...Object.entries(e.palette).filter(Kf()).map(([t]) => ({
			props: { color: t },
			style: { color: (e.vars || e).palette[t].main }
		}))
	]
}))), tp = Z("svg", {
	name: "MuiCircularProgress",
	slot: "Svg"
})({ display: "block" }), np = Z("circle", {
	name: "MuiCircularProgress",
	slot: "Circle",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.circle, n.disableShrink && t.circleDisableShrink];
	}
})($(({ theme: e }) => ({
	stroke: "currentColor",
	variants: [
		{
			props: { variant: "determinate" },
			style: { transition: e.transitions.create("stroke-dashoffset") }
		},
		{
			props: { variant: "indeterminate" },
			style: {
				strokeDasharray: "80px, 200px",
				strokeDashoffset: 0
			}
		},
		{
			props: ({ ownerState: e }) => e.variant === "indeterminate" && !e.disableShrink,
			style: Qf || { animation: `${Xf} 1.4s ease-in-out infinite` }
		}
	]
}))), rp = Z("circle", {
	name: "MuiCircularProgress",
	slot: "Track"
})($(({ theme: e }) => ({
	stroke: "currentColor",
	opacity: (e.vars || e).palette.action.activatedOpacity
}))), ip = /* @__PURE__ */ r.forwardRef(function(e, r) {
	let i = Qu({
		props: e,
		name: "MuiCircularProgress"
	}), { className: a, color: o = "primary", disableShrink: s = !1, enableTrackSlot: c = !1, min: l, max: u, size: d = 40, style: f, thickness: p = 3.6, value: m = i.min ?? 0, variant: h = "indeterminate", ...g } = i;
	process.env.NODE_ENV !== "production" && h === "indeterminate" && (l !== void 0 || u !== void 0) && console.warn("MUI: You have provided the `min` or `max` props with an 'indeterminate' variant. These props will have no effect.");
	let _ = l ?? 0, v = u ?? 100, y = {
		...i,
		color: o,
		disableShrink: s,
		size: d,
		thickness: p,
		value: m,
		variant: h,
		enableTrackSlot: c
	}, b = $f(y), x = {}, S = {}, C = {};
	if (h === "determinate") {
		let e = 2 * Math.PI * ((Jf - p) / 2);
		process.env.NODE_ENV !== "production" && (m < _ || m > v || _ >= v) && console.error(`MUI: The min, max, and value props in CircularProgress should be numbers where min < max and min <= value <= max. Received min=${_}, max=${v}, value=${m}.`);
		let t = v - _;
		x.strokeDasharray = e.toFixed(3), x.strokeDashoffset = t > 0 ? `${((v - m) / t * e).toFixed(3)}px` : `${e.toFixed(3)}px`, S.transform = "rotate(-90deg)", C["aria-valuenow"] = m, C["aria-valuemin"] = _, C["aria-valuemax"] = v;
	}
	return /* @__PURE__ */ t(ep, {
		className: j(b.root, a),
		style: {
			width: d,
			height: d,
			...S,
			...f
		},
		ownerState: y,
		ref: r,
		role: "progressbar",
		...C,
		...g,
		children: /* @__PURE__ */ n(tp, {
			className: b.svg,
			ownerState: y,
			viewBox: `${Jf / 2} ${Jf / 2} ${Jf} ${Jf}`,
			children: [c ? /* @__PURE__ */ t(rp, {
				className: b.track,
				ownerState: y,
				cx: Jf,
				cy: Jf,
				r: (Jf - p) / 2,
				fill: "none",
				strokeWidth: p,
				"aria-hidden": "true"
			}) : null, /* @__PURE__ */ t(np, {
				className: b.circle,
				style: x,
				ownerState: y,
				cx: Jf,
				cy: Jf,
				r: (Jf - p) / 2,
				fill: "none",
				strokeWidth: p
			})]
		})
	});
});
process.env.NODE_ENV !== "production" && (ip.propTypes = {
	classes: q.default.object,
	className: q.default.string,
	color: q.default.oneOfType([q.default.oneOf([
		"inherit",
		"primary",
		"secondary",
		"error",
		"info",
		"success",
		"warning"
	]), q.default.string]),
	disableShrink: xd(q.default.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? /* @__PURE__ */ Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
	enableTrackSlot: q.default.bool,
	max: q.default.number,
	min: q.default.number,
	size: q.default.oneOfType([q.default.number, q.default.string]),
	style: q.default.object,
	sx: q.default.oneOfType([
		q.default.arrayOf(q.default.oneOfType([
			q.default.func,
			q.default.object,
			q.default.bool
		])),
		q.default.func,
		q.default.object
	]),
	thickness: q.default.number,
	value: q.default.number,
	variant: q.default.oneOf(["determinate", "indeterminate"])
});
//#endregion
//#region node_modules/@mui/material/IconButton/iconButtonClasses.mjs
function ap(e) {
	return Rc("MuiIconButton", e);
}
var op = zc("MuiIconButton", [
	"root",
	"disabled",
	"colorInherit",
	"colorPrimary",
	"colorSecondary",
	"colorError",
	"colorInfo",
	"colorSuccess",
	"colorWarning",
	"edgeStart",
	"edgeEnd",
	"sizeSmall",
	"sizeMedium",
	"sizeLarge",
	"loading",
	"loadingIndicator",
	"loadingWrapper"
]), sp = (e) => {
	let { classes: t, disabled: n, color: r, edge: i, size: a, loading: o } = e;
	return Hl({
		root: [
			"root",
			o && "loading",
			n && "disabled",
			r !== "default" && `color${Q(r)}`,
			i && `edge${Q(i)}`,
			`size${Q(a)}`
		],
		loadingIndicator: ["loadingIndicator"],
		loadingWrapper: ["loadingWrapper"]
	}, ap, t);
}, cp = Z(Hf, {
	name: "MuiIconButton",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			n.loading && t.loading,
			n.color !== "default" && t[`color${Q(n.color)}`],
			n.edge && t[`edge${Q(n.edge)}`],
			t[`size${Q(n.size)}`]
		];
	}
})($(({ theme: e }) => ({
	textAlign: "center",
	flex: "0 0 auto",
	fontSize: e.typography.pxToRem(24),
	padding: 8,
	borderRadius: "50%",
	color: (e.vars || e).palette.action.active,
	transition: e.transitions.create("background-color", { duration: e.transitions.duration.shortest }),
	variants: [
		{
			props: (e) => !e.disableRipple,
			style: {
				"--IconButton-hoverBg": e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity),
				"&:hover": {
					backgroundColor: "var(--IconButton-hoverBg)",
					"@media (hover: none)": { backgroundColor: "transparent" }
				}
			}
		},
		{
			props: { edge: "start" },
			style: { marginLeft: -12 }
		},
		{
			props: {
				edge: "start",
				size: "small"
			},
			style: { marginLeft: -3 }
		},
		{
			props: { edge: "end" },
			style: { marginRight: -12 }
		},
		{
			props: {
				edge: "end",
				size: "small"
			},
			style: { marginRight: -3 }
		}
	]
})), $(({ theme: e }) => ({
	variants: [
		{
			props: { color: "inherit" },
			style: { color: "inherit" }
		},
		...Object.entries(e.palette).filter(Kf()).map(([t]) => ({
			props: { color: t },
			style: {
				color: (e.vars || e).palette[t].main,
				"--IconButton-hoverBg": e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity)
			}
		})),
		{
			props: { size: "small" },
			style: {
				padding: 5,
				fontSize: e.typography.pxToRem(18)
			}
		},
		{
			props: { size: "large" },
			style: {
				padding: 12,
				fontSize: e.typography.pxToRem(28)
			}
		}
	],
	[`&.${op.disabled}`]: {
		backgroundColor: "transparent",
		color: (e.vars || e).palette.action.disabled
	},
	[`&.${op.loading}`]: { color: "transparent" }
}))), lp = Z("span", {
	name: "MuiIconButton",
	slot: "LoadingIndicator"
})(({ theme: e }) => ({
	display: "none",
	position: "absolute",
	visibility: "visible",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	color: (e.vars || e).palette.action.disabled,
	variants: [{
		props: { loading: !0 },
		style: { display: "flex" }
	}]
})), up = /* @__PURE__ */ r.forwardRef(function(e, r) {
	let i = Qu({
		props: e,
		name: "MuiIconButton"
	}), { edge: a = !1, children: o, className: s, color: c = "default", disabled: l = !1, disableFocusRipple: u = !1, size: d = "medium", id: f, loading: p = null, loadingIndicator: m, ...h } = i, g = fd(f), _ = m ?? /* @__PURE__ */ t(ip, {
		"aria-labelledby": g,
		color: "inherit",
		size: 16
	}), v = {
		...i,
		edge: a,
		color: c,
		disabled: l,
		disableFocusRipple: u,
		loading: p,
		loadingIndicator: _,
		size: d
	}, y = sp(v);
	return /* @__PURE__ */ n(cp, {
		id: p ? g : f,
		className: j(y.root, s),
		centerRipple: !0,
		internalNativeButton: !0,
		focusRipple: !u,
		disabled: l || p,
		ref: r,
		...h,
		ownerState: v,
		children: [typeof p == "boolean" && /* @__PURE__ */ t("span", {
			className: y.loadingWrapper,
			style: { display: "contents" },
			children: /* @__PURE__ */ t(lp, {
				className: y.loadingIndicator,
				ownerState: v,
				children: p && _
			})
		}), o]
	});
});
process.env.NODE_ENV !== "production" && (up.propTypes = {
	children: xd(q.default.node, (e) => r.Children.toArray(e.children).some((e) => /* @__PURE__ */ r.isValidElement(e) && e.props.onClick) ? Error([
		"MUI: You are providing an onClick event listener to a child of a button element.",
		"Prefer applying it to the IconButton directly.",
		"This guarantees that the whole <button> will be responsive to click events."
	].join("\n")) : null),
	classes: q.default.object,
	className: q.default.string,
	color: q.default.oneOfType([q.default.oneOf([
		"inherit",
		"default",
		"primary",
		"secondary",
		"error",
		"info",
		"success",
		"warning"
	]), q.default.string]),
	disabled: q.default.bool,
	disableFocusRipple: q.default.bool,
	disableRipple: q.default.bool,
	edge: q.default.oneOf([
		"end",
		"start",
		!1
	]),
	id: q.default.string,
	loading: q.default.bool,
	loadingIndicator: q.default.node,
	size: q.default.oneOfType([q.default.oneOf([
		"small",
		"medium",
		"large"
	]), q.default.string]),
	sx: q.default.oneOfType([
		q.default.arrayOf(q.default.oneOfType([
			q.default.func,
			q.default.object,
			q.default.bool
		])),
		q.default.func,
		q.default.object
	])
});
//#endregion
//#region node_modules/@mui/material/Typography/typographyClasses.mjs
function dp(e) {
	return Rc("MuiTypography", e);
}
zc("MuiTypography", [
	"root",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"subtitle1",
	"subtitle2",
	"body1",
	"body2",
	"inherit",
	"button",
	"caption",
	"overline",
	"alignLeft",
	"alignRight",
	"alignCenter",
	"alignJustify",
	"noWrap",
	"gutterBottom"
]);
//#endregion
//#region node_modules/@mui/material/Typography/Typography.mjs
var fp = (e) => {
	let { align: t, gutterBottom: n, noWrap: r, variant: i, classes: a } = e;
	return Hl({ root: [
		"root",
		i,
		e.align !== "inherit" && `align${Q(t)}`,
		n && "gutterBottom",
		r && "noWrap"
	] }, dp, a);
}, pp = Z("span", {
	name: "MuiTypography",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			n.variant && t[n.variant],
			n.align !== "inherit" && t[`align${Q(n.align)}`],
			n.noWrap && t.noWrap,
			n.gutterBottom && t.gutterBottom
		];
	}
})($(({ theme: e }) => ({
	margin: 0,
	variants: [
		{
			props: { variant: "inherit" },
			style: {
				font: "inherit",
				lineHeight: "inherit",
				letterSpacing: "inherit"
			}
		},
		...Object.entries(e.typography).filter(([e, t]) => e !== "inherit" && t && typeof t == "object").map(([e, t]) => ({
			props: { variant: e },
			style: t
		})),
		...Object.entries(e.palette).filter(Kf()).map(([t]) => ({
			props: { color: t },
			style: { color: (e.vars || e).palette[t].main }
		})),
		...Object.entries(e.palette?.text || {}).filter(([, e]) => typeof e == "string").map(([t]) => ({
			props: { color: `text${Q(t)}` },
			style: { color: (e.vars || e).palette.text[t] }
		})),
		{
			props: ({ ownerState: e }) => e.align !== "inherit",
			style: { textAlign: "var(--Typography-textAlign)" }
		},
		{
			props: ({ ownerState: e }) => e.noWrap,
			style: {
				overflow: "hidden",
				textOverflow: "ellipsis",
				whiteSpace: "nowrap"
			}
		},
		{
			props: ({ ownerState: e }) => e.gutterBottom,
			style: { marginBottom: "0.35em" }
		}
	]
}))), mp = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	subtitle1: "h6",
	subtitle2: "h6",
	body1: "p",
	body2: "p",
	inherit: "p"
}, hp = /* @__PURE__ */ r.forwardRef(function(e, n) {
	let r = Qu({
		props: e,
		name: "MuiTypography"
	}), { color: i, align: a = "inherit", className: o, component: s, gutterBottom: c = !1, noWrap: l = !1, variant: u = "body1", variantMapping: d = mp, ...f } = r, p = {
		...r,
		align: a,
		color: i,
		className: o,
		component: s,
		gutterBottom: c,
		noWrap: l,
		variant: u,
		variantMapping: d
	};
	return /* @__PURE__ */ t(pp, {
		as: s || d[u] || mp[u] || "span",
		ref: n,
		className: j(fp(p).root, o),
		...f,
		ownerState: p,
		style: {
			...a !== "inherit" && { "--Typography-textAlign": a },
			...f.style
		}
	});
});
process.env.NODE_ENV !== "production" && (hp.propTypes = {
	align: q.default.oneOf([
		"center",
		"inherit",
		"justify",
		"left",
		"right"
	]),
	children: q.default.node,
	classes: q.default.object,
	className: q.default.string,
	color: q.default.oneOfType([q.default.oneOf([
		"primary",
		"secondary",
		"success",
		"error",
		"info",
		"warning",
		"textPrimary",
		"textSecondary",
		"textDisabled"
	]), q.default.string]),
	component: q.default.elementType,
	gutterBottom: q.default.bool,
	noWrap: q.default.bool,
	style: q.default.object,
	sx: q.default.oneOfType([
		q.default.arrayOf(q.default.oneOfType([
			q.default.func,
			q.default.object,
			q.default.bool
		])),
		q.default.func,
		q.default.object
	]),
	variant: q.default.oneOfType([q.default.oneOf([
		"body1",
		"body2",
		"button",
		"caption",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"inherit",
		"overline",
		"subtitle1",
		"subtitle2"
	]), q.default.string]),
	variantMapping: q.default.object
});
//#endregion
//#region node_modules/@mui/utils/contains/contains.mjs
function gp(e, t) {
	if (!e || !t) return !1;
	if (e.contains(t)) return !0;
	let n = t.getRootNode?.();
	if (n && n instanceof ShadowRoot) {
		let n = t;
		for (; n;) {
			if (e === n) return !0;
			n = n.parentNode ?? n.host ?? null;
		}
	}
	return !1;
}
//#endregion
//#region node_modules/@mui/utils/getReactElementRef/getReactElementRef.mjs
function _p(e) {
	return parseInt(r.version, 10) >= 19 ? e?.props?.ref || null : e?.ref || null;
}
//#endregion
//#region node_modules/@mui/material/TextareaAutosize/TextareaAutosize.mjs
function vp(e) {
	return parseInt(e, 10) || 0;
}
var yp = { shadow: {
	visibility: "hidden",
	position: "absolute",
	overflow: "hidden",
	height: 0,
	top: 0,
	left: 0,
	transform: "translateZ(0)"
} };
function bp(e) {
	for (let t in e) return !1;
	return !0;
}
function xp(e) {
	return bp(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
var Sp = /* @__PURE__ */ r.forwardRef(function(e, i) {
	let { onChange: a, maxRows: o, minRows: s = 1, style: c, value: l, ...u } = e, { current: d } = r.useRef(l != null), f = r.useRef(null), p = _d(i, f), m = r.useRef(null), h = r.useRef(null), g = r.useCallback(() => {
		let t = f.current, n = h.current;
		if (!t || !n) return;
		let r = ud(t).getComputedStyle(t);
		if (r.width === "0px") return {
			outerHeightStyle: 0,
			overflowing: !1
		};
		n.style.width = r.width, n.value = t.value || e.placeholder || "x", n.value.slice(-1) === "\n" && (n.value += " ");
		let i = r.boxSizing, a = vp(r.paddingBottom) + vp(r.paddingTop), c = vp(r.borderBottomWidth) + vp(r.borderTopWidth), l = n.scrollHeight;
		n.value = "x";
		let u = n.scrollHeight, d = l;
		return s && (d = Math.max(Number(s) * u, d)), o && (d = Math.min(Number(o) * u, d)), d = Math.max(d, u), {
			outerHeightStyle: d + (i === "border-box" ? a + c : 0),
			overflowing: Math.abs(d - l) <= 1
		};
	}, [
		o,
		s,
		e.placeholder
	]), _ = hd(() => {
		let e = f.current, t = g();
		if (!e || !t || xp(t)) return !1;
		let n = t.outerHeightStyle;
		return m.current != null && m.current !== n;
	}), v = r.useCallback(() => {
		let e = f.current, t = g();
		if (!e || !t || xp(t)) return;
		let n = t.outerHeightStyle;
		m.current !== n && (m.current = n, e.style.height = `${n}px`), e.style.overflow = t.overflowing ? "hidden" : "";
	}, [g]), y = r.useRef(-1);
	return rl(() => {
		let e = id(v), t = f?.current;
		if (!t) return;
		let n = ud(t);
		n.addEventListener("resize", e);
		let r;
		return typeof ResizeObserver < "u" && (r = new ResizeObserver(() => {
			_() && (r.unobserve(t), cancelAnimationFrame(y.current), v(), y.current = requestAnimationFrame(() => {
				r.observe(t);
			}));
		}), r.observe(t)), () => {
			e.clear(), cancelAnimationFrame(y.current), n.removeEventListener("resize", e), r && r.disconnect();
		};
	}, [
		g,
		v,
		_
	]), rl(() => {
		v();
	}), /* @__PURE__ */ n(r.Fragment, { children: [/* @__PURE__ */ t("textarea", {
		value: l,
		onChange: (e) => {
			d || v();
			let t = e.target, n = t.value.length, r = t.value.endsWith("\n"), i = t.selectionStart === n;
			r && i && t.setSelectionRange(n, n), a && a(e);
		},
		ref: p,
		rows: s,
		style: c,
		...u
	}), /* @__PURE__ */ t("textarea", {
		"aria-hidden": !0,
		className: e.className,
		readOnly: !0,
		ref: h,
		tabIndex: -1,
		style: {
			...yp.shadow,
			...c,
			paddingTop: 0,
			paddingBottom: 0
		}
	})] });
});
process.env.NODE_ENV !== "production" && (Sp.propTypes = {
	className: q.default.string,
	maxRows: q.default.oneOfType([q.default.number, q.default.string]),
	minRows: q.default.oneOfType([q.default.number, q.default.string]),
	onChange: q.default.func,
	placeholder: q.default.string,
	style: q.default.object,
	value: q.default.oneOfType([
		q.default.arrayOf(q.default.string),
		q.default.number,
		q.default.string
	])
});
//#endregion
//#region node_modules/@mui/material/FormControl/FormControlContext.mjs
var Cp = /* @__PURE__ */ r.createContext(void 0);
process.env.NODE_ENV !== "production" && (Cp.displayName = "FormControlContext");
//#endregion
//#region node_modules/@mui/material/FormControl/useFormControl.mjs
function wp() {
	return r.useContext(Cp);
}
function Tp({ props: e, states: t }) {
	let n = r.useContext(Cp), i = {};
	return t.forEach((t) => {
		let r = e[t];
		i[t] = r === void 0 && n ? n[t] : r;
	}), [i, n];
}
//#endregion
//#region node_modules/@mui/material/InputBase/utils.mjs
function Ep(e) {
	return e != null && !(Array.isArray(e) && e.length === 0);
}
function Dp(e, t = !1) {
	return e && (Ep(e.value) && e.value !== "" || t && Ep(e.defaultValue) && e.defaultValue !== "");
}
function Op(e) {
	return e.startAdornment;
}
//#endregion
//#region node_modules/@mui/material/InputBase/inputBaseClasses.mjs
function kp(e) {
	return Rc("MuiInputBase", e);
}
var Ap = zc("MuiInputBase", [
	"root",
	"formControl",
	"focused",
	"disabled",
	"adornedStart",
	"adornedEnd",
	"error",
	"sizeSmall",
	"multiline",
	"colorSecondary",
	"fullWidth",
	"hiddenLabel",
	"readOnly",
	"input",
	"inputTypeSearch"
]), jp, Mp = "mui-auto-fill", Np = "mui-auto-fill-cancel", Pp = (e, t) => {
	let { ownerState: n } = e;
	return [
		t.root,
		n.formControl && t.formControl,
		n.startAdornment && t.adornedStart,
		n.endAdornment && t.adornedEnd,
		n.error && t.error,
		n.size === "small" && t.sizeSmall,
		n.multiline && t.multiline,
		n.color && t[`color${Q(n.color)}`],
		n.fullWidth && t.fullWidth,
		n.hiddenLabel && t.hiddenLabel
	];
}, Fp = (e, t) => {
	let { ownerState: n } = e;
	return [t.input, n.type === "search" && t.inputTypeSearch];
}, Ip = (e) => {
	let { classes: t, color: n, disabled: r, error: i, endAdornment: a, focused: o, formControl: s, fullWidth: c, hiddenLabel: l, multiline: u, readOnly: d, size: f, startAdornment: p, type: m } = e;
	return Hl({
		root: [
			"root",
			`color${Q(n)}`,
			r && "disabled",
			i && "error",
			c && "fullWidth",
			o && "focused",
			s && "formControl",
			f && f !== "medium" && `size${Q(f)}`,
			u && "multiline",
			p && "adornedStart",
			a && "adornedEnd",
			l && "hiddenLabel",
			d && "readOnly"
		],
		input: [
			"input",
			r && "disabled",
			m === "search" && "inputTypeSearch",
			d && "readOnly"
		]
	}, kp, t);
}, Lp = Z("div", {
	name: "MuiInputBase",
	slot: "Root",
	overridesResolver: Pp
})($(({ theme: e }) => ({
	...e.typography.body1,
	color: (e.vars || e).palette.text.primary,
	lineHeight: "1.4375em",
	boxSizing: "border-box",
	position: "relative",
	cursor: "text",
	display: "inline-flex",
	alignItems: "center",
	[`&.${Ap.disabled}`]: {
		color: (e.vars || e).palette.text.disabled,
		cursor: "default"
	},
	variants: [
		{
			props: ({ ownerState: e }) => e.multiline,
			style: { padding: "4px 0 5px" }
		},
		{
			props: ({ ownerState: e, size: t }) => e.multiline && t === "small",
			style: { paddingTop: 1 }
		},
		{
			props: ({ ownerState: e }) => e.fullWidth,
			style: { width: "100%" }
		}
	]
}))), Rp = Z("input", {
	name: "MuiInputBase",
	slot: "Input",
	overridesResolver: Fp
})($(({ theme: e }) => {
	let t = e.palette.mode === "light", n = {
		color: "currentColor",
		...e.vars ? { opacity: e.vars.opacity.inputPlaceholder } : { opacity: t ? .42 : .5 },
		transition: e.transitions.create("opacity", { duration: e.transitions.duration.shorter })
	}, r = { opacity: "0 !important" }, i = e.vars ? { opacity: e.vars.opacity.inputPlaceholder } : { opacity: t ? .42 : .5 };
	return {
		font: "inherit",
		letterSpacing: "inherit",
		color: "currentColor",
		padding: "4px 0 5px",
		border: 0,
		boxSizing: "content-box",
		background: "none",
		height: "1.4375em",
		margin: 0,
		WebkitTapHighlightColor: "transparent",
		display: "block",
		minWidth: 0,
		width: "100%",
		"&::-webkit-input-placeholder": n,
		"&::-moz-placeholder": n,
		"&::-ms-input-placeholder": n,
		"&:focus": { outline: 0 },
		"&:invalid": { boxShadow: "none" },
		"&::-webkit-search-decoration": { WebkitAppearance: "none" },
		[`label[data-shrink=false] + .${Ap.formControl} &`]: {
			"&::-webkit-input-placeholder": r,
			"&::-moz-placeholder": r,
			"&::-ms-input-placeholder": r,
			"&:focus::-webkit-input-placeholder": i,
			"&:focus::-moz-placeholder": i,
			"&:focus::-ms-input-placeholder": i
		},
		[`&.${Ap.disabled}`]: {
			opacity: 1,
			WebkitTextFillColor: (e.vars || e).palette.text.disabled
		},
		variants: [
			{
				props: ({ ownerState: e }) => !e.disableInjectingGlobalStyles,
				style: {
					animationName: Np,
					animationDuration: "10ms",
					"&:-webkit-autofill": {
						animationDuration: "5000s",
						animationName: Mp
					}
				}
			},
			{
				props: { size: "small" },
				style: { paddingTop: 1 }
			},
			{
				props: ({ ownerState: e }) => e.multiline,
				style: {
					height: "auto",
					resize: "none",
					padding: 0,
					paddingTop: 0
				}
			},
			{
				props: { type: "search" },
				style: { MozAppearance: "textfield" }
			}
		]
	};
})), zp = Xu({
	[`@keyframes ${Mp}`]: { from: { animationName: Mp } },
	[`@keyframes ${Np}`]: { from: { animationName: Np } }
}), Bp = /* @__PURE__ */ r.forwardRef(function(e, i) {
	let a = Qu({
		props: e,
		name: "MuiInputBase"
	}), { "aria-describedby": o, "aria-label": s, autoComplete: c, autoFocus: l, className: u, color: d, defaultValue: f, disabled: p, disableInjectingGlobalStyles: m, endAdornment: h, error: g, fullWidth: _ = !1, id: v, inputComponent: y = "input", inputProps: b = {}, inputRef: x, margin: S, maxRows: C, minRows: w, multiline: T = !1, name: E, onBlur: D, onChange: O, onClick: k, onFocus: A, onKeyDown: M, onKeyUp: N, placeholder: ee, readOnly: te, renderSuffix: P, rows: ne, size: re, slotProps: ie = {}, slots: ae = {}, startAdornment: F, type: I = "text", value: oe, ...se } = a, L = b.value == null ? oe : b.value, { current: R } = r.useRef(L != null), ce = r.useRef(), le = r.useCallback((e) => {
		process.env.NODE_ENV !== "production" && e && e.nodeName !== "INPUT" && !e.focus && console.error([
			"MUI: You have provided a `inputComponent` to the input component",
			"that does not correctly handle the `ref` prop.",
			"Make sure the `ref` prop is called with a HTMLInputElement."
		].join("\n"));
	}, []), ue = vd(ce, x, b.ref, le), [de, fe] = r.useState(!1), [pe, z] = Tp({
		props: a,
		states: [
			"color",
			"disabled",
			"error",
			"hiddenLabel",
			"size",
			"required",
			"filled"
		]
	});
	process.env.NODE_ENV !== "production" && r.useEffect(() => {
		if (z) return z.registerEffect();
	}, [z]), pe.focused = z ? z.focused : de, r.useEffect(() => {
		!z && p && de && (fe(!1), D && D());
	}, [
		z,
		p,
		de,
		D
	]);
	let me = z && z.onFilled, he = z && z.onEmpty, ge = r.useCallback((e) => {
		Dp(e) ? me && me() : he && he();
	}, [me, he]);
	dd(() => {
		R && ge({ value: L });
	}, [
		L,
		ge,
		R
	]), dd(() => {
		if (!l) return;
		let e = ce.current;
		if (!e) return;
		let t = ld(e), n = sd(t), r = n == null || n === t.body || n === t.documentElement;
		e === n ? z && z.onFocus ? z.onFocus() : fe(!0) : r && e.focus();
	}, [l]);
	let _e = (e) => {
		A && A(e), b.onFocus && b.onFocus(e), z && z.onFocus ? z.onFocus(e) : fe(!0);
	}, ve = (e) => {
		D && D(e), b.onBlur && b.onBlur(e), z && z.onBlur ? z.onBlur(e) : fe(!1);
	}, ye = (e, ...t) => {
		if (!R) {
			let t = e.target || ce.current;
			if (t == null) throw Error(process.env.NODE_ENV === "production" ? gi(1) : "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info.");
			ge({ value: t.value });
		}
		b.onChange && b.onChange(e, ...t), O && O(e, ...t);
	};
	r.useEffect(() => {
		ge(ce.current);
	}, []);
	let be = (e) => {
		ce.current && e.currentTarget === e.target && ce.current.focus(), k && k(e);
	}, xe = y, Se = b;
	T && xe === "input" && (ne ? (process.env.NODE_ENV !== "production" && (w || C) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), Se = {
		type: void 0,
		minRows: ne,
		maxRows: ne,
		...Se
	}) : Se = {
		type: void 0,
		maxRows: C,
		minRows: w,
		...Se
	}, xe = Sp);
	let Ce = (e) => {
		ge(e.animationName === Np ? ce.current : { value: "x" });
	};
	r.useEffect(() => {
		z && z.setAdornedStart(!!F);
	}, [z, F]);
	let we = {
		...a,
		color: pe.color || "primary",
		disabled: pe.disabled,
		endAdornment: h,
		error: pe.error,
		focused: pe.focused,
		formControl: z,
		fullWidth: _,
		hiddenLabel: pe.hiddenLabel,
		multiline: T,
		size: pe.size,
		startAdornment: F,
		type: I
	}, B = Ip(we), Te = ae.root || Lp, Ee = ie.root || {}, De = ae.input || Rp;
	return Se = {
		...Se,
		...ie.input
	}, /* @__PURE__ */ n(r.Fragment, { children: [!m && typeof zp == "function" && (jp ||= /* @__PURE__ */ t(zp, {})), /* @__PURE__ */ n(Te, {
		...Ee,
		ref: i,
		onClick: be,
		...se,
		...!af(Te) && { ownerState: {
			...we,
			...Ee.ownerState
		} },
		className: j(B.root, Ee.className, u, te && "MuiInputBase-readOnly"),
		children: [
			F,
			/* @__PURE__ */ t(Cp.Provider, {
				value: null,
				children: /* @__PURE__ */ t(De, {
					"aria-invalid": pe.error,
					"aria-describedby": o,
					"aria-label": s,
					autoComplete: c,
					autoFocus: l,
					defaultValue: f,
					disabled: pe.disabled,
					id: v,
					onAnimationStart: Ce,
					name: E,
					placeholder: ee,
					readOnly: te,
					required: pe.required,
					rows: ne,
					value: L,
					onKeyDown: M,
					onKeyUp: N,
					type: I,
					...Se,
					...!af(De) && {
						as: xe,
						ownerState: {
							...we,
							...Se.ownerState
						}
					},
					ref: ue,
					className: j(B.input, Se.className, te && "MuiInputBase-readOnly"),
					onBlur: ve,
					onChange: ye,
					onFocus: _e
				})
			}),
			h,
			P ? P({
				...pe,
				startAdornment: F
			}) : null
		]
	})] });
});
process.env.NODE_ENV !== "production" && (Bp.propTypes = {
	"aria-describedby": q.default.string,
	"aria-label": q.default.string,
	autoComplete: q.default.string,
	autoFocus: q.default.bool,
	classes: q.default.object,
	className: q.default.string,
	color: q.default.oneOfType([q.default.oneOf([
		"primary",
		"secondary",
		"error",
		"info",
		"success",
		"warning"
	]), q.default.string]),
	defaultValue: q.default.any,
	disabled: q.default.bool,
	disableInjectingGlobalStyles: q.default.bool,
	endAdornment: q.default.node,
	error: q.default.bool,
	fullWidth: q.default.bool,
	id: q.default.string,
	inputComponent: $d,
	inputProps: q.default.object,
	inputRef: xf,
	margin: q.default.oneOf(["dense", "none"]),
	maxRows: q.default.oneOfType([q.default.number, q.default.string]),
	minRows: q.default.oneOfType([q.default.number, q.default.string]),
	multiline: q.default.bool,
	name: q.default.string,
	onBlur: q.default.func,
	onChange: q.default.func,
	onClick: q.default.func,
	onFocus: q.default.func,
	onInvalid: q.default.func,
	onKeyDown: q.default.func,
	onKeyUp: q.default.func,
	placeholder: q.default.string,
	readOnly: q.default.bool,
	renderSuffix: q.default.func,
	required: q.default.bool,
	rows: q.default.oneOfType([q.default.number, q.default.string]),
	size: q.default.oneOfType([q.default.oneOf(["medium", "small"]), q.default.string]),
	slotProps: q.default.shape({
		input: q.default.object,
		root: q.default.object
	}),
	slots: q.default.shape({
		input: q.default.elementType,
		root: q.default.elementType
	}),
	startAdornment: q.default.node,
	sx: q.default.oneOfType([
		q.default.arrayOf(q.default.oneOfType([
			q.default.func,
			q.default.object,
			q.default.bool
		])),
		q.default.func,
		q.default.object
	]),
	type: q.default.string,
	value: q.default.any
});
//#endregion
//#region node_modules/@mui/material/OutlinedInput/outlinedInputClasses.mjs
function Vp(e) {
	return Rc("MuiOutlinedInput", e);
}
var Hp = {
	...Ap,
	...zc("MuiOutlinedInput", [
		"root",
		"notchedOutline",
		"input"
	])
};
//#endregion
//#region node_modules/@mui/utils/elementAcceptingRef/elementAcceptingRef.mjs
function Up(e) {
	let { prototype: t = {} } = e;
	return !!t.isReactComponent;
}
function Wp(e, t, n, r, i) {
	let a = e[t], o = i || t;
	if (a == null || typeof window > "u") return null;
	let s, c = a.type;
	return typeof c == "function" && !Up(c) && (s = "Did you accidentally use a plain function component for an element instead?"), s === void 0 ? null : /* @__PURE__ */ Error(`Invalid ${r} \`${o}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`);
}
var Gp = xd(q.default.element, Wp);
Gp.isRequired = xd(q.default.element.isRequired, Wp);
//#endregion
//#region node_modules/@mui/material/internal/switchBaseClasses.mjs
function Kp(e) {
	return Rc("PrivateSwitchBase", e);
}
zc("PrivateSwitchBase", [
	"root",
	"checked",
	"disabled",
	"input",
	"edgeStart",
	"edgeEnd"
]);
//#endregion
//#region node_modules/@mui/material/internal/SwitchBase.mjs
var qp = (e) => {
	let { classes: t, checked: n, disabled: r, edge: i } = e;
	return Hl({
		root: [
			"root",
			n && "checked",
			r && "disabled",
			i && `edge${Q(i)}`
		],
		input: ["input"]
	}, Kp, t);
}, Jp = Z(Hf, { name: "MuiSwitchBase" })({
	padding: 9,
	borderRadius: "50%",
	variants: [
		{
			props: {
				edge: "start",
				size: "small"
			},
			style: { marginLeft: -3 }
		},
		{
			props: ({ edge: e, ownerState: t }) => e === "start" && t.size !== "small",
			style: { marginLeft: -12 }
		},
		{
			props: {
				edge: "end",
				size: "small"
			},
			style: { marginRight: -3 }
		},
		{
			props: ({ edge: e, ownerState: t }) => e === "end" && t.size !== "small",
			style: { marginRight: -12 }
		}
	]
}), Yp = Z("input", {
	name: "MuiSwitchBase",
	shouldForwardProp: Ju
})({
	cursor: "inherit",
	position: "absolute",
	opacity: 0,
	width: "100%",
	height: "100%",
	top: 0,
	left: 0,
	margin: 0,
	padding: 0,
	zIndex: 1
}), Xp = /* @__PURE__ */ r.forwardRef(function(e, r) {
	let { autoFocus: i, checked: a, checkedIcon: o, defaultChecked: s, disabled: c, disableFocusRipple: l = !1, edge: u = !1, icon: d, id: f, name: p, onBlur: m, onChange: h, onFocus: g, readOnly: _, required: v = !1, tabIndex: y, type: b, value: x, slots: S = {}, slotProps: C = {}, ...w } = e, { nativeButton: T, ...E } = w, [D, O] = md({
		controlled: a,
		default: !!s,
		name: "SwitchBase",
		state: "checked"
	}), k = wp(), A = (e) => {
		g && g(e), k && k.onFocus && k.onFocus(e);
	}, j = (e) => {
		m && m(e), k && k.onBlur && k.onBlur(e);
	}, M = (e) => {
		if (e.nativeEvent.defaultPrevented || _) return;
		let t = e.target.checked;
		O(t), h && h(e, t);
	}, N = c;
	k && N === void 0 && (N = k.disabled);
	let ee = b === "checkbox" || b === "radio", te = {
		...e,
		checked: D,
		disabled: N,
		disableFocusRipple: l,
		edge: u
	}, P = qp(te), ne = {
		slots: S,
		slotProps: C
	}, [re, ie] = df("root", {
		ref: r,
		elementType: Jp,
		className: P.root,
		shouldForwardComponentProp: !0,
		externalForwardedProps: {
			...ne,
			component: "span",
			...E
		},
		getSlotProps: (e) => ({
			...e,
			onFocus: (t) => {
				e.onFocus?.(t), A(t);
			},
			onBlur: (t) => {
				e.onBlur?.(t), j(t);
			}
		}),
		ownerState: te,
		additionalProps: {
			centerRipple: !0,
			focusRipple: !l,
			role: void 0,
			tabIndex: null
		}
	}), [ae, F] = df("input", {
		elementType: Yp,
		className: P.input,
		externalForwardedProps: ne,
		getSlotProps: (e) => ({
			...e,
			onChange: (t) => {
				e.onChange?.(t), M(t);
			}
		}),
		ownerState: te,
		additionalProps: {
			autoFocus: i,
			checked: a,
			defaultChecked: s,
			disabled: N,
			id: ee ? f : void 0,
			name: p,
			readOnly: _,
			required: v,
			tabIndex: y,
			type: b,
			...b === "checkbox" && x === void 0 ? {} : { value: x }
		}
	});
	return /* @__PURE__ */ n(re, {
		...ie,
		children: [/* @__PURE__ */ t(ae, { ...F }), D ? o : d]
	});
});
process.env.NODE_ENV !== "production" && (Xp.propTypes = {
	autoFocus: q.default.bool,
	checked: q.default.bool,
	checkedIcon: q.default.node.isRequired,
	classes: q.default.object,
	className: q.default.string,
	defaultChecked: q.default.bool,
	disabled: q.default.bool,
	disableFocusRipple: q.default.bool,
	edge: q.default.oneOf([
		"end",
		"start",
		!1
	]),
	icon: q.default.node.isRequired,
	id: q.default.string,
	name: q.default.string,
	onBlur: q.default.func,
	onChange: q.default.func,
	onFocus: q.default.func,
	readOnly: q.default.bool,
	required: q.default.bool,
	slotProps: q.default.shape({
		input: q.default.oneOfType([q.default.func, q.default.object]),
		root: q.default.oneOfType([q.default.func, q.default.object])
	}),
	slots: q.default.shape({
		input: q.default.elementType,
		root: q.default.elementType
	}),
	sx: q.default.object,
	tabIndex: q.default.oneOfType([q.default.number, q.default.string]),
	type: q.default.string.isRequired,
	value: q.default.any
});
//#endregion
//#region node_modules/@mui/material/internal/svg-icons/CheckBoxOutlineBlank.mjs
var Zp = rd(/* @__PURE__ */ t("path", { d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" }), "CheckBoxOutlineBlank"), Qp = rd(/* @__PURE__ */ t("path", { d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" }), "CheckBox"), $p = rd(/* @__PURE__ */ t("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z" }), "IndeterminateCheckBox");
//#endregion
//#region node_modules/@mui/material/Checkbox/checkboxClasses.mjs
function em(e) {
	return Rc("MuiCheckbox", e);
}
var tm = zc("MuiCheckbox", [
	"root",
	"checked",
	"disabled",
	"indeterminate",
	"colorPrimary",
	"colorSecondary",
	"sizeSmall",
	"sizeMedium"
]), nm = (e) => {
	let { classes: t, indeterminate: n, color: r, size: i } = e, a = Hl({ root: [
		"root",
		n && "indeterminate",
		`color${Q(r)}`,
		`size${Q(i)}`
	] }, em, t);
	return {
		...t,
		...a
	};
}, rm = Z(Xp, {
	shouldForwardProp: (e) => Ju(e) || e === "classes",
	name: "MuiCheckbox",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			n.indeterminate && t.indeterminate,
			t[`size${Q(n.size)}`],
			n.color !== "default" && t[`color${Q(n.color)}`]
		];
	}
})($(({ theme: e }) => ({
	color: (e.vars || e).palette.text.secondary,
	variants: [
		{
			props: {
				color: "default",
				disableRipple: !1
			},
			style: { "&:hover": { backgroundColor: e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity) } }
		},
		...Object.entries(e.palette).filter(Kf()).map(([t]) => ({
			props: {
				color: t,
				disableRipple: !1
			},
			style: { "&:hover": { backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity) } }
		})),
		...Object.entries(e.palette).filter(Kf()).map(([t]) => ({
			props: { color: t },
			style: {
				[`&.${tm.checked}, &.${tm.indeterminate}`]: { color: (e.vars || e).palette[t].main },
				[`&.${tm.disabled}`]: { color: (e.vars || e).palette.action.disabled }
			}
		})),
		{
			props: { disableRipple: !1 },
			style: { "&:hover": { "@media (hover: none)": { backgroundColor: "transparent" } } }
		}
	]
}))), im = /* @__PURE__ */ t(Qp, {}), am = /* @__PURE__ */ t(Zp, {}), om = /* @__PURE__ */ t($p, {}), sm = /* @__PURE__ */ r.forwardRef(function(e, n) {
	let i = Qu({
		props: e,
		name: "MuiCheckbox"
	}), { checkedIcon: a = im, color: o = "primary", icon: s = am, indeterminate: c = !1, indeterminateIcon: l = om, size: u = "medium", disableRipple: d = !1, className: f, slots: p = {}, slotProps: m = {}, ...h } = i, g = c ? l : s, _ = c ? l : a, v = {
		...i,
		disableRipple: d,
		color: o,
		indeterminate: c,
		size: u
	}, y = nm(v), b = m.input, [x, S] = df("root", {
		ref: n,
		elementType: rm,
		className: j(y.root, f),
		shouldForwardComponentProp: !0,
		externalForwardedProps: {
			slots: p,
			slotProps: m,
			...h
		},
		ownerState: v,
		additionalProps: {
			type: "checkbox",
			icon: /* @__PURE__ */ r.cloneElement(g, { fontSize: g.props.fontSize ?? u }),
			checkedIcon: /* @__PURE__ */ r.cloneElement(_, { fontSize: _.props.fontSize ?? u }),
			disableRipple: d,
			slots: p,
			slotProps: { input: bd(typeof b == "function" ? b(v) : b, {
				"data-indeterminate": c,
				"aria-checked": c ? "mixed" : void 0
			}) }
		}
	});
	return /* @__PURE__ */ t(x, {
		...S,
		classes: y
	});
});
process.env.NODE_ENV !== "production" && (sm.propTypes = {
	checked: q.default.bool,
	checkedIcon: q.default.node,
	classes: q.default.object,
	className: q.default.string,
	color: q.default.oneOfType([q.default.oneOf([
		"default",
		"primary",
		"secondary",
		"error",
		"info",
		"success",
		"warning"
	]), q.default.string]),
	defaultChecked: q.default.bool,
	disabled: q.default.bool,
	disableRipple: q.default.bool,
	icon: q.default.node,
	id: q.default.string,
	indeterminate: q.default.bool,
	indeterminateIcon: q.default.node,
	onChange: q.default.func,
	required: q.default.bool,
	size: q.default.oneOfType([q.default.oneOf(["medium", "small"]), q.default.string]),
	slotProps: q.default.shape({
		input: q.default.oneOfType([q.default.func, q.default.object]),
		root: q.default.oneOfType([q.default.func, q.default.object])
	}),
	slots: q.default.shape({
		input: q.default.elementType,
		root: q.default.elementType
	}),
	sx: q.default.oneOfType([
		q.default.arrayOf(q.default.oneOfType([
			q.default.func,
			q.default.object,
			q.default.bool
		])),
		q.default.func,
		q.default.object
	]),
	value: q.default.any
});
//#endregion
//#region node_modules/@mui/material/ClickAwayListener/ClickAwayListener.mjs
function cm(e) {
	return e.substring(2).toLowerCase();
}
function lm(e, t) {
	return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function um(e) {
	let { children: t, disableReactTree: n = !1, mouseEvent: i = "onClick", onClickAway: a, touchEvent: o = "onTouchEnd" } = e, s = r.useRef(!1), c = r.useRef(null), l = r.useRef(!1), u = r.useRef(!1);
	r.useEffect(() => (setTimeout(() => {
		l.current = !0;
	}, 0), () => {
		l.current = !1;
	}), []);
	let d = _d(_p(t), c), f = hd((e) => {
		let t = u.current;
		u.current = !1;
		let r = cd(c.current);
		if (!l.current || !c.current || "clientX" in e && lm(e, r)) return;
		if (s.current) {
			s.current = !1;
			return;
		}
		let i;
		i = e.composedPath ? e.composedPath().includes(c.current) : !gp(r.documentElement, e.target) || gp(c.current, e.target), !i && (n || !t) && a(e);
	}), p = (e) => (n) => {
		u.current = !0;
		let r = t.props[e];
		r && r(n);
	}, m = { ref: d };
	return o !== !1 && (m[o] = p(o)), r.useEffect(() => {
		if (o !== !1) {
			let e = cm(o), t = cd(c.current), n = () => {
				s.current = !0;
			};
			return t.addEventListener(e, f), t.addEventListener("touchmove", n), () => {
				t.removeEventListener(e, f), t.removeEventListener("touchmove", n);
			};
		}
	}, [f, o]), i !== !1 && (m[i] = p(i)), r.useEffect(() => {
		if (i !== !1) {
			let e = cm(i), t = cd(c.current);
			return t.addEventListener(e, f), () => {
				t.removeEventListener(e, f);
			};
		}
	}, [f, i]), /* @__PURE__ */ r.cloneElement(t, m);
}
process.env.NODE_ENV !== "production" && (um.propTypes = {
	children: Gp.isRequired,
	disableReactTree: q.default.bool,
	mouseEvent: q.default.oneOf([
		"onClick",
		"onMouseDown",
		"onMouseUp",
		"onPointerDown",
		"onPointerUp",
		!1
	]),
	onClickAway: q.default.func.isRequired,
	touchEvent: q.default.oneOf([
		"onTouchEnd",
		"onTouchStart",
		!1
	])
}), process.env.NODE_ENV !== "production" && (um.propTypes = xl(um.propTypes));
//#endregion
//#region node_modules/@mui/material/FormControl/formControlClasses.mjs
function dm(e) {
	return Rc("MuiFormControl", e);
}
zc("MuiFormControl", [
	"root",
	"marginNone",
	"marginNormal",
	"marginDense",
	"fullWidth",
	"disabled"
]);
//#endregion
//#region node_modules/@mui/material/FormControl/FormControl.mjs
var fm = (e) => {
	let { classes: t, margin: n, fullWidth: r } = e;
	return Hl({ root: [
		"root",
		n !== "none" && `margin${Q(n)}`,
		r && "fullWidth"
	] }, dm, t);
}, pm = Z("div", {
	name: "MuiFormControl",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			t[`margin${Q(n.margin)}`],
			n.fullWidth && t.fullWidth
		];
	}
})({
	display: "inline-flex",
	flexDirection: "column",
	position: "relative",
	minWidth: 0,
	padding: 0,
	margin: 0,
	border: 0,
	verticalAlign: "top",
	variants: [
		{
			props: { margin: "normal" },
			style: {
				marginTop: 16,
				marginBottom: 8
			}
		},
		{
			props: { margin: "dense" },
			style: {
				marginTop: 8,
				marginBottom: 4
			}
		},
		{
			props: { fullWidth: !0 },
			style: { width: "100%" }
		}
	]
}), mm = /* @__PURE__ */ r.forwardRef(function(e, n) {
	let i = Qu({
		props: e,
		name: "MuiFormControl"
	}), { children: a, className: o, color: s = "primary", component: c = "div", disabled: l = !1, error: u = !1, focused: d, fullWidth: f = !1, hiddenLabel: p = !1, margin: m = "none", required: h = !1, size: g = "medium", variant: _ = "outlined", ...v } = i, y = {
		...i,
		color: s,
		component: c,
		disabled: l,
		error: u,
		fullWidth: f,
		hiddenLabel: p,
		margin: m,
		required: h,
		size: g,
		variant: _
	}, b = fm(y), [x, S] = r.useState(() => {
		let e = !1;
		return a && r.Children.forEach(a, (t) => {
			if (!ad(t, ["Input", "Select"])) return;
			let n = ad(t, ["Select"]) ? t.props.input : t;
			n && Op(n.props) && (e = !0);
		}), e;
	}), [C, w] = r.useState(() => {
		let e = !1;
		return a && r.Children.forEach(a, (t) => {
			ad(t, ["Input", "Select"]) && (Dp(t.props, !0) || Dp(t.props.inputProps, !0)) && (e = !0);
		}), e;
	}), [T, E] = r.useState(!1);
	l && T && E(!1);
	let D = d !== void 0 && !l ? d : T, O, k = r.useRef(!1);
	process.env.NODE_ENV !== "production" && (O = () => (k.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join("\n")), k.current = !0, () => {
		k.current = !1;
	}));
	let A = r.useCallback(() => {
		w(!0);
	}, []), M = r.useCallback(() => {
		w(!1);
	}, []), N = r.useMemo(() => ({
		adornedStart: x,
		setAdornedStart: S,
		color: s,
		disabled: l,
		error: u,
		filled: C,
		focused: D,
		fullWidth: f,
		hiddenLabel: p,
		size: g,
		onBlur: () => {
			E(!1);
		},
		onFocus: () => {
			E(!0);
		},
		onEmpty: M,
		onFilled: A,
		registerEffect: O,
		required: h,
		variant: _
	}), [
		x,
		s,
		l,
		u,
		C,
		D,
		f,
		p,
		O,
		M,
		A,
		h,
		g,
		_
	]);
	return /* @__PURE__ */ t(Cp.Provider, {
		value: N,
		children: /* @__PURE__ */ t(pm, {
			as: c,
			ownerState: y,
			className: j(b.root, o),
			ref: n,
			...v,
			children: a
		})
	});
});
process.env.NODE_ENV !== "production" && (mm.propTypes = {
	children: q.default.node,
	classes: q.default.object,
	className: q.default.string,
	color: q.default.oneOfType([q.default.oneOf([
		"primary",
		"secondary",
		"error",
		"info",
		"success",
		"warning"
	]), q.default.string]),
	component: q.default.elementType,
	disabled: q.default.bool,
	error: q.default.bool,
	focused: q.default.bool,
	fullWidth: q.default.bool,
	hiddenLabel: q.default.bool,
	margin: q.default.oneOf([
		"dense",
		"none",
		"normal"
	]),
	required: q.default.bool,
	size: q.default.oneOfType([q.default.oneOf(["medium", "small"]), q.default.string]),
	sx: q.default.oneOfType([
		q.default.arrayOf(q.default.oneOfType([
			q.default.func,
			q.default.object,
			q.default.bool
		])),
		q.default.func,
		q.default.object
	]),
	variant: q.default.oneOf([
		"filled",
		"outlined",
		"standard"
	])
});
//#endregion
//#region node_modules/@mui/material/FormLabel/formLabelClasses.mjs
function hm(e) {
	return Rc("MuiFormLabel", e);
}
var gm = zc("MuiFormLabel", [
	"root",
	"colorSecondary",
	"focused",
	"disabled",
	"error",
	"filled",
	"required",
	"asterisk"
]), _m = (e) => {
	let { classes: t, color: n, focused: r, disabled: i, error: a, filled: o, required: s } = e;
	return Hl({
		root: [
			"root",
			`color${Q(n)}`,
			i && "disabled",
			a && "error",
			o && "filled",
			r && "focused",
			s && "required"
		],
		asterisk: ["asterisk", a && "error"]
	}, hm, t);
}, vm = Z("label", {
	name: "MuiFormLabel",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			n.color === "secondary" && t.colorSecondary,
			n.filled && t.filled
		];
	}
})($(({ theme: e }) => ({
	color: (e.vars || e).palette.text.secondary,
	...e.typography.body1,
	lineHeight: "1.4375em",
	padding: 0,
	position: "relative",
	variants: [...Object.entries(e.palette).filter(Kf()).map(([t]) => ({
		props: { color: t },
		style: { [`&.${gm.focused}`]: { color: (e.vars || e).palette[t].main } }
	})), {
		props: {},
		style: {
			[`&.${gm.disabled}`]: { color: (e.vars || e).palette.text.disabled },
			[`&.${gm.error}`]: { color: (e.vars || e).palette.error.main }
		}
	}]
}))), ym = Z("span", {
	name: "MuiFormLabel",
	slot: "Asterisk"
})($(({ theme: e }) => ({ [`&.${gm.error}`]: { color: (e.vars || e).palette.error.main } }))), bm = /* @__PURE__ */ r.forwardRef(function(e, t) {
	let r = Qu({
		props: e,
		name: "MuiFormLabel"
	}), { children: i, className: a, color: o, component: s = "label", disabled: c, error: l, filled: u, focused: d, required: f, ...p } = r, [m] = Tp({
		props: r,
		states: [
			"color",
			"required",
			"focused",
			"disabled",
			"error",
			"filled"
		]
	}), h = {
		...r,
		color: m.color || "primary",
		component: s,
		disabled: m.disabled,
		error: m.error,
		filled: m.filled,
		focused: m.focused,
		required: m.required
	}, g = _m(h);
	return /* @__PURE__ */ n(vm, {
		as: s,
		ownerState: h,
		className: j(g.root, a),
		ref: t,
		...p,
		children: [i, m.required && /* @__PURE__ */ n(ym, {
			ownerState: h,
			"aria-hidden": !0,
			className: g.asterisk,
			children: [" ", "*"]
		})]
	});
});
process.env.NODE_ENV !== "production" && (bm.propTypes = {
	children: q.default.node,
	classes: q.default.object,
	className: q.default.string,
	color: q.default.oneOfType([q.default.oneOf([
		"error",
		"info",
		"primary",
		"secondary",
		"success",
		"warning"
	]), q.default.string]),
	component: q.default.elementType,
	disabled: q.default.bool,
	error: q.default.bool,
	filled: q.default.bool,
	focused: q.default.bool,
	required: q.default.bool,
	sx: q.default.oneOfType([
		q.default.arrayOf(q.default.oneOfType([
			q.default.func,
			q.default.object,
			q.default.bool
		])),
		q.default.func,
		q.default.object
	])
});
//#endregion
//#region node_modules/@mui/material/Grow/Grow.mjs
function xm(e) {
	return `scale(${e}, ${e ** 2})`;
}
var Sm = {
	entering: {
		opacity: 1,
		transform: xm(1)
	},
	entered: {
		opacity: 1,
		transform: "none"
	},
	exiting: {
		opacity: 0,
		transform: xm(.75)
	},
	exited: {
		opacity: 0,
		transform: xm(.75)
	}
}, Cm = {
	opacity: 0,
	transform: xm(.75),
	visibility: "hidden"
}, wm = /* @__PURE__ */ r.forwardRef(function(e, n) {
	let { addEndListener: i, appear: a = !0, children: o, easing: s, in: c, onEnter: l, onEntered: u, onEntering: d, onExit: f, onExited: p, onExiting: m, style: h, timeout: g = "auto", ..._ } = e, v = Xd(), y = r.useRef(), b = Ku(), x = r.useRef(null), S = vd(x, _p(o), n), C = tf(x, d), w = tf(x, (e, t) => {
		ef(e);
		let { duration: n, delay: r, easing: i } = rf({
			style: h,
			timeout: g,
			easing: s
		}, { mode: "enter" }), a;
		g === "auto" ? (a = b.transitions.getAutoHeightDuration(e.clientHeight), y.current = a) : a = n, e.style.transition = [b.transitions.create("opacity", {
			duration: a,
			delay: r
		}), b.transitions.create("transform", {
			duration: a * .666,
			delay: r,
			easing: i
		})].join(","), l && l(e, t);
	}), T = tf(x, u), E = tf(x, m);
	return /* @__PURE__ */ t(Pd, {
		appear: a,
		in: c,
		nodeRef: x,
		onEnter: w,
		onEntered: T,
		onEntering: C,
		onExit: tf(x, (e) => {
			let { duration: t, delay: n, easing: r } = rf({
				style: h,
				timeout: g,
				easing: s
			}, { mode: "exit" }), i;
			g === "auto" ? (i = b.transitions.getAutoHeightDuration(e.clientHeight), y.current = i) : i = t, e.style.transition = [b.transitions.create("opacity", {
				duration: i,
				delay: n
			}), b.transitions.create("transform", {
				duration: i * .666,
				delay: n || i * .333,
				easing: r
			})].join(","), e.style.opacity = 0, e.style.transform = xm(.75), f && f(e);
		}),
		onExited: tf(x, (e) => {
			e.style.transition = "", p && p(e);
		}),
		onExiting: E,
		addEndListener: (e) => {
			g === "auto" && v.start(y.current || 0, e), i && i(x.current, e);
		},
		timeout: g === "auto" ? null : g,
		..._,
		children: (e, { ownerState: t, ...n }) => {
			let i = nf(e, c, Sm, Cm, h, o.props.style);
			return /* @__PURE__ */ r.cloneElement(o, {
				style: i,
				ref: S,
				...n
			});
		}
	});
});
process.env.NODE_ENV !== "production" && (wm.propTypes = {
	addEndListener: q.default.func,
	appear: q.default.bool,
	children: Gp.isRequired,
	easing: q.default.oneOfType([q.default.shape({
		enter: q.default.string,
		exit: q.default.string
	}), q.default.string]),
	in: q.default.bool,
	onEnter: q.default.func,
	onEntered: q.default.func,
	onEntering: q.default.func,
	onExit: q.default.func,
	onExited: q.default.func,
	onExiting: q.default.func,
	style: q.default.object,
	timeout: q.default.oneOfType([
		q.default.oneOf(["auto"]),
		q.default.number,
		q.default.shape({
			appear: q.default.number,
			enter: q.default.number,
			exit: q.default.number
		})
	])
}), wm && (wm.muiSupportAuto = !0);
//#endregion
//#region node_modules/@mui/material/InputLabel/inputLabelClasses.mjs
function Tm(e) {
	return Rc("MuiInputLabel", e);
}
zc("MuiInputLabel", [
	"root",
	"focused",
	"disabled",
	"error",
	"required",
	"asterisk",
	"formControl",
	"sizeSmall",
	"shrink",
	"animated",
	"standard",
	"filled",
	"outlined"
]);
//#endregion
//#region node_modules/@mui/material/InputAdornment/inputAdornmentClasses.mjs
function Em(e) {
	return Rc("MuiInputAdornment", e);
}
var Dm = zc("MuiInputAdornment", [
	"root",
	"filled",
	"standard",
	"outlined",
	"positionStart",
	"positionEnd",
	"disablePointerEvents",
	"hiddenLabel",
	"sizeSmall"
]), Om, km = (e, t) => {
	let { ownerState: n } = e;
	return [
		t.root,
		t[`position${Q(n.position)}`],
		n.disablePointerEvents === !0 && t.disablePointerEvents,
		t[n.variant]
	];
}, Am = (e) => {
	let { classes: t, disablePointerEvents: n, hiddenLabel: r, position: i, size: a, variant: o } = e;
	return Hl({ root: [
		"root",
		n && "disablePointerEvents",
		i && `position${Q(i)}`,
		o,
		r && "hiddenLabel",
		a && `size${Q(a)}`
	] }, Em, t);
}, jm = Z("div", {
	name: "MuiInputAdornment",
	slot: "Root",
	overridesResolver: km
})($(({ theme: e }) => ({
	display: "flex",
	maxHeight: "2em",
	alignItems: "center",
	whiteSpace: "nowrap",
	color: (e.vars || e).palette.action.active,
	variants: [
		{
			props: { variant: "filled" },
			style: { [`&.${Dm.positionStart}&:not(.${Dm.hiddenLabel})`]: { marginTop: 16 } }
		},
		{
			props: { position: "start" },
			style: { marginRight: 8 }
		},
		{
			props: { position: "end" },
			style: { marginLeft: 8 }
		},
		{
			props: { disablePointerEvents: !0 },
			style: { pointerEvents: "none" }
		}
	]
}))), Mm = /* @__PURE__ */ r.forwardRef(function(e, i) {
	let a = Qu({
		props: e,
		name: "MuiInputAdornment"
	}), { children: o, className: s, component: c = "div", disablePointerEvents: l = !1, disableTypography: u = !1, position: d, variant: f, ...p } = a, m = wp() || {}, h = f;
	f && m.variant && process.env.NODE_ENV !== "production" && f === m.variant && console.error("MUI: The `InputAdornment` variant infers the variant prop you do not have to provide one."), m && !h && (h = m.variant);
	let g = {
		...a,
		hiddenLabel: m.hiddenLabel,
		size: m.size,
		disablePointerEvents: l,
		position: d,
		variant: h
	}, _ = Am(g);
	return /* @__PURE__ */ t(Cp.Provider, {
		value: null,
		children: /* @__PURE__ */ t(jm, {
			as: c,
			ownerState: g,
			className: j(_.root, s),
			ref: i,
			...p,
			children: typeof o == "string" && !u ? /* @__PURE__ */ t(hp, {
				color: "textSecondary",
				children: o
			}) : /* @__PURE__ */ n(r.Fragment, { children: [d === "start" ? Om ||= /* @__PURE__ */ t("span", {
				className: "notranslate",
				"aria-hidden": !0,
				children: "​"
			}) : null, o] })
		})
	});
});
process.env.NODE_ENV !== "production" && (Mm.propTypes = {
	children: q.default.node,
	classes: q.default.object,
	className: q.default.string,
	component: q.default.elementType,
	disablePointerEvents: q.default.bool,
	disableTypography: q.default.bool,
	position: q.default.oneOf(["end", "start"]).isRequired,
	sx: q.default.oneOfType([
		q.default.arrayOf(q.default.oneOfType([
			q.default.func,
			q.default.object,
			q.default.bool
		])),
		q.default.func,
		q.default.object
	]),
	variant: q.default.oneOf([
		"filled",
		"outlined",
		"standard"
	])
});
//#endregion
//#region node_modules/@mui/material/InputLabel/InputLabel.mjs
var Nm = (e) => {
	let { classes: t, formControl: n, size: r, shrink: i, disableAnimation: a, variant: o, required: s } = e, c = Hl({
		root: [
			"root",
			n && "formControl",
			!a && "animated",
			i && "shrink",
			r && r !== "medium" && `size${Q(r)}`,
			o
		],
		asterisk: [s && "asterisk"]
	}, Tm, t);
	return {
		...t,
		...c
	};
}, Pm = Z(bm, {
	shouldForwardProp: (e) => Ju(e) || e === "classes",
	name: "MuiInputLabel",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			{ [`& .${gm.asterisk}`]: t.asterisk },
			t.root,
			n.formControl && t.formControl,
			n.size === "small" && t.sizeSmall,
			n.shrink && t.shrink,
			!n.disableAnimation && t.animated,
			n.focused && t.focused,
			t[n.variant]
		];
	}
})($(({ theme: e }) => ({
	display: "block",
	transformOrigin: "top left",
	whiteSpace: "nowrap",
	overflow: "hidden",
	textOverflow: "ellipsis",
	maxWidth: "100%",
	variants: [
		{
			props: ({ ownerState: e }) => e.formControl,
			style: {
				position: "absolute",
				left: 0,
				top: 0,
				transform: "translate(0, 20px) scale(1)"
			}
		},
		{
			props: { size: "small" },
			style: { transform: "translate(0, 17px) scale(1)" }
		},
		{
			props: ({ ownerState: e }) => e.shrink,
			style: {
				transform: "translate(0, -1.5px) scale(0.75)",
				transformOrigin: "top left",
				maxWidth: "133%"
			}
		},
		{
			props: ({ ownerState: e }) => !e.disableAnimation,
			style: { transition: e.transitions.create([
				"color",
				"transform",
				"max-width"
			], {
				duration: e.transitions.duration.shorter,
				easing: e.transitions.easing.easeOut
			}) }
		},
		{
			props: { variant: "filled" },
			style: {
				zIndex: 1,
				pointerEvents: "none",
				transform: "translate(12px, 16px) scale(1)",
				maxWidth: "calc(100% - 24px)"
			}
		},
		{
			props: {
				variant: "filled",
				size: "small"
			},
			style: { transform: "translate(12px, 13px) scale(1)" }
		},
		{
			props: ({ variant: e, ownerState: t }) => e === "filled" && t.shrink,
			style: {
				userSelect: "none",
				pointerEvents: "auto",
				transform: "translate(12px, 7px) scale(0.75)",
				maxWidth: "calc(133% - 24px)"
			}
		},
		{
			props: ({ variant: e, ownerState: t, size: n }) => e === "filled" && t.shrink && n === "small",
			style: { transform: "translate(12px, 4px) scale(0.75)" }
		},
		{
			props: { variant: "outlined" },
			style: {
				zIndex: 1,
				pointerEvents: "none",
				transform: "translate(14px, 16px) scale(1)",
				maxWidth: "calc(100% - 24px)"
			}
		},
		{
			props: {
				variant: "outlined",
				size: "small"
			},
			style: { transform: "translate(14px, 9px) scale(1)" }
		},
		{
			props: ({ variant: e, ownerState: t }) => e === "outlined" && t.shrink,
			style: {
				userSelect: "none",
				pointerEvents: "auto",
				maxWidth: "calc(133% - 32px)",
				transform: "translate(14px, -9px) scale(0.75)"
			}
		}
	]
}))), Fm = /* @__PURE__ */ r.forwardRef(function(e, n) {
	let r = Qu({
		name: "MuiInputLabel",
		props: e
	}), { disableAnimation: i = !1, margin: a, shrink: o, variant: s, className: c, ...l } = r, [u, d] = Tp({
		props: r,
		states: [
			"size",
			"variant",
			"required",
			"focused"
		]
	}), f = o;
	f === void 0 && d && (f = d.filled || d.focused || d.adornedStart);
	let p = {
		...r,
		disableAnimation: i,
		formControl: d,
		shrink: f,
		size: u.size,
		variant: u.variant,
		required: u.required,
		focused: u.focused
	}, m = Nm(p);
	return /* @__PURE__ */ t(Pm, {
		"data-shrink": f,
		ref: n,
		className: j(m.root, c),
		...l,
		ownerState: p,
		classes: m
	});
});
process.env.NODE_ENV !== "production" && (Fm.propTypes = {
	children: q.default.node,
	classes: q.default.object,
	className: q.default.string,
	color: q.default.oneOfType([q.default.oneOf([
		"error",
		"info",
		"primary",
		"secondary",
		"success",
		"warning"
	]), q.default.string]),
	disableAnimation: q.default.bool,
	disabled: q.default.bool,
	error: q.default.bool,
	focused: q.default.bool,
	margin: q.default.oneOf(["dense"]),
	required: q.default.bool,
	shrink: q.default.bool,
	size: q.default.oneOfType([q.default.oneOf(["medium", "small"]), q.default.string]),
	sx: q.default.oneOfType([
		q.default.arrayOf(q.default.oneOfType([
			q.default.func,
			q.default.object,
			q.default.bool
		])),
		q.default.func,
		q.default.object
	]),
	variant: q.default.oneOf([
		"filled",
		"outlined",
		"standard"
	])
});
//#endregion
//#region node_modules/@mui/material/LinearProgress/linearProgressClasses.mjs
function Im(e) {
	return Rc("MuiLinearProgress", e);
}
zc("MuiLinearProgress", [
	"root",
	"colorPrimary",
	"colorSecondary",
	"determinate",
	"indeterminate",
	"buffer",
	"query",
	"dashed",
	"bar",
	"bar1",
	"bar2"
]);
//#endregion
//#region node_modules/@mui/material/LinearProgress/LinearProgress.mjs
var Lm = 4, Rm = _o`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`, zm = typeof Rm == "string" ? null : go`
        animation: ${Rm} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `, Bm = _o`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`, Vm = typeof Bm == "string" ? null : go`
        animation: ${Bm} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `, Hm = _o`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`, Um = typeof Hm == "string" ? null : go`
        animation: ${Hm} 3s infinite linear;
      `, Wm = (e) => {
	let { classes: t, variant: n, color: r } = e;
	return Hl({
		root: [
			"root",
			`color${Q(r)}`,
			n
		],
		dashed: ["dashed"],
		bar1: ["bar", "bar1"],
		bar2: [
			"bar",
			"bar2",
			n === "buffer" && `color${Q(r)}`
		]
	}, Im, t);
}, Gm = (e, t) => e.vars ? e.vars.palette.LinearProgress[`${t}Bg`] : e.palette.mode === "light" ? e.lighten(e.palette[t].main, .62) : e.darken(e.palette[t].main, .5), Km = Z("span", {
	name: "MuiLinearProgress",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			t[`color${Q(n.color)}`],
			t[n.variant]
		];
	}
})($(({ theme: e }) => ({
	position: "relative",
	overflow: "hidden",
	display: "block",
	height: 4,
	zIndex: 0,
	"@media print": { colorAdjust: "exact" },
	variants: [
		...Object.entries(e.palette).filter(Kf()).map(([t]) => ({
			props: { color: t },
			style: { backgroundColor: Gm(e, t) }
		})),
		{
			props: ({ ownerState: e }) => e.color === "inherit" && e.variant !== "buffer",
			style: { "&::before": {
				content: "\"\"",
				position: "absolute",
				left: 0,
				top: 0,
				right: 0,
				bottom: 0,
				backgroundColor: "currentColor",
				opacity: .3
			} }
		},
		{
			props: { variant: "buffer" },
			style: { backgroundColor: "transparent" }
		},
		{
			props: { variant: "query" },
			style: { transform: "rotate(180deg)" }
		}
	]
}))), qm = Z("span", {
	name: "MuiLinearProgress",
	slot: "Dashed"
})($(({ theme: e }) => ({
	position: "absolute",
	marginTop: 0,
	height: "100%",
	width: "100%",
	backgroundSize: "10px 10px",
	backgroundPosition: "0 -23px",
	variants: [{
		props: { color: "inherit" },
		style: {
			opacity: .3,
			backgroundImage: "radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"
		}
	}, ...Object.entries(e.palette).filter(Kf()).map(([t]) => {
		let n = Gm(e, t);
		return {
			props: { color: t },
			style: { backgroundImage: `radial-gradient(${n} 0%, ${n} 16%, transparent 42%)` }
		};
	})]
})), Um || { animation: `${Hm} 3s infinite linear` }), Jm = Z("span", {
	name: "MuiLinearProgress",
	slot: "Bar1",
	overridesResolver: (e, t) => [t.bar, t.bar1]
})($(({ theme: e }) => ({
	width: "100%",
	position: "absolute",
	left: 0,
	bottom: 0,
	top: 0,
	transition: "transform 0.2s linear",
	transformOrigin: "left",
	variants: [
		{
			props: { color: "inherit" },
			style: { backgroundColor: "currentColor" }
		},
		...Object.entries(e.palette).filter(Kf()).map(([t]) => ({
			props: { color: t },
			style: { backgroundColor: (e.vars || e).palette[t].main }
		})),
		{
			props: { variant: "determinate" },
			style: { transition: `transform .${Lm}s linear` }
		},
		{
			props: { variant: "buffer" },
			style: {
				zIndex: 1,
				transition: `transform .${Lm}s linear`
			}
		},
		{
			props: ({ ownerState: e }) => e.variant === "indeterminate" || e.variant === "query",
			style: { width: "auto" }
		},
		{
			props: ({ ownerState: e }) => e.variant === "indeterminate" || e.variant === "query",
			style: zm || { animation: `${Rm} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite` }
		}
	]
}))), Ym = Z("span", {
	name: "MuiLinearProgress",
	slot: "Bar2",
	overridesResolver: (e, t) => [t.bar, t.bar2]
})($(({ theme: e }) => ({
	width: "100%",
	position: "absolute",
	left: 0,
	bottom: 0,
	top: 0,
	transition: "transform 0.2s linear",
	transformOrigin: "left",
	variants: [
		...Object.entries(e.palette).filter(Kf()).map(([t]) => ({
			props: { color: t },
			style: { "--LinearProgressBar2-barColor": (e.vars || e).palette[t].main }
		})),
		{
			props: ({ ownerState: e }) => e.variant !== "buffer" && e.color !== "inherit",
			style: { backgroundColor: "var(--LinearProgressBar2-barColor, currentColor)" }
		},
		{
			props: ({ ownerState: e }) => e.variant !== "buffer" && e.color === "inherit",
			style: { backgroundColor: "currentColor" }
		},
		{
			props: { color: "inherit" },
			style: { opacity: .3 }
		},
		...Object.entries(e.palette).filter(Kf()).map(([t]) => ({
			props: {
				color: t,
				variant: "buffer"
			},
			style: {
				backgroundColor: Gm(e, t),
				transition: `transform .${Lm}s linear`
			}
		})),
		{
			props: ({ ownerState: e }) => e.variant === "indeterminate" || e.variant === "query",
			style: { width: "auto" }
		},
		{
			props: ({ ownerState: e }) => e.variant === "indeterminate" || e.variant === "query",
			style: Vm || { animation: `${Bm} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite` }
		}
	]
}))), Xm = /* @__PURE__ */ r.forwardRef(function(e, r) {
	let i = Qu({
		props: e,
		name: "MuiLinearProgress"
	}), { className: a, color: o = "primary", max: s, min: c, value: l, valueBuffer: u, variant: d = "indeterminate", ...f } = i, p = {
		...i,
		color: o,
		variant: d
	};
	process.env.NODE_ENV !== "production" && ["indeterminate", "query"].includes(d) && (c !== void 0 || s !== void 0) && console.warn("MUI: You have provided the `min` or `max` props with an 'indeterminate' or 'query' variant. These props will have no effect.");
	let m = c ?? 0, h = s ?? 100, g = Wm(p), _ = wl(), v = {}, y = {
		bar1: {},
		bar2: {}
	};
	if (d === "determinate" || d === "buffer") if (l !== void 0) {
		process.env.NODE_ENV !== "production" && (l < m || l > h || m >= h) && console.error(`MUI: The min, max, and value props in LinearProgress should be numbers where min < max and min <= value <= max. Received min=${m}, max=${h}, value=${l}.`);
		let e = h - m, t = (l - m) / e * 100 - 100;
		_ && (t = -t), y.bar1.transform = e > 0 ? `translateX(${t}%)` : "translateX(-100%)", v["aria-valuenow"] = l, v["aria-valuemin"] = m, v["aria-valuemax"] = h;
	} else process.env.NODE_ENV !== "production" && console.error("MUI: You need to provide a value prop when using the determinate or buffer variant of LinearProgress.");
	if (d === "buffer") if (u !== void 0) {
		process.env.NODE_ENV !== "production" && (u < m || u > h || u < l || m >= h) && console.error(`MUI: The min, max, value, and valueBuffer props in LinearProgress should be numbers where min < max and min <= value <= valueBuffer <= max. Received min=${m}, max=${h}, value=${l}, valueBuffer=${u}.`);
		let e = h - m, t = (u - m) / e * 100 - 100;
		_ && (t = -t), y.bar2.transform = e > 0 ? `translateX(${t}%)` : "translateX(-100%)";
	} else process.env.NODE_ENV !== "production" && console.error("MUI: You need to provide a valueBuffer prop when using the buffer variant of LinearProgress.");
	return /* @__PURE__ */ n(Km, {
		className: j(g.root, a),
		ownerState: p,
		role: "progressbar",
		...v,
		ref: r,
		...f,
		children: [
			d === "buffer" ? /* @__PURE__ */ t(qm, {
				className: g.dashed,
				ownerState: p
			}) : null,
			/* @__PURE__ */ t(Jm, {
				className: g.bar1,
				ownerState: p,
				style: y.bar1
			}),
			d === "determinate" ? null : /* @__PURE__ */ t(Ym, {
				className: g.bar2,
				ownerState: p,
				style: y.bar2
			})
		]
	});
});
process.env.NODE_ENV !== "production" && (Xm.propTypes = {
	classes: q.default.object,
	className: q.default.string,
	color: q.default.oneOfType([q.default.oneOf([
		"inherit",
		"primary",
		"secondary"
	]), q.default.string]),
	max: q.default.number,
	min: q.default.number,
	sx: q.default.oneOfType([
		q.default.arrayOf(q.default.oneOfType([
			q.default.func,
			q.default.object,
			q.default.bool
		])),
		q.default.func,
		q.default.object
	]),
	value: q.default.number,
	valueBuffer: q.default.number,
	variant: q.default.oneOf([
		"buffer",
		"determinate",
		"indeterminate",
		"query"
	])
});
//#endregion
//#region node_modules/@mui/material/OutlinedInput/NotchedOutline.mjs
var Zm, Qm = Z("fieldset", {
	name: "MuiNotchedOutlined",
	shouldForwardProp: Ju
})({
	textAlign: "left",
	position: "absolute",
	bottom: 0,
	right: 0,
	top: -5,
	left: 0,
	margin: 0,
	padding: "0 8px",
	pointerEvents: "none",
	borderRadius: "inherit",
	borderStyle: "solid",
	borderWidth: 1,
	overflow: "hidden",
	minWidth: "0%"
}), $m = Z("legend", {
	name: "MuiNotchedOutlined",
	shouldForwardProp: Ju
})($(({ theme: e }) => ({
	float: "unset",
	width: "auto",
	overflow: "hidden",
	variants: [
		{
			props: ({ ownerState: e }) => !e.withLabel,
			style: {
				padding: 0,
				lineHeight: "11px",
				transition: e.transitions.create("width", {
					duration: 150,
					easing: e.transitions.easing.easeOut
				})
			}
		},
		{
			props: ({ ownerState: e }) => e.withLabel,
			style: {
				display: "block",
				padding: 0,
				height: 11,
				fontSize: "0.75em",
				visibility: "hidden",
				maxWidth: .01,
				transition: e.transitions.create("max-width", {
					duration: 50,
					easing: e.transitions.easing.easeOut
				}),
				whiteSpace: "nowrap",
				"& > span": {
					paddingLeft: 5,
					paddingRight: 5,
					display: "inline-block",
					opacity: 0,
					visibility: "visible"
				}
			}
		},
		{
			props: ({ ownerState: e }) => e.withLabel && e.notched,
			style: {
				maxWidth: "100%",
				transition: e.transitions.create("max-width", {
					duration: 100,
					easing: e.transitions.easing.easeOut,
					delay: 50
				})
			}
		}
	]
})));
function eh(e) {
	let { children: n, classes: r, className: i, label: a, notched: o, ...s } = e, c = a != null && a !== "", l = {
		...e,
		notched: o,
		withLabel: c
	};
	return /* @__PURE__ */ t(Qm, {
		"aria-hidden": !0,
		className: i,
		ownerState: l,
		...s,
		children: /* @__PURE__ */ t($m, {
			ownerState: l,
			children: c ? /* @__PURE__ */ t("span", { children: a }) : Zm ||= /* @__PURE__ */ t("span", {
				className: "notranslate",
				"aria-hidden": !0,
				children: "​"
			})
		})
	});
}
process.env.NODE_ENV !== "production" && (eh.propTypes = {
	children: q.default.node,
	classes: q.default.object,
	className: q.default.string,
	label: q.default.node,
	notched: q.default.bool.isRequired,
	style: q.default.object
});
//#endregion
//#region node_modules/@mui/material/OutlinedInput/OutlinedInput.mjs
var th = (e) => {
	let { classes: t } = e, n = Hl({
		root: ["root"],
		notchedOutline: ["notchedOutline"],
		input: ["input"]
	}, Vp, t);
	return {
		...t,
		...n
	};
}, nh = Z(Lp, {
	shouldForwardProp: (e) => Ju(e) || e === "classes",
	name: "MuiOutlinedInput",
	slot: "Root",
	overridesResolver: Pp
})($(({ theme: e }) => {
	let t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
	return {
		position: "relative",
		borderRadius: (e.vars || e).shape.borderRadius,
		[`&:hover .${Hp.notchedOutline}`]: { borderColor: (e.vars || e).palette.text.primary },
		"@media (hover: none)": { [`&:hover .${Hp.notchedOutline}`]: { borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, .23) : t } },
		[`&.${Hp.focused} .${Hp.notchedOutline}`]: { borderWidth: 2 },
		variants: [
			...Object.entries(e.palette).filter(Kf()).map(([t]) => ({
				props: { color: t },
				style: { [`&.${Hp.focused} .${Hp.notchedOutline}`]: { borderColor: (e.vars || e).palette[t].main } }
			})),
			{
				props: {},
				style: {
					[`&.${Hp.error} .${Hp.notchedOutline}`]: { borderColor: (e.vars || e).palette.error.main },
					[`&.${Hp.disabled} .${Hp.notchedOutline}`]: { borderColor: (e.vars || e).palette.action.disabled }
				}
			},
			{
				props: ({ ownerState: e }) => e.startAdornment,
				style: { paddingLeft: 14 }
			},
			{
				props: ({ ownerState: e }) => e.endAdornment,
				style: { paddingRight: 14 }
			},
			{
				props: ({ ownerState: e }) => e.multiline,
				style: { padding: "16.5px 14px" }
			},
			{
				props: ({ ownerState: e, size: t }) => e.multiline && t === "small",
				style: { padding: "8.5px 14px" }
			}
		]
	};
})), rh = Z(eh, {
	name: "MuiOutlinedInput",
	slot: "NotchedOutline"
})($(({ theme: e }) => {
	let t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
	return { borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, .23) : t };
})), ih = Z(Rp, {
	name: "MuiOutlinedInput",
	slot: "Input",
	overridesResolver: Fp
})($(({ theme: e }) => ({
	padding: "16.5px 14px",
	"&:-webkit-autofill": {
		...!e.vars && {
			WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
			WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
			caretColor: e.palette.mode === "light" ? null : "#fff"
		},
		borderRadius: "inherit",
		...e.vars && e.applyStyles("dark", {
			WebkitBoxShadow: "0 0 0 100px #266798 inset",
			WebkitTextFillColor: "#fff",
			caretColor: "#fff"
		})
	},
	variants: [
		{
			props: { size: "small" },
			style: { padding: "8.5px 14px" }
		},
		{
			props: ({ ownerState: e }) => e.multiline,
			style: { padding: 0 }
		},
		{
			props: ({ ownerState: e }) => e.startAdornment,
			style: { paddingLeft: 0 }
		},
		{
			props: ({ ownerState: e }) => e.endAdornment,
			style: { paddingRight: 0 }
		}
	]
}))), ah = /* @__PURE__ */ r.forwardRef(function(e, i) {
	let a = Qu({
		props: e,
		name: "MuiOutlinedInput"
	}), { fullWidth: o = !1, inputComponent: s = "input", label: c, multiline: l = !1, notched: u, slots: d = {}, slotProps: f = {}, type: p = "text", ...m } = a, h = th(a), [g, _] = Tp({
		props: a,
		states: [
			"color",
			"disabled",
			"error",
			"focused",
			"hiddenLabel",
			"size",
			"required"
		]
	}), v = {
		...a,
		color: g.color || "primary",
		disabled: g.disabled,
		error: g.error,
		focused: g.focused,
		formControl: _,
		fullWidth: o,
		hiddenLabel: g.hiddenLabel,
		multiline: l,
		size: g.size,
		type: p
	}, y = d.root ?? nh, b = d.input ?? ih, [x, S] = df("notchedOutline", {
		elementType: rh,
		className: h.notchedOutline,
		shouldForwardComponentProp: !0,
		ownerState: v,
		externalForwardedProps: {
			slots: d,
			slotProps: f
		},
		additionalProps: { label: c != null && c !== "" && g.required ? /* @__PURE__ */ n(r.Fragment, { children: [
			c,
			" ",
			"*"
		] }) : c }
	});
	return /* @__PURE__ */ t(Bp, {
		slots: {
			root: y,
			input: b
		},
		slotProps: f,
		renderSuffix: (e) => /* @__PURE__ */ t(x, {
			...S,
			notched: u === void 0 ? !!(e.startAdornment || e.filled || e.focused) : u
		}),
		fullWidth: o,
		inputComponent: s,
		multiline: l,
		ref: i,
		type: p,
		...m,
		classes: {
			...h,
			notchedOutline: null
		}
	});
});
process.env.NODE_ENV !== "production" && (ah.propTypes = {
	autoComplete: q.default.string,
	autoFocus: q.default.bool,
	classes: q.default.object,
	color: q.default.oneOfType([q.default.oneOf(["primary", "secondary"]), q.default.string]),
	defaultValue: q.default.any,
	disabled: q.default.bool,
	endAdornment: q.default.node,
	error: q.default.bool,
	fullWidth: q.default.bool,
	id: q.default.string,
	inputComponent: q.default.elementType,
	inputProps: q.default.object,
	inputRef: xf,
	label: q.default.node,
	margin: q.default.oneOf(["dense", "none"]),
	maxRows: q.default.oneOfType([q.default.number, q.default.string]),
	minRows: q.default.oneOfType([q.default.number, q.default.string]),
	multiline: q.default.bool,
	name: q.default.string,
	notched: q.default.bool,
	onChange: q.default.func,
	placeholder: q.default.string,
	readOnly: q.default.bool,
	required: q.default.bool,
	rows: q.default.oneOfType([q.default.number, q.default.string]),
	slotProps: q.default.shape({
		input: q.default.object,
		notchedOutline: q.default.oneOfType([q.default.func, q.default.object]),
		root: q.default.object
	}),
	slots: q.default.shape({
		input: q.default.elementType,
		notchedOutline: q.default.elementType,
		root: q.default.elementType
	}),
	startAdornment: q.default.node,
	sx: q.default.oneOfType([
		q.default.arrayOf(q.default.oneOfType([
			q.default.func,
			q.default.object,
			q.default.bool
		])),
		q.default.func,
		q.default.object
	]),
	type: q.default.string,
	value: q.default.any
}), ah.muiName = "Input";
//#endregion
//#region node_modules/@mui/material/Snackbar/useSnackbar.mjs
function oh(e = {}) {
	let { autoHideDuration: t = null, disableWindowBlurListener: n = !1, onClose: i, open: a, resumeHideDuration: o } = e, s = Xd();
	r.useEffect(() => {
		if (!a) return;
		function e(e) {
			e.defaultPrevented || e.key === "Escape" && i?.(e, "escapeKeyDown");
		}
		return document.addEventListener("keydown", e), () => {
			document.removeEventListener("keydown", e);
		};
	}, [a, i]);
	let c = hd((e, t) => {
		i?.(e, t);
	}), l = hd((e) => {
		!i || e == null || s.start(e, () => {
			c(null, "timeout");
		});
	});
	r.useEffect(() => (a && l(t), s.clear), [
		a,
		t,
		l,
		s
	]);
	let u = (e) => {
		i?.(e, "clickaway");
	}, d = s.clear, f = r.useCallback(() => {
		t != null && l(o ?? t * .5);
	}, [
		t,
		o,
		l
	]), p = (e) => (t) => {
		let n = e.onBlur;
		n?.(t), f();
	}, m = (e) => (t) => {
		let n = e.onFocus;
		n?.(t), d();
	}, h = (e) => (t) => {
		let n = e.onMouseEnter;
		n?.(t), d();
	}, g = (e) => (t) => {
		let n = e.onMouseLeave;
		n?.(t), f();
	};
	return r.useEffect(() => {
		if (!n && a) return window.addEventListener("focus", f), window.addEventListener("blur", d), () => {
			window.removeEventListener("focus", f), window.removeEventListener("blur", d);
		};
	}, [
		n,
		a,
		f,
		d
	]), {
		getRootProps: (t = {}) => {
			let n = {
				...cf(e),
				...cf(t)
			};
			return {
				role: "presentation",
				...t,
				...n,
				onBlur: p(n),
				onFocus: m(n),
				onMouseEnter: h(n),
				onMouseLeave: g(n)
			};
		},
		onClickAway: u
	};
}
//#endregion
//#region node_modules/@mui/material/SnackbarContent/snackbarContentClasses.mjs
function sh(e) {
	return Rc("MuiSnackbarContent", e);
}
zc("MuiSnackbarContent", [
	"root",
	"message",
	"action"
]);
//#endregion
//#region node_modules/@mui/material/SnackbarContent/SnackbarContent.mjs
var ch = (e) => {
	let { classes: t } = e;
	return Hl({
		root: ["root"],
		action: ["action"],
		message: ["message"]
	}, sh, t);
}, lh = Z(bf, {
	name: "MuiSnackbarContent",
	slot: "Root"
})($(({ theme: e }) => {
	let t = e.palette.mode === "light" ? .8 : .98;
	return {
		...e.typography.body2,
		color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(vl(e.palette.background.default, t)),
		backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : vl(e.palette.background.default, t),
		display: "flex",
		alignItems: "center",
		flexWrap: "wrap",
		padding: "6px 16px",
		flexGrow: 1,
		[e.breakpoints.up("sm")]: {
			flexGrow: "initial",
			minWidth: 288
		}
	};
})), uh = Z("div", {
	name: "MuiSnackbarContent",
	slot: "Message"
})({ padding: "8px 0" }), dh = Z("div", {
	name: "MuiSnackbarContent",
	slot: "Action"
})({
	display: "flex",
	alignItems: "center",
	marginLeft: "auto",
	paddingLeft: 16,
	marginRight: -8
}), fh = /* @__PURE__ */ r.forwardRef(function(e, r) {
	let i = Qu({
		props: e,
		name: "MuiSnackbarContent"
	}), { action: a, className: o, message: s, role: c = "alert", ...l } = i, u = i, d = ch(u);
	return /* @__PURE__ */ n(lh, {
		role: c,
		elevation: 6,
		className: j(d.root, o),
		ownerState: u,
		ref: r,
		...l,
		children: [/* @__PURE__ */ t(uh, {
			className: d.message,
			ownerState: u,
			children: s
		}), a ? /* @__PURE__ */ t(dh, {
			className: d.action,
			ownerState: u,
			children: a
		}) : null]
	});
});
process.env.NODE_ENV !== "production" && (fh.propTypes = {
	action: q.default.node,
	classes: q.default.object,
	className: q.default.string,
	message: q.default.node,
	role: q.default.string,
	sx: q.default.oneOfType([
		q.default.arrayOf(q.default.oneOfType([
			q.default.func,
			q.default.object,
			q.default.bool
		])),
		q.default.func,
		q.default.object
	])
});
//#endregion
//#region node_modules/@mui/material/Snackbar/snackbarClasses.mjs
function ph(e) {
	return Rc("MuiSnackbar", e);
}
zc("MuiSnackbar", [
	"root",
	"anchorOriginTopCenter",
	"anchorOriginBottomCenter",
	"anchorOriginTopRight",
	"anchorOriginBottomRight",
	"anchorOriginTopLeft",
	"anchorOriginBottomLeft"
]);
//#endregion
//#region node_modules/@mui/material/Snackbar/Snackbar.mjs
var mh = (e) => {
	let { classes: t, anchorOrigin: n } = e;
	return Hl({ root: ["root", `anchorOrigin${Q(n.vertical)}${Q(n.horizontal)}`] }, ph, t);
}, hh = Z("div", {
	name: "MuiSnackbar",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.root, t[`anchorOrigin${Q(n.anchorOrigin.vertical)}${Q(n.anchorOrigin.horizontal)}`]];
	}
})($(({ theme: e }) => ({
	zIndex: (e.vars || e).zIndex.snackbar,
	position: "fixed",
	display: "flex",
	left: 8,
	right: 8,
	justifyContent: "center",
	alignItems: "center",
	variants: [
		{
			props: ({ ownerState: e }) => e.anchorOrigin.vertical === "top",
			style: {
				top: 8,
				[e.breakpoints.up("sm")]: { top: 24 }
			}
		},
		{
			props: ({ ownerState: e }) => e.anchorOrigin.vertical !== "top",
			style: {
				bottom: 8,
				[e.breakpoints.up("sm")]: { bottom: 24 }
			}
		},
		{
			props: ({ ownerState: e }) => e.anchorOrigin.horizontal === "left",
			style: {
				justifyContent: "flex-start",
				[e.breakpoints.up("sm")]: {
					left: 24,
					right: "auto"
				}
			}
		},
		{
			props: ({ ownerState: e }) => e.anchorOrigin.horizontal === "right",
			style: {
				justifyContent: "flex-end",
				[e.breakpoints.up("sm")]: {
					right: 24,
					left: "auto"
				}
			}
		},
		{
			props: ({ ownerState: e }) => e.anchorOrigin.horizontal === "center",
			style: { [e.breakpoints.up("sm")]: {
				left: "50%",
				right: "auto",
				transform: "translateX(-50%)"
			} }
		}
	]
}))), gh = /* @__PURE__ */ r.forwardRef(function(e, n) {
	let i = Qu({
		props: e,
		name: "MuiSnackbar"
	}), a = Ku(), o = {
		enter: a.transitions.duration.enteringScreen,
		exit: a.transitions.duration.leavingScreen
	}, { action: s, anchorOrigin: { vertical: c, horizontal: l } = {
		vertical: "bottom",
		horizontal: "left"
	}, autoHideDuration: u = null, children: d, className: f, disableWindowBlurListener: p = !1, message: m, onBlur: h, onClose: g, onFocus: _, onMouseEnter: v, onMouseLeave: y, open: b, resumeHideDuration: x, slots: S = {}, slotProps: C = {}, transitionDuration: w = o, ...T } = i, E = {
		...i,
		anchorOrigin: {
			vertical: c,
			horizontal: l
		},
		autoHideDuration: u,
		disableWindowBlurListener: p,
		transitionDuration: w
	}, D = mh(E), { getRootProps: O, onClickAway: k } = oh(E), [A, j] = r.useState(!0), M = {
		slots: S,
		slotProps: C
	}, [N, ee] = df("root", {
		ref: n,
		className: [D.root, f],
		elementType: hh,
		getSlotProps: O,
		externalForwardedProps: {
			...M,
			...T
		},
		ownerState: E
	}), [te, { ownerState: P, ...ne }] = df("clickAwayListener", {
		elementType: um,
		externalForwardedProps: M,
		getSlotProps: (e) => ({ onClickAway: (...t) => {
			let n = t[0];
			e.onClickAway?.(...t), !n?.defaultMuiPrevented && k(...t);
		} }),
		ownerState: E
	}), [re, ie] = df("content", {
		elementType: fh,
		shouldForwardComponentProp: !0,
		externalForwardedProps: M,
		additionalProps: {
			message: m,
			action: s
		},
		ownerState: E
	}), [ae, F] = df("transition", {
		elementType: wm,
		externalForwardedProps: M,
		getSlotProps: (e) => ({
			onEnter: (...t) => {
				e.onEnter?.(...t), j(!1);
			},
			onExited: (...t) => {
				e.onExited?.(...t), j(!0);
			}
		}),
		additionalProps: {
			appear: !0,
			in: b,
			timeout: w,
			direction: c === "top" ? "down" : "up"
		},
		ownerState: E
	});
	return !b && A ? null : /* @__PURE__ */ t(te, {
		...ne,
		...S.clickAwayListener && { ownerState: P },
		children: /* @__PURE__ */ t(N, {
			...ee,
			children: /* @__PURE__ */ t(ae, {
				...F,
				children: d || /* @__PURE__ */ t(re, { ...ie })
			})
		})
	});
});
process.env.NODE_ENV !== "production" && (gh.propTypes = {
	action: q.default.node,
	anchorOrigin: q.default.shape({
		horizontal: q.default.oneOf([
			"center",
			"left",
			"right"
		]).isRequired,
		vertical: q.default.oneOf(["bottom", "top"]).isRequired
	}),
	autoHideDuration: q.default.number,
	children: q.default.element,
	classes: q.default.object,
	className: q.default.string,
	disableWindowBlurListener: q.default.bool,
	key: () => null,
	message: q.default.node,
	onBlur: q.default.func,
	onClose: q.default.func,
	onFocus: q.default.func,
	onMouseEnter: q.default.func,
	onMouseLeave: q.default.func,
	open: q.default.bool,
	resumeHideDuration: q.default.number,
	slotProps: q.default.shape({
		clickAwayListener: q.default.oneOfType([q.default.func, q.default.object]),
		content: q.default.oneOfType([q.default.func, q.default.object]),
		root: q.default.oneOfType([q.default.func, q.default.object]),
		transition: q.default.oneOfType([q.default.func, q.default.object])
	}),
	slots: q.default.shape({
		clickAwayListener: q.default.elementType,
		content: q.default.elementType,
		root: q.default.elementType,
		transition: q.default.elementType
	}),
	sx: q.default.oneOfType([
		q.default.arrayOf(q.default.oneOfType([
			q.default.func,
			q.default.object,
			q.default.bool
		])),
		q.default.func,
		q.default.object
	]),
	transitionDuration: q.default.oneOfType([q.default.number, q.default.shape({
		appear: q.default.number,
		enter: q.default.number,
		exit: q.default.number
	})])
});
//#endregion
//#region src/components/commons/CustomCheckbox.tsx
function _h({ label: e, checked: r, updateChecked: i }) {
	return /* @__PURE__ */ n("div", {
		className: "flex items-center",
		children: [/* @__PURE__ */ t(sm, {
			checked: r,
			onChange: (e) => i(e.target.checked),
			sx: {
				"& .MuiSvgIcon-root": { fontSize: 28 },
				color: "var(--color-on-surface-variant)",
				"&.Mui-checked": { color: "var(--color-primary)" },
				"&:hover": { backgroundColor: "var(--color-primary-op8)" }
			}
		}), /* @__PURE__ */ t("label", {
			className: W("ml-1 text-[16px] font-medium", r ? "text-on-surface" : "text-on-surface-op38"),
			children: e
		})]
	});
}
//#endregion
//#region node_modules/@base-ui/utils/esm/addEventListener.js
function vh(e, t, n, r) {
	return e.addEventListener(t, n, r), () => {
		e.removeEventListener(t, n, r);
	};
}
//#endregion
//#region node_modules/@base-ui/utils/esm/error.js
var yh;
process.env.NODE_ENV !== "production" && (yh = /* @__PURE__ */ new Set());
function bh(...e) {
	if (process.env.NODE_ENV !== "production") {
		let t = e.join(" ");
		yh.has(t) || (yh.add(t), console.error(`Base UI: ${t}`));
	}
}
//#endregion
//#region node_modules/@base-ui/utils/esm/useControlled.js
function xh({ controlled: e, default: t, name: n, state: i = "value" }) {
	let { current: a } = r.useRef(e !== void 0), [o, s] = r.useState(t), c = a ? e : o;
	if (process.env.NODE_ENV !== "production") {
		r.useEffect(() => {
			a !== (e !== void 0) && bh([
				`A component is changing the ${a ? "" : "un"}controlled ${i} state of ${n} to be ${a ? "un" : ""}controlled.`,
				"Elements should not switch from uncontrolled to controlled (or vice versa).",
				`Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`,
				"The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
				"More info: https://fb.me/react-controlled-components"
			].join("\n"));
		}, [
			i,
			n,
			e
		]);
		let { current: o } = r.useRef(t);
		r.useEffect(() => {
			!a && Sh(o) !== Sh(t) && bh([`A component is changing the default ${i} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join("\n"));
		}, [t]);
	}
	return [c, r.useCallback((e) => {
		a || s(e);
	}, [])];
}
function Sh(e) {
	let t = 0, n = /* @__PURE__ */ new WeakMap();
	try {
		return JSON.stringify(e, function(e, r) {
			if (!(e === "_owner" && this != null && typeof this == "object" && "$$typeof" in this)) {
				if (typeof r == "bigint") return `__bigint__:${r}`;
				if (typeof r == "object" && r) {
					let e = n.get(r);
					if (e !== void 0) return `__object__:${e}`;
					n.set(r, t), t += 1;
				}
				return r;
			}
		}) ?? `__top__:${typeof e}`;
	} catch {
		return "__unserializable__";
	}
}
//#endregion
//#region node_modules/@base-ui/utils/esm/safeReact.js
var Ch = { ...r }, wh = {};
function Th(e, t) {
	let n = r.useRef(wh);
	return n.current === wh && (n.current = e(t)), n;
}
//#endregion
//#region node_modules/@base-ui/utils/esm/useStableCallback.js
var Eh = Ch.useInsertionEffect, Dh = Eh && Eh !== Ch.useLayoutEffect ? Eh : (e) => e();
function Oh(e) {
	let t = Th(kh).current;
	return t.next = e, Dh(t.effect), t.trampoline;
}
function kh() {
	let e = {
		next: void 0,
		callback: Ah,
		trampoline: (...t) => e.callback?.(...t),
		effect: () => {
			e.callback = e.next;
		}
	};
	return e;
}
function Ah() {
	if (process.env.NODE_ENV !== "production") throw Error("Base UI: Cannot call an event handler while rendering.");
}
var jh = typeof document < "u" ? r.useLayoutEffect : () => {};
//#endregion
//#region node_modules/@base-ui/utils/esm/useValueAsRef.js
function Mh(e) {
	let t = Th(Nh, e).current;
	return t.next = e, jh(t.effect), t;
}
function Nh(e) {
	let t = {
		current: e,
		next: e,
		effect: () => {
			t.current = t.next;
		}
	};
	return t;
}
//#endregion
//#region node_modules/@base-ui/utils/esm/useForcedRerendering.js
function Ph() {
	let [, e] = r.useState({});
	return r.useCallback(() => {
		e({});
	}, []);
}
//#endregion
//#region node_modules/@base-ui/utils/esm/useMergedRefs.js
function Fh(e, t, n, r) {
	let i = Th(Lh).current;
	return Rh(i, e, t, n, r) && Bh(i, [
		e,
		t,
		n,
		r
	]), i.callback;
}
function Ih(e) {
	let t = Th(Lh).current;
	return zh(t, e) && Bh(t, e), t.callback;
}
function Lh() {
	return {
		callback: null,
		cleanup: null,
		refs: []
	};
}
function Rh(e, t, n, r, i) {
	return e.refs[0] !== t || e.refs[1] !== n || e.refs[2] !== r || e.refs[3] !== i;
}
function zh(e, t) {
	return e.refs.length !== t.length || e.refs.some((e, n) => e !== t[n]);
}
function Bh(e, t) {
	if (e.refs = t, t.every((e) => e == null)) {
		e.callback = null;
		return;
	}
	e.callback = (n) => {
		if (e.cleanup &&= (e.cleanup(), null), n != null) {
			let r = Array(t.length).fill(null);
			for (let e = 0; e < t.length; e += 1) {
				let i = t[e];
				if (i != null) switch (typeof i) {
					case "function": {
						let t = i(n);
						typeof t == "function" && (r[e] = t);
						break;
					}
					case "object":
						i.current = n;
						break;
					default:
				}
			}
			e.cleanup = () => {
				for (let e = 0; e < t.length; e += 1) {
					let n = t[e];
					if (n != null) switch (typeof n) {
						case "function": {
							let t = r[e];
							typeof t == "function" ? t() : n(null);
							break;
						}
						case "object":
							n.current = null;
							break;
						default:
					}
				}
			};
		}
	};
}
//#endregion
//#region node_modules/@base-ui/utils/esm/visuallyHidden.js
var Vh = {
	clipPath: "inset(50%)",
	overflow: "hidden",
	whiteSpace: "nowrap",
	border: 0,
	padding: 0,
	width: 1,
	height: 1,
	margin: -1
}, Hh = {
	...Vh,
	position: "fixed",
	top: 0,
	left: 0
}, Uh = {
	...Vh,
	position: "absolute"
};
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function Wh() {
	return typeof window < "u";
}
function Gh(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Kh(e) {
	return Wh() ? e instanceof Element || e instanceof Gh(e).Element : !1;
}
function qh(e) {
	return Wh() ? e instanceof HTMLElement || e instanceof Gh(e).HTMLElement : !1;
}
//#endregion
//#region node_modules/@base-ui/utils/esm/owner.js
function Jh(e) {
	return e?.ownerDocument || document;
}
//#endregion
//#region node_modules/@base-ui/utils/esm/detectBrowser.js
var Yh = typeof navigator < "u", Xh = eg(), Zh = ng(), Qh = tg();
typeof CSS > "u" || !CSS.supports || CSS.supports("-webkit-backdrop-filter:none");
var $h = Xh.platform === "MacIntel" && Xh.maxTouchPoints > 1 ? !0 : /iP(hone|ad|od)|iOS/.test(Xh.platform);
Yh && /firefox/i.test(Qh), Yh && /apple/i.test(navigator.vendor), Yh && /Edg/i.test(Qh), Yh && /android/i.test(Zh) || /android/i.test(Qh), Yh && Zh.toLowerCase().startsWith("mac") && navigator.maxTouchPoints, Qh.includes("jsdom/");
function eg() {
	if (!Yh) return {
		platform: "",
		maxTouchPoints: -1
	};
	let e = navigator.userAgentData;
	return e?.platform ? {
		platform: e.platform,
		maxTouchPoints: navigator.maxTouchPoints
	} : {
		platform: navigator.platform ?? "",
		maxTouchPoints: navigator.maxTouchPoints ?? -1
	};
}
function tg() {
	if (!Yh) return "";
	let e = navigator.userAgentData;
	return e && Array.isArray(e.brands) ? e.brands.map(({ brand: e, version: t }) => `${e}/${t}`).join(" ") : navigator.userAgent;
}
function ng() {
	if (!Yh) return "";
	let e = navigator.userAgentData;
	return e?.platform ? e.platform : navigator.platform ?? "";
}
//#endregion
//#region node_modules/@base-ui/react/esm/internals/shadowDom.js
function rg(e) {
	let t = e.activeElement;
	for (; t?.shadowRoot?.activeElement != null;) t = t.shadowRoot.activeElement;
	return t;
}
//#endregion
//#region node_modules/@base-ui/react/esm/floating-ui-react/utils/event.js
function ig(e) {
	e.preventDefault(), e.stopPropagation();
}
//#endregion
//#region node_modules/@base-ui/utils/esm/formatErrorMessage.js
function ag(e, t) {
	return function(n, ...r) {
		let i = new URL(e);
		return i.searchParams.set("code", n.toString()), r.forEach((e) => i.searchParams.append("args[]", e)), `${t} error #${n}; visit ${i} for the full message.`;
	};
}
var og = ag("https://base-ui.com/production-error", "Base UI"), sg = /* @__PURE__ */ r.createContext(void 0);
process.env.NODE_ENV !== "production" && (sg.displayName = "NumberFieldRootContext");
function cg() {
	let e = r.useContext(sg);
	if (e === void 0) throw Error(process.env.NODE_ENV === "production" ? og(43) : "Base UI: NumberFieldRootContext is missing. NumberField parts must be placed within <NumberField.Root>.");
	return e;
}
//#endregion
//#region node_modules/@base-ui/utils/esm/empty.js
function lg() {}
Object.freeze([]);
var ug = Object.freeze({}), dg = /* @__PURE__ */ function(e) {
	return e.disabled = "data-disabled", e.valid = "data-valid", e.invalid = "data-invalid", e.touched = "data-touched", e.dirty = "data-dirty", e.filled = "data-filled", e.focused = "data-focused", e;
}({}), fg = {
	badInput: !1,
	customError: !1,
	patternMismatch: !1,
	rangeOverflow: !1,
	rangeUnderflow: !1,
	stepMismatch: !1,
	tooLong: !1,
	tooShort: !1,
	typeMismatch: !1,
	valid: null,
	valueMissing: !1
}, pg = {
	valid: null,
	touched: !1,
	dirty: !1,
	filled: !1,
	focused: !1
}, mg = {
	disabled: !1,
	...pg
}, hg = { valid(e) {
	return e === null ? null : e ? { [dg.valid]: "" } : { [dg.invalid]: "" };
} }, gg = {
	invalid: void 0,
	name: void 0,
	validityData: {
		state: fg,
		errors: [],
		error: "",
		value: "",
		initialValue: null
	},
	setValidityData: lg,
	disabled: void 0,
	touched: pg.touched,
	setTouched: lg,
	dirty: pg.dirty,
	setDirty: lg,
	filled: pg.filled,
	setFilled: lg,
	focused: pg.focused,
	setFocused: lg,
	validate: () => null,
	validationMode: "onSubmit",
	validationDebounceTime: 0,
	shouldValidateOnChange: () => !1,
	state: mg,
	markedDirtyRef: { current: !1 },
	registerFieldControl: lg,
	validation: {
		getValidationProps: (e = ug) => e,
		getInputValidationProps: (e = ug) => e,
		inputRef: { current: null },
		commit: async () => {}
	}
}, _g = /* @__PURE__ */ r.createContext(gg);
process.env.NODE_ENV !== "production" && (_g.displayName = "FieldRootContext");
function vg(e = !0) {
	let t = r.useContext(_g);
	if (t.setValidityData === lg && !e) throw Error(process.env.NODE_ENV === "production" ? og(28) : "Base UI: FieldRootContext is missing. Field parts must be placed within <Field.Root>.");
	return t;
}
//#endregion
//#region node_modules/@base-ui/utils/esm/useId.js
var yg = 0;
function bg(e, t = "mui") {
	let [n, i] = r.useState(e), a = e || n;
	return r.useEffect(() => {
		n ?? (yg += 1, i(`${t}-${yg}`));
	}, [n, t]), a;
}
var xg = Ch.useId;
function Sg(e, t) {
	if (xg !== void 0) {
		let n = xg();
		return e ?? (t ? `${t}-${n}` : n);
	}
	return bg(e, t);
}
//#endregion
//#region node_modules/@base-ui/react/esm/internals/useBaseUiId.js
function Cg(e) {
	return Sg(e, "base-ui");
}
//#endregion
//#region node_modules/@base-ui/react/esm/internals/labelable-provider/LabelableContext.js
var wg = /* @__PURE__ */ r.createContext({
	controlId: void 0,
	registerControlId: lg,
	labelId: void 0,
	setLabelId: lg,
	messageIds: [],
	setMessageIds: lg,
	getDescriptionProps: (e) => e
});
process.env.NODE_ENV !== "production" && (wg.displayName = "LabelableContext");
function Tg() {
	return r.useContext(wg);
}
//#endregion
//#region node_modules/@base-ui/react/esm/internals/labelable-provider/useLabelableId.js
function Eg(e = {}) {
	let { id: t, implicit: n = !1, controlRef: i } = e, { controlId: a, registerControlId: o } = Tg(), s = Cg(t), c = n ? a : void 0, l = Th(() => Symbol("labelable-control")), u = r.useRef(!1), d = r.useRef(t != null), f = Oh(() => {
		!u.current || o === lg || (u.current = !1, o(l.current, void 0));
	});
	return jh(() => {
		if (o === lg) return;
		let e;
		if (n) {
			let n = i?.current;
			e = Kh(n) && n.closest("label") != null ? t ?? null : c ?? s;
		} else if (t != null) d.current = !0, e = t;
		else if (d.current) e = s;
		else {
			f();
			return;
		}
		if (e === void 0) {
			f();
			return;
		}
		u.current = !0, o(l.current, e);
	}, [
		t,
		i,
		c,
		o,
		n,
		s,
		l,
		f
	]), r.useEffect(() => f, [f]), a ?? s;
}
//#endregion
//#region node_modules/@base-ui/react/esm/number-field/utils/stateAttributesMapping.js
var Dg = {
	inputValue: () => null,
	value: () => null,
	...hg
}, Og = parseInt(r.version, 10);
function kg(e) {
	return Og >= e;
}
//#endregion
//#region node_modules/@base-ui/utils/esm/getReactElementRef.js
function Ag(e) {
	if (!/* @__PURE__ */ r.isValidElement(e)) return null;
	let t = e, n = t.props;
	return (kg(19) ? n?.ref : t.ref) ?? null;
}
//#endregion
//#region node_modules/@base-ui/utils/esm/mergeObjects.js
function jg(e, t) {
	if (e && !t) return e;
	if (!e && t) return t;
	if (e || t) return {
		...e,
		...t
	};
}
//#endregion
//#region node_modules/@base-ui/utils/esm/warn.js
var Mg;
process.env.NODE_ENV !== "production" && (Mg = /* @__PURE__ */ new Set());
function Ng(...e) {
	if (process.env.NODE_ENV !== "production") {
		let t = e.join(" ");
		Mg.has(t) || (Mg.add(t), console.warn(`Base UI: ${t}`));
	}
}
//#endregion
//#region node_modules/@base-ui/react/esm/internals/getStateAttributesProps.js
function Pg(e, t) {
	let n = {};
	for (let r in e) {
		let i = e[r];
		if (t?.hasOwnProperty(r)) {
			let e = t[r](i);
			e != null && Object.assign(n, e);
			continue;
		}
		i === !0 ? n[`data-${r.toLowerCase()}`] = "" : i && (n[`data-${r.toLowerCase()}`] = i.toString());
	}
	return n;
}
//#endregion
//#region node_modules/@base-ui/react/esm/utils/resolveClassName.js
function Fg(e, t) {
	return typeof e == "function" ? e(t) : e;
}
//#endregion
//#region node_modules/@base-ui/react/esm/utils/resolveStyle.js
function Ig(e, t) {
	return typeof e == "function" ? e(t) : e;
}
//#endregion
//#region node_modules/@base-ui/react/esm/merge-props/mergeProps.js
var Lg = {};
function Rg(e, t, n, r, i) {
	if (!n && !r && !i && !e) return Bg(t);
	let a = Bg(e);
	return t && (a = Vg(a, t)), n && (a = Vg(a, n)), r && (a = Vg(a, r)), i && (a = Vg(a, i)), a;
}
function zg(e) {
	if (e.length === 0) return Lg;
	if (e.length === 1) return Bg(e[0]);
	let t = Bg(e[0]);
	for (let n = 1; n < e.length; n += 1) t = Vg(t, e[n]);
	return t;
}
function Bg(e) {
	return Gg(e) ? { ...Kg(e, Lg) } : Hg(e);
}
function Vg(e, t) {
	return Gg(t) ? Kg(t, e) : Ug(e, t);
}
function Hg(e) {
	let t = { ...e };
	for (let e in t) {
		let n = t[e];
		Wg(e, n) && (t[e] = Jg(n));
	}
	return t;
}
function Ug(e, t) {
	if (!t) return e;
	for (let n in t) {
		let r = t[n];
		switch (n) {
			case "style":
				e[n] = jg(e.style, r);
				break;
			case "className":
				e[n] = Xg(e.className, r);
				break;
			default: Wg(n, r) ? e[n] = qg(e[n], r) : e[n] = r;
		}
	}
	return e;
}
function Wg(e, t) {
	let n = e.charCodeAt(0), r = e.charCodeAt(1), i = e.charCodeAt(2);
	return n === 111 && r === 110 && i >= 65 && i <= 90 && (typeof t == "function" || t === void 0);
}
function Gg(e) {
	return typeof e == "function";
}
function Kg(e, t) {
	return Gg(e) ? e(t) : e ?? Lg;
}
function qg(e, t) {
	return t ? e ? (...n) => {
		let r = n[0];
		if (Zg(r)) {
			let i = r;
			Yg(i);
			let a = t(...n);
			return i.baseUIHandlerPrevented || e?.(...n), a;
		}
		let i = t(...n);
		return e?.(...n), i;
	} : Jg(t) : e;
}
function Jg(e) {
	return e && ((...t) => {
		let n = t[0];
		return Zg(n) && Yg(n), e(...t);
	});
}
function Yg(e) {
	return e.preventBaseUIHandler = () => {
		e.baseUIHandlerPrevented = !0;
	}, e;
}
function Xg(e, t) {
	return t ? e ? t + " " + e : t : e;
}
function Zg(e) {
	return typeof e == "object" && !!e && "nativeEvent" in e;
}
//#endregion
//#region node_modules/@base-ui/react/esm/internals/useRenderElement.js
function Qg(e, t, n = {}) {
	let r = t.render, i = $g(t, n);
	return n.enabled === !1 ? null : i_(e, r, i, n.state ?? ug);
}
function $g(e, t = {}) {
	let { className: n, style: r, render: i } = e, { state: a = ug, ref: o, props: s, stateAttributesMapping: c, enabled: l = !0 } = t, u = l ? Fg(n, a) : void 0, d = l ? Ig(r, a) : void 0, f = l ? Pg(a, c) : ug, p = l && s ? e_(s) : void 0, m = l ? jg(f, p) ?? {} : ug;
	return typeof document < "u" && (l ? Array.isArray(o) ? m.ref = Ih([
		m.ref,
		Ag(i),
		...o
	]) : m.ref = Fh(m.ref, Ag(i), o) : Fh(null, null)), l ? (u !== void 0 && (m.className = Xg(m.className, u)), d !== void 0 && (m.style = jg(m.style, d)), m) : ug;
}
function e_(e) {
	return Array.isArray(e) ? zg(e) : Rg(void 0, e);
}
var t_ = Symbol.for("react.lazy"), n_ = /^[A-Z][A-Za-z0-9$]*$/, r_ = /[a-z]/;
function i_(e, t, n, i) {
	if (t) {
		if (typeof t == "function") return process.env.NODE_ENV !== "production" && a_(t), t(n, i);
		let e = Rg(n, t.props);
		e.ref = n.ref;
		let a = t;
		if (a?.$$typeof === t_ && (a = r.Children.toArray(t)[0]), process.env.NODE_ENV !== "production" && !/* @__PURE__ */ r.isValidElement(a)) throw Error([
			"Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.",
			"A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.",
			"https://base-ui.com/r/invalid-render-prop"
		].join("\n"));
		return /* @__PURE__ */ r.cloneElement(a, e);
	}
	if (e && typeof e == "string") return o_(e, n);
	throw Error(process.env.NODE_ENV === "production" ? og(8) : "Base UI: Render element or function are not defined.");
}
function a_(e) {
	let t = e.name;
	t.length !== 0 && n_.test(t) && r_.test(t) && Ng(`The \`render\` prop received a function named \`${t}\` that starts with an uppercase letter.`, "This usually means a React component was passed directly as `render={Component}`.", "Base UI calls `render` as a plain function, which can break the Rules of Hooks during reconciliation.", "If this is an intentional render callback, rename it to start with a lowercase letter.", "Use `render={<Component />}` or `render={(props) => <Component {...props} />}` instead.", "https://base-ui.com/r/invalid-render-prop");
}
function o_(e, t) {
	return e === "button" ? /* @__PURE__ */ c("button", {
		type: "button",
		...t,
		key: t.key
	}) : e === "img" ? /* @__PURE__ */ c("img", {
		alt: "",
		...t,
		key: t.key
	}) : /* @__PURE__ */ r.createElement(e, t);
}
//#endregion
//#region node_modules/@base-ui/react/esm/utils/formatNumber.js
var s_ = /* @__PURE__ */ new Map();
function c_(e, t) {
	let n = JSON.stringify({
		locale: e,
		options: t
	}), r = s_.get(n);
	if (r) return r;
	let i = new Intl.NumberFormat(e, t);
	return s_.set(n, i), i;
}
function l_(e, t, n) {
	return e == null ? "" : c_(t, n).format(e);
}
function u_(e, t, n) {
	return l_(e, t, {
		...n,
		maximumFractionDigits: 20
	});
}
//#endregion
//#region node_modules/@base-ui/react/esm/number-field/utils/parse.js
var d_ = [
	"零",
	"〇",
	"一",
	"二",
	"三",
	"四",
	"五",
	"六",
	"七",
	"八",
	"九"
], f_ = {
	零: "0",
	〇: "0",
	一: "1",
	二: "2",
	三: "3",
	四: "4",
	五: "5",
	六: "6",
	七: "7",
	八: "8",
	九: "9"
}, p_ = [
	"٠",
	"١",
	"٢",
	"٣",
	"٤",
	"٥",
	"٦",
	"٧",
	"٨",
	"٩"
], m_ = [
	"۰",
	"۱",
	"۲",
	"۳",
	"۴",
	"۵",
	"۶",
	"۷",
	"۸",
	"۹"
], h_ = [
	"０",
	"１",
	"２",
	"３",
	"４",
	"５",
	"６",
	"７",
	"８",
	"９"
], g_ = [
	"%",
	"٪",
	"％",
	"﹪"
], __ = ["‰", "؉"], v_ = [
	"−",
	"－",
	"‒",
	"–",
	"—",
	"﹣"
], y_ = ["＋", "﹢"], b_ = RegExp(`[${p_.join("")}]`, "g"), x_ = RegExp(`[${m_.join("")}]`, "g"), S_ = RegExp(`[${h_.join("")}]`, "g"), C_ = RegExp(`[${d_.join("")}]`, "g"), w_ = RegExp(`[${g_.join("")}]`), T_ = RegExp(`[${__.join("")}]`), E_ = /[٠١٢٣٤٥٦٧٨٩]/, D_ = /[۰۱۲۳۴۵۶۷۸۹]/, O_ = /[零〇一二三四五六七八九]/, k_ = RegExp(`[${h_.join("")}]`), A_ = [
	".",
	",",
	"．",
	"，",
	"٫",
	"٬"
], j_ = /\p{Zs}/u, M_ = ["+", ...y_], N_ = ["-", ...v_], P_ = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), F_ = (e) => e.replace(/[-\\\]^]/g, (e) => `\\${e}`), I_ = (e) => `[${e.map(F_).join("")}]`, L_ = I_(["-"].concat(v_)), R_ = I_(["+"].concat(y_)), z_ = new RegExp(L_, "gu"), B_ = new RegExp(R_, "gu"), V_ = new RegExp(L_), H_ = new RegExp(R_);
function U_(e, t) {
	let n = c_(e, t).formatToParts(11111.1), r = {};
	return n.forEach((e) => {
		r[e.type] = e.value;
	}), c_(e).formatToParts(.1).forEach((e) => {
		e.type === "decimal" && (r[e.type] = e.value);
	}), r;
}
function W_(e, t, n) {
	if (e == null) return null;
	let r = String(e).replace(/\p{Cf}/gu, "").trim();
	r = r.replace(z_, "-").replace(B_, "+");
	let i = !1, a = r.match(/([+-])\s*$/);
	a && (a[1] === "-" && (i = !0), r = r.replace(/([+-])\s*$/, ""));
	let o = r.match(/^\s*([+-])/);
	o && (o[1] === "-" && (i = !0), r = r.replace(/^\s*[+-]/, ""));
	let s = t;
	s === void 0 && (E_.test(r) || D_.test(r) ? s = "ar" : O_.test(r) && (s = "zh"));
	let { group: c, decimal: l, currency: u } = U_(s, n), d = c_(s, n).formatToParts(1).filter((e) => e.type === "unit").map((e) => P_(e.value)), f = d.length ? new RegExp(d.join("|"), "g") : null, p = null;
	c && (p = /\p{Zs}/u.test(c) ? /\p{Zs}/gu : c === "'" || c === "’" ? /['’]/g : new RegExp(P_(c), "g"));
	let m = [
		{
			regex: c ? p : null,
			replacement: ""
		},
		{
			regex: l ? new RegExp(P_(l), "g") : null,
			replacement: "."
		},
		{
			regex: /．/g,
			replacement: "."
		},
		{
			regex: /，/g,
			replacement: ""
		},
		{
			regex: /٫/g,
			replacement: "."
		},
		{
			regex: /٬/g,
			replacement: ""
		},
		{
			regex: u ? new RegExp(P_(u), "g") : null,
			replacement: ""
		},
		{
			regex: f,
			replacement: ""
		},
		{
			regex: b_,
			replacement: (e) => String(p_.indexOf(e))
		},
		{
			regex: x_,
			replacement: (e) => String(m_.indexOf(e))
		},
		{
			regex: S_,
			replacement: (e) => String(h_.indexOf(e))
		},
		{
			regex: C_,
			replacement: (e) => f_[e]
		}
	].reduce((e, { regex: t, replacement: n }) => t ? e.replace(t, n) : e, r), h = m.lastIndexOf(".");
	if (h !== -1 && (m = `${m.slice(0, h).replace(/\./g, "")}.${m.slice(h + 1).replace(/\./g, "")}`), /^[-+]?Infinity$/i.test(r) || /[∞]/.test(r)) return null;
	let g = (i ? "-" : "") + m, _ = parseFloat(g), v = n?.style, y = v === "unit" && n?.unit === "percent", b = w_.test(e) || v === "percent";
	return T_.test(e) ? _ /= 1e3 : !y && b && (_ /= 100), Number.isNaN(_) ? null : _;
}
//#endregion
//#region node_modules/@base-ui/react/esm/internals/clamp.js
function G_(e, t = -(2 ** 53 - 1), n = 2 ** 53 - 1) {
	return Math.max(t, Math.min(e, n));
}
//#endregion
//#region node_modules/@base-ui/react/esm/number-field/utils/validate.js
var K_ = 1e-10;
function q_(e) {
	let t = c_("en-US").resolvedOptions(), n = e?.minimumFractionDigits ?? t.minimumFractionDigits ?? 0;
	return {
		maximumFractionDigits: Math.max(e?.maximumFractionDigits ?? t.maximumFractionDigits ?? 20, n),
		minimumFractionDigits: n
	};
}
function J_(e, t) {
	if (!Number.isFinite(e)) return e;
	let n = Math.min(Math.max(t, 0), 20);
	return Number(e.toFixed(n));
}
function Y_(e, t) {
	let { maximumFractionDigits: n } = q_(t);
	return J_(e, n);
}
function X_(e, t, n, r = "directional") {
	if (n === 0) return e;
	let i = Math.abs(n), a = Math.sign(n), o = i * K_ * a, s = r === "nearest" ? n : i, c = (e - t + o) / s, l;
	return l = r === "nearest" ? Math.round(c) : a > 0 ? Math.floor(c) : Math.ceil(c), t + l * (r === "nearest" ? n : i);
}
function Z_(e, { step: t, minWithDefault: n, maxWithDefault: r, minWithZeroDefault: i, format: a, snapOnStep: o, small: s, clamp: c }) {
	if (e === null) return e;
	let l = c ? G_(e, n, r) : e;
	if (t != null && o) {
		if (t === 0) return Y_(l, a);
		let e = i;
		return !s && n !== -(2 ** 53 - 1) && (e = n), Y_(X_(l, e, t, s ? "nearest" : "directional"), a);
	}
	return Y_(l, a);
}
//#endregion
//#region node_modules/@base-ui/react/esm/internals/reason-parts.js
var Q_ = "none", $_ = "increment-press", ev = "decrement-press", tv = "input-change", nv = "input-clear", rv = "input-blur", iv = "input-paste", av = "keyboard";
//#endregion
//#region node_modules/@base-ui/react/esm/internals/createBaseUIEventDetails.js
function ov(e, t, n, r) {
	let i = !1, a = !1, o = r ?? ug;
	return {
		reason: e,
		event: t ?? new Event("base-ui"),
		cancel() {
			i = !0;
		},
		allowPropagation() {
			a = !0;
		},
		get isCanceled() {
			return i;
		},
		get isPropagationAllowed() {
			return a;
		},
		trigger: n,
		...o
	};
}
function sv(e, t, n) {
	let r = n ?? ug;
	return {
		reason: e,
		event: t ?? new Event("base-ui"),
		...r
	};
}
//#endregion
//#region node_modules/@base-ui/react/esm/number-field/root/NumberFieldRoot.js
var cv = /* @__PURE__ */ r.forwardRef(function(e, i) {
	let { id: a, min: o, max: s, smallStep: c = .1, step: l = 1, largeStep: u = 10, required: d = !1, disabled: f = !1, readOnly: p = !1, form: m, name: h, defaultValue: g, value: _, onValueChange: v, onValueCommitted: y, allowWheelScrub: b = !1, snapOnStep: x = !1, allowOutOfRange: S = !1, format: C, locale: w, render: T, className: E, inputRef: D, style: O, ...k } = e, { setDirty: A, validityData: j, disabled: M, setFilled: N, invalid: ee, name: te, state: P, validation: ne, shouldValidateOnChange: re } = vg(), ie = M || f, ae = te ?? h, F = l === "any" ? 1 : l, [I, oe] = r.useState(!1), se = o ?? -(2 ** 53 - 1), L = s ?? 2 ** 53 - 1, R = o ?? 0, ce = C?.style, le = r.useRef(null), ue = Fh(D, ne.inputRef), de = Eg({ id: a }), [fe, pe] = xh({
		controlled: _,
		default: g,
		name: "NumberField",
		state: "value"
	}), z = fe ?? null, me = Mh(z);
	jh(() => {
		N(z !== null);
	}, [N, z]);
	let he = Ph(), ge = Mh(C), _e = r.useRef(!1), ve = Oh((e, t) => {
		_e.current = !1, y?.(e, t);
	}), ye = r.useRef(!0), be = r.useRef(null), [xe, Se] = r.useState(() => _ === void 0 ? l_(z, w, C) : lv(z, w, C)), [Ce, we] = r.useState("numeric"), B = Oh(() => {
		let { decimal: e, group: t, currency: n, literal: r } = U_(w, C), i = /* @__PURE__ */ new Set();
		A_.forEach((e) => i.add(e)), e && i.add(e), t && (i.add(t), j_.test(t) && i.add(" "));
		let a = ce === "percent" || ce === "unit" && C?.unit === "percent", o = ce === "percent" || ce === "unit" && C?.unit === "permille";
		return a && g_.forEach((e) => i.add(e)), o && __.forEach((e) => i.add(e)), ce === "currency" && n && i.add(n), r && (Array.from(r).forEach((e) => i.add(e)), j_.test(r) && i.add(" ")), M_.forEach((e) => i.add(e)), se < 0 && N_.forEach((e) => i.add(e)), i;
	}), Te = Oh((e) => e?.altKey ? c : e?.shiftKey ? u : F), Ee = Oh((e, t) => {
		let n = t.event, r = t.direction, i = t.reason, a = !S || !(i === "input-change" || i === "input-blur" || i === "input-paste" || i === "input-clear" || i === "none"), o = Z_(e, {
			step: r ? Te(n) * r : void 0,
			format: ge.current,
			minWithDefault: se,
			maxWithDefault: L,
			minWithZeroDefault: R,
			snapOnStep: x,
			small: n?.altKey ?? !1,
			clamp: a
		}), s = t.reason === "input-change" || t.reason === "input-clear" || t.reason === "input-blur" || t.reason === "input-paste" || t.reason === "none", c = o !== z || s && (e !== z || ye.current === !1);
		if (c) {
			if (be.current = o, v?.(o, t), t.isCanceled) return c;
			pe(o), A(o !== j.initialValue), _e.current = !0;
		}
		return ye.current && Se(l_(o, w, C)), he(), c;
	}), De = Oh((e, { direction: t, currentValue: n, event: r, reason: i }) => {
		let a = n ?? me.current;
		return Ee(typeof a == "number" ? a + e * t : Math.max(0, o ?? 0), ov(i, r, void 0, { direction: t }));
	});
	jh(function() {
		if (!ye.current) return;
		let e = _ === void 0 ? l_(z, w, C) : lv(z, w, C);
		e !== xe && Se(e);
	}), jh(function() {
		if (!$h) return;
		let e = "text";
		se >= 0 && (e = "decimal"), we(e);
	}, [se, ce]), r.useEffect(function() {
		let e = le.current;
		if (ie || p || !b || !e) return;
		function t(e) {
			e.ctrlKey || rg(Jh(le.current)) !== le.current || (e.preventDefault(), ye.current = !0, De(Te(e) ?? 1, {
				direction: e.deltaY > 0 ? -1 : 1,
				event: e,
				reason: "wheel"
			}));
		}
		return vh(e, "wheel", t);
	}, [
		b,
		De,
		ie,
		p,
		Te
	]);
	let Oe = r.useMemo(() => ({
		...P,
		disabled: ie,
		readOnly: p,
		required: d,
		value: z,
		inputValue: xe,
		scrubbing: I
	}), [
		P,
		ie,
		p,
		d,
		z,
		xe,
		I
	]), ke = r.useMemo(() => ({
		inputRef: le,
		inputValue: xe,
		value: z,
		minWithDefault: se,
		maxWithDefault: L,
		disabled: ie,
		readOnly: p,
		id: de,
		setValue: Ee,
		incrementValue: De,
		getStepAmount: Te,
		allowInputSyncRef: ye,
		formatOptionsRef: ge,
		valueRef: me,
		lastChangedValueRef: be,
		hasPendingCommitRef: _e,
		name: ae,
		required: d,
		invalid: ee,
		inputMode: Ce,
		getAllowedNonNumericKeys: B,
		min: o,
		max: s,
		setInputValue: Se,
		locale: w,
		isScrubbing: I,
		setIsScrubbing: oe,
		state: Oe,
		onValueCommitted: ve
	}), [
		le,
		xe,
		z,
		se,
		L,
		ie,
		p,
		de,
		Ee,
		De,
		Te,
		ge,
		me,
		ae,
		d,
		ee,
		Ce,
		B,
		o,
		s,
		Se,
		w,
		I,
		Oe,
		ve
	]), Ae = Qg("div", e, {
		ref: i,
		state: Oe,
		props: k,
		stateAttributesMapping: Dg
	});
	return /* @__PURE__ */ n(sg.Provider, {
		value: ke,
		children: [Ae, /* @__PURE__ */ t("input", {
			...ne.getInputValidationProps({
				onFocus() {
					le.current?.focus();
				},
				onChange(e) {
					if (e.nativeEvent.defaultPrevented || ie || p) {
						e.preventBaseUIHandler?.();
						return;
					}
					let t = e.currentTarget.valueAsNumber, n = Number.isNaN(t) ? null : t, r = ov(Q_, e.nativeEvent);
					A(n !== j.initialValue), Ee(n, r), re() && ne.commit(n);
				}
			}),
			ref: ue,
			type: "number",
			form: m,
			name: ae,
			value: z ?? "",
			min: o,
			max: s,
			step: l,
			disabled: ie,
			required: d,
			"aria-hidden": !0,
			tabIndex: -1,
			style: ae ? Uh : Hh,
			suppressHydrationWarning: !0
		})]
	});
});
process.env.NODE_ENV !== "production" && (cv.displayName = "NumberFieldRoot");
function lv(e, t, n) {
	return n?.maximumFractionDigits != null || n?.minimumFractionDigits != null ? l_(e, t, n) : u_(e, t, n);
}
//#endregion
//#region node_modules/@base-ui/react/esm/internals/composite/root/CompositeRootContext.js
var uv = /* @__PURE__ */ r.createContext(void 0);
process.env.NODE_ENV !== "production" && (uv.displayName = "CompositeRootContext");
function dv(e = !1) {
	let t = r.useContext(uv);
	if (t === void 0 && !e) throw Error(process.env.NODE_ENV === "production" ? og(16) : "Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>.");
	return t;
}
//#endregion
//#region node_modules/@base-ui/react/esm/utils/useFocusableWhenDisabled.js
function fv(e) {
	let { focusableWhenDisabled: t, disabled: n, composite: i = !1, tabIndex: a = 0, isNativeButton: o } = e, s = i && t !== !1, c = i && t === !1;
	return { props: r.useMemo(() => {
		let e = { onKeyDown(e) {
			n && t && e.key !== "Tab" && e.preventDefault();
		} };
		return i || (e.tabIndex = a, !o && n && (e.tabIndex = t ? a : -1)), (o && (t || s) || !o && n) && (e["aria-disabled"] = n), o && (!t || c) && (e.disabled = n), e;
	}, [
		i,
		n,
		t,
		s,
		c,
		o,
		a
	]) };
}
//#endregion
//#region node_modules/@base-ui/react/esm/internals/use-button/useButton.js
function pv(e = {}) {
	let { disabled: t = !1, focusableWhenDisabled: n, tabIndex: i = 0, native: a = !0, composite: o } = e, s = r.useRef(null), c = dv(!0), l = o ?? c !== void 0, { props: u } = fv({
		focusableWhenDisabled: n,
		disabled: t,
		composite: l,
		tabIndex: i,
		isNativeButton: a
	});
	process.env.NODE_ENV !== "production" && r.useEffect(() => {
		if (!s.current) return;
		let e = mv(s.current);
		a ? e || bh(`A component that acts as a button expected a native <button> because the \`nativeButton\` prop is true. Rendering a non-<button> removes native button semantics, which can impact forms and accessibility. Use a real <button> in the \`render\` prop, or set \`nativeButton\` to \`false\`.${Ch.captureOwnerStack?.() || ""}`) : e && bh(`A component that acts as a button expected a non-<button> because the \`nativeButton\` prop is false. Rendering a <button> keeps native behavior while Base UI applies non-native attributes and handlers, which can add unintended extra attributes (such as \`role\` or \`aria-disabled\`). Use a non-<button> in the \`render\` prop, or set \`nativeButton\` to \`true\`.${Ch.captureOwnerStack?.() || ""}`);
	}, [a]);
	let d = r.useCallback(() => {
		let e = s.current;
		mv(e) && l && t && u.disabled === void 0 && e.disabled && (e.disabled = !1);
	}, [
		t,
		u.disabled,
		l
	]);
	return jh(d, [d]), {
		getButtonProps: r.useCallback((e = {}) => {
			let { onClick: n, onMouseDown: r, onKeyUp: i, onKeyDown: o, onPointerDown: s, ...c } = e;
			return Rg({
				onClick(e) {
					if (t) {
						e.preventDefault();
						return;
					}
					n?.(e);
				},
				onMouseDown(e) {
					t || r?.(e);
				},
				onKeyDown(e) {
					if (t || (Yg(e), o?.(e), e.baseUIHandlerPrevented)) return;
					let r = e.target === e.currentTarget, i = e.currentTarget, s = mv(i), c = !a && hv(i), u = r && (a ? s : !c), d = e.key === "Enter", f = e.key === " ", p = i.getAttribute("role"), m = p?.startsWith("menuitem") || p === "option" || p === "gridcell";
					if (r && l && f) {
						if (e.defaultPrevented && m) return;
						e.preventDefault(), c || a && s ? (i.click(), e.preventBaseUIHandler()) : u && (n?.(e), e.preventBaseUIHandler());
						return;
					}
					u && (!a && (f || d) && e.preventDefault(), !a && d && n?.(e));
				},
				onKeyUp(e) {
					if (!t) {
						if (Yg(e), i?.(e), e.target === e.currentTarget && a && l && mv(e.currentTarget) && e.key === " ") {
							e.preventDefault();
							return;
						}
						e.baseUIHandlerPrevented || e.target === e.currentTarget && !a && !l && e.key === " " && n?.(e);
					}
				},
				onPointerDown(e) {
					if (t) {
						e.preventDefault();
						return;
					}
					s?.(e);
				}
			}, a ? { type: "button" } : { role: "button" }, u, c);
		}, [
			t,
			u,
			l,
			a
		]),
		buttonRef: Oh((e) => {
			s.current = e, d();
		})
	};
}
function mv(e) {
	return qh(e) && e.tagName === "BUTTON";
}
function hv(e) {
	return !!(e?.tagName === "A" && e?.href);
}
//#endregion
//#region node_modules/@base-ui/utils/esm/useOnMount.js
var gv = [];
function _v(e) {
	r.useEffect(e, gv);
}
//#endregion
//#region node_modules/@base-ui/utils/esm/useTimeout.js
var vv = 0, yv = class e {
	static create() {
		return new e();
	}
	currentId = vv;
	start(e, t) {
		this.clear(), this.currentId = setTimeout(() => {
			this.currentId = vv, t();
		}, e);
	}
	isStarted() {
		return this.currentId !== vv;
	}
	clear = () => {
		this.currentId !== vv && (clearTimeout(this.currentId), this.currentId = vv);
	};
	disposeEffect = () => this.clear;
};
function bv() {
	let e = Th(yv.create).current;
	return _v(e.disposeEffect), e;
}
//#endregion
//#region node_modules/@base-ui/utils/esm/useInterval.js
var xv = 0, Sv = class e extends yv {
	static create() {
		return new e();
	}
	start(e, t) {
		this.clear(), this.currentId = setInterval(() => {
			t();
		}, e);
	}
	clear = () => {
		this.currentId !== xv && (clearInterval(this.currentId), this.currentId = xv);
	};
};
function Cv() {
	let e = Th(Sv.create).current;
	return _v(e.disposeEffect), e;
}
//#endregion
//#region node_modules/@base-ui/react/esm/internals/usePressAndHold.js
var wv = 60, Tv = 400, Ev = 8, Dv = 50, Ov = 3;
function kv(e) {
	return e === "touch" || e === "pen";
}
function Av(e) {
	let { disabled: t, readOnly: n = !1, tick: i, onStop: a, tickDelay: o = wv, startDelay: s = Tv, scrollDistance: c = Ev, elementRef: l } = e, u = bv(), d = Cv(), f = bv(), p = r.useRef(!1), m = r.useRef(0), h = r.useRef({
		x: 0,
		y: 0
	}), g = r.useRef(!1), _ = r.useRef(!1), v = r.useRef(""), y = r.useRef(() => {}), b = Oh(() => {
		f.clear(), u.clear(), d.clear(), y.current(), m.current = 0;
	});
	function x(e) {
		b();
		let t = l.current;
		if (!t) return;
		let n = Gh(t);
		function r(e) {
			e.preventDefault();
		}
		if (y.current = vh(n, "contextmenu", r), vh(n, "pointerup", (e) => {
			p.current = !1, b(), a?.(e);
		}, { once: !0 }), !i(e)) {
			b();
			return;
		}
		u.start(s, () => {
			d.start(o, () => {
				i(e) || b();
			});
		});
	}
	return r.useEffect(() => () => b(), [b]), {
		pointerHandlers: {
			onTouchStart() {
				g.current = !0;
			},
			onTouchEnd() {
				g.current = !1;
			},
			onPointerDown(e) {
				let r = !e.button || e.button === 0;
				e.defaultPrevented || !r || t || n || (v.current = e.pointerType, _.current = !1, p.current = !0, h.current = {
					x: e.clientX,
					y: e.clientY
				}, kv(e.pointerType) ? f.start(Dv, () => {
					let t = m.current;
					m.current = 0, p.current && t < Ov ? (x(e.nativeEvent), _.current = !0) : (_.current = !1, b());
				}) : (e.preventDefault(), x(e.nativeEvent)));
			},
			onPointerUp(e) {
				kv(e.pointerType) && (p.current = !1);
			},
			onPointerMove(e) {
				if (t || n || !kv(e.pointerType) || !p.current) return;
				m.current != null && (m.current += 1);
				let { x: r, y: i } = h.current, a = r - e.clientX, o = i - e.clientY;
				a ** 2 + o ** 2 > c ** 2 && b();
			},
			onMouseEnter(e) {
				e.defaultPrevented || t || n || !p.current || g.current || kv(v.current) || x(e.nativeEvent);
			},
			onMouseLeave() {
				g.current || b();
			},
			onMouseUp() {
				g.current || b();
			}
		},
		shouldSkipClick: Oh((e) => e.defaultPrevented ? !0 : kv(v.current) ? _.current : e.detail !== 0)
	};
}
//#endregion
//#region node_modules/@base-ui/react/esm/number-field/root/useNumberFieldButton.js
function jv(e) {
	return e === "touch" || e === "pen";
}
function Mv(e) {
	let { allowInputSyncRef: t, disabled: n, formatOptionsRef: r, getStepAmount: i, id: a, incrementValue: o, inputRef: s, inputValue: c, isIncrement: l, locale: u, readOnly: d, setValue: f, valueRef: p, lastChangedValueRef: m, onValueCommitted: h } = e, g = l ? $_ : ev;
	function _(e) {
		t.current = !0;
		let n = W_(c, u, r.current);
		n !== null && (p.current = n, f(n, ov(g, e, void 0, { direction: l ? 1 : -1 })));
	}
	let { pointerHandlers: v, shouldSkipClick: y } = Av({
		disabled: n || d,
		elementRef: s,
		tickDelay: 60,
		startDelay: 400,
		scrollDistance: 8,
		tick(e) {
			return o(i(e) ?? 1, {
				direction: l ? 1 : -1,
				event: e,
				reason: g
			});
		},
		onStop(e) {
			h(m.current ?? p.current, sv(g, e));
		}
	});
	return {
		disabled: n,
		"aria-readonly": d || void 0,
		"aria-label": l ? "Increase" : "Decrease",
		"aria-controls": a,
		tabIndex: -1,
		style: {
			WebkitUserSelect: "none",
			userSelect: "none"
		},
		...v,
		onClick(e) {
			let t = n || d;
			if (e.defaultPrevented || t || y(e)) return;
			_(e.nativeEvent);
			let r = i(e) ?? 1, a = p.current;
			o(r, {
				direction: l ? 1 : -1,
				event: e.nativeEvent,
				reason: g
			});
			let s = m.current ?? p.current;
			s !== a && h(s, sv(g, e.nativeEvent));
		},
		onPointerDown(e) {
			let t = !e.button || e.button === 0;
			e.defaultPrevented || d || !t || n || (_(e.nativeEvent), jv(e.pointerType) || s.current?.focus(), v.onPointerDown(e));
		}
	};
}
//#endregion
//#region node_modules/@base-ui/react/esm/number-field/increment/NumberFieldIncrement.js
var Nv = /* @__PURE__ */ r.forwardRef(function(e, t) {
	let { render: n, className: i, disabled: a = !1, nativeButton: o = !0, style: s, ...c } = e, { allowInputSyncRef: l, disabled: u, formatOptionsRef: d, getStepAmount: f, id: p, incrementValue: m, inputRef: h, inputValue: g, locale: _, maxWithDefault: v, readOnly: y, setValue: b, state: x, value: S, valueRef: C, lastChangedValueRef: w, onValueCommitted: T } = cg(), E = a || u || S != null && S >= v, D = Mv({
		isIncrement: !0,
		inputRef: h,
		inputValue: g,
		disabled: E,
		readOnly: y,
		id: p,
		setValue: b,
		getStepAmount: f,
		incrementValue: m,
		allowInputSyncRef: l,
		formatOptionsRef: d,
		valueRef: C,
		locale: _,
		lastChangedValueRef: w,
		onValueCommitted: T
	}), { getButtonProps: O, buttonRef: k } = pv({
		disabled: E,
		native: o,
		focusableWhenDisabled: !0
	}), A = r.useMemo(() => ({
		...x,
		disabled: E
	}), [x, E]);
	return Qg("button", e, {
		ref: [t, k],
		state: A,
		props: [
			D,
			c,
			O
		],
		stateAttributesMapping: Dg
	});
});
process.env.NODE_ENV !== "production" && (Nv.displayName = "NumberFieldIncrement");
//#endregion
//#region node_modules/@base-ui/react/esm/number-field/decrement/NumberFieldDecrement.js
var Pv = /* @__PURE__ */ r.forwardRef(function(e, t) {
	let { render: n, className: i, disabled: a = !1, nativeButton: o = !0, style: s, ...c } = e, { allowInputSyncRef: l, disabled: u, formatOptionsRef: d, getStepAmount: f, id: p, incrementValue: m, inputRef: h, inputValue: g, minWithDefault: _, readOnly: v, setValue: y, state: b, value: x, valueRef: S, locale: C, lastChangedValueRef: w, onValueCommitted: T } = cg(), E = a || u || x != null && x <= _, D = Mv({
		isIncrement: !1,
		inputRef: h,
		inputValue: g,
		disabled: E,
		readOnly: v,
		id: p,
		setValue: y,
		getStepAmount: f,
		incrementValue: m,
		allowInputSyncRef: l,
		formatOptionsRef: d,
		valueRef: S,
		locale: C,
		lastChangedValueRef: w,
		onValueCommitted: T
	}), { getButtonProps: O, buttonRef: k } = pv({
		disabled: E,
		native: o,
		focusableWhenDisabled: !0
	}), A = r.useMemo(() => ({
		...b,
		disabled: E
	}), [b, E]);
	return Qg("button", e, {
		ref: [t, k],
		state: A,
		props: [
			D,
			c,
			O
		],
		stateAttributesMapping: Dg
	});
});
process.env.NODE_ENV !== "production" && (Pv.displayName = "NumberFieldDecrement");
//#endregion
//#region node_modules/@base-ui/react/esm/internals/field-register-control/useRegisterFieldControl.js
function Fv(e, t, n, i, a = !0) {
	let { registerFieldControl: o } = vg(), s = r.useRef(null);
	s.current ||= Symbol(), jh(() => {
		let r = s.current;
		if (!(!r || !a)) return o(r, {
			controlRef: e,
			getValue: i,
			id: t,
			value: n
		}), () => {
			o(r, void 0);
		};
	}, [
		e,
		a,
		i,
		t,
		o,
		n
	]);
}
//#endregion
//#region node_modules/@base-ui/react/esm/internals/form-context/FormContext.js
var Iv = /* @__PURE__ */ r.createContext({
	formRef: { current: { fields: /* @__PURE__ */ new Map() } },
	errors: {},
	clearErrors: lg,
	validationMode: "onSubmit",
	submitAttemptedRef: { current: !1 }
});
process.env.NODE_ENV !== "production" && (Iv.displayName = "FormContext");
function Lv() {
	return r.useContext(Iv);
}
//#endregion
//#region node_modules/@base-ui/react/esm/internals/useValueChanged.js
function Rv(e, t) {
	let n = r.useRef(e), i = Oh(t);
	jh(() => {
		n.current !== e && i(n.current);
	}, [e, i]), jh(() => {
		n.current = e;
	}, [e]);
}
//#endregion
//#region node_modules/@base-ui/react/esm/number-field/input/NumberFieldInput.js
var zv = {
	...hg,
	...Dg
}, Bv = new Set([
	"Backspace",
	"Delete",
	"ArrowLeft",
	"ArrowRight",
	"Tab",
	"Enter",
	"Escape"
]), Vv = /* @__PURE__ */ r.forwardRef(function(e, t) {
	let { render: n, className: i, style: a, ...o } = e, { allowInputSyncRef: s, disabled: c, formatOptionsRef: l, getAllowedNonNumericKeys: u, getStepAmount: d, id: f, incrementValue: p, inputMode: m, inputValue: h, max: g, min: _, name: v, readOnly: y, required: b, setValue: x, state: S, setInputValue: C, locale: w, inputRef: T, value: E, onValueCommitted: D, lastChangedValueRef: O, hasPendingCommitRef: k, valueRef: A } = cg(), { clearErrors: j } = Lv(), { validationMode: M, setTouched: N, setFocused: ee, invalid: te, shouldValidateOnChange: P, validation: ne } = vg(), { labelId: re } = Tg(), ie = r.useRef(!1), ae = r.useRef(!1);
	return Fv(T, f, E), Rv(E, (e) => {
		let t = P();
		if (j(v), t && ne.commit(E), !(e === E || t)) {
			if (ae.current) {
				ae.current = !1;
				return;
			}
			ne.commit(E, !0);
		}
	}), Qg("input", e, {
		ref: [t, T],
		state: S,
		props: [
			{
				id: f,
				required: b,
				disabled: c,
				readOnly: y,
				inputMode: m,
				value: h,
				type: "text",
				autoComplete: "off",
				autoCorrect: "off",
				spellCheck: "false",
				"aria-roledescription": "Number field",
				"aria-invalid": te || void 0,
				"aria-labelledby": re,
				suppressHydrationWarning: !0,
				onFocus(e) {
					if (e.defaultPrevented || y || c || (ee(!0), ie.current)) return;
					ie.current = !0;
					let t = e.currentTarget, n = t.value.length;
					t.setSelectionRange(n, n);
				},
				onBlur(e) {
					if (e.defaultPrevented || y || c) return;
					N(!0), ee(!1);
					let t = !s.current, n = k.current;
					if (s.current = !0, h.trim() === "") {
						x(null, ov(nv, e.nativeEvent)), M === "onBlur" && ne.commit(null), D(null, sv(nv, e.nativeEvent));
						return;
					}
					let r = l.current, i = W_(h, w, r);
					if (i === null) return;
					let a = r?.maximumFractionDigits != null || r?.minimumFractionDigits != null, o = r?.maximumFractionDigits, u = a && typeof o == "number" ? Number(i.toFixed(o)) : i, d = sv(rv, e.nativeEvent), f = E !== u, p = t || f || n;
					M === "onBlur" && ne.commit(u), f && (ae.current = !0, x(u, ov(rv, e.nativeEvent))), p && D(u, d);
					let m = l_(u, w, r);
					!(!a && i === E && h === u_(i, w, r)) && h !== m && C(m);
				},
				onChange(e) {
					if (e.nativeEvent.defaultPrevented) return;
					s.current = !1;
					let t = e.currentTarget.value;
					if (t.trim() === "") {
						C(t), x(null, ov(nv, e.nativeEvent));
						return;
					}
					let n = u();
					if (!Array.from(t).every((e) => {
						let t = e >= "0" && e <= "9", r = E_.test(e), i = O_.test(e), a = D_.test(e), o = k_.test(e), s = V_.test(e);
						return t || r || i || a || o || s || n.has(e);
					})) return;
					let r = W_(t, w, l.current);
					C(t), r !== null && x(r, ov(tv, e.nativeEvent));
				},
				onKeyDown(e) {
					if (e.defaultPrevented || y || c) return;
					let t = e.nativeEvent;
					s.current = !0;
					let n = u(), r = n.has(e.key), { decimal: i, currency: a, percentSign: o } = U_(w, l.current), f = e.currentTarget.selectionStart, m = e.currentTarget.selectionEnd, v = f === 0 && m === h.length, b = (e) => f != null && m != null && e >= f && e < m;
					if (V_.test(e.key) && Array.from(n).some((e) => V_.test(e || ""))) {
						let e = h.search(z_), t = e != null && e !== -1 && b(e);
						r = !(V_.test(h) || H_.test(h)) || v || t;
					}
					if (H_.test(e.key) && Array.from(n).some((e) => H_.test(e || ""))) {
						let e = h.search(B_), t = e != null && e !== -1 && b(e);
						r = !(V_.test(h) || H_.test(h)) || v || t;
					}
					[
						i,
						a,
						o
					].forEach((t) => {
						if (e.key === t) {
							let e = b(h.indexOf(t));
							r = !h.includes(t) || v || e;
						}
					});
					let S = e.key >= "0" && e.key <= "9", C = E_.test(e.key), T = O_.test(e.key), E = D_.test(e.key), k = k_.test(e.key), j = Bv.has(e.key);
					if (e.which === 229 || e.altKey || e.ctrlKey || e.metaKey || r || S || C || k || T || E || j) return;
					let M = W_(h, w, l.current), N = d(e) ?? 1;
					ig(e);
					let ee = sv(av, t);
					e.key === "ArrowUp" ? (p(N, {
						direction: 1,
						currentValue: M,
						event: t,
						reason: av
					}), D(O.current ?? A.current, ee)) : e.key === "ArrowDown" ? (p(N, {
						direction: -1,
						currentValue: M,
						event: t,
						reason: av
					}), D(O.current ?? A.current, ee)) : e.key === "Home" && _ != null ? (x(_, ov(av, t)), D(O.current ?? A.current, ee)) : e.key === "End" && g != null && (x(g, ov(av, t)), D(O.current ?? A.current, ee));
				},
				onPaste(e) {
					if (e.defaultPrevented || y || c) return;
					e.preventDefault();
					let t = (e.clipboardData || window.Clipboard).getData("text/plain"), n = W_(t, w, l.current);
					n !== null && (s.current = !1, x(n, ov(iv, e.nativeEvent)), C(t));
				}
			},
			ne.getValidationProps(),
			o
		],
		stateAttributesMapping: zv
	});
});
process.env.NODE_ENV !== "production" && (Vv.displayName = "NumberFieldInput");
//#endregion
//#region node_modules/@mui/icons-material/KeyboardArrowUp.mjs
var Hv = rd(/* @__PURE__ */ t("path", { d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z" }), "KeyboardArrowUp"), Uv = rd(/* @__PURE__ */ t("path", { d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" }), "KeyboardArrowDown");
//#endregion
//#region src/components/commons/CustomNumberField.tsx
function Wv(e) {
	return null;
}
Wv.muiName = "Input";
function Gv({ id: e, label: i, error: a, size: o = "medium", ...s }) {
	let c = r.useId();
	return e && (c = e), /* @__PURE__ */ n(cv, {
		...s,
		render: (e, n) => /* @__PURE__ */ t(mm, {
			size: o,
			ref: e.ref,
			disabled: n.disabled,
			required: n.required,
			error: a,
			variant: "outlined",
			children: e.children
		}),
		children: [
			/* @__PURE__ */ t(Wv, { ...s }),
			/* @__PURE__ */ t(Fm, {
				htmlFor: c,
				children: i
			}),
			/* @__PURE__ */ t(Vv, {
				id: c,
				render: (e, r) => /* @__PURE__ */ t(ah, {
					label: i,
					inputRef: e.ref,
					value: r.inputValue,
					onBlur: e.onBlur,
					onChange: e.onChange,
					onKeyUp: e.onKeyUp,
					onKeyDown: e.onKeyDown,
					onFocus: e.onFocus,
					slotProps: { input: e },
					endAdornment: /* @__PURE__ */ n(Mm, {
						position: "end",
						sx: {
							flexDirection: "column",
							maxHeight: "unset",
							alignSelf: "stretch",
							borderLeft: "1px solid",
							borderColor: "divider",
							ml: 0,
							"& button": {
								py: 0,
								flex: 1,
								borderRadius: .5
							}
						},
						children: [/* @__PURE__ */ t(Nv, {
							render: /* @__PURE__ */ t(up, {
								size: o,
								"aria-label": "Increase"
							}),
							children: /* @__PURE__ */ t(Hv, {
								fontSize: o,
								sx: { transform: "translateY(2px)" }
							})
						}), /* @__PURE__ */ t(Pv, {
							render: /* @__PURE__ */ t(up, {
								size: o,
								"aria-label": "Decrease"
							}),
							children: /* @__PURE__ */ t(Uv, {
								fontSize: o,
								sx: { transform: "translateY(-2px)" }
							})
						})]
					}),
					sx: {
						pr: 0,
						"&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "var(--color-primary)" }
					}
				})
			})
		]
	});
}
//#endregion
//#region src/components/commons/CustomRadio.tsx
function Kv({ label: e, id: r, name: i, itemValue: a, selectedValue: o, updateSelectedValue: s }) {
	let c = a === o;
	return /* @__PURE__ */ n("button", {
		type: "button",
		className: W("flex w-full cursor-pointer items-center rounded-lg border-2 px-6 py-3", c ? "bg-primary-container border-on-primary-container" : "bg-surface-container-highest border-outline"),
		onClick: () => s(a),
		children: [/* @__PURE__ */ t("input", {
			type: "radio",
			id: r,
			name: i,
			value: a,
			className: W("size-2 cursor-pointer appearance-none rounded-full outline-2 outline-offset-2", c ? "bg-on-primary-container outline-on-primary-container" : "bg-surface-container-highest outline-outline"),
			required: !0
		}), /* @__PURE__ */ t("label", {
			className: W("ml-4 cursor-pointer text-start text-[16px] font-medium", c ? "text-on-primary-container" : "text-on-surface-variant"),
			children: e
		})]
	});
}
//#endregion
//#region src/components/commons/CustomTabPanel.tsx
function qv({ children: e, index: n, value: r }) {
	return /* @__PURE__ */ t(a, {
		mode: r === n ? "visible" : "hidden",
		children: e
	});
}
//#endregion
//#region src/components/commons/EmailTextField.tsx
function Jv({ label: e, required: r, email: i, updateEmail: a, emailHasError: o }) {
	let s = m(null), c = i.trim() !== "" && o;
	return f(() => {
		s.current && a(s.current.value.trim());
	}, [a]), /* @__PURE__ */ n("div", { children: [
		/* @__PURE__ */ n("div", {
			className: "mb-1 text-[16px] font-medium",
			children: [/* @__PURE__ */ t("span", {
				className: "text-on-surface",
				children: e
			}), r && /* @__PURE__ */ t("span", {
				className: "text-error",
				children: "*"
			})]
		}),
		/* @__PURE__ */ n("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ t("input", {
					ref: s,
					type: "email",
					id: "email",
					name: "email",
					placeholder: "john.doe@example.com",
					className: "bg-surface-container-highest border-outline text-on-surface focus:border-primary placeholder:text-outline h-14 w-full rounded-lg border-2 px-12 text-[16px] outline-none placeholder:text-[16px]",
					required: !0,
					maxLength: 140,
					value: i,
					onChange: (e) => a(e.target.value.trim())
				}),
				/* @__PURE__ */ t("div", {
					className: "absolute top-4 left-4",
					children: /* @__PURE__ */ t(cr, {
						iconify: "ri:mail-line",
						size: 24,
						color: "var(--color-on-surface-variant)"
					})
				}),
				/* @__PURE__ */ t("button", {
					type: "button",
					className: "absolute top-4 right-4 cursor-pointer",
					onClick: () => a(""),
					children: /* @__PURE__ */ t(cr, {
						iconify: "ri:close-circle-line",
						size: 24,
						color: "var(--color-on-surface-variant)"
					})
				})
			]
		}),
		/* @__PURE__ */ t("div", {
			className: "flex h-6 items-center",
			children: c && /* @__PURE__ */ t("div", {
				className: "text-error px-4 text-[12px]",
				children: "Please enter a valid email address."
			})
		})
	] });
}
//#endregion
//#region src/components/commons/FormDialogTitle.tsx
function Yv({ label: e }) {
	return /* @__PURE__ */ t("div", {
		className: "text-on-surface-variant text-[22px]",
		children: e
	});
}
//#endregion
//#region src/components/commons/GeneralTextArea.tsx
function Xv({ label: e, placeholder: r, required: i, height: a, text: o, updateText: s }) {
	return /* @__PURE__ */ n("div", { children: [/* @__PURE__ */ n("div", {
		className: "mb-1 text-[16px] font-medium",
		children: [/* @__PURE__ */ t("span", {
			className: "text-on-surface",
			children: e
		}), i && /* @__PURE__ */ t("span", {
			className: "text-error",
			children: "*"
		})]
	}), /* @__PURE__ */ n("div", {
		className: "relative",
		children: [/* @__PURE__ */ t("textarea", {
			id: "text",
			name: "text",
			placeholder: r,
			className: "bg-surface-container-highest border-outline text-on-surface focus:border-primary placeholder:text-outline w-full rounded-lg border-2 py-3 pr-12 pl-4 text-[16px] outline-none placeholder:text-[16px]",
			style: {
				height: a,
				resize: "none"
			},
			required: !0,
			value: o,
			onChange: (e) => s(e.target.value)
		}), /* @__PURE__ */ t("button", {
			type: "button",
			onClick: () => s(""),
			className: "absolute top-4 right-4 cursor-pointer",
			children: /* @__PURE__ */ t(cr, {
				iconify: "ri:close-circle-line",
				size: 24,
				color: "var(--color-on-surface-variant)"
			})
		})]
	})] });
}
//#endregion
//#region src/components/commons/GeneralTextField.tsx
function Zv({ label: e, required: r, placeholder: i, text: a, updateText: o }) {
	return /* @__PURE__ */ n("div", { children: [/* @__PURE__ */ n("div", {
		className: "mb-1 text-[16px] font-medium",
		children: [/* @__PURE__ */ t("span", {
			className: "text-on-surface",
			children: e
		}), r && /* @__PURE__ */ t("span", {
			className: "text-error",
			children: "*"
		})]
	}), /* @__PURE__ */ n("div", {
		className: "relative",
		children: [/* @__PURE__ */ t("input", {
			type: "text",
			id: "text",
			name: "text",
			placeholder: i,
			className: "bg-surface-container-highest border-outline text-on-surface focus:border-primary placeholder:text-outline h-14 w-full rounded-lg border-2 pr-12 pl-4 text-[16px] outline-none placeholder:text-[16px]",
			required: !0,
			value: a,
			onChange: (e) => o(e.target.value)
		}), /* @__PURE__ */ t("button", {
			type: "button",
			onClick: () => o(""),
			className: "absolute top-4 right-4 cursor-pointer",
			children: /* @__PURE__ */ t(cr, {
				iconify: "ri:close-circle-line",
				size: 24,
				color: "var(--color-on-surface-variant)"
			})
		})]
	})] });
}
//#endregion
//#region node_modules/zustand/esm/vanilla.mjs
var Qv = (e) => {
	let t, n = /* @__PURE__ */ new Set(), r = (e, r) => {
		let i = typeof e == "function" ? e(t) : e;
		if (!Object.is(i, t)) {
			let e = t;
			t = r ?? (typeof i != "object" || !i) ? i : Object.assign({}, t, i), n.forEach((n) => n(t, e));
		}
	}, i = () => t, a = {
		setState: r,
		getState: i,
		getInitialState: () => o,
		subscribe: (e) => (n.add(e), () => n.delete(e))
	}, o = t = e(r, i, a);
	return a;
}, $v = ((e) => e ? Qv(e) : Qv), ey = (e) => e;
function ty(e, t = ey) {
	let n = i.useSyncExternalStore(e.subscribe, i.useCallback(() => t(e.getState()), [e, t]), i.useCallback(() => t(e.getInitialState()), [e, t]));
	return i.useDebugValue(n), n;
}
var ny = (e) => {
	let t = $v(e), n = (e) => ty(t, e);
	return Object.assign(n, t), n;
}, ry = ((e) => e ? ny(e) : ny), iy = ry((e) => ({
	isLoading: !1,
	turnOn: () => e(() => ({ isLoading: !0 })),
	turnOff: () => e(() => ({ isLoading: !1 }))
})), ay = ry((e) => ({
	open: !1,
	message: "",
	showSnackbar: (t) => e({
		open: !0,
		message: t
	}),
	close: () => e({ open: !1 })
})), oy = ry((e) => ({
	isOpen: !1,
	turnOn: () => e(() => ({ isOpen: !0 })),
	turnOff: () => e(() => ({ isOpen: !1 }))
}));
//#endregion
//#region src/components/commons/GlobalSnackbar.tsx
function sy() {
	let { open: e, message: n, close: r } = ay();
	return /* @__PURE__ */ t(gh, {
		open: e,
		autoHideDuration: 3e3,
		onClose: () => r(),
		anchorOrigin: {
			vertical: "top",
			horizontal: "right"
		},
		message: n
	});
}
//#endregion
//#region src/components/commons/Hr.tsx
function cy() {
	return /* @__PURE__ */ t("hr", { className: "bg-outline-variant h-px border-none" });
}
//#endregion
//#region src/components/commons/InfoEmpty.tsx
function ly() {
	return /* @__PURE__ */ n("div", {
		className: "bg-surface-container flex h-20 w-full items-center justify-center gap-x-4 rounded-b-lg",
		children: [/* @__PURE__ */ t(cr, {
			iconify: "streamline-freehand:app-window-search-text",
			size: 40,
			color: "var(--color-outline-variant)"
		}), /* @__PURE__ */ t("div", {
			className: "text-outline-variant text-[16px]",
			children: "Not found at the moment"
		})]
	});
}
//#endregion
//#region src/components/commons/InfoHr.tsx
function uy() {
	return /* @__PURE__ */ t("div", {
		className: "bg-surface-container px-8",
		children: /* @__PURE__ */ t(cy, {})
	});
}
//#endregion
//#region src/components/commons/LinearProgressIndicator.tsx
function dy() {
	return /* @__PURE__ */ t("div", {
		className: "fixed top-0 -right-1 -left-1 z-10",
		children: /* @__PURE__ */ t(Xm, { sx: {
			height: 4,
			backgroundColor: "#d4e4f6",
			"& .MuiLinearProgress-bar": { backgroundColor: "#2b638b" }
		} })
	});
}
//#endregion
//#region src/components/commons/OnlyBadge.tsx
function fy({ label: e }) {
	return /* @__PURE__ */ t("div", {
		className: "bg-primary-container border-primary-fixed-dim text-on-primary-container rounded-full border px-3 py-1 text-[14px] font-medium",
		children: e
	});
}
//#endregion
//#region src/components/commons/PasswordTextField.tsx
function py({ label: e, required: r, password: i, updatePassword: a, passwordHasError: o }) {
	let s = m(null), [c, l] = h(!1), u = i !== "" && o;
	return f(() => {
		s.current && a(s.current.value);
	}, [a]), /* @__PURE__ */ n("div", { children: [
		/* @__PURE__ */ n("div", {
			className: "mb-1 text-[16px] font-medium",
			children: [/* @__PURE__ */ t("span", {
				className: "text-on-surface",
				children: e
			}), r && /* @__PURE__ */ t("span", {
				className: "text-error",
				children: "*"
			})]
		}),
		/* @__PURE__ */ n("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ t("input", {
					ref: s,
					type: c ? "text" : "password",
					id: "password",
					name: "password",
					placeholder: "y0ur_p@$$w0rd_h3r3",
					className: "bg-surface-container-highest border-outline text-on-surface focus:border-primary placeholder:text-outline h-14 w-full rounded-lg border-2 px-12 text-[16px] outline-none placeholder:text-[16px]",
					required: !0,
					maxLength: 140,
					value: i,
					onChange: (e) => a(e.target.value)
				}),
				/* @__PURE__ */ t("button", {
					type: "button",
					onClick: () => l(!c),
					className: "absolute top-4 left-4 cursor-pointer",
					children: /* @__PURE__ */ t(cr, {
						iconify: c ? "ri:eye-line" : "ri:eye-off-line",
						size: 24,
						color: "var(--color-on-surface-variant)"
					})
				}),
				/* @__PURE__ */ t("button", {
					type: "button",
					onClick: () => a(""),
					className: "absolute top-4 right-4 cursor-pointer",
					children: /* @__PURE__ */ t(cr, {
						iconify: "ri:close-circle-line",
						size: 24,
						color: "var(--color-on-surface-variant)"
					})
				})
			]
		}),
		/* @__PURE__ */ t("div", {
			className: "flex h-10 items-center",
			children: u && /* @__PURE__ */ t("div", {
				className: "text-error px-4 text-[12px]",
				children: "Password must be at least 10 characters long include uppercase lowercase and number."
			})
		})
	] });
}
//#endregion
//#region src/components/commons/ProficiencyScaleBadge.tsx
function my(e) {
	switch (e) {
		case "019b8396-c5f5-7138-beea-0a4f561c4ad2": return "border-yellow-300";
		case "019b8396-c5f8-7f3d-9475-ec4f15677fa3": return "border-lime-300";
		case "019b8396-c5f9-7030-a77c-72dca3920ac1": return "border-green-300";
		case "019b8396-c5f9-7097-a068-4313d2ba30f5": return "border-emerald-300";
		case "019b8396-c5f9-70f7-9155-82e4ad066468": return "border-teal-300";
		case "019b8396-c5f9-714d-8882-88b82426e010": return "border-cyan-300";
		case "019b8396-c5f9-71ac-bfdd-64bdf8156a7a": return "border-sky-300";
		case "019b8396-c5f9-720a-98ba-57c1c59956c3": return "border-blue-300";
		case "019b8396-c5f9-7262-a8d0-543a69ea2067": return "border-indigo-300";
		case "019b8396-c5f9-72c2-bda8-41a1c312351c": return "border-violet-300";
		default: return "border-red-300";
	}
}
function hy(e) {
	switch (e) {
		case "019b8396-c5f5-7138-beea-0a4f561c4ad2": return "bg-yellow-100";
		case "019b8396-c5f8-7f3d-9475-ec4f15677fa3": return "bg-lime-100";
		case "019b8396-c5f9-7030-a77c-72dca3920ac1": return "bg-green-100";
		case "019b8396-c5f9-7097-a068-4313d2ba30f5": return "bg-emerald-100";
		case "019b8396-c5f9-70f7-9155-82e4ad066468": return "bg-teal-100";
		case "019b8396-c5f9-714d-8882-88b82426e010": return "bg-cyan-100";
		case "019b8396-c5f9-71ac-bfdd-64bdf8156a7a": return "bg-sky-100";
		case "019b8396-c5f9-720a-98ba-57c1c59956c3": return "bg-blue-100";
		case "019b8396-c5f9-7262-a8d0-543a69ea2067": return "bg-indigo-100";
		case "019b8396-c5f9-72c2-bda8-41a1c312351c": return "bg-violet-100";
		default: return "bg-red-100";
	}
}
function gy(e) {
	switch (e) {
		case "019b8396-c5f5-7138-beea-0a4f561c4ad2": return "text-yellow-700";
		case "019b8396-c5f8-7f3d-9475-ec4f15677fa3": return "text-lime-700";
		case "019b8396-c5f9-7030-a77c-72dca3920ac1": return "text-green-700";
		case "019b8396-c5f9-7097-a068-4313d2ba30f5": return "text-emerald-700";
		case "019b8396-c5f9-70f7-9155-82e4ad066468": return "text-teal-700";
		case "019b8396-c5f9-714d-8882-88b82426e010": return "text-cyan-700";
		case "019b8396-c5f9-71ac-bfdd-64bdf8156a7a": return "text-sky-700";
		case "019b8396-c5f9-720a-98ba-57c1c59956c3": return "text-blue-700";
		case "019b8396-c5f9-7262-a8d0-543a69ea2067": return "text-indigo-700";
		case "019b8396-c5f9-72c2-bda8-41a1c312351c": return "text-violet-700";
		default: return "text-red-700";
	}
}
function _y({ proficiencyScaleUuid: e }) {
	return /* @__PURE__ */ t("div", {
		className: W("rounded-full border px-3 py-1 text-[14px] font-medium", my(e), hy(e), gy(e)),
		children: Hr.find((t) => t.value === e)?.label ?? "Error!"
	});
}
//#endregion
//#region src/components/commons/ReadonlyTextField.tsx
function vy({ label: e, placeholder: r, text: i }) {
	return /* @__PURE__ */ n("div", { children: [/* @__PURE__ */ t("div", {
		className: "text-on-surface mb-1 text-[16px] font-medium",
		children: e
	}), /* @__PURE__ */ t("input", {
		type: "text",
		id: "text",
		name: "text",
		placeholder: r,
		readOnly: !0,
		disabled: !0,
		className: "bg-surface-container-highest border-outline text-outline focus:border-primary placeholder:text-outline h-14 w-full rounded-lg border-2 pr-12 pl-4 text-[16px] outline-none placeholder:text-[16px]",
		value: i
	})] });
}
//#endregion
//#region src/components/commons/SubtitleText.tsx
function yy({ label: e }) {
	return /* @__PURE__ */ t("div", {
		className: "text-on-surface-variant text-[16px]",
		children: e
	});
}
//#endregion
//#region src/components/commons/TitleText.tsx
function by({ label: e }) {
	return /* @__PURE__ */ t("div", {
		className: "text-on-surface text-[24px]",
		children: e
	});
}
//#endregion
//#region src/components/commons/VerificationTextField.tsx
function xy({ label: e, reference: r, required: i, verification: a, updateVerification: o }) {
	return /* @__PURE__ */ n("div", { children: [
		/* @__PURE__ */ n("div", {
			className: "mb-1 text-[16px] font-medium",
			children: [/* @__PURE__ */ t("span", {
				className: "text-on-surface",
				children: e
			}), i && /* @__PURE__ */ t("span", {
				className: "text-error",
				children: "*"
			})]
		}),
		/* @__PURE__ */ n("div", {
			className: "relative",
			children: [/* @__PURE__ */ t("input", {
				type: "text",
				id: "verification",
				name: "verification",
				placeholder: "1234567",
				className: "bg-surface-container-highest border-outline text-on-surface focus:border-primary placeholder:text-outline h-14 w-full rounded-lg border-2 pr-12 pl-4 text-[16px] outline-none placeholder:text-[16px]",
				required: !0,
				maxLength: 8,
				value: a,
				onChange: (e) => o(e.target.value.trim())
			}), /* @__PURE__ */ t("button", {
				type: "button",
				className: "absolute top-4 right-4 cursor-pointer",
				onClick: () => o(""),
				children: /* @__PURE__ */ t(cr, {
					iconify: "ri:close-circle-line",
					size: 24,
					color: "var(--color-on-surface-variant)"
				})
			})]
		}),
		/* @__PURE__ */ n("div", {
			className: "text-on-surface-variant flex h-6 items-center text-[12px]",
			children: [/* @__PURE__ */ t("div", {
				className: "pl-4",
				children: "Reference:"
			}), /* @__PURE__ */ t("div", {
				className: "pl-1 font-medium",
				children: r
			})]
		})
	] });
}
//#endregion
//#region src/components/layouts/AuthFooter.tsx
function Sy() {
	return /* @__PURE__ */ t("footer", {
		className: "bg-primary-container text-2xlxl flex h-70 items-center justify-center",
		children: "AuthFooter"
	});
}
//#endregion
//#region src/components/layouts/AuthLayout.tsx
function Cy({ children: r }) {
	return /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ t("div", {
		className: "flex justify-center px-4 pt-16",
		children: /* @__PURE__ */ t("div", {
			className: "w-full max-w-160",
			children: r
		})
	}), /* @__PURE__ */ t(Sy, {})] });
}
//#endregion
//#region src/components/layouts/FormDialogLayout.tsx
function wy({ children: e }) {
	return /* @__PURE__ */ t("div", {
		className: "flex justify-center overflow-y-scroll px-4 pt-16",
		children: /* @__PURE__ */ t("div", {
			className: "w-full max-w-160",
			children: e
		})
	});
}
//#endregion
//#region src/enumerations/index.ts
var Ty = {
	CREATED_AT_ASC: "created_at_asc",
	CREATED_AT_DESC: "created_at_desc",
	UPDATED_AT_ASC: "updated_at_asc",
	UPDATED_AT_DESC: "updated_at_desc",
	RATING_ASC: "rating_asc",
	RATING_DESC: "rating_desc"
}, Ey = {
	APPLIED: "019d3f3c-d4ad-723b-88ce-05801ecae82d",
	SHORTLISTED: "019d3f3c-d4ae-79f3-8091-250ad00077a5",
	REJECTED: "019d3f3c-d4ae-7af5-bc71-ffe88e0d4167",
	INTERVIEWED: "019d4d77-8001-740c-837e-47cb6b79537c",
	OFFERED: "019d4d77-8004-777e-a9d3-9011c67e6509",
	HIRED: "019d51f2-3e56-72f7-b4bd-f68aa366f175"
}, Dy = {
	DENSE: "dense",
	COMPACT: "compact",
	EXPANDED: "expanded"
};
//#endregion
//#region src/hooks/customs.ts
function Oy() {
	let [e, t] = h(null), n = p(), r = !!e, i = r ? n : void 0;
	function a(e) {
		t(e.currentTarget);
	}
	function o() {
		t(null);
	}
	return {
		anchorEl: e,
		open: r,
		id: i,
		handleOpen: a,
		handleClose: o
	};
}
function ky() {
	let [e, t] = h(!1);
	function n() {
		t(!0);
	}
	function r() {
		t(!1);
	}
	return {
		openState: e,
		OpenDialog: n,
		CloseDialog: r
	};
}
//#endregion
//#region node_modules/uuid/dist/stringify.js
var Ay = [];
for (let e = 0; e < 256; ++e) Ay.push((e + 256).toString(16).slice(1));
function jy(e, t = 0) {
	return (Ay[e[t + 0]] + Ay[e[t + 1]] + Ay[e[t + 2]] + Ay[e[t + 3]] + "-" + Ay[e[t + 4]] + Ay[e[t + 5]] + "-" + Ay[e[t + 6]] + Ay[e[t + 7]] + "-" + Ay[e[t + 8]] + Ay[e[t + 9]] + "-" + Ay[e[t + 10]] + Ay[e[t + 11]] + Ay[e[t + 12]] + Ay[e[t + 13]] + Ay[e[t + 14]] + Ay[e[t + 15]]).toLowerCase();
}
//#endregion
//#region node_modules/uuid/dist/rng.js
var My = new Uint8Array(16);
function Ny() {
	return crypto.getRandomValues(My);
}
//#endregion
//#region node_modules/uuid/dist/v4.js
function Py(e, t, n) {
	return !t && !e && crypto.randomUUID ? crypto.randomUUID() : Fy(e, t, n);
}
function Fy(e, t, n) {
	e ||= {};
	let r = e.random ?? e.rng?.() ?? Ny();
	if (r.length < 16) throw Error("Random bytes length must be >= 16");
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		if (n ||= 0, n < 0 || n + 16 > t.length) throw RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return jy(r);
}
//#endregion
//#region src/utilities/utils.ts
var Iy = {
	minLength: 10,
	minLowercase: 1,
	minUppercase: 1,
	minNumbers: 1,
	minSymbols: 0
}, Ly = ["image/png", "image/jpeg"], Ry = Wu({ palette: { primary: { main: "#2b638b" } } });
//#endregion
//#region src/utilities/createCroppedFile.ts
function zy(e) {
	return new Promise((t, n) => {
		let r = new Image();
		r.crossOrigin = "anonymous", r.src = e, r.onload = () => t(r), r.onerror = n;
	});
}
async function By(e, t) {
	let n = await zy(e), r = document.createElement("canvas"), i = r.getContext("2d");
	if (!i) throw Error("Canvas context not available");
	r.width = n.naturalWidth, r.height = n.naturalHeight, i.fillStyle = "#ffffff", i.fillRect(0, 0, r.width, r.height), i.drawImage(n, 0, 0);
	let a = i.getImageData(t.x, t.y, t.width, t.height), o = document.createElement("canvas"), s = o.getContext("2d");
	if (!s) throw Error("Canvas context not available");
	return o.width = t.width, o.height = t.height, s.fillStyle = "#ffffff", s.fillRect(0, 0, t.width, t.height), s.putImageData(a, 0, 0), new Promise((e, t) => {
		o.toBlob((n) => {
			if (!n) {
				t(/* @__PURE__ */ Error("Canvas empty"));
				return;
			}
			e(n);
		}, "image/jpeg");
	});
}
async function Vy(e, t, n) {
	let r = await By(e, t);
	return new File([r], `${n}-${Py()}.jpeg`, { type: "image/jpeg" });
}
//#endregion
//#region src/utilities/functions.ts
async function Hy(e, t) {
	let n = await (await fetch(e)).blob();
	return new File([n], `${t}-${Py()}.pdf`, { type: "application/pdf" });
}
async function Uy(e, t) {
	let n = await (await fetch(e)).blob(), r = n.type || "application/octet-stream", i = r.split("/")[1] || "bin";
	return new File([n], `${t}-${Py()}.${i}`, { type: r });
}
function Wy(e, t) {
	window.open(`https://www.google.com/maps/search/?api=1&query=${e},${t}`, "_blank");
}
function Gy(e) {
	return e % 2 != 0;
}
//#endregion
//#region src/utilities/httpError.ts
var Ky = class extends Error {
	status;
	constructor(e) {
		super(), this.status = e;
	}
};
//#endregion
export { Ey as APPLICATION_STATUS, Sy as AuthFooter, Cy as AuthLayout, E as BUTTON_SIZE, br as BadgeIcon, gt as ButtonFilled, _t as ButtonFilledError, lr as ButtonFilledErrorIcon, ur as ButtonFilledIcon, dr as ButtonMenuErrorIcon, fr as ButtonMenuIcon, pr as ButtonOnlyIcon, mr as ButtonOutlined, hr as ButtonOutlinedError, gr as ButtonOutlinedErrorIcon, _r as ButtonOutlinedIcon, vr as ButtonText, yr as ButtonTextIcon, si as CefrLevelsBadge, _h as CustomCheckbox, Gv as CustomNumberField, Kv as CustomRadio, qv as CustomTabPanel, $r as ERROR_PLACEHOLDER, Jv as EmailTextField, wy as FormDialogLayout, Yv as FormDialogTitle, Xv as GeneralTextArea, Zv as GeneralTextField, sy as GlobalSnackbar, cy as Hr, Ky as HttpError, cr as Iconify, ly as InfoEmpty, uy as InfoHr, Qr as LOADING_PLACEHOLDER, dy as LinearProgressIndicator, ei as NA, ti as NOT_SPECIFIED, fy as OnlyBadge, Zr as PLACEHOLDER_BOOLEAN, Xr as PLACEHOLDER_DATE, Yr as PLACEHOLDER_INT, Jr as PLACEHOLDER_STRING, ri as POSITION_PLACEHOLDER, ni as PRIMARY_NAME_PLACEHOLDER, py as PasswordTextField, _y as ProficiencyScaleBadge, vy as ReadonlyTextField, Ty as SORT_OPTIONS, yy as SubtitleText, qr as TAENGMO, by as TitleText, Dy as VIEW_OPTION, xy as VerificationTextField, Sr as applicationsStatusDropdown, xr as applicationsStatusRaw, O as buttonFontSize, D as buttonHeight, k as buttonIconSize, wr as cefrLevelsDropdown, Cr as cefrLevelsRaw, W as cn, Er as contractTypesDropdown, Tr as contractTypesRaw, Vy as createCroppedFile, Ry as datePickerTheme, Or as degreesDropdown, Dr as degreesRaw, Gy as isOdd, Ar as isoCountryCodeDropdown, kr as isoCountryCodeRaw, Mr as isoCurrencyCodeDropdown, jr as isoCurrencyCodeRaw, Pr as isoLanguageCodeDropdown, Nr as isoLanguageCodeRaw, Ir as legalEntitySizeDropdown, Fr as legalEntitySizeRaw, Rr as legalEntityTypesDropdown, Lr as legalEntityTypesRaw, Wy as openMap, Iy as passwordRequirement, Br as physicalLocationDropdown, zr as physicalLocationRaw, Hr as proficiencyScaleDropdown, Vr as proficiencyScaleRaw, Wr as sectorsDropdown, Ur as sectorsRaw, Kr as sexDropdown, Gr as sexRaw, Uy as urlToFile, Hy as urlToPdfFile, Oy as useAnchorElement, ky as useControlDialog, oy as useDashboardNavStore, iy as useLoadingStore, ay as useSnackbarStore, Py as uuidv4, Ly as validTypes };
