require('./matchers');
const { badEyeSantizier, knocker, withSalt } = require('./index');

const aMessage = `I'm the 👁‍🗨 in the sky, looking at you...`;

describe('Sanitizer', () => {
  test('it should intercept the bad eye', () => {
    const intercepted = badEyeSantizier(aMessage);

    expect(intercepted).toBePurified();
  });

  test('it should replace with hamsa for good luck', () => {
    const withLuck = badEyeSantizier(aMessage);

    expect(withLuck).toBeLucky();
  });
});


describe('Knocker', () => {
  test('it should be lucky after 3 times', () => {
    const aKnocker = knocker();

    expect(aKnocker.next().value).toEqual('✊');
    expect(aKnocker.next().value).toEqual('✊');
    expect(aKnocker.next().value).toEqual('✊');
    expect(aKnocker.next().value).toBeLucky();
  });
});
