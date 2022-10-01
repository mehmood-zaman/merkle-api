import express from 'express';
import { Container } from 'typedi';
import MoviesController from '../controllers/MoviesController';
import authenticated from '../middlewares/Authenticated';

const router = express.Router();

const moviesController = Container.get(MoviesController);

router.post('/search-movies', authenticated, moviesController.searchMovies);

export default router;
