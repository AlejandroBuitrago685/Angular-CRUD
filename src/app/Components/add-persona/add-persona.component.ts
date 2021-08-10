import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Persona/persona';
import { PersonaServiceService } from 'src/app/Persona/persona-service.service';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private personaService:PersonaServiceService) { }
   
  ngOnInit(): void {


    this.personaService.ObtenerPersonas().subscribe(
      p => this.personas = p
    );
      (error:any) => {
        console.log(error);
    }
  }


}
