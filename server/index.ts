import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
import bodyparser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import ConnectDB from './db/index';
import rootValue from './graphql/resolverIndex';
import typeDefs from './graphql/typeIndex';
import connectDB from './db/index';

process.on(`uncaughtException`, console.error);

interface Error {
	status?: number;
	message?: string;
}

const app = express();

// configure express middleware
app.use(helmet());
app.use(bodyparser.json());
app.use(cors());

// // build stitched graphql schema
// const schema = buildSchema(typeDefs);

// // connext express to graphql
// app.use(
// 	'/graphql',
// 	graphqlHTTP({
// 		schema,
// 		rootValue,
// 		pretty: true,
// 		graphiql: true,
// 	})
// );

// configure global error handler
app.use(
	(
		error: Error,
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) => {
		const status = error.status || 500;
		res.status(status).json({
			message: error.message,
		});
	}
);

connectDB();

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
