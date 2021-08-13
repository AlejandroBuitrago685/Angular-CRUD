import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/Persona/Clases/persona';
import { PersonaServiceService } from 'src/app/Persona/Servicios/persona-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id = this._route.snapshot.paramMap.get('id_persona');

  usuario: Persona = new Persona();

  miFormulario = new FormGroup({
    user: new FormControl('', Validators.minLength(6)),
    surname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    url: new FormControl(),
    ce: new FormControl('', Validators.required),
    pe: new FormControl('', Validators.required),
    active: new FormControl('', Validators.required),
    cd: new FormControl('', Validators.required),
    td: new FormControl()
  });

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


  constructor(private _route: ActivatedRoute, private personService : PersonaServiceService, private router:Router) { }

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

  actualizar(){

    this.usuario.user = this.miFormulario.get('user')?.value;
    this.usuario.surname = this.miFormulario.get('surname')?.value;
    this.usuario.password = this.miFormulario.get('password')?.value;
    this.usuario.company_email = this.miFormulario.get('ce')?.value;
    this.usuario.personal_email = this.miFormulario.get('pe')?.value;
    this.usuario.city = this.miFormulario.get('city')?.value;
    this.usuario.imagen_url = this.miFormulario.get('url')?.value;
    this.usuario.created_date = this.miFormulario.get('cd')?.value;
    this.usuario.termination_date = this.miFormulario.get('td')?.value;
    this.usuario.active = this.miFormulario.get('active')?.value;


    this.personService.update(this.usuario).subscribe(
      p =>  this.personService.setNotificacion()
    );
    (error:any) => {
      console.log(error);
    }

  }

}
