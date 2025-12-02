const perguntas = [
    {
        texto:'1) O que Sukuna, o principal vilão da obra, é?',
        opcoes: ['uma maldição','um humano comum','um mestre de maldições','um feiticeiro jujutsu'],
        correta: 3
    },
    {
        texto:'2) Antes de Yuji se tornar o hospedeiro do Sukuna, a Escola Jujutsu já havia reunido quantos dedos do Rei das Maldições?',
        opcoes: ['3 dedos','5 dedos','6 dedos','9 dedos'],
        correta: 3
    },
    {
        texto:'3) Black Flash é a técnica de Yuji Itadori. Que outro personagem, além dele, conseguiu usar esse ataque por mais vezes?',
        opcoes: ['Aoi Todo','Nanami','Satoru Gojo','Megumi Fushiguro'],
        correta: 2
    },
    {
        texto:'4) Qual atriz faz o "tipo de mulher" de Yuji Itadori?',
        opcoes: ['Margot Robbie','Emma Watson','Jennifer Lawrence','Scarlett Johansson'],
        correta: 3
    },
    {
        texto:'5) Qual a proporção da técnica amaldiçoada utilizada por Nanami?',
        opcoes: ['7 por 3','7 por 7','7 por 8','7 por 10'],
        correta: 1
    },

]

let indice = 0;
let pontos = 0;

function mostrarPergunta() {
    const perguntaAtual = perguntas[indice];
    document.getElementById('textoPergunta').textContent = perguntaAtual.texto;
    document.getElementById('op0').textContent =  '' +perguntaAtual.opcoes[0];
    document.getElementById('op1').textContent =  '' +perguntaAtual.opcoes[1];
    document.getElementById('op2').textContent =  '' +perguntaAtual.opcoes[2];
    document.getElementById('op3').textContent =  '' +perguntaAtual.opcoes[3];

    document.getElementById('progresso').textContent = 'Pergunta ' + (indice + 1) + ' de ' + perguntas.length;

    const radios = document.querySelectorAll('input[name="opcao"]');
    radios.forEach(function (r) {
        r.checked = false;
    });

    document.getElementById('aviso').textContent = '';
}

function iniciarQuiz() {
    document.getElementById('telaInicial').classList.remove('tela-ativa');
    document.getElementById('telaQuiz').classList.add('tela-ativa');
    indice = 0;
    pontos = 0;
    mostrarPergunta();
}
