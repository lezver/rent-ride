import './Catalog.scss';
import { ListCars, Loader } from '../../components';
import { useEffect, useState } from 'react';
import { getCars } from '../../services/Api';

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(8);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      const { data } = await getCars();

      return setCars(data);
    };
    fetchCars();
    // eslint-disable-next-line
  }, []);

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

      <ListCars cars={cars?.slice(0, page)} />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {page < cars.length && (
            <button type="button" onClick={() => loadMore(8)}>
              Load more
            </button>
          )}
        </>
      )}
    </section>
  );
};

export default Catalog;
