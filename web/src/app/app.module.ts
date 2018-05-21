import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MainComponent } from './main/main.component';

import { routing } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MainComponent
  ],
  imports: [
    BrowserModule, routing, HttpClientModule, HttpModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
