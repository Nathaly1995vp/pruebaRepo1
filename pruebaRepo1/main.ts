// FUNCIONES BASICAS
// FUNCION 1
let Heroe: string = "Flash"
function imprime_heroe(): string{
  return Heroe;
}
console.log(Heroe)

//FUNCION 2
let activarHeroe = function(): string{
  return "Tony Stark"
}
console.log(activarHeroe())

// PARAMETROS OBLIGATORIOS
function nombreCompleto(nombre:String, apellido:string): string{
  return (nombre+' '+apellido)
}
let nombre = nombreCompleto ('Nathaly', 'Velasquez')
console.log(nombre)

//PARAMETROS OPCIONALES
function nombreCompleto1(nombre:string, apellido?:string):string{
  if(nombre){
    return nombre
  }else{
    return nombre + '' + apellido
  }
}
let nombre1 = nombreCompleto('Consul', 'Maximiliano')
console.log(nombre1)

// PARAMETROS POR DEFECTO
function nombreUsuario (nombre:string, apellido:string, capitalizado:boolean = true):string{
  if(capitalizado){
    return capitalizar(nombre)+ ' ' + capitalizar(apellido)
  }else{
  return nombre + ' ' + apellido+ ' '
  }
}

function capitalizar(palabra: string):string{
  return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}

let nombreDog = nombreUsuario('consul', 'de los angeles',true)
console.log(nombreDog)
