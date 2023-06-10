import { Routes, Route } from 'react-router-dom';
import { Home } from '@GlobalPages/Home';
import { Page2 } from '@GlobalPages/Page2';

export const RouterProvider = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/page2' element={<Page2 />} />
    </Routes>
  );
}