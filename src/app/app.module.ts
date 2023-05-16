import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponentTsComponent } from './server/server.component.ts/server.component.ts.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponentTsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
