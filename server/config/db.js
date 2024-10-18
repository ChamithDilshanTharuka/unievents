const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if(err){
        console.err('Database connection failed:', err);
        process.exit(1);
    }
    console.log('Successfully connected to MySQL database.');
});