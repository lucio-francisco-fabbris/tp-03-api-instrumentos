const express = require("express");
const path = require("node:path");
const { leerJSON } = require("./archivos");

const rutaDatos = path.join(__dirname, "..", "datos", "instrumentos.json");

async function main () {
    const instrumentos = await leerJSON(rutaDatos);

    const app = express();

    app.use(express.json());

    app.get("/", (req, res) => {
    res.json({
        mensaje: "API de instrumentos musicales ya esta disponible"
        });
    });

    app.get("/api/instrumentos", (req, res) => {
        const { familia } = req.query;

        if (!familia) {
            return res.json(instrumentos);
        } 

        const resultado = instrumentos.filter(
            (instrumento) =>
                instrumento.familia.toLowerCase() === familia.toLowerCase()
        );

        res.json(resultado);
        
    });

    app.listen(3000, () => {
        console.log("Servidor escuchando en http://localhost:3000");
    });

}

main();



