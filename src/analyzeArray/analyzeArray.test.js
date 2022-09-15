const  analyzeArray = require('./analyzeArray')
const arr = [1,8,3,4,2,6];
test('should return 6', ()=>{
    expect(analyzeArray(arr).maximum).toEqual(8);
    expect(analyzeArray(arr).minimum).toEqual(1);
    expect(analyzeArray(arr).average).toEqual(4);
    expect(analyzeArray(arr).arrLength).toEqual(6)
})