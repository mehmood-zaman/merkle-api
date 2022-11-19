import express from 'express';
import { Container } from 'typedi';
import ItemsController from '../controllers/ItemsController';
import authenticated from '../middlewares/Authenticated';

const router = express.Router();

const moviesController = Container.get(ItemsController);

//Add new item
router.post('/', authenticated, moviesController.addNewItem);

//Get an item
router.get('/:id', authenticated, moviesController.getAnItem);

//Update an item
router.put('/:id', authenticated, moviesController.updateAnItem);

//Delete an item
router.delete('/:id', authenticated, moviesController.deleteAnItem);

export default router;
