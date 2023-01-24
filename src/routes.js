const cubeController = require('./controllers/cubeContoller');
const router = require('express').Router();

// const express = require('express');
// const Router = express.Router;
// const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about')
});

// router.get('/create', (req, res) => {
//     res.render('about');
// });

router.get('/create', cubeController.getCreateCube);

module.exports = router;
