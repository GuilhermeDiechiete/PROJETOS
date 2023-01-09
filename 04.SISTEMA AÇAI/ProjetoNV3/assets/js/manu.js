// LIGAÇÕES COM O HTML
const opçãoMesa = document.querySelector('.mesa')
const opçãoTamanho = document.querySelector('.tamanho')
const opçãoSabor = document.querySelector('.sabor')
const botaoEnviar = document.querySelector('.enviar')
const registro = document.querySelector('.registroPedidos')

botaoEnviar.addEventListener('click', function(){
    criarPedido()})

document.addEventListener('click', function(e){
    const el = e.target

    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarPedido()}})

function criarLi(){
    const li = document.createElement('li')
    li.setAttribute('class', 'item')
    return li}

function criarPedido(){
    const li = criarLi()
    li.innerText = concatenarPedido()
    registro.appendChild(li)
    criarBotaoApagar(li)
    salvarPedido()}
    
function concatenarPedido(){
    const pedido = `MESA: ${opçãoMesa.value} 
                    COPO: ${opçãoTamanho.value} 
                    ADD: ${opçãoSabor.value} `
    return pedido }

function criarBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)}

function salvarPedido(){
    const liPedidos = registro.querySelectorAll('li')
    const listaDePedidos = []

    for (let pedido of liPedidos){
        let pedidoTexto = registro.innerText
        pedidoTexto = pedidoTexto.replace('Apagar', '').trim()
        listaDePedidos.push(pedidoTexto)}

    const pedidoJSON = JSON.stringify(listaDePedidos)
    localStorage.setItem('registro', pedidoJSON)}

function adicionaPedidoSalvos(){
    const registro = localStorage.getItem('registro')
    const listaDePedidos = JSON.parse(registro)

    for (let registro of listaDePedidos){
        criarPedido(registro)
    }}
    
adicionaPedidoSalvos()






