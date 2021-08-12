import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonaComponent } from './Components/Person/add-persona/add-persona.component';
import { HomePersonComponent } from './Components/Person/homePerson/homePerson.component';
import { UpdateComponent } from './Components/Person/update/update.component';
import { HomeStudentComponent } from './Components/Student/home-student/home-student.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', component:  IndexComponent},
  { path: 'person', component: HomePersonComponent },
  { path: 'personadd', component: AddPersonaComponent },
  { path: 'student', component: HomeStudentComponent },
  { path: 'personupdate/:id_persona', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



