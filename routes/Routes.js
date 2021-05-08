const express = require('express');
const router = express.Router();
const User = require('../models/Model');

router.route('/postData').post((req, res) => {
    const name = req.body.name;
    const newUser = new User({ name });

    newUser.save();
});

router.route('/getData').get((req, res) => {
    User.find()
        .then(data => res.json(data));
});

module.exports = router;