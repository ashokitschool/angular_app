import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { AppHeaderComponent } from './app-header/app-header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RouterModule, SidebarComponent, DashboardComponent, LoginComponent, RegisterComponent,AppHeaderComponent, NgIf]
})
export class AppComponent {
  logged = true;
  title = 'app8';
  constructor( private route: ActivatedRoute ){
   console.log( this.route.queryParamMap.subscribe((val:any) =>{this.logged =val['params'].logged}))
  }

}
