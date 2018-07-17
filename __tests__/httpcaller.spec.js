let {httpcaller} = require('../modules/httpcaller');
jest.mock('http');

test('if utils mocked automatically', () => {
  expect(httpcaller()).toBeTruthy();
});

test('if utils mocked automatically', () => {
    return httpcaller().then(res => {
        console.log(JSON.stringify(res));
        return expect(res === {}).toBeTruthy();
    }).catch()
    // expect(httpcaller()).toBeTruthy();
});