import { ApplicationError } from '../utils/ApiError';
import { Service } from 'typedi';
import { LoggerClient } from './LoggerClient';
import Item from '../models/Items';
import config from '../config/Config';

@Service()
export default class UserService {
  constructor(public logger: LoggerClient) {}

  //Add new Item
  addNewItem = async (name: string, price: number) => {
    try {
      const newItem = new Item({ name, price });
      const savedItem = await newItem.save();
      return savedItem;
    } catch (error) {
      throw error;
    }
  };

  //Get an Item
  getAnItem = async (id: string) => {
    try {
      const ItemDetails = await Item.findById({ _id: id });
      return ItemDetails;
    } catch (error) {
      throw error;
    }
  };

  //Update an Item
  updateAnItem = async (id: string, name: string, price: number) => {
    try {
      const ItemDetails = await Item.findByIdAndUpdate({ _id: id }, { name, price });
      return ItemDetails;
    } catch (error) {
      throw error;
    }
  };

  //Delete an Item
  deleteAnItem = async (id: string) => {
    try {
      const ItemDetails = await Item.findOneAndDelete({ _id: id });
      return ItemDetails;
    } catch (error) {
      throw error;
    }
  };
}
