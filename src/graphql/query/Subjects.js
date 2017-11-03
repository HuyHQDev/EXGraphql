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

export default {
    type: new GraphQLList(SubjectType),
    resolve: (parent, {userId}, {user}) => {
        if (!user) {
            throw new Error('wrong_credential');
        }
        return Subject.find({
            userId: user._id,
        });
    },
}