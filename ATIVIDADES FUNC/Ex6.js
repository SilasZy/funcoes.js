/* Objetivo: Crie uma arrow function chamada primeiraLetra que recebe uma string e retorna a primeira letra dessa string.
*/

const letra = ( casa) => {
 casa = 'casa';
const primeiro = casa.charAt(2);
return primeiro;
};
console.log(`a 3 letra a ser exibida foi a ${letra()}`);

