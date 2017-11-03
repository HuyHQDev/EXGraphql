import Author from "../../model/Author";

import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLBoolean
} from 'graphql/type';
import AddAuthor from "../mutation/AddAuthor";
import Authors from "../query/Authors";
import Subjects from "../query/Subjects";
import AddSubject from "../mutation/AddSubject";
import Register from "../mutation/Register";
import SignIn from "../mutation/SignIn";



const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        authors: Authors,
        subjects: Subjects,
    }
});

const MutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        addAuthor: AddAuthor,
        addSubject: AddSubject,
        register: Register,
        signIn: SignIn,
    }),
});

const Schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,

});

export default Schema;

