import axios from 'axios';
import { useQuery } from 'react-query';
import './country.css';

function CountryDetail(name: string | any) {
  const { isSuccess, isLoading, data } = useQuery('1', async () => {
    const res = await axios.get(
      `https://restcountries.com/v3.1/name/${name.name}`
    );
    return res.data[0];
  });

  let currVal: string = '';
  let langVal: string = '';
  let nativeName: string = '';
  let borderArr: string[] = [];

  // parse nested json objects
  if (isSuccess) {
    const curr = data.currencies;
    const langs = data.languages;
    const names = data.name.nativeName;
    const border = data.borders;

    if (border) {
      border.forEach((element: string) => {
        borderArr.push(element);
      });
    } else {
      borderArr.push('none');
    }

    const entries = Object.entries(langs);
    for (const key in entries) {
      langVal += ', ' + entries[key][1];
    }
    langVal = langVal.replace(/(^,)|(,$)/g, '');

    for (const key in names) {
      const entries: any = Object.entries(names[key]);
      nativeName = entries[1][1];
    }

    for (const key in curr) {
      const entries: any = Object.entries(curr[key]);
      currVal = entries[0][1];
    }
  }

  return (
    <main className="detail-wrapper">
      <a href="/">
        <button className="back-btn">
          <i className="fa-solid fa-arrow-left"></i> Back
        </button>
      </a>
      {isLoading ? (
        'Loading...'
      ) : (
        <section className="info">
          <div className="info__img">
            <img src={data.flags.svg} alt="flag picture" />
          </div>
          <div className="info__details">
            <h1 className="info__name">{data.name.common}</h1>
            <div className="info__wrapper">
              <div className="info__description">
                <p>
                  <span className="description">Native Name: </span>
                  {nativeName}
                </p>
                <p>
                  <span className="description">Population: </span>
                  {data.population}
                </p>
                <p>
                  <span className="description">Region: </span>
                  {data.region}
                </p>
                <p>
                  <span className="description">Sub Region: </span>
                  {data.subregion}
                </p>
                <p>
                  <span className="description">Capital: </span>
                  {data.capital}
                </p>
              </div>
              <div className="info__description">
                <p>
                  <span className="description">Top Level Domain: </span>
                  {data.tld}
                </p>
                <p>
                  <span className="description">Currencies: </span>
                  {currVal}
                </p>
                <p>
                  <span className="description">Languages: </span>
                  {langVal}
                </p>
              </div>
            </div>
            <div className="info__border">
              <div>
                <span className="description">Border Countries: </span>
                <div className="borders">
                  {borderArr.map((ele: string) => (
                    <p key={ele} className="border__entry">
                      {ele}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default CountryDetail;
