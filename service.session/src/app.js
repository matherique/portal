import express from 'express';
import bodyParser from 'body-parser';
import graphqlHttp from 'express-graphql';
import axios from 'axios';
import routes from './routes';
import schema from './app/graphql';

class AppController {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(bodyParser.json());
    // this.express.use(async (req, res, next) => {
    //   const token = req.headers.authorization;
    //   try {
    //     const { usuario } = await jwt.verify(token, SECRET);
    //     req.usuario = usuario;
    //   } catch (e) {
    //     console.log(e);
    //   }
    //   next();
    // });
    this.express.use(
      graphqlHttp(req => ({
        schema,
        graphiql: !!process.env.GRAPHIQL || false,
      }))
    );
  }

  routes() {
    this.express.use(routes);
  }
}

export default new AppController().express;
