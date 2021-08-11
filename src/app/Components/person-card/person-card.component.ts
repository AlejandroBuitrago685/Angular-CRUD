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

  @Output()
  enviar: EventEmitter<Persona[]> = new EventEmitter<Persona[]>();

  @Input()
  personas: Persona[] = [];
  
  city:string = "";
  user:string = "";
  surname:string = "";
  ce:string = "";
  pe:string = "";
  cd:Date | undefined;
  td:Date | undefined;
  url:string = "";
  pass:string = "";
  active:boolean = false;

  constructor(private personaService:PersonaServiceService) { }

  ngOnInit(): void {

    this.personaService.ObtenerPersonas().subscribe(
      p => this.personas = p
    );
    (error:any) => {
      console.log(error);
    }

    //console.log(this.personas);
    this.enviar.emit(this.personas);
    
  }

  /*mandar(p: Persona[]){
    
    this.personas = p;
    console.log(this.personas);
    this.user = p[0].user;
    this.surname = p[1].surname;
    this.pass = p[2].password;
    this.ce = p[3].company_email;
    this.pe = p[4].personal_email;
    this.city = p[5].city;
    this.active = p[6].active;
    this.url = p[7].imagen_url;
    this.cd = p[8].created_date;
    this.td = p[9].termination_date;

    this.enviar.emit(this.personas);
    
  }*/

}
