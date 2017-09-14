import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './types.graphql';
import users from '../data/users';

const resolvers = {
    Query: {
        user: (_, args) => users.find(user => user.id === args.id),
        totalUsers: () => users.length,
        allUsers: () => users,
    }
}

export default makeExecutableSchema({ typeDefs, resolvers });