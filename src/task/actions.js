const TASKS = [];
let ID = 0;

export const actions = {

    createTask: function ({ newTask = {} } = {}) {
        return new Promise((resolve, reject) => {
            newTask.id = ID;
            TASKS.push(newTask);
            ID += 1;
            resolve(TASKS.filter(task => task.status === newTask.status))
        });
    },
    updateStatusTask: function ({ id = '', status = '0'} = {}) {
        const task = TASKS.find(task => task.id === Number(id));
        const taskIndex = TASKS.indexOf(task);
        task.status = status;
        TASKS[taskIndex] = task;
    }
}

