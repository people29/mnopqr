"use strict";
const express = require("express");
const SalaryService = require("../services/salary.service");

function save(req, res, next) {
    let salaryData = req.body;

    SalaryService.save(salaryData).then(resp => {
        res.status(200).send(resp);
        next(); return;
    }).catch(err => {
        res.status(500).send(err);
        next(); return;
    });
}

function getAll(req, res, next) {
    SalaryService.getAll().then(resp => {
      res.status(200).send(resp);
      next(); return;
    }).catch(err => {
        res.status(500).send(err);
        next(); return;
    });
}

function getByYear(req, res, next) {
    let year = req.params.year;
    SalaryService.getByYear(year).then(resp => {
        res.status(200).send(resp);
        next(); return;
    }).catch(err => {
        res.status(500).send(err);
        next(); return;
    });
}

module.exports = (app) => {
    let router = express.Router();
    app.use("/api/salary", router);
    router.get("/:year", getByYear);
    router.get("/", getAll);
    router.post("/", save);
};

