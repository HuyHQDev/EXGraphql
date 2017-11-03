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

export default {
    type: UserType,
    description: 'Register user',
    args: {
        email: {type: new GraphQLNonNull(GraphQLString)},
        nickname: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)},
    },
    resolve: (parent, {email, nickname, password}) => {
        const user = new User({
            email,
            nickname,
            password,
        });
        return user.save();
    }
}