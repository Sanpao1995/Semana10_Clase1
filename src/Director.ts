import {Persona} from "./Persona.js"

export class Director extends Persona {
    
    constructor(nombre?:string,fotografia?:string,descripcion?:string) {
        super(nombre,fotografia,descripcion)        
    }

    ///solucion punto 5B: Mostrar el detalle de un director
    detalle_director(nombre:string):Director{
        let director1 = new Director ("vince Giligan","imagendirecto1.png","mayor");
        let director2 = new Director("michael Slovin","imagendirector2.png","blanco"); 
        let director3 = new Director ("col Bukesly","imagendirector3.png","negroo");
        let director4 = new Director ("claudia Gil","imagendirecto4.png","delgado");
        let director5 = new Director("martin saenz","imagendirector5.png","gordo"); 
    
        let arradirector: Director [] = [];
        arradirector.push(director1)
        arradirector.push(director2)
        arradirector.push(director3)
        arradirector.push(director4)
        arradirector.push(director5)

        let director = new Director();
        for(let i = 0 ; i < arradirector.length ; i ++){
            if(arradirector[i].nombre == nombre){
                director = arradirector[i];
            }
        }
        return director

    }
 
    //solucion punto 11:Crear un nuevo director
    agregar_director():void  {
        var nombre: string = prompt("Ingrese el nombre del director")!;
        var imagen: string = prompt("Ingrese la imagen del director")!;
        var descripcion: string = prompt("Ingrese la descripcion del director")!;
        
        let director1 = new Director ("vince Giligan","imagendirecto1.png","mayor");
        let director2 = new Director("michael Slovin","imagendirector2.png","blanco"); 
        let director3 = new Director ("col Bukesly","imagendirector3.png","negroo");
        let director4 = new Director ("claudia Gil","imagendirecto4.png","delgado");
        let director5 = new Director("martin saenz","imagendirector5.png","gordo"); 
    
        let arradirector: Director [] = [];
        arradirector.push(director1)
        arradirector.push(director2)
        arradirector.push(director3)
        arradirector.push(director4)
        arradirector.push(director5)

        let nuevodirector = new Director(nombre,imagen,descripcion);
        arradirector.push(nuevodirector)
        console.log(arradirector)
    }

}




