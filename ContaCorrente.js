import { Cliente } from './Cliente.js'
export class ContaCorrente {
    agencia;
    _cliente;

    set cliente(novoValor){
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }
    get cliente(){
        return this._cliente;
    }
    
    //atributo privado "#nameExample";
    _saldo = 0;
    
    //Métodos (funções)
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            //early return
            return;
        }
        this._saldo += valor;
        console.log(this._saldo)
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
