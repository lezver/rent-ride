import Notiflix from 'notiflix';
import('./Filter.scss');

export const Filter = ({ cars, filter, page }) => {
  const uniqueBrands = cars =>
    cars
      .map(({ make }) => make)
      .filter((brand, index, arr) => arr.indexOf(brand) === index)
      .sort();

  const uniquePrices = cars =>
    cars
      .map(({ rentalPrice }) => rentalPrice.slice(1))
      .filter((price, index, arr) => arr.indexOf(price) === index)
      .sort((a, b) => a - b)
      .map(price => '$' + price);

  const handleSubmit = e => {
    e.preventDefault();

    const brand = e.target.elements.brand.value;
    const price = e.target.elements.price.value;
    const from = e.target.elements.from.value;
    const to = e.target.elements.to.value;

    const filteredCars = cars
      .filter(car => (brand !== 'all' ? brand === car.make : car))
      .filter(car => (price !== 'all' ? price === car.rentalPrice : car))
      .filter(car => (from !== '' ? from <= car.mileage : car))
      .filter(car => (to !== '' ? to >= car.mileage : car));

    const isOne =
      filteredCars.length > 1 ? `${filteredCars.length} cars` : 'car';

    filteredCars.length
      ? Notiflix.Notify.success(`We find ${isOne}`)
      : Notiflix.Notify.failure("Sorry, we didn't have this car");

    filter(filteredCars);

    page(8);

    e.target.reset();
  };

  return (
    <form className="filter" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Car brand</legend>
        <select name="brand" id="brand">
          <option value="all">All</option>
          {uniqueBrands(cars).map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </fieldset>

      <fieldset>
        <legend>Price / 1 hour</legend>
        <select name="price" id="price">
          <option value="all">All</option>
          {uniquePrices(cars).map((price, index) => (
            <option key={index}>{price}</option>
          ))}
        </select>
      </fieldset>

      <fieldset>
        <legend>Car mileage / km</legend>
        <input type="number" placeholder="From" name="from" />
        <input type="number" placeholder="To" name="to" />
      </fieldset>

      <button type="submit" name="search">
        Search
      </button>
    </form>
  );
};
