import "./styles.css";

//Algoritmo ArregloNumeros
// Declaro un Array Arreglo o Lista Vacio
let num: number[] = new Array(3);
//Asigno un numero fijo a cada posicion
num[0] = 20;
num[1] = 14;
num[2] = 8;
console.log(
  "MI ARRAY TIENE DECLARDAS 3 POSICIONES Y UN NUMERO FIJO POR CODIGO EN CADA POSICION:"
);
//Muestro por consola mi Array
console.log(num);

//Declaro la variable indice de mi contador y la inicialzo en 0
let indice: number = 0;

//Con un while mientras el contador este por debajo de la cantidad de elementos
//del array mustro por consola l numero de la posicion del indice
// y el numero asignado esa posicion del indice.

while (indice < 3) {
  console.log(
    "El número en la posición ",
    indice,
    " es un numero predefinido y es ",
    num[indice]
  );
  indice = indice + 1;
}

//Ahora le asigno nuevos valores por prompt y lo vuelvo  mostrar por consola

//Primero con el mismo WHILE incorporando un prompt de carga de valores
console.log("REASIGNO NUEVOS VALORES A MI ARRAY CON UN WHILE:");
let i: number = 0;
while (i < 3) {
  let num = Number(prompt("While Ingrese valor"));
  console.log(
    "El número en la posición ",
    i,
    " es ingresado por Prompt en un While y es ",
    num
  );
  i = i + 1;
}

//Segundo con un FOR incorporando un prompt de carga de valores
console.log("REASIGNO NUEVOS VALRES A MI ARRAY CON UN FOR:");

for (let index = 0; index < num.length; index++) {
  let num = Number(prompt("For Ingrese valor"));

  console.log(
    "El nuevo número en la posición ",
    index,
    " es por Prompt en un FOR y es ",
    num
  );
  //resultado.innerText = +=num
}
//resultado.innerHTML = ("El nuevo número en la posición ", index, " es ", num);
