"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retangulo = void 0;
class Retangulo {
    get Altura() {
        return this._Altura;
    }
    get Largura() {
        return this._Largura;
    }
    set Largura(valor) {
        this.validarTamanho(valor);
        this._Largura = valor;
    }
    set Altura(valor) {
        this.validarTamanho(valor);
        this._Altura = valor;
    }
    constructor(largura, altura) {
        this.validarTamanho(largura);
        this._Largura = largura;
        this.validarTamanho(altura);
        this._Altura = altura;
    }
    Area() {
        return this._Altura * this._Largura;
    }
    validarTamanho(tamanho) {
        // Requisito - Maior que zero e menor que 100
        if (tamanho <= 0 || tamanho >= 100) {
            throw new Error("Parâmetro inválido. Somente valores de 1 a 99");
        }
    }
    toString() {
        return `Retângulo de tamanho ${this.Largura}x${this.Altura} com área = ${this.Area()}`;
    }
}
exports.Retangulo = Retangulo;
