import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Header from './components/header/Header';
import Countries from './components/countries/Countries';
import FilterSection from './components/countries/filter/FilterSection';
import { useState } from 'react';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <FilterSection />
      <Countries />
    </QueryClientProvider>
  );
}

export default App;
