const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { CalculaTotalItem } = require('../CalculaTotalItem');

  lab.experiment('Quanto custa 5 maçãs', () => {
  lab.test('Devera custar 22.5', (done) => {
  const produtos = ['Maçã', 'Banana', 'Pera', 'Morango'];
  const retorno = { resultado:[
    {Produto: 'Maçã', unidade: 4}
  };
  expect(CalculaTotalItem(produtos,{Maçã})).to.equal({resultado: [22.5]});
  done();
  });
});
