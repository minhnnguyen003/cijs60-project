const $template = document.createElement('template');

$template.innerHTML = `
<div class="game-loader">
            <iframe></iframe>
        </div>
`;

export default class GameLoader extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
    };
}