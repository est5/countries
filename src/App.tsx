import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Header from './components/header/Header';
import Countries from './components/countries/Countries';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Countries />
    </QueryClientProvider>
  );
}

export default App;
