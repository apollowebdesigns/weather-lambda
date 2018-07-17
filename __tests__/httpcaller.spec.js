let {httpcaller} = require('../modules/httpcaller');

test('if utils mocked automatically', () => {
  expect(httpcaller()).toBeTruthy();
});