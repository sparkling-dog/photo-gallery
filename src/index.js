import template from './template.js';
import htmlToDOM from './html-to-DOM.js';
import buildings from '../data/buildings.js';
import templateHeader from './template-header.js';

const gallery = document.getElementById('gallery');
const header = document.getElementById('header');

buildings.forEach(building => {
    const html = template(building);
    const dom = htmlToDOM(html);
    gallery.appendChild(dom);
});

const html = templateHeader();
const dom = htmlToDOM(html);

header.appendChild(dom);