import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonaService } from './service/pesona.service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,    FormsModule,
    NgbModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
