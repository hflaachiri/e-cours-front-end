import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EnseignantsService} from '../services/enseignants.service';

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.scss']
})
export class CreateLessonComponent implements OnInit {

  $enseignants: Observable<Array<any>>;
  createForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(undefined, [Validators.required]),
    schoolSubject: new FormControl(undefined, [Validators.required]),
    domain: new FormControl(undefined, [Validators.required]),
    description: new FormControl(undefined, [Validators.required]),
    videoLink: new FormControl(undefined ),
    documentsLinks: new FormControl(undefined ),
    owners: new FormControl(undefined, [Validators.required]),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private enseignantService: EnseignantsService
  ) { }

  ngOnInit(): void {
    this.$enseignants = this.enseignantService.getEnseignants();
    if (this.data) {
      this.createForm.setValue({
        id: this.data.id,
        name: this.data.name,
        schoolSubject: this.data.schoolSubject,
        domain: this.data.domain,
        videoLink: this.data.videoLink,
        documentsLinks: this.data.documentsLinks,
        owners: this.data.owners,
        description: this.data.description,
      });
    }
  }

}
