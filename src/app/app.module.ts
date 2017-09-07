import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SearchService} from './app.service';
import { HttpModule} from '@angular/http'; 

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ,HttpModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:[SearchService],
})
export class AppModule { }

