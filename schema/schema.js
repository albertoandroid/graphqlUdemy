const graphql = require('graphql')

const {GraphQLObjectType, GraphQLString} = graphql

const CourseType = new GraphQLObjectType({
    name: 'Course',
    fields: ()=>({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        language: {type: GraphQLString},
        date: {type: GraphQLString}
    })

})