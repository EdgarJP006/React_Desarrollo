//Arreglos en JS
//const arreglo = new Array( 100 ); Una forma de crear arreglos
 const arreglo = [1,2,3,4,5];
//No utilizaremos push por que modifica el arreglo (onjeto js)
//  arreglo.push(1)
//  arreglo.push(2)
//  arreglo.push(3)
//  arreglo.push(4)
//  arreglo.push(5)

let arreglo2 = [...arreglo, 5]
console.log( arreglo);
console.log( arreglo2);