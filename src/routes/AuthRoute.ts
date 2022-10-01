import express from 'express';
import { SignInRequest } from '../requests/SignInRequest';
import RequestValidator from '../middlewares/RequestValidator';
import { Container } from 'typedi';
import AuthController from '../controllers/AuthController';

const router = express.Router();

const authController = Container.get(AuthController);

router.post('/sign-in', RequestValidator.validate(SignInRequest), authController.signIn);
// router.get('/users', authenticated, authController.getAllUsers);
export default router;
