"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// #include routers
const index = require("./routes");
const users = require("./routes/users")



const app = express();
app.use(cors({
    exposedHeaders: ["Content-disposition"]
}));

index(app);
users(app);


app.use((err, req, res, next) => {
    res.status(500).send(err.stack ? err.stack : err);
});

module.exports = app;