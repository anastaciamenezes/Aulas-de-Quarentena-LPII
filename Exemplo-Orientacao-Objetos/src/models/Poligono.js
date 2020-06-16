class Poligono {

    arestas;

    constructor(arestas) {
        this.arestas = arestas;
    }

    area() {
        console.log('Area do poligono generico');
        console.log(this.arestas);
    }


}

export default Poligono;