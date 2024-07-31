const db = require("../database/db");


const peliculaModel = {

    async verTodoPeliculas() {
        try {
            const rows = await db.queryAsync("select idPelicula,Titulo,Sinopsis,Link from Pelicula where idEstadoPelicula = 1;");
            return rows;
        } catch (error) {
            console.error(error);
            throw error;
        }

    },
    async verPelicula(idPelicula) {
        try {
            const resul = await db.queryAsync(`SELECT * from Pelicula P where idPelicula =${idPelicula};`);
            return resul;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
}

module.exports = peliculaModel;