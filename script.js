$(document).ready(function() {
    $("#verificar-resposta").click(function() {
        var respostaCorreta = "jair messias bolsonaro"; // Resposta correta
        var respostaSelecionada = $("input[name=resposta]:checked").val();
        if (respostaSelecionada === respostaCorreta) {
            $("#resultado").text("Resposta correta!");
        } else {
            $("#resultado").text("Resposta incorreta. Tente novamente.");
        }
    });
});
