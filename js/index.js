const rosa = document.querySelector(".rosa")
const resultado = document.querySelector(".resultado")
const portfolio = document.querySelector('[href="#"]')
const home = document.querySelector('[href="#home"]')
const estudo = document.querySelector('[href="#estudo"]')
const contato = document.querySelector('[href="#contato"]')


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

