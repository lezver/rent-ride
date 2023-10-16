import('./Filter.scss');

export const Filter = ({ cars }) => {
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

  return (
    <form className="filter">
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
        <legend>Price/ 1 hour</legend>
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

      <button type="submit">Search</button>
    </form>
  );
};
