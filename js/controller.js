import { View } from "./view.js";

class Todo {
  createTask() {}
  deleteTasks() {}
}

class Controller {
  task;
  view;
  constructor(task, view) {
    this.task = task;
    this.view = view;
  }

  error() {
    console.log("Invalid Task Id");
    this.start();
  }

  ListOfOptions() {
    return {
      1: this.task.createTask,
      2: this.task.updateTask,
      3: this.task.deleteTasks,
    };
  }

  start() {
    const userChoice = +prompt("Enter Your Choice");
    const tasks = this.ListOfOptions();
    console.log(tasks);
    if (!(userChoice in tasks)) this.error();
  }
}

const todo = new Todo();
const view = new View();

const task = new Controller(todo, view);
task.start();
