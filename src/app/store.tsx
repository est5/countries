import create from 'zustand';

interface CountrieState {
  filter: string;
  setFilter: (key: string) => void;
}

export const useStore = create<CountrieState>()((set) => ({
  filter: 'All',
  setFilter: (key) => set({ filter: key }),
}));
