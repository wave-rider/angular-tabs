import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MySelectorComponent } from './my-selector/my-selector.component';
import { MyTabComponent } from './my-tab/my-tab.component';
import { MyTabListComponent } from './my-tab-list/my-tab-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MySelectorComponent,
    MyTabComponent,
    MyTabListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
