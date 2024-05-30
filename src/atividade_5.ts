class Desconto {
  aplicarDescontoEmPorcentagem(desconto: number) {}

  recuperarValorTotal() {}
}

class ValorPedido {
  itens: ItemPedido[];

  constructor() {
    this.itens = [];
  }

  aplicarDescontoEmReais(desconto: number) {}

  removeItem(item: string): void {
    const index = this.itens.findIndex((i) => i.nome === item);
    if (index > -1) {
      this.itens.splice(index, 1);
    }
  }
}

class Pedido extends ValorPedido {
  itens: ItemPedido[] = [];

  add(item: ItemPedido): void {
    this.itens.push(item);
  }

  recuperarValorTotal(): number {
    let total = this.itens.map((i) => i.recuperarValorTotal()).reduce((sum, v) => sum + v, 0);

    return total;
  }

  aplicarDescontoEmPorcentagem(desconto: number) {
    const porcentagem = desconto / 100;
    const descontoEmReais = this.aplicarDescontoEmReais(desconto);
  }
}

class ItemPedido extends ValorPedido {
  valor: number;
  nome: string;
  quantidade: number;

  constructor(valor: number, nome: string, quantidade: number) {
    super();
    this.valor = valor;
    this.nome = nome;
    this.quantidade = quantidade;
  }

  recuperarValorTotal(): number {
    return this.valor * this.quantidade;
  }

  aplicarDescontoEmReais(desconto: number): void {
    this.valor -= desconto;
  }
}
