// </ #4 Funciones />

/*
  Ejercicio #1
  Desarrolla la lógica de las siguientes funciones.
  No modifiques los nombres ni los parámetros de las funciones.
  No debes invocar a las funciones.
  No debes crear otras variables (a menos que los requieras). Utiliza los parámetros que reciben las funciones.
  Recuerda utilizar return para devolver valores.
*/

function retornandoUnValor () {
  // Debes retornar un valor.
  // Ejemplo: in: () ~ out: => '¡Hola Mundo!'
  // Tu código:
  return ("¡Hola Mundo!")
}
const b = retornandoUnValor ()

function nombreCompleto (nombre, apellido) {
  // Debes retornar el nombre completo de una persona.
  // Ejemplo: in: (nombre: 'Jesús', apellido: 'Fernández') ~ out: => 'Jesús Fernández'
  // Tu código:
  return (nombre + " " + apellido)
}
  const nombre = "jose"
  const apellido = "yepez"
  f = nombreCompleto(nombre, apellido)

function sumarNumeros (a, b) {
  // Debes sumar dos números y retornar el resultado.
  // Ejemplo: in: (a: 5, b: 7) ~ out: => 12
  // Tu código:
  return (a + b)
  }
x = sumarNumeros (5, 7)

function elAreaDeUnTriangulo (base, altura) {
  // Debes retornar el área de un triángulo.
  // Ejemplo: in: (base: 5, altura: 7) ~ out: => 17.5
  // Tu código:
  return ((base * altura)/2)
}
resultado = elAreaDeUnTriangulo (5, 8)


function elPerimetroDeUnCuadrado (lado) {
  // Debes retornar el perímetro de un cuadrado.
  // Ejemplo: in: (lado: 5) ~ out: => 20
  // Tu código:
  return (lado*4)
}
perimetro = elPerimetroDeUnCuadrado (4)


function saludoConParametros (nombre, edad, ciudad) {
  // Debes retornar un saludo con los parámetros.
  // Ejemplo: in: (nombre: 'Fernando', edad: 23, ciudad: 'Lima') ~ out: => 'Hola, soy Fernando, tengo 23 años y soy de Lima.'
  // Tu código:
  return (`Hola, soy ${nombre}, tengo ${edad} años y soy de ${ciudad}.`)
  
}
let g = "Fernando"
let e = 25
let h = "Lima" 
datos = saludoConParametros (g, e, h)


function convercionDeMonedas (cantidad, moneda) {
  // Debes convertir la cantidad ingresada a dólares.
  // Ejemplo: in: (cantidad: 100, moneda: 17.97) ~ out: => 5.569
  // Tu código:
  return (cantidad/moneda)
}
let cant = 100
let mone = 17.97
conver = convercionDeMonedas (cant, mone)

/*
  Ejercicio #2
  Responde las siguientes preguntas:
  Reeplaza null por un string en cada respuesta
*/

// ¿Cuáles son algunas de las principales características de una función?
const respuesta1 = "reutilizable"

// ¿Cómo se llaman los valores pasados dentro de los parentesis de una función?
const respuesta2 = "parametros"

// ¿Como se llaman los datos que devuelve una función?
const respuesta3 = "valores de retorno" 

// ¿Cómo se llaman los valores que se pasan en la llamada a la función?
const respuesta4 = "argumento"

// ¿Cuál es el valor que devuelve una función si no tiene la palabra reservada "return"?
const respuesta5 = "undefined"

// NO TOCAR ESTE CÓDIGO
module.exports = {
  retornandoUnValor,
  nombreCompleto,
  sumarNumeros,
  elAreaDeUnTriangulo,
  elPerimetroDeUnCuadrado,
  saludoConParametros,
  convercionDeMonedas,
  respuesta1,
  respuesta2,
  respuesta3,
  respuesta4,
  respuesta5
}
