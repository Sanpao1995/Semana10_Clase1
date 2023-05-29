import { SerieTV } from "./SerieTV.js";
export class Plataforma {
    constructor(nombre, sitioweb, planes, series) {
        this.nombre = nombre;
        this.sitioweb = sitioweb;
        this.planes = planes;
        this.series = series;
    }
    //solucion punto 6: Mostrar el listado de las plataformas
    listado_plataforma() {
        //Planes
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
        let arplanDisney = [];
        arplanDisney.push(plan1);
        arplanDisney.push(plan2);
        let arplanAmazon = [];
        arplanAmazon.push(plan3);
        arplanAmazon.push(plan4);
        let arplanNetflix = [];
        arplanNetflix.push(plan5);
        //Series
        let serieTV = new SerieTV();
        let arserie1 = [];
        arserie1 = serieTV.listar_series();
        let plataforma1 = new Plataforma("Netflix", "www.netflix.com", arplanNetflix, arserie1);
        let plataforma2 = new Plataforma("Disney Plus", "www.disneyplus.com", arplanDisney, arserie1);
        let plataforma3 = new Plataforma("Amazon Prime", "www.amazonprime.com", arplanAmazon, arserie1);
        let arrayPlataformas = [];
        arrayPlataformas.push(plataforma1);
        arrayPlataformas.push(plataforma2);
        arrayPlataformas.push(plataforma3);
        return arrayPlataformas;
    }
    //solucion punto 7:  Mostrar detalle de una plataforma
    detalle_plataforma(nombre) {
        let arpla = [];
        arpla = this.listado_plataforma();
        let plataforma = new Plataforma();
        for (let i = 0; i < arpla.length; i++) {
            if (arpla[i].nombre == nombre) {
                plataforma = arpla[i];
            }
        }
        return plataforma;
    }
}
