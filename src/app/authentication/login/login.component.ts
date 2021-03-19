import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });


  constructor(
    private authService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
  }


  login(): void {
    this.authService.login(this.loginForm.value).subscribe(
      (tokenContainer) => {
        this.authService.saveToken(tokenContainer.token);
      }
    );
  }
}
