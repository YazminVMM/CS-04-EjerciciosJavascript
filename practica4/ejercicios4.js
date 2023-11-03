/*
//Defininir array
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
//funcion duplicarArray
function duplicarArray(student1Courses, student2Courses) {
  // usar el metdo reduce() al array 
  //el método filter() en el arreglo student1Courses para iterar sobre cada curso y filtrar 
  //aquellos que están presentes en el arreglo student2Courses. La función de filtrado course => 
  //student2Courses.includes(course) verifica si cada curso del primer arreglo está presente en el 
  //segundo arreglo utilizando el método includes().
  let commonCourses = student1Courses.filter(course => student2Courses.includes(course));
  //retornar numerosCuadrado
  return commonCourses;
}

console.log(duplicarArray(student1Courses, student2Courses));
*/
//------------------------------------------------------------------------------------
// Función para mostrar el resultado
function mostrarResultado() {
  let resultado = encontrarCursosComunes(student1Courses, student2Courses); // Llama a la función y almacena el resultado
  document.getElementById("resultado").textContent = resultado; // Muestra el resultado en el párrafo
  //console.log(duplicarValoresArray(arr));
}
//------------------------------------------------------------------------------------
// Probamos la función con un array de ejemplo
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
//----------------------------------------------------------------------------------------
function encontrarCursosComunes(arr1, arr2) {
  let cursosComunes = [];
  let resultado;

  // Iteramos sobre cada elemento en el primer array
  for (let i = 0; i < arr1.length; i++) {
    // Si el elemento también está en el segundo array, lo agregamos a cursosComunes
    if (arr2.includes(arr1[i])) {
      cursosComunes.push(arr1[i]);
    }
  }

  // Mostramos los cursos comunes en la consola
  if (cursosComunes.length > 0) {
    resultado = `Los cursos comunes son: ${cursosComunes.join(', ')}.`;
  } else {
    resultado = 'No hay cursos comunes.';
  }
  return resultado;
}