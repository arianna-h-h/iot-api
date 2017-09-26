'use strict';

const math = require('../src/math');

describe('add', () => {
  it('adds two numbers', () => {
    console.log('test lint on circleci');
    const result = math.add(1, 2);

    expect(result).toBe(3);
  });
});
