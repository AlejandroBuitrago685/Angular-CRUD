import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../../Estudiante/Clases/student';
import { StudentserviceService } from '../../../Estudiante/Servicios/studentservice.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  estudiante: Student = new Student();

  miFormulario = new FormGroup({
    id_student: new FormControl('', Validators.required),
    id_persona: new FormControl('', Validators.required),
    num_hoursweek: new FormControl('', Validators.required),
    coments: new FormControl(),
    id_profesor: new FormControl(),
    branch: new FormControl()
  });

  constructor(private estudianteService:StudentserviceService) {}

  ngOnInit(): void {
  }

  CrearEstudiante(){
    this.estudiante.id_student = this.miFormulario.get('id_student')?.value;
    this.estudiante.id_persona = this.miFormulario.get('id_persona')?.value;
    this.estudiante.num_hoursweek = this.miFormulario.get('num_hoursweek')?.value;
    this.estudiante.coments = this.miFormulario.get('coments')?.value;
    this.estudiante.id_profesor = this.miFormulario.get('id_profesor')?.value;
    this.estudiante.branch = this.miFormulario.get('branch')?.value;
   
    this.estudianteService.add(this.estudiante).subscribe(
      res => this.estudianteService.setNotificacion(+1)
    );
    (error:any) => {
      console.log(error);
  }
  
    alert("El estudiante con ID: " + this.estudiante.id_student +" se ha creado correctamente.");
    
  }

}
