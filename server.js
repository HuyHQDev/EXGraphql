const express = require('express');
const graphqlHTTP = require('express-graphql');
const rootSchema = require('./src/graphql/schema/rootSchema.js');

const server = express();

server.use('/graphql', graphqlHTTP(req => ({
    schema: rootSchema,
    graphiql: true,
})));

module.exports = server;
