import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useStore } from '../../app/store';
import CountrieCard from './card/CountrieCard';
import './countries.css';

function Countries() {
  const { isIdle, isSuccess, isLoading, data } = useQuery(
    'countries',
    async () => {
      const res = await axios.get('https://restcountries.com/v3.1/all');
      setLoaded(false);
      return res.data;
    }
  );
  const [countriesData, setCountriesData] = useState([]);
  const [filteredByRegion, setFilteredByRegion] = useState([]);

  const keyword = useStore((state) => state.filter);
  const search = useStore((state) => state.search);
  const setSearch = useStore((state) => state.setSearch);
  const setLoaded = useStore((state) => state.setLoaded);

  const filteredData = () => {
    setSearch('');
    if (keyword == 'All') {
      setFilteredByRegion(data);
    } else {
      setFilteredByRegion(data.filter((e: any) => e.region == keyword));
    }
  };

  useEffect(() => {
    filteredData();
  }, [keyword]);

  useEffect(() => {
    setCountriesData(filteredByRegion);
  }, [filteredByRegion, keyword]);

  const searchCountry = () => {
    if (search == '') {
      setCountriesData(filteredByRegion);
    } else {
      setCountriesData(
        filteredByRegion.filter((e: any) =>
          e.name.common.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  };
  useEffect(() => searchCountry(), [search]);

  useEffect(() => {
    setCountriesData(data);
    setFilteredByRegion(data);
  }, [isSuccess]);

  useEffect(() => {
    setLoaded(true);
  }, [isIdle]);

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
