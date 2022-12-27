function Calculadora(){
    return {
        display: document.querySelector('.display'),

        inicio(){
            this.cliqueDosBotoes()
        },
        realizaConta() {
            let conta = this.display.value 

            try {
                conta = eval(conta)

                if(!conta){
                    alert('Conta Invalida')
                    return
                }
                this.display.value = String(conta)
            } catch(e){
                alert('Conta Invalida')
                return
            }
        },
        LimpaDisplay(){
            this.display.value = ''
        },
        ApagarUm(){
            this.display.value = this.display.value.slice(0, -1)
        },
        cliqueDosBotoes(){
            document.addEventListener('click', e =>{
                const el = e.target

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)
                }
                if(el.classList.contains('btn-limpar')){
                    this.LimpaDisplay()
                }
                if(el.classList.contains('btn-delete')){
                    this.ApagarUm()
                }
                if(el.classList.contains('btn-igual')){
                    this.realizaConta()
                }
                this.display.focus()
            })
        },
        btnParaDisplay(valor){
            this.display.value += valor
        }
    };
    
}
const calculadoraPronta = Calculadora()
calculadoraPronta.inicio()