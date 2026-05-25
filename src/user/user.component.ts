import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {

  selectedUser = signal(DUMMY_USERS[randomUserIndex]);

get imageLink(){
  return 'assets/users/'+ this.selectedUser().avatar;
}

onSelectUser(){
  const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  this.selectedUser.set(DUMMY_USERS[randomUserIndex]);
}

}
