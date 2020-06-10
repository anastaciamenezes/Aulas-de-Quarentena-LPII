import * as db from './config/db';
import ContatoController from './controllers/ContatoController';
import Contato from './models/Contato';

const contatoCtrl = new ContatoController();

let recuperarContatos = async() => {
    db.conectarBD();

    /**
     * const resposta = await contatoCtrl.remover('5ed9afda467c6d08148c6ef4')
     * console.log(resposta);
     **/

    const contatos = await contatoCtrl.recuperarTodos();
    console.log(contatos);

    db.desconcetarBD();
}

recuperarContatos();