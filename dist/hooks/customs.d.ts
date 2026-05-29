export declare function useAnchorElement(): {
    anchorEl: HTMLButtonElement | null;
    open: boolean;
    id: string | undefined;
    handleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleClose: () => void;
};
export declare function useControlDialog(): {
    openState: boolean;
    OpenDialog: () => void;
    CloseDialog: () => void;
};
