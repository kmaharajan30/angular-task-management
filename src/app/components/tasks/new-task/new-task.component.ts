import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  standalone: false,
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter();
  // @Output() addTask = new EventEmitter<NewTask>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  constructor(private taskService: TasksService) {}

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    // this.addTask.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   date: this.enteredDate,
    // });
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        date: this.enteredDate,
        summary: this.enteredSummary,
      },
      this.userId
    );
    this.onCancel();
  }
}
