import { mergeResolvers } from 'merge-graphql-schemas';

const resolvers: any[] = [];

const rootValue = mergeResolvers(resolvers);

export default rootValue;
