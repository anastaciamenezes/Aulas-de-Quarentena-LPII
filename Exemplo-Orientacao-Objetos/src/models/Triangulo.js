class Triangulo {

    base;
    altura;

    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    area() {
        return (this.base * this.altura) / 2;
    }
}

export default Triangulo;