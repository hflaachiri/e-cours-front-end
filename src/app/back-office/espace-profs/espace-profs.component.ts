import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CoursService} from '../services/cours.service';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CreateEnseignantComponent} from '../create-enseignant/create-enseignant.component';
import {CreateLessonComponent} from '../create-lesson/create-lesson.component';

@Component({
  selector: 'app-espace-profs',
  templateUrl: './espace-profs.component.html',
  styleUrls: ['./espace-profs.component.scss']
})
export class EspaceProfsComponent implements OnInit {

  $lessons: Observable<Array<any>>;

  constructor(
    private coursService: CoursService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  displayedColumns: string[] = ['name', 'schoolSubject', 'domain', 'professor', 'icons'];

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void{
    this.$lessons = this.coursService.getCours(undefined, undefined, undefined);
  }

  updatelesson(data: any): void{
    const dialogRef = this.dialog.open(CreateLessonComponent, {
      width: '700px',
      maxWidth: '50%',
      data
    });
    dialogRef.afterClosed().subscribe(
      lesson => {
        if (lesson) {
          this.coursService.updateCours(lesson.id, {
            name: lesson.name,
            schoolSubject: lesson.schoolSubject,
            domain: lesson.domain,
            videoLink: lesson.videoLink,
            documentsLinks: lesson.documentsLinks,
            owners: lesson.owners,
            description: lesson.description,
          }).subscribe(
            sect => {

            },
            error => {
              this.snackBar.open('Vous n\'avez pas l\'autorisation pour modifier ce cours', 'ok', { duration: 10000});
            },
            () => {
              this.refresh();
            }
          );
        }
      }
    );
  }

  createlesson(): void{
    const dialogRef = this.dialog.open(CreateLessonComponent, {
      width: '700px',
      maxWidth: '50%',
    });
    dialogRef.afterClosed().subscribe(
      lesson => {
        if (lesson) {
          this.coursService.createCours({
            lesson: lesson.id,
            name: lesson.name,
            schoolSubject: lesson.schoolSubject,
            domain: lesson.domain,
            videoLink: lesson.videoLink,
            documentsLinks: lesson.documentsLinks,
            owners: lesson.owners,
            description: lesson.description,
          }).subscribe(
            sect => {

            },
            error => {
              this.snackBar.open('Vous n\'avez pas l\'autorisation pour créer ce cours', 'ok', { duration: 10000});
            },
            () => {
              this.refresh();
            }
          );
        }
      }
    );
  }

  deletelesson(id: string): void{
    this.coursService.deleteCours(id).subscribe(
      sect => {

      },
      error => {
        this.snackBar.open('Vous n\'avez pas l\'autorisation pour supprimer ce cours', 'ok', { duration: 3000});
      },
      () => {
        this.refresh();
      }
    );

  }

}
