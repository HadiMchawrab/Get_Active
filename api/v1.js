import './v1/Methods.js';

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to API v1');
})

router.get('/clubs', (req, res) => {
    try {location = req.query.location;} catch (error) {console.error('Error getting location:', error);throw error;}
    const clubs = getClubsNearLocation(location);
    res.json(clubs);
})

router.get('/trainers', (req, res) => {
    try {location = req.query.location;} catch (error) {console.error('Error getting location:', error);throw error;}
    const trainers = getTrainersNearLocation(location);
    res.json(trainers);
})

router.post('/register', (req, res) => {
    try {user = req.body.user;} catch (error) {console.error('Error getting user:', error);throw error;}
    try {type = req.body.type;} catch (error) {console.error('Error getting type:', error);throw error;}
    try {registerUser(user, type);} catch (error) {console.error('Error registering user:', error);throw error;}
    res.send('User registered successfully');    
})

router.post('/profile', (req, res) => {
    try {user = req.body.user;} catch (error) {console.error('Error getting user:', error);throw error;}
    try {getProfile(user);} catch (error) {console.error('Error getting profile:', error);throw error;}
    res.send('Profile retrieved successfully');    
})

module.exports = router;