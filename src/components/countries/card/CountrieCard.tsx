import './card.css';

interface Info {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

function CountrieCard(cardInfo: Info) {
  return (
    <div className="card">
      <div className="card__img">
        <a href={`countries/${cardInfo.name}`}>
          <img
            loading="lazy"
            className="country__img"
            src={cardInfo.flag}
            alt="Flag pic"
          />
        </a>
      </div>
      <div className="card__text">
        <h2 className="card__name">{cardInfo.name}</h2>
        <p className="card__population">
          <span className="description">Population:</span> {cardInfo.population}
        </p>
        <p className="card__region">
          <span className="description">Region:</span> {cardInfo.region}
        </p>
        <p className="card__capital">
          <span className="description">Capital:</span> {cardInfo.capital}
        </p>
      </div>
    </div>
  );
}

export default CountrieCard;
