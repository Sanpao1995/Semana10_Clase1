import { Persona } from "./Persona.js";
export class Director extends Persona {
    constructor(nombre, fotografia, descripcion) {
        super(nombre, fotografia, descripcion);
    }
    detalle_director(nombre) {
        let director1 = new Director("vince Giligan", "imagendirecto1.png", "mayor");
        let director2 = new Director("michael Slovin", "imagendirector2.png", "blanco");
        let director3 = new Director("col Bukesly", "imagendirector3.png", "negroo");
        let director4 = new Director("claudia Gil", "imagendirecto4.png", "delgado");
        let director5 = new Director("martin saenz", "imagendirector5.png", "gordo");
        let arradirector = [];
        arradirector.push(director1);
        arradirector.push(director2);
        arradirector.push(director3);
        arradirector.push(director4);
        arradirector.push(director5);
        let director = new Director();
        for (let i = 0; i < arradirector.length; i++) {
            if (arradirector[i].nombre == nombre) {
                director = arradirector[i];
            }
        }
        return director;
    }
}
