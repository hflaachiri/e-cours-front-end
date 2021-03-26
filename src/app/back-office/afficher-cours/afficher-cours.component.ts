import {Component, OnInit} from '@angular/core';
import {CoursService} from '../services/cours.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {CreateEnseignantComponent} from '../create-enseignant/create-enseignant.component';
import {ForumCoursComponent} from '../forum-cours/forum-cours.component';
import {SafePipe} from "../../safe.pipe";

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
    private dialog: MatDialog,
    private safe: SafePipe
  ) {
    this.coursId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.coursService.getCoursById(this.coursId).subscribe(
      (cours) => {
        this.lesson = cours;
        this.lesson.videoLink = this.safe.transform('https://www.youtube.com/embed/' + this.lesson.videoLink.split('=', 2)[1]);
      }
    );
  }

  afficherForum(): void{
    const dialogRef = this.dialog.open(ForumCoursComponent, {
      width: '700px',
      maxWidth: '50%',
    });
  }

}
