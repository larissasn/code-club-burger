const { Router } = require("express")
const { request, response } = require("./app")

const routes = new Router()

routes.get('/', (request, response) => {
    return response.json({message: "Hello Word"})
})

module.exports = routes 