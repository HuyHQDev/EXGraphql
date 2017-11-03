import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLBoolean,

} from 'graphql/type';

const TodoType = new GraphQLObjectType({
    name: 'Todo',
    description: 'Todo',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'Id of todo',
        },
        title: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'Title of todo',
        },
        content: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'Content of todo',
        },
        priority: {
            type: GraphQLInt,
            description: 'Priority of todo',
        },
        createdAt: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'Date that create the todo'
        },
        updatedAt: {
            type: GraphQLString,
            description: 'Date that update the todo'
        },
        userId: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'User id that create the todo',
        },
        subjectId: {
            type: GraphQLString,
            description: 'Subject id of the todo',
        },
    })
});

export default SubjectType;