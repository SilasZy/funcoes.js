//calcular idade //
/* Objetivo: Crie uma função chamada calculaIdade que recebe o ano de nascimento e retorna a idade com base no ano atual.
O que fazer:
Declare uma função usando function.
A função deve ter um parâmetro para receber o ano de nascimento.
Dentro da função, obtenha o ano atual usando new Date().getFullYear().
Subtraia o ano de nascimento do ano atual para calcular a idade.
Retorne a idade.*/

let nasc = '2006';
const  calculoIdade = (anoNascimento)  =>{
const anoAtual= new Date().getFullYear();
 const idade= anoAtual - anoNascimento;
return idade;

} 

console.log(`voce nasceu em ${nasc} e tem ${calculoIdade(2006)} anos`);
