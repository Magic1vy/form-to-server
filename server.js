const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const formRoutes = require('./formRoutes');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname));

app.use('/', formRoutes);

app.use(express.json())
app.use(cors())

app.listen(8000, () => {
    console.log("Running on PORT 8000")
})