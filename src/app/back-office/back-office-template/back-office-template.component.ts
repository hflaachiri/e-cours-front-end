import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-office-template',
  templateUrl: './back-office-template.component.html',
  styleUrls: ['./back-office-template.component.scss']
})
export class BackOfficeTemplateComponent implements OnInit {

  title = 'E-cours';
  links: Array<{ icon: string, link: string, label: string }> = [
    {
      icon: 'dashboard',
      link: '/back-office/dashboard',
      label: 'Tableau de bord',
    },
    {
      icon: 'menu_book',
      link: '/back-office/#',
      label: 'Cours',
    },
    {
      icon: 'question_answer',
      link: '/back-office/#',
      label: 'Forum',
    },
    {
      icon: 'school',
      link: '/back-office/#',
      label: 'Enseignants',
    },
    {
      icon: 'group',
      link: '/back-office/#',
      label: 'Etudiants',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
