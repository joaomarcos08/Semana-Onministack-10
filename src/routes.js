const { Router } = require('express')

const Devcontroller = require('./controllers/DevController')
const Searchcontroller = require('./controllers/Searchcontroller')

const routes = Router();

routes.get('/devs', Devcontroller.index)
routes.post('/devs', Devcontroller.store);

routes.get('/search', Searchcontroller.index)


module.exports = routes;