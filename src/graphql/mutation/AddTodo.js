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
import TodoType from "../type/TodoType";
import Todo from "../../model/Todo";

export default {
    type: TodoType,
    description: 'Add new subject to database and return todo created',
    args: {
        title: {type: new GraphQLNonNull(GraphQLString)},
        content: {type: new GraphQLNonNull(GraphQLString)},
        subjectId: {type: GraphQLString},
        priority: {type: GraphQLInt}
    },
    resolve: (parent, {title, content, subjectId, priority}, {user}) => {
        if (!user) {
            throw new Error('wrong_credential');
        }
        const todo = new Todo({
            title,
            content,
            subjectId,
            priority,
            userId: user._id,
        });
        return todo.save();
    }
}