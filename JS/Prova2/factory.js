"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fabrica = void 0;
class LinhaProducao {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        this.robos = [];
        this.tarefas = [];
    }
    adicionarRobo(robo) {
        this.robos.push(robo);
    }
    adicionarTarefa(tarefa) {
        this.tarefas.push(tarefa);
    }
    iniciarTarefa(tarefaId, roboId) {
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
    concluirTarefa(tarefaId) {
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
class Fabrica {
    constructor(nome) {
        this.nome = nome;
        this.linhasDeProducao = [];
    }
    adicionarLinhaProducao(id, nome) {
        const novaLP = new LinhaProducao(id, nome);
        this.linhasDeProducao.push(novaLP);
    }
    adicionarRoboALinhaProducao(idLinha, robo) {
        const lp = this.linhasDeProducao.find((linha) => linha.id == idLinha);
        if (!lp) {
            throw `Linha de Produção de ID ${idLinha} não existe na Fábrica ${this.nome}`;
        }
        lp.adicionarRobo(robo);
    }
    adicionarTarefaALinhaProducao(idLinha, tarefa) {
        const lp = this.linhasDeProducao.find((linha) => linha.id == idLinha);
        if (!lp) {
            throw `Linha de Produção de ID ${idLinha} não existe na Fábrica ${this.nome}`;
        }
        lp.adicionarTarefa(tarefa);
    }
    iniciarTarefa(idLinha, idTarefa, idRobo) {
        const lp = this.linhasDeProducao.find((linha) => linha.id === idLinha);
        if (!lp) {
            throw `Linha de Produção de ID ${idLinha} não existe na Fábrica ${this.nome}`;
        }
        lp.iniciarTarefa(idTarefa, idRobo);
    }
    concluirTarefa(idLinha, idTarefa) {
        const lp = this.linhasDeProducao.find((linha) => linha.id === idLinha);
        if (!lp) {
            throw `Linha de Produção de ID ${idLinha} não existe na Fábrica ${this.nome}`;
        }
        lp.concluirTarefa(idTarefa);
    }
    listarTarefas() {
        for (const lp of this.linhasDeProducao) {
            console.log(`\nLista de tarefas para a linha de produção de ID ${lp.id}:`);
            lp.listarTarefas();
        }
    }
}
exports.Fabrica = Fabrica;
