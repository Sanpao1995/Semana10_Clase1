
import {SerieTV} from "./SerieTV.js"
import {Plan} from "./Plan.js"
import { Actor } from "./Actor"
import { Categoria } from "./Categoria"

export class Plataforma {
    nombre:string | undefined
    sitioweb:string | undefined
    planes:Plan[] | undefined
    series:SerieTV[] | undefined

    constructor(nombre?:string,sitioweb?:string,planes?:Plan[],series?:SerieTV []) {
        this.nombre = nombre
        this.sitioweb = sitioweb
        this.planes = planes
        this.series = series
    }

    //solucion punto 6: Mostrar el listado de las plataformas
    listado_plataforma():Plataforma[] {
        
        //Planes
        let plan1: Plan = {
            nombre : "disney promo Mayo",
            precio: 35000
        };
        
        let plan2: Plan = {
            nombre : "disney plus-simpsom",
            precio: 15000
        };
        
        let plan3: Plan = {
            nombre : "Amazon promo madres",
            precio: 45000
        };
        
        let plan4: Plan = {
            nombre : "Amazon prime bestsaler",
            precio: 55000
        };
        
        let plan5: Plan = {
            nombre : "Netflix welcome",
            precio: 5000
        };
        
        //array planes
        let arplanDisney: Plan[] = [];
        arplanDisney.push(plan1);
        arplanDisney.push(plan2);

        let arplanAmazon: Plan[] = [];
        arplanAmazon.push(plan3);
        arplanAmazon.push(plan4);

        let arplanNetflix: Plan[] = [];
        arplanNetflix.push(plan5);
        
        //Series

        let serieTV = new SerieTV();
        let arserie1: SerieTV[] = [];
        arserie1= serieTV.listar_series()
        
        let plataforma1 = new Plataforma("Netflix","www.netflix.com",arplanNetflix, arserie1);
        let plataforma2 = new Plataforma("Disney Plus","www.disneyplus.com",arplanDisney, arserie1); 
        let plataforma3 = new Plataforma("Amazon Prime","www.amazonprime.com",arplanAmazon,arserie1);
    
        let arrayPlataformas: Plataforma [] = [];
        arrayPlataformas.push(plataforma1)
        arrayPlataformas.push(plataforma2)
        arrayPlataformas.push(plataforma3)

        return arrayPlataformas 
    }
    
    //solucion punto 7:  Mostrar detalle de una plataforma
    detalle_plataforma(nombre: string):Plataforma  {
        let arpla: Plataforma[] = [];
        arpla= this.listado_plataforma()
        let plataforma = new Plataforma ();
        for(let i = 0 ; i < arpla.length ; i ++){
            if(arpla[i].nombre == nombre){
                plataforma = arpla[i];
            }
        }
        return plataforma
    }

}
