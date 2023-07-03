import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaveBarMainComponent } from './nave-bar-main/nave-bar-main.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    NaveBarMainComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
