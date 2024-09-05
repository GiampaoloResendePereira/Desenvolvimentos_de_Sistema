'use strict';

// Função para atualizar o relógio
function atualizaRelogio() {
    const relogio = document.getElementById('relogio');
    const agora = new Date();
    const horasMinutosSegundos = agora.toLocaleTimeString('pt-br', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    relogio.innerHTML = horasMinutosSegundos;
    setTimeout(atualizaRelogio, 1000);
}

// Função para atualizar a saudação
function atualizaSaudacao() {
    const agora = new Date();
    const dia = agora.getDay();
    const dias = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    const hora = agora.getHours();
    let cumprimento = '';

    if (hora < 6) {
        cumprimento = 'Boa Madrugada';
    } else if (hora < 12) {
        cumprimento = 'Bom Dia';
    } else if (hora < 18) {
        cumprimento = 'Boa Tarde';
    } else {
        cumprimento = 'Boa Noite';
    }

    const saudacao = document.getElementById('saudacao');
    saudacao.innerHTML = `${dias[dia]} - ${cumprimento}`;
    setTimeout(atualizaSaudacao, 60000); // Atualiza a saudação a cada minuto
}

// Função para abreviar a data
function abreviaData(data) {
    const hora_aula = new Date(data);
    return hora_aula.toLocaleTimeString('pt-br', { hour: '2-digit', minute: '2-digit' });
}

// Função para carregar as aulas
function carregaAulas() {
    const aulas = [
        {
            "id": 1300,
            "data": "2024-08-29T03:00:00.000Z",
            "data_hora_inicio": "2024-08-29T21:00:00.000Z",
            "data_hora_fim": "2024-08-30T01:00:00.000Z",
            "turma": "EMP-NBM-03",
            "instrutor": "JOEL HERBERT BARBOSA SILVA",
            "unidade_curricular": "NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.0000)",
            "ambiente": "VTRIA-3-SALA-3004"
        },
        {
            "id": 1280,
            "data": "2024-08-29T03:00:00.000Z",
            "data_hora_inicio": "2024-08-29T21:00:00.000Z",
            "data_hora_fim": "2024-08-30T01:00:00.000Z",
            "turma": "UMO-MBMM-03",
            "instrutor": "THADEU VASCONCELOS DA SILVA GOMES",
            "unidade_curricular": "MECÂNICA BÁSICA DE MOTORES DE MOTOCICLETAS (CH: 100.0000)",
            "ambiente": "VTRIA-EXTER-EXTERNO"
        },
        {
            "id": 1326,
            "data": "2024-08-29T03:00:00.000Z",
            "data_hora_inicio": "2024-08-29T21:30:00.000Z",
            "data_hora_fim": "2024-08-30T01:00:00.000Z",
            "turma": "HTC-MEC-4-92",
            "instrutor": "AFONSO DE JESUS CORDEIRO",
            "unidade_curricular": "DESENVOLVIMENTO DE SISTEMAS DE AUTOMAÇÃO MECÂNICA (CH: 100.0000)",
            "ambiente": "VTRIA-3-LAB-3003"
        }
    ];

    const tabelaAulas = document.getElementById('aulas');
    let linhasAulas = '';

    for (let aula of aulas) {
        linhasAulas += `
            <tr>
                <td>${abreviaData(aula.data_hora_inicio)}</td>
                <td>${abreviaData(aula.data_hora_fim)}</td>
                <td>${aula.turma}</td>
                <td>${aula.instrutor}</td>
                <td>${aula.unidade_curricular}</td>
                <td>${aula.ambiente}</td>
            </tr>
        `;
    }

    tabelaAulas.innerHTML = linhasAulas;
}

// Função para carregar os anúncios
function carregaAnuncios() {
    const anuncios = [
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
    ];

    const anunciosDiv = document.getElementById('anuncios');
    let listaAnuncios = '';

    for (let imagem of anuncios) {
        listaAnuncios += `<img src='http://10.145.40.222:8080/public/${imagem.caminho}' alt='${imagem.alternativo}' />`;
    }

    anunciosDiv.innerHTML = listaAnuncios;
}

// Inicializando funções
atualizaRelogio();
atualizaSaudacao();
carregaAulas();
carregaAnuncios();

// Exibindo horários das aulas no console
const aulas = [
    {
        "id": 1300,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:00:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "EMP-NBM-03",
        "instrutor": "JOEL HERBERT BARBOSA SILVA",
        "unidade_curricular": "NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.0000)",
        "ambiente": "VTRIA-3-SALA-3004"
    },
    {
        "id": 1280,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:00:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "UMO-MBMM-03",
        "instrutor": "THADEU VASCONCELOS DA SILVA GOMES",
        "unidade_curricular": "MECÂNICA BÁSICA DE MOTORES DE MOTOCICLETAS (CH: 100.0000)",
        "ambiente": "VTRIA-EXTER-EXTERNO"
    },
    {
        "id": 1326,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:30:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "HTC-MEC-4-92",
        "instrutor": "AFONSO DE JESUS CORDEIRO",
        "unidade_curricular": "DESENVOLVIMENTO DE SISTEMAS DE AUTOMAÇÃO MECÂNICA (CH: 100.0000)",
        "ambiente": "VTRIA-3-LAB-3003"
    }
];

for (let aula of aulas) {
    console.log(abreviaData(aula.data_hora_inicio));
}
