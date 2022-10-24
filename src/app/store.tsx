import create from 'zustand';

interface CountrieState {
  loaded: boolean;
  filter: string;
  search: string;
  setFilter: (key: string) => void;
  setSearch: (key: string) => void;
  setLoaded: (val: boolean) => void;
}

export const useStore = create<CountrieState>()((set) => ({
  loaded: false,
  filter: 'All',
  search: '',
  setFilter: (key) => set({ filter: key }),
  setSearch: (key) => set({ search: key }),
  setLoaded: (val) => set({ loaded: val }),
}));
