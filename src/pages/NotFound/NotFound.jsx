import { BiSolidCarCrash } from 'react-icons/bi';
import './NotFound.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate('/', { replace: true }), 1000); // eslint-disable-next-line
  }, []);

  return (
    <section className="not-found">
      <BiSolidCarCrash size={250} />

      <h2>Sorry, but this page wasn't found...</h2>
    </section>
  );
};
