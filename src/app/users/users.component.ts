import {Component, OnInit} from '@angular/core';
import {UsersService} from '../services/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  
  users: any[] = [];
  private subscription: Subscription;
  
  constructor(private usersService: UsersService) {
  }
  
  ngOnInit() {
    this.subscription = this.usersService.getAllUsers().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.log(error);
      }
      );
  }

}
