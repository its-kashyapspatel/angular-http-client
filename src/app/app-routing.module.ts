import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {UsersCreateComponent} from "./users-create/users-create.component";
import {UsersUpdateComponent} from "./users-update/users-update.component";
import {UsersDeleteComponent} from "./users-delete/users-delete.component";

const routes: Routes = [
  {
    path: 'getall',
    component: UsersComponent
  },
  {
    path: 'create',
    component: UsersCreateComponent
  },
  {
    path: 'update',
    component: UsersUpdateComponent
  },
  {
    path: 'delete',
    component: UsersDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
