import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Persona/persona';
import { PersonaServiceService } from 'src/app/Persona/persona-service.service';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent implements OnInit {

    personas: Persona[] = [];

    usuario: Persona = new Persona();
    
  

  constructor(private personaService:PersonaServiceService, private router:Router) { }
   
  ngOnInit(): void {


    this.personaService.ObtenerPersonas().subscribe(
      p => this.personas = p
    );
      (error:any) => {
        console.log(error);
    }
  }


  crearPersona(): void{

    console.log(this.usuario);
    this.personaService.add(this.usuario).subscribe(
      res => this.router.navigate([''])
    );
    (error:any) => {
      console.log(error);
  }

    alert("Usuario " + this.usuario.user +" creado correctamente.");
    this.router.navigate(['']);
    
  }


}
