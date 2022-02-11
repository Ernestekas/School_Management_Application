import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { SchoolsComponent } from './components/schools/schools.component';
import { StudentsComponent } from './components/students/students.component';
import { FormsModule } from '@angular/forms';
import { ListSchoolsComponent } from './components/schools/list-schools/list-schools.component';
import { CreateSchoolComponent } from './components/schools/create-school/create-school.component';
import { ListStudentsComponent } from './components/students/list-students/list-students.component';
import { CreateStudentComponent } from './components/students/create-student/create-student.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    SchoolsComponent,
    StudentsComponent,
    ListSchoolsComponent,
    CreateSchoolComponent,
    ListStudentsComponent,
    CreateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
