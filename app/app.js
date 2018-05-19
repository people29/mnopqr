"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//include routes
const index = require("./routes");



const app = express();
app.use(cors({
    exposedHeaders: ["Content-disposition"]
}));

index(app);


app.use((err, req, res, next) => {
    res.status(500).send(err.stack ? err.stack : err);
});

module.exports = app;