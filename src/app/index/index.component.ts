import { Component, OnInit } from '@angular/core';
import { notificacion } from '../Components/notificaciones/Clases/notificacion';
import { NotificacionesService } from '../Components/notificaciones/Servicios/notificaciones.service';
import { PersonaServiceService } from '../Persona/Servicios/persona-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  notificaciones: notificacion[] = [];

  constructor(private notifyService: NotificacionesService, private personaservice:PersonaServiceService) { }

  ngOnInit(): void {

    this.notifyService.ObtenerNotificaciones().subscribe(
      p => this.notificaciones = p
    );
    (error:any) => {
      console.log(error);
    }

  }

  deleteNotify(id:string){
    var confirmacion = confirm("¿Está seguro de que quiere borrar la notificación?.");

    console.log(id);
    
    if(confirmacion){
        this.notifyService.delete(id).subscribe(
          resp => this.personaservice.deleteNotificacion()
        );
        (error:any) => {
          console.log(error);
        }

        this.ngOnInit();
      
    }
    else{
        console.log("Se ha cancelado el borrado.");
    }
  
  }

  borrarTodasNotificaciones(){
    this.personaservice.deleteAllNotificaciones();
    this.notifyService.deleteAll();
  }

  BorrarNotificaion(notificacion: notificacion){
    console.log(notificacion); 
    let id = notificacion.id;
    this.deleteNotify(id);
  }

}
