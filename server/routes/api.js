const express = require('express');
const router = express.Router();
const database = require('../lib/database.js');

router.get('/', (req, res) => {
    res.json({ 'message': 'WORKS' })
});

router.get('/idiot', async (req, res) => {
    try {
        let dbQuery = await database.getUsers();
        res.json({ 'idiots': dbQuery })
    } catch (error) {
        res.json({ 'message': 'Wrong' })
    }
});

router.post('/idiot/search', async (req, res) => {
    try {
        console.log(req.body)
        let dbQuery = await database.search(req.body.query);
        res.json({ 'idiots': dbQuery })
    } catch (error) {
        res.json({ 'message': 'Wrong' })
    }
})

router.get('/like/:pk', async (req, res) => {
    try {
        await database.giveLike(req.params.pk)
        res.json({ 'message': 'LIKE OK' })
    } catch (error) {
        res.json({ 'message': 'Wrong' })
    }
})


module.exports = router;

