//for Single task
class Task {
  #id;
  #title;
  #createdDate;
  #time;
  #status;

  constructor(title, id) {
    this.#id = id;
    this.#title = title;
    this.#status = false;
  }

  static getDate() {
    const today = new Date();
    return `${today.getFullYear()}:${today.getMonth() + 1}:${today.getDay()}`;
  }

  static getCurrentTime() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  }

  get taskDetails() {
    this.#time = Task.getCurrentTime();
    this.#createdDate = Task.getDate();
    return {
      id: this.#id,
      title: this.#title,
      status: this.#status,
      createdDate: this.#createdDate,
      time: this.#time,
    };
  }
}
// TaskManager: this is for manage Tasks(add, update ,delete)
class Todo {
  #id;
  #tasks;

  constructor() {
    this.#tasks = [];
    this.#id = 0;
  }

  addTask(title) {
    this.#id = this.#tasks.length + 1;
    const task = new Task(title, this.#id);
    const taskDetails = task.taskDetails;
    this.#tasks.push(taskDetails);
  }
  deleteTask(id) {}
  updateTask(id) {}
  getTasks() {
    return this.#tasks;
  }
}

const t1 = new Todo();
t1.addTask("work1");
t1.addTask("work2");
t1.addTask("work3");
t1.addTask("work4");
console.log(t1.getTasks());
