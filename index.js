'use strict';

const badEye = '👁‍🗨';
const hamsa = '🤚';
const knock = '✊';

const badEyeSantizier = message => message.replace(badEye, hamsa);

const knocker = function*() {
  let knocks = 0;

  while (knocks < 3) {
    ++knocks;
    yield knock;
  }

  return hamsa;
};


module.exports = { hamsa, badEyeSantizier, knocker};
