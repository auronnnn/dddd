const caixaPrincipal = document.querySelector(".principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        alternativas: [
            {
                texto: "Gosta de engenharia?",
            },
            {
                texto: "Não gosta de engenharia?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já tentou parar e entender a engenharia?",
            },
            {
                texto: "Naõ tenho interesse nessa profissão.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Procurou auxílio na internet, ou de profissionais dessa profissão .",
            },
            {
                texto: "Não procurei nada.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "um bom lugar para fazer engenharia",
            },
            {
                texto: "Não tive interesse sobre isso.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Pode fazer em varias faculdades comom: UEM, UNINGÁ  entre outras.",
            },
            {
                texto: "Não quero procurar.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Pode ir em uma faculdade mais pertoou reservar uma visita pelo site  .",
            },
            {
                texto: "Não quero procurar.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Espero ter ajudado.",
            },
            {
                texto: "Atualize a página para começar.",
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraAlternativas(){
    perguntaAtual = perguntas[atual];
    caixaAlternativas.textContent = "";

    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    atual++;
    mostraAlternativas();
}


mostraAlternativas();