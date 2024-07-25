import { Robo } from "./robots";
import { Tarefa } from "./tasks";

class LinhaProducao {
  public robos: Robo[] = [];
  public tarefas: Tarefa[] = [];

  constructor(public id: number, public nome: string) {}

  adicionarRobo(robo: Robo) {
    this.robos.push(robo);
  }

  adicionarTarefa(tarefa: Tarefa) {
    this.tarefas.push(tarefa);
  }

  iniciarTarefa(tarefaId: Tarefa["id"], roboId: Robo["id"]) {
    const robo = this.robos.find((robo) => robo.id == roboId);

    if (!robo) {
      throw `Robo de ID ${roboId} não está na linha de produção de ID ${this.id}`;
    }
    const tarefa = this.tarefas.find((tarefa) => tarefa.id == tarefaId);

    if (!tarefa) {
      throw `Tarefa de ID ${tarefaId} não está na linha de produção de ID ${this.id}`;
    }

    tarefa.executar(robo);
  }

  concluirTarefa(tarefaId: Tarefa["id"]) {
    const tarefa = this.tarefas.find((tarefa) => tarefa.id == tarefaId);

    if (!tarefa) {
      throw `Tarefa de ID ${tarefaId} não está na linha de produção de ID ${this.id}`;
    }

    tarefa.concluir();
  }

  listarTarefas() {
    console.log("Listando todas as tarefas e seu status:");
    for (const tarefa of this.tarefas) {
      console.log(`Tarefa ${tarefa.id} - Status ${tarefa.status}`);
    }
  }
}

export class Fabrica {
  linhasDeProducao: LinhaProducao[] = [];
  constructor(public nome: string) {}

  adicionarLinhaProducao(id: number, nome: string) {
    const novaLP = new LinhaProducao(id, nome);
    this.linhasDeProducao.push(novaLP);
  }

  adicionarRoboALinhaProducao(idLinha: LinhaProducao["id"], robo: Robo) {
    const lp = this.linhasDeProducao.find((linha) => linha.id == idLinha);

    if (!lp) {
      throw `Linha de Produção de ID ${idLinha} não existe na Fábrica ${this.nome}`;
    }

    lp.adicionarRobo(robo);
  }

  adicionarTarefaALinhaProducao(idLinha: LinhaProducao["id"], tarefa: Tarefa) {
    const lp = this.linhasDeProducao.find((linha) => linha.id == idLinha);

    if (!lp) {
      throw `Linha de Produção de ID ${idLinha} não existe na Fábrica ${this.nome}`;
    }

    lp.adicionarTarefa(tarefa);
  }

  iniciarTarefa(
    idLinha: LinhaProducao["id"],
    idTarefa: Tarefa["id"],
    idRobo: Robo["id"]
  ) {
    const lp = this.linhasDeProducao.find((linha) => linha.id === idLinha);

    if (!lp) {
      throw `Linha de Produção de ID ${idLinha} não existe na Fábrica ${this.nome}`;
    }

    lp.iniciarTarefa(idTarefa, idRobo);
  }

  concluirTarefa(idLinha: LinhaProducao["id"], idTarefa: Tarefa["id"]) {
    const lp = this.linhasDeProducao.find((linha) => linha.id === idLinha);

    if (!lp) {
      throw `Linha de Produção de ID ${idLinha} não existe na Fábrica ${this.nome}`;
    }

    lp.concluirTarefa(idTarefa);
  }

  listarTarefas() {
    for (const lp of this.linhasDeProducao) {
      console.log(
        `\nLista de tarefas para a linha de produção de ID ${lp.id}:`
      );
      lp.listarTarefas();
    }
  }
}
