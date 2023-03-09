const express = require('express');
const promptController = require('../controller/prompt-controller');

const routes = express.Router();

routes.get('/api/chatai', promptController.sendText);
routes.post('/api/chatai', promptController.sendText);

module.exports = routes;