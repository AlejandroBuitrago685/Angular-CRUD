import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonaComponent } from './Components/add-persona/add-persona.component';
import { HomeComponent } from './Components/home/home.component';
import { UpdateComponent } from './Components/update/update.component';

const routes: Routes = [
  { path: 'add', component: AddPersonaComponent },
  { path: '', component: HomeComponent },
  { path: 'update/:id_persona', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



