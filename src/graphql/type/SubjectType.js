import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLBoolean,

} from 'graphql/type';

const SubjectType = new GraphQLObjectType({
    name: 'Subject',
    description: 'Subject of todo',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'Id of subject',
        },
        title: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'Title of subject',
        },
        orderNumber: {
            type: GraphQLInt,
            description: 'Order number in subject list',
        },
        createdAt: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'Date that create the subject'
        },
        updatedAt: {
            type: GraphQLString,
            description: 'Date that update the subject'
        },
        userId: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'User id that create the subject',
        },
    })
});

export default SubjectType;