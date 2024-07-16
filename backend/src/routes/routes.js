const express = require('express');
const { getAllNotes, getNoteById, createNote, updateNote, deleteNote } = require('../controllers/ApiController');
const { loginUser, registerUser } = require('../controllers/AuthController')
const routes = express();


routes.post('/api/auth/login', loginUser )
routes.post('/api/register', registerUser)

routes.get('/api/notes', getAllNotes)

routes.get('/api/notes/:id', getNoteById)

routes.post('/api/notes', createNote)

routes.put('/api/notes/:id', updateNote)

routes.delete('/api/notes/:id', deleteNote)

module.exports = routes;