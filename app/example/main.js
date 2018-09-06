"use strict";
const fs = require("fs");

(()=> {
    // fs.writeFile('./control.csv', "column1, column2, column3", function(err) {
    //     if (err) throw err;
    //   });
    try {
        fs.writeFileSync('./control.csv', "234234234, co2342342lumn2, col2322umn3");
    } catch (error) {
        throw error;
    }

})();
