const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { calculaTotalItem } = require('../calculaTotalItem');

lab.experiment('Soma de 3 maçãs', () => {
  lab.test('O valor será R$15', (done) => {
  expect(calculaTotalItem(2,3)).to.equal({produto:'Maça', valor: 15 });
  done();
  });
});
lab.experiment('Soma de 5 Bananas', () => {
  lab.test('O valor será R$10', (done) => {
  expect(calculaTotalItem(1,5)).to.equal({produto:'Banana', valor: 10 });
  done();
  });
});
lab.experiment('Soma de 5 Bananas com desconto', () => {
  lab.test('O valor será R$4', (done) => {
  expect(calculaTotalItem(1,5,4)).to.equal({produto:'Banana', valor: 4 });
  done();
  });
});
