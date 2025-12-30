const mongoose = require("mongoose");

const BotSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    }, 
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Bot = mongoose.model("bot", BotSchema);

module.exports = Bot;
