import express from 'express';
import bodyParser from 'body-parser';
import graphqlHttp from 'express-graphql';
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
		this.express.use(
			graphqlHttp({ schema, graphiql: !!process.env.GRAPHIQL || false })
		);
	}

	routes() {
		this.express.use(routes);
	}
}

export default new AppController().express;
