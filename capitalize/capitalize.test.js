const capitalize = require('./capitalize');
test('they have first uppercase first letter: ', () => {
    expect(capitalize('quang')).toMatch(/Q/);
});
