"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversorTemperatura = void 0;
class ConversorTemperatura {
    converteParaCelsius(temperatura, escala) {
        switch (escala) {
            case "C":
                return temperatura;
            case "K":
                return temperatura - 273.16;
            case "F":
                return (temperatura - 32) * (5 / 9);
            default:
                throw new Error(`Conversão não suporta a escala ${escala}`);
        }
    }
    converteCelsiusParaFahrenheit(Celsius) {
        return (9 / 5) * Celsius + 32;
    }
    converteCelsiusParaKelvin(Celsius) {
        return Celsius + 273.16;
    }
    converter(temperatura, escalaOriginalOuDesejada, escalaDesejada) {
        let temperaturaEmCelsius = temperatura;
        let escalaRecebida = "C";
        let escalaDesejadaFinal = escalaOriginalOuDesejada;
        if (escalaDesejada !== undefined) {
            temperaturaEmCelsius = this.converteParaCelsius(temperatura, escalaOriginalOuDesejada);
            escalaRecebida = escalaOriginalOuDesejada;
            escalaDesejadaFinal = escalaDesejada;
        }
        let temperaturaConvertidaFinal = null;
        if (escalaDesejadaFinal == "K")
            temperaturaConvertidaFinal =
                this.converteCelsiusParaKelvin(temperaturaEmCelsius);
        else if (escalaDesejadaFinal == "F")
            temperaturaConvertidaFinal =
                this.converteCelsiusParaFahrenheit(temperaturaEmCelsius);
        else if (escalaDesejadaFinal == "C")
            temperaturaConvertidaFinal = temperaturaEmCelsius;
        if (temperaturaConvertidaFinal == null)
            throw new Error(`Conversão não suporta a escala ${escalaDesejadaFinal}`);
        console.log(`\n-- Conversão de temperatura --`);
        console.log(`Valor inicial: ${temperatura} º${escalaRecebida}`);
        console.log(`Temperatura convertida (final): ${temperaturaConvertidaFinal} º${escalaDesejadaFinal}`);
        return temperaturaConvertidaFinal;
    }
}
exports.ConversorTemperatura = ConversorTemperatura;
