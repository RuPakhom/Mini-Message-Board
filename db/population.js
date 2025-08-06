const { Client } = require("pg")

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR(500),
    "user" VARCHAR(255),
    added DATE DEFAULT CURRENT_DATE
);

INSERT INTO messages (text, "user", added) VALUES
('Hi there!', 'Amando', CURRENT_DATE),
('Hello World!', 'Charles', CURRENT_DATE),
('How''s everyone doing?', 'Lena', CURRENT_DATE),
('Just joined the chat!', 'Mike', CURRENT_DATE),
('Nice to meet you all.', 'Sara', CURRENT_DATE),
('What''s going on here?', 'Tom', CURRENT_DATE),
('Anyone up for a game?', 'Emily', CURRENT_DATE),
('I love this app!', 'Daniel', CURRENT_DATE),
('Good morning!', 'Anna', CURRENT_DATE),
('Good night, folks!', 'George', CURRENT_DATE),
('See you tomorrow!', 'Kate', CURRENT_DATE);
`

async function main() {
    console.log("seeding...")
    const client = new Client(process.env.PGPUBLIC)
    await client.connect()
    await client.query(SQL)

    const res = await client.query("SELECT COUNT(*) FROM messages")
    console.log("Rows in messages table:", res.rowCount)
    await client.end()
    console.log("done")
}

main()