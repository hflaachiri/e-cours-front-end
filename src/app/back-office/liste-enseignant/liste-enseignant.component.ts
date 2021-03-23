import {Component, OnInit} from '@angular/core';
import {Enseignant} from '../../core/models/enseignant';
import {EnseignantsService} from '../services/enseignants.service';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {CreateEnseignantComponent} from '../create-enseignant/create-enseignant.component';
import {MatSnackBar} from '@angular/material/snack-bar';

const ELEMENT_DATA: Enseignant[] = [
  {firstName: 'Albert', lastName: 'DUPONT', email: 'albert.dupont@univ-amu.fr'},
  {firstName: 'Albert', lastName: 'DUPONT', email: 'albert.dupont@univ-amu.fr'},
  {firstName: 'Albert', lastName: 'DUPONT', email: 'albert.dupont@univ-amu.fr'},
  {firstName: 'Albert', lastName: 'DUPONT', email: 'albert.dupont@univ-amu.fr'},
  {firstName: 'Albert', lastName: 'DUPONT', email: 'albert.dupont@univ-amu.fr'},
  {firstName: 'Albert', lastName: 'DUPONT', email: 'albert.dupont@univ-amu.fr'},
  {firstName: 'Albert', lastName: 'DUPONT', email: 'albert.dupont@univ-amu.fr'},

];

@Component({
  selector: 'app-liste-enseignant',
  templateUrl: './liste-enseignant.component.html',
  styleUrls: ['./liste-enseignant.component.scss']
})
export class ListeEnseignantComponent implements OnInit {

  $enseignants: Observable<Array<any>>;

  constructor(
    private enseignantsService: EnseignantsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
  }

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'icons'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void{
    this.$enseignants = this.enseignantsService.getEnseignants();
  }

  updateProfessor(data: any): void{
    const dialogRef = this.dialog.open(CreateEnseignantComponent, {
      width: '700px',
      maxWidth: '50%',
      data
    });
    dialogRef.afterClosed().subscribe(
      enseignant => {
        if (enseignant) {
          this.enseignantsService.updateEnseignants(enseignant.id, {
            firstName: enseignant.firstName,
            lastName: enseignant.lastName,
            email: enseignant.email
          }).subscribe(
            sect => {

            },
            error => {
              this.snackBar.open('Vous n\'avez pas l\'autorisation pour modifier un professeur', 'ok', { duration: 10000});
            },
            () => {
              this.refresh();
            }
          );
        }
      }
    );
  }

  createProfessor(): void{
    const dialogRef = this.dialog.open(CreateEnseignantComponent, {
      width: '700px',
      maxWidth: '50%',
    });
    dialogRef.afterClosed().subscribe(
      enseignant => {
        if (enseignant) {
          this.enseignantsService.createEnseignant({
            id: enseignant.id,
            firstName: enseignant.firstName,
            lastName: enseignant.lastName,
            email: enseignant.email
          }).subscribe(
            sect => {

            },
            error => {
              this.snackBar.open('Vous n\'avez pas l\'autorisation pour créer un professeur', 'ok', { duration: 10000});
            },
            () => {
              this.refresh();
            }
          );
        }
      }
    );
  }

  deleteProfessor(id: string): void{
    this.enseignantsService.deleteEnseignant(id).subscribe(
      sect => {

      },
      error => {
          this.snackBar.open('Vous n\'avez pas l\'autorisation pour supprimer un professeur', 'ok', { duration: 3000});
      },
      () => {
        this.refresh();
      }
    );

  }


}
