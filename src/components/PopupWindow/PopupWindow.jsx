import './PopupWindow.scss';

const capImg =
  'https://media.colomio.com/t/500x500/vehicles/car/simple-sports-car.png';
const capDes = 'car';

export const PopupWindow = ({ car }) => {
  const foundCityAndCountry = car?.address.split(',').splice(1, 2).join(' |');

  const accessories = () => {
    const string = car?.accessories.map(item => `${item} | `);

    return string.join('').slice(0, -3);
  };
  const functionalities = () => {
    const string = car?.functionalities.map(item => `${item} | `);

    return string.join('').slice(0, -3);
  };

  const rentalConditions = () => car?.rentalConditions.split('\n');

  return (
    <div className="popup-window">
      <img
        src={car?.img ?? capImg}
        alt={`${car?.make} ${car?.model}` ?? capDes}
      />
      <h3>
        {car?.make}
        <span>{` ${car?.model}`}</span>, {car?.year}
      </h3>
      <div className="popup-window__characteristics">
        <span>
          {foundCityAndCountry} | Year: {car?.year} | Type: {car?.type}
        </span>
        <span>
          Fuel Consumption: {car?.fuelConsumption} | Engine Size:{' '}
          {car?.engineSize}
        </span>
      </div>
      <p className="popup-window__description">{car?.description}</p>
      <h4>Accessories and functionalities:</h4>
      <div className="popup-window__accessories">
        <span>{accessories()}</span>
        <span>{functionalities()}</span>
      </div>
      <h4>Rental Conditions:</h4>
      <div className="popup-window_conditions">
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
    </div>
  );
};
