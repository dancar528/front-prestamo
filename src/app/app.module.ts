import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { PrestamoService } from './prestamo.service';


@NgModule({
  declarations: [
    AppComponent,
    RegistroClienteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [PrestamoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
