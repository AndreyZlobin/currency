import { lazy } from 'react';

const NotFoundPage = lazy(() => import('@pages/NotFound'));

export const notFoundRoutes = {
  path: '*',
  element: <NotFoundPage />,
};
