import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { NotificacionesComponent } from 'src/app/Components/notificaciones/notificaciones.component';
import { Persona } from 'src/app/Persona/Clases/persona';
import { PersonaServiceService } from 'src/app/Persona/Servicios/persona-service.service';
import { notificacion } from '../../notificaciones/Clases/notificacion';
import { NotificacionesService } from '../../notificaciones/Servicios/notificaciones.service';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent implements OnInit {

  personas: Persona[] = [];
  notificacion: notificacion = new notificacion();


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

  constructor(private personaService: PersonaServiceService, private notifyService: NotificacionesService, private router: Router) { }

  ngOnInit(): void {

    this.personaService.ObtenerPersonas().subscribe(
      p => this.personas = p
    );
    (error: any) => {
      console.log(error);
    }
  }

  crearPersona(): void {

    var user_ = this.usuario.user = this.miFormulario.get('user')?.value;
    this.usuario.surname = this.miFormulario.get('surname')?.value;
    this.usuario.password = this.miFormulario.get('password')?.value;
    this.usuario.company_email = this.miFormulario.get('ce')?.value;
    this.usuario.personal_email = this.miFormulario.get('pe')?.value;
    this.usuario.city = this.miFormulario.get('city')?.value;
    this.usuario.imagen_url = this.miFormulario.get('url')?.value;
    this.usuario.created_date = this.miFormulario.get('cd')?.value;
    this.usuario.termination_date = this.miFormulario.get('td')?.value;
    this.usuario.active = this.miFormulario.get('active')?.value;

    this.notificacion.titulo = "CREACIÓN";
    this.notificacion.descripcion = "Se ha creado el usuario " + user_ + " recientemente.";
    this.notificacion.tipo = "add-notification";
    this.notificacion.hora = new Date().toString();

    //console.log(this.usuario);
    this.personaService.add(this.usuario).subscribe(
      res => this.personaService.setNotificacion()
    );
    (error: any) => {
      console.log(error);
    }

    this.notifyService.add(this.notificacion).subscribe(
      res => console.log("Notificacion creada")
    );
    (error: any) => {
      console.log(error);
    }

    alert("Usuario " + this.usuario.user + " creado correctamente.");
    this.router.navigate(['person']);

  }
}