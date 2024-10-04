const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    birthDate: { type: Date, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);
