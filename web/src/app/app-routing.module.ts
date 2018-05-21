import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    { path: 'main', component: MainComponent},
    { path: 'user', component: UserComponent },
    { path: '**', redirectTo: 'main' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);