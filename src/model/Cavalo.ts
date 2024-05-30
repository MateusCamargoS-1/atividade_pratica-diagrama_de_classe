import Animal from "./Animal";

class Cavalo extends Animal {
  constructor() {
    super(4, true, true);
  }

  andar(): void {
    console.log("andando...");
  }

  comer(): void {
    console.log("comendo...");
  }

  relinchar() {
    console.log("relinchando...");
  }
}

export default Cavalo;
