"use strict";

const express = require("express");

function getUsers(req, res, next) {
    let users = [
        {username: "admin", role: "admin"},
        {username: "account", role: "account"}
    ];
    res.status(200).send(users);
    return; next();
}


module.exports = (app) => {
    let router = express.Router();
    app.use("/users", router);

    router.get("/", getUsers);

};