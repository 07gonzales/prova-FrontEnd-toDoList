
function adicionarTarefa() {
    const input = document.getElementById('descricao');
    const texto = input.value.trim();

    if (texto) {
        tarefas.push({ texto, concluida: false });
        input.value = '';
        atualizarLista();
    }
}

function removerTarefa(index) {
    tarefas.splice(index, 1);
    atualizarLista();
}

function marcarConcluida(index) {
    tarefas[index].concluida = !tarefas[index].concluida;
    atualizarLista();
}

function editarTarefa(index) {
    const novoTexto = prompt('Editar tarefa:', tarefas[index].texto);
    if (novoTexto !== null) {
        tarefas[index].texto = novoTexto.trim();
        atualizarLista();
    }
}
