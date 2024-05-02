import mysql from 'mysql'

export const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"hants12",
    database:"crud"
});
