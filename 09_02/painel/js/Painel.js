'use strict'; // Usa o modo estrito para evitar erros silenciosos e melhorar a segurança

/**
 * Inicia o relógio digital, atualizando a hora a cada segundo.
 */
function iniciarRelogio() {
    /**
     * Atualiza o conteúdo do elemento com id 'relogio' com a hora atual.
     * A função é chamada repetidamente a cada 1000 milissegundos (1 segundo).
     */
    function atualizaRelogio() {
        const relogio = document.getElementById('relogio');
        const agora = new Date(); // Obtém a data e hora atuais
        const horasMinutosSegundos = agora.toLocaleTimeString('pt-br', {
            hour: '2-digit', // Formata a hora com dois dígitos
            minute: '2-digit', // Formata os minutos com dois dígitos
            second: '2-digit' // Formata os segundos com dois dígitos
        });
        relogio.innerHTML = horasMinutosSegundos; // Atualiza o conteúdo do elemento com a hora atual
        setTimeout(atualizaRelogio, 1000); // Chama a função novamente após 1 segundo
    }
    atualizaRelogio(); // Inicia a atualização do relógio
}

/**
 * Inicia a saudação baseada no horário atual e no dia da semana.
 */
function iniciarSaudacao() {
    /**
     * Atualiza o conteúdo do elemento com id 'saudacao' com a saudação apropriada.
     * A função é chamada repetidamente a cada 1000 milissegundos (1 segundo).
     */
    function atualizaSaudacao() {
        const agora = new Date(); // Obtém a data e hora atuais
        const dia = agora.getDay(); // Obtém o dia da semana (0 = Domingo, 1 = Segunda-feira, etc.)
        const dias = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
        const hora = agora.getHours(); // Obtém a hora atual
        let cumprimento = '';

        // Define o cumprimento baseado na hora do dia
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
        saudacao.innerHTML = `${dias[dia]} - ${cumprimento}`; // Atualiza o conteúdo com o dia e o cumprimento
        setTimeout(atualizaSaudacao, 1000); // Chama a função novamente após 1 segundo
    }
    atualizaSaudacao(); // Inicia a atualização da saudação
}

/**
 * Inicializa a seção de anúncios carregando imagens a partir de um array.
 */
function iniciarAnuncios() {
    // Array contendo dados das imagens dos anúncios
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
    ];

    const anuncios = document.getElementById('anuncios'); // Obtém o elemento onde os anúncios serão exibidos
    let listaAnuncios = '';

    // Itera sobre o array de imagens e cria elementos de imagem para cada uma
    for (let imagem of imagens) {
        listaAnuncios += `<img src='http://10.145.40.222:8080/public/${imagem.caminho}' alt='${imagem.alternativo}' />`;
        console.log(imagem.caminho); // Log para depuração (opcional)
    }

    anuncios.innerHTML = listaAnuncios; // Atualiza o conteúdo do elemento com as imagens dos anúncios
}

/**
 * Inicializa a tabela de horários com base na data fornecida.
 * @param {string} data - A data no formato 'YYYY-MM-DD' para exibir os horários.
 */
function iniciarTabela(data) {
    // Dados dos horários para cada data
    const horarios = {
        '2024-09-03': [
            { inicio: '18:00', fim: '22:00', turma: 'EMP-NBM-03', instrutor: 'JOEL SILVA', ambiente: 'SALA-3004', unidade: 'NOCO. MAQUINISTAS' },
            { inicio: '18:00', fim: '22:00', turma: 'UMO-MBMM-03', instrutor: 'THADEU GOMES', ambiente: 'EXTERNO', unidade: 'MECA. MOTOCICLETAS' }
        ],
        '2024-09-04': [
            { inicio: '18:30', fim: '22:00', turma: 'HIC-MEC-2-95', instrutor: 'ADEMIR PIN', ambiente: 'SALA-3005', unidade: 'PROC. MECÂNICA' },
            { inicio: '18:30', fim: '22:00', turma: 'HTC-MEC-4-93', instrutor: 'AFONSO CORDEIRO', ambiente: 'SALA-3005', unidade: 'DIESE MECÁNICA' }
        ]
        // Adicione mais dias e horários conforme necessário
    };

    const tabela = document.getElementById('tabela-horarios').getElementsByTagName('tbody')[0];
    tabela.innerHTML = ''; // Limpa a tabela antes de adicionar novas linhas

    // Verifica se há horários para a data fornecida
    if (horarios[data]) {
        // Itera sobre os horários e adiciona cada um como uma linha na tabela
        for (let horario of horarios[data]) {
            let linha = tabela.insertRow(); // Adiciona uma nova linha à tabela
            linha.insertCell(0).innerHTML = horario.inicio;
            linha.insertCell(1).innerHTML = horario.fim;
            linha.insertCell(2).innerHTML = horario.turma;
            linha.insertCell(3).innerHTML = horario.instrutor;
            linha.insertCell(4).innerHTML = horario.ambiente;
            linha.insertCell(5).innerHTML = horario.unidade;
        }
    }
}

/**
 * Filtra a tabela de horários com base no texto inserido no campo de filtro.
 */
function filtrarTabela() {
    const filtro = document.getElementById('filtro-turma').value.toUpperCase(); // Obtém o valor do filtro e converte para maiúsculas
    const tabela = document.getElementById('tabela-horarios');
    const linhas = tabela.getElementsByTagName('tr'); // Obtém todas as linhas da tabela

    // Itera sobre todas as linhas, começando pela segunda (ignora o cabeçalho)
    for (let i = 1; i < linhas.length; i++) {
        const celulaTurma = linhas[i].getElementsByTagName('td')[2]; // Obtém a célula da turma
        if (celulaTurma) {
            const textoTurma = celulaTurma.textContent || celulaTurma.innerText; // Obtém o texto da célula
            if (textoTurma.toUpperCase().indexOf(filtro) > -1) {
                linhas[i].style.display = ''; // Mostra a linha se o filtro corresponder
            } else {
                linhas[i].style.display = 'none'; // Oculta a linha se o filtro não corresponder
            }
        }
    }
}

// Adiciona um listener para o evento 'DOMContentLoaded' para garantir que o DOM esteja totalmente carregado antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    iniciarRelogio(); // Inicia o relógio
    iniciarSaudacao(); // Inicia a saudação
    iniciarAnuncios(); // Carrega os anúncios
    const seletorData = document.getElementById('seletor-data');
    seletorData.addEventListener('change', function() {
        iniciarTabela(seletorData.value); // Atualiza a tabela com base na data selecionada
    });
    document.getElementById('filtro-turma').addEventListener('keyup', filtrarTabela); // Adiciona um listener para o campo de filtro
    iniciarTabela(new Date().toISOString().split('T')[0]); // Inicializa a tabela com a data atual
});
