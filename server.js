const express = require('express')
const server = express();
const chores = require('./data/data')
const users = require('./data/data')
server.use(express.json())


server.get('/chores', (req, res) => {
    res.status(200).json(chores)
});

server.post('/chores', (req, res) => {
    const {description, notes} = req.body;
    if (!description || !notes) {
        res.status(400).json({message: 'Enter a description and notes'})
    } else {
        chores.insert(req.body)
        .then(chore => {
            res.status(201).json(chore)
        })
    }
})

server.delete('/chores/:id', (req, res) => {
    chores.remove(req.params.id)
    .then(count => {
        if (count && count > 0) {
            res.status(200).json({message: 'chore deleted'})
        } else {
            res.status(404).json({ message: 'chore does not exist'})
        }
    })
    .catch(() => {
        res.status(500).json({ message: "delete failed"})
    })
})

server.put('/chores/:id', (req, res) => {
    const { description, notes } = req.body;
    if (!description || !notes ) {
        res.status(400).json({ message: 'Input description and notes'})
    } else {
        chores.update(req.params.id, req.body)
        .then(chore => {
            if (chore) {
                res.status(200).json(chore);
            } else {
                res.status(404).json({message: 'chore does not exist'})
            }
        })
        .catch(() => {
            res.status(500).json({ message: 'Could not update' })
        })
    }
})

// People endpoint

require('dotenv').config();

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`Server Running on port ${port}`))