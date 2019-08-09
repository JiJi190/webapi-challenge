const express = require('express')
const server = express();
const chores = require('./data/data')
const users = require('./data/dbUser')
server.use(express.json())


server.get('/chores', (req, res) => {
    res.status(200).json(chores)
});

server.post('/chores', (req, res) => {
    const chore = {
        id: chores.length +1,
        description: req.body.description,
        notes: req.body.notes,
        assignedTo: req.body.assignedTo,
        completed: false
    }
    chores.push(chore);
    res.status(201).json(chores)
})

server.delete('/chores/:id', (req, res) => {
    
})

server.put('/chores/:id', (req, res) => {
    
})

// People endpoint
server.get('/users/:id', (req, res) => {
    const chore = (chores.assignedTo)
    if (chore === users.id) {
        res.status(200).json(chores)
    }
})

//ports

require('dotenv').config();

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`Running on port ${port}`))