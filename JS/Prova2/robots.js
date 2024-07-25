"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoboTransporte = exports.RoboMontagem = exports.RoboPintura = exports.RoboSoldagem = exports.Robo = exports.TipoRobo = void 0;
var TipoRobo;
(function (TipoRobo) {
    TipoRobo["Soldagem"] = "Soldagem";
    TipoRobo["Pintura"] = "Pintura";
    TipoRobo["Montagem"] = "Montagem";
    TipoRobo["Transporte"] = "Transporte";
})(TipoRobo || (exports.TipoRobo = TipoRobo = {}));
class Robo {
    constructor(id, nome, disponivel, tipoRobo) {
        this.id = id;
        this.nome = nome;
        this.tipoRobo = tipoRobo;
        this.disponivel = disponivel;
    }
    iniciar() {
        if (!this.disponivel) {
            console.log(`Robo de ID ${this.id} não pode iniciar pois não está disponível`);
            return;
        }
        this.disponivel = false;
    }
    parar() {
        this.disponivel = true;
    }
}
exports.Robo = Robo;
class RoboSoldagem extends Robo {
    constructor(id, nome, disponivel) {
        super(id, nome, disponivel, TipoRobo.Soldagem);
    }
}
exports.RoboSoldagem = RoboSoldagem;
class RoboPintura extends Robo {
    constructor(id, nome, disponivel) {
        super(id, nome, disponivel, TipoRobo.Pintura);
    }
}
exports.RoboPintura = RoboPintura;
class RoboMontagem extends Robo {
    constructor(id, nome, disponivel) {
        super(id, nome, disponivel, TipoRobo.Montagem);
    }
}
exports.RoboMontagem = RoboMontagem;
class RoboTransporte extends Robo {
    constructor(id, nome, disponivel) {
        super(id, nome, disponivel, TipoRobo.Transporte);
    }
}
exports.RoboTransporte = RoboTransporte;
