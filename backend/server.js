const express = require("express");
                
const server = express();

const articles = require("./dummydata/articles")

server.get('/', (req, res) => {
    res.send("API is running");
});

server.get('/api/articles', (req,res) => {
    res.json(articles);
});


const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;

server.listen(PORT, console.log(`server is working and listening on PORT ${PORT}`));