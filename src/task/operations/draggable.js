function dragStart(e) {
    e.dataTransfer.setData('task', JSON.stringify({ id : e.target.id, status : e.target.getAttribute('status') }));
    e.target.style.cursor = 'grabbing';
}

function drop(e) {

    e.preventDefault();

    const newStatus = e.target.getAttribute('status');
    const element = e.dataTransfer.getData('task');
    const { id, status } = JSON.parse(element);
    const task = document.getElementById(id);

    task.setAttribute('status', newStatus);
    e.target.appendChild(task);

    const valueTotalTaskOldStatus = document.getElementsByName(`total-task-${status}`);
    const valueTotalTaskNewStatus = document.getElementsByName(`total-task-${newStatus}`);

    for (let indexElement = 0; indexElement < valueTotalTaskOldStatus.length; indexElement++) {
        const element = valueTotalTaskOldStatus[indexElement];
        const value = Number(element.textContent.toString());
        element.textContent = value - 1;
    }

    for (let indexElement = 0; indexElement < valueTotalTaskNewStatus.length; indexElement++) {
        const element = valueTotalTaskNewStatus[indexElement];
        const value = Number(element.textContent.toString());
        element.textContent = value + 1;
    }

    window.parent.updateStatusTask({ id, status : newStatus });

}

function allowDrop(e) {
    e.preventDefault();
}

function dragLeave(e) {
    e.preventDefault();
    e.target.style.cursor = 'grab';
}


