const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const downDropMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    downDropMenu.classList.toggle('open')
}
