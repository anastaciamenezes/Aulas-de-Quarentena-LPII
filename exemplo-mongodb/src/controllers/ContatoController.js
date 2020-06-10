import Contato from '../models/Contato';

export default class ContatoController {

    async salvar(contato) {
        const contatoSalvo = await Contato.create(contato);
        return contatoSalvo;
    }
    async recuperarTodos() {
        const contatos = await Contato.find();
        return contatos;
    }
    async recuperarPorNome(nomeConsulta) {
        const contatos = await Contato.find({
            nome: {
                '$regex': nomeConsulta,
                '$options': 'i'
            }
        });
        return contatos;
    }

    async recuperarPeloId(id) {
            const contato = await Contato.findById(id);
            return contato;
        }
        /**
         * Recuperar e atualizar usando o id e a propriedade email
         * let contato = await contatoCtrl.recuperarPeloId('5ed9afda467c6d08148c6ef4')
         * contato.email = 'neia@email.com';
         * const contatoAtualizado = await contatoCtrl.salvar(contato);
         * console.log(contatoAtualizado);
         * 
         * Para ver se não houve duplicação de informação no Banco de Dados(BD): 
         * const contatos = await contatoCtrl.recuperarTodos();
         * console.log(contatos);
         * 
         * Para Remover:
         **/
    async remover(id) {
        const resposta = await Contato.deleteOne({
            _id: id
        });

        return resposta;
    }
}