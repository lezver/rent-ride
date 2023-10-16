import './Articale.scss';
import capCar from '../../images/cap-car.jpg';

export const Articale = ({ car }) => {
  const foundCityAndCountry = () =>
    car?.address.split(',').splice(1, 2).join(' |');

  const transformToString = arr =>
    arr
      ?.map(item => `${item} | `)
      .join('')
      .slice(0, -3);

  const rentalConditions = () => car?.rentalConditions.split('\n');

  return !car ? (
    ''
  ) : (
    <article className="articale">
      <img src={car?.img ?? capCar} alt={`${car?.make} ${car?.model}`} />

      <h3>
        {car?.make}
        <span>{` ${car?.model}`}</span>, {car?.year}
      </h3>

      <div className="articale__characteristics">
        <span>
          {foundCityAndCountry()} | Year: {car?.year} | Type: {car?.type}
        </span>
        <span>
          Fuel Consumption: {car?.fuelConsumption} | Engine Size:{' '}
          {car?.engineSize}
        </span>
      </div>

      <p className="articale__description">{car?.description}</p>

      <h4>Accessories and functionalities:</h4>

      <div className="articale__accessories">
        <span>{transformToString(car?.accessories)}</span>
        <span>{transformToString(car?.functionalities)}</span>
      </div>

      <h4>Rental Conditions:</h4>

      <div className="articale_conditions">
        {rentalConditions().map((item, index) =>
          index === 0 ? (
            <span key={index}>
              {item.slice(0, -2)} <span>{item.slice(-2)}</span>
            </span>
          ) : (
            <span key={index}>{item}</span>
          )
        )}
        <span>
          Milage: <span>{car?.mileage.toLocaleString('en-US')}</span>
        </span>
        <span>
          Price: <span>{car?.rentalPrice}</span>
        </span>
      </div>

      <a href="tel:+380730000000">Rental car</a>
    </article>
  );
};
