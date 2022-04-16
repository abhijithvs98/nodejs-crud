const mongoose = require("mongoose");
require("dotenv/config");

const dbConnection = mongoose.connect(
process.env.DB_CONNECTION,
(err) => {
    if(err)
        console.log(err);
     console.log("connected to db");   
});

module.exports = dbConnection;