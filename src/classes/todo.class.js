export class Todo {

    static createFromJson({id, task, completed, createdDate}) {
            const tempTodo = new Todo(task);
            tempTodo.id = id;
            tempTodo.completed = completed;
            tempTodo.createdDate = createdDate;
            return tempTodo;
    }

    constructor(task) {
        this.id = new Date().getTime();
        this.task = task;
        this.completed = false;
        this.createdDate = new Date();
    }

    printObject() {
        console.log(`${this.id} - ${this.task} `);
    }
}