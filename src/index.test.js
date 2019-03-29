import { hello } from './index';

describe('hello', () => {
  test('greets you by name', () => {
    const name = 'world';
    const expectedOutput = 'Hello world';
    
    expect(hello(name)).toBe(expectedOutput);
  });
});
