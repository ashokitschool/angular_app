import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AccountService } from './account.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RouterModule, SidebarComponent, DashboardComponent, LoginComponent, RegisterComponent,AppHeaderComponent, NgIf],
    providers:[AccountService]
})
export class AppComponent implements OnInit{
  logged = true;
  title = 'app8';
  constructor( private route: ActivatedRoute, private accountService: AccountService ){
    this.onLogin()
   console.log( this.route.queryParamMap.subscribe((val:any) =>{this.logged =val['params'].logged}))
  }

  ngOnInit() {
    this.onLogin();
  }

  onLogin(){
    debugger
    this.accountService.authenticate().subscribe(res =>{ console.log(res)})
  }

}
