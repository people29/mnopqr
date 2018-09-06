"use strict";
const express = require("express");
const userService = require("../services/user.service");

function getUsers(req, res, next) {
    userService.findAll().then(users => {
        res.status(200).send(users);
        next(); return;
    }).catch(err => {
        res.status(400).send(err);
    });
}

function getUserByName(req, res, next) {
    let username = req.params.username;

    userService.findUser(username).then(user => {
        res.status(200).send(user);
        next(); return;
    }).catch(err => {
        res.status(400).send(err);
    });
}

module.exports = (app, verify) => {
    let router = express.Router();
    app.use("/api/users", verify, router);

    router.get("/", getUsers);
    router.get("/:username", getUserByName);
};