import { create } from 'zustand';

const useStore = create((set) => ({

    formSuccess: false,
    currentPage: 1,

    setFormSuccess: (value) => set({formSuccess: value}),

    setCurrentPage: () =>
        set((state) => ({
            currentPage: state.currentPage + 1
        })),

    resetCurrentPage: () => set({currentPage: 1}),

}));

export default useStore;