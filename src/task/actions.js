import { getId } from '../helpers/generateId.js';

const TASKS = JSON.parse(localStorage.getItem('tasks')) || [];

export const actions = {

    getTasks: function () {
        const tasksToDo = TASKS.filter(task => task.status === '0');
        const tasksInProgress = TASKS.filter(task => task.status === '1');
        const tasksInReview = TASKS.filter(task => task.status === '2');
        const tasksDone = TASKS.filter(task => task.status === '3');

        return [
            {
                tasks: tasksToDo,
                status : '0'
            },
            {
                tasks: tasksInProgress,
                status : '1'
            },
            {
                tasks: tasksInReview,
                status : '2'
            },
            {
                tasks: tasksDone,
                status : '3'
            },
        ]
    },
    getTask: function({ id = ''} = {}) {
        return TASKS.find(task => task.id === id);
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
    },
    deleteTask: function({ id = ''} = {}) {
        const task = TASKS.find(task => task.id === id);
        let status = '0';
        if(task) {
            const taskIndex = TASKS.indexOf(task);
            TASKS.splice(taskIndex, 1);
            localStorage.setItem('tasks', JSON.stringify(TASKS));
            status = task.status;
        }

        const tasks = TASKS.filter(task => task.status === status);

        return { tasks , status };
    }
}

