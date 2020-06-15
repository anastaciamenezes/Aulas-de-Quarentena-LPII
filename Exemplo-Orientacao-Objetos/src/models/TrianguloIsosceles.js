const { default: Triangulo } = require("./Triangulo");

import triangulo from "./Triangulo";

const calcularAltura = (base, lado) => {
    let subtracaoPotencias = Math.pow(base, 2) - Math.pow(lado, 2);
    subtracaoPotencias = subtracaoPotencias < 0 ? subtracaoPotencias * -1 : subtracaoPotencias;
    return Math.sqrt(subtracaoPotencias);
}

class TrianguloIsosceles extends Triangulo {

    constructor(base, lado) {
        super(base, calcularAltura(base / 2, lado));


    }

}

export default TrianguloIsosceles;