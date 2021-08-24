import { mergeNsAndName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaServiceService } from '../../Persona/Servicios/persona-service.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {
  
  nNotificaciones;

  constructor(private servicioPersona : PersonaServiceService,private  router:Router) { }

  ngOnInit(): void {
    //console.log(this.nNotificaciones);
    this.nNotificaciones = localStorage.getItem("notificaciones") || "0";

  }

}
