const $template = document.createElement('template');
$template.innerHTML = `
    <div class="navbar-container">
            <div class="logo"><a href="index.html"><img src="./img/logo-desktop.svg" alt="Logo"></a></div>
            <div class="navbar">
                <a class="link" href="news.html" target="_blank" rel="noopener noreferrer">Tin tức</a>
                <a class="link" href="games.html" target="_blank" rel="noopener noreferrer">Game</a>
                <a class="link" href="review.html" target="_blank" rel="noopener noreferrer">Review</a>
                <a class="link" href="forum.html" target="_blank" rel="noopener noreferrer">Diễn đàn</a>
                <div class="signin-status">
                    <a class="link" href="signin.html".html" target="_blank" rel="noopener noreferrer">Đăng nhập</a>
                </div>
            </div>
    </div>
`;

export default class Navbar extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('nav-bar', Navbar);