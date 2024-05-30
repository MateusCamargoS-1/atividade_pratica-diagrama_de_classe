abstract class Animal {
  numeroPatas: number;
  possuiRabo: boolean;
  possuiPelo: boolean;

  constructor(numeroPatas: number, possuiRabo: boolean, possuiPelo: boolean) {
    this.numeroPatas = numeroPatas;
    this.possuiRabo = possuiRabo;
    this.possuiPelo = possuiPelo;
  }

  abstract andar(): void;

  abstract comer(): void;
}

export default Animal;
