const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: true,
        enum: ['user']
    },
    text: {
        type: String,
        required: true,
    }, 
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("user", UserSchema);

module.exports = User