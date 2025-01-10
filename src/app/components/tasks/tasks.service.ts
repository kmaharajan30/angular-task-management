import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../../json/dummy-tasks';
import { NewTask } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = DUMMY_TASKS;

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }
  addTask(taskData: NewTask, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }
  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }
}
