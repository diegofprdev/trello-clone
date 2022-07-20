const divFullContentPage = document.getElementById('full-content-page');
const formNewTask = document.getElementById('form-new-task');
const selectStatusTask = document.getElementById('status-task');

export const showFormTaskWithBtnsColumnsStatus = ({ btnsColumnsStatus, value = '0', disabled = true } = {}) => {

    for (let indexElement = 0; indexElement < btnsColumnsStatus.length; indexElement++) {
        const element = btnsColumnsStatus[indexElement];
        element.addEventListener('click', function () {
            selectStatusTask.value = value;
            selectStatusTask.disabled = disabled;
            formNewTask.classList.replace('hidden', 'inline-block');
            divFullContentPage.style.filter = 'blur(8px)';
        });
    }

}