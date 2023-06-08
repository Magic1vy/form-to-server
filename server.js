const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const formRoutes = require('./formRoutes');
const cors = require('cors');

require("dotenv").config();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname));

app.use('/', formRoutes);

const PORT = 8000 || process.env.port;

app.use(express.json())
app.use(cors())


mongoose
    .connect(process.env.MONGODB_LINK)
    .then ( () => console.log ("Connected to MongoDB"))
    .catch((err) => console.log(err))


app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`)
})
