require('./matchers');


describe('Matchers', () => {
  test('it should match the bad eye', () => {
    expect(' 👁‍🗨 ').not.toBePurified();
  });

  test('it should match the lucky hamsa', () => {
    expect(' 🤚 ').toBeLucky();
  });
});