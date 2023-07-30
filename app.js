const { calculadora } = require("./helpers/tablaMultiplicar.js");
const argv = require("./config/yargs.js");
const colors = require("colors");
console.clear();

//console.log(process.argv);
//console.log(argv);
//console.log("base:yargs", argv.base);

calculadora(argv.base, argv.listar, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));
