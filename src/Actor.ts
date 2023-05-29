import {Persona} from "./Persona.js"

export class Actor extends Persona {
    
    constructor(nombre?:string,fotografia?:string,descripcion?:string) {
        super(nombre,fotografia,descripcion)
        
    }

    //solucion punto 5A:Mostrar el detalle de un actor
    detalle_actor(nombre?:string):Actor{
        
        let actor1 = new Actor ("Brayan Caston","imagenactor1.png","alto");
        let actor2 = new Actor ("Aron pool","imagenactor2.png","joven"); 
        let actor3 = new Actor ("Ana gun","imagenactor3.png","bajo");
        let actor4 = new Actor ("Sarah Chalke","imagenactor4.png","rubia");
        let actor5 = new Actor ("Katherina heigh","imagenactor5.png","normal");
        let actor6 = new Actor ("Ben lansow","imagenactor6.png","ancho");

        let arraActores: Actor [] = [];
        arraActores.push(actor1)
        arraActores.push(actor2)
        arraActores.push(actor3)
        arraActores.push(actor4)
        arraActores.push(actor5)
        arraActores.push(actor6)


        let actor = new Actor();
        for(let i = 0 ; i < arraActores.length ; i ++){
            if(arraActores[i].nombre == nombre){
                actor = arraActores[i];
            }
        }
        return actor

    }

    //solucion punto 10: crear un nuevo actor
    agregar_actor():void  {
        var nombre: string = prompt("Ingrese el nombre del actor")!;
        var imagen: string = prompt("Ingrese la imagen del actor")!;
        var descripcion: string = prompt("Ingrese la descripcion del actor")!;
        
        let actor1 = new Actor ("Brayan Caston","imagenactor1.png","alto");
        let actor2 = new Actor ("Aron pool","imagenactor2.png","joven"); 
        let actor3 = new Actor ("Ana gun","imagenactor3.png","bajo");
        let actor4 = new Actor ("Sarah Chalke","imagenactor4.png","rubia");
        let actor5 = new Actor ("Katherina heigh","imagenactor5.png","normal");
        let actor6 = new Actor ("Ben lansow","imagenactor6.png","ancho");

        let arraActores: Actor [] = [];
        arraActores.push(actor1)
        arraActores.push(actor2)
        arraActores.push(actor3)
        arraActores.push(actor4)
        arraActores.push(actor5)
        arraActores.push(actor6)


        let nuevoactor = new Actor(nombre,imagen,descripcion);
        arraActores.push(nuevoactor)
        console.log(arraActores)
    }

}

