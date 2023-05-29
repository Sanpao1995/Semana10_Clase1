export class Persona {
    nombre:string | undefined;;
    fotografia:string | undefined;;
    descripcion:string | undefined;;
    
    constructor(nombre?:string,fotografia?:string,descripcion?:string,) {
        this.nombre = nombre;
        this.fotografia = fotografia;
        this.descripcion = descripcion;
        
     }
}


