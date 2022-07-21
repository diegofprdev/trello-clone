import { getId } from '../helpers/generateId.js';

const TASKS = JSON.parse(localStorage.getItem('tasks')) || [];

export const actions = {

    getTasks: function () {
        const tasksToDo = TASKS.filter(task => task.status === '0');
        const tasksInProgress = TASKS.filter(task => task.status === '1');
        const tasksInReview = TASKS.filter(task => task.status === '2');
        const tasksDone = TASKS.filter(task => task.status === '3');

        return [
            tasksToDo,
            tasksInProgress,
            tasksInReview,
            tasksDone
        ]
    },
    createTask: function ({ newTask = {} } = {}) {
        return new Promise((resolve, reject) => {
            newTask.id = getId();
            TASKS.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(TASKS));
            resolve(TASKS.filter(task => task.status === newTask.status))
        });
    },
    updateStatusTask: function ({ id = '', status = '0'} = {}) {
        const task = TASKS.find(task => task.id === id);
        const taskIndex = TASKS.indexOf(task);
        task.status = status;
        TASKS[taskIndex] = task;
        localStorage.setItem('tasks', JSON.stringify(TASKS));
    }
}

