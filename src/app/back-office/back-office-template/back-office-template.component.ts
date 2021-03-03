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
      icon: 'group',
      link: '/back-office/sous-traitant/list',
      label: 'Sous-Traitants',
    },
    {
      icon: 'star_rate',
      link: '/back-office/evaluation/list',
      label: 'Évaluation',
    },
    {
      icon: 'search',
      link: '/back-office/recherche-avance',
      label: 'Recherche Avancé',
    },
    {
      icon: 'build',
      link: '/back-office/gestion-des-comptes',
      label: 'Gestion des comptes',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
