export class ConversorTemperatura {
  private converteParaCelsius(temperatura: number, escala: string) {
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

  private converteCelsiusParaFahrenheit(Celsius: number): number {
    return (9 / 5) * Celsius + 32;
  }

  private converteCelsiusParaKelvin(Celsius: number): number {
    return Celsius + 273.16;
  }

  // Método principal - Caso 1
  public converter(
    temperatura: number,
    unidadeOriginal: string,
    unidadeDesejada: string
  ): number;
  // Sobrecarga do método - Caso 2
  public converter(temperatura: number, unidadeDesejada: string): number;

  public converter(
    temperatura: number,
    escalaOriginalOuDesejada: string,
    escalaDesejada?: string
  ): number {
    let temperaturaEmCelsius = temperatura;
    let escalaRecebida = "C";
    let escalaDesejadaFinal = escalaOriginalOuDesejada;

    if (escalaDesejada !== undefined) {
      temperaturaEmCelsius = this.converteParaCelsius(
        temperatura,
        escalaOriginalOuDesejada
      );

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
    console.log(
      `Temperatura convertida (final): ${temperaturaConvertidaFinal} º${escalaDesejadaFinal}`
    );

    return temperaturaConvertidaFinal;
  }
}
