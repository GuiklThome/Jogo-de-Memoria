let order = [];
let clickedOorder = []
let score = 0

/*
* 0 - verde
* 1 - vermelho
* 2 - amarelo
* 3 - azul
*/

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

/*
*Order Aleatoria de Cor
*/
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder
    clickedOorder = []

    for(let i in order){
        let elemetColor = createElement(order[i])
        lightColor(elemetColor, Number(i) + 1)
    }
}
/*
*Acende prócima cor
*/
let lightColor = (element, number) => {
    time = time * 500
    setTimeout(() => {
        element.classList.add('selected')
    }, number - 250) 
    setTimeout(() => {
        element.classList.remove('selected')
    } )
}
/*
*creca se os botões  clicados  são os mesmos da ordem gerada no jogo
*/
let checkOrder = () => {
    for (let i in checkOrder){
        if(clickedOorder[i] != order[i]){
            lose()
            break
        }
    }
    if(clickedOorder.length == order.length){
        alert(`Pontuação ${score} \n Você Acertou! Iniciando próximo Nível :) `)
        nextLevel()
    }
}

/*
*Função para o click do usuario 
*/

let click = (color) => {
    clickedOorder[clickedOorder.length] = color
    createElement(color).classList.add('selected')

    setTimeout(() => {
        createElement(color).classList.remove('selected')
    })

    checkOrder();
}

/*
*Função que retorna a cor
*/

let createElement = (color) => {
    if(color == 0) {
        return green
    }else if(color == 1){
        return red
    }else if(color == 2){
        return yellow
    }else if(color == 3){
        return blue
    }
}


/*
*Funçao Proximo Nível do Jogo
*/

let nextLevel = () => {
    score++
    shuffleOrder()
}

