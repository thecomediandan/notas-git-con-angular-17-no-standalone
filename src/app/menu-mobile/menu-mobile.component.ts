import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.css'
})
export class MenuMobileComponent{
  isVisible: boolean = true;

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }
}
