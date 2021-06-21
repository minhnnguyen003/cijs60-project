const $template = document.createElement('template');

$template.innerHTML = `<div class="comment-container">
<form method="post" id="create-form" >
    <input type="text" placeholder="Name" id="name">
    <br>
    <textarea cols="100" rows="5" id="comment" placeholder="Comments here..."></textarea>
    <br>
    <input type="submit" value="Submit">
    <input type="reset" value="Reset" >

</form>

</div>

`;

export default class CommentBox extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
    };

};

window.customElements.define('comment-box', CommentBox);