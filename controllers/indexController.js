const db = require("../db/queries")

async function getMessages(req, res) {
    const messages = await db.selectAllMessages()
    res.render("index", {
    title: "Mini Messageboard",
    messages: messages
})
}



module.exports = {
    getMessages
}