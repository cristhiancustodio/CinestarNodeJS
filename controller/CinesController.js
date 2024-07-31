
const cineModel = require("../model/cineModel.js")


const cineController = {

    async index(req, res) {

        try {
            let resultado = await cineModel.verCines();
            res.render("cines", { results: resultado });

        } catch (error) {
            console.error(error);
            res.status(500).send("Error al obtener los cines");
        }
    },
    async cineBusqueda(req, res) {
        try {
            let cineId = req.params.id;
            let resultado = await cineModel.verPeliculas(cineId);
            res.render("cine", { cinePeli: resultado });
        } catch (error) {
            console.error(error);
            res.status(500).send("Error al obtener la busqueda");
        }
    }

}

module.exports = cineController;