"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const tokenVerifier = require("./middleware/token.verify");

// #include routers
const index = require("./routes");
const auth = require("./routes/auth");
const users = require("./routes/users");
const salary = require("./routes/salary");

const app = express();
app.use(cors({
    exposedHeaders: ["Content-disposition"]
}));

app.use(bodyParser.json({ limit: "1024kb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/static", express.static("resources"));

// #start connectiong mongo db#
// require("./config/mongoose")();

index(app);
auth(app);
users(app, tokenVerifier.verify);
salary(app);


app.use((err, req, res, next) => {
    res.status(500).send(err.stack ? err.stack : err);
});

module.exports = app;