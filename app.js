const botoes = document.getElementsByName('operacao');
let formImc = document.querySelector('.container__imc');
let formFatorial = document.querySelector('.container__fatorial');
let formConversao = document.querySelector('.container__conversao');
let formRetangulo = document.querySelector('.container__area');
let formCirculo = document.querySelector('.container__circular');
let formTabuada = document.querySelector('.container__tabuada');

botoes.forEach(botao => {
    botao.addEventListener('click', botoesDeOperacoes);
})

function botoesDeOperacoes() {
    botoes.forEach(botao => {
        if (botao.checked) {
            mostraOperacao(botao.value);
        }
    })
}

function mostraOperacao(botao) {
    const forms = {
        'op1': formImc,
        'op2': formFatorial,
        'op3': formConversao,
        'op4': formRetangulo,
        'op5': formCirculo,
        'op6': formTabuada
    }

    for (let form in forms) {
        if (form === botao) {
            forms[form].classList.remove('hidden');
        } else {
            forms[form].classList.add('hidden');
        }
    }

    // if (botao === 'op1') {
    //     formImc.classList.toggle('hidden');
    //     formFatorial.classList.add('hidden');
    //     formConversao.classList.add('hidden');
    //     formRetangulo.classList.add('hidden');
    //     formCirculo.classList.add('hidden');
    //     formTabuada.classList.add('hidden');

    // }
    // if (botao === 'op2') {
    //     formFatorial.classList.toggle('hidden');
    //     formImc.classList.add('hidden');
    //     formConversao.classList.add('hidden');
    //     formRetangulo.classList.add('hidden');
    //     formCirculo.classList.add('hidden');
    //     formTabuada.classList.add('hidden');
    // }
    
}
