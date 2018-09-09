import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

import { UserComponent } from './component/user/user.component';
import { MainComponent } from './component/main/main.component';
import { LoginComponent } from './component/login/login.component';
import { AdminMainComponent } from './component/admin-main/admin-main.component';

const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'login', component: LoginComponent },
    { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
    { path: 'admin', component: AdminMainComponent, },

    { path: '**', redirectTo: '', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);