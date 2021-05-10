const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3001;

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
    name: String
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

app.listen(PORT, () => {
    console.log(`listening at https://localhost:${PORT}`);
});
