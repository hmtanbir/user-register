const mongoose = require('mongoose');
const User = mongoose.model("User", {
    firstName: String,
    lastName: String,
    address: String,
    phone: String,
    email: String,
    age: Number,
});

module.exports = { User };