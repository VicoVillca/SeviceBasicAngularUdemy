import { Component, OnInit } from '@angular/core';
import { Persona } from './persona/persona.model';
import { PersonaService } from './service/pesona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'Manejo de Servicios';
  lista: Persona[] = [];
  constructor(private personas: PersonaService) {
    this.personas.mensaje.subscribe((mensaje:string)=>{
      console.log(mensaje);
    });
  }
  /**
   *
   componentes
   cabecero
   formulario
   ingreso
   egreso
   */
  ngOnInit(): void {
    this.lista = this.personas.personas;
  }
}
