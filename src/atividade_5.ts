class Desconto {
  aplicarDescontoEmPorcentagem(desconto: number) {}

  recuperarValorTotal() {}
}

class ItemPedido {
  valor: number;
  nome: string;
  quantidade: number;

  constructor(valor: number, nome: string, quantidade: number) {
    this.valor = valor;
    this.nome = nome;
    this.quantidade = quantidade;
  }

  recuperarValorTotal(): number {
    return this.valor * this.quantidade;
  }

  aplicarDescontoEmReais(desconto: number) {
    this.valor -= desconto;
  }
}

class ValorPedido {
  itens: ItemPedido[];

  constructor() {
    this.itens = [];
  }

  aplicarDescontoEmReais(desconto: number) {}

  removeItem(item: string) {
    const index = this.itens.findIndex((i) => i.nome === item);
    if (index > -1) {
      this.itens.splice(index, 1);
    }
  }
}

class Pedido extends ValorPedido {
  constructor() {
    super();
  }

  add(item: ItemPedido): void {
    this.itens.push(item);
  }

  recuperarValorTotal(): number {
    const total = this.itens
      .map((i) => i.recuperarValorTotal())
      .reduce((sum, v) => sum + v, 0);
    return total;
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    const porcentagem = desconto / 100;
    this.itens.forEach((item) => {
      const descontoEmReais = item.valor * porcentagem;
      item.aplicarDescontoEmReais(descontoEmReais);
    });
  }
}
