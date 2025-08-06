const db = require("../db/queries")

async function getMessageById(req, res) {
    const id = Number(req.params.id)
    const message = await db.getMessageById(id)
    console.log(message)
    res.render("message", {message: message})
}

module.exports = {
    getMessageById
}