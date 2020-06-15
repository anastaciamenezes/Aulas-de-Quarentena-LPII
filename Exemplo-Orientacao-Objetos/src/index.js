/**import Cliente from './models/Cliente';

*let cliente = new Cliente();
*cliente.cpf = '11111111111';
*console.log(cliente.cpf);
*cliente.rg = '123123';
*console.log(cliente);
**/

import Triangulo from './models/Triangulo';
import TrianguloIsosceles from './models/TrianguloIsosceles';

let triangulo1 = new Triangulo(5, 4);
console.log(triangulo1.area());

let triangulo2 = new TrianguloIsosceles(12, 10);
console.log(triangulo2.area());