import { create } from "zustand";

type LoadingSchema = {
  isLoading: boolean;
  turnOn: () => void;
  turnOff: () => void;
};

export const useLoadingStore = create<LoadingSchema>((set) => ({
  isLoading: false,
  turnOn: () => set(() => ({ isLoading: true })),
  turnOff: () => set(() => ({ isLoading: false })),
}));

type SnackbarSchema = {
  open: boolean;
  message: string;
  showSnackbar: (message: string) => void;
  close: () => void;
};

export const useSnackbarStore = create<SnackbarSchema>((set) => ({
  open: false,
  message: "",
  showSnackbar: (message) => set({ open: true, message }),
  close: () => set({ open: false }),
}));

type DashboardNavSchema = {
  isOpen: boolean;
  turnOn: () => void;
  turnOff: () => void;
};

export const useDashboardNavStore = create<DashboardNavSchema>((set) => ({
  isOpen: false,
  turnOn: () => set(() => ({ isOpen: true })),
  turnOff: () => set(() => ({ isOpen: false })),
}));
