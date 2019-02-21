import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StudentServicesService } from './student-services.service';
import { HttpClientModule } from '@angular/common/HTTP';
import { GettiingStudentsComponent } from './gettiing-students/gettiing-students.component';
import { GettingSTudentByIdComponent } from './getting-student-by-id/getting-student-by-id.component';
import { AddingStudentComponent } from './adding-student/adding-student.component';
import { UpdatingStudentComponent } from './updating-student/updating-student.component';
import { DeletingStudentComponent } from './deleting-student/deleting-student.component';
import  { AngularMaterialImportsModule } from './angular-material-imports/angular-material-imports.module';
import { ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    GettiingStudentsComponent,
    GettingSTudentByIdComponent,
    AddingStudentComponent,
    UpdatingStudentComponent,
    DeletingStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialImportsModule,
    ReactiveFormsModule
  ],
  providers: [StudentServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
