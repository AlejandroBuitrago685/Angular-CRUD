import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/Persona/persona';
import { PersonaServiceService } from 'src/app/Persona/persona-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id = this._route.snapshot.paramMap.get('id_persona');

  city:string = "";
  user:string = "";
  surname:string = "";
  ce:string = "";
  pe:string = "";
  cd:string = "";
  td:string = "";
  url:string = "";
  pass:string = "";
  active:boolean = false;


  constructor(private _route: ActivatedRoute, private personService : PersonaServiceService) { }

  ngOnInit(): void {

    //console.log(this.id);

    if(this.id == null){

    }else{
      this.personService.get(this.id).subscribe(
      p => this.cargarDatos(p)
      );
      (error:any) => {
        console.log(error);
      }
      
    }

  }

  cargarDatos(this: any, p:Persona) {
    this.city = p.city;
    this.user = p.user;
    this.surname = p.surname;
    this.acttive = p.active;
    this.ce = p.company_email;
    this.pe = p.personal_email;
    this.pass = p.password;
    this.cd = p.created_date;
    this.td = p.termination_date;
    this.url = p.imagen_url;
  }

}
