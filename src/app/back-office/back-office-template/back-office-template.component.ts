import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../authentication/services/authentication.service';
import {Router} from '@angular/router';

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
      link: '/back-office/cours',
      label: 'Cours',
    },
    {
      icon: 'question_answer',
      link: '/back-office/forum',
      label: 'Forum',
    },
    {
      icon: 'school',
      link: '/back-office/enseignants',
      label: 'Enseignants',
    },
    {
      icon: 'group',
      link: '/back-office/etudiants',
      label: 'Etudiants',
    },
    {
      icon: 'settings',
      link: '/back-office/espace-profs',
      label: 'Espace des enseignants',
    }
  ];

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl('auth/login').then();
  }
}
