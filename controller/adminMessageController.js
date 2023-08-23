const Message = require('../model/Message');

function adminMessageController(socket) {
    return async (data) => {
        const {to, text} = data

        try {
            const message = await Message.create({
                chatId: to,
                fromId: 'admin',
                text: text
            })

            socket.server.to('admin').emit('message', message)
            socket.server.findSocket(to.toString()).emit('message', message)
        } catch (e) {

        }
    }
}

module.exports = adminMessageController