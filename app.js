const { argv } = require('./config/yargs');
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors/safe');


let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (const tareas of listado) {
            console.log(colors.green('==== Por Hacer ====='));
            console.log('Tarea:', colors.green(tareas.descripcion));
            console.log('Completado:', colors.green(tareas.completado));
            console.log(colors.green('==================='));
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('comando no reconocido');

        break;
};