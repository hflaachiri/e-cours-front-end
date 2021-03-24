import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {AuthenticationRoutingModule} from './authentication-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from '../core/core.module';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { AuthenticationTemplateComponent } from './authentication-template/authentication-template.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { NewAccountComponent } from './new-account/new-account.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [LoginComponent, AuthenticationTemplateComponent, NewAccountComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatSnackBarModule,
    MatRadioModule
  ]
})
export class AuthenticationModule { }
