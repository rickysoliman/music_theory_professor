const mongoose = require("mongoose");

const { Schema } = mongoose;

// let detail = new Schema({
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// });

let user = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    profilePic: String,
    quizScores: [{
        quizType: String,
        score: Number
    }]
});

module.exports = mongoose.model("user", user);