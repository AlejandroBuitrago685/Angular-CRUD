import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { notificacion } from 'src/app/Components/notificaciones/Clases/notificacion';
import { Persona } from '../Clases/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {

  private ObtenerURL = "http://localhost:8080/v0/api/test/get";
  private ObtenerUnaURL = "http://localhost:8080/v0/api/test/id";
  private AñadirURL = "http://localhost:8080/v0/api/test/add";
  private BorrarURL = "http://localhost:8080/v0/api/test/delete";
  private ActualizarURL = "http://localhost:8080/v0/api/test/update";

  private RutaJSON = "http://localhost:3000/persona";
 

  constructor( private http:HttpClient, private router:Router) {}

  notificacion : notificacion = new notificacion();

  contador : any = localStorage.getItem("notificaciones");
  nombre:string;

  setNotificacion(){
    this.contador++;
    localStorage.setItem("notificaciones",this.contador.toString());
  }

  deleteNotificacion(){
    this.contador--;
    localStorage.setItem("notificaciones",this.contador.toString());
  }

  deleteAllNotificaciones(){
    this.contador = 0;
    localStorage.setItem("notificaciones",this.contador.toString());
  }

  //Obtener personas
  ObtenerPersonas():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.RutaJSON);
  }

  //Crear nueva persona
  add(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(this.RutaJSON,persona);
  }

  //Obtener una única persona
  get(id:string):Observable<Persona>{
    return this.http.get<Persona>(this.RutaJSON + '/' + id);
  }

  //Borrar Persona
  delete(id:string):Observable<Persona>{
    return this.http.delete<Persona>(this.RutaJSON + '/' + id);
  }

  //Actualizar persona
  update(persona:Persona):Observable<Persona>{
    return this.http.put<Persona>(this.RutaJSON, persona);
  }

}
