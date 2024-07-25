import { Fabrica } from "./factory";
import {
  RoboMontagem,
  RoboPintura,
  RoboSoldagem,
  RoboTransporte,
  TipoRobo,
} from "./robots";
import { Tarefa } from "./tasks";

// NOMES:
// Bruno Silva de Castro
// Gabriel Nicoli Niederauer

const RoboMaster = new Fabrica("Robo Master");

RoboMaster.adicionarLinhaProducao(1, "Chassi");
// RoboMaster.adicionarLinhaProducao(2, "Roda");
// RoboMaster.adicionarLinhaProducao(3, "Eletronica");

const roboPintor = new RoboPintura(1, "Roberto", true);
const roboSoldagem = new RoboSoldagem(2, "Felizberto", true);
const roboTransporte = new RoboTransporte(3, "Humberto", true);
const roboMontagem = new RoboMontagem(4, "Berto", true);

const tarefaTransporte = new Tarefa(
  1,
  "Precisa buscar as peças do chassi",
  TipoRobo.Transporte
);
const tarefaSoldagem = new Tarefa(
  2,
  "Precisa soldar o chassi",
  TipoRobo.Soldagem
);
const tarefaPintura = new Tarefa(
  3,
  "Precisa pintar o chassi",
  TipoRobo.Pintura
);
const tarefaMontagem = new Tarefa(4, "Montar o robo", TipoRobo.Montagem);

RoboMaster.adicionarRoboALinhaProducao(1, roboPintor);
RoboMaster.adicionarRoboALinhaProducao(1, roboMontagem);
RoboMaster.adicionarRoboALinhaProducao(1, roboTransporte);
RoboMaster.adicionarRoboALinhaProducao(1, roboSoldagem);

RoboMaster.adicionarTarefaALinhaProducao(1, tarefaTransporte);
RoboMaster.adicionarTarefaALinhaProducao(1, tarefaSoldagem);
RoboMaster.adicionarTarefaALinhaProducao(1, tarefaPintura);
RoboMaster.adicionarTarefaALinhaProducao(1, tarefaMontagem);

RoboMaster.listarTarefas();

RoboMaster.iniciarTarefa(1, tarefaTransporte.id, roboTransporte.id);

RoboMaster.listarTarefas();

RoboMaster.concluirTarefa(1, tarefaTransporte.id);

RoboMaster.listarTarefas();

RoboMaster.iniciarTarefa(1, tarefaSoldagem.id, roboSoldagem.id);

RoboMaster.listarTarefas();

RoboMaster.concluirTarefa(1, tarefaSoldagem.id);

console.log("Tentando concluir tarefa não iniciada:");
RoboMaster.concluirTarefa(1, tarefaPintura.id);

console.log("Tentando iniciar tarefa de Montagem com Robo de Soldagem");
RoboMaster.iniciarTarefa(1, tarefaMontagem.id, roboSoldagem.id);

const tarefaPintura2 = new Tarefa(
  5,
  "Precisa buscar as peças do chassi",
  TipoRobo.Pintura
);
RoboMaster.concluirTarefa(1, tarefaPintura.id)

console.log(
  "\nIniciando tarefa de pintura, robo fica ocupado e não pode iniciar outra vez"
);
RoboMaster.adicionarTarefaALinhaProducao(1, tarefaPintura2);
RoboMaster.listarTarefas();
RoboMaster.iniciarTarefa(1, tarefaPintura.id, roboPintor.id);
RoboMaster.listarTarefas();

console.log("Tentando com robo ocupado");
RoboMaster.iniciarTarefa(1, tarefaPintura2.id, roboPintor.id);
RoboMaster.listarTarefas();

RoboMaster.concluirTarefa(1, tarefaPintura.id)
console.log("Tentando com robo apos se desocupar")
RoboMaster.iniciarTarefa(1, tarefaPintura2.id, roboPintor.id);

console.log("Testando tarefa que não existe")
RoboMaster.iniciarTarefa(1, 999, roboPintor.id);
