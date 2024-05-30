import FormatoDeElemento from "./FormatoDeElemento";

class Retangulo extends FormatoDeElemento {
  private comprimento: number;
  private altura: number;

  constructor(comprimento: number, altura: number) {
    super();
    this.comprimento = comprimento;
    this.altura = altura;
  }

  desenhar(): void {}

  redimensionar(): void {}
}

export default Retangulo;
