import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/Estudiante/Clases/student';
import { StudentserviceService } from 'src/app/Estudiante/Servicios/studentservice.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {


  @Input()
  estudiante: Student = new Student();

  @Output()
  edit : EventEmitter<Student> = new EventEmitter<Student>();

  @Output()
  delete : EventEmitter<Student> = new EventEmitter<Student>();

  constructor(private studentService:StudentserviceService) { }

  ngOnInit(): void {
  }

}
