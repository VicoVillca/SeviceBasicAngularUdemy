import { Component, Output, EventEmitter } from '@angular/core';
import { Persona } from '../persona/persona.model';
import { PersonaService } from '../service/pesona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  nombre: string = '';
  apellido: string = '';

  //@Output('persona') persona = new EventEmitter();
  constructor(public personas:PersonaService){}
  agregar() {
    console.log('Agregamos');
    //this.persona.emit(new Persona(this.nombre, this.apellido));
    this.personas.agregar(new Persona(this.nombre, this.apellido));
    this.nombre = '';
    this.apellido = '';
  }
}
