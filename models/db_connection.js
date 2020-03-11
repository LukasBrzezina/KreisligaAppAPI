//Mariadb Datenbank
const mariadb = require('mariadb');

require('dotenv').config();

//"Connectionstring" wird erstellt
const pool = mariadb.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
});

//Module werden exportiert:
module.exports = {
    pool
};