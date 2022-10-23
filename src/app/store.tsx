import create from 'zustand';

interface CountrieState {
  filter: string;
  search: string;
  setFilter: (key: string) => void;
  setSearch: (key: string) => void;
}

export const useStore = create<CountrieState>()((set) => ({
  filter: 'All',
  search: '',
  setFilter: (key) => set({ filter: key }),
  setSearch: (key) => set({ search: key }),
}));
