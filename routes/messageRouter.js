const { Router } = require('express')
const messageRouter = Router()
const messages = require('../messages')
const controller = require("../controllers/messageController")

messageRouter.get("/:id", controller.getMessageById)

module.exports = messageRouter