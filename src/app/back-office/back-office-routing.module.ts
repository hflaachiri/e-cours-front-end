import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BackOfficeTemplateComponent} from './back-office-template/back-office-template.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: BackOfficeTemplateComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
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

