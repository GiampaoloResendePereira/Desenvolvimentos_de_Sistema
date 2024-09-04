'use strict';

//Criando função para atualizar o relogio
function atualizaRelogio() {
    //Atribuindo a uma variavel o elemento com id relogio
    const relogio = document.getElementById('relogio');
    
    //Obtendo data-hora de agora
    const agora = new Date();
    //console.log(agora);
    
    //Obetendo hora, minutos e segundos da hora atual
    const horasMinutosSegundos = agora.toLocaleTimeString('pt-br', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    //Adicionando a página o relógio
    relogio.innerHTML = horasMinutosSegundos;

    //Aplicando recursividade para o relógio atualizando a cada 1000 milisegundos(1 segundo)
    setTimeout(atualizaRelogio,1000);
}

atualizaRelogio();

// Criando função para atualizar saudação
function atualizaSaudacao() {
    // Obtendo data de agora
    const agora = new Date();
    //console.log(agora.getDay());

    // Obtendo o número da semana iniciando de 0 indo até 6
    const dia = agora.getDay();

    // Criando Array de dias da semana equivalente
    const dias = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    //console.log(dias[dia]);

    // Obtendo horas em valor inteiro
    const hora = agora.getHours();

    // Declarando variavel de cumprimento
    let cumprimento = '';

    // Verificação da saudação adequada
    if (hora < 6) {
        cumprimento = 'Boa Madrugada';
    } else if (hora < 12) {
        cumprimento = 'Bom Dia';
    } else if (hora < 18) {
        cumprimento = 'Boa Tarde'
    } else {
        cumprimento = 'Boa Noite';
    }

    // Selecionando Elemento 
    const saudacao = document.getElementById('saudacao');

    // Adicionando no documento html
    saudacao.innerHTML = `${dias[dia]} - ${cumprimento}`;

    // Chaando função de forma recursiva
    setTimeout(atualizaSaudacao,1000);
}

atualizaSaudacao();

const imagens = [
    {
        "id": 11,
        "alternativo": "fun",
        "caminho": "1724968856063.jpg",
        "created_at": "2024-08-29T22:00:56.000Z"
    },
    {
        "id": 12,
        "alternativo": "tes",
        "caminho": "1724968882685.jpg",
        "created_at": "2024-08-29T22:01:22.000Z"
    }
]

const anuncios = document.getElementById('anuncios');
let listaAnuncios = '';

for (let imagem of imagens) {
    listaAnuncios += `<img src='http://10.145.40.222:8080/public/${imagem.caminho}' alt='${imagem.alternativo}' />`
    console.log(imagem.caminho);
}

anuncios.innerHTML = listaAnuncios;

function atualizaTabela(){
    
}

