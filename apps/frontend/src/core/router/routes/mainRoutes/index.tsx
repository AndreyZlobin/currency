import { Outlet } from 'react-router-dom';
import { lazy } from 'react';
const DonatePage = lazy(() => import('@pages/Donate'));

export const mainRoutes = {
  path: '/',
  element: <Outlet />,
  children: [
    {
      index: true,
      element: <DonatePage />,
    },
  ],
};
