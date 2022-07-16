const btnsNewTask = document.getElementsByName('btn-new-task');
const btnsNewTaskToDo = document.getElementsByName('new-task-to-do');
const btnsNewTaskInProgress = document.getElementsByName('new-task-in-progress');
const btnsNewTaskInReview = document.getElementsByName('new-task-in-review');
const btnNewTaskDone = document.getElementsByName('new-task-done');
const btnCloseFormNewTask = document.getElementById('close-form-create-task');
const divFullContentPage = document.getElementById('full-content-page');
const formNewTask = document.getElementById('form-new-task');
const selectStatusTask = document.getElementById('status-task');

for (let indexElement = 0; indexElement < btnsNewTask.length; indexElement++) {
    const element = btnsNewTask[indexElement];
    element.addEventListener('click', function () {
        selectStatusTask.value = '0'
        selectStatusTask.disabled = false;
        formNewTask.classList.replace('hidden', 'inline-block');
        divFullContentPage.style.filter = 'blur(8px)';
    });
}

for (let indexElement = 0; indexElement < btnsNewTaskToDo.length; indexElement++) {
    const element = btnsNewTaskToDo[indexElement];
    element.addEventListener('click', function () {
        selectStatusTask.value = '0'
        selectStatusTask.disabled = true;
        formNewTask.classList.replace('hidden', 'inline-block');
        divFullContentPage.style.filter = 'blur(8px)';
    });
}

for (let indexElement = 0; indexElement < btnsNewTaskInProgress.length; indexElement++) {
    const element = btnsNewTaskInProgress[indexElement];
    element.addEventListener('click', function () {
        selectStatusTask.value = '1';
        selectStatusTask.disabled = true;
        formNewTask.classList.replace('hidden', 'inline-block');
        divFullContentPage.style.filter = 'blur(8px)';
    });
}

for (let indexElement = 0; indexElement < btnsNewTaskInReview.length; indexElement++) {
    const element = btnsNewTaskInReview[indexElement];
    element.addEventListener('click', function () {
        selectStatusTask.value = '2';
        selectStatusTask.disabled = true;
        formNewTask.classList.replace('hidden', 'inline-block');
        divFullContentPage.style.filter = 'blur(8px)';
    });
}

for (let indexElement = 0; indexElement < btnNewTaskDone.length; indexElement++) {
    const element = btnNewTaskDone[indexElement];
    element.addEventListener('click', function () {
        selectStatusTask.value = '3';
        selectStatusTask.disabled = true;
        formNewTask.classList.replace('hidden', 'inline-block');
        divFullContentPage.style.filter = 'blur(8px)';
    });
}

btnCloseFormNewTask.addEventListener('click', function () {
    formNewTask.classList.replace('inline-block', 'hidden');
    divFullContentPage.style.filter = 'none';
})