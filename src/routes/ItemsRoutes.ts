import express from 'express';
import { Container } from 'typedi';
import ItemsController from '../controllers/ItemsController';
import authenticated from '../middlewares/Authenticated';

const router = express.Router();

const moviesController = Container.get(ItemsController);

//Add new item
router.post('/', moviesController.addNewItem);

//Get an item
router.get('/:id', moviesController.getAnItem);

//Update an item
router.put('/:id', moviesController.updateAnItem);

//Delete an item
router.delete('/:id', moviesController.deleteAnItem);

export default router;
