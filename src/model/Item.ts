class Item {
  private valor: number;
  private nome: string;
  private descricao: string;

  constructor(valor: number, nome: string, descricao: string) {
    this.valor = valor;
    this.nome = nome;
    this.descricao = descricao;
  }
}

export default Item;
