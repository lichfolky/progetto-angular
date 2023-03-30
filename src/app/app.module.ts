import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ivztoz8Component } from './ivztoz8/ivztoz8.component';

@NgModule({
  declarations: [
    AppComponent,
    Ivztoz8Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
