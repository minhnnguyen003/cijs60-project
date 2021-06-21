const $template = document.createElement('template');

$template.innerHTML = `
<div class="container" style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
            <div class="game-properties">
                <h6>Enter your game name</h6>
                <input type="text" id="game-name" name="game-name">
            </div>
            <div class="game-properties">
                <h6>Enter your URL</h6>
                <input type="text" id="game-name" name="game-name">
            </div>
            <div class="game-properties">
                <input type="button" value="Upload" id="upload-btn">
            </div>
        </div>
`

export default class GameUpload extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
    }
};

window.customElements.define('game-upload', GameUpload);