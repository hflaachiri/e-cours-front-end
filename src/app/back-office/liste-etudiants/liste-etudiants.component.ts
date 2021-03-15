import { Component, OnInit } from '@angular/core';
import {Etudiant} from '../../core/models/etudiant';

const ELEMENT_DATA: Etudiant[] = [
  {firstName: 'Jhon', lastName: 'DOE', email: 'john.doe@etu.univ-amu.fr'},
  {firstName: 'Jhon', lastName: 'DOE', email: 'john.doe@etu.univ-amu.fr'},
  {firstName: 'Jhon', lastName: 'DOE', email: 'john.doe@etu.univ-amu.fr'},
  {firstName: 'Jhon', lastName: 'DOE', email: 'john.doe@etu.univ-amu.fr'},
  {firstName: 'Jhon', lastName: 'DOE', email: 'john.doe@etu.univ-amu.fr'},
  {firstName: 'Jhon', lastName: 'DOE', email: 'john.doe@etu.univ-amu.fr'},
  {firstName: 'Jhon', lastName: 'DOE', email: 'john.doe@etu.univ-amu.fr'},
  {firstName: 'Jhon', lastName: 'DOE', email: 'john.doe@etu.univ-amu.fr'},
  {firstName: 'Jhon', lastName: 'DOE', email: 'john.doe@etu.univ-amu.fr'},
  {firstName: 'Jhon', lastName: 'DOE', email: 'john.doe@etu.univ-amu.fr'},
];

@Component({
  selector: 'app-liste-etudiants',
  templateUrl: './liste-etudiants.component.html',
  styleUrls: ['./liste-etudiants.component.scss']
})
export class ListeEtudiantsComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'icons'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

}
