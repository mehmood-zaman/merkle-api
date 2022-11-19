import { Request } from 'express';
import ItemsService from '../services/ItemssService';
import { asyncWrapper } from '../utils/asyncWrapper';
import { SuccessResponse } from '../utils/SuccessResponse';
import { Service } from 'typedi';

@Service()
export default class AuthController {
  constructor(public itemsService: ItemsService) {}

  //Add a new item
  addNewItem = asyncWrapper(async (req: Request) => {
    const { name, price } = req.body;
    const response = await this.itemsService.addNewItem(name, price);
    return new SuccessResponse(response, 200);
  });

  // Get an item
  getAnItem = asyncWrapper(async (req: Request) => {
    const { id } = req.params;
    const response = await this.itemsService.getAnItem(id);
    return new SuccessResponse(response, 200);
  });

  // Update an item
  updateAnItem = asyncWrapper(async (req: Request) => {
    const { name, price } = req.body;
    const { id } = req.params;
    const response = await this.itemsService.updateAnItem(id, name, price);
    return new SuccessResponse(response, 200);
  });

  // Delete an item
  deleteAnItem = asyncWrapper(async (req: Request) => {
    const { id } = req.params;
    const response = await this.itemsService.deleteAnItem(id);
    return new SuccessResponse(response, 200);
  });
}
