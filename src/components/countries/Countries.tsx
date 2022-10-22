import axios from 'axios';
import { useQuery } from 'react-query';
import CountrieCard from './card/CountrieCard';
import './countries.css';

function Countries() {
  const { isLoading, data } = useQuery('countries', async () => {
    const res = await axios.get('https://restcountries.com/v3.1/all');
    return res.data;
  });

  return (
    <main>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data.map((r: any) => (
          <CountrieCard
            flag={r.flags.svg}
            name={r.name.common}
            key={r.cca2}
            region={r.region}
            capital={r.capital}
            population={r.population}
          />
        ))
      )}
    </main>
  );
}

export default Countries;
