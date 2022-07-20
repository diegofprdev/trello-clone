import CardTask from '../../components/CardTask/index.js';

export function updateTaskForStatus({ tasks = [], status = '0' }) {

    let divListOfTask = document.getElementById(`tasks-list-${status}`);
    const spanTotalTasks = document.getElementsByName(`total-task-${status}`);
    const divFullContentPage = document.getElementById('full-content-page');
    const formNewTask = document.getElementById('form-new-task');

    divListOfTask.innerHTML = '';

    tasks.forEach(task => {
        const elementTask = CardTask({ task });
        divListOfTask.innerHTML += elementTask;
    });

    for (let indexElement = 0; indexElement < spanTotalTasks.length; indexElement++) {
        const element = spanTotalTasks[indexElement];
        element.textContent = tasks.length;
    }

    formNewTask.classList.replace('inline-block', 'hidden');
    divFullContentPage.style.filter = 'none';

}