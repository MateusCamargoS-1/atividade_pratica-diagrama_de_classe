import FormatoDeElemento from "./FormatoDeElemento";

class Circulo extends FormatoDeElemento {
  private raio: number;

  constructor(raio: number) {
    super();
    this.raio = raio;
  }

  desenhar(): void {}

  redimensionar(): void {}
}

export default Circulo;
