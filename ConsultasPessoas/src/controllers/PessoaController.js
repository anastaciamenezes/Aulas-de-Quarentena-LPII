import Pessoa from '../models/Pessoa';

export default class PessoaController {

    async salvar(pessoa) {
        const pessoaSalvo = await Pessoa.create(pessoa);
        return pessoaSalvo;
    }
    async recuperarTodo() {
        const pessoas = await Pessoa.find();
        return pessoas;
    }
    async recuperarPorEndereco(enderecoConsulta) {
        const pessoas = await Pessoa.find({
            endereco: {
                '$regex': enderecoConsulta,
                '$options': 'q'
            }
        });
        return pessoas;
    }

    async recuperarPeloId(id) {
        const pessoa = await Pessoa.findById(id);
        return pessoa;
    }

    /**
     * Recuperar e atualizar usando o id e a propriedade email
     * let pessoa = await pessoaCtrl.recuperarPeloId('5ed9afda467c6d08148c6ef4')
     * pessoa.areaDeAtuacao = 'Engenharia';
     * const pessoaAtualizada = await pessoaCtrl.salvar(pessoa);
     * console.log(pessoaAtualizada);
     * 
     * Para ver se não houve duplicação de informação no Banco de Dados(BD): 
     * const pessoas = await pessoaCtrl.recuperarTodos();
     * console.log(pessoas);
     * 
     * Para Remover:
     **/
    async remover(id) {
        const resposta = await Pessoa.deleteOne({
            _id: id
        });

        return resposta;
    }
}