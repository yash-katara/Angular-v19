import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component : LoginComponent},

     { path : 'about', component: AboutComponent},
     {path: 'form', component: FormComponent},
    // {path:'about', loadChildren: () => import('./about/about.component').then(m => m.AboutComponent)},

    // {path: 'form', loadChildren: () => import('./form/form.component').then(m => m.FormComponent)},
];
