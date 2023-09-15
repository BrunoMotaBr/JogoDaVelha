const posicoes = document.querySelectorAll("#posicoes")
const botoes = document.querySelectorAll("#botao")
const nivel = document.getElementById("nivel")
const vencedor = document.getElementById("vencedor")
let numero;
let contador = 0;

botoes[0].addEventListener("click", () =>{
    nivel.textContent = botoes[0].textContent
    vencedor.textContent = ""
    botoes[0].classList.add("desativar")
    botoes[1].classList.add("desativar")
    posicoes.forEach((possicao,key)=>{
        possicao.textContent = ""})
})
botoes[1].addEventListener("click", () =>{
    nivel.textContent = botoes[1].textContent
    vencedor.textContent = ""
    botoes[1].classList.add("desativar")
    botoes[0].classList.add("desativar")
    posicoes.forEach((possicao,key)=>{
        possicao.textContent = ""})
})


setInterval(() =>{
    if(checarVencedor()){
        posicoes.forEach((possicao,key)=>{
        const intervalo = setInterval(() =>{
                            possicao.textContent = ""
                            contador = 0
                            nivel.textContent = "Selecione o nivel para iniciar"
                            return 0;
                        }, 2000)
        setTimeout(() => {
            botoes[0].classList.remove("desativar")
            botoes[1].classList.remove("desativar")
            clearInterval(intervalo)
        }, 2200)
        })
    }
}, 10)


posicoes.forEach((possicao, key)=>{
    possicao.addEventListener("click", () =>{
        if(nivel.textContent === "Dificil"){
            if(possicao.textContent != ""){
                return 0;
            }
            possicao.textContent = "X"
            numero = checarPossivelVitoria()
            if(numero === 11){
                numero = gerarJogada()
                posicoes[numero].textContent = "O"
                contador++;
            }
            
            else if (numero != 11 && contador < 4){
                if(posicoes[numero].textContent === ""){
                    posicoes[numero].textContent = "O"
                }
                else{
                    numero = gerarJogada()
                    posicoes[numero].textContent = "O"
                }
                contador++;
            }
        }
        else if(nivel.textContent === "Fácil"){
            if(possicao.textContent != ""){
                return 0;
            }
            possicao.textContent = "X"
            numero = gerarJogada()
            posicoes[numero].textContent = "O"
            contador++;
        }
    })
})



function getInteiroRandom(min, max) {
    let minimo = Math.ceil(min);
    let maximo = Math.floor(max);
    return Math.floor(Math.random() * (maximo - minimo) + minimo);
  }

function checarPossivelVitoria(){
    
    if(posicoes[0].textContent === "X" && posicoes[1].textContent === "X" ||
        posicoes[4].textContent === "X" && posicoes[6].textContent === "X" ||
        posicoes[8].textContent === "X" && posicoes[5].textContent === "X"){
        return 2
    }
    else if(posicoes[2].textContent === "X" && posicoes[1].textContent === "X" || 
            posicoes[8].textContent === "X" && posicoes[4].textContent === "X" ||
            posicoes[6].textContent === "X" && posicoes[3].textContent === "X"){
        return 0
    }
    else if(posicoes[2].textContent === "X" && posicoes[0].textContent === "X" ||
            posicoes[7].textContent === "X" && posicoes[4].textContent === "X"){
        return 1
    }
    else if(posicoes[3].textContent === "X" && posicoes[4].textContent === "X" ||
            posicoes[8].textContent === "X" && posicoes[2].textContent === "X"){
        return 5
    }
    else if(posicoes[3].textContent === "X" && posicoes[5].textContent === "X" ||
            posicoes[8].textContent === "X" && posicoes[0].textContent === "X" ||
            posicoes[2].textContent === "X" && posicoes[6].textContent === "X" ||
            posicoes[7].textContent === "X" && posicoes[1].textContent === "X"){
        return 4
    }
    else if(posicoes[4].textContent === "X" && posicoes[5].textContent === "X" ||
            posicoes[6].textContent === "X" && posicoes[0].textContent === "X"){
        return 3
    }
    else if(posicoes[6].textContent === "X" && posicoes[7].textContent === "X" || 
            posicoes[0].textContent === "X" && posicoes[4].textContent === "X" ||
            posicoes[2].textContent === "X" && posicoes[5].textContent === "X"){
        return 8
    }
    else if(posicoes[8].textContent === "X" && posicoes[7].textContent === "X" ||
            posicoes[2].textContent === "X" && posicoes[4].textContent === "X" ||
            posicoes[0].textContent === "X" && posicoes[3].textContent === "X"){
        return 6
    }
    else if(posicoes[8].textContent === "X" && posicoes[6].textContent === "X" ||
            posicoes[1].textContent === "X" && posicoes[4].textContent === "X"){
        return 7
    }
    else{
        return 11
    }
}

function gerarJogada(){
    numero = getInteiroRandom(0, 9)
    let cont = 0;
    while(posicoes[numero].textContent != "" && cont < 9){
        numero = getInteiroRandom(0, 9)
        cont++
    }
    return numero
}

function checarVencedor(){
    if(posicoes[0].textContent === "X" && posicoes[1].textContent === "X" && 
            posicoes[2].textContent === "X"){
            vencedor.style.color = "green"
            vencedor.textContent = "X Ganhou =D"
            return true
    }
    else if( posicoes[0].textContent === "O" && posicoes[1].textContent === "O" && 
            posicoes[2].textContent === "O"){
            vencedor.style.color = "green"
            vencedor.textContent = "O Ganhou =D"
            return true
    }
    else if(posicoes[3].textContent === "X" && posicoes[4].textContent === "X" && 
            posicoes[5].textContent === "X" ){
            vencedor.style.color = "green"
            vencedor.textContent = "X Ganhou =D"
            return true
    }
    else if( posicoes[3].textContent === "O" && posicoes[4].textContent === "O" && 
            posicoes[5].textContent === "O"){
            vencedor.style.color = "green"
            vencedor.textContent = "O Ganhou =D"
            return true
    }
    else if(posicoes[6].textContent === "X" && posicoes[7].textContent === "X" && 
            posicoes[8].textContent === "X"){
            vencedor.style.color = "green"
            vencedor.textContent = "X Ganhou =D"
            return true
    }  
    else if(posicoes[6].textContent === "O" && 
            posicoes[7].textContent === "O" && posicoes[8].textContent === "O"){
            vencedor.style.color = "green"
            vencedor.textContent = "O Ganhou =D"
            return true
    }
    else if(posicoes[0].textContent === "X" && posicoes[3].textContent === "X" && 
        posicoes[6].textContent === "X" ){
        vencedor.style.color = "green"
        vencedor.textContent = "X Ganhou =D"
        return true

    }
    else if( posicoes[0].textContent === "O" && posicoes[3].textContent === "O" && 
        posicoes[6].textContent === "O"){
        vencedor.style.color = "green"
        vencedor.textContent = "O Ganhou =D"
            
        return true
    }
    else if(posicoes[1].textContent === "X" && posicoes[4].textContent === "X" && 
        posicoes[7].textContent === "X" ){
        vencedor.style.color = "green"
        vencedor.textContent = "X Ganhou =D"
        return true

    }
    else if( posicoes[1].textContent === "O" && posicoes[4].textContent === "O" && 
        posicoes[7].textContent === "O"){
        vencedor.style.color = "green"
        vencedor.textContent = "O Ganhou =D"
        return true
    } 
    else if(posicoes[2].textContent === "X" && posicoes[5].textContent === "X" && 
        posicoes[8].textContent === "X" ){
        vencedor.style.color = "green"
        vencedor.textContent = "X Ganhou =D"
        return true

    }
    else if( posicoes[2].textContent === "O" && posicoes[5].textContent === "O" && 
        posicoes[8].textContent === "O"){
        vencedor.style.color = "green"
        vencedor.textContent = "O Ganhou =D"
        return true
    }
    else if(posicoes[0].textContent === "X" && posicoes[4].textContent === "X" && 
        posicoes[8].textContent === "X" ){
        vencedor.style.color = "green"
        vencedor.textContent = "X Ganhou =D"
        return true

    }
    else if( posicoes[0].textContent === "O" && posicoes[4].textContent === "O" && 
        posicoes[8].textContent === "O"){
        vencedor.style.color = "green"
        vencedor.textContent = "O Ganhou =D"
        return true
    } 
    else if(posicoes[2].textContent === "X" && posicoes[4].textContent === "X" && 
        posicoes[6].textContent === "X" ){
        vencedor.style.color = "green"
        vencedor.textContent = "X Ganhou =D"
        return true

    }
    else if( posicoes[2].textContent === "O" && posicoes[4].textContent === "O" && 
        posicoes[6].textContent === "O"){
        vencedor.style.color = "green"
        vencedor.textContent = "O Ganhou =D"
        return true
    }else{
        return false
    }
  }
