const express = require('express');
require('dotenv').config();
global.Env = process.env;
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const http = require('http').Server(app);

http.listen(3000, () => {
    console.log(`Server run on port ${Env.PORT}`)
})

module.exports = app;
