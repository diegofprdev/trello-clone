import { actions } from '../actions.js';
import { updateTaskForStatus } from '../resources/DOM.js';

const { getTasks } = actions;

window.addEventListener('load', function(e) {
    e.preventDefault();

    const tasks = getTasks();

    tasks.forEach(({ tasks, status }) => {
        updateTaskForStatus({ tasks, status });
    })
});