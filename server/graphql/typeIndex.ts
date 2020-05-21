import { mergeTypes } from 'merge-graphql-schemas';

const types: any[] = [];

const typeDefs = mergeTypes(types);

export default typeDefs;
