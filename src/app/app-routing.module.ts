import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonaComponent } from './Components/add-persona/add-persona.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: 'add', component: AddPersonaComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



