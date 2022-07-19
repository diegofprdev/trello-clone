import { actions } from './actions.js';
import { dateFormatter, hourFormatter } from '../helpers/dateFormatter.js';
const formCreateTask = document.getElementById('create-task');

const { createTask } = actions;

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

function updateTaskForStatus({ tasks = [], status = '0' }) {

    let divListOfTask = document.getElementById(`tasks-list-${status}`);
    const spanTotalTasks = document.getElementsByName(`total-task-${status}`);
    const divFullContentPage = document.getElementById('full-content-page');
    const formNewTask = document.getElementById('form-new-task');

    divListOfTask.innerHTML = '';

    tasks.forEach(task => {
        const elementTask = `<div id=${task.id} class="bg-slate-900 my-6 mx-1 p-4 rounded-lg">
        <p>${task.title}</p>
        <p class="text-sm mt-2 text-slate-400">${task.description}</p>
        <div class="flex gap-2 mt-3">
            <p class="text-xs text-indigo-500 pt-1">
                <i class="fa-regular fa-calendar"></i>
                ${dateFormatter({ date: task.date })}
            </p>
            <p class="text-xs text-yellow-400 pt-1">
                <i class="fa-regular fa-clock"></i>
                ${hourFormatter({ date: task.date })}
            </p>
            <button class="bg-violet-700 px-2 py-1 text-xs rounded-md">
                Detail
            </button>
        </div>
        <div class="flex justify-between mt-3">
            <div class="flex gap-2">
                <button class="py-1 px-2 text-white text-xs bg-blue-700 rounded-md">
                    Edit
                </button>
                <button class="bg-rose-600 px-2 py-1 text-xs rounded-md">
                    Delete
                </button>
            </div>
            <p class="text-lime-500 text-xs pt-1">
                <i class="fa-solid fa-user"></i>
                ${task.user}
            </p>
        </div>
    </div>`;

        divListOfTask.innerHTML += elementTask;

    });

    for (let indexElement = 0; indexElement < spanTotalTasks.length; indexElement++) {
        const element = spanTotalTasks[indexElement];
        element.textContent = tasks.length;
    }

    formNewTask.classList.replace('inline-block', 'hidden');
    divFullContentPage.style.filter = 'none';

}

dateFormatter();




