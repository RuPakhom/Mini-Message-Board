const pool = require("./pool")

async function selectAllMessages() {
    const { rows } = await pool.query(
        "SELECT * FROM messages"
    )
    return rows
}

async function addMessageToDB(text, user) {
    await pool.query(
        `INSERT INTO messages(text, "user", added)
        VALUES($1, $2, CURRENT_DATE);`, [text, user]
    )
}

async function getMessageById(id) {
    const { rows } = await pool.query(
        `SELECT * FROM messages
        WHERE id=$1;`, [id]
    )
    return rows[0]
}

module.exports =
{
    selectAllMessages,
    addMessageToDB,
    getMessageById
}