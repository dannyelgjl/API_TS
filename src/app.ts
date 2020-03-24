import express from 'express';
import routes from './routes';
import cors from 'cors';

import './database';

class App {
  public server: express.Application;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.server.use(express.json());
    this.server.use(cors());
  }

  private routes(): void {
    this.server.use(routes);
  }
}

export default new App().server;
