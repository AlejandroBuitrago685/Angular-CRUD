import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/Persona/Clases/persona';
import { PersonaServiceService } from 'src/app/Persona/Servicios/persona-service.service';
import { notificacion } from '../../notificaciones/Clases/notificacion';
import { NotificacionesService } from '../../notificaciones/Servicios/notificaciones.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id = this._route.snapshot.paramMap.get('id_persona');

  usuario: Persona = new Persona();
  notificacion: notificacion = new notificacion();

  city:string = this.usuario.city;
  user:string = this.usuario.user;
  surname:string = this.usuario.surname;
  ce:string = this.usuario.company_email;
  pe:string = this.usuario.personal_email;
  cd:string = "";
  td:string = "";
  url:string = this.usuario.imagen_url;
  pass:string = this.usuario.password;
  active:boolean = false;

  miFormulario = new FormGroup({
    user: new FormControl(this.user, Validators.minLength(6)),
    surname: new FormControl(this.surname, Validators.required),
    password: new FormControl(this.pass, Validators.required),
    city: new FormControl(this.usuario.city, Validators.required),
    url: new FormControl(this.url),
    ce: new FormControl(this.ce, Validators.required),
    pe: new FormControl(this.pe, Validators.required),
    active: new FormControl(this.active, Validators.required),
    cd: new FormControl(this.cd, Validators.required),
    td: new FormControl(this.td)
  });

  constructor(private _route: ActivatedRoute, private personService : PersonaServiceService, private router:Router, private notifyService: NotificacionesService) { }

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

    var _user = this.usuario.user = this.miFormulario.get('user')?.value;
    this.usuario.surname = this.miFormulario.get('surname')?.value;
    this.usuario.password = this.miFormulario.get('password')?.value;
    this.usuario.company_email = this.miFormulario.get('ce')?.value;
    this.usuario.personal_email = this.miFormulario.get('pe')?.value;
    this.usuario.city = this.miFormulario.get('city')?.value;
    this.usuario.imagen_url = this.miFormulario.get('url')?.value;
    this.usuario.created_date = this.miFormulario.get('cd')?.value;
    this.usuario.termination_date = this.miFormulario.get('td')?.value;
    this.usuario.active = this.miFormulario.get('active')?.value;

    this.notificacion.titulo = "ACTUALIZACIÓN";
    this.notificacion.descripcion = "Se ha actualizado el usuario " + this.user + " recientemente.";
    this.notificacion.tipo = "update-notification";


    this.personService.update(this.usuario).subscribe(
      p =>  this.personService.setNotificacion()
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

  }

}
