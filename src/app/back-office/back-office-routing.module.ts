import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BackOfficeTemplateComponent} from './back-office-template/back-office-template.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CoursComponent} from './cours/cours.component';
import {AfficherCoursComponent} from './afficher-cours/afficher-cours.component';
import {ListeEnseignantComponent} from './liste-enseignant/liste-enseignant.component';
import {ListeEtudiantsComponent} from './liste-etudiants/liste-etudiants.component';
import {ForumComponent} from './forum/forum.component';

const routes: Routes = [
  {
    path: '',
    component: BackOfficeTemplateComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'cours',
        component: CoursComponent
      },
      {
        path: 'show/:id',
        component: AfficherCoursComponent
      },
      {
        path: 'enseignants',
        component: ListeEnseignantComponent
      },
      {
        path: 'etudiants',
        component: ListeEtudiantsComponent
      },
      {
        path: 'forum',
        component: ForumComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule {
}

