"use strict";
const jwt = require("jsonwebtoken");
const config = require("../config");

function verify (req, res, next) {
    const authorization = req.headers.authorization;
    if (authorization) {
        const authToken = authorization.split(' ');
        if (authToken[0] === 'Bearer' && authToken.length > 1) {
            jwt.verify(authToken[1], config.secret, (err, decodedToken) => {
                if (err) {
                    next(err);
                } else {
                    req.user = decodedToken;
                    next();
                }
            })
        } else {
            res.status(401).send({
                code: 401,
                data: "Unauthorized Access."
            });
        }
    } else {
        res.status(401).send({
            code: 401,
            data: "Unauthorized Access."
        });
    }
}

module.exports = {
    verify: verify
};

