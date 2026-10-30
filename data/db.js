const mysql = require('mysql2');


//SETUP CONNESSIONE
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'Blog',
});

//AVVISO CONNESSIONE
connection.connect(err => {
    if (err) throw err;

    console.log('connected to MySQL');

});

module.exports = connection;

