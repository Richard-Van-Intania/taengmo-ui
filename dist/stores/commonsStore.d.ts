type LoadingSchema = {
    isLoading: boolean;
    turnOn: () => void;
    turnOff: () => void;
};
export declare const useLoadingStore: import("zustand").UseBoundStore<import("zustand").StoreApi<LoadingSchema>>;
type SnackbarSchema = {
    open: boolean;
    message: string;
    showSnackbar: (message: string) => void;
    close: () => void;
};
export declare const useSnackbarStore: import("zustand").UseBoundStore<import("zustand").StoreApi<SnackbarSchema>>;
type DashboardNavSchema = {
    isOpen: boolean;
    turnOn: () => void;
    turnOff: () => void;
};
export declare const useDashboardNavStore: import("zustand").UseBoundStore<import("zustand").StoreApi<DashboardNavSchema>>;
export {};
