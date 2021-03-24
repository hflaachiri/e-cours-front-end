import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NewAccountService, SignUpForm} from '../services/new-account.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {
  type = new FormControl('student');
  newAccountForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    schoolYear: new FormControl(),
    site: new FormControl(),
  });


  constructor(
    private newAccountService: NewAccountService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.type.valueChanges.subscribe(
      (value) => {

      }
    );
  }

  singUp(): void {
    const signupForm: SignUpForm = this.newAccountForm.value;

    if (this.type.value === 'student') {
      signupForm.site = {
        name: this.newAccountForm.value.site
      };
      this.newAccountService.signup(signupForm).subscribe(
        (message) => {
          this.snackBar.open('Votre compte a été enregistrer! un mail vient d\'être envoyer à votre adresse mail', 'ok', {
            duration: 10000,
          });
        },
        (error) => {
          this.snackBar.open('Une erreur est survenue lors du création du compte', 'ok', {
            duration: 10000,
          });
        }
      );
    } else {
      this.newAccountService.signupProfessor(signupForm).subscribe(
        (message) => {
          this.snackBar.open('Votre compte a été enregistrer! un mail vient d\'être envoyer à votre adresse mail', 'ok', {
            duration: 10000,
          });
        },
        (error) => {
          this.snackBar.open('Une erreur est survenue lors du création du compte', 'ok', {
            duration: 10000,
          });
        }
      );
    }
  }
}
