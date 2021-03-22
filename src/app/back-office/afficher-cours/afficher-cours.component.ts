import {Component, OnInit} from '@angular/core';
import {CoursService} from '../services/cours.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-afficher-cours',
  templateUrl: './afficher-cours.component.html',
  styleUrls: ['./afficher-cours.component.scss']
})
export class AfficherCoursComponent implements OnInit {

  coursId;
  lesson: any;

  constructor(
    private coursService: CoursService,
    private route: ActivatedRoute,
  ) {
    this.coursId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.coursService.getCoursById(this.coursId).subscribe(
      (cours) => {
        this.lesson = cours;
      }
    );
  }

}
