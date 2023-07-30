const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "La base para la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    //demandOption: true,
    describe: "Listar la tabla de multiplicar en consola",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Limite maximo hasta donde se va a multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "la base tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;
