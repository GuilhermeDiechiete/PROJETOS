
// Primeiro selecionamos a area total do sistema
const formulario = document.querySelector('.formulario')// ligamos o bloco do formulario, então somente nesse bloco o usuario vai interagir

// apos selecionar a area de interação, adicionamos o evento que ira aconter nessa area e adicionamos na lista de observação e criamos uma função, então quando esse evento for capiturado, tudo que estiver dentro da função, será executado.

//ADICIONANDO O EVENTO SUBMIT PARA SER OBSERVADO, quando for clicado, o evento será capturado e o codigo, sera executado
formulario.addEventListener('submit', function (evento){
    evento.preventDefault()
    
// TUDO QUE ESTIVER AQUI, VAI EXECUTAR QUANDO O EVENTO SUBMIT FOR CAPTURADO
    
    //ligando os inputs ao JS
    const inputPeso = evento.target.querySelector('.peso')
    const inputAltura = evento.target.querySelector('.altura')

    //convertendo os valores dos input
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso){
        envioresultado('Peso Invalido', false)
        return}

    if (!altura){
        envioresultado('Altura Invalida', false)
        return}
    
        const imc = calcular(peso, altura)
        const nvIMC = nivelImc(imc)

    envioresultado(`Seu IMC é ${imc} (${nvIMC})`)
    
});



//FUNÇÃO NIVEL DO IMC
function nivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1','Obesidade Grau 2','Obesidade Grau 3']

    if(imc >= 39.9) return nivel[5]
    if(imc >= 34.9) return nivel[4]
    if(imc >= 29.9) return nivel[3]
    if(imc >= 34.9) return nivel[2]
    if(imc >= 18.5) return nivel[1]
    if(imc < 18.5) return nivel[0]
}



//FUNÇÃO DE CALCULO
function calcular(peso, altura){
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}



//FUNÇÃO DE CRIAR PARAGRAFO
function criaParagrafo(){
    const p = document.createElement('p') //criando o paragrafo
    p.classList.add('paragResultado') // add uma classe a tag p
    return p // retornando o p da função
};



// FUNÇÃO PARA ENVIAR O RESULTADO PARA O HTML
function envioresultado(msg, validação){
    const resultado = document.querySelector('.resultado') //ligando o html ao JS
    resultado.innerHTML = '' // deixando o resultado com o html vazio
    const p = criaParagrafo() // adicionando a função de criar paragrafo
    p.innerHTML = msg
    resultado.appendChild(p)
}