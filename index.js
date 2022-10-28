//para realizar a importação foi necessário inicializar um pacote com "node init" e uma configuração no "type" do mesmo para = "module";
import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente();

cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = 'Rute';
cliente2.cpf = 61625478955;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const contaCorrenteRute = new ContaCorrente();
contaCorrenteRute.agencia = 1001;
contaCorrenteRute.cliente = cliente2;
//contaCorrenteRute.cliente.nome = "Rute";
//contaCorrenteRute.cliente.cpf = 61624586955;

contaCorrenteRicardo.transferir(500, contaCorrenteRute);
contaCorrenteRicardo.depositar(1000);

const valorSacado = contaCorrenteRicardo.sacar(500);
console.log(valorSacado);
console.log(contaCorrenteRicardo);
console.log(contaCorrenteRute);
