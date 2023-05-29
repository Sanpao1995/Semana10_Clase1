//ejecución
//Object with properties
import { Categoria } from "./Categoria.js";
import { SerieTV } from "./SerieTV.js";
import { Plataforma } from "./Plataforma.js";
import { Director } from "./Director.js";
import { Actor } from "./Actor.js";
let serieTV = new SerieTV();
let categoria = new Categoria();
let director = new Director();
let actor = new Actor();
let plataforma = new Plataforma();
/*console.log(serieTV.listar_series())
console.log(serieTV.detalle_serie("Baile de las lucuernagas"))
console.log(categoria.listado_categoria())
console.log(serieTV.listado_actores_directores("Baile de las lucuernagas"))
console.log(director.detalle_director("vince Giligan"))
console.log(plataforma.listado_plataforma())*/
console.log(plataforma.detalle_plataforma("Disney Plus"));
