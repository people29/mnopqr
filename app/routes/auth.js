'use strict';

const config = require('../config');
const express = require('express');
const jwt = require('jsonwebtoken');
const sha256 = require('sha256');
const UserService = require('../services/user.service');

function login(req, res, next) {
    UserService.findUser(req.body.login)
    .then(user => {
        if (user && (sha256(req.body.password) === user.password)) {
            const token = createToken(req.body.login, user._id);
            res.json({ token: token });
        } else {
            next({
                code: 401,
                data: 'authorization failed'
            });
        }
    }).catch(err => {
        next({
            code: 401,
            data: 'authorization failed'
        });
    });
}

const createToken = (login, id) => {
    const token = jwt.sign({
        data: {
            name: login,
            id: id
        }
    }, config.secret, {
        expiresIn: 60, //second
        algorithm: 'HS256'
    })
    return token
}

module.exports = (app)=> {
    let router = express.Router();
    app.use('/auth', router);

    router.post('/login', login);
}