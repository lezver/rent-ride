import './Catalog.scss';
import { ListCars, Loader } from '../../components';
import { useEffect, useState } from 'react';
import { getCars } from '../../services/Api';

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(8);
  const [isLoadingBtn, setIsLoadingBtn] = useState(false);
  const [isLoadingFetch, setIsLoadingFetch] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      const { data } = await getCars();
      setIsLoadingFetch(true);

      setTimeout(() => {
        setCars(data);
        setIsLoadingFetch(false);
      }, 500);
    };
    fetchCars();
    // eslint-disable-next-line
  }, []);

  const loadMore = edit => {
    setIsLoadingBtn(true);
    setTimeout(() => {
      setPage(page + edit);
      setIsLoadingBtn(false);
    }, 500);
  };

  return (
    <section className="catalog">
      <h2>Catalog</h2>

      {isLoadingFetch ? (
        <Loader />
      ) : (
        <>
          <ListCars cars={cars.slice(0, page)} />

          {isLoadingBtn ? (
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
        </>
      )}
    </section>
  );
};

export default Catalog;
