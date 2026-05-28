//#region src/uis/buttonsScale.ts
var e = {
	SMALL: "small",
	MEDIUM: "medium",
	LARGE: "large"
};
function t(t) {
	switch (t) {
		case e.SMALL: return "h-8";
		case e.MEDIUM: return "h-10";
		case e.LARGE: return "h-14";
	}
}
function n(t) {
	switch (t) {
		case e.SMALL: return "text-[14px]";
		case e.MEDIUM: return "text-[15px]";
		case e.LARGE: return "text-[16px]";
	}
}
function r(t) {
	switch (t) {
		case e.SMALL: return 16;
		case e.MEDIUM: return 20;
		case e.LARGE: return 24;
	}
}
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function i(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var a = e.length;
		for (t = 0; t < a; t++) e[t] && (n = i(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function a() {
	for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = i(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
var o = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, s = (e, t) => ({
	classGroupId: e,
	validator: t
}), c = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), l = "-", u = [], d = "arbitrary..", ee = (e) => {
	let t = p(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return te(e);
			let n = e.split(l);
			return f(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? o(i, t) : t : i || u;
			}
			return n[e] || u;
		}
	};
}, f = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = f(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(l) : e.slice(t).join(l), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, te = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? d + r : void 0;
})(), p = (e) => {
	let { theme: t, classGroups: n } = e;
	return m(n, t);
}, m = (e, t) => {
	let n = c();
	for (let r in e) {
		let i = e[r];
		h(i, n, r, t);
	}
	return n;
}, h = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		g(i, t, n, r);
	}
}, g = (e, t, n, r) => {
	if (typeof e == "string") {
		_(e, t, n);
		return;
	}
	if (typeof e == "function") {
		v(e, t, n, r);
		return;
	}
	y(e, t, n, r);
}, _ = (e, t, n) => {
	let r = e === "" ? t : b(t, e);
	r.classGroupId = n;
}, v = (e, t, n, r) => {
	if (ne(e)) {
		h(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(s(n, e));
}, y = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		h(o, b(t, a), n, r);
	}
}, b = (e, t) => {
	let n = e, r = t.split(l), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = c(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, ne = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, x = (e) => {
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
}, S = "!", C = ":", re = [], w = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), ie = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === C) {
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
		s.endsWith(S) ? (c = s.slice(0, -1), l = !0) : s.startsWith(S) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return w(t, l, c, u);
	};
	if (t) {
		let e = t + C, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : w(re, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, T = (e) => {
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
}, E = (e) => ({
	cache: x(e.cacheSize),
	parseClassName: ie(e),
	sortModifiers: T(e),
	postfixLookupClassGroupIds: D(e),
	...ee(e)
}), D = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, O = /\s+/, k = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(O), l = "";
	for (let e = c.length - 1; e >= 0; --e) {
		let t = c[e], { isExternal: u, modifiers: d, hasImportantModifier: ee, baseClassName: f, maybePostfixModifierPosition: te } = n(t);
		if (u) {
			l = t + (l.length > 0 ? " " + l : l);
			continue;
		}
		let p = !!te, m;
		if (p) {
			m = r(f.substring(0, te));
			let e = m && o[m] ? r(f) : void 0;
			e && e !== m && (m = e, p = !1);
		} else m = r(f);
		if (!m) {
			if (!p) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			if (m = r(f), !m) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			p = !1;
		}
		let h = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), g = ee ? h + S : h, _ = g + m;
		if (s.indexOf(_) > -1) continue;
		s.push(_);
		let v = i(m, p);
		for (let e = 0; e < v.length; ++e) {
			let t = v[e];
			s.push(g + t);
		}
		l = t + (l.length > 0 ? " " + l : l);
	}
	return l;
}, A = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = j(n)) && (i && (i += " "), i += r);
	return i;
}, j = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = j(e[r])) && (n && (n += " "), n += t);
	return n;
}, ae = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = E(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = k(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(A(...e));
}, oe = [], M = (e) => {
	let t = (t) => t[e] || oe;
	return t.isThemeGetter = !0, t;
}, N = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, P = /^\((?:(\w[\w-]*):)?(.+)\)$/i, F = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, I = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, L = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, se = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, R = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ce = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, z = (e) => F.test(e), B = (e) => !!e && !Number.isNaN(Number(e)), V = (e) => !!e && Number.isInteger(Number(e)), le = (e) => e.endsWith("%") && B(e.slice(0, -1)), H = (e) => I.test(e), ue = () => !0, U = (e) => L.test(e) && !se.test(e), W = () => !1, G = (e) => R.test(e), K = (e) => ce.test(e), de = (e) => !q(e) && !X(e), fe = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), pe = (e) => Q(e, De, W), q = (e) => N.test(e), J = (e) => Q(e, Oe, U), me = (e) => Q(e, ke, B), he = (e) => Q(e, je, ue), ge = (e) => Q(e, Ae, W), _e = (e) => Q(e, Te, W), ve = (e) => Q(e, Ee, K), Y = (e) => Q(e, Me, G), X = (e) => P.test(e), Z = (e) => $(e, Oe), ye = (e) => $(e, Ae), be = (e) => $(e, Te), xe = (e) => $(e, De), Se = (e) => $(e, Ee), Ce = (e) => $(e, Me, !0), we = (e) => $(e, je, !0), Q = (e, t, n) => {
	let r = N.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, $ = (e, t, n = !1) => {
	let r = P.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Te = (e) => e === "position" || e === "percentage", Ee = (e) => e === "image" || e === "url", De = (e) => e === "length" || e === "size" || e === "bg-size", Oe = (e) => e === "length", ke = (e) => e === "number", Ae = (e) => e === "family-name", je = (e) => e === "number" || e === "weight", Me = (e) => e === "shadow", Ne = /* @__PURE__ */ ae(() => {
	let e = M("color"), t = M("font"), n = M("text"), r = M("font-weight"), i = M("tracking"), a = M("leading"), o = M("breakpoint"), s = M("container"), c = M("spacing"), l = M("radius"), u = M("shadow"), d = M("inset-shadow"), ee = M("text-shadow"), f = M("drop-shadow"), te = M("blur"), p = M("perspective"), m = M("aspect"), h = M("ease"), g = M("animate"), _ = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], v = () => [
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
	], y = () => [
		...v(),
		X,
		q
	], b = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], ne = () => [
		"auto",
		"contain",
		"none"
	], x = () => [
		X,
		q,
		c
	], S = () => [
		z,
		"full",
		"auto",
		...x()
	], C = () => [
		V,
		"none",
		"subgrid",
		X,
		q
	], re = () => [
		"auto",
		{ span: [
			"full",
			V,
			X,
			q
		] },
		V,
		X,
		q
	], w = () => [
		V,
		"auto",
		X,
		q
	], ie = () => [
		"auto",
		"min",
		"max",
		"fr",
		X,
		q
	], T = () => [
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
	], E = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], D = () => ["auto", ...x()], O = () => [
		z,
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
		...x()
	], k = () => [
		z,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...x()
	], A = () => [
		z,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...x()
	], j = () => [
		e,
		X,
		q
	], ae = () => [
		...v(),
		be,
		_e,
		{ position: [X, q] }
	], oe = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], N = () => [
		"auto",
		"cover",
		"contain",
		xe,
		pe,
		{ size: [X, q] }
	], P = () => [
		le,
		Z,
		J
	], F = () => [
		"",
		"none",
		"full",
		l,
		X,
		q
	], I = () => [
		"",
		B,
		Z,
		J
	], L = () => [
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
	], R = () => [
		B,
		le,
		be,
		_e
	], ce = () => [
		"",
		"none",
		te,
		X,
		q
	], U = () => [
		"none",
		B,
		X,
		q
	], W = () => [
		"none",
		B,
		X,
		q
	], G = () => [
		B,
		X,
		q
	], K = () => [
		z,
		"full",
		...x()
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
			blur: [H],
			breakpoint: [H],
			color: [ue],
			container: [H],
			"drop-shadow": [H],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [de],
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
			"inset-shadow": [H],
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
			radius: [H],
			shadow: [H],
			spacing: ["px", B],
			text: [H],
			"text-shadow": [H],
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
				z,
				q,
				X,
				m
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				X,
				q
			] }],
			"container-named": [fe],
			columns: [{ columns: [
				B,
				q,
				X,
				s
			] }],
			"break-after": [{ "break-after": _() }],
			"break-before": [{ "break-before": _() }],
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
			"object-position": [{ object: y() }],
			overflow: [{ overflow: b() }],
			"overflow-x": [{ "overflow-x": b() }],
			"overflow-y": [{ "overflow-y": b() }],
			overscroll: [{ overscroll: ne() }],
			"overscroll-x": [{ "overscroll-x": ne() }],
			"overscroll-y": [{ "overscroll-y": ne() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: S() }],
			"inset-x": [{ "inset-x": S() }],
			"inset-y": [{ "inset-y": S() }],
			start: [{
				"inset-s": S(),
				start: S()
			}],
			end: [{
				"inset-e": S(),
				end: S()
			}],
			"inset-bs": [{ "inset-bs": S() }],
			"inset-be": [{ "inset-be": S() }],
			top: [{ top: S() }],
			right: [{ right: S() }],
			bottom: [{ bottom: S() }],
			left: [{ left: S() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				V,
				"auto",
				X,
				q
			] }],
			basis: [{ basis: [
				z,
				"full",
				"auto",
				s,
				...x()
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
				B,
				z,
				"auto",
				"initial",
				"none",
				q
			] }],
			grow: [{ grow: [
				"",
				B,
				X,
				q
			] }],
			shrink: [{ shrink: [
				"",
				B,
				X,
				q
			] }],
			order: [{ order: [
				V,
				"first",
				"last",
				"none",
				X,
				q
			] }],
			"grid-cols": [{ "grid-cols": C() }],
			"col-start-end": [{ col: re() }],
			"col-start": [{ "col-start": w() }],
			"col-end": [{ "col-end": w() }],
			"grid-rows": [{ "grid-rows": C() }],
			"row-start-end": [{ row: re() }],
			"row-start": [{ "row-start": w() }],
			"row-end": [{ "row-end": w() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": ie() }],
			"auto-rows": [{ "auto-rows": ie() }],
			gap: [{ gap: x() }],
			"gap-x": [{ "gap-x": x() }],
			"gap-y": [{ "gap-y": x() }],
			"justify-content": [{ justify: [...T(), "normal"] }],
			"justify-items": [{ "justify-items": [...E(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...E()] }],
			"align-content": [{ content: ["normal", ...T()] }],
			"align-items": [{ items: [...E(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...E(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": T() }],
			"place-items": [{ "place-items": [...E(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...E()] }],
			p: [{ p: x() }],
			px: [{ px: x() }],
			py: [{ py: x() }],
			ps: [{ ps: x() }],
			pe: [{ pe: x() }],
			pbs: [{ pbs: x() }],
			pbe: [{ pbe: x() }],
			pt: [{ pt: x() }],
			pr: [{ pr: x() }],
			pb: [{ pb: x() }],
			pl: [{ pl: x() }],
			m: [{ m: D() }],
			mx: [{ mx: D() }],
			my: [{ my: D() }],
			ms: [{ ms: D() }],
			me: [{ me: D() }],
			mbs: [{ mbs: D() }],
			mbe: [{ mbe: D() }],
			mt: [{ mt: D() }],
			mr: [{ mr: D() }],
			mb: [{ mb: D() }],
			ml: [{ ml: D() }],
			"space-x": [{ "space-x": x() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": x() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: O() }],
			"inline-size": [{ inline: ["auto", ...k()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...k()] }],
			"max-inline-size": [{ "max-inline": ["none", ...k()] }],
			"block-size": [{ block: ["auto", ...A()] }],
			"min-block-size": [{ "min-block": ["auto", ...A()] }],
			"max-block-size": [{ "max-block": ["none", ...A()] }],
			w: [{ w: [
				s,
				"screen",
				...O()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...O()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...O()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...O()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...O()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...O()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				Z,
				J
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				we,
				he
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
				le,
				q
			] }],
			"font-family": [{ font: [
				ye,
				ge,
				t
			] }],
			"font-features": [{ "font-features": [q] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				X,
				q
			] }],
			"line-clamp": [{ "line-clamp": [
				B,
				"none",
				X,
				me
			] }],
			leading: [{ leading: [a, ...x()] }],
			"list-image": [{ "list-image": [
				"none",
				X,
				q
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				X,
				q
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: j() }],
			"text-color": [{ text: j() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...L(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				B,
				"from-font",
				"auto",
				X,
				J
			] }],
			"text-decoration-color": [{ decoration: j() }],
			"underline-offset": [{ "underline-offset": [
				B,
				"auto",
				X,
				q
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
			indent: [{ indent: x() }],
			"tab-size": [{ tab: [
				V,
				X,
				q
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
				X,
				q
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
				X,
				q
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
			"bg-position": [{ bg: ae() }],
			"bg-repeat": [{ bg: oe() }],
			"bg-size": [{ bg: N() }],
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
						V,
						X,
						q
					],
					radial: [
						"",
						X,
						q
					],
					conic: [
						V,
						X,
						q
					]
				},
				Se,
				ve
			] }],
			"bg-color": [{ bg: j() }],
			"gradient-from-pos": [{ from: P() }],
			"gradient-via-pos": [{ via: P() }],
			"gradient-to-pos": [{ to: P() }],
			"gradient-from": [{ from: j() }],
			"gradient-via": [{ via: j() }],
			"gradient-to": [{ to: j() }],
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
				...L(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...L(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: j() }],
			"border-color-x": [{ "border-x": j() }],
			"border-color-y": [{ "border-y": j() }],
			"border-color-s": [{ "border-s": j() }],
			"border-color-e": [{ "border-e": j() }],
			"border-color-bs": [{ "border-bs": j() }],
			"border-color-be": [{ "border-be": j() }],
			"border-color-t": [{ "border-t": j() }],
			"border-color-r": [{ "border-r": j() }],
			"border-color-b": [{ "border-b": j() }],
			"border-color-l": [{ "border-l": j() }],
			"divide-color": [{ divide: j() }],
			"outline-style": [{ outline: [
				...L(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				B,
				X,
				q
			] }],
			"outline-w": [{ outline: [
				"",
				B,
				Z,
				J
			] }],
			"outline-color": [{ outline: j() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				Ce,
				Y
			] }],
			"shadow-color": [{ shadow: j() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				Ce,
				Y
			] }],
			"inset-shadow-color": [{ "inset-shadow": j() }],
			"ring-w": [{ ring: I() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: j() }],
			"ring-offset-w": [{ "ring-offset": [B, J] }],
			"ring-offset-color": [{ "ring-offset": j() }],
			"inset-ring-w": [{ "inset-ring": I() }],
			"inset-ring-color": [{ "inset-ring": j() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				ee,
				Ce,
				Y
			] }],
			"text-shadow-color": [{ "text-shadow": j() }],
			opacity: [{ opacity: [
				B,
				X,
				q
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
			"mask-image-linear-pos": [{ "mask-linear": [B] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": R() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": R() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": j() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": j() }],
			"mask-image-t-from-pos": [{ "mask-t-from": R() }],
			"mask-image-t-to-pos": [{ "mask-t-to": R() }],
			"mask-image-t-from-color": [{ "mask-t-from": j() }],
			"mask-image-t-to-color": [{ "mask-t-to": j() }],
			"mask-image-r-from-pos": [{ "mask-r-from": R() }],
			"mask-image-r-to-pos": [{ "mask-r-to": R() }],
			"mask-image-r-from-color": [{ "mask-r-from": j() }],
			"mask-image-r-to-color": [{ "mask-r-to": j() }],
			"mask-image-b-from-pos": [{ "mask-b-from": R() }],
			"mask-image-b-to-pos": [{ "mask-b-to": R() }],
			"mask-image-b-from-color": [{ "mask-b-from": j() }],
			"mask-image-b-to-color": [{ "mask-b-to": j() }],
			"mask-image-l-from-pos": [{ "mask-l-from": R() }],
			"mask-image-l-to-pos": [{ "mask-l-to": R() }],
			"mask-image-l-from-color": [{ "mask-l-from": j() }],
			"mask-image-l-to-color": [{ "mask-l-to": j() }],
			"mask-image-x-from-pos": [{ "mask-x-from": R() }],
			"mask-image-x-to-pos": [{ "mask-x-to": R() }],
			"mask-image-x-from-color": [{ "mask-x-from": j() }],
			"mask-image-x-to-color": [{ "mask-x-to": j() }],
			"mask-image-y-from-pos": [{ "mask-y-from": R() }],
			"mask-image-y-to-pos": [{ "mask-y-to": R() }],
			"mask-image-y-from-color": [{ "mask-y-from": j() }],
			"mask-image-y-to-color": [{ "mask-y-to": j() }],
			"mask-image-radial": [{ "mask-radial": [X, q] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": R() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": R() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": j() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": j() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": v() }],
			"mask-image-conic-pos": [{ "mask-conic": [B] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": R() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": R() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": j() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": j() }],
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
			"mask-position": [{ mask: ae() }],
			"mask-repeat": [{ mask: oe() }],
			"mask-size": [{ mask: N() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				X,
				q
			] }],
			filter: [{ filter: [
				"",
				"none",
				X,
				q
			] }],
			blur: [{ blur: ce() }],
			brightness: [{ brightness: [
				B,
				X,
				q
			] }],
			contrast: [{ contrast: [
				B,
				X,
				q
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				f,
				Ce,
				Y
			] }],
			"drop-shadow-color": [{ "drop-shadow": j() }],
			grayscale: [{ grayscale: [
				"",
				B,
				X,
				q
			] }],
			"hue-rotate": [{ "hue-rotate": [
				B,
				X,
				q
			] }],
			invert: [{ invert: [
				"",
				B,
				X,
				q
			] }],
			saturate: [{ saturate: [
				B,
				X,
				q
			] }],
			sepia: [{ sepia: [
				"",
				B,
				X,
				q
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				X,
				q
			] }],
			"backdrop-blur": [{ "backdrop-blur": ce() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				B,
				X,
				q
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				B,
				X,
				q
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				B,
				X,
				q
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				B,
				X,
				q
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				B,
				X,
				q
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				B,
				X,
				q
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				B,
				X,
				q
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				B,
				X,
				q
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": x() }],
			"border-spacing-x": [{ "border-spacing-x": x() }],
			"border-spacing-y": [{ "border-spacing-y": x() }],
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
				X,
				q
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				B,
				"initial",
				X,
				q
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				h,
				X,
				q
			] }],
			delay: [{ delay: [
				B,
				X,
				q
			] }],
			animate: [{ animate: [
				"none",
				g,
				X,
				q
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				p,
				X,
				q
			] }],
			"perspective-origin": [{ "perspective-origin": y() }],
			rotate: [{ rotate: U() }],
			"rotate-x": [{ "rotate-x": U() }],
			"rotate-y": [{ "rotate-y": U() }],
			"rotate-z": [{ "rotate-z": U() }],
			scale: [{ scale: W() }],
			"scale-x": [{ "scale-x": W() }],
			"scale-y": [{ "scale-y": W() }],
			"scale-z": [{ "scale-z": W() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: G() }],
			"skew-x": [{ "skew-x": G() }],
			"skew-y": [{ "skew-y": G() }],
			transform: [{ transform: [
				X,
				q,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: y() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: K() }],
			"translate-x": [{ "translate-x": K() }],
			"translate-y": [{ "translate-y": K() }],
			"translate-z": [{ "translate-z": K() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				V,
				X,
				q
			] }],
			accent: [{ accent: j() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: j() }],
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
				X,
				q
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
			"scrollbar-thumb-color": [{ "scrollbar-thumb": j() }],
			"scrollbar-track-color": [{ "scrollbar-track": j() }],
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
			"scroll-m": [{ "scroll-m": x() }],
			"scroll-mx": [{ "scroll-mx": x() }],
			"scroll-my": [{ "scroll-my": x() }],
			"scroll-ms": [{ "scroll-ms": x() }],
			"scroll-me": [{ "scroll-me": x() }],
			"scroll-mbs": [{ "scroll-mbs": x() }],
			"scroll-mbe": [{ "scroll-mbe": x() }],
			"scroll-mt": [{ "scroll-mt": x() }],
			"scroll-mr": [{ "scroll-mr": x() }],
			"scroll-mb": [{ "scroll-mb": x() }],
			"scroll-ml": [{ "scroll-ml": x() }],
			"scroll-p": [{ "scroll-p": x() }],
			"scroll-px": [{ "scroll-px": x() }],
			"scroll-py": [{ "scroll-py": x() }],
			"scroll-ps": [{ "scroll-ps": x() }],
			"scroll-pe": [{ "scroll-pe": x() }],
			"scroll-pbs": [{ "scroll-pbs": x() }],
			"scroll-pbe": [{ "scroll-pbe": x() }],
			"scroll-pt": [{ "scroll-pt": x() }],
			"scroll-pr": [{ "scroll-pr": x() }],
			"scroll-pb": [{ "scroll-pb": x() }],
			"scroll-pl": [{ "scroll-pl": x() }],
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
				X,
				q
			] }],
			fill: [{ fill: ["none", ...j()] }],
			"stroke-w": [{ stroke: [
				B,
				Z,
				J,
				me
			] }],
			stroke: [{ stroke: ["none", ...j()] }],
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
function Pe(...e) {
	return Ne(a(e));
}
//#endregion
//#region src/constants/sex.ts
var Fe = [
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
], Ie = Fe.map((e) => ({
	label: e.description,
	value: e.sex_uuid
})), Le = [
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
], Re = Le.map((e) => ({
	label: e.name,
	value: e.sectors_uuid
})), ze = [
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
], Be = ze.map((e) => ({
	label: `${e.level}/10 - ${e.meaning}`,
	value: e.proficiency_scale_uuid
})), Ve = [
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
], He = Ve.map((e) => ({
	label: e.name,
	value: e.physical_location_uuid
})), Ue = [
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
], We = Ue.map((e) => ({
	label: e.name,
	value: e.legal_entity_types_uuid
})), Ge = [
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
], Ke = Ge.map((e) => ({
	label: `${e.name} - ${e.definition}`,
	value: e.legal_entity_size_uuid
})), qe = [
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
], Je = qe.map((e) => ({
	label: `${e.language} - ${e.code}`,
	value: e.iso_language_code_uuid
})), Ye = [
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
], Xe = Ye.map((e) => ({
	label: `${e.currency} - ${e.code} - ${e.number}`,
	value: e.iso_currency_code_uuid
})), Ze = [
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
], Qe = Ze.map((e) => ({
	label: `${e.country} - ${e.alpha2} - ${e.alpha3}`,
	value: e.iso_country_code_uuid
})), $e = [
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
], et = $e.map((e) => ({
	label: e.level,
	value: e.degrees_uuid
})), tt = [
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
], nt = tt.map((e) => ({
	label: e.name,
	value: e.contract_types_uuid
})), rt = [
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
], it = rt.map((e) => ({
	label: `${e.level_code} - ${e.level_name}`,
	value: e.cefr_levels_uuid
})), at = [
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
], ot = at.map((e) => ({
	label: e.status,
	value: e.applications_status_uuid
})), st = class extends Error {
	status;
	constructor(e) {
		super(), this.status = e;
	}
}, ct = "refresh_token", lt = "role", ut = "PLACEHOLDER_STRING", dt = 0, ft = new Date(Date.now()), pt = !1, mt = "Loading...", ht = "Error!", gt = "N/A", _t = "Not specified", vt = "Your primary name", yt = "Your position", bt = "Admin", xt = "Personnel", St = "TAENGMO", Ct = {
	CREATED_AT_ASC: "created_at_asc",
	CREATED_AT_DESC: "created_at_desc",
	UPDATED_AT_ASC: "updated_at_asc",
	UPDATED_AT_DESC: "updated_at_desc",
	RATING_ASC: "rating_asc",
	RATING_DESC: "rating_desc"
}, wt = {
	APPLIED: "019d3f3c-d4ad-723b-88ce-05801ecae82d",
	SHORTLISTED: "019d3f3c-d4ae-79f3-8091-250ad00077a5",
	REJECTED: "019d3f3c-d4ae-7af5-bc71-ffe88e0d4167",
	INTERVIEWED: "019d4d77-8001-740c-837e-47cb6b79537c",
	OFFERED: "019d4d77-8004-777e-a9d3-9011c67e6509",
	HIRED: "019d51f2-3e56-72f7-b4bd-f68aa366f175"
}, Tt = {
	DENSE: "dense",
	COMPACT: "compact",
	EXPANDED: "expanded"
};
//#endregion
export { bt as ADMIN, wt as APPLICATION_STATUS, e as BUTTON_SIZE, ht as ERROR_PLACEHOLDER, st as HttpError, mt as LOADING_PLACEHOLDER, gt as NA, _t as NOT_SPECIFIED, xt as PERSONNEL, pt as PLACEHOLDER_BOOLEAN, ft as PLACEHOLDER_DATE, dt as PLACEHOLDER_INT, ut as PLACEHOLDER_STRING, yt as POSITION_PLACEHOLDER, vt as PRIMARY_NAME_PLACEHOLDER, ct as REFRESH_TOKEN, lt as ROLE, Ct as SORT_OPTIONS, St as TAENGMO, Tt as VIEW_OPTION, ot as applicationsStatusDropdown, at as applicationsStatusRaw, n as buttonFontSize, t as buttonHeight, r as buttonIconSize, it as cefrLevelsDropdown, rt as cefrLevelsRaw, Pe as cn, nt as contractTypesDropdown, tt as contractTypesRaw, et as degreesDropdown, $e as degreesRaw, Qe as isoCountryCodeDropdown, Ze as isoCountryCodeRaw, Xe as isoCurrencyCodeDropdown, Ye as isoCurrencyCodeRaw, Je as isoLanguageCodeDropdown, qe as isoLanguageCodeRaw, Ke as legalEntitySizeDropdown, Ge as legalEntitySizeRaw, We as legalEntityTypesDropdown, Ue as legalEntityTypesRaw, He as physicalLocationDropdown, Ve as physicalLocationRaw, Be as proficiencyScaleDropdown, ze as proficiencyScaleRaw, Re as sectorsDropdown, Le as sectorsRaw, Ie as sexDropdown, Fe as sexRaw };
