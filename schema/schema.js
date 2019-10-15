const graphql = require('graphql')

const {GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLBoolean, GraphQLString, GraphQLSchema} = graphql

var courses = [
    {id: '1', name: 'Patrones diseño Java', language: 'Java', date: '2022'},
    {id: '2', name: 'Patrones diseño Kotlin', language: 'Kotlin', date: '2022'},
    {id: '3', name: 'Patrones diseño C', language: 'C', date: '2022'},
    {id: '4', name: 'Patrones diseño C++', language: 'C++', date: '2022'},   
]

var professors = [
    {id: '1', name: 'Alberto', age: 30, active: true, date: '2022'},
    {id: '2', name: 'Maria', age: 23, active: false, date: '2022'},
    {id: '3', name: 'Pepe', age: 30, active: true, date: '2022'},
    {id: '4', name: 'Laura', age: 30, active: true, date: '2022'},
]

const CourseType = new GraphQLObjectType({
    name: 'Course',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        language: {type: GraphQLString},
        date: {type: GraphQLString}
    })
})

const ProfessorType = new GraphQLObjectType({
    name: 'Professor',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        active: {type: GraphQLBoolean},
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
                return courses.find(curso=>curso.id ===args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})