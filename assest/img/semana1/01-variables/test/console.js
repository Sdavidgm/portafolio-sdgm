console.log(5 + 5)
console.log(1 % 2)
console.log(23 % 21)
console.log('b' + 'a' + +'a' + 'a')

function saludar(nombre, apellido) {
console.log("hola" + " "+ nombre + "  " + apellido)
}

saludar("juan", "perez")

const n = "jose"
const a = "merchan"

saludar (n, a)

function suma (n1, n2) {
    return n1 + n2
}

x = suma (2, 3)
console.log (x)

function retornandoUnValor () {
    // Debes retornar un valor.
    // Ejemplo: in: () ~ out: => '¡Hola Mundo!'
    // Tu código:
    return ("¡Hola Mundo!")
  }
  const b = retornandoUnValor ()
  console.log (b)

  function nombreCompleto (nombre, apellido) {
    // Debes retornar el nombre completo de una persona.
    // Ejemplo: in: (nombre: 'Jesús', apellido: 'Fernández') ~ out: => 'Jesús Fernández'
    // Tu código:
    return ("hola" + " " + nombre + " " + apellido)
  }

  const nombre = "jose"
  const apellido = "yepez"
  f = nombreCompleto(nombre, apellido)
  console.log(f)

  function sumarNumeros (a, b) {
    // Debes sumar dos números y retornar el resultado.
    // Ejemplo: in: (a: 5, b: 7) ~ out: => 12
    // Tu código:
    return (a + b)
  }
x = sumarNumeros (7, 7)
console.log(x)

function elAreaDeUnTriangulo (base, altura) {
    // Debes retornar el área de un triángulo.
    // Ejemplo: in: (base: 5, altura: 7) ~ out: => 17.5
    // Tu código:
    
    return ((base * altura)/2)
}

resultado = elAreaDeUnTriangulo (9, 8)
console.log(resultado)

function elPerimetroDeUnCuadrado (lado) {
  // Debes retornar el perímetro de un cuadrado.
  // Ejemplo: in: (lado: 5) ~ out: => 20
  // Tu código:
  return(lado*4)
}
perimetro = elPerimetroDeUnCuadrado (3)
console.log(perimetro)

function saludoConParametros (nombre, edad, ciudad) {
  // Debes retornar un saludo con los parámetros.
  // Ejemplo: in: (nombre: 'Fernando', edad: 23, ciudad: 'Lima') ~ out: => 'Hola, soy Fernando, tengo 23 años y soy de Lima.'
  // Tu código:
  return (`hola, soy ${nombre}, tengo ${edad} años y soy de ${ciudad}.`)
  
}
let g = "Fernando"
let e = 25
let h = "Lima" 
datos = saludoConParametros (g, e, h)
console.log (datos)

function convercionDeMonedas (cantidad, moneda) {
  // Debes convertir la cantidad ingresada a dólares.
  // Ejemplo: in: (cantidad: 100, moneda: 17.97) ~ out: => 5.569
  // Tu código:
  return (cantidad/moneda)
}
let cant = 100
let mone = 17.97
conver = convercionDeMonedas (cant, mone)
console.log (conver)

function findLastWord(text) {
  // escribe tu solución aquí
  const array = text.split(" ")
  return (array[1])
  
}

const prueba = findLastWord("me llamo juan")
console.log (prueba === "llamo")

const prueba2 = findLastWord("mi telefono es nuevo")
console.log (prueba2 === "telefono" )

const prueba3 = findLastWord("juego futbol en las noches")
console.log (prueba3 === "futbol")

function getEmail(user) {
 //const obj = user
 console.log (user)
 
 return (user.correo)
}
const user1 = {
  nombre: "jose",
  correo: "jose@gmail.com"
}
const obtenerCorreo1 = getEmail (user1)

const user2 = {
  nombre: "miguel",
  correo: "miguel@gmail.com"
}
const obtenerCorreo2 = getEmail (user2)

function sumValues(numbers) {
   console.log (numbers)
  let suma = (numbers[0] + numbers [1] + numbers [2])
  return (suma)
}

let number = [101, 2, 3]
let sumarArray = sumValues(number)
console .log (sumarArray)

function countNumbers(number) {
  let array = number.split()
  console.log (array.length)
}
 let total = 123
 let contarArray = countNumbers (total)


 const estudiante = {
  nombre: 'Diego',
  edad: 21,
  correo: 'diego@correo.com',
  social: [
    {
      cuenta: 'facebook',
      'perfil url': 'facebook/diego'
    },
    {
      cuenta: 'twitter',
      'perfil url': 'twitter/diego'
    }
  ],
  genero: 'Hombre'
}

// Tu código:
const urlFacebook = estudiante.social
const urlTwitter = estudiante
console.log(urlFacebook)