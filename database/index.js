const mysql = require('mysql2')

const pool = mysql.createPool({
    // host: process.env.DB_HOST, 
    // user: process.env.DB_USERNAME, 
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_DBNAME,
    // waitForConnections: true,
    // connectionLimit: 10,
    // queueLimit: 0


    host: "containers-us-west-105.railway.app", 
    user: "root", 
    password: "Ln2l5VO9628W6FpBlVxs",
    database: "railway",
    waitForConnections: true,
    connectionLimit: 3,
    queueLimit: 0
});

pool.getConnection((err, conn) => {
    if(err) console.log(err)
    console.log("Connected successfully")
})

module.exports = pool.promise()