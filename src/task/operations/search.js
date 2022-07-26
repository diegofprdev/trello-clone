import { actions } from '../actions.js';
import { updateTaskForStatus } from '../resources/DOM.js';
const { searchTasks } = actions;

const inputSearchTasks = document.getElementById('search-tasks');
const selectSearchStatusTasks = document.getElementById('search-status-task');

let interval;
let keyword = '';
let status = '-1';

inputSearchTasks.addEventListener('keyup', function (e) {

    e.preventDefault();
    keyword = e.target.value;
    status = selectSearchStatusTasks.value;

    if (!interval) {
        interval = setInterval(function () {
            const tasks = searchTasks({ keyword : keyword, status });
            tasks.forEach(({ tasks, status }) => {
                updateTaskForStatus({ tasks, status });
            });
            if (keyword === '') {
                clearInterval(interval);
                interval = undefined;
            }
        }, 500);
    }
});

