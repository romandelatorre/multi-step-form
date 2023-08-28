import { TextDecoder } from 'text-encoding';
global.TextDecoder = TextDecoder;

import { TextEncoder } from 'text-encoding';
global.TextEncoder = TextEncoder;

require('@testing-library/jest-dom');
require('text-encoding-polyfill/lib/encoding-indexes');

const { JSDOM } = require('jsdom');

const dom = new JSDOM('', {
  pretendToBeVisual: true,
});
global.document = dom.window.document;
