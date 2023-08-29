import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecordCollectionModule } from './record-collection/record-collection.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RecordCollectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
