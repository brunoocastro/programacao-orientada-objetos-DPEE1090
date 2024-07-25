import { Robo, TipoRobo } from "./robots";

export enum StatusTarefa {
  Pendente = "Pendente",
  Executando = "Executando",
  Concluido = "Concluido",
}

export class Tarefa {
  public roboAlocado: Robo | null = null;

  constructor(
    public id: number,
    public descricao: string,
    public tipoRobo: TipoRobo,
    public status: StatusTarefa = StatusTarefa.Pendente
  ) {}

  executar(robo: Robo) {
    if (this.status === StatusTarefa.Executando) {
      console.log(
        "Não é possível executar a tarefa, pois já está sendo executada."
      );
      return;
    }

    if (robo.tipoRobo != this.tipoRobo) {
      console.log(
        `[ERRO] O robô de id ${robo.id} do tipo ${robo.tipoRobo} não é capaz de executar a tarefa do tipo ${this.tipoRobo} pois é incompatível`
      );
      return;
    }

    if (!robo.disponivel) {
      console.log(
        "[ERRO] Este robô não é capaz de executar a tarefa pois não está disponível"
      );
      return;
    }

    this.roboAlocado = robo;
    this.roboAlocado.iniciar();
    this.status = StatusTarefa.Executando;
  }

  concluir() {
    if (this.status !== StatusTarefa.Executando) {
      console.log(
        "[ERRO] Não é possível concluir uma tarefa que não está sendo executada"
      );
      return;
    }

    if (!this.roboAlocado) {
      console.log("[ERRO] Não há um robo alocado para essa tarefa");
    }

    this.roboAlocado?.parar();
    this.roboAlocado = null;
    this.status = StatusTarefa.Concluido;
  }
}
