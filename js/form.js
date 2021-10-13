var addPacientes = document.querySelector("#addPaciente");

addPacientes.addEventListener("click", function (e) {
    e.preventDefault();

    var form = document.querySelector(".formAdicionar");

    var paciente = buscarInfoPaciente(form);

    var trTabela = criarTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(trTabela);

    form.reset();
});

function buscarInfoPaciente(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculoImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function criarTr(paciente) {

    var trTabela = document.createElement('tr');
    trTabela.classList.add('paciente');

    var tdNome = criarTd(paciente.nome, "info-nome");
    var tdPeso = criarTd(paciente.peso, "info-peso");
    var tdAltura = criarTd(paciente.altura, "info-altura");
    var tdGordura = criarTd(paciente.gordura, "info-gordura");
    var tdImc = criarTd(paciente.imc, "info-imc");

    trTabela.appendChild(tdNome);
    trTabela.appendChild(tdPeso);
    trTabela.appendChild(tdAltura);
    trTabela.appendChild(tdGordura);
    trTabela.appendChild(tdImc);

    return trTabela;
}

function criarTd(dado, classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}
