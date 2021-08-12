import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/Persona/Clases/persona';
import { PersonaServiceService } from 'src/app/Persona/Servicios/persona-service.service';
import { PersonlistComponent } from '../personlist/personlist.component';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {

  @Input()
  persona: Persona = new Persona();

  @Output()
  edit : EventEmitter<Persona> = new EventEmitter<Persona>();

  @Output()
  delete : EventEmitter<Persona> = new EventEmitter<Persona>();
  

  constructor(private personaService:PersonaServiceService) { }

  ngOnInit(): void {
    
  }

}
