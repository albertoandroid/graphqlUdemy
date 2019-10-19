const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/coursedb', {
  useNewUrlParser: true,
  useUnifiedTopology: true})
  .then(()=> console.log('Conectado a MongoDB correctamente'))
  .catch(err => console.log('No se ha Conectado a MongoDB correctamente'))

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true

}))

app.listen(3131, ()=>{
    console.log('Escuchando del puerto: 3131')
})