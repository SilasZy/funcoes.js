/*  Arrow Function que Verifica Positividade

Objetivo: Crie uma arrow function chamada ehPositivo que recebe um número e retorna true se o número for positivo e false se for negativo ou zero.
O que fazer:
Declare uma arrow function usando a sintaxe const nomeDaFuncao = (parametro) => {}.
A função deve ter um parâmetro para receber um número.
Dentro da função, verifique se o número é maior que 0.
Retorne true se o número for positivo, senão retorne false.    */

const positivo = (number) => {

    
if(number >0 ) {
console.log('numero é positivo');

}else{
    console.log('numero é negativo');
}
return number;
}

console.log( 'voce disse que o seu numero é ' + positivo(39));