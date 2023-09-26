import { Component } from '@angular/core';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-users-delete',
  templateUrl: './users-delete.component.html',
  styleUrls: ['./users-delete.component.css']
})
export class UsersDeleteComponent {
  
  userIdToDelete: string = '';

  constructor(private usersService: UsersService) {}

  deleteUser() {
    if (!this.userIdToDelete) {
      console.error('User ID is required.');
      return;
    }

    this.usersService.deleteUser(this.userIdToDelete).subscribe(
        () => {
          alert('User deleted successfully');
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
  }

}
