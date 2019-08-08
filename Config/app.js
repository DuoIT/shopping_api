const express = require('express');

require('dotenv').config();
global.Env = process.env;

const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://${Env.USERNAME_MONGODB}:${Env.PASSWORD_MONGODB}@cluster0-m3edx.mongodb.net/shopping`, {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

app.use(cors());
app.use(express.json());

const http = require('http').Server(app);

http.listen(Env.PORT, () => {
    console.log(`Server run on port ${Env.PORT}`)
})

module.exports = app;
