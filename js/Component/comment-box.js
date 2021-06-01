const $template = document.createElement('template');

$template.innerHTML = `

`;

export default class CommentBox extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
    };
    
};

window.customElements.define('comment-box', CommentBox);