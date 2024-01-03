import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateCaseworkerComponent } from './create-caseworker/create-caseworker.component';
import { ViewCaseworkersComponent } from './view-caseworkers/view-caseworkers.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainBodyComponent } from './main-body/main-body.component';

export const routes: Routes = [

    {path: 'login', component:LoginComponent},   
    {path: 'sidebar', component:SidebarComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'mbcontent', component:MainBodyComponent},
    {path: 'dashboard', component:DashboardComponent},
    {path: 'createcw', component:CreateCaseworkerComponent},
    {path: 'dashboard/viewcw', component:ViewCaseworkersComponent},
    {path: '',redirectTo:'/login', pathMatch:'full'}
];
