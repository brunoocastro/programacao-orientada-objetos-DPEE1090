export class ProdutoEletronico {
  public Nome: string;
  public Marca: string;
  private _Preco: number = 0;
  private _Estoque: number = 0;

  get Preco() {
    return this._Preco;
  }

  set Preco(valor: number) {
    if (valor < 0) {
      throw new Error("O preço não pode ser menor que 0.");
    }

    this._Preco = valor;
  }

  constructor(
    nome: string,
    marca: string,
    preco: number = 0,
    estoque: number = 0
  ) {
    this.Nome = nome;
    this.Marca = marca;
    this.Preco = preco;
    this._Estoque = estoque;
  }

  public AdicionarAoEstoque(quantidade: number = 1) {
    this._Estoque += quantidade;
  }

  public Vender(quantidade: number = 1): void {
    if ((this._Estoque - quantidade) < 1) {
      throw new Error("Não é possível vender pois não há produtos em estoque.");
    }

    this._Estoque -= quantidade;
  }

  public ValorEmEstoque() {
    return this.Preco * this._Estoque;
  }

  public toString(): string {
    return `${this.Nome} (${this.Marca}) - $${this.Preco} cada, ${
      this._Estoque
    } unidades em estoque - $${this.ValorEmEstoque()} em estoque`;
  }
}
