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

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        course: {
            type: CourseType,
            args:{
                id: {type: GraphQLString}
            },
            resolve(parent, args){
                return 
            }
        }
    }
})