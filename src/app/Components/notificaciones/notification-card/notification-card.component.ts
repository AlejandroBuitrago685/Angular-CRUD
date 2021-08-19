import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { notificacion } from '../Clases/notificacion';
import { NotificacionesService } from '../Servicios/notificaciones.service';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.css']
})
export class NotificationCardComponent implements OnInit {

  tipo:string = "";

  @Input()
  notificacion: notificacion = new notificacion();

  @Output()
  delete : EventEmitter<notificacion> = new EventEmitter<notificacion>();

  constructor(private notifyService: NotificacionesService) { }

  ngOnInit(): void {

  }




}
