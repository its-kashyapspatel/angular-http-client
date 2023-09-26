import { Component } from '@angular/core';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent {
  newUser: any = {
    name: '',
    email: '',
    phone: '',
  };
  
  constructor(private usersService: UsersService) {
  }
  
  createUser() {
    this.usersService.createUser(this.newUser).subscribe(
        (response) => {
          alert('User created successfully');
        },
        (error) => {
          console.error('Error creating user:', error);
        }
        );
  }

}
