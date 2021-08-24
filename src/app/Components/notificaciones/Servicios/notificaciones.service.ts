import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { notificacion } from '../Clases/notificacion';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  //private RutaJSON = "http://localhost:3000/notificacion";
  private RutaJSON = environment.NotifyUrl;

  constructor(private http:HttpClient, private router:Router) { }


  //Obtener notificaciones
  ObtenerNotificaciones():Observable<notificacion[]>{
    return this.http.get<notificacion[]>(this.RutaJSON);
  }

  //Crear nueva notificacion
  add(notificacion:notificacion):Observable<notificacion>{
    return this.http.post<notificacion>(this.RutaJSON,notificacion);
  }

  //Obtener una única notificacion
  get(id:string):Observable<notificacion>{
    return this.http.get<notificacion>(this.RutaJSON + '/' + id);
  }

  //Borrar notificacion
  delete(id:string):Observable<notificacion>{
    return this.http.delete<notificacion>(this.RutaJSON + '/' + id);
  }

  deleteAll():Observable<notificacion>{
    return this.http.delete<notificacion>(this.RutaJSON + '/');
  }

}
