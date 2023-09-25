import { create } from "zustand";

interface storeType {
  show: boolean;
  setShow: () => void;
}

export const useStore = create<storeType>((set) => ({
  show: false,
  setShow: () => set((state) => ({ show: !state.show })),
}));
