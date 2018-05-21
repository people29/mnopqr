"use strict";

const express = require("express");

let users = [
    {id: 1, username: "admin", role: "admin"},
    {id: 2, username: "account", role: "account"}
];

function getUsers(req, res, next) {
    res.status(200).send(users);
    next(); return;
}

function getUserById(req, res, next) {
    let id = req.params.id;
    let user = users.find((user)=> {
        return user.id == id;
    });
    res.send(user);
    next(); return;
}

module.exports = (app) => {
    let router = express.Router();
    app.use("/users", router);

    router.get("/", getUsers);
    router.get("/:id", getUserById);
};