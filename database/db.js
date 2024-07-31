
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
const queryAsync = (query) => {
    return new Promise((resolve, reject) => {
        conexion.query(query, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};
module.exports = {
    conexion, queryAsync, 

}



