import Animal from "./Animal";

class Gato extends Animal {
  constructor() {
    super(4, true, true);
  }

  andar(): void {
    console.log("andando...");
  }

  comer(): void {
    console.log("comendo...");
  }

  miar() {
    console.log("miando...");
  }
}

export default Gato;
