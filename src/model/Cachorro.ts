import Animal from "./Animal";

class Cachorro extends Animal {
  constructor() {
    super(4, true, true);
  }

  andar(): void {
    console.log("andando...");
  }

  comer(): void {
    console.log("comendo...");
  }

  latir() {
    console.log("latindo...");
  }
}

export default Cachorro;
