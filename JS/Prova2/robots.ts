export enum TipoRobo {
  Soldagem = "Soldagem",
  Pintura = "Pintura",
  Montagem = "Montagem",
  Transporte = "Transporte",
}

export abstract class Robo {
  id: number;
  nome: string;
  disponivel: boolean;
  tipoRobo: TipoRobo;

  constructor(
    id: number,
    nome: string,
    disponivel: boolean,
    tipoRobo: TipoRobo
  ) {
    this.id = id;
    this.nome = nome;
    this.tipoRobo = tipoRobo;
    this.disponivel = disponivel;
  }

  iniciar() {
    if (!this.disponivel) {
      console.log(
        `Robo de ID ${this.id} não pode iniciar pois não está disponível`
      );
      return;
    }

    this.disponivel = false;
  }

  parar() {
    this.disponivel = true;
  }
}

export class RoboSoldagem extends Robo {
  constructor(id: number, nome: string, disponivel: boolean) {
    super(id, nome, disponivel, TipoRobo.Soldagem);
  }
}

export class RoboPintura extends Robo {
  constructor(id: number, nome: string, disponivel: boolean) {
    super(id, nome, disponivel, TipoRobo.Pintura);
  }
}
export class RoboMontagem extends Robo {
  constructor(id: number, nome: string, disponivel: boolean) {
    super(id, nome, disponivel, TipoRobo.Montagem);
  }
}
export class RoboTransporte extends Robo {
  constructor(id: number, nome: string, disponivel: boolean) {
    super(id, nome, disponivel, TipoRobo.Transporte);
  }
}
