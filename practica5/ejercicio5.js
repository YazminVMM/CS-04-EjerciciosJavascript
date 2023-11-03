/*
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//1.	Write a command that prints out all of the people in the list.
console.log(people);
//2.	Write the command to remove "Dani" from the array.
//Para eliminar "Dani" del arreglo, utilizar el método splice() de la siguiente manera
people.splice(people.indexOf("Dani"), 1);
console.log(people);
//3.	Write the command to remove "Juan" from the array.
//Para eliminar "Juan" del arreglo, también utilizar el método splice()
people.splice(people.indexOf("Juan"), 1);
console.log(people);
//4.	Write the command to move "Luis" to the front of the array.
//Para mover "Luis" al frente del arreglo, utilizar el método splice() junto con unshift()
let luisIndex = people.indexOf("Luis");
people.splice(luisIndex, 1);
people.unshift("Luis");
console.log(people);
//5.	Write the command to add your name to the end of the array.
//Para agregar mi nombre al final del arreglo, utilizar el método push()
people.push("Yazmin");
console.log(people);
//6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
//Para iterar a través del arreglo y después de imprimir "Maria", salir del bucle, usar un bucle for junto 
//con la instrucción break
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Maria") {
      break;
    }
  }
//7.	Write the command that gives the indexOf where "Maria" is located.
// Para obtener el índice donde se encuentra "Maria" en el arreglo, utilizar el método indexOf()
let mariaIndex = people.indexOf("Maria");
console.log(mariaIndex);
*/
const people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
//function imprimeTodos(){
 // imprimirPersonas();
  //removerDani();
  //removerJuan();
  //moverLuis();
  //agregarTuNombre();
 // imprimirHastaMaria();
  //obtenerIndiceDeMaria();


  
//}

// 1. Imprimir todas las personas en la lista
function imprimirPersonas() {
  let personas = people;
  let listaDePersonas = [];
  for (let i = 0; i < personas.length; i++) {
    listaDePersonas.push(personas[i]) ;
  }
 console.log(listaDePersonas);
 document.getElementById("imprimirPersonas").textContent = listaDePersonas; 
}

// 2. Remover "Dani" del array
function removerDani() {
  let arregloSinDani = people;
  for (let i = 0; i < arregloSinDani.length; i++) {
    if (arregloSinDani[i] === "Dani") {
      arregloSinDani.splice(i, 1);
      break;
    }
  }
  console.log(arregloSinDani);
 document.getElementById("removerDani").textContent = arregloSinDani; 
  return arregloSinDani;
}

// 3. Remover "Juan" del array
function removerJuan() {
  let arregloSinDaniSinJuan = removerDani();
  for (let i = 0; i < arregloSinDaniSinJuan.length; i++) {
    if (arregloSinDaniSinJuan[i] === "Juan") {
      arregloSinDaniSinJuan.splice(i, 1);
      break;
    }
  }
  console.log(arregloSinDaniSinJuan);
  document.getElementById("removerJuan").textContent = arregloSinDaniSinJuan;
  return arregloSinDaniSinJuan;
}


// 4. Mover "Luis" al inicio del array
function moverLuis() {
  let arregloLuisInicio = removerJuan();
  for (let i = 0; i < arregloLuisInicio.length; i++) {
    if (arregloLuisInicio[i] === "Luis") {
      let luis = arregloLuisInicio.splice(i, 1);
      arregloLuisInicio.unshift(luis[0]);
      break;
    }
  }
  console.log(arregloLuisInicio);
  document.getElementById("arregloLuisInicio").textContent = arregloLuisInicio;
  return arregloLuisInicio;
}

// 5. Agregar tu nombre al final del array
function agregarTuNombre() {
  let arregloConMiNombre = moverLuis();
  let tuNombre = "Yazmin";
  arregloConMiNombre.push(tuNombre);
  console.log(arregloConMiNombre);
  document.getElementById("agregarTuNombre").textContent = arregloConMiNombre;
  return arregloConMiNombre;
}

// 6. Iterar a través del array y salir del bucle después de imprimir "Maria"
function imprimirHastaMaria() {
  let arregloConYazmin = agregarTuNombre();
  let arregloHastaMaria = [];
  for (let i = 0; i < arregloConYazmin.length; i++) {
    arregloHastaMaria.push(arregloConYazmin[i]);
    if (arregloConYazmin[i] === "Maria") {
      break;
    }
  }
  console.log(arregloHastaMaria);
  document.getElementById("imprimirHastaMaria").textContent = arregloHastaMaria;
  return arregloHastaMaria;
}


// 7. Obtener el índice donde se encuentra "Maria"
function obtenerIndiceDeMaria() {
  let listaMaria = imprimirHastaMaria();
  let indexOfMaria;
  for (let i = 0; i < listaMaria.length; i++) {
    if (listaMaria[i] === "Maria") {
      indexOfMaria = i;
      break;
    }
  }
  console.log(indexOfMaria);
  document.getElementById("obtenerIndiceDeMaria").textContent = indexOfMaria;
}
