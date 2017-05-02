const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { calculaTotalItem } = require('../Trabalho.js');

lab.experiment('Soma de 3 maçãs', () => {
  lab.test('O valor será R$15', (done) => {
  expect(calculaTotalItem(2,3)).to.equal({produto:'Maçã' valor: 15 });
  done();
  });
});
