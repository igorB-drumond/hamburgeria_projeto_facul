const button = document.querySelector('.menu-button')
const side_menu = document.querySelector('.menu-drop')
const conteiner = document.querySelector('.conteiner')
const background = document.querySelector('.background')

button.addEventListener('click', () => {
    side_menu.classList.toggle('open') 
    background.classList.toggle('open')
    conteiner.classList.toggle('open')
    button.classList.add('open')
    document.button.style.backgroundColor = side_menu.classList.contains('open') ? '##00000080': '#ffffff'
    
})
background.addEventListener('click', () => {
    side_menu.classList.remove('open') 
    background.classList.remove('open')
    conteiner.classList.remove('open')
    button.classList.remove('open')

})