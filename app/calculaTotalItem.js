const calculaTotalItem = function(codigo, quantidade, desconto = 0) {
  const produtos = [
   {id: 1, nome: 'Banana', valorUnitario: 2},
   {id: 2, nome: 'Maça', valorUnitario: 5},
   {id: 3, nome: 'Pera', valorUnitario: 6},
   {id: 4, nome: 'Morango', valorUnitario: 1},
  ];
var produtoEncontrado;

  for(var i = 0; i <= produtos.length-1; i++){
    if (produtos[i].id == codigo) {
      var produtoEncontrado= produtos[i];
    }
  }
if (desconto > (produtoEncontrado.valorUnitario * quantidade)){
  return {mensagem: "O valor do desconto é maior que o valor do produto"};
}
  return {produto: produtoEncontrado.nome, valor: produtoEncontrado.valorUnitario * quantidade - desconto };
}
module.exports = { calculaTotalItem };
