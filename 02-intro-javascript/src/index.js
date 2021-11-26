//Desestructuración o Asignación desestructurante
//La forma como un inesperto lo haria

const persona = {
    nombre: 'Edgar',
    edad: 34,
    clave: 'Spiderman'
};

console.log( persona.nombre);
console.log( persona.edad);
console.log( persona.clave);


//forma de asignación desestructurante

const {edad, nombre, clave } = persona; //persona es mi objeto ya asignaso arriba

console.log( edad);

console.log(clave, nombre , edad );


//puedo hacer la desectructuración desde mi funcion

const retornarPersona = ( usuario ) => {

    console.log( 'Función: ', edad );
}

retornarPersona ( persona);


//puedo hacer la desectructuración desde el argumento de mi funcion

const returnPerson = ({ edad, rango= 'Alto'}) => {
    console.log('Desde argumento: ', edad, ' y mi rango: ', rango);
}

returnPerson(persona)

//Desectructuracion muy usadna en react

const useContext = ({clave, edad, nombre, rango = 'Bajo'}) =>{

    return {
        nombreClave : clave,
        anios : edad
    }
};

const avenger = useContext(persona);


console.log(avenger);