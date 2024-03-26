import { Component } from '@angular/core';
import * as Icons from './../../assets/img/icons.json';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Iconos } from '../model/Icons.model';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  activeLink: number = 0;
  MyIcons: Iconos = Icons as any;
  constructor(private sanitizer: DomSanitizer) {}

  getIcono(nombre: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.MyIcons[nombre]);
  }
}
