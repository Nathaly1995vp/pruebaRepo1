"use strict";
// TIPOS DE DATOS: BOOLEANOS
var esSuperman = true;
var esBatman;
var esAcuaman = true;
if (esSuperman) {
    console.log("Nos salvamos");
}
else {
    console.log("Vamos a morirrrr");
}
esSuperman = convertirClark();
function convertirClark() {
    return false;
}
// TIPOS DE DATOS: NUMBERS
var avengers = 5;
var villanos = 6;
var otros = 1;
if (avengers > villanos) {
    otros = 5;
    console.log("vamos a vivir");
}
else {
    console.log("vamos a morirrrr");
}
// TIPOS DE DATOS STRINGS
var perritos = "Las mejores razas";
var gatitos = 'son las criollas';
var mascotas = "son muy leales";
var concatenar1 = 'La frase es:' + perritos + " " + gatitos + " " + mascotas;
var concatenar2 = "La frase concatenada es: " + perritos + ", " + gatitos + ", " + mascotas;
console.log(concatenar1);
console.log(concatenar2);
// TIPO DE DATO ANY
var pastorAleman;
var labrador;
var goldenRetriever;
pastorAleman = "Consul";
console.log(pastorAleman.charAt(0));
// TIPOS DE DATOS ARREGLOS
var arreglo = [1, 2, 3, 4];
var strings = ["Una", "Dos", "Tres"];
console.log(strings[0].charAt(0));
//TIPOS DE DATOS TUPLAS
var heroe = ["Superman", 123];
heroe[0] = "IronMan";
heroe[1] = 321;
console.log(heroe);
//TIPOS DE DATOS ENUMERACIONES
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 0] = "min";
    Volumen[Volumen["medio"] = 1] = "medio";
    Volumen[Volumen["max"] = 2] = "max";
})(Volumen || (Volumen = {}));
var audio = Volumen.max;
console.log(audio);
console.log(Volumen);
// TIPOS DE DATOS VOID: VACIO
function llamar_Batman() {
    console.log("Batiseñal");
}
/*TIPOS DE DATOS NEVER
function error(mensaje: string | undefined):never{
  throw new  Error(mensaje);
}
error("Error en X linea")*/
// TIPOS DE DATOS: ASERCION DE TIPO
var cualquierValor = "Cualquier cosa";
var largoDelString = cualquierValor.length;
console.log(largoDelString);
