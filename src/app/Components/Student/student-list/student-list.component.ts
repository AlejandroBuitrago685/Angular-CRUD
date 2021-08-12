import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Estudiante/Clases/student';
import { StudentserviceService } from 'src/app/Estudiante/Servicios/studentservice.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {


  estudiantes : Student[] = [];

  constructor(private studentService:StudentserviceService) { }

  ngOnInit(): void {

    this.studentService.ObtenerEstudiantes().subscribe(
      e => this.estudiantes = e
    );
    (error:any) => {
      console.log(error);
    }

  }

  borrarEstudiante(id:string){
    var confirmacion = confirm("¿Está seguro de que quiere borrar el estudiante seleccionado?.");

    console.log(id);
    
    if(confirmacion){
        this.studentService.delete(id).subscribe(
          resp => this.studentService.setNotificacion(+1)
        );
        (error:any) => {
          console.log(error);
        }

        window.location.reload();
      
    }
    else{
        console.log("Se ha cancelado el borrado.");
    }
  
  }

  EditarEstudiante(estudiante: Student) {
    /*console.log(persona); 
    let id = persona.id_persona;
    this.router.navigate(['/update/' +id ])*/
   }
 
   BorrarEstudiante(estudiante: Student) {
     console.log(estudiante); 
     let id = estudiante.id_student;
     this.borrarEstudiante(id);
    }

}
