import express from 'express';
import authRoute from './AuthRoute';
import itemsRoute from './ItemsRoutes';

const router = express.Router();

const allRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/item',
    route: itemsRoute,
  },
];

allRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
