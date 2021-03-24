import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CoursService} from '../services/cours.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  $cours: Observable<Array<any>>;
  constructor(
    private coursService: CoursService,
  ) { }

  ngOnInit(): void {
    this.$cours = this.coursService.getCours(undefined, undefined, undefined);
  }

}
