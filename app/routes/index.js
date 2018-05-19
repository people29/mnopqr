"use strict";

const express = require("express");

module.exports = (app)=> {
    let router = express.Router();

    app.use("/app", router);
    router.get("/", main);
}

function main(req, res, next) {
    res.send("app running..");
    end(next);
}

function end(next) {
    if(next) next();
    return;
}