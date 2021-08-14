import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './Components/Student/Add-modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { AddPersonaComponent } from './Components/Person/add-persona/add-persona.component';
import { HomePersonComponent } from './Components/Person/homePerson/homePerson.component';
import { PersonlistComponent } from './Components/Person/personlist/personlist.component';
import { UpdateComponent } from './Components/Person/update/update.component';
import { PersonCardComponent } from './Components/Person/person-card/person-card.component';
import { NotificacionesComponent } from './Components/notificaciones/notificaciones.component';
import { IndexComponent } from './index/index.component';
import { HomeStudentComponent } from './Components/Student/home-student/home-student.component';
import { StudentListComponent } from './Components/Student/student-list/student-list.component';
import { StudentCardComponent } from './Components/Student/student-card/student-card.component';
import { UpdateModalComponent } from './Components/Student/update-modal/update-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPersonaComponent,
    HomePersonComponent,
    PersonlistComponent,
    UpdateComponent,
    PersonCardComponent,
    NotificacionesComponent,
    IndexComponent,
    HomeStudentComponent,
    StudentListComponent,
    StudentCardComponent, 
    ModalComponent, UpdateModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
