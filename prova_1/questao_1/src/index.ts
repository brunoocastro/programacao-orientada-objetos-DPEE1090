import { Retangulo } from "./retangulo";

const retangulo1 = new Retangulo(50, 50);
console.log("Retângulo 1 - Válido: ", retangulo1.toString());

retangulo1.Altura = 30;
retangulo1.Largura = 1;
console.log(
  "Retângulo 1 - Alteração valida de tamanho: ",
  retangulo1.toString()
);

// Teste de alteração para parâmetros inválidos
retangulo1.Altura = 120;
retangulo1.Largura = 10;
console.log(
  "Retângulo 1 - Alteração inválida de tamanho: ",
  retangulo1.toString()
); // Não deve chegar nesse log nunca

const retangulo2 = new Retangulo(1, 100);
console.log(
  "Retângulo 2 de tamanho inválido criado com sucesso: ",
  retangulo2.toString()
); // Não deve chegar nesse log nunca
