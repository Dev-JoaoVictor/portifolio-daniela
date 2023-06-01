const buttoMenu = document.querySelector('.button-menu')
const buttoOpen = document.querySelector('.btn-open')
const buttoClose = document.querySelector('.btn-close')

const nav = document.querySelector('nav')

buttoMenu.addEventListener("click", () => {
  buttoClose.classList.toggle('hidden')
  buttoOpen.classList.toggle('hidden')
  
  nav.classList.toggle('active')
})