import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/Persona/persona';
import { PersonaServiceService } from 'src/app/Persona/persona-service.service';
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

    /*this.personaService.ObtenerPersonas().subscribe(
      p => this.personas = p
    );
    (error:any) => {
      console.log(error);
    }

    //console.log(this.personas);
    this.enviar.emit(this.personas);*/
    
  }

}
