const $template = document.createElement('template')
$template.innerHTML = `
        <form class="login-form" action="/">
            <h2 class="title">Login with your account</h2>
            <div class="sub-title">Welcome!</div>
            <input-wrapper class="email" placeholder="Your email" type="email" error=""></input-wrapper>
            <input-wrapper class="password" placeholder="Your password" type="password" error=""></input-wrapper>
            <button class="login-btn">Login</button>
            <button class="to-register">Register</button>
        </form>
`

export default class LoginForm extends HTMLElement{
    constructor(){
        super()
        this.appendChild($template.content.cloneNode(true))
        this.$loginForm = this.querySelector('.login-form')
        this.$email = this.querySelector('.email')
        this.$password = this.querySelector('.password')
    }

    connectedCallback(){
        this.$loginForm.onsubmit = (event) =>{
            event.preventDefault()

            let isPassed = 
            this.$email.validate((value) => {
                return value != ''
            }, "Invalid email") &
            this.$password.validate((value) => {
                return value != ''
            }, "Invalid password") 


            if(isPassed == true){
                let data = {
                email : this.$email.value,
                password : this.$password.value
                }
                //login(data.email, data.password)
            }
        }
    }
}

window.customElements.define('login-form', LoginForm)