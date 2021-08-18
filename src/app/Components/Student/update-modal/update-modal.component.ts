import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/Estudiante/Clases/student';
import { StudentserviceService } from 'src/app/Estudiante/Servicios/studentservice.service';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonaServiceService } from 'src/app/Persona/Servicios/persona-service.service';


@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent implements OnInit {

  estudiante: Student = new Student();
  id_estudiante = this.data.id_student;
  id_persona = this.data.id_persona;
  id_profesor = this.data.id_profesor;
  branch = this.data.branch;
  horas = this.data.num_hoursweek;
  comentarios = this.data.coments;

  miFormulario = new FormGroup({
    id_student: new FormControl(this.id_estudiante, Validators.required),
    id_persona: new FormControl(this.id_persona, Validators.required),
    num_hoursweek: new FormControl(this.horas, Validators.required),
    coments: new FormControl(this.comentarios),
    id_profesor: new FormControl(this.id_profesor),
    branch: new FormControl(this.branch)
  });

  constructor(private studentService:StudentserviceService, private personService: PersonaServiceService,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  EditarEstudiante(){

    var id = this.estudiante.id_student = this.miFormulario.get('id_student')?.value;
    this.estudiante.id_persona = this.miFormulario.get('id_persona')?.value;
    this.estudiante.num_hoursweek = this.miFormulario.get('num_hoursweek')?.value;
    this.estudiante.coments = this.miFormulario.get('coments')?.value;
    this.estudiante.id_profesor = this.miFormulario.get('id_profesor')?.value;
    this.estudiante.branch = this.miFormulario.get('branch')?.value;
  
    this.studentService.update(id).subscribe(
      res => this.personService.setNotificacion()
    );
    (error:any) => {
      console.log(error);
    }

    alert("Usuario actualizado correctamente.");
  }
}

