const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    name: String,
    phone: String,
    unreadCount: {
        type: Number,
        default: 0
    }
}, {
    toObject: {virtuals: true}
})

module.exports = mongoose.model('Chat', chatSchema)