const mysql = require('mysql2');


//SETUP CONNESSIONE
const connection = mysql.createConnection({
    host: process.env.DB_LOCAL,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

//AVVISO CONNESSIONE
connection.connect(err => {
    if (err) throw err;

    console.log('connected to MySQL');

});

module.exports = connection;

