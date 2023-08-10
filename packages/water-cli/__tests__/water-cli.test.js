'use strict';

const waterCli = require('..');
const assert = require('assert').strict;

assert.strictEqual(waterCli(), 'Hello from waterCli');
console.info('waterCli tests passed');
