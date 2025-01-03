var menuIcon = document.getElementById("menu-icon");
var mobileMenue =document.getElementById("mobile-menu");
var closeMenu =document.getElementById("close-menu");

menuIcon.addEventListener("click" , ()=>{
    mobileMenue.style.display="block"
})

closeMenu.addEventListener('click', ()=>{
    mobileMenue.style.display="none";
} )

window.addEventListener("scroll" ,function(){
    let header = document.getElementById("header");
    if(this.window.scrollY > 0){
        header.classList.add('scrolled')

    }else{
        header.classList.remove('scrolled')
    }
})
