document.getElementById('agregarTarea').addEventListener('click', function() {
    const tareaInput = document.getElementById('tareaInput');
    const tareaTexto = tareaInput.value.trim();

    if (tareaTexto) {
        const li = document.createElement('li');
        li.textContent = tareaTexto;

        const botonCheck = document.createElement('button');
        botonCheck.textContent = 'Check';
        botonCheck.classList.add('check');
        botonCheck.onclick = function() {
            li.classList.toggle('checked');
            actualizarContadores();
        };

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('eliminar');
        botonEliminar.onclick = function() {
            li.remove();
            actualizarContadores();
        };

        li.appendChild(botonCheck);
        li.appendChild(botonEliminar);
        document.getElementById('listaTareas').appendChild(li);
        tareaInput.value = '';
        actualizarContadores();
    }
});

function actualizarContadores() {
    const tareas = document.querySelectorAll('#listaTareas li');
    const totalTareas = tareas.length;
    let tareasCompletas = 0;

    tareas.forEach(tarea => {
        if (tarea.classList.contains('checked')) {
            tareasCompletas++;
        }
    });

    document.getElementById('totalTareas').textContent = totalTareas;
    document.getElementById('tareasCompletas').textContent = tareasCompletas;
    document.getElementById('tareasIncompletas').textContent = totalTareas - tareasCompletas;
}