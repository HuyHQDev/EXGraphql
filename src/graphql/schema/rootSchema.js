const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLBoolean
} = require('graphql/type');

const authorType = new GraphQLObjectType({
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

const rootSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            authors: {
                type: new GraphQLList(authorType),
                resolve: (root, {itemId}, source, fieldASTs) => {
                    return [
                        {id: '1', name: 'Quang Huy', twitterHandle: 'no-link'},
                        {id: '2', name: 'XXX', twitterHandle: 'no-link'},
                        {id: '3', name: 'YYY', twitterHandle: 'no-link'},
                    ];
                }
            }
        }
    })

});

module.exports = rootSchema;

