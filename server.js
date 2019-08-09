const express = require('express')

const server = express();

const port = 8000;

server.listen(port, () => console.log(`Server Running on port ${port}`))