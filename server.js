import Schema from "./src/graphql/schema/Schema";

import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/easy-graphql-express');
const db = mongoose.connection;
const server = express();
import expressJWT from 'express-jwt';
import jwt from 'jsonwebtoken';
import User from "./src/model/User";
import {JWT_SECRET_KEY} from "./src/util/Config";

db.on('error', () => {
    console.log('---FAILED to connect to mongoose')
});
db.once('open', () => {
    console.log('+++Connected to mongoose')
});

server.use('/graphql', expressJWT({
    secret: JWT_SECRET_KEY,
    credentialsRequired: false,
}));

const retrieveToken = (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
};

server.use('/graphql', function(req, res, done) {
    const token = retrieveToken(req);
    try {
        const user = jwt.verify(token, JWT_SECRET_KEY);
        req.context = {
            user: user,
        };
    }
    catch (err) {
        console.log(err);
    }
    done();
});

server.use('/graphql', graphqlHTTP(req => ({
    schema: Schema,
    graphiql: true,
})));

module.exports = server;
