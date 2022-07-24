const divFullContentPage = document.getElementById('full-content-page');
const divModalDetailTask = document.getElementById('modal-detail-task');
const btnCloseModalDetailTask = document.getElementById('close-modal-detail-task');
const labelDetailTitleTask = document.getElementById('detail-title-task');
const labelDetailDescriptionTask = document.getElementById('detail-description-task');
const spanDetailUserTask = document.getElementById('detail-user-task');
const labelDetailStatusTask = document.getElementById('detail-status-task');
const spanDetailDateTask = document.getElementById('detail-date-task');
const spanDetailHourTask = document.getElementById('detail-hour-task');

const labelStatusTasks = {
    0: {
        label: 'To do',
        color: 'rose-500'
    },
    1: {
        label: 'ln progress',
        color: 'orange-500'
    },
    2: {
        label: 'ln review',
        color: 'sky-500'
    },
    3: {
        label: 'Done',
        color: 'green-500'
    },
}

btnCloseModalDetailTask.addEventListener('click', function () {
    divModalDetailTask.classList.replace('inline-block', 'hidden');
    divFullContentPage.style.filter = 'none';
});

function getTaskDOM(id) {

    const task = window.parent.getTask({ id });

    if (task) {

        const { label, color } = labelStatusTasks[task.status]

        labelDetailTitleTask.textContent = task.title;
        labelDetailDescriptionTask.textContent = task.description;
        spanDetailUserTask.textContent = task.user;
        labelDetailStatusTask.innerHTML = `<label 
            class="border-2 border-${color} px-2 py-1 rounded-md text-${color}">
                ${label}
            </label>`;
        spanDetailDateTask.textContent = window.parent.dateFormatterDOM({ date: task.date });
        spanDetailHourTask.textContent = window.parent.hourFormatterDOM({ date: task.date });

        divModalDetailTask.classList.replace('hidden', 'inline-block');
        divFullContentPage.style.filter = 'blur(8px)';

    }

}