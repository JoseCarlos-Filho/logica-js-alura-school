// declaração do elemento de botões de operações
const botoes = document.getElementsByName('operacao');

// declaração dos formulários de operações. 
let formImc = document.querySelector('.container__imc');
let formFatorial = document.querySelector('.container__fatorial');
let formConversao = document.querySelector('.container__conversao');
let formRetangulo = document.querySelector('.container__area');
let formCirculo = document.querySelector('.container__circular');
let formTabuada = document.querySelector('.container__tabuada');

// declaração dos botões de calcular de cada operação
const btnCalcularImc = document.querySelector('#calcular-imc');
const btnCalcularFatorial = document.querySelector('#calcular-fatorial');
const btnCalcularConversao = document.querySelector('#calcular-conversao');
const btnCalcularArea = document.querySelector('#calcular-area');
const btnCalcularCirculo = document.querySelector('#calcular-raio');
const btnCalcularTabuada = document.querySelector('#calcular-tabuada');

// Função que mostra mensagem de erro
function messagemDeErro() {
    alert('prencha os campos corretamente!');
    throw new Error('prencha os campos corretamente!');
}

function verificaONoDoCampo(campo) {
    if (campo.nodeName === 'INPUT') {
        campo.value = '';
    }
}

// Função que limpa os campos dos formulários
function limpaCampos() {
    formImc.childNodes.forEach(campo => {
        verificaONoDoCampo(campo);
    });

    formFatorial.childNodes.forEach(campo => {
        verificaONoDoCampo(campo);
    });

    formConversao.childNodes.forEach(campo => {
        verificaONoDoCampo(campo);
    });

    formRetangulo.childNodes.forEach(campo => {
        verificaONoDoCampo(campo);
    });

    formCirculo.childNodes.forEach(campo => {
        verificaONoDoCampo(campo);
    });

    formTabuada.childNodes.forEach(campo => {
        verificaONoDoCampo(campo);
    });
}

// Evento de click nos botões de operações
botoes.forEach(botao => {
    botao.addEventListener('click', botoesDeOperacoes);
})

// Função que verifica qual botão de operação foi clicado
function botoesDeOperacoes() {
    botoes.forEach(botao => {
        if (botao.checked) {
            mostraOperacao(botao.value);
        }
    })
}

// Função que mostra o formulário da operação selecionada
function mostraOperacao(botao) {
    const forms = {
        'op1': formImc,
        'op2': formFatorial,
        'op3': formConversao,
        'op4': formRetangulo,
        'op5': formCirculo,
        'op6': formTabuada
    }

    // Object.keys(forms).forEach(key => {
    //     if (key === botao) {
    //         forms[key].classList.remove('hidden');
    //         forms[key].classList.add('show');
    //         console.log(botao);
    //     } else {
    //         forms[key].classList.add('hidden');
    //         forms[key].classList.remove('show');
    //     }
    // });

    for (let form in forms) {
        if (form === botao) {
            forms[form].classList.remove('hidden');

        } else {
            forms[form].classList.add('hidden');
        }
    }
    
}


// Bloco de execução do calculo do IMC
function calculaImc(altura, peso) {
    let resultado = document.querySelector('#resultado-imc');
    let imc = peso / (altura ** 2);
    resultado.innerHTML = `seu IMC é: ${imc.toFixed(2)}`;
}

btnCalcularImc.addEventListener('click', () => { 
    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;   
    if (altura === '' || peso === '' || isNaN(altura) || isNaN(peso)) {
        messagemDeErro();
    } else {
        calculaImc(altura, peso);
        limpaCampos();
    }
});

// Bloco de execução do calculo do Fatorial
function calculaFatorial(numero) {
    let resultado = document.querySelector('#resultado-fatorial');
    let fatorial = 1;
    for (let fator = 1; fator <= numero; fator++) {
        fatorial *= fator;
    }
    resultado.innerHTML = `O fatorial de ${numero} é: ${fatorial}`;
}

btnCalcularFatorial.addEventListener('click', () => {
    let numero = parseInt(document.querySelector('#fatorial').value);
    if (numero === '' || isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
        console.log(numero);
        messagemDeErro();
    } else {
        calculaFatorial(numero);
        limpaCampos();
    }
});

// Bloco de execução do calculo de conversão de temperatura
function converteDolarEmReal(dolar) {
    let resultado = document.querySelector('#resultado-conversao');
    const cotacao = 4.80;
    let real = dolar * cotacao;
    resultado.innerHTML = `O valor em real(is) é: R$ ${real.toFixed(2)}`;
}

btnCalcularConversao.addEventListener('click', () => {
    let dolar = parseFloat(document.querySelector('#conversao').value);
    if (dolar === '' || isNaN(dolar) || dolar <= 0) {
        messagemDeErro();
    } else {
        converteDolarEmReal(dolar);
        limpaCampos();
    }
});

// Bloco de execução do calculo da área do retângulo
function calculaAreaRetangulo(base, altura) {
    let resultado = document.querySelector('#resultado-area');
    let area = base * altura;
    let perimetro = 2 * (base + altura);
    resultado.innerHTML = `A área do retângulo é: ${area} m² e o perímetro é: ${perimetro} metros`;
}

btnCalcularArea.addEventListener('click', () => {
    let altura = parseFloat(document.querySelector('#altura-area').value);
    let base = parseFloat(document.querySelector('#largura-area').value);
    if (
        altura === '' || 
        base === '' || 
        isNaN(altura) || 
        isNaN(base) || 
        altura <= 0 ||
        base <= 0
    ) {
        messagemDeErro();
    } else {
        calculaAreaRetangulo(base, altura);
        limpaCampos();
    }
});

// Bloco de execução do calculo da área do círculo
function calculaAreaCirculo(raio) {
    let resultado = document.querySelector('#resultado-raio');
    let area = Math.PI * (raio ** 2);
    let perimetro = 2 * Math.PI * raio;
    resultado.innerHTML = `A área do círculo é: ${area.toFixed(2)} m² e o perímetro é: ${perimetro.toFixed(2)} metros`;
}

btnCalcularCirculo.addEventListener('click', () => {
    let raio = parseFloat(document.querySelector('#raio').value);
    if (raio === '' || isNaN(raio) || raio <= 0) {
        messagemDeErro();
    } else {
        calculaAreaCirculo(raio);
        limpaCampos();
    }
});

// Bloco de execução do calculo da tabuada
function calculaTabuada(numero) {
    let resultado = document.querySelector('#resultado-tabuada');
    let tabuada = '';
    for (let indice = 1; indice <= 10; indice++) {
        tabuada += `${numero} x ${indice} = ${numero * indice} <br>`;
    }
    resultado.innerHTML = tabuada;
}

btnCalcularTabuada.addEventListener('click', () => {
    let numero = parseInt(document.querySelector('#tabuada').value);
    if (numero === '' || isNaN(numero) || numero <= 0 || !Number.isInteger(numero)) {
        messagemDeErro();
    } else {
        calculaTabuada(numero);
        limpaCampos();
    }
})