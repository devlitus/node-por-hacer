let descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripción de la tarea por hacer'
}
let completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualizar el estado completo de una tarea', { descripcion, completado })
    .command('borrar', 'Borrar la tare', { descripcion })
    .help()
    .argv;

module.exports = { argv };