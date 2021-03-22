import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

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
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    if (this.authService.isTokenValid()) {
      this.router.navigateByUrl('back-office/dashboard').then();
    }
  }


  login(): void {
    this.authService.login(this.loginForm.value).subscribe(
      (tokenContainer) => {
        this.authService.saveToken(tokenContainer.accessToken);
        this.router.navigateByUrl('back-office/dashboard').then();
      }
    );
  }
}
