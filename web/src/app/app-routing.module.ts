import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

import { UserComponent } from './component/user/user.component';
import { MainComponent } from './component/main/main.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    { path: '**', redirectTo: '', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);