const divFullContentPage = document.getElementById('full-content-page');
const divModalDeleteTask = document.getElementById('modal-delete-task');
const spanTitleTaskDelete = document.getElementById('title-task-delete');
const btnCloseModalDeleteTask = document.getElementById('close-modal-delete-task');
const btnConfirmDeleteTask = document.getElementById('confirm-delete-task');
const btnCancelDeleteTask = document.getElementById('cancel-delete-task');

btnCloseModalDeleteTask.addEventListener('click', function () {
    divModalDeleteTask.classList.replace('inline-block', 'hidden');
    divFullContentPage.style.filter = 'none';
});

function deleteTaskDOM(id, title) {

    spanTitleTaskDelete.textContent = title;

    divModalDeleteTask.classList.replace('hidden', 'inline-block');
    divFullContentPage.style.filter = 'blur(8px)';

    btnCancelDeleteTask.addEventListener('click', function () {
        divModalDeleteTask.classList.replace('inline-block', 'hidden');
        divFullContentPage.style.filter = 'none';
    });

    btnConfirmDeleteTask.addEventListener('click', function () {
        const { tasks, status } = window.parent.deleteTask({ id });

        if (tasks) {
            window.parent.updateTaskForStatusDOM({ tasks, status })

            divModalDeleteTask.classList.replace('inline-block', 'hidden');
            divFullContentPage.style.filter = 'none';
        }
    });

}
