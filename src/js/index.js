const botaoAlterarTema = document.getElementById
    ("botao-alterar-tema");

const body = document.querySelector("body");
console.log(body);

const imagemBotaoTrocaDeTema = document.
    querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    body.classList.toggle("modo-escuro");

    const modoEscuroEstaAtivo = body.classList.
        contains("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src",
        "./imagens/moon.png")
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src",
        "./imagens/sun.png")
    }
});