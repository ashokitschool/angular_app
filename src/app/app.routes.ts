import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateCaseworkerComponent } from './create-caseworker/create-caseworker.component';
import { ViewCaseworkersComponent } from './view-caseworkers/view-caseworkers.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [

    {path: 'login', component:LoginComponent},
    {path: 'dashboard', component:DashboardComponent},    
    {path: 'sidebar', component:SidebarComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'dashboard/createcw', component:CreateCaseworkerComponent},
    {path: 'dashboard/viewcw', component:ViewCaseworkersComponent}

];
