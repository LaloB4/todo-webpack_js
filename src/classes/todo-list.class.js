import { Todo } from "./todo.class";

export class TodoList {
    constructor() {
        this.getLocalStorage();
    }
    addTask(task) {
        this.todoList.push(task);
        this.saveLocalStorage();
    }
    removeTask(id) {
        for(let [index, val] of this.todoList.entries()) {
            if(val.id == id) {
                this.todoList.splice(index,1);
            }
        }
        this.saveLocalStorage();
    }
    updateTaskAsCompleted(id) {
        for(let task of this.todoList) {
            if(task.id == id) {
                task.completed = !task.completed;
                break;
            }
        }
        this.saveLocalStorage();
    }
    removeAllCompleted() {
        this.todoList = this.todoList.filter((value, index, arr) => {
            return !value.completed;
       });
       this.saveLocalStorage();
    }

    saveLocalStorage() {
        localStorage.setItem('todo',JSON.stringify(this.todoList));
    }

    getLocalStorage() {
        this.todoList = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [] ;
        this.todoList = this.todoList.map( Todo.createFromJson );
    }
}