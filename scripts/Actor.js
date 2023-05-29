import { Persona } from "./Persona.js";
export class Actor extends Persona {
    constructor(nombre, fotografia, descripcion) {
        super(nombre, fotografia, descripcion);
    }
    detalle_actor(nombre) {
        let actor1 = new Actor("Brayan Caston", "imagenactor1.png", "alto");
        let actor2 = new Actor("Aron pool", "imagenactor2.png", "joven");
        let actor3 = new Actor("Ana gun", "imagenactor3.png", "bajo");
        let actor4 = new Actor("Sarah Chalke", "imagenactor4.png", "rubia");
        let actor5 = new Actor("Katherina heigh", "imagenactor5.png", "normal");
        let actor6 = new Actor("Ben lansow", "imagenactor6.png", "ancho");
        let arraActores = [];
        arraActores.push(actor1);
        arraActores.push(actor2);
        arraActores.push(actor3);
        arraActores.push(actor4);
        arraActores.push(actor5);
        arraActores.push(actor6);
        let actor = new Actor();
        for (let i = 0; i < arraActores.length; i++) {
            if (arraActores[i].nombre == nombre) {
                actor = arraActores[i];
            }
        }
        return actor;
    }
}
