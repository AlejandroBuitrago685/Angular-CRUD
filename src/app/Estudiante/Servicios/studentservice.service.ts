import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Clases/student';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  private RutaJSON = "http://localhost:3000/estudiante";
 

  constructor( private http:HttpClient) {}


  //Obtener estudiantes
  ObtenerEstudiantes():Observable<Student[]>{
    return this.http.get<Student[]>(this.RutaJSON);
  }

  //Crear nuev estudiante
  add(estudiante:Student):Observable<Student>{
    return this.http.post<Student>(this.RutaJSON,estudiante);
  }

  //Obtener un único estudiante
  get(id:string):Observable<Student>{
    return this.http.get<Student>(this.RutaJSON + '/' + id);
  }

  //Borrar estudiante
  delete(id:string):Observable<Student>{
    return this.http.delete<Student>(this.RutaJSON + '/' + id);
  }

  //Actualizar estudiante
  update(estudiante:Student):Observable<Student>{
    return this.http.put<Student>(this.RutaJSON, estudiante);
  }

}