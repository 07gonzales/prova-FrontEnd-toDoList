function adicionarTarefa() {
    // Obtém os valores dos campos de entrada
    const descricao = document.getElementById('descricao').value;
    const status = document.getElementById('status').value;

    // Verifica se a descrição está preenchida
    if (descricao.trim() === '') {
        alert('Por favor, insira uma descrição para a tarefa.');
        return;
    }

    // Cria um novo item de lista (li)
    const novaTarefa = document.createElement('li');

    // Cria o checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            novaTarefa.style.backgroundColor = 'lightgreen';
        } else {
            novaTarefa.style.backgroundColor = '';
        }
        atualizarContagem();
    });

    // Adiciona o checkbox e o texto da tarefa
    novaTarefa.appendChild(checkbox);
    novaTarefa.appendChild(document.createTextNode(` ${descricao} - ${status === 'status' ? 'Pendente' : 'Concluída'}`));

    // Cria o botão de excluir
    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.addEventListener('click', () => {
        novaTarefa.remove();
        atualizarContagem();
    });

    // Cria o botão de editar
    const botaoEditar = document.createElement('button');
    botaoEditar.textContent = 'Editar';
    botaoEditar.addEventListener('click', () => {
        const novaDescricao = prompt('Edite a descrição da tarefa:', descricao);
        if (novaDescricao !== null && novaDescricao.trim() !== '') {
            novaTarefa.childNodes[1].textContent = ` ${novaDescricao} - ${status === 'status' ? 'Pendente' : 'Concluída'}`;
        }
    });

    // Adiciona os botões ao item da tarefa
    novaTarefa.appendChild(botaoExcluir);
    novaTarefa.appendChild(botaoEditar);



    // Adiciona a nova tarefa à lista de tarefas
    const listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.appendChild(novaTarefa);

    // Limpa os campos de entrada
    document.getElementById('descricao').value = '';
    document.getElementById('status').value = 'status';

    // Atualiza a contagem de tarefas
    atualizarContagem();
}

function atualizarContagem() {
    const listaTarefas = document.getElementById('listaTarefas').children;
    let pendentes = 0;
    let concluidas = 0;

    // Conta as tarefas pendentes e concluídas
    for (let tarefa of listaTarefas) {
        const checkbox = tarefa.querySelector('input[type="checkbox"]');
        if (checkbox && checkbox.checked) {
            concluidas++;
        } else {
            pendentes++;
        }
    }

    // Atualiza os valores na interface
    document.getElementById('pendentes').textContent = pendentes;
    document.getElementById('concluidas').textContent = concluidas;
}