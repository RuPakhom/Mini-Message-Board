const db = require("../db/queries")

async function getMessages(req, res) {
    const messages = await db.selectAllMessages()
    res.render("index", {
    title: "Mini Messageboard",
    messages: messages
})
}

function renderForm(req, res) {
    res.render("form")
}

async function handlePost(req, res) {
    const user = req.body.name
    const text = req.body.message;

    await db.addMessageToDB(text, user)
    res.redirect("/")
}



module.exports = {
    getMessages,
    renderForm,
    handlePost
}