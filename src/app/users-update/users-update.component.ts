import { Component } from '@angular/core';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.css']
})
export class UsersUpdateComponent {
  selectedUserId: string = '';
  updatedUser: any = {
    name: '',
    email: '',
    phone: '',
  };

  constructor(private usersService: UsersService) {}
  
  updateUser() {
    
    if (!this.selectedUserId) {
      console.error('User ID is required.');
      return;
    }

    this.usersService.updateUser(this.selectedUserId, this.updatedUser).subscribe(
        (response) => {
          alert('User updated successfully');
        },
        (error) => {
          console.error('Error updating user:', error);
        }
      );
  }

}
