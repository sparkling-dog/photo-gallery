
import template from '../src/template.js';
const test = QUnit.test;
QUnit.module('template');

test('test to return html', assert => {
    // Arrange
    const building = {
        src: './assets/Acropolis.jpg',
        title: 'Acropolis',
        description: 'Ancient greek building from 19th century b.c.',
        keyword: 'acropolis'
    };
    const expected = /*html*/`
    <li>
        <img class="image" src="./assets/Acropolis.jpg" alt="Image of Acropolis">
        <p class="title">Acropolis</p>
        <p class="description">Ancient greek building from 19th century b.c.</p>
    </li>
    `;
    // Act
    const html = template(building);

    // Assert
    assert.htmlEqual(html, expected);
});