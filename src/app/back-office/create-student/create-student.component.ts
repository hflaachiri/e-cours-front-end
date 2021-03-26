import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {SitesService} from '../services/sites.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {

  $sites: Observable<Array<any>>;
  createForm: FormGroup = new FormGroup({
    id: new FormControl(),
    lastName: new FormControl(undefined, [Validators.required]),
    firstName: new FormControl(undefined, [Validators.required]),
    email: new FormControl(undefined, [Validators.required]),
    schoolYear: new FormControl(undefined, [Validators.required]),
    site: new FormControl(undefined, [Validators.required]),
    password: new FormControl(undefined, [Validators.required]),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private siteService: SitesService
  ) { }

  ngOnInit(): void {
    this.$sites = this.siteService.getSites();
    if (this.data) {
      this.createForm.patchValue(this.data);
    }
  }

}
