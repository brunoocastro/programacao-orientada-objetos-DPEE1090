"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factory_1 = require("./factory");
const robots_1 = require("./robots");
const tasks_1 = require("./tasks");
// NOMES:
// Bruno Silva de Castro
// Gabriel Nicoli Niederauer
const RoboMaster = new factory_1.Fabrica("Robo Master");
RoboMaster.adicionarLinhaProducao(1, "Chassi");
// RoboMaster.adicionarLinhaProducao(2, "Roda");
// RoboMaster.adicionarLinhaProducao(3, "Eletronica");
const roboPintor = new robots_1.RoboPintura(1, "Roberto", true);
const roboSoldagem = new robots_1.RoboSoldagem(2, "Felizberto", true);
const roboTransporte = new robots_1.RoboTransporte(3, "Humberto", true);
const roboMontagem = new robots_1.RoboMontagem(4, "Berto", true);
const tarefaTransporte = new tasks_1.Tarefa(1, "Precisa buscar as peças do chassi", robots_1.TipoRobo.Transporte);
const tarefaSoldagem = new tasks_1.Tarefa(2, "Precisa soldar o chassi", robots_1.TipoRobo.Soldagem);
const tarefaPintura = new tasks_1.Tarefa(3, "Precisa pintar o chassi", robots_1.TipoRobo.Pintura);
const tarefaMontagem = new tasks_1.Tarefa(4, "Montar o robo", robots_1.TipoRobo.Montagem);
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
const tarefaPintura2 = new tasks_1.Tarefa(5, "Precisa buscar as peças do chassi", robots_1.TipoRobo.Pintura);
RoboMaster.concluirTarefa(1, tarefaPintura.id);
console.log("\nIniciando tarefa de pintura, robo fica ocupado e não pode iniciar outra vez");
RoboMaster.adicionarTarefaALinhaProducao(1, tarefaPintura2);
RoboMaster.listarTarefas();
RoboMaster.iniciarTarefa(1, tarefaPintura.id, roboPintor.id);
RoboMaster.listarTarefas();
console.log("Tentando com robo ocupado");
RoboMaster.iniciarTarefa(1, tarefaPintura2.id, roboPintor.id);
RoboMaster.listarTarefas();
RoboMaster.concluirTarefa(1, tarefaPintura.id);
console.log("Tentando com robo apos se desocupar");
RoboMaster.iniciarTarefa(1, tarefaPintura2.id, roboPintor.id);
console.log("Testando tarefa que não existe");
RoboMaster.iniciarTarefa(1, 999, roboPintor.id);
