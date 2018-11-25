import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './app-routing.module';
import { AuthGuard } from './guard/auth.guard';
import { TokenInterceptor } from './interceptors/token.interceptor';

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { SalaryService } from './services/salary.service';

import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { MainDashboardComponent } from './component/main-dashboard/main-dashboard.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { SalaryComponent } from './component/salary/salary.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MainComponent,
    MainDashboardComponent,
    LoginComponent,
    AdminDashboardComponent,
    SalaryComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NgbModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return '';
        }
      }
    })
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService,
    SalaryService,
    JwtHelperService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
