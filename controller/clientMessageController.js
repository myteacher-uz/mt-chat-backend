const Message = require('../model/Message')

function clientMessageController(socket) {
    return async (data) => {
        const message = {
            chatId: socket.clientId,
            fromId: socket.clientId,
            text: data,
            sent: new Date()
        }

        await Message.create({
            chatId: message.fromId,
            fromId: message.fromId,
            text: message.text
        })
        socket.server.to('admin').emit('message', message)
    }
}

module.exports = clientMessageController