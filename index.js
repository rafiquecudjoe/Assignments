const express = require("express");

const Router = require('./Router')


const server = express();

server.use(express.json());

const port = 7000;

server.use('/api/v1',Router)


server.listen(port, () => {
  console.log(`Server is Running at Port ${port}`);
});
