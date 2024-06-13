export class Retangulo {
  private _Largura: number;
  private _Altura: number;

  get Altura() {
    return this._Altura;
  }

  get Largura() {
    return this._Largura;
  }

  set Largura(valor: number) {
    this.validarTamanho(valor);

    this._Largura = valor;
  }

  set Altura(valor: number) {
    this.validarTamanho(valor);

    this._Altura = valor;
  }

  constructor(largura: number, altura: number) {
    this.validarTamanho(largura);
    this._Largura = largura;

    this.validarTamanho(altura);
    this._Altura = altura;
  }

  public Area(): number {
    return this._Altura * this._Largura;
  }

  private validarTamanho(tamanho: number) {
    // Requisito - Maior que zero e menor que 100
    if (tamanho <= 0 || tamanho >= 100) {
      throw new Error("Parâmetro inválido. Somente valores de 1 a 99");
    }
  }

  public toString(): string {
    return `Retângulo de tamanho ${this.Largura}x${
      this.Altura
    } com área = ${this.Area()}`;
  }
}
