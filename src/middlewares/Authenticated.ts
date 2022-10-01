import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import config from '../config/Config';
const authenticated = async (req: Request, res: Response, next: NextFunction) => {
  // check user authentication status;?

  const token = req.header('x-auth-token');

  //Check for JWT TOken
  if (!token) return res.status(401).json({ message: 'Token Authorization Denied..!' });

  try {
    //Verify Token
    jwt.verify(token, config.JWT_SECRET);
    next();
  } catch (err) {
    res.status(400).json({ message: 'Please Login...' });
  }
};
export default authenticated;
