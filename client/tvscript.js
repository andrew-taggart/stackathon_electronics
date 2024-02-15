const navContent = document.getElementById("nav-content")
const navToggle = document.getElementById("nav-toggle")

function toggleNav() {
    navContent.classList.toggle('open')
}

navToggle.addEventListener("click", toggleNav)