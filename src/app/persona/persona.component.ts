import { Component, EventEmitter, Input} from '@angular/core';
import { PersonaService } from '../service/pesona.service';
import { Persona } from './persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent {
  @Input() item!: Persona;
  @Input() index!: number;

  constructor(public personaService:PersonaService){}
  editar(){
    this.personaService.mensaje.emit("Seleccionamos: "+this.index );
  }
}
