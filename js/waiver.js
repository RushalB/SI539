let figures = document.getElementsByTagName("figure")





window.addEventListener('load',applyClass);
function applyClass(){
    console.log("Good Morning")
    
    for (let index = 0; index < figures.length; index++) {
        console.log(index);
        figures[index].classList.add("one-third");
    }
}

window.addEventListener('load',applyClass);
function applyClass(){
    console.log("Good Morning")
    
    for (let index = 0; index < figures.length; index++) {
        console.log(index);
        figures[index].classList.add("one-third");
    }
}

footer = document.getElementsByTagName("footer")[0]
footer.addEventListener('click',disappear)
function disappear(){
    footer.style.display = "none"
}


figures[4].addEventListener('dblclick',hide)
function hide(){
    figures[4].style.visibility = "hidden"
}

orignal_font = document.getElementsByTagName("figure")[0].children[1].style.fontFamily
figures[0].children[1].addEventListener("mouseover", cursive);
figures[0].children[1].addEventListener("mouseout", normal);
function normal(){
    document.getElementsByTagName("figure")[0].children[1].style.fontFamily = orignal_font
}
function cursive(){
    document.getElementsByTagName("figure")[0].children[1].style.fontFamily = "cursive"
}
document.getElementsByTagName("figure")[0].children[1].setAttribute('tabindex', '0')
window.addEventListener("focus", cursive);
window.addEventListener("blur", normal);


