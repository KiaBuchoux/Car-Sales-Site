const menuBtn = document.querySelector(".menu")
const panel = document.querySelector(".options")
const panelStyle = window.getComputedStyle(panel)
const hearts = document.querySelectorAll(".far")


menuBtn.addEventListener("click", ()=>
    panelStyle.getPropertyValue("clip-path") === "circle(0% at 100% 0%)" ? panel.style.clipPath = "circle(100% at 50% 50%)": panel.style.clipPath = "(0% at 100% 0%)"  
)

document.addEventListener("mouseup",(e)=>{
    if (panelStyle.getPropertyValue("clip-path") ==="circle(100% at 50% 50%)"){
        if(!panel.contains(e.target)) 
            panel.style.clipPath = "circle(0% at 100% 0%)"
    }
})


hearts.forEach( heart => heart.addEventListener("click",() => 
    heart.classList.toggle("fas")
))



