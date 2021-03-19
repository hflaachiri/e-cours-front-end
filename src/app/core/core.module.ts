import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { EmailInputComponent } from './components/email-input/email-input.component';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [PasswordInputComponent, EmailInputComponent],
  exports: [
    PasswordInputComponent,
    EmailInputComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class CoreModule { }
