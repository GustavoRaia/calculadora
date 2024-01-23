const visor = document.getElementById("visor");
const visor_memoria = document.getElementById("visor-valor-memoria");
var valor_visor = 0;
var operacao = "";
var memoria = 0;

// Função ara ativar a visibilidade das div de Histórico e Memória
function visivel(id) {
    var muda = document.getElementById(id);
    var display = window.getComputedStyle(muda);

    if (display.getPropertyValue('display') == "none") {
        muda.style.display = "block";
    } else if (display.getPropertyValue('display') == "block") {
        muda.style.display = "none";
    }
}

// Funções de Memória (MC, MR, M+, M-, MS)

// Salva o valor do visor na memória
function salva_memoria() {
    memoria = Number(visor.value);
    document.getElementById('visor-memoria').value = "M";
    visor_memoria.value = memoria;
}

// Subtrai da memória (M-)
function subtrai_memoria() {
    memoria -= Number(visor.value);
    visor_memoria.value = memoria;
}

// Soma à memória (M+)
function soma_memoria() {
    memoria += Number(visor.value);
    visor_memoria.value = memoria;
}

// Registra o valor da memória no visor
function registra_memoria() {
    visor.value = memoria;
}

// Limpa o valor guardado na Memória
function limpa_memoria() {
    document.getElementById('visor-memoria').value = "";
    memoria = 0;
    visor_memoria.value = "";
}



// Funções de Operação

function operador(btn) {
    valor_visor = Number(visor.value);
    visor.value = "";
    operacao = btn;
}

// igual
function igual() {
    let valor = Number(visor.value);

    if (visor.value != "") {
        switch (operacao) {
            case '+': // Soma
                visor.value = valor_visor + valor;
                break;
            case '-': // Subtrai
                visor.value = valor_visor - valor;
                break;
            case '/': // Divide
                if (valor != 0)
                    visor.value = valor_visor / valor;
                break;
            case 'x': // Multiplica
                visor.value = valor_visor * valor;
                break;
        }
    }

    document.getElementById('impressao').innerHTML += valor_visor + ' ' + operacao + ' ' + valor + ' ' + ' = ' + visor.value + '<br/><hr><br/>';
}

// Float
function numero(btn) {
    if (btn == '.' && visor.value.indexOf('.') < 0) {
        visor.value += btn;
    } else if (btn != '.') {
        visor.value += btn;
    }
}

// Função 0: Raiz
function raiz() {
    valor_visor = Number(visor.value);
    visor.value = Math.sqrt(Number(visor.value));
    operacao = '√';
    document.getElementById('impressao').innerHTML += operacao + valor_visor + ' = ' + visor.value + '<br/><hr><br/>';
}

// Porcentagem
function porcento() {
    visor.value = valor_visor * Number(visor.value) / 100;
}

// Clear (<-)
function apaga() {
    visor.value = visor.value.slice(0, -1);
}

// Quadrado
function quadrado() {
    valor_visor = Number(visor.value);
    visor.value = visor.value ** 2;
    operacao = '²';
    document.getElementById('impressao').innerHTML += + valor_visor + operacao + ' = ' + visor.value + '<br/><hr><br/>';

}

// Inverte Sinal (+/-)
function inverte() {
    visor.value = visor.value * (-1);
}

// Reinicia (C)
function reinicia() {
    visor.value = '';
    valor_visor.value = '';
    document.getElementById('impressao').innerHTML = '';
}

// Limpa visor (CE)
function limpa_visor() {
    visor.value = '';
}

// Limpa log do histórico
function limpa_historico() {
    document.getElementById('impressao').innerHTML = '';
}