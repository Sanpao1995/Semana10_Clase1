import { Categoria } from "./Categoria.js";
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
}
