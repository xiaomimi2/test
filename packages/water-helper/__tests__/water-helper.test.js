'use strict';

const waterHelper = require('..');
const assert = require('assert').strict;

assert.strictEqual(waterHelper(), 'Hello from waterHelper');
console.info('waterHelper tests passed');
