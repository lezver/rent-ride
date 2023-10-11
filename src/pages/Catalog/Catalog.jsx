import './Catalog.scss';
import { ListCars } from '../../components';
import { useEffect, useState } from 'react';
import { getCars } from '../../services/Api';

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(8);

  useEffect(() => {
    const fetchCars = async () => {
      const { data } = await getCars();

      return setCars(data);
    };
    fetchCars();
  }, []);

  const loadMore = edit => setPage(page + edit);

  return (
    <section className="catalog">
      <h2>Catalog</h2>
      <ListCars cars={cars.slice(0, page)} />
      {page < cars.length && (
        <button type="button" onClick={() => loadMore(8)}>
          Load more
        </button>
      )}
    </section>
  );
};

export default Catalog;
