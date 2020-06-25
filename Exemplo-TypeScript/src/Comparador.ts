export default interface Comparador<T> {

    ehMaior(a: T, b: T): boolean;

    ehMenor(a: T, b: T): boolean;

    ehIgual(a: T, b: T): boolean;

    }

