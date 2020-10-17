//require('dotenv').config();
const {createPool } = require('mysql');
const pool = createPool({
    /*port:process.env.DB_PORT,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.MYSQL_DB,
    connectionLimit:10*/
    port:3306,
    host:"aisgroup.in",
    user:"aisgr1bu",
    password:"j?7+V7g3s+1+^YlL",
    database:"aisgr1bu_testproject",
    connectionLimit:10
});

module.exports = pool;