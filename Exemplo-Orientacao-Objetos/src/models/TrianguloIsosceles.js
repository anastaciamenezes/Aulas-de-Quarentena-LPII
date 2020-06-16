const { default: Triangulo } = require("./Triangulo");

import triangulo from "./Triangulo";

/**const calcularAltura = (base, lado) => {
 *   let subtracaoPotencias = Math.pow(base, 2) - Math.pow(lado, 2);
 *   subtracaoPotencias = subtracaoPotencias < 0 ? subtracaoPotencias * -1 : subtracaoPotencias;
 *   return Math.sqrt(subtracaoPotencias);
}**/

class TrianguloIsosceles extends Triangulo {

    //constructor(base, lado) {
    //    super(base, calcularAltura(base / 2, lado));

    lado;


    constructor(arestas) {
        super(arestas);
        this.lado = arestas.lado;
        this.calcularAltura();
    }

    calcularAltura() {
        const meiaBase = this.base / 2;
        let subtracaoPotencias = Math.pow(meiaBase, 2) - Math.pow(this.lado, 2);
        subtracaoPotencias = subtracaoPotencias < 0 ? subtracaoPotencias * -1 : subtracaoPotencias;
        this.altura = Math.sqrt(subtracaoPotencias);
    }

}

export default TrianguloIsosceles;