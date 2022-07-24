import { dateFormatter, hourFormatter } from '../../helpers/dateFormatter.js';

const CardTask = ({ task = {} } = {}) => {

    return `<div style="cursor:grab;" id="${task.id}" status="${task.status}" draggable="true" ondragstart="dragStart(event)" ondragleave="dragLeave(event)" class="bg-slate-900 my-6 mx-1 p-4 rounded-lg">
    <p>${task.title}</p>
    <p class="text-sm mt-2 text-slate-400">${task.description}</p>
    <div class="flex gap-2 mt-3">
        <p class="text-xs text-indigo-500 pt-1">
            <i class="fa-regular fa-calendar"></i>
            ${dateFormatter({ date: task.date })}
        </p>
        <p class="text-xs text-yellow-400 pt-1">
            <i class="fa-regular fa-clock"></i>
            ${hourFormatter({ date: task.date })}
        </p>
        <button onclick="getTaskDOM('${task.id}')" class="bg-violet-700 px-2 py-1 text-xs rounded-md">
            Detail
        </button>
    </div>
    <div class="flex justify-between mt-3">
        <div class="flex gap-2">
            <button onclick="updateTaskDOM('${task.id}')" class="py-1 px-2 text-white text-xs bg-blue-700 rounded-md">
                Edit
            </button>
            <button onclick="deleteTaskDOM('${task.id}','${task.title}')" class="bg-rose-600 px-2 py-1 text-xs rounded-md">
                Delete
            </button>
        </div>
        <p class="text-lime-500 text-xs pt-1">
            <i class="fa-solid fa-user"></i>
            ${task.user}
        </p>
    </div>
</div>`;
}

export default CardTask;