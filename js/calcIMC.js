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
        var imc = calculoImc(peso, altura);
        tdImc.textContent = imc;
    }

    function calculoImc(peso, altura) {
        var imc = 0;
        imc = peso / (altura * altura);
        return imc.toFixed(2);
    }
}