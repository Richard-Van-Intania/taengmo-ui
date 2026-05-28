export const BUTTON_SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
} as const;

export type ButtonSize = (typeof BUTTON_SIZE)[keyof typeof BUTTON_SIZE];

export function buttonHeight(scale: ButtonSize): string {
  switch (scale) {
    case BUTTON_SIZE.SMALL:
      return "h-8";
    case BUTTON_SIZE.MEDIUM:
      return "h-10";
    case BUTTON_SIZE.LARGE:
      return "h-14";
  }
}

export function buttonFontSize(scale: ButtonSize): string {
  switch (scale) {
    case BUTTON_SIZE.SMALL:
      return "text-[14px]";
    case BUTTON_SIZE.MEDIUM:
      return "text-[15px]";
    case BUTTON_SIZE.LARGE:
      return "text-[16px]";
  }
}

export function buttonIconSize(scale: ButtonSize): number {
  switch (scale) {
    case BUTTON_SIZE.SMALL:
      return 16;
    case BUTTON_SIZE.MEDIUM:
      return 20;
    case BUTTON_SIZE.LARGE:
      return 24;
  }
}
