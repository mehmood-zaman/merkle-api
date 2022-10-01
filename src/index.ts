import 'reflect-metadata';
import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { NotFoundError } from './utils/ApiError';
import ErrorHandler from './middlewares/ErrorHandler';
import Config from './config/Config';
import routes from './routes';
import http from 'http';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from '../swagger';
import path from 'path';
const app: Application = express();
const PORT = Config.port || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use((req: Request, res: Response, next: NextFunction) => next(new NotFoundError(req.path)));

app.use(ErrorHandler.handle());

let server: http.Server;

const startServer = async () => {
  try {
    server = app.listen(PORT, (): void => {
      console.log(`Connected successfully on port ${PORT}`);
    });
  } catch (error: any) {
    console.error(`Error occurred: ${error.message}`);
  }
};

startServer();

ErrorHandler.initializeUnhandledException();

process.on('SIGTERM', () => {
  console.info('SIGTERM received');
  if (server) server.close();
});
