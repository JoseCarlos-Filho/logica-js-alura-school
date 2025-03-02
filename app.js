const botoes = document.getElementsByName('operacao');
let formImc = document.querySelector('.container__imc');
let formFatorial = document.querySelector('.container__fatorial');
let formConversao = document.querySelector('.container__conversao');
let formRetangulo = document.querySelector('.container__area');
let formCirculo = document.querySelector('.container__circular');
let formTabuada = document.querySelector('.container__tabuada');

// Função que limpa os campos dos formulários
function limpaCampos() {
    formImc.childNodes.forEach(campo => {
        if (campo.nodeName === 'INPUT') {
            campo.value = '';
        }
    });

    formFatorial.childNodes.forEach(campo => {
        if (campo.nodeName === 'INPUT') {
            campo.value = '';
        }
    })
    // let campos = document.querySelectorAll('input');
    // campos.forEach(campos => {
    //     campos.value = '';
    // })
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


let btnCalcularImc = document.querySelector('#calcular-imc');
btnCalcularImc.addEventListener('click', () => { 
    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;   
    if (altura === '' || peso === '' || isNaN(altura) || isNaN(peso)) {
        alert('prencha os campos corretamente!');
        throw new Error('prencha os campos corretamente!');
    } else {
        calculaImc(altura, peso);
        limpaCampos();
    }
});


