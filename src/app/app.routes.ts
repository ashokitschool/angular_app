import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateCaseworkerComponent } from './create-caseworker/create-caseworker.component';
import { ViewCaseworkersComponent } from './view-caseworkers/view-caseworkers.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'authenticate', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'', redirectTo:'/authenticate', pathMatch:'full'},
    {path:'', component:DashboardComponent,
        children:[
            {path: 'dashboard', component:MainBodyComponent},
            {path: 'dashboard/viewcw', component:ViewCaseworkersComponent},
            {path: 'createcw', component:CreateCaseworkerComponent},
        ]
    }
    
];
