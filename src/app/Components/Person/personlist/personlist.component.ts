import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Persona/Clases/persona';
import { PersonaServiceService } from 'src/app/Persona/Servicios/persona-service.service';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit{
  
  personas: Persona[] = [];
  

  constructor(private personaService:PersonaServiceService,  private router:Router) {}
   
  ngOnInit(): void {

    this.personaService.ObtenerPersonas().subscribe(
      p => this.personas = p
    );
    (error:any) => {
      console.log(error);
    }
    
    //console.log(this.personas);
  }

  borrarPersona(id:string){
    var confirmacion = confirm("¿Está seguro de que quiere borrar el usuario seleccionado?.");

    console.log(id);
    
    if(confirmacion){
        this.personaService.delete(id).subscribe(
          resp => this.personaService.setNotificacion()
        );
        (error:any) => {
          console.log(error);
        }

        this.router.navigate(['person' +id ])
      
    }
    else{
        console.log("Se ha cancelado el borrado.");
    }
  
  }

  EditarPersona(persona: Persona) {
   console.log(persona); 
   let id = persona.id_persona;
   this.router.navigate(['/update/' +id ])
  }

  BorrarPersona(persona: Persona) {
    console.log(persona); 
    let id = persona.id_persona;
    this.borrarPersona(id);
   }
  
}
