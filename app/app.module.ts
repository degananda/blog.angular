import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ContentComponent } from './content.component';
import { FooterComponent } from './footer.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    ContentComponent,
    FooterComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
