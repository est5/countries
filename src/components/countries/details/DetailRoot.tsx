import { QueryClient, QueryClientProvider } from 'react-query';
import { useParams } from 'react-router';
import Header from '../../header/Header';
import CountryDetail from './CountryDetail';

function DetailRoot() {
  const { countrieName } = useParams();
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <CountryDetail name={countrieName} />
      </QueryClientProvider>
    </>
  );
}

export default DetailRoot;
