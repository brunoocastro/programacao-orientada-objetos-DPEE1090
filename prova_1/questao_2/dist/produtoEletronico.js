"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoEletronico = void 0;
class ProdutoEletronico {
    get Preco() {
        return this._Preco;
    }
    set Preco(valor) {
        if (valor < 0) {
            throw new Error("O preço não pode ser menor que 0.");
        }
        this._Preco = valor;
    }
    constructor(nome, marca, preco = 0, estoque = 0) {
        this._Preco = 0;
        this._Estoque = 0;
        this.Nome = nome;
        this.Marca = marca;
        this.Preco = preco;
        this._Estoque = estoque;
    }
    AdicionarAoEstoque(quantidade = 1) {
        this._Estoque += quantidade;
    }
    Vender(quantidade = 1) {
        if ((this._Estoque - quantidade) < 1) {
            throw new Error("Não é possível vender pois não há produtos em estoque.");
        }
        this._Estoque -= quantidade;
    }
    ValorEmEstoque() {
        return this.Preco * this._Estoque;
    }
    toString() {
        return `${this.Nome} (${this.Marca}) - $${this.Preco} cada, ${this._Estoque} unidades em estoque - $${this.ValorEmEstoque()} em estoque`;
    }
}
exports.ProdutoEletronico = ProdutoEletronico;
