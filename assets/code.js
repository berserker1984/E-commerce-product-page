const itensMenu = document.getElementById("menu")
const conteudoPrincipal = document.getElementById('principal')
const menuMobile = document.getElementById('menu-mobile')

const caminhoImg = ["url('./assets/images/image-product-1.jpg')","url('./assets/images/image-product-2.jpg')","url('./assets/images/image-product-3.jpg')","url('./assets/images/image-product-4.jpg')"]

const valorItem = document.getElementById('valor-item').innerHTML
const desc = document.getElementById('desconto').innerHTML
const valorTotal = document.getElementById('valor-total')



function exibirMenu() {
    itensMenu.classList.remove('esconder') 
    conteudoPrincipal.classList.add('efeito-pos-menu')
    menuMobile.classList.add('retira-efeito-pos-menu')
    
}



function fecharMenu() {
   itensMenu.classList.add('esconder')   
   

} 

let i = 0

function clickNext() {     
    i++    
    if (i > caminhoImg.length-1 ) {
       i--
    }    
    document.getElementById('img-produto-principal').style.backgroundImage= " " + caminhoImg[i]+ ""
    
}


function clickPreview() { 
    i-- 

    if (i < 0) { 
        i++        
    }
    
    document.getElementById('img-produto-principal').style.backgroundImage= " " + caminhoImg[i]+ "" 

}

let x = 0




function setaMais() {
    x++

    if (x < 0) {
        x=0        
    }    

    document.getElementById('quantidade-itens').innerHTML = x
    
    let calculoTotal = (desc/100) * (valorItem * x) 
    valorTotal.innerHTML =  calculoTotal.toFixed(2)
    


    
}

let totalx = 0
let descontox = 0
let valorFinal = 0

function setaMenos() {  
    
    x--

    if (x <= 0) {
        x=0
        valorTotal.innerHTML = 0       
    }   
    
    document.getElementById('quantidade-itens').innerHTML = x
    

    //calculoTotal = (desc/100) * (valorItem * x) 
    //valorTotal.innerHTML -=  calculoTotal
    totalx = valorItem * x
    descontox = (desc/100) * totalx
    valorTotal.innerHTML = descontox
    

      

    

       
}


 

