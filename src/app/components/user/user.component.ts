import {
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from '../../json/dummy-users';
import { CardComponent } from '../../shared/card/card.component';

interface User {
  id: string;
  avatar: string;
  name: string;
}

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // selectedUser = DUMMY_USERS[randomIndex];
  // get imagePath() {
  //   return `/images/users/${this.selectedUser.avatar}`;
  // }
  // signal
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => `/images/users/${this.selectedUser().avatar}`);
  // onClickUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

  // data from parent component using input
  // @Input() id!: string;
  // @Input() avatar!: string;
  // @Input() name!: string;

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath() {
    return `/images/users/${this.user.avatar}`;
  }
  onClickUser() {
    this.select.emit(this.user.id);
  }
}
