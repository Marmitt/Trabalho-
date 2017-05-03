const calculaTotalItem = function(codigo, quantidade) {
  const produtos = [
   {id: 1, nome: 'Banana', valorUnitario: 2},
   {id: 2, nome: 'Maça', valorUnitario: 5},
   {id: 3, nome: 'Pera', valorUnitario: 6},
   {id: 4, nome: 'Morango', valorUnitario: 1},
  ];

  const p = produtos.find(codigo, quantidade)

  return {produto:p.nome, valor:p.valor};

}
module.exports = { calculaTotalItem };
