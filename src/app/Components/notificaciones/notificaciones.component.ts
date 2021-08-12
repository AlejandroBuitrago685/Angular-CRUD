import { Component, OnInit } from '@angular/core';
import { PersonaServiceService } from '../../Persona/Servicios/persona-service.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {
  
  nNotificaciones: number = 0;

  constructor(private servicioPersona : PersonaServiceService) { }

  ngOnInit(): void {
    this.servicioPersona.notificacion.subscribe(
      p => this.nNotificaciones = p
    );
  }
}
