const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: String,
    email: String,
    householdCount: Number,
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;