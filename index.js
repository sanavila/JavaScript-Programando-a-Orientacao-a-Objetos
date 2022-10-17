class Cliente {
    nome;
    cpf;
}
class ContaCorrente {
    agencia;
    //atributo privado "#nameExample";
    _saldo = 0;

    sacar(valor){
        if (this._saldo >= valor) {
            this._saldo -= valor;
         }
    }

    depositar(valor){
        if(this._saldo > 0) {
            this._saldo += valor;
        } 
        console.log(_saldo)
    }
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;

cliente2.nome = 'Alice';
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 1000;
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar = 100;
contaCorrenteRicardo.depositar = 100;
contaCorrenteRicardo.depositar = 100;
contaCorrenteRicardo.sacar(50)

console.log(contaCorrenteRicardo);