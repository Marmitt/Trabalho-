const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { CalculaTotalItem } = require('../CalculaTotalItem');

  lab.experiment('Quanto custa 5 maçãs', () => {
  lab.test('Devera custar 22.5', (done) => {
  expect(CalculaTotalItem(5)).to.equal({resultado: [22.5]});
  done();
  });
});
