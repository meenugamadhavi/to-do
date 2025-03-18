export class View {
  #tasks;
  constructor(tasks) {
    this.#tasks = tasks;
  }

  displayTasks() {
    this.#tasks.forEach((task) => {
      const entires = Object.entries(task);
      entires.forEach((key, value) => {
        console.log(`${key}          : ${value}`);
      });
    });
  }
}
