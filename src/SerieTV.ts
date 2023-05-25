class SerieTV {

    imagen:string
    nombre:string
    categorias:Categoria[]
    episodios:Episodio []

    constructor(imagen:string,nombre:string,categorias:Categoria[],episodios:Episodio[]) {
        this.imagen = imagen
        this.nombre = nombre
        this.categorias = categorias
        this.episodios = episodios
     }

}