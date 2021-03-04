import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BackOfficeTemplateComponent} from './back-office-template/back-office-template.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {BackOfficeRoutingModule} from './back-office-routing.module';


@NgModule({
  declarations: [DashboardComponent, BackOfficeTemplateComponent],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class BackOfficeModule { }
