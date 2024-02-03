/**
 * This file will contain all of the different routes that the application utilizes to handle different requests
 * such as GET, POST, DELETE and PATCH. This is done with the express router. 
 */

const express = require('express')

const router = express.Router()

/**
 * The following routes will allow users to accomplish several main tasks within the workout application. 
 */

// GET all workouts
router.get('/', (req, res) => {
    res.json({mssg:'GET all workouts'})
}) 

// GET a single workout ':' means that whatever follows is variable

router.get('/:id', (req, res) => {
    res.json({mssg:'GET a specific workout'})
})

// POST a new workout (to create a new workout)

router.post('/', (req, res) => {
    res.json({mssg:'POST a new workout'})
})

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({mssg:'DELTE a specific workout'})
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg:'UPDATE a workout'})
})

module.exports = router // export the router and then we can use the "require" keyword to include it in other places for the application

