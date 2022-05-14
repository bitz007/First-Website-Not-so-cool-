let burger = document.querySelector('.burger-res')
let navbar = document.querySelector('.navbar')
let navleft = document.querySelector('.navleft')
let navright = document.querySelector('.navright')


burger.addEventListener('click', ()=> {
    navbar.classList.toggle('h-nav-res')
    navleft.classList.toggle('v-nav-res')
    navright.classList.toggle('v-nav-res')
})