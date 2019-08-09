import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import {EventComponent} from './event/event.component';
import { ListdemoComponent } from './listdemo/listdemo.component';
import { SajatpipePipe } from './listdemo/sajatpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    ListdemoComponent,
    SajatpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
