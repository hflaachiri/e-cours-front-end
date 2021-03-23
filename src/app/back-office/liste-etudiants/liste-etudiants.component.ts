import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../services/students.service';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Observable} from 'rxjs';
import {CreateStudentComponent} from '../create-student/create-student.component';
import {CreateEnseignantComponent} from '../create-enseignant/create-enseignant.component';


@Component({
  selector: 'app-liste-etudiants',
  templateUrl: './liste-etudiants.component.html',
  styleUrls: ['./liste-etudiants.component.scss']
})
export class ListeEtudiantsComponent implements OnInit {

  $students: Observable<Array<any>>;
  constructor(
    private studentService: StudentsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'schoolYear', 'site', 'icons'];

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void{
    this.$students = this.studentService.getStudents();
  }

  updateStudent(data: any): void{
    const dialogRef = this.dialog.open(CreateStudentComponent, {
      width: '700px',
      maxWidth: '50%',
      data
    });
    dialogRef.afterClosed().subscribe(
      student => {
        if (student) {
          this.studentService.updateStudent(student.id, {
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email,
            schoolYear: student.schoolYear,
            site: student.site,
          }).subscribe(
            sect => {

            },
            error => {
              this.snackBar.open('Vous n\'avez pas l\'autorisation pour modifier un étudiant', 'ok', { duration: 10000});
            },
            () => {
              this.refresh();
            }
          );
        }
      }
    );
  }

  createStudent(): void{
    const dialogRef = this.dialog.open(CreateStudentComponent, {
      width: '700px',
      maxWidth: '50%',
    });
    dialogRef.afterClosed().subscribe(
      student => {
        if (student) {
          this.studentService.createStudent({
            id: student.id,
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email,
            schoolYear: student.schoolYear,
            site: student.site,
          }).subscribe(
            sect => {

            },
            error => {
              this.snackBar.open('Vous n\'avez pas l\'autorisation pour créer un étudiant', 'ok', { duration: 10000});
            },
            () => {
              this.refresh();
            }
          );
        }
      }
    );
  }

  deleteStudent(id: string): void{
    this.studentService.deleteStudent(id).subscribe(
      sect => {

      },
      error => {
        this.snackBar.open('Vous n\'avez pas l\'autorisation pour supprimer un étudiant', 'ok', { duration: 3000});
      },
      () => {
        this.refresh();
      }
    );

  }

}
