expect.extend({
  toBeLucky(received, argument) {
    const pass = received.includes('🤚');
    const something = '';
    something.mat

    return pass
      ? {
          message: () => `expected ${received} to have no 🤚`,
          pass: true
        }
      : {
          message: () => `expected ${received} to have at least one 🤚`,
          pass: false
        };
  },

  toBePurified(received, argument) {
    const pass = !received.includes('👁‍🗨');

    return pass
      ? {
          message: () => `expected ${received} to have no 👁‍🗨`,
          pass: true
        }
      : {
          message: () => `expected ${received} to have at least one 👁‍🗨`,
          pass: false
        };
  }
});
