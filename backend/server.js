const express = require('express')

// express app
const app = express()

//listen for requests at a particular port number

app.listen(4000, () => {
    console.log("Listening on port 4000")
})

// responding to GET requests (the route goes in the parentheses for now '/' specifies the root which is just localhost:4000)

app.get('/', (req, res) => {
    res.json({mssg:"Welcome to the App"}) // So we are responding with a JSON that has the "mssg" parameter anytime the req comes through
})