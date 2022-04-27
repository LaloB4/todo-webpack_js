import { todoList } from "../";
import { Todo } from "../classes";

const ulTask = document.querySelector('.todo-list');
const inputUser = document.querySelector('.new-todo');
const removeCompletedButton = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const anchorFilters = document.querySelectorAll('.filtro');

export const createHtmlTask = (task) => {
    const taskHtml = `<li class="${(task.completed) ? "completed" : ""}" data-id=${task.id}>
                        <div class="view">
                            <input class="toggle" type="checkbox" ${(task.completed) ? "checked" : ""}>
                            <label>${task.task}</label>
                            <button class="destroy"></button>
                        </div>
                        <input class="edit" value="Create a TodoMVC template">
                    </li>`;

     const div = document.createElement("div");
     div.innerHTML = taskHtml;
     ulTask.append(div.firstElementChild);
     return div.firstElementChild;
};

inputUser.addEventListener('keyup',(event) =>{
    if(event.keyCode === 13 && inputUser.value.length > 0) {
        const newTask = new Todo(inputUser.value);
        todoList.addTask(newTask);
        createHtmlTask(newTask);
        inputUser.value = '';
        console.log(todoList);
    }
});

ulTask.addEventListener("click",(event) => {
    const elementName = event.target.localName;
    const todoElement = event.target.parentElement.parentElement;
    const todoId = todoElement.getAttribute('data-id');
    console.log(elementName);
    if(elementName.includes('input')) {
        todoList.updateTaskAsCompleted(todoId);
        todoElement.classList.toggle('completed');
    } else if(elementName.includes('button')) {
        todoList.removeTask(todoId);
        todoElement.remove();
    }
});

removeCompletedButton.addEventListener("click", (event) => {
    const completedTasks = document.querySelectorAll('.completed');
    console.log(completedTasks);
    if(completedTasks) {
        completedTasks.forEach(task => { task.remove()});
        todoList.removeAllCompleted();
    }
});

ulFilters.addEventListener("click", (event) => {

    const filterElement = event.target.text;
    if (!filterElement) {return;}
    anchorFilters.forEach(element => {
        element.classList.remove('selected');
    });
    event.target.classList.add('selected');

    for(const element of ulTask.children) {
        element.classList.remove('hidden');
        const completed = element.classList.contains('completed');
        switch(filterElement){
            case 'Pendientes':
                if(completed) {
                    element.classList.add('hidden');
                }
                break;

            case 'Completados':
                if(!completed) {
                    element.classList.add('hidden');
                }
                break;

        }
    }

});