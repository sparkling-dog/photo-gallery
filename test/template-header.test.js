import templateHeader from '../src/template-header.js';
const test = QUnit.test;

test('html of header for header', assert => {
    //arrange
    const expected = /*html*/` 
    <h1>Ancient Architecture</h1>
    `;
   
    //act
    const html = templateHeader();


    //assert
    assert.htmlEqual(html, expected);

});

