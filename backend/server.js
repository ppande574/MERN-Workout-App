require("dotenv").config(); // Configures app to use the added dotenv package

const express = require("express");
const workoutRoutes = require('./routes/workouts') // workouts.js file which will have all our needed routes

// express app
const app = express();

/**
 * Middleware which has access to the req and res objects and the next middleware function in the app's req/response cycle
 * Performs actions such as modifying the request or response objects, terminating the request-response cycle, 
 * and calling the next middleware function in the stack. For now it's just logging the req path and method. 
 * next() means that the middleware has finished its job, and that control should be passed to the next middleware 
 * or route handler in the stack. Can be used for various purposes, such as authentication, logging, parsing request bodies, 
 * handling errors, and more.
 */

app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// responding to GET requests (the route goes in the parentheses - for now '/' specifies the root which is just localhost:4000)
// app.get("/", (req, res) => {
//   res.json({ mssg: "Welcome to the App" }); // So we are responding with a JSON that has the "mssg" parameter anytime the req comes through
// });

// whatever routes we have the app will use becuase we've attached them to workoutRoutes
app.use('/api/workouts', workoutRoutes) // first argument specifies the path that the workoutRoutes will be appended to

//listen for requests at a particular port number stored as an env variable
app.listen(process.env.PORT, () => {
  console.log("Listening on port ", process.env.PORT);
});
