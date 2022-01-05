enum Colores {
    Rojo = "Rojo",
    Verde = "Verde"
};

interface Rectangulo {
    ancho: number;
    alto: number;
    color: Colores;
};

let rect: Rectangulo = {
    ancho: 3,
    alto: 2,
    color: Colores.Verde
};

function area(r: Rectangulo){
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);


rect.toString = function(){
    return `Un rectangulo ${this.color}`;
}

console.log(rect.toString());