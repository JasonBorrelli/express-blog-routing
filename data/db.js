const mysql = require('mysql2');


//SETUP CONNESSIONE
const connection = mysql.createConnection({
    host:'DB_LOCAL',
    user:'DB_USER,
    password:'DB_PASS',
    database:'DB_NAME',
});

//AVVISO CONNESSIONE
connection.connect(err => {
    if (err) throw err;

    console.log('connected to MySQL');

});

module.exports = connection;

