//para realizar a importação foi necessário inicializar um pacote com "node init" e uma configuração no "type" do mesmo para = "module";
import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente('Ricardo', 11122233309);

const cliente2 = new Cliente('Rute', 61625478955);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
const contaCorrenteRute = new ContaCorrente(1001, cliente2);

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.transferir(500, contaCorrenteRute);
contaCorrenteRicardo.depositar(1000);
const valorSacado = contaCorrenteRicardo.sacar(500);

console.log(valorSacado);
console.log(contaCorrenteRicardo);
console.log(contaCorrenteRute);
console.log(ContaCorrente.numeroDeContas);
