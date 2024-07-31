const db = require("../database/db");


const cineModel = {

    async verCines() {
        try {
            const rows = await db.queryAsync("SELECT * from cine");
            return rows;
        } catch (error) {
            console.error(error);
            throw error;
        }

    },
    async verPeliculas(cineId) {
        try {
            const resul = await db.queryAsync(`select P.Titulo, CP.Horarios from CinePelicula CP, Pelicula P where CP.idCine =${cineId} and CP.idPelicula = P.idPelicula`);
            return resul;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
}

module.exports = cineModel;