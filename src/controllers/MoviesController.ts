import { Request } from 'express';
import MoviesService from '../services/MoviesService';
import { asyncWrapper } from '../utils/asyncWrapper';
import { SuccessResponse } from '../utils/SuccessResponse';
import { Service } from 'typedi';

@Service()
export default class AuthController {
  constructor(public moviesService: MoviesService) {}

  searchMovies = asyncWrapper(async (req: Request) => {
    const { title, year, type } = req.body;
    const response = await this.moviesService.searchMovies(title, year, type);
    return new SuccessResponse(response);
  });
}
