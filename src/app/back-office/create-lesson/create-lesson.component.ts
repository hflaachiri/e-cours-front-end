import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EnseignantsService} from '../services/enseignants.service';
import {SchoolSubjectService} from '../services/school-subject.service';
import {DomainsService} from '../services/domains.service';

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.scss']
})
export class CreateLessonComponent implements OnInit {

  $enseignants: Observable<Array<any>>;
  $schoolSubjects: Observable<Array<any>>;
  $domains: Observable<Array<any>>;

  createForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(undefined, [Validators.required]),
    schoolSubject: new FormControl(undefined),
    domain: new FormControl(undefined),
    description: new FormControl(undefined),
    videoLink: new FormControl(undefined ),
    documentsLinks: new FormControl(undefined ),
    owners: new FormControl(undefined, [Validators.required]),
    date: new FormControl(undefined, [Validators.required]),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private enseignantService: EnseignantsService,
    private schoolSubjectService: SchoolSubjectService,
    private domainService: DomainsService,
  ) { }

  ngOnInit(): void {
    this.$enseignants = this.enseignantService.getEnseignants();
    this.$schoolSubjects = this.schoolSubjectService.getSchoolSubjects();
    this.$domains = this.domainService.getDomains();
    if (this.data) {
      this.createForm.patchValue(this.data);
    }
  }

}
