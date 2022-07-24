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
    updateTask: function ({ taskUpdated = {}} = {}) {

        const task = TASKS.find(task => task.id === taskUpdated.id);
        const oldStatus = task.status;
        const newStatus = taskUpdated.status;
        const listOfTaskToRender = [];

        if(task) {
            const taskIndex = TASKS.indexOf(task);

            task.title = taskUpdated.title;
            task.description = taskUpdated.description;
            task.user = taskUpdated.user;
            task.status = taskUpdated.status;
            task.date = taskUpdated.date;

            TASKS[taskIndex] = task;
            localStorage.setItem('tasks', JSON.stringify(TASKS));

            if(oldStatus === newStatus) {

                const tasks = TASKS.filter(task => task.status === oldStatus);
                listOfTaskToRender.push({
                    tasks,
                    status : oldStatus
                })
            }
            else {

                const tasksOldStatus = TASKS.filter(task => task.status === oldStatus);
                const tasksNewStatus = TASKS.filter(task => task.status === newStatus);

                listOfTaskToRender.push({ tasks : tasksOldStatus, status : oldStatus });
                listOfTaskToRender.push({ tasks : tasksNewStatus, status : newStatus });
            }
        }

        return listOfTaskToRender;

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

