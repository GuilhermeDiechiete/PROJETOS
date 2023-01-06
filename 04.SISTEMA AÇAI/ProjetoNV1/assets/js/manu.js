// LIGAÇÕES COM O HTML
const opçãoMesa = document.querySelector('.mesa')
const opçãoTamanho = document.querySelector('.tamanho')
const opçãoSabor = document.querySelector('.sabor')
const botaoEnviar = document.querySelector('.enviar')
const registroDePedidos = document.querySelector('.registroPedidos')


// CAPTURANDO EVENTO DE CLICK NO BOTAO ENVIAR PEDIDO
botaoEnviar.addEventListener('click', function(){
    criarPedido()})

document.addEventListener('click', function(e){
    const el = e.target

    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        
    }
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
    const pedido = `MESA: ${opçãoMesa.value} 
                    COPO: ${opçãoTamanho.value} 
                    ADD: ${opçãoSabor.value} `
    return pedido
}

function criarBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)
}

function salvarPedido(){
    const pedidoSalvo = criarPedido()
    localStorage.getItem = pedidoSalvo
    return pedidoSalvo
}

salvarPedido()



