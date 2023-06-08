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

app.use(express.json())
app.use(cors())

const PORT = 8000 || process.env.port;


app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`)
})
