const BODY = document.querySelector("body")
const FIX_CURSOR = document.querySelector('.cursor')
const BURGER_MENU = document.querySelector('.burger')
const MENU = document.querySelector('.menu')
const TURN = document.querySelectorAll('.turn')
const LINKS = document.querySelectorAll('a')
const BUTTONS = document.querySelectorAll('button')
const ECRAN = document.querySelector('.ecran')
const PC = document.querySelector('#pc')
const PASS = document.querySelector('.passions_sect')

// responsive
window.addEventListener('load',()=>{
    ECRAN.setAttribute('style',`width: ${PC.offsetWidth/1.63}px; height:${PC.offsetHeight/2}px; top : ${(PASS.offsetHeight - PC.offsetHeight)/2 + PC.offsetHeight/16.5}px; font-size : ${document.querySelector('.book').offsetHeight/31.25}px`)
    console.log(PC.offsetWidth);
    
    document.querySelector('.card').setAttribute('style',`font-size : ${document.querySelector('.book').offsetHeight/31.25}px; width : ${document.querySelector('.card').offsetHeight/1.5}px`)
    document.querySelector('.p1').setAttribute('style',`height : ${document.querySelector('.book').offsetHeight}px; font-size : ${document.querySelector('.book').offsetHeight/31.25}px`)
    document.querySelector('.p2').setAttribute('style',`height : ${document.querySelector('.book').offsetHeight}px; font-size : ${document.querySelector('.book').offsetHeight/31.25}px`)
    console.log(document.querySelector('.book').offsetHeight);  
})

// Mon curseur


document.addEventListener("mousemove",(e)=>{
    const CURSEUR = document.createElement("div")
    CURSEUR.classList.add("cursor_round")
    CURSEUR.setAttribute('style',`top :${e.pageY - window.scrollY}px; left: ${e.pageX}px;`)
    FIX_CURSOR.setAttribute('style',`top :${e.pageY - window.scrollY}px; left: ${e.pageX}px;`)
    BODY.appendChild(CURSEUR)
    setTimeout(() => {
        CURSEUR.remove()
    }, 300);
})

document.addEventListener('click',(e)=>{
    const ROUND_CLICK = document.createElement("div")
    ROUND_CLICK.classList.add("round_click")
    ROUND_CLICK.setAttribute('style',`top :${e.pageY - window.scrollY}px; left: ${e.pageX}px;`)
    BODY.appendChild(ROUND_CLICK)
    setTimeout(() => {
        ROUND_CLICK.remove()
    }, 400);
})

// Burger menu
BURGER_MENU.addEventListener('click',()=>{
    MENU.classList.toggle('active')
})

// turn
TURN.forEach(T => {
    T.addEventListener('click',()=>{
        document.querySelector('.front').classList.toggle('active')
        document.querySelector('.back').classList.toggle('active')
    })
});

LINKS.forEach(LINK =>{
    LINK.addEventListener('mouseover',()=>{
        FIX_CURSOR.classList.add('link')
    })
    LINK.addEventListener('mouseout',()=>{
        FIX_CURSOR.classList.remove('link')
    })
})
BUTTONS.forEach(BUTTON =>{
    BUTTON.addEventListener('mouseover',()=>{
        FIX_CURSOR.classList.add('link')
    })
    BUTTON.addEventListener('mouseout',()=>{
        FIX_CURSOR.classList.remove('link')
    })
})
