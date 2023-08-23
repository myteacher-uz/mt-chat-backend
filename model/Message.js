const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    chatId: String,
    fromId: String,
    text: String,
    sent: Date
})

messageSchema.pre('save', function (next) {
    this.sent = new Date()
    next()
})

module.exports = mongoose.model('Message', messageSchema)