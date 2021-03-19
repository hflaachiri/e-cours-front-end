import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthenticationTemplateComponent} from './authentication-template/authentication-template.component';
import {NewAccountComponent} from './new-account/new-account.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationTemplateComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'new-account',
        component: NewAccountComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {
}
