import { mergeNsAndName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PersonaServiceService } from '../../Persona/Servicios/persona-service.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {
  
  nNotificaciones = localStorage.getItem("notificaciones");

  constructor(private servicioPersona : PersonaServiceService) { }

  ngOnInit(): void {

    //console.log(this.nNotificaciones);

  }
}
