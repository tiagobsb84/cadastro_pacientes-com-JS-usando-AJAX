var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var validPeso = true;
    var validAltura = true;

    if (peso <= 0 || peso >= 1000) {
        validPeso = false;
        tdImc.textContent = 'Peso Inválido!';
        paciente.classList.add('paciente-invalido');
    }
    if (altura <= 0 || altura >= 3.00) {
        validAltura = false;
        tdImc.textContent = 'Altura Inválida!';
        paciente.classList.add('paciente-invalido');
    }
    if (validPeso && validAltura) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

var addPacientes = document.querySelector("#addPaciente");

addPacientes.addEventListener("click", function (e) {
    e.preventDefault();

    var form = document.querySelector(".formAdicionar");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var trTabela = document.createElement('tr');

    var tdNome = document.createElement('td');
    var tdPeso = document.createElement('td');
    var tdAltura = document.createElement('td');
    var tdGordura = document.createElement('td');
    var tdImc = document.createElement('td');

    tdNome.textContent = nome;
    tdPeso.textContent = peso;
    tdAltura.textContent = altura;
    tdGordura.textContent = gordura;

    trTabela.appendChild(tdNome);
    trTabela.appendChild(tdPeso);
    trTabela.appendChild(tdAltura);
    trTabela.appendChild(tdGordura);
    trTabela.appendChild(tdImc);

    var tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(trTabela);
});



