// Requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('======================='.green);
    console.log(`===== Tabla del ${base} =====`.red);
    console.log('======================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero!`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un numero!`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            //console.log(`${base} * ${i} = ${base*i}`);
            data += `${base} * ${i} = ${base*i} \n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
            //console.log(`El archivo tabla-${base}.txt ha sido creado.`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}