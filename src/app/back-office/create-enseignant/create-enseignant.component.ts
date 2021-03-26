import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-enseignant',
  templateUrl: './create-enseignant.component.html',
  styleUrls: ['./create-enseignant.component.scss']
})
export class CreateEnseignantComponent implements OnInit {

  createForm: FormGroup = new FormGroup({
    id: new FormControl(),
    lastName: new FormControl(undefined, [Validators.required]),
    firstName: new FormControl(undefined, [Validators.required]),
    email: new FormControl(undefined, [Validators.required]),
    password: new FormControl(undefined, [Validators.required]),
  });


  constructor(
    @Inject(MAT_DIALOG_DATA) public data
  ) {
  }

  ngOnInit(): void {
    if (this.data) {
      this.createForm.patchValue(this.data);
    }
  }

}
