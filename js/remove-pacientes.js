var pacientes = document.querySelector("#tabela-pacientes");

pacientes.addEventListener("dblclick", function (e) {
    e.target.parentNode.classList.add("fadeOut");

    setTimeout(function () {
        /*target -> significa o alvo que vai ser selecionado*/
        /*parentNode -> ele e o pai do elemento, no caso selecionar so um td ele selecionar a tr de uma tabela */
        e.target.parentNode.remove();
    }, 800);
})