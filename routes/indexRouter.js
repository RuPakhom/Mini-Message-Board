const { Router } = require('express')
const indexRouter = Router()
const controller = require('../controllers/indexController')

indexRouter.get("/", controller.getMessages)
indexRouter.get("/new", controller.renderForm)
indexRouter.post("/new", controller.handlePost)

module.exports = indexRouter