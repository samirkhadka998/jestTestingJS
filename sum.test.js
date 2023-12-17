const sum = require('./sum');

test('adds 1+2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})

test('assign object', ()=>{
    const data = {toy : 'Bear'};
    data['color'] = 'Yellow';
    expect(data).toEqual({toy: 'Bear', color:'Yellow'})
})

test('adding positive number is not zero', ()=>{
    for(let i = 1; i < 10; i++){
        for(let j = 1 ; j < 10 ; j++){
            expect(i + j).not.toBe(0);
        }
    }
})



test('two plus two', () => {
    const value = 2+2;
    expect(value).toBe(4);
    expect(value).not.toBe(5);
    expect(value).toEqual(4);
    expect(value).toBeGreaterThan(8);
})