import { ProdutoEletronico } from "./produtoEletronico";

const produto1 = new ProdutoEletronico("PC", "Lenovo", 4000, 2);
console.log("Produto 1 - Válido: ", produto1.toString());

produto1.Preco = 3000;
// produto1.Estoque = 1; // Não permite pois não tem getter/setter
console.log("Produto 1: ", produto1.toString());

produto1.AdicionarAoEstoque(4);
console.log("Produto 1 (mais estoque): ", produto1.toString());

// Não deixa por que não tem 7 em estoque
// produto1.Vender(7);
// console.log("Produto 1 (Vendeu 7): ", produto1.toString());
produto1.Vender(2);
console.log("Produto 1 (Vendeu 2): ", produto1.toString());

const produto2 = new ProdutoEletronico("Mouse", "Logitech");
console.log("Produto 2: ", produto2.toString());
