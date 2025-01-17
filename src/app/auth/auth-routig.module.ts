import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SinginComponent } from './pages/singin/singin.component';

const routes : Routes = [
  {
    path: '',
    children : [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'singIn',
        component: SinginComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
      
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports : [
    RouterModule
  ]
})
export class AuthRoutigModule { }
