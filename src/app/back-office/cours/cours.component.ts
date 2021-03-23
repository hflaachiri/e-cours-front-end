import {Component, OnInit} from '@angular/core';
import {CoursService} from '../services/cours.service';
import { Observable} from 'rxjs';
import {ThemesService} from '../services/themes.service';
import {EnseignantsService} from '../services/enseignants.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {

  $cours: Observable<Array<any>>;
  $themes: Observable<Array<any>>;
  $enseignants: Observable<Array<any>>;
  searchFormGroup: FormGroup = new FormGroup({
    theme: new FormControl(),
    enseignant: new FormControl(),
    date: new FormControl()
  });

  constructor(
    private coursService: CoursService,
    private themesService: ThemesService,
    private enseignantsService: EnseignantsService
  ) { }


  ngOnInit(): void {
    this.$cours = this.coursService.getCours(undefined, undefined, undefined);
    this.$themes = this.themesService.getThemes();
    this.$enseignants = this.enseignantsService.getEnseignants();
    this.searchFormGroup.valueChanges.subscribe(
      (formValue) => {
        this.$cours = this.coursService.getCours(formValue.theme, formValue.enseignant, formValue.date);
      }
    );
  }

}
