//05 Funciones
//Este tipo de declaración de funcion puede ser soreescrita
function saludar_Test( nombre ){
    //Recordar el uso de backtick con las comillas, el backtick me permite interpolar comandos js
    return `Hola ${ nombre}`;
}

// saludar = 30;

console.log( saludar_Test );

//Forma adecuada o recomendad

const saludar = function (nombre ){ //<- hacerlo como una constante
    return `Hola amiguito ${ nombre}`;
}

console.log( saludar ( 'Gerardo'));

//Las funciones normales se pueden convertir en funciones de flecha

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre}`;
}

console.log( saludar2('Vegeta '));

//Las funciones flechas con solo return se pueden simplificar màs

const saludar3 = ( nombre ) =>  `Hola amiguito, ${ nombre}`;

console.log( saludar3('Bulma'));

//Si la funcion flecha no envia parametros igual se puede simplificar

const saludar4 = () =>  `Hola mundo`;

console.log(saludar4());//mismo resultado que saludar 3

//Con la funcion flecha puedo returnar ojbetos
const saludar5 = () => {
    return {
        uid: 123745,
        password: 'Wuaooo',
    }
}

console.log( saludar5());

//Igual que saludar 4 puedo omitir el return en envio de ojetos pero utilizando parentesis en vez

const saludar6 = () => ({
    uid: 56789,
    password: 'Uwuuu'
})
console.log(saludar6());

//Tarea
const getUsuarioActivo = function ( nombre ){
    return {
        uid: 56482,
        userName: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);
//Tarea
//01-Transformar a una funcion flecha
//02-Retornar un ojeto explicito
//03-Probar
//01
const getUsuarioActivo01 = ( nombre1) => ({
    uid01: 56482,
    userName01: nombre1
})
const usuarioActivo01 = getUsuarioActivo01( 'Edgar');
console.log(usuarioActivo01);