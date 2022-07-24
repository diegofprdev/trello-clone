const divFormUpdateTask = document.getElementById('form-update-task');
const formUpdateTask = document.getElementById('update-task');
const btnCloseFormUpdateTask = document.getElementById('close-form-update-task');

btnCloseFormUpdateTask.addEventListener('click', function () {
    divFormUpdateTask.classList.replace('inline-block', 'hidden');
    divFullContentPage.style.filter = 'none';
});

formUpdateTask.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const task = {
        id: formData.get('id'),
        title: formData.get('title'),
        description: formData.get('description'),
        user: formData.get('user'),
        status: formData.get('status'),
        date: formData.get('date')
    }

    const listOfTaskToRender = window.parent.updateTask({ taskUpdated : task });

    listOfTaskToRender.forEach(({ tasks, status }) => {
        window.parent.updateTaskForStatusDOM({ tasks, status });
        console.log(tasks,status)
    });

    divFormUpdateTask.classList.replace('inline-block', 'hidden');
    divFullContentPage.style.filter = 'none';
});

function updateTaskDOM(id) {

    const task = window.parent.getTask({ id });

    if (task) {

        const inputsElements = formUpdateTask.getElementsByTagName('input');
        
        inputsElements['id'].value = task.id;
        inputsElements['title'].value = task.title;
        inputsElements['user'].value = task.user;
        inputsElements['date'].value = task.date;

        formUpdateTask.getElementsByTagName('textarea')[0].value = task.description;
        formUpdateTask.getElementsByTagName('select')[0].value = task.status;

        divFormUpdateTask.classList.replace('hidden', 'inline-block');
        divFullContentPage.style.filter = 'blur(8px)';

    }

}