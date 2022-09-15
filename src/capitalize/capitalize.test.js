const capitalize = require('./capitalize');

test('returns capitalize', ()=>{
    expect(capitalize('hello')).toBe('Hello');
});