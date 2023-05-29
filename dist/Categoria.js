export class Categoria {
    constructor(nombre) {
        this.nombre = nombre;
    }
    //solucon punto 3: Mostrar el listado de categoría   
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
    //Solucion al Punto 9: Crear una nueva categoría
    agregar_categoria() {
        var categoria = prompt("Ingrese la nueva categoria");
        let arca = [];
        arca = this.listado_categoria();
        let nuevaCategoria = new Categoria(categoria);
        arca.push(nuevaCategoria);
        console.log(arca);
    }
}
