module.exports = (server) => {
    return (clientId) => {
        let result = null

        server.sockets.sockets.forEach(socket => {
            if (socket.clientId === clientId)
                result = socket
        })

        return result
    }
}