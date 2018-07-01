"use strict";

const express = require("express");

function main(req, res, next) {
    res.send("app running..");
    next(); return;
}


module.exports = (app)=> {
    let router = express.Router();

    app.use("/api", router);
    router.get("/", main);
}