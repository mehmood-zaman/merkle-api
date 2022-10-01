import { ApplicationError } from '../utils/ApiError';
import { Service } from 'typedi';
import { LoggerClient } from './LoggerClient';
import config from '../config/Config';
import jwt from 'jsonwebtoken';
@Service()
export default class UserService {
  constructor(public logger: LoggerClient) {}

  signIn = async (username: string, password: string) => {
    try {
      if (username === 'test@merkle' && password == '12345678') {
        //generate token and send data along

        const token = jwt.sign({ username, password }, config.JWT_SECRET);

        return {
          token,
        };
      } else {
        throw new ApplicationError('Username or password is incorrect');
      }
    } catch (error) {
      throw error;
    }
  };
}
