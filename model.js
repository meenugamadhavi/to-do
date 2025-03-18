//for Single task
class Task {
  #title;
  #createdAt;
  #status;
  constructor(title) {
    this.#title = title;
    this.#status = false;
    this.#createdAt = new Date();
  }
}
// TaskManager: this is for manage Tasks(add, update ,delete)
class Todo {
  #id;
  #tasks;

  constructor() {
    this.#tasks = [];
  }

  addTask() {}
  deleteTask(id) {}
  updateTask(id) {}
  getTasks() {}
}
