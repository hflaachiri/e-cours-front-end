import { Component, OnInit } from '@angular/core';
import {Enseignant} from '../../core/models/enseignant';

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

  constructor() { }

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'icons'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

}
