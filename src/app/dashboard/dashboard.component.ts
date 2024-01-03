import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { AppHeaderComponent } from "../app-header/app-header.component";
import { RouterModule, RouterOutlet } from '@angular/router';
import { MainBodyComponent } from '../main-body/main-body.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { CommonModule, NgIf } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [CommonModule, RouterOutlet, RouterModule, SidebarComponent, DashboardComponent, LoginComponent, RegisterComponent,AppHeaderComponent, NgIf]
})
export class DashboardComponent {

}
