const rosa = document.querySelector(".rosa")
const resultado = document.querySelector(".resultado")
const portfolio = document.querySelector('[href="#"]')
const home = document.querySelector('[href="#home"]')
const estudo = document.querySelector('[href="#estudo"]')
const contato = document.querySelector('[href="#contato"]')
const navButton = document.querySelector(".nav-button-abre")
const fechar = document.querySelector(".fechar")
const btnFechar = document.querySelector(".btnFechar")
const nav = document.querySelector(".nav")
const menu = document.querySelector(".menu")
const sessaoHome = document.querySelector(".sessao-home")
const homeMenu = document.querySelector(".home-menu")
const estudoMenu = document.querySelector(".estudo-menu")
const contatoMenu = document.querySelector(".contato-menu")
const maxWidth = document.querySelector(".max-width-section")
const envolveMenu = document.querySelector(".envolve-menu")
const meusItems = document.querySelector('.fechar a[href^="#"]');

const valorBotao = navButton.getBoundingClientRect()

navButton.addEventListener('click', (e)=>{
 fechar.style.display = "block";
 nav.style.display ="none";
 sessaoHome.style.padding= 0 ;
 navButton.style.display = "none";
})

btnFechar.addEventListener('click', (e)=>{
    fechar.style.visibility = "none";
})

estudo.addEventListener('click', ()=>{
    window.location.reload();
    if(rosa.style.display='none'){
        rosa.classList.remove("none")
        rosa.classList.add("hidden")
    }
})


contato.addEventListener('click', ()=>{
    window.location.reload();
    if(rosa.style.display='none'){
        rosa.classList.remove("none")
        rosa.classList.add("hidden")
    }
})

portfolio.addEventListener('click', ()=>{
   window.location.reload();
    if(rosa.style.display='none'){
        rosa.classList.remove("none")
        rosa.classList.add("hidden")
    }

})

home.addEventListener('click', ()=>{
window.location.reload();
if(rosa.style.display='none'){
    rosa.classList.remove("none")
    rosa.classList.add("hidden")
    }
})

rosa.addEventListener('click', (e)=>{  
    rosa.style.display= 'none';  
    resultado.style.display = 'hidden'
    resultado.innerText = "10011 1001 1000111 11100 1100001 11001"
    let result = document.createElement('div')
    resultado.appendChild(result)
    
})


Array.prototype.forEach(item => {
    item.addEventListener('click', scroll)
});

function scroll(event){
    const element = event.target;
    const id = element.getAttribute('href')
    const to = document.querySelector(to).offsetTop;;
    
    windows.scroll(0,to)
}

