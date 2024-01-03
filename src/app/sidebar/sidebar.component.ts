import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  selectedIndex = '0';
  value = '0';
  el = document.getElementById("sidebarlist li");
  constructor(private router: Router){
    console.log('console', this.el)
  }

  setActiveClass(index: any){
    debugger
    this.selectedIndex = index;
    const element = document.getElementById("sidebarlist")

  }

}
