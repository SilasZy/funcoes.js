/* da pra eu juntar o mesmo codigo em uma linha so, um exemplo pratico e rapido é isso aqui: 
........


const letra = (casa) => {
    casa = 'casa';
    const primeiro = casa.charAt(2);
    return primeiro;
};

// Usar o valor em uma condicional
if (letra() === 's') {
    console.log('A terceira letra de "casa" é "s".');
}

// Passar o valor para outra função
function exibirLetra(valor) {
    document.getElementById('meuElemento').innerText = valor;
}

exibirLetra(letra());





......


*/