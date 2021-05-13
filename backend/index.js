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

mongoose.set('useFindAndModify', false);

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

// get quiz scores for given user by email
app.get('/getQuizScores/:email', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let email = req.params.email;
    User.find({ email })
        .then(response => {
            res.send(response[0].quizScores);
            res.end();
        })
        .catch(err => {
            console.log(err);
        });
});

// get all info for a given user
app.get('/getData/:firstName', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let firstName = req.params.firstName;
    User.find({ firstName })
        .then(response => {
            res.send(response);
            res.end();
        })
        .catch(err => {
            console.log(err);
        });
});

// get a user by email
app.get('/getByEmail/:email', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let email = req.params.email;
    User.find({ email })
        .then(response => {
            // console.log(response);
            res.send(response);
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
            res.send(response.body);
        })
        .catch(error => {
            console.log(error);
        });
});

// edit a user's name
app.post('/changeName', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    console.log(req.body);
    User.updateOne(
        { _id: req.body.id },
        { $set: { firstName: req.body.firstName, lastName: req.body.lastName } }
    )
    .then(response => {
        console.log('updated first and last names');
    })
    .catch(err => {
        console.log(err);
    });
});

// save a user's quiz results
app.post('/postQuizResults', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    let data = {
        quizType: req.body.quizType,
        score: req.body.percentage
    };
    User.findOneAndUpdate(
        { _id: req.body.id },
        { $push: { quizScores: data }},
    )
    .then(response => {
        console.log('updated!');
        res.send(response);
    })
    .catch(err => {
        console.log(err);
    });
});

app.listen(PORT, () => {
    console.log(`listening at https://localhost:${PORT}`);
});
