import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { AppHeaderComponent } from "../app-header/app-header.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [SidebarComponent, AppHeaderComponent, RouterModule]
})
export class DashboardComponent {

}
