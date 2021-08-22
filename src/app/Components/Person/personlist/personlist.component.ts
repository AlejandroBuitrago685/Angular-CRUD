import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Persona/Clases/persona';
import { PersonaServiceService } from 'src/app/Persona/Servicios/persona-service.service';
import { notificacion } from '../../notificaciones/Clases/notificacion';
import { NotificacionesService } from '../../notificaciones/Servicios/notificaciones.service';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit{
  
  personas: Persona[] = [];
  notificacion: notificacion = new notificacion();
  

  constructor(private personaService:PersonaServiceService, private notifyService: NotificacionesService ,private router:Router) {}
   
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
    this.notificacion.titulo = "ELIMINADO";
    this.notificacion.descripcion = "Se ha eliminado un usuario recientemente.";
    this.notificacion.tipo = "delete-notification";
    this.notificacion.hora = new Date().toString();

    console.log(id);
    
    if(confirmacion){
        this.personaService.delete(id).subscribe(
          resp => this.personaService.setNotificacion()
        );
        (error:any) => {
          console.log(error);
        }

        this.notifyService.add(this.notificacion).subscribe(
          res => console.log("Notificacion creada")
        );
        (error: any) => {
          console.log(error);
        }

        this.ngOnInit();
      
    }
    else{
        console.log("Se ha cancelado el borrado.");
    }
  
  }

  EditarPersona(persona: Persona) {
   console.log(persona); 
   let id = persona.id_persona;
   this.router.navigate(['/personupdate/' +id ])
  }

  BorrarPersona(persona: Persona) {
    console.log(persona); 
    let id = persona.id_persona;
    this.borrarPersona(id);
   }

  
  
}
