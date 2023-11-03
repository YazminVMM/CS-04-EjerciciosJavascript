/*
// Definir un array
let arr = ["This", "is", "a", "sentence."];
//función printOutString
function printOutString(array) {
  //usar el método join()
  var resultado = array.join(" ");
  //Retornar resultado de join
  return resultado;
}
//mandar a llamar la funcion y mandarle como parametro arr (arreglo)
console.log(printOutString(arr));
*/
// Función para mostrar el resultado
function mostrarResultado() {
  let resultado1 = printOutString(arr); // Llama a la función y almacena el resultado
  document.getElementById("resultado").textContent = resultado1; // Muestra el resultado en el párrafo
}

let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  let result = ""; // Declara una variable vacía para almacenar la cadena resultante
  for (let i = 0; i < arr.length; i++) { // Crea un ciclo for que itera sobre cada elemento del array
    result += arr[i] + " "; // Concatena cada elemento del array con un espacio en blanco y lo agrega a la cadena resultante
  }
  //console.log(result.trim()); // Imprime la cadena resultante, eliminando cualquier espacio en blanco adicional al principio o al final
  return result;
}
