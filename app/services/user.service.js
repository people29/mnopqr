"use strict"
const UserMg = require("../models_mongo/user.model");

function findUser(username) {
    return UserMg.findOne({
        login: username
    });
}

function findAll() {
    return UserMg.find();
}

module.exports = {
    findUser: findUser,
    findAll: findAll
};