const express = require("express");
const path = require('path');
const { create } = require("express-handlebars");
const app = express();

const cineController = require("./controller/CinesController.js");
const peliculaController = require("./controller/PeliculaController.js");

/**PARA RUTAS */
const router = require("./routes/Cine.js");

const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"],
})

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/views/img"));
app.use(express.static(path.join(__dirname, 'public')));
//middleware, con esto podremos ver nuestros archivos html

// siempre iniciamos nuestro archivo html con INDEX.HTML

//app.use(express.urlencoded({extended:true})); // para leer los req.body

/*cuando tengamos mas experiencia podemos usar esto(error en rutas para CSS, lee)
app.use("/", require("./routes/home"));
app.use("/cine", require("./routes/Cine"));
*/

// para poder renderizar nuestras vistas desde router
// app.use("/ruta", claseRuta);

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/cines",cineController.index);
app.get("/cine/:id",cineController.cineBusqueda);
app.get("/pelicula",peliculaController.proximosExtrenos);
app.get("/peliculas",peliculaController.peliculas);
app.get("/pelicula/:id",peliculaController.peliculasBusqueda);




app.listen(5000, () => console.log("Conectado con puerto 5000"));