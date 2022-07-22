import { actions } from './actions.js';
import { updateTaskForStatus } from './resources/DOM.js';

const formCreateTask = document.getElementById('create-task');

const { createTask, getTasks } = actions;

window.addEventListener('load', function(e) {
    e.preventDefault();

    const tasks = getTasks();

    tasks.forEach(({ tasks, status }) => {
        updateTaskForStatus({ tasks, status });
    })
});

formCreateTask.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const task = {
        title: formData.get('title'),
        description: formData.get('description'),
        user: formData.get('user'),
        status: formData.get('status'),
        date: formData.get('date')
    }

    createTask({ newTask: task })
        .then(tasks => {
            updateTaskForStatus({ tasks, status: task.status })
        });
});









