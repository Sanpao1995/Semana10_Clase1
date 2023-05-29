import { Categoria } from "./Categoria.js";
import { Episodio } from "./Episodio.js";
import { Actor } from "./Actor.js";
import { Director } from "./Director.js";
export class SerieTV {
    constructor(imagen, nombre, categorias, episodios, actores, directores) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.categorias = categorias;
        this.episodios = episodios;
        this.actores = actores;
        this.directores = directores;
    }
    //Solución punto 1: Listar series
    listar_series() {
        let ca1 = new Categoria("accion");
        let ca2 = new Categoria("Aventura");
        let ca3 = new Categoria("Drama");
        let ca4 = new Categoria("Romance");
        let arca1 = [];
        arca1.push(ca1);
        arca1.push(ca2);
        let arca2 = [];
        arca2.push(ca3);
        arca2.push(ca4);
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
        //array de actores
        let actor1 = new Actor("Brayan Caston", "imagenactor1.png", "alto");
        let actor2 = new Actor("Aron pool", "imagenactor2.png", "joven");
        let actor3 = new Actor("Ana gun", "imagenactor3.png", "bajo");
        let actor4 = new Actor("Sarah Chalke", "imagenactor4.png", "rubia");
        let actor5 = new Actor("Katherina heigh", "imagenactor5.png", "normal");
        let actor6 = new Actor("Ben lansow", "imagenactor6.png", "ancho");
        let arraActorBrakinbad = [];
        arraActorBrakinbad.push(actor1);
        arraActorBrakinbad.push(actor2);
        arraActorBrakinbad.push(actor3);
        let arraActoresluciernagas = [];
        arraActoresluciernagas.push(actor4);
        arraActoresluciernagas.push(actor5);
        arraActoresluciernagas.push(actor6);
        //array de directores
        let director1 = new Director("vince Giligan", "imagendirecto1.png", "mayor");
        let director2 = new Director("michael Slovin", "imagendirector2.png", "blanco");
        let director3 = new Director("col Bukesly", "imagendirector3.png", "negroo");
        let director4 = new Director("claudia Gil", "imagendirecto4.png", "delgado");
        let director5 = new Director("martin saenz", "imagendirector5.png", "gordo");
        let arradirectorBrakinbad = [];
        arradirectorBrakinbad.push(director1);
        arradirectorBrakinbad.push(director2);
        arradirectorBrakinbad.push(director3);
        let arradirectorluciernagas = [];
        arradirectorluciernagas.push(director4);
        arradirectorluciernagas.push(director5);
        let serie1 = new SerieTV("imagen1.png", "Breaking bad", arca1, arEpi1, arraActorBrakinbad, arradirectorBrakinbad);
        let serie2 = new SerieTV("imagen2.png", "Baile de las lucuernagas", arca2, arEpi1, arraActoresluciernagas, arradirectorluciernagas);
        //array series
        let arserie1 = [];
        arserie1.push(serie1);
        arserie1.push(serie2);
        return arserie1;
    }
    //solucion punto 2: Mostrar el detalle de una serie en particular
    detalle_serie(nombre) {
        let arserie1 = [];
        arserie1 = this.listar_series();
        let serie1 = new SerieTV();
        for (let i = 0; i < arserie1.length; i++) {
            if (arserie1[i].nombre == nombre) {
                serie1 = arserie1[i];
            }
        }
        return serie1;
    }
    //solución punto 4: Mostrar el listado de directores y actores de una serie    
    listado_actores_directores(nombre) {
        let arserie1 = [];
        arserie1 = this.listar_series();
        let serie1 = new SerieTV();
        for (let i = 0; i < arserie1.length; i++) {
            if (arserie1[i].nombre == nombre) {
                serie1 = arserie1[i];
                console.log(arserie1[i].actores);
                console.log(arserie1[i].directores);
            }
        }
    }
    //Solución al punto 8: Crear una nueva serie
    agregar_serie() {
        var opcion = "";
        let serieNueva = new SerieTV();
        let actores;
        do {
            opcion = prompt("Ingrese la opción de su elección: \n\n1-) Agregar imagen \n2-) Agregar nombre" +
                " \n3-) Agregar categorias \n4-) Agregar episodios \n5-) Agregar actores \n6-) Agregar directores \n7-) Salir");
            if (opcion == "1") {
                //agregar imagen
                var imagen = prompt("Ingrese el nombre de la imagen");
                serieNueva.imagen = imagen;
                console.log(serieNueva);
            }
            if (opcion == "2") {
                //agregar nombre
                var nombre = prompt("Ingrese el nombre de la serie");
                serieNueva.nombre = nombre;
                console.log(serieNueva);
            }
            if (opcion == "3") {
                //agregar categorias
                let arrayCategorias = [];
                let nombreCategoria = prompt("Ingrese el nombre de la categoria");
                let categoriaNueva = new Categoria(nombreCategoria);
                arrayCategorias.push(categoriaNueva);
                if (serieNueva.categorias == undefined) {
                    serieNueva.categorias = arrayCategorias;
                }
                else {
                    serieNueva.categorias.push(categoriaNueva);
                }
                console.log(serieNueva);
            }
            if (opcion == "4") {
                //agregar episodio
                let arrayEpisodios = [];
                let nombreEpisodio = prompt("Ingrese el nombre del episodio");
                let resumenEpisodio = prompt("Ingrese el resumen del episodio");
                let duracionEpisodio = prompt("Ingrese la duracion del episodio");
                let episodioNuevo = new Episodio(nombreEpisodio, resumenEpisodio, duracionEpisodio);
                arrayEpisodios.push(episodioNuevo);
                if (serieNueva.episodios == undefined) {
                    serieNueva.episodios = arrayEpisodios;
                }
                else {
                    serieNueva.episodios.push(episodioNuevo);
                }
                console.log(serieNueva);
            }
            if (opcion == "5") {
                //agregar actores
                let arrayActores = [];
                let nombreActor = prompt("Ingrese el nombre del actor");
                let fotoActor = prompt("Ingrese la foto del actor");
                let descripcionActor = prompt("Ingrese la descripcion del actor");
                let actorNuevo = new Actor(nombreActor, fotoActor, descripcionActor);
                arrayActores.push(actorNuevo);
                if (serieNueva.actores == undefined) {
                    serieNueva.actores = arrayActores;
                }
                else {
                    serieNueva.actores.push(actorNuevo);
                }
                console.log(serieNueva);
            }
            if (opcion == "6") {
                //agregar directores
                let arrayDirectores = [];
                let nombreDirector = prompt("Ingrese el nombre del director");
                let fotoDirector = prompt("Ingrese la foto del director");
                let descripcionDirector = prompt("Ingrese la descripcion del director");
                let directorNuevo = new Director(nombreDirector, fotoDirector, descripcionDirector);
                arrayDirectores.push(directorNuevo);
                if (serieNueva.directores == undefined) {
                    serieNueva.directores = arrayDirectores;
                }
                else {
                    serieNueva.directores.push(directorNuevo);
                }
                console.log(serieNueva);
            }
            console.log(opcion);
        } while (opcion != "7");
    }
    //Solucion al Punto 12: Agregar una categoría a una serie
    agregar_categoria_serie() {
        var _a;
        var nombre = prompt("Ingrese el nombre de la serie");
        var categoria = prompt("Ingrese la categoria de la serie");
        let arserie1 = [];
        arserie1 = this.listar_series();
        let serie1 = new SerieTV();
        for (let i = 0; i < arserie1.length; i++) {
            if (arserie1[i].nombre == nombre) {
                serie1 = arserie1[i];
                let ca1 = new Categoria(categoria);
                (_a = serie1.categorias) === null || _a === void 0 ? void 0 : _a.push(ca1);
                console.log(serie1);
            }
        }
    }
    //solucion punto 13:Agregar un actor a una serie
    agregar_actor_serie() {
        var _a;
        var nombre = prompt("Ingrese el nombre del actor");
        var imagen = prompt("Ingrese la imagen del actor");
        var descripcion = prompt("Ingrese la descripción del actor");
        var serie = prompt("Ingrese el nombre de la serie");
        let arraySerie = [];
        arraySerie = this.listar_series();
        let serieEncontrada = new SerieTV();
        for (let i = 0; i < arraySerie.length; i++) {
            if (arraySerie[i].nombre == serie) {
                serieEncontrada = arraySerie[i];
                let nuevoActor = new Actor(nombre, imagen, descripcion);
                (_a = serieEncontrada.actores) === null || _a === void 0 ? void 0 : _a.push(nuevoActor);
                console.log(serieEncontrada);
            }
        }
    }
    //solucion punto 14: Agregar un director a una serie
    agregar_director_serie() {
        var _a;
        var nombre = prompt("Ingrese el nombre del director");
        var imagen = prompt("Ingrese la imagen del director");
        var descripcion = prompt("Ingrese la descripción del director");
        var serie = prompt("Ingrese el nombre de la serie");
        let arraySerie = [];
        arraySerie = this.listar_series();
        let serieEncontrada = new SerieTV();
        for (let i = 0; i < arraySerie.length; i++) {
            if (arraySerie[i].nombre == serie) {
                serieEncontrada = arraySerie[i];
                let nuevoDirector = new Director(nombre, imagen, descripcion);
                (_a = serieEncontrada.directores) === null || _a === void 0 ? void 0 : _a.push(nuevoDirector);
                console.log(serieEncontrada);
            }
        }
    }
}
