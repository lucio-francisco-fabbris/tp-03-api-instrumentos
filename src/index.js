const express = require("express");
const path = require("node:path");
const { leerJSON } = require("./archivos");

const rutaDatos = path.join(__dirname, "..", "datos", "instrumentos.json");

async function main () {
    const instrumentos = await leerJSON(rutaDatos);
}

