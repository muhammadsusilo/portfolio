const menu = document.getElementById("menu");
const list = document.getElementsByClassName("list")[0];

menu.addEventListener("click", function(e) {
    list.classList.toggle("active");
    e.preventDefault();
})

// ketika di klik di luar close

document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !list.contains(e.target))
        list.classList.remove("active");
})