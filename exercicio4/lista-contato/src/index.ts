import { ListaTelefonica, Contato } from "./model";

const contato1 = new Contato({
    nome: 'Mateus',
    tel: '(44) 9849-3737',
    endereco: 'Rua tal, n20, Cidade'
});
const contato2 = new Contato({
    nome: 'Emilly',
    tel: '(44) 9849-3737',
    endereco: 'Rua tal, n20, Cidade'
});
const contato3 = new Contato({
    nome: 'Julia',
    tel: '(44) 9849-3737',
    endereco: 'Rua tal, n20, Cidade'
});

const listaTelefonica = new ListaTelefonica();

listaTelefonica.adicionarContato(contato1);
listaTelefonica.adicionarContato(contato2);
listaTelefonica.adicionarContato(contato3);

listaTelefonica.removerContato(contato3);

listaTelefonica.editarContato('Emilly', '(44) 9884-3412', 'Rua Sicrano, n50, Cidade');

console.log('buscado por nome: ', listaTelefonica.buscarContatoPorNome('Mateus'));

console.log("------------------------------------- Lista Contatos ---------------------------------");
console.log();
console.log(listaTelefonica.exibirListaContatos());
console.log();
console.log("--------------------------------------------------------------------------------------");
