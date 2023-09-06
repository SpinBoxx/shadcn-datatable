import { filterType } from "@/types/filters";
import { create } from "zustand";

interface updateModalInterface {
  isOpen: boolean;
  dataType: string;
  data: filterType | null;
  onOpen: (dataType: string, data: filterType) => void;
  onClose: () => void;
}

export const useUpdateModal = create<updateModalInterface>((set) => ({
  isOpen: false,
  dataType: "",
  data: null,
  onOpen: (dataType: string, data: filterType) =>
    set({ isOpen: true, dataType, data }),
  onClose: () => set({ isOpen: false }),
}));
