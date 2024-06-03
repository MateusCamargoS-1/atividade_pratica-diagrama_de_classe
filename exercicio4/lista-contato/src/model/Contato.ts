import { v4 as uuid } from "uuid";
import { ContatoType } from "../types";

class Contato {
    private id: string;
    private nome: string;
    private tel: string;
    private endereco: string;

    constructor(contato: ContatoType) {
        this.id = uuid();
        this.nome = contato.nome;
        this.tel = contato.tel;
        this.endereco = contato.endereco;
    }

    getID() {
        return this.id;
    }

    setTel(tel: string) {
        this.tel = tel;
    }

    setEndereco(endereco: string) {
        this.endereco = endereco;
    }

    exibirContato() {
        return {
            id: this.id,
            nome: this.nome,
            tel: this.tel,
            endereco: this.endereco
        }
    }
}

export default Contato;