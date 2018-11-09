const fs = require('fs');
const color = require('colors');
let listadosPorHacer = [];
let guardarDB = () => {
    let data = JSON.stringify(listadosPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw Error('No se pudo guardar', err)
    })
}

let cargarDB = () => {
    try {
        listadosPorHacer = require('../db/data.json');
    } catch (error) {
        listadosPorHacer = [];
    }
}
const getListado = () => {
    cargarDB();
    return listadosPorHacer;
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    listadosPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const actualizar = (descripcion, completado) => {
    cargarDB();
    let index = listadosPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadosPorHacer[index].completado = completado
        guardarDB();
        return true;
    } else {
        return false;
    };
}
const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadosPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (nuevoListado.length === listadosPorHacer.length) {
        return false;
    } else {
        listadosPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}
module.exports = { crear, getListado, actualizar, borrar };