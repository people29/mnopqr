import { ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UserComponent } from "./component/user/user.component";
import { MainComponent } from "./component/main/main.component";

const routes: Routes = [
    { path: "", component: MainComponent},
    { path: "user", component: UserComponent },
    { path: "**", redirectTo: "", pathMatch: "full" },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);