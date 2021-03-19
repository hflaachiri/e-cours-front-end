import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {
  newAccountForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    schoolYear: new FormControl(),
    site: new FormControl()
  });


  constructor() { }

  ngOnInit(): void {
  }

  singUp(): void{
  console.log(this.newAccountForm.value);
  }
}
