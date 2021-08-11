import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Persona/persona';
import { PersonaServiceService } from 'src/app/Persona/persona-service.service';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit{
  
  personas: Persona[] = [];
  Filas : number[] = [];
  

  constructor(private personaService:PersonaServiceService) {}
   
  ngOnInit(): void {

    this.personaService.ObtenerPersonas().subscribe(
      p => this.personas = p
    );
    (error:any) => {
      console.log(error);
    }
    
    //console.log(this.personas);
  }

  borrarPersona(fila:string){
    var confirmacion = confirm("¿Está seguro de que quiere borrar el usuario seleccionado?.");

    console.log(fila);
    
    if(confirmacion){
        this.personaService.delete(fila).subscribe(
          resp => console.log("Se ha borrado el usuario con ID: " + fila + " correctamente.")
        );
        (error:any) => {
          console.log(error);
        }

        window.location.reload();
      
    }
    else{
        console.log("Se ha cancelado el borrado.");
    }
  
  }

  recibirMensaje(persona: Persona[]){
    this.personas = persona;
    console.log(persona)
  }
  
}
