"use strict";
class Desconto {
    aplicarDescontoEmPorcentagem(desconto) { }
    recuperarValorTotal() { }
}
class ValorPedido {
    constructor() {
        this.itens = [];
    }
    aplicarDescontoEmReais(desconto) { }
    removeItem(item) {
        const index = this.itens.findIndex((i) => i.nome === item);
        if (index > -1) {
            this.itens.splice(index, 1);
        }
    }
}
class Pedido extends ValorPedido {
    constructor() {
        super(...arguments);
        this.itens = [];
    }
    add(item) {
        this.itens.push(item);
    }
    recuperarValorTotal() {
        let total = this.itens.map((i) => i.recuperarValorTotal()).reduce((sum, v) => sum + v, 0);
        return total;
    }
    aplicarDescontoEmPorcentagem(desconto) {
        const porcentagem = desconto / 100;
        const descontoEmReais = this.aplicarDescontoEmReais(desconto);
    }
}
class ItemPedido extends ValorPedido {
    constructor(valor, nome, quantidade) {
        super();
        this.valor = valor;
        this.nome = nome;
        this.quantidade = quantidade;
    }
    recuperarValorTotal() {
        return this.valor * this.quantidade;
    }
    aplicarDescontoEmReais(desconto) {
        this.valor -= desconto;
    }
}
