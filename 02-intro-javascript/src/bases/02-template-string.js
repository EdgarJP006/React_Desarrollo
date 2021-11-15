

const nombre = 'Edgar';

const apellido = 'Pérez';

//Forma antigua de concatenar

// const nombreCompleto = nombre + ' '+ apellido;

//Nueva forma de concatenar con TemplateStrings

const nombreCompleto =  `
${nombre} 
${apellido}
${ 1 +1 }`;

console.log( nombreCompleto);

//Mandar string con parametros

function getSaludo ( nombre){
    return 'Hola '+ nombre;
}

console.log('Hola este es un saludo: ' + getSaludo(nombre));