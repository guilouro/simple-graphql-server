import express from 'express';
import bodyParser from 'body-parser';
import  { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from './schema';

const app = express();

const port = 3000;
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
}));
app.listen(port, () => console.log(`Server on ${port}`));