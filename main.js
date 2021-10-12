const pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i <= pacientes.length; i++) {

    var paciente = pacientes[i];

    const tdAltura = paciente.querySelector(".info-altura");
    const altura = tdAltura.textContent;

    const tdPeso = paciente.querySelector(".info-peso");
    const peso = tdPeso.textContent;

    const tdImc = paciente.querySelector(".info-imc");

    validPeso = true;
    validAltura = true;

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
        const imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}




