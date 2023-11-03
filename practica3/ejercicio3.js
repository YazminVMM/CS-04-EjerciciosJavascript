/*
//Defininir array
let arr2 = [1, 2, 3, 4] ;
//funcion duplicarArray
function duplicarArray(arr) {
  // usar el metdo reduce() al array 
  //se utiliza para reducir los elementos de un arreglo a un solo valor, 
  //aplicando una función acumuladora que se aplica a cada elemento del arreglo. 
  let suma = arr.reduce((acumulador, valorActual) => acumulador + valorActual);
  let producto = arr.reduce((acumulador, valorActual) => acumulador * valorActual);
  let mensaje = `Suma ${suma}, producto ${producto}`;
  //retornar numerosCuadrado
  return mensaje;
}
console.log(duplicarArray(arr2));
*/
//------------------------------------------------------------------------------------
// Función para mostrar el resultado
function mostrarResultado() {
  let arrayActualizado = calcularSumaYProducto(arr); // Llama a la función y almacena el resultado
  document.getElementById("resultado").textContent = arrayActualizado; // Muestra el resultado en el párrafo
}
//------------------------------------------------------------------------------------
// Probamos la función con un array de ejemplo
let arr = [1, 2, 3, 4];
calcularSumaYProducto(arr);
//------------------------------------------------------------------------------------
function calcularSumaYProducto(arr) {
  let suma = 0;
  let producto = 1;
  let mensaje;
  // Iteramos sobre cada elemento en el array
  for (let i = 0; i < arr.length; i++) {
    // Sumamos cada elemento al valor actual de la suma
    suma += arr[i];
    // Multiplicamos cada elemento por el valor actual del producto
    producto *= arr[i];
  }
  // Mostramos la suma y el producto en la consola
  mensaje=`La suma es ${suma}. El producto es ${producto}.`;
  //console.log(mensaje);
  return mensaje;
}


