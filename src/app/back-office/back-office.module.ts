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
import {CoursComponent} from './cours/cours.component';
import {MatCardModule} from '@angular/material/card';
import {AfficherCoursComponent} from './afficher-cours/afficher-cours.component';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {ListeEnseignantComponent} from './liste-enseignant/liste-enseignant.component';
import {ListeEtudiantsComponent} from './liste-etudiants/liste-etudiants.component';
import {ForumComponent} from './forum/forum.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {ReactiveFormsModule} from '@angular/forms';
import { CreateEnseignantComponent } from './create-enseignant/create-enseignant.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CreateStudentComponent } from './create-student/create-student.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { EspaceProfsComponent } from './espace-profs/espace-profs.component';
import { CreateLessonComponent } from './create-lesson/create-lesson.component';
import { ForumCoursComponent } from './forum-cours/forum-cours.component';
import {CoreModule} from '../core/core.module';


@NgModule({
  declarations: [
    DashboardComponent,
    BackOfficeTemplateComponent,
    CoursComponent,
    AfficherCoursComponent,
    ListeEnseignantComponent,
    ListeEtudiantsComponent,
    ForumComponent,
    CreateEnseignantComponent,
    CreateStudentComponent,
    EspaceProfsComponent,
    CreateLessonComponent,
    ForumCoursComponent],
    imports: [
        CommonModule,
        BackOfficeRoutingModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatOptionModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatInputModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        CoreModule
    ]
})
export class BackOfficeModule {
}
