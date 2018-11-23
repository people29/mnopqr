import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

import { UserComponent } from './component/user/user.component';
import { MainComponent } from './component/main/main.component';
import { LoginComponent } from './component/login/login.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { SalaryComponent } from './component/salary/salary.component';

const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: MainComponent },

    { path: 'admin/dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
    { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
    { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard] },
    { path: 'salary', component: SalaryComponent, canActivate: [AuthGuard] },

    { path: '**', redirectTo: '', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);