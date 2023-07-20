const  wrapper = document.querySelector('.wrapper')
const  loginLink = document.querySelector('.login-link')
const  registerLink = document.querySelector('.register-link')
const btnPopup = document.querySelector('.btnLogin-popup')
const iconClose = document.querySelector('.icon-close')

registerLink.onclick = () => {
    wrapper.classList.add('active');
}

loginLink.onclick = () => {
    wrapper.classList.remove('active');
}

btnPopup.onclick = () => {
    wrapper.classList.add('active-popup');
}

iconClose.onclick = () => {
    wrapper.classList.remove('active-popup');
}