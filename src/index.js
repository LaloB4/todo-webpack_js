import { Todo, TodoList } from "./classes";
import { createHtmlTask } from "./js/component";
import "./styles.css";

export const todoList = new TodoList();

todoList.todoList.forEach(createHtmlTask);

todoList.todoList[0].printObject();