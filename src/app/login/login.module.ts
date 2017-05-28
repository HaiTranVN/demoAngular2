import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {Routes, RouterModule} from '@angular/router';

export const routes : Routes = [
  //Khi chuyen trang toi login no se goi LoginComponent và nó render ra app.component.html
  {path:'', component : LoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }