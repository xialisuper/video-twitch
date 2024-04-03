import { create } from "zustand";

interface SideBarState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useSideBarStore = create<SideBarState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
