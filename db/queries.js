const pool = require("./pool")

async function selectAllMessages() {
    const { rows } = await pool.query(
        "SELECT * FROM messages"
    )
    return rows
}

module.exports =
{
    selectAllMessages
}