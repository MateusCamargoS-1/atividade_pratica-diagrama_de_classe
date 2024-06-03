import Contato from "./Contato";

class ListaTelefonica {
    private listaContato: Contato[];

    constructor() {
        this.listaContato = [];
    }

    adicionarContato(contato: Contato) {
        const index = this.listaContato.findIndex(item => item.getID() === contato.getID());

        if(index === -1) {
            this.listaContato.push(contato);
        } else {
            return `Contato ja existe!`
        }
    }

    removerContato(contato: Contato) {
        const index = this.listaContato.findIndex(item => item.getID() === contato.getID());

        if(index === -1) {
            return `Contato não encontrado`
        } else {
            this.listaContato.splice(index, 1);
        }
    }

    editarContato(nome: string, tel: string, endereco: string) {
        const index = this.listaContato.findIndex(item => item.exibirContato().nome === nome);

        if(index === -1) {
            return `Contato não foi encontrado, precisa adicionar`
        } else {
            this.listaContato[index].setTel(tel)
            this.listaContato[index].setEndereco(endereco);
        }
    }

    buscarContatoPorNome(nome: string) {
        const index = this.listaContato.findIndex(item => item.exibirContato().nome === nome);

        if(index === -1) {
            return `Contato não foi encontrado, precisa adicionar`
        } else {
            return this.listaContato[index];
        }
    }

    exibirListaContatos() {
        return this.listaContato;
    }
}

export default ListaTelefonica;