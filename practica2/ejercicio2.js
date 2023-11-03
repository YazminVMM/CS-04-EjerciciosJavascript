/*
//Defininir array
let arr2 = [1, 2, 4, 5];
//funcion duplicarArray
function duplicarArray(arr) {
  // usar el metdo map() al array  
  numerosCuadrado = arr.map(num => num + num);
  //retornar numerosCuadrado
  return numerosCuadrado;
}
console.log(duplicarArray(arr2));
*/
//------------------------------------------------------------------------------------
// Función para mostrar el resultado
function mostrarResultado() {
  let arrayActualizado = duplicarValoresArray(arr); // Llama a la función y almacena el resultado
  document.getElementById("resultado").textContent = arrayActualizado; // Muestra el resultado en el párrafo
  //console.log(duplicarValoresArray(arr));
}
//------------------------------------------------------------------------------------
// Probamos la función con un array de ejemplo
let arr = [1, 2, 4, 5];
//-----------------------------------------------------------------------------------------
function duplicarValoresArray(arr) {
  // Creamos un nuevo array para almacenar los valores actualizados
  let arrayActualizado = [];
  // Iteramos sobre cada elemento en el array
  for (let i = 0; i < arr.length; i++) {
    // Duplicamos el valor de cada elemento y lo agregamos al array actualizado
    let valorDuplicado = arr[i] * 2;
    arrayActualizado.push(valorDuplicado);
  }

  // Mostramos el array actualizado 
  return arrayActualizado;
}
