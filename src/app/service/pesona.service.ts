import { EventEmitter } from '@angular/core';
import { Persona } from '../persona/persona.model';

export class PersonaService {
  personas: Persona[] = [
    new Persona('Juan', 'Maria'),
    new Persona('Grimmet', 'Mamani'),
  ];
  mensaje = new EventEmitter<string>();
  agregar(persona: Persona) {
    this.personas.push(persona);
  }

}
