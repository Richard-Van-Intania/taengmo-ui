export declare const BUTTON_SIZE: {
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
    readonly LARGE: "large";
};
export type ButtonSize = (typeof BUTTON_SIZE)[keyof typeof BUTTON_SIZE];
export declare function buttonHeight(scale: ButtonSize): string;
export declare function buttonFontSize(scale: ButtonSize): string;
export declare function buttonIconSize(scale: ButtonSize): number;
