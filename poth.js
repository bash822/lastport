

let navbar = document.querySelector(".nav2")
let showMenu = document.querySelector(".show-nav")
let hideMenu= document.querySelector(".hide-nav")


function show(){
    navbar.style.right = "0"
    showMenu.style.display = "none"
    hideMenu.style.display = "flex"
}

function hide(){
    navbar.style.right = "-30%"
    showMenu.style.display = "flex"
    hideMenu.style.display = "none"
}

 