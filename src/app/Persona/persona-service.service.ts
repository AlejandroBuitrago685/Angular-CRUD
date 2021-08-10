import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {

  private ObtenerURL = "http://localhost:8080/v0/api/test/get";
  private AñadirURL = "http://localhost:8080/v0/api/test/add";
  private BorrarURL = "http://localhost:8080/v0/api/test/delete";
  private ActualizarURL = "http://localhost:8080/v0/api/test/update";

  constructor( private http:HttpClient) {}

  //Obtener personas
  ObtenerPersonas():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.ObtenerURL);
  }

  //Crear nueva persona
  add(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(this.AñadirURL,persona);
  }

  //Obtener una única persona
  get(id:string):Observable<Persona>{
    return this.http.get<Persona>(this.ObtenerURL + '/' + id);
  }

  //Borrar Persona
  delete(id:string):Observable<Persona>{
    return this.http.delete<Persona>(this.BorrarURL + '/' + id);
  }

  //Actualizar persona
  update(persona:Persona):Observable<Persona>{
    return this.http.put<Persona>(this.ActualizarURL, persona);

  }

}
