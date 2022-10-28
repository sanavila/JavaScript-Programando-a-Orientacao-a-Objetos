//para realizar a importação foi necessário inicializar um pacote com "node init" e uma configuração no "type" do mesmo para = "module";
import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente();

cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;


const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar(1000);
const valorSacado = contaCorrenteRicardo.sacar(500);
console.log(valorSacado);
console.log(contaCorrenteRicardo);
