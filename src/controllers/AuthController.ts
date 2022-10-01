import { Request } from 'express';
import UserService from '../services/UserService';
import { asyncWrapper } from '../utils/asyncWrapper';
import { SuccessResponse } from '../utils/SuccessResponse';
import { Service } from 'typedi';

@Service()
export default class AuthController {
  constructor(public userService: UserService) {}

  signIn = asyncWrapper(async (req: Request) => {
    const { username, password } = req.body;
    const response = await this.userService.signIn(username, password);
    return new SuccessResponse(response);
  });
}
