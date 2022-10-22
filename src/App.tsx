import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/header/Header';
import Countries from './components/countries/Countries';
import FilterSection from './components/countries/filter/FilterSection';

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
