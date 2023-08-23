const attachControllers = require('./attachControllers')
const Chat = require('../model/Chat')

const registerController = async (socket) => {
    const isAdmin = socket.handshake.query.token === 'admin'
    const name = socket.handshake.query.name
    let phone = socket.handshake.query.phone

    if (isAdmin) {
        socket.isAdmin = true
        socket.join('admin')
    } else {
        if (name == null && phone == null)
            return socket.disconnect()

        phone = phone.length === 9 ? "998" + phone : phone

        const chat = await Chat.findOne({phone}) ||
            await Chat.create({name, phone})

        socket.clientId = chat._id.toString()
    }

    attachControllers(socket)
}
module.exports = registerController