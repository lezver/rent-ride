import './Catalog.scss';
import { ListCars, Loader, Filter } from '../../components';
import { useEffect, useState } from 'react';
import { getCars } from '../../services/Api';
import { BsDownload } from 'react-icons/bs';

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const { data } = await getCars();

      setCars(data);
    };
    fetchCars();

    // eslint-disable-next-line
  }, []);

  useEffect(() => setFilteredCars(cars), [cars]);

  const loadMore = edit => {
    setIsLoading(true);
    setTimeout(() => {
      setPage(page + edit);
      setIsLoading(false);
    }, 500);
  };

  return (
    <section className="catalog">
      <h2>Catalog</h2>

      <Filter cars={cars} filter={setFilteredCars} page={setPage} />

      <ListCars
        cars={
          filteredCars.length
            ? filteredCars?.slice(0, page)
            : cars?.slice(0, page)
        }
      />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {page < (filteredCars.length ? filteredCars.length : cars.length) && (
            <button
              className="catalog__load-more"
              type="button"
              onClick={() => loadMore(8)}
            >
              Load more
              <BsDownload size={24} />
            </button>
          )}
        </>
      )}
    </section>
  );
};

export default Catalog;
