//funcion bubbleSort con argumento de array entrada
function bubbleSort(arr) {
//tamaño de arreglo
    let len = arr.length;
    //variable de intercambio
    let swapped;
    //hacer mientras swapped sea false
    do {
      //swapped en un booleano
      swapped = false;
      //for para recorrer el total de arreglo 
      for (let i = 0; i < len - 1; i++) {
        //Sí elemeto de indice i mayor que el siguiente elemento
        if (arr[i] > arr[i + 1]) {
          // Intercambiar los elementos si están en el orden incorrecto
          //variable temporal que va a guardar lo que contenga el elemento en el indice i
          let temp = arr[i];
         //lo que contenga el elemento del indice más uno asiganacelo al anterior 
          arr[i] = arr[i + 1];
         //lo que contenga temp asgnacelo al siguente elemento
          arr[i + 1] = temp;
         //intercambio es true, cominza de nuevo
          swapped = true;
        }
      }
      // total de tamaño de arreglo menos uno para el quitar el cero
      len--;
    } while (swapped);
    // regresa el arreglo
    //console.log(arr);
    document.getElementById("resultado").textContent = arr; // Muestra el resultado
    return arr;
  }
  // variables de entrada y salida
  let entrada = [3, 6, 12, 5, 100, 1];
  //llamar funcion e imprimir
console.log(bubbleSort(entrada));