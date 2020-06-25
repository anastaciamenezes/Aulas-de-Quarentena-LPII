import Comparador from './Comparador';
import Pessoa from './models/Pessoa';

export default class ComparadorPessoa implements Comparador<Pessoa>{
    ehMaior(a: Pessoa, b: Pessoa): boolean {
        return a.nome > b.nome;
    }
    ehMenor(a: Pessoa, b: Pessoa): boolean {
        return a.nome < b.nome;
    }
    ehIgual(a: Pessoa, b: Pessoa): boolean {
        return a.nome === b.nome && a.telefone === b.telefone;
    }

}