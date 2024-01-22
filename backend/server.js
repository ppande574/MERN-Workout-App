require('dotenv').config() // Configures app to use the added dotenv package

const express = require('express')

// express app
const app = express()

//listen for requests at a particular port number stored as an env variable

app.listen(process.env.PORT, () => {
    console.log("Listening on port ", process.env.PORT);
})

// responding to GET requests (the route goes in the parentheses for now '/' specifies the root which is just localhost:4000)

app.get('/', (req, res) => {
    res.json({mssg:"Welcome to the App"}) // So we are responding with a JSON that has the "mssg" parameter anytime the req comes through
})
