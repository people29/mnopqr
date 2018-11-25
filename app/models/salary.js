"use strict";
module.exports = function (sequelize, DataTypes) {
    return sequelize.define("salary", {
        monthly: {
            type: DataTypes.STRING,
            field: "monthly"
        },
        workdays: {
            type: DataTypes.INTEGER,
            field: "workdays",
            allowNull: false
        },
        amount: {
            type: DataTypes.DECIMAL,
            field: "amount",
            allowNull: false
        },
        otherAmount: {
            type: DataTypes.DECIMAL,
            field: "other_amount"
        },
        tax: {
            type: DataTypes.DECIMAL,
            field: "tax"
        },
        totalAmount: {
            type: DataTypes.DECIMAL,
            field: "total_amount",
            allowNull: false
        },
        amountPerDay: {
            type: DataTypes.DECIMAL,
            field: "amount_per_day"
        },
        taxRate: {
            type: DataTypes.DECIMAL,
            field: "tax_rate"
        },
        dateCreated: {
            type: DataTypes.DATE,
            field: "date_created"
        },
        userCreated: {
            type: DataTypes.STRING,
            field: "user_created"
        },
        remark: {
            type: DataTypes.STRING,
            field: "remark"
        }
    }, {
            timestamps: false,
            tableName: "salary"
    });
};
