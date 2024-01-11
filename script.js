const menu = document.getElementById("menu");
const list = document.getElementsByClassName("list")[0];

menu.addEventListener("click", function() {
    list.classList.toggle("active");
})