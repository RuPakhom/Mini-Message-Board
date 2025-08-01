const { Router } = require('express')
const messageRouter = Router()
const messages = require('../messages')

messageRouter.get("/:id", (req, res) => {
    const id = Number(req.params.id)
    const message = messages.find(m => m.id === id)
    res.render("message", {message: message})
})

module.exports = messageRouter