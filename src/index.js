import template from './template.js';
import htmlToDOM from './html-to-DOM.js';
import buildings from '../data/buildings.js';

const gallery = document.getElementById('gallery');

buildings.forEach(building => {
    const html = template(building);
    const dom = htmlToDOM(html);
    gallery.appendChild(dom);
});
