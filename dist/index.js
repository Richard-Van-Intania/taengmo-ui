import { jsx as e } from "react/jsx-runtime";
//#region src/components/MyButton.tsx
function t(t) {
	return /* @__PURE__ */ e("button", {
		...t,
		className: "\n        bg-primary-dev\n        hover:bg-(--color-primary-hover)\n        text-black\n        px-4\n        py-2\n        rounded-(--radius-button)\n        transition-colors\n      ",
		children: "BT"
	});
}
//#endregion
export { t as MyButton };
