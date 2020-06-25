import Comparador from './Comparador';

export default class ComparadorStrings implements Comparador<string> {

    ehMaior(a: string, b: string): boolean {
        return a>b;
    }
    ehMenor(a: string, b: string): boolean {
        return a<b;
    }
    ehIgual(a: string, b: string): boolean {
        return a===b;
    }
}