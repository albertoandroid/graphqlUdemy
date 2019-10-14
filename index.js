const express = require('express')
const graphqlHTTP = require('express-graphql')

const app = express()

app.listen(3131, ()=>{
    console.log('Escuchando del puerto: 3131')
})