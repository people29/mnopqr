"use strict";
const SalaryDao = require("../dao/salary.dao");

function save(salary) {
    return SalaryDao.save(salary).catch(err => {
        console.log(err);
        return Promise.reject(err);
    });
}

function getAll() {
    return SalaryDao.getAll();
}

function getByYear(year) {
    return SalaryDao.getByYear(year);
}


module.exports = {
    save: save,
    getAll: getAll,
    getByYear: getByYear
};