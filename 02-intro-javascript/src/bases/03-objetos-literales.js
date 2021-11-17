//vamos a crear un objeto
const persona = {
nombre : 'Tony',
apellido: 'Stark',
edad: 45,
//puedo agregar objetos dento de otro objeto
direccion: {
    ciudad: 'New York',
    zip: '545784756',
    lat: 23.45874,
    lng: 65.23323
}
};

console.log( persona );

const persona2 = persona;

persona2.nombre= 'Peter'; //<-- este tipo de asiganción lo que hace es modificar en memoria el objeto original

console.log( persona ); //aqui el nombre se va a cambiar

console.log( persona2);// y aqui también

//forma correcta: crear el nuevo eobjeto con sus atributos

const persona3 = {
 ...persona
}; //los tres puntos me hacen una copia de los datos y atributos referenciados
console.log( persona3);