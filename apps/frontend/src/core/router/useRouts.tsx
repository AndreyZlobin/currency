import { useRoutes } from 'react-router-dom';

import { mainRoutes, notFoundRoutes } from './routes';

export const useRouts = () => useRoutes([mainRoutes, notFoundRoutes]);
