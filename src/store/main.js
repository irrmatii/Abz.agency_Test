import { create } from 'zustand';


const useStore = create((set) => ({

    currentUserNr: 6,
    formSuccess: false,

    setCurrentUserNr: () =>
        set((state) => ({
            currentUserNr: state.currentUserNr + 6
        })),

    resetCurrentUserNr: () => set({currentUserNr: 6}),

    setFormSuccess: (value) => set({formSuccess: value}),

}));

export default useStore;