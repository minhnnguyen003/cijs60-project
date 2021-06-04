const $template = document.createElement('template')
$template.innerHTML = `
    <div class ="auth-screen">
        <login-form></login-form>
        <register-form></register-form>
    </div>
`

export default class AuthScreen extends HTMLElement{
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true))
        this.$loginForm = this.querySelector('login-form')
        this.$registerForm = this.querySelector('register-form')
    }

    static get observedAttributes(){
        return ['status'];
    }

    attributeChangedCallback(attrName, oldValue, newValue){
        if(attrName == 'status'){
            this.$loginForm.style.display = 'none'
            this.$registerForm.style.display = 'none'

            if(newValue == 'loggedIn'){
                this.$registerForm.style.display = 'block'
            }

            if(newValue == 'registered'){
                this.$loginForm.style.display = 'block'
            }
        }
    }
}

window.customElements.define('auth-screen', AuthScreen)