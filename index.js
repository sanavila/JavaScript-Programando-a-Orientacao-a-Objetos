class Cliente {
    nome;
    cpf;
}
class ContaCorrente {
    agencia;
    //atributo privado "#nameExample";
#saldo = 0;

    //Métodos (funções)
    sacar(valor){
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
         }
    }

    depositar(valor){
        if(valor > 0) {
            this.#saldo += valor;
            console.log(this.#saldo)
        } 
    }
}

const cliente1 = new Cliente();

cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;


const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar(1000);
console.log(contaCorrenteRicardo);