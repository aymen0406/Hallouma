import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { AlaaComponent } from './alaa/alaa.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnoncesComponent,
    AlaaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
