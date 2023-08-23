const clientMessageController = require('./clientMessageController');
const adminMessageController = require('./adminMessageController');

function attachControllers(socket) {
    if (socket.isAdmin) {
        socket.on('message', adminMessageController(socket))
    } else {
        socket.on('message', clientMessageController(socket))
    }
}

module.exports = attachControllers