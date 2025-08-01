const {max,min,avarage,analyzeArray}= require('./analyzeArray')

const resutlObj ={
    max:3,
    min:1,
    avg:2,
    length:3
}
test('anlyze obj',()=>{
    expect(analyzeArray([1,2,3])).toMatchObject(resutlObj);
})