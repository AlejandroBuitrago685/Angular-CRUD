import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Persona/persona';
import { PersonaServiceService } from 'src/app/Persona/persona-service.service';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit {
  
  personas: Persona[] = [];

  constructor(private personaService:PersonaServiceService) {}
   
  ngOnInit(): void {

    this.personaService.ObtenerPersonas().subscribe(
      p => this.personas = p
    );
    (error:any) => {
      console.log(error);
    }

  }

  borrarPersona(){
    var confirmacion = confirm("¿Está seguro de que quiere borrar el usuario seleccionado?.");

    if(confirmacion){
        
    }
    else{
        console.log("Se ha cancelado el borrado.");
    }
  
  }

  

}
