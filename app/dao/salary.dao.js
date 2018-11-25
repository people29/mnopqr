"use strict";
const sequelize = require("../config").sequelize;
const Op = sequelize.Op;
const Salary = sequelize.import("../models/salary");

function save(salary) {
    return Salary.create(salary);
}

function getAll() {
    return Salary.findAll();
}

function getByYear(year) {
    console.log(year);
    return Salary.findAll({
        where: {
            monthly: {
                [Op.like]: `%${year}`
            }
        }
    });
}

module.exports = {
    save: save,
    getAll: getAll,
    getByYear: getByYear
}