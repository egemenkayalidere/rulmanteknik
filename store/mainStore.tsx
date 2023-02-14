import create from "zustand";
export const useMainStore = create((set) => ({
  showCats: true,
  setShowCats: (status: any) => set({ showCats: status }),
  selectedCat: null,
  setSelectedCat: (selectedCat: any) => set({ selectedCat }),
  selectedSubCat: null,
  setSelectedSubCat: (selectedSubCat: any) => set({ selectedSubCat }),
}));
