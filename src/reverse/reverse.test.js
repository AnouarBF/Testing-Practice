const reversing = require('./reverse')

test('reverse the hello string', ()=>{
    expect(reversing('hello')).toBe('olleh')
}) 