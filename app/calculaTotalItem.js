const calculaTotalItem = function(codigo, quantidade) {
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

  return {produto: produtoEncontrado.nome, valor: produtoEncontrado.valorUnitario * quantidade };

}
module.exports = { calculaTotalItem };
