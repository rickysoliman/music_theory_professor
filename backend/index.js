const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

app.post('/postData', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let body = new User(req.body);
    body.save()
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    res.end();
});

app.listen(PORT, () => {
    console.log(`listening at https://localhost:${PORT}`);
});
