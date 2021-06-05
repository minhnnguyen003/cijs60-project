const $template = document.createElement('template');

$template.innerHTML = `<div class="comment-list">

</div>

`;
export default class CommentList extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
    };

};

window.customElements.define('comment-list', CommentList);