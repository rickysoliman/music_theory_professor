const mongoose = require('mongoose');

const userSchema = {
    name: String
};

const User = mongoose.model('User', userSchema);

module.exports = User;