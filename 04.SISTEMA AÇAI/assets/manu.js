const opçãoMesa = document.querySelector('.mesa')
const opçãoTamanho = document.querySelector('.tamanho')
const opçãoSabor = document.querySelector('.sabor')

const botaoEnviar = document.querySelector('.enviar')
const registroDePedidos = document.querySelector('.registroPedidos')

// CAPTURANDO EVENTO DE CLICK NO BOTAO
botaoEnviar.addEventListener('click', function(){
    criarPedido()
    
})

function criarLi(){
    const li = document.createElement('li')
    li.setAttribute('class', 'item')
    return li
}
function criarPedido(){
    const li = criarLi()
    li.innerText = concatenarPedido()
    registroDePedidos.appendChild(li)
    criarBotaoApagar(li)
    
    
}
function concatenarPedido(){
    const pedido = `Mesa: ${opçãoMesa.value} 
                    Tamanho: ${opçãoTamanho.value} 
                    Sabor: ${opçãoSabor.value}`
    return pedido
}

function criarBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)
}



