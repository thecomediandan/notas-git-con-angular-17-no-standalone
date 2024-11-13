import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() closeMobileMenu = new EventEmitter<boolean>();
  constructor(private sanitizer: DomSanitizer) {}

  getIcono(nombre: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.MyIcons[nombre]);
  }

  refreshMenu(numberLink: number): void {
    // Es para mantener el menu seleccionado visualmente
    this.activeLink = numberLink;
    // Es para cerrar el menu mobile
    this.closeMobileMenu.emit(true);
  }
}
