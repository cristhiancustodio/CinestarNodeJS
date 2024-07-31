
const peliculaModel = require("../model/peliculaModel.js")


const peliculaController = {

    async proximosExtrenos(req, res){
        res.render("pelicula");
    },

    async peliculas(req, res) {

        try {
            let resultado = await peliculaModel.verTodoPeliculas();
            res.render("peliculas", { peliculas: resultado });

        } catch (error) {
            console.error(error);
            res.status(500).send("Error al obtener las peliculas");
        }
    },
    async peliculasBusqueda(req, res) {
        try {
            let idPelicula = req.params.id;
            let resultado = await peliculaModel.verPelicula(idPelicula);
            res.render("pelicula", { pelicula: resultado })
        } catch (error) {
            console.error(error);
            res.status(500).send("Error al obtener la busqueda");
        }
    }

}

module.exports = peliculaController;