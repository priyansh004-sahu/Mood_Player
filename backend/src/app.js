
const express = require('express');
const songRoutes = require('./routes/song.route');
const cors = require("cors");

const app = express()     //middleware
app.use(express.json());
app.use(cors())//

app.use('/', songRoutes);


module.exports = app;