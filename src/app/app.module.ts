import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColeccionDiscosModule } from './coleccion-discos/coleccion-discos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ColeccionDiscosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
