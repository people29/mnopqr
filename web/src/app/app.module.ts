import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { MainComponent } from './component/main/main.component';

import { routing } from './app-routing.module';
import { MainDashboardComponent } from './component/main-dashboard/main-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MainComponent,
    MainDashboardComponent,
  ],
  imports: [
    BrowserModule, routing, HttpClientModule, HttpModule, FormsModule, ReactiveFormsModule,
    MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatCheckboxModule,
    BrowserAnimationsModule, NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
