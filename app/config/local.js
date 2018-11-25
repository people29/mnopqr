"use strict";
const Sequelize = require("sequelize");

module.exports = {
    "secret": "MnrA5tpk!@r4-5@y7rXm",

    "sequelize": new Sequelize('mnopqr', 'root', 'rootpass', {
        logging: false,
        host: '127.0.0.1',
        port: 3307,
        dialect: 'mysql',
        timezone: "+07:00",
        pool: {
            max: 20,
            min: 5,
            idle: 2000
        },
        operatorsAliases: false
    }),
};