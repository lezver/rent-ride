import { Route, Routes } from 'react-router-dom';
import { lazy, useState } from 'react';
import './App.scss';
import { Layout } from '../';
import { Home, Favorites, NotFound } from '../../pages';
import { Info } from '../';
const Catalog = lazy(() => import('../../pages/Catalog/Catalog'));

export const App = () => {
  const [chooseCar, setChooseCar] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites choose={setChooseCar} />}>
          <Route path="info" element={<Info car={chooseCar} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
