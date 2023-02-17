const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

router.use('/api', apiRouter);

router.get("/", (req, res) => {
    res.status(200).json({
        success: 'Welcome to Starter project for express with JWT, sequelize, postgres'
    })
})

module.exports = router;