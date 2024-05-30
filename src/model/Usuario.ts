import Jogo from "./Jogo";

class Usuario {
  conta: string;

  constructor(conta: string) {
    this.conta = conta;
  }

  escolherJogo(jogo: Jogo) {
    console.log(`Pronto! Jogo escolhido.`);
  }
}

export default Usuario;
