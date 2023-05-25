//ejecución

//Object with properties
let ca1: Categoria = {
    nombre : "Accion" 
};

let ca2: Categoria = {
    nombre : "Aventura" 
};

let ca3: Categoria = {
    nombre : "Drama" 
};

let ca4: Categoria = {
    nombre : "Romance" 
};

let arca1: Categoria[] = [];
arca1.push(ca1);
arca1.push(ca2);

let arca2: Categoria[] = [];
arca2.push(ca3);
arca2.push(ca4);



//objeto planes
let plan1: Plan = {
    nombre : "disney promo Mayo",
    precio: 35000
};

let plan2: Plan = {
    nombre : "disney plus-simpsom",
    precio: 15000
};

let plan3: Plan = {
    nombre : "Amazon promo madres",
    precio: 45000
};

let plan4: Plan = {
    nombre : "Amazon prime bestsaler",
    precio: 55000
};

let plan5: Plan = {
    nombre : "Netflix welcome",
    precio: 5000
};

//array planes
let arplan1: Plan[] = [];
arplan1.push(plan5);

//Object with Episodio
let episodios1: Episodio = {
    nombre : "principio del fin", 
    resumen: "todo acaba",
    duracion: "120 min"
};

let episodios2: Episodio = {
    nombre : "El gato en la bolsa", 
    resumen: "jausheykmfjrnmf",
    duracion: "104 min"
};

let episodios3: Episodio = {
    nombre : "materia gris", 
    resumen: "empieza el final",
    duracion: "140 min"
};


let arEpi1: Episodio[] = [];
arEpi1.push(episodios1);
arEpi1.push(episodios2);
arEpi1.push(episodios3);


//array serie
let serie1: SerieTV = {
    imagen:"imagen1.png",
    nombre : "Breaking bad",
    categorias: arca1,
    episodios:arEpi1
    
};

let serie2: SerieTV = {
    imagen:"imagen2.png",
    nombre : "Baile de las lucuernagas",
    categorias: arca2,
    episodios:arEpi1
};

//array series
let arserie1: SerieTV[] = [];
arserie1.push(serie1);
arserie1.push(serie2);

///plataformas 

console.log(new Plataforma("Netflix","ww.netflix.com",arplan1, arserie1))

//crear director
let direc1: Director = {
    nombre : "coco", 
    fotografia: "foto.png",
    descripcion: "Gato hermoso"
};

console.log(direc1)

//crear actor
let actor1: Actor = {
    nombre : "Hanna", 
    fotografia: "foto/hanna.png",
    descripcion: "Cat hermoso"
};

console.log(actor1)