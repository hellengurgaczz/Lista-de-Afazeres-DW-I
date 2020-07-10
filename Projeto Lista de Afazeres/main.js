var selectAdd = document.getElementById('selectAdd');
var selectRemover = document.getElementById('selectRemover')
var tarefasFaculdade = [];
var tarefasDia = [];

document.getElementById('adicionar').onclick = function () {

    var tarefa = document.getElementById('adicionarTarefa').value;


    var valor = selectAdd.options[selectAdd.selectedIndex].value;

    if (valor == 'addFaculdade') {
        tarefasFaculdade.push(tarefa);
        var local = document.getElementById('sectionEsquerda');
        redenizarTarefasFaculdade(local, tarefa);
    } else if (valor == 'addDia') {
        tarefasDia.push(document.getElementById('adicionarTarefa').value);
        var local = document.getElementById('sectionDireita');
        redenizarTarefasDia(local, tarefa);
    }

    document.getElementById('adicionarTarefa').value = null;


}
document.getElementById('remover').onclick = function () {
    var index;
    var selectRemove = document.getElementById('selectRemover')
    var valor2 = selectRemove.options[selectRemove.selectedIndex].value;
    var conteudoRemover = document.getElementById('removerTarefa').value
    if (valor2 == 'removeFaculdade') {
        var local = document.getElementById('sectionEsquerda');
        for (var i = 0; i <= tarefasFaculdade.length; i++) {
            if (tarefasFaculdade[i] == document.getElementById('removerTarefa').value) {
                index = tarefasFaculdade.findIndex(element => element == conteudoRemover)
                tarefasFaculdade.splice(index, 1);
                index = null;
                redenizarTarefasFaculdade(local, tarefasFaculdade);
            }
        }
    } else if (valor2 == 'removeDia') {
        var local = document.getElementById('sectionDireita');
        for (var i = 0; i <= tarefasDia.length; i++) {
            if (tarefasDia[i] == document.getElementById('removerTarefa').value) {
                index = tarefasDia.findIndex(element => element == document.getElementById('removerTarefa').value);
                tarefasDia.splice(index, 1);
                index = null;
                redenizarTarefasDia(local, tarefasDia);
            }
        }
    }
    document.getElementById('removerTarefa').value = null;
}

function redenizarTarefasFaculdade(local) {
    local.innerHTML = null;
    for (t of tarefasFaculdade) {
        var ul = document.createElement('ul');
        var li = document.createElement('li')
        var conteudo = document.createTextNode(t)
        local.appendChild(ul);
        ul.appendChild(li)
        li.appendChild(conteudo)
    }
}

function redenizarTarefasDia(local) {
    local.innerHTML = null;
    for (t of tarefasDia) {
        var ul = document.createElement('ul');
        var li = document.createElement('li')
        var conteudo = document.createTextNode(t)
        local.appendChild(ul);
        ul.appendChild(li)
        li.appendChild(conteudo)
    }
}