const express = require('express')
const server = express();
const chores = require('./data/data')
server.use(express.json())
console.log(chores)

server.get('/chores', (req, res) => {
    res.status(200).json([chores])
})



const port = 8000;

server.listen(port, () => console.log(`Server Running on port ${port}`))