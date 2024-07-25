"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarefa = exports.StatusTarefa = void 0;
var StatusTarefa;
(function (StatusTarefa) {
    StatusTarefa["Pendente"] = "Pendente";
    StatusTarefa["Executando"] = "Executando";
    StatusTarefa["Concluido"] = "Concluido";
})(StatusTarefa || (exports.StatusTarefa = StatusTarefa = {}));
class Tarefa {
    constructor(id, descricao, tipoRobo, status = StatusTarefa.Pendente) {
        this.id = id;
        this.descricao = descricao;
        this.tipoRobo = tipoRobo;
        this.status = status;
        this.roboAlocado = null;
    }
    executar(robo) {
        if (this.status === StatusTarefa.Executando) {
            console.log("Não é possível executar a tarefa, pois já está sendo executada.");
            return;
        }
        if (robo.tipoRobo != this.tipoRobo) {
            console.log(`[ERRO] O robô de id ${robo.id} do tipo ${robo.tipoRobo} não é capaz de executar a tarefa do tipo ${this.tipoRobo} pois é incompatível`);
            return;
        }
        if (!robo.disponivel) {
            console.log("[ERRO] Este robô não é capaz de executar a tarefa pois não está disponível");
            return;
        }
        this.roboAlocado = robo;
        this.roboAlocado.iniciar();
        this.status = StatusTarefa.Executando;
    }
    concluir() {
        var _a;
        if (this.status !== StatusTarefa.Executando) {
            console.log("[ERRO] Não é possível concluir uma tarefa que não está sendo executada");
            return;
        }
        if (!this.roboAlocado) {
            console.log("[ERRO] Não há um robo alocado para essa tarefa");
        }
        (_a = this.roboAlocado) === null || _a === void 0 ? void 0 : _a.parar();
        this.roboAlocado = null;
        this.status = StatusTarefa.Concluido;
    }
}
exports.Tarefa = Tarefa;
