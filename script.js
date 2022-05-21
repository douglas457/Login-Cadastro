var btnEntrar = document.querySelector ("#entrar");
var btnCadastrarse = document.querySelector ("#cadastrarse");

var body = document.querySelector("body");

btnEntrar.addEventListener ("click", function () {
    body.className = "entrar-js"
});

btnCadastrarse.addEventListener ("click", function () {
    body.className = "cadastrar-se-js"
})