const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    name: String
});

// let detail = new Schema({
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// });

// let user = new Schema({
//     firstName: {
//         type: String
//     },
//     lastName: {
//         type: String
//     },
//     email: {
//         type: String
//     },
//     profilePic: {
//         type: String
//     },
//     quizScores: [{
//         quizType: {
//             type: String
//         },
//         score: {
//             type: Number
//         }
//     }]
// });

module.exports = mongoose.model('User', userSchema);