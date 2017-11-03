import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLBoolean,

} from 'graphql/type';

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'Author',
    fields: () => ({
        id: {
            type: GraphQLString,
            description: 'The id of the author.',
        },
        name: {
            type: GraphQLString,
            description: 'The name of the author.',
        },
        twitterHandle: {
            type: GraphQLString,
            description: 'Twitter of the author'
        }
    })
});

export default AuthorType;