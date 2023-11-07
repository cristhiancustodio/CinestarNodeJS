
const mysql = require("mysql");

const conexion = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "cinestar"
})

conexion.connect((err) => {
    if(err){
        console.log("Error en conexion "+ err);
        return;
    }
    console.log("Conectado");
})

module.exports = conexion;



