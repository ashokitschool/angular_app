import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DashboardComponent, RouterModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[AccountService]
})
export class LoginComponent {

  constructor(private router:Router, private accountService: AccountService){
  }


  login(){
    
     this.router.navigate(['/dashboard'])//,{queryParams: {logged:true}}
     this.accountService.setAuthentication(true);
  }

}
