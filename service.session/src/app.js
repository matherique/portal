import express from 'express';
import bodyParser from 'body-parser';
import graphqlHttp from 'express-graphql';
import { renderGraphiQL } from 'express-graphql/dist/renderGraphiQL';
import routes from './routes';
import schema from './app/graphql';

const SECRET = 'vaisefudercapado';

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
        // context: {
        //   usuario: req.usuario,
        // },
      }))
    );
  }

  routes() {
    this.express.use(routes);
  }
}

export default new AppController().express;
