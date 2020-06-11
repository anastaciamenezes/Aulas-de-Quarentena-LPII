import * as db from './config/db';
import PessoaController from './controllers/PessoaController';
import Pessoa from './models/Pessoa';

const pessoaCtrl = new PessoaController();

let adicionarPessoa = async() => {

    db.conectarBD();

    const novaPessoa = {
        nome: 'Maria Vai Com As Outras',
        areaDeAtuacao: 'Publicitaria',
        telefone: '98766-4321',
        endereco: 'Rua das Letras, 82'
    };
    await pessoaCtrl.salvar(novaPessoa);

    db.desconectarBD();
}
adicionarPessoa();

let recuperarTodasPessoas = async() => {
    db.conectarBD();

    const pessoas = await pessoaCtrl.recuperarTodas();
    pessoas.forEach(pessoa => console.log(pessoa));

    db.desconectarBD();
}
recuperarTodasPessoas();

let recuperarPorEndereco = async() => {
    db.conectarBD();

    const pessoas = await pessoaCtrl.recuperarPorEndereco('a');
    pessoas.forEach(pessoa => console.log(pessoa));

    db.desconectarBD();
}
recuperarPorEndereco();