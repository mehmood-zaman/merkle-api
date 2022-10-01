import express from 'express';
import authRoute from './AuthRoute';
import moviesRoute from './MoviesRoutes';

const router = express.Router();

const allRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/movies',
    route: moviesRoute,
  },
];

allRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
