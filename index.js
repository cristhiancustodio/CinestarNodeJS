const express = require("express");
const path = require('path');
const {create} = require("express-handlebars");
const app = express();

const conexion = require("./database/db");

const hbs = create({
    extname: ".hbs",
    partialsDir:["views/components"],
})

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

//middleware, con esto podremos ver nuestros archivos html

// siempre iniciamos nuestro archivo html con INDEX.HTML

//app.use(express.urlencoded({extended:true})); // para leer los req.body

/*cuando tengamos mas experiencia podemos usar esto(error en rutas para CSS, lee)
app.use("/", require("./routes/home"));
app.use("/cine", require("./routes/Cine"));
*/
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/views/img"));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req,res) => {
    res.render("home");
});

app.get("/cines", (req,res) => {
    conexion.query("select * from cine",(err, result) =>{
        if(err){
            throw err;
        }else{
            res.render("cines", {results:result});
        }
    })
})

app.get("/peliculas", (req, res) => {
    conexion.query("select idPelicula,Titulo,Sinopsis,Link from Pelicula where idEstadoPelicula = 1;",(err, result) =>{
        if(err){
            throw err;
        }else{
            res.render("peliculas", {peliculas:result});
        }
    })

})

app.get("/cine/:id", (req, res) => {

    let cineId = req.params.id;
    conexion.query(`select P.Titulo, CP.Horarios from CinePelicula CP, Pelicula P where CP.idCine =${cineId} and CP.idPelicula = P.idPelicula`,
        (err, result)=>{
            if(err){
                throw err;
            }else{
                res.render("cine", {cinePeli:result})
            }
        }
    );
});
app.get("/pelicula", (req, res) => {
   res.render("pelicula");
    
})
app.get("/pelicula/:id", (req, res) => {
    let idPelicula = req.params.id;
    conexion.query(`SELECT * from Pelicula P where idPelicula =${idPelicula};`, 
    (err, result)=>{
        if(err){
            throw err;
        }else{
            res.render("pelicula", {pelicula:result})
        }
    });
    
})


app.listen(5000, ()=> console.log("Conectado con puerto 5000"));