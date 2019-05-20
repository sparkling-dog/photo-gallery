function template(building) {
    const html = /*html*/`
    <li>
        <img class="image" src="${building.src}" alt="Image of ${building.title}">
        <p class="title">${building.title}</p>
        <p class="description">${building.description}</p>
    </li>
    `;
    return html;
}

export default template;