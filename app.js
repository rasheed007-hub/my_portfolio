const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const downDropMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    downDropMenu.classList.toggle('open')
}
const hiddenTexts = document.querySelectorAll(".app, .app0, .app1, .app2, .app3, .app4");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenTexts.forEach(hiddenText => observer.observe(hiddenText));