var buscarPaciente = document.querySelector("#buscar-pacientes");

buscarPaciente.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {

        if (xhr.status == 200) {
            var resposta = xhr.responseText;

            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function (paciente) {
                adcionarPacienteTabela(paciente);
            });
        } else {
            var erroMensagem = document.querySelector("#erro-ajax");
            erroMensagem.classList.remove("invisivel");
        }

    });

    xhr.send();
});