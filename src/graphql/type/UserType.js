import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLBoolean,

} from 'graphql/type';

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'User of application',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'Id of user',
        },
        email: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'Email of user',
        },
        nickname: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'Nickname of user',
        },
        password: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'Password of user',
        },
        createdAt: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'Date that create the user'
        },
        updatedAt: {
            type: GraphQLString,
            description: 'Date that update the user'
        }
    })
});

export default UserType;