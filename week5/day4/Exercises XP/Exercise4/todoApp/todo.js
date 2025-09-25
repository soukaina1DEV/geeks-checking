export class Todolist {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  markTaskAsCompleted(task) {
    this.tasks = this.tasks.map((t) =>
      t.title === task ? { ...t, completed: true } : t
    );
  }

  getTasks() {
    return this.tasks;
  }
}
