export class Categoria {
    constructor(nombre) {
        this.nombre = nombre;
    }
    listado_categoria() {
        let ca1 = new Categoria("accion");
        let ca2 = new Categoria("Aventura");
        let ca3 = new Categoria("Drama");
        let ca4 = new Categoria("Romance");
        let arca1 = [];
        arca1.push(ca1);
        arca1.push(ca2);
        arca1.push(ca3);
        arca1.push(ca4);
        return arca1;
    }
    ;
}
