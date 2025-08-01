const express = require("express")
const indexRouter = require("./routes/indexRouter")
const messageRouter = require("./routes/messageRouter")

const app = express()

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))

app.use("/", indexRouter)
app.use("/message", messageRouter)

const PORT = 3000

app.listen(PORT, () => console.log(`Run on ${PORT}`))