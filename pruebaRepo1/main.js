"use strict";
// FUNCIONES BASICAS
// FUNCION 1
var Heroe = "Flash";
function imprime_heroe() {
    return Heroe;
}
console.log(Heroe);
//FUNCION 2
var activarHeroe = function () {
    return "Tony Stark";
};
console.log(activarHeroe());
// PARAMETROS OBLIGATORIOS
function nombreCompleto(nombre, apellido) {
    return (nombre + ' ' + apellido);
}
var nombre = nombreCompleto('Nathaly', 'Velasquez');
console.log(nombre);
//PARAMETROS OPCIONALES
function nombreCompleto1(nombre, apellido) {
    if (nombre) {
        return nombre;
    }
    else {
        return nombre + '' + apellido;
    }
}
var nombre1 = nombreCompleto('Consul', 'Maximiliano');
console.log(nombre1);
// PARAMETROS POR DEFECTO
function nombreUsuario(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = true; }
    if (capitalizado) {
        return capitalizar(nombre) + ' ' + capitalizar(apellido);
    }
    else {
        return nombre + ' ' + apellido + ' ';
    }
}
function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}
var nombreDog = nombreUsuario('consul', 'de los angeles', true);
console.log(nombreDog);
