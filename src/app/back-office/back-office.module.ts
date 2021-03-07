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
import { CoursComponent } from './cours/cours.component';
import {MatCardModule} from '@angular/material/card';
import { AfficherCoursComponent } from './afficher-cours/afficher-cours.component';


@NgModule({
  declarations: [DashboardComponent, BackOfficeTemplateComponent, CoursComponent, AfficherCoursComponent],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class BackOfficeModule { }
