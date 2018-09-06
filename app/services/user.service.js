"use strict"

const User = require("../models/user.model");

function findUser(username) {
    return User.findOne({
        login: username
    });
}

function findAll() {
    return User.find();
}

module.exports = {
    findUser: findUser,
    findAll: findAll
};