import { Cliente } from './Cliente.js'
export class ContaCorrente {
    agencia;
    _cliente;
    //atributo privado "#nameExample";
    #saldo = 0;
 
    set cliente(novoValor){
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }
    
    //assessor
    get cliente(){
        return this._cliente;
    }
    
    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
    }
    
    //Métodos (funções)
    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            //early return
            return;
        }
        this.#saldo += valor;
        console.log(this.#saldo)
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
