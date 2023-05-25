class Plataforma {
    nombre:string
    sitioweb:string
    planes:Plan []
    series:SerieTV []

    constructor(nombre:string,sitioweb:string,planes:Plan[],series:SerieTV []) {
        this.nombre = nombre
        this.sitioweb = sitioweb
        this.planes = planes
        this.series = series
     }
}