const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
const jsonParser = bodyParser.json();
app.use(jsonParser);

const uri = 'mongodb+srv://rickysoliman:C%23minor7@cluster0.n5uas.mongodb.net/testDB?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    auth: {
        user: 'rickysoliman',
        password: 'C#minor7'
    }
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});

// Schema
const { Schema } = mongoose;
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    quizScores: [{
        quizType: String,
        score: Number
    }]
});

// Model
const User = mongoose.model('User', userSchema);

// HTTP request logger
app.use(morgan('tiny'));

// Routes

// get all data
app.get('/getData', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    User.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
        });
});

// get quiz scores for given user
app.get('/getQuizScores/:firstName', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let firstName = req.params.firstName;
    User.find({ firstName })
        .then(response => {
            res.send(response[0].quizScores);
            res.end();
        })
        .catch(err => {
            console.log(err);
        });
});

// save a new user to the database
app.post('/postData', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    let body = new User(req.body);
    body.save()
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
});

app.listen(PORT, () => {
    console.log(`listening at https://localhost:${PORT}`);
});
