import { showFormTaskWithBtnsColumnsStatus } from './resources/DOM.js';

const btnsNewTask = document.getElementsByName('btn-new-task');
const btnsNewTaskToDo = document.getElementsByName('new-task-to-do');
const btnsNewTaskInProgress = document.getElementsByName('new-task-in-progress');
const btnsNewTaskInReview = document.getElementsByName('new-task-in-review');
const btnNewTaskDone = document.getElementsByName('new-task-done');
const btnCloseFormNewTask = document.getElementById('close-form-create-task');
const divFullContentPage = document.getElementById('full-content-page');
const formNewTask = document.getElementById('form-new-task');

showFormTaskWithBtnsColumnsStatus({
    btnsColumnsStatus : btnsNewTask,
    value : '0',
    disabled : false
});

showFormTaskWithBtnsColumnsStatus({
    btnsColumnsStatus : btnsNewTaskToDo,
    value : '0',
    disabled : false
});

showFormTaskWithBtnsColumnsStatus({
    btnsColumnsStatus : btnsNewTaskInProgress,
    value : '1',
    disabled : false
});

showFormTaskWithBtnsColumnsStatus({
    btnsColumnsStatus : btnsNewTaskInReview,
    value : '2',
    disabled : false
});

showFormTaskWithBtnsColumnsStatus({
    btnsColumnsStatus : btnNewTaskDone,
    value : '3',
    disabled : false
});

btnCloseFormNewTask.addEventListener('click', function () {
    formNewTask.classList.replace('inline-block', 'hidden');
    divFullContentPage.style.filter = 'none';
});