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
            return valor;
         }
    }

    depositar(valor){
        if(valor <= 0) return;
            this.#saldo += valor;
            console.log(this.#saldo)
    }
}

const cliente1 = new Cliente();

cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;


const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar(1000);
const valorSacado = contaCorrenteRicardo.sacar(500);
console.log(valorSacado);
console.log(contaCorrenteRicardo);