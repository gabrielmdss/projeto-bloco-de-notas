const express = require('express');

const getAllNotes = require('../controllers/ApiController')

const routes = express();

routes.get('/api/notes', getAllNotes);

module.exports = routes;
