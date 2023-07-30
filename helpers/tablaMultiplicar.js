const fs = require("fs");
const colors = require("colors");

const calculadora = async (numero, listar, hasta) => {
  try {
    let salida = "";
    let consola = "";
    for (let i = 0; i <= hasta; i++) {
      salida += `${numero} x ${i} = ${numero * i}\n`;
      consola += `${colors.blue(numero)} ${"x".yellow} ${colors.blue(i)} ${
        "=".yellow
      } ${colors.red(numero * i)}\n`;
    }
    fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida);
    if (listar == true) {
      console.log("========================".green);
      console.log("      Tabla del :      ".green, colors.blue(numero));
      console.log("=========================".green);
      console.log(consola);
    }
    return `tabla-${numero}.txt`;
  } catch (err) {
    throw err;
  }
};
module.exports = {
  calculadora,
};
