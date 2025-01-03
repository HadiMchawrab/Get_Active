const express = require('express');
const router = express.Router();

(async () => {
    const { getClubsNearLocation, getTrainersNearLocation } = await import('./v1/Methods.js');

    router.get('/', (req, res) => {
        res.send('Welcome to API v1');
    });

    router.get('/clubs', async (req, res) => {
        try {
            const location = req.query.location;
            const clubs = await getClubsNearLocation(location);
            res.json(clubs);
        } catch (error) {
            console.error('Error getting clubs:', error);
            res.status(500).send('Internal Server Error');
        }
    });

    router.get('/trainers', async (req, res) => {
        try {
            const location = req.query.location;
            const trainers = await getTrainersNearLocation(location);
            res.json(trainers);
        } catch (error) {
            console.error('Error getting trainers:', error);
            res.status(500).send('Internal Server Error');
        }
    });

    router.post('/register', async (req, res) => {
        try {
            const user = req.body.user;
            const type = req.body.type;
            await registerUser(user, type);
            res.send('User registered successfully');
        } catch (error) {
            console.error('Error registering user:', error);
            res.status(500).send('Internal Server Error');
        }
    });
})();

module.exports = router;