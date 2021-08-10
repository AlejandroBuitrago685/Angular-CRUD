import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddPersonaComponent } from './Components/add-persona/add-persona.component';
import { HomeComponent } from './Components/home/home.component';
import { PersonlistComponent } from './Components/personlist/personlist.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPersonaComponent,
    HomeComponent,
    PersonlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
