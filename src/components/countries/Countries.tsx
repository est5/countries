import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useStore } from '../../app/store';
import CountrieCard from './card/CountrieCard';
import './countries.css';

function Countries() {
  const { isSuccess, isLoading, data } = useQuery('countries', async () => {
    const res = await axios.get('https://restcountries.com/v3.1/all');
    return res.data;
  });
  const [countriesData, setCountriesData] = useState([]);

  const keyword = useStore((state) => state.filter);
  const filteredData = () => {
    if (keyword == 'All') {
      setCountriesData(data);
      console.log(countriesData);
    } else {
      setCountriesData(data.filter((e: any) => e.region == keyword));
      console.log(countriesData);
    }
  };
  useEffect(() => filteredData(), [keyword]);

  useEffect(() => {
    setCountriesData(data);
  }, [isSuccess]);

  return (
    <main>
      {isLoading
        ? 'Loading...'
        : countriesData?.map((r: any) => (
            <CountrieCard
              flag={r.flags.svg}
              name={r.name.common}
              key={r.cca2}
              region={r.region}
              capital={r.capital}
              population={r.population}
            />
          ))}
    </main>
  );
}

export default Countries;
