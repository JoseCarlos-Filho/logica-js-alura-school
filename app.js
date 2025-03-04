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
const btnReniciarPage = document.querySelector('.container__botao-reiniciar');

// Função que altera o texto do título e paragrafo da page
function alteraTexto(titulo, paragrafo) {
    let tituloPage = document.querySelector('.container__texto-titulo');
    let paragrafoPage = document.querySelector('.container__texto-paragrafo');
    tituloPage.innerHTML = titulo;
    paragrafoPage.innerHTML = paragrafo;
}

btnReniciarPage.addEventListener('click', () => {
    window.location.reload();
})

// Bloco de funções que mostra mensagens de erro
function messagemDeErro() {
    alert('prencha os campos corretamente, o campo não pode ser vazio e nem conter letras!');
    throw new Error('prencha os campos corretamente, o campo não pode ser vazio e nem conter letras!');
}

function messagemDeErroCampoAltura() {
    alert('prencha o campo com valores entre 0 e 3 metros!');
    throw new Error('preencha o campo com valores entre 0 e 3 metros!');
}

function messagemDeErroCampoPeso() {
    alert('preencha o campo com valores entre 0 e 300 kg!');
    throw new Error('preencha o campo com valores entre 0 e 300 kg!');
}

function menssagemDeErroCampoAlturaBase() {
    alert('prencha os campos com valores maiores que 0!');
    throw new Error('prencha os campos com valores maiores que 0!');
}

// Função que verifica se o campo é um input e limpa o campo
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
            btnReniciarPage.removeAttribute('disabled');
            switch (botao.value) {
                case 'op1':
                    alteraTexto('Calculo de IMC', 'Informe sua altura e peso para calcular o IMC');
                    break;
                case 'op2':
                    alteraTexto('Calculo de Fatorial', 'Informe um número para calcular o fatorial');
                    break;
                case 'op3':
                    alteraTexto('Conversão de Dólar em Real', 'Informe o valor em dólar para a conversão');
                    break;
                case 'op4':
                    alteraTexto('Calculo da área do Retângulo', 'Informe a altura e a base do retângulo');
                    break;
                case 'op5':
                    alteraTexto('Calculo da área do Círculo', 'Informe o raio do círculo');
                    break;
                case 'op6':
                    alteraTexto('Calculo da Tabuada', 'Informe um número para calcular a tabuada');
                    break;
            }
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
function faixaDeImc(imc) {
    let resultado = document.querySelector('#resultado-imc');
    if (imc < 18.5) {
        resultado.innerHTML = `seu IMC é: ${imc.toFixed(2)} e você está abaixo do peso`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado.innerHTML = `seu IMC é: ${imc.toFixed(2)} e você está com o peso normal`;
    } else if (imc >= 25 && imc <= 29.9) {
        resultado.innerHTML = `seu IMC é: ${imc.toFixed(2)} e você está com sobrepeso`;
    } else if (imc >= 30 && imc <= 34.9) {
        resultado.innerHTML = `seu IMC é: ${imc.toFixed(2)} e você está com obesidade grau 1`;
    } else if (imc >= 35 && imc <= 39.9) {
        resultado.innerHTML = `seu IMC é: ${imc.toFixed(2)} e você está com obesidade grau 2`;
    } else {
        resultado.innerHTML = `seu IMC é: ${imc.toFixed(2)} e você está com obesidade grau 3`;
    }
}


function calculaImc(altura, peso) {
    let resultado = document.querySelector('#resultado-imc');
    let imc = peso / (altura ** 2);
    faixaDeImc(imc);
}

btnCalcularImc.addEventListener('click', () => { 
    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;   
    if (altura === '' || peso === '' || isNaN(altura) || isNaN(peso)) {
        messagemDeErro();
        return;
    }
    
    if (altura <= 0 || altura > 3) {
        messagemDeErroCampoAltura();
        return;

    } 

    if (peso <= 0 || peso > 300) {
        messagemDeErroCampoPeso();
        return;
    }  
    
    calculaImc(altura, peso);
    limpaCampos();
    
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
    if (numero === '' || isNaN(numero) || numero <= 0 || !Number.isInteger(numero)) {
        messagemDeErro();
        return;
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
        return;
    } else {
        converteDolarEmReal(dolar);
        limpaCampos();
    }
});

// Função que calcula a área em hectares
function calculaAreaEmHectare(area) {
    let hectare = area / 10000;
    return hectare;
}

// Bloco de execução do calculo da área do retângulo
function calculaAreaRetangulo(base, altura) {
    let resultado = document.querySelector('#resultado-area');
    let area = base * altura;
    let perimetro = 2 * (base + altura);
    let hectare = calculaAreaEmHectare(area);
    resultado.innerHTML = `A área do retângulo é: ${area} m² e o perímetro é: ${perimetro} metros. Em hectares é: ${hectare.toFixed(2)} ha`;
}

btnCalcularArea.addEventListener('click', () => {
    let altura = parseFloat(document.querySelector('#altura-area').value);
    let base = parseFloat(document.querySelector('#largura-area').value);
    if (
        altura === '' || 
        base === '' || 
        isNaN(altura) || 
        isNaN(base)
    ) {
        messagemDeErro();
        return;
    }
    
    if (altura <= 0 || base <= 0) {
        menssagemDeErroCampoAlturaBase();
        return;
    } 
    
    calculaAreaRetangulo(base, altura);
    limpaCampos();
    
});

// Bloco de execução do calculo da área do círculo
function calculaAreaCirculo(raio) {
    let resultado = document.querySelector('#resultado-raio');
    let area = Math.PI * (raio ** 2);
    let perimetro = 2 * Math.PI * raio;
    let hectare = calculaAreaEmHectare(area);
    resultado.innerHTML = `A área do círculo é: ${area.toFixed(2)} m² e o perímetro é: ${perimetro.toFixed(2)} metros. Em hectares é: ${hectare.toFixed(2)} ha`;
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