import { Component } from '@angular/core';
import * as Icons from './../../assets/img/icons.json';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Iconos } from '../model/Icons.model';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.css'
})
export class MenuMobileComponent{
  isVisible: boolean = true;
  MyIcons: Iconos = Icons as any;
  constructor(private sanitizer: DomSanitizer) {}

  getIcono(nombre: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.MyIcons[nombre]);
  }
  
  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }
}
