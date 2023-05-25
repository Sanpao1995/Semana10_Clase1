"use strict";
//ejecución
//Object with properties
let ca1 = {
    nombre: "Accion"
};
let ca2 = {
    nombre: "Aventura"
};
let ca3 = {
    nombre: "Drama"
};
let ca4 = {
    nombre: "Romance"
};
let arca1 = [];
arca1.push(ca1);
arca1.push(ca2);
let arca2 = [];
arca2.push(ca3);
arca2.push(ca4);
//objeto planes
let plan1 = {
    nombre: "disney promo Mayo",
    precio: 35000
};
let plan2 = {
    nombre: "disney plus-simpsom",
    precio: 15000
};
let plan3 = {
    nombre: "Amazon promo madres",
    precio: 45000
};
let plan4 = {
    nombre: "Amazon prime bestsaler",
    precio: 55000
};
let plan5 = {
    nombre: "Netflix welcome",
    precio: 5000
};
//array planes
let arplan1 = [];
arplan1.push(plan5);
//Object with Episodio
let episodios1 = {
    nombre: "principio del fin",
    resumen: "todo acaba",
    duracion: "120 min"
};
let episodios2 = {
    nombre: "El gato en la bolsa",
    resumen: "jausheykmfjrnmf",
    duracion: "104 min"
};
let episodios3 = {
    nombre: "materia gris",
    resumen: "empieza el final",
    duracion: "140 min"
};
let arEpi1 = [];
arEpi1.push(episodios1);
arEpi1.push(episodios2);
arEpi1.push(episodios3);
//array serie
let serie1 = {
    imagen: "imagen1.png",
    nombre: "Breaking bad",
    categorias: arca1,
    episodios: arEpi1
};
let serie2 = {
    imagen: "imagen2.png",
    nombre: "Baile de las lucuernagas",
    categorias: arca2,
    episodios: arEpi1
};
//array series
let arserie1 = [];
arserie1.push(serie1);
arserie1.push(serie2);
///plataformas 
console.log(new Plataforma("Netflix", "ww.netflix.com", arplan1, arserie1));
//crear director
let direc1 = {
    nombre: "coco",
    fotografia: "foto.png",
    descripcion: "Gato hermoso"
};
console.log(direc1);
//crear actor
let actor1 = {
    nombre: "Hanna",
    fotografia: "foto/hanna.png",
    descripcion: "Cat hermoso"
};
console.log(actor1);
