const Chat = require('../model/Chat')
const Message = require('../model/Message')

const chatListController = async (req, res) => {
    try {
        res.status(200).json(await Chat.find())
    } catch (e) {
        res.status(500).json({error: e.message})
    }
}

const messageListController = async (req, res) => {
    try {
        res.status(200).json(await Message.find({chatId: req.params.id}))
    } catch (e) {
        res.status(500).json({error: e.message})
    }
}


module.exports = {chatListController, messageListController}