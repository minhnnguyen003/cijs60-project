import {register} from "../models/user.js"

const $template = document.createElement('template')
$template.innerHTML = `
        <form class="register-form" action="/">
            <h2 class="title">Create an account</h2>
            <div class="sub-title">We are different, I make you different</div>
            <input-wrapper class="name" placeholder="Your name" type="text" error=""></input-wrapper>
            <input-wrapper class="email" placeholder="Your email" type="email" error=""></input-wrapper>
            <input-wrapper class="password" placeholder="Your password" type="password" error=""></input-wrapper>
            <input-wrapper class="password-confirmation" placeholder="Repeat password" type="password" error=""></input-wrapper>
            <button class="register-btn">Register</button>
        </form>
`

export default class RegisterForm extends HTMLElement{
    constructor(){
        super()
        this.appendChild($template.content.cloneNode(true))
        this.$registerForm = this.querySelector('.register-form')
        this.$name = this.querySelector('.name')
        this.$email = this.querySelector('.email')
        this.$password = this.querySelector('.password')
        this.$passwordConfirmation = this.querySelector('.password-confirmation')
    }

    // Lần đầu tiên xuất hiện trên trang web sẽ gọi connectedCallback
    connectedCallback(){
        this.$registerForm.onsubmit = (event) =>{
            event.preventDefault()
            console.log("Register form submitted")

            let isPassed = 
            this.$name.validate((value) => {
                return value != ''
            }, "Invalid name") &
            this.$email.validate((value) => {
                return value != ''
            }, "Invalid email") &
            this.$password.validate((value) => {
                return value != ''
            }, "Invalid password") &
            // cái trước false không chạy cái đằng sau nữa
            this.$passwordConfirmation.validate((value) => {
                return value != '' 
            }, "Invalid password confirmation") &&
            this.$passwordConfirmation.validate((value) => {
                return value == this.$password.value
            }, "Password confirmation isn't correct!")

            if(isPassed == true){
                let data = {
                name : this.$name.value,
                email : this.$email.value,
                password : this.$password.value
                }
                register(data.name, data.email, data.password)
            }
        }
    }
}

window.customElements.define('register-form', RegisterForm)