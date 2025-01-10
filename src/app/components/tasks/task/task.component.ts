import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

interface Task {
  id: string;
  userId: string;
  dueDate: string;
  title: string;
  summary: string;
}
@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  constructor(private taskService: TasksService) {}
  // @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    // this.complete.emit(this.task.id);
    this.taskService.removeTask(this.task.id);
  }
}
