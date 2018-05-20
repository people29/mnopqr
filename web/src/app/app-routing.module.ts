import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';

const routes: Routes = [
    { path: 'user', component: UserComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);