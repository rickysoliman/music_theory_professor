const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('erro', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`we're connected!`));

const kittySchema = new mongoose.Schema({
    name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);


kittySchema.methods.speak = () => {
    const greeting = this.name ? `Meow name is ${this.name}` : `I don't have a name. :(`;
    console.log(greeting);
};

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name);

silence.save((err, silence) => {
    if (err) return console.err(err);
    silence.speak();
});

// const Kitten = mongoose.model('Kitten', kittySchema);

// const fluffy = new Kitten({ name: 'Fluffy' });
// fluffy.speak();

// fluffy.save((err, fluffy) => {
//     if (err) return console.error(err);
//     fluffy.speak();
// });








// const express = require("express");
// const app = express();
// const cors = require("cors");
// const PORT = 4000;
// const mongoose = require("mongoose");
// const router = express.Router();
// const user = require("./model");

// app.use(cors());

// // 'mongodb://username:password@host:port/database'

// mongoose.connect("mongodb://localhost:27017/user", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const connection = mongoose.connection;

// connection.once("open", function () {
//     console.log("Connection with MongoDB was successful");
// });

// app.use("/", router);

// router.route("/getData").get(function (req, res) {
//     user.find({}, function (err, result) {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(result);
//         }
//     });
// });

// app.listen(PORT, function () {
//     console.log("Server is running on Port: " + PORT);
// });