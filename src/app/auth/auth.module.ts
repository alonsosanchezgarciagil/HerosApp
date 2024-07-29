import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SinginComponent } from './pages/singin/singin.component';
import { AuthRoutigModule } from './auth-routig.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LoginComponent,
    SinginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutigModule,
    MaterialModule
  ]
})
export class AuthModule { }
