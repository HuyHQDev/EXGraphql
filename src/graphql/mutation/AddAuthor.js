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

export default {
    type: AuthorType,
    description: 'Add new author to database and return author created',
    args: {
        id: {type: new GraphQLNonNull(GraphQLString)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        twitterHandle: {type: GraphQLString},
    },
    resolve: (parent, {id, name, twitterHandle}) => {
        const author = new Author({
            id,
            name,
            twitterHandle
        });
        return author.save();
    }
}