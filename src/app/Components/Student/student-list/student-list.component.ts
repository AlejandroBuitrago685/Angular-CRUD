import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Student } from 'src/app/Estudiante/Clases/student';
import { StudentserviceService } from 'src/app/Estudiante/Servicios/studentservice.service';
import { PersonaServiceService } from 'src/app/Persona/Servicios/persona-service.service';
import { notificacion } from '../../notificaciones/Clases/notificacion';
import { NotificacionesService } from '../../notificaciones/Servicios/notificaciones.service';
import { UpdateComponent } from '../../Person/update/update.component';
import { ModalComponent } from '../Add-modal/modal.component';
import { UpdateModalComponent } from '../update-modal/update-modal.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {


  estudiantes : Student[] = [];
  notificacion: notificacion = new notificacion();

  constructor(private studentService:StudentserviceService, private personService: PersonaServiceService, private notifyService: NotificacionesService, private dialog: MatDialog) { }

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
    this.notificacion.titulo = "ELIMINADO";
    this.notificacion.descripcion = "Se ha eliminado un estudiante recientemente.";
    this.notificacion.tipo = "delete-notification";
    this.notificacion.hora = new Date().toString();

    console.log(id);
    
    if(confirmacion){
        this.studentService.delete(id).subscribe(
          resp => {this.personService.setNotificacion()
            this.estudiantes=this.estudiantes.filter(p => p.id_student != id)
          }
        );
        (error:any) => {
          console.log(error);
        }

        this.notifyService.add(this.notificacion).subscribe(
          res => console.log("Notificacion creada")
        );
        (error: any) => {
          console.log(error);
        }


        this.ngOnInit();
      
    }
    else{
        console.log("Se ha cancelado el borrado.");
    }
  
  }

  EditarEstudiante(estudiante: Student) {
    
    let id = estudiante.id_student;
    var title = "Editar estudiante";

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = estudiante;
    this.dialog.open(UpdateModalComponent, dialogConfig);
    console.log(estudiante); 

   }
 
   BorrarEstudiante(estudiante: Student) {
     console.log(estudiante); 
     let id = estudiante.id_student;
     this.borrarEstudiante(id);
    }

}
