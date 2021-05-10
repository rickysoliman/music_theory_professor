const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;
const mongoose = require('mongoose');
const User = require('./model');
const router = express.Router();

app.use(cors());
app.use('/', router);

mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log(`Connection with MongoDB was successful`);
});

router.route('/getData').get((req, res) => {
    User.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        };
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});