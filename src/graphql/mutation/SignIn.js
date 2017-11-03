import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLBoolean
} from 'graphql/type';
import AuthorType from "../type/AuthorType";
import Author from "../../model/Author";
import SubjectType from "../type/SubjectType";
import Subject from "../../model/Subject";
import UserType from "../type/UserType";
import User from "../../model/User";
import jwt from 'jsonwebtoken';
import {JWT_SECRET_KEY} from "../../util/Config";

export default {
    type: new GraphQLNonNull(GraphQLString),
    description: 'Sign in to system',
    args: {
        email: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)},
    },
    resolve: (parent, {email, password}) => {
        return new Promise((resolve, reject) => {
            User.findOne({
                email: email,
                password: password,
            }, (err, user) => {
                if (err) return reject(err);
                if (!user) return reject(new Error('wrong_credential'));
                const token = jwt.sign({_id: user._id, email: user.email}, JWT_SECRET_KEY);
                resolve(token);
            });
        });

    }
}