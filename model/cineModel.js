const conexion = require("../database/db");

class cineModel {

    verCines() {
        conexion.query("SELECT * from cine", (err, result) => {
            if (err) {
                throw err;
            } else {
                console.log(result);
            }
        });


    }
    verPeliculas() {
        conexion.query("SELECT idPelicula,Titulo,Sinopsis,Link from Pelicula where idEstadoPelicula = 1;", (err, result) => {
            if (err) {
                throw err;
            } else {
                res.render("peliculas", { peliculas: result });
            }
        })
    }
}

