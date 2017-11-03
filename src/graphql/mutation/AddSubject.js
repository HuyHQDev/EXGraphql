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
    type: SubjectType,
    description: 'Add new subject to database and return subject created',
    args: {
        title: {type: new GraphQLNonNull(GraphQLString)},
        userId: {type: new GraphQLNonNull(GraphQLString)},
    },
    resolve: (parent, {title}, {user}) => {
        if (!user) {
            throw new Error('wrong_credential');
        }
        const subject = new Subject({
            title,
            userId: user._id,
        });
        return subject.save();
    }
}