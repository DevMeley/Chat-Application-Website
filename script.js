document.addEventListener("DOMContentLoaded", ()=>{

    const hamburger = document.querySelector(".hamburger_menu")
    const navMenu = document.querySelector(".nav_links")

    hamburger.addEventListener("click", event =>{
        navMenu.classList.toggle("active")
    })
})