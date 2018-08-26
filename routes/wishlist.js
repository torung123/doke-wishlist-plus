const express = require('express');
const router = express.Router();
const config = require('../config');

router.get('/', (req, res, next) => {
    res.render('app', {
        title: 'Haravan App',
        apiKey: config.HARAVAN_API_KEY,
        shop: 'torung.myharavan.com',
      });
})

module.exports = router;