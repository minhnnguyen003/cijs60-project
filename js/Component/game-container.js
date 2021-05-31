const $template = document.createElement('template');

$template.innerHTML = `

`;

export default class GameContainer extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
    };
};

window.customElements.define('game-container', GameContainer);