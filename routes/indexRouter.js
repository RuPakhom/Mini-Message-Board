const { Router } = require('express')
const indexRouter = Router()
const messages = require('../messages')

function handlePost(req, res) {
    const user = req.body.name
    const text = req.body.message;

    messages.push({
        text: text,
        user: user,
        added: new Date(),
        id: messages.length + 1
    })

    res.redirect("/")
}

indexRouter.get("/", (req, res) => res.render("index", {
    title: "Mini Messageboard",
    messages: messages
}))
indexRouter.get("/new", (req, res) => res.render("form"))
indexRouter.post("/new", handlePost)

module.exports = indexRouter